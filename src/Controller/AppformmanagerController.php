<?php
namespace Drupal\appformmanager\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
// use Drupal\user\UserAuth;
use Drupal\mail_login\AuthDecorator as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Connection;
use Drupal\query_ajax\Services\InsertUpdate;
use Query\Repositories\Utility as QueryUtility;
use Drupal\domain\DomainElementManager;
use Drupal\appformmanager\Appformmanager;

/**
 * Returns responses for AppFormManager routes.
 */
class AppformmanagerController extends ControllerBase {

  protected $UserAuth;

  protected $Connection;

  protected $InsertUpdate;

  protected $DomainElementManager;

  public function __construct(UserAuth $UserAuth, Connection $Connection, InsertUpdate $InsertUpdate, DomainElementManager $DomainElementManager) {
    $this->UserAuth = $UserAuth;
    $this->Connection = $Connection;
    $this->InsertUpdate = $InsertUpdate;
    $this->DomainElementManager = $DomainElementManager;
  }

  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('user.auth'), $container->get('database'), $container->get('query_ajax.insert_update'), $container->get('domain.element_manager'));
  }

  /**
   * Builds the response.
   */
  public function build() {
    $configs = [
      '#type' => "html_tag",
      '#tag' => 'section',
      '#value' => 'Travaux de renovations',
      '#attributes' => [
        'id' => 'app'
      ]
    ];
    $configs['#attached']['library'][] = 'appformmanager/app_form';
    return $configs;
  }

  /**
   * Builds the response.
   */
  public function manager() {
    $configs = [
      '#type' => "html_tag",
      '#tag' => 'section',
      '#value' => 'Travaux de renovations',
      '#attributes' => [
        'id' => 'app'
      ]
    ];
    $configs['#attached']['library'][] = 'appformmanager/manager';
    return $configs;
  }

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\Core\Controller\ControllerBase::currentUser()
   */
  public function currentUser() {
    $id = \Drupal::currentUser()->id();
    if ($id) {
      $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
      $serializer = \Drupal::service('serializer');
      $data = $serializer->serialize($user, 'json', [
        'plugin_id' => 'entity'
      ]);
    } else {
      $data = $id;
    }
    return $this->reponse($data);
  }

  /**
   * Recupere les informations d'un utilisateur à partir de son nom utilisateur
   * ou email.
   */
  public function getUser(Request $Request) {
    $code = 401;
    $msg = "Votre login ou mot de passe est invalide";
    $content = $Request->getContent();
    $content = Json::decode($content);
    $password = ! empty($content['password']) ? $content['password'][0]['value'] : null;
    $login = ! empty($content['name']) ? $content['name'][0]['value'] : null;
    // if(! empty( $login )){
    // $user = $this->loadByMailOrLogin( $login );
    // if(! $user){
    // $msg = "Erreur sur les informations d'identification";
    // return $this->reponse( $content, $code, $msg );
    // }
    // $serializer = \Drupal::service( 'serializer' );
    // $data = $serializer->serialize( $user, 'json', [
    // 'plugin_id'=> 'entity'
    // ] );
    // return $this->reponse( $data );
    // }
    if ($uid = $this->authentification($login, $password)) {
      $user = \Drupal\user\Entity\User::load($uid);
      user_login_finalize($user);
      $serializer = \Drupal::service('serializer');
      $data = $serializer->serialize($user, 'json', [
        'plugin_id' => 'entity'
      ]);
      return $this->reponse($data);
    }
    return $this->reponse($content, $code, $msg);
  }

  /**
   *
   * @param int $step
   * @param Request $Request
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  function getFormsSteps($step, Request $Request) {
    $body = JSON::decode($Request->getContent());
    $formId = isset($body['formId']) ? $body['formId'] : null;
    // $formId = 13;
    $nbreSteps = 10;
    try {
      $param = " select f.id,f.name,f.description, st.info, st.states, stf.defaultjson,stf.stepid,stf.label, af.jsonfield from `appformmanager_fomrs` as f ";
      $param .= " inner join appformmanager_steps as st ON st.formid = f.id ";
      $param .= " inner join appformmanager_steps_fields as stf ON (stf.formid = f.id and st.stepid = stf.stepid) ";
      $param .= " left join appformmanager_fields as af ON (af.formid = f.id and af.machine_name = stf.machine_name) ";
      $param .= " where f.id='" . $formId . "' and st.stepid>='" . $step * $nbreSteps . "' and st.stepid<'" . ($nbreSteps + $nbreSteps * $step) . "'";
      $param .= " order by st.stepid ASC ";
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      $configs = $this->retrieveDatas($configs);
    } catch (\Exception $e) {
      return $this->reponse($e->getTrace(), $e->getCode(), $e->getMessage());
    }
    return $this->reponse($configs);
  }

  /**
   * Recupere un devis plus sa premiere etape.
   */
  function getDevis($pagination, $perpage, Request $Request) {
    $body = JSON::decode($Request->getContent());
    try {
      $param = " select dv.price, dv.status, dv.domaineid, dv.created, dv.uid, dv.id, st.step, f.name from `appformmanager_datas` as dv ";
      $param .= " inner join appformmanager_datas_steps as st ON st.datasid = dv.id ";
      $param .= " inner join appformmanager_fomrs as f ON f.id = dv.appformmanager_forms ";
      // $param .= " where dv.appformmanager_forms='" . $formId . "' and st.order='0' and dv.domaineid = '" . $activeDomaine . "' ";
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      Appformmanager::AddFilterByDomain($filters, "domaineid", "dv");
      $param .= " where ";
      $param .= QueryUtility::buildFilterSql($filters);
      $param .= " order by dv.id DESC limit " . $perpage . " OFFSET " . $pagination * $perpage;
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      $this->retrieveDevis($configs);
    } catch (\Exception $e) {
      return $this->reponse($e->getMessage(), 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   * Recupere un devis plus sa premiere etape.
   */
  function getDevisOwn($pagination, $perpage, Request $Request) {
    $body = JSON::decode($Request->getContent());
    try {
      $param = " select dv.price, dv.status, dv.domaineid, dv.created, dv.uid, dv.id, st.step, f.name from `appformmanager_datas` as dv ";
      $param .= " inner join appformmanager_datas_steps as st ON st.datasid = dv.id ";
      $param .= " inner join appformmanager_fomrs as f ON f.id = dv.appformmanager_forms ";
      // $param .= " where dv.appformmanager_forms='" . $formId . "' and st.order='0' and dv.domaineid = '" . $activeDomaine . "' ";
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      Appformmanager::AddFilterByDomainOwn($filters, "domaineid", "dv");
      $param .= " where ";
      $param .= QueryUtility::buildFilterSql($filters);
      $param .= " order by dv.id DESC limit " . $perpage . " OFFSET " . $pagination * $perpage;
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      $this->retrieveDevis($configs);
    } catch (\Exception $e) {
      return $this->reponse($e->getMessage(), 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   * Recupere les etapes de devis de maniere progressive.
   */
  function getDevisSteps($step, Request $Request) {
    $body = JSON::decode($Request->getContent());
    $DevisId = isset($body['DevisId']) ? $body['DevisId'] : null;
    try {
      $param = " select * from `appformmanager_datas_steps` as dv ";
      $param .= " where dv.datasid='" . $DevisId . "' and dv.order > 0 ";
      $param .= " order by dv.order ASC ";
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      if (! empty($configs)) {
        foreach ($configs as $k => $row) {
          $configs[$k]['step'] = JSON::decode($row['step']);
        }
      }
    } catch (\Exception $e) {
      return $this->reponse($param, 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   * Permet à un administrateur de voir tous les devis d'un domain.
   *
   * @param Request $Request
   */
  function CountDevis(Request $Request) {
    try {
      $body = JSON::decode($Request->getContent());
      if (! empty($body['beginSql']))
        $param = $body['beginSql'];
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      Appformmanager::AddFilterByDomain($filters);
      $filtersString = QueryUtility::buildFilterSql($filters);
      if (! empty($filtersString)) {
        $param .= " where ";
        $param .= $filtersString;
      }
      if (! empty($body['endSql'])) {
        $param .= $body['endSql'];
      }
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
    } catch (\Exception $e) {
      return $this->reponse($param, 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   * Cette route est diponible auniquement pour une route et un admin bien defini
   *
   * @param Request $Request
   */
  function CountDevisOwn(Request $Request) {
    try {
      $body = JSON::decode($Request->getContent());
      if (! empty($body['beginSql']))
        $param = $body['beginSql'];
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      Appformmanager::AddFilterByDomainOwn($filters);
      $filtersString = QueryUtility::buildFilterSql($filters);
      if (! empty($filtersString)) {
        $param .= " where ";
        $param .= $filtersString;
      }
      if (! empty($body['endSql'])) {
        $param .= $body['endSql'];
      }
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
    } catch (\Exception $e) {
      return $this->reponse($param, 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   *
   * @param array $devis
   */
  protected function retrieveDevis(array &$devis) {
    foreach ($devis as $k => $dev) {
      $devis[$k]['datas'] = [
        JSON::decode($dev['step'])
      ];
    }
  }

  function SaveSoumissions(Request $Request) {
    $payLoad = JSON::decode($Request->getContent());
    foreach ($payLoad as $key => $table) {
      /**
       * On ajoute les informations du domaine actif;
       */
      if ($table['table'] == "appformmanager_datas") {
        $payLoad[$key]['fields']['domaineid'] = Appformmanager::getActiveDomain();
      }
    }
    $configs = $this->InsertUpdate->buildInserts($payLoad);
    return $this->reponse($configs, $this->InsertUpdate->AjaxStatus->getCode(), $this->InsertUpdate->AjaxStatus->getMessage());
  }

  protected function retrieveDatas(array $fields) {
    $results = [];
    foreach ($fields as $field) {
      if (empty($results[$field['stepid']])) {
        $results[$field['stepid']] = $field;
        $results[$field['stepid']]['step'] = [
          'info' => Json::decode($field['info']),
          'states' => Json::decode($field['states']),
          'fields' => []
        ];

        $this->overrideField($results[$field['stepid']]['step']['fields'], $field);
      } else {
        $this->overrideField($results[$field['stepid']]['step']['fields'], $field);
      }
      // suppression des champs non utile, (reduction de labande passante)
      unset($results[$field['stepid']]['info']);
      unset($results[$field['stepid']]['states']);
      unset($results[$field['stepid']]['defaultjson']);
    }
    // on transforme le resultat en tableau.
    $resultsArray = [];
    foreach ($results as $result) {
      $resultsArray[] = $result;
    }
    return $resultsArray;
  }

  /**
   *
   * @param array $fields
   * @param array $field
   */
  protected function overrideField(array &$fields, array $field) {
    if ($field['jsonfield']) {
      $jsonfield = Json::decode($field['jsonfield']);
      // On ajoute la clee de surcharge.
      $jsonfield['override'] = [
        'type' => 'default', // type de surcharge.
        'label' => $jsonfield['label'] // permet de verifier si le label est
                                       // surchargé.
      ];
      // on verifie si un label est definit, on le surchage directement.
      if (! empty($field['label'])) {
        $jsonfield['label'] = $field['label'];
      }
      $fields[] = $jsonfield;
    } else {
      $jsonfield = Json::decode($field['defaultjson']);
      $fields[] = $jsonfield;
    }
  }

  /**
   *
   * @param string $mail
   * @return mixed|boolean
   */
  protected function loadByMailOrLogin($mail) {
    // https://www.drupal.org/node/2214507
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
      'mail' => $mail
    ]);
    if ($users)
      return reset($users);
    //
    $users = \Drupal::entityTypeManager()->getStorage('user')->loadByProperties([
      'name' => $mail
    ]);
    if ($users)
      return reset($users);
    return FALSE;
  }

  /**
   * Retourne l'uid de l'utilisateur ou false.
   *
   * @param string $username
   * @param string $password
   * @return number|boolean
   */
  protected function authentification($username, $password) {
    return $this->UserAuth->authenticate($username, $password);
  }

  /**
   *
   * @param array|string $configs
   * @param number $code
   * @param string $message
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  protected function reponse($configs, $code = null, $message = null) {
    if (! is_string($configs))
      $configs = Json::encode($configs);
    $reponse = new JsonResponse();
    if ($code)
      $reponse->setStatusCode($code, $message);
    $reponse->setContent($configs);
    return $reponse;
  }
}
