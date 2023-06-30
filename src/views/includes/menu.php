<?php wp_nav_menu([
  'container' => 'false',
  'theme_location' => $location,
  'menu_class' => bem_class($location, null, [
    'class' => $class ?? null,
    'modifier' => $modifier ?? null,
    'parent' => $parent ?? null,
  ]),
]);
