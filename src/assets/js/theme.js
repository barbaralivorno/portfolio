import "../scss/style.scss";
import Menu from "./modules/menu";
import Hero from "./modules/hero";

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
  },
  {
    /**
     * Add the modules in format:
     * 'module-slug': ModuleClass
     */

    menu: Menu,
    'hero': Hero,
  }
);
