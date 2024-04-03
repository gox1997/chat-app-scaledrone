"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Messages */ \"./src/components/Messages.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction randomName() {\n    const adjectives = [\n        \"autumn\",\n        \"hidden\",\n        \"bitter\",\n        \"misty\",\n        \"silent\",\n        \"empty\",\n        \"dry\",\n        \"dark\",\n        \"summer\",\n        \"icy\",\n        \"delicate\",\n        \"quiet\",\n        \"white\",\n        \"cool\",\n        \"spring\",\n        \"winter\",\n        \"patient\",\n        \"twilight\",\n        \"dawn\",\n        \"crimson\",\n        \"wispy\",\n        \"weathered\",\n        \"blue\",\n        \"billowing\",\n        \"broken\",\n        \"cold\",\n        \"damp\",\n        \"falling\",\n        \"frosty\",\n        \"green\",\n        \"long\",\n        \"late\",\n        \"lingering\",\n        \"bold\",\n        \"little\",\n        \"morning\",\n        \"muddy\",\n        \"old\",\n        \"red\",\n        \"rough\",\n        \"still\",\n        \"small\",\n        \"sparkling\",\n        \"shy\",\n        \"wandering\",\n        \"withered\",\n        \"wild\",\n        \"black\",\n        \"young\",\n        \"holy\",\n        \"solitary\",\n        \"fragrant\",\n        \"aged\",\n        \"snowy\",\n        \"proud\",\n        \"floral\",\n        \"restless\",\n        \"divine\",\n        \"polished\",\n        \"ancient\",\n        \"purple\",\n        \"lively\",\n        \"nameless\"\n    ];\n    const nouns = [\n        \"waterfall\",\n        \"river\",\n        \"breeze\",\n        \"moon\",\n        \"rain\",\n        \"wind\",\n        \"sea\",\n        \"morning\",\n        \"snow\",\n        \"lake\",\n        \"sunset\",\n        \"pine\",\n        \"shadow\",\n        \"leaf\",\n        \"dawn\",\n        \"glitter\",\n        \"forest\",\n        \"hill\",\n        \"cloud\",\n        \"meadow\",\n        \"sun\",\n        \"glade\",\n        \"bird\",\n        \"brook\",\n        \"butterfly\",\n        \"bush\",\n        \"dew\",\n        \"dust\",\n        \"field\",\n        \"fire\",\n        \"flower\",\n        \"firefly\",\n        \"feather\",\n        \"grass\",\n        \"haze\",\n        \"mountain\",\n        \"night\",\n        \"pond\",\n        \"darkness\",\n        \"snowflake\",\n        \"silence\",\n        \"sound\",\n        \"sky\",\n        \"shape\",\n        \"surf\",\n        \"thunder\",\n        \"violet\",\n        \"water\",\n        \"wildflower\",\n        \"wave\",\n        \"water\",\n        \"resonance\",\n        \"sun\",\n        \"wood\",\n        \"dream\",\n        \"cherry\",\n        \"tree\",\n        \"fog\",\n        \"frost\",\n        \"voice\",\n        \"paper\",\n        \"frog\",\n        \"smoke\",\n        \"star\"\n    ];\n    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];\n    const noun = nouns[Math.floor(Math.random() * nouns.length)];\n    return adjective + noun;\n}\nfunction randomColor() {\n    return \"#\" + Math.floor(Math.random() * 0xffffff).toString(16);\n}\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: \"1\",\n            data: \"This is a test message!\",\n            member: {\n                id: \"1\",\n                clientData: {\n                    color: \"blue\",\n                    username: \"bluemoon\"\n                }\n            }\n        }\n    ]);\n    const [me, setMe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        username: randomName(),\n        color: randomColor()\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Scaledrone Chat App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 171,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Your brand-new chat app!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 172,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 173,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 177,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 170,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().app),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().appContent)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 180,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 179,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"515FoNWYZvIOVPlmWYlJvW8sIaY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDaUI7QUFDYjtBQUVtQjtBQUVQO0FBRTdDLFNBQVNPO0lBQ0wsTUFBTUMsYUFBYTtRQUNmO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0g7SUFDRCxNQUFNQyxZQUFZRixVQUFVLENBQUNHLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxXQUFXTSxNQUFNLEVBQUU7SUFDM0UsTUFBTUMsT0FBT04sS0FBSyxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osTUFBTUssTUFBTSxFQUFFO0lBQzVELE9BQU9KLFlBQVlLO0FBQ3ZCO0FBRUEsU0FBU0M7SUFDTCxPQUFPLE1BQU1MLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLFVBQVVJLFFBQVEsQ0FBQztBQUMvRDtBQUVlLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO1FBQ3JDO1lBQ0lrQixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsUUFBUTtnQkFDSkYsSUFBSTtnQkFDSkcsWUFBWTtvQkFDUkMsT0FBTztvQkFDUEMsVUFBVTtnQkFDZDtZQUNKO1FBQ0o7S0FDSDtJQUNELE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHekIsK0NBQVFBLENBQUM7UUFDekJ1QixVQUFVbkI7UUFDVmtCLE9BQU9UO0lBQ1g7SUFDQSxxQkFDSTs7MEJBQ0ksOERBQUNoQixrREFBSUE7O2tDQUNELDhEQUFDNkI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUNHQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVosOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDQztnQkFBS0MsV0FBV3BDLG9FQUFVOzBCQUN2Qiw0RUFBQ3NDO29CQUFJRixXQUFXcEMsMkVBQWlCOzs7Ozs7Ozs7Ozs7O0FBSWpEO0dBbEN3QmlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiQC9jb21wb25lbnRzL01lc3NhZ2VzXCI7XG5cbmZ1bmN0aW9uIHJhbmRvbU5hbWUoKSB7XG4gICAgY29uc3QgYWRqZWN0aXZlcyA9IFtcbiAgICAgICAgXCJhdXR1bW5cIixcbiAgICAgICAgXCJoaWRkZW5cIixcbiAgICAgICAgXCJiaXR0ZXJcIixcbiAgICAgICAgXCJtaXN0eVwiLFxuICAgICAgICBcInNpbGVudFwiLFxuICAgICAgICBcImVtcHR5XCIsXG4gICAgICAgIFwiZHJ5XCIsXG4gICAgICAgIFwiZGFya1wiLFxuICAgICAgICBcInN1bW1lclwiLFxuICAgICAgICBcImljeVwiLFxuICAgICAgICBcImRlbGljYXRlXCIsXG4gICAgICAgIFwicXVpZXRcIixcbiAgICAgICAgXCJ3aGl0ZVwiLFxuICAgICAgICBcImNvb2xcIixcbiAgICAgICAgXCJzcHJpbmdcIixcbiAgICAgICAgXCJ3aW50ZXJcIixcbiAgICAgICAgXCJwYXRpZW50XCIsXG4gICAgICAgIFwidHdpbGlnaHRcIixcbiAgICAgICAgXCJkYXduXCIsXG4gICAgICAgIFwiY3JpbXNvblwiLFxuICAgICAgICBcIndpc3B5XCIsXG4gICAgICAgIFwid2VhdGhlcmVkXCIsXG4gICAgICAgIFwiYmx1ZVwiLFxuICAgICAgICBcImJpbGxvd2luZ1wiLFxuICAgICAgICBcImJyb2tlblwiLFxuICAgICAgICBcImNvbGRcIixcbiAgICAgICAgXCJkYW1wXCIsXG4gICAgICAgIFwiZmFsbGluZ1wiLFxuICAgICAgICBcImZyb3N0eVwiLFxuICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgIFwibG9uZ1wiLFxuICAgICAgICBcImxhdGVcIixcbiAgICAgICAgXCJsaW5nZXJpbmdcIixcbiAgICAgICAgXCJib2xkXCIsXG4gICAgICAgIFwibGl0dGxlXCIsXG4gICAgICAgIFwibW9ybmluZ1wiLFxuICAgICAgICBcIm11ZGR5XCIsXG4gICAgICAgIFwib2xkXCIsXG4gICAgICAgIFwicmVkXCIsXG4gICAgICAgIFwicm91Z2hcIixcbiAgICAgICAgXCJzdGlsbFwiLFxuICAgICAgICBcInNtYWxsXCIsXG4gICAgICAgIFwic3BhcmtsaW5nXCIsXG4gICAgICAgIFwic2h5XCIsXG4gICAgICAgIFwid2FuZGVyaW5nXCIsXG4gICAgICAgIFwid2l0aGVyZWRcIixcbiAgICAgICAgXCJ3aWxkXCIsXG4gICAgICAgIFwiYmxhY2tcIixcbiAgICAgICAgXCJ5b3VuZ1wiLFxuICAgICAgICBcImhvbHlcIixcbiAgICAgICAgXCJzb2xpdGFyeVwiLFxuICAgICAgICBcImZyYWdyYW50XCIsXG4gICAgICAgIFwiYWdlZFwiLFxuICAgICAgICBcInNub3d5XCIsXG4gICAgICAgIFwicHJvdWRcIixcbiAgICAgICAgXCJmbG9yYWxcIixcbiAgICAgICAgXCJyZXN0bGVzc1wiLFxuICAgICAgICBcImRpdmluZVwiLFxuICAgICAgICBcInBvbGlzaGVkXCIsXG4gICAgICAgIFwiYW5jaWVudFwiLFxuICAgICAgICBcInB1cnBsZVwiLFxuICAgICAgICBcImxpdmVseVwiLFxuICAgICAgICBcIm5hbWVsZXNzXCIsXG4gICAgXTtcbiAgICBjb25zdCBub3VucyA9IFtcbiAgICAgICAgXCJ3YXRlcmZhbGxcIixcbiAgICAgICAgXCJyaXZlclwiLFxuICAgICAgICBcImJyZWV6ZVwiLFxuICAgICAgICBcIm1vb25cIixcbiAgICAgICAgXCJyYWluXCIsXG4gICAgICAgIFwid2luZFwiLFxuICAgICAgICBcInNlYVwiLFxuICAgICAgICBcIm1vcm5pbmdcIixcbiAgICAgICAgXCJzbm93XCIsXG4gICAgICAgIFwibGFrZVwiLFxuICAgICAgICBcInN1bnNldFwiLFxuICAgICAgICBcInBpbmVcIixcbiAgICAgICAgXCJzaGFkb3dcIixcbiAgICAgICAgXCJsZWFmXCIsXG4gICAgICAgIFwiZGF3blwiLFxuICAgICAgICBcImdsaXR0ZXJcIixcbiAgICAgICAgXCJmb3Jlc3RcIixcbiAgICAgICAgXCJoaWxsXCIsXG4gICAgICAgIFwiY2xvdWRcIixcbiAgICAgICAgXCJtZWFkb3dcIixcbiAgICAgICAgXCJzdW5cIixcbiAgICAgICAgXCJnbGFkZVwiLFxuICAgICAgICBcImJpcmRcIixcbiAgICAgICAgXCJicm9va1wiLFxuICAgICAgICBcImJ1dHRlcmZseVwiLFxuICAgICAgICBcImJ1c2hcIixcbiAgICAgICAgXCJkZXdcIixcbiAgICAgICAgXCJkdXN0XCIsXG4gICAgICAgIFwiZmllbGRcIixcbiAgICAgICAgXCJmaXJlXCIsXG4gICAgICAgIFwiZmxvd2VyXCIsXG4gICAgICAgIFwiZmlyZWZseVwiLFxuICAgICAgICBcImZlYXRoZXJcIixcbiAgICAgICAgXCJncmFzc1wiLFxuICAgICAgICBcImhhemVcIixcbiAgICAgICAgXCJtb3VudGFpblwiLFxuICAgICAgICBcIm5pZ2h0XCIsXG4gICAgICAgIFwicG9uZFwiLFxuICAgICAgICBcImRhcmtuZXNzXCIsXG4gICAgICAgIFwic25vd2ZsYWtlXCIsXG4gICAgICAgIFwic2lsZW5jZVwiLFxuICAgICAgICBcInNvdW5kXCIsXG4gICAgICAgIFwic2t5XCIsXG4gICAgICAgIFwic2hhcGVcIixcbiAgICAgICAgXCJzdXJmXCIsXG4gICAgICAgIFwidGh1bmRlclwiLFxuICAgICAgICBcInZpb2xldFwiLFxuICAgICAgICBcIndhdGVyXCIsXG4gICAgICAgIFwid2lsZGZsb3dlclwiLFxuICAgICAgICBcIndhdmVcIixcbiAgICAgICAgXCJ3YXRlclwiLFxuICAgICAgICBcInJlc29uYW5jZVwiLFxuICAgICAgICBcInN1blwiLFxuICAgICAgICBcIndvb2RcIixcbiAgICAgICAgXCJkcmVhbVwiLFxuICAgICAgICBcImNoZXJyeVwiLFxuICAgICAgICBcInRyZWVcIixcbiAgICAgICAgXCJmb2dcIixcbiAgICAgICAgXCJmcm9zdFwiLFxuICAgICAgICBcInZvaWNlXCIsXG4gICAgICAgIFwicGFwZXJcIixcbiAgICAgICAgXCJmcm9nXCIsXG4gICAgICAgIFwic21va2VcIixcbiAgICAgICAgXCJzdGFyXCIsXG4gICAgXTtcbiAgICBjb25zdCBhZGplY3RpdmUgPSBhZGplY3RpdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamVjdGl2ZXMubGVuZ3RoKV07XG4gICAgY29uc3Qgbm91biA9IG5vdW5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5vdW5zLmxlbmd0aCldO1xuICAgIHJldHVybiBhZGplY3RpdmUgKyBub3VuO1xufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICBkYXRhOiBcIlRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UhXCIsXG4gICAgICAgICAgICBtZW1iZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICAgICAgY2xpZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcImJsdWVtb29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSk7XG4gICAgY29uc3QgW21lLCBzZXRNZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiByYW5kb21OYW1lKCksXG4gICAgICAgIGNvbG9yOiByYW5kb21Db2xvcigpLFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U2NhbGVkcm9uZSBDaGF0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIllvdXIgYnJhbmQtbmV3IGNoYXQgYXBwIVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHBDb250ZW50fT48L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiU2NyaXB0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNZXNzYWdlcyIsInJhbmRvbU5hbWUiLCJhZGplY3RpdmVzIiwibm91bnMiLCJhZGplY3RpdmUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJub3VuIiwicmFuZG9tQ29sb3IiLCJ0b1N0cmluZyIsIkhvbWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaWQiLCJkYXRhIiwibWVtYmVyIiwiY2xpZW50RGF0YSIsImNvbG9yIiwidXNlcm5hbWUiLCJtZSIsInNldE1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJhcHAiLCJkaXYiLCJhcHBDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});