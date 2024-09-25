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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/hooks */ \"(app-pages-browser)/./redux/hooks.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropArea = (param)=>{\n    let { index, moveToSprintId = null, moveItemToBacklog = false } = param;\n    _s();\n    const [showDropArea, setShowDropArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const draggableitemId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemReducer.dreggedItemId);\n    const draggableItemSprintId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.draggableItemSprintReducer.draggedItemSprintId);\n    const currentProjectId = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.currentProjectIdReducer.currentProjectId);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"showDropArea............\", showDropArea);\n    }, [\n        showDropArea\n    ]);\n    const handleOnDrop = async (e)=>{\n        e.preventDefault();\n        // e.stopPropagation();\n        setShowDropArea(false);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3030/api/moveItem\", {\n                insertAt: index,\n                itemId: draggableitemId,\n                itemSprintId: draggableItemSprintId,\n                moveToSprintId,\n                moveItemToBacklog,\n                projectId: currentProjectId\n            }, {\n                withCredentials: true\n            });\n            console.log(\"RESPONSE TEST.......\", response);\n        } catch (error) {\n            console.error(\"Error in moving item:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4 border-b-2\",\n                onDragEnter: ()=>setShowDropArea(true),\n                onDragLeave: ()=>setShowDropArea(false),\n                onDragOver: (e)=>e.preventDefault(),\n                onDrop: handleOnDrop\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            showDropArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"w-full h-10 border-b-2\",\n                children: \"Drop Area\"\n            }, void 0, false, {\n                fileName: \"/home/kidiloski/SPRINTER/front-end/app/components/subComponents/dropArea.tsx\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DropArea, \"IQquHLOlw2mMo3UjELnKf/nwO2U=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = DropArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropArea);\nvar _c;\n$RefreshReg$(_c, \"DropArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1YkNvbXBvbmVudHMvZHJvcEFyZWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBQ3JDO0FBUzFCLE1BQU1LLFdBQVc7UUFBQyxFQUFDQyxLQUFLLEVBQUVDLGlCQUFpQixJQUFJLEVBQUVDLG9CQUFvQixLQUFLLEVBQWU7O0lBQ3JGLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFVO0lBRTFELE1BQU1VLGtCQUFrQlQsNERBQWNBLENBQUMsQ0FBQ1UsUUFBVUEsTUFBTUMsb0JBQW9CLENBQUNDLGFBQWE7SUFDMUYsTUFBTUMsd0JBQXdCYiw0REFBY0EsQ0FBQyxDQUFDVSxRQUFTQSxNQUFNSSwwQkFBMEIsQ0FBQ0MsbUJBQW1CO0lBQzNHLE1BQU1DLG1CQUFtQmhCLDREQUFjQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1PLHVCQUF1QixDQUFDRCxnQkFBZ0I7SUFFakcsTUFBTUUsV0FBV2pCLDREQUFjQTtJQUUvQkgsZ0RBQVNBLENBQUM7UUFDTnFCLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJiO0lBQzVDLEdBQUc7UUFBQ0E7S0FBYTtJQUVqQixNQUFNYyxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLHVCQUF1QjtRQUN2QmYsZ0JBQWdCO1FBQ2hCLElBQUk7WUFDQSxNQUFNZ0IsV0FBVyxNQUFNdEIsNkNBQUtBLENBQUN1QixJQUFJLENBQUMsc0NBQzlCO2dCQUNJQyxVQUFVdEI7Z0JBQ1Z1QixRQUFRbEI7Z0JBQ1JtQixjQUFjZjtnQkFDZFI7Z0JBQ0FDO2dCQUNBdUIsV0FBV2I7WUFDZixHQUNBO2dCQUFFYyxpQkFBaUI7WUFBSztZQUU1QlgsUUFBUUMsR0FBRyxDQUFDLHdCQUF3Qkk7UUFDeEMsRUFBRSxPQUFPTyxPQUFPO1lBQ1paLFFBQVFZLEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUNHQyxXQUFZO2dCQUNaQyxhQUFhLElBQU0xQixnQkFBZ0I7Z0JBQ25DMkIsYUFBYSxJQUFNM0IsZ0JBQWdCO2dCQUNuQzRCLFlBQVksQ0FBQ2QsSUFBTUEsRUFBRUMsY0FBYztnQkFDbkNjLFFBQVFoQjs7Ozs7O1lBR1hkLDhCQUNHLDhEQUFDK0I7Z0JBQUdMLFdBQVk7MEJBQXlCOzs7Ozs7OztBQU16RDtHQXBETTlCOztRQUdzQkgsd0RBQWNBO1FBQ1JBLHdEQUFjQTtRQUNuQkEsd0RBQWNBO1FBRXRCQyx3REFBY0E7OztLQVA3QkU7QUFzRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc3ViQ29tcG9uZW50cy9kcm9wQXJlYS50c3g/NTE0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbW92ZUl0ZW0gfSBmcm9tIFwiQC9yZWR1eC9zbGljZXMvaXRlbXMvaXRlbXNTbGljZVwiO1xuXG5pbnRlcmZhY2UgRHJvcEFyZWFQcm9wIHtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG1vdmVUb1NwcmludElkPzogc3RyaW5nIHwgbnVsbDtcbiAgICBtb3ZlSXRlbVRvQmFja2xvZz86IGJvb2xlYW47XG59O1xuXG5jb25zdCBEcm9wQXJlYSA9ICh7aW5kZXgsIG1vdmVUb1NwcmludElkID0gbnVsbCwgbW92ZUl0ZW1Ub0JhY2tsb2cgPSBmYWxzZX06IERyb3BBcmVhUHJvcCkgPT4ge1xuICAgIGNvbnN0IFtzaG93RHJvcEFyZWEsIHNldFNob3dEcm9wQXJlYV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCBkcmFnZ2FibGVpdGVtSWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRyYWdnYWJsZUl0ZW1SZWR1Y2VyLmRyZWdnZWRJdGVtSWQpO1xuICAgIGNvbnN0IGRyYWdnYWJsZUl0ZW1TcHJpbnRJZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT5zdGF0ZS5kcmFnZ2FibGVJdGVtU3ByaW50UmVkdWNlci5kcmFnZ2VkSXRlbVNwcmludElkKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jdXJyZW50UHJvamVjdElkUmVkdWNlci5jdXJyZW50UHJvamVjdElkKTtcbiAgICBcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvd0Ryb3BBcmVhLi4uLi4uLi4uLi4uXCIsIHNob3dEcm9wQXJlYSk7XG4gICAgfSwgW3Nob3dEcm9wQXJlYV0pO1xuXG4gICAgY29uc3QgaGFuZGxlT25Ecm9wID0gYXN5bmMgKGU6IFJlYWN0LkRyYWdFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNldFNob3dEcm9wQXJlYShmYWxzZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMzAvYXBpL21vdmVJdGVtXCIsIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QXQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IGRyYWdnYWJsZWl0ZW1JZCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNwcmludElkOiBkcmFnZ2FibGVJdGVtU3ByaW50SWQsXG4gICAgICAgICAgICAgICAgICAgIG1vdmVUb1NwcmludElkLFxuICAgICAgICAgICAgICAgICAgICBtb3ZlSXRlbVRvQmFja2xvZyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBjdXJyZW50UHJvamVjdElkXG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVTUE9OU0UgVEVTVC4uLi4uLi5cIiwgcmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG1vdmluZyBpdGVtOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC00IGJvcmRlci1iLTJgfVxuICAgICAgICAgICAgICAgIG9uRHJhZ0VudGVyPXsoKSA9PiBzZXRTaG93RHJvcEFyZWEodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldFNob3dEcm9wQXJlYShmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gIC8vIFByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICAgICAgICAgICAgb25Ecm9wPXtoYW5kbGVPbkRyb3B9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93RHJvcEFyZWEgJiYgKFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B3LWZ1bGwgaC0xMCBib3JkZXItYi0yYH0+XG4gICAgICAgICAgICAgICAgICAgIERyb3AgQXJlYVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEFyZWE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiYXhpb3MiLCJEcm9wQXJlYSIsImluZGV4IiwibW92ZVRvU3ByaW50SWQiLCJtb3ZlSXRlbVRvQmFja2xvZyIsInNob3dEcm9wQXJlYSIsInNldFNob3dEcm9wQXJlYSIsImRyYWdnYWJsZWl0ZW1JZCIsInN0YXRlIiwiZHJhZ2dhYmxlSXRlbVJlZHVjZXIiLCJkcmVnZ2VkSXRlbUlkIiwiZHJhZ2dhYmxlSXRlbVNwcmludElkIiwiZHJhZ2dhYmxlSXRlbVNwcmludFJlZHVjZXIiLCJkcmFnZ2VkSXRlbVNwcmludElkIiwiY3VycmVudFByb2plY3RJZCIsImN1cnJlbnRQcm9qZWN0SWRSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25Ecm9wIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiaW5zZXJ0QXQiLCJpdGVtSWQiLCJpdGVtU3ByaW50SWQiLCJwcm9qZWN0SWQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/subComponents/dropArea.tsx\n"));

/***/ })

});