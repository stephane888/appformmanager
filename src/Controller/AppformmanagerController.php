<?php

namespace Drupal\appformmanager\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;

/**
 * Returns responses for AppFormManager routes.
 */
class AppformmanagerController extends ControllerBase {

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

    public function user() {
        $id = \Drupal::currentUser()->id();
        if ($id) {
            $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
            $serializer = \Drupal::service('serializer');
            $data = $serializer->serialize($user, 'json', [
              'plugin_id' => 'entity'
                ]);
        }
        else {
            $data = $id;
        }
        return $this->reponse($data);
    }

    /**
     * Enregistrer un utilisateur.
     */
    public function register() {
        
    }

    /**
     *
     * @param array|string $configs
     * @param number $code
     * @param string $message
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    protected function reponse($configs, $code = null, $message = null) {
        if (!is_string($configs))
            $configs = Json::encode($configs);
        $reponse = new JsonResponse();
        if ($code)
            $reponse->setStatusCode($code, $message);
        $reponse->setContent($configs);
        return $reponse;
    }

}
