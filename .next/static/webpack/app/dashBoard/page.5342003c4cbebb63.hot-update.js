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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const messagesToShow = messages.filter((message)=>message.senderId === messageTo || message.receiverId === messageTo);\n    if (mes) // useEffect(() => {\n    //     socket.on('message', (newMessage) => {\n    //         // setMessages((prevMessages) => [...prevMessages, newMessage]);\n    //         console.log(\"newMessage.........\", newMessage);\n    //     });\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId, sentAt } = param;\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt\n                    }\n                ]);\n            console.log(\"messages........\", messages);\n        });\n        socket.emit(\"joinProject\", {\n            projectId: currentProjectId\n        });\n        socket.on(\"receiveMessageFromGroup\", (param)=>{\n            let { messageContent, senderId, sentAt, projectGroupId } = param;\n            console.log(\"Message received in GROUP.............\", messageContent);\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt,\n                        projectGroupId\n                    }\n                ]);\n        });\n    }, []);\n    const sendMessage = ()=>{\n        if (message !== \"\") {\n            if (messageTo === currentProjectId) {\n                console.log(\"hehehehhe\");\n                socket.emit(\"sentMessageToGroup\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            } else {\n                socket.emit(\"chatMessage\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === (currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) && \"bg-green-300 rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2 \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"justify-end\" : \"justify-start\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message.messageContent\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"xHhkdFZg3j2SouqdPv1eSn968oQ=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLGVBQWVULDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxtQkFBbUJaLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1RLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCUCxTQUFTUSxJQUFJLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsR0FBRyxLQUFPTCxxQkFBcUI7SUFXekYsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0wQixpQkFBaUJKLFNBQVNLLE1BQU0sQ0FBQyxDQUFDSCxVQUFZQSxRQUFRSSxRQUFRLEtBQUtSLGFBQWFJLFFBQVFLLFVBQVUsS0FBS1Q7SUFFN0csSUFBR1UsS0FDSCxvQkFBb0I7SUFDcEIsNkNBQTZDO0lBQzdDLDJFQUEyRTtJQUMzRSwwREFBMEQ7SUFFMUQsVUFBVTtJQUNWLFVBQVU7SUFFVi9CLGdEQUFTQSxDQUFDO1FBQ05JLE9BQU80QixFQUFFLENBQUMsbUJBQW1CO2dCQUFD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UTs7Ozs7Ozs7MkJBRnBESCxPQUFPbkMsR0FBRzs7Ozs7Ozs7Ozs7MEJBUTVCLDhEQUFDeUI7Z0JBQUlDLFdBQVU7O2tDQUVYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FFVm5CLGVBQWUyQixHQUFHLENBQUMsQ0FBQzdCLFNBQVNrQyxvQkFDMUIsOERBQUNkO2dDQUFJQyxXQUFXLGFBQXNGLE9BQXpFckIsUUFBUUksUUFBUSxNQUFLakIseUJBQUFBLG1DQUFBQSxhQUFjUSxHQUFHLElBQUcsZ0JBQWdCOztrREFDbEYsOERBQUN5Qjt3Q0FBSUMsV0FBVTtrREFBOEJyQixRQUFRUSxjQUFjOzs7Ozs7a0RBQ25FLDhEQUFDb0I7d0NBQUtQLFdBQVU7a0RBQ1hyQixRQUFRUyxNQUFNLFlBQVlTLE9BQU9sQixRQUFRUyxNQUFNLENBQUMwQixjQUFjLEtBQUtuQyxRQUFRUyxNQUFNOzs7Ozs7OytCQUhzQnlCOzs7Ozs7Ozs7O2tDQVd4SCw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDZTtnQ0FBTUMsTUFBSztnQ0FBT0MsT0FBT3RDO2dDQUFTdUMsVUFBVSxDQUFDQyxJQUFNdkMsV0FBV3VDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBR0ksYUFBWTtnQ0FBb0JyQixXQUFVOzs7Ozs7MENBQzFILDhEQUFDc0I7Z0NBQU9wQixTQUFTUDtnQ0FBYUssV0FBVTswQ0FBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRztHQWxITXhDOztRQUNjSCx3REFBY0E7UUFDYkEsd0RBQWNBO1FBQ1ZBLHdEQUFjQTtRQUNWQSx3REFBY0E7OztLQUpyQ0c7QUFvSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9jaGF0LnRzeD85MDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMzAnLCB7XG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxufSk7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVtYmVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuTWVtYmVyc1JlZHVjZXIubWVtYmVycyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2plY3RzUmVkdWNlci5wcm9qZWN0cyk7XG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuX2lkID09PSAgIGN1cnJlbnRQcm9qZWN0SWQpIHx8IG51bGw7XG5cbiAgICBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gICAgICAgIG1lc3NhZ2VDb250ZW50OiBzdHJpbmc7XG4gICAgICAgIHNlbmRlcklkPzogc3RyaW5nO1xuICAgICAgICByZWNlaXZlcklkPzogc3RyaW5nO1xuICAgICAgICBwcm9qZWN0SWQ/OiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RHcm91cElkPzogc3RyaW5nO1xuICAgICAgICBzZW50QXQ/OiBzdHJpbmcgfCBEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IFttZXNzYWdlVG8sIHNldE1lc3NhZ2VUb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxNZXNzYWdlW10+KFtdKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlc1RvU2hvdyA9IG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5zZW5kZXJJZCA9PT0gbWVzc2FnZVRvIHx8IG1lc3NhZ2UucmVjZWl2ZXJJZCA9PT0gbWVzc2FnZVRvKTtcblxuICAgIGlmKG1lcylcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAobmV3TWVzc2FnZSkgPT4ge1xuICAgIC8vICAgICAgICAgLy8gc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbmV3TWVzc2FnZV0pO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJuZXdNZXNzYWdlLi4uLi4uLi4uXCIsIG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvY2tldC5vbigncHJpdmF0ZV9tZXNzYWdlJywgKHsgbWVzc2FnZUNvbnRlbnQsIHNlbmRlcklkLCBzZW50QXQgfSkgPT4ge1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gW1xuICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2VDb250ZW50LCBzZW5kZXJJZCwgc2VudEF0IH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlcy4uLi4uLi4uXCIsIG1lc3NhZ2VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0LmVtaXQoJ2pvaW5Qcm9qZWN0JywgeyBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQgfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZUZyb21Hcm91cCcsICh7IG1lc3NhZ2VDb250ZW50LCBzZW5kZXJJZCwgc2VudEF0LCBwcm9qZWN0R3JvdXBJZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgcmVjZWl2ZWQgaW4gR1JPVVAuLi4uLi4uLi4uLi4uXCIsIG1lc3NhZ2VDb250ZW50KTtcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgICAgICAgICAuLi5wcmV2TWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCwgcHJvamVjdEdyb3VwSWQgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2UgIT09ICcnKSB7XG4gICAgICAgICAgICBpZihtZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaGVoZWhoZVwiKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VudE1lc3NhZ2VUb0dyb3VwJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsXCI+XG4gICAgICAgICAgICB7LyogU2lkZWJhciBmb3IgbWVtYmVycyBhbmQgZ3JvdXAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktMjAwIHAtNCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y3VycmVudFByb2plY3Q/Ll9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKGN1cnJlbnRQcm9qZWN0Py5faWQgfHwgJycpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXIgJHttZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0Py5faWQgJiYgJ2JnLWdyZWVuLTMwMCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e2N1cnJlbnRQcm9qZWN0Py50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPntjdXJyZW50UHJvamVjdD8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5NRU1CRVJTPC9oMT5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKGxvZ2dlZEluVXNlcj8uX2lkICE9PSBtZW1iZXIuX2lkICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8obWVtYmVyLl9pZCl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gbWVtYmVyLl9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXttZW1iZXIucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzVG9TaG93Lm1hcCgobWVzc2FnZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbWItMiAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGxvZ2dlZEluVXNlcj8uX2lkID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J31gfSBrZXkgPSB7aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2UubWVzc2FnZUNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1sLTIgc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VudEF0IGluc3RhbmNlb2YgRGF0ZSA/IG1lc3NhZ2Uuc2VudEF0LnRvTG9jYWxlU3RyaW5nKCkgOiBtZXNzYWdlLnNlbnRBdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBJbnB1dCBmaWVsZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTIgYm9yZGVyIHJvdW5kZWQtbGdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VBcHBTZWxlY3RvciIsInNvY2tldCIsIndpdGhDcmVkZW50aWFscyIsIkNoYXQiLCJtZW1iZXJzIiwic3RhdGUiLCJNZW1iZXJzUmVkdWNlciIsInByb2plY3RzIiwicHJvamVjdHNSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwiY3VycmVudFByb2plY3QiLCJmaW5kIiwicHJvamVjdCIsIl9pZCIsIm1lc3NhZ2VUbyIsInNldE1lc3NhZ2VUbyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzVG9TaG93IiwiZmlsdGVyIiwic2VuZGVySWQiLCJyZWNlaXZlcklkIiwibWVzIiwib24iLCJtZXNzYWdlQ29udGVudCIsInNlbnRBdCIsInByZXZNZXNzYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwicHJvamVjdElkIiwicHJvamVjdEdyb3VwSWQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInNwYW4iLCJtYXAiLCJtZW1iZXIiLCJwcm9maWxlUGljIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZHgiLCJ0b0xvY2FsZVN0cmluZyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});