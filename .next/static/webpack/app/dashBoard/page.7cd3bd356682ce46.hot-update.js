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

/***/ "(app-pages-browser)/./app/components/subComponents/dropArea.tsx":
/*!***************************************************!*\
  !*** ./app/components/subComponents/dropArea.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/items/itemsSlice */ \"(app-pages-browser)/./redux/slices/items/itemsSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropArea = (param)=>{\n    let { index, moveToSprintId = null, moveItemToBacklog = false } = param;\n    _s();\n    const [showDropArea, setShowDropArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const draggableitemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemReducer.dreggedItemId);\n    const draggableItemSprintId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemSprintReducer.draggedItemSprintId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"showDropArea............\", showDropArea);\n    }, [\n        showDropArea\n    ]);\n    const handleOnDrop = async (e)=>{\n        e.preventDefault();\n        // e.stopPropagation();\n        setShowDropArea(false);\n        // try {\n        //     const response = await axios.post(\"http://localhost:3030/api/moveItem\", \n        //         {\n        //             insertAt: index,\n        //             itemId: draggableitemId,\n        //             itemSprintId: draggableItemSprintId,\n        //             moveToSprintId,\n        //             moveItemToBacklog,\n        //             projectId: currentProjectId\n        //         }, \n        //         { withCredentials: true }\n        //     );\n        //     console.log(\"RESPONSE TEST.......\", response);\n        // } catch (error) {\n        //     console.error(\"Error in moving item:\", error);\n        // }\n        dispatch((0,_redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__.moveItem)({\n            insertAt: index,\n            draggableitemId,\n            draggableItemSprintId,\n            moveToSprintId,\n            moveItemToBacklog,\n            currentProjectId\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4 border-b-2\",\n                onDragEnter: ()=>setShowDropArea(true),\n                onDragLeave: ()=>setShowDropArea(false),\n                onDragOver: (e)=>e.preventDefault(),\n                onDrop: handleOnDrop\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            showDropArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-full h-10 border-b-2\",\n                children: \"Drop Area\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropArea, \"IQquHLOlw2mMo3UjELnKf/nwO2U=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = DropArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropArea);\nvar _c;\n$RefreshReg$(_c, \"DropArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZHJvcEFyZWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBRUo7QUFRM0QsTUFBTUssV0FBVztRQUFDLEVBQUNDLEtBQUssRUFBRUMsaUJBQWlCLElBQUksRUFBRUMsb0JBQW9CLEtBQUssRUFBZTs7SUFDckYsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQVU7SUFFMUQsTUFBTVUsa0JBQWtCVCw0REFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxvQkFBb0IsQ0FBQ0MsYUFBYTtJQUMxRixNQUFNQyx3QkFBd0JiLDREQUFjQSxDQUFDLENBQUNVLFFBQVNBLE1BQU1JLDBCQUEwQixDQUFDQyxtQkFBbUI7SUFDM0csTUFBTUMsbUJBQW1CaEIsNERBQWNBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTU8sdUJBQXVCLENBQUNELGdCQUFnQjtJQUVqRyxNQUFNRSxXQUFXakIsNERBQWNBO0lBRS9CSCxnREFBU0EsQ0FBQztRQUNOcUIsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QmI7SUFDNUMsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1jLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsdUJBQXVCO1FBQ3ZCZixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLCtFQUErRTtRQUMvRSxZQUFZO1FBQ1osK0JBQStCO1FBQy9CLHVDQUF1QztRQUN2QyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLGlDQUFpQztRQUNqQywwQ0FBMEM7UUFDMUMsY0FBYztRQUNkLG9DQUFvQztRQUNwQyxTQUFTO1FBQ1QscURBQXFEO1FBQ3JELG9CQUFvQjtRQUNwQixxREFBcUQ7UUFDckQsSUFBSTtRQUNKVSxTQUFTaEIsd0VBQVFBLENBQUM7WUFDZHNCLFVBQVVwQjtZQUNWSztZQUNBSTtZQUNBUjtZQUNBQztZQUNBVTtRQUNKO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNTO2dCQUNHQyxXQUFZO2dCQUNaQyxhQUFhLElBQU1uQixnQkFBZ0I7Z0JBQ25Db0IsYUFBYSxJQUFNcEIsZ0JBQWdCO2dCQUNuQ3FCLFlBQVksQ0FBQ1AsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNPLFFBQVFUOzs7Ozs7WUFHWGQsOEJBQ0csOERBQUN3QjtnQkFBR0wsV0FBWTswQkFBeUI7Ozs7Ozs7O0FBTXpEO0dBNURNdkI7O1FBR3NCSCx3REFBY0E7UUFDUkEsd0RBQWNBO1FBQ25CQSx3REFBY0E7UUFFdEJDLHdEQUFjQTs7O0tBUDdCRTtBQThETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zdWJDb21wb25lbnRzL2Ryb3BBcmVhLnRzeD81MTRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCJAL3JlZHV4L2hvb2tzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBtb3ZlSXRlbSB9IGZyb20gXCJAL3JlZHV4L3NsaWNlcy9pdGVtcy9pdGVtc1NsaWNlXCI7XG5cbmludGVyZmFjZSBEcm9wQXJlYVByb3Age1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbW92ZVRvU3ByaW50SWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIG1vdmVJdGVtVG9CYWNrbG9nPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IERyb3BBcmVhID0gKHtpbmRleCwgbW92ZVRvU3ByaW50SWQgPSBudWxsLCBtb3ZlSXRlbVRvQmFja2xvZyA9IGZhbHNlfTogRHJvcEFyZWFQcm9wKSA9PiB7XG4gICAgY29uc3QgW3Nob3dEcm9wQXJlYSwgc2V0U2hvd0Ryb3BBcmVhXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0IGRyYWdnYWJsZWl0ZW1JZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZHJhZ2dhYmxlSXRlbVJlZHVjZXIuZHJlZ2dlZEl0ZW1JZCk7XG4gICAgY29uc3QgZHJhZ2dhYmxlSXRlbVNwcmludElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PnN0YXRlLmRyYWdnYWJsZUl0ZW1TcHJpbnRSZWR1Y2VyLmRyYWdnZWRJdGVtU3ByaW50SWQpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyLmN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIFxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd0Ryb3BBcmVhLi4uLi4uLi4uLi4uXCIsIHNob3dEcm9wQXJlYSk7XG4gICAgfSwgW3Nob3dEcm9wQXJlYV0pO1xuXG4gICAgY29uc3QgaGFuZGxlT25Ecm9wID0gYXN5bmMgKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNldFNob3dEcm9wQXJlYShmYWxzZSk7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL21vdmVJdGVtXCIsIFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaW5zZXJ0QXQ6IGluZGV4LFxuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtSWQ6IGRyYWdnYWJsZWl0ZW1JZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbVNwcmludElkOiBkcmFnZ2FibGVJdGVtU3ByaW50SWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIG1vdmVUb1NwcmludElkLFxuICAgICAgICAvLyAgICAgICAgICAgICBtb3ZlSXRlbVRvQmFja2xvZyxcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkXG4gICAgICAgIC8vICAgICAgICAgfSwgXG4gICAgICAgIC8vICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0UgVEVTVC4uLi4uLi5cIiwgcmVzcG9uc2UpO1xuICAgICAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG1vdmluZyBpdGVtOlwiLCBlcnJvcik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgZGlzcGF0Y2gobW92ZUl0ZW0oe1xuICAgICAgICAgICAgaW5zZXJ0QXQ6IGluZGV4LFxuICAgICAgICAgICAgZHJhZ2dhYmxlaXRlbUlkLFxuICAgICAgICAgICAgZHJhZ2dhYmxlSXRlbVNwcmludElkLFxuICAgICAgICAgICAgbW92ZVRvU3ByaW50SWQsXG4gICAgICAgICAgICBtb3ZlSXRlbVRvQmFja2xvZyxcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SWRcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLTQgYm9yZGVyLWItMmB9XG4gICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9eygpID0+IHNldFNob3dEcm9wQXJlYSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0U2hvd0Ryb3BBcmVhKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAgLy8gUHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2hhbmRsZU9uRHJvcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dEcm9wQXJlYSAmJiAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YHctZnVsbCBoLTEwIGJvcmRlci1iLTJgfT5cbiAgICAgICAgICAgICAgICAgICAgRHJvcCBBcmVhXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wQXJlYTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJtb3ZlSXRlbSIsIkRyb3BBcmVhIiwiaW5kZXgiLCJtb3ZlVG9TcHJpbnRJZCIsIm1vdmVJdGVtVG9CYWNrbG9nIiwic2hvd0Ryb3BBcmVhIiwic2V0U2hvd0Ryb3BBcmVhIiwiZHJhZ2dhYmxlaXRlbUlkIiwic3RhdGUiLCJkcmFnZ2FibGVJdGVtUmVkdWNlciIsImRyZWdnZWRJdGVtSWQiLCJkcmFnZ2FibGVJdGVtU3ByaW50SWQiLCJkcmFnZ2FibGVJdGVtU3ByaW50UmVkdWNlciIsImRyYWdnZWRJdGVtU3ByaW50SWQiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVPbkRyb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnNlcnRBdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/dropArea.tsx\n"));

/***/ })

});