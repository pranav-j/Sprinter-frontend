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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const messagesToShow = messages.filter((message)=>message.senderId === messageTo || message.receiverId === messageTo);\n    // useEffect(() => {\n    //     socket.on('message', (newMessage) => {\n    //         // setMessages((prevMessages) => [...prevMessages, newMessage]);\n    //         console.log(\"newMessage.........\", newMessage);\n    //     });\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId, sentAt } = param;\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt\n                    }\n                ]);\n            console.log(\"messages........\", messages);\n        });\n        socket.emit(\"joinProject\", {\n            projectId: currentProjectId\n        });\n        socket.on(\"receiveMessageFromGroup\", (param)=>{\n            let { messageContent, senderId, sentAt, projectGroupId } = param;\n            console.log(\"Message received in GROUP.............\", messageContent);\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt\n                    }\n                ]);\n        });\n    }, []);\n    const sendMessage = ()=>{\n        if (message !== \"\") {\n            if (messageTo === currentProjectId) {\n                console.log(\"hehehehhe\");\n                socket.emit(\"sentMessageToGroup\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            } else {\n                socket.emit(\"chatMessage\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        {\n                            messageContent: message,\n                            receiverId: messageTo,\n                            senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                            sentAt: new Date().toISOString()\n                        }\n                    ]);\n                setMessage(\"\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === (currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) && \"bg-green-300 rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2 \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"justify-end\" : \"justify-start\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message.messageContent\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"xHhkdFZg3j2SouqdPv1eSn968oQ=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLGVBQWVULDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxtQkFBbUJaLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1RLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCUCxTQUFTUSxJQUFJLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsR0FBRyxLQUFPTCxxQkFBcUI7SUFXekYsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0wQixpQkFBaUJKLFNBQVNLLE1BQU0sQ0FBQyxDQUFDSCxVQUFZQSxRQUFRSSxRQUFRLEtBQUtSLGFBQWFJLFFBQVFLLFVBQVUsS0FBS1Q7SUFFN0csb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QywyRUFBMkU7SUFDM0UsMERBQTBEO0lBRTFELFVBQVU7SUFDVixVQUFVO0lBRVZyQixnREFBU0EsQ0FBQztRQUNOSSxPQUFPMkIsRUFBRSxDQUFDLG1CQUFtQjtnQkFBQyxFQUFFQyxjQUFjLEVBQUVILFFBQVEsRUFBRUksTUFBTSxFQUFFO1lBQzlEVCxZQUFZLENBQUNVLGVBQWlCO3VCQUN2QkE7b0JBQ0g7d0JBQUVGO3dCQUFnQkg7d0JBQVVJO29CQUFPO2lCQUN0QztZQUNERSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CYjtRQUNwQztRQUVBbkIsT0FBT2lDLElBQUksQ0FBQyxlQUFlO1lBQUVDLFdBQVd2QjtRQUFpQjtRQUV6RFgsT0FBTzJCLEVBQUUsQ0FBQywyQkFBMkI7Z0JBQUMsRUFBRUMsY0FBYyxFQUFFSCxRQUFRLEVBQUVJLE1BQU0sRUFBRU0sY0FBYyxFQUFFO1lBQ3RGSixRQUFRQyxHQUFHLENBQUMsMENBQTBDSjtZQUN0RFIsWUFBWSxDQUFDVSxlQUFpQjt1QkFDdkJBO29CQUNIO3dCQUFFRjt3QkFBZ0JIO3dCQUFVSTtvQkFBTztpQkFDdEM7UUFDTDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1PLGNBQWM7UUFDaEIsSUFBR2YsWUFBWSxJQUFJO1lBQ2YsSUFBR0osY0FBY04sa0JBQWtCO2dCQUMvQm9CLFFBQVFDLEdBQUcsQ0FBQztnQkFDWmhDLE9BQU9pQyxJQUFJLENBQUMsc0JBQXNCO29CQUFFSSxTQUFTaEI7b0JBQVNhLFdBQVd2QjtvQkFBa0JNO2dCQUFVO2dCQUM3RkcsWUFBWSxDQUFDVSxlQUFpQjsyQkFDdkJBO3dCQUNIOzRCQUFFRixnQkFBZ0JQOzRCQUFTSyxZQUFZVDs0QkFBV1EsUUFBUSxFQUFFakIseUJBQUFBLG1DQUFBQSxhQUFjUSxHQUFHOzRCQUFFYSxRQUFRLElBQUlTLE9BQU9DLFdBQVc7d0JBQUc7cUJBQ25IO2dCQUNEakIsV0FBVztZQUNmLE9BQU87Z0JBQ0h0QixPQUFPaUMsSUFBSSxDQUFDLGVBQWU7b0JBQUVJLFNBQVNoQjtvQkFBU2EsV0FBV3ZCO29CQUFrQk07Z0JBQVU7Z0JBQ3RGRyxZQUFZLENBQUNVLGVBQWlCOzJCQUN2QkE7d0JBQ0g7NEJBQUVGLGdCQUFnQlA7NEJBQVNLLFlBQVlUOzRCQUFXUSxRQUFRLEVBQUVqQix5QkFBQUEsbUNBQUFBLGFBQWNRLEdBQUc7NEJBQUVhLFFBQVEsSUFBSVMsT0FBT0MsV0FBVzt3QkFBRztxQkFDbkg7Z0JBQ0RqQixXQUFXO1lBQ2Y7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRjt3QkFBOEJHLFNBQVMsSUFBTXpCLGFBQWFMLENBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZ0JHLEdBQUcsS0FBSTt3QkFBS3lCLFdBQVcsd0NBQW9HLE9BQTVEeEIsZUFBY0osMkJBQUFBLHFDQUFBQSxlQUFnQkcsR0FBRyxLQUFJOzswQ0FDM0ssOERBQUM0QjtnQ0FBSUgsV0FBVTtnQ0FBeUJJLEtBQUs7Z0NBQTJDQyxHQUFHLEVBQUVqQywyQkFBQUEscUNBQUFBLGVBQWdCa0MsS0FBSzs7Ozs7OzBDQUNsSCw4REFBQ0M7Z0NBQUtQLFdBQVU7MENBQVE1QiwyQkFBQUEscUNBQUFBLGVBQWdCa0MsS0FBSzs7Ozs7Ozt1QkFGdkNsQywyQkFBQUEscUNBQUFBLGVBQWdCRyxHQUFHOzs7OztrQ0FJN0IsOERBQUMwQjtrQ0FBRzs7Ozs7O29CQUNIdkMsUUFBUThDLEdBQUcsQ0FBQyxDQUFDQyxTQUFZMUMsQ0FBQUEseUJBQUFBLG1DQUFBQSxhQUFjUSxHQUFHLE1BQUtrQyxPQUFPbEMsR0FBRyxrQkFDdEQsOERBQUN3Qjs0QkFBcUJHLFNBQVMsSUFBTXpCLGFBQWFnQyxPQUFPbEMsR0FBRzs0QkFBR3lCLFdBQVcsd0NBQTJGLE9BQW5EeEIsY0FBY2lDLE9BQU9sQyxHQUFHLElBQUk7OzhDQUMxSSw4REFBQzRCO29DQUFJSCxXQUFVO29DQUF5QkksS0FBS0ssT0FBT0MsVUFBVSxJQUFJO29DQUEyQ0wsS0FBS0ksT0FBT0UsU0FBUzs7Ozs7OzhDQUNsSSw4REFBQ0o7b0NBQUtQLFdBQVU7O3dDQUFRUyxPQUFPRSxTQUFTO3dDQUFDO3dDQUFFRixPQUFPRyxRQUFROzs7Ozs7OzsyQkFGcERILE9BQU9sQyxHQUFHOzs7Ozs7Ozs7OzswQkFRNUIsOERBQUN3QjtnQkFBSUMsV0FBVTs7a0NBRVgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUVWbEIsZUFBZTBCLEdBQUcsQ0FBQyxDQUFDNUIsU0FBU2lDLG9CQUMxQiw4REFBQ2Q7Z0NBQUlDLFdBQVcsYUFBc0YsT0FBekVwQixRQUFRSSxRQUFRLE1BQUtqQix5QkFBQUEsbUNBQUFBLGFBQWNRLEdBQUcsSUFBRyxnQkFBZ0I7O2tEQUNsRiw4REFBQ3dCO3dDQUFJQyxXQUFVO2tEQUE4QnBCLFFBQVFPLGNBQWM7Ozs7OztrREFDbkUsOERBQUNvQjt3Q0FBS1AsV0FBVTtrREFDWHBCLFFBQVFRLE1BQU0sWUFBWVMsT0FBT2pCLFFBQVFRLE1BQU0sQ0FBQzBCLGNBQWMsS0FBS2xDLFFBQVFRLE1BQU07Ozs7Ozs7K0JBSHNCeUI7Ozs7Ozs7Ozs7a0NBV3hILDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNlO2dDQUFNQyxNQUFLO2dDQUFPQyxPQUFPckM7Z0NBQVNzQyxVQUFVLENBQUNDLElBQU10QyxXQUFXc0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUFHSSxhQUFZO2dDQUFvQnJCLFdBQVU7Ozs7OzswQ0FDMUgsOERBQUNzQjtnQ0FBT3BCLFNBQVNQO2dDQUFhSyxXQUFVOzBDQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9HO0dBakhNdkM7O1FBQ2NILHdEQUFjQTtRQUNiQSx3REFBY0E7UUFDVkEsd0RBQWNBO1FBQ1ZBLHdEQUFjQTs7O0tBSnJDRztBQW1ITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2NoYXQudHN4PzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCcsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuY29uc3QgQ2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCBtZW1iZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5NZW1iZXJzUmVkdWNlci5tZW1iZXJzKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvamVjdHNSZWR1Y2VyLnByb2plY3RzKTtcbiAgICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyLmN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5faWQgPT09ICAgY3VycmVudFByb2plY3RJZCkgfHwgbnVsbDtcblxuICAgIGludGVyZmFjZSBNZXNzYWdlIHtcbiAgICAgICAgbWVzc2FnZUNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgc2VuZGVySWQ/OiBzdHJpbmc7XG4gICAgICAgIHJlY2VpdmVySWQ/OiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RJZD86IHN0cmluZztcbiAgICAgICAgcHJvamVjdEdyb3VwSWQ/OiBzdHJpbmc7XG4gICAgICAgIHNlbnRBdD86IHN0cmluZyB8IERhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgW21lc3NhZ2VUbywgc2V0TWVzc2FnZVRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VzVG9TaG93ID0gbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLnNlbmRlcklkID09PSBtZXNzYWdlVG8gfHwgbWVzc2FnZS5yZWNlaXZlcklkID09PSBtZXNzYWdlVG8pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc29ja2V0Lm9uKCdtZXNzYWdlJywgKG5ld01lc3NhZ2UpID0+IHtcbiAgICAvLyAgICAgICAgIC8vIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZS4uLi4uLi4uLlwiLCBuZXdNZXNzYWdlKTtcbiAgICAgICAgICAgIFxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXQub24oJ3ByaXZhdGVfbWVzc2FnZScsICh7IG1lc3NhZ2VDb250ZW50LCBzZW5kZXJJZCwgc2VudEF0IH0pID0+IHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgICAgICAgICAuLi5wcmV2TWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZXMuLi4uLi4uLlwiLCBtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luUHJvamVjdCcsIHsgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkIH0pO1xuXG4gICAgICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2VGcm9tR3JvdXAnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCwgcHJvamVjdEdyb3VwSWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHJlY2VpdmVkIGluIEdST1VQLi4uLi4uLi4uLi4uLlwiLCBtZXNzYWdlQ29udGVudCk7XG4gICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIHsgbWVzc2FnZUNvbnRlbnQsIHNlbmRlcklkLCBzZW50QXQgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2UgIT09ICcnKSB7XG4gICAgICAgICAgICBpZihtZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaGVoZWhoZVwiKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VudE1lc3NhZ2VUb0dyb3VwJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudDogbWVzc2FnZSwgcmVjZWl2ZXJJZDogbWVzc2FnZVRvLCBzZW5kZXJJZDogbG9nZ2VkSW5Vc2VyPy5faWQsIHNlbnRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsXCI+XG4gICAgICAgICAgICB7LyogU2lkZWJhciBmb3IgbWVtYmVycyBhbmQgZ3JvdXAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktMjAwIHAtNCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y3VycmVudFByb2plY3Q/Ll9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKGN1cnJlbnRQcm9qZWN0Py5faWQgfHwgJycpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXIgJHttZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0Py5faWQgJiYgJ2JnLWdyZWVuLTMwMCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e2N1cnJlbnRQcm9qZWN0Py50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPntjdXJyZW50UHJvamVjdD8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5NRU1CRVJTPC9oMT5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKGxvZ2dlZEluVXNlcj8uX2lkICE9PSBtZW1iZXIuX2lkICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8obWVtYmVyLl9pZCl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gbWVtYmVyLl9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXttZW1iZXIucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzVG9TaG93Lm1hcCgobWVzc2FnZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbWItMiAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGxvZ2dlZEluVXNlcj8uX2lkID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J31gfSBrZXkgPSB7aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2UubWVzc2FnZUNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1sLTIgc2VsZi1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VudEF0IGluc3RhbmNlb2YgRGF0ZSA/IG1lc3NhZ2Uuc2VudEF0LnRvTG9jYWxlU3RyaW5nKCkgOiBtZXNzYWdlLnNlbnRBdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBJbnB1dCBmaWVsZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci10IHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZS4uLlwiIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTIgYm9yZGVyIHJvdW5kZWQtbGdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZ1wiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJ1c2VBcHBTZWxlY3RvciIsInNvY2tldCIsIndpdGhDcmVkZW50aWFscyIsIkNoYXQiLCJtZW1iZXJzIiwic3RhdGUiLCJNZW1iZXJzUmVkdWNlciIsInByb2plY3RzIiwicHJvamVjdHNSZWR1Y2VyIiwibG9nZ2VkSW5Vc2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwiY3VycmVudFByb2plY3QiLCJmaW5kIiwicHJvamVjdCIsIl9pZCIsIm1lc3NhZ2VUbyIsInNldE1lc3NhZ2VUbyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzVG9TaG93IiwiZmlsdGVyIiwic2VuZGVySWQiLCJyZWNlaXZlcklkIiwib24iLCJtZXNzYWdlQ29udGVudCIsInNlbnRBdCIsInByZXZNZXNzYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwicHJvamVjdElkIiwicHJvamVjdEdyb3VwSWQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInNwYW4iLCJtYXAiLCJtZW1iZXIiLCJwcm9maWxlUGljIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZHgiLCJ0b0xvY2FsZVN0cmluZyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});