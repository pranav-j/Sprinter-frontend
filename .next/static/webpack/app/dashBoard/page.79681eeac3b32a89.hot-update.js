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

/***/ "(app-pages-browser)/./app/components/subComponents/memberCard.tsx":
/*!*****************************************************!*\
  !*** ./app/components/subComponents/memberCard.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n// interface MemberData {\n//     name: string,\n//     imageUrl: string,\n//     email: string,\n//     tasksAssigned: number,\n//     tasksCompleted: number,\n//     tasksInProgress: number\n// };\n// interface MemberProp {\n//     member: MemberData\n// };\n\nconst MemberCard = (member)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-[200px] max-h-[300px] bg-white rounded-lg shadow-md p-4 m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-16 h-16 rounded-full mx-auto\",\n                src: member.profilePic,\n                alt: member.name\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center font-bold text-xl mt-2\",\n                children: [\n                    member.firstName,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-600\",\n                children: member.email\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Assigned: \",\n                            member.tasksAssigned\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Completed: \",\n                            member.tasksCompleted\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks In Progress: \",\n                            member.tasksInProgress\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MemberCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemberCard);\nvar _c;\n$RefreshReg$(_c, \"MemberCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbWVtYmVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsS0FBSztBQUVMLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsS0FBSzs7QUFlTCxNQUFNQSxhQUFhLENBQUNDO0lBQ2hCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUlELFdBQVU7Z0JBQWlDRSxLQUFLSixPQUFPSyxVQUFVO2dCQUFFQyxLQUFLTixPQUFPTyxJQUFJOzs7Ozs7MEJBQ3hGLDhEQUFDQztnQkFBR04sV0FBVTs7b0JBQXNDRixPQUFPUyxTQUFTO29CQUFDOzs7Ozs7OzBCQUNyRSw4REFBQ0M7Z0JBQUVSLFdBQVU7MEJBQTZCRixPQUFPVyxLQUFLOzs7Ozs7MEJBQ3RELDhEQUFDVjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNROzs0QkFBRTs0QkFBaUJWLE9BQU9ZLGFBQWE7Ozs7Ozs7a0NBQ3hDLDhEQUFDRjs7NEJBQUU7NEJBQWtCVixPQUFPYSxjQUFjOzs7Ozs7O2tDQUMxQyw4REFBQ0g7OzRCQUFFOzRCQUFvQlYsT0FBT2MsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3RDtLQWJNZjtBQWVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbWVtYmVyQ2FyZC50c3g/YTQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnRlcmZhY2UgTWVtYmVyRGF0YSB7XG4vLyAgICAgbmFtZTogc3RyaW5nLFxuLy8gICAgIGltYWdlVXJsOiBzdHJpbmcsXG4vLyAgICAgZW1haWw6IHN0cmluZyxcbi8vICAgICB0YXNrc0Fzc2lnbmVkOiBudW1iZXIsXG4vLyAgICAgdGFza3NDb21wbGV0ZWQ6IG51bWJlcixcbi8vICAgICB0YXNrc0luUHJvZ3Jlc3M6IG51bWJlclxuLy8gfTtcblxuLy8gaW50ZXJmYWNlIE1lbWJlclByb3Age1xuLy8gICAgIG1lbWJlcjogTWVtYmVyRGF0YVxuLy8gfTtcblxuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL21lbWJlcnNTbGljZVwiXG5cbmludGVyZmFjZSBNZW1iZXJQcm9wIHtcbiAgICBtZW1iZXI6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBpbWFnZVVybDogc3RyaW5nLFxuICAgICAgICBlbWFpbDogc3RyaW5nLFxuICAgICAgICB0YXNrc0Fzc2lnbmVkOiBudW1iZXIsXG4gICAgICAgIHRhc2tzQ29tcGxldGVkOiBudW1iZXIsXG4gICAgICAgIHRhc2tzSW5Qcm9ncmVzczogbnVtYmVyXG4gICAgfVxufTtcblxuY29uc3QgTWVtYmVyQ2FyZCA9IChtZW1iZXI6IE1lbWJlcikgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjAwcHhdIG1heC1oLVszMDBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC00IG0tMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIG14LWF1dG9cIiBzcmM9e21lbWJlci5wcm9maWxlUGljfSBhbHQ9e21lbWJlci5uYW1lfSAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXhsIG10LTJcIj57bWVtYmVyLmZpcnN0TmFtZX0gPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj57bWVtYmVyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIEFzc2lnbmVkOiB7bWVtYmVyLnRhc2tzQXNzaWduZWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIENvbXBsZXRlZDoge21lbWJlci50YXNrc0NvbXBsZXRlZH08L3A+XG4gICAgICAgICAgICAgICAgPHA+VGFza3MgSW4gUHJvZ3Jlc3M6IHttZW1iZXIudGFza3NJblByb2dyZXNzfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJDYXJkOyJdLCJuYW1lcyI6WyJNZW1iZXJDYXJkIiwibWVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImFsdCIsIm5hbWUiLCJoMiIsImZpcnN0TmFtZSIsInAiLCJlbWFpbCIsInRhc2tzQXNzaWduZWQiLCJ0YXNrc0NvbXBsZXRlZCIsInRhc2tzSW5Qcm9ncmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/memberCard.tsx\n"));

/***/ })

});