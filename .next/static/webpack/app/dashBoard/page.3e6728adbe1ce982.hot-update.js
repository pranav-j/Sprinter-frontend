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

/***/ "(app-pages-browser)/./app/components/subComponents/deleteItem.tsx":
/*!*****************************************************!*\
  !*** ./app/components/subComponents/deleteItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/items/deleteItemIdSlice */ \"(app-pages-browser)/./redux/slices/items/deleteItemIdSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst DeleteItemModal = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const deleteItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(state);\n    const handleCancel = ()=>{\n        dispatch((0,_redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__.resetDeleteItemId)());\n    };\n    const handleDelete = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Confirm Delete\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-6\",\n                    children: \"Are you sure you want to delete this item?\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCancel,\n                            className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleDelete,\n                            className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DeleteItemModal, \"wRWOBlVlx8wHrMjAFzANc9EBnIo=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = DeleteItemModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteItemModal);\nvar _c;\n$RefreshReg$(_c, \"DeleteItemModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZGVsZXRlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStEO0FBQ1k7QUFFM0UsTUFBTUcsa0JBQWtCOztJQUNwQixNQUFNQyxXQUFXSiw0REFBY0E7SUFDL0IsTUFBTUssZUFBZUosNERBQWNBLENBQUVLO0lBRXJDLE1BQU1DLGVBQWU7UUFDakJILFNBQVNGLHdGQUFpQkE7SUFDOUI7SUFFQSxNQUFNTSxlQUFlLEtBRXJCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZTs7Ozs7OzhCQUM3Qiw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQU87Ozs7Ozs4QkFDcEIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQ0dDLFNBQVNQOzRCQUNURyxXQUFVO3NDQUNiOzs7Ozs7c0NBR0QsOERBQUNHOzRCQUNHQyxTQUFTTjs0QkFDVEUsV0FBVTtzQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FsQ01QOztRQUNlSCx3REFBY0E7UUFDVkMsd0RBQWNBOzs7S0FGakNFO0FBb0NOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZGVsZXRlSXRlbS50c3g/YmI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgcmVzZXREZWxldGVJdGVtSWQgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvaXRlbXMvZGVsZXRlSXRlbUlkU2xpY2VcIjtcblxuY29uc3QgRGVsZXRlSXRlbU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCBkZWxldGVJdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpKVxuXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChyZXNldERlbGV0ZUl0ZW1JZCgpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgei01MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyB3LTEvM1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTRcIj5Db25maXJtIERlbGV0ZTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNlwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbGV0ZUl0ZW1Nb2RhbDsiXSwibmFtZXMiOlsidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInJlc2V0RGVsZXRlSXRlbUlkIiwiRGVsZXRlSXRlbU1vZGFsIiwiZGlzcGF0Y2giLCJkZWxldGVJdGVtSWQiLCJzdGF0ZSIsImhhbmRsZUNhbmNlbCIsImhhbmRsZURlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/deleteItem.tsx\n"));

/***/ })

});