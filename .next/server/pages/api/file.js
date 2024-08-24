"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/file";
exports.ids = ["pages/api/file"];
exports.modules = {

/***/ "papaparse":
/*!****************************!*\
  !*** external "papaparse" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("papaparse");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/file/index.ts":
/*!*********************************!*\
  !*** ./pages/api/file/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ \"papaparse\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction handler(req, res) {\n    const { from , to  } = req.query;\n    // Проверяем, что параметры 'from' и 'to' заданы\n    if (!from || !to) {\n        return res.status(400).json({\n            error: \"Отсутствие параметров запроса 'from' или 'to'\"\n        });\n    }\n    // Путь к CSV файлу\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public/data.csv\");\n    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\");\n    papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(fileContent, {\n        header: true,\n        complete: (results)=>{\n            const totalRows = results.data.length;\n            const totalPages = Math.ceil(totalRows / 15);\n            const filteredData = results.data.slice(parseInt(from), parseInt(to));\n            res.status(200).json({\n                data: filteredData,\n                totalPages\n            });\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlsZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFDSztBQUVkLFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEVBQUUsR0FBRSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFFOUIsZ0RBQWdEO0lBQ2hELElBQUksQ0FBQ0YsSUFBSSxJQUFJLENBQUNDLEVBQUUsRUFBRTtRQUNkLE9BQU9GLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLCtDQUErQztTQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLE1BQU1DLFFBQVEsR0FBR1gsZ0RBQVMsQ0FBQ2EsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQztJQUM1RCxNQUFNQyxXQUFXLEdBQUdoQixzREFBZSxDQUFDWSxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBRXJEVixzREFBVSxDQUFDYyxXQUFXLEVBQUU7UUFDcEJHLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLFFBQVEsRUFBRSxDQUFDQyxPQUFPLEdBQUs7WUFDbkIsTUFBTUMsU0FBUyxHQUFHRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsTUFBTTtZQUNyQyxNQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDTCxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzVDLE1BQU1NLFlBQVksR0FBR1AsT0FBTyxDQUFDRSxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEIsSUFBSSxDQUFDLEVBQUV3QixRQUFRLENBQUN2QixFQUFFLENBQUMsQ0FBQztZQUNyRUYsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRTtnQkFBQ2EsSUFBSSxFQUFFSyxZQUFZO2dCQUFFSCxVQUFVO2FBQUMsQ0FBRSxDQUFDO1FBQzdELENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3N2LXRhYmxlLWFwcC8uL3BhZ2VzL2FwaS9maWxlL2luZGV4LnRzP2IyMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBQYXBhIGZyb20gJ3BhcGFwYXJzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0L/QsNGA0LDQvNC10YLRgNGLICdmcm9tJyDQuCAndG8nINC30LDQtNCw0L3Ri1xyXG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcItCe0YLRgdGD0YLRgdGC0LLQuNC1INC/0LDRgNCw0LzQtdGC0YDQvtCyINC30LDQv9GA0L7RgdCwICdmcm9tJyDQuNC70LggJ3RvJ1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YPRgtGMINC6IENTViDRhNCw0LnQu9GDXHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljL2RhdGEuY3N2Jyk7XHJcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuXHJcbiAgICBQYXBhLnBhcnNlKGZpbGVDb250ZW50LCB7XHJcbiAgICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICAgIGNvbXBsZXRlOiAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFJvd3MgPSByZXN1bHRzLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsUm93cyAvIDE1KTtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gcmVzdWx0cy5kYXRhLnNsaWNlKHBhcnNlSW50KGZyb20pLCBwYXJzZUludCh0bykpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbigge2RhdGE6IGZpbHRlcmVkRGF0YSwgdG90YWxQYWdlc30gKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiUGFwYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmcm9tIiwidG8iLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudCIsInJlYWRGaWxlU3luYyIsInBhcnNlIiwiaGVhZGVyIiwiY29tcGxldGUiLCJyZXN1bHRzIiwidG90YWxSb3dzIiwiZGF0YSIsImxlbmd0aCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpbHRlcmVkRGF0YSIsInNsaWNlIiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/file/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/file/index.ts"));
module.exports = __webpack_exports__;

})();