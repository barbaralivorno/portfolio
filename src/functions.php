<?php

require_once('vendor/autoload.php');

require_once('bootstrap/framework.php');
require_once('bootstrap/post-types.php');
require_once('bootstrap/menus.php');
require_once('bootstrap/acf.php');
require_once('bootstrap/settings.php');
require_once('bootstrap/admin.php');


/**
 * Image Sizes
 */

// Crop



//Scale
add_image_size('scale-960', 960, 9999, false);
add_image_size('scale-720', 720, 9999, false);

/**
 * Helpers
 */

function hd_api_url($endpoint)
{
	return template_url("api/$endpoint.php");
}

function hd_nonce_field($action)
{
	$nonce = wp_create_nonce("hd_$action");
	return "<input type=\"hidden\" name=\"_wpnonce\" value=\"$nonce\" />";
}