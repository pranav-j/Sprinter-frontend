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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/projects/newProjectModalSlice */ \"(app-pages-browser)/./redux/slices/projects/newProjectModalSlice.ts\");\n/* harmony import */ var _redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/slices/projects/projectsSlice */ \"(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NewProjectModal = ()=>{\n    _s();\n    const [failedPostCreation, setFailedPostCreation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDate, setEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [titleError, setTitleError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"TITLE......\", title);\n        console.log(\"DESCRIPTION......\", description);\n        console.log(\"failedPostCreation......\", failedPostCreation);\n    }, [\n        title,\n        description\n    ]);\n    // const handleSubmit = async(e: React.FormEvent) => {\n    //     e.preventDefault();\n    //     try {\n    //         const response = await axios.post(\"http://localhost:3030/api/post\", \n    //             { title, description }, \n    //             { withCredentials: true }\n    //         );\n    //         if(response.status === 200){\n    //             dispatch(setIsNewProjectModalOpen());\n    //             setFailedPostCreation(false);\n    //             console.log(\"failedPostCreation......\", failedPostCreation);\n    //         }\n    //     } catch (error) {\n    //         setFailedPostCreation(true);\n    //         console.error(\"Error creating project:\", error);\n    //     }\n    // };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setTitleError(\"\");\n        let isValid = true;\n        if (!title) {}\n        try {\n            await dispatch((0,_redux_slices_projects_projectsSlice__WEBPACK_IMPORTED_MODULE_4__.createProject)({\n                title,\n                description,\n                startDate,\n                endDate\n            }));\n            dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)());\n            setFailedPostCreation(false);\n        } catch (error) {\n            setFailedPostCreation(true);\n            console.error(\"Error creating project:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-8 rounded-lg w-1/3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl mb-4\",\n                    children: \"Create New Project\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined),\n                failedPostCreation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-700\",\n                    children: \"Failed to create project.\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 41\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectTitle\",\n                                    children: \"Project Title\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    type: \"text\",\n                                    placeholder: \"Enter project title\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"projectDescription\",\n                                    children: \"Project Description\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: description,\n                                    onChange: (e)=>setDescription(e.target.value),\n                                    placeholder: \"Enter project description\",\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"startDate\",\n                                    children: \"Start Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: startDate,\n                                    onChange: (e)=>setStartDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                    htmlFor: \"endDate\",\n                                    children: \"End Date\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    value: endDate,\n                                    onChange: (e)=>setEndDate(e.target.value),\n                                    className: \"w-full px-3 py-2 border rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>dispatch((0,_redux_slices_projects_newProjectModalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsNewProjectModalOpen)()),\n                                    className: \"bg-gray-500 text-white px-4 py-2 rounded mr-2\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/newProject.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NewProjectModal, \"pWPhNSVWFahyjA8jYr/ok+xNoXA=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = NewProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProjectModal);\nvar _c;\n$RefreshReg$(_c, \"NewProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbmV3UHJvamVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBQ0o7QUFDeUM7QUFDbEI7QUFFdEUsTUFBTU0sa0JBQWtCOztJQUNwQixNQUFNLENBQUNDLG9CQUFvQkMsc0JBQXNCLEdBQUdOLCtDQUFRQSxDQUFVO0lBQ3RFLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQVM7SUFDdkQsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBUztJQUUvQyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFTO0lBRXJELE1BQU1pQixXQUFXaEIsNERBQWNBO0lBRS9CRixnREFBU0EsQ0FBQztRQUNObUIsUUFBUUMsR0FBRyxDQUFDLGVBQWVaO1FBQzNCVyxRQUFRQyxHQUFHLENBQUMscUJBQXFCVjtRQUNqQ1MsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QmQ7SUFDNUMsR0FBRztRQUFDRTtRQUFPRTtLQUFZO0lBRXZCLHNEQUFzRDtJQUN0RCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLCtFQUErRTtJQUMvRSx1Q0FBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFFYix1Q0FBdUM7SUFDdkMsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1QywyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1Q0FBdUM7SUFDdkMsMkRBQTJEO0lBQzNELFFBQVE7SUFDUixLQUFLO0lBRUwsTUFBTVcsZUFBZSxPQUFNQztRQUN2QkEsRUFBRUMsY0FBYztRQUVoQk4sY0FBYztRQUVkLElBQUlPLFVBQVU7UUFFZCxJQUFHLENBQUNoQixPQUFPLENBRVg7UUFFQSxJQUFJO1lBQ0EsTUFBTVUsU0FBU2QsbUZBQWFBLENBQUM7Z0JBQUNJO2dCQUFPRTtnQkFBYUU7Z0JBQVdFO1lBQVE7WUFDckVJLFNBQVNmLHFHQUF3QkE7WUFDakNJLHNCQUFzQjtRQUMxQixFQUFFLE9BQU9rQixPQUFPO1lBQ1psQixzQkFBc0I7WUFDdEJZLFFBQVFNLEtBQUssQ0FBQywyQkFBMkJBO1FBQzdDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFlOzs7Ozs7Z0JBQzNCckIsb0NBQXNCLDhEQUFDdUI7b0JBQUVGLFdBQVU7OEJBQWU7Ozs7Ozs4QkFDcEQsOERBQUNHO29CQUFLQyxVQUFVVjs7c0NBQ1osOERBQUNLOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0s7b0NBQU1MLFdBQVU7b0NBQTZDTSxTQUFROzhDQUFlOzs7Ozs7OENBR3JGLDhEQUFDQztvQ0FDR0MsT0FBTzNCO29DQUNQNEIsVUFBVSxDQUFDZCxJQUFNYixTQUFTYSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7b0NBQ3hDRyxNQUFLO29DQUNMQyxhQUFZO29DQUNaWixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBcUI7Ozs7Ozs4Q0FHM0YsOERBQUNPO29DQUNHTCxPQUFPekI7b0NBQ1AwQixVQUFVLENBQUNkLElBQU1YLGVBQWVXLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDOUNJLGFBQVk7b0NBQ1paLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0s7b0NBQU1MLFdBQVU7b0NBQTZDTSxTQUFROzhDQUFZOzs7Ozs7OENBR2xGLDhEQUFDQztvQ0FDR0ksTUFBSztvQ0FDTEgsT0FBT3ZCO29DQUNQd0IsVUFBVSxDQUFDZCxJQUFNVCxhQUFhUyxFQUFFZSxNQUFNLENBQUNGLEtBQUs7b0NBQzVDUixXQUFVOzs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNLO29DQUFNTCxXQUFVO29DQUE2Q00sU0FBUTs4Q0FBVTs7Ozs7OzhDQUdoRiw4REFBQ0M7b0NBQ0dJLE1BQUs7b0NBQ0xILE9BQU9yQjtvQ0FDUHNCLFVBQVUsQ0FBQ2QsSUFBTVAsV0FBV08sRUFBRWUsTUFBTSxDQUFDRixLQUFLO29DQUMxQ1IsV0FBVTs7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDYztvQ0FDR0gsTUFBSztvQ0FDTEksU0FBUyxJQUFNeEIsU0FBU2YscUdBQXdCQTtvQ0FDaER3QixXQUFVOzhDQUNiOzs7Ozs7OENBR0QsOERBQUNjO29DQUNHSCxNQUFLO29DQUNMWCxXQUFVOzhDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6QjtHQS9ITXRCOztRQVNlSCx3REFBY0E7OztLQVQ3Qkc7QUFpSU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9uZXdQcm9qZWN0LnRzeD83ZjUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgc2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2plY3RzL25ld1Byb2plY3RNb2RhbFNsaWNlXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3Byb2plY3RzL3Byb2plY3RzU2xpY2VcIjtcblxuY29uc3QgTmV3UHJvamVjdE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmYWlsZWRQb3N0Q3JlYXRpb24sIHNldEZhaWxlZFBvc3RDcmVhdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gICAgY29uc3QgW3RpdGxlRXJyb3IsIHNldFRpdGxlRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVElUTEUuLi4uLi5cIiwgdGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRFU0NSSVBUSU9OLi4uLi4uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWRQb3N0Q3JlYXRpb24uLi4uLi5cIiwgZmFpbGVkUG9zdENyZWF0aW9uKTtcbiAgICB9LCBbdGl0bGUsIGRlc2NyaXB0aW9uXSlcblxuICAgIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Bvc3RcIiwgXG4gICAgLy8gICAgICAgICAgICAgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSwgXG4gICAgLy8gICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgIC8vICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApe1xuICAgIC8vICAgICAgICAgICAgIGRpc3BhdGNoKHNldElzTmV3UHJvamVjdE1vZGFsT3BlbigpKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24oZmFsc2UpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkUG9zdENyZWF0aW9uLi4uLi4uXCIsIGZhaWxlZFBvc3RDcmVhdGlvbik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24odHJ1ZSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2V0VGl0bGVFcnJvcihcIlwiKTtcblxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXRpdGxlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChjcmVhdGVQcm9qZWN0KHt0aXRsZSwgZGVzY3JpcHRpb24sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzTmV3UHJvamVjdE1vZGFsT3BlbigpKTtcbiAgICAgICAgICAgIHNldEZhaWxlZFBvc3RDcmVhdGlvbihmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRGYWlsZWRQb3N0Q3JlYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHotNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgdy0xLzNcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi00XCI+Q3JlYXRlIE5ldyBQcm9qZWN0PC9oMj5cbiAgICAgICAgICAgICAgICB7IGZhaWxlZFBvc3RDcmVhdGlvbiAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj5GYWlsZWQgdG8gY3JlYXRlIHByb2plY3QuPC9wPn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvamVjdCB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwcm9qZWN0IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwic3RhcnREYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhcnREYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZW5kRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW5kRGF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNOZXdQcm9qZWN0TW9kYWxPcGVuKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Byb2plY3RNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRJc05ld1Byb2plY3RNb2RhbE9wZW4iLCJjcmVhdGVQcm9qZWN0IiwiTmV3UHJvamVjdE1vZGFsIiwiZmFpbGVkUG9zdENyZWF0aW9uIiwic2V0RmFpbGVkUG9zdENyZWF0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJlbmREYXRlIiwic2V0RW5kRGF0ZSIsInRpdGxlRXJyb3IiLCJzZXRUaXRsZUVycm9yIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/newProject.tsx\n"));

/***/ })

});