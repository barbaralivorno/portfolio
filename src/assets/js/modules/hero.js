import { isElementVisible } from '../helpers';
class Hero {
  constructor() {
    this.setup();
  }

  setup() {
    this.sectionVisible = isElementVisible('#hero');
    this.site = document.querySelector(".site");
    this.hero = document.querySelector(".hero");
    this.heroText = document.querySelector(".hero__text");
    this.heroButton = document.querySelector(".hero__button");
    this.typewriter();
  }

  typewriter() {
    if(this.sectionVisible) {
      this.site.classList.add("site--not-scrolling");
    }

    let text = [
      "Hi,",
      "I'm Barbara,",
      "a Frontend Developer."
    ];
    
    let speed = 100;
    let index = 0;
    let arrLength = text[0].length;
    let scrollAt = 4;
    let textPos = 0;
    let contents = '';
    let row;
    
    let destination = this.heroText;

    let cursor = '<span class="cursor"></span>';

    let type = () => {
      contents =  ' ';
      row = Math.max(0, index - scrollAt);

      while (row < index) {
        contents += text[row++] + '<br />';
      }

      destination.innerHTML = contents + text[index].substring(0, textPos) + cursor;

      if (textPos++ == arrLength) {
        textPos = 0;
        index++;
      
        if (index != text.length) {
          arrLength = text[index].length;
          setTimeout(type, 500);
        } else {
          this.buttonActive();
          this.site.classList.remove("site--not-scrolling");
        }
      } else {
        setTimeout(type, speed);
      }      
    }

    type();
  }

  buttonActive() {
    this.heroButton.classList.add("active");
  }
}

export default Hero;
