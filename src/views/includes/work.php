<?php
  $query_params = [
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 9,
  ];

  $works = new WP_Query($query_params);
?>

<section class="work" id="work">
  <h2 class="work__title title">My work</h2>
  <ul class="work__accordion">
    <?php foreach ($works->posts as $item): ?>
    <li class="work__accordion-item">
      <h2 class="work__accordion-item-title"><span
          class="work__accordion-item-icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span>
        <?= $item->post_title ?></h2>
      <div class="work__accordion-item-content">
        <?= $item->post_content ?>
        <div class="work__accordion-item-group">
          <a class="work__accordion-item-button" aria-label="Go to site" href="<?= get_field('site_link', $item->ID) ?>"
            target="_blank">Go to
            site</a>
          <a class="work__accordion-item-button" aria-label="Take a look at the code"
            href="<?= get_field('github_link', $item->ID) ?>" target="_blank">Take
            a look at the code</a>
        </div>
      </div>
    </li>
    <?php endforeach; ?>
  </ul>
  <a class="work__button scroll-button" aria-label="Let's talk" href="#contact"><span
      class="work__button-text scroll-button__text">Let's
      talk</span><span
      class="work__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
</section>