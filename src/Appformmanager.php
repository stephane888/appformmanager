<?php
namespace Drupal\appformmanager;

use Drupal\domain\DomainInterface;

class Appformmanager {

  /**
   * Permet de se rassurer que l'utilisateur a le droit de voir les données de ce domaine.
   * (administrateur)
   *
   * @param array $filters
   * @throws \Exception
   */
  public static function AddFilterByDomain(array &$filters = [], $columnDomain = 'domaineid', $preffix = null) {
    $account = \Drupal::currentUser();
    $roles = $account->getRoles();
    //
    $activeDomain = self::getActiveDomain();
    // Si l'uilisateur administrateur il voit les devis en fonctions du domaine.
    if (in_array('administrator', $roles)) {
      $filters['AND'][] = [
        'column' => $columnDomain,
        'value' => $activeDomain,
        'preffix' => $preffix
      ];
    } // L'utilisateur doit etre membre du Domain administrator(field_domain_admin).
    else {
      $user = \Drupal\user\Entity\User::load($account->id());
      $allowed = $this->DomainElementManager->getFieldValues($user, DomainInterface::DOMAIN_ADMIN_FIELD);
      if (! empty($allowed[$activeDomain])) {
        $filters['AND'][] = [
          'column' => $columnDomain,
          'value' => $activeDomain,
          'preffix' => $preffix
        ];
      } else {
        throw new \Exception(" Vous ne disposez pas de droit suffisant pour acceder à ces données ");
      }
    }
  }

  /**
   * Permet de se rassurer que l'utilisateur a le droit de voir les données de ce domaine.
   *
   * @param array $filters
   * @throws \Exception
   */
  public static function AddFilterByDomainOwn(array &$filters = [], $columnDomain = 'domaineid', $preffix = null) {
    $account = \Drupal::currentUser();
    //
    $activeDomain = self::getActiveDomain();
    // les données doivent appartenir au domaine encours.
    $filters['AND'][] = [
      'column' => $columnDomain,
      'value' => $activeDomain,
      'preffix' => $preffix
    ];
    // les données doivent appartenir à l'utilisateur connecté.
    $filters['AND'][] = [
      'column' => 'uid',
      'value' => $account->id(),
      'preffix' => $preffix
    ];
  }

  /**
   * Recupere l'id du domaine actif.
   *
   * @return NULL|string|number
   */
  public static function getActiveDomain() {
    // get current domaine id
    /** @var \Drupal\domain\Entity\Domain $active */
    $active = \Drupal::service('domain.negotiator')->getActiveDomain();
    $id = null;
    if (empty($active)) {
      $active = \Drupal::entityTypeManager()->getStorage('domain')->loadDefaultDomain();
    }
    if (! empty($active))
      $id = $active->id();
    return $id;
  }
}