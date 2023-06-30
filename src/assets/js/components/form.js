import Component from "hd-components/component";

class Form extends Component {
  setup() {
    this.loadingStatus = false;
  }

  lock() {
    this.$element.addClass("form--locked");
  }

  unlock() {
    this.$element.removeClass("form--locked");
  }

  toggleBusyStatus() {
    this.loadingStatus = !this.loadingStatus;
    if (this.loadingStatus) {
      this.lock();
      this.$element.addClass("form--busy");
      this.$element
        .find(":submit")
        .addClass("button--busy")
        .prop("disabled", true);
    } else {
      this.unlock();
      this.$element.removeClass("form--busy");
      this.$element
        .find(":submit")
        .removeClass("button--busy")
        .prop("disabled", false);
    }
  }

  submit() {
    this.toggleBusyStatus();
    this.element.submit();
  }

  ajaxSubmit(successCallback, errorCallback, options = {}) {
    const formData = new FormData(this.element);
    this.toggleBusyStatus();
    $.ajax({
      url: this.$element.attr("action"),
      data: formData,
      processData: false,
      contentType: false,
      type: "POST",
      success: (response) => {
        this.toggleBusyStatus();
        successCallback(response);
      },
      error: (response) => {
        this.toggleBusyStatus();
        errorCallback(response);
      },
      ...options,
    });
  }
}

export default Form;
