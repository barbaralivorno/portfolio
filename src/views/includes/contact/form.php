<form class="contact-page__form" action="<?= hd_api_url('contact') ?>">
  <?= hd_nonce_field('contact') ?>
  <div class="contact-page__form-group">
    <div class="contact-page__form-field-group">
      <span class="contact-page__label">Your Name</span>
      <?= component('field', [
        'name' => 'name',
        'class' => 'contact-page__form-field-name',
        'required' => true,
      ]) ?>
    </div>
    <div class="contact-page__form-field-group">
      <span class="contact-page__label">Company</span>
      <?= component('field', [
        'name' => 'company',
        'class' => 'contact-page__form-field-company',
        'required' => true,
      ]) ?>
    </div>
  </div>
  <div class="contact-page__form-group">
    <div class="contact-page__form-field-group">
      <span class="contact-page__label">Email</span>
      <?= component('field', [
        'name' => 'email',
        'type' => 'email',
        'class' => 'contact-page__form-field-email',
        'required' => true,
      ]) ?>
    </div>
    <div class="contact-page__form-field-group">
      <span class="contact-page__label">Phone Number</span>
      <?= component('field', [
        'name' => 'phone_number',
        'class' => 'contact-page__form-field-phone-number',
        'required' => true,
      ]) ?>
    </div>
  </div>
  <span class="contact-page__label">Inspiration to Reaching Out</span>
  <?= component('field', [
    'name' => 'inspiration_to_reaching_out',
    'class' => 'contact-page__form-field-company',
    'required' => true,
  ]) ?>
  <span class="contact-page__label">Message</span>
  <?= component('field', [
    'name' => 'message',
    'class' => 'contact-page__form-message',
    'type' => 'textarea',
    'rows' => 8,
    'maxwords' => 500,
    'required' => true,
  ]) ?>
  <?= component('field', [
    'name' => 'terms_and_conditions',
    'class' => 'contact-page__form-terms-and-conditions',
    'type' => 'checkbox',
    'value' => true,
    'label' => 'I agree to the terms and conditions',
    'required' => true,
  ]) ?>
  <?= hd_component('button', [
    'class' => 'contact-page__form-submit',
    'modifier' => ['orange', 'uppercase'],
    'text' => 'Submit',
    'type' => 'submit',
  ]) ?>
</form>