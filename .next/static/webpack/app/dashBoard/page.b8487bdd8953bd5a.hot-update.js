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

/***/ "(app-pages-browser)/./app/components/subComponents/sprintCard.tsx":
/*!*****************************************************!*\
  !*** ./app/components/subComponents/sprintCard.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_slices_sprints_sprintsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/slices/sprints/sprintsSlice */ \"(app-pages-browser)/./redux/slices/sprints/sprintsSlice.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/components/subComponents/item.tsx\");\n/* harmony import */ var _dropArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropArea */ \"(app-pages-browser)/./app/components/subComponents/dropArea.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SprintCard = (param)=>{\n    let { sprint } = param;\n    _s();\n    const items = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.itemsReducer.items);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const sprintItems = items.filter((item)=>item.sprintId === sprint._id);\n    sprintItems.sort((a, b)=>{\n        var _a_order, _b_order;\n        return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);\n    });\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    console.log(\"sprintItems...........\", sprintItems);\n    const handleStartSprint = async ()=>{\n        dispatch((0,_redux_slices_sprints_sprintsSlice__WEBPACK_IMPORTED_MODULE_1__.startSprint)(sprint._id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2 flex flex-col w-full border-b-2 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center border-b-2 py-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg font-bold px-4\",\n                        children: sprint.sprintName\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleStartSprint,\n                        className: \"px-4\",\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#ffffff]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        index: 0,\n                        moveToSprintId: sprint._id\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    sprintItems.length = sprintItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, index, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    index: index + 1,\n                                    moveToSprintId: sprint._id\n                                }, \"drop-\".concat(index), false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprintCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SprintCard, \"Xx+zBdJ24wWldop7QRIrJDNEXFM=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = SprintCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SprintCard);\nvar _c;\n$RefreshReg$(_c, \"SprintCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvc3ByaW50Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEU7QUFDWDtBQUNyQztBQUNRO0FBT2xDLE1BQU1LLGFBQWE7UUFBQyxFQUFDQyxNQUFNLEVBQWE7O0lBRXBDLE1BQU1DLFFBQVFOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLFlBQVksQ0FBQ0YsS0FBSztJQUNoRSxNQUFNRyxlQUFlVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxXQUFXLENBQUNDLElBQUk7SUFDckUsTUFBTUMsY0FBY04sTUFBTU8sTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxRQUFRLEtBQUtWLE9BQU9XLEdBQUc7SUFDckVKLFlBQVlLLElBQUksQ0FBQyxDQUFDQyxHQUFHQztZQUFPRCxVQUFpQkM7ZUFBbEIsQ0FBQ0QsQ0FBQUEsV0FBQUEsRUFBRUUsS0FBSyxjQUFQRixzQkFBQUEsV0FBVyxLQUFNQyxDQUFBQSxDQUFBQSxXQUFBQSxFQUFFQyxLQUFLLGNBQVBELHNCQUFBQSxXQUFXO0lBQUM7SUFFekQsTUFBTUUsV0FBV3BCLDREQUFjQTtJQUUvQnFCLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJYO0lBRXRDLE1BQU1ZLG9CQUFvQjtRQUN0QkgsU0FBU3RCLCtFQUFXQSxDQUFDTSxPQUFPVyxHQUFHO0lBQ25DO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEwQnJCLE9BQU91QixVQUFVOzs7Ozs7b0JBQ3ZEbkIsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjb0IsSUFBSSxNQUFLLHdCQUNyQiw4REFBQ0M7d0JBQU9DLFNBQVNQO3dCQUFtQkUsV0FBVTtrQ0FBTzs7Ozs7b0NBQ3JEOzs7Ozs7OzBCQUlSLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN2QixpREFBUUE7d0JBQUM2QixPQUFPO3dCQUFHQyxnQkFBZ0I1QixPQUFPVyxHQUFHOzs7Ozs7b0JBQzdDSixZQUFZc0IsTUFBTSxHQUNmdEIsWUFBWXVCLEdBQUcsQ0FBQyxDQUFDckIsTUFBTWtCLHNCQUNuQiw4REFBQ1A7OzhDQUNHLDhEQUFDdkIsNkNBQUlBO29DQUFhWSxNQUFNQTttQ0FBYmtCOzs7Ozs4Q0FDWCw4REFBQzdCLGlEQUFRQTtvQ0FBdUI2QixPQUFPQSxRQUFRO29DQUFHQyxnQkFBZ0I1QixPQUFPVyxHQUFHO21DQUE3RCxRQUFjLE9BQU5nQjs7Ozs7OzJCQUZqQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xDO0dBdENNNUI7O1FBRVlKLHdEQUFjQTtRQUNQQSx3REFBY0E7UUFJbEJDLHdEQUFjQTs7O0tBUDdCRztBQXdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL3NwcmludENhcmQudHN4PzQzMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ByaW50LCBzdGFydFNwcmludCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZVwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCBEcm9wQXJlYSBmcm9tIFwiLi9kcm9wQXJlYVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbnRlcmZhY2UgU3ByaW50UHJvcCB7XG4gICAgc3ByaW50OiBTcHJpbnRcbn07XG5cbmNvbnN0IFNwcmludENhcmQgPSAoe3NwcmludH06IFNwcmludFByb3ApID0+IHtcblxuICAgIGNvbnN0IGl0ZW1zID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtc1JlZHVjZXIuaXRlbXMpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG4gICAgY29uc3Qgc3ByaW50SXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNwcmludElkID09PSBzcHJpbnQuX2lkKTtcbiAgICBzcHJpbnRJdGVtcy5zb3J0KChhLCBiKSA9PiAoYS5vcmRlciA/PyAwKSAtIChiLm9yZGVyID8/IDApKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3ByaW50SXRlbXMuLi4uLi4uLi4uLlwiLCBzcHJpbnRJdGVtcyk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlU3RhcnRTcHJpbnQgPSBhc3luYygpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc3RhcnRTcHJpbnQoc3ByaW50Ll9pZCkpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBmbGV4IGZsZXgtY29sIHctZnVsbCBib3JkZXItYi0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgcHktM1wiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBweC00XCI+e3NwcmludC5zcHJpbnROYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgeyBsb2dnZWRJblVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIiA/IFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0U3ByaW50fSBjbGFzc05hbWU9XCJweC00XCI+U1RBUlQ8L2J1dHRvbj4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZmZmZmZmXVwiPlxuICAgICAgICAgICAgICAgIDxEcm9wQXJlYSBpbmRleD17MH0gbW92ZVRvU3ByaW50SWQ9e3NwcmludC5faWR9IC8+XG4gICAgICAgICAgICAgICAge3NwcmludEl0ZW1zLmxlbmd0aCA9XG4gICAgICAgICAgICAgICAgICAgIHNwcmludEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0ga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcEFyZWEga2V5PXtgZHJvcC0ke2luZGV4fWB9IGluZGV4PXtpbmRleCArIDF9IG1vdmVUb1NwcmludElkPXtzcHJpbnQuX2lkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmludENhcmQ7Il0sIm5hbWVzIjpbInN0YXJ0U3ByaW50IiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsIkl0ZW0iLCJEcm9wQXJlYSIsIlNwcmludENhcmQiLCJzcHJpbnQiLCJpdGVtcyIsInN0YXRlIiwiaXRlbXNSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwic3ByaW50SXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwic3ByaW50SWQiLCJfaWQiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN0YXJ0U3ByaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcHJpbnROYW1lIiwicm9sZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbmRleCIsIm1vdmVUb1NwcmludElkIiwibGVuZ3RoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/sprintCard.tsx\n"));

/***/ })

});