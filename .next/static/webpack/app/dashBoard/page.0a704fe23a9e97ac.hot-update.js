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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSprint: function() { return /* binding */ createSprint; },\n/* harmony export */   fetchSprints: function() { return /* binding */ fetchSprints; },\n/* harmony export */   startSprint: function() { return /* binding */ startSprint; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    sprints: [],\n    error: null\n};\nconst fetchSprints = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/fetchSprints\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/sprints?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    // console.log('Sprints........', response.data.sprints);    \n    return response.data.sprints;\n});\nconst createSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/createSprint\", async (newSprint)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/sprint\", newSprint, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst startSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/startSprint\", async (sprintId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/startSprint\", {\n        sprintId\n    }, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst sprintsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"sprints\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchSprints.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchSprints.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.sprints = action.payload;\n        }).addCase(fetchSprints.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch sprints\";\n        }).addCase(createSprint.fulfilled, (state, action)=>{\n            state.sprints.push(action.payload);\n        }).addCase(startSprint.fulfilled, (state, action)=>{\n            const index = state.sprints.findIndex((sprint)=>sprint._id === action.payload.sprint._id);\n            if (index !== -1) {\n                stat;\n            }\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (sprintsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRjtBQUN0RDtBQW9CMUIsTUFBTUcsZUFBNkI7SUFDL0JDLFFBQVE7SUFDUkMsU0FBUyxFQUFFO0lBQ1hDLE9BQU87QUFDWDtBQUVPLE1BQU1DLGVBQWVOLGtFQUFnQkEsQ0FBbUIsd0JBQXdCLE9BQU1PO0lBQ3pGLE1BQU1DLFdBQVcsTUFBTVAsNkNBQUtBLENBQUNRLEdBQUcsQ0FBQywrQ0FBZ0UsT0FBakJGLG1CQUFvQjtRQUFFRyxpQkFBaUI7SUFBSztJQUM1SCw2REFBNkQ7SUFDN0QsT0FBT0YsU0FBU0csSUFBSSxDQUFDUCxPQUFPO0FBQ2hDLEdBQUc7QUFFSSxNQUFNUSxlQUFlWixrRUFBZ0JBLENBQXVGLHdCQUF3QixPQUFNYTtJQUM3SixNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsb0NBQW9DRCxXQUFXO1FBQUVILGlCQUFpQjtJQUFLO0lBQ3pHLE9BQU9GLFNBQVNHLElBQUk7QUFDeEIsR0FBRTtBQUVLLE1BQU1JLGNBQWNmLGtFQUFnQkEsQ0FDdkMsdUJBQ0EsT0FBTWdCO0lBQ0YsTUFBTVIsV0FBVyxNQUFNUCw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLHlDQUF5QztRQUFFRTtJQUFTLEdBQUc7UUFBRU4saUJBQWlCO0lBQUs7SUFDakgsT0FBT0YsU0FBU0csSUFBSTtBQUN4QixHQUNIO0FBRUQsTUFBTU0sZUFBZWxCLDZEQUFXQSxDQUFDO0lBQzdCbUIsTUFBTTtJQUNOaEI7SUFDQWlCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2hCLGFBQWFpQixPQUFPLEVBQUUsQ0FBQ0M7WUFDNUJBLE1BQU1yQixNQUFNLEdBQUc7UUFDbkIsR0FDQ21CLE9BQU8sQ0FBQ2hCLGFBQWFtQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDckNGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1wQixPQUFPLEdBQUdzQixPQUFPQyxPQUFPO1FBQ2xDLEdBQ0NMLE9BQU8sQ0FBQ2hCLGFBQWFzQixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDcENGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1uQixLQUFLLEdBQUdxQixPQUFPckIsS0FBSyxDQUFDd0IsT0FBTyxJQUFJO1FBQzFDLEdBQ0NQLE9BQU8sQ0FBQ1YsYUFBYWEsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3JDRixNQUFNcEIsT0FBTyxDQUFDMEIsSUFBSSxDQUFDSixPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NMLE9BQU8sQ0FBQ1AsWUFBWVUsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3BDLE1BQU1LLFFBQVFQLE1BQU1wQixPQUFPLENBQUM0QixTQUFTLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsR0FBRyxLQUFLUixPQUFPQyxPQUFPLENBQUNNLE1BQU0sQ0FBQ0MsR0FBRztZQUMxRixJQUFHSCxVQUFVLENBQUMsR0FBRztnQkFDYkk7WUFDSjtRQUNKO0lBQ1I7QUFDSjtBQUVBLCtEQUFlbEIsYUFBYW1CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZXMvc3ByaW50cy9zcHJpbnRzU2xpY2UudHM/MDg1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ByaW50IHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICBzcHJpbnROYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgZHVyYXRpb25JbldlZWtzOiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBzdGFydGVkT24/OiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgU3ByaW50c1NsaWNlIHtcbiAgICBzdGF0dXM6ICdpZGxlJyB8ICdwZW5kaW5nJyB8ICdmdWxmaWxsZWQnIHwgJ3JlamVjdGVkJztcbiAgICBzcHJpbnRzOiBTcHJpbnRbXTtcbiAgICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTcHJpbnRzU2xpY2UgPSB7XG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgc3ByaW50czogW10sXG4gICAgZXJyb3I6IG51bGwsXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNwcmludHMgPSBjcmVhdGVBc3luY1RodW5rPFNwcmludFtdLCBzdHJpbmc+KCdzcHJpbnRzL2ZldGNoU3ByaW50cycsIGFzeW5jKGN1cnJlbnRQcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3NwcmludHM/cHJvamVjdElkPSR7Y3VycmVudFByb2plY3RJZH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnU3ByaW50cy4uLi4uLi4uJywgcmVzcG9uc2UuZGF0YS5zcHJpbnRzKTsgICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc3ByaW50cztcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3ByaW50ID0gY3JlYXRlQXN5bmNUaHVuazxTcHJpbnQsIE9taXQ8U3ByaW50LCAnX2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAnY3JlYXRlZEJ5JyB8ICdzdGFydGVkT24nID4+KCdzcHJpbnRzL2NyZWF0ZVNwcmludCcsIGFzeW5jKG5ld1NwcmludCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvc3ByaW50XCIsIG5ld1NwcmludCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0pXG5cbmV4cG9ydCBjb25zdCBzdGFydFNwcmludCA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICAgJ3NwcmludHMvc3RhcnRTcHJpbnQnLFxuICAgIGFzeW5jKHNwcmludElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9zdGFydFNwcmludFwiLCB7IHNwcmludElkIH0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4pXG5cbmNvbnN0IHNwcmludHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnc3ByaW50cycsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFNwcmludHMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoU3ByaW50cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFNwcmludFtdPikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLnNwcmludHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFNwcmludHMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZmV0Y2ggc3ByaW50cyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoY3JlYXRlU3ByaW50LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zcHJpbnRzLnB1c2goYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2Uoc3RhcnRTcHJpbnQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuc3ByaW50cy5maW5kSW5kZXgoKHNwcmludCkgPT4gc3ByaW50Ll9pZCA9PT0gYWN0aW9uLnBheWxvYWQuc3ByaW50Ll9pZCk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcHJpbnRzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJzcHJpbnRzIiwiZXJyb3IiLCJmZXRjaFNwcmludHMiLCJjdXJyZW50UHJvamVjdElkIiwicmVzcG9uc2UiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiY3JlYXRlU3ByaW50IiwibmV3U3ByaW50IiwicG9zdCIsInN0YXJ0U3ByaW50Iiwic3ByaW50SWQiLCJzcHJpbnRzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwicHVzaCIsImluZGV4IiwiZmluZEluZGV4Iiwic3ByaW50IiwiX2lkIiwic3RhdCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/sprints/sprintsSlice.ts\n"));

/***/ })

});