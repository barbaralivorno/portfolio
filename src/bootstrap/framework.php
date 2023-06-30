<?php

global $_render;
$_render = [
  'layout' => 'default',
  'view' => 'home',
  'contents' => []
];

function render_file($__type, $__file, $__locals = []) {
  extract($__locals);
  include(TEMPLATEPATH . "/{$__type}s/$__file.php");
}

function set_view($view, $custom_post = null) {
  global $_render, $post;
  $_render['post'] = $custom_post ?: $post;

  $ancestors_ids = get_post_ancestors($_render['post']);
  if (!empty($ancestors_ids)) {
    $ancestors = get_posts([
      'post_type' => 'page',
      'include' => $ancestors_ids,
    ]);
    $slugs = array_map(function($ancestor) {
      return $ancestor->post_name;
    }, $ancestors);
  } else {
    $slugs = [];
  }

  $slugs[] = $view;

  $_render['view'] = implode('-', $slugs);
}

function set_layout($layout) {
  global $_render;
  $_render['layout'] = $layout;
}

function render($__locals = []) {
  global $_render;

  ob_start();
  render_file('view', $_render['view'], $__locals);
  $_render['contents']['content'] = ob_get_clean();

  render_file('layout', $_render['layout'], $_render['contents']);
}

function block($__partial, $__locals = []) {
  $name = substr($__partial, strrpos($__partial, '/') + 1); 
  $_bem = new BemGenerator($name, array_only($__locals, ['parent', 'modifier', 'class']));
  $_attrs = array_data_attrs_string(data_get($__locals, 'data') ?? []);
  return partial($__partial, $__locals + compact('_bem', '_attrs'));
}

function partial($__partial, $__locals = []) {
  ob_start();
  render_file('view', $__partial, $__locals);
  return ob_get_clean();
}

function hd_include($__partial, $__locals = []) {
  extract($__locals);
  $key = array_search(__FUNCTION__, array_column(debug_backtrace(), 'function'));
  $path = dirname(debug_backtrace()[$key]['file']);
  include("$path/$__partial.php");
}

function component($__component, $__locals = []) {
  $_bem = new BemGenerator($__component, array_only($__locals, ['parent', 'modifier', 'class']));
  return partial("components/$__component", $__locals + compact('_bem'));
}

function hd_component($__component, $__locals = []) {
  $_bem = new BemGenerator($__component, array_only($__locals, ['parent', 'modifier', 'class']));
  $_attrs = array_data_attrs_string(data_get($__locals, 'data') ?? []);
  return partial("../node_modules/hd-components/$__component/index", $__locals + compact('_bem', '_attrs'));
}

function content() {
  global $_render;
  return $_render['contents']['content'];
}

function content_for($name, $blk) {
  global $_render;
  $_render['contents'][$name] = is_callable($blk) ? $blk() : $blk;
}

function has_content_for($name) {
  global $_render;
  return !empty($_render['contents'][$name]);
}

function yield_content($name) {
  global $_render;
  return has_content_for($name) ? $_render['contents'][$name] : '';
}

function is_active($page) {
  global $post;
  return $post->post_type == 'page' && $post->post_name == $page;
}

function get_view() {
  global $_render;
  return $_render['view'];
}

if(!function_exists("str_starts_with")) {
  function str_starts_with($str, $prefix) {
    return mb_substr($str, 0, mb_strlen($prefix)) == $prefix;
  }
}

if(!function_exists("str_ends_with")) {
  function str_ends_with($str, $needle)
  {
      $length = strlen($needle);
      if ($length == 0) {
          return true;
      }

      return (substr($str, -$length) === $needle);
  }
}

function dd($object) {
  die('<pre style="padding: 1rem; background: #eee; border: 1px dashed red;">' . htmlentities(var_export($object, true)) . '</pre>');
}

function template_url($path = '', $append_timestamp = false) {
  $postfix = '';
  if (!empty($path)) {
    $safe_path = str_starts_with($path, '/') ? $path : "/$path";
    $postfix = $safe_path;
    if ($append_timestamp) {
      $postfix .= '?' . filemtime(TEMPLATEPATH . $safe_path);
    }
  }
  return get_template_directory_uri() . $postfix;
}

