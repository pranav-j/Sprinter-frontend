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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId } = param;\n            console.log(\"\".concat(messageContent, \": \").concat(senderId));\n        });\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId,\n            messageTo\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4\",\n                children: [\n                    members.map((member1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member1._id),\n                            className: \"flex items-center p-2 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member1.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member1.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member1.firstName,\n                                        \" \",\n                                        member1.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member1._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)),\n                    projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, project._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-2 cursor-pointer bg-green-300 rounded\",\n                        children: \"Project Group Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: \"10:30 AM\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"rt0xJVXAjsz926nZMgyjVGHg9XQ=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUVTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLG1CQUFtQlQsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUssdUJBQXVCLENBQUNELGdCQUFnQjtJQUNqRyxNQUFNLENBQUNFLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNOSSxPQUFPZ0IsRUFBRSxDQUFDLFdBQVcsQ0FBQ0M7WUFDbEIsZ0VBQWdFO1lBQ2hFQyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRjtRQUV2QztJQUNKLEdBQUcsRUFBRTtJQUVMckIsZ0RBQVNBLENBQUM7UUFDTkksT0FBT2dCLEVBQUUsQ0FBQyxtQkFBbUI7Z0JBQUMsRUFBRUksY0FBYyxFQUFFQyxRQUFRLEVBQUU7WUFDdERILFFBQVFDLEdBQUcsQ0FBQyxHQUFzQkUsT0FBbkJELGdCQUFlLE1BQWEsT0FBVEM7UUFDdEM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2hCdEIsT0FBT3VCLElBQUksQ0FBQyxlQUFlO1lBQUVDLFNBQVNWO1lBQVNXLFdBQVdqQjtZQUFrQkU7UUFBVTtRQUN0RkssV0FBVztJQUNmO0lBRUEscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQ1Z4QixRQUFReUIsR0FBRyxDQUFDLENBQUNDLHdCQUNWLDhEQUFDSDs0QkFBcUJJLFNBQVMsSUFBTW5CLGFBQWFrQixRQUFPRSxHQUFHOzRCQUFHSixXQUFVOzs4Q0FDckUsOERBQUNLO29DQUFJTCxXQUFVO29DQUF5Qk0sS0FBS0osUUFBT0ssVUFBVSxJQUFJO29DQUEyQ0MsS0FBS04sUUFBT08sU0FBUzs7Ozs7OzhDQUNsSSw4REFBQ0M7b0NBQUtWLFdBQVU7O3dDQUFRRSxRQUFPTyxTQUFTO3dDQUFDO3dDQUFFUCxRQUFPUyxRQUFROzs7Ozs7OzsyQkFGcERULFFBQU9FLEdBQUc7Ozs7O29CQUt2QnpCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ1csd0JBQ1gsOERBQUNiOzRCQUFzQkksU0FBUyxJQUFNbkIsYUFBYWtCLE9BQU9FLEdBQUc7NEJBQUdKLFdBQVU7OzhDQUN0RSw4REFBQ0s7b0NBQUlMLFdBQVU7b0NBQXlCTSxLQUFLSixPQUFPSyxVQUFVLElBQUk7b0NBQTJDQyxLQUFLTixPQUFPTyxTQUFTOzs7Ozs7OENBQ2xJLDhEQUFDQztvQ0FBS1YsV0FBVTs7d0NBQVFFLE9BQU9PLFNBQVM7d0NBQUM7d0NBQUVQLE9BQU9TLFFBQVE7Ozs7Ozs7OzJCQUZwREMsUUFBUVIsR0FBRzs7Ozs7a0NBTXpCLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FBK0M7Ozs7Ozs7Ozs7OzswQkFNbEUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRVZmLFNBQVNnQixHQUFHLENBQUMsQ0FBQ2Qsd0JBQ1gsOERBQUNZO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQThCYjs7Ozs7O2tEQUM3Qyw4REFBQ3VCO3dDQUFLVixXQUFVO2tEQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT2xFLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNhO2dDQUFNQyxNQUFLO2dDQUFPQyxPQUFPNUI7Z0NBQVM2QixVQUFVLENBQUNDLElBQU03QixXQUFXNkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFHSSxhQUFZO2dDQUFvQm5CLFdBQVU7Ozs7OzswQ0FDMUgsOERBQUNvQjtnQ0FBT2pCLFNBQVNSO2dDQUFhSyxXQUFVOzBDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9HO0dBdkVNekI7O1FBQ2NILHdEQUFjQTtRQUNiQSx3REFBY0E7UUFDTkEsd0RBQWNBOzs7S0FIckNHO0FBeUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3g/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdAL3JlZHV4L3NsaWNlcy9tZW1iZXJzU2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCcsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuY29uc3QgQ2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCBtZW1iZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5NZW1iZXJzUmVkdWNlci5tZW1iZXJzKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvamVjdHNSZWR1Y2VyLnByb2plY3RzKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBbbWVzc2FnZVRvLCBzZXRNZXNzYWdlVG9dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChuZXdNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01lc3NhZ2UuLi4uLi4uLi5cIiwgbmV3TWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdwcml2YXRlX21lc3NhZ2UnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bWVzc2FnZUNvbnRlbnR9OiAke3NlbmRlcklkfWApO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBTaWRlYmFyIGZvciBtZW1iZXJzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBiZy1ncmF5LTIwMCBwLTRcIj5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVtYmVyLl9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKG1lbWJlci5faWQpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17bWVtYmVyLnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gYWx0PXttZW1iZXIuZmlyc3ROYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttZW1iZXIuZmlyc3ROYW1lfSB7bWVtYmVyLmxhc3ROYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5faWR9IG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VUbyhtZW1iZXIuX2lkKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e21lbWJlci5wcm9maWxlUGljIHx8IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17bWVtYmVyLmZpcnN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bWVtYmVyLmZpcnN0TmFtZX0ge21lbWJlci5sYXN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHsvKiBHcm91cCBDaGF0ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwLTIgY3Vyc29yLXBvaW50ZXIgYmctZ3JlZW4tMzAwIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBHcm91cCBDaGF0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENoYXQgQXJlYSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgYmctd2hpdGUgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgey8qIENoYXQgTWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtMiBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDaGF0IGJ1YmJsZXMgKi99XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTIwMCBwLTIgcm91bmRlZC1sZ1wiPnttZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtbC0yIHNlbGYtZW5kXCI+MTA6MzAgQU08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBJbnB1dCBmaWVsZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTIgYm9yZGVyIHJvdW5kZWQtbGdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VBcHBTZWxlY3RvciIsInNvY2tldCIsIndpdGhDcmVkZW50aWFscyIsIkNoYXQiLCJtZW1iZXJzIiwic3RhdGUiLCJNZW1iZXJzUmVkdWNlciIsInByb2plY3RzIiwicHJvamVjdHNSZWR1Y2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwibWVzc2FnZVRvIiwic2V0TWVzc2FnZVRvIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VDb250ZW50Iiwic2VuZGVySWQiLCJzZW5kTWVzc2FnZSIsImVtaXQiLCJjb250ZW50IiwicHJvamVjdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVtYmVyIiwib25DbGljayIsIl9pZCIsImltZyIsInNyYyIsInByb2ZpbGVQaWMiLCJhbHQiLCJmaXJzdE5hbWUiLCJzcGFuIiwibGFzdE5hbWUiLCJwcm9qZWN0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});