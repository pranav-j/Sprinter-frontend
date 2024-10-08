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

/***/ "(app-pages-browser)/./redux/slices/sprints/sprintsSlice.ts":
/*!**********************************************!*\
  !*** ./redux/slices/sprints/sprintsSlice.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSprint: function() { return /* binding */ createSprint; },\n/* harmony export */   fetchSprints: function() { return /* binding */ fetchSprints; },\n/* harmony export */   startSprint: function() { return /* binding */ startSprint; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    fetchSprintsStatus: \"idle\",\n    startSprintsstatus: \"idle\",\n    sprints: [],\n    error: null\n};\nconst fetchSprints = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/fetchSprints\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/sprints?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    // console.log('Sprints........', response.data.sprints);    \n    return response.data.sprints;\n});\nconst createSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/createSprint\", async (newSprint)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/sprint\", newSprint, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst startSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/startSprint\", async (sprintId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/startSprint\", {\n        sprintId\n    }, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst sprintsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"sprints\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchSprints.pending, (state)=>{\n            state.fetchSprintsStatus = \"pending\";\n        }).addCase(fetchSprints.fulfilled, (state, action)=>{\n            state.fetchSprintsStatus = \"fulfilled\";\n            state.sprints = action.payload;\n        }).addCase(fetchSprints.rejected, (state, action)=>{\n            state.fetchSprintsStatus = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch sprints\";\n        }).addCase(createSprint.fulfilled, (state, action)=>{\n            state.sprints.push(action.payload);\n        }).addCase(startSprint.pending, (state)=>{\n            state.startSprintsstatus = \"pending\";\n        }).addCase(startSprint.fulfilled, (state, action)=>{\n            const index = state.sprints.findIndex((sprint)=>sprint._id === action.payload.sprint._id);\n            if (index !== -1) {\n                state.sprints[index] = action.payload.sprint;\n            }\n            state.startSprintsstatus = \"fulfilled\";\n        }).addCase(startSprint.rejected, (state)=>{\n            state.startSprintsstatus = \"rejected\";\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (sprintsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRjtBQUN0RDtBQXFCMUIsTUFBTUcsZUFBNkI7SUFDL0JDLG9CQUFvQjtJQUNwQkMsb0JBQW9CO0lBQ3BCQyxTQUFTLEVBQUU7SUFDWEMsT0FBTztBQUNYO0FBRU8sTUFBTUMsZUFBZVAsa0VBQWdCQSxDQUFtQix3QkFBd0IsT0FBTVE7SUFDekYsTUFBTUMsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDLCtDQUFnRSxPQUFqQkYsbUJBQW9CO1FBQUVHLGlCQUFpQjtJQUFLO0lBQzVILDZEQUE2RDtJQUM3RCxPQUFPRixTQUFTRyxJQUFJLENBQUNQLE9BQU87QUFDaEMsR0FBRztBQUVJLE1BQU1RLGVBQWViLGtFQUFnQkEsQ0FBdUYsd0JBQXdCLE9BQU1jO0lBQzdKLE1BQU1MLFdBQVcsTUFBTVIsNkNBQUtBLENBQUNjLElBQUksQ0FBQyxvQ0FBb0NELFdBQVc7UUFBRUgsaUJBQWlCO0lBQUs7SUFDekcsT0FBT0YsU0FBU0csSUFBSTtBQUN4QixHQUFHO0FBRUksTUFBTUksY0FBY2hCLGtFQUFnQkEsQ0FDdkMsdUJBQ0EsT0FBTWlCO0lBQ0YsTUFBTVIsV0FBVyxNQUFNUiw2Q0FBS0EsQ0FBQ2MsSUFBSSxDQUFFLHlDQUF3QztRQUFFRTtJQUFTLEdBQUc7UUFBRU4saUJBQWlCO0lBQUs7SUFDakgsT0FBT0YsU0FBU0csSUFBSTtBQUN4QixHQUNGO0FBRUYsTUFBTU0sZUFBZW5CLDZEQUFXQSxDQUFDO0lBQzdCb0IsTUFBTTtJQUNOakI7SUFDQWtCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2hCLGFBQWFpQixPQUFPLEVBQUUsQ0FBQ0M7WUFDNUJBLE1BQU10QixrQkFBa0IsR0FBRztRQUMvQixHQUNDb0IsT0FBTyxDQUFDaEIsYUFBYW1CLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNyQ0YsTUFBTXRCLGtCQUFrQixHQUFHO1lBQzNCc0IsTUFBTXBCLE9BQU8sR0FBR3NCLE9BQU9DLE9BQU87UUFDbEMsR0FDQ0wsT0FBTyxDQUFDaEIsYUFBYXNCLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUNwQ0YsTUFBTXRCLGtCQUFrQixHQUFHO1lBQzNCc0IsTUFBTW5CLEtBQUssR0FBR3FCLE9BQU9yQixLQUFLLENBQUN3QixPQUFPLElBQUk7UUFDMUMsR0FDQ1AsT0FBTyxDQUFDVixhQUFhYSxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDckNGLE1BQU1wQixPQUFPLENBQUMwQixJQUFJLENBQUNKLE9BQU9DLE9BQU87UUFDckMsR0FDQ0wsT0FBTyxDQUFDUCxZQUFZUSxPQUFPLEVBQUUsQ0FBQ0M7WUFDM0JBLE1BQU1yQixrQkFBa0IsR0FBRztRQUMvQixHQUNDbUIsT0FBTyxDQUFDUCxZQUFZVSxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDcEMsTUFBTUssUUFBUVAsTUFBTXBCLE9BQU8sQ0FBQzRCLFNBQVMsQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxHQUFHLEtBQUtSLE9BQU9DLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxHQUFHO1lBQzFGLElBQUdILFVBQVUsQ0FBQyxHQUFHO2dCQUNiUCxNQUFNcEIsT0FBTyxDQUFDMkIsTUFBTSxHQUFHTCxPQUFPQyxPQUFPLENBQUNNLE1BQU07WUFDaEQ7WUFDQVQsTUFBTXJCLGtCQUFrQixHQUFHO1FBQy9CLEdBQ0NtQixPQUFPLENBQUNQLFlBQVlhLFFBQVEsRUFBRSxDQUFDSjtZQUM1QkEsTUFBTXJCLGtCQUFrQixHQUFHO1FBQy9CO0lBQ1I7QUFDSjtBQUVBLCtEQUFlYyxhQUFha0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZS50cz8wODU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTcHJpbnQge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIHByb2plY3RJZDogc3RyaW5nO1xuICAgIHNwcmludE5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkQnk6IHN0cmluZztcbiAgICBkdXJhdGlvbkluV2Vla3M6IG51bWJlcjtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHN0YXJ0ZWRPbj86IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmludGVyZmFjZSBTcHJpbnRzU2xpY2Uge1xuICAgIGZldGNoU3ByaW50c1N0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIHN0YXJ0U3ByaW50c3N0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIHNwcmludHM6IFNwcmludFtdO1xuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFNwcmludHNTbGljZSA9IHtcbiAgICBmZXRjaFNwcmludHNTdGF0dXM6ICdpZGxlJyxcbiAgICBzdGFydFNwcmludHNzdGF0dXM6ICdpZGxlJyxcbiAgICBzcHJpbnRzOiBbXSxcbiAgICBlcnJvcjogbnVsbCxcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU3ByaW50cyA9IGNyZWF0ZUFzeW5jVGh1bms8U3ByaW50W10sIHN0cmluZz4oJ3NwcmludHMvZmV0Y2hTcHJpbnRzJywgYXN5bmMoY3VycmVudFByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvc3ByaW50cz9wcm9qZWN0SWQ9JHtjdXJyZW50UHJvamVjdElkfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdTcHJpbnRzLi4uLi4uLi4nLCByZXNwb25zZS5kYXRhLnNwcmludHMpOyAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5zcHJpbnRzO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTcHJpbnQgPSBjcmVhdGVBc3luY1RodW5rPFNwcmludCwgT21pdDxTcHJpbnQsICdfaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQnknIHwgJ3N0YXJ0ZWRPbicgPj4oJ3NwcmludHMvY3JlYXRlU3ByaW50JywgYXN5bmMobmV3U3ByaW50KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9zcHJpbnRcIiwgbmV3U3ByaW50LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzdGFydFNwcmludCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICAgJ3NwcmludHMvc3RhcnRTcHJpbnQnLFxuICAgIGFzeW5jKHNwcmludElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3N0YXJ0U3ByaW50YCwgeyBzcHJpbnRJZCB9LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcblxuY29uc3Qgc3ByaW50c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdzcHJpbnRzJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoU3ByaW50cy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5mZXRjaFNwcmludHNTdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hTcHJpbnRzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U3ByaW50W10+KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZmV0Y2hTcHJpbnRzU3RhdHVzID0gJ2Z1bGZpbGxlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3ByaW50cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoU3ByaW50cy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5mZXRjaFNwcmludHNTdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBmZXRjaCBzcHJpbnRzJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShjcmVhdGVTcHJpbnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwcmludHMucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShzdGFydFNwcmludC5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGFydFNwcmludHNzdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2Uoc3RhcnRTcHJpbnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuc3ByaW50cy5maW5kSW5kZXgoKHNwcmludCkgPT4gc3ByaW50Ll9pZCA9PT0gYWN0aW9uLnBheWxvYWQuc3ByaW50Ll9pZCk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNwcmludHNbaW5kZXhdID0gYWN0aW9uLnBheWxvYWQuc3ByaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGFydFNwcmludHNzdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShzdGFydFNwcmludC5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhcnRTcHJpbnRzc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNwcmludHNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsImZldGNoU3ByaW50c1N0YXR1cyIsInN0YXJ0U3ByaW50c3N0YXR1cyIsInNwcmludHMiLCJlcnJvciIsImZldGNoU3ByaW50cyIsImN1cnJlbnRQcm9qZWN0SWQiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJjcmVhdGVTcHJpbnQiLCJuZXdTcHJpbnQiLCJwb3N0Iiwic3RhcnRTcHJpbnQiLCJzcHJpbnRJZCIsInNwcmludHNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJwdXNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcHJpbnQiLCJfaWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/sprints/sprintsSlice.ts\n"));

/***/ })

});