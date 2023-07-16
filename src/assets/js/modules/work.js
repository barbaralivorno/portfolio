import { isElementVisible } from '../helpers';

class Work {
  constructor() {    
    this.setup();
    this.listen();
  }

  setup() {
    this.items = document.querySelectorAll(".work__list-item");
  }

  listen() {
    window.addEventListener('scroll', () => {
      if (isElementVisible('#work')) {
        let delay = 0;
        this.items.forEach((item) => {
          setTimeout(() => {
            this.handleOnScreenChange(item);
          }, delay);
          delay += 500;
        });
      }
    });
  }

  handleOnScreenChange(item) {
    item.classList.add("visible");
  }
}

export default Work;
