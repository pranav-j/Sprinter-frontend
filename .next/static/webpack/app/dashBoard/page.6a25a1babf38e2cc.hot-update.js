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

/***/ "(app-pages-browser)/./redux/slices/items/itemsSlice.ts":
/*!******************************************!*\
  !*** ./redux/slices/items/itemsSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    error: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = cre;\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBZ0MxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsT0FBTztBQUNYO0FBRU8sTUFBTUMsYUFBYU4sa0VBQWdCQSxDQUFrQixvQkFBb0IsT0FBTU87SUFDbEYsTUFBTUMsV0FBWSxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDLDZDQUE4RCxPQUFqQkYsbUJBQW9CO1FBQUVHLGlCQUFpQjtJQUFLO0lBQzNILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1AsS0FBSztBQUM5QixHQUFHO0FBRUgsK0tBQStLO0FBQy9LLCtHQUErRztBQUMvRyw0QkFBNEI7QUFDNUIsTUFBTTtBQUVDLE1BQU1RLGFBQWFaLGtFQUFnQkEsQ0FDdEMsb0JBQ0EsT0FBT2E7SUFDTCxNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQy9CLGtDQUNBRCxVQUNBO1FBQ0VFLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUwsaUJBQWlCO0lBQ25CO0lBRUYsT0FBT0YsU0FBU0csSUFBSTtBQUN0QixHQUNGO0FBRUssTUFBTUssYUFBYUMsSUFBRztBQUc3QixNQUFNQyxhQUFhbkIsNkRBQVdBLENBQUM7SUFDM0JvQixNQUFNO0lBQ05qQjtJQUNBa0IsVUFBVSxDQUFDO0lBQ1hDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFDS0MsT0FBTyxDQUFDakIsV0FBV2tCLE9BQU8sRUFBRSxDQUFDQztZQUMxQkEsTUFBTXRCLE1BQU0sR0FBRztRQUNuQixHQUNDb0IsT0FBTyxDQUFDakIsV0FBV29CLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNuQ0YsTUFBTXRCLE1BQU0sR0FBRztZQUNmc0IsTUFBTXJCLEtBQUssR0FBR3VCLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0wsT0FBTyxDQUFDakIsV0FBV3VCLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUNsQ0YsTUFBTXRCLE1BQU0sR0FBRztZQUNmc0IsTUFBTXBCLEtBQUssR0FBR3NCLE9BQU90QixLQUFLLENBQUN5QixPQUFPLElBQUk7UUFDMUMsR0FDQ1AsT0FBTyxDQUFDWCxXQUFXYyxTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDbkNGLE1BQU1yQixLQUFLLENBQUMyQixJQUFJLENBQUNKLE9BQU9DLE9BQU87UUFDbkM7SUFDUjtBQUNKO0FBRUEsK0RBQWVWLFdBQVdjLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZXMvaXRlbXMvaXRlbXNTbGljZS50cz83OWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdHRhY2htZW50IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgbWV0YWRhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtbSB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgc3ByaW50SWQ/OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICAgIG9yZGVyPzogbnVtYmVyO1xuICAgIGFzc2lnbmVlPzogc3RyaW5nO1xuICAgIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudFtdO1xufTtcblxuaW50ZXJmYWNlIEl0ZW1zU2xpY2Uge1xuICAgIHN0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIGl0ZW1zOiBJdGVtbVtdO1xuICAgIGVycm9yOiBzdHJpbmcgfCBudWxsO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJdGVtc1NsaWNlID0ge1xuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBlcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEl0ZW1zID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbVtdLCBzdHJpbmc+KCdpdGVtcy9mZXRjaEl0ZW1zJywgYXN5bmMoY3VycmVudFByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2l0ZW1zP3Byb2plY3RJZD0ke2N1cnJlbnRQcm9qZWN0SWR9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuaXRlbXM7XG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCBPbWl0PEl0ZW1tLCAnX2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAnc3ByaW50SWQnIHwgJ3N0YXR1cycgfCAnb3JkZXInID4+KCdpdGVtcy9jcmVhdGVJdGVtJywgYXN5bmMobmV3SXRlbSkgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbVwiLCBuZXdJdGVtLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbi8vICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbi8vIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSXRlbSA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW0sIEZvcm1EYXRhPihcbiAgICAnaXRlbXMvY3JlYXRlSXRlbScsXG4gICAgYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2l0ZW0nLFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IGNyZVxuICBcblxuY29uc3QgaXRlbXNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAnaXRlbXMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hJdGVtcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncGVuZGluZyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hJdGVtcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEl0ZW1tW10+KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2Z1bGZpbGxlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXRlbXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEl0ZW1zLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGZldGNoIGl0ZW1zJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShjcmVhdGVJdGVtLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIH0pXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwiaXRlbXMiLCJlcnJvciIsImZldGNoSXRlbXMiLCJjdXJyZW50UHJvamVjdElkIiwicmVzcG9uc2UiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiY3JlYXRlSXRlbSIsImZvcm1EYXRhIiwicG9zdCIsImhlYWRlcnMiLCJ1cGRhdGVJdGVtIiwiY3JlIiwiaXRlbXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJwdXNoIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});