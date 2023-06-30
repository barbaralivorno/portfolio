import Media from "hd-components/media";
import Popup from "hd-components/popup";
import { getDevice, getRectCenteredOffset, smoothScrollTo } from "../helpers";
import ScrollSnap from "../util/scroll-snap";
import Page from "./page";

class PortfolioPage extends Page {
  setup() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const navButtons = document.querySelectorAll(
      ".portfolio-page__numbered-list-navigation-list-item-button"
    );
    navButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        this.scrollToItem(
          document.getElementById(button.getAttribute("data-item"))
        );
      });
    });

    const items = document.querySelectorAll(
      ".portfolio-page__numbered-list-item"
    );

    const itemList = document.querySelector(
      ".portfolio-page__numbered-list-items"
    );

    const device = getDevice();
    this.scrollSnap = new ScrollSnap(itemList, {
      enabled: device != "phone" && device != "tablet",
    });

    itemList.addEventListener("snap", ({ detail: { item } }) => {
      navButtons.forEach((button, index) => {
        const isActive = index == item.dataset.index;
        if (isActive) {
          button.parentElement.classList.add(
            "numbered-list__navigation-list-item--active"
          );
        } else {
          button.parentElement.classList.remove(
            "numbered-list__navigation-list-item--active"
          );
        }
      });
    });

    items.forEach((item) => {
      const $media = $(item).find(".media");
      if ($media.length > 0) {
        new Media($media);
      }
    });

    const learMoreButtons = document.querySelectorAll(
      ".portfolio-page__numbered-list-item-button"
    );
    learMoreButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const targetItem = event.currentTarget.closest(
          ".portfolio-page__numbered-list-item"
        );
        const targetItemCenteredTop = getRectCenteredOffset(
          targetItem.getBoundingClientRect()
        );
        const scrollSnapEnabled = this.scrollSnap.enabled;
        this.scrollSnap.disable();
        smoothScrollTo(targetItemCenteredTop, 1000, () => {
          const popupElem = targetItem.querySelector(".popup");
          const popup = new Popup(popupElem);
          const popupOffset = `calc(${
            targetItem.getBoundingClientRect().top
          }px - var(--numbered-list-popup-triangle-height) - 2vh)`;
          popupElem.style.setProperty(
            "--numbered-list-popup-offset",
            popupOffset
          );
          popup.open();
          if (scrollSnapEnabled) this.scrollSnap.enable();
        });
      });
    });
  }

  scrollToItem(item) {
    window.scrollTo({
      top: getRectCenteredOffset(item.getBoundingClientRect()),
      behavior: "smooth",
    });
  }
}

export default PortfolioPage;
