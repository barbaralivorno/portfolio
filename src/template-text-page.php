<?php
/* Template Name: Text page */

global $post;

setup_postdata($post);

set_view('text', $post);
render();
