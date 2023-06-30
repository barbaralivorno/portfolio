import $ from "jquery";
import "jquery-validation";

$.validator.setDefaults({
  ignore: ":disabled",
  errorElement: "span",
  errorClass: "field__error",
  inputValidClass: "field__input--valid",
  inputErrorClass: "field__input--invalid",
  errorPlacement: function ($error, $element) {
    const $field = $element.closest(".field");
    const $errorContainer = $field;
    $error.appendTo($errorContainer);
  },
  highlight: function (element) {
    $(element)
      .addClass(this.settings.inputErrorClass)
      .removeClass(this.settings.inputValidClass);

    $(element).closest(".field-group").addClass("field-group--invalid");
    $(element).closest(".field").addClass("field--invalid");
  },
  unhighlight: function (element) {
    $(element)
      .removeClass(this.settings.inputErrorClass)
      .addClass(this.settings.inputValidClass);
    $(element).closest(".field-group").removeClass("field-group--invalid");
    $(element).closest(".field").removeClass("field--invalid");
  },
  showErrors: function (...args) {
    $.validator.prototype.defaultShowErrors.call(this, args);
    $(this.currentForm).trigger("validated.form");
  },
});

$.validator.addMethod(
  "spamPreventionCheck",
  function (value, element) {
    return value == "Black and White";
  },
  "The answer is wrong"
);
