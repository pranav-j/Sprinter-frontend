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

/***/ "(app-pages-browser)/./app/dashBoard/page.tsx":
/*!********************************!*\
  !*** ./app/dashBoard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboardaHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboardaHeader */ \"(app-pages-browser)/./app/components/dashboardaHeader.tsx\");\n/* harmony import */ var _components_tabDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tabDetails */ \"(app-pages-browser)/./app/components/tabDetails.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.tsx\");\n/* harmony import */ var _components_subComponents_newProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/subComponents/newProject */ \"(app-pages-browser)/./app/components/subComponents/newProject.tsx\");\n/* harmony import */ var _components_subComponents_newItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/subComponents/newItem */ \"(app-pages-browser)/./app/components/subComponents/newItem.tsx\");\n/* harmony import */ var _components_subComponents_newSprint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/subComponents/newSprint */ \"(app-pages-browser)/./app/components/subComponents/newSprint.tsx\");\n/* harmony import */ var _components_subComponents_viewItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/subComponents/viewItem */ \"(app-pages-browser)/./app/components/subComponents/viewItem.tsx\");\n/* harmony import */ var _components_subComponents_deleteItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/subComponents/deleteItem */ \"(app-pages-browser)/./app/components/subComponents/deleteItem.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_membersSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/redux/slices/membersSlice */ \"(app-pages-browser)/./redux/slices/membersSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const isNewProjectModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.newProjectModelOpenReducer.isNewProjectModalOpen);\n    const isTaskModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.newTaskModelOpenReducer.isNewTaskModalOpen);\n    const isNewSprintModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.newSprintModalOpenReducer.isNewSprintModalOpen);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    const deleteItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.deleteItemReducer.deleteItemId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.MembersReducer.members);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector)((state)=>state.userReducer.user);\n    // const [members, setMembers] = useState<any>([]);\n    // useEffect(() => {\n    //     const getMembers = async() => {\n    //         const response = await axios.get(`http://localhost:3030/api/getMembers?projectId=${currentProjectId}`, { withCredentials: true })\n    //         setMembers(response);\n    //     }\n    //     getMembers();\n    //     console.log(\"members.......\", members);\n    // }, [currentProjectId])\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slices_membersSlice__WEBPACK_IMPORTED_MODULE_11__.fetchMembers)(currentProjectId));\n        console.log(\"members.......\", members);\n    }, [\n        currentProjectId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen ststic\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboardaHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            isNewProjectModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newProject__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, this) : null,\n            isTaskModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 17\n            }, this) : null,\n            isNewSprintModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newSprint__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, this) : null,\n            currentItemId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_viewItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 17\n            }, this) : null,\n            deleteItemId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_deleteItem__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 21\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"u80cEOvcmBlRE8tCxffTxiSMsuk=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoQm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNVO0FBQ1g7QUFDTjtBQUNvQjtBQUNEO0FBQ0k7QUFDRjtBQUNJO0FBQ047QUFDSjtBQUk1QyxTQUFTYTs7SUFDcEIsTUFBTUMsd0JBQXdCSCw2REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQywwQkFBMEIsQ0FBQ0YscUJBQXFCO0lBQzlHLE1BQU1HLGtCQUFrQk4sNkRBQWNBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTUcsdUJBQXVCLENBQUNDLGtCQUFrQjtJQUNsRyxNQUFNQyx1QkFBdUJULDZEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1NLHlCQUF5QixDQUFDRCxvQkFBb0I7SUFDM0csTUFBTUUsZ0JBQWdCWCw2REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNUSxlQUFlLENBQUNELGFBQWE7SUFDbkYsTUFBTUUsZUFBZWIsNkRBQWNBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTVUsaUJBQWlCLENBQUNELFlBQVk7SUFFbkYsTUFBTUUsbUJBQW1CZiw2REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNWSx1QkFBdUIsQ0FBQ0QsZ0JBQWdCO0lBQ2pHLE1BQU1FLFVBQVVqQiw2REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNYyxjQUFjLENBQUNELE9BQU87SUFDdEUsTUFBTUUsZUFBZW5CLDZEQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1nQixXQUFXLENBQUNDLElBQUk7SUFFckUsbURBQW1EO0lBRW5ELG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsNElBQTRJO0lBQzVJLGdDQUFnQztJQUNoQyxRQUFRO0lBRVIsb0JBQW9CO0lBRXBCLDhDQUE4QztJQUU5Qyx5QkFBeUI7SUFFekIsTUFBTUMsV0FBV3ZCLDZEQUFjQTtJQUUvQlQsZ0RBQVNBLENBQUM7UUFDTmdDLFNBQVNyQix5RUFBWUEsQ0FBQ2M7UUFDdEJRLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JQO0lBQ2xDLEdBQUc7UUFBQ0Y7S0FBaUI7SUFFckIscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDbkMsb0VBQWVBOzs7OzswQkFDaEIsOERBQUNrQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNqQywyREFBT0E7Ozs7O2tDQUNSLDhEQUFDRCw4REFBVUE7Ozs7Ozs7Ozs7O1lBR1hXLHNDQUNBLDhEQUFDc0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNoQyw0RUFBVUE7Ozs7Ozs7Ozt1QkFFWDtZQUdKWSxnQ0FDQSw4REFBQ21CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDL0IseUVBQVlBOzs7Ozs7Ozs7dUJBRWI7WUFHSmMscUNBQ0EsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzlCLDJFQUFjQTs7Ozs7Ozs7O3VCQUVmO1lBR0plLDhCQUNBLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzdCLDBFQUFhQTs7Ozs7Ozs7O3VCQUVkO1lBR0pnQiw2QkFDSSw4REFBQ1k7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUM1Qiw0RUFBZUE7Ozs7Ozs7Ozt1QkFFcEI7Ozs7Ozs7QUFJcEI7R0E1RXdCSTs7UUFDVUYseURBQWNBO1FBQ3BCQSx5REFBY0E7UUFDVEEseURBQWNBO1FBQ3JCQSx5REFBY0E7UUFDZkEseURBQWNBO1FBRVZBLHlEQUFjQTtRQUN2QkEseURBQWNBO1FBQ1RBLHlEQUFjQTtRQWdCbEJELHlEQUFjQTs7O0tBekJYRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaEJvYXJkL3BhZ2UudHN4PzZjYWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXJcIjtcbmltcG9ydCBUYWJEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL3RhYkRldGFpbHNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBOZXdQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdFwiO1xuaW1wb3J0IE5ld1Rhc2tNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJDb21wb25lbnRzL25ld0l0ZW1cIjtcbmltcG9ydCBOZXdTcHJpbnRNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJDb21wb25lbnRzL25ld1NwcmludFwiO1xuaW1wb3J0IFZpZXdJdGVtTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy92aWV3SXRlbVwiO1xuaW1wb3J0IERlbGV0ZUl0ZW1Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2RlbGV0ZUl0ZW1cIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyBmZXRjaE1lbWJlcnMgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvbWVtYmVyc1NsaWNlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3VycmVudEl0ZW1JZCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9pdGVtcy92aWV3SXRlbU1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICBjb25zdCBpc05ld1Byb2plY3RNb2RhbE9wZW4gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5ld1Byb2plY3RNb2RlbE9wZW5SZWR1Y2VyLmlzTmV3UHJvamVjdE1vZGFsT3Blbik7XG4gICAgY29uc3QgaXNUYXNrTW9kYWxPcGVuID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uZXdUYXNrTW9kZWxPcGVuUmVkdWNlci5pc05ld1Rhc2tNb2RhbE9wZW4pO1xuICAgIGNvbnN0IGlzTmV3U3ByaW50TW9kYWxPcGVuID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5uZXdTcHJpbnRNb2RhbE9wZW5SZWR1Y2VyLmlzTmV3U3ByaW50TW9kYWxPcGVuKTtcbiAgICBjb25zdCBjdXJyZW50SXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5WaWV3SXRlbVJlZHVjZXIuY3VycmVudEl0ZW1JZCk7XG4gICAgY29uc3QgZGVsZXRlSXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kZWxldGVJdGVtUmVkdWNlci5kZWxldGVJdGVtSWQpO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgbWVtYmVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuTWVtYmVyc1JlZHVjZXIubWVtYmVycyk7XG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcblxuICAgIC8vIGNvbnN0IFttZW1iZXJzLCBzZXRNZW1iZXJzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgZ2V0TWVtYmVycyA9IGFzeW5jKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvZ2V0TWVtYmVycz9wcm9qZWN0SWQ9JHtjdXJyZW50UHJvamVjdElkfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXG4gICAgLy8gICAgICAgICBzZXRNZW1iZXJzKHJlc3BvbnNlKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGdldE1lbWJlcnMoKTtcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm1lbWJlcnMuLi4uLi4uXCIsIG1lbWJlcnMpO1xuICAgICAgICBcbiAgICAvLyB9LCBbY3VycmVudFByb2plY3RJZF0pXG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaE1lbWJlcnMoY3VycmVudFByb2plY3RJZCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1lbWJlcnMuLi4uLi4uXCIsIG1lbWJlcnMpO1xuICAgIH0sIFtjdXJyZW50UHJvamVjdElkXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBzdHN0aWNcIj5cbiAgICAgICAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgICAgICAgICA8VGFiRGV0YWlscyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNOZXdQcm9qZWN0TW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdQcm9qZWN0IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc1Rhc2tNb2RhbE9wZW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5ld1Rhc2tNb2RhbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNOZXdTcHJpbnRNb2RhbE9wZW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5ld1NwcmludE1vZGFsIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGwgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW1JZCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0l0ZW1Nb2RhbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW1JZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJdGVtTW9kYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGwgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiRGFzaGJvYXJkSGVhZGVyIiwiVGFiRGV0YWlscyIsIlNpZGViYXIiLCJOZXdQcm9qZWN0IiwiTmV3VGFza01vZGFsIiwiTmV3U3ByaW50TW9kYWwiLCJWaWV3SXRlbU1vZGFsIiwiRGVsZXRlSXRlbU1vZGFsIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImZldGNoTWVtYmVycyIsIkRhc2hib2FyZCIsImlzTmV3UHJvamVjdE1vZGFsT3BlbiIsInN0YXRlIiwibmV3UHJvamVjdE1vZGVsT3BlblJlZHVjZXIiLCJpc1Rhc2tNb2RhbE9wZW4iLCJuZXdUYXNrTW9kZWxPcGVuUmVkdWNlciIsImlzTmV3VGFza01vZGFsT3BlbiIsImlzTmV3U3ByaW50TW9kYWxPcGVuIiwibmV3U3ByaW50TW9kYWxPcGVuUmVkdWNlciIsImN1cnJlbnRJdGVtSWQiLCJWaWV3SXRlbVJlZHVjZXIiLCJkZWxldGVJdGVtSWQiLCJkZWxldGVJdGVtUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsIm1lbWJlcnMiLCJNZW1iZXJzUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashBoard/page.tsx\n"));

/***/ })

});