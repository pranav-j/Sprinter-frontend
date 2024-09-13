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

/***/ "(app-pages-browser)/./app/components/subComponents/sprint.tsx":
/*!*************************************************!*\
  !*** ./app/components/subComponents/sprint.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"(app-pages-browser)/./app/components/subComponents/item.tsx\");\n/* harmony import */ var _dropArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropArea */ \"(app-pages-browser)/./app/components/subComponents/dropArea.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SprintCard = (param)=>{\n    let { sprint } = param;\n    _s();\n    const items = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.itemsReducer.items);\n    const sprintItems = items.filter((item)=>item.sprintId === sprint._id);\n    sprintItems.sort((a, b)=>{\n        var _a_order, _b_order;\n        return ((_a_order = a.order) !== null && _a_order !== void 0 ? _a_order : 0) - ((_b_order = b.order) !== null && _b_order !== void 0 ? _b_order : 0);\n    });\n    console.log(\"sprintItems...........\", sprintItems);\n    const handleStartSprint = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3030/api/startSprint\", {\n                sprintId: sprint._id\n            }, {\n                withCredentials: true\n            });\n            if (response.status === 200) {\n                // Handle successful response\n                alert(\"Sprint started\");\n            } else {\n                // Handle errors\n                alert(\"Failed to start Sprint. Try again later.\");\n            }\n        } catch (error) {\n            console.error(\"Error sending invites:\", error);\n            alert(\"Error sending invites. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2 flex flex-col w-full border-b-2 rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center border-b-2 py-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-lg font-bold px-4\",\n                        children: sprint.sprintName\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleStartSprint,\n                        className: \"px-4\",\n                        children: \"START\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#ffffff]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        index: 0,\n                        moveToSprintId: sprint._id\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    sprintItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    item: item\n                                }, index, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    index: index + 1,\n                                    moveToSprintId: sprint._id\n                                }, \"drop-\".concat(index), false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/sprint.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SprintCard, \"rBbpiO4AQo6ooD09xyn6TMpHwqI=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = SprintCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SprintCard);\nvar _c;\n$RefreshReg$(_c, \"SprintCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvc3ByaW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMrQztBQUNyQjtBQUNRO0FBQ1I7QUFNMUIsTUFBTUksYUFBYTtRQUFDLEVBQUNDLE1BQU0sRUFBYTs7SUFFcEMsTUFBTUMsUUFBUU4sNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsWUFBWSxDQUFDRixLQUFLO0lBRWhFLE1BQU1HLGNBQWNILE1BQU1JLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUSxLQUFLUCxPQUFPUSxHQUFHO0lBQ3JFSixZQUFZSyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0M7WUFBT0QsVUFBaUJDO2VBQWxCLENBQUNELENBQUFBLFdBQUFBLEVBQUVFLEtBQUssY0FBUEYsc0JBQUFBLFdBQVcsS0FBTUMsQ0FBQUEsQ0FBQUEsV0FBQUEsRUFBRUMsS0FBSyxjQUFQRCxzQkFBQUEsV0FBVztJQUFDO0lBRXpERSxRQUFRQyxHQUFHLENBQUMsMEJBQTBCVjtJQUV0QyxNQUFNVyxvQkFBb0I7UUFDdEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTWxCLDZDQUFLQSxDQUFDbUIsSUFBSSxDQUFDLHlDQUF5QztnQkFBRVYsVUFBVVAsT0FBT1EsR0FBRztZQUFDLEdBQUc7Z0JBQUVVLGlCQUFpQjtZQUFLO1lBRTdILElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUN6Qiw2QkFBNkI7Z0JBQzdCQyxNQUFNO1lBQ1YsT0FBTztnQkFDSCxnQkFBZ0I7Z0JBQ2hCQSxNQUFNO1lBQ1Y7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDZFIsUUFBUVEsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENELE1BQU07UUFDUjtJQUNKO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEwQnZCLE9BQU95QixVQUFVOzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBT0MsU0FBU1o7d0JBQW1CUSxXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBRXpELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUMxQixpREFBUUE7d0JBQUMrQixPQUFPO3dCQUFHQyxnQkFBZ0I3QixPQUFPUSxHQUFHOzs7Ozs7b0JBRTFDSixZQUFZMEIsR0FBRyxDQUFDLENBQUN4QixNQUFNc0Isc0JBQ25CLDhEQUFDTjs7OENBQ0csOERBQUMxQiw2Q0FBSUE7b0NBQWFVLE1BQU1BO21DQUFic0I7Ozs7OzhDQUNYLDhEQUFDL0IsaURBQVFBO29DQUF1QitCLE9BQU9BLFFBQVE7b0NBQUdDLGdCQUFnQjdCLE9BQU9RLEdBQUc7bUNBQTdELFFBQWMsT0FBTm9COzs7Ozs7MkJBRmpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbEM7R0E3Q003Qjs7UUFFWUosd0RBQWNBOzs7S0FGMUJJO0FBK0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvc3ByaW50LnRzeD83ZjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcmludCB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZVwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IERyb3BBcmVhIGZyb20gXCIuL2Ryb3BBcmVhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBTcHJpbnRQcm9wIHtcbiAgICBzcHJpbnQ6IFNwcmludFxufTtcblxuY29uc3QgU3ByaW50Q2FyZCA9ICh7c3ByaW50fTogU3ByaW50UHJvcCkgPT4ge1xuXG4gICAgY29uc3QgaXRlbXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLml0ZW1zUmVkdWNlci5pdGVtcyk7XG4gICAgXG4gICAgY29uc3Qgc3ByaW50SXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNwcmludElkID09PSBzcHJpbnQuX2lkKTtcbiAgICBzcHJpbnRJdGVtcy5zb3J0KChhLCBiKSA9PiAoYS5vcmRlciA/PyAwKSAtIChiLm9yZGVyID8/IDApKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3ByaW50SXRlbXMuLi4uLi4uLi4uLlwiLCBzcHJpbnRJdGVtcyk7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlU3RhcnRTcHJpbnQgPSBhc3luYygpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvc3RhcnRTcHJpbnRcIiwgeyBzcHJpbnRJZDogc3ByaW50Ll9pZCB9LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTcHJpbnQgc3RhcnRlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIHN0YXJ0IFNwcmludC4gVHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBpbnZpdGVzOlwiLCBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoXCJFcnJvciBzZW5kaW5nIGludml0ZXMuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGZsZXggZmxleC1jb2wgdy1mdWxsIGJvcmRlci1iLTIgcm91bmRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBweS0zXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHB4LTRcIj57c3ByaW50LnNwcmludE5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0U3ByaW50fSBjbGFzc05hbWU9XCJweC00XCI+U1RBUlQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2ZmZmZmZl1cIj5cbiAgICAgICAgICAgICAgICA8RHJvcEFyZWEgaW5kZXg9ezB9IG1vdmVUb1NwcmludElkPXtzcHJpbnQuX2lkfSAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaW50SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wQXJlYSBrZXk9e2Bkcm9wLSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4ICsgMX0gbW92ZVRvU3ByaW50SWQ9e3NwcmludC5faWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3ByaW50Q2FyZDsiXSwibmFtZXMiOlsidXNlQXBwU2VsZWN0b3IiLCJJdGVtIiwiRHJvcEFyZWEiLCJheGlvcyIsIlNwcmludENhcmQiLCJzcHJpbnQiLCJpdGVtcyIsInN0YXRlIiwiaXRlbXNSZWR1Y2VyIiwic3ByaW50SXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwic3ByaW50SWQiLCJfaWQiLCJzb3J0IiwiYSIsImIiLCJvcmRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdGFydFNwcmludCIsInJlc3BvbnNlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInN0YXR1cyIsImFsZXJ0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwcmludE5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5kZXgiLCJtb3ZlVG9TcHJpbnRJZCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/sprint.tsx\n"));

/***/ })

});