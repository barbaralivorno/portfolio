<textarea class="<?= $_bem->element('input', ['modifier' => $type]) ?>" name="<?= $name ?? '' ?>"
  <?php if (isset($data)): ?><?= array_data_attrs_string($data) ?><?php endif ?>
  <?php if (isset($required) && $required): ?>required<?php endif ?>
  <?php if (isset($autofocus) && $autofocus): ?>autofocus<?php endif ?>
  <?php if (isset($readonly) && $readonly): ?>readonly<?php endif ?>
  <?php if (isset($disabled) && $disabled): ?>disabled<?php endif ?>
  <?php if (isset($rows) && $rows): ?>rows="<?= $rows ?>" <?php endif ?>
  <?php if (isset($placeholder) && $placeholder): ?>placeholder="<?= $placeholder ?>" <?php endif ?>
  <?php if (isset($maxlength) && $maxlength): ?>maxlength="<?= $maxlength ?>" <?php endif ?>
  autocomplete="<?= $autocomplete ?? 'off' ?>"><?= 
  $value ?? ''
?></textarea>