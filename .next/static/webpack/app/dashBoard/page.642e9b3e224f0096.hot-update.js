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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects).find((project)=>project._id === currentProjectId);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUser........\", loggedInUser);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleProfileClick = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            console.log(\"Clicked LOGOUT\");\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(\"http://localhost:3030\", \"/api/logout\"));\n            if (response.status === 200) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.error(\"Logout failed\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-15 border-b-2 border-[#818181]\",\n        style: {\n            borderBottomWidth: \"0.5px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center h-full bg-[rgb(18,29,51)]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8 text-[#b9c0c1] text-[1.4285714286rem]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Sprinter\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl h-7 font-bold\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4 text-[1rem]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Chat\")),\n                                        className: \"\".concat(selectedTab === \"Chat\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Feed\")),\n                                        className: \"\".concat(selectedTab === \"Feed\" ? \"border-b-2 border-[#14b473]\" : \"\", \" px-2\"),\n                                        children: \"Feed\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        onClick: handleProfileClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"size-10 rounded-full border-2 border-[#d4d5d6] cursor-pointer\",\n                                src: (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.profilePic) || \"https://robohash.org/111.235.68.162.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"pr-8 pl-3\",\n                                children: [\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.firstName,\n                                    \" \",\n                                    loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-full right-0 bg-white shadow-lg p-2 w-48 rounded-br-lg rounded-bl-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"block px-4 py-2 text-black\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"2eETZC6VrS7lRfiDvXSgFrbyjiU=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUN1QjtBQUNIO0FBQ1g7QUFDVjtBQUNkO0FBQ0g7QUFFMUIsTUFBTVMsa0JBQWtCOztJQUNwQixNQUFNQyxXQUFXUiw0REFBY0E7SUFDL0IsTUFBTVMsY0FBY1IsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsY0FBYyxDQUFDRixXQUFXO0lBQzlFLE1BQU1HLGNBQWNYLDREQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1HLFVBQVUsQ0FBQ0QsV0FBVztJQUMxRSxNQUFNRSxlQUFlYiw0REFBY0EsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNSyxXQUFXLENBQUNDLElBQUk7SUFDckUsTUFBTUMsZ0JBQWdCaEIsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTVEsZUFBZSxDQUFDRCxhQUFhO0lBQ25GLE1BQU1FLG1CQUFtQmxCLDREQUFjQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1VLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCcEIsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTVksZUFBZSxDQUFDQyxRQUFRLEVBQUVDLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxHQUFHLEtBQUtQO0lBQ25ILE1BQU1RLFNBQVN2QiwwREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1FBQ044QixRQUFRQyxHQUFHLENBQUMsZ0JBQWVwQjtRQUMzQm1CLFFBQVFDLEdBQUcsQ0FBQyxlQUFjakI7UUFDMUJnQixRQUFRQyxHQUFHLENBQUMsd0JBQXdCZjtRQUNwQ2MsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qlo7SUFFekMsR0FBRztRQUFDUjtRQUFhRztRQUFhSztLQUFjO0lBRTVDLE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2hDLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1pQyxxQkFB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Ozs7Ozs7QUFROUY7R0FoSE0xQjs7UUFDZVAsd0RBQWNBO1FBQ1hDLHdEQUFjQTtRQUNkQSx3REFBY0E7UUFDYkEsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQUNYQSx3REFBY0E7UUFDaEJBLHdEQUFjQTtRQUN0Qkcsc0RBQVNBOzs7S0FSdEJHO0FBa0hOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4PzY5ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy9zaWRlYmFyU2xpY2VcIjtcbmltcG9ydCB7IHNldFRhYiB9IGZyb20gXCIuLi8uLi9yZWR1eC9zbGljZXMvdGFiU2xpY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZWJhclJlZHVjZXIuaXNDb2xsYXBzZWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YWJSZWR1Y2VyLnNlbGVjdGVkVGFiKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlZpZXdJdGVtUmVkdWNlci5jdXJyZW50SXRlbUlkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvamVjdHNSZWR1Y2VyLnByb2plY3RzKS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Ll9pZCA9PT0gY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImlzQ29sbGxhcHNlZFwiLGlzQ29sbGFwc2VkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFRhYlwiLHNlbGVjdGVkVGFiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWRJblVzZXIuLi4uLi4uLlwiLCBsb2dnZWRJblVzZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRJdGVtSWQuLi4uLi4uLlwiLCBjdXJyZW50SXRlbUlkKTtcbiAgICAgICAgXG4gICAgfSwgW2lzQ29sbGFwc2VkLCBzZWxlY3RlZFRhYiwgY3VycmVudEl0ZW1JZF0pXG5cbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVByb2ZpbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWNrZWQgTE9HT1VUXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkx9L2FwaS9sb2dvdXRgKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dvdXQgZmFpbGVkXCIsIGVycm9yKTtcbiAgICAgICAgfSAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTUgYm9yZGVyLWItMiBib3JkZXItWyM4MTgxODFdXCIgc3R5bGU9e3sgYm9yZGVyQm90dG9tV2lkdGg6ICcwLjVweCcgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdy1bMjA5cHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBoLWZ1bGwgYmctW3JnYigxOCwyOSw1MSldXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIHBsLTQgcHItOCB0ZXh0LVsjYjljMGMxXSB0ZXh0LVsxLjQyODU3MTQyODZyZW1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+PGgxPlNwcmludGVyPC9oMT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTJcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh0b2dnbGVTaWRlYmFyKCkpfT5cbiAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2VkID8gJz0nIDogJ3gnfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwbC00IHB0LVszcHhdIGJvcmRlci1sLTIgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGgtNyBmb250LWJvbGRcIj57Y3VycmVudFByb2plY3Q/LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHRleHQtWzFyZW1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIkJhY2tsb2dzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIkJhY2tsb2dzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLVsjMTRiNDczXVwiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja2xvZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJTcHJpbnRzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIlNwcmludHNcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItWyMxNGI0NzNdXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcHJpbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiUmVwb3J0c1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJSZXBvcnRzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLVsjMTRiNDczXVwiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFRhYihcIkNoYXRcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiQ2hhdFwiID8gXCJib3JkZXItYi0yIGJvcmRlci1bIzE0YjQ3M11cIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlcj8ucm9sZSA9PT0gXCJhZG1pblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJNZW1iZXJzXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJNZW1iZXJzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLVsjMTRiNDczXVwiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRUYWIoXCJGZWVkXCIpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkVGFiID09PSBcIkZlZWRcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItWyMxNGI0NzNdXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVQcm9maWxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLVsjZDRkNWQ2XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ2dlZEluVXNlcj8ucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHItOCBwbC0zXCI+e2xvZ2dlZEluVXNlcj8uZmlyc3ROYW1lfSB7bG9nZ2VkSW5Vc2VyPy5sYXN0TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgcmlnaHQtMCBiZy13aGl0ZSBzaGFkb3ctbGcgcC0yIHctNDggcm91bmRlZC1ici1sZyByb3VuZGVkLWJsLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWJsYWNrXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEhlYWRlcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidG9nZ2xlU2lkZWJhciIsInNldFRhYiIsInVzZVJvdXRlciIsIkxpbmsiLCJheGlvcyIsIkRhc2hib2FyZEhlYWRlciIsImRpc3BhdGNoIiwiaXNDb2xsYXBzZWQiLCJzdGF0ZSIsInNpZGViYXJSZWR1Y2VyIiwic2VsZWN0ZWRUYWIiLCJ0YWJSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiY3VycmVudEl0ZW1JZCIsIlZpZXdJdGVtUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0IiwicHJvamVjdHNSZWR1Y2VyIiwicHJvamVjdHMiLCJmaW5kIiwicHJvamVjdCIsIl9pZCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiaGFuZGxlUHJvZmlsZUNsaWNrIiwiaGFuZGxlTG9nb3V0IiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwic3RhdHVzIiwicHVzaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJCb3R0b21XaWR0aCIsImhyZWYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsInRpdGxlIiwidWwiLCJyb2xlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});