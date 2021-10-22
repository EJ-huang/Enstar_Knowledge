/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _js_gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gsap */ \"./js/gsap.js\");\n/* harmony import */ var _js_gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_gsap__WEBPACK_IMPORTED_MODULE_1__);\n // 使用 ESM 方式引入\r\n\r\n\n\n//# sourceURL=webpack://knowledge/./index.js?");

/***/ }),

/***/ "./js/gsap.js":
/*!********************!*\
  !*** ./js/gsap.js ***!
  \********************/
/***/ (() => {

eval("function animateFrom(elem, direction) {\r\n            direction = direction || 1;\r\n            var x = 0,\r\n                y = direction * -500;\r\n            if (elem.classList.contains(\"gs_reveal_fromLeft\")) {\r\n                x = 100;\r\n                y = 0;\r\n            } else if (elem.classList.contains(\"gs_reveal_fromRight\")) {\r\n                x = -100;\r\n                y = 0;\r\n            }\r\n            elem.style.transform = \"translate(\" + x + \"px, \" + y + \"px)\";\r\n            elem.style.opacity = \"0\";\r\n            gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {\r\n                duration: 1.25,\r\n                x: 0,\r\n                y: 0,\r\n                autoAlpha: 1,\r\n                ease: \"expo\",\r\n                overwrite: \"auto\"\r\n            });\r\n        }\r\n\r\n        function hide(elem) {\r\n            gsap.set(elem, { autoAlpha: 0 });\r\n        }\r\n\r\n        document.addEventListener(\"DOMContentLoaded\", function () {\r\n            gsap.registerPlugin(ScrollTrigger);\r\n\r\n            gsap.utils.toArray(\".gs_reveal\").forEach(function (elem) {\r\n                hide(elem); // assure that the element is hidden when scrolled into view\r\n\r\n                ScrollTrigger.create({\r\n                    trigger: elem,\r\n                    onEnter: function () { animateFrom(elem) },\r\n                    onEnterBack: function () { animateFrom(elem, -1) },\r\n                    onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view\r\n                });\r\n            });\r\n        });\r\n\r\n\r\n        // ScrollTrigger.create({\r\n        //     start: 'top -150',\r\n        //     end: 99999,\r\n        //     toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}\r\n        // });\r\n\r\n//         const showAnim = gsap.from('.main-tool-bar', { \r\n//   yPercent: -10,\r\n//   paused: true,\r\n//   duration: 0.2\r\n// }).progress(1);\r\n\r\n// ScrollTrigger.create({\r\n//   start: \"top top\",\r\n//   end: 0,\r\n//   onUpdate: (self) => {\r\n//     self.direction === -1 ? showAnim.play() : showAnim.reverse()\r\n//   }\r\n// });\r\n\n\n//# sourceURL=webpack://knowledge/./js/gsap.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://knowledge/./scss/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;