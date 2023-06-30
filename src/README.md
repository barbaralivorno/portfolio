# aps Theme

## Install

In the theme directory:

1. Run `npm install` to install all the dependencies.
2. Run `npm run build` to compile the theme javascript and stylesheet.

## Develop

To start developing, in the theme directory:

1. Run `npm install` to install all the dependencies.
2. Run `npm run dev` to watch and compile the javascript and stylesheet.

## Theme structure

### Views

The theme sets a framework to work with layout/view templating. Every page created in wp-admin looks for a file called `views/{PAGE_SLUG}.php`.

#### Layout

Every layout is defined in `layouts/{LAYOUT_NAME}.php`. Layouts usually call the `content()` function to render the current view.

#### Components

Every reusable component must be defined in `views/components/{COMPONENT_NAME}.php`. Components are used in views by calling the `component` function, e.g.:

```php
<?= component('my-block', ['title' => 'Some title']) ?>
```

In this case, the variable `$title` will be defined in `views/components/my-block.php` so it can be used for displaying the title of the block.

**IMPORTANT:** do not confuse ACF custom field groups with front-end components.

#### Includes / Partial views

The `views/includes` directory contains every partial view that is not a component or a page itself. Mostly used for keeping the code tidy and in small fragments.

Includes are used in views by calling the `partial` function, e.g.:

```php
<?= partial('includes/meta/favicon', ['option' => 'value']) ?>
```

In this case, the variable `$option` will be defined in `views/includes/meta/favicon.php` so it can be used for displaying its value.

**NOTE:** the `partial` function can be used to include any file inside `views` directory and it's **not** restricted to the `views/includes` folder.

#### Content slots

Content slots are defined in layouts or views by calling the function `yield_content({SLOT_NAME})`. A view (or partial view) may define the content of a slot by calling the function `content_for({SLOT_NAME}, function() { ... })`. Also, content slots content can be null-tested with `has_content_for`. E.g.:

In `views/includes/site-header.php`:

```php
<?php if (has_content_for('header_secondary_content')): ?>
  <aside class="site-header__secondary-content">
    <?= yield_content('header_secondary_content') ?>
  </aside>
<?php endif ?>
```

defines a slot for the secondary content so a view can inject content only for that specific view. Before that, the `has_content_for` function is used to test if there's content in the slot to avoid displaying the `<aside>` tag.

In `views/home.php`:

```php
content_for('header_secondary_content', function() {
  return partial('includes/header/side-links');
});
```

injects the side-links partial into `header_secondary_content` slot.

### Stylesheet

CSS classes are named following the [BEM](http://getbem.com/introduction/) convention. The block part of the class name must always be a component name or a page (e.g. `button`, `home-page`).

### File structure (Work In Progress)

This is the basic file tree you should know:

```plain
theme
│   ...
│   style.css
│   theme.js
│
└───assets
│   │
│   └───acf-json
│   │   │   └───(one json file for each custom field group)
│   └───js
│   │   └───theme.js
│   └───scss
│       │   style.scss
│       │   _components.scss
│       │   _layout.scss
│       │   _mixins.scss
│       │   _normalize.scss
│       │   _pages.scss
│       │   _variables.scss
│       │
│       └───components
│       │   └───(one scss file for each component)
│       └───pages
│           └───(one scss file for each page)
└───bootstrap
    │
    │
```

#### Descriptions

* `style.css`: the compiled CSS file from SCSS code.
* `theme.js`: the compiled javascript file, transpiled with Babel.
* `assets/acf-json`: Advanced Custom Fields plugin directory. Each custom field group is stored here as a json file.
* `assets/js/theme.js`: the main uncompiled javascript file.
* `assets/scss/style.scss`: the main SCSS file, normally you won't edit this file.
* `assets/scss/_components.scss`: this file must import every component defined in `assets/scss/components`.
* `assets/scss/_pages.scss`: this file must import every component defined in `assets/scss/pages`.
* `assets/scss/_variables.scss`: defines the common variables for the project such as font sizes, breakpoints and colors.
