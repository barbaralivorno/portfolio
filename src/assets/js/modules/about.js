class About {
  constructor(element) {
    this.element = element;
    this._handleOnScreenChange = this._handleOnScreenChange.bind(this);
    this._screenObserver = new IntersectionObserver(
      this.handleOnScreenChange,
      {
        threshold: 0,
      }
    );
    this._screenObserver.observe(this.element);

    this.setup();
  }

  setup() {
    this.image = document.querySelector(".about__img-container");
    this.text = document.querySelector(".about__text");
  }

  _handleOnScreenChange() {
    this.image.classList.add('visible');
  }
}

export default About;
  