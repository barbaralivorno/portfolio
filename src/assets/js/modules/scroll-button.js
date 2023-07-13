class ScrollButton {
  constructor() {
    this.setup();
    this.listen();
  }

  setup() {
    this.scrollButtons = document.querySelectorAll(".scroll-button");
  }

  listen() {
    this.scrollButtons.forEach((scrollButton) => {
      scrollButton.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = scrollButton.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  }
}

export default ScrollButton;
