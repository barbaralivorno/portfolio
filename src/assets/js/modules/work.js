import { isElementVisible } from '../helpers';

class Work {
  constructor() {    
    this.setup();
    this.listen();
  }

  setup() {
    this.items = document.querySelectorAll(".work__accordion-item");
    this.titles = document.querySelectorAll(".work__accordion-item-title");
    this.currentItem = null;
    this.handleOnScreenChange();
  }

  listen() {
    window.addEventListener('scroll', () => {
      this.handleOnScreenChange();
    });

    this.titles.forEach(title => {
      title.addEventListener('click', () => {
        if (this.currentItem && this.currentItem !== title) {
          const currentItemContent = this.currentItem.nextElementSibling;
          this.currentItem.classList.remove("expanded");
          currentItemContent.style.height = "0";
        }

        const contentElement = title.nextElementSibling;
        title.classList.toggle("expanded");

        contentElement.style.height = title.classList.contains("expanded")
        ? contentElement.scrollHeight + "px"
        : "0";
        
        this.currentItem = title.classList.contains("expanded") ? title : null;
      });
    });
  }

  handleOnScreenChange() {
    if (isElementVisible('#work')) {
      let delay = 0;
      this.items.forEach((item) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, delay);
        delay += 500;
      });
    }
  }
}

export default Work;
