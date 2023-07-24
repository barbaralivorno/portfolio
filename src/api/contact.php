<?php
require_once('./endpoint.php');
hd_api_verify_nonce('contact');
//hd_api_verify_recaptcha();

$data = array_only($_POST, [
  'name',
  'company',
  'email',
  'phone_number',
  'inspiration_to_reaching_out',
  'message',
  'terms_and_conditions'
]);

if ($data['terms_and_conditions']) {
  $message = "

  Name: {$data['name']}

  Company: {$data['company']}

  E-mail: {$data['email']}

  Phone Number: {$data['phone_number']}

  Inspiration to Reaching Out: {$data['inspiration_to_reaching_out']}

  Message:
  {$data['message']}";

  add_action('wp_mail_failed', 'onMailError', 10, 1);
  function onMailError($wp_error)
  {
    echo "<pre>";
    print_r($wp_error);
    echo "</pre>";
  }

  $subject = "Tectonyx |  Contact: {$data['name']}";
  $response = wp_mail(get_option('notifications_email_to'), $subject, $message);
  $status = 200;
} else
  $status = 400;

hd_api_response([], $status);
