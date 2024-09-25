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

/***/ "(app-pages-browser)/./app/components/subComponents/newProject.tsx":
/*!*****************************************************!*\
  !*** ./app/components/subComponents/newProject.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NewProjectModal = ()=>{\n    _s();\n    const [failedPostCreation, setFailedPostCreation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [titleError, setTitleError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"TITLE......\", title);\n        console.log(\"DESCRIPTION......\", description);\n        console.log(\"failedPostCreation......\", failedPostCreation);\n    }, [\n        title,\n        description\n    ]);\n    // const handleSubmit = async(e: React.FormEvent) => {\n    //     e.preventDefault();\n    //     try {\n    //         const response = await axios.post(\"http://localhost:3030/api/post\", \n    //             { title, description }, \n    //             { withCredentials: true }\n    //         );\n    //         if(response.status === 200){\n    //             dispatch(setIsNewProjectModalOpen());\n    //             setFailedPostCreation(false);\n    //             console.log(\"failedPostCreation......\", failedPostCreation);\n    //         }\n    //     } catch (error) {\n    //         setFailedPostCreation(true);\n    //         console.error(\"Error creating project:\", error);\n    //     }\n    // };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setTitleError(\"\");\n        let isValid = true;\n        if (!title) {\n            setTitleError(\"Project Title required\");\n            isValid = false;\n        }\n        try {\n            await dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__.createProject)({\n                title,\n                description,\n                startDate,\n                endDate\n            }));\n            dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)());\n            setFailedPostCreation(false);\n        } catch (error) {\n            setFailedPostCreation(true);\n            console.error(\"Error creating project:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Create New Project\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined),\n                failedPostCreation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-700\",\n                    children: \"Failed to create project.\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 41\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectTitle\",\n                                    children: \"Project Title\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    type: \"text\",\n                                    placeholder: \"Enter project title\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectDescription\",\n                                    children: \"Project Description\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: description,\n                                    onChange: (e)=>setDescription(e.target.value),\n                                    placeholder: \"Enter project description\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"startDate\",\n                                    children: \"Start Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: startDate,\n                                    onChange: (e)=>setStartDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"endDate\",\n                                    children: \"End Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: endDate,\n                                    onChange: (e)=>setEndDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                                    className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n            lineNumber: 68,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewProjectModal, \"pWPhNSVWFahyjA8jYr/ok+xNoXA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = NewProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProjectModal);\nvar _c;\n$RefreshReg$(_c, \"NewProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBQ0o7QUFDeUM7QUFDbEI7QUFFdEUsTUFBTU0sa0JBQWtCOztJQUNwQixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdOLCtDQUFRQSxDQUFVO0lBQ3RFLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1pQixXQUFXaEIsNERBQWNBO0lBRS9CRixnREFBU0EsQ0FBQztRQUNObUIsUUFBUUMsR0FBRyxDQUFDLGVBQWVaO1FBQzNCVyxRQUFRQyxHQUFHLENBQUMscUJBQXFCVjtRQUNqQ1MsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QmQ7SUFDNUMsR0FBRztRQUFDRTtRQUFPRTtLQUFZO0lBRXZCLHNEQUFzRDtJQUN0RCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLCtFQUErRTtJQUMvRSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFFYix1Q0FBdUM7SUFDdkMsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1QywyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsMkRBQTJEO0lBQzNELFFBQVE7SUFDUixLQUFLO0lBRUwsTUFBTVcsZUFBZSxPQUFNQztRQUN2QkEsRUFBRUMsY0FBYztRQUVoQk4sY0FBYztRQUVkLElBQUlPLFVBQVU7UUFFZCxJQUFHLENBQUNoQixPQUFPO1lBQ1BTLGNBQWM7WUFDZE8sVUFBVTtRQUNkO1FBRUEsSUFBSTtZQUNBLE1BQU1OLFNBQVNkLG1GQUFhQSxDQUFDO2dCQUFDSTtnQkFBT0U7Z0JBQWFFO2dCQUFXRTtZQUFRO1lBQ3JFSSxTQUFTZixxR0FBd0JBO1lBQ2pDSSxzQkFBc0I7UUFDMUIsRUFBRSxPQUFPa0IsT0FBTztZQUNabEIsc0JBQXNCO1lBQ3RCWSxRQUFRTSxLQUFLLENBQUMsMkJBQTJCQTtRQUM3QztJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZTs7Ozs7O2dCQUMzQnJCLG9DQUFzQiw4REFBQ3VCO29CQUFFRixXQUFVOzhCQUFlOzs7Ozs7OEJBQ3BELDhEQUFDRztvQkFBS0MsVUFBVVY7O3NDQUNaLDhEQUFDSzs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBZTs7Ozs7OzhDQUdyRiw4REFBQ0M7b0NBQ0dDLE9BQU8zQjtvQ0FDUDRCLFVBQVUsQ0FBQ2QsSUFBTWIsU0FBU2EsRUFBRWUsTUFBTSxDQUFDRixLQUFLO29DQUN4Q0csTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWlosV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUwsV0FBVTtvQ0FBNkNNLFNBQVE7OENBQXFCOzs7Ozs7OENBRzNGLDhEQUFDTztvQ0FDR0wsT0FBT3pCO29DQUNQMEIsVUFBVSxDQUFDZCxJQUFNWCxlQUFlVyxFQUFFZSxNQUFNLENBQUNGLEtBQUs7b0NBQzlDSSxhQUFZO29DQUNaWixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBWTs7Ozs7OzhDQUdsRiw4REFBQ0M7b0NBQ0dJLE1BQUs7b0NBQ0xILE9BQU92QjtvQ0FDUHdCLFVBQVUsQ0FBQ2QsSUFBTVQsYUFBYVMsRUFBRWUsTUFBTSxDQUFDRixLQUFLO29DQUM1Q1IsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUwsV0FBVTtvQ0FBNkNNLFNBQVE7OENBQVU7Ozs7Ozs4Q0FHaEYsOERBQUNDO29DQUNHSSxNQUFLO29DQUNMSCxPQUFPckI7b0NBQ1BzQixVQUFVLENBQUNkLElBQU1QLFdBQVdPLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDMUNSLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQ0dILE1BQUs7b0NBQ0xJLFNBQVMsSUFBTXhCLFNBQVNmLHFHQUF3QkE7b0NBQ2hEd0IsV0FBVTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDYztvQ0FDR0gsTUFBSztvQ0FDTFgsV0FBVTs4Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0FoSU10Qjs7UUFTZUgsd0RBQWNBOzs7S0FUN0JHO0FBa0lOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdC50c3g/N2Y1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHNldElzTmV3UHJvamVjdE1vZGFsT3BlbiB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9uZXdQcm9qZWN0TW9kYWxTbGljZVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9wcm9qZWN0c1NsaWNlXCI7XG5cbmNvbnN0IE5ld1Byb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBbZmFpbGVkUG9zdENyZWF0aW9uLCBzZXRGYWlsZWRQb3N0Q3JlYXRpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IFt0aXRsZUVycm9yLCBzZXRUaXRsZUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRJVExFLi4uLi4uXCIsIHRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJERVNDUklQVElPTi4uLi4uLlwiLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkUG9zdENyZWF0aW9uLi4uLi4uXCIsIGZhaWxlZFBvc3RDcmVhdGlvbik7XG4gICAgfSwgW3RpdGxlLCBkZXNjcmlwdGlvbl0pXG5cbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyhlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICB0cnkge1xuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9wb3N0XCIsIFxuICAgIC8vICAgICAgICAgICAgIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0sIFxuICAgIC8vICAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAvLyAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAvLyAgICAgICAgICAgICBkaXNwYXRjaChzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4oKSk7XG4gICAgLy8gICAgICAgICAgICAgc2V0RmFpbGVkUG9zdENyZWF0aW9uKGZhbHNlKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxlZFBvc3RDcmVhdGlvbi4uLi4uLlwiLCBmYWlsZWRQb3N0Q3JlYXRpb24pO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgc2V0RmFpbGVkUG9zdENyZWF0aW9uKHRydWUpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2plY3Q6XCIsIGVycm9yKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyhlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFRpdGxlRXJyb3IoXCJcIik7XG5cbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCF0aXRsZSkge1xuICAgICAgICAgICAgc2V0VGl0bGVFcnJvcihcIlByb2plY3QgVGl0bGUgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goY3JlYXRlUHJvamVjdCh7dGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydERhdGUsIGVuZERhdGUgfSkpXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4oKSk7XG4gICAgICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24oZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0RmFpbGVkUG9zdENyZWF0aW9uKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2plY3Q6XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCB6LTUwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHctMS8zXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItNFwiPkNyZWF0ZSBOZXcgUHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgeyBmYWlsZWRQb3N0Q3JlYXRpb24gJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+RmFpbGVkIHRvIGNyZWF0ZSBwcm9qZWN0LjwvcD59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwcm9qZWN0VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IFRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2plY3QgdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvamVjdCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInN0YXJ0RGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXJ0RGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVuZERhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVuZERhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldElzTmV3UHJvamVjdE1vZGFsT3BlbigpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdQcm9qZWN0TW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwic2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuIiwiY3JlYXRlUHJvamVjdCIsIk5ld1Byb2plY3RNb2RhbCIsImZhaWxlZFBvc3RDcmVhdGlvbiIsInNldEZhaWxlZFBvc3RDcmVhdGlvbiIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiZW5kRGF0ZSIsInNldEVuZERhdGUiLCJ0aXRsZUVycm9yIiwic2V0VGl0bGVFcnJvciIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/newProject.tsx\n"));

/***/ })

});