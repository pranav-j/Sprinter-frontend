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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    error: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/updateItem\", async (param)=>{\n    let { id, updatedData } = param;\n});\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBZ0MxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsT0FBTztBQUNYO0FBRU8sTUFBTUMsYUFBYU4sa0VBQWdCQSxDQUFrQixvQkFBb0IsT0FBTU87SUFDbEYsTUFBTUMsV0FBWSxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDLDZDQUE4RCxPQUFqQkYsbUJBQW9CO1FBQUVHLGlCQUFpQjtJQUFLO0lBQzNILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1AsS0FBSztBQUM5QixHQUFHO0FBRUgsK0tBQStLO0FBQy9LLCtHQUErRztBQUMvRyw0QkFBNEI7QUFDNUIsTUFBTTtBQUVDLE1BQU1RLGFBQWFaLGtFQUFnQkEsQ0FDdEMsb0JBQ0EsT0FBT2E7SUFDTCxNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQy9CLGtDQUNBRCxVQUNBO1FBQ0VFLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUwsaUJBQWlCO0lBQ25CO0lBRUYsT0FBT0YsU0FBU0csSUFBSTtBQUN0QixHQUNGO0FBRUssTUFBTUssYUFBYWhCLGtFQUFnQkEsQ0FDdEMsb0JBQ0E7UUFBTSxFQUFDaUIsRUFBRSxFQUFFQyxXQUFXLEVBQUM7QUFFdkIsR0FDSDtBQUdELE1BQU1DLGFBQWFwQiw2REFBV0EsQ0FBQztJQUMzQnFCLE1BQU07SUFDTmxCO0lBQ0FtQixVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNsQixXQUFXbUIsT0FBTyxFQUFFLENBQUNDO1lBQzFCQSxNQUFNdkIsTUFBTSxHQUFHO1FBQ25CLEdBQ0NxQixPQUFPLENBQUNsQixXQUFXcUIsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ25DRixNQUFNdkIsTUFBTSxHQUFHO1lBQ2Z1QixNQUFNdEIsS0FBSyxHQUFHd0IsT0FBT0MsT0FBTztRQUNoQyxHQUNDTCxPQUFPLENBQUNsQixXQUFXd0IsUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQ2xDRixNQUFNdkIsTUFBTSxHQUFHO1lBQ2Z1QixNQUFNckIsS0FBSyxHQUFHdUIsT0FBT3ZCLEtBQUssQ0FBQzBCLE9BQU8sSUFBSTtRQUMxQyxHQUNDUCxPQUFPLENBQUNaLFdBQVdlLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNuQ0YsTUFBTXRCLEtBQUssQ0FBQzRCLElBQUksQ0FBQ0osT0FBT0MsT0FBTztRQUNuQztJQUNSO0FBQ0o7QUFFQSwrREFBZVYsV0FBV2MsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzPzc5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBtZXRhZGF0YTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1tIHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICBzcHJpbnRJZD86IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHN0YXJ0OiBzdHJpbmc7XG4gICAgZW5kOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gICAgb3JkZXI/OiBudW1iZXI7XG4gICAgYXNzaWduZWU/OiBzdHJpbmc7XG4gICAgYXR0YWNobWVudHM/OiBBdHRhY2htZW50W107XG59O1xuXG5pbnRlcmZhY2UgSXRlbXNTbGljZSB7XG4gICAgc3RhdHVzOiAnaWRsZScgfCAncGVuZGluZycgfCAnZnVsZmlsbGVkJyB8ICdyZWplY3RlZCc7XG4gICAgaXRlbXM6IEl0ZW1tW107XG4gICAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEl0ZW1zU2xpY2UgPSB7XG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgaXRlbXM6IFtdLFxuICAgIGVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tW10sIHN0cmluZz4oJ2l0ZW1zL2ZldGNoSXRlbXMnLCBhc3luYyhjdXJyZW50UHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbXM/cHJvamVjdElkPSR7Y3VycmVudFByb2plY3RJZH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5pdGVtcztcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgY3JlYXRlSXRlbSA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW0sIE9taXQ8SXRlbW0sICdfaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICdzcHJpbnRJZCcgfCAnc3RhdHVzJyB8ICdvcmRlcicgPj4oJ2l0ZW1zL2NyZWF0ZUl0ZW0nLCBhc3luYyhuZXdJdGVtKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtXCIsIG5ld0l0ZW0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuLy8gfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgRm9ybURhdGE+KFxuICAgICdpdGVtcy9jcmVhdGVJdGVtJyxcbiAgICBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbScsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgeyBpZDogc3RyaW5nOyB1cGRhdGVkRGF0YTogUGFydGlhbDxJdGVtbT4gfT4oXG4gICAgJ2l0ZW1zL3VwZGF0ZUl0ZW0nLFxuICAgIGFzeW5jKHtpZCwgdXBkYXRlZERhdGF9KSA9PiB7XG4gICAgICAgIFxuICAgIH1cbilcbiAgXG5cbmNvbnN0IGl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2l0ZW1zJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJdGVtbVtdPikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLml0ZW1zID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hJdGVtcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBmZXRjaCBpdGVtcyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoY3JlYXRlSXRlbS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICB9KVxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsIml0ZW1zIiwiZXJyb3IiLCJmZXRjaEl0ZW1zIiwiY3VycmVudFByb2plY3RJZCIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImNyZWF0ZUl0ZW0iLCJmb3JtRGF0YSIsInBvc3QiLCJoZWFkZXJzIiwidXBkYXRlSXRlbSIsImlkIiwidXBkYXRlZERhdGEiLCJpdGVtc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwibWVzc2FnZSIsInB1c2giLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});