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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUser........\", loggedInUser);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleProfileClick = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = ()=>{\n    // Add your logout logic here\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-14 border-b-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"SPRINTER\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold\",\n                                children: \"Sample Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Chat\")),\n                                        className: \"\".concat(selectedTab === \"Chat\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        onClick: handleProfileClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"size-10 rounded-full border-2 border-[#d4d5d6] cursor-pointer\",\n                                src: (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.profilePic) || \"https://robohash.org/111.235.68.162.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"pr-8 pl-3\",\n                                children: [\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.firstName,\n                                    \" \",\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-full right-0 bg-white shadow-lg p-2 w-48 rounded-br-lg rounded-bl-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block px-4 py-2 text-black\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"qcZKe1ff7NSHYYtqm8sV0hxE2LI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ3VCO0FBQ0g7QUFDWDtBQUN4QjtBQUNIO0FBQzFCTyw2Q0FBS0E7QUFFTCxNQUFNQyxrQkFBa0I7O0lBQ3BCLE1BQU1DLFdBQVdQLDREQUFjQTtJQUMvQixNQUFNUSxjQUFjUCw0REFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLFdBQVc7SUFDOUUsTUFBTUcsY0FBY1YsNERBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUcsVUFBVSxDQUFDRCxXQUFXO0lBQzFFLE1BQU1FLGVBQWVaLDREQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxnQkFBZ0JmLDREQUFjQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1RLGVBQWUsQ0FBQ0QsYUFBYTtJQUVuRmxCLGdEQUFTQSxDQUFDO1FBQ05vQixRQUFRQyxHQUFHLENBQUMsZ0JBQWVYO1FBQzNCVSxRQUFRQyxHQUFHLENBQUMsZUFBY1I7UUFDMUJPLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JOO1FBQ3BDSyxRQUFRQyxHQUFHLENBQUMseUJBQXlCSDtJQUV6QyxHQUFHO1FBQUNSO1FBQWFHO1FBQWFLO0tBQWM7SUFFNUMsTUFBTSxDQUFDSSxnQkFBZ0JDLGtCQUFrQixHQUFHdEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTXVCLHFCQUFxQjtRQUN2QkQsa0JBQWtCLENBQUNEO0lBQ3ZCO0lBRUEsTUFBTUcsZUFBZTtJQUNqQiw2QkFBNkI7SUFDakM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ3JCLGlEQUFJQTtvQ0FBQ3NCLE1BQU07OENBQUssNEVBQUNDO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ0M7Z0NBQU9ILFdBQVU7Z0NBQU9JLFNBQVMsSUFBTXRCLFNBQVNMLHlFQUFhQTswQ0FDN0RNLGNBQWMsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ2dCO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0s7Z0NBQUdMLFdBQVU7MENBQVk7Ozs7OzswQ0FDMUIsOERBQUNNO2dDQUFHTixXQUFVOztrREFDViw4REFBQ0c7d0NBQ0dDLFNBQVMsSUFBTXRCLFNBQVNKLDhEQUFNQSxDQUFDO3dDQUMvQnNCLFdBQVcsR0FBK0QsT0FBNURkLGdCQUFnQixhQUFhLDRCQUE0QixJQUFHO2tEQUM3RTs7Ozs7O2tEQUdELDhEQUFDaUI7d0NBQ0dDLFNBQVMsSUFBTXRCLFNBQVNKLDhEQUFNQSxDQUFDO3dDQUMvQnNCLFdBQVcsR0FBOEQsT0FBM0RkLGdCQUFnQixZQUFZLDRCQUE0QixJQUFHO2tEQUM1RTs7Ozs7O2tEQUdELDhEQUFDaUI7d0NBQ0dDLFNBQVMsSUFBTXRCLFNBQVNKLDhEQUFNQSxDQUFDO3dDQUMvQnNCLFdBQVcsR0FBOEQsT0FBM0RkLGdCQUFnQixZQUFZLDRCQUE0QixJQUFHO2tEQUM1RTs7Ozs7O2tEQUdELDhEQUFDaUI7d0NBQ0dDLFNBQVMsSUFBTXRCLFNBQVNKLDhEQUFNQSxDQUFDO3dDQUMvQnNCLFdBQVcsR0FBMkQsT0FBeERkLGdCQUFnQixTQUFTLDRCQUE0QixJQUFHO2tEQUN6RTs7Ozs7O29DQUdBRSxDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNtQixJQUFJLE1BQUsseUJBQ3BCLDhEQUFDSjt3Q0FDR0MsU0FBUyxJQUFNdEIsU0FBU0osOERBQU1BLENBQUM7d0NBQy9Cc0IsV0FBVyxHQUE4RCxPQUEzRGQsZ0JBQWdCLFlBQVksNEJBQTRCLElBQUc7a0RBQzVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV2pCLDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFvQkksU0FBU1A7OzBDQUN4Qyw4REFBQ1c7Z0NBQ0dSLFdBQVU7Z0NBQ1ZTLEtBQUtyQixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWNzQixVQUFVLEtBQUk7Ozs7OzswQ0FHckMsOERBQUNMO2dDQUFHTCxXQUFVOztvQ0FBYVoseUJBQUFBLG1DQUFBQSxhQUFjdUIsU0FBUztvQ0FBQztvQ0FBRXZCLHlCQUFBQSxtQ0FBQUEsYUFBY3dCLFFBQVE7Ozs7Ozs7Ozs7Ozs7b0JBRTlFakIsZ0NBQ0csOERBQUNJO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRzs0QkFBT0gsV0FBVTs0QkFBNkJJLFNBQVNOO3NDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5RjtHQWxHTWpCOztRQUNlTix3REFBY0E7UUFDWEMsd0RBQWNBO1FBQ2RBLHdEQUFjQTtRQUNiQSx3REFBY0E7UUFDYkEsd0RBQWNBOzs7S0FMbENLO0FBb0dOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4PzY5ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy9zaWRlYmFyU2xpY2VcIjtcbmltcG9ydCB7IHNldFRhYiB9IGZyb20gXCIuLi8uLi9yZWR1eC9zbGljZXMvdGFiU2xpY2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmF4aW9zXG5cbmNvbnN0IERhc2hib2FyZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgY29uc3QgaXNDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNpZGViYXJSZWR1Y2VyLmlzQ29sbGFwc2VkKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGFiUmVkdWNlci5zZWxlY3RlZFRhYik7XG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcbiAgICBjb25zdCBjdXJyZW50SXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5WaWV3SXRlbVJlZHVjZXIuY3VycmVudEl0ZW1JZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzQ29sbGxhcHNlZFwiLGlzQ29sbGFwc2VkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFRhYlwiLHNlbGVjdGVkVGFiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWRJblVzZXIuLi4uLi4uLlwiLCBsb2dnZWRJblVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRJdGVtSWQuLi4uLi4uLlwiLCBjdXJyZW50SXRlbUlkKTtcbiAgICAgICAgXG4gICAgfSwgW2lzQ29sbGFwc2VkLCBzZWxlY3RlZFRhYiwgY3VycmVudEl0ZW1JZF0pXG5cbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICAvLyBBZGQgeW91ciBsb2dvdXQgbG9naWMgaGVyZVxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNCBib3JkZXItYi0yIGJvcmRlci1bIzFlMjkzYl1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyB3LVsyMDlweF0gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIHBsLTQgcHItOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxoMT5TUFJJTlRFUjwvaDE+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0yXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2godG9nZ2xlU2lkZWJhcigpKX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc0NvbGxhcHNlZCA/ICc9JyA6ICd4J31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGwtNCBwdC1bM3B4XSBib3JkZXItbC0yIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U2FtcGxlIFByb2plY3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJCYWNrbG9nc1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJCYWNrbG9nc1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja2xvZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJTcHJpbnRzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIlNwcmludHNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwcmludHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJSZXBvcnRzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIlJlcG9ydHNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJDaGF0XCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIkNoYXRcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlcj8ucm9sZSA9PT0gXCJhZG1pblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJNZW1iZXJzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJNZW1iZXJzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaXplLTEwIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItWyNkNGQ1ZDZdXCIgc3JjPXtsb2dnZWRJblVzZXI/LnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHItOCBwbC0zXCI+e2xvZ2dlZEluVXNlcj8uZmlyc3ROYW1lfSB7bG9nZ2VkSW5Vc2VyPy5sYXN0TmFtZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVQcm9maWxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLVsjZDRkNWQ2XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2dlZEluVXNlcj8ucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHItOCBwbC0zXCI+e2xvZ2dlZEluVXNlcj8uZmlyc3ROYW1lfSB7bG9nZ2VkSW5Vc2VyPy5sYXN0TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgcmlnaHQtMCBiZy13aGl0ZSBzaGFkb3ctbGcgcC0yIHctNDggcm91bmRlZC1ici1sZyByb3VuZGVkLWJsLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWJsYWNrXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEhlYWRlcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidG9nZ2xlU2lkZWJhciIsInNldFRhYiIsIkxpbmsiLCJheGlvcyIsIkRhc2hib2FyZEhlYWRlciIsImRpc3BhdGNoIiwiaXNDb2xsYXBzZWQiLCJzdGF0ZSIsInNpZGViYXJSZWR1Y2VyIiwic2VsZWN0ZWRUYWIiLCJ0YWJSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiY3VycmVudEl0ZW1JZCIsIlZpZXdJdGVtUmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiaGFuZGxlUHJvZmlsZUNsaWNrIiwiaGFuZGxlTG9nb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwidWwiLCJyb2xlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});