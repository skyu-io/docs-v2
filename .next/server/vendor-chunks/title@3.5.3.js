/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/title@3.5.3";
exports.ids = ["vendor-chunks/title@3.5.3"];
exports.modules = {

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Utilities\nconst lowerCase = __webpack_require__(/*! ./lower-case */ \"./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js\")\nconst specials = __webpack_require__(/*! ./specials */ \"./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js\")\n\nconst word = \"[^\\\\s'’\\\\(\\\\)!?;:\\\"-]\"\nconst regex = new RegExp(`(?:(?:(\\\\s?(?:^|[.\\\\(\\\\)!?;:\"-])\\\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`, \"g\")\n\nconst convertToRegExp = specials => specials.map(s => [new RegExp(`\\\\b${s}\\\\b`, 'gi'), s])\n\nfunction parseMatch(match) {\n  const firstCharacter = match[0]\n\n  // test first character\n  if (/\\s/.test(firstCharacter)) {\n    // if whitespace - trim and return\n    return match.slice(1)\n  }\n  if (/[\\(\\)]/.test(firstCharacter)) {\n    // if parens - this shouldn't be replaced\n    return null\n  }\n\n  return match\n}\n\nmodule.exports = (str, options = {}) => {\n  str = str.toLowerCase().replace(regex, (m, lead = '', forced, lower, rest, offset, string) => {\n    const isLastWord = m.length + offset >= string.length;\n\n    const parsedMatch = parseMatch(m)\n    if (!parsedMatch) {\n      return m\n    }\n    if (!forced) {\n      const fullLower = lower + rest\n\n      if (lowerCase.has(fullLower) && !isLastWord) {\n        return parsedMatch\n      }\n    }\n\n    return lead + (lower || forced).toUpperCase() + rest\n  })\n\n  const customSpecials = options.special || []\n  const replace = [...specials, ...customSpecials]\n  const replaceRegExp = convertToRegExp(replace)\n\n  replaceRegExp.forEach(([pattern, s]) => {\n    str = str.replace(pattern, s)\n  })\n\n  return str\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJGQUFjO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLHVGQUFZOztBQUVyQyw4QkFBOEI7QUFDOUIscURBQXFELGFBQWEsS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLFFBQVEsS0FBSzs7QUFFekcsd0VBQXdFLEVBQUU7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdjIvLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9pbmRleC5qcz9kMTk2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFV0aWxpdGllc1xuY29uc3QgbG93ZXJDYXNlID0gcmVxdWlyZSgnLi9sb3dlci1jYXNlJylcbmNvbnN0IHNwZWNpYWxzID0gcmVxdWlyZSgnLi9zcGVjaWFscycpXG5cbmNvbnN0IHdvcmQgPSBcIlteXFxcXHMn4oCZXFxcXChcXFxcKSE/OzpcXFwiLV1cIlxuY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAoPzooPzooXFxcXHM/KD86XnxbLlxcXFwoXFxcXCkhPzs6XCItXSlcXFxccyopKCR7d29yZH0pKXwoJHt3b3JkfSkpKCR7d29yZH0qW+KAmSddKiR7d29yZH0qKWAsIFwiZ1wiKVxuXG5jb25zdCBjb252ZXJ0VG9SZWdFeHAgPSBzcGVjaWFscyA9PiBzcGVjaWFscy5tYXAocyA9PiBbbmV3IFJlZ0V4cChgXFxcXGIke3N9XFxcXGJgLCAnZ2knKSwgc10pXG5cbmZ1bmN0aW9uIHBhcnNlTWF0Y2gobWF0Y2gpIHtcbiAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBtYXRjaFswXVxuXG4gIC8vIHRlc3QgZmlyc3QgY2hhcmFjdGVyXG4gIGlmICgvXFxzLy50ZXN0KGZpcnN0Q2hhcmFjdGVyKSkge1xuICAgIC8vIGlmIHdoaXRlc3BhY2UgLSB0cmltIGFuZCByZXR1cm5cbiAgICByZXR1cm4gbWF0Y2guc2xpY2UoMSlcbiAgfVxuICBpZiAoL1tcXChcXCldLy50ZXN0KGZpcnN0Q2hhcmFjdGVyKSkge1xuICAgIC8vIGlmIHBhcmVucyAtIHRoaXMgc2hvdWxkbid0IGJlIHJlcGxhY2VkXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBtYXRjaFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKHJlZ2V4LCAobSwgbGVhZCA9ICcnLCBmb3JjZWQsIGxvd2VyLCByZXN0LCBvZmZzZXQsIHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGlzTGFzdFdvcmQgPSBtLmxlbmd0aCArIG9mZnNldCA+PSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgY29uc3QgcGFyc2VkTWF0Y2ggPSBwYXJzZU1hdGNoKG0pXG4gICAgaWYgKCFwYXJzZWRNYXRjaCkge1xuICAgICAgcmV0dXJuIG1cbiAgICB9XG4gICAgaWYgKCFmb3JjZWQpIHtcbiAgICAgIGNvbnN0IGZ1bGxMb3dlciA9IGxvd2VyICsgcmVzdFxuXG4gICAgICBpZiAobG93ZXJDYXNlLmhhcyhmdWxsTG93ZXIpICYmICFpc0xhc3RXb3JkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZWRNYXRjaFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZWFkICsgKGxvd2VyIHx8IGZvcmNlZCkudG9VcHBlckNhc2UoKSArIHJlc3RcbiAgfSlcblxuICBjb25zdCBjdXN0b21TcGVjaWFscyA9IG9wdGlvbnMuc3BlY2lhbCB8fCBbXVxuICBjb25zdCByZXBsYWNlID0gWy4uLnNwZWNpYWxzLCAuLi5jdXN0b21TcGVjaWFsc11cbiAgY29uc3QgcmVwbGFjZVJlZ0V4cCA9IGNvbnZlcnRUb1JlZ0V4cChyZXBsYWNlKVxuXG4gIHJlcGxhY2VSZWdFeHAuZm9yRWFjaCgoW3BhdHRlcm4sIHNdKSA9PiB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UocGF0dGVybiwgcylcbiAgfSlcblxuICByZXR1cm4gc3RyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/index.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("const conjunctions = [\n  'for',\n  'and',\n  'nor',\n  'but',\n  'or',\n  'yet',\n  'so'\n]\n\nconst articles = [\n  'a',\n  'an',\n  'the'\n]\n\nconst prepositions = [\n  'aboard',\n  'about',\n  'above',\n  'across',\n  'after',\n  'against',\n  'along',\n  'amid',\n  'among',\n  'anti',\n  'around',\n  'as',\n  'at',\n  'before',\n  'behind',\n  'below',\n  'beneath',\n  'beside',\n  'besides',\n  'between',\n  'beyond',\n  'but',\n  'by',\n  'concerning',\n  'considering',\n  'despite',\n  'down',\n  'during',\n  'except',\n  'excepting',\n  'excluding',\n  'following',\n  'for',\n  'from',\n  'in',\n  'inside',\n  'into',\n  'like',\n  'minus',\n  'near',\n  'of',\n  'off',\n  'on',\n  'onto',\n  'opposite',\n  'over',\n  'past',\n  'per',\n  'plus',\n  'regarding',\n  'round',\n  'save',\n  'since',\n  'than',\n  'through',\n  'to',\n  'toward',\n  'towards',\n  'under',\n  'underneath',\n  'unlike',\n  'until',\n  'up',\n  'upon',\n  'versus',\n  'via',\n  'with',\n  'within',\n  'without'\n]\n\nmodule.exports = new Set([\n  ...conjunctions,\n  ...articles,\n  ...prepositions\n])\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9sb3dlci1jYXNlLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdjIvLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9sb3dlci1jYXNlLmpzPzNjNzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uanVuY3Rpb25zID0gW1xuICAnZm9yJyxcbiAgJ2FuZCcsXG4gICdub3InLFxuICAnYnV0JyxcbiAgJ29yJyxcbiAgJ3lldCcsXG4gICdzbydcbl1cblxuY29uc3QgYXJ0aWNsZXMgPSBbXG4gICdhJyxcbiAgJ2FuJyxcbiAgJ3RoZSdcbl1cblxuY29uc3QgcHJlcG9zaXRpb25zID0gW1xuICAnYWJvYXJkJyxcbiAgJ2Fib3V0JyxcbiAgJ2Fib3ZlJyxcbiAgJ2Fjcm9zcycsXG4gICdhZnRlcicsXG4gICdhZ2FpbnN0JyxcbiAgJ2Fsb25nJyxcbiAgJ2FtaWQnLFxuICAnYW1vbmcnLFxuICAnYW50aScsXG4gICdhcm91bmQnLFxuICAnYXMnLFxuICAnYXQnLFxuICAnYmVmb3JlJyxcbiAgJ2JlaGluZCcsXG4gICdiZWxvdycsXG4gICdiZW5lYXRoJyxcbiAgJ2Jlc2lkZScsXG4gICdiZXNpZGVzJyxcbiAgJ2JldHdlZW4nLFxuICAnYmV5b25kJyxcbiAgJ2J1dCcsXG4gICdieScsXG4gICdjb25jZXJuaW5nJyxcbiAgJ2NvbnNpZGVyaW5nJyxcbiAgJ2Rlc3BpdGUnLFxuICAnZG93bicsXG4gICdkdXJpbmcnLFxuICAnZXhjZXB0JyxcbiAgJ2V4Y2VwdGluZycsXG4gICdleGNsdWRpbmcnLFxuICAnZm9sbG93aW5nJyxcbiAgJ2ZvcicsXG4gICdmcm9tJyxcbiAgJ2luJyxcbiAgJ2luc2lkZScsXG4gICdpbnRvJyxcbiAgJ2xpa2UnLFxuICAnbWludXMnLFxuICAnbmVhcicsXG4gICdvZicsXG4gICdvZmYnLFxuICAnb24nLFxuICAnb250bycsXG4gICdvcHBvc2l0ZScsXG4gICdvdmVyJyxcbiAgJ3Bhc3QnLFxuICAncGVyJyxcbiAgJ3BsdXMnLFxuICAncmVnYXJkaW5nJyxcbiAgJ3JvdW5kJyxcbiAgJ3NhdmUnLFxuICAnc2luY2UnLFxuICAndGhhbicsXG4gICd0aHJvdWdoJyxcbiAgJ3RvJyxcbiAgJ3Rvd2FyZCcsXG4gICd0b3dhcmRzJyxcbiAgJ3VuZGVyJyxcbiAgJ3VuZGVybmVhdGgnLFxuICAndW5saWtlJyxcbiAgJ3VudGlsJyxcbiAgJ3VwJyxcbiAgJ3Vwb24nLFxuICAndmVyc3VzJyxcbiAgJ3ZpYScsXG4gICd3aXRoJyxcbiAgJ3dpdGhpbicsXG4gICd3aXRob3V0J1xuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTZXQoW1xuICAuLi5jb25qdW5jdGlvbnMsXG4gIC4uLmFydGljbGVzLFxuICAuLi5wcmVwb3NpdGlvbnNcbl0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/lower-case.js\n");

/***/ }),