function asset_path($rel_path) {
  return TEMPLATEPATH . "/assets/$rel_path";
}

function asset_url($rel_path) {
  return template_url("assets/$rel_path", true);
}

function image_url($path) {
  return asset_url("images/$path");
}

function image_path($path) {
  return asset_path("images/$path");
}

function get_featured_image_sources($post, $sizes) {
  $image_id = get_post_thumbnail_id($post);
  $sources = [];
  foreach($sizes as $size) {
    $sources[$size] = wp_get_attachment_image_src(
      $image_id,
      $size
    );
  }
  return $sources;
}

function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
}

function get_terms_by_hierarchy($taxonomy, $args) {
  $args = array_merge($args, [
    'taxonomy' => $taxonomy,
    'orderby' => 'parent'
  ]);
  $terms = get_terms($args);
  return sort_terms_by_hierarchy($terms);
}

function sort_terms_by_hierarchy($terms) {
  $children_by_parent = array_group_by($terms, 'parent');

  foreach($children_by_parent as &$children) {
    // Sort each group by name
    usort($children, function($a, $b) {
      return strcmp($a->name, $b->name);
    });
  }

  $sorted_terms = [];
  $insert_children = function($parent_term_id, $level = 0) use (&$sorted_terms, &$children_by_parent, &$insert_children) {
    foreach($children_by_parent[$parent_term_id] ?? [] as $child_term) {
      $child_term->level = $level;
      $child_term->hierarchy_name = term_name_by_hierarchy_level($child_term, $level);
      $sorted_terms[] = $child_term;
      $insert_children($child_term->term_id, $level + 1);
    }
  };

  $insert_children(0);

  return $sorted_terms;
}

function term_name_by_hierarchy_level($term, $level = 0) {
  $prefix = '';
  for($l = 0 ; $l < $level ; $l++)
    $prefix .= '­—';
  if ($level > 0)
    $prefix .= ' ';
  return $prefix . $term->name;
}

function device_to_media($device) {
  $rule = '';
  switch($device) {
    case 'phone-only': $rule = '(max-width: 767px)'; break;
    case 'tablet-down': $rule = '(max-width: 1024px)'; break;
    case 'desktop-down': $rule = '(max-width: 1600px)'; break;
    default:
  }
  return $rule;
}

function image_sizes_string(array $sizes) {
  $sizes_map = array_map(function($size, $key) {
    $prepend = '';
    if (is_string($key)) switch($key) {
      case 'phone': $prepend = '(max-width: 767px) '; break;
      case 'tablet': $prepend = '(max-width: 1024px) '; break;
      case 'desktop': $prepend = '(max-width: 1600px) '; break;
      default:
    }
    return $prepend . $size;
  }, $sizes, array_keys($sizes));
  return implode(',', $sizes_map);
}

function image_srcset(array &$img, array $styles) {
  return implode(',', array_map(function ($image_width, $size_name) use(&$img) {
    return "{$img['sizes'][$size_name]} {$image_width}w";
  }, $styles, array_keys($styles)));
}

function image_styles(array &$img, array $sizes) {
  $styles = [];
  foreach ($sizes as $size_name)
    $styles[$size_name] = $img['sizes']["$size_name-width"];
  return $styles;
}

function data_get($object, $key, $default = null) {
  if (is_array($object)) {
    $value = $object[$key] ?? $default;
  } else if (is_object($object)) {
    $value = $object->$key ?: $default;
  }
  return $value;
}

function hd_is_callable($obj) {
  return is_callable($obj) || (is_string($obj) && !empty($obj) && $obj[0] === '!');
}

function hd_call($callable, ...$args) {
  if (is_callable($callable))
    $callable(...$args);
  elseif (is_string($callable)) {
    $fn = ltrim($callable, '!');
    $fn(...$args);
  }
}

function hd_eval($val, ...$context) {
  return hd_is_callable($val) ? hd_call($val, ...$context) : $val;
}

