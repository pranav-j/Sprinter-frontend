"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashBoard/page",{

/***/ "(app-pages-browser)/./app/components/subComponents/feed.tsx":
/*!***********************************************!*\
  !*** ./app/components/subComponents/feed.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\nconst Feed = ()=>{\n    _s();\n    const itemsWithActivityLog = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.itemsReducer.items).filter((item)=>item.activityLog.length > 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-4 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Feed\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            itemsWithActivityLog.map((item)=>{\n                var _item_activityLog;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: item === null || item === void 0 ? void 0 : (_item_activityLog = item.activityLog) === null || _item_activityLog === void 0 ? void 0 : _item_activityLog.map((log, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center border-b py-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: log.change\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \" text-gray-500\",\n                                    children: new Date(log.changedAt).toLocaleDateString()\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 25\n                        }, undefined))\n                }, item._id, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/feed.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Feed, \"bRaY7Fsh/GrWHjZMhGvF04Z7BZI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZmVlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFHL0MsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyx1QkFBdUJGLDREQUFjQSxDQUFDLENBQUNHLFFBQVVBLE1BQU1DLFlBQVksQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsV0FBVyxDQUFDQyxNQUFNLEdBQUc7SUFFNUgscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OztZQUN2Q1QscUJBQXFCVyxHQUFHLENBQUMsQ0FBQ047b0JBRWxCQTtxQ0FETCw4REFBQ0c7OEJBQ0lILGlCQUFBQSw0QkFBQUEsb0JBQUFBLEtBQU1DLFdBQVcsY0FBakJELHdDQUFBQSxrQkFBbUJNLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDMUIsOERBQUNMOzRCQUFnQkMsV0FBVTs7OENBQ3ZCLDhEQUFDSzs4Q0FBTUYsSUFBSUcsTUFBTTs7Ozs7OzhDQUNqQiw4REFBQ0Q7b0NBQUtMLFdBQVU7OENBQWtCLElBQUlPLEtBQUtKLElBQUlLLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7OzJCQUZ0RUw7Ozs7O21CQUZSUixLQUFLYyxHQUFHOzs7Ozs7Ozs7Ozs7QUFZbEM7R0FuQk1wQjs7UUFDMkJELHdEQUFjQTs7O0tBRHpDQztBQXFCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2ZlZWQudHN4PzdkOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnOyAvLyBPcHRpb25hbDogZm9yIGRhdGUgZm9ybWF0dGluZ1xuXG5jb25zdCBGZWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zV2l0aEFjdGl2aXR5TG9nID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtc1JlZHVjZXIuaXRlbXMpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hY3Rpdml0eUxvZy5sZW5ndGggPiAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkZlZWQ8L2gxPlxuICAgICAgICAgICAge2l0ZW1zV2l0aEFjdGl2aXR5TG9nLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbT8uYWN0aXZpdHlMb2c/Lm1hcCgobG9nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2cuY2hhbmdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1ncmF5LTUwMFwiPntuZXcgRGF0ZShsb2cuY2hhbmdlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcbiJdLCJuYW1lcyI6WyJ1c2VBcHBTZWxlY3RvciIsIkZlZWQiLCJpdGVtc1dpdGhBY3Rpdml0eUxvZyIsInN0YXRlIiwiaXRlbXNSZWR1Y2VyIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiYWN0aXZpdHlMb2ciLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImxvZyIsImluZGV4Iiwic3BhbiIsImNoYW5nZSIsIkRhdGUiLCJjaGFuZ2VkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/feed.tsx\n"));

/***/ })

});