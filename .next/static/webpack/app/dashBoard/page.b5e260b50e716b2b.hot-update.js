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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var _redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/items/itemsSlice */ \"(app-pages-browser)/./redux/slices/items/itemsSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropArea = (param)=>{\n    let { index, moveToSprintId = null, moveItemToBacklog = false } = param;\n    _s();\n    const [showDropArea, setShowDropArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const draggableitemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemReducer.dreggedItemId);\n    const draggableItemSprintId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemSprintReducer.draggedItemSprintId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"showDropArea............\", showDropArea);\n    }, [\n        showDropArea\n    ]);\n    const handleOnDrop = async (e)=>{\n        e.preventDefault();\n        // e.stopPropagation();\n        setShowDropArea(false);\n        // try {\n        //     const response = await axios.post(\"http://localhost:3030/api/moveItem\", \n        //         {\n        //             insertAt: index,\n        //             itemId: draggableitemId,\n        //             itemSprintId: draggableItemSprintId,\n        //             moveToSprintId,\n        //             moveItemToBacklog,\n        //             projectId: currentProjectId\n        //         }, \n        //         { withCredentials: true }\n        //     );\n        //     console.log(\"RESPONSE TEST.......\", response);\n        // } catch (error) {\n        //     console.error(\"Error in moving item:\", error);\n        // }\n        dispatch((0,_redux_slices_items_itemsSlice__WEBPACK_IMPORTED_MODULE_3__.moveItem)({\n            insertAt: index,\n            draggableItemId,\n            draggableItemSprintId,\n            moveToSprintId,\n            moveItemToBacklog,\n            currentProjectId\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4 border-b-2\",\n                onDragEnter: ()=>setShowDropArea(true),\n                onDragLeave: ()=>setShowDropArea(false),\n                onDragOver: (e)=>e.preventDefault(),\n                onDrop: handleOnDrop\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined),\n            showDropArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-full h-10 border-b-2\",\n                children: \"Drop Area\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropArea, \"IQquHLOlw2mMo3UjELnKf/nwO2U=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = DropArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropArea);\nvar _c;\n$RefreshReg$(_c, \"DropArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZHJvcEFyZWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBRUo7QUFRM0QsTUFBTUssV0FBVztRQUFDLEVBQUNDLEtBQUssRUFBRUMsaUJBQWlCLElBQUksRUFBRUMsb0JBQW9CLEtBQUssRUFBZTs7SUFDckYsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQVU7SUFFMUQsTUFBTVUsa0JBQWtCVCw0REFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxvQkFBb0IsQ0FBQ0MsYUFBYTtJQUMxRixNQUFNQyx3QkFBd0JiLDREQUFjQSxDQUFDLENBQUNVLFFBQVNBLE1BQU1JLDBCQUEwQixDQUFDQyxtQkFBbUI7SUFDM0csTUFBTUMsbUJBQW1CaEIsNERBQWNBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTU8sdUJBQXVCLENBQUNELGdCQUFnQjtJQUVqRyxNQUFNRSxXQUFXakIsNERBQWNBO0lBRS9CSCxnREFBU0EsQ0FBQztRQUNOcUIsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QmI7SUFDNUMsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1jLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsdUJBQXVCO1FBQ3ZCZixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLCtFQUErRTtRQUMvRSxZQUFZO1FBQ1osK0JBQStCO1FBQy9CLHVDQUF1QztRQUN2QyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLGlDQUFpQztRQUNqQywwQ0FBMEM7UUFDMUMsY0FBYztRQUNkLG9DQUFvQztRQUNwQyxTQUFTO1FBQ1QscURBQXFEO1FBQ3JELG9CQUFvQjtRQUNwQixxREFBcUQ7UUFDckQsSUFBSTtRQUNKVSxTQUFTaEIsd0VBQVFBLENBQUM7WUFDZHNCLFVBQVVwQjtZQUNWcUI7WUFDQVo7WUFDQVI7WUFDQUM7WUFDQVU7UUFDRjtJQUNOO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDVTtnQkFDR0MsV0FBWTtnQkFDWkMsYUFBYSxJQUFNcEIsZ0JBQWdCO2dCQUNuQ3FCLGFBQWEsSUFBTXJCLGdCQUFnQjtnQkFDbkNzQixZQUFZLENBQUNSLElBQU1BLEVBQUVDLGNBQWM7Z0JBQ25DUSxRQUFRVjs7Ozs7O1lBR1hkLDhCQUNHLDhEQUFDeUI7Z0JBQUdMLFdBQVk7MEJBQXlCOzs7Ozs7OztBQU16RDtHQTVETXhCOztRQUdzQkgsd0RBQWNBO1FBQ1JBLHdEQUFjQTtRQUNuQkEsd0RBQWNBO1FBRXRCQyx3REFBY0E7OztLQVA3QkU7QUE4RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9kcm9wQXJlYS50c3g/NTE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbW92ZUl0ZW0gfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvaXRlbXMvaXRlbXNTbGljZVwiO1xuXG5pbnRlcmZhY2UgRHJvcEFyZWFQcm9wIHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1vdmVUb1NwcmludElkPzogc3RyaW5nIHwgbnVsbDtcbiAgICBtb3ZlSXRlbVRvQmFja2xvZz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBEcm9wQXJlYSA9ICh7aW5kZXgsIG1vdmVUb1NwcmludElkID0gbnVsbCwgbW92ZUl0ZW1Ub0JhY2tsb2cgPSBmYWxzZX06IERyb3BBcmVhUHJvcCkgPT4ge1xuICAgIGNvbnN0IFtzaG93RHJvcEFyZWEsIHNldFNob3dEcm9wQXJlYV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCBkcmFnZ2FibGVpdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRyYWdnYWJsZUl0ZW1SZWR1Y2VyLmRyZWdnZWRJdGVtSWQpO1xuICAgIGNvbnN0IGRyYWdnYWJsZUl0ZW1TcHJpbnRJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT5zdGF0ZS5kcmFnZ2FibGVJdGVtU3ByaW50UmVkdWNlci5kcmFnZ2VkSXRlbVNwcmludElkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNob3dEcm9wQXJlYS4uLi4uLi4uLi4uLlwiLCBzaG93RHJvcEFyZWEpO1xuICAgIH0sIFtzaG93RHJvcEFyZWFdKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uRHJvcCA9IGFzeW5jIChlOiBSZWFjdC5EcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBzZXRTaG93RHJvcEFyZWEoZmFsc2UpO1xuICAgICAgICAvLyB0cnkge1xuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDMwL2FwaS9tb3ZlSXRlbVwiLCBcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGluc2VydEF0OiBpbmRleCxcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbUlkOiBkcmFnZ2FibGVpdGVtSWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW1TcHJpbnRJZDogZHJhZ2dhYmxlSXRlbVNwcmludElkLFxuICAgICAgICAvLyAgICAgICAgICAgICBtb3ZlVG9TcHJpbnRJZCxcbiAgICAgICAgLy8gICAgICAgICAgICAgbW92ZUl0ZW1Ub0JhY2tsb2csXG4gICAgICAgIC8vICAgICAgICAgICAgIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZFxuICAgICAgICAvLyAgICAgICAgIH0sIFxuICAgICAgICAvLyAgICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH1cbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFIFRFU1QuLi4uLi4uXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBtb3ZpbmcgaXRlbTpcIiwgZXJyb3IpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGRpc3BhdGNoKG1vdmVJdGVtKHtcbiAgICAgICAgICAgIGluc2VydEF0OiBpbmRleCxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW1JZCxcbiAgICAgICAgICAgIGRyYWdnYWJsZUl0ZW1TcHJpbnRJZCxcbiAgICAgICAgICAgIG1vdmVUb1NwcmludElkLFxuICAgICAgICAgICAgbW92ZUl0ZW1Ub0JhY2tsb2csXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdElkXG4gICAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLTQgYm9yZGVyLWItMmB9XG4gICAgICAgICAgICAgICAgb25EcmFnRW50ZXI9eygpID0+IHNldFNob3dEcm9wQXJlYSh0cnVlKX1cbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gc2V0U2hvd0Ryb3BBcmVhKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSAgLy8gUHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2hhbmRsZU9uRHJvcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Nob3dEcm9wQXJlYSAmJiAoXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YHctZnVsbCBoLTEwIGJvcmRlci1iLTJgfT5cbiAgICAgICAgICAgICAgICAgICAgRHJvcCBBcmVhXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wQXJlYTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJtb3ZlSXRlbSIsIkRyb3BBcmVhIiwiaW5kZXgiLCJtb3ZlVG9TcHJpbnRJZCIsIm1vdmVJdGVtVG9CYWNrbG9nIiwic2hvd0Ryb3BBcmVhIiwic2V0U2hvd0Ryb3BBcmVhIiwiZHJhZ2dhYmxlaXRlbUlkIiwic3RhdGUiLCJkcmFnZ2FibGVJdGVtUmVkdWNlciIsImRyZWdnZWRJdGVtSWQiLCJkcmFnZ2FibGVJdGVtU3ByaW50SWQiLCJkcmFnZ2FibGVJdGVtU3ByaW50UmVkdWNlciIsImRyYWdnZWRJdGVtU3ByaW50SWQiLCJjdXJyZW50UHJvamVjdElkIiwiY3VycmVudFByb2plY3RJZFJlZHVjZXIiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVPbkRyb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnNlcnRBdCIsImRyYWdnYWJsZUl0ZW1JZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/dropArea.tsx\n"));

/***/ })

});