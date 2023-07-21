<?php
  $query_params = [
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 9,
  ];

  $works = new WP_Query($query_params);
?>

<section class="home__work work" id="work">
  <h2 class="home__work-title work__title title">My works</h2>
  <ul class="home__work-accordion work__accordion">
    <?php foreach ($works->posts as $item): ?>
    <li class="home__work-accordion-item work__accordion-item">
      <h2 class="home__work-accordion-item-title work__accordion-item-title"><span
          class="home__work-accordion-item-icon work__accordion-item-icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span>
        <?= $item->post_title ?></h2>
      <div class="home__work-accordion-item-content work__accordion-item-content">
        <?= $item->post_content ?>
        <a class="home__work-accordion-item-button work__accordion-item-button"
          href="<?= get_field('site_link', $item->ID) ?>" target="_blank">Go to site</a>
        <a class="home__work-accordion-item-button work__accordion-item-button"
          href="<?= get_field('github_link', $item->ID) ?>" target="_blank">Take a look at the code</a>
      </div>
    </li>
    <?php endforeach; ?>
  </ul>
  <a class="home__work-button work__button scroll-button" href="#contact"><span
      class="home__work-button-text work__button-text scroll-button__text">Let's talk</span><span
      class="home__work-button-icon work__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
</section>