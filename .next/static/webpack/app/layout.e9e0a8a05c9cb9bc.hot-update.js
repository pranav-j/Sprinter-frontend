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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: function() { return /* binding */ createItem; },\n/* harmony export */   fetchItems: function() { return /* binding */ fetchItems; },\n/* harmony export */   updateItem: function() { return /* binding */ updateItem; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\nconst initialState = {\n    status: \"idle\",\n    items: [],\n    errorFetchingItems: null,\n    errorCreatingItem: null\n};\nconst fetchItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/fetchItems\", async (currentProjectId)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3030/api/items?projectId=\".concat(currentProjectId), {\n        withCredentials: true\n    });\n    return response.data.items;\n});\n// export const createItem = createAsyncThunk<Itemm, Omit<Itemm, '_id' | 'createdAt' | 'updatedAt' | 'sprintId' | 'status' | 'order' >>('items/createItem', async(newItem) => {\n//     const response = await axios.post(\"http://localhost:3030/api/item\", newItem, { withCredentials: true });\n//     return response.data;\n// });\nconst createItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/createItem\", async (formData)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3030/api/item\", formData, {\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        },\n        withCredentials: true\n    });\n    return response.data;\n});\nconst updateItem = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"items/updateItem\", async (param)=>{\n    let { id, updatedData } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(\"http://localhost:3030/api/item/\".concat(id), updatedData, {\n        withCredentials: true\n    });\n    return response.data;\n});\nconst itemsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"items\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchItems.pending, (state)=>{\n            state.status = \"pending\";\n        }).addCase(fetchItems.fulfilled, (state, action)=>{\n            state.status = \"fulfilled\";\n            state.items = action.payload;\n        }).addCase(fetchItems.rejected, (state, action)=>{\n            state.status = \"rejected\";\n            state.errorFetchingItems = action.error.message || \"Failed to fetch items\";\n        }).addCase(createItem.fulfilled, (state, action)=>{\n            state.items.push(action.payload);\n        }).addCase(createItem.rejected, (state, action)=>{\n            state.errorCreatingItem = action.error.message || \"Failed to create items\";\n        });\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ3REO0FBaUMxQixNQUFNRyxlQUEyQjtJQUM3QkMsUUFBUTtJQUNSQyxPQUFPLEVBQUU7SUFDVEMsb0JBQW9CO0lBQ3BCQyxtQkFBbUI7QUFDdkI7QUFFTyxNQUFNQyxhQUFhUCxrRUFBZ0JBLENBQWtCLG9CQUFvQixPQUFNUTtJQUNsRixNQUFNQyxXQUFZLE1BQU1SLDZDQUFLQSxDQUFDUyxHQUFHLENBQUMsNkNBQThELE9BQWpCRixtQkFBb0I7UUFBRUcsaUJBQWlCO0lBQUs7SUFDM0gsT0FBT0YsU0FBU0csSUFBSSxDQUFDUixLQUFLO0FBQzlCLEdBQUc7QUFFSCwrS0FBK0s7QUFDL0ssK0dBQStHO0FBQy9HLDRCQUE0QjtBQUM1QixNQUFNO0FBRUMsTUFBTVMsYUFBYWIsa0VBQWdCQSxDQUN0QyxvQkFDQSxPQUFPYztJQUNMLE1BQU1MLFdBQVcsTUFBTVIsNkNBQUtBLENBQUNjLElBQUksQ0FDL0Isa0NBQ0FELFVBQ0E7UUFDRUUsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBTCxpQkFBaUI7SUFDbkI7SUFFRixPQUFPRixTQUFTRyxJQUFJO0FBQ3RCLEdBQ0Y7QUFFSyxNQUFNSyxhQUFhakIsa0VBQWdCQSxDQUN0QyxvQkFDQTtRQUFNLEVBQUNrQixFQUFFLEVBQUVDLFdBQVcsRUFBQztJQUNuQixNQUFNVixXQUFXLE1BQU1SLDZDQUFLQSxDQUFDbUIsR0FBRyxDQUM1QixrQ0FBcUMsT0FBSEYsS0FDbENDLGFBQ0E7UUFBRVIsaUJBQWlCO0lBQUs7SUFFMUIsT0FBT0YsU0FBU0csSUFBSTtBQUMxQixHQUNGO0FBR0YsTUFBTVMsYUFBYXRCLDZEQUFXQSxDQUFDO0lBQzNCdUIsTUFBTTtJQUNOcEI7SUFDQXFCLFVBQVUsQ0FBQztJQUNYQyxlQUFlLENBQUNDO1FBQ1pBLFFBQ0tDLE9BQU8sQ0FBQ25CLFdBQVdvQixPQUFPLEVBQUUsQ0FBQ0M7WUFDMUJBLE1BQU16QixNQUFNLEdBQUc7UUFDbkIsR0FDQ3VCLE9BQU8sQ0FBQ25CLFdBQVdzQixTQUFTLEVBQUUsQ0FBQ0QsT0FBT0U7WUFDbkNGLE1BQU16QixNQUFNLEdBQUc7WUFDZnlCLE1BQU14QixLQUFLLEdBQUcwQixPQUFPQyxPQUFPO1FBQ2hDLEdBQ0NMLE9BQU8sQ0FBQ25CLFdBQVd5QixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDbENGLE1BQU16QixNQUFNLEdBQUc7WUFDZnlCLE1BQU12QixrQkFBa0IsR0FBR3lCLE9BQU9HLEtBQUssQ0FBQ0MsT0FBTyxJQUFJO1FBQ3ZELEdBQ0NSLE9BQU8sQ0FBQ2IsV0FBV2dCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNuQ0YsTUFBTXhCLEtBQUssQ0FBQytCLElBQUksQ0FBQ0wsT0FBT0MsT0FBTztRQUNuQyxHQUNDTCxPQUFPLENBQUNiLFdBQVdtQixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDbENGLE1BQU10QixpQkFBaUIsR0FBR3dCLE9BQU9HLEtBQUssQ0FBQ0MsT0FBTyxJQUFJO1FBQ3REO0lBRVI7QUFDSjtBQUVBLCtEQUFlYixXQUFXZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL2l0ZW1zL2l0ZW1zU2xpY2UudHM/NzllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuaywgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIG1ldGFkYXRhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbW0ge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIHByb2plY3RJZDogc3RyaW5nO1xuICAgIHNwcmludElkPzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICBvcmRlcj86IG51bWJlcjtcbiAgICBhc3NpZ25lZT86IHN0cmluZztcbiAgICBhdHRhY2htZW50cz86IEF0dGFjaG1lbnRbXTtcbn07XG5cbmludGVyZmFjZSBJdGVtc1NsaWNlIHtcbiAgICBzdGF0dXM6ICdpZGxlJyB8ICdwZW5kaW5nJyB8ICdmdWxmaWxsZWQnIHwgJ3JlamVjdGVkJztcbiAgICBpdGVtczogSXRlbW1bXTtcbiAgICBlcnJvckZldGNoaW5nSXRlbXM6IHN0cmluZyB8IG51bGw7XG4gICAgZXJyb3JDcmVhdGluZ0l0ZW06IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEl0ZW1zU2xpY2UgPSB7XG4gICAgc3RhdHVzOiAnaWRsZScsXG4gICAgaXRlbXM6IFtdLFxuICAgIGVycm9yRmV0Y2hpbmdJdGVtczogbnVsbCxcbiAgICBlcnJvckNyZWF0aW5nSXRlbTogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSBjcmVhdGVBc3luY1RodW5rPEl0ZW1tW10sIHN0cmluZz4oJ2l0ZW1zL2ZldGNoSXRlbXMnLCBhc3luYyhjdXJyZW50UHJvamVjdElkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbXM/cHJvamVjdElkPSR7Y3VycmVudFByb2plY3RJZH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5pdGVtcztcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgY3JlYXRlSXRlbSA9IGNyZWF0ZUFzeW5jVGh1bms8SXRlbW0sIE9taXQ8SXRlbW0sICdfaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICdzcHJpbnRJZCcgfCAnc3RhdHVzJyB8ICdvcmRlcicgPj4oJ2l0ZW1zL2NyZWF0ZUl0ZW0nLCBhc3luYyhuZXdJdGVtKSA9PiB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9pdGVtXCIsIG5ld0l0ZW0sIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuLy8gICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuLy8gfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgRm9ybURhdGE+KFxuICAgICdpdGVtcy9jcmVhdGVJdGVtJyxcbiAgICBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbScsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gY3JlYXRlQXN5bmNUaHVuazxJdGVtbSwgeyBpZDogc3RyaW5nOyB1cGRhdGVkRGF0YTogUGFydGlhbDxJdGVtbT4gfT4oXG4gICAgJ2l0ZW1zL3VwZGF0ZUl0ZW0nLFxuICAgIGFzeW5jKHtpZCwgdXBkYXRlZERhdGF9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KFxuICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAzMC9hcGkvaXRlbS8ke2lkfWAsXG4gICAgICAgICAgICB1cGRhdGVkRGF0YSxcbiAgICAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cbik7XG4gIFxuXG5jb25zdCBpdGVtc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6ICdpdGVtcycsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7fSxcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgICAgICBidWlsZGVyXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEl0ZW1zLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShmZXRjaEl0ZW1zLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SXRlbW1bXT4pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5pdGVtcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDYXNlKGZldGNoSXRlbXMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3JlamVjdGVkJztcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvckZldGNoaW5nSXRlbXMgPSBhY3Rpb24uZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGZldGNoIGl0ZW1zJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShjcmVhdGVJdGVtLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShjcmVhdGVJdGVtLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yQ3JlYXRpbmdJdGVtID0gYWN0aW9uLmVycm9yLm1lc3NhZ2UgfHwgJ0ZhaWxlZCB0byBjcmVhdGUgaXRlbXMnO1xuICAgICAgICAgICAgfSlcblxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsIml0ZW1zIiwiZXJyb3JGZXRjaGluZ0l0ZW1zIiwiZXJyb3JDcmVhdGluZ0l0ZW0iLCJmZXRjaEl0ZW1zIiwiY3VycmVudFByb2plY3RJZCIsInJlc3BvbnNlIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImNyZWF0ZUl0ZW0iLCJmb3JtRGF0YSIsInBvc3QiLCJoZWFkZXJzIiwidXBkYXRlSXRlbSIsImlkIiwidXBkYXRlZERhdGEiLCJwdXQiLCJpdGVtc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwiZXJyb3IiLCJtZXNzYWdlIiwicHVzaCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/items/itemsSlice.ts\n"));

/***/ })

});