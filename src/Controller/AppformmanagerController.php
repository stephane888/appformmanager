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
	public function build(){
		$configs = [
				'#type'=> "html_tag",
				'#tag'=> 'section',
				'#value'=> 'Travaux de renovations',
				'#attributes'=> [
						'id'=> 'app'
				]
		];
		$configs['#attached']['library'][] = 'appformmanager/app_form';
		return $configs;
	}
}
