"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/userSlice */ \"(app-pages-browser)/./redux/slices/userSlice.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import { useRouter } from \"next/router\";\n\n\n\n\n// import { setLoggedIn } from \"@/redux/slices/userdinSlice\";\nfunction Home() {\n    _s();\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    // const isLoggedIn = useAppSelector((state) => state.loggedInReducer.isLoggedIn);\n    const togglePasswordVisibility = ()=>{\n        setShowPassword(!showPassword);\n    };\n    // useEffect(() => {\n    //   console.log(\"isLoggedIn....\", isLoggedIn);\n    // }, [isLoggedIn]);\n    // const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {\n    //       e.preventDefault();\n    //       try {\n    //           const response = await axios.post(\"http://localhost:3030/api/login\", { email, password }, {withCredentials: true});\n    //           if (response.status === 200) {\n    //             // dispatch(setLoggedIn());\n    //             router.push(\"/dashBoard\");\n    //           } else {\n    //             // handle error response\n    //             console.log(\"Login failed\");\n    //           }\n    //         } catch (error) {\n    //           console.error(\"Error logging in:\", error);\n    //         }  \n    //   };\n    const loggedInUser = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.userReducer.user);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"loggedInUser..............\", loggedInUser);\n    }, [\n        loggedInUser\n    ]);\n    const validateEmail = (email)=>{\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        return emailRegex.test(email);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setEmailError(\"\");\n        setPasswordError(\"\");\n        let isValid = true;\n        if (!email) {\n            setEmailError(\"Email is required\");\n            isValid = false;\n        } else if (!validateEmail(email)) {\n            setEmailError(\"Please enter a valid email address\");\n            isValid = false;\n        }\n        if (!password) {\n            setPasswordError(\"Password is required\");\n            isValid = false;\n        }\n        try {\n            dispatch((0,_redux_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__.login)({\n                email,\n                password\n            })).unwrap().then(()=>{\n                router.push(\"/dashBoard\");\n            });\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center min-h-screen bg-gray-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 mt-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-4 text-center text-black\",\n                    children: \"Welcome to\"\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center bg-white rounded-lg p-2 mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black rounded-md h-8 p-4 flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white text-lg font-bold  \",\n                            children: \"SPRINTER\"\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                id: \"email\",\n                                className: \"mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm   text-black\",\n                                placeholder: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: showPassword ? \"text\" : \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        id: \"password\",\n                                        className: \"mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm   text-black\",\n                                        placeholder: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"absolute inset-y-0 right-0 px-3 flex items-center\",\n                                        onClick: togglePasswordVisibility,\n                                        children: showPassword ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: 1.5,\n                                            stroke: \"#C0C0C0\",\n                                            className: \"w-5 h-5\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                                    lineNumber: 136,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: 1.5,\n                                            stroke: \"#C0C0C0\",\n                                            className: \"w-5 h-5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                                lineNumber: 156,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \" hover:underline   text-sm\",\n                                children: \"Forgot your password?\"\n                            }, void 0, false, {\n                                fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"mt-4 w-full bg-black  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10  \",\n                                    children: \"LOGIN\"\n                                }, void 0, false, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                    lineNumber: 175,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-4 text-center text-gray-600   text-xs\",\n                                    children: [\n                                        \"Don't have an account?\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"font-bold text-blue-600 hover:underline   text-xs\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                            lineNumber: 183,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                                    lineNumber: 181,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                            lineNumber: 174,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/kidiloski/SPRINTER/front-end/app/login/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"rGCi4vgmyfCfaRjyhBO77ZAXM+8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSwyQ0FBMkM7QUFDQTtBQUNRO0FBQ0Y7QUFFYztBQUMvRCw2REFBNkQ7QUFFOUMsU0FBU087O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFVO0lBQzFELE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVM7SUFDakQsTUFBTVcsU0FBU2QsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNjLGVBQWVDLGlCQUFpQixHQUFHZiwrQ0FBUUEsQ0FBUztJQUUzRCxNQUFNZ0IsV0FBV2QsNERBQWNBO0lBQy9CLGtGQUFrRjtJQUVsRixNQUFNZSwyQkFBMkI7UUFDL0JYLGdCQUFnQixDQUFDRDtJQUNuQjtJQUVBLG9CQUFvQjtJQUNwQiwrQ0FBK0M7SUFFL0Msb0JBQW9CO0lBRXBCLHVFQUF1RTtJQUN2RSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGdJQUFnSTtJQUNoSSwyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQyxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCxjQUFjO0lBQ2QsT0FBTztJQUVQLE1BQU1hLGVBQWVmLDREQUFjQSxDQUFDLENBQUNnQixRQUFVQSxNQUFNQyxXQUFXLENBQUNDLElBQUk7SUFFckV0QixnREFBU0EsQ0FBQztRQUNSdUIsUUFBUUMsR0FBRyxDQUFDLDhCQUE4Qkw7SUFDNUMsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1NLGdCQUFnQixDQUFDakI7UUFDckIsTUFBTWtCLGFBQWE7UUFDbkIsT0FB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d2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS50c3g/NDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL3VzZXJTbGljZVwiO1xuXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuLy8gaW1wb3J0IHsgc2V0TG9nZ2VkSW4gfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvdXNlcmRpblNsaWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgLy8gY29uc3QgaXNMb2dnZWRJbiA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubG9nZ2VkSW5SZWR1Y2VyLmlzTG9nZ2VkSW4pO1xuXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcImlzTG9nZ2VkSW4uLi4uXCIsIGlzTG9nZ2VkSW4pO1xuICAgIFxuICAvLyB9LCBbaXNMb2dnZWRJbl0pO1xuXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvbG9naW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xuICAvLyAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gIC8vICAgICAgICAgICAgIC8vIGRpc3BhdGNoKHNldExvZ2dlZEluKCkpO1xuICAvLyAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoQm9hcmRcIik7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3IgcmVzcG9uc2VcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBmYWlsZWRcIik7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIGluOlwiLCBlcnJvcik7XG4gIC8vICAgICAgICAgfSAgXG4gIC8vICAgfTtcblxuICBjb25zdCBsb2dnZWRJblVzZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJsb2dnZWRJblVzZXIuLi4uLi4uLi4uLi4uLlwiLCBsb2dnZWRJblVzZXIpOyAgICBcbiAgfSwgW2xvZ2dlZEluVXNlcl0pO1xuXG4gIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcbiAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGVtYWlsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyhlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldEVtYWlsRXJyb3IoXCJcIik7XG4gICAgc2V0UGFzc3dvcmRFcnJvcihcIlwiKTtcblxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICBzZXRFbWFpbEVycm9yKFwiRW1haWwgaXMgcmVxdWlyZWRcIik7XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcbiAgICAgIHNldEVtYWlsRXJyb3IoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIpO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghcGFzc3dvcmQpIHtcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiKTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBkaXNwYXRjaChsb2dpbih7ZW1haWwsIHBhc3N3b3JkfSkpXG4gICAgICAgIC51bndyYXAoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaEJvYXJkXCIpO1xuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgaW46XCIsIGVycm9yKTtcbiAgICAgIH0gIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy0xLzIgbWQ6dy0xLzMgbGc6dy0xLzQgYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQteGwgcC04IHBiLTMgbXQtOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgIFdlbGNvbWUgdG9cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSByb3VuZGVkLWxnIHAtMiBtdC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLW1kIGgtOCBwLTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGQgIFwiPlNQUklOVEVSPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYmxvY2sgdy1mdWxsIHB5LTIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBzbTp0ZXh0LXNtICAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYmxvY2sgdy1mdWxsIHB5LTIgYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBzbTp0ZXh0LXNtICAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBweC0zIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gKFxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0MwQzBDMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjAzNiAxMi4zMjJhMS4wMTIgMS4wMTIgMCAwMTAtLjYzOUMzLjQyMyA3LjUxIDcuMzYgNC41IDEyIDQuNWM0LjYzOCAwIDguNTczIDMuMDA3IDkuOTYzIDcuMTc4LjA3LjIwNy4wNy40MzEgMCAuNjM5QzIwLjU3NyAxNi40OSAxNi42NCAxOS41IDEyIDE5LjVjLTQuNjM4IDAtOC41NzMtMy4wMDctOS45NjMtNy4xNzh6XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTJhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0MwQzBDMFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0zLjk4IDguMjIzQTEwLjQ3NyAxMC40NzcgMCAwMDEuOTM0IDEyQzMuMjI2IDE2LjMzOCA3LjI0NCAxOS41IDEyIDE5LjVjLjk5MyAwIDEuOTUzLS4xMzggMi44NjMtLjM5NU02LjIyOCA2LjIyOEExMC40NSAxMC40NSAwIDAxMTIgNC41YzQuNzU2IDAgOC43NzMgMy4xNjIgMTAuMDY1IDcuNDk4YTEwLjUyMyAxMC41MjMgMCAwMS00LjI5MyA1Ljc3NE02LjIyOCA2LjIyOEwzIDNtMy4yMjggMy4yMjhsMy42NSAzLjY1bTcuODk0IDcuODk0TDIxIDIxbS0zLjIyOC0zLjIyOGwtMy42NS0zLjY1bTAgMGEzIDMgMCAxMC00LjI0My00LjI0M200LjI0MiA0LjI0Mkw5Ljg4IDkuODhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGhvdmVyOnVuZGVybGluZSAgIHRleHQtc21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgYmctYmxhY2sgIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lIG1iLTEwICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMT0dJTlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgICB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtNjAwIGhvdmVyOnVuZGVybGluZSAgIHRleHQteHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2dpbiIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJIb21lIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiZGlzcGF0Y2giLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJsb2dnZWRJblVzZXIiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWxSZWdleCIsInRlc3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwidW53cmFwIiwidGhlbiIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3BhbiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiYSIsImhyZWYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});