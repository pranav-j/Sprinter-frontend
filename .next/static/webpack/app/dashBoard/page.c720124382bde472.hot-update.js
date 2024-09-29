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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/sidebarSlice */ \"(app-pages-browser)/./redux/slices/sidebarSlice.ts\");\n/* harmony import */ var _redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/tabSlice */ \"(app-pages-browser)/./redux/slices/tabSlice.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DashboardHeader = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    const selectedTab = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.tabReducer.selectedTab);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    // SETTING UP SOCKET--------------------------------------------------------------------------------\n    const handleIncomingMessage = (message)=>{\n        console.log(\"NEW MESSAGE kitty=========> \", message);\n        dispatch(addNewMessage(message));\n    // setMessages((prevMessages) => [...prevMessages, groupMessage]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", handleIncomingMessage);\n        socket.on(\"receiveMessageFromGroup\", handleIncomingMessage);\n        socket.emit(\"joinProject\", {\n            projectId: currentProjectId\n        });\n        return ()=>{\n            // Cleanup listeners\n            socket.off(\"private_message\", handleIncomingMessage);\n            socket.off(\"receiveMessageFromGroup\", handleIncomingMessage);\n        };\n    }, [\n        currentProjectId\n    ]);\n    // REMOVE this \n    const messages = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.chatReducer.messages);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Messages in REDUX......\", messages);\n    }, [\n        messages\n    ]);\n    // -------------------------------------------------------------------------------------------------\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"isColllapsed\", isCollapsed);\n        console.log(\"selectedTab\", selectedTab);\n        console.log(\"loggedInUser........\", loggedInUser);\n        console.log(\"currentItemId........\", currentItemId);\n    }, [\n        isCollapsed,\n        selectedTab,\n        currentItemId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between h-14 border-b-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo w-[209px] flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center h-full pl-4 pr-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"SPRINTER\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 42\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-2\",\n                                onClick: ()=>dispatch((0,_redux_slices_sidebarSlice__WEBPACK_IMPORTED_MODULE_3__.toggleSidebar)()),\n                                children: isCollapsed ? \"=\" : \"x\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col pl-4 pt-[3px] border-l-2 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold\",\n                                children: \"Sample Project\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Backlogs\")),\n                                        className: \"\".concat(selectedTab === \"Backlogs\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Backlogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Sprints\")),\n                                        className: \"\".concat(selectedTab === \"Sprints\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Sprints\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Reports\")),\n                                        className: \"\".concat(selectedTab === \"Reports\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Reports\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Chat\")),\n                                        className: \"\".concat(selectedTab === \"Chat\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>dispatch((0,_redux_slices_tabSlice__WEBPACK_IMPORTED_MODULE_4__.setTab)(\"Members\")),\n                                        className: \"\".concat(selectedTab === \"Members\" ? \"border-b-2 border-black\" : \"\", \" px-2\"),\n                                        children: \"Members\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"size-10 rounded-full border-2 border-[#d4d5d6]\",\n                        src: (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.profilePic) || \"https://robohash.org/111.235.68.162.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"pr-8 pl-3\",\n                        children: [\n                            loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.firstName,\n                            \" \",\n                            loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/dashboardaHeader.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DashboardHeader, \"RVSWsktfcireqSUOV4rb7uNwb9k=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DashboardHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardHeader);\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFa0M7QUFDaUM7QUFDSDtBQUNYO0FBQ3hCO0FBRTdCLE1BQU1NLGtCQUFrQjs7SUFDcEIsTUFBTUMsV0FBV04sNERBQWNBO0lBQy9CLE1BQU1PLG1CQUFtQk4sNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsdUJBQXVCLENBQUNGLGdCQUFnQjtJQUNqRyxNQUFNRyxjQUFjVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxjQUFjLENBQUNELFdBQVc7SUFDOUUsTUFBTUUsY0FBY1gsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssVUFBVSxDQUFDRCxXQUFXO0lBQzFFLE1BQU1FLGVBQWViLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1PLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxnQkFBZ0JoQiw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNVSxlQUFlLENBQUNELGFBQWE7SUFFL0Usb0dBQW9HO0lBRXBHLE1BQU1FLHdCQUF3QixDQUFDQztRQUMzQkMsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0Y7UUFFNUNkLFNBQVNpQixjQUFjSDtJQUN2QixrRUFBa0U7SUFDdEU7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ055QixPQUFPQyxFQUFFLENBQUMsbUJBQW1CTjtRQUM3QkssT0FBT0MsRUFBRSxDQUFDLDJCQUEyQk47UUFDckNLLE9BQU9FLElBQUksQ0FBQyxlQUFlO1lBQUVDLFdBQVdwQjtRQUFpQjtRQUV6RCxPQUFPO1lBQ0gsb0JBQW9CO1lBQ3BCaUIsT0FBT0ksR0FBRyxDQUFDLG1CQUFtQlQ7WUFDOUJLLE9BQU9JLEdBQUcsQ0FBQywyQkFBMkJUO1FBQzFDO0lBQ0osR0FBRztRQUFDWjtLQUFpQjtJQUVyQixlQUFlO0lBQ2YsTUFBTXNCLFdBQVc1Qiw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNc0IsV0FBVyxDQUFDRCxRQUFRO0lBQ3JFOUIsZ0RBQVNBLENBQUM7UUFDTnNCLFFBQVFDLEdBQUcsQ0FBQywyQkFBMkJPO0lBQzNDLEdBQUc7UUFBQ0E7S0FBUztJQUViLG9HQUFvRztJQUV4RzlCLGdEQUFTQSxDQUFDO1FBQ05zQixRQUFRQyxHQUFHLENBQUMsZ0JBQWVaO1FBQzNCVyxRQUFRQyxHQUFHLENBQUMsZUFBY1Y7UUFDMUJTLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JSO1FBQ3BDTyxRQUFRQyxHQUFHLENBQUMseUJBQXlCTDtJQUV6QyxHQUFHO1FBQUNQO1FBQWFFO1FBQWFLO0tBQWM7SUFFNUMscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUM1QixpREFBSUE7b0NBQUM2QixNQUFNOzhDQUFLLDRFQUFDQztrREFBRzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFekIsOERBQUNDO2dDQUFPSCxXQUFVO2dDQUFPSSxTQUFTLElBQU05QixTQUFTSix5RUFBYUE7MENBQzdEUSxjQUFjLE1BQU07Ozs7Ozs7Ozs7OztrQ0FJekIsOERBQUNxQjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUFZOzs7Ozs7MENBQzFCLDhEQUFDTTtnQ0FBR04sV0FBVTs7a0RBQ1YsOERBQUNHO3dDQUNHQyxTQUFTLElBQU05QixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0I2QixXQUFXLEdBQStELE9BQTVEcEIsZ0JBQWdCLGFBQWEsNEJBQTRCLElBQUc7a0RBQzdFOzs7Ozs7a0RBR0QsOERBQUN1Qjt3Q0FDR0MsU0FBUyxJQUFNOUIsU0FBU0gsOERBQU1BLENBQUM7d0NBQy9CNkIsV0FBVyxHQUE4RCxPQUEzRHBCLGdCQUFnQixZQUFZLDRCQUE0QixJQUFHO2tEQUM1RTs7Ozs7O2tEQUdELDhEQUFDdUI7d0NBQ0dDLFNBQVMsSUFBTTlCLFNBQVNILDhEQUFNQSxDQUFDO3dDQUMvQjZCLFdBQVcsR0FBOEQsT0FBM0RwQixnQkFBZ0IsWUFBWSw0QkFBNEIsSUFBRztrREFDNUU7Ozs7OztrREFHRCw4REFBQ3VCO3dDQUNHQyxTQUFTLElBQU05QixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0I2QixXQUFXLEdBQTJELE9BQXhEcEIsZ0JBQWdCLFNBQVMsNEJBQTRCLElBQUc7a0RBQ3pFOzs7Ozs7b0NBR0FFLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY3lCLElBQUksTUFBSyx5QkFDcEIsOERBQUNKO3dDQUNHQyxTQUFTLElBQU05QixTQUFTSCw4REFBTUEsQ0FBQzt3Q0FDL0I2QixXQUFXLEdBQThELE9BQTNEcEIsZ0JBQWdCLFlBQVksNEJBQTRCLElBQUc7a0RBQzVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT2pCLDhEQUFDbUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDUTt3QkFBSVIsV0FBVTt3QkFBaURTLEtBQUszQixDQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWM0QixVQUFVLEtBQUk7Ozs7OztrQ0FDakcsOERBQUNMO3dCQUFHTCxXQUFVOzs0QkFBYWxCLHlCQUFBQSxtQ0FBQUEsYUFBYzZCLFNBQVM7NEJBQUM7NEJBQUU3Qix5QkFBQUEsbUNBQUFBLGFBQWM4QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNGO0dBckdNdkM7O1FBQ2VMLHdEQUFjQTtRQUNOQyx3REFBY0E7UUFDbkJBLHdEQUFjQTtRQUNkQSx3REFBY0E7UUFDYkEsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQXdCZkEsd0RBQWNBOzs7S0E5QmpDSTtBQXVHTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmRhSGVhZGVyLnRzeD82OWZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NsaWNlcy9zaWRlYmFyU2xpY2VcIjtcbmltcG9ydCB7IHNldFRhYiB9IGZyb20gXCIuLi8uLi9yZWR1eC9zbGljZXMvdGFiU2xpY2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRGFzaGJvYXJkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZWJhclJlZHVjZXIuaXNDb2xsYXBzZWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YWJSZWR1Y2VyLnNlbGVjdGVkVGFiKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlZpZXdJdGVtUmVkdWNlci5jdXJyZW50SXRlbUlkKTtcblxuICAgICAgICAvLyBTRVRUSU5HIFVQIFNPQ0tFVC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgY29uc3QgaGFuZGxlSW5jb21pbmdNZXNzYWdlID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTkVXIE1FU1NBR0Uga2l0dHk9PT09PT09PT0+IFwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkTmV3TWVzc2FnZShtZXNzYWdlKSlcbiAgICAgICAgICAgIC8vIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGdyb3VwTWVzc2FnZV0pO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4geyBcbiAgICAgICAgICAgIHNvY2tldC5vbigncHJpdmF0ZV9tZXNzYWdlJywgaGFuZGxlSW5jb21pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2VGcm9tR3JvdXAnLCBoYW5kbGVJbmNvbWluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2pvaW5Qcm9qZWN0JywgeyBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhbnVwIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgIHNvY2tldC5vZmYoJ3ByaXZhdGVfbWVzc2FnZScsIGhhbmRsZUluY29taW5nTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9mZigncmVjZWl2ZU1lc3NhZ2VGcm9tR3JvdXAnLCBoYW5kbGVJbmNvbWluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwgW2N1cnJlbnRQcm9qZWN0SWRdKTtcbiAgICBcbiAgICAgICAgLy8gUkVNT1ZFIHRoaXMgXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGF0UmVkdWNlci5tZXNzYWdlcyk7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2VzIGluIFJFRFVYLi4uLi4uXCIsIG1lc3NhZ2VzKTsgICAgICAgIFxuICAgICAgICB9LCBbbWVzc2FnZXNdKTtcbiAgICBcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpc0NvbGxsYXBzZWRcIixpc0NvbGxhcHNlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRUYWJcIixzZWxlY3RlZFRhYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkSW5Vc2VyLi4uLi4uLi5cIiwgbG9nZ2VkSW5Vc2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50SXRlbUlkLi4uLi4uLi5cIiwgY3VycmVudEl0ZW1JZCk7XG4gICAgICAgIFxuICAgIH0sIFtpc0NvbGxhcHNlZCwgc2VsZWN0ZWRUYWIsIGN1cnJlbnRJdGVtSWRdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTQgYm9yZGVyLWItMiBib3JkZXItWyMxZTI5M2JdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdy1bMjA5cHhdIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBwbC00IHByLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT48aDE+U1BSSU5URVI8L2gxPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMlwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHRvZ2dsZVNpZGViYXIoKSl9PlxuICAgICAgICAgICAgICAgICAgICB7aXNDb2xsYXBzZWQgPyAnPScgOiAneCd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBsLTQgcHQtWzNweF0gYm9yZGVyLWwtMiBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlNhbXBsZSBQcm9qZWN0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiQmFja2xvZ3NcIikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiQmFja2xvZ3NcIiA/IFwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIiA6IFwiXCJ9IHB4LTJgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tsb2dzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiU3ByaW50c1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJTcHJpbnRzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcHJpbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiUmVwb3J0c1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJSZXBvcnRzXCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiQ2hhdFwiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZFRhYiA9PT0gXCJDaGF0XCIgPyBcImJvcmRlci1iLTIgYm9yZGVyLWJsYWNrXCIgOiBcIlwifSBweC0yYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJblVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0VGFiKFwiTWVtYmVyc1wiKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c2VsZWN0ZWRUYWIgPT09IFwiTWVtYmVyc1wiID8gXCJib3JkZXItYi0yIGJvcmRlci1ibGFja1wiIDogXCJcIn0gcHgtMmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaXplLTEwIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItWyNkNGQ1ZDZdXCIgc3JjPXtsb2dnZWRJblVzZXI/LnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHItOCBwbC0zXCI+e2xvZ2dlZEluVXNlcj8uZmlyc3ROYW1lfSB7bG9nZ2VkSW5Vc2VyPy5sYXN0TmFtZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEhlYWRlcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInRvZ2dsZVNpZGViYXIiLCJzZXRUYWIiLCJMaW5rIiwiRGFzaGJvYXJkSGVhZGVyIiwiZGlzcGF0Y2giLCJjdXJyZW50UHJvamVjdElkIiwic3RhdGUiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImlzQ29sbGFwc2VkIiwic2lkZWJhclJlZHVjZXIiLCJzZWxlY3RlZFRhYiIsInRhYlJlZHVjZXIiLCJsb2dnZWRJblVzZXIiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJjdXJyZW50SXRlbUlkIiwiVmlld0l0ZW1SZWR1Y2VyIiwiaGFuZGxlSW5jb21pbmdNZXNzYWdlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJhZGROZXdNZXNzYWdlIiwic29ja2V0Iiwib24iLCJlbWl0IiwicHJvamVjdElkIiwib2ZmIiwibWVzc2FnZXMiLCJjaGF0UmVkdWNlciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsInVsIiwicm9sZSIsImltZyIsInNyYyIsInByb2ZpbGVQaWMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/dashboardaHeader.tsx\n"));

/***/ })

});