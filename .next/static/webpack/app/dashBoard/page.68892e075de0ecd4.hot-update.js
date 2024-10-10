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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/chat/chatSlice */ \"(app-pages-browser)/./redux/slices/chat/chatSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n// const socket = io('${process.env.NEXT_PUBLIC_BASE_URL}', {\n//     withCredentials: true,\n// });\nconst Chat = (param)=>{\n    let { socket } = param;\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const messagez = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.chatReducer.messages);\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const messagesToShow = messages.filter((message) => message.senderId === messageTo || message.receiverId === messageTo);\n    let messagesToShow;\n    if (messageTo === currentProjectId) {\n        messagesToShow = messagez.filter((message)=>message.projectGroupId === messageTo || message.receiverId === messageTo);\n    } else {\n        messagesToShow = messagez.filter((message)=>(message.senderId === messageTo || message.receiverId === messageTo) && !message.projectGroupId);\n    }\n    const handleOldMessage = (oldMessages)=>{\n        // setMessages((prevMessages) => [...prevMessages, ...oldMessages]);\n        dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addOldMessages)(oldMessages));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (messageTo === currentProjectId) {\n            socket.emit(\"loadOldMessages\", {\n                projectGroupId: currentProjectId\n            });\n        } else {\n            socket.emit(\"loadOldMessages\", {\n                senderId: messageTo\n            });\n        }\n        socket.on(\"loadOldMessages\", handleOldMessage);\n        return ()=>{\n            socket.off(\"loadOldMessages\", handleOldMessage);\n        };\n    }, [\n        messageTo\n    ]);\n    const sendMessage = ()=>{\n        if (message !== \"\") {\n            const messageWithMetadata = {\n                messageContent: message,\n                receiverId: messageTo,\n                senderId: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id,\n                sentAt: new Date().toISOString()\n            };\n            if (messageTo === currentProjectId) {\n                console.log(\"hehehehhe\");\n                socket.emit(\"sentMessageToGroup\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addNewMessage)(messageWithMetadata));\n                setMessage(\"\");\n            } else {\n                socket.emit(\"chatMessage\", {\n                    content: message,\n                    projectId: currentProjectId,\n                    messageTo\n                });\n                dispatch((0,_redux_slices_chat_chatSlice__WEBPACK_IMPORTED_MODULE_3__.addNewMessage)(messageWithMetadata));\n                setMessage(\"\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === (currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) && \"bg-green-300 rounded\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>{\n                            const sender = members.find((member)=>member._id === message.senderId);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col mb-2 \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"items-end\" : \"items-start\"),\n                                children: [\n                                    (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== message.senderId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        className: \"text-sm font-semibold text-gray-700\",\n                                        children: [\n                                            sender === null || sender === void 0 ? void 0 : sender.firstName,\n                                            \" \",\n                                            sender === null || sender === void 0 ? void 0 : sender.lastName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 41\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg flex \".concat(message.senderId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) ? \"justify-end\" : \"justify-start\", \" items-center\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: message.messageContent\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-xs text-gray-500 ml-2 self-end\",\n                                                children: message.sentAt instanceof Date ? message.sentAt.toLocaleString() : message.sentAt\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 33\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"SnoFJYLg0CUuArlgs2qD2P0sTsY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFFWTtBQUdlO0FBTTlFLDZEQUE2RDtBQUM3RCw2QkFBNkI7QUFDN0IsTUFBTTtBQUVOLE1BQU1PLE9BQU87UUFBQyxFQUFFQyxNQUFNLEVBQWE7O0lBQy9CLE1BQU1DLFVBQVVOLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLGNBQWMsQ0FBQ0YsT0FBTztJQUN0RSxNQUFNRyxXQUFXVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNRyxlQUFlLENBQUNELFFBQVE7SUFDekUsTUFBTUUsZUFBZVgsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUssV0FBVyxDQUFDQyxJQUFJO0lBQ3JFLE1BQU1DLG1CQUFtQmQsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTVEsdUJBQXVCLENBQUNELGdCQUFnQjtJQUNqRyxNQUFNRSxpQkFBaUJQLFNBQVNRLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxHQUFHLEtBQU9MLHFCQUFxQjtJQUV6RixNQUFNTSxXQUFXbkIsNERBQWNBO0lBVy9CLE1BQU1vQixXQUFXckIsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTWUsV0FBVyxDQUFDQyxRQUFRO0lBRXJFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMkIsU0FBU0MsV0FBVyxHQUFHNUIsK0NBQVFBLENBQUM7SUFFdkMsMkhBQTJIO0lBQzNILElBQUk2QjtJQUVKLElBQUdKLGNBQWNWLGtCQUFrQjtRQUMvQmMsaUJBQWlCUCxTQUFTUSxNQUFNLENBQUMsQ0FBQ0gsVUFBWUEsUUFBUUksY0FBYyxLQUFLTixhQUFhRSxRQUFRSyxVQUFVLEtBQUtQO0lBQ2pILE9BQU87UUFDSEksaUJBQWlCUCxTQUFTUSxNQUFNLENBQUMsQ0FBQ0gsVUFBWSxD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QSx3REFBY0E7UUFDVkEsd0RBQWNBO1FBR3RCQyx3REFBY0E7UUFXZEQsd0RBQWNBOzs7S0FsQjdCSTtBQXVITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2NoYXQudHN4PzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9yZWR1eC9ob29rcyc7XG5cbmltcG9ydCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7IC8vIGltcG9ydCBTb2NrZXQgdHlwZVxuaW1wb3J0IHsgYWRkTmV3TWVzc2FnZSwgYWRkT2xkTWVzc2FnZXMgfSBmcm9tICdAL3JlZHV4L3NsaWNlcy9jaGF0L2NoYXRTbGljZSc7XG5cbmludGVyZmFjZSBDaGF0UHJvcHMge1xuICAgIHNvY2tldDogU29ja2V0O1xufVxuXG4vLyBjb25zdCBzb2NrZXQgPSBpbygnJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0nLCB7XG4vLyAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuLy8gfSk7XG5cbmNvbnN0IENoYXQgPSAoeyBzb2NrZXQgfTogQ2hhdFByb3BzKSA9PiB7XG4gICAgY29uc3QgbWVtYmVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuTWVtYmVyc1JlZHVjZXIubWVtYmVycyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2plY3RzUmVkdWNlci5wcm9qZWN0cyk7XG4gICAgY29uc3QgbG9nZ2VkSW5Vc2VyID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyUmVkdWNlci51c2VyKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuX2lkID09PSAgIGN1cnJlbnRQcm9qZWN0SWQpIHx8IG51bGw7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gICAgICAgIG1lc3NhZ2VDb250ZW50OiBzdHJpbmc7XG4gICAgICAgIHNlbmRlcklkPzogc3RyaW5nO1xuICAgICAgICByZWNlaXZlcklkPzogc3RyaW5nO1xuICAgICAgICBwcm9qZWN0SWQ/OiBzdHJpbmc7XG4gICAgICAgIHByb2plY3RHcm91cElkPzogc3RyaW5nO1xuICAgICAgICBzZW50QXQ/OiBzdHJpbmcgfCBEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2V6ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jaGF0UmVkdWNlci5tZXNzYWdlcyk7XG5cbiAgICBjb25zdCBbbWVzc2FnZVRvLCBzZXRNZXNzYWdlVG9dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8vIGNvbnN0IG1lc3NhZ2VzVG9TaG93ID0gbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLnNlbmRlcklkID09PSBtZXNzYWdlVG8gfHwgbWVzc2FnZS5yZWNlaXZlcklkID09PSBtZXNzYWdlVG8pO1xuICAgIGxldCBtZXNzYWdlc1RvU2hvdztcblxuICAgIGlmKG1lc3NhZ2VUbyA9PT0gY3VycmVudFByb2plY3RJZCkge1xuICAgICAgICBtZXNzYWdlc1RvU2hvdyA9IG1lc3NhZ2V6LmZpbHRlcigobWVzc2FnZSkgPT4gbWVzc2FnZS5wcm9qZWN0R3JvdXBJZCA9PT0gbWVzc2FnZVRvIHx8IG1lc3NhZ2UucmVjZWl2ZXJJZCA9PT0gbWVzc2FnZVRvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlc1RvU2hvdyA9IG1lc3NhZ2V6LmZpbHRlcigobWVzc2FnZSkgPT4gKG1lc3NhZ2Uuc2VuZGVySWQgPT09IG1lc3NhZ2VUbyB8fCBtZXNzYWdlLnJlY2VpdmVySWQgPT09IG1lc3NhZ2VUbykgJiYgIW1lc3NhZ2UucHJvamVjdEdyb3VwSWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU9sZE1lc3NhZ2UgPSAob2xkTWVzc2FnZXM6IE1lc3NhZ2VbXSkgPT4ge1xuICAgICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCAuLi5vbGRNZXNzYWdlc10pO1xuICAgICAgICBkaXNwYXRjaChhZGRPbGRNZXNzYWdlcyhvbGRNZXNzYWdlcykpO1xuICAgIH07XG4gICAgXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYobWVzc2FnZVRvID09PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbG9hZE9sZE1lc3NhZ2VzJywgeyBwcm9qZWN0R3JvdXBJZDogY3VycmVudFByb2plY3RJZH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvYWRPbGRNZXNzYWdlcycsIHsgc2VuZGVySWQ6IG1lc3NhZ2VUb30pXG4gICAgICAgIH1cbiAgICAgICAgc29ja2V0Lm9uKCdsb2FkT2xkTWVzc2FnZXMnLCBoYW5kbGVPbGRNZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ2xvYWRPbGRNZXNzYWdlcycsIGhhbmRsZU9sZE1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgIH0sIFttZXNzYWdlVG9dKTtcblxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICBpZihtZXNzYWdlICE9PSAnJykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVdpdGhNZXRhZGF0YSA9IHsgbWVzc2FnZUNvbnRlbnQ6IG1lc3NhZ2UsIHJlY2VpdmVySWQ6IG1lc3NhZ2VUbywgc2VuZGVySWQ6IGxvZ2dlZEluVXNlcj8uX2lkLCBzZW50QXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9O1xuICAgICAgICAgICAgaWYobWVzc2FnZVRvID09PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWhlaGVoaGVcIik7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbnRNZXNzYWdlVG9Hcm91cCcsIHsgY29udGVudDogbWVzc2FnZSwgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkLCBtZXNzYWdlVG8gfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkTmV3TWVzc2FnZShtZXNzYWdlV2l0aE1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGF0TWVzc2FnZScsIHsgY29udGVudDogbWVzc2FnZSwgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkLCBtZXNzYWdlVG8gfSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkTmV3TWVzc2FnZShtZXNzYWdlV2l0aE1ldGFkYXRhKSk7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICB7LyogU2lkZWJhciBmb3IgbWVtYmVycyBhbmQgZ3JvdXAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktMjAwIHAtNCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGgxPlBST0pFQ1RTPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y3VycmVudFByb2plY3Q/Ll9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKGN1cnJlbnRQcm9qZWN0Py5faWQgfHwgJycpfSBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXIgJHttZXNzYWdlVG8gPT09IGN1cnJlbnRQcm9qZWN0Py5faWQgJiYgJ2JnLWdyZWVuLTMwMCByb3VuZGVkJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXtcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e2N1cnJlbnRQcm9qZWN0Py50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPntjdXJyZW50UHJvamVjdD8udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5NRU1CRVJTPC9oMT5cbiAgICAgICAgICAgICAgICB7bWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKGxvZ2dlZEluVXNlcj8uX2lkICE9PSBtZW1iZXIuX2lkICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttZW1iZXIuX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8obWVtYmVyLl9pZCl9IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlciAke21lc3NhZ2VUbyA9PT0gbWVtYmVyLl9pZCAmJiAnYmctZ3JlZW4tMzAwIHJvdW5kZWQnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsXCIgc3JjPXttZW1iZXIucHJvZmlsZVBpYyB8fCBcImh0dHBzOi8vcm9ib2hhc2gub3JnLzExMS4yMzUuNjguMTYyLnBuZ1wifSBhbHQ9e21lbWJlci5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e21lbWJlci5maXJzdE5hbWV9IHttZW1iZXIubGFzdE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzVG9TaG93Lm1hcCgobWVzc2FnZSwgaWR4KSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbmRlciA9IG1lbWJlcnMuZmluZCgobWVtYmVyKSA9PiBtZW1iZXIuX2lkID09PSBtZXNzYWdlLnNlbmRlcklkKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWItMiAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGxvZ2dlZEluVXNlcj8uX2lkID8gJ2l0ZW1zLWVuZCcgOiAnaXRlbXMtc3RhcnQnfWB9IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dnZWRJblVzZXI/Ll9pZCAhPT0gbWVzc2FnZS5zZW5kZXJJZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMFwiPntzZW5kZXI/LmZpcnN0TmFtZX0ge3NlbmRlcj8ubGFzdE5hbWV9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctYmx1ZS0yMDAgcC0yIHJvdW5kZWQtbGcgZmxleCAke21lc3NhZ2Uuc2VuZGVySWQgPT09IGxvZ2dlZEluVXNlcj8uX2lkID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J30gaXRlbXMtY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZS5tZXNzYWdlQ29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgbWwtMiBzZWxmLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS5zZW50QXQgaW5zdGFuY2VvZiBEYXRlID8gbWVzc2FnZS5zZW50QXQudG9Mb2NhbGVTdHJpbmcoKSA6IG1lc3NhZ2Uuc2VudEF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlLi4uXCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtMiBib3JkZXIgcm91bmRlZC1sZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwibWwtMiBweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiYWRkTmV3TWVzc2FnZSIsImFkZE9sZE1lc3NhZ2VzIiwiQ2hhdCIsInNvY2tldCIsIm1lbWJlcnMiLCJzdGF0ZSIsIk1lbWJlcnNSZWR1Y2VyIiwicHJvamVjdHMiLCJwcm9qZWN0c1JlZHVjZXIiLCJsb2dnZWRJblVzZXIiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJjdXJyZW50UHJvamVjdCIsImZpbmQiLCJwcm9qZWN0IiwiX2lkIiwiZGlzcGF0Y2giLCJtZXNzYWdleiIsImNoYXRSZWR1Y2VyIiwibWVzc2FnZXMiLCJtZXNzYWdlVG8iLCJzZXRNZXNzYWdlVG8iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzVG9TaG93IiwiZmlsdGVyIiwicHJvamVjdEdyb3VwSWQiLCJyZWNlaXZlcklkIiwic2VuZGVySWQiLCJoYW5kbGVPbGRNZXNzYWdlIiwib2xkTWVzc2FnZXMiLCJlbWl0Iiwib24iLCJvZmYiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2VXaXRoTWV0YWRhdGEiLCJtZXNzYWdlQ29udGVudCIsInNlbnRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50IiwicHJvamVjdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwidGl0bGUiLCJzcGFuIiwibWFwIiwibWVtYmVyIiwicHJvZmlsZVBpYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaWR4Iiwic2VuZGVyIiwic21hbGwiLCJ0b0xvY2FsZVN0cmluZyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});