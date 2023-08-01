<?php 
  $image = get_field('image');
  $info = get_field('info');
  $resume = get_field('resume');
?>
<section class="about" id="about">
  <h2 class="about__title title title--white">About Me</h2>
  <div class="about__content">
    <div class="about__img-container">
      <img class="about__img" src="<?= $image['url'] ?>" alt="Barbara Livorno" />
    </div>
    <div class="about__text">
      <?= $info ?>
      <?php if($resume) : ?>
      <a class="about__resume" target="_blank" aria-label="Download my resume" href="<?= $resume['url'] ?>">Download my
        resume</a>
      <?php endif ?>
    </div>
  </div>
  <a class="about__button scroll-button" aria-label="Teka a look at my work" href="#work"><span
      class="about__button-text scroll-button__text">Take a
      look at my work</span><span
      class="about__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
</section>