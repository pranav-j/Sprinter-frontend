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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboardaHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboardaHeader */ \"(app-pages-browser)/./app/components/dashboardaHeader.tsx\");\n/* harmony import */ var _components_tabDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/tabDetails */ \"(app-pages-browser)/./app/components/tabDetails.tsx\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sidebar */ \"(app-pages-browser)/./app/components/sidebar.tsx\");\n/* harmony import */ var _components_subComponents_newProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/subComponents/newProject */ \"(app-pages-browser)/./app/components/subComponents/newProject.tsx\");\n/* harmony import */ var _components_subComponents_newItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/subComponents/newItem */ \"(app-pages-browser)/./app/components/subComponents/newItem.tsx\");\n/* harmony import */ var _components_subComponents_newSprint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/subComponents/newSprint */ \"(app-pages-browser)/./app/components/subComponents/newSprint.tsx\");\n/* harmony import */ var _components_subComponents_viewItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/subComponents/viewItem */ \"(app-pages-browser)/./app/components/subComponents/viewItem.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_membersSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/redux/slices/membersSlice */ \"(app-pages-browser)/./redux/slices/membersSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const isNewProjectModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.newProjectModelOpenReducer.isNewProjectModalOpen);\n    const isTaskModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.newTaskModelOpenReducer.isNewTaskModalOpen);\n    const isNewSprintModalOpen = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.newSprintModalOpenReducer.isNewSprintModalOpen);\n    const currentItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.ViewItemReducer.currentItemId);\n    const deleteItemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.deleteItemReducer.deleteItemId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.MembersReducer.members);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((state)=>state.userReducer.user);\n    // const [members, setMembers] = useState<any>([]);\n    // useEffect(() => {\n    //     const getMembers = async() => {\n    //         const response = await axios.get(`http://localhost:3030/api/getMembers?projectId=${currentProjectId}`, { withCredentials: true })\n    //         setMembers(response);\n    //     }\n    //     getMembers();\n    //     console.log(\"members.......\", members);\n    // }, [currentProjectId])\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slices_membersSlice__WEBPACK_IMPORTED_MODULE_10__.fetchMembers)(currentProjectId));\n        console.log(\"members.......\", members);\n    }, [\n        currentProjectId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen ststic\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dashboardaHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tabDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            isNewProjectModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newProject__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this) : null,\n            isTaskModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, this) : null,\n            isNewSprintModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_newSprint__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this) : null,\n            currentItemId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_viewItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this) : null,\n            deleteItemId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen absolute bottom-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_subComponents_viewItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 21\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/dashBoard/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"u80cEOvcmBlRE8tCxffTxiSMsuk=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_9__.useAppDispatch\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoQm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1U7QUFDWDtBQUNOO0FBQ29CO0FBQ0Q7QUFDSTtBQUNGO0FBQ0Y7QUFDSjtBQUk1QyxTQUFTWTs7SUFDcEIsTUFBTUMsd0JBQXdCSCw0REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQywwQkFBMEIsQ0FBQ0YscUJBQXFCO0lBQzlHLE1BQU1HLGtCQUFrQk4sNERBQWNBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTUcsdUJBQXVCLENBQUNDLGtCQUFrQjtJQUNsRyxNQUFNQyx1QkFBdUJULDREQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1NLHlCQUF5QixDQUFDRCxvQkFBb0I7SUFDM0csTUFBTUUsZ0JBQWdCWCw0REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNUSxlQUFlLENBQUNELGFBQWE7SUFDbkYsTUFBTUUsZUFBY2IsNERBQWNBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTVUsaUJBQWlCLENBQUNELFlBQVk7SUFFbEYsTUFBTUUsbUJBQW1CZiw0REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNWSx1QkFBdUIsQ0FBQ0QsZ0JBQWdCO0lBQ2pHLE1BQU1FLFVBQVVqQiw0REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNYyxjQUFjLENBQUNELE9BQU87SUFDdEUsTUFBTUUsZUFBZW5CLDREQUFjQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1nQixXQUFXLENBQUNDLElBQUk7SUFFckUsbURBQW1EO0lBRW5ELG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsNElBQTRJO0lBQzVJLGdDQUFnQztJQUNoQyxRQUFRO0lBRVIsb0JBQW9CO0lBRXBCLDhDQUE4QztJQUU5Qyx5QkFBeUI7SUFFekIsTUFBTUMsV0FBV3ZCLDREQUFjQTtJQUUvQlIsZ0RBQVNBLENBQUM7UUFDTitCLFNBQVNyQix5RUFBWUEsQ0FBQ2M7UUFDdEJRLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JQO0lBQ2xDLEdBQUc7UUFBQ0Y7S0FBaUI7SUFFckIscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDbEMsb0VBQWVBOzs7OzswQkFDaEIsOERBQUNpQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNoQywyREFBT0E7Ozs7O2tDQUNSLDhEQUFDRCw4REFBVUE7Ozs7Ozs7Ozs7O1lBR1hVLHNDQUNBLDhEQUFDc0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUMvQiw0RUFBVUE7Ozs7Ozs7Ozt1QkFFWDtZQUdKVyxnQ0FDQSw4REFBQ21CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDOUIseUVBQVlBOzs7Ozs7Ozs7dUJBRWI7WUFHSmEscUNBQ0EsOERBQUNnQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzdCLDJFQUFjQTs7Ozs7Ozs7O3VCQUVmO1lBR0pjLDhCQUNBLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzVCLDBFQUFhQTs7Ozs7Ozs7O3VCQUVkO1lBR0plLDZCQUNJLDhEQUFDWTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzVCLDBFQUFhQTs7Ozs7Ozs7O3VCQUVsQjs7Ozs7OztBQUlwQjtHQTVFd0JJOztRQUNVRix3REFBY0E7UUFDcEJBLHdEQUFjQTtRQUNUQSx3REFBY0E7UUFDckJBLHdEQUFjQTtRQUNoQkEsd0RBQWNBO1FBRVRBLHdEQUFjQTtRQUN2QkEsd0RBQWNBO1FBQ1RBLHdEQUFjQTtRQWdCbEJELHdEQUFjQTs7O0tBekJYRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaEJvYXJkL3BhZ2UudHN4PzZjYWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Rhc2hib2FyZGFIZWFkZXJcIjtcbmltcG9ydCBUYWJEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL3RhYkRldGFpbHNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBOZXdQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdFwiO1xuaW1wb3J0IE5ld1Rhc2tNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJDb21wb25lbnRzL25ld0l0ZW1cIjtcbmltcG9ydCBOZXdTcHJpbnRNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJDb21wb25lbnRzL25ld1NwcmludFwiO1xuaW1wb3J0IFZpZXdJdGVtTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy92aWV3SXRlbVwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IGZldGNoTWVtYmVycyB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9tZW1iZXJzU2xpY2VcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJyZW50SXRlbUlkIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2l0ZW1zL3ZpZXdJdGVtTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IGlzTmV3UHJvamVjdE1vZGFsT3BlbiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmV3UHJvamVjdE1vZGVsT3BlblJlZHVjZXIuaXNOZXdQcm9qZWN0TW9kYWxPcGVuKTtcbiAgICBjb25zdCBpc1Rhc2tNb2RhbE9wZW4gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5ld1Rhc2tNb2RlbE9wZW5SZWR1Y2VyLmlzTmV3VGFza01vZGFsT3Blbik7XG4gICAgY29uc3QgaXNOZXdTcHJpbnRNb2RhbE9wZW4gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5ld1NwcmludE1vZGFsT3BlblJlZHVjZXIuaXNOZXdTcHJpbnRNb2RhbE9wZW4pO1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlZpZXdJdGVtUmVkdWNlci5jdXJyZW50SXRlbUlkKTtcbiAgICBjb25zdCBkZWxldGVJdGVtSWQgPXVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGVsZXRlSXRlbVJlZHVjZXIuZGVsZXRlSXRlbUlkKTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyLmN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IG1lbWJlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLk1lbWJlcnNSZWR1Y2VyLm1lbWJlcnMpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG5cbiAgICAvLyBjb25zdCBbbWVtYmVycywgc2V0TWVtYmVyc10gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGdldE1lbWJlcnMgPSBhc3luYygpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2dldE1lbWJlcnM/cHJvamVjdElkPSR7Y3VycmVudFByb2plY3RJZH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxuICAgIC8vICAgICAgICAgc2V0TWVtYmVycyhyZXNwb25zZSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBnZXRNZW1iZXJzKCk7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJtZW1iZXJzLi4uLi4uLlwiLCBtZW1iZXJzKTtcbiAgICAgICAgXG4gICAgLy8gfSwgW2N1cnJlbnRQcm9qZWN0SWRdKVxuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hNZW1iZXJzKGN1cnJlbnRQcm9qZWN0SWQpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW1iZXJzLi4uLi4uLlwiLCBtZW1iZXJzKTtcbiAgICB9LCBbY3VycmVudFByb2plY3RJZF0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gc3RzdGljXCI+XG4gICAgICAgICAgICA8RGFzaGJvYXJkSGVhZGVyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgICAgICAgICAgPFRhYkRldGFpbHMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzTmV3UHJvamVjdE1vZGFsT3BlbiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmV3UHJvamVjdCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNUYXNrTW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdUYXNrTW9kYWwgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzTmV3U3ByaW50TW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXdTcHJpbnRNb2RhbCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtSWQgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJdGVtTW9kYWwgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtSWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld0l0ZW1Nb2RhbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbCBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJEYXNoYm9hcmRIZWFkZXIiLCJUYWJEZXRhaWxzIiwiU2lkZWJhciIsIk5ld1Byb2plY3QiLCJOZXdUYXNrTW9kYWwiLCJOZXdTcHJpbnRNb2RhbCIsIlZpZXdJdGVtTW9kYWwiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZmV0Y2hNZW1iZXJzIiwiRGFzaGJvYXJkIiwiaXNOZXdQcm9qZWN0TW9kYWxPcGVuIiwic3RhdGUiLCJuZXdQcm9qZWN0TW9kZWxPcGVuUmVkdWNlciIsImlzVGFza01vZGFsT3BlbiIsIm5ld1Rhc2tNb2RlbE9wZW5SZWR1Y2VyIiwiaXNOZXdUYXNrTW9kYWxPcGVuIiwiaXNOZXdTcHJpbnRNb2RhbE9wZW4iLCJuZXdTcHJpbnRNb2RhbE9wZW5SZWR1Y2VyIiwiY3VycmVudEl0ZW1JZCIsIlZpZXdJdGVtUmVkdWNlciIsImRlbGV0ZUl0ZW1JZCIsImRlbGV0ZUl0ZW1SZWR1Y2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwibWVtYmVycyIsIk1lbWJlcnNSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashBoard/page.tsx\n"));

/***/ })

});