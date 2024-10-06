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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OAuth: function() { return /* binding */ OAuth; },\n/* harmony export */   login: function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    user: null,\n    loginError: null,\n    userExistsError: null\n};\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/login\", async (param)=>{\n    let { email, password } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/login\", {\n        email,\n        password\n    }, {\n        withCredentials: true\n    });\n    return response.data.user;\n});\nconst OAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"user/OAuth\", async (OAuthresponse, param)=>{\n    let { rejectWithValue } = param;\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/googleOAuth\", OAuthresponse, {\n            withCredentials: true\n        });\n        const { user, tokenn } = response.data;\n        return user;\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(error) && error.response) {\n            if (error.response.status === 409) {\n                return rejectWithValue(\"User exists. Please sign in with email and password\");\n            } else {\n                return rejectWithValue(\"Error from server: \" + error.response.data.message);\n            }\n        } else {\n            return rejectWithValue(\"Error sending token: \" + error.message);\n        }\n    }\n});\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(login.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.loginError = \"\";\n            state.user = action.payload;\n        }).addCase(login.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.loginError = action.error.message;\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUN2QztBQWlCMUIsTUFBTUcsZUFBMEI7SUFDNUJDLFFBQVE7SUFDUkMsTUFBTTtJQUNOQyxZQUFZO0lBQ1pDLGlCQUFpQjtBQUNyQjtBQUVPLE1BQU1DLFFBQVFSLGtFQUFnQkEsQ0FBNEMsY0FBYztRQUFNLEVBQUNTLEtBQUssRUFBRUMsUUFBUSxFQUFDO0lBQ2xILE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLElBQUksQ0FBQyxtQ0FBbUM7UUFBRUg7UUFBT0M7SUFBUyxHQUFHO1FBQUNHLGlCQUFpQjtJQUFJO0lBQ2hILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1QsSUFBSTtBQUM3QixHQUFHO0FBRUksTUFBTVUsUUFBUWYsa0VBQWdCQSxDQUNqQyxjQUNBLE9BQU9nQjtRQUFlLEVBQUVDLGVBQWUsRUFBRTtJQUN2QyxJQUFJO1FBQ0YsTUFBTU4sV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsSUFBSSxDQUFDLHlDQUF5Q0ksZUFBZTtZQUFFSCxpQkFBaUI7UUFBSztRQUVsSCxNQUFNLEVBQUVSLElBQUksRUFBRWEsTUFBTSxFQUFFLEdBQUdQLFNBQVNHLElBQUk7UUFHdEMsT0FBT1Q7SUFDVCxFQUFFLE9BQU9jLE9BQVk7UUFDbkIsSUFBSWpCLDZDQUFLQSxDQUFDa0IsWUFBWSxDQUFDRCxVQUFVQSxNQUFNUixRQUFRLEVBQUU7WUFDL0MsSUFBSVEsTUFBTVIsUUFBUSxDQUFDUCxNQUFNLEtBQUssS0FBSztnQkFDakMsT0FBT2EsZ0JBQWdCO1lBQ3pCLE9BQU87Z0JBQ0wsT0FBT0EsZ0JBQWdCLHdCQUF3QkUsTUFBTVIsUUFBUSxDQUFDRyxJQUFJLENBQUNPLE9BQU87WUFDNUU7UUFDRixPQUFPO1lBQ0wsT0FBT0osZ0JBQWdCLDBCQUEwQkUsTUFBTUUsT0FBTztRQUNoRTtJQUNGO0FBQ0YsR0FDRjtBQUVGLE1BQU1DLFlBQVlyQiw2REFBV0EsQ0FBQztJQUMxQnNCLE1BQU07SUFDTnBCO0lBQ0FxQixVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNuQixNQUFNb0IsT0FBTyxFQUFFLENBQUNDO1lBQ3JCQSxNQUFNekIsTUFBTSxHQUFHO1FBQ25CLEdBQ0N1QixPQUFPLENBQUNuQixNQUFNc0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQzlCRixNQUFNekIsTUFBTSxHQUFHO1lBQ2Z5QixNQUFNdkIsVUFBVSxHQUFHO1lBQ25CdUIsTUFBTXhCLElBQUksR0FBRzBCLE9BQU9DLE9BQU87UUFDL0IsR0FDQ0wsT0FBTyxDQUFDbkIsTUFBTXlCLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUM3QkYsTUFBTXpCLE1BQU0sR0FBRztZQUNmeUIsTUFBTXZCLFVBQVUsR0FBR3lCLE9BQU9aLEtBQUssQ0FBQ0UsT0FBTztRQUMzQztJQUVSO0FBQ0o7QUFFQSwrREFBZUMsVUFBVVksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy91c2VyU2xpY2UudHM/ZmRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICBwcm9maWxlUGljPzogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBVc2VyU3RhdGUge1xuICAgIHN0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIHVzZXI6IFVzZXIgfCBudWxsO1xuICAgIGxvZ2luRXJyb3I6IHN0cmluZyB8IG51bGw7XG4gICAgdXNlckV4aXN0c0Vycm9yOiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgdXNlcjogbnVsbCxcbiAgICBsb2dpbkVycm9yOiBudWxsLFxuICAgIHVzZXJFeGlzdHNFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlciwgeyBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0+KCd1c2VyL2xvZ2luJywgYXN5bmMoe2VtYWlsLCBwYXNzd29yZH0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS51c2VyO1xufSk7XG5cbmV4cG9ydCBjb25zdCBPQXV0aCA9IGNyZWF0ZUFzeW5jVGh1bms8VXNlciwgYW55LCB7IHJlamVjdFZhbHVlOiBzdHJpbmcgfT4oXG4gICAgJ3VzZXIvT0F1dGgnLFxuICAgIGFzeW5jIChPQXV0aHJlc3BvbnNlLCB7IHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2dvb2dsZU9BdXRoXCIsIE9BdXRocmVzcG9uc2UsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeyB1c2VyLCB0b2tlbm4gfSA9IHJlc3BvbnNlLmRhdGE7XG4gIFxuICBcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpICYmIGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA5KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdVc2VyIGV4aXN0cy4gUGxlYXNlIHNpZ24gaW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZSgnRXJyb3IgZnJvbSBzZXJ2ZXI6ICcgKyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKCdFcnJvciBzZW5kaW5nIHRva2VuOiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pOyAgXG5cbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAndXNlcicsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxvZ2luRXJyb3IgPSAnJztcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgYXMgc3RyaW5nO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsInVzZXIiLCJsb2dpbkVycm9yIiwidXNlckV4aXN0c0Vycm9yIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJwb3N0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsIk9BdXRoIiwiT0F1dGhyZXNwb25zZSIsInJlamVjdFdpdGhWYWx1ZSIsInRva2VubiIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwibWVzc2FnZSIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/userSlice.ts\n"));

/***/ })

});