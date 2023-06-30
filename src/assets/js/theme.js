import "external-svg-loader";
import "../scss/style.scss";
import "./initializers/validation";
import Blocks from "./modules/blocks";
import Menu from "./modules/menu";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";

class Site {
  constructor(pageName, pageMap, moduleMap) {
    this.pageMap = pageMap;
    this.moduleMap = moduleMap;

    this.initModules();
    this.initPage(pageName);
  }

  initPage(pageName) {
    let Page = this.pageMap[pageName];
    if (Page) this.page = new Page(this);
  }

  initModules() {
    this.modules = {};
    Object.entries(this.moduleMap).forEach(
      ([name, Module]) => (this.modules[name] = new Module())
    );
  }

  isDebugging() {
    return window.__DEBUG__;
  }
}

new Site(
  $("body").data("page"),
  {
    /**
     * Add the pages in format:
     * 'page-slug': PageClass
     */
    portfolio: PortfolioPage,
    contact: ContactPage,
  },
  {
    /**
     * Add the modules in format:
     * 'module-slug': ModuleClass
     */

    blocks: Blocks,
    menu: Menu,
  }
);
