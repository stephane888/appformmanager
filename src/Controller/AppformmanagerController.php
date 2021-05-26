<?php

namespace Drupal\appformmanager\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for AppFormManager routes.
 */
class AppformmanagerController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
