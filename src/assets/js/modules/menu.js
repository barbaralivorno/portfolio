class Menu {
  constructor() {
    this.$navIcon = $(".site-header__nav-icon");
    this.$mainNav = $(".site-header__main-nav");

    this.setup();
    this.listen();
  }

  setup() {}

  listen() {
    this.$navIcon.on("click", () => {
      this.$navIcon.toggleClass("close");
      this.$mainNav.toggleClass("site-header__main-nav--opened");
      $("body")
        .toggleClass("site--not-scrolling")
        .toggleClass("site--nav-opened");
    });
  }
}
export default Menu;
