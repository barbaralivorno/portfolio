import { isElementVisible, getDevice } from '../helpers';

class About {
  constructor() {    
    this.setup();
    this.listen();
  }

  setup() {
    this.image = document.querySelector(".about__img-container");
    this.text = document.querySelector(".about__text");

    const device = getDevice();
    if(device == 'laptop' || device == 'desktop') {
      if (isElementVisible('#about')) {
        this.handleOnScreenChange();
      }
    }
  }

  listen() {
    const device = getDevice();
    if(device == 'laptop' || device == 'desktop') {
      window.addEventListener('scroll', () => {
        if (isElementVisible('#about')) {
          this.handleOnScreenChange();
        }      
      });
    }
  }

  handleOnScreenChange() {
    this.image.classList.add('visible');
    this.text.classList.add('visible');
  }
}

export default About;
