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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/currentProjectSlice */ \"(app-pages-browser)/./redux/slices/projects/currentProjectSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import axios from \"axios\";\nconst Sidebar = ()=>{\n    _s();\n    const isCollapsed = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.sidebarReducer.isCollapsed);\n    let currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    // useEffect(() => {\n    //     const fetchProjects = async() => {\n    //         try {\n    //             const response = await axios.get(\"http://localhost:3030/api/post\", { withCredentials: true });\n    //             setProjects(response.data.projects);\n    //         } catch (error) {\n    //             console.log(\"Error fetching projects:\", error);\n    //         }\n    //     };\n    //     fetchProjects();        \n    // }, [])\n    // useEffect(() => {\n    //     console.log(\"PROJECTS...\",projects);\n    // }, [projects]);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_5__.fetchProjects)());\n    }, []);\n    if (currentProjectId === \"\" && projects.length > 0) {\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projects[0]._id));\n    }\n    const handleCurrentProjectClick = (projectId)=>{\n        dispatch((0,_redux_slices_projects_currentProjectSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentProjectId)(projectId));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // console.log('PROJECTS.......', projects);\n        console.log(\"currentProjectId.........\", currentProjectId);\n    }, [\n        projects,\n        currentProjectId\n    ]);\n    return isCollapsed ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 w-[241px] border-r-2 border-[#1e293b]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined),\n                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.role) === \"admin\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2\",\n                        onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pl-2\",\n                children: [\n                    projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"line-clamp-1 py-1 px-2 cursor-pointer rounded \".concat(project._id === currentProjectId ? \"bg-[#d9d5d5] \" : \"\"),\n                            onClick: ()=>handleCurrentProjectClick(project._id),\n                            children: project.title\n                        }, project._id, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 29\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/sidebar.tsx\",\n        lineNumber: 69,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Sidebar, \"HjtLgam3Ar9GD0q9djH/PtjQ57Y=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDdUI7QUFDcUI7QUFDTjtBQUNaO0FBQ3RFLDZCQUE2QjtBQUU3QixNQUFNTSxVQUFVOztJQVlaLE1BQU1DLGNBQWNOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsV0FBVztJQUM5RSxJQUFJRyxtQkFBbUJULDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1HLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDL0YsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBRXJFLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDZHQUE2RztJQUM3RyxtREFBbUQ7SUFDbkQsNEJBQTRCO0lBQzVCLDhEQUE4RDtJQUM5RCxZQUFZO0lBQ1osU0FBUztJQUVULCtCQUErQjtJQUMvQixTQUFTO0lBRVQsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFFbEIsTUFBTUMsV0FBc0JkLDREQUFjQSxDQUFDLENBQUNPLFFBQVdBLE1BQU1RLGVBQWUsQ0FBQ0QsUUFBUTtJQUlyRixNQUFNRSxXQUFXZiw0REFBY0E7SUFDL0JGLGdEQUFTQSxDQUFDO1FBQ05pQixTQUFTWixtRkFBYUE7SUFDMUIsR0FBRyxFQUFFO0lBRUwsSUFBRyxxQkFBc0IsTUFBUVUsU0FBU0csTUFBTSxHQUFHLEdBQUk7UUFDbkRELFNBQVNiLCtGQUFtQkEsQ0FBQ1csUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksR0FBRztJQUNoRDtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQztRQUMvQkosU0FBU2IsK0ZBQW1CQSxDQUFDaUI7SUFDakM7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ04sNENBQTRDO1FBQzVDc0IsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QmI7SUFFN0MsR0FBRztRQUFDSztRQUFVTDtLQUFpQjtJQUcvQixPQUNJSCxjQUFjLHFCQUNWLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUc7Ozs7OztvQkFDRmQsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjZSxJQUFJLE1BQUssd0JBQ3JCLDhEQUFDQzt3QkFBT0gsV0FBVTt3QkFBT0ksU0FBUyxJQUFNWixTQUFTZCxxR0FBd0JBO2tDQUFLOzs7OztvQ0FDNUU7Ozs7Ozs7MEJBR1YsOERBQUNxQjtnQkFBSUMsV0FBVTs7b0JBRVBWLFNBQVNlLEdBQUcsQ0FBQyxDQUFDQyx3QkFDViw4REFBQ0M7NEJBRUdQLFdBQVcsaURBQXlHLE9BQXhETSxRQUFRWixHQUFHLEtBQUtULG1CQUFtQixrQkFBa0I7NEJBQ2pIbUIsU0FBUyxJQUFNVCwwQkFBMEJXLFFBQVFaLEdBQUc7c0NBQ3REWSxRQUFRRSxLQUFLOzJCQUhORixRQUFRWixHQUFHOzs7OztrQ0FNNUIsOERBQUNLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQWxGTWxCOztRQVlrQkwsd0RBQWNBO1FBQ1hBLHdEQUFjQTtRQUNoQkEsd0RBQWNBO1FBbUJQQSx3REFBY0E7UUFJekJDLHdEQUFjQTs7O0tBckM3Qkk7QUFvRk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci50c3g/M2MxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHNldElzTmV3UHJvamVjdE1vZGFsT3BlbiB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9uZXdQcm9qZWN0TW9kYWxTbGljZVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFByb2plY3RJZCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9jdXJyZW50UHJvamVjdFNsaWNlXCI7XG5pbXBvcnQgeyBmZXRjaFByb2plY3RzIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2plY3RzL3Byb2plY3RzU2xpY2VcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBpbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgICAgIF9pZDogc3RyaW5nO1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICAgICAgbWVtYmVyczogc3RyaW5nW107XG4gICAgICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgICAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2lkZWJhclJlZHVjZXIuaXNDb2xsYXBzZWQpO1xuICAgIGxldCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgZmV0Y2hQcm9qZWN0cyA9IGFzeW5jKCkgPT4ge1xuICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvcG9zdFwiLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAvLyAgICAgICAgICAgICBzZXRQcm9qZWN0cyhyZXNwb25zZS5kYXRhLnByb2plY3RzKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBwcm9qZWN0czpcIiwgZXJyb3IpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIGZldGNoUHJvamVjdHMoKTsgICAgICAgIFxuICAgIC8vIH0sIFtdKVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJQUk9KRUNUUy4uLlwiLHByb2plY3RzKTtcbiAgICAvLyB9LCBbcHJvamVjdHNdKTtcblxuICAgIGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IChzdGF0ZS5wcm9qZWN0c1JlZHVjZXIucHJvamVjdHMpKVxuXG5cblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFByb2plY3RzKCkpXG4gICAgfSwgW10pO1xuXG4gICAgaWYoKGN1cnJlbnRQcm9qZWN0SWQgPT09IFwiXCIpICYmIChwcm9qZWN0cy5sZW5ndGggPiAwKSkge1xuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50UHJvamVjdElkKHByb2plY3RzWzBdLl9pZCkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDdXJyZW50UHJvamVjdENsaWNrID0gKHByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRQcm9qZWN0SWQocHJvamVjdElkKSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQUk9KRUNUUy4uLi4uLi4nLCBwcm9qZWN0cyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50UHJvamVjdElkLi4uLi4uLi4uJywgY3VycmVudFByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgfSwgW3Byb2plY3RzLCBjdXJyZW50UHJvamVjdElkXSk7XG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICBpc0NvbGxhcHNlZCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCB3LVsyNDFweF0gYm9yZGVyLXItMiBib3JkZXItWyMxZTI5M2JdXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxuICAgICAgICAgICAgICAgICAgICB7IGxvZ2dlZEluVXNlcj8ucm9sZSA9PT0gXCJhZG1pblwiID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTJcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4oKSl9Pis8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0OiBQcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuX2lkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGluZS1jbGFtcC0xIHB5LTEgcHgtMiBjdXJzb3ItcG9pbnRlciByb3VuZGVkICR7cHJvamVjdC5faWQgPT09IGN1cnJlbnRQcm9qZWN0SWQgPyAnYmctWyNkOWQ1ZDVdICcgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDdXJyZW50UHJvamVjdENsaWNrKHByb2plY3QuX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3Byb2plY3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwic2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuIiwic2V0Q3VycmVudFByb2plY3RJZCIsImZldGNoUHJvamVjdHMiLCJTaWRlYmFyIiwiaXNDb2xsYXBzZWQiLCJzdGF0ZSIsInNpZGViYXJSZWR1Y2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwicHJvamVjdHMiLCJwcm9qZWN0c1JlZHVjZXIiLCJkaXNwYXRjaCIsImxlbmd0aCIsIl9pZCIsImhhbmRsZUN1cnJlbnRQcm9qZWN0Q2xpY2siLCJwcm9qZWN0SWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJyb2xlIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsInByb2plY3QiLCJoMyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar.tsx\n"));

/***/ })

});