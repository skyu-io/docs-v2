"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ts-dedent@2.2.0";
exports.ids = ["vendor-chunks/ts-dedent@2.2.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/dist/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/dist/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dedent = void 0;\nfunction dedent(templ) {\n    var values = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        values[_i - 1] = arguments[_i];\n    }\n    var strings = Array.from(typeof templ === 'string' ? [templ] : templ);\n    strings[strings.length - 1] = strings[strings.length - 1].replace(/\\r?\\n([\\t ]*)$/, '');\n    var indentLengths = strings.reduce(function (arr, str) {\n        var matches = str.match(/\\n([\\t ]+|(?!\\s).)/g);\n        if (matches) {\n            return arr.concat(matches.map(function (match) { var _a, _b; return (_b = (_a = match.match(/[\\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; }));\n        }\n        return arr;\n    }, []);\n    if (indentLengths.length) {\n        var pattern_1 = new RegExp(\"\\n[\\t ]{\" + Math.min.apply(Math, indentLengths) + \"}\", 'g');\n        strings = strings.map(function (str) { return str.replace(pattern_1, '\\n'); });\n    }\n    strings[0] = strings[0].replace(/^\\r?\\n/, '');\n    var string = strings[0];\n    values.forEach(function (value, i) {\n        var endentations = string.match(/(?:^|\\n)( *)$/);\n        var endentation = endentations ? endentations[1] : '';\n        var indentedValue = value;\n        if (typeof value === 'string' && value.includes('\\n')) {\n            indentedValue = String(value)\n                .split('\\n')\n                .map(function (str, i) {\n                return i === 0 ? str : \"\" + endentation + str;\n            })\n                .join('\\n');\n        }\n        string += indentedValue + strings[i + 1];\n    });\n    return string;\n}\nexports.dedent = dedent;\nexports[\"default\"] = dedent;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdHMtZGVkZW50QDIuMi4wL25vZGVfbW9kdWxlcy90cy1kZWRlbnQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsWUFBWSwrSEFBK0g7QUFDeE07QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRDQUE0Qyw0Q0FBNEM7QUFDeEYsK0NBQStDLHNDQUFzQztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdjIvLi9ub2RlX21vZHVsZXMvLnBucG0vdHMtZGVkZW50QDIuMi4wL25vZGVfbW9kdWxlcy90cy1kZWRlbnQvZGlzdC9pbmRleC5qcz8wYzk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWRlbnQgPSB2b2lkIDA7XG5mdW5jdGlvbiBkZWRlbnQodGVtcGwpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFsdWVzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgc3RyaW5ncyA9IEFycmF5LmZyb20odHlwZW9mIHRlbXBsID09PSAnc3RyaW5nJyA/IFt0ZW1wbF0gOiB0ZW1wbCk7XG4gICAgc3RyaW5nc1tzdHJpbmdzLmxlbmd0aCAtIDFdID0gc3RyaW5nc1tzdHJpbmdzLmxlbmd0aCAtIDFdLnJlcGxhY2UoL1xccj9cXG4oW1xcdCBdKikkLywgJycpO1xuICAgIHZhciBpbmRlbnRMZW5ndGhzID0gc3RyaW5ncy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgc3RyKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gc3RyLm1hdGNoKC9cXG4oW1xcdCBdK3woPyFcXHMpLikvZyk7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLmNvbmNhdChtYXRjaGVzLm1hcChmdW5jdGlvbiAobWF0Y2gpIHsgdmFyIF9hLCBfYjsgcmV0dXJuIChfYiA9IChfYSA9IG1hdGNoLm1hdGNoKC9bXFx0IF0vZykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDA7IH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH0sIFtdKTtcbiAgICBpZiAoaW5kZW50TGVuZ3Rocy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHBhdHRlcm5fMSA9IG5ldyBSZWdFeHAoXCJcXG5bXFx0IF17XCIgKyBNYXRoLm1pbi5hcHBseShNYXRoLCBpbmRlbnRMZW5ndGhzKSArIFwifVwiLCAnZycpO1xuICAgICAgICBzdHJpbmdzID0gc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UocGF0dGVybl8xLCAnXFxuJyk7IH0pO1xuICAgIH1cbiAgICBzdHJpbmdzWzBdID0gc3RyaW5nc1swXS5yZXBsYWNlKC9eXFxyP1xcbi8sICcnKTtcbiAgICB2YXIgc3RyaW5nID0gc3RyaW5nc1swXTtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgdmFyIGVuZGVudGF0aW9ucyA9IHN0cmluZy5tYXRjaCgvKD86XnxcXG4pKCAqKSQvKTtcbiAgICAgICAgdmFyIGVuZGVudGF0aW9uID0gZW5kZW50YXRpb25zID8gZW5kZW50YXRpb25zWzFdIDogJyc7XG4gICAgICAgIHZhciBpbmRlbnRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgICAgICAgICAgaW5kZW50ZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3RyLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPT09IDAgPyBzdHIgOiBcIlwiICsgZW5kZW50YXRpb24gKyBzdHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgKz0gaW5kZW50ZWRWYWx1ZSArIHN0cmluZ3NbaSArIDFdO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHJpbmc7XG59XG5leHBvcnRzLmRlZGVudCA9IGRlZGVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZGVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/dist/index.js\n");

/***/ })

};
;