/***/ "./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("const intended = [\n  'ZEIT',\n  'ZEIT Inc.',\n  'Vercel',\n  'Vercel Inc.',\n  'CLI',\n  'API',\n  'HTTP',\n  'HTTPS',\n  'JSX',\n  'DNS',\n  'URL',\n  'now.sh',\n  'now.json',\n  'vercel.app',\n  'vercel.json',\n  'CI',\n  'CD',\n  'CDN',\n  'package.json',\n  'package.lock',\n  'yarn.lock',\n  'GitHub',\n  'GitLab',\n  'CSS',\n  'Sass',\n  'JS',\n  'JavaScript',\n  'TypeScript',\n  'HTML',\n  'WordPress',\n  'Next.js',\n  'Node.js',\n  'Webpack',\n  'Docker',\n  'Bash',\n  'Kubernetes',\n  'SWR',\n  'TinaCMS',\n  'UI',\n  'UX',\n  'TS',\n  'TSX',\n  'iPhone',\n  'iPad',\n  'watchOS',\n  'iOS',\n  'iPadOS',\n  'macOS',\n  'PHP',\n  'composer.json',\n  'composer.lock',\n  'CMS',\n  'SQL',\n  'C',\n  'C#',\n  'GraphQL',\n  'GraphiQL',\n  'JWT',\n  'JWTs'\n]\n\nmodule.exports = intended\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9zcGVjaWFscy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdjIvLi9ub2RlX21vZHVsZXMvLnBucG0vdGl0bGVAMy41LjMvbm9kZV9tb2R1bGVzL3RpdGxlL2xpYi9zcGVjaWFscy5qcz8xNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGludGVuZGVkID0gW1xuICAnWkVJVCcsXG4gICdaRUlUIEluYy4nLFxuICAnVmVyY2VsJyxcbiAgJ1ZlcmNlbCBJbmMuJyxcbiAgJ0NMSScsXG4gICdBUEknLFxuICAnSFRUUCcsXG4gICdIVFRQUycsXG4gICdKU1gnLFxuICAnRE5TJyxcbiAgJ1VSTCcsXG4gICdub3cuc2gnLFxuICAnbm93Lmpzb24nLFxuICAndmVyY2VsLmFwcCcsXG4gICd2ZXJjZWwuanNvbicsXG4gICdDSScsXG4gICdDRCcsXG4gICdDRE4nLFxuICAncGFja2FnZS5qc29uJyxcbiAgJ3BhY2thZ2UubG9jaycsXG4gICd5YXJuLmxvY2snLFxuICAnR2l0SHViJyxcbiAgJ0dpdExhYicsXG4gICdDU1MnLFxuICAnU2FzcycsXG4gICdKUycsXG4gICdKYXZhU2NyaXB0JyxcbiAgJ1R5cGVTY3JpcHQnLFxuICAnSFRNTCcsXG4gICdXb3JkUHJlc3MnLFxuICAnTmV4dC5qcycsXG4gICdOb2RlLmpzJyxcbiAgJ1dlYnBhY2snLFxuICAnRG9ja2VyJyxcbiAgJ0Jhc2gnLFxuICAnS3ViZXJuZXRlcycsXG4gICdTV1InLFxuICAnVGluYUNNUycsXG4gICdVSScsXG4gICdVWCcsXG4gICdUUycsXG4gICdUU1gnLFxuICAnaVBob25lJyxcbiAgJ2lQYWQnLFxuICAnd2F0Y2hPUycsXG4gICdpT1MnLFxuICAnaVBhZE9TJyxcbiAgJ21hY09TJyxcbiAgJ1BIUCcsXG4gICdjb21wb3Nlci5qc29uJyxcbiAgJ2NvbXBvc2VyLmxvY2snLFxuICAnQ01TJyxcbiAgJ1NRTCcsXG4gICdDJyxcbiAgJ0MjJyxcbiAgJ0dyYXBoUUwnLFxuICAnR3JhcGhpUUwnLFxuICAnSldUJyxcbiAgJ0pXVHMnXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZW5kZWRcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/title@3.5.3/node_modules/title/lib/specials.js\n");

/***/ })

};
;