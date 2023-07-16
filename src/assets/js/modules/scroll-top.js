class ScrollTop {
  constructor() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

export default ScrollTop;
