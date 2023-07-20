<?php
  $query_params = [
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 9,
  ];

  $works = new WP_Query($query_params);
?>

<section class="home__work work" id="work">
  <h2 class="home__work-title work__title title">My Work</h2>
  <a class="home__work-button work__button scroll-button" href="#work"><span
      class="home__work-button-text work__button-text scroll-button__text">Let's talk</span><span
      class="home__work-button-icon work__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
  <ul class="home__work-list work__list">
    <?php foreach ($works->posts as $item): ?>
    <li class="home__work-list-item work__list-item">
      <span
        class="home__work-list-item-icon work__list-item-icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span>
      <?= $item->post_title ?>
    </li>
    <?php endforeach; ?>
  </ul>
  <a class="home__work-button work__button scroll-button" href="#contact"><span
      class="home__work-button-text work__button-text scroll-button__text">Let's talk</span><span
      class="home__work-button-icon work__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
</section>