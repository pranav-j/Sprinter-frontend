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

/***/ "(app-pages-browser)/./app/components/subComponents/chat.tsx":
/*!***********************************************!*\
  !*** ./app/components/subComponents/chat.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4\",\n                children: [\n                    members.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>se,\n                            className: \"flex items-center p-2 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-2 cursor-pointer bg-green-300 rounded\",\n                        children: \"Project Group Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: \"10:30 AM\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"GXZlUe/wKBmGU4YorV5ttXZdek8=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUVTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsbUJBQW1CUCw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRyx1QkFBdUIsQ0FBQ0QsZ0JBQWdCO0lBQ2pHLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNOSSxPQUFPYyxFQUFFLENBQUMsV0FBVyxDQUFDQztZQUNsQixnRUFBZ0U7WUFDaEVDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1FBRXZDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUcsY0FBYztRQUNoQmxCLE9BQU9tQixJQUFJLENBQUMsZUFBZTtZQUFFQyxTQUFTUjtZQUFTUyxXQUFXZjtRQUFpQjtRQUMzRU8sV0FBVztJQUNmO0lBRUEscUJBQ0ksOERBQUNTO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1ZwQixRQUFRcUIsR0FBRyxDQUFDLENBQUNDLHVCQUNWLDhEQUFDSDs0QkFBcUJJLFNBQVMsSUFBTUM7NEJBQUlKLFdBQVU7OzhDQUMvQyw4REFBQ0s7b0NBQUlMLFdBQVU7b0NBQXlCTSxLQUFLSixPQUFPSyxVQUFVLElBQUk7b0NBQTJDQyxLQUFLTixPQUFPTyxTQUFTOzs7Ozs7OENBQ2xJLDhEQUFDQztvQ0FBS1YsV0FBVTs7d0NBQVFFLE9BQU9PLFNBQVM7d0NBQUM7d0NBQUVQLE9BQU9TLFFBQVE7Ozs7Ozs7OzJCQUZwRFQsT0FBT1UsR0FBRzs7Ozs7a0NBTXhCLDhEQUFDYjt3QkFBSUMsV0FBVTtrQ0FBK0M7Ozs7Ozs7Ozs7OzswQkFNbEUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRVZiLFNBQVNjLEdBQUcsQ0FBQyxDQUFDWix3QkFDWCw4REFBQ1U7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBOEJYOzs7Ozs7a0RBQzdDLDhEQUFDcUI7d0NBQUtWLFdBQVU7a0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPbEUsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2E7Z0NBQU1DLE1BQUs7Z0NBQU9DLE9BQU8xQjtnQ0FBUzJCLFVBQVUsQ0FBQ0MsSUFBTTNCLFdBQVcyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUdJLGFBQVk7Z0NBQW9CbkIsV0FBVTs7Ozs7OzBDQUMxSCw4REFBQ29CO2dDQUFPakIsU0FBU1I7Z0NBQWFLLFdBQVU7MENBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0c7R0ExRE1yQjs7UUFDY0gsd0RBQWNBO1FBQ0xBLHdEQUFjQTs7O0tBRnJDRztBQTRETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2NoYXQudHN4PzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnQC9yZWR1eC9zbGljZXMvbWVtYmVyc1NsaWNlJztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMzAnLCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxufSk7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVtYmVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuTWVtYmVyc1JlZHVjZXIubWVtYmVycyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgW21lc3NhZ2VUbywgc2V0TWVzc2FnZVRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAobmV3TWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgLy8gc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbmV3TWVzc2FnZV0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdNZXNzYWdlLi4uLi4uLi4uXCIsIG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdE1lc3NhZ2UnLCB7IGNvbnRlbnQ6IG1lc3NhZ2UsIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCB9KTtcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBTaWRlYmFyIGZvciBtZW1iZXJzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBiZy1ncmF5LTIwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcjogTWVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e21lbWJlci5wcm9maWxlUGljIHx8IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17bWVtYmVyLmZpcnN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bWVtYmVyLmZpcnN0TmFtZX0ge21lbWJlci5sYXN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHsvKiBHcm91cCBDaGF0ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTIgY3Vyc29yLXBvaW50ZXIgYmctZ3JlZW4tMzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBHcm91cCBDaGF0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENoYXQgQXJlYSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgYmctd2hpdGUgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgey8qIENoYXQgTWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtMiBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDaGF0IGJ1YmJsZXMgKi99XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTIwMCBwLTIgcm91bmRlZC1sZ1wiPnttZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtbC0yIHNlbGYtZW5kXCI+MTA6MzAgQU08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBJbnB1dCBmaWVsZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTIgYm9yZGVyIHJvdW5kZWQtbGdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VBcHBTZWxlY3RvciIsInNvY2tldCIsIndpdGhDcmVkZW50aWFscyIsIkNoYXQiLCJtZW1iZXJzIiwic3RhdGUiLCJNZW1iZXJzUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsIm1lc3NhZ2VUbyIsInNldE1lc3NhZ2VUbyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm9uIiwibmV3TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kTWVzc2FnZSIsImVtaXQiLCJjb250ZW50IiwicHJvamVjdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVtYmVyIiwib25DbGljayIsInNlIiwiaW1nIiwic3JjIiwicHJvZmlsZVBpYyIsImFsdCIsImZpcnN0TmFtZSIsInNwYW4iLCJsYXN0TmFtZSIsIl9pZCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});