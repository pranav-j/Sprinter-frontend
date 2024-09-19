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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const projects = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.projectsReducer.projects);\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.userReducer.user);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const currentProject = projects.find((project)=>project._id === currentProjectId) || null;\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const messagesToShow = messages.filter((message)=>message.senderId === messageTo);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId, sentAt } = param;\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        messageContent,\n                        senderId,\n                        sentAt\n                    }\n                ]);\n            console.log(\"messages........\", messages);\n        });\n        socket.emit(\"joinProject\", {\n            projectId: currentProjectId\n        });\n        socket.on(\"receiveMessageFromGroup\", (param)=>{\n            let { message } = param;\n            console.log(\"Message received in GROUP.............\", message);\n        });\n    }, []);\n    const sendMessage = ()=>{\n        if (messageTo === currentProjectId) {\n            console.log(\"hehehehhe\");\n        }\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId,\n            messageTo\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4 overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"PROJECTS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setMessageTo((currentProject === null || currentProject === void 0 ? void 0 : currentProject._id) || \"\"),\n                        className: \"flex items-center p-2 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-10 h-10 rounded-full\",\n                                src: \"https://robohash.org/111.235.68.162.png\",\n                                alt: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: currentProject === null || currentProject === void 0 ? void 0 : currentProject.title\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, currentProject === null || currentProject === void 0 ? void 0 : currentProject._id, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"MEMBERS\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined),\n                    members.map((member)=>(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id) !== member._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer \".concat(messageTo === member._id && \"bg-green-300 rounded\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messagesToShow.map((message, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message.messageContent\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: message.sentAt\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, idx, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"eGBBei7D/HPom4Gfyk5MyQ71Nss=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsV0FBV1AsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUcsZUFBZSxDQUFDRCxRQUFRO0lBQ3pFLE1BQU1FLGVBQWVULDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1LLFdBQVcsQ0FBQ0MsSUFBSTtJQUNyRSxNQUFNQyxtQkFBbUJaLDREQUFjQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1RLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFDakcsTUFBTUUsaUJBQWlCUCxTQUFTUSxJQUFJLENBQUMsQ0FBQ0MsVUFBWUEsUUFBUUMsR0FBRyxLQUFPTCxxQkFBcUI7SUFXekYsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixVQUFVQyxZQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ3dCLFNBQVNDLFdBQVcsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0wQixpQkFBaUJKLFNBQVNLLE1BQU0sQ0FBQyxDQUFDSCxVQUFZQSxRQUFRSSxRQUFRLEtBQUtSO0lBRXpFckIsZ0RBQVNBLENBQUM7UUFDTkksT0FBTzBCLEVBQUUsQ0FBQyxXQUFXLENBQUNDO1lBQ2xCLGdFQUFnRTtZQUNoRUMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7UUFFdkM7SUFDSixHQUFHLEVBQUU7SUFFTC9CLGdEQUFTQSxDQUFDO1FBQ05JLE9BQU8wQixFQUFFLENBQUMs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QUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3g/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0AvcmVkdXgvaG9va3MnO1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDMwJywge1xuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbn0pO1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbWJlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLk1lbWJlcnNSZWR1Y2VyLm1lbWJlcnMpO1xuICAgIGNvbnN0IHByb2plY3RzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9qZWN0c1JlZHVjZXIucHJvamVjdHMpO1xuICAgIGNvbnN0IGxvZ2dlZEluVXNlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlclJlZHVjZXIudXNlcik7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Ll9pZCA9PT0gICBjdXJyZW50UHJvamVjdElkKSB8fCBudWxsO1xuXG4gICAgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICAgICAgICBtZXNzYWdlQ29udGVudDogc3RyaW5nO1xuICAgICAgICBzZW5kZXJJZD86IHN0cmluZztcbiAgICAgICAgcmVjZWl2ZXJJZD86IHN0cmluZztcbiAgICAgICAgcHJvamVjdElkPzogc3RyaW5nO1xuICAgICAgICBwcm9qZWN0R3JvdXBJZD86IHN0cmluZztcbiAgICAgICAgc2VudEF0Pzogc3RyaW5nXG4gICAgfVxuXG4gICAgY29uc3QgW21lc3NhZ2VUbywgc2V0TWVzc2FnZVRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VzVG9TaG93ID0gbWVzc2FnZXMuZmlsdGVyKChtZXNzYWdlKSA9PiBtZXNzYWdlLnNlbmRlcklkID09PSBtZXNzYWdlVG8pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdtZXNzYWdlJywgKG5ld01lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIC8vIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG5ld01lc3NhZ2VdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3TWVzc2FnZS4uLi4uLi4uLlwiLCBuZXdNZXNzYWdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzb2NrZXQub24oJ3ByaXZhdGVfbWVzc2FnZScsICh7IG1lc3NhZ2VDb250ZW50LCBzZW5kZXJJZCwgc2VudEF0IH0pID0+IHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgICAgICAgICAuLi5wcmV2TWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQsIHNlbnRBdCB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZXMuLi4uLi4uLlwiLCBtZXNzYWdlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luUHJvamVjdCcsIHsgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkIH0pO1xuXG4gICAgICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2VGcm9tR3JvdXAnLCAoe21lc3NhZ2V9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgcmVjZWl2ZWQgaW4gR1JPVVAuLi4uLi4uLi4uLi4uXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKG1lc3NhZ2VUbyA9PT0gY3VycmVudFByb2plY3RJZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWhlaGVoaGVcIik7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgc29ja2V0LmVtaXQoJ2NoYXRNZXNzYWdlJywgeyBjb250ZW50OiBtZXNzYWdlLCBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsIG1lc3NhZ2VUbyB9KTtcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHsvKiBTaWRlYmFyIGZvciBtZW1iZXJzIGFuZCBncm91cCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYmctZ3JheS0yMDAgcC00IG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDE+UFJPSkVDVFM8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjdXJyZW50UHJvamVjdD8uX2lkfSBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlVG8oY3VycmVudFByb2plY3Q/Ll9pZCB8fCAnJyl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e1wiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17Y3VycmVudFByb2plY3Q/LnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e2N1cnJlbnRQcm9qZWN0Py50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgxPk1FTUJFUlM8L2gxPlxuICAgICAgICAgICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAobG9nZ2VkSW5Vc2VyPy5faWQgIT09IG1lbWJlci5faWQgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbWJlci5faWR9IG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VUbyhtZW1iZXIuX2lkKX0gY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgcC0yIGN1cnNvci1wb2ludGVyICR7bWVzc2FnZVRvID09PSBtZW1iZXIuX2lkICYmICdiZy1ncmVlbi0zMDAgcm91bmRlZCd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGxcIiBzcmM9e21lbWJlci5wcm9maWxlUGljIHx8IFwiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvMTExLjIzNS42OC4xNjIucG5nXCJ9IGFsdD17bWVtYmVyLmZpcnN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bWVtYmVyLmZpcnN0TmFtZX0ge21lbWJlci5sYXN0TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDaGF0IEFyZWEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy80IGJnLXdoaXRlIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHsvKiBDaGF0IE1lc3NhZ2VzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBwLTIgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogQ2hhdCBidWJibGVzICovfVxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXNUb1Nob3cubWFwKChtZXNzYWdlLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0yXCIga2V5ID0ge2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTIwMCBwLTIgcm91bmRlZC1sZ1wiPnttZXNzYWdlLm1lc3NhZ2VDb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtbC0yIHNlbGYtZW5kXCI+e21lc3NhZ2Uuc2VudEF0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlLi4uXCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtMiBib3JkZXIgcm91bmRlZC1sZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwibWwtMiBweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInVzZUFwcFNlbGVjdG9yIiwic29ja2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiQ2hhdCIsIm1lbWJlcnMiLCJzdGF0ZSIsIk1lbWJlcnNSZWR1Y2VyIiwicHJvamVjdHMiLCJwcm9qZWN0c1JlZHVjZXIiLCJsb2dnZWRJblVzZXIiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJjdXJyZW50UHJvamVjdCIsImZpbmQiLCJwcm9qZWN0IiwiX2lkIiwibWVzc2FnZVRvIiwic2V0TWVzc2FnZVRvIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXNUb1Nob3ciLCJmaWx0ZXIiLCJzZW5kZXJJZCIsIm9uIiwibmV3TWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlQ29udGVudCIsInNlbnRBdCIsInByZXZNZXNzYWdlcyIsImVtaXQiLCJwcm9qZWN0SWQiLCJzZW5kTWVzc2FnZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInNwYW4iLCJtYXAiLCJtZW1iZXIiLCJwcm9maWxlUGljIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpZHgiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});