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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3030\", {\n    withCredentials: true\n});\nconst Chat = ()=>{\n    _s();\n    const members = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.MembersReducer.members);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const [messageTo, setMessageTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"message\", (newMessage)=>{\n            // setMessages((prevMessages) => [...prevMessages, newMessage]);\n            console.log(\"newMessage.........\", newMessage);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        socket.on(\"private_message\", (param)=>{\n            let { messageContent, senderId } = param;\n            console.log(\"\".concat(sender, \": \").concat(message));\n        // Update the chat UI here\n        });\n    }, []);\n    const sendMessage = ()=>{\n        socket.emit(\"chatMessage\", {\n            content: message,\n            projectId: currentProjectId,\n            messageTo\n        });\n        setMessage(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/4 bg-gray-200 p-4\",\n                children: [\n                    members.map((member)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>setMessageTo(member._id),\n                            className: \"flex items-center p-2 cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-10 h-10 rounded-full\",\n                                    src: member.profilePic || \"https://robohash.org/111.235.68.162.png\",\n                                    alt: member.firstName\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-2\",\n                                    children: [\n                                        member.firstName,\n                                        \" \",\n                                        member.lastName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, member._id, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-2 cursor-pointer bg-green-300 rounded\",\n                        children: \"Project Group Chat\"\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4 bg-white p-4 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-2 bg-gray-50\",\n                        children: messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-200 p-2 rounded-lg\",\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs text-gray-500 ml-2 self-end\",\n                                        children: \"10:30 AM\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center border-t p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                placeholder: \"Type a message...\",\n                                className: \"flex-grow p-2 border rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendMessage,\n                                className: \"ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg\",\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/chat.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Chat, \"Rrv33gV+HyTQ6UtkV6/HZwvPwd8=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUVTO0FBRS9DLE1BQU1LLFNBQVNGLG9EQUFFQSxDQUFDLHlCQUF5QjtJQUN2Q0csaUJBQWlCO0FBQ3JCO0FBRUEsTUFBTUMsT0FBTzs7SUFDVCxNQUFNQyxVQUFVSiw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxjQUFjLENBQUNGLE9BQU87SUFDdEUsTUFBTUcsbUJBQW1CUCw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNRyx1QkFBdUIsQ0FBQ0QsZ0JBQWdCO0lBQ2pHLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNOSSxPQUFPYyxFQUFFLENBQUMsV0FBVyxDQUFDQztZQUNsQixnRUFBZ0U7WUFDaEVDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJGO1FBRXZDO0lBQ0osR0FBRyxFQUFFO0lBRUxuQixnREFBU0EsQ0FBQztRQUNOSSxPQUFPYyxFQUFFLENBQUMsbUJBQW1CO2dCQUFDLEVBQUVJLGNBQWMsRUFBRUMsUUFBUSxFQUFFO1lBQ3RESCxRQUFRQyxHQUFHLENBQUMsR0FBY0wsT0FBWFEsUUFBTyxNQUFZLE9BQVJSO1FBQzFCLDBCQUEwQjtRQUM5QjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1TLGNBQWM7UUFDaEJyQixPQUFPc0IsSUFBSSxDQUFDLGVBQWU7WUFBRUMsU0FBU1g7WUFBU1ksV0FBV2xCO1lBQWtCRTtRQUFVO1FBQ3RGSyxXQUFXO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDVnZCLFFBQVF3QixHQUFHLENBQUMsQ0FBQ0MsdUJBQ1YsOERBQUNIOzRCQUFxQkksU0FBUyxJQUFNcEIsYUFBYW1CLE9BQU9FLEdBQUc7NEJBQUdKLFdBQVU7OzhDQUNyRSw4REFBQ0s7b0NBQUlMLFdBQVU7b0NBQXlCTSxLQUFLSixPQUFPSyxVQUFVLElBQUk7b0NBQTJDQyxLQUFLTixPQUFPTyxTQUFTOzs7Ozs7OENBQ2xJLDhEQUFDQztvQ0FBS1YsV0FBVTs7d0NBQVFFLE9BQU9PLFNBQVM7d0NBQUM7d0NBQUVQLE9BQU9TLFFBQVE7Ozs7Ozs7OzJCQUZwRFQsT0FBT0UsR0FBRzs7Ozs7a0NBTXhCLDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FBK0M7Ozs7Ozs7Ozs7OzswQkFNbEUsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBRVZoQixTQUFTaUIsR0FBRyxDQUFDLENBQUNmLHdCQUNYLDhEQUFDYTtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUE4QmQ7Ozs7OztrREFDN0MsOERBQUN3Qjt3Q0FBS1YsV0FBVTtrREFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9sRSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDWTtnQ0FBTUMsTUFBSztnQ0FBT0MsT0FBTzVCO2dDQUFTNkIsVUFBVSxDQUFDQyxJQUFNN0IsV0FBVzZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBR0ksYUFBWTtnQ0FBb0JsQixXQUFVOzs7Ozs7MENBQzFILDhEQUFDbUI7Z0NBQU9oQixTQUFTUjtnQ0FBYUssV0FBVTswQ0FBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRztHQWpFTXhCOztRQUNjSCx3REFBY0E7UUFDTEEsd0RBQWNBOzs7S0FGckNHO0FBbUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvY2hhdC50c3g/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBNZW1iZXIgfSBmcm9tICdAL3JlZHV4L3NsaWNlcy9tZW1iZXJzU2xpY2UnO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3JlZHV4L2hvb2tzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMCcsIHtcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuY29uc3QgQ2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCBtZW1iZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5NZW1iZXJzUmVkdWNlci5tZW1iZXJzKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCBbbWVzc2FnZVRvLCBzZXRNZXNzYWdlVG9dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChuZXdNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld01lc3NhZ2UuLi4uLi4uLi5cIiwgbmV3TWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc29ja2V0Lm9uKCdwcml2YXRlX21lc3NhZ2UnLCAoeyBtZXNzYWdlQ29udGVudCwgc2VuZGVySWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7c2VuZGVyfTogJHttZXNzYWdlfWApO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjaGF0IFVJIGhlcmVcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNvY2tldC5lbWl0KCdjaGF0TWVzc2FnZScsIHsgY29udGVudDogbWVzc2FnZSwgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkLCBtZXNzYWdlVG8gfSk7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsXCI+XG4gICAgICAgICAgICB7LyogU2lkZWJhciBmb3IgbWVtYmVycyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYmctZ3JheS0yMDAgcC00XCI+XG4gICAgICAgICAgICAgICAge21lbWJlcnMubWFwKChtZW1iZXI6IE1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bWVtYmVyLl9pZH0gb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZVRvKG1lbWJlci5faWQpfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbFwiIHNyYz17bWVtYmVyLnByb2ZpbGVQaWMgfHwgXCJodHRwczovL3JvYm9oYXNoLm9yZy8xMTEuMjM1LjY4LjE2Mi5wbmdcIn0gYWx0PXttZW1iZXIuZmlyc3ROYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttZW1iZXIuZmlyc3ROYW1lfSB7bWVtYmVyLmxhc3ROYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgey8qIEdyb3VwIENoYXQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtMiBjdXJzb3ItcG9pbnRlciBiZy1ncmVlbi0zMDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0IEdyb3VwIENoYXRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ2hhdCBBcmVhICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBiZy13aGl0ZSBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7LyogQ2hhdCBNZXNzYWdlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoYXQgYnViYmxlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtMjAwIHAtMiByb3VuZGVkLWxnXCI+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG1sLTIgc2VsZi1lbmRcIj4xMDozMCBBTTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIElucHV0IGZpZWxkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLXQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlLi4uXCIgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtMiBib3JkZXIgcm91bmRlZC1sZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0gY2xhc3NOYW1lPVwibWwtMiBweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInVzZUFwcFNlbGVjdG9yIiwic29ja2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiQ2hhdCIsIm1lbWJlcnMiLCJzdGF0ZSIsIk1lbWJlcnNSZWR1Y2VyIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwibWVzc2FnZVRvIiwic2V0TWVzc2FnZVRvIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib24iLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VDb250ZW50Iiwic2VuZGVySWQiLCJzZW5kZXIiLCJzZW5kTWVzc2FnZSIsImVtaXQiLCJjb250ZW50IiwicHJvamVjdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVtYmVyIiwib25DbGljayIsIl9pZCIsImltZyIsInNyYyIsInByb2ZpbGVQaWMiLCJhbHQiLCJmaXJzdE5hbWUiLCJzcGFuIiwibGFzdE5hbWUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/chat.tsx\n"));

/***/ })

});