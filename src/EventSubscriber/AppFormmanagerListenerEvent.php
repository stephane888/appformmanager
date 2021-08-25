<?php

namespace Drupal\appformmanager\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\serialization\EventSubscriber\DefaultExceptionSubscriber;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Drupal\Core\Cache\CacheableDependencyInterface;
use Drupal\Core\Cache\CacheableResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;


// use Symfony\Component\HttpKernel\Event\ExceptionEvent;

/**
 * Class EntityTypeSubscriber.
 *
 * @package Drupal\custom_events\EventSubscriber
 */
class AppFormmanagerListenerEvent extends DefaultExceptionSubscriber
{
	use StringTranslationTrait;

	/**
	 * DefaultExceptionSubscriber constructor.
	 *
	 * @param \Symfony\Component\Serializer\SerializerInterface $serializer
	 *        	The serializer service.
	 * @param array $serializer_formats
	 *        	The available serialization formats.
	 */
	public function __construct(SerializerInterface $serializer, array $serializer_formats)
	{
		$this->serializer = $serializer;
		$this->serializerFormats = $serializer_formats;
	}

	/**
	 * Handles all 4xx errors for all serialization failures.
	 *
	 * @param \Symfony\Component\HttpKernel\Event\ExceptionEvent $event
	 *        	The event to process.
	 */
	public function on4xx(GetResponseForExceptionEvent $event)
	{
		/** @var \Symfony\Component\HttpKernel\Exception\HttpExceptionInterface $exception */
		// $event->ex
		/**
		 *
		 * @var \Exception $exception
		 */
		$exception = $event->getException();
		$request = $event->getRequest();

		$format = $request->getRequestFormat();
		// messages
		$errorsMsg = explode("\n", $exception->getMessage());
		if (! empty($errorsMsg) && \strstr($errorsMsg[0], "Unprocessable Entity") !== false) {
			$errorsMsg[0] = $this->t($errorsMsg[0]);
		}
		$content = [
				'message' => $exception->getMessage(),
				'errors' => $errorsMsg
			// 'file'=> $exception->getTrace()
		];
		$encoded_content = $this->serializer->serialize($content, $format);
		$headers = $exception->getHeaders();

		// Add the MIME type from the request to send back in the header.
		$headers['Content-Type'] = $request->getMimeType($format);

		// If the exception is cacheable, generate a cacheable response.
		if ($exception instanceof CacheableDependencyInterface) {
			$response = new CacheableResponse($encoded_content, $exception->getStatusCode(), $headers);
			$response->addCacheableDependency($exception);
		}
		else {
			$response = new Response($encoded_content, $exception->getStatusCode(), $headers);
		}

		$event->setResponse($response);
	}
}