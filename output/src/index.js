/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/output/src/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _subEllipsis = __webpack_require__(3);
	
	var _subEllipsis2 = _interopRequireDefault(_subEllipsis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @file
	 * @author jinguangguo
	 * @date 2016/5/25
	 */
	
	console.log((0, _subEllipsis2.default)('我这里是很长的文本哦', 10));

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (value, number) {
	    if ((0, _len2.default)(value) <= number) {
	        return value;
	    }
	
	    var resultNum = void 0;
	    var subNum = 0;
	
	    var len = value.length;
	
	    var count = 0;
	
	    var c = void 0;
	
	    for (var i = 0; i < len; i++) {
	        c = value.charAt(i);
	        subNum++;
	
	        if ((0, _len2.default)(c) === 2) {
	            count = count + 2;
	        } else {
	            count = count + 1;
	        }
	
	        if (count >= number) {
	            break;
	        }
	    }
	
	    return value.substring(0, subNum) + '...';
	};
	
	var _len = __webpack_require__(4);
	
	var _len2 = _interopRequireDefault(_len);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (value) {
	    var reg = /[^\u0000-\u00FF]/; // 匹配非单字节字符
	    var c = '';
	    var count = 0;
	    for (var i = 0; i < value.length; i++) {
	        c = value.charAt(i);
	        if (reg.test(c) === true) {
	            count = count + 2;
	        } else {
	            count++;
	        }
	    }
	    return count;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map