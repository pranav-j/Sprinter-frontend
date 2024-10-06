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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OAuth: function() { return /* binding */ OAuth; },\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    user: null,\n    error: null\n};\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/login\", async (param)=>{\n    let { email, password } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/login\", {\n        email,\n        password\n    }, {\n        withCredentials: true\n    });\n    return response.data.user;\n});\nconst OAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/OAuth\");\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(login.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.error = \"\";\n            state.user = action.payload;\n        }).addCase(login.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN2QztBQWdCMUIsTUFBTUcsZUFBMEI7SUFDNUJDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxPQUFPO0FBQ1g7QUFFTyxNQUFNQyxRQUFRUCxrRUFBZ0JBLENBQTRDLGNBQWM7UUFBTSxFQUFDUSxLQUFLLEVBQUVDLFFBQVEsRUFBQztJQUNsSCxNQUFNQyxXQUFXLE1BQU1SLDZDQUFLQSxDQUFDUyxJQUFJLENBQUMsbUNBQW1DO1FBQUVIO1FBQU9DO0lBQVMsR0FBRztRQUFDRyxpQkFBaUI7SUFBSTtJQUNoSCxPQUFPRixTQUFTRyxJQUFJLENBQUNSLElBQUk7QUFDN0IsR0FBRztBQUVJLE1BQU1TLFFBQVFkLGtFQUFnQkEsQ0FBWSxjQUFhO0FBRTlELE1BQU1lLFlBQVlkLDZEQUFXQSxDQUFDO0lBQzFCZSxNQUFNO0lBQ05iO0lBQ0FjLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2IsTUFBTWMsT0FBTyxFQUFFLENBQUNDO1lBQ3JCQSxNQUFNbEIsTUFBTSxHQUFHO1FBQ25CLEdBQ0NnQixPQUFPLENBQUNiLE1BQU1nQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDOUJGLE1BQU1sQixNQUFNLEdBQUc7WUFDZmtCLE1BQU1oQixLQUFLLEdBQUc7WUFDZGdCLE1BQU1qQixJQUFJLEdBQUdtQixPQUFPQyxPQUFPO1FBQy9CLEdBQ0NMLE9BQU8sQ0FBQ2IsTUFBTW1CLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUM3QkYsTUFBTWxCLE1BQU0sR0FBRztZQUNma0IsTUFBTWhCLEtBQUssR0FBR2tCLE9BQU9sQixLQUFLLENBQUNxQixPQUFPO1FBQ3RDO0lBQ1I7QUFDSjtBQUVBLCtEQUFlWixVQUFVYSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL3VzZXJTbGljZS50cz9mZGUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFVzZXIge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIHByb2ZpbGVQaWM/OiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gICAgc3RhdHVzOiAnaWRsZScgfCAncGVuZGluZycgfCAnZnVsZmlsbGVkJyB8ICdyZWplY3RlZCc7XG4gICAgdXNlcjogVXNlciB8IG51bGw7XG4gICAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICB1c2VyOiBudWxsLFxuICAgIGVycm9yOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBjcmVhdGVBc3luY1RodW5rPFVzZXIsIHsgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9PigndXNlci9sb2dpbicsIGFzeW5jKHtlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9sb2dpblwiLCB7IGVtYWlsLCBwYXNzd29yZCB9LCB7d2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudXNlcjtcbn0pO1xuXG5leHBvcnQgY29uc3QgT0F1dGggPSBjcmVhdGVBc3luY1RodW5rPFVzZXIsIGFueT4oJ3VzZXIvT0F1dGgnKVxuXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3VzZXInLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9ICcnO1xuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgYXMgc3RyaW5nO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJ1c2VyIiwiZXJyb3IiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiT0F1dGgiLCJ1c2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/userSlice.ts\n"));

/***/ })

});