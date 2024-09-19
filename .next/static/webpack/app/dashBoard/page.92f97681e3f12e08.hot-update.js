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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const messagesToShow = messages.filter((message) => message.senderId === messageTo || message.receiverId === messageTo);\n    let messagesToShow;\n    if (messageTo === currentProjectId) {\n        messagesToShow = messages.filter((message)=>message.projectGroupId === messageTo || message.receiverId === messageTo);\n    } else {\n        messagesToShow = messages.filter((message)=>(message.senderId === messageTo || message.receiverId === messageTo) && !message.projectGroupId);\n    }\n    // useEffect(() => {\n    //     socket.on('private_message', ({ messageContent, senderId, sentAt }) => {\n    //         setMessages((prevMessages) => [\n    //             ...prevMessages,\n    //             { messageContent, senderId, sentAt }\n    //         ]);\n    //         console.log(\"messages........\", messages);\n    //     });\n    //     socket.emit('joinProject', { projectId: currentProjectId });\n    //     socket.on('receiveMessageFromGroup', ({ messageContent, senderId, sentAt, projectGroupId }) => {\n    //         console.log(\"Message received in GROUP.............\", messageContent);\n    //         setMessages((prevMessages) => [\n    //             ...prevMessages,\n    //             { messageContent, senderId, sentAt, projectGroupId }\n    //         ]);\n    //     })\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handlePrivateMessage = (newMessage)=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    newMessage\n                ]);\n        };\n        const handleGroupMessage = (groupMessage)=>{\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    groupMessage\n                ]);\n        };\n        socket.on(\"private_message\", handlePrivateMessage);\n        socket.on(\"receiveMessageFromGroup\", handleGroupMessage);\n        socket.emit(\"joinProject\", {\n            projectId: currentProjectId\n        });\n        return ()=>{\n            // Cleanup listeners\n            socket.off(\"private_message\", handlePrivateMessage);\n            socket.off(\"receiveMessageFromGroup\", handleGroupMessage);\n        };\n    }, [\n        currentProjectId\n    ]);\n    const sendMessage = ()=>{\n        if (message !== \"\") {\n            if (messageTo === currentProjectId) {\n                console.log(\"hehehehhe\");\n                socket.emit(\"sentMessageToGroup\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            } else {\n                socket.emit(\"chatMessage\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === (currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) && \"bg-green-300 rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2 \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"justify-end\" : \"justify-start\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message.messageContent\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 33\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 142,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"xHhkdFZg3j2SouqdPv1eSn968oQ=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLGVBQWVULDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxtQkFBbUJaLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1RLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCUCxTQUFTUSxJQUFJLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsR0FBRyxLQUFPTCxxQkFBcUI7SUFXekYsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXZDLDJIQUEySDtJQUMzSCxJQUFJMEI7SUFFSixJQUFHTixjQUFjTixrQkFBa0I7UUFDL0JZLGlCQUFpQkosU0FBU0ssTUFBTSxDQUFDLENBQUNILFVBQVlBLFFBQVFJLGNBQWMsS0FBS1IsYUFBYUksUUFBUUssVUFBVSxLQUFLVDtJQUNqSCxPQUFPO1FBQ0hNLGlCQUFpQkosU0FBU0ssTUFBTSxDQUFDLENBQUNILFVBQVksQ0FBQ0EsUUFBUU0sUUFBUSxLQUFLVixhQUFhSSxRQUFRSyxVQUFVLEtB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QWNBO1FBQ2JBLHdEQUFjQTtRQUNWQSx3REFBY0E7UUFDVkEsd0RBQWNBOzs7S0FKckNHO0FBNElOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3g/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvcmVkdXgvaG9va3MnO1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDMwJywge1xuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbn0pO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbWJlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLk1lbWJlcnNSZWR1Y2VyLm1lbWJlcnMpO1xuICAgIGNvbnN0IHByb2plY3RzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9qZWN0c1JlZHVjZXIucHJvamVjdHMpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Ll9pZCA9PT0gICBjdXJyZW50UHJvamVjdElkKSB8fCBudWxsO1xuXG4gICAgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICBtZXNzYWdlQ29udGVudDogc3RyaW5nO1xuICAgICAgICBzZW5kZXJJZD86IHN0cmluZztcbiAgICAgICAgcmVjZWl2ZXJJZD86IHN0cmluZztcbiAgICAgICAgcHJvamVjdElkPzogc3RyaW5nO1xuICAgICAgICBwcm9qZWN0R3JvdXBJZD86IHN0cmluZztcbiAgICAgICAgc2VudEF0Pzogc3RyaW5nIHwgRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBbbWVzc2FnZVRvLCBzZXRNZXNzYWdlVG9dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TWVzc2FnZVtdPihbXSk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy8gY29uc3QgbWVzc2FnZXNUb1Nob3cgPSBtZXNzYWdlcy5maWx0ZXIoKG1lc3NhZ2UpID0+IG1lc3NhZ2Uuc2VuZGVySWQgPT09IG1lc3NhZ2VUbyB8fCBtZXNzYWdlLnJlY2VpdmVySWQgPT09IG1lc3NhZ2VUbyk7XG4gICAgbGV0IG1lc3NhZ2VzVG9TaG93O1xuXG4gICAgaWYobWVzc2FnZVRvID09PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgIG1lc3NhZ2VzVG9TaG93ID0gbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLnByb2plY3RHcm91cElkID09PSBtZXNzYWdlVG8gfHwgbWVzc2FnZS5yZWNlaXZlcklkID09PSBtZXNzYWdlVG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VzVG9TaG93ID0gbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiAobWVzc2FnZS5zZW5kZXJJZCA9PT0gbWVzc2FnZVRvIHx8IG1lc3NhZ2UucmVjZWl2ZXJJZCA9PT0gbWVzc2FnZVRvKSAmJiAhbWVzc2FnZS5wcm9qZWN0R3JvdXBJZCk7XG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc29ja2V0Lm9uKCdwcml2YXRlX21lc3NhZ2UnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCB9KSA9PiB7XG4gICAgLy8gICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgLy8gICAgICAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgIC8vICAgICAgICAgICAgIHsgbWVzc2FnZUNvbnRlbnQsIHNlbmRlcklkLCBzZW50QXQgfVxuICAgIC8vICAgICAgICAgXSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VzLi4uLi4uLi5cIiwgbWVzc2FnZXMpO1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICBzb2NrZXQuZW1pdCgnam9pblByb2plY3QnLCB7IHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCB9KTtcblxuICAgIC8vICAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlRnJvbUdyb3VwJywgKHsgbWVzc2FnZUNvbnRlbnQsIHNlbmRlcklkLCBzZW50QXQsIHByb2plY3RHcm91cElkIH0pID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSByZWNlaXZlZCBpbiBHUk9VUC4uLi4uLi4uLi4uLi5cIiwgbWVzc2FnZUNvbnRlbnQpO1xuICAgIC8vICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gW1xuICAgIC8vICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAvLyAgICAgICAgICAgICB7IG1lc3NhZ2VDb250ZW50LCBzZW5kZXJJZCwgc2VudEF0LCBwcm9qZWN0R3JvdXBJZCB9XG4gICAgLy8gICAgICAgICBdKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVQcml2YXRlTWVzc2FnZSA9IChuZXdNZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZUdyb3VwTWVzc2FnZSA9IChncm91cE1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGdyb3VwTWVzc2FnZV0pO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBzb2NrZXQub24oJ3ByaXZhdGVfbWVzc2FnZScsIGhhbmRsZVByaXZhdGVNZXNzYWdlKTtcbiAgICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZUZyb21Hcm91cCcsIGhhbmRsZUdyb3VwTWVzc2FnZSk7XG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luUHJvamVjdCcsIHsgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2xlYW51cCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3ByaXZhdGVfbWVzc2FnZScsIGhhbmRsZVByaXZhdGVNZXNzYWdlKTtcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ3JlY2VpdmVNZXNzYWdlRnJvbUdyb3VwJywgaGFuZGxlR3JvdXBNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbY3VycmVudFByb2plY3RJZF0pO1xuICAgIFxuICAgIFxuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2UgIT09ICcnKSB7XG4gICAgICAgICAgICBpZihtZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaGVoZWhoZVwiKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VudE1lc3NhZ2VUb0dyb3VwJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsXCI+XG4gICAgICAgICAgICB7LyogU2lkZWJhciBmb3IgbWVtYmVycyBhbmQgZ3JvdXAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktMjAwIHAtNCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y3VycmVudFByb2plY3Q/Ll9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKGN1cnJlbnRQcm9qZWN0Py5faWQgfHwgJycpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXIgJHttZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0Py5faWQgJiYgJ2JnLWdyZWVuLTMwMCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e2N1cnJlbnRQcm9qZWN0Py50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPntjdXJyZW50UHJvamVjdD8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5NRU1CRVJTPC9oMT5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKGxvZ2dlZEluVXNlcj8uX2lkICE9PSBtZW1iZXIuX2lkICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8obWVtYmVyLl9pZCl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gbWVtYmVyLl9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXttZW1iZXIucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzVG9TaG93Lm1hcCgobWVzc2FnZSwgaWR4KSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBtYi0yICR7bWVzc2FnZS5zZW5kZXJJZCA9PT0gbG9nZ2VkSW5Vc2VyPy5faWQgPyAnanVzdGlmeS1lbmQnIDogJ2p1c3RpZnktc3RhcnQnfWB9IGtleSA9IHtpZHh9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2UubWVzc2FnZUNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbWwtMiBzZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnNlbnRBdCBpbnN0YW5jZW9mIERhdGUgPyBtZXNzYWdlLnNlbnRBdC50b0xvY2FsZVN0cmluZygpIDogbWVzc2FnZS5zZW50QXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogSW5wdXQgZmllbGQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC0yIGJvcmRlciByb3VuZGVkLWxnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJtbC0yIHB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwidXNlQXBwU2VsZWN0b3IiLCJzb2NrZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJDaGF0IiwibWVtYmVycyIsInN0YXRlIiwiTWVtYmVyc1JlZHVjZXIiLCJwcm9qZWN0cyIsInByb2plY3RzUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0IiwiZmluZCIsInByb2plY3QiLCJfaWQiLCJtZXNzYWdlVG8iLCJzZXRNZXNzYWdlVG8iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlc1RvU2hvdyIsImZpbHRlciIsInByb2plY3RHcm91cElkIiwicmVjZWl2ZXJJZCIsInNlbmRlcklkIiwiaGFuZGxlUHJpdmF0ZU1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwicHJldk1lc3NhZ2VzIiwiaGFuZGxlR3JvdXBNZXNzYWdlIiwiZ3JvdXBNZXNzYWdlIiwib24iLCJlbWl0IiwicHJvamVjdElkIiwib2ZmIiwic2VuZE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm1lc3NhZ2VDb250ZW50Iiwic2VudEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJzcGFuIiwibWFwIiwibWVtYmVyIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaWR4IiwidG9Mb2NhbGVTdHJpbmciLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});