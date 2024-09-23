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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/chat/chatSlice */ \"(app-pages-browser)/./redux/slices/chat/chatSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n// const socket = io('http://localhost:3030', {\n//     withCredentials: true,\n// });\nconst Chat = (param)=>{\n    let { socket } = param;\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const messagez = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.chatReducer.messages);\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const messagesToShow = messages.filter((message) => message.senderId === messageTo || message.receiverId === messageTo);\n    let messagesToShow;\n    if (messageTo === currentProjectId) {\n        messagesToShow = messagez.filter((message)=>message.projectGroupId === messageTo || message.receiverId === messageTo);\n    } else {\n        messagesToShow = messagez.filter((message)=>(message.senderId === messageTo || message.receiverId === messageTo) && !message.projectGroupId);\n    }\n    const handleOldMessage = (oldMessages)=>{\n        // setMessages((prevMessages) => [...prevMessages, ...oldMessages]);\n        dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addOldMessages)(oldMessages));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (messageTo === currentProjectId) {\n            socket.emit(\"loadOldMessages\", {\n                projectGroupId: currentProjectId\n            });\n        } else {\n            socket.emit(\"loadOldMessages\", {\n                senderId: messageTo\n            });\n        }\n        socket.on(\"loadOldMessages\", handleOldMessage);\n        return ()=>{\n            socket.off(\"loadOldMessages\", handleOldMessage);\n        };\n    }, [\n        messageTo\n    ]);\n    const sendMessage = ()=>{\n        if (message !== \"\") {\n            const messageWithMetadata = {\n                messageContent: message,\n                receiverId: messageTo,\n                senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                sentAt: new Date().toISOString()\n            };\n            if (messageTo === currentProjectId) {\n                console.log(\"hehehehhe\");\n                socket.emit(\"sentMessageToGroup\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addNewMessage)(messageWithMetadata));\n                setMessage(\"\");\n            } else {\n                socket.emit(\"chatMessage\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addNewMessage)(messageWithMetadata));\n                setMessage(\"\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === (currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) && \"bg-green-300 rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>{\n                            const sender = members.find((member)=>member._id === message.senderId);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mb-2 \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"items-end\" : \"items-start\"),\n                                children: [\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== message.senderId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        className: \"text-sm font-semibold text-gray-700\",\n                                        children: [\n                                            sender === null || sender === void 0 ? void 0 : sender.firstName,\n                                            \" \",\n                                            sender === null || sender === void 0 ? void 0 : sender.lastName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 41\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg flex \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"justify-end\" : \"justify-start\", \" items-center\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: message.messageContent\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs text-gray-500 ml-2 self-end\",\n                                                children: message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 33\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"SnoFJYLg0CUuArlgs2qD2P0sTsY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFFWTtBQUdlO0FBTTlFLCtDQUErQztBQUMvQyw2QkFBNkI7QUFDN0IsTUFBTTtBQUVOLE1BQU1PLE9BQU87UUFBQyxFQUFFQyxNQUFNLEVBQWE7O0lBQy9CLE1BQU1DLFVBQVVOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsT0FBTztJQUN0RSxNQUFNRyxXQUFXVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxlQUFlLENBQUNELFFBQVE7SUFDekUsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBQ3JFLE1BQU1DLG1CQUFtQmQsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTVEsdUJBQXVCLENBQUNELGdCQUFnQjtJQUNqRyxNQUFNRSxpQkFBaUJQLFNBQVNRLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxHQUFHLEtBQU9MLHFCQUFxQjtJQUV6RixNQUFNTSxXQUFXbkIsNERBQWNBO0lBVy9CLE1BQU1vQixXQUFXckIsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTWUsV0FBVyxDQUFDQyxRQUFRO0lBRXJFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMkIsU0FBU0MsV0FBVyxHQUFHNUIsK0NBQVFBLENBQUM7SUFFdkMsMkhBQTJIO0lBQzNILElBQUk2QjtJQUVKLElBQUdKLGNBQWNWLGtCQUFrQjtRQUMvQmMsaUJBQWlCUCxTQUFTUSxNQUFNLENBQUMsQ0FBQ0gsVUFBWUEsUUFBUUksY0FBYyxLQUFLTixhQUFhRSxRQUFRSyxVQUFVLEtBQUtQO0lBQ2pILE9BQU87UUFDSEksaUJBQWlCUCxTQUFTUSxNQUFNLENBQUMsQ0FBQ0gsVUFBWSxD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QSx3REFBY0E7UUFDVkEsd0RBQWNBO1FBR3RCQyx3REFBY0E7UUFXZEQsd0RBQWNBOzs7S0FsQjdCSTtBQXVITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2NoYXQudHN4PzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XG5cbmltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7IC8vIGltcG9ydCBTb2NrZXQgdHlwZVxuaW1wb3J0IHsgYWRkTmV3TWVzc2FnZSwgYWRkT2xkTWVzc2FnZXMgfSBmcm9tICdAL3JlZHV4L3NsaWNlcy9jaGF0L2NoYXRTbGljZSc7XG5cbmludGVyZmFjZSBDaGF0UHJvcHMge1xuICAgIHNvY2tldDogU29ja2V0OyAvLyBkZWZpbmUgdGhlIHR5cGUgZm9yIHRoZSBzb2NrZXQgcHJvcFxufVxuXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDMwJywge1xuLy8gICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbi8vIH0pO1xuXG5jb25zdCBDaGF0ID0gKHsgc29ja2V0IH06IENoYXRQcm9wcykgPT4ge1xuICAgIGNvbnN0IG1lbWJlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLk1lbWJlcnNSZWR1Y2VyLm1lbWJlcnMpO1xuICAgIGNvbnN0IHByb2plY3RzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9qZWN0c1JlZHVjZXIucHJvamVjdHMpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Ll9pZCA9PT0gICBjdXJyZW50UHJvamVjdElkKSB8fCBudWxsO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICBtZXNzYWdlQ29udGVudDogc3RyaW5nO1xuICAgICAgICBzZW5kZXJJZD86IHN0cmluZztcbiAgICAgICAgcmVjZWl2ZXJJZD86IHN0cmluZztcbiAgICAgICAgcHJvamVjdElkPzogc3RyaW5nO1xuICAgICAgICBwcm9qZWN0R3JvdXBJZD86IHN0cmluZztcbiAgICAgICAgc2VudEF0Pzogc3RyaW5nIHwgRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdleiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2hhdFJlZHVjZXIubWVzc2FnZXMpO1xuXG4gICAgY29uc3QgW21lc3NhZ2VUbywgc2V0TWVzc2FnZVRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvLyBjb25zdCBtZXNzYWdlc1RvU2hvdyA9IG1lc3NhZ2VzLmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5zZW5kZXJJZCA9PT0gbWVzc2FnZVRvIHx8IG1lc3NhZ2UucmVjZWl2ZXJJZCA9PT0gbWVzc2FnZVRvKTtcbiAgICBsZXQgbWVzc2FnZXNUb1Nob3c7XG5cbiAgICBpZihtZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICAgICAgbWVzc2FnZXNUb1Nob3cgPSBtZXNzYWdlei5maWx0ZXIoKG1lc3NhZ2UpID0+IG1lc3NhZ2UucHJvamVjdEdyb3VwSWQgPT09IG1lc3NhZ2VUbyB8fCBtZXNzYWdlLnJlY2VpdmVySWQgPT09IG1lc3NhZ2VUbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXNUb1Nob3cgPSBtZXNzYWdlei5maWx0ZXIoKG1lc3NhZ2UpID0+IChtZXNzYWdlLnNlbmRlcklkID09PSBtZXNzYWdlVG8gfHwgbWVzc2FnZS5yZWNlaXZlcklkID09PSBtZXNzYWdlVG8pICYmICFtZXNzYWdlLnByb2plY3RHcm91cElkKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVPbGRNZXNzYWdlID0gKG9sZE1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHtcbiAgICAgICAgLy8gc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgLi4ub2xkTWVzc2FnZXNdKTtcbiAgICAgICAgZGlzcGF0Y2goYWRkT2xkTWVzc2FnZXMob2xkTWVzc2FnZXMpKTtcbiAgICB9O1xuICAgIFxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2VUbyA9PT0gY3VycmVudFByb2plY3RJZCkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRPbGRNZXNzYWdlcycsIHsgcHJvamVjdEdyb3VwSWQ6IGN1cnJlbnRQcm9qZWN0SWR9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdsb2FkT2xkTWVzc2FnZXMnLCB7IHNlbmRlcklkOiBtZXNzYWdlVG99KVxuICAgICAgICB9XG4gICAgICAgIHNvY2tldC5vbignbG9hZE9sZE1lc3NhZ2VzJywgaGFuZGxlT2xkTWVzc2FnZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdsb2FkT2xkTWVzc2FnZXMnLCBoYW5kbGVPbGRNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbbWVzc2FnZVRvXSk7XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgaWYobWVzc2FnZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaXRoTWV0YWRhdGEgPSB7IG1lc3NhZ2VDb250ZW50OiBtZXNzYWdlLCByZWNlaXZlcklkOiBtZXNzYWdlVG8sIHNlbmRlcklkOiBsb2dnZWRJblVzZXI/Ll9pZCwgc2VudEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfTtcbiAgICAgICAgICAgIGlmKG1lc3NhZ2VUbyA9PT0gY3VycmVudFByb2plY3RJZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVoZWhlaGhlXCIpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzZW50TWVzc2FnZVRvR3JvdXAnLCB7IGNvbnRlbnQ6IG1lc3NhZ2UsIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCwgbWVzc2FnZVRvIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZE5ld01lc3NhZ2UobWVzc2FnZVdpdGhNZXRhZGF0YSkpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnY2hhdE1lc3NhZ2UnLCB7IGNvbnRlbnQ6IG1lc3NhZ2UsIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCwgbWVzc2FnZVRvIH0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZE5ld01lc3NhZ2UobWVzc2FnZVdpdGhNZXRhZGF0YSkpO1xuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBTaWRlYmFyIGZvciBtZW1iZXJzIGFuZCBncm91cCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYmctZ3JheS0yMDAgcC00IG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjdXJyZW50UHJvamVjdD8uX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8oY3VycmVudFByb2plY3Q/Ll9pZCB8fCAnJyl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gY3VycmVudFByb2plY3Q/Ll9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e1wiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17Y3VycmVudFByb2plY3Q/LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e2N1cnJlbnRQcm9qZWN0Py50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1FTUJFUlM8L2gxPlxuICAgICAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAobG9nZ2VkSW5Vc2VyPy5faWQgIT09IG1lbWJlci5faWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbWJlci5faWR9IG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VUbyhtZW1iZXIuX2lkKX0gY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyICR7bWVzc2FnZVRvID09PSBtZW1iZXIuX2lkICYmICdiZy1ncmVlbi0zMDAgcm91bmRlZCd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e21lbWJlci5wcm9maWxlUGljIHx8IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17bWVtYmVyLmZpcnN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bWVtYmVyLmZpcnN0TmFtZX0ge21lbWJlci5sYXN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDaGF0IEFyZWEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy80IGJnLXdoaXRlIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHsvKiBDaGF0IE1lc3NhZ2VzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBwLTIgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogQ2hhdCBidWJibGVzICovfVxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXNUb1Nob3cubWFwKChtZXNzYWdlLCBpZHgpID0+IHsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VuZGVyID0gbWVtYmVycy5maW5kKChtZW1iZXIpID0+IG1lbWJlci5faWQgPT09IG1lc3NhZ2Uuc2VuZGVySWQpICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBtYi0yICR7bWVzc2FnZS5zZW5kZXJJZCA9PT0gbG9nZ2VkSW5Vc2VyPy5faWQgPyAnaXRlbXMtZW5kJyA6ICdpdGVtcy1zdGFydCd9YH0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlcj8uX2lkICE9PSBtZXNzYWdlLnNlbmRlcklkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+e3NlbmRlcj8uZmlyc3ROYW1lfSB7c2VuZGVyPy5sYXN0TmFtZX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiZy1ibHVlLTIwMCBwLTIgcm91bmRlZC1sZyBmbGV4ICR7bWVzc2FnZS5zZW5kZXJJZCA9PT0gbG9nZ2VkSW5Vc2VyPy5faWQgPyAnanVzdGlmeS1lbmQnIDogJ2p1c3RpZnktc3RhcnQnfSBpdGVtcy1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlLm1lc3NhZ2VDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtbC0yIHNlbGYtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlLnNlbnRBdCBpbnN0YW5jZW9mIERhdGUgPyBtZXNzYWdlLnNlbnRBdC50b0xvY2FsZVN0cmluZygpIDogbWVzc2FnZS5zZW50QXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogSW5wdXQgZmllbGQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItdCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC0yIGJvcmRlciByb3VuZGVkLWxnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfSBjbGFzc05hbWU9XCJtbC0yIHB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJhZGROZXdNZXNzYWdlIiwiYWRkT2xkTWVzc2FnZXMiLCJDaGF0Iiwic29ja2V0IiwibWVtYmVycyIsInN0YXRlIiwiTWVtYmVyc1JlZHVjZXIiLCJwcm9qZWN0cyIsInByb2plY3RzUmVkdWNlciIsImxvZ2dlZEluVXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImN1cnJlbnRQcm9qZWN0IiwiZmluZCIsInByb2plY3QiLCJfaWQiLCJkaXNwYXRjaCIsIm1lc3NhZ2V6IiwiY2hhdFJlZHVjZXIiLCJtZXNzYWdlcyIsIm1lc3NhZ2VUbyIsInNldE1lc3NhZ2VUbyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXNUb1Nob3ciLCJmaWx0ZXIiLCJwcm9qZWN0R3JvdXBJZCIsInJlY2VpdmVySWQiLCJzZW5kZXJJZCIsImhhbmRsZU9sZE1lc3NhZ2UiLCJvbGRNZXNzYWdlcyIsImVtaXQiLCJvbiIsIm9mZiIsInNlbmRNZXNzYWdlIiwibWVzc2FnZVdpdGhNZXRhZGF0YSIsIm1lc3NhZ2VDb250ZW50Iiwic2VudEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJwcm9qZWN0SWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInNwYW4iLCJtYXAiLCJtZW1iZXIiLCJwcm9maWxlUGljIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZHgiLCJzZW5kZXIiLCJzbWFsbCIsInRvTG9jYWxlU3RyaW5nIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});