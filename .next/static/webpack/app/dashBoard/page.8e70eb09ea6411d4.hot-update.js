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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropArea = (param)=>{\n    let { index, moveToSprintId = null, moveItemToBacklog = false } = param;\n    _s();\n    const [showDropArea, setShowDropArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const draggableitemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemReducer.dreggedItemId);\n    const draggableItemSprintId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemSprintReducer.draggedItemSprintId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const dispatch = sue;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"showDropArea............\", showDropArea);\n    }, [\n        showDropArea\n    ]);\n    const handleOnDrop = async (e)=>{\n        e.preventDefault();\n        // e.stopPropagation();\n        setShowDropArea(false);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3030/api/moveItem\", {\n                insertAt: index,\n                itemId: draggableitemId,\n                itemSprintId: draggableItemSprintId,\n                moveToSprintId,\n                moveItemToBacklog,\n                projectId: currentProjectId\n            }, {\n                withCredentials: true\n            });\n            console.log(\"RESPONSE TEST.......\", response);\n        } catch (error) {\n            console.error(\"Error in moving item:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4 border-b-2\",\n                onDragEnter: ()=>setShowDropArea(true),\n                onDragLeave: ()=>setShowDropArea(false),\n                onDragOver: (e)=>e.preventDefault(),\n                onDrop: handleOnDrop\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            showDropArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-full h-10 border-b-2\",\n                children: \"Drop Area\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropArea, \"CBt0B15mLR21MRoAfgklu52MB8A=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = DropArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropArea);\nvar _c;\n$RefreshReg$(_c, \"DropArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZHJvcEFyZWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBQ3JDO0FBUzFCLE1BQU1JLFdBQVc7UUFBQyxFQUFDQyxLQUFLLEVBQUVDLGlCQUFpQixJQUFJLEVBQUVDLG9CQUFvQixLQUFLLEVBQWU7O0lBQ3JGLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFVO0lBRTFELE1BQU1TLGtCQUFrQlIsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsb0JBQW9CLENBQUNDLGFBQWE7SUFDMUYsTUFBTUMsd0JBQXdCWiw0REFBY0EsQ0FBQyxDQUFDUyxRQUFTQSxNQUFNSSwwQkFBMEIsQ0FBQ0MsbUJBQW1CO0lBQzNHLE1BQU1DLG1CQUFtQmYsNERBQWNBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTU8sdUJBQXVCLENBQUNELGdCQUFnQjtJQUVqRyxNQUFNRSxXQUFXQztJQUVqQnBCLGdEQUFTQSxDQUFDO1FBQ05xQixRQUFRQyxHQUFHLENBQUMsNEJBQTRCZDtJQUM1QyxHQUFHO1FBQUNBO0tBQWE7SUFFakIsTUFBTWUsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQix1QkFBdUI7UUFDdkJoQixnQkFBZ0I7UUFDaEIsSUFBSTtZQUNBLE1BQU1pQixXQUFXLE1BQU12Qiw2Q0FBS0EsQ0FBQ3dCLElBQUksQ0FBQyxzQ0FDOUI7Z0JBQ0lDLFVBQVV2QjtnQkFDVndCLFFBQVFuQjtnQkFDUm9CLGNBQWNoQjtnQkFDZFI7Z0JBQ0FDO2dCQUNBd0IsV0FBV2Q7WUFDZixHQUNBO2dCQUFFZSxpQkFBaUI7WUFBSztZQUU1QlgsUUFBUUMsR0FBRyxDQUFDLHdCQUF3Qkk7UUFDeEMsRUFBRSxPQUFPTyxPQUFPO1lBQ1paLFFBQVFZLEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUNHQyxXQUFZO2dCQUNaQyxhQUFhLElBQU0zQixnQkFBZ0I7Z0JBQ25DNEIsYUFBYSxJQUFNNUIsZ0JBQWdCO2dCQUNuQzZCLFlBQVksQ0FBQ2QsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNjLFFBQVFoQjs7Ozs7O1lBR1hmLDhCQUNHLDhEQUFDZ0M7Z0JBQUdMLFdBQVk7MEJBQXlCOzs7Ozs7OztBQU16RDtHQXBETS9COztRQUdzQkYsd0RBQWNBO1FBQ1JBLHdEQUFjQTtRQUNuQkEsd0RBQWNBOzs7S0FMckNFO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZHJvcEFyZWEudHN4PzUxNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvcmVkdXgvaG9va3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IG1vdmVJdGVtIH0gZnJvbSBcIkAvcmVkdXgvc2xpY2VzL2l0ZW1zL2l0ZW1zU2xpY2VcIjtcblxuaW50ZXJmYWNlIERyb3BBcmVhUHJvcCB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBtb3ZlVG9TcHJpbnRJZD86IHN0cmluZyB8IG51bGw7XG4gICAgbW92ZUl0ZW1Ub0JhY2tsb2c/OiBib29sZWFuO1xufTtcblxuY29uc3QgRHJvcEFyZWEgPSAoe2luZGV4LCBtb3ZlVG9TcHJpbnRJZCA9IG51bGwsIG1vdmVJdGVtVG9CYWNrbG9nID0gZmFsc2V9OiBEcm9wQXJlYVByb3ApID0+IHtcbiAgICBjb25zdCBbc2hvd0Ryb3BBcmVhLCBzZXRTaG93RHJvcEFyZWFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3QgZHJhZ2dhYmxlaXRlbUlkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kcmFnZ2FibGVJdGVtUmVkdWNlci5kcmVnZ2VkSXRlbUlkKTtcbiAgICBjb25zdCBkcmFnZ2FibGVJdGVtU3ByaW50SWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+c3RhdGUuZHJhZ2dhYmxlSXRlbVNwcmludFJlZHVjZXIuZHJhZ2dlZEl0ZW1TcHJpbnRJZCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3VycmVudFByb2plY3RJZFJlZHVjZXIuY3VycmVudFByb2plY3RJZCk7XG4gICAgXG4gICAgY29uc3QgZGlzcGF0Y2ggPSBzdWVcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd0Ryb3BBcmVhLi4uLi4uLi4uLi4uXCIsIHNob3dEcm9wQXJlYSk7XG4gICAgfSwgW3Nob3dEcm9wQXJlYV0pO1xuXG4gICAgY29uc3QgaGFuZGxlT25Ecm9wID0gYXN5bmMgKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNldFNob3dEcm9wQXJlYShmYWxzZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL21vdmVJdGVtXCIsIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QXQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IGRyYWdnYWJsZWl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNwcmludElkOiBkcmFnZ2FibGVJdGVtU3ByaW50SWQsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb1NwcmludElkLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlSXRlbVRvQmFja2xvZyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0UgVEVTVC4uLi4uLi5cIiwgcmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG1vdmluZyBpdGVtOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC00IGJvcmRlci1iLTJgfVxuICAgICAgICAgICAgICAgIG9uRHJhZ0VudGVyPXsoKSA9PiBzZXRTaG93RHJvcEFyZWEodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldFNob3dEcm9wQXJlYShmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gIC8vIFByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICAgICAgICAgICAgb25Ecm9wPXtoYW5kbGVPbkRyb3B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93RHJvcEFyZWEgJiYgKFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xMCBib3JkZXItYi0yYH0+XG4gICAgICAgICAgICAgICAgICAgIERyb3AgQXJlYVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEFyZWE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBTZWxlY3RvciIsImF4aW9zIiwiRHJvcEFyZWEiLCJpbmRleCIsIm1vdmVUb1NwcmludElkIiwibW92ZUl0ZW1Ub0JhY2tsb2ciLCJzaG93RHJvcEFyZWEiLCJzZXRTaG93RHJvcEFyZWEiLCJkcmFnZ2FibGVpdGVtSWQiLCJzdGF0ZSIsImRyYWdnYWJsZUl0ZW1SZWR1Y2VyIiwiZHJlZ2dlZEl0ZW1JZCIsImRyYWdnYWJsZUl0ZW1TcHJpbnRJZCIsImRyYWdnYWJsZUl0ZW1TcHJpbnRSZWR1Y2VyIiwiZHJhZ2dlZEl0ZW1TcHJpbnRJZCIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50UHJvamVjdElkUmVkdWNlciIsImRpc3BhdGNoIiwic3VlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uRHJvcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImluc2VydEF0IiwiaXRlbUlkIiwiaXRlbVNwcmludElkIiwicHJvamVjdElkIiwid2l0aENyZWRlbnRpYWxzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/dropArea.tsx\n"));

/***/ })

});