function array_group_by($array, $key, $value_key = null) {
  $return = array();
  if (!empty($array) && is_array($array)) {
    foreach($array as $val) {
      if (is_array($val)) {
        $target_key = $val[$key] ?? null;
        $target_val = $value_key ? ($val[$value_key] ?? null) : $val;
      } else {
        $target_key = $val->$key;
        $target_val = $value_key ? $val->$value_key : $val;
      }
      $return[$target_key][] = $target_val;
    }
  }
  return $return;
}

function array_refactor($array, $key, $value_key = null) {
  $return = array();
  if (!empty($array) && is_array($array)) {
    $is_key_callable = hd_is_callable($key);
    $is_vk_callable = hd_is_callable($value_key);
    foreach($array as $val) {
      $parsed_key = $is_key_callable ? hd_call($key, $val) : $key;
      $parsed_value_key = $is_vk_callable ? hd_call($value_key, $val) : $value_key;
      $target_key = data_get($val, $parsed_key);
      $target_val = $parsed_value_key ? data_get($val, $parsed_value_key) : $val;
      $return[$target_key] = $target_val;
    }
  }
  return $return;
}

function array_only(array &$arr, array $keys) {
  return array_intersect_key($arr, array_flip($keys));
}

function array_except(array &$arr, $except) {
  return array_diff_key($arr, array_flip(array_wrap($except)));
}

function array_attrs_string(array $attrs) {
  return implode(
    ' ',
    array_map(
      function ($attr, $value) {
        if ($attr == 'alt' || !empty($value) || (is_bool($value) && $value)) {
          $html = is_bool($value) ? $attr : ($attr . '="' . esc_attr($value) . '"');
        }
        return empty($html) ? '' : $html;
      },
      array_keys($attrs),
      $attrs
    )
  );
}

function array_map_attrs(array $options, array $attributes) {
  $arr = [];
  array_map(
    function($key) use ($attributes, &$arr) {
      foreach ($attributes as $attr => $value) {
        $arr[$key][$attr] = $value[$key];
      }
    },
    $options
  );
  return $arr;
}

function array_data_attrs_string(array $data_attrs = []) {
  $data_attrs_keys = array_map(function($data_key) {
    return "data-$data_key";
  }, array_keys($data_attrs));
  return array_attrs_string(array_combine($data_attrs_keys, array_values($data_attrs)));
}

function array_one_of($target, array $options, $default = null) {
  return in_array($target, $options) ? $target : $default;
}

function array_wrap($element) {
  return is_array($element) ? $element : (is_null($element) ? [] : [$element]);
}

function abort($code = 400, $content = '') {
  http_response_code($code);
  $is_json = !is_string($content);
  if ($is_json) header('Content-Type: application/json; charset=utf-8');
  echo $is_json ? json_encode($content) : $content;
  die;
}

function responsive_image(array $img, array $options) {
  if (empty($options['sizes'])) return;
  $srcset = image_srcset($img, image_styles($img, $options['sizes']));
  $sizes = image_sizes_string($options['display_sizes'] ?? []);
  $fallback = $options['fallback'] ?? null;
  $data_attrs = array_data_attrs_string(data_get($options, 'data') ?? []);
  
  if(str_ends_with($img['url'], '.svg'))
    $attrs = array_attrs_string(array_merge(
      array_except($options, ['sizes', 'display_sizes', 'fallback']),
      [
        'src' => $img['url'],
        'alt' => $img['alt'],
      ]
    )) . $data_attrs;
  else {
    $img_orientation = image_orientation($img);
    $options['class'] = ($options['class'] ?? '') . " image--$img_orientation";
    $attrs = array_attrs_string(array_merge(
      array_except($options, ['sizes', 'display_sizes', 'fallback']),
      [
        'srcset' => $srcset,
        'src' => $fallback ? $img['sizes'][$fallback] : null,
        'alt' => $img['alt'],
        'sizes' => empty($sizes) ? false : $sizes,
      ]
    )) . $data_attrs;
  }
  return "<img $attrs />";
}

function image_orientation(array $img) {
  $orientation = 'landscape';
  if($img['width'] < $img['height'])
   $orientation = 'portrait';
  return $orientation;
}

function image_aspect_ratio(array $img) {
  return media_aspect_ratio($img);
}

function media_aspect_ratio(array $media) {
  if(isset($media['source']))
    $media = $media['file'];

  return $media['width'] / $media['height'];
}

function sort_by_aspect_ratio(array $media) {
  usort($media, function($a, $b) {
    return (media_aspect_ratio($a) > media_aspect_ratio($b)) ? 1 : -1;
  });
  return $media;
}

function add_class_to_html($elem, $class) { 
  $dom = new DOMDocument();
  $dom->loadHTML($elem);
  $elem = $dom->childNodes->item(1)->childNodes->item(0)->childNodes->item(0);
  if($elem->hasAttribute('class')) {
    $elem_class = $elem->getAttribute('class');
    $elem->setAttribute('class', "$class $elem_class");
  }
  else {
    $elem->setAttribute('class', $class);
  }
  return $dom->saveHTML();
}

function bem_class($blocks, $element = null, $options = []) {
  $blocks = array_wrap($blocks);  
  $parent = data_get($options, 'parent');
  $modifier = data_get($options, 'modifier');
  $class = data_get($options, 'class');
  $css_class = '';
  
  foreach($blocks as $block) {
    if($block) {
      $base_class = $element ? "{$block}__{$element}" : $block;
      $css_class = trim("$css_class $base_class");
      if (is_array($modifier))
        foreach($modifier as $m)
          $css_class = "$css_class $base_class--$m";
      elseif (is_string($modifier) && !empty($modifier))
        $css_class = "$css_class $base_class--$modifier";
      if (is_array($parent))
        foreach($parent as $p) {
          $separator = strpos($p, '__') ? '-' : '__';
          $css_class = "$css_class {$p}{$separator}{$block}" . ($element ? "-{$element}" : "");
        }
      elseif (is_string($parent) && !empty($parent)) {
        $separator = strpos($parent, '__') ? '-' : '__';
        $css_class = "$css_class {$parent}{$separator}{$block}" . ($element ? "-{$element}" : "");
      }
    }
  }

  if (is_array($class))
    foreach($class as $c) 
      $css_class = "$css_class $c";
  elseif (is_string($class) && !empty($class))
    $css_class = "$css_class $class";
  
  return $css_class;
}

function bem_has_modifier($target, $modifier = []) {
  if (is_string($modifier))
    return $modifier == $target;
  elseif (is_array($modifier))
    return in_array($target, $modifier);
  else
    return false;
}

function _acf_get_field_object($field_group_slug, $field_name) {
  global $wpdb;
  $query = "
    SELECT post_content FROM `{$wpdb->prefix}posts` 
    WHERE 
      post_type = 'acf-field'
      AND post_parent = (
          SELECT ID FROM {$wpdb->prefix}posts 
          WHERE
            post_type = 'acf-field-group'
            AND post_excerpt = %s
            AND post_parent = 0
      ) 
      AND post_excerpt = %s;
  ";
  $result = $wpdb->get_row( 
    $wpdb->prepare($query, $field_group_slug, $field_name) 
  );
  return unserialize($result->post_content);
}

class BemGenerator {
  private $block;
  private $options;
  
  public function __construct($block, $options = []) {
    $this->block = $block;
    $this->options = $options;
  }

  public function block($options = []) {
    return bem_class($this->block, null, $this->merge_options($options));
  }

  public function element($element, $options = []) {
    $options = $options + array_except($this->options, ['class', 'modifier']);
    return bem_class($this->block, $element, $options);
  }

  private function merge_options($options) {
    $merged_options = $this->options;
    foreach($options as $key => $value) {
      $merged_options[$key] = array_merge(
        array_wrap(data_get($this->options, $key)),
        array_wrap($value)
      );
    }
    return $merged_options;
  }
}

// Tell the browser to differentiate between JSON and HTML cache
// to fix back/forward button issues
header('Vary: Accept');