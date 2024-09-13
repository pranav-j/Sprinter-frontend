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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    errorFetchingItems: null,\n    errorCreatingItem: null,\n    errorUpdatingItem: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/updateItem\", async (param)=>{\n    let { id, updatedData } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"http://localhost:3030/api/item/\".concat(id), updatedData, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.errorFetchingItems = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        }).addCase(createItem.rejected, (state, action)=>{\n            state.errorCreatingItem = action.error.message || \"Failed to create item\";\n        }).addCase();\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBa0MxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsb0JBQW9CO0lBQ3BCQyxtQkFBbUI7SUFDbkJDLG1CQUFtQjtBQUN2QjtBQUVPLE1BQU1DLGFBQWFSLGtFQUFnQkEsQ0FBa0Isb0JBQW9CLE9BQU1TO0lBQ2xGLE1BQU1DLFdBQVksTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyw2Q0FBOEQsT0FBakJGLG1CQUFvQjtRQUFFRyxpQkFBaUI7SUFBSztJQUMzSCxPQUFPRixTQUFTRyxJQUFJLENBQUNULEtBQUs7QUFDOUIsR0FBRztBQUVILCtLQUErSztBQUMvSywrR0FBK0c7QUFDL0csNEJBQTRCO0FBQzVCLE1BQU07QUFFQyxNQUFNVSxhQUFhZCxrRUFBZ0JBLENBQ3RDLG9CQUNBLE9BQU9lO0lBQ0wsTUFBTUwsV0FBVyxNQUFNVCw2Q0FBS0EsQ0FBQ2UsSUFBSSxDQUMvQixrQ0FDQUQsVUFDQTtRQUNFRSxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FMLGlCQUFpQjtJQUNuQjtJQUVGLE9BQU9GLFNBQVNHLElBQUk7QUFDdEIsR0FDRjtBQUVLLE1BQU1LLGFBQWFsQixrRUFBZ0JBLENBQ3RDLG9CQUNBO1FBQU0sRUFBQ21CLEVBQUUsRUFBRUMsV0FBVyxFQUFDO0lBQ25CLE1BQU1WLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNvQixHQUFHLENBQzVCLGtDQUFxQyxPQUFIRixLQUNsQ0MsYUFDQTtRQUFFUixpQkFBaUI7SUFBSztJQUUxQixPQUFPRixTQUFTRyxJQUFJO0FBQzFCLEdBQ0Y7QUFHRixNQUFNUyxhQUFhdkIsNkRBQVdBLENBQUM7SUFDM0J3QixNQUFNO0lBQ05yQjtJQUNBc0IsVUFBVSxDQUFDO0lBQ1hDLGVBQWUsQ0FBQ0M7UUFDWkEsUUFDS0MsT0FBTyxDQUFDbkIsV0FBV29CLE9BQU8sRUFBRSxDQUFDQztZQUMxQkEsTUFBTTFCLE1BQU0sR0FBRztRQUNuQixHQUNDd0IsT0FBTyxDQUFDbkIsV0FBV3NCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNuQ0YsTUFBTTFCLE1BQU0sR0FBRztZQUNmMEIsTUFBTXpCLEtBQUssR0FBRzJCLE9BQU9DLE9BQU87UUFDaEMsR0FDQ0wsT0FBTyxDQUFDbkIsV0FBV3lCLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUNsQ0YsTUFBTTFCLE1BQU0sR0FBRztZQUNmMEIsTUFBTXhCLGtCQUFrQixHQUFHMEIsT0FBT0csS0FBSyxDQUFDQyxPQUFPLElBQUk7UUFDdkQsR0FDQ1IsT0FBTyxDQUFDYixXQUFXZ0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ25DRixNQUFNekIsS0FBSyxDQUFDZ0MsSUFBSSxDQUFDTCxPQUFPQyxPQUFPO1FBQ25DLEdBQ0NMLE9BQU8sQ0FBQ2IsV0FBV21CLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUNsQ0YsTUFBTXZCLGlCQUFpQixHQUFHeUIsT0FBT0csS0FBSyxDQUFDQyxPQUFPLElBQUk7UUFDdEQsR0FDQ1IsT0FBTztJQUNoQjtBQUNKO0FBRUEsK0RBQWVMLFdBQVdlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZXMvaXRlbXMvaXRlbXNTbGljZS50cz83OWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBdHRhY2htZW50IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICBzaXplOiBudW1iZXI7XG4gICAgbWV0YWRhdGE6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtbSB7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgcHJvamVjdElkOiBzdHJpbmc7XG4gICAgc3ByaW50SWQ/OiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBzdGFydDogc3RyaW5nO1xuICAgIGVuZDogc3RyaW5nO1xuICAgIGNyZWF0ZWRBdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xuICAgIG9yZGVyPzogbnVtYmVyO1xuICAgIGFzc2lnbmVlPzogc3RyaW5nO1xuICAgIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudFtdO1xufTtcblxuaW50ZXJmYWNlIEl0ZW1zU2xpY2Uge1xuICAgIHN0YXR1czogJ2lkbGUnIHwgJ3BlbmRpbmcnIHwgJ2Z1bGZpbGxlZCcgfCAncmVqZWN0ZWQnO1xuICAgIGl0ZW1zOiBJdGVtbVtdO1xuICAgIGVycm9yRmV0Y2hpbmdJdGVtczogc3RyaW5nIHwgbnVsbDtcbiAgICBlcnJvckNyZWF0aW5nSXRlbTogc3RyaW5nIHwgbnVsbDtcbiAgICBlcnJvclVwZGF0aW5nSXRlbTogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSXRlbXNTbGljZSA9IHtcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICBpdGVtczogW10sXG4gICAgZXJyb3JGZXRjaGluZ0l0ZW1zOiBudWxsLFxuICAgIGVycm9yQ3JlYXRpbmdJdGVtOiBudWxsLFxuICAgIGVycm9yVXBkYXRpbmdJdGVtOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJdGVtcyA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW1bXSwgc3RyaW5nPignaXRlbXMvZmV0Y2hJdGVtcycsIGFzeW5jKGN1cnJlbnRQcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtcz9wcm9qZWN0SWQ9JHtjdXJyZW50UHJvamVjdElkfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW1zO1xufSk7XG5cbi8vIGV4cG9ydCBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgT21pdDxJdGVtbSwgJ19pZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3NwcmludElkJyB8ICdzdGF0dXMnIHwgJ29yZGVyJyA+PignaXRlbXMvY3JlYXRlSXRlbScsIGFzeW5jKG5ld0l0ZW0pID0+IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2l0ZW1cIiwgbmV3SXRlbSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCBGb3JtRGF0YT4oXG4gICAgJ2l0ZW1zL2NyZWF0ZUl0ZW0nLFxuICAgIGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtJyxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCB7IGlkOiBzdHJpbmc7IHVwZGF0ZWREYXRhOiBQYXJ0aWFsPEl0ZW1tPiB9PihcbiAgICAnaXRlbXMvdXBkYXRlSXRlbScsXG4gICAgYXN5bmMoe2lkLCB1cGRhdGVkRGF0YX0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtLyR7aWR9YCxcbiAgICAgICAgICAgIHVwZGF0ZWREYXRhLFxuICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcbiAgXG5cbmNvbnN0IGl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2l0ZW1zJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJdGVtbVtdPikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLml0ZW1zID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hJdGVtcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yRmV0Y2hpbmdJdGVtcyA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZmV0Y2ggaXRlbXMnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGNyZWF0ZUl0ZW0uZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGNyZWF0ZUl0ZW0ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JDcmVhdGluZ0l0ZW0gPSBhY3Rpb24uZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGNyZWF0ZSBpdGVtJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZSgpXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwic3RhdHVzIiwiaXRlbXMiLCJlcnJvckZldGNoaW5nSXRlbXMiLCJlcnJvckNyZWF0aW5nSXRlbSIsImVycm9yVXBkYXRpbmdJdGVtIiwiZmV0Y2hJdGVtcyIsImN1cnJlbnRQcm9qZWN0SWQiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImRhdGEiLCJjcmVhdGVJdGVtIiwiZm9ybURhdGEiLCJwb3N0IiwiaGVhZGVycyIsInVwZGF0ZUl0ZW0iLCJpZCIsInVwZGF0ZWREYXRhIiwicHV0IiwiaXRlbXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsImVycm9yIiwibWVzc2FnZSIsInB1c2giLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});