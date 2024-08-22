"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier@1.1.0";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier@1.1.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"./node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/values.js\");\n\n\n/**\n * Normalize an identifier (as found in references, definitions).\n *\n * Collapses markdown whitespace, trim, and then lower- and uppercase.\n *\n * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their\n * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different\n * uppercase character (U+0398 (`Θ`)).\n * So, to get a canonical form, we perform both lower- and uppercase.\n *\n * Using uppercase last makes sure keys will never interact with default\n * prototypal values (such as `constructor`): nothing in the prototype of\n * `Object` is uppercase.\n *\n * @param {string} value\n *   Identifier to normalize.\n * @returns {string}\n *   Normalized identifier.\n */\nfunction normalizeIdentifier(value) {\n  return (\n    value\n      // Collapse markdown whitespace.\n      .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__.values.space)\n      // Trim.\n      .replace(/^ | $/g, '')\n      // Some characters are considered “uppercase”, but if their lowercase\n      // counterpart is uppercased will result in a different uppercase\n      // character.\n      // Hence, to get that form, we perform both lower- and uppercase.\n      // Upper case makes sure keys will not interact with default prototypal\n      // methods: no method is uppercase.\n      .toLowerCase()\n      .toUpperCase()\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXJAMS4xLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUVBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy12Mi8uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllckAxLjEuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvZGV2L2luZGV4LmpzPzJlOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt2YWx1ZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC92YWx1ZXMuanMnXG5cbi8qKlxuICogTm9ybWFsaXplIGFuIGlkZW50aWZpZXIgKGFzIGZvdW5kIGluIHJlZmVyZW5jZXMsIGRlZmluaXRpb25zKS5cbiAqXG4gKiBDb2xsYXBzZXMgbWFya2Rvd24gd2hpdGVzcGFjZSwgdHJpbSwgYW5kIHRoZW4gbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gKlxuICogU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgc3VjaCBhcyBVKzAzRjQgKGDPtGApLCBidXQgaWYgdGhlaXJcbiAqIGxvd2VyY2FzZSBjb3VudGVycGFydCAoVSswM0I4IChgzrhgKSkgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudFxuICogdXBwZXJjYXNlIGNoYXJhY3RlciAoVSswMzk4IChgzphgKSkuXG4gKiBTbywgdG8gZ2V0IGEgY2Fub25pY2FsIGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAqXG4gKiBVc2luZyB1cHBlcmNhc2UgbGFzdCBtYWtlcyBzdXJlIGtleXMgd2lsbCBuZXZlciBpbnRlcmFjdCB3aXRoIGRlZmF1bHRcbiAqIHByb3RvdHlwYWwgdmFsdWVzIChzdWNoIGFzIGBjb25zdHJ1Y3RvcmApOiBub3RoaW5nIGluIHRoZSBwcm90b3R5cGUgb2ZcbiAqIGBPYmplY3RgIGlzIHVwcGVyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgSWRlbnRpZmllciB0byBub3JtYWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBOb3JtYWxpemVkIGlkZW50aWZpZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWVcbiAgICAgIC8vIENvbGxhcHNlIG1hcmtkb3duIHdoaXRlc3BhY2UuXG4gICAgICAucmVwbGFjZSgvW1xcdFxcblxcciBdKy9nLCB2YWx1ZXMuc3BhY2UpXG4gICAgICAvLyBUcmltLlxuICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKVxuICAgICAgLy8gU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgYnV0IGlmIHRoZWlyIGxvd2VyY2FzZVxuICAgICAgLy8gY291bnRlcnBhcnQgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudCB1cHBlcmNhc2VcbiAgICAgIC8vIGNoYXJhY3Rlci5cbiAgICAgIC8vIEhlbmNlLCB0byBnZXQgdGhhdCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gICAgICAvLyBVcHBlciBjYXNlIG1ha2VzIHN1cmUga2V5cyB3aWxsIG5vdCBpbnRlcmFjdCB3aXRoIGRlZmF1bHQgcHJvdG90eXBhbFxuICAgICAgLy8gbWV0aG9kczogbm8gbWV0aG9kIGlzIHVwcGVyY2FzZS5cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudG9VcHBlckNhc2UoKVxuICApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;