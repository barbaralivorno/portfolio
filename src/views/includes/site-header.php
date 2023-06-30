<header class="site__header site-header">
  <a href="/" class="site-header__logo"><?= file_get_contents(asset_path('images/logo.svg')) ?></a>
  <nav class="site-header__main-nav">
    <?= partial('includes/main-menu', [
    'parent' => 'site-header',
  ]) ?>
  </nav>
  <button class="site-header__nav-icon nav-icon lines-button" type="button" role="button"
    aria-label="Toggle Navigation">
    <span class="lines"></span>
  </button>
</header>