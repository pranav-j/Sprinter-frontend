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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUser........\", loggedInUser);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleProfileClick = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            console.log(\"Clicked LOGOUT\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:3030/api/logout\");\n            if (response.status === 200) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.error(\"Logout failed\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-14 border-b-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"SPRINTER\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold\",\n                                children: \"Sample Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Chat\")),\n                                        className: \"\".concat(selectedTab === \"Chat\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        onClick: handleProfileClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"size-10 rounded-full border-2 border-[#d4d5d6] cursor-pointer\",\n                                src: (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.profilePic) || \"https://robohash.org/111.235.68.162.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"pr-8 pl-3\",\n                                children: [\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.firstName,\n                                    \" \",\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-full right-0 bg-white shadow-lg p-2 w-48 rounded-br-lg rounded-bl-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block px-4 py-2 text-black\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"2chMt+Du3AvneDHg0ZPfUFOcwdg=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUN1QjtBQUNIO0FBQ1g7QUFDVjtBQUNkO0FBQ0g7QUFFMUIsTUFBTVMsa0JBQWtCOztJQUNwQixNQUFNQyxXQUFXUiw0REFBY0E7SUFDL0IsTUFBTVMsY0FBY1IsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsY0FBYyxDQUFDRixXQUFXO0lBQzlFLE1BQU1HLGNBQWNYLDREQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1HLFVBQVUsQ0FBQ0QsV0FBVztJQUMxRSxNQUFNRSxlQUFlYiw0REFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNSyxXQUFXLENBQUNDLElBQUk7SUFDckUsTUFBTUMsZ0JBQWdCaEIsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTVEsZUFBZSxDQUFDRCxhQUFhO0lBQ25GLE1BQU1FLFNBQVNmLDBEQUFTQTtJQUV4Qk4sZ0RBQVNBLENBQUM7UUFDTnNCLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZVo7UUFDM0JXLFFBQVFDLEdBQUcsQ0FBQyxlQUFjVDtRQUMxQlEsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QlA7UUFDcENNLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJKO0lBRXpDLEdBQUc7UUFBQ1I7UUFBYUc7UUFBYUs7S0FBYztJQUU1QyxNQUFNLENBQUNLLGdCQUFnQkMsa0JBQWtCLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNeUIscUJBQXFCO1FBQ3ZCRCxrQkFBa0IsQ0FBQ0Q7SUFDdkI7SUFFQSxNQUFNRyxlQUFlO1FBQ2pCLElBQUk7WUFDQUwsUUFBUUMsR0FBRyxDQUFDO1lBRVosTUFBTUssV0FBVyxNQUFNcEIsNkNBQUtBLENBQUNxQixJQUFJLENBQUM7WUFDbEMsSUFBSUQsU0FBU0UsTUFBTSxLQUFLLEtBQUs7Z0JBQ3pCVCxPQUFPVSxJQUFJLENBQUM7WUFDaEI7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWlYsUUFBUVUsS0FBSyxDQUFDLGlCQUFpQkE7UUFDbkM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDM0IsaURBQUlBO29DQUFDNEIsTUFBTTs4Q0FBSyw0RUFBQ0M7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRXpCLDhEQUFDQztnQ0FBT0gsV0FBVTtnQ0FBT0ksU0FBUyxJQUFNNUIsU0FBU04seUVBQWFBOzBDQUM3RE8sY0FBYyxNQUFNOzs7Ozs7Ozs7Ozs7a0NBSXpCLDhEQUFDc0I7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBR0wsV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ007Z0NBQUdOLFdBQVU7O2tEQUNWLDhEQUFDRzt3Q0FDR0MsU0FBUyxJQUFNNUIsU0FBU0wsOERBQU1BLENBQUM7d0NBQy9CNkIsV0FBVyxHQUErRCxPQUE1RHBCLGdCQUFnQixhQUFhLDRCQUE0QixJQUFHO2tEQUM3RTs7Ozs7O2tEQUdELDhEQUFDdUI7d0NBQ0dDLFNBQVMsSUFBTTVCLFNBQVNMLDhEQUFNQSxDQUFDO3dDQUMvQjZCLFdBQVcsR0FBOEQsT0FBM0RwQixnQkFBZ0IsWUFBWSw0QkFBNEIsSUFBRztrREFDNUU7Ozs7OztrREFHRCw4REFBQ3VCO3dDQUNHQyxTQUFTLElBQU01QixTQUFTTCw4REFBTUEsQ0FBQzt3Q0FDL0I2QixXQUFXLEdBQThELE9BQTNEcEIsZ0JBQWdCLFlBQVksNEJBQTRCLElBQUc7a0RBQzVFOzs7Ozs7a0RBR0QsOERBQUN1Qjt3Q0FDR0MsU0FBUyxJQUFNNUIsU0FBU0wsOERBQU1BLENBQUM7d0NBQy9CNkIsV0FBVyxHQUEyRCxPQUF4RHBCLGdCQUFnQixTQUFTLDRCQUE0QixJQUFHO2tEQUN6RTs7Ozs7O29DQUdBRSxDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWN5QixJQUFJLE1BQUsseUJBQ3BCLDhEQUFDSjt3Q0FDR0MsU0FBUyxJQUFNNUIsU0FBU0wsOERBQU1BLENBQUM7d0NBQy9CNkIsV0FBVyxHQUE4RCxPQUEzRHBCLGdCQUFnQixZQUFZLDRCQUE0QixJQUFHO2tEQUM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVdqQiw4REFBQ21CO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7d0JBQW9CSSxTQUFTWjs7MENBQ3hDLDhEQUFDZ0I7Z0NBQ0dSLFdBQVU7Z0NBQ1ZTLEtBQUszQixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWM0QixVQUFVLEtBQUk7Ozs7OzswQ0FHckMsOERBQUNMO2dDQUFHTCxXQUFVOztvQ0FBYWxCLHlCQUFBQSxtQ0FBQUEsYUFBYzZCLFNBQVM7b0NBQUM7b0NBQUU3Qix5QkFBQUEsbUNBQUFBLGFBQWM4QixRQUFROzs7Ozs7Ozs7Ozs7O29CQUU5RXRCLGdDQUNHLDhEQUFDUzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0c7NEJBQU9ILFdBQVU7NEJBQTZCSSxTQUFTWDtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUY7R0E1R01sQjs7UUFDZVAsd0RBQWNBO1FBQ1hDLHdEQUFjQTtRQUNkQSx3REFBY0E7UUFDYkEsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQUNyQkcsc0RBQVNBOzs7S0FOdEJHO0FBOEdOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4PzY5ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy9zaWRlYmFyU2xpY2VcIjtcbmltcG9ydCB7IHNldFRhYiB9IGZyb20gXCIuLi8uLi9yZWR1eC9zbGljZXMvdGFiU2xpY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZWJhclJlZHVjZXIuaXNDb2xsYXBzZWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YWJSZWR1Y2VyLnNlbGVjdGVkVGFiKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlZpZXdJdGVtUmVkdWNlci5jdXJyZW50SXRlbUlkKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXNDb2xsbGFwc2VkXCIsaXNDb2xsYXBzZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkVGFiXCIsc2VsZWN0ZWRUYWIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZEluVXNlci4uLi4uLi4uXCIsIGxvZ2dlZEluVXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEl0ZW1JZC4uLi4uLi4uXCIsIGN1cnJlbnRJdGVtSWQpO1xuICAgICAgICBcbiAgICB9LCBbaXNDb2xsYXBzZWQsIHNlbGVjdGVkVGFiLCBjdXJyZW50SXRlbUlkXSlcblxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duT3Blbiwgc2V0SXNEcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYygpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCBMT0dPVVRcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9sb2dvdXQnKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dvdXQgZmFpbGVkXCIsIGVycm9yKTtcbiAgICAgICAgfSAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTQgYm9yZGVyLWItMiBib3JkZXItWyMxZTI5M2JdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdy1bMjA5cHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBwbC00IHByLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT48aDE+U1BSSU5URVI8L2gxPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMlwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHRvZ2dsZVNpZGViYXIoKSl9PlxuICAgICAgICAgICAgICAgICAgICB7aXNDb2xsYXBzZWQgPyAnPScgOiAneCd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBsLTQgcHQtWzNweF0gYm9yZGVyLWwtMiBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNhbXBsZSBQcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiQmFja2xvZ3NcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiQmFja2xvZ3NcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tsb2dzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiU3ByaW50c1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJTcHJpbnRzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcHJpbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiUmVwb3J0c1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJSZXBvcnRzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiQ2hhdFwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJDaGF0XCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJblVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiTWVtYmVyc1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiTWVtYmVyc1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2l6ZS0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLVsjZDRkNWQ2XVwiIHNyYz17bG9nZ2VkSW5Vc2VyPy5wcm9maWxlUGljIHx8IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByLTggcGwtM1wiPntsb2dnZWRJblVzZXI/LmZpcnN0TmFtZX0ge2xvZ2dlZEluVXNlcj8ubGFzdE5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCIgb25DbGljaz17aGFuZGxlUHJvZmlsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1bI2Q0ZDVkNl0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dnZWRJblVzZXI/LnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByLTggcGwtM1wiPntsb2dnZWRJblVzZXI/LmZpcnN0TmFtZX0ge2xvZ2dlZEluVXNlcj8ubGFzdE5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIHJpZ2h0LTAgYmctd2hpdGUgc2hhZG93LWxnIHAtMiB3LTQ4IHJvdW5kZWQtYnItbGcgcm91bmRlZC1ibC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ibGFja1wiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRIZWFkZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInRvZ2dsZVNpZGViYXIiLCJzZXRUYWIiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJEYXNoYm9hcmRIZWFkZXIiLCJkaXNwYXRjaCIsImlzQ29sbGFwc2VkIiwic3RhdGUiLCJzaWRlYmFyUmVkdWNlciIsInNlbGVjdGVkVGFiIiwidGFiUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImN1cnJlbnRJdGVtSWQiLCJWaWV3SXRlbVJlZHVjZXIiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImhhbmRsZVByb2ZpbGVDbGljayIsImhhbmRsZUxvZ291dCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsInVsIiwicm9sZSIsImltZyIsInNyYyIsInByb2ZpbGVQaWMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});