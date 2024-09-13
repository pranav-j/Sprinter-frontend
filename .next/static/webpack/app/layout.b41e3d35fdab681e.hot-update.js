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

/***/ "(app-pages-browser)/./redux/slices/items/itemsSlice.ts":
/*!******************************************!*\
  !*** ./redux/slices/items/itemsSlice.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    error: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk;\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.error = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBZ0MxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsT0FBTztBQUNYO0FBRU8sTUFBTUMsYUFBYU4sa0VBQWdCQSxDQUFrQixvQkFBb0IsT0FBTU87SUFDbEYsTUFBTUMsV0FBWSxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDLDZDQUE4RCxPQUFqQkYsbUJBQW9CO1FBQUVHLGlCQUFpQjtJQUFLO0lBQzNILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1AsS0FBSztBQUM5QixHQUFHO0FBRUgsK0tBQStLO0FBQy9LLCtHQUErRztBQUMvRyw0QkFBNEI7QUFDNUIsTUFBTTtBQUVDLE1BQU1RLGFBQWFaLGtFQUFnQkEsQ0FDdEMsb0JBQ0EsT0FBT2E7SUFDTCxNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQy9CLGtDQUNBRCxVQUNBO1FBQ0VFLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUwsaUJBQWlCO0lBQ25CO0lBRUYsT0FBT0YsU0FBU0csSUFBSTtBQUN0QixHQUNGO0FBRUssTUFBTUssYUFBYWhCLDhEQUFnQkEsQ0FBQTtBQUcxQyxNQUFNaUIsYUFBYWxCLDZEQUFXQSxDQUFDO0lBQzNCbUIsTUFBTTtJQUNOaEI7SUFDQWlCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ2hCLFdBQVdpQixPQUFPLEVBQUUsQ0FBQ0M7WUFDMUJBLE1BQU1yQixNQUFNLEdBQUc7UUFDbkIsR0FDQ21CLE9BQU8sQ0FBQ2hCLFdBQVdtQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDbkNGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1wQixLQUFLLEdBQUdzQixPQUFPQyxPQUFPO1FBQ2hDLEdBQ0NMLE9BQU8sQ0FBQ2hCLFdBQVdzQixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDbENGLE1BQU1yQixNQUFNLEdBQUc7WUFDZnFCLE1BQU1uQixLQUFLLEdBQUdxQixPQUFPckIsS0FBSyxDQUFDd0IsT0FBTyxJQUFJO1FBQzFDLEdBQ0NQLE9BQU8sQ0FBQ1YsV0FBV2EsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ25DRixNQUFNcEIsS0FBSyxDQUFDMEIsSUFBSSxDQUFDSixPQUFPQyxPQUFPO1FBQ25DO0lBQ1I7QUFDSjtBQUVBLCtEQUFlVixXQUFXYyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL2l0ZW1zL2l0ZW1zU2xpY2UudHM/NzllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIG1ldGFkYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbW0ge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIHByb2plY3RJZDogc3RyaW5nO1xuICAgIHNwcmludElkPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBhc3NpZ25lZT86IHN0cmluZztcbiAgICBhdHRhY2htZW50cz86IEF0dGFjaG1lbnRbXTtcbn07XG5cbmludGVyZmFjZSBJdGVtc1NsaWNlIHtcbiAgICBzdGF0dXM6ICdpZGxlJyB8ICdwZW5kaW5nJyB8ICdmdWxmaWxsZWQnIHwgJ3JlamVjdGVkJztcbiAgICBpdGVtczogSXRlbW1bXTtcbiAgICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSXRlbXNTbGljZSA9IHtcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICBpdGVtczogW10sXG4gICAgZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJdGVtcyA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW1bXSwgc3RyaW5nPignaXRlbXMvZmV0Y2hJdGVtcycsIGFzeW5jKGN1cnJlbnRQcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtcz9wcm9qZWN0SWQ9JHtjdXJyZW50UHJvamVjdElkfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW1zO1xufSk7XG5cbi8vIGV4cG9ydCBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgT21pdDxJdGVtbSwgJ19pZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3NwcmludElkJyB8ICdzdGF0dXMnIHwgJ29yZGVyJyA+PignaXRlbXMvY3JlYXRlSXRlbScsIGFzeW5jKG5ld0l0ZW0pID0+IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2l0ZW1cIiwgbmV3SXRlbSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCBGb3JtRGF0YT4oXG4gICAgJ2l0ZW1zL2NyZWF0ZUl0ZW0nLFxuICAgIGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtJyxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rXG4gIFxuXG5jb25zdCBpdGVtc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdpdGVtcycsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEl0ZW1zLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEl0ZW1zLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SXRlbW1bXT4pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5pdGVtcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZmV0Y2ggaXRlbXMnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGNyZWF0ZUl0ZW0uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJpdGVtcyIsImVycm9yIiwiZmV0Y2hJdGVtcyIsImN1cnJlbnRQcm9qZWN0SWQiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJjcmVhdGVJdGVtIiwiZm9ybURhdGEiLCJwb3N0IiwiaGVhZGVycyIsInVwZGF0ZUl0ZW0iLCJpdGVtc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwibWVzc2FnZSIsInB1c2giLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});