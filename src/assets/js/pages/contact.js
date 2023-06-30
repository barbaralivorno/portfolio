import Media from "hd-components/media";
import ContactForm from "../includes/contact-form";
import Page from "./page";

class ContactPage extends Page {
  setup() {
    this.$contactForm = $(".contact-page__form");
    this.contactForm = new ContactForm(this.$contactForm);

    this.$video = $(".contact-page__background-video");
    this.video = new Media(this.$video);
  }
}

export default ContactPage;
