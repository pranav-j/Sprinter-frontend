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

/***/ "(app-pages-browser)/./redux/slices/projects/projectsSlice.ts":
/*!************************************************!*\
  !*** ./redux/slices/projects/projectsSlice.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: function() { return /* binding */ createProject; },\n/* harmony export */   fetchProjects: function() { return /* binding */ fetchProjects; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    projects: []\n};\nconst fetchProjects = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"projects/fetchProjects\", async ()=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/project\", {\n        withCredentials: true\n    });\n    return response.data.projects;\n});\nconst createProject = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"projects/create\", async (project)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/project\", project, {\n        withCredentials: true\n    });\n    console.log(\"response.data.......\", response.data);\n    return response.data;\n});\nconst productsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"projects\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchProjects.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchProjects.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.projects = action.payload;\n        }).addCase(fetchProjects.rejected, (state)=>{\n            state.status = \"rejected\";\n        }).addCase(createProject.fulfilled, (state, action)=>{\n            state.projects.push(action.payload);\n        });\n    }\n});\nconst {} = productsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (productsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9wcm9qZWN0cy9wcm9qZWN0c1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDdkM7QUFvQjFCLE1BQU1HLGVBQThCO0lBQ2hDQyxRQUFRO0lBQ1JDLFVBQVUsRUFBRTtBQUNoQjtBQUVPLE1BQU1DLGdCQUFnQkwsa0VBQWdCQSxDQUFDLDBCQUEwQjtJQUNwRSxNQUFNTSxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxHQUFHLENBQUMscUNBQXFDO1FBQUVDLGlCQUFpQjtJQUFLO0lBQzlGLE9BQU9GLFNBQVNHLElBQUksQ0FBQ0wsUUFBUTtBQUNqQyxHQUFHO0FBRUksTUFBTU0sZ0JBQWdCVixrRUFBZ0JBLENBQUMsbUJBQW1CLE9BQU1XO0lBQ25FLE1BQU1MLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNXLElBQUksQ0FBRSxxQ0FBb0NELFNBQVM7UUFBRUgsaUJBQWlCO0lBQUs7SUFDeEdLLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JSLFNBQVNHLElBQUk7SUFDakQsT0FBT0gsU0FBU0csSUFBSTtBQUN4QixHQUFFO0FBRUYsTUFBTU0sZ0JBQWdCaEIsNkRBQVdBLENBQUM7SUFDOUJpQixNQUFNO0lBQ05kO0lBQ0FlLFVBQVUsQ0FFVjtJQUVBQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2YsY0FBY2dCLE9BQU8sRUFBRSxDQUFDQztZQUM3QkEsTUFBTW5CLE1BQU0sR0FBRztRQUNuQixHQUNDaUIsT0FBTyxDQUFDZixjQUFja0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3RDRixNQUFNbkIsTUFBTSxHQUFHO1lBQ2ZtQixNQUFNbEIsUUFBUSxHQUFHb0IsT0FBT0MsT0FBTztRQUNuQyxHQUNDTCxPQUFPLENBQUNmLGNBQWNxQixRQUFRLEVBQUUsQ0FBQ0o7WUFDOUJBLE1BQU1uQixNQUFNLEdBQUc7UUFDbkIsR0FDQ2lCLE9BQU8sQ0FBQ1YsY0FBY2EsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3RDRixNQUFNbEIsUUFBUSxDQUFDdUIsSUFBSSxDQUFDSCxPQUFPQyxPQUFPO1FBQ3RDO0lBQ1I7QUFDSjtBQUVPLE1BQU0sRUFBSSxHQUFHVixjQUFjYSxPQUFPLENBQUM7QUFDMUMsK0RBQWViLGNBQWNjLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZXMvcHJvamVjdHMvcHJvamVjdHNTbGljZS50cz8zMGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5pbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgIG1lbWJlcnM6IHN0cmluZ1tdO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogc3RyaW5nO1xuICAgIGVuZERhdGU6IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBQcm9qZWN0c1NsaWNlIHtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBwcm9qZWN0czogUHJvamVjdFtdO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBQcm9qZWN0c1NsaWNlID0ge1xuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIHByb2plY3RzOiBbXVxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHMgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9qZWN0cy9mZXRjaFByb2plY3RzJywgYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3Byb2plY3RcIiwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEucHJvamVjdHM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSBjcmVhdGVBc3luY1RodW5rKCdwcm9qZWN0cy9jcmVhdGUnLCBhc3luYyhwcm9qZWN0OiB7IHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9wcm9qZWN0YCwgcHJvamVjdCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlLmRhdGEuLi4uLi4uXCIsIHJlc3BvbnNlLmRhdGEpOyAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufSlcblxuY29uc3QgcHJvZHVjdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAncHJvamVjdHMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuXG4gICAgfSxcblxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvamVjdHMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoUHJvamVjdHMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLnByb2plY3RzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hQcm9qZWN0cy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShjcmVhdGVQcm9qZWN0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9qZWN0cy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB7ICB9ID0gcHJvZHVjdHNTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsInByb2plY3RzIiwiZmV0Y2hQcm9qZWN0cyIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/projects/projectsSlice.ts\n"));

/***/ })

});