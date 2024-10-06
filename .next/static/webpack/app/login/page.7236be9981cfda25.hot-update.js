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

/***/ "(app-pages-browser)/./redux/slices/userSlice.ts":
/*!***********************************!*\
  !*** ./redux/slices/userSlice.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OAuth: function() { return /* binding */ OAuth; },\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    user: null,\n    loginError: null,\n    userExistsError: null\n};\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/login\", async (param)=>{\n    let { email, password } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/login\", {\n        email,\n        password\n    }, {\n        withCredentials: true\n    });\n    return response.data.user;\n});\nconst OAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/OAuth\", async (OAuthresponse, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/googleOAuth\", OAuthresponse, {\n            withCredentials: true\n        });\n        // Assuming backend returns user and token\n        const { user, tokenn } = response.data;\n        // Optionally store token in local storage or cookie if needed\n        localStorage.setItem(\"token\", tokenn);\n        return user;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(error) && error.response) {\n            if (error.response.status === 409) {\n                return rejectWithValue(\"User exists. Please sign in with email and password\");\n            } else {\n                return rejectWithValue(\"Error from server: \" + error.response.data.message);\n            }\n        } else {\n            return rejectWithValue(\"Error sending token: \" + error.message);\n        }\n    }\n});\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(login.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.loginError = \"\";\n            state.user = action.payload;\n        }).addCase(login.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.loginError = action.error.message;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN2QztBQWlCMUIsTUFBTUcsZUFBMEI7SUFDNUJDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxZQUFZO0lBQ1pDLGlCQUFpQjtBQUNyQjtBQUVPLE1BQU1DLFFBQVFSLGtFQUFnQkEsQ0FBNEMsY0FBYztRQUFNLEVBQUNTLEtBQUssRUFBRUMsUUFBUSxFQUFDO0lBQ2xILE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLElBQUksQ0FBQyxtQ0FBbUM7UUFBRUg7UUFBT0M7SUFBUyxHQUFHO1FBQUNHLGlCQUFpQjtJQUFJO0lBQ2hILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1QsSUFBSTtBQUM3QixHQUFHO0FBRUksTUFBTVUsUUFBUWYsa0VBQWdCQSxDQUNqQyxjQUNBLE9BQU9nQjtRQUFlLEVBQUVDLGVBQWUsRUFBRTtJQUN2QyxJQUFJO1FBQ0YsTUFBTU4sV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsSUFBSSxDQUFDLHlDQUF5Q0ksZUFBZTtZQUFFSCxpQkFBaUI7UUFBSztRQUVsSCwwQ0FBMEM7UUFDMUMsTUFBTSxFQUFFUixJQUFJLEVBQUVhLE1BQU0sRUFBRSxHQUFHUCxTQUFTRyxJQUFJO1FBRXRDLDhEQUE4RDtRQUM5REssYUFBYUMsT0FBTyxDQUFDLFNBQVNGO1FBRTlCLE9BQU9iO0lBQ1QsRUFBRSxPQUFPZ0IsT0FBWTtRQUNuQixJQUFJbkIsNkNBQUtBLENBQUNvQixZQUFZLENBQUNELFVBQVVBLE1BQU1WLFFBQVEsRUFBRTtZQUMvQyxJQUFJVSxNQUFNVixRQUFRLENBQUNQLE1BQU0sS0FBSyxLQUFLO2dCQUNqQyxPQUFPYSxnQkFBZ0I7WUFDekIsT0FBTztnQkFDTCxPQUFPQSxnQkFBZ0Isd0JBQXdCSSxNQUFNVixRQUFRLENBQUNHLElBQUksQ0FBQ1MsT0FBTztZQUM1RTtRQUNGLE9BQU87WUFDTCxPQUFPTixnQkFBZ0IsMEJBQTBCSSxNQUFNRSxPQUFPO1FBQ2hFO0lBQ0Y7QUFDRixHQUNBO0FBR0osTUFBTUMsWUFBWXZCLDZEQUFXQSxDQUFDO0lBQzFCd0IsTUFBTTtJQUNOdEI7SUFDQXVCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ3JCLE1BQU1zQixPQUFPLEVBQUUsQ0FBQ0M7WUFDckJBLE1BQU0zQixNQUFNLEdBQUc7UUFDbkIsR0FDQ3lCLE9BQU8sQ0FBQ3JCLE1BQU13QixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDOUJGLE1BQU0zQixNQUFNLEdBQUc7WUFDZjJCLE1BQU16QixVQUFVLEdBQUc7WUFDbkJ5QixNQUFNMUIsSUFBSSxHQUFHNEIsT0FBT0MsT0FBTztRQUMvQixHQUNDTCxPQUFPLENBQUNyQixNQUFNMkIsUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQzdCRixNQUFNM0IsTUFBTSxHQUFHO1lBQ2YyQixNQUFNekIsVUFBVSxHQUFHMkIsT0FBT1osS0FBSyxDQUFDRSxPQUFPO1FBQzNDO0lBRVI7QUFDSjtBQUVBLCtEQUFlQyxVQUFVWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL3VzZXJTbGljZS50cz9mZGUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFVzZXIge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIHByb2ZpbGVQaWM/OiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XG4gICAgc3RhdHVzOiAnaWRsZScgfCAncGVuZGluZycgfCAnZnVsZmlsbGVkJyB8ICdyZWplY3RlZCc7XG4gICAgdXNlcjogVXNlciB8IG51bGw7XG4gICAgbG9naW5FcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgICB1c2VyRXhpc3RzRXJyb3I6IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJTdGF0ZSA9IHtcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICB1c2VyOiBudWxsLFxuICAgIGxvZ2luRXJyb3I6IG51bGwsXG4gICAgdXNlckV4aXN0c0Vycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLCB7IGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfT4oJ3VzZXIvbG9naW4nLCBhc3luYyh7ZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvbG9naW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnVzZXI7XG59KTtcblxuZXhwb3J0IGNvbnN0IE9BdXRoID0gY3JlYXRlQXN5bmNUaHVuazxVc2VyLCBhbnksIHsgcmVqZWN0VmFsdWU6IHN0cmluZyB9PihcbiAgICAndXNlci9PQXV0aCcsXG4gICAgYXN5bmMgKE9BdXRocmVzcG9uc2UsIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvZ29vZ2xlT0F1dGhcIiwgT0F1dGhyZXNwb25zZSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBc3N1bWluZyBiYWNrZW5kIHJldHVybnMgdXNlciBhbmQgdG9rZW5cbiAgICAgICAgY29uc3QgeyB1c2VyLCB0b2tlbm4gfSA9IHJlc3BvbnNlLmRhdGE7XG4gIFxuICAgICAgICAvLyBPcHRpb25hbGx5IHN0b3JlIHRva2VuIGluIGxvY2FsIHN0b3JhZ2Ugb3IgY29va2llIGlmIG5lZWRlZFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbm4pO1xuICBcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpICYmIGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdVc2VyIGV4aXN0cy4gUGxlYXNlIHNpZ24gaW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnRXJyb3IgZnJvbSBzZXJ2ZXI6ICcgKyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdFcnJvciBzZW5kaW5nIHRva2VuOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIFxuXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3VzZXInLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2dpbkVycm9yID0gJyc7XG4gICAgICAgICAgICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIGFzIHN0cmluZztcbiAgICAgICAgICAgIH0pXG5cbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJ1c2VyIiwibG9naW5FcnJvciIsInVzZXJFeGlzdHNFcnJvciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJPQXV0aCIsIk9BdXRocmVzcG9uc2UiLCJyZWplY3RXaXRoVmFsdWUiLCJ0b2tlbm4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/userSlice.ts\n"));

/***/ })

});