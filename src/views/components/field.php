<?php
  $type = $type ?? 'text';
  $partial = in_array($type, ['text', 'email', 'checkbox', 'date', 'file']) ? 'input' : $type;
  $id = uniqid('input-');
  $modifier = $modifier ?? [];
  $modifier = (isset($required) && $required) ? array_merge(array_wrap($modifier), ['required']) : $modifier;
  $modifier = array_merge(array_wrap($modifier), [$type]);
  $parent = $parent ?? null;
?>
<div class="<?= $_bem->block(compact('modifier')) ?>">
  <?php if(isset($label) && $type != 'checkbox'): ?>
    <label for="<?= $id ?>" class="field__label"><?= $label ?></label>
  <?php endif ?>
  <?= partial("includes/fields/$partial", compact('type', 'id') + $__locals) ?>
  <?php if(isset($label) && $type == 'checkbox'): ?>
    <label for="<?= $id ?>" class="field__label"><?= $label ?></label>
  <?php endif ?>
</div>
