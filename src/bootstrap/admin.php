<?php

if (!is_admin()) {
  add_filter('show_admin_bar', function () {
    return false;
  });
}
