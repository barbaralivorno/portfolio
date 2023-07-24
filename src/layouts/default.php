<?php
global $_render;
$view =  $_render['view'];
$post = $_render['post'];
$post_title = $post ? $post->post_title : null;
$page_title = get_bloginfo('name') . (isset($post_title) && $post_title !== 'Home' ? " | $post_title" : '');
$template_config = get_field('theme');
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <?= get_option('hd_google_analytics_script') ?>
  <meta charset="utf-8" />
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
  <meta content="no-cache" http-equiv="Pragma" />
  <meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport" />
  <title><?= $page_title ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Space+Grotesk:wght@300;500;700&display=swap"
    rel="stylesheet">

  <link rel="stylesheet" href="<?= template_url('style.css', true) ?>" type="text/css" media="screen" />
  <?php wp_head() ?>
  <?= yield_content('head') ?>
</head>

<body
  class='<?= $post ? $post->post_name : $view ?>-page <?= $post ? "{$post->post_type}-post" : '' ?> site site--<?= $template_config ?>'
  data-page='<?= $post ? $post->post_name : $view ?>'>
  <?= get_option('hd_google_analytics_noscript') ?>
  <?= partial('includes/site-header', ['modifier' => yield_content('site-header-modifier')]) ?>
  <main class="site__main site-main <?= $post ? $post->post_name : $view ?>-page__main">
    <?= content() ?>
  </main>
  <?= partial('includes/site-footer') ?>
  <script src="//code.jquery.com/jquery-latest.min.js"></script>
  <script src="<?= template_url('theme.js', true) ?>" type="text/javascript"></script>
  <?= yield_content('scripts') ?>
  <?php wp_footer() ?>
</body>

</html>