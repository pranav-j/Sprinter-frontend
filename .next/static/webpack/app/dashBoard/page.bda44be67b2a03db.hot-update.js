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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/currentProjectSlice */ \"(app-pages-browser)/./redux/slices/projects/currentProjectSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import axios from \"axios\";\nconst Sidebar = ()=>{\n    _s();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    let currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    // useEffect(() => {\n    //     const fetchProjects = async() => {\n    //         try {\n    //             const response = await axios.get(\"http://localhost:3030/api/post\", { withCredentials: true });\n    //             setProjects(response.data.projects);\n    //         } catch (error) {\n    //             console.log(\"Error fetching projects:\", error);\n    //         }\n    //     };\n    //     fetchProjects();        \n    // }, [])\n    // useEffect(() => {\n    //     console.log(\"PROJECTS...\",projects);\n    // }, [projects]);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchProjects)());\n    }, []);\n    if (currentProjectId === \"\" && projects.length > 0) {\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projects[0]._id));\n    }\n    const handleCurrentProjectClick = (projectId)=>{\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projectId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log('PROJECTS.......', projects);\n        console.log(\"currentProjectId.........\", currentProjectId);\n    }, [\n        projects,\n        currentProjectId\n    ]);\n    return isCollapsed ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 w-[241px] border-r-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined),\n                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2\",\n                        onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pl-2\",\n                children: [\n                    projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"line-clamp-1 py-1 px-2 cursor-pointer rounded \".concat(project._id === currentProjectId ? \"bg-[#d9d5d5] \" : \"\"),\n                            onClick: ()=>handleCurrentProjectClick(project._id),\n                            children: project.title\n                        }, project._id, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 29\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center h-full text-center\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n        lineNumber: 69,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Sidebar, \"HjtLgam3Ar9GD0q9djH/PtjQ57Y=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDdUI7QUFDcUI7QUFDTjtBQUNaO0FBQ3RFLDZCQUE2QjtBQUU3QixNQUFNTSxVQUFVOztJQVlaLE1BQU1DLGNBQWNOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsV0FBVztJQUM5RSxJQUFJRyxtQkFBbUJULDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1HLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDL0YsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBRXJFLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDZHQUE2RztJQUM3RyxtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDhEQUE4RDtJQUM5RCxZQUFZO0lBQ1osU0FBUztJQUVULCtCQUErQjtJQUMvQixTQUFTO0lBRVQsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFFbEIsTUFBTUMsV0FBc0JkLDREQUFjQSxDQUFDLENBQUNPLFFBQVdBLE1BQU1RLGVBQWUsQ0FBQ0QsUUFBUTtJQUlyRixNQUFNRSxXQUFXZiw0REFBY0E7SUFDL0JGLGdEQUFTQSxDQUFDO1FBQ05pQixTQUFTWixtRkFBYUE7SUFDMUIsR0FBRyxFQUFFO0lBRUwsSUFBRyxxQkFBc0IsTUFBUVUsU0FBU0csTUFBTSxHQUFHLEdBQUk7UUFDbkRELFNBQVNiLCtGQUFtQkEsQ0FBQ1csUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksR0FBRztJQUNoRDtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQztRQUMvQkosU0FBU2IsK0ZBQW1CQSxDQUFDaUI7SUFDakM7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ04sNENBQTRDO1FBQzVDc0IsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QmI7SUFFN0MsR0FBRztRQUFDSztRQUFVTDtLQUFpQjtJQUcvQixPQUNJSCxjQUFjLHFCQUNWLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUc7Ozs7OztvQkFDRmQsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjZSxJQUFJLE1BQUssd0JBQ3JCLDhEQUFDQzt3QkFBT0gsV0FBVTt3QkFBT0ksU0FBUyxJQUFNWixTQUFTZCxxR0FBd0JBO2tDQUFLOzs7OztvQ0FDNUU7Ozs7Ozs7MEJBR1YsOERBQUNxQjtnQkFBSUMsV0FBVTs7b0JBRVBWLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQyx3QkFDViw4REFBQ0M7NEJBRUdQLFdBQVcsaURBQXlHLE9BQXhETSxRQUFRWixHQUFHLEtBQUtULG1CQUFtQixrQkFBa0I7NEJBQ2pIbUIsU0FBUyxJQUFNVCwwQkFBMEJXLFFBQVFaLEdBQUc7c0NBQ3REWSxRQUFRRSxLQUFLOzJCQUhORixRQUFRWixHQUFHOzs7OztrQ0FNNUIsOERBQUNLO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7R0FwRk1uQjs7UUFZa0JMLHdEQUFjQTtRQUNYQSx3REFBY0E7UUFDaEJBLHdEQUFjQTtRQW1CUEEsd0RBQWNBO1FBSXpCQyx3REFBY0E7OztLQXJDN0JJO0FBc0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIudHN4PzNjMTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyBzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4gfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvamVjdHMvbmV3UHJvamVjdE1vZGFsU2xpY2VcIjtcbmltcG9ydCB7IHNldEN1cnJlbnRQcm9qZWN0SWQgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvcHJvamVjdHMvY3VycmVudFByb2plY3RTbGljZVwiO1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0cyB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9wcm9qZWN0c1NsaWNlXCI7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gICAgaW50ZXJmYWNlIFByb2plY3Qge1xuICAgICAgICBfaWQ6IHN0cmluZztcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgICAgIG1lbWJlcnM6IHN0cmluZ1tdO1xuICAgICAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICAgICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgaXNDb2xsYXBzZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNpZGViYXJSZWR1Y2VyLmlzQ29sbGFwc2VkKTtcbiAgICBsZXQgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGZldGNoUHJvamVjdHMgPSBhc3luYygpID0+IHtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Bvc3RcIiwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgLy8gICAgICAgICAgICAgc2V0UHJvamVjdHMocmVzcG9uc2UuZGF0YS5wcm9qZWN0cyk7XG4gICAgLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6XCIsIGVycm9yKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICBmZXRjaFByb2plY3RzKCk7ICAgICAgICBcbiAgICAvLyB9LCBbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUFJPSkVDVFMuLi5cIixwcm9qZWN0cyk7XG4gICAgLy8gfSwgW3Byb2plY3RzXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiAoc3RhdGUucHJvamVjdHNSZWR1Y2VyLnByb2plY3RzKSlcblxuXG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hQcm9qZWN0cygpKVxuICAgIH0sIFtdKTtcblxuICAgIGlmKChjdXJyZW50UHJvamVjdElkID09PSBcIlwiKSAmJiAocHJvamVjdHMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudFByb2plY3RJZChwcm9qZWN0c1swXS5faWQpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3VycmVudFByb2plY3RDbGljayA9IChwcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UHJvamVjdElkKHByb2plY3RJZCkpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUFJPSkVDVFMuLi4uLi4uJywgcHJvamVjdHMpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudFByb2plY3RJZC4uLi4uLi4uLicsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgICAgICAgICAgICAgIFxuICAgIH0sIFtwcm9qZWN0cywgY3VycmVudFByb2plY3RJZF0pO1xuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgaXNDb2xsYXBzZWQgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgdy1bMjQxcHhdIGJvcmRlci1yLTIgYm9yZGVyLVsjMWUyOTNiXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgeyBsb2dnZWRJblVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIiA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC0yXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuKCkpfT4rPC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdDogUHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0Ll9pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpbmUtY2xhbXAtMSBweS0xIHB4LTIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCAke3Byb2plY3QuX2lkID09PSBjdXJyZW50UHJvamVjdElkID8gJ2JnLVsjZDlkNWQ1XSAnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ3VycmVudFByb2plY3RDbGljayhwcm9qZWN0Ll9pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntwcm9qZWN0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInNldElzTmV3UHJvamVjdE1vZGFsT3BlbiIsInNldEN1cnJlbnRQcm9qZWN0SWQiLCJmZXRjaFByb2plY3RzIiwiU2lkZWJhciIsImlzQ29sbGFwc2VkIiwic3RhdGUiLCJzaWRlYmFyUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInByb2plY3RzIiwicHJvamVjdHNSZWR1Y2VyIiwiZGlzcGF0Y2giLCJsZW5ndGgiLCJfaWQiLCJoYW5kbGVDdXJyZW50UHJvamVjdENsaWNrIiwicHJvamVjdElkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicm9sZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJwcm9qZWN0IiwiaDMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.tsx\n"));

/***/ })

});