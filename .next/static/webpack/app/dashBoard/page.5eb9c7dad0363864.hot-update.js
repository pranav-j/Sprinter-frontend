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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n// interface MemberData {\n//     name: string,\n//     imageUrl: string,\n//     email: string,\n//     tasksAssigned: number,\n//     tasksCompleted: number,\n//     tasksInProgress: number\n// };\n// interface MemberProp {\n//     member: MemberData\n// };\n\nvar _s = $RefreshSig$();\n\nconst MemberCard = (param)=>{\n    let { member } = param;\n    _s();\n    const tasksCompleted = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-[200px] max-h-[300px] bg-white rounded-lg shadow-md p-4 m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-16 h-16 rounded-full mx-auto\",\n                src: member.profilePic,\n                alt: member.firstName\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center font-bold text-xl mt-2\",\n                children: [\n                    member.firstName,\n                    \" \",\n                    member.lastName\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-600\",\n                children: member.email\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Assigned: \",\n                            member._id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Completed: \",\n                            member._id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks In Progress: \",\n                            member._id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MemberCard, \"J3ndTgQCnaDX6aqv6pUL7exF4Vg=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = MemberCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemberCard);\nvar _c;\n$RefreshReg$(_c, \"MemberCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbWVtYmVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBQ3pCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLEtBQUs7QUFFTCx5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLEtBQUs7OztBQUUwQztBQU8vQyxNQUFNQyxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFtQjs7SUFDM0MsTUFBTUMsaUJBQWlCSCw0REFBY0EsQ0FBRUk7SUFFdkMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBSUQsV0FBVTtnQkFBaUNFLEtBQUtOLE9BQU9PLFVBQVU7Z0JBQUVDLEtBQUtSLE9BQU9TLFNBQVM7Ozs7OzswQkFDN0YsOERBQUNDO2dCQUFHTixXQUFVOztvQkFBc0NKLE9BQU9TLFNBQVM7b0JBQUM7b0JBQUVULE9BQU9XLFFBQVE7Ozs7Ozs7MEJBQ3RGLDhEQUFDQztnQkFBRVIsV0FBVTswQkFBNkJKLE9BQU9hLEtBQUs7Ozs7OzswQkFDdEQsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1E7OzRCQUFFOzRCQUFpQlosT0FBT2MsR0FBRzs7Ozs7OztrQ0FDOUIsOERBQUNGOzs0QkFBRTs0QkFBa0JaLE9BQU9jLEdBQUc7Ozs7Ozs7a0NBQy9CLDhEQUFDRjs7NEJBQUU7NEJBQW9CWixPQUFPYyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpEO0dBZk1mOztRQUNxQkQsd0RBQWNBOzs7S0FEbkNDO0FBaUJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbWVtYmVyQ2FyZC50c3g/YTQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnRlcmZhY2UgTWVtYmVyRGF0YSB7XG4vLyAgICAgbmFtZTogc3RyaW5nLFxuLy8gICAgIGltYWdlVXJsOiBzdHJpbmcsXG4vLyAgICAgZW1haWw6IHN0cmluZyxcbi8vICAgICB0YXNrc0Fzc2lnbmVkOiBudW1iZXIsXG4vLyAgICAgdGFza3NDb21wbGV0ZWQ6IG51bWJlcixcbi8vICAgICB0YXNrc0luUHJvZ3Jlc3M6IG51bWJlclxuLy8gfTtcblxuLy8gaW50ZXJmYWNlIE1lbWJlclByb3Age1xuLy8gICAgIG1lbWJlcjogTWVtYmVyRGF0YVxuLy8gfTtcblxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL21lbWJlcnNTbGljZVwiXG5cbmludGVyZmFjZSBNZW1iZXJDYXJkUHJvcHMge1xuICAgIG1lbWJlcjogTWVtYmVyO1xufVxuXG5jb25zdCBNZW1iZXJDYXJkID0gKHsgbWVtYmVyIH06IE1lbWJlckNhcmRQcm9wcykgPT4ge1xuICAgIGNvbnN0IHRhc2tzQ29tcGxldGVkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1bMjAwcHhdIG1heC1oLVszMDBweF0gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC00IG0tMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIG14LWF1dG9cIiBzcmM9e21lbWJlci5wcm9maWxlUGljfSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQteGwgbXQtMlwiPnttZW1iZXIuZmlyc3ROYW1lfSB7bWVtYmVyLmxhc3ROYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwXCI+e21lbWJlci5lbWFpbH08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICA8cD5UYXNrcyBBc3NpZ25lZDoge21lbWJlci5faWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIENvbXBsZXRlZDoge21lbWJlci5faWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIEluIFByb2dyZXNzOiB7bWVtYmVyLl9pZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyQ2FyZDsiXSwibmFtZXMiOlsidXNlQXBwU2VsZWN0b3IiLCJNZW1iZXJDYXJkIiwibWVtYmVyIiwidGFza3NDb21wbGV0ZWQiLCJzdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInByb2ZpbGVQaWMiLCJhbHQiLCJmaXJzdE5hbWUiLCJoMiIsImxhc3ROYW1lIiwicCIsImVtYWlsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/memberCard.tsx\n"));

/***/ })

});