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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/items/deleteItemIdSlice */ \"(app-pages-browser)/./redux/slices/items/deleteItemIdSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst DeleteItemModal = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const handleCancel = ()=>{\n        dispatch((0,_redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__.resetDeleteItemId)());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Confirm Delete\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-6\",\n                    children: \"Are you sure you want to delete this item?\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCancel,\n                            className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            // onClick={onConfirm}\n                            className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DeleteItemModal, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch\n    ];\n});\n_c = DeleteItemModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteItemModal);\nvar _c;\n$RefreshReg$(_c, \"DeleteItemModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZGVsZXRlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBQzRCO0FBRTNFLE1BQU1FLGtCQUFrQjs7SUFDcEIsTUFBTUMsV0FBV0gsNERBQWNBO0lBRS9CLE1BQU1JLGVBQWU7UUFDakJELFNBQVNGLHdGQUFpQkE7SUFDOUI7SUFFQSxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFlOzs7Ozs7OEJBQzdCLDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBTzs7Ozs7OzhCQUNwQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFDR0MsU0FBU047NEJBQ1RFLFdBQVU7c0NBQ2I7Ozs7OztzQ0FHRCw4REFBQ0c7NEJBQ0csc0JBQXNCOzRCQUN0QkgsV0FBVTtzQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0E3Qk1KOztRQUNlRix3REFBY0E7OztLQUQ3QkU7QUErQk4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9kZWxldGVJdGVtLnRzeD9iYjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHJlc2V0RGVsZXRlSXRlbUlkIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2l0ZW1zL2RlbGV0ZUl0ZW1JZFNsaWNlXCI7XG5cbmNvbnN0IERlbGV0ZUl0ZW1Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHJlc2V0RGVsZXRlSXRlbUlkKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCB6LTUwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHctMS8zXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPkNvbmZpcm0gRGVsZXRlPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02XCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e29uQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlSXRlbU1vZGFsOyJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInJlc2V0RGVsZXRlSXRlbUlkIiwiRGVsZXRlSXRlbU1vZGFsIiwiZGlzcGF0Y2giLCJoYW5kbGVDYW5jZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/deleteItem.tsx\n"));

/***/ })

});