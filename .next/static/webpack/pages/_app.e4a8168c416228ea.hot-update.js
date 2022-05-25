"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\nvar _this = undefined;\n\n//import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), menuOpen = ref[0], setMenuOpen = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    }), size = ref1[0], setSize = ref1[1];\n    useEffect(function() {\n        var handleResize = function() {\n            setSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return function() {\n            return window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    useEffect(function() {\n        if (size.width > 768 && menuOpen) {\n            setMenuOpen(false);\n        }\n    }, [\n        size.width,\n        menuOpen\n    ]);\n    var menuToggleHandler = function() {\n        setMenuOpen(function(p) {\n            return !p;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__content),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__content__logo),\n                    children: \"NZA\"\n                }, void 0, false, {\n                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__content__nav), \" \").concat(menuOpen ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().isMenu) : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"PageOne\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"PageTwo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"PageThree\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"CTA Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header__content__toggle),\n                    children: !menuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiMenuAltRight, {\n                        onClick: menuToggleHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineClose, {\n                        onClick: menuToggleHandler\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/isaacokoroafor/crypto/components/Header.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"7c7xfTGym2wz8oSIkmOT4YgA9qw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2lCQUNGOzs7OzthQUNDLENBQ1Q7Q0FDSDtHQTVES2YsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBOERaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IGNvbGxlY3RBc3NldHMgfSBmcm9tICduZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9wbHVnaW5zL21pZGRsZXdhcmUtcGx1Z2luJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge0JpTWVudUFsdFJpZ2h0fSBmcm9tICdyZWFjdC1pY29ucy9iaSc7XG5pbXBvcnQge0FpT3V0bGluZUNsb3NlfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe1xuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgIHNldFNpemUoe1xuICAgICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChzaXplLndpZHRoID4gNzY4ICYmIG1lbnVPcGVuKSB7XG4gICAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgICAgfVxuICB9LCBbc2l6ZS53aWR0aCwgbWVudU9wZW5dKTtcblxuICBjb25zdCBtZW51VG9nZ2xlSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRNZW51T3BlbigocCkgPT4gIXApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJfX2NvbnRlbnR9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcl9fY29udGVudF9fbG9nb30+TlpBPC9oMj5cblxuICAgICAgICA8bmF2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmhlYWRlcl9fY29udGVudF9fbmF2fSAke21lbnVPcGVuID8gY2xhc3Nlcy5pc01lbnUgOiBcIlwifWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBhZ2VPbmU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBhZ2VUd288L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBhZ2VUaHJlZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24+Q1RBIFBhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcl9fY29udGVudF9fdG9nZ2xlfT5cbiAgICAgICAgICAgIHshbWVudU9wZW4gPyAoIFxuICAgICAgICAgICAgICAgIDxCaU1lbnVBbHRSaWdodCBvbkNsaWNrPXttZW51VG9nZ2xlSGFuZGxlcn0gLz4gXG4gICAgICAgICAgICApIDogKCBcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQ2xvc2Ugb25DbGljaz17bWVudVRvZ2dsZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NlcyIsIkJpTWVudUFsdFJpZ2h0IiwiQWlPdXRsaW5lQ2xvc2UiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsInNpemUiLCJzZXRTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZW51VG9nZ2xlSGFuZGxlciIsInAiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXJfX2NvbnRlbnQiLCJoMiIsImhlYWRlcl9fY29udGVudF9fbG9nbyIsIm5hdiIsImhlYWRlcl9fY29udGVudF9fbmF2IiwiaXNNZW51IiwidWwiLCJsaSIsImEiLCJocmVmIiwiYnV0dG9uIiwiaGVhZGVyX19jb250ZW50X190b2dnbGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});