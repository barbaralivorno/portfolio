<input id="<?= $id ?>" class="<?= $_bem->element('input', ['modifier' => $type]) ?>" name="<?= $name ?? '' ?>"
    type="<?= in_array($type, ['date']) ? 'text' : $type ?>" value="<?= $value ?? '' ?>"
    <?php if (isset($data)): ?><?= array_data_attrs_string($data) ?><?php endif ?>
    <?php if (isset($min) && $min): ?>min="<?= $min ?>" <?php endif ?>
    <?php if (isset($required) && $required): ?>required<?php endif ?>
    <?php if (isset($autofocus) && $autofocus): ?>autofocus<?php endif ?>
    <?php if (isset($readonly) && $readonly): ?>readonly<?php endif ?>
    <?php if (isset($disabled) && $disabled): ?>disabled<?php endif ?>
    <?php if (isset($accept)): ?>accept="<?= $accept ?>" <?php endif ?>
    <?php if (isset($placeholder) && $placeholder): ?>placeholder="<?= $placeholder ?>" <?php endif ?>
    autocomplete="<?= $autocomplete ?? 'off' ?>" <?php if ($type == 'date'): ?> data-mask="00/00/0000" data-type="date"
    <?php endif ?> />
<?php if ($type == 'file'): ?>
<button class="<?= bem_class('file-picker', 'input-area') ?> field__input" type="button"
    <?php if (isset($readonly) && $readonly): ?>disabled<?php endif ?>
    <?php if (isset($disabled) && $disabled): ?>disabled<?php endif ?>>
    <span class="<?= bem_class('file-picker', 'placeholder', ['class' => 'field__input-placeholder']) ?>"
        data-default="<?= $placeholder ?>">
        <?= $placeholder ?>
    </span>
</button>
<?php endif ?>