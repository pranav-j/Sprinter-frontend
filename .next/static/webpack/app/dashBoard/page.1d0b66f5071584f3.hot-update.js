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

/***/ "(app-pages-browser)/./app/components/sidebar.tsx":
/*!************************************!*\
  !*** ./app/components/sidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/currentProjectSlice */ \"(app-pages-browser)/./redux/slices/projects/currentProjectSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    let currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchProjects)());\n    }, []);\n    if (currentProjectId === \"\" && projects.length > 0) {\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projects[0]._id));\n    }\n    const handleCurrentProjectClick = (projectId)=>{\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projectId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log('PROJECTS.......', projects);\n        console.log(\"currentProjectId.........\", currentProjectId);\n    }, [\n        projects,\n        currentProjectId\n    ]);\n    return isCollapsed ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-lp-4 w-[241px] bg-[rgb(18,29,51)] text-[#b9c0c1]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between pb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2\",\n                        onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined),\n            projects.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center h-full text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"No projects yet!\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-500\",\n                        children: \"Create one to get started.\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 60,\n                columnNumber: 21\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pl-2\",\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"line-clamp-1 py-1 px-2 text-[1rem] cursor-pointer rounded \".concat(project._id === currentProjectId ? \"bg-[#606566] text-[#ffd373] \" : \"\"),\n                        onClick: ()=>handleCurrentProjectClick(project._id),\n                        children: project.title\n                    }, project._id, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 29\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 65,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n        lineNumber: 51,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Sidebar, \"HjtLgam3Ar9GD0q9djH/PtjQ57Y=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDdUI7QUFDcUI7QUFDTjtBQUNaO0FBRXRFLE1BQU1NLFVBQVU7O0lBWVosTUFBTUMsY0FBY04sNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsY0FBYyxDQUFDRixXQUFXO0lBQzlFLElBQUlHLG1CQUFtQlQsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUcsdUJBQXVCLENBQUNELGdCQUFnQjtJQUMvRixNQUFNRSxlQUFlWCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNSyxXQUFXLENBQUNDLElBQUk7SUFFckUsTUFBTUMsV0FBc0JkLDREQUFjQSxDQUFDLENBQUNPLFFBQVdBLE1BQU1RLGVBQWUsQ0FBQ0QsUUFBUTtJQUlyRixNQUFNRSxXQUFXZiw0REFBY0E7SUFDL0JGLGdEQUFTQSxDQUFDO1FBQ05pQixTQUFTWixtRkFBYUE7SUFDMUIsR0FBRyxFQUFFO0lBRUwsSUFBRyxxQkFBc0IsTUFBUVUsU0FBU0csTUFBTSxHQUFHLEdBQUk7UUFDbkRELFNBQVNiLCtGQUFtQkEsQ0FBQ1csUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksR0FBRztJQUNoRDtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQztRQUMvQkosU0FBU2IsK0ZBQW1CQSxDQUFDaUI7SUFDakM7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ04sNENBQTRDO1FBQzVDc0IsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QmI7SUFFN0MsR0FBRztRQUFDSztRQUFVTDtLQUFpQjtJQUcvQixPQUNJSCxjQUFjLHFCQUNWLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUc7Ozs7OztvQkFDRmQsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjZSxJQUFJLE1BQUssd0JBQ3JCLDhEQUFDQzt3QkFBT0gsV0FBVTt3QkFBT0ksU0FBUyxJQUFNWixTQUFTZCxxR0FBd0JBO2tDQUFLOzs7OztvQ0FDNUU7Ozs7Ozs7WUFHVFksU0FBU0csTUFBTSxLQUFLLGtCQUNqQiw4REFBQ007Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSzt3QkFBRUwsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDckMsOERBQUNLO3dCQUFFTCxXQUFVO2tDQUF3Qjs7Ozs7Ozs7Ozs7MENBR3pDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFWFYsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDViw4REFBQ0M7d0JBRUdSLFdBQVcsNkRBQW9JLE9BQXZFTyxRQUFRYixHQUFHLEtBQUtULG1CQUFtQixpQ0FBaUM7d0JBQzVJbUIsU0FBUyxJQUFNVCwwQkFBMEJZLFFBQVFiLEdBQUc7a0NBQ3REYSxRQUFRRSxLQUFLO3VCQUhORixRQUFRYixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBV2hEO0dBdkVNYjs7UUFZa0JMLHdEQUFjQTtRQUNYQSx3REFBY0E7UUFDaEJBLHdEQUFjQTtRQUVQQSx3REFBY0E7UUFJekJDLHdEQUFjQTs7O0tBcEI3Qkk7QUF5RU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci50c3g/M2MxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHNldElzTmV3UHJvamVjdE1vZGFsT3BlbiB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9uZXdQcm9qZWN0TW9kYWxTbGljZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3RJZCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9jdXJyZW50UHJvamVjdFNsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaFByb2plY3RzIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2plY3RzL3Byb2plY3RzU2xpY2VcIjtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBpbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgICAgIF9pZDogc3RyaW5nO1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICAgICAgbWVtYmVyczogc3RyaW5nW107XG4gICAgICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgICAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZWJhclJlZHVjZXIuaXNDb2xsYXBzZWQpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuXG4gICAgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gKHN0YXRlLnByb2plY3RzUmVkdWNlci5wcm9qZWN0cykpXG5cblxuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUHJvamVjdHMoKSlcbiAgICB9LCBbXSk7XG5cbiAgICBpZigoY3VycmVudFByb2plY3RJZCA9PT0gXCJcIikgJiYgKHByb2plY3RzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQcm9qZWN0SWQocHJvamVjdHNbMF0uX2lkKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUN1cnJlbnRQcm9qZWN0Q2xpY2sgPSAocHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFByb2plY3RJZChwcm9qZWN0SWQpKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1BST0pFQ1RTLi4uLi4uLicsIHByb2plY3RzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRQcm9qZWN0SWQuLi4uLi4uLi4nLCBjdXJyZW50UHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICBcbiAgICB9LCBbcHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWRdKTtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIGlzQ29sbGFwc2VkID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1scC00IHctWzI0MXB4XSBiZy1bcmdiKDE4LDI5LDUxKV0gdGV4dC1bI2I5YzBjMV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgeyBsb2dnZWRJblVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIiA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0yXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuKCkpfT4rPC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPk5vIHByb2plY3RzIHlldCE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5DcmVhdGUgb25lIHRvIGdldCBzdGFydGVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3Q6IFByb2plY3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5faWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaW5lLWNsYW1wLTEgcHktMSBweC0yIHRleHQtWzFyZW1dIGN1cnNvci1wb2ludGVyIHJvdW5kZWQgJHtwcm9qZWN0Ll9pZCA9PT0gY3VycmVudFByb2plY3RJZCA/ICdiZy1bIzYwNjU2Nl0gdGV4dC1bI2ZmZDM3M10gJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUN1cnJlbnRQcm9qZWN0Q2xpY2socHJvamVjdC5faWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57cHJvamVjdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4iLCJzZXRDdXJyZW50UHJvamVjdElkIiwiZmV0Y2hQcm9qZWN0cyIsIlNpZGViYXIiLCJpc0NvbGxhcHNlZCIsInN0YXRlIiwic2lkZWJhclJlZHVjZXIiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJsb2dnZWRJblVzZXIiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJwcm9qZWN0cyIsInByb2plY3RzUmVkdWNlciIsImRpc3BhdGNoIiwibGVuZ3RoIiwiX2lkIiwiaGFuZGxlQ3VycmVudFByb2plY3RDbGljayIsInByb2plY3RJZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJvbGUiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm1hcCIsInByb2plY3QiLCJoMyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.tsx\n"));

/***/ })

});