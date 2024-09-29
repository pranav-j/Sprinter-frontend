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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSprint: function() { return /* binding */ createSprint; },\n/* harmony export */   fetchSprints: function() { return /* binding */ fetchSprints; },\n/* harmony export */   startSprint: function() { return /* binding */ startSprint; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    sprints: [],\n    error: null\n};\nconst fetchSprints = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/fetchSprints\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/sprints?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    // console.log('Sprints........', response.data.sprints);    \n    return response.data.sprints;\n});\nconst createSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/createSprint\", async (newSprint)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/sprint\", newSprint, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst startSprint = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"sprints/startSprint\", async (sprintId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/startSprint\", {\n        sprintId\n    }, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst sprintsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"sprints\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchSprints.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchSprints.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.sprints = action.payload;\n        }).addCase(fetchSprints.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch sprints\";\n        }).addCase(createSprint.fulfilled, (state, action)=>{\n            state.sprints.push(action.payload);\n        }).addCase(startSprint.fulfilled, (state, action)=>{\n            const index = state.sprints.findIndex((sprint)=>sprint._id === action.payload.sprint._id);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (sprintsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9zcHJpbnRzL3NwcmludHNTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRjtBQUN0RDtBQW9CMUIsTUFBTUcsZUFBNkI7SUFDL0JDLFFBQVE7SUFDUkMsU0FBUyxFQUFFO0lBQ1hDLE9BQU87QUFDWDtBQUVPLE1BQU1DLGVBQWVOLGtFQUFnQkEsQ0FBbUIsd0JBQXdCLE9BQU1PO0lBQ3pGLE1BQU1DLFdBQVcsTUFBTVAsNkNBQUtBLENBQUNRLEdBQUcsQ0FBQywrQ0FBZ0UsT0FBakJGLG1CQUFvQjtRQUFFRyxpQkFBaUI7SUFBSztJQUM1SCw2REFBNkQ7SUFDN0QsT0FBT0YsU0FBU0csSUFBSSxDQUFDUCxPQUFPO0FBQ2hDLEdBQUc7QUFFSSxNQUFNUSxlQUFlWixrRUFBZ0JBLENBQXVGLHdCQUF3QixPQUFNYTtJQUM3SixNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQUMsb0NBQW9DRCxXQUFXO1FBQUVILGlCQUFpQjtJQUFLO0lBQ3pHLE9BQU9GLFNBQVNHLElBQUk7QUFDeEIsR0FBRTtBQUVLLE1BQU1JLGNBQWNmLGtFQUFnQkEsQ0FDdkMsdUJBQ0EsT0FBTWdCO0lBQ0YsTUFBTVIsV0FBVyxNQUFNUCw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLHlDQUF5QztRQUFFRTtJQUFTLEdBQUc7UUFBRU4saUJBQWlCO0lBQUs7SUFDakgsT0FBT0YsU0FBU0csSUFBSTtBQUN4QixHQUNIO0FBRUQsTUFBTU0sZUFBZWxCLDZEQUFXQSxDQUFDO0lBQzdCbUIsTUFBTTtJQUNOaEI7SUFDQWlCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2hCLGFBQWFpQixPQUFPLEVBQUUsQ0FBQ0M7WUFDNUJBLE1BQU1yQixNQUFNLEdBQUc7UUFDbkIsR0FDQ21CLE9BQU8sQ0FBQ2hCLGFBQWFtQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDckNGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1wQixPQUFPLEdBQUdzQixPQUFPQyxPQUFPO1FBQ2xDLEdBQ0NMLE9BQU8sQ0FBQ2hCLGFBQWFzQixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDcENGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1uQixLQUFLLEdBQUdxQixPQUFPckIsS0FBSyxDQUFDd0IsT0FBTyxJQUFJO1FBQzFDLEdBQ0NQLE9BQU8sQ0FBQ1YsYUFBYWEsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3JDRixNQUFNcEIsT0FBTyxDQUFDMEIsSUFBSSxDQUFDSixPQUFPQyxPQUFPO1FBQ3JDLEdBQ0NMLE9BQU8sQ0FBQ1AsWUFBWVUsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3BDLE1BQU1LLFFBQVFQLE1BQU1wQixPQUFPLENBQUM0QixTQUFTLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsR0FBRyxLQUFLUixPQUFPQyxPQUFPLENBQUNNLE1BQU0sQ0FBQ0MsR0FBRztRQUU5RjtJQUNSO0FBQ0o7QUFFQSwrREFBZWpCLGFBQWFrQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL3NwcmludHMvc3ByaW50c1NsaWNlLnRzPzA4NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwcmludCB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgc3ByaW50TmFtZTogc3RyaW5nO1xuICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgIGR1cmF0aW9uSW5XZWVrczogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgc3RhcnRlZE9uPzogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFNwcmludHNTbGljZSB7XG4gICAgc3RhdHVzOiAnaWRsZScgfCAncGVuZGluZycgfCAnZnVsZmlsbGVkJyB8ICdyZWplY3RlZCc7XG4gICAgc3ByaW50czogU3ByaW50W107XG4gICAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU3ByaW50c1NsaWNlID0ge1xuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIHNwcmludHM6IFtdLFxuICAgIGVycm9yOiBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTcHJpbnRzID0gY3JlYXRlQXN5bmNUaHVuazxTcHJpbnRbXSwgc3RyaW5nPignc3ByaW50cy9mZXRjaFNwcmludHMnLCBhc3luYyhjdXJyZW50UHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9zcHJpbnRzP3Byb2plY3RJZD0ke2N1cnJlbnRQcm9qZWN0SWR9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ1NwcmludHMuLi4uLi4uLicsIHJlc3BvbnNlLmRhdGEuc3ByaW50cyk7ICAgIFxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnNwcmludHM7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNwcmludCA9IGNyZWF0ZUFzeW5jVGh1bms8U3ByaW50LCBPbWl0PFNwcmludCwgJ19pZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ2NyZWF0ZWRCeScgfCAnc3RhcnRlZE9uJyA+Pignc3ByaW50cy9jcmVhdGVTcHJpbnQnLCBhc3luYyhuZXdTcHJpbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL3NwcmludFwiLCBuZXdTcHJpbnQsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59KVxuXG5leHBvcnQgY29uc3Qgc3RhcnRTcHJpbnQgPSBjcmVhdGVBc3luY1RodW5rKFxuICAgICdzcHJpbnRzL3N0YXJ0U3ByaW50JyxcbiAgICBhc3luYyhzcHJpbnRJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvc3RhcnRTcHJpbnRcIiwgeyBzcHJpbnRJZCB9LCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKVxuXG5jb25zdCBzcHJpbnRzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3NwcmludHMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hTcHJpbnRzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaFNwcmludHMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxTcHJpbnRbXT4pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5zcHJpbnRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hTcHJpbnRzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGZldGNoIHNwcmludHMnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGNyZWF0ZVNwcmludC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3ByaW50cy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKHN0YXJ0U3ByaW50LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnNwcmludHMuZmluZEluZGV4KChzcHJpbnQpID0+IHNwcmludC5faWQgPT09IGFjdGlvbi5wYXlsb2FkLnNwcmludC5faWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3ByaW50c1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwic3ByaW50cyIsImVycm9yIiwiZmV0Y2hTcHJpbnRzIiwiY3VycmVudFByb2plY3RJZCIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImNyZWF0ZVNwcmludCIsIm5ld1NwcmludCIsInBvc3QiLCJzdGFydFNwcmludCIsInNwcmludElkIiwic3ByaW50c1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwibWVzc2FnZSIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsInNwcmludCIsIl9pZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/sprints/sprintsSlice.ts\n"));

/***/ })

});