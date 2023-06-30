class ScrollSnap {
  constructor(container, options = { enabled: true }) {
    this.container = container;
    this.enabled = options.enabled;
    this._handleContainerIntersectionChange =
      this._handleContainerIntersectionChange.bind(this);
    this._handleItemIntersectionChange =
      this._handleItemIntersectionChange.bind(this);
    this._setup();
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
    document.documentElement.classList.remove("snap");
  }

  _setup() {
    this.containerIntersectionObserver = new IntersectionObserver(
      this._handleContainerIntersectionChange,
      {
        threshold: [...Array(100).keys()].map((n) => n / 100),
      }
    );
    this.containerIntersectionObserver.observe(this.container);

    this.items = Array.from(this.container.children);
    this.itemIntersectionObserver = new IntersectionObserver(
      this._handleItemIntersectionChange,
      {
        threshold: [...Array(10).keys()].map((n) => n / 10),
      }
    );
    this.items.forEach((item) => {
      this.itemIntersectionObserver.observe(item);
    });
  }

  _handleContainerIntersectionChange([entry]) {
    if (this.enabled) {
      if (entry.intersectionRect.height > window.innerHeight * 0.65)
        document.documentElement.classList.add("snap");
      else document.documentElement.classList.remove("snap");
    }
  }

  _handleItemIntersectionChange(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio > 0.9) {
          this.container.dispatchEvent(
            new CustomEvent("snap", { detail: { item: entry.target } })
          );
        }
      }
    });
  }
}

export default ScrollSnap;
