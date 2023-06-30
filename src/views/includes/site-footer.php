<footer class="site__footer site-footer <?= $class ?>">
  <span class="site-footer__copyright">©2023 tectonyx</span>
  <?php if (has_nav_menu('social-networks-menu')) : ?>
    <?php wp_nav_menu([
      'container' => 'false',
      'theme_location' => 'social-networks-menu',
      'menu_class' => 'site-footer__social-networks-menu',
    ]); ?>
  <?php endif; ?>
  <?php wp_nav_menu([
    'container' => 'false',
    'theme_location' => 'legal-menu',
    'menu_class' => 'site-footer__legal-menu',
  ]); ?>
</footer>