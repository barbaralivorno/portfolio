<?php
 
function hd_acf_json_save_point( $path ) {
    $path = get_stylesheet_directory() . '/assets/acf-json';
    return $path;
}

function hd_acf_json_load_point( $paths ) {
    // remove original path
    unset($paths[0]);

    // append path
    $paths[] = get_stylesheet_directory() . '/assets/acf-json';
    return $paths;
}

add_filter('acf/settings/save_json', 'hd_acf_json_save_point');
add_filter('acf/settings/load_json', 'hd_acf_json_load_point');
 