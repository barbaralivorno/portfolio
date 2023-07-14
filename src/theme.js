/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/helpers.js":
/*!******************************!*\
  !*** ./assets/js/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElementVisible: () => (/* binding */ isElementVisible)
/* harmony export */ });
var isElementVisible = function isElementVisible(elementSelector) {
  var element = document.querySelector(elementSelector);
  if (!element) {
    return false;
  }
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  if (rect.top >= 0 && rect.top == windowHeight) {
    return true;
  }
  if (rect.bottom >= 0 && rect.bottom == windowHeight) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./assets/js/modules/about.js":
/*!************************************!*\
  !*** ./assets/js/modules/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var About = /*#__PURE__*/function () {
  function About() {
    _classCallCheck(this, About);
    this.setup();
    this.listen();
  }
  _createClass(About, [{
    key: "setup",
    value: function setup() {
      this.image = document.querySelector(".about__img-container");
      this.text = document.querySelector(".about__text");
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;
      window.addEventListener('scroll', function () {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isElementVisible)('#about')) {
          _this.handleOnScreenChange();
        }
      });
    }
  }, {
    key: "handleOnScreenChange",
    value: function handleOnScreenChange() {
      this.image.classList.add('visible');
      this.text.classList.add('visible');
    }
  }]);
  return About;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./assets/js/modules/hero.js":
/*!***********************************!*\
  !*** ./assets/js/modules/hero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./assets/js/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Hero = /*#__PURE__*/function () {
  function Hero() {
    _classCallCheck(this, Hero);
    this.setup();
  }
  _createClass(Hero, [{
    key: "setup",
    value: function setup() {
      this.sectionVisible = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isElementVisible)('#hero');
      this.site = document.querySelector(".site");
      this.heroText = document.querySelector(".hero__text");
      this.heroButton = document.querySelector(".hero__button");
      this.typewriter();
    }
  }, {
    key: "typewriter",
    value: function typewriter() {
      var _this = this;
      if (this.sectionVisible) {
        console.log('jj');
        this.site.classList.add("site--not-scrolling");
      }
      var text = ["Hi,", "I'm Barbara,", "a Frontend Developer."];
      var speed = 100;
      var index = 0;
      var arrLength = text[0].length;
      var scrollAt = 4;
      var textPos = 0;
      var contents = '';
      var row;
      var destination = this.heroText;
      var cursor = '<span class="cursor"></span>';
      var type = function type() {
        contents = ' ';
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
            _this.buttonActive();
            _this.site.classList.remove("site--not-scrolling");
          }
        } else {
          setTimeout(type, speed);
        }
      };
      type();
    }
  }, {
    key: "buttonActive",
    value: function buttonActive() {
      this.heroButton.classList.add("active");
    }
  }]);
  return Hero;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./assets/js/modules/menu.js":
/*!***********************************!*\
  !*** ./assets/js/modules/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);
    this.body = document.querySelector("body");
    this.navIcon = document.querySelector(".site-header__nav-icon");
    this.mainNav = document.querySelector(".site-header__main-nav");
    this.mainNavItem = document.querySelector(".menu-item");
    this.listen();
  }
  _createClass(Menu, [{
    key: "listen",
    value: function listen() {
      var _this = this;
      this.navIcon.addEventListener("click", function () {
        _this.navIcon.classList.toggle("close");
        _this.mainNav.classList.toggle("site-header__main-nav--opened");
        _this.body.classList.toggle("site--not-scrolling");
        _this.body.classList.toggle("site--nav-opened");
      });
      this.mainNavItem.addEventListener("click", function () {
        _this.navIcon.classList.remove("close");
        _this.mainNav.classList.remove("site-header__main-nav--opened");
        _this.body.classList.remove("site--not-scrolling");
        _this.body.classList.remove("site--nav-opened");
      });
    }
  }]);
  return Menu;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./assets/js/modules/scroll-button.js":
/*!********************************************!*\
  !*** ./assets/js/modules/scroll-button.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScrollButton = /*#__PURE__*/function () {
  function ScrollButton() {
    _classCallCheck(this, ScrollButton);
    this.setup();
    this.listen();
  }
  _createClass(ScrollButton, [{
    key: "setup",
    value: function setup() {
      this.scrollButtons = document.querySelectorAll(".scroll-button");
    }
  }, {
    key: "listen",
    value: function listen() {
      this.scrollButtons.forEach(function (scrollButton) {
        scrollButton.addEventListener("click", function (event) {
          event.preventDefault();
          var targetId = scrollButton.getAttribute("href");
          var targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth"
            });
          }
        });
      });
    }
  }]);
  return ScrollButton;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollButton);

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./assets/js/theme.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./assets/js/modules/menu.js");
/* harmony import */ var _modules_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hero */ "./assets/js/modules/hero.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ "./assets/js/modules/about.js");
/* harmony import */ var _modules_scroll_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll-button */ "./assets/js/modules/scroll-button.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Site = /*#__PURE__*/function () {
  function Site(pageName, pageMap, moduleMap) {
    _classCallCheck(this, Site);
    this.pageMap = pageMap;
    this.moduleMap = moduleMap;
    this.initModules();
    this.initPage(pageName);
  }
  _createClass(Site, [{
    key: "initPage",
    value: function initPage(pageName) {
      var Page = this.pageMap[pageName];
      if (Page) this.page = new Page(this);
    }
  }, {
    key: "initModules",
    value: function initModules() {
      var _this = this;
      this.modules = {};
      Object.entries(this.moduleMap).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          Module = _ref2[1];
        return _this.modules[name] = new Module();
      });
    }
  }, {
    key: "isDebugging",
    value: function isDebugging() {
      return window.__DEBUG__;
    }
  }]);
  return Site;
}();
new Site($("body").data("page"), {
  /**
   * Add the pages in format:
   * 'page-slug': PageClass
   */
}, {
  /**
   * Add the modules in format:
   * 'module-slug': ModuleClass
   */

  'menu': _modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"],
  'hero': _modules_hero__WEBPACK_IMPORTED_MODULE_2__["default"],
  'about': _modules_about__WEBPACK_IMPORTED_MODULE_3__["default"],
  'scroll-button': _modules_scroll_button__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=theme.js.map