<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/wp-load.php");

function hd_api_verify_nonce($action) {
  if (!check_ajax_referer("hd_$action", false, false)) {
    hd_api_response([
      'message' => 'Unexpected error, please reload the page and try again.',
    ], 400);
  }
}

function hd_api_response($data, $status_code = 200) {
  http_response_code($status_code);
  header('Content-Type: application/json');
  echo json_encode($data);
  die();
}

function hd_api_verify_recaptcha() {
    if (isset($_POST['g-recaptcha-response'])) {
        $token = $_POST['g-recaptcha-response'];
    }

    if (!empty($token)) {
        $secret = get_option('hd_google_recaptcha_secret_key');
        $response = file_get_contents(
            "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$token&remoteip={$_SERVER['REMOTE_ADDR']}"
        );
        $response = json_decode($response);
    }

    if (empty($token) || empty($response) || !$response->success || $response->score <= 0.5) {
        hd_api_response([
            'message' => 'Spam prevented',
        ], 400);
    }
}
  
