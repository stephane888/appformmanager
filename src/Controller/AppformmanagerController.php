<?php

namespace Drupal\appformmanager\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
// use Drupal\user\UserAuth;
use Drupal\mail_login\AuthDecorator as UserAuth;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for AppFormManager routes.
 */
class AppformmanagerController extends ControllerBase {
	protected $UserAuth;
	public function __construct(UserAuth $UserAuth){
		$this->UserAuth = $UserAuth;
	}
	
	/**
	 *
	 * {@inheritdoc}
	 */
	public static function create(ContainerInterface $container){
		// return new static($container->get('prestashop_rest_api.cron'), $container->get('prestashop_rest_api.build_product_to_drupal'));
		return new static( $container->get( 'user.auth' ) );
	}
	
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
	
	/**
	 * Builds the response.
	 */
	public function manager(){
		$configs = [
				'#type'=> "html_tag",
				'#tag'=> 'section',
				'#value'=> 'Travaux de renovations',
				'#attributes'=> [
						'id'=> 'app'
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
	public function currentUser(){
		$id = \Drupal::currentUser()->id();
		if($id){
			$user = \Drupal\user\Entity\User::load( \Drupal::currentUser()->id() );
			$serializer = \Drupal::service( 'serializer' );
			$data = $serializer->serialize( $user, 'json', [
					'plugin_id'=> 'entity'
			] );
		}
		else{
			$data = $id;
		}
		return $this->reponse( $data );
	}
	
	/**
	 * Recupere les informations d'un utilisateur à partir de son nom utilisateur ou email.
	 */
	public function getUser(Request $Request){
		$code = 401;
		$msg = "Votre login ou mot de passe est invalide";
		$content = $Request->getContent();
		$content = Json::decode( $content );
		$password = ! empty( $content['password'] ) ? $content['password'][0]['value'] : null;
		$login = ! empty( $content['name'] ) ? $content['name'][0]['value'] : null;
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
		if($uid = $this->authentification( $login, $password )){
			$user = \Drupal\user\Entity\User::load( $uid );
			user_login_finalize( $user );
			$serializer = \Drupal::service( 'serializer' );
			$data = $serializer->serialize( $user, 'json', [
					'plugin_id'=> 'entity'
			] );
			return $this->reponse( $data );
		}
		return $this->reponse( $content, $code, $msg );
	}
	/**
	 *
	 * @param string $mail
	 * @return mixed|boolean
	 */
	protected function loadByMailOrLogin($mail){
		// https://www.drupal.org/node/2214507
		$users = \Drupal::entityTypeManager()->getStorage( 'user' )
			->loadByProperties( [
				'mail'=> $mail
		] );
		if($users)
			return reset( $users );
		//
		$users = \Drupal::entityTypeManager()->getStorage( 'user' )
			->loadByProperties( [
				'name'=> $mail
		] );
		if($users)
			return reset( $users );
		return FALSE;
	}
	/**
	 * Retourne l'uid de l'utilisateur ou false.
	 *
	 * @param string $username
	 * @param string $password
	 * @return number|boolean
	 */
	protected function authentification($username, $password){
		return $this->UserAuth->authenticate( $username, $password );
	}
	
	/**
	 *
	 * @param array|string $configs
	 * @param number $code
	 * @param string $message
	 * @return \Symfony\Component\HttpFoundation\JsonResponse
	 */
	protected function reponse($configs, $code = null, $message = null){
		if(! is_string( $configs ))
			$configs = Json::encode( $configs );
		$reponse = new JsonResponse();
		if($code)
			$reponse->setStatusCode( $code, $message );
		$reponse->setContent( $configs );
		return $reponse;
	}
}
