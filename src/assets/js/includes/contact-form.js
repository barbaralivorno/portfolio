import Form from "../components/form";
import { smoothScrollTo } from "../helpers";

class ContactForm extends Form {
  setup() {
    super.setup();

    this.$element.validate({
      messages: {
        terms_and_conditions: "Please accept the terms and conditions",
      },
      submitHandler: () => {
        this.$find("message").empty();
        this.ajaxSubmit(
          this.afterSubmit.bind(this),
          this.afterSubmitFailed.bind(this)
        );
        return false;
      },
    });
  }

  afterSubmit(response) {
    this.$element.find(".contact-form__message").remove();
    this.$element
      .parent()
      .empty()
      .append(
        '<div class="contact-form__message"><h2 class="contact-form__message-title title">Thank you for reaching out!</h2><p>We will get back to you shortly, have a good day.</p></div>'
      );
    smoothScrollTo(0, 1000);
  }

  afterSubmitFailed(xhr) {
    this.$element.find(".contact-form__message").remove();
    this.$element
      .find(":submit")
      .after(
        '<div class="contact-form__message contact-form__message--error"><h2 class="contact-form__message-title title">Oops! An error occurred</h2><p>Please try again later.</p></div>'
      );
  }
}

export default ContactForm;
