/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\nwindow.onload = function () {\r\n    document.addEventListener('click', documentActions);\r\n\r\n    //Actions (делегирование события click)\r\n\r\n    function documentActions(e) {\r\n        const targetElement = e.target;\r\n\r\n        if(window.innerWidth > 768) {\r\n            if (targetElement.classList.contains('menu__arrow-img')) {\r\n                targetElement.closest('.menu__item').classList.toggle('_hover');\r\n            }\r\n            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {\r\n                let rmv = document.querySelectorAll('.menu__item._hover')\r\n                rmv.forEach(item => {\r\n                    item.classList.remove('_hover')\r\n                })\r\n            }\r\n        }\r\n\r\n        let search = document.querySelector('.search__form')\r\n        if (targetElement.classList.contains('search__form-icon1')) {\r\n            search.classList.toggle('_active')\r\n        }\r\n        if (!targetElement.closest('.search__form') && search.classList.contains('_active')) {\r\n            search.classList.remove('_active')\r\n        }\r\n\r\n        if(window.innerWidth < 768) {\r\n            if (targetElement.classList.contains('menu__arrow-img')) {\r\n                targetElement.closest('.menu__item').classList.toggle('_touch');\r\n            }\r\n            if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._touch').length > 0) {\r\n                let rmv = document.querySelectorAll('.menu__item._touch')\r\n                rmv.forEach(item => {\r\n                    item.classList.remove('_touch')\r\n                })\r\n            }\r\n        }\r\n\r\n        if(targetElement.classList.contains('burgerBtn')) {\r\n            document.querySelector('.burger').classList.toggle('active')\r\n            document.querySelector('.menu__body').classList.toggle('_active')\r\n        }\r\n\r\n        if(window.innerWidth < 768) {\r\n            if(targetElement.classList.contains('menu-footer__column') || targetElement.classList.contains('menu-footer__title') || targetElement.closest('.menu-footer__column')) {\r\n                targetElement.closest('.menu-footer__column').classList.toggle('_active')\r\n            } else if (!targetElement.closest('.menu-footer__column') && document.querySelectorAll('.menu-footer__column._active').length > 0) {\r\n                let rmv = document.querySelectorAll('.menu-footer__column')\r\n                rmv.forEach(item => {\r\n                    item.classList.remove('_active');\r\n                })\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;