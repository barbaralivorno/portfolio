class ScrollTop {
  constructor() {
    this.scrollToFirstSection();
  }

  scrollToFirstSection() {
    const firstSection = document.querySelector(".home__hero"); // Cambia ".home__hero" por el selector de tu primera sección
    if (firstSection) {
      firstSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
}

export default ScrollTop;
