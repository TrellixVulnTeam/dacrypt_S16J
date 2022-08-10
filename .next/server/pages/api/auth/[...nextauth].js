"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorizationUrl: \"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code\"\n        })\n    ],\n    jwt: {\n        encryption: true\n    },\n    secret: process.env.secret,\n    callbacks: {\n        async jwt ({ token , account  }) {\n            // Persist the OAuth access_token to the token right after signin\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.accessToken = token.accessToken;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ3dCO0FBRXhELGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCLGlEQUFpRDtJQUMvQ0UsU0FBUyxFQUFFO1FBQ1BELGlFQUFjLENBQUM7WUFDWEUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYTtZQUN2Q0MsZ0JBQWdCLEVBQUUsb0dBQW9HO1NBQ3pILENBQUM7S0FDTDtJQUVIQyxHQUFHLEVBQUU7UUFDREMsVUFBVSxFQUFFLElBQUk7S0FDbkI7SUFDREMsTUFBTSxFQUFFUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sTUFBTTtJQUMxQkMsU0FBUyxFQUFFO1FBQ1QsTUFBTUgsR0FBRyxFQUFDLEVBQUVJLEtBQUssR0FBRUMsT0FBTyxHQUFFLEVBQUU7WUFDNUIsaUVBQWlFO1lBQ2pFLElBQUlBLE9BQU8sRUFBRTtnQkFDWEQsS0FBSyxDQUFDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsWUFBWTthQUN6QztZQUNELE9BQU9ILEtBQUs7U0FDYjtRQUNELE1BQU1JLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVKLEtBQUssR0FBRUssSUFBSSxHQUFFLEVBQUU7WUFDdEMsdUVBQXVFO1lBQ3ZFRCxPQUFPLENBQUNGLFdBQVcsR0FBR0YsS0FBSyxDQUFDRSxXQUFXO1lBQ3ZDLE9BQU9FLE9BQU87U0FDZjtLQUNGO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jcnlwdG8tZmUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb25Vcmw6ICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9wcm9tcHQ9Y29uc2VudCZhY2Nlc3NfdHlwZT1vZmZsaW5lJnJlc3BvbnNlX3R5cGU9Y29kZScsXG4gICAgICAgIH0pXG4gICAgXSxcblxuICBqd3Q6IHtcbiAgICAgIGVuY3J5cHRpb246IHRydWUsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuc2VjcmV0LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XG4gICAgICAvLyBQZXJzaXN0IHRoZSBPQXV0aCBhY2Nlc3NfdG9rZW4gdG8gdGhlIHRva2VuIHJpZ2h0IGFmdGVyIHNpZ25pblxuICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgLy8gU2VuZCBwcm9wZXJ0aWVzIHRvIHRoZSBjbGllbnQsIGxpa2UgYW4gYWNjZXNzX3Rva2VuIGZyb20gYSBwcm92aWRlci5cbiAgICAgIHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlblxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9XG4gIH1cbn0pOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb25VcmwiLCJqd3QiLCJlbmNyeXB0aW9uIiwic2VjcmV0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJhY2NvdW50IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJzZXNzaW9uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();