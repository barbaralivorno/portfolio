<?php 
  $image = get_field('image');
  $info = get_field('info');
  $resume = get_field('resume');
?>
<section class="home__about about" id="about">
  <h2 class="home__about-title about__title title title--white">About Me</h2>
  <div class="home__about-content about__content">
    <div class="home__about-img about__img-container">
      <img class="home__about-img about__img" src="<?= $image['url'] ?>" />
    </div>
    <div class="home__about-text about__text">
      <?= $info ?>
      <?php if($resume) : ?>
      <a class="home__about-resume about__resume" target="_blank" href="<?= $resume['url'] ?>">Download my resume</a>
      <?php endif ?>
    </div>
  </div>
  <a class="home__about-button about__button scroll-button" href="#work"><span
      class="home__about-button-text about__button-text scroll-button__text">Take a
      look at my work</span><span
      class="home__about-button-icon about__button-icon scroll-button__icon"><?= file_get_contents(asset_path('images/arrow-down.svg')) ?></span></a>
</section>