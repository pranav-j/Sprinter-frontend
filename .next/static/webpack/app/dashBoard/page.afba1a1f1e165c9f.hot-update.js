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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// interface MemberData {\n//     name: string,\n//     imageUrl: string,\n//     email: string,\n//     tasksAssigned: number,\n//     tasksCompleted: number,\n//     tasksInProgress: number\n// };\n// interface MemberProp {\n//     member: MemberData\n// };\n\nvar _s = $RefreshSig$();\n\n\nconst MemberCard = (param)=>{\n    let { member } = param;\n    _s();\n    const memberTasks = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.itemsReducer.items).filter((item)=>item.assignee === member._id);\n    const noOfTasksAssigned = memberTasks.length;\n    const noOfTasksCompleted = memberTasks.filter((task)=>task.status === \"done\").length;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"memberTasks..................\", memberTasks);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-[200px] max-h-[300px] bg-white rounded-lg shadow-md p-4 m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-16 h-16 rounded-full mx-auto\",\n                src: member.profilePic,\n                alt: member.firstName\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center font-bold text-xl mt-2\",\n                children: [\n                    member.firstName,\n                    \" \",\n                    member.lastName\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-600\",\n                children: member.email\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Assigned: \",\n                            noOfTasksAssigned\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks Completed: \",\n                            noOfTasksCompleted\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Tasks In Progress: \",\n                            member._id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/memberCard.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MemberCard, \"1HbeOpiArqEo4Gck8xfZGZElGZI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = MemberCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemberCard);\nvar _c;\n$RefreshReg$(_c, \"MemberCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvbWVtYmVyQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsS0FBSztBQUVMLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsS0FBSzs7O0FBRTBDO0FBRWI7QUFNbEMsTUFBTUUsYUFBYTtRQUFDLEVBQUVDLE1BQU0sRUFBbUI7O0lBQzNDLE1BQU1DLGNBQWNKLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLFlBQVksQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxLQUFLUCxPQUFPUSxHQUFHO0lBQ3JILE1BQU1DLG9CQUFvQlIsWUFBWVMsTUFBTTtJQUM1QyxNQUFNQyxxQkFBcUJWLFlBQVlJLE1BQU0sQ0FBQyxDQUFDTyxPQUFTQSxLQUFLQyxNQUFNLEtBQUssUUFBUUgsTUFBTTtJQUV0RlosZ0RBQVNBLENBQUM7UUFDTmdCLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNkO0lBRWpELEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUlELFdBQVU7Z0JBQWlDRSxLQUFLbkIsT0FBT29CLFVBQVU7Z0JBQUVDLEtBQUtyQixPQUFPc0IsU0FBUzs7Ozs7OzBCQUM3Riw4REFBQ0M7Z0JBQUdOLFdBQVU7O29CQUFzQ2pCLE9BQU9zQixTQUFTO29CQUFDO29CQUFFdEIsT0FBT3dCLFFBQVE7Ozs7Ozs7MEJBQ3RGLDhEQUFDQztnQkFBRVIsV0FBVTswQkFBNkJqQixPQUFPMEIsS0FBSzs7Ozs7OzBCQUN0RCw4REFBQ1Y7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDUTs7NEJBQUU7NEJBQWlCaEI7Ozs7Ozs7a0NBQ3BCLDhEQUFDZ0I7OzRCQUFFOzRCQUFrQmQ7Ozs7Ozs7a0NBQ3JCLDhEQUFDYzs7NEJBQUU7NEJBQW9CekIsT0FBT1EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQXRCTVQ7O1FBQ2tCRix3REFBY0E7OztLQURoQ0U7QUF3Qk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9tZW1iZXJDYXJkLnRzeD9hNDczIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGludGVyZmFjZSBNZW1iZXJEYXRhIHtcbi8vICAgICBuYW1lOiBzdHJpbmcsXG4vLyAgICAgaW1hZ2VVcmw6IHN0cmluZyxcbi8vICAgICBlbWFpbDogc3RyaW5nLFxuLy8gICAgIHRhc2tzQXNzaWduZWQ6IG51bWJlcixcbi8vICAgICB0YXNrc0NvbXBsZXRlZDogbnVtYmVyLFxuLy8gICAgIHRhc2tzSW5Qcm9ncmVzczogbnVtYmVyXG4vLyB9O1xuXG4vLyBpbnRlcmZhY2UgTWVtYmVyUHJvcCB7XG4vLyAgICAgbWVtYmVyOiBNZW1iZXJEYXRhXG4vLyB9O1xuXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvbWVtYmVyc1NsaWNlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTWVtYmVyQ2FyZFByb3BzIHtcbiAgICBtZW1iZXI6IE1lbWJlcjtcbn1cblxuY29uc3QgTWVtYmVyQ2FyZCA9ICh7IG1lbWJlciB9OiBNZW1iZXJDYXJkUHJvcHMpID0+IHtcbiAgICBjb25zdCBtZW1iZXJUYXNrcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXNSZWR1Y2VyLml0ZW1zKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYXNzaWduZWUgPT09IG1lbWJlci5faWQpO1xuICAgIGNvbnN0IG5vT2ZUYXNrc0Fzc2lnbmVkID0gbWVtYmVyVGFza3MubGVuZ3RoO1xuICAgIGNvbnN0IG5vT2ZUYXNrc0NvbXBsZXRlZCA9IG1lbWJlclRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5zdGF0dXMgPT09ICdkb25lJykubGVuZ3RoO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtZW1iZXJUYXNrcy4uLi4uLi4uLi4uLi4uLi4uLlwiLCBtZW1iZXJUYXNrcyk7XG4gICAgICAgIFxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LVsyMDBweF0gbWF4LWgtWzMwMHB4XSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbS0yXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLWZ1bGwgbXgtYXV0b1wiIHNyYz17bWVtYmVyLnByb2ZpbGVQaWN9IGFsdD17bWVtYmVyLmZpcnN0TmFtZX0gLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC14bCBtdC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj57bWVtYmVyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIEFzc2lnbmVkOiB7bm9PZlRhc2tzQXNzaWduZWR9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlRhc2tzIENvbXBsZXRlZDoge25vT2ZUYXNrc0NvbXBsZXRlZH08L3A+XG4gICAgICAgICAgICAgICAgPHA+VGFza3MgSW4gUHJvZ3Jlc3M6IHttZW1iZXIuX2lkfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJDYXJkOyJdLCJuYW1lcyI6WyJ1c2VBcHBTZWxlY3RvciIsInVzZUVmZmVjdCIsIk1lbWJlckNhcmQiLCJtZW1iZXIiLCJtZW1iZXJUYXNrcyIsInN0YXRlIiwiaXRlbXNSZWR1Y2VyIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiYXNzaWduZWUiLCJfaWQiLCJub09mVGFza3NBc3NpZ25lZCIsImxlbmd0aCIsIm5vT2ZUYXNrc0NvbXBsZXRlZCIsInRhc2siLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImFsdCIsImZpcnN0TmFtZSIsImgyIiwibGFzdE5hbWUiLCJwIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/memberCard.tsx\n"));

/***/ })

});