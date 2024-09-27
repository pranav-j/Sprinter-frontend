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

/***/ "(app-pages-browser)/./app/components/subComponents/report.tsx":
/*!*************************************************!*\
  !*** ./app/components/subComponents/report.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/PieChart.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/polar/Pie.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Cell.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Reports = ()=>{\n    _s();\n    let sprints = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.sprintsReducer.sprints);\n    sprints = sprints.filter((sprint)=>sprint.startedOn);\n    const items = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.itemsReducer.items);\n    const COLORS = [\n        \"#FFBB28\",\n        \"#00C49F\",\n        \"#FF8042\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"Sprint Reports\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: sprints.map((sprint)=>{\n                    const sprintItems = items.filter((item)=>item.sprintId === sprint._id);\n                    const todo = sprintItems.filter((item)=>item.status === \"todo\").length;\n                    const onGoing = sprintItems.filter((item)=>item.status === \"onGoing\").length;\n                    const done = sprintItems.filter((item)=>item.status === \"done\").length;\n                    const data = [\n                        {\n                            name: \"To Do\",\n                            value: todo\n                        },\n                        {\n                            name: \"Ongoing\",\n                            value: onGoing\n                        },\n                        {\n                            name: \"Done\",\n                            value: done\n                        }\n                    ];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-[250px] bg-white rounded-lg shadow-md p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-center\",\n                                children: sprint.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: 200,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_3__.PieChart, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                                        data: data,\n                                        innerRadius: 50,\n                                        outerRadius: 80,\n                                        fill: \"#8884d8\",\n                                        paddingAngle: 5,\n                                        dataKey: \"value\",\n                                        children: data.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_5__.Cell, {\n                                                fill: COLORS[index % COLORS.length]\n                                            }, \"cell-\".concat(index), false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 27\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4 text-center\",\n                                children: STATUS_LABELS.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center gap-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"inline-block w-3 h-3\",\n                                                style: {\n                                                    backgroundColor: COLORS[index]\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 25\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: label\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 23\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center\",\n                                children: [\n                                    \"Total: \",\n                                    todo + onGoing + done,\n                                    \" tasks\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, sprint._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Reports, \"4xwAE/i1cp4z2hcbLHJE+S+af3M=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Reports;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reports);\nvar _c;\n$RefreshReg$(_c, \"Reports\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvcmVwb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDcUI7QUFFcEUsTUFBTUssVUFBVTs7SUFDWixJQUFJQyxVQUFVTiw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDcEVBLFVBQVVBLFFBQVFHLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxTQUFTO0lBQ3JELE1BQU1DLFFBQVFaLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1NLFlBQVksQ0FBQ0QsS0FBSztJQUVoRSxNQUFNRSxTQUFTO1FBQUM7UUFBVztRQUFXO0tBQVU7SUFFaEQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUI7Ozs7OzswQkFDdkMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVixRQUFRWSxHQUFHLENBQUMsQ0FBQ1I7b0JBQ1osTUFBTVMsY0FBY1AsTUFBTUgsTUFBTSxDQUFDLENBQUNXLE9BQVNBLEtBQUtDLFFBQVEsS0FBS1gsT0FBT1ksR0FBRztvQkFDdkUsTUFBTUMsT0FBT0osWUFBWVYsTUFBTSxDQUFDLENBQUNXLE9BQVNBLEtBQUtJLE1BQU0sS0FBSyxRQUFRQyxNQUFNO29CQUN4RSxNQUFNQyxVQUFVUCxZQUFZVixNQUFNLENBQUMsQ0FBQ1csT0FBU0EsS0FBS0ksTUFBTSxLQUFLLFdBQVdDLE1BQU07b0JBQzlFLE1BQU1FLE9BQU9SLFlBQVlWLE1BQU0sQ0FBQyxDQUFDVyxPQUFTQSxLQUFLSSxNQUFNLEtBQUssUUFBUUMsTUFBTTtvQkFFeEUsTUFBTUcsT0FBTzt3QkFDWDs0QkFBRUMsTUFBTTs0QkFBU0MsT0FBT1A7d0JBQUs7d0JBQzdCOzRCQUFFTSxNQUFNOzRCQUFXQyxPQUFPSjt3QkFBUTt3QkFDbEM7NEJBQUVHLE1BQU07NEJBQVFDLE9BQU9IO3dCQUFLO3FCQUM3QjtvQkFFRCxxQkFDRSw4REFBQ1o7d0JBQXFCQyxXQUFVOzswQ0FDOUIsOERBQUNlO2dDQUFHZixXQUFVOzBDQUFzQ04sT0FBT3NCLEtBQUs7Ozs7OzswQ0FDaEUsOERBQUM1QixzSEFBbUJBO2dDQUFDNkIsT0FBTTtnQ0FBT0MsUUFBUTswQ0FDeEMsNEVBQUNqQywyR0FBUUE7OENBQ1AsNEVBQUNDLHNHQUFHQTt3Q0FDRjBCLE1BQU1BO3dDQUNOTyxhQUFhO3dDQUNiQyxhQUFhO3dDQUNiQyxNQUFLO3dDQUNMQyxjQUFjO3dDQUNkQyxTQUFRO2tEQUVQWCxLQUFLVixHQUFHLENBQUMsQ0FBQ3NCLE9BQU9DLHNCQUNoQiw4REFBQ3RDLHVHQUFJQTtnREFBdUJrQyxNQUFNdkIsTUFBTSxDQUFDMkIsUUFBUTNCLE9BQU9XLE1BQU0sQ0FBQzsrQ0FBcEQsUUFBYyxPQUFOZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUszQiw4REFBQzFCO2dDQUFJQyxXQUFVOzBDQUNaMEIsY0FBY3hCLEdBQUcsQ0FBQyxDQUFDeUIsT0FBT0Ysc0JBQ3pCLDhEQUFDMUI7d0NBQWdCQyxXQUFVOzswREFDekIsOERBQUM0QjtnREFDQzVCLFdBQVU7Z0RBQ1Y2QixPQUFPO29EQUFFQyxpQkFBaUJoQyxNQUFNLENBQUMyQixNQUFNO2dEQUFDOzs7Ozs7MERBRTFDLDhEQUFDRzswREFBTUQ7Ozs7Ozs7dUNBTENGOzs7Ozs7Ozs7OzBDQVNkLDhEQUFDTTtnQ0FBRS9CLFdBQVU7O29DQUFjO29DQUFRTyxPQUFPRyxVQUFVQztvQ0FBSzs7Ozs7Ozs7dUJBN0JqRGpCLE9BQU9ZLEdBQUc7Ozs7O2dCQWdDeEI7Ozs7Ozs7Ozs7OztBQUlaO0dBNURNakI7O1FBQ1lMLHdEQUFjQTtRQUVkQSx3REFBY0E7OztLQUgxQks7QUE4RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9yZXBvcnQudHN4PzAwYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcbmltcG9ydCB7IFBpZUNoYXJ0LCBQaWUsIENlbGwsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tICdyZWNoYXJ0cyc7XG5cbmNvbnN0IFJlcG9ydHMgPSAoKSA9PiB7XG4gICAgbGV0IHNwcmludHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNwcmludHNSZWR1Y2VyLnNwcmludHMpO1xuICAgIHNwcmludHMgPSBzcHJpbnRzLmZpbHRlcigoc3ByaW50KSA9PiBzcHJpbnQuc3RhcnRlZE9uKTtcbiAgICBjb25zdCBpdGVtcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXNSZWR1Y2VyLml0ZW1zKTtcblxuICAgIGNvbnN0IENPTE9SUyA9IFsnI0ZGQkIyOCcsICcjMDBDNDlGJywgJyNGRjgwNDInXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgdy1mdWxsIGgtZnVsbCBiZy1bI2Q5ZDVkNV0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5TcHJpbnQgUmVwb3J0czwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICB7c3ByaW50cy5tYXAoKHNwcmludCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzcHJpbnRJdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zcHJpbnRJZCA9PT0gc3ByaW50Ll9pZCk7XG4gICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBzcHJpbnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSAndG9kbycpLmxlbmd0aDtcbiAgICAgICAgICAgICAgY29uc3Qgb25Hb2luZyA9IHNwcmludEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09ICdvbkdvaW5nJykubGVuZ3RoO1xuICAgICAgICAgICAgICBjb25zdCBkb25lID0gc3ByaW50SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gJ2RvbmUnKS5sZW5ndGg7XG4gICAgXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVG8gRG8nLCB2YWx1ZTogdG9kbyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ09uZ29pbmcnLCB2YWx1ZTogb25Hb2luZyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0RvbmUnLCB2YWx1ZTogZG9uZSB9LFxuICAgICAgICAgICAgICBdO1xuICAgIFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcHJpbnQuX2lkfSBjbGFzc05hbWU9XCJtaW4tdy1bMjUwcHhdIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj57c3ByaW50LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezIwMH0+XG4gICAgICAgICAgICAgICAgICAgIDxQaWVDaGFydD5cbiAgICAgICAgICAgICAgICAgICAgICA8UGllXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4ODg0ZDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0FuZ2xlPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aW5kZXh9YH0gZmlsbD17Q09MT1JTW2luZGV4ICUgQ09MT1JTLmxlbmd0aF19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1BpZT5cbiAgICAgICAgICAgICAgICAgICAgPC9QaWVDaGFydD5cbiAgICAgICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7U1RBVFVTX0xBQkVMUy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTMgaC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBDT0xPUlNbaW5kZXhdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VG90YWw6IHt0b2RvICsgb25Hb2luZyArIGRvbmV9IHRhc2tzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydHM7Il0sIm5hbWVzIjpbInVzZUFwcFNlbGVjdG9yIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIlJlcG9ydHMiLCJzcHJpbnRzIiwic3RhdGUiLCJzcHJpbnRzUmVkdWNlciIsImZpbHRlciIsInNwcmludCIsInN0YXJ0ZWRPbiIsIml0ZW1zIiwiaXRlbXNSZWR1Y2VyIiwiQ09MT1JTIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJzcHJpbnRJdGVtcyIsIml0ZW0iLCJzcHJpbnRJZCIsIl9pZCIsInRvZG8iLCJzdGF0dXMiLCJsZW5ndGgiLCJvbkdvaW5nIiwiZG9uZSIsImRhdGEiLCJuYW1lIiwidmFsdWUiLCJoMiIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwiZmlsbCIsInBhZGRpbmdBbmdsZSIsImRhdGFLZXkiLCJlbnRyeSIsImluZGV4IiwiU1RBVFVTX0xBQkVMUyIsImxhYmVsIiwic3BhbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/report.tsx\n"));

/***/ })

});