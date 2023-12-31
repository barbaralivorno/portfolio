class Menu {
  constructor() {
    this.body = document.querySelector("body");
    this.navIcon = document.querySelector(".site-header__nav-icon");
    this.mainNav = document.querySelector(".site-header__main-nav");
    this.mainNavItem = document.querySelectorAll(".menu-item");

    this.listen();
  }

  listen() {
    this.navIcon.addEventListener("click", () => {
      this.navIcon.classList.toggle("close");
      this.mainNav.classList.toggle("site-header__main-nav--opened");
    });

    this.mainNavItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        
        this.navIcon.classList.remove("close");
        this.mainNav.classList.remove("site-header__main-nav--opened");

        const link = item.querySelector('a');
        const href = link.getAttribute("href");

        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  }
}
export default Menu;
