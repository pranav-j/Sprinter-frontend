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

/***/ "(app-pages-browser)/./app/components/dashboardaHeader.tsx":
/*!*********************************************!*\
  !*** ./app/components/dashboardaHeader.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUSer = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUSer........\", loggedInUSer);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-14 border-b-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"SPRINTER\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold\",\n                                children: \"Sample Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUSer === null || loggedInUSer === void 0 ? void 0 : loggedInUSer.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"size-10 rounded-full border-2 border-[#d4d5d6]\",\n                        src: (loggedInUSer === null || loggedInUSer === void 0 ? void 0 : loggedInUSer.profilePic) || \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"pr-8 pl-3\",\n                        children: [\n                            loggedInUSer === null || loggedInUSer === void 0 ? void 0 : loggedInUSer.firstName,\n                            \" \",\n                            loggedInUSer === null || loggedInUSer === void 0 ? void 0 : loggedInUSer.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"MUPABkGiLy5hQP/IKQXbQFFj+M8=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0M7QUFDaUM7QUFDSDtBQUNYO0FBQ3hCO0FBRTdCLE1BQU1NLGtCQUFrQjs7SUFDcEIsTUFBTUMsV0FBV04sNERBQWNBO0lBQy9CLE1BQU1PLGNBQWNOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsV0FBVztJQUM5RSxNQUFNRyxjQUFjVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxVQUFVLENBQUNELFdBQVc7SUFDMUUsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBQ3JFLE1BQU1DLGdCQUFnQmQsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTVEsZUFBZSxDQUFDRCxhQUFhO0lBRW5GaEIsZ0RBQVNBLENBQUM7UUFDTmtCLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZVg7UUFDM0JVLFFBQVFDLEdBQUcsQ0FBQyxlQUFjUjtRQUMxQk8sUUFBUUMsR0FBRyxDQUFDLHdCQUF3Qk47UUFDcENLLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJIO0lBRXpDLEdBQUc7UUFBQ1I7UUFBYUc7UUFBYUs7S0FBYztJQUU1QyxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ2hCLGlEQUFJQTtvQ0FBQ2lCLE1BQU07OENBQUssNEVBQUNDO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ0M7Z0NBQU9ILFdBQVU7Z0NBQU9JLFNBQVMsSUFBTWxCLFNBQVNKLHlFQUFhQTswQ0FDN0RLLGNBQWMsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ1k7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ007Z0NBQUdOLFdBQVU7O2tEQUNWLDhEQUFDRzt3Q0FDR0MsU0FBUyxJQUFNbEIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9CaUIsV0FBVyxHQUErRCxPQUE1RFYsZ0JBQWdCLGFBQWEsNEJBQTRCLElBQUc7a0RBQzdFOzs7Ozs7a0RBR0QsOERBQUNhO3dDQUNHQyxTQUFTLElBQU1sQixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0JpQixXQUFXLEdBQThELE9BQTNEVixnQkFBZ0IsWUFBWSw0QkFBNEIsSUFBRztrREFDNUU7Ozs7OztrREFHRCw4REFBQ2E7d0NBQ0dDLFNBQVMsSUFBTWxCLFNBQVNILDhEQUFNQSxDQUFDO3dDQUMvQmlCLFdBQVcsR0FBOEQsT0FBM0RWLGdCQUFnQixZQUFZLDRCQUE0QixJQUFHO2tEQUM1RTs7Ozs7O29DQUdBRSxDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNlLElBQUksTUFBSyx5QkFDcEIsOERBQUNKO3dDQUNHQyxTQUFTLElBQU1sQixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0JpQixXQUFXLEdBQThELE9BQTNEVixnQkFBZ0IsWUFBWSw0QkFBNEIsSUFBRztrREFDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPakIsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1E7d0JBQUlSLFdBQVU7d0JBQWlEUyxLQUFLakIsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFja0IsVUFBVSxLQUFJOzs7Ozs7a0NBQ2pHLDhEQUFDTDt3QkFBR0wsV0FBVTs7NEJBQWFSLHlCQUFBQSxtQ0FBQUEsYUFBY21CLFNBQVM7NEJBQUM7NEJBQUVuQix5QkFBQUEsbUNBQUFBLGFBQWNvQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNGO0dBakVNM0I7O1FBQ2VMLHdEQUFjQTtRQUNYQyx3REFBY0E7UUFDZEEsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQUNiQSx3REFBY0E7OztLQUxsQ0k7QUFtRU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkYUhlYWRlci50c3g/NjlmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgdG9nZ2xlU2lkZWJhciB9IGZyb20gXCIuLi8uLi9yZWR1eC9zbGljZXMvc2lkZWJhclNsaWNlXCI7XG5pbXBvcnQgeyBzZXRUYWIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2xpY2VzL3RhYlNsaWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERhc2hib2FyZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3QgaXNDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNpZGViYXJSZWR1Y2VyLmlzQ29sbGFwc2VkKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGFiUmVkdWNlci5zZWxlY3RlZFRhYik7XG4gICAgY29uc3QgbG9nZ2VkSW5VU2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcbiAgICBjb25zdCBjdXJyZW50SXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5WaWV3SXRlbVJlZHVjZXIuY3VycmVudEl0ZW1JZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzQ29sbGxhcHNlZFwiLGlzQ29sbGFwc2VkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFRhYlwiLHNlbGVjdGVkVGFiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWRJblVTZXIuLi4uLi4uLlwiLCBsb2dnZWRJblVTZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRJdGVtSWQuLi4uLi4uLlwiLCBjdXJyZW50SXRlbUlkKTtcbiAgICAgICAgXG4gICAgfSwgW2lzQ29sbGFwc2VkLCBzZWxlY3RlZFRhYiwgY3VycmVudEl0ZW1JZF0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNCBib3JkZXItYi0yIGJvcmRlci1bIzFlMjkzYl1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyB3LVsyMDlweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIHBsLTQgcHItOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxoMT5TUFJJTlRFUjwvaDE+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0yXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2godG9nZ2xlU2lkZWJhcigpKX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0NvbGxhcHNlZCA/ICc9JyA6ICd4J31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGwtNCBwdC1bM3B4XSBib3JkZXItbC0yIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U2FtcGxlIFByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJCYWNrbG9nc1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJCYWNrbG9nc1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja2xvZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJTcHJpbnRzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIlNwcmludHNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwcmludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJSZXBvcnRzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIlJlcG9ydHNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVVNlcj8ucm9sZSA9PT0gXCJhZG1pblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJNZW1iZXJzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJNZW1iZXJzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNpemUtMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1bI2Q0ZDVkNl1cIiBzcmM9e2xvZ2dlZEluVVNlcj8ucHJvZmlsZVBpYyB8fCBcIlwifSAvPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci04IHBsLTNcIj57bG9nZ2VkSW5VU2VyPy5maXJzdE5hbWV9IHtsb2dnZWRJblVTZXI/Lmxhc3ROYW1lfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkSGVhZGVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidG9nZ2xlU2lkZWJhciIsInNldFRhYiIsIkxpbmsiLCJEYXNoYm9hcmRIZWFkZXIiLCJkaXNwYXRjaCIsImlzQ29sbGFwc2VkIiwic3RhdGUiLCJzaWRlYmFyUmVkdWNlciIsInNlbGVjdGVkVGFiIiwidGFiUmVkdWNlciIsImxvZ2dlZEluVVNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImN1cnJlbnRJdGVtSWQiLCJWaWV3SXRlbVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwidWwiLCJyb2xlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});