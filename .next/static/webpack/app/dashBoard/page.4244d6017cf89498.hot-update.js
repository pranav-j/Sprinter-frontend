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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId } = param;\n            console.log(\"\".concat(messageContent, \": \").concat(senderId));\n        });\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId,\n            messageTo\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: \"10:30 AM\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"rt0xJVXAjsz926nZMgyjVGHg9XQ=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLG1CQUFtQlQsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUssdUJBQXVCLENBQUNELGdCQUFnQjtJQUNqRyxNQUFNRSxpQkFBaUJKLFNBQVNLLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxHQUFHLEtBQU9MLHFCQUFxQjtJQVF6RixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDcUIsU0FBU0MsV0FBVyxHQUFHdEIsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ05JLE9BQU9vQixFQUFFLENBQUMsV0FBVyxDQUFDQztZQUNsQixnRUFBZ0U7WUFDaEVDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1FBRXZDO0lBQ0osR0FBRyxFQUFFO0lBRUx6QixnREFBU0EsQ0FBQztRQUNOSSxPQUFPb0IsRUFBRSxDQUFDLG1CQUFtQjtnQkFBQyxFQUFFSSxjQUFjLEVBQUVDLFFBQVEsRUFBRTtZQUN0REgsUUFBUUMsR0FBRyxDQUFDLEdBQXNCRSxPQUFuQkQsZ0JBQWUsTUFBYSxPQUFUQztRQUN0QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1DLGNBQWM7UUFDaEIxQixPQUFPMkIsSUFBSSxDQUFDLGVBQWU7WUFBRUMsU0FBU1Y7WUFBU1csV0FBV3JCO1lBQWtCTTtRQUFVO1FBQ3RGSyxXQUFXO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0Y7d0JBQThCRyxTQUFTLElBQU1sQixhQUFhTCxDQUFBQSwyQkFBQUEscUNBQUFBLGVBQWdCRyxHQUFHLEtBQUk7d0JBQUtrQixXQUFVOzswQ0FDN0YsOERBQUNHO2dDQUFJSCxXQUFVO2dDQUF5QkksS0FBSztnQ0FBMkNDLEdBQUcsRUFBRTFCLDJCQUFBQSxxQ0FBQUEsZUFBZ0IyQixLQUFLOzs7Ozs7MENBQ2xILDhEQUFDQztnQ0FBS1AsV0FBVTswQ0FBUXJCLDJCQUFBQSxxQ0FBQUEsZUFBZ0IyQixLQUFLOzs7Ozs7O3VCQUZ2QzNCLDJCQUFBQSxxQ0FBQUEsZUFBZ0JHLEdBQUc7Ozs7O2tDQUk3Qiw4REFBQ21CO2tDQUFHOzs7Ozs7b0JBQ0g3QixRQUFRb0MsR0FBRyxDQUFDLENBQUNDLHVCQUNWLDhEQUFDVjs0QkFBcUJHLFNBQVMsSUFBTWxCLGFBQWF5QixPQUFPM0IsR0FBRzs0QkFBR2tCLFdBQVcsd0NBQTJGLE9BQW5EakIsY0FBYzBCLE9BQU8zQixHQUFHLElBQUk7OzhDQUMxSSw4REFBQ3FCO29DQUFJSCxXQUFVO29DQUF5QkksS0FBS0ssT0FBT0MsVUFBVSxJQUFJO29DQUEyQ0wsS0FBS0ksT0FBT0UsU0FBUzs7Ozs7OzhDQUNsSSw4REFBQ0o7b0NBQUtQLFdBQVU7O3dDQUFRUyxPQUFPRSxTQUFTO3dDQUFDO3dDQUFFRixPQUFPRyxRQUFROzs7Ozs7OzsyQkFGcERILE9BQU8zQixHQUFHOzs7Ozs7Ozs7OzswQkFRNUIsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBRVgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVWZixTQUFTdUIsR0FBRyxDQUFDLENBQUNyQix3QkFDWCw4REFBQ1k7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBOEJiOzs7Ozs7a0RBQzdDLDhEQUFDb0I7d0NBQUtQLFdBQVU7a0RBQXNDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPbEUsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2E7Z0NBQU1DLE1BQUs7Z0NBQU9DLE9BQU81QjtnQ0FBUzZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFdBQVc2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUdJLGFBQVk7Z0NBQW9CbkIsV0FBVTs7Ozs7OzBDQUMxSCw4REFBQ29CO2dDQUFPbEIsU0FBU1A7Z0NBQWFLLFdBQVU7MENBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0c7R0EzRU03Qjs7UUFDY0gsd0RBQWNBO1FBQ2JBLHdEQUFjQTtRQUNOQSx3REFBY0E7OztLQUhyQ0c7QUE2RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9jaGF0LnRzeD85MDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMzAnLCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxufSk7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVtYmVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuTWVtYmVyc1JlZHVjZXIubWVtYmVycyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2plY3RzUmVkdWNlci5wcm9qZWN0cyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Ll9pZCA9PT0gICBjdXJyZW50UHJvamVjdElkKSB8fCBudWxsO1xuXG4gICAgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICBtZXNzYWdlQ29udGVudDogc3RyaW5nO1xuICAgICAgICBzZW5kZXJJZD86IHN0cmluZztcbiAgICAgICAgcmVcbiAgICB9XG5cbiAgICBjb25zdCBbbWVzc2FnZVRvLCBzZXRNZXNzYWdlVG9dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChuZXdNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01lc3NhZ2UuLi4uLi4uLi5cIiwgbmV3TWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdwcml2YXRlX21lc3NhZ2UnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bWVzc2FnZUNvbnRlbnR9OiAke3NlbmRlcklkfWApO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBTaWRlYmFyIGZvciBtZW1iZXJzIGFuZCBncm91cCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYmctZ3JheS0yMDAgcC00IG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjdXJyZW50UHJvamVjdD8uX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8oY3VycmVudFByb2plY3Q/Ll9pZCB8fCAnJyl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e1wiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17Y3VycmVudFByb2plY3Q/LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e2N1cnJlbnRQcm9qZWN0Py50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1FTUJFUlM8L2gxPlxuICAgICAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8obWVtYmVyLl9pZCl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gbWVtYmVyLl9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXttZW1iZXIucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1sLTIgc2VsZi1lbmRcIj4xMDozMCBBTTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlLi4uXCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtMiBib3JkZXIgcm91bmRlZC1sZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwibWwtMiBweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInVzZUFwcFNlbGVjdG9yIiwic29ja2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiQ2hhdCIsIm1lbWJlcnMiLCJzdGF0ZSIsIk1lbWJlcnNSZWR1Y2VyIiwicHJvamVjdHMiLCJwcm9qZWN0c1JlZHVjZXIiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJjdXJyZW50UHJvamVjdCIsImZpbmQiLCJwcm9qZWN0IiwiX2lkIiwibWVzc2FnZVRvIiwic2V0TWVzc2FnZVRvIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VDb250ZW50Iiwic2VuZGVySWQiLCJzZW5kTWVzc2FnZSIsImVtaXQiLCJjb250ZW50IiwicHJvamVjdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJzcGFuIiwibWFwIiwibWVtYmVyIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});