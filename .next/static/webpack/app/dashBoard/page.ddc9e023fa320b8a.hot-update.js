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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NewProjectModal = ()=>{\n    _s();\n    const [failedPostCreation, setFailedPostCreation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"TITLE......\", title);\n        console.log(\"DESCRIPTION......\", description);\n        console.log(\"failedPostCreation......\", failedPostCreation);\n    }, [\n        title,\n        description\n    ]);\n    // const handleSubmit = async(e: React.FormEvent) => {\n    //     e.preventDefault();\n    //     try {\n    //         const response = await axios.post(\"http://localhost:3030/api/post\", \n    //             { title, description }, \n    //             { withCredentials: true }\n    //         );\n    //         if(response.status === 200){\n    //             dispatch(setIsNewProjectModalOpen());\n    //             setFailedPostCreation(false);\n    //             console.log(\"failedPostCreation......\", failedPostCreation);\n    //         }\n    //     } catch (error) {\n    //         setFailedPostCreation(true);\n    //         console.error(\"Error creating project:\", error);\n    //     }\n    // };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__.createProject)({\n                title,\n                description,\n                startDate,\n                endDate\n            }));\n            dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)());\n            setFailedPostCreation(false);\n        } catch (error) {\n            setFailedPostCreation(true);\n            console.error(\"Error creating project:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Create New Project\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined),\n                failedPostCreation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-700\",\n                    children: \"Failed to create project.\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 41\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectTitle\",\n                                    children: \"Project Title\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    type: \"text\",\n                                    placeholder: \"Enter project title\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectDescription\",\n                                    children: \"Project Description\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: description,\n                                    onChange: (e)=>setDescription(e.target.value),\n                                    placeholder: \"Enter project description\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"startDate\",\n                                    children: \"Start Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: startDate,\n                                    onChange: (e)=>setStartDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"endDate\",\n                                    children: \"End Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: endDate,\n                                    onChange: (e)=>setEndDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                                    className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewProjectModal, \"vVoVaWW1GS7lEmvu2WEVe8jEwqY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = NewProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProjectModal);\nvar _c;\n$RefreshReg$(_c, \"NewProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBQ0o7QUFDeUM7QUFDbEI7QUFFdEUsTUFBTU0sa0JBQWtCOztJQUNwQixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXVCLEdBQUdOLCtDQUFRQSxDQUFVO0lBQ3ZFLE1BQU0sQ0FBRU8sT0FBT0MsU0FBVSxHQUFHUiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNLENBQUVTLGFBQWFDLGVBQWdCLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ3pELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUNuRCxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQVM7SUFDL0MsTUFBTWUsV0FBV2QsNERBQWNBO0lBRS9CRixnREFBU0EsQ0FBQztRQUNOaUIsUUFBUUMsR0FBRyxDQUFDLGVBQWVWO1FBQzNCUyxRQUFRQyxHQUFHLENBQUMscUJBQXFCUjtRQUNqQ08sUUFBUUMsR0FBRyxDQUFDLDRCQUE0Qlo7SUFDNUMsR0FBRztRQUFDRTtRQUFPRTtLQUFZO0lBRXZCLHNEQUFzRDtJQUN0RCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLCtFQUErRTtJQUMvRSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFFYix1Q0FBdUM7SUFDdkMsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1QywyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsMkRBQTJEO0lBQzNELFFBQVE7SUFDUixLQUFLO0lBRUwsTUFBTVMsZUFBZSxPQUFNQztRQUN2QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0EsTUFBTUwsU0FBU1osbUZBQWFBLENBQUM7Z0JBQUNJO2dCQUFPRTtnQkFBYUU7Z0JBQVdFO1lBQVE7WUFDckVFLFNBQVNiLHFHQUF3QkE7WUFDakNJLHNCQUFzQjtRQUMxQixFQUFFLE9BQU9lLE9BQU87WUFDWmYsc0JBQXNCO1lBQ3RCVSxRQUFRSyxLQUFLLENBQUMsMkJBQTJCQTtRQUM3QztJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBZTs7Ozs7O2dCQUMzQmxCLG9DQUFzQiw4REFBQ29CO29CQUFFRixXQUFVOzhCQUFlOzs7Ozs7OEJBQ3BELDhEQUFDRztvQkFBS0MsVUFBVVQ7O3NDQUNaLDhEQUFDSTs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBZTs7Ozs7OzhDQUdyRiw4REFBQ0M7b0NBQ0dDLE9BQU94QjtvQ0FDUHlCLFVBQVUsQ0FBQ2IsSUFBTVgsU0FBU1csRUFBRWMsTUFBTSxDQUFDRixLQUFLO29DQUN4Q0csTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWlosV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUwsV0FBVTtvQ0FBNkNNLFNBQVE7OENBQXFCOzs7Ozs7OENBRzNGLDhEQUFDTztvQ0FDR0wsT0FBT3RCO29DQUNQdUIsVUFBVSxDQUFDYixJQUFNVCxlQUFlUyxFQUFFYyxNQUFNLENBQUNGLEtBQUs7b0NBQzlDSSxhQUFZO29DQUNaWixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBWTs7Ozs7OzhDQUdsRiw4REFBQ0M7b0NBQ0dJLE1BQUs7b0NBQ0xILE9BQU9wQjtvQ0FDUHFCLFVBQVUsQ0FBQ2IsSUFBTVAsYUFBYU8sRUFBRWMsTUFBTSxDQUFDRixLQUFLO29DQUM1Q1IsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDSztvQ0FBTUwsV0FBVTtvQ0FBNkNNLFNBQVE7OENBQVU7Ozs7Ozs4Q0FHaEYsOERBQUNDO29DQUNHSSxNQUFLO29DQUNMSCxPQUFPbEI7b0NBQ1BtQixVQUFVLENBQUNiLElBQU1MLFdBQVdLLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDMUNSLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQ0dILE1BQUs7b0NBQ0xJLFNBQVMsSUFBTXZCLFNBQVNiLHFHQUF3QkE7b0NBQ2hEcUIsV0FBVTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDYztvQ0FDR0gsTUFBSztvQ0FDTFgsV0FBVTs4Q0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekI7R0FuSE1uQjs7UUFNZUgsd0RBQWNBOzs7S0FON0JHO0FBcUhOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdC50c3g/N2Y1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCB7IHNldElzTmV3UHJvamVjdE1vZGFsT3BlbiB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9uZXdQcm9qZWN0TW9kYWxTbGljZVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9wcm9qZWN0c1NsaWNlXCI7XG5cbmNvbnN0IE5ld1Byb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBbZmFpbGVkUG9zdENyZWF0aW9uLCBzZXRGYWlsZWRQb3N0Q3JlYXRpb24gXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbIHRpdGxlLCBzZXRUaXRsZSBdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbIGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiBdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVElUTEUuLi4uLi5cIiwgdGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRFU0NSSVBUSU9OLi4uLi4uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWRQb3N0Q3JlYXRpb24uLi4uLi5cIiwgZmFpbGVkUG9zdENyZWF0aW9uKTtcbiAgICB9LCBbdGl0bGUsIGRlc2NyaXB0aW9uXSlcblxuICAgIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Bvc3RcIiwgXG4gICAgLy8gICAgICAgICAgICAgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSwgXG4gICAgLy8gICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgIC8vICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApe1xuICAgIC8vICAgICAgICAgICAgIGRpc3BhdGNoKHNldElzTmV3UHJvamVjdE1vZGFsT3BlbigpKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24oZmFsc2UpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkUG9zdENyZWF0aW9uLi4uLi4uXCIsIGZhaWxlZFBvc3RDcmVhdGlvbik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24odHJ1ZSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChjcmVhdGVQcm9qZWN0KHt0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzTmV3UHJvamVjdE1vZGFsT3BlbigpKTtcbiAgICAgICAgICAgIHNldEZhaWxlZFBvc3RDcmVhdGlvbihmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHotNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgdy0xLzNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+Q3JlYXRlIE5ldyBQcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICB7IGZhaWxlZFBvc3RDcmVhdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj5GYWlsZWQgdG8gY3JlYXRlIHByb2plY3QuPC9wPn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvamVjdCB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9qZWN0IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwic3RhcnREYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZW5kRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Byb2plY3RNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4iLCJjcmVhdGVQcm9qZWN0IiwiTmV3UHJvamVjdE1vZGFsIiwiZmFpbGVkUG9zdENyZWF0aW9uIiwic2V0RmFpbGVkUG9zdENyZWF0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/newProject.tsx\n"));

/***/ })

});