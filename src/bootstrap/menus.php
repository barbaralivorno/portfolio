<?php

function register_menus()
{
	register_nav_menus([
		'main-menu' => __('Main Menu'),
		'legal-menu' => __( 'Legal Menu' ),
		'social-networks-menu' => __( 'Social Networks Menu' ),
	]);
}

add_action('init', 'register_menus');