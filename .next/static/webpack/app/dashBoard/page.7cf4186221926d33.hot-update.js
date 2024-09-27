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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/PieChart.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/polar/Pie.js\");\n/* harmony import */ var _barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Pie,PieChart,ResponsiveContainer!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Cell.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Reports = ()=>{\n    _s();\n    let sprints = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.sprintsReducer.sprints);\n    sprints = sprints.filter((sprint)=>sprint.startedOn);\n    const items = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.itemsReducer.items);\n    const COLORS = [\n        \"#FFBB28\",\n        \"#00C49F\",\n        \"#FF8042\"\n    ];\n    const STATUS_LABELS = [\n        \"To Do\",\n        \"Ongoing\",\n        \"Done\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-3 w-full h-full bg-[#d9d5d5] overflow-y-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: \"Sprint Reports\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 text-center\",\n                        children: STATUS_LABELS.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-colu items-center justify-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block w-3 h-3\",\n                                        style: {\n                                            backgroundColor: COLORS[index]\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: label\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: sprints.map((sprint)=>{\n                    const sprintItems = items.filter((item)=>item.sprintId === sprint._id);\n                    const todo = sprintItems.filter((item)=>item.status === \"todo\").length;\n                    const onGoing = sprintItems.filter((item)=>item.status === \"onGoing\").length;\n                    const done = sprintItems.filter((item)=>item.status === \"done\").length;\n                    const data = [\n                        {\n                            name: \"To Do\",\n                            value: todo\n                        },\n                        {\n                            name: \"Ongoing\",\n                            value: onGoing\n                        },\n                        {\n                            name: \"Done\",\n                            value: done\n                        }\n                    ];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-w-[250px] bg-white rounded-lg shadow-md p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-center\",\n                                children: sprint.sprintName\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: 200,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_3__.PieChart, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                                        data: data,\n                                        innerRadius: 50,\n                                        outerRadius: 80,\n                                        fill: \"#8884d8\",\n                                        paddingAngle: 5,\n                                        dataKey: \"value\",\n                                        children: data.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Pie_PieChart_ResponsiveContainer_recharts__WEBPACK_IMPORTED_MODULE_5__.Cell, {\n                                                fill: COLORS[index % COLORS.length]\n                                            }, \"cell-\".concat(index), false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 27\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 23\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center\",\n                                children: [\n                                    \"Total: \",\n                                    todo + onGoing + done,\n                                    \" tasks\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, sprint._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/report.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Reports, \"4xwAE/i1cp4z2hcbLHJE+S+af3M=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Reports;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reports);\nvar _c;\n$RefreshReg$(_c, \"Reports\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvcmVwb3J0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDcUI7QUFFcEUsTUFBTUssVUFBVTs7SUFDWixJQUFJQyxVQUFVTiw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDcEVBLFVBQVVBLFFBQVFHLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxTQUFTO0lBQ3JELE1BQU1DLFFBQVFaLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1NLFlBQVksQ0FBQ0QsS0FBSztJQUVoRSxNQUFNRSxTQUFTO1FBQUM7UUFBVztRQUFXO0tBQVU7SUFDaEQsTUFBTUMsZ0JBQWdCO1FBQUM7UUFBUztRQUFXO0tBQU87SUFFbEQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7a0NBQ0csOERBQUNFO3dCQUFHRCxXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ0ZGLGNBQWNJLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDM0IsOERBQUNMO2dDQUFnQkMsV0FBVTs7a0RBQ3ZCLDhEQUFDSzt3Q0FDREwsV0FBVTt3Q0FDVk0sT0FBTzs0Q0FBRUMsaUJBQWlCVixNQUFNLENBQUNPLE1BQU07d0NBQUM7Ozs7OztrREFFeEMsOERBQUNDO2tEQUFNRjs7Ozs7OzsrQkFMREM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVTVCLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDWlgsUUFBUWEsR0FBRyxDQUFDLENBQUNUO29CQUNaLE1BQU1lLGNBQWNiLE1BQU1ILE1BQU0sQ0FBQyxDQUFDaUIsT0FBU0EsS0FBS0MsUUFBUSxLQUFLakIsT0FBT2tCLEdBQUc7b0JBQ3ZFLE1BQU1DLE9BQU9KLFlBQVloQixNQUFNLENBQUMsQ0FBQ2lCLE9BQVNBLEtBQUtJLE1BQU0sS0FBSyxRQUFRQyxNQUFNO29CQUN4RSxNQUFNQyxVQUFVUCxZQUFZaEIsTUFBTSxDQUFDLENBQUNpQixPQUFTQSxLQUFLSSxNQUFNLEtBQUssV0FBV0MsTUFBTTtvQkFDOUUsTUFBTUUsT0FBT1IsWUFBWWhCLE1BQU0sQ0FBQyxDQUFDaUIsT0FBU0EsS0FBS0ksTUFBTSxLQUFLLFFBQVFDLE1BQU07b0JBRXhFLE1BQU1HLE9BQU87d0JBQ1g7NEJBQUVDLE1BQU07NEJBQVNDLE9BQU9QO3dCQUFLO3dCQUM3Qjs0QkFBRU0sTUFBTTs0QkFBV0MsT0FBT0o7d0JBQVE7d0JBQ2xDOzRCQUFFRyxNQUFNOzRCQUFRQyxPQUFPSDt3QkFBSztxQkFDN0I7b0JBRUQscUJBQ0UsOERBQUNqQjt3QkFBcUJDLFdBQVU7OzBDQUM5Qiw4REFBQ29CO2dDQUFHcEIsV0FBVTswQ0FBc0NQLE9BQU80QixVQUFVOzs7Ozs7MENBQ3JFLDhEQUFDbEMsc0hBQW1CQTtnQ0FBQ21DLE9BQU07Z0NBQU9DLFFBQVE7MENBQ3hDLDRFQUFDdkMsMkdBQVFBOzhDQUNQLDRFQUFDQyxzR0FBR0E7d0NBQ0ZnQyxNQUFNQTt3Q0FDTk8sYUFBYTt3Q0FDYkMsYUFBYTt3Q0FDYkMsTUFBSzt3Q0FDTEMsY0FBYzt3Q0FDZEMsU0FBUTtrREFFUFgsS0FBS2YsR0FBRyxDQUFDLENBQUMyQixPQUFPekIsc0JBQ2hCLDhEQUFDbEIsdUdBQUlBO2dEQUF1QndDLE1BQU03QixNQUFNLENBQUNPLFFBQVFQLE9BQU9pQixNQUFNLENBQUM7K0NBQXBELFFBQWMsT0FBTlY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU0zQiw4REFBQzBCO2dDQUFFOUIsV0FBVTs7b0NBQWM7b0NBQVFZLE9BQU9HLFVBQVVDO29DQUFLOzs7Ozs7Ozt1QkFuQmpEdkIsT0FBT2tCLEdBQUc7Ozs7O2dCQXNCeEI7Ozs7Ozs7Ozs7OztBQUlaO0dBaEVNdkI7O1FBQ1lMLHdEQUFjQTtRQUVkQSx3REFBY0E7OztLQUgxQks7QUFrRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9yZXBvcnQudHN4PzAwYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcbmltcG9ydCB7IFBpZUNoYXJ0LCBQaWUsIENlbGwsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tICdyZWNoYXJ0cyc7XG5cbmNvbnN0IFJlcG9ydHMgPSAoKSA9PiB7XG4gICAgbGV0IHNwcmludHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNwcmludHNSZWR1Y2VyLnNwcmludHMpO1xuICAgIHNwcmludHMgPSBzcHJpbnRzLmZpbHRlcigoc3ByaW50KSA9PiBzcHJpbnQuc3RhcnRlZE9uKTtcbiAgICBjb25zdCBpdGVtcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXNSZWR1Y2VyLml0ZW1zKTtcblxuICAgIGNvbnN0IENPTE9SUyA9IFsnI0ZGQkIyOCcsICcjMDBDNDlGJywgJyNGRjgwNDInXTtcbiAgICBjb25zdCBTVEFUVVNfTEFCRUxTID0gWydUbyBEbycsICdPbmdvaW5nJywgJ0RvbmUnXTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTMgdy1mdWxsIGgtZnVsbCBiZy1bI2Q5ZDVkNV0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+U3ByaW50IFJlcG9ydHM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTVEFUVVNfTEFCRUxTLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMyBoLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SU1tpbmRleF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIHtzcHJpbnRzLm1hcCgoc3ByaW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNwcmludEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNwcmludElkID09PSBzcHJpbnQuX2lkKTtcbiAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IHNwcmludEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09ICd0b2RvJykubGVuZ3RoO1xuICAgICAgICAgICAgICBjb25zdCBvbkdvaW5nID0gc3ByaW50SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gJ29uR29pbmcnKS5sZW5ndGg7XG4gICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSBzcHJpbnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhdHVzID09PSAnZG9uZScpLmxlbmd0aDtcbiAgICBcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdUbyBEbycsIHZhbHVlOiB0b2RvIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnT25nb2luZycsIHZhbHVlOiBvbkdvaW5nIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRG9uZScsIHZhbHVlOiBkb25lIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NwcmludC5faWR9IGNsYXNzTmFtZT1cIm1pbi13LVsyNTBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC00XCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPntzcHJpbnQuc3ByaW50TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICA8UGllQ2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFBpZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODg4NGQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdBbmdsZT17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtgY2VsbC0ke2luZGV4fWB9IGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9QaWU+XG4gICAgICAgICAgICAgICAgICAgIDwvUGllQ2hhcnQ+XG4gICAgICAgICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VG90YWw6IHt0b2RvICsgb25Hb2luZyArIGRvbmV9IHRhc2tzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydHM7Il0sIm5hbWVzIjpbInVzZUFwcFNlbGVjdG9yIiwiUGllQ2hhcnQiLCJQaWUiLCJDZWxsIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIlJlcG9ydHMiLCJzcHJpbnRzIiwic3RhdGUiLCJzcHJpbnRzUmVkdWNlciIsImZpbHRlciIsInNwcmludCIsInN0YXJ0ZWRPbiIsIml0ZW1zIiwiaXRlbXNSZWR1Y2VyIiwiQ09MT1JTIiwiU1RBVFVTX0xBQkVMUyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwibGFiZWwiLCJpbmRleCIsInNwYW4iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNwcmludEl0ZW1zIiwiaXRlbSIsInNwcmludElkIiwiX2lkIiwidG9kbyIsInN0YXR1cyIsImxlbmd0aCIsIm9uR29pbmciLCJkb25lIiwiZGF0YSIsIm5hbWUiLCJ2YWx1ZSIsImgyIiwic3ByaW50TmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJSYWRpdXMiLCJvdXRlclJhZGl1cyIsImZpbGwiLCJwYWRkaW5nQW5nbGUiLCJkYXRhS2V5IiwiZW50cnkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/report.tsx\n"));

/***/ })

});