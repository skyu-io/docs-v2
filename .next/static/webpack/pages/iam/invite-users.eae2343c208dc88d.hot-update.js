"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/iam/invite-users",{

/***/ "./components/Image.jsx":
/*!******************************!*\
  !*** ./components/Image.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/.pnpm/next@14.2.6_react-dom@18.3.1_react@18.3.1/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// pass props\nfunction ImageComponent(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"1rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        border: \"1px solid rgba(0, 0, 0, 0.1)\",\n                        borderRadius: 10,\n                        padding: \"1rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: props.src,\n                        width: props.width,\n                        height: props.height\n                    }, void 0, false, {\n                        fileName: \"/Users/nilesh93/Projects/skyu/docs-v2/components/Image.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nilesh93/Projects/skyu/docs-v2/components/Image.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nilesh93/Projects/skyu/docs-v2/components/Image.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            props.caption && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    marginTop: \"0.5rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        fontStyle: \"oblique\",\n                        fontWeight: 400,\n                        display: \"flex\",\n                        justifyContent: \"center\"\n                    },\n                    children: props.caption\n                }, void 0, false, {\n                    fileName: \"/Users/nilesh93/Projects/skyu/docs-v2/components/Image.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nilesh93/Projects/skyu/docs-v2/components/Image.jsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = ImageComponent;\nvar _c;\n$RefreshReg$(_c, \"ImageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFHL0IsYUFBYTtBQUNFLFNBQVNDLGVBQWVDLEtBQUs7SUFDeEMscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFDR0MsT0FBTztvQkFDSEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUVoQkMsV0FBVztnQkFFZjswQkFHQSw0RUFBQ0o7b0JBQUlDLE9BQU87d0JBQUVJLFFBQVE7d0JBQWdDQyxjQUFjO3dCQUFLQyxTQUFTO29CQUFNOzhCQUVwRiw0RUFBQ1YsbURBQUtBO3dCQUFDVyxLQUFLVCxNQUFNUyxHQUFHO3dCQUFFQyxPQUFPVixNQUFNVSxLQUFLO3dCQUFFQyxRQUFRWCxNQUFNVyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O1lBS3RFWCxNQUFNWSxPQUFPLGtCQUNWLDhEQUFDWDtnQkFDR0MsT0FBTztvQkFDSEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsV0FBVztnQkFFZjswQkFFQSw0RUFBQ1E7b0JBQUtYLE9BQU87d0JBQUVZLFdBQVc7d0JBQVdDLFlBQVk7d0JBQUtaLFNBQVM7d0JBQVFDLGdCQUFnQjtvQkFBUzs4QkFDM0ZKLE1BQU1ZLE9BQU87Ozs7Ozs7Ozs7Ozs7QUFPdEM7S0FyQ3dCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlLmpzeD9hZmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5cbi8vIHBhc3MgcHJvcHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29tcG9uZW50KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxcmVtJyxcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIGJvcmRlciB0byBpbWFnZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSknLCBib3JkZXJSYWRpdXM6IDEwICwgcGFkZGluZzogJzFyZW0nfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvcHMuc3JjfSB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Byb3BzLmNhcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcwLjVyZW0nLFxuXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U3R5bGU6ICdvYmxpcXVlJywgZm9udFdlaWdodDogNDAwLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2FwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkltYWdlQ29tcG9uZW50IiwicHJvcHMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNhcHRpb24iLCJzcGFuIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Image.jsx\n"));

/***/ })

});