<header class="site-header">
  <a href="/" class="site-header__logo">
    <?= file_get_contents(asset_path('images/logo.svg')) ?>
  </a>
  <button class="site-header__nav-icon nav-icon lines-button" type="button" role="button"
    aria-label="Toggle Navigation">
    <span class="lines"></span>
  </button>
  <nav class="site-header__main-nav">
    <?= partial('includes/main-menu', [
      'parent' => 'site-header',
    ]) ?>
    <ul class="site-header__social-networks-menu">
      <li class="site-header__social-networks-menu-item">
        <a target="_blank"
          href="https://www.linkedin.com/in/barbaralivorno/"><?= file_get_contents(asset_path('images/icon-linkedin.svg')) ?></a>
      </li>
      <li class="site-header__social-networks-menu-item">
        <a target="_blank"
          href="https://github.com/barbaralivorno"><?= file_get_contents(asset_path('images/icon-github.svg')) ?></a>
      </li>
    </ul>
  </nav>
</header>