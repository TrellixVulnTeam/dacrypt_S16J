/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./styles/Post.module.css":
/*!********************************!*\
  !*** ./styles/Post.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Post_main__6DaI_\",\n\t\"mainImage\": \"Post_mainImage__fahW_\",\n\t\"body\": \"Post_body__RNeXl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvUG9zdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY3J5cHRvLWZlLy4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcz9lNWYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJQb3N0X21haW5fXzZEYUlfXCIsXG5cdFwibWFpbkltYWdlXCI6IFwiUG9zdF9tYWluSW1hZ2VfX2ZhaFdfXCIsXG5cdFwiYm9keVwiOiBcIlBvc3RfYm9keV9fUk5lWGxcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Post.module.css\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* binding */ Post),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//import { Navbar } from '../../components/Navbar';\nconst Post = ({ title , image , body  })=>{\n    const { 0: imageUrl , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()({\n            projectId: \"tq41upk7\",\n            dataset: \"production\"\n        });\n        setImageUrl(imgBuilder.image(image));\n    }, [\n        image\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, undefined),\n                imageUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainImage),\n                    src: imageUrl\n                }, void 0, false, {\n                    fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 26\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_4___default().body),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        blocks: body\n                    }, void 0, false, {\n                        fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n            lineNumber: 21,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/isaacokoroafor/crypto/pages/post/[slug].js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\nconst getServerSideProps = async (pageContext)=>{\n    const pageSlug = pageContext.query.slug;\n    console.log(pageSlug);\n    if (!pageSlug) {\n        return {\n            notFound: true\n        };\n    }\n    const query = encodeURIComponent(`*[ _type == \"post\" && slug.current == \"${pageSlug}\" ]`);\n    const url = `https://tq41upk7.api.sanity.io/v1/data/query/production?query=${query}`;\n    const result = await fetch(url).then((res)=>res.json()\n    );\n    const post = result.result[0];\n    if (!post) {\n        return {\n            notFound: true\n        };\n    } else {\n        return {\n            props: {\n                title: post.title,\n                body: post.body,\n                image: post.mainImage\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDSjtBQUNNO0FBQ1E7QUFDMUQsbURBQW1EO0FBRTVDLE1BQU1LLElBQUksR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBSztJQUM1QyxNQUFNLEVBUFYsR0FPV0MsUUFBUSxHQVBuQixHQU9xQkMsV0FBVyxNQUFJVCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUU1Q0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTVMsVUFBVSxHQUFHWCx3REFBZSxDQUFDO1lBQy9CWSxTQUFTLEVBQUUsVUFBVTtZQUNyQkMsT0FBTyxFQUFFLFlBQVk7U0FDeEIsQ0FBQztRQUVGSCxXQUFXLENBQUNDLFVBQVUsQ0FBQ0osS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3hDLEVBQUU7UUFBQ0EsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVaLHFCQUNJLDhEQUFDTyxLQUFHO2tCQUNGLDRFQUFDQSxLQUFHO1lBQUNDLFNBQVMsRUFBRVoscUVBQVc7OzhCQUN6Qiw4REFBQ2MsSUFBRTs4QkFBRVgsS0FBSzs7Ozs7NkJBQU07Z0JBQ2ZHLFFBQVEsa0JBQUksOERBQUNTLEtBQUc7b0JBQUNILFNBQVMsRUFBRVosMEVBQWdCO29CQUFFaUIsR0FBRyxFQUFFWCxRQUFROzs7Ozs2QkFBSTs4QkFFaEUsOERBQUNLLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVoscUVBQVc7OEJBQ3pCLDRFQUFDQyx1RUFBWTt3QkFBQ2lCLE1BQU0sRUFBRWIsSUFBSTs7Ozs7aUNBQUk7Ozs7OzZCQUMxQjs7Ozs7O3FCQUNGOzs7OztpQkFDRixDQUNOO0NBQ0gsQ0FBQztBQUVDLE1BQU1jLGtCQUFrQixHQUFHLE9BQU1DLFdBQVcsR0FBSTtJQUNuRCxNQUFNQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJO0lBQ3ZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osUUFBUSxDQUFDO0lBRXJCLElBQUksQ0FBQ0EsUUFBUSxFQUFFO1FBQ1gsT0FBTztZQUNISyxRQUFRLEVBQUUsSUFBSTtTQUNqQjtLQUNKO0lBRUQsTUFBTUosS0FBSyxHQUFHSyxrQkFBa0IsQ0FBQyxDQUFDLHVDQUF1QyxFQUFFTixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekYsTUFBTU8sR0FBRyxHQUFHLENBQUMsOERBQThELEVBQUVOLEtBQUssQ0FBQyxDQUFDO0lBRXBGLE1BQU1PLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBSUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxDQUFDO0lBQ3ZELE1BQU1DLElBQUksR0FBR0wsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQ0ssSUFBSSxFQUFFO1FBQ1AsT0FBTztZQUNIUixRQUFRLEVBQUUsSUFBSTtTQUNqQjtLQUNKLE1BQU07UUFDSCxPQUFPO1lBQ0hTLEtBQUssRUFBRTtnQkFDSGhDLEtBQUssRUFBRStCLElBQUksQ0FBQy9CLEtBQUs7Z0JBQ2pCRSxJQUFJLEVBQUU2QixJQUFJLENBQUM3QixJQUFJO2dCQUNmRCxLQUFLLEVBQUU4QixJQUFJLENBQUNsQixTQUFTO2FBRXhCO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFFRixpRUFBZWQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jcnlwdG8tZmUvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCc7XG4vL2ltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGNvbnN0IFBvc3QgPSAoeyB0aXRsZSwgaW1hZ2UsIGJvZHkgfSkgPT4ge1xuICAgIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6ICd0cTQxdXBrNycsXG4gICAgICAgICAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldEltYWdlVXJsKGltZ0J1aWxkZXIuaW1hZ2UoaW1hZ2UpKTtcbiAgICB9LCBbaW1hZ2VdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtpbWFnZVVybCAmJiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1haW5JbWFnZX0gc3JjPXtpbWFnZVVybH0gLz59XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17Ym9keX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIHBhZ2VDb250ZXh0ID0+IHtcbiAgICBjb25zdCBwYWdlU2x1ZyA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWc7XG4gICAgY29uc29sZS5sb2cocGFnZVNsdWcpXG5cbiAgICBpZiAoIXBhZ2VTbHVnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSBcIiR7cGFnZVNsdWd9XCIgXWApO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3RxNDF1cGs3LmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PSR7cXVlcnl9YDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgY29uc3QgcG9zdCA9IHJlc3VsdC5yZXN1bHRbMF07XG5cbiAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcG9zdC50aXRsZSxcbiAgICAgICAgICAgICAgICBib2R5OiBwb3N0LmJvZHksXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBvc3QubWFpbkltYWdlLFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQmxvY2tDb250ZW50IiwiUG9zdCIsInRpdGxlIiwiaW1hZ2UiLCJib2R5IiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImltZ0J1aWxkZXIiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwiaW1nIiwibWFpbkltYWdlIiwic3JjIiwiYmxvY2tzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFnZUNvbnRleHQiLCJwYWdlU2x1ZyIsInF1ZXJ5Iiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJub3RGb3VuZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsInJlc3VsdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwb3N0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();