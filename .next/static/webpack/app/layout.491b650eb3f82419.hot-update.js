"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./redux/slices/userSlice.ts":
/*!***********************************!*\
  !*** ./redux/slices/userSlice.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OAuth: function() { return /* binding */ OAuth; },\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    user: null,\n    error: null\n};\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/login\", async (param)=>{\n    let { email, password } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/login\", {\n        email,\n        password\n    }, {\n        withCredentials: true\n    });\n    return response.data.user;\n});\nconst OAuth = _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk;\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(login.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.error = \"\";\n            state.user = action.payload;\n        }).addCase(login.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN2QztBQWdCMUIsTUFBTUcsZUFBMEI7SUFDNUJDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxPQUFPO0FBQ1g7QUFFTyxNQUFNQyxRQUFRUCxrRUFBZ0JBLENBQTRDLGNBQWM7UUFBTSxFQUFDUSxLQUFLLEVBQUVDLFFBQVEsRUFBQztJQUNsSCxNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxJQUFJLENBQUMsbUNBQW1DO1FBQUVIO1FBQU9DO0lBQVMsR0FBRztRQUFDRyxpQkFBaUI7SUFBSTtJQUNoSCxPQUFPRixTQUFTRyxJQUFJLENBQUNSLElBQUk7QUFDN0IsR0FBRztBQUVJLE1BQU1TLFFBQVFkLDhEQUFnQkEsQ0FBTztBQUU1QyxNQUFNZSxZQUFZZCw2REFBV0EsQ0FBQztJQUMxQmUsTUFBTTtJQUNOYjtJQUNBYyxVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNiLE1BQU1jLE9BQU8sRUFBRSxDQUFDQztZQUNyQkEsTUFBTWxCLE1BQU0sR0FBRztRQUNuQixHQUNDZ0IsT0FBTyxDQUFDYixNQUFNZ0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzlCRixNQUFNbEIsTUFBTSxHQUFHO1lBQ2ZrQixNQUFNaEIsS0FBSyxHQUFHO1lBQ2RnQixNQUFNakIsSUFBSSxHQUFHbUIsT0FBT0MsT0FBTztRQUMvQixHQUNDTCxPQUFPLENBQUNiLE1BQU1tQixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDN0JGLE1BQU1sQixNQUFNLEdBQUc7WUFDZmtCLE1BQU1oQixLQUFLLEdBQUdrQixPQUFPbEIsS0FBSyxDQUFDcUIsT0FBTztRQUN0QztJQUNSO0FBQ0o7QUFFQSwrREFBZVosVUFBVWEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHM/ZmRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICBwcm9maWxlUGljPzogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBVc2VyU3RhdGUge1xuICAgIHN0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIHVzZXI6IFVzZXIgfCBudWxsO1xuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgdXNlcjogbnVsbCxcbiAgICBlcnJvcjogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLCB7IGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfT4oJ3VzZXIvbG9naW4nLCBhc3luYyh7ZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvbG9naW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnVzZXI7XG59KTtcblxuZXhwb3J0IGNvbnN0IE9BdXRoID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLD5cblxuY29uc3QgdXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICd1c2VyJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2Z1bGZpbGxlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIGFzIHN0cmluZztcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwidXNlciIsImVycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsIk9BdXRoIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwibWVzc2FnZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/userSlice.ts\n"));

/***/ })

});