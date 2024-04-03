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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Messages */ \"./src/components/Messages.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction randomName() {\n    const adjectives = [\n        \"autumn\",\n        \"hidden\",\n        \"bitter\",\n        \"misty\",\n        \"silent\",\n        \"empty\",\n        \"dry\",\n        \"dark\",\n        \"summer\",\n        \"icy\",\n        \"delicate\",\n        \"quiet\",\n        \"white\",\n        \"cool\",\n        \"spring\",\n        \"winter\",\n        \"patient\",\n        \"twilight\",\n        \"dawn\",\n        \"crimson\",\n        \"wispy\",\n        \"weathered\",\n        \"blue\",\n        \"billowing\",\n        \"broken\",\n        \"cold\",\n        \"damp\",\n        \"falling\",\n        \"frosty\",\n        \"green\",\n        \"long\",\n        \"late\",\n        \"lingering\",\n        \"bold\",\n        \"little\",\n        \"morning\",\n        \"muddy\",\n        \"old\",\n        \"red\",\n        \"rough\",\n        \"still\",\n        \"small\",\n        \"sparkling\",\n        \"shy\",\n        \"wandering\",\n        \"withered\",\n        \"wild\",\n        \"black\",\n        \"young\",\n        \"holy\",\n        \"solitary\",\n        \"fragrant\",\n        \"aged\",\n        \"snowy\",\n        \"proud\",\n        \"floral\",\n        \"restless\",\n        \"divine\",\n        \"polished\",\n        \"ancient\",\n        \"purple\",\n        \"lively\",\n        \"nameless\"\n    ];\n    const nouns = [\n        \"waterfall\",\n        \"river\",\n        \"breeze\",\n        \"moon\",\n        \"rain\",\n        \"wind\",\n        \"sea\",\n        \"morning\",\n        \"snow\",\n        \"lake\",\n        \"sunset\",\n        \"pine\",\n        \"shadow\",\n        \"leaf\",\n        \"dawn\",\n        \"glitter\",\n        \"forest\",\n        \"hill\",\n        \"cloud\",\n        \"meadow\",\n        \"sun\",\n        \"glade\",\n        \"bird\",\n        \"brook\",\n        \"butterfly\",\n        \"bush\",\n        \"dew\",\n        \"dust\",\n        \"field\",\n        \"fire\",\n        \"flower\",\n        \"firefly\",\n        \"feather\",\n        \"grass\",\n        \"haze\",\n        \"mountain\",\n        \"night\",\n        \"pond\",\n        \"darkness\",\n        \"snowflake\",\n        \"silence\",\n        \"sound\",\n        \"sky\",\n        \"shape\",\n        \"surf\",\n        \"thunder\",\n        \"violet\",\n        \"water\",\n        \"wildflower\",\n        \"wave\",\n        \"water\",\n        \"resonance\",\n        \"sun\",\n        \"wood\",\n        \"dream\",\n        \"cherry\",\n        \"tree\",\n        \"fog\",\n        \"frost\",\n        \"voice\",\n        \"paper\",\n        \"frog\",\n        \"smoke\",\n        \"star\"\n    ];\n    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];\n    const noun = nouns[Math.floor(Math.random() * nouns.length)];\n    return adjective + noun;\n}\nfunction randomColor() {\n    return \"#\" + Math.floor(Math.random() * 0xffffff).toString(16);\n}\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: \"1\",\n            data: \"This is a test message!\",\n            member: {\n                id: \"1\",\n                clientData: {\n                    color: \"blue\",\n                    username: \"bluemoon\"\n                }\n            }\n        }\n    ]);\n    const [me, setMe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        username: randomName(),\n        color: randomColor()\n    });\n    function onSendMessage(message) {\n        const newMessage = {\n            data: message,\n            member: me\n        };\n        setMessages([\n            ...messages,\n            newMessage\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Scaledrone Chat App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 179,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Your brand-new chat app!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 180,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 181,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 185,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 178,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().app),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().appContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            messages: messages,\n                            me: me\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 189,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onSendMessage: onSendMessage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 190,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 188,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Goran\\\\OneDrive\\\\Radna površina\\\\Development\\\\chat-app-scaledrone\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 187,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"515FoNWYZvIOVPlmWYlJvW8sIaY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2lCO0FBQ2I7QUFFbUI7QUFFUDtBQUNOO0FBRXZDLFNBQVNRO0lBQ0wsTUFBTUMsYUFBYTtRQUNmO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNIO0lBQ0QsTUFBTUMsUUFBUTtRQUNWO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0g7SUFDRCxNQUFNQyxZQUFZRixVQUFVLENBQUNHLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTCxXQUFXTSxNQUFNLEVBQUU7SUFDM0UsTUFBTUMsT0FBT04sS0FBSyxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osTUFBTUssTUFBTSxFQUFFO0lBQzVELE9BQU9KLFlBQVlLO0FBQ3ZCO0FBRUEsU0FBU0M7SUFDTCxPQUFPLE1BQU1MLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLFVBQVVJLFFBQVEsQ0FBQztBQUMvRDtBQUVlLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO1FBQ3JDO1lBQ0ltQixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsUUFBUTtnQkFDSkYsSUFBSTtnQkFDSkcsWUFBWTtvQkFDUkMsT0FBTztvQkFDUEMsVUFBVTtnQkFDZDtZQUNKO1FBQ0o7S0FDSDtJQUNELE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHMUIsK0NBQVFBLENBQUM7UUFDekJ3QixVQUFVbkI7UUFDVmtCLE9BQU9UO0lBQ1g7SUFDQSxTQUFTYSxjQUFjQyxPQUFPO1FBQzFCLE1BQU1DLGFBQWE7WUFDZlQsTUFBTVE7WUFDTlAsUUFBUUk7UUFDWjtRQUNBUCxZQUFZO2VBQUlEO1lBQVVZO1NBQVc7SUFDekM7SUFDQSxxQkFDSTs7MEJBQ0ksOERBQUNoQyxrREFBSUE7O2tDQUNELDhEQUFDaUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUNHQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVosOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDQztnQkFBS0MsV0FBV3hDLG9FQUFVOzBCQUN2Qiw0RUFBQzBDO29CQUFJRixXQUFXeEMsMkVBQWlCOztzQ0FDN0IsOERBQUNLLDREQUFRQTs0QkFBQ2MsVUFBVUE7NEJBQVVRLElBQUlBOzs7Ozs7c0NBQ2xDLDhEQUFDckIseURBQUtBOzRCQUFDdUIsZUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUM7R0E1Q3dCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIkAvY29tcG9uZW50cy9NZXNzYWdlc1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRcIjtcblxuZnVuY3Rpb24gcmFuZG9tTmFtZSgpIHtcbiAgICBjb25zdCBhZGplY3RpdmVzID0gW1xuICAgICAgICBcImF1dHVtblwiLFxuICAgICAgICBcImhpZGRlblwiLFxuICAgICAgICBcImJpdHRlclwiLFxuICAgICAgICBcIm1pc3R5XCIsXG4gICAgICAgIFwic2lsZW50XCIsXG4gICAgICAgIFwiZW1wdHlcIixcbiAgICAgICAgXCJkcnlcIixcbiAgICAgICAgXCJkYXJrXCIsXG4gICAgICAgIFwic3VtbWVyXCIsXG4gICAgICAgIFwiaWN5XCIsXG4gICAgICAgIFwiZGVsaWNhdGVcIixcbiAgICAgICAgXCJxdWlldFwiLFxuICAgICAgICBcIndoaXRlXCIsXG4gICAgICAgIFwiY29vbFwiLFxuICAgICAgICBcInNwcmluZ1wiLFxuICAgICAgICBcIndpbnRlclwiLFxuICAgICAgICBcInBhdGllbnRcIixcbiAgICAgICAgXCJ0d2lsaWdodFwiLFxuICAgICAgICBcImRhd25cIixcbiAgICAgICAgXCJjcmltc29uXCIsXG4gICAgICAgIFwid2lzcHlcIixcbiAgICAgICAgXCJ3ZWF0aGVyZWRcIixcbiAgICAgICAgXCJibHVlXCIsXG4gICAgICAgIFwiYmlsbG93aW5nXCIsXG4gICAgICAgIFwiYnJva2VuXCIsXG4gICAgICAgIFwiY29sZFwiLFxuICAgICAgICBcImRhbXBcIixcbiAgICAgICAgXCJmYWxsaW5nXCIsXG4gICAgICAgIFwiZnJvc3R5XCIsXG4gICAgICAgIFwiZ3JlZW5cIixcbiAgICAgICAgXCJsb25nXCIsXG4gICAgICAgIFwibGF0ZVwiLFxuICAgICAgICBcImxpbmdlcmluZ1wiLFxuICAgICAgICBcImJvbGRcIixcbiAgICAgICAgXCJsaXR0bGVcIixcbiAgICAgICAgXCJtb3JuaW5nXCIsXG4gICAgICAgIFwibXVkZHlcIixcbiAgICAgICAgXCJvbGRcIixcbiAgICAgICAgXCJyZWRcIixcbiAgICAgICAgXCJyb3VnaFwiLFxuICAgICAgICBcInN0aWxsXCIsXG4gICAgICAgIFwic21hbGxcIixcbiAgICAgICAgXCJzcGFya2xpbmdcIixcbiAgICAgICAgXCJzaHlcIixcbiAgICAgICAgXCJ3YW5kZXJpbmdcIixcbiAgICAgICAgXCJ3aXRoZXJlZFwiLFxuICAgICAgICBcIndpbGRcIixcbiAgICAgICAgXCJibGFja1wiLFxuICAgICAgICBcInlvdW5nXCIsXG4gICAgICAgIFwiaG9seVwiLFxuICAgICAgICBcInNvbGl0YXJ5XCIsXG4gICAgICAgIFwiZnJhZ3JhbnRcIixcbiAgICAgICAgXCJhZ2VkXCIsXG4gICAgICAgIFwic25vd3lcIixcbiAgICAgICAgXCJwcm91ZFwiLFxuICAgICAgICBcImZsb3JhbFwiLFxuICAgICAgICBcInJlc3RsZXNzXCIsXG4gICAgICAgIFwiZGl2aW5lXCIsXG4gICAgICAgIFwicG9saXNoZWRcIixcbiAgICAgICAgXCJhbmNpZW50XCIsXG4gICAgICAgIFwicHVycGxlXCIsXG4gICAgICAgIFwibGl2ZWx5XCIsXG4gICAgICAgIFwibmFtZWxlc3NcIixcbiAgICBdO1xuICAgIGNvbnN0IG5vdW5zID0gW1xuICAgICAgICBcIndhdGVyZmFsbFwiLFxuICAgICAgICBcInJpdmVyXCIsXG4gICAgICAgIFwiYnJlZXplXCIsXG4gICAgICAgIFwibW9vblwiLFxuICAgICAgICBcInJhaW5cIixcbiAgICAgICAgXCJ3aW5kXCIsXG4gICAgICAgIFwic2VhXCIsXG4gICAgICAgIFwibW9ybmluZ1wiLFxuICAgICAgICBcInNub3dcIixcbiAgICAgICAgXCJsYWtlXCIsXG4gICAgICAgIFwic3Vuc2V0XCIsXG4gICAgICAgIFwicGluZVwiLFxuICAgICAgICBcInNoYWRvd1wiLFxuICAgICAgICBcImxlYWZcIixcbiAgICAgICAgXCJkYXduXCIsXG4gICAgICAgIFwiZ2xpdHRlclwiLFxuICAgICAgICBcImZvcmVzdFwiLFxuICAgICAgICBcImhpbGxcIixcbiAgICAgICAgXCJjbG91ZFwiLFxuICAgICAgICBcIm1lYWRvd1wiLFxuICAgICAgICBcInN1blwiLFxuICAgICAgICBcImdsYWRlXCIsXG4gICAgICAgIFwiYmlyZFwiLFxuICAgICAgICBcImJyb29rXCIsXG4gICAgICAgIFwiYnV0dGVyZmx5XCIsXG4gICAgICAgIFwiYnVzaFwiLFxuICAgICAgICBcImRld1wiLFxuICAgICAgICBcImR1c3RcIixcbiAgICAgICAgXCJmaWVsZFwiLFxuICAgICAgICBcImZpcmVcIixcbiAgICAgICAgXCJmbG93ZXJcIixcbiAgICAgICAgXCJmaXJlZmx5XCIsXG4gICAgICAgIFwiZmVhdGhlclwiLFxuICAgICAgICBcImdyYXNzXCIsXG4gICAgICAgIFwiaGF6ZVwiLFxuICAgICAgICBcIm1vdW50YWluXCIsXG4gICAgICAgIFwibmlnaHRcIixcbiAgICAgICAgXCJwb25kXCIsXG4gICAgICAgIFwiZGFya25lc3NcIixcbiAgICAgICAgXCJzbm93Zmxha2VcIixcbiAgICAgICAgXCJzaWxlbmNlXCIsXG4gICAgICAgIFwic291bmRcIixcbiAgICAgICAgXCJza3lcIixcbiAgICAgICAgXCJzaGFwZVwiLFxuICAgICAgICBcInN1cmZcIixcbiAgICAgICAgXCJ0aHVuZGVyXCIsXG4gICAgICAgIFwidmlvbGV0XCIsXG4gICAgICAgIFwid2F0ZXJcIixcbiAgICAgICAgXCJ3aWxkZmxvd2VyXCIsXG4gICAgICAgIFwid2F2ZVwiLFxuICAgICAgICBcIndhdGVyXCIsXG4gICAgICAgIFwicmVzb25hbmNlXCIsXG4gICAgICAgIFwic3VuXCIsXG4gICAgICAgIFwid29vZFwiLFxuICAgICAgICBcImRyZWFtXCIsXG4gICAgICAgIFwiY2hlcnJ5XCIsXG4gICAgICAgIFwidHJlZVwiLFxuICAgICAgICBcImZvZ1wiLFxuICAgICAgICBcImZyb3N0XCIsXG4gICAgICAgIFwidm9pY2VcIixcbiAgICAgICAgXCJwYXBlclwiLFxuICAgICAgICBcImZyb2dcIixcbiAgICAgICAgXCJzbW9rZVwiLFxuICAgICAgICBcInN0YXJcIixcbiAgICBdO1xuICAgIGNvbnN0IGFkamVjdGl2ZSA9IGFkamVjdGl2ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqZWN0aXZlcy5sZW5ndGgpXTtcbiAgICBjb25zdCBub3VuID0gbm91bnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbm91bnMubGVuZ3RoKV07XG4gICAgcmV0dXJuIGFkamVjdGl2ZSArIG5vdW47XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICAgIHJldHVybiBcIiNcIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmKS50b1N0cmluZygxNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgIGRhdGE6IFwiVGhpcyBpcyBhIHRlc3QgbWVzc2FnZSFcIixcbiAgICAgICAgICAgIG1lbWJlcjoge1xuICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICBjbGllbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiYmx1ZW1vb25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdKTtcbiAgICBjb25zdCBbbWUsIHNldE1lXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWU6IHJhbmRvbU5hbWUoKSxcbiAgICAgICAgY29sb3I6IHJhbmRvbUNvbG9yKCksXG4gICAgfSk7XG4gICAgZnVuY3Rpb24gb25TZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICAgICAgICBkYXRhOiBtZXNzYWdlLFxuICAgICAgICAgICAgbWVtYmVyOiBtZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBuZXdNZXNzYWdlXSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U2NhbGVkcm9uZSBDaGF0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIllvdXIgYnJhbmQtbmV3IGNoYXQgYXBwIVwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmFwcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHBDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXttZXNzYWdlc30gbWU9e21lfSAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25TZW5kTWVzc2FnZT17b25TZW5kTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiU2NyaXB0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNZXNzYWdlcyIsIklucHV0IiwicmFuZG9tTmFtZSIsImFkamVjdGl2ZXMiLCJub3VucyIsImFkamVjdGl2ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIm5vdW4iLCJyYW5kb21Db2xvciIsInRvU3RyaW5nIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJpZCIsImRhdGEiLCJtZW1iZXIiLCJjbGllbnREYXRhIiwiY29sb3IiLCJ1c2VybmFtZSIsIm1lIiwic2V0TWUiLCJvblNlbmRNZXNzYWdlIiwibWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImFwcCIsImRpdiIsImFwcENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});