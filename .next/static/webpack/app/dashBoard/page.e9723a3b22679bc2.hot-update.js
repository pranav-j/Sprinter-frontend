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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUser........\", loggedInUser);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleProfileClick = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-14 border-b-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"SPRINTER\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold\",\n                                children: \"Sample Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Chat\")),\n                                        className: \"\".concat(selectedTab === \"Chat\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"size-10 rounded-full border-2 border-[#d4d5d6] cursor-pointer\",\n                                src: (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.profilePic) || \"https://robohash.org/111.235.68.162.png\",\n                                onClick: handleProfileClick\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"pr-8 pl-3\",\n                                children: [\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.firstName,\n                                    \" \",\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-full right-0 bg-white shadow-lg p-2 rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block px-4 py-2 text-black\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"qcZKe1ff7NSHYYtqm8sV0hxE2LI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDdUI7QUFDSDtBQUNYO0FBQ3hCO0FBRTdCLE1BQU1PLGtCQUFrQjs7SUFDcEIsTUFBTUMsV0FBV04sNERBQWNBO0lBQy9CLE1BQU1PLGNBQWNOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsV0FBVztJQUM5RSxNQUFNRyxjQUFjVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxVQUFVLENBQUNELFdBQVc7SUFDMUUsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBQ3JFLE1BQU1DLGdCQUFnQmQsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTVEsZUFBZSxDQUFDRCxhQUFhO0lBRW5GakIsZ0RBQVNBLENBQUM7UUFDTm1CLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZVg7UUFDM0JVLFFBQVFDLEdBQUcsQ0FBQyxlQUFjUjtRQUMxQk8sUUFBUUMsR0FBRyxDQUFDLHdCQUF3Qk47UUFDcENLLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJIO0lBRXpDLEdBQUc7UUFBQ1I7UUFBYUc7UUFBYUs7S0FBYztJQUU1QyxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNc0IscUJBQXFCO1FBQ3ZCRCxrQkFBa0IsQ0FBQ0Q7SUFDdkI7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ25CLGlEQUFJQTtvQ0FBQ29CLE1BQU07OENBQUssNEVBQUNDO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ0M7Z0NBQU9ILFdBQVU7Z0NBQU9JLFNBQVMsSUFBTXJCLFNBQVNKLHlFQUFhQTswQ0FDN0RLLGNBQWMsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUl6Qiw4REFBQ2U7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ007Z0NBQUdOLFdBQVU7O2tEQUNWLDhEQUFDRzt3Q0FDR0MsU0FBUyxJQUFNckIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9Cb0IsV0FBVyxHQUErRCxPQUE1RGIsZ0JBQWdCLGFBQWEsNEJBQTRCLElBQUc7a0RBQzdFOzs7Ozs7a0RBR0QsOERBQUNnQjt3Q0FDR0MsU0FBUyxJQUFNckIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9Cb0IsV0FBVyxHQUE4RCxPQUEzRGIsZ0JBQWdCLFlBQVksNEJBQTRCLElBQUc7a0RBQzVFOzs7Ozs7a0RBR0QsOERBQUNnQjt3Q0FDR0MsU0FBUyxJQUFNckIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9Cb0IsV0FBVyxHQUE4RCxPQUEzRGIsZ0JBQWdCLFlBQVksNEJBQTRCLElBQUc7a0RBQzVFOzs7Ozs7a0RBR0QsOERBQUNnQjt3Q0FDR0MsU0FBUyxJQUFNckIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9Cb0IsV0FBVyxHQUEyRCxPQUF4RGIsZ0JBQWdCLFNBQVMsNEJBQTRCLElBQUc7a0RBQ3pFOzs7Ozs7b0NBR0FFLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY2tCLElBQUksTUFBSyx5QkFDcEIsOERBQUNKO3dDQUNHQyxTQUFTLElBQU1yQixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0JvQixXQUFXLEdBQThELE9BQTNEYixnQkFBZ0IsWUFBWSw0QkFBNEIsSUFBRztrREFDNUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFXakIsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7OzBDQUNHLDhEQUFDUztnQ0FDR1IsV0FBVTtnQ0FDVlMsS0FBS3BCLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY3FCLFVBQVUsS0FBSTtnQ0FDakNOLFNBQVNOOzs7Ozs7MENBRWIsOERBQUNPO2dDQUFHTCxXQUFVOztvQ0FBYVgseUJBQUFBLG1DQUFBQSxhQUFjc0IsU0FBUztvQ0FBQztvQ0FBRXRCLHlCQUFBQSxtQ0FBQUEsYUFBY3VCLFFBQVE7Ozs7Ozs7Ozs7Ozs7b0JBRTlFaEIsZ0NBQ0csOERBQUNHO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRzs0QkFBT0gsV0FBVTtzQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZFO0dBOUZNbEI7O1FBQ2VMLHdEQUFjQTtRQUNYQyx3REFBY0E7UUFDZEEsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQUNiQSx3REFBY0E7OztLQUxsQ0k7QUFnR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkYUhlYWRlci50c3g/NjlmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHRvZ2dsZVNpZGViYXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2xpY2VzL3NpZGViYXJTbGljZVwiO1xuaW1wb3J0IHsgc2V0VGFiIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy90YWJTbGljZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBEYXNoYm9hcmRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaWRlYmFyUmVkdWNlci5pc0NvbGxhcHNlZCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRhYlJlZHVjZXIuc2VsZWN0ZWRUYWIpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG4gICAgY29uc3QgY3VycmVudEl0ZW1JZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuVmlld0l0ZW1SZWR1Y2VyLmN1cnJlbnRJdGVtSWQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc0NvbGxsYXBzZWRcIixpc0NvbGxhcHNlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRUYWJcIixzZWxlY3RlZFRhYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkSW5Vc2VyLi4uLi4uLi5cIiwgbG9nZ2VkSW5Vc2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50SXRlbUlkLi4uLi4uLi5cIiwgY3VycmVudEl0ZW1JZCk7XG4gICAgICAgIFxuICAgIH0sIFtpc0NvbGxhcHNlZCwgc2VsZWN0ZWRUYWIsIGN1cnJlbnRJdGVtSWRdKVxuXG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVQcm9maWxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE0IGJvcmRlci1iLTIgYm9yZGVyLVsjMWUyOTNiXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIHctWzIwOXB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLWZ1bGwgcGwtNCBwci04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+PGgxPlNQUklOVEVSPC9oMT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTJcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh0b2dnbGVTaWRlYmFyKCkpfT5cbiAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2VkID8gJz0nIDogJ3gnfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwbC00IHB0LVszcHhdIGJvcmRlci1sLTIgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TYW1wbGUgUHJvamVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIkJhY2tsb2dzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIkJhY2tsb2dzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrbG9nc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIlNwcmludHNcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiU3ByaW50c1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ByaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIlJlcG9ydHNcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiUmVwb3J0c1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIkNoYXRcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiQ2hhdFwiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyPy5yb2xlID09PSBcImFkbWluXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIk1lbWJlcnNcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIk1lbWJlcnNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNpemUtMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1bI2Q0ZDVkNl1cIiBzcmM9e2xvZ2dlZEluVXNlcj8ucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSAvPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci04IHBsLTNcIj57bG9nZ2VkSW5Vc2VyPy5maXJzdE5hbWV9IHtsb2dnZWRJblVzZXI/Lmxhc3ROYW1lfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1bI2Q0ZDVkNl0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dnZWRJblVzZXI/LnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci04IHBsLTNcIj57bG9nZ2VkSW5Vc2VyPy5maXJzdE5hbWV9IHtsb2dnZWRJblVzZXI/Lmxhc3ROYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2lzRHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtZnVsbCByaWdodC0wIGJnLXdoaXRlIHNoYWRvdy1sZyBwLTIgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkSGVhZGVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ0b2dnbGVTaWRlYmFyIiwic2V0VGFiIiwiTGluayIsIkRhc2hib2FyZEhlYWRlciIsImRpc3BhdGNoIiwiaXNDb2xsYXBzZWQiLCJzdGF0ZSIsInNpZGViYXJSZWR1Y2VyIiwic2VsZWN0ZWRUYWIiLCJ0YWJSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiY3VycmVudEl0ZW1JZCIsIlZpZXdJdGVtUmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiaGFuZGxlUHJvZmlsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwidWwiLCJyb2xlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});