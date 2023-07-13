class About {
  constructor(element) {
    this.element = element;
    
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
  