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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    errorItemCreation: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/updateItem\", async (param)=>{\n    let { id, updatedData } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"http://localhost:3030/api/item/\".concat(id), updatedData, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.erroritemcreation = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBaUMxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsbUJBQW1CO0FBQ3ZCO0FBRU8sTUFBTUMsYUFBYU4sa0VBQWdCQSxDQUFrQixvQkFBb0IsT0FBTU87SUFDbEYsTUFBTUMsV0FBWSxNQUFNUCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFDLDZDQUE4RCxPQUFqQkYsbUJBQW9CO1FBQUVHLGlCQUFpQjtJQUFLO0lBQzNILE9BQU9GLFNBQVNHLElBQUksQ0FBQ1AsS0FBSztBQUM5QixHQUFHO0FBRUgsK0tBQStLO0FBQy9LLCtHQUErRztBQUMvRyw0QkFBNEI7QUFDNUIsTUFBTTtBQUVDLE1BQU1RLGFBQWFaLGtFQUFnQkEsQ0FDdEMsb0JBQ0EsT0FBT2E7SUFDTCxNQUFNTCxXQUFXLE1BQU1QLDZDQUFLQSxDQUFDYSxJQUFJLENBQy9CLGtDQUNBRCxVQUNBO1FBQ0VFLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUwsaUJBQWlCO0lBQ25CO0lBRUYsT0FBT0YsU0FBU0csSUFBSTtBQUN0QixHQUNGO0FBRUssTUFBTUssYUFBYWhCLGtFQUFnQkEsQ0FDdEMsb0JBQ0E7UUFBTSxFQUFDaUIsRUFBRSxFQUFFQyxXQUFXLEVBQUM7SUFDbkIsTUFBTVYsV0FBVyxNQUFNUCw2Q0FBS0EsQ0FBQ2tCLEdBQUcsQ0FDNUIsa0NBQXFDLE9BQUhGLEtBQ2xDQyxhQUNBO1FBQUVSLGlCQUFpQjtJQUFLO0lBRTFCLE9BQU9GLFNBQVNHLElBQUk7QUFDMUIsR0FDRjtBQUdGLE1BQU1TLGFBQWFyQiw2REFBV0EsQ0FBQztJQUMzQnNCLE1BQU07SUFDTm5CO0lBQ0FvQixVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNaQSxRQUNLQyxPQUFPLENBQUNuQixXQUFXb0IsT0FBTyxFQUFFLENBQUNDO1lBQzFCQSxNQUFNeEIsTUFBTSxHQUFHO1FBQ25CLEdBQ0NzQixPQUFPLENBQUNuQixXQUFXc0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ25DRixNQUFNeEIsTUFBTSxHQUFHO1lBQ2Z3QixNQUFNdkIsS0FBSyxHQUFHeUIsT0FBT0MsT0FBTztRQUNoQyxHQUNDTCxPQUFPLENBQUNuQixXQUFXeUIsUUFBUSxFQUFFLENBQUNKLE9BQU9FO1lBQ2xDRixNQUFNeEIsTUFBTSxHQUFHO1lBQ2Z3QixNQUFNSyxpQkFBaUIsR0FBR0gsT0FBT0ksS0FBSyxDQUFDQyxPQUFPLElBQUk7UUFDdEQsR0FDQ1QsT0FBTyxDQUFDYixXQUFXZ0IsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ25DRixNQUFNdkIsS0FBSyxDQUFDK0IsSUFBSSxDQUFDTixPQUFPQyxPQUFPO1FBQ25DO0lBQ1I7QUFDSjtBQUVBLCtEQUFlVixXQUFXZ0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzPzc5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmssIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnQge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGluazogc3RyaW5nO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBtZXRhZGF0YTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1tIHtcbiAgICBfaWQ6IHN0cmluZztcbiAgICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgICBzcHJpbnRJZD86IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIHN0YXJ0OiBzdHJpbmc7XG4gICAgZW5kOiBzdHJpbmc7XG4gICAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gICAgb3JkZXI/OiBudW1iZXI7XG4gICAgYXNzaWduZWU/OiBzdHJpbmc7XG4gICAgYXR0YWNobWVudHM/OiBBdHRhY2htZW50W107XG59O1xuXG5pbnRlcmZhY2UgSXRlbXNTbGljZSB7XG4gICAgc3RhdHVzOiAnaWRsZScgfCAncGVuZGluZycgfCAnZnVsZmlsbGVkJyB8ICdyZWplY3RlZCc7XG4gICAgaXRlbXM6IEl0ZW1tW107XG4gICAgZXJyb3JJdGVtQ3JlYXRpb246IHN0cmluZyB8IG51bGw7XG5cbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSXRlbXNTbGljZSA9IHtcbiAgICBzdGF0dXM6ICdpZGxlJyxcbiAgICBpdGVtczogW10sXG4gICAgZXJyb3JJdGVtQ3JlYXRpb246IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJdGVtcyA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW1bXSwgc3RyaW5nPignaXRlbXMvZmV0Y2hJdGVtcycsIGFzeW5jKGN1cnJlbnRQcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtcz9wcm9qZWN0SWQ9JHtjdXJyZW50UHJvamVjdElkfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW1zO1xufSk7XG5cbi8vIGV4cG9ydCBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgT21pdDxJdGVtbSwgJ19pZCcgfCAnY3JlYXRlZEF0JyB8ICd1cGRhdGVkQXQnIHwgJ3NwcmludElkJyB8ICdzdGF0dXMnIHwgJ29yZGVyJyA+PignaXRlbXMvY3JlYXRlSXRlbScsIGFzeW5jKG5ld0l0ZW0pID0+IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL2l0ZW1cIiwgbmV3SXRlbSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSk7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCBGb3JtRGF0YT4oXG4gICAgJ2l0ZW1zL2NyZWF0ZUl0ZW0nLFxuICAgIGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtJyxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tLCB7IGlkOiBzdHJpbmc7IHVwZGF0ZWREYXRhOiBQYXJ0aWFsPEl0ZW1tPiB9PihcbiAgICAnaXRlbXMvdXBkYXRlSXRlbScsXG4gICAgYXN5bmMoe2lkLCB1cGRhdGVkRGF0YX0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXG4gICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtLyR7aWR9YCxcbiAgICAgICAgICAgIHVwZGF0ZWREYXRhLFxuICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuKTtcbiAgXG5cbmNvbnN0IGl0ZW1zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2l0ZW1zJyxcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXJcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJdGVtbVtdPikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmdWxmaWxsZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLml0ZW1zID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoZmV0Y2hJdGVtcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAncmVqZWN0ZWQnO1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yaXRlbWNyZWF0aW9uID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBmZXRjaCBpdGVtcyc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UoY3JlYXRlSXRlbS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgICAgICB9KVxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsIml0ZW1zIiwiZXJyb3JJdGVtQ3JlYXRpb24iLCJmZXRjaEl0ZW1zIiwiY3VycmVudFByb2plY3RJZCIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImNyZWF0ZUl0ZW0iLCJmb3JtRGF0YSIsInBvc3QiLCJoZWFkZXJzIiwidXBkYXRlSXRlbSIsImlkIiwidXBkYXRlZERhdGEiLCJwdXQiLCJpdGVtc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwiZXJyb3JpdGVtY3JlYXRpb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJwdXNoIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});