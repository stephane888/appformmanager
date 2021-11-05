<?php
namespace Drupal\appformmanager\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Connection;
use Query\Repositories\Utility as QueryUtility;
use Drupal\domain\DomainElementManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Drupal\appformmanager\Appformmanager;

/**
 *
 * @author stephane
 *
 */
class AppformmanagerGestionFieldsController extends ControllerBase {

  protected $Connection;

  protected $DomainElementManager;

  public function __construct(Connection $Connection, DomainElementManager $DomainElementManager) {
    $this->Connection = $Connection;
    $this->DomainElementManager = $DomainElementManager;
  }

  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('database'), $container->get('domain.element_manager'));
  }

  /**
   *
   * @param Request $Request
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  function LoadFields(Request $Request) {
    $body = JSON::decode($Request->getContent());
    try {
      $param = " select f.id, f.machine_name, f.formid, f.jsonfield, f.uid, aps.info, aps.stepid from `appformmanager_fields` as f ";
      $param .= " left join `appformmanager_steps_fields` as apsf ON apsf.formid = f.formid and apsf.machine_name = f.machine_name ";
      $param .= " left join `appformmanager_steps` as aps ON aps.stepid = apsf.stepid and aps.formid = apsf.formid ";
      // $param .= " where f.formid='13' and apsf.defaultjson is null order by aps.stepid and f.id DESC ";
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      // Appformmanager::AddFilterByDomain($filters, "domaineid", "dv");
      $param .= " where ";
      $param .= QueryUtility::buildFilterSql($filters);
      $param .= " and apsf.defaultjson is null order by aps.stepid and f.id DESC ";
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      $configs = $this->organisationDesChamps($configs);
    } catch (\Exception $e) {
      return $this->reponse($param, 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  /**
   *
   * @param Request $Request
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  function LoadFieldsDefault(Request $Request) {
    $body = JSON::decode($Request->getContent());
    try {
      $param = " select f.machine_name, f.defaultjson, f.stepid, aps.info from `appformmanager_steps_fields` as f  ";
      $param .= " left join `appformmanager_steps` as aps ON aps.stepid = f.stepid and aps.formid = f.formid ";
      // $param .= " where f.formid='13' and apsf.defaultjson is null order by aps.stepid and f.id DESC ";
      $filters = [];
      if (! empty($body['filters'])) {
        $filters = $body['filters'];
      }
      $param .= " where ";
      $param .= QueryUtility::buildFilterSql($filters);
      $param .= " and f.defaultjson is not null order by f.stepid ASC ";
      $configs = $this->Connection->query($param)->fetchAll(\PDO::FETCH_ASSOC);
      $this->organisationDesChampsDefault($configs);
    } catch (\Exception $e) {
      return $this->reponse($param, 409, urlencode($e->getMessage()));
    }
    return $this->reponse($configs);
  }

  protected function organisationDesChampsDefault(&$configs) {
    foreach ($configs as $key => $row) {
      $configs[$key]['defaultjson'] = JSON::decode($row['defaultjson']);
      $configs[$key]['stepes'] = [
        [
          'step' => JSON::decode($row['info']),
          'stepid' => $row['stepid']
        ]
      ];
    }
  }

  protected function organisationDesChamps($configs) {
    // /return $configs;
    $results = [];
    foreach ($configs as $row) {
      if (empty($results[$row['machine_name']])) {
        $results[$row['machine_name']] = $row;
        $results[$row['machine_name']]['jsonfield'] = $row['jsonfield'] ? JSON::decode($row['jsonfield']) : null;
        $results[$row['machine_name']]['stepes'] = [
          [
            'step' => JSON::decode($row['info']),
            'stepid' => $row['stepid']
          ]
        ];
        unset($results[$row['machine_name']]['info']);
        unset($results[$row['machine_name']]['stepid']);
      } else {
        $results[$row['machine_name']]['stepes'][] = [
          'step' => JSON::decode($row['info']),
          'stepid' => $row['stepid']
        ];
      }
    }
    /**
     * --
     *
     * @var array $PreviewResults
     */
    $PreviewResults = [];
    foreach ($results as $result) {
      $PreviewResults[] = $result;
    }
    return $PreviewResults;
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