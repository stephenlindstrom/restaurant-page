/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPageLoad: () => (/* binding */ aboutPageLoad)\n/* harmony export */ });\n\n\nconst aboutPageLoad = function() {\n    const content = document.querySelector(\"#content\");\n\n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"About Page\";\n    content.appendChild(pageTitle);\n\n    const restaurantInfo = document.createElement(\"p\");\n    restaurantInfo.textContent = \"My Big Restaurant was first founded in 1976 by Wally Jones. He had a vision for a restaurant that served great tasting food in a friendly environment.\";\n    content.appendChild(restaurantInfo);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQtcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC1wYWdlLmpzPzAxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgYWJvdXRQYWdlTG9hZCB9O1xuXG5jb25zdCBhYm91dFBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFBhZ2VcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJlc3RhdXJhbnRJbmZvLnRleHRDb250ZW50ID0gXCJNeSBCaWcgUmVzdGF1cmFudCB3YXMgZmlyc3QgZm91bmRlZCBpbiAxOTc2IGJ5IFdhbGx5IEpvbmVzLiBIZSBoYWQgYSB2aXNpb24gZm9yIGEgcmVzdGF1cmFudCB0aGF0IHNlcnZlZCBncmVhdCB0YXN0aW5nIGZvb2QgaW4gYSBmcmllbmRseSBlbnZpcm9ubWVudC5cIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbmZvKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/about-page.js\n");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)\n/* harmony export */ });\n/* harmony import */ var _hamburger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger.jpg */ \"./src/hamburger.jpg\");\n\n\n\nconst homePageLoad = function () {\n    const content = document.querySelector(\"#content\");\n    \n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"My Big Restaurant\";\n    content.appendChild(pageTitle);\n\n    const image = document.createElement(\"img\");\n    image.src = _hamburger_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.height = 300;\n    content.appendChild(image);\n\n    const description = document.createElement(\"p\");\n    description.textContent = \"The top new hamburber restaurant in the Valley!\"\n    content.appendChild(description);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBQ2hCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsMkNBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanM/MjlmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVyZ2VySW1nIGZyb20gXCIuL2hhbWJ1cmdlci5qcGdcIjtcbmV4cG9ydCB7IGhvbWVQYWdlTG9hZCB9O1xuXG5jb25zdCBob21lUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBCaWcgUmVzdGF1cmFudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBidXJnZXJJbWc7XG4gICAgaW1hZ2UuaGVpZ2h0ID0gMzAwO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVGhlIHRvcCBuZXcgaGFtYnVyYmVyIHJlc3RhdXJhbnQgaW4gdGhlIFZhbGxleSFcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home-page.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n\n\n\n\nconst clearContent = function () {\n    const content = document.querySelector(\"#content\");\n    content.textContent = \"\";\n};\n\n(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\n\nconst menuButton = document.querySelector(\"#menu\");\nmenuButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();\n});\n\nconst homeButton = document.querySelector(\"#home\");\nhomeButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\n});\n\nconst aboutButton = document.querySelector(\"#about\");\naboutButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_about_page__WEBPACK_IMPORTED_MODULE_2__.aboutPageLoad)();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyQztBQUNBO0FBQ0U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFZO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51LXBhZ2VcIjtcbmltcG9ydCB7IGFib3V0UGFnZUxvYWQgfSBmcm9tIFwiLi9hYm91dC1wYWdlXCI7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuaG9tZVBhZ2VMb2FkKCk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWVudVBhZ2VMb2FkKCk7XG59KTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBob21lUGFnZUxvYWQoKTtcbn0pO1xuXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIik7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGFib3V0UGFnZUxvYWQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)\n/* harmony export */ });\n\n\nconst menuPageLoad = function () {\n    const content = document.querySelector(\"#content\");\n\n    const pageTitle = document.createElement(\"h1\");\n    pageTitle.textContent = \"Menu\";\n    content.appendChild(pageTitle);\n\n    const menu = document.createElement(\"ul\");\n    const menuItems = [\"Burger\", \"Fries\", \"Milkshake\"];\n    menuItems.forEach((item) => {\n        const menuItem = document.createElement(\"li\");\n        menuItem.textContent = item;\n        menu.appendChild(menuItem);\n    })\n    content.appendChild(menu);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcz9kMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IG1lbnVQYWdlTG9hZCB9O1xuXG5jb25zdCBtZW51UGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcIkJ1cmdlclwiLCBcIkZyaWVzXCIsIFwiTWlsa3NoYWtlXCJdO1xuICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu-page.js\n");

/***/ }),

/***/ "./src/hamburger.jpg":
/*!***************************!*\
  !*** ./src/hamburger.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf0a07ff052bafde9a30.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;