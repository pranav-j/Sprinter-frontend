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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/slices/items/deleteItemIdSlice */ \"(app-pages-browser)/./redux/slices/items/deleteItemIdSlice.ts\");\n/* harmony import */ var _redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/items/itemsSlice */ \"(app-pages-browser)/./redux/slices/items/itemsSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DeleteItemModal = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const deleteItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state1)=>state1.deleteItemReducer.deleteItemId);\n    const deleteItemStatus = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(state);\n    const handleCancel = ()=>{\n        dispatch((0,_redux_slices_items_deleteItemIdSlice__WEBPACK_IMPORTED_MODULE_2__.resetDeleteItemId)());\n    };\n    const handleDelete = ()=>{\n        if (deleteItemId) {\n            dispatch((0,_redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(deleteItemId));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Confirm Delete\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-6\",\n                    children: \"Are you sure you want to delete this item?\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCancel,\n                            className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleDelete,\n                            className: \"bg-red-500 text-white px-4 py-2 rounded\",\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/deleteItem.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DeleteItemModal, \"QZHkqVZaYccyp+gfn1KsCwcUo+s=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = DeleteItemModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteItemModal);\nvar _c;\n$RefreshReg$(_c, \"DeleteItemModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZGVsZXRlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErRDtBQUNZO0FBQ2Q7QUFFN0QsTUFBTUksa0JBQWtCOztJQUNwQixNQUFNQyxXQUFXTCw0REFBY0E7SUFDL0IsTUFBTU0sZUFBZUwsNERBQWNBLENBQUMsQ0FBQ00sU0FBVUEsT0FBTUMsaUJBQWlCLENBQUNGLFlBQVk7SUFDbkYsTUFBTUcsbUJBQW1CUiw0REFBY0EsQ0FBRU07SUFFekMsTUFBTUcsZUFBZTtRQUNqQkwsU0FBU0gsd0ZBQWlCQTtJQUM5QjtJQUVBLE1BQU1TLGVBQWU7UUFDakIsSUFBSUwsY0FBYztZQUNkRCxTQUFTRiwwRUFBVUEsQ0FBQ0c7UUFDeEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWU7Ozs7Ozs4QkFDN0IsOERBQUNFO29CQUFFRixXQUFVOzhCQUFPOzs7Ozs7OEJBQ3BCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUNHQyxTQUFTUDs0QkFDVEcsV0FBVTtzQ0FDYjs7Ozs7O3NDQUdELDhEQUFDRzs0QkFDR0MsU0FBU047NEJBQ1RFLFdBQVU7c0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBckNNVDs7UUFDZUosd0RBQWNBO1FBQ1ZDLHdEQUFjQTtRQUNWQSx3REFBY0E7OztLQUhyQ0c7QUF1Q04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9kZWxldGVJdGVtLnRzeD9iYjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyByZXNldERlbGV0ZUl0ZW1JZCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9pdGVtcy9kZWxldGVJdGVtSWRTbGljZVwiO1xuaW1wb3J0IHsgZGVsZXRlSXRlbSB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlXCI7XG5cbmNvbnN0IERlbGV0ZUl0ZW1Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3QgZGVsZXRlSXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kZWxldGVJdGVtUmVkdWNlci5kZWxldGVJdGVtSWQpO1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1TdGF0dXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpKVxuXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChyZXNldERlbGV0ZUl0ZW1JZCgpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZGVsZXRlSXRlbUlkKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVJdGVtKGRlbGV0ZUl0ZW1JZCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHotNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgdy0xLzNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+Q29uZmlybSBEZWxldGU8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVJdGVtTW9kYWw7Il0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJyZXNldERlbGV0ZUl0ZW1JZCIsImRlbGV0ZUl0ZW0iLCJEZWxldGVJdGVtTW9kYWwiLCJkaXNwYXRjaCIsImRlbGV0ZUl0ZW1JZCIsInN0YXRlIiwiZGVsZXRlSXRlbVJlZHVjZXIiLCJkZWxldGVJdGVtU3RhdHVzIiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlRGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/deleteItem.tsx\n"));

/***/ })

});