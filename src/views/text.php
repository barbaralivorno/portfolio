<?php
global $post;
?>
<section class="text-page__text section--wrapped <?= $post->post_name ?>">
  <?= hd_component('title', [
    'class' => 'text-page__title',
    'text' => $post->post_title,
  ]) ?>
  <?= hd_component('rich-text', [
    'content' => wpautop($post->post_content),
    'class' => 'text-page__content'
  ]) ?>
</section>