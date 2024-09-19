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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const messagesToShow = messages.filter((message)=>message.senderId === messageTo);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId, sentAt } = param;\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt\n                    }\n                ]);\n            console.log(\"messages........\", messages);\n        });\n        socket.emit(\"joinProject\", {});\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId,\n            messageTo\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message.messageContent\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: message.sentAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"eGBBei7D/HPom4Gfyk5MyQ71Nss=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLGVBQWVULDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxtQkFBbUJaLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1RLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCUCxTQUFTUSxJQUFJLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsR0FBRyxLQUFPTCxxQkFBcUI7SUFXekYsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0wQixpQkFBaUJKLFNBQVNLLE1BQU0sQ0FBQyxDQUFDSCxVQUFZQSxRQUFRSSxRQUFRLEtBQUtSO0lBRXpFckIsZ0RBQVNBLENBQUM7UUFDTkksT0FBTzBCLEVBQUUsQ0FBQyxXQUFXLENBQUNDO1lBQ2xCLGdFQUFnRTtZQUNoRUMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7UUFFdkM7SUFDSixHQUFHLEVBQUU7SUFFTC9CLGdEQUFTQSxDQUFDO1FBQ05JLE9BQU8wQixFQUFFLENBQUMsbUJBQW1CO2dCQUFDLEVBQUVJLGNBQWMsRUFBRUwsUUFBUSxFQUFFTSxNQUFNLEVBQUU7WUFDOURYLFlBQVksQ0FBQ1ksZUFBaUI7dUJBQ3ZCQTtvQkFDSDt3QkFBRUY7d0JBQWdCTDt3QkFBVU07b0JBQU87aUJBQ3RDO1lBQ0RILFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JWO1FBQ3BDO1FBRUFuQixPQUFPaUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUVoQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxjQUFjO1FBQ2hCbEMsT0FBT2lDLElBQUksQ0FBQyxlQUFlO1lBQUVFLFNBQVNkO1lBQVNlLFdBQVd6QjtZQUFrQk07UUFBVTtRQUN0RkssV0FBVztJQUNmO0lBRUEscUJBQ0ksOERBQUNlO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNGO3dCQUE4QkcsU0FBUyxJQUFNdEIsYUFBYUwsQ0FBQUEsMkJBQUFBLHFDQUFBQSxlQUFnQkcsR0FBRyxLQUFJO3dCQUFLc0IsV0FBVTs7MENBQzdGLDhEQUFDRztnQ0FBSUgsV0FBVTtnQ0FBeUJJLEtBQUs7Z0NBQTJDQyxHQUFHLEVBQUU5QiwyQkFBQUEscUNBQUFBLGVBQWdCK0IsS0FBSzs7Ozs7OzBDQUNsSCw4REFBQ0M7Z0NBQUtQLFdBQVU7MENBQVF6QiwyQkFBQUEscUNBQUFBLGVBQWdCK0IsS0FBSzs7Ozs7Ozt1QkFGdkMvQiwyQkFBQUEscUNBQUFBLGVBQWdCRyxHQUFHOzs7OztrQ0FJN0IsOERBQUN1QjtrQ0FBRzs7Ozs7O29CQUNIcEMsUUFBUTJDLEdBQUcsQ0FBQyxDQUFDQyxTQUFZdkMsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjUSxHQUFHLE1BQUsrQixPQUFPL0IsR0FBRyxrQkFDdEQsOERBQUNxQjs0QkFBcUJHLFNBQVMsSUFBTXRCLGFBQWE2QixPQUFPL0IsR0FBRzs0QkFBR3NCLFdBQVcsd0NBQTJGLE9BQW5EckIsY0FBYzhCLE9BQU8vQixHQUFHLElBQUk7OzhDQUMxSSw4REFBQ3lCO29DQUFJSCxXQUFVO29DQUF5QkksS0FBS0ssT0FBT0MsVUFBVSxJQUFJO29DQUEyQ0wsS0FBS0ksT0FBT0UsU0FBUzs7Ozs7OzhDQUNsSSw4REFBQ0o7b0NBQUtQLFdBQVU7O3dDQUFRUyxPQUFPRSxTQUFTO3dDQUFDO3dDQUFFRixPQUFPRyxRQUFROzs7Ozs7OzsyQkFGcERILE9BQU8vQixHQUFHOzs7Ozs7Ozs7OzswQkFRNUIsOERBQUNxQjtnQkFBSUMsV0FBVTs7a0NBRVgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVWZixlQUFldUIsR0FBRyxDQUFDLENBQUN6QixTQUFTOEIsb0JBQzFCLDhEQUFDZDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUE4QmpCLFFBQVFTLGNBQWM7Ozs7OztrREFDbkUsOERBQUNlO3dDQUFLUCxXQUFVO2tEQUF1Q2pCLFFBQVFVLE1BQU07Ozs7Ozs7K0JBRnZDb0I7Ozs7Ozs7Ozs7a0NBUzFDLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNjO2dDQUFNQyxNQUFLO2dDQUFPQyxPQUFPakM7Z0NBQVNrQyxVQUFVLENBQUNDLElBQU1sQyxXQUFXa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFHSSxhQUFZO2dDQUFvQnBCLFdBQVU7Ozs7OzswQ0FDMUgsOERBQUNxQjtnQ0FBT25CLFNBQVNOO2dDQUFhSSxXQUFVOzBDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9HO0dBeEZNcEM7O1FBQ2NILHdEQUFjQTtRQUNiQSx3REFBY0E7UUFDVkEsd0RBQWNBO1FBQ1ZBLHdEQUFjQTs7O0tBSnJDRztBQTBGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2NoYXQudHN4PzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCcsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuY29uc3QgQ2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCBtZW1iZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5NZW1iZXJzUmVkdWNlci5tZW1iZXJzKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvamVjdHNSZWR1Y2VyLnByb2plY3RzKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyLmN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5faWQgPT09ICAgY3VycmVudFByb2plY3RJZCkgfHwgbnVsbDtcblxuICAgIGludGVyZmFjZSBNZXNzYWdlIHtcbiAgICAgICAgbWVzc2FnZUNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgc2VuZGVySWQ/OiBzdHJpbmc7XG4gICAgICAgIHJlY2VpdmVySWQ/OiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RJZD86IHN0cmluZztcbiAgICAgICAgcHJvamVjdEdyb3VwSWQ/OiBzdHJpbmc7XG4gICAgICAgIHNlbnRBdD86IHN0cmluZ1xuICAgIH1cblxuICAgIGNvbnN0IFttZXNzYWdlVG8sIHNldE1lc3NhZ2VUb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlc1RvU2hvdyA9IG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5zZW5kZXJJZCA9PT0gbWVzc2FnZVRvKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChuZXdNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01lc3NhZ2UuLi4uLi4uLi5cIiwgbmV3TWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdwcml2YXRlX21lc3NhZ2UnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCB9KSA9PiB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIHsgbWVzc2FnZUNvbnRlbnQsIHNlbmRlcklkLCBzZW50QXQgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzLi4uLi4uLi5cIiwgbWVzc2FnZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pblByb2plY3QnLCB7fSlcblxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdE1lc3NhZ2UnLCB7IGNvbnRlbnQ6IG1lc3NhZ2UsIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCwgbWVzc2FnZVRvIH0pO1xuICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbFwiPlxuICAgICAgICAgICAgey8qIFNpZGViYXIgZm9yIG1lbWJlcnMgYW5kIGdyb3VwICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBiZy1ncmF5LTIwMCBwLTQgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxoMT5QUk9KRUNUUzwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2N1cnJlbnRQcm9qZWN0Py5faWR9IG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VUbyhjdXJyZW50UHJvamVjdD8uX2lkIHx8ICcnKX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17XCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gYWx0PXtjdXJyZW50UHJvamVjdD8udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57Y3VycmVudFByb2plY3Q/LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDE+TUVNQkVSUzwvaDE+XG4gICAgICAgICAgICAgICAge21lbWJlcnMubWFwKChtZW1iZXIpID0+IChsb2dnZWRJblVzZXI/Ll9pZCAhPT0gbWVtYmVyLl9pZCAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVtYmVyLl9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKG1lbWJlci5faWQpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXIgJHttZXNzYWdlVG8gPT09IG1lbWJlci5faWQgJiYgJ2JnLWdyZWVuLTMwMCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17bWVtYmVyLnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gYWx0PXttZW1iZXIuZmlyc3ROYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttZW1iZXIuZmlyc3ROYW1lfSB7bWVtYmVyLmxhc3ROYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENoYXQgQXJlYSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgYmctd2hpdGUgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgey8qIENoYXQgTWVzc2FnZXMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtMiBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBDaGF0IGJ1YmJsZXMgKi99XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlc1RvU2hvdy5tYXAoKG1lc3NhZ2UsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTJcIiBrZXkgPSB7aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2UubWVzc2FnZUNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1sLTIgc2VsZi1lbmRcIj57bWVzc2FnZS5zZW50QXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogSW5wdXQgZmllbGQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC0yIGJvcmRlciByb3VuZGVkLWxnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJtbC0yIHB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwidXNlQXBwU2VsZWN0b3IiLCJzb2NrZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJDaGF0IiwibWVtYmVycyIsInN0YXRlIiwiTWVtYmVyc1JlZHVjZXIiLCJwcm9qZWN0cyIsInByb2plY3RzUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0IiwiZmluZCIsInByb2plY3QiLCJfaWQiLCJtZXNzYWdlVG8iLCJzZXRNZXNzYWdlVG8iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlc1RvU2hvdyIsImZpbHRlciIsInNlbmRlcklkIiwib24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VDb250ZW50Iiwic2VudEF0IiwicHJldk1lc3NhZ2VzIiwiZW1pdCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInByb2plY3RJZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwic3BhbiIsIm1hcCIsIm1lbWJlciIsInByb2ZpbGVQaWMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlkeCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});