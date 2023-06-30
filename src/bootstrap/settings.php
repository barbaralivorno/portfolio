<?php
function hd_render_settings_page()
{
?>
  <div class="wrap">
    <h1>Site Settings</h1>
    <form method="post" action="options.php">
      <?php
      settings_fields('hd-settings');

      // display all sections for theme-options page
      do_settings_sections('hd-settings');
      submit_button();
      ?>
    </form>
  </div>
  <?php
}

function settings_notifications_fields()
{
  add_settings_field('notifications', 'Send notifications to', function () { ?>
    <input style="width: 50em;" name="notifications_email_to" placeholder="Enter the e-mail address to notify when the contact form is submited" value="<?= get_option('notifications_email_to') ?>" />
  <?php }, 'hd-settings', 'notifications');
}

function hd_settings_google_fields()
{
  add_settings_field('hd_google_analytics_key', 'Analytics code', function () { ?>
    <textarea style="width: 50em;" name="hd_google_analytics_script" rows="8" placeholder="Enter the Google Analytics script code (it will be placed in the HTML head)"><?= get_option('hd_google_analytics_script') ?></textarea>
    <textarea style="width: 50em;" name="hd_google_analytics_noscript" rows="8" placeholder="Enter the Google Analytics noscript code (it will be placed in the HTML body)"><?= get_option('hd_google_analytics_noscript') ?></textarea>
  <?php }, 'hd-settings', 'google');

  add_settings_field('hd_google_recaptcha_key', 'Recaptcha Keys', function () { ?>
    <input style="width: 50em;margin-bottom: 10px" name="hd_google_recaptcha_site_key" type="text" placeholder="Enter the Recaptcha Site Key" value="<?= get_option('hd_google_recaptcha_site_key') ?>" />
    <input style="width: 50em;" name="hd_google_recaptcha_secret_key" type="text" placeholder="Enter the Recaptcha Secret Key" value="<?= get_option('hd_google_recaptcha_secret_key') ?>" />
<?php }, 'hd-settings', 'google');
}

function hd_settings_init()
{
  register_setting('hd-settings', 'notifications_email_to');
  add_settings_section('notifications', 'Notifications', 'settings_notifications_fields', 'hd-settings');

  register_setting('hd-settings', 'hd_google_analytics_script');
  register_setting('hd-settings', 'hd_google_analytics_noscript');
  register_setting('hd-settings', 'hd_google_recaptcha_site_key');
  register_setting('hd-settings', 'hd_google_recaptcha_secret_key');
  add_settings_section('google', 'Google services', 'hd_settings_google_fields', 'hd-settings');
}

function hd_settings_menu()
{
  add_menu_page('Site Settings', 'Site Settings', 'manage_options', 'hd-theme-settings', 'hd_render_settings_page', 'dashicons-admin-tools');
}

add_action('admin_menu', 'hd_settings_menu');
add_action('admin_init', 'hd_settings_init');
