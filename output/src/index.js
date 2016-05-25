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
	
	var _subEllipsis = __webpack_require__(1);
	
	var _subEllipsis2 = _interopRequireDefault(_subEllipsis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	console.log((0, _subEllipsis2.default)('我这里是很长的文本哦', 10)); /**
	                                                            * @file
	                                                            * @author jinguangguo
	                                                            * @date 2016/5/25
	                                                            */

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (value, number) {
	    if (this.len(value) <= number) {
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
	
	        if (this.len(c) === 2) {
	            count = count + 2;
	        } else {
	            count = count + 1;
	        }
	
	        if (count >= number) {
	            break;
	        }
	    }
	
	    return value.subvalueing(0, subNum) + '...';
	};
	
	/**
	 * @file
	 * @author jinguangguo
	 * @date 2016/5/23
	 */
	
	/**
	 * 具有中文字符的长度(默认一个中文代表两个英文字符长度)
	 * @param value
	 * @returns {number}
	 */
	function len(value) {
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
	}
	
	/**
	 * 字符串截取, 并在末尾添加"..."
	 * @param value
	 * @param number
	 * @returns {*}
	 */

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map