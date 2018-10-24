/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var contains = function (term) { return function (v) {
    return typeof v === 'string' && v.indexOf(term) !== -1;
}; };
var isFirstChars = function (term) { return function (v) {
    return typeof v === 'string' && v.indexOf(term) === 0;
}; };
var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var splitCommaDelimited = function (value) {
    return typeof value === 'string' ? value.split(/,\s*/) : [value];
};

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = __assign({}, number, { transform: clamp(0, 1) });
var scale = __assign({}, number, { default: 1 });

var createUnitType = function (unit) {
    var containsUnit = contains(unit);
    return {
        test: function (v) {
            return typeof v === 'string' && containsUnit(v) && v.split(' ').length === 1;
        },
        parse: parseFloat,
        transform: function (v) { return "" + v + unit; }
    };
};
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');

var clampRgbUnit = clamp(0, 255);
var onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
var splitColorValues = function (terms) {
    var numTerms = terms.length;
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
        for (var i = 0; i < numTerms; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
};
var rgbUnit = __assign({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var testRgbaString = isFirstChars('rgb');
var rgba = {
    test: function (v) { return (typeof v === 'string' ? testRgbaString(v) : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha$$1 = _a.alpha;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: alpha$$1
        });
    }
};
var testHslaString = isFirstChars('hsl');
var hsla = {
    test: function (v) { return (typeof v === 'string' ? testHslaString(v) : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha$$1 = _a.alpha;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(saturation),
            lightness: percent.transform(lightness),
            alpha: alpha$$1
        });
    }
};
var hex = __assign({}, rgba, { test: isFirstChars('#'), parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && onlyColorRegex.test(v)) ||
            rgba.test(v) ||
            hsla.test(v) ||
            hex.test(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var complex = {
    test: function (v) {
        if (typeof v !== 'string')
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 1;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : v[i]);
            }
            return output;
        };
    }
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["c"] = __rest;
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currentTime; });
/* unused harmony export onFrameStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onFrameUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onFrameRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onFrameEnd; });
/* unused harmony export cancelOnFrameStart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelOnFrameUpdate; });
/* unused harmony export cancelOnFrameRender */
/* unused harmony export cancelOnFrameEnd */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return timeSinceLastFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return currentFrameTime; });
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
var prevTime = 0;
var onNextFrame = hasRAF
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var currentTime = Date.now();
        var timeToCall = Math.max(0, 16.7 - (currentTime - prevTime));
        prevTime = currentTime + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

function createRenderStep(startRenderLoop) {
    var functionsToRun = [];
    var functionsToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    return {
        cancel: function (callback) {
            var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
            if (indexOfCallback !== -1) {
                functionsToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function () {
            isProcessing = true;
            _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
            functionsToRunNextFrame.length = 0;
            numThisFrame = functionsToRun.length;
            for (i = 0; i < numThisFrame; i++) {
                functionsToRun[i]();
            }
            isProcessing = false;
            var _a;
        },
        schedule: function (callback, immediate) {
            if (immediate === void 0) { immediate = false; }
            startRenderLoop();
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentBuffer) {
                    numThisFrame = functionsToRun.length;
                }
            }
        },
    };
}

var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
var currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return Date.now(); };
var willRenderNextFrame = false;
var MAX_ELAPSED = 40;
var defaultElapsed = 16.7;
var useDefaultElapsed = true;
var currentFramestamp = 0;
var elapsed = 0;
function startRenderLoop() {
    if (willRenderNextFrame)
        return;
    willRenderNextFrame = true;
    useDefaultElapsed = true;
    onNextFrame(processFrame);
}
var frameStart = createRenderStep(startRenderLoop);
var frameUpdate = createRenderStep(startRenderLoop);
var frameRender = createRenderStep(startRenderLoop);
var frameEnd = createRenderStep(startRenderLoop);
function processFrame(framestamp) {
    willRenderNextFrame = false;
    elapsed = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
    if (!useDefaultElapsed)
        defaultElapsed = elapsed;
    currentFramestamp = framestamp;
    frameStart.process();
    frameUpdate.process();
    frameRender.process();
    frameEnd.process();
    if (willRenderNextFrame)
        useDefaultElapsed = false;
}
var onFrameStart = frameStart.schedule;
var onFrameUpdate = frameUpdate.schedule;
var onFrameRender = frameRender.schedule;
var onFrameEnd = frameEnd.schedule;
var cancelOnFrameStart = frameStart.cancel;
var cancelOnFrameUpdate = frameUpdate.cancel;
var cancelOnFrameRender = frameRender.cancel;
var cancelOnFrameEnd = frameEnd.cancel;
var timeSinceLastFrame = function () { return elapsed; };
var currentFrameTime = function () { return currentFramestamp; };




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invariant; });
var HEY_LISTEN = 'Hey, listen! ';
var warning = function () { };
var invariant = function () { };
if (process.env.NODE_ENV !== 'production') {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(HEY_LISTEN + message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(HEY_LISTEN.toUpperCase() + message);
        }
    };
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createStylerFactory */
/* unused harmony export buildStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_framesync__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_style_value_types__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hey_listen__ = __webpack_require__(3);





var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.aliasMap,
        aliasMap = _b === void 0 ? {} : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function (unmappedKey, value) {
            var key = aliasMap[unmappedKey] || unmappedKey;
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                if (changedValues.indexOf(key) === -1) {
                    changedValues.push(key);
                }
                if (!hasChanged) {
                    hasChanged = true;
                    Object(__WEBPACK_IMPORTED_MODULE_0_framesync__["e" /* onFrameRender */])(render);
                }
            }
        };
        function render(forceRender) {
            if (forceRender === void 0) {
                forceRender = false;
            }
            if (forceRender || hasChanged) {
                onRender(state, props, changedValues);
                hasChanged = false;
                changedValues.length = 0;
            }
            return this;
        }
        return {
            get: function (unmappedKey) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                return key ? useCache && state[key] !== undefined ? state[key] : onRead(key, props) : state;
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    if (value !== undefined) {
                        setValue(values, value);
                    } else {
                        return function (v) {
                            return setValue(values, v);
                        };
                    }
                } else {
                    for (var key in values) {
                        if (values.hasOwnProperty(key)) {
                            setValue(key, values[key]);
                        }
                    }
                }
                return this;
            },
            render: render
        };
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var setDomAttrs = function (element, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            element.setAttribute(key, attrs[key]);
        }
    }
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement;
var testPrefix = function (key) {
    if (typeof document === 'undefined') return;
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style) {
            camelCache.set(key, prefixedPropertyName);
            dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) testPrefix(key);
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var TRANSFORM_ORIGIN_X = 'transformOriginX';
var TRANSFORM_ORIGIN_Y = 'transformOriginY';
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
var isTransformProp = function (key) {
    return transformPropDictionary[key] === true;
};
var sortTransformProps = function (a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
};
var isTransformOriginProp = function (key) {
    return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y;
};

var valueTypes = {
    color: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    outlineColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    fill: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    stroke: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderTopColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderRightColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderBottomColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderLeftColor: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    borderRadius: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    width: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    maxWidth: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    height: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    maxHeight: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    top: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    left: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    bottom: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    right: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    rotate: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    rotateX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    rotateY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    rotateZ: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    scale: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    scaleX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    scaleY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    scaleZ: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    skewX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    skewY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["degrees"],
    distance: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    translateX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    translateY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    translateZ: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    perspective: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"],
    opacity: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["alpha"],
    transformOriginX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["percent"],
    transformOriginY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["percent"],
    transformOriginZ: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["px"]
};
var getValueType = function (key) {
    return valueTypes[key];
};

var aliasMap = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    originX: 'transformOriginX',
    originY: 'transformOriginY',
    originZ: 'transformOriginZ'
};
var NUMBER = 'number';
var OBJECT = 'object';
var COLON = ':';
var SEMI_COLON = ';';
var TRANSFORM_ORIGIN = 'transform-origin';
var TRANSFORM = 'transform';
var TRANSLATE_Z = 'translateZ';
var TRANSFORM_NONE = ';transform: none';
var styleRule = function (key, value) {
    return "" + SEMI_COLON + key + COLON + value;
};
function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
    if (changedValues === void 0) {
        changedValues = true;
    }
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
    var propertyString = '';
    var transformString = '';
    var hasTransformOrigin = false;
    var transformIsDefault = true;
    var hasTransform = false;
    var transformHasZ = false;
    var numChangedValues = valuesToChange.length;
    for (var i = 0; i < numChangedValues; i++) {
        var key = valuesToChange[i];
        if (isTransformProp(key)) {
            hasTransform = true;
            for (var stateKey in state) {
                if (isTransformProp(stateKey) && valuesToChange.indexOf(stateKey) === -1) {
                    valuesToChange.push(stateKey);
                }
            }
            break;
        }
    }
    valuesToChange.sort(sortTransformProps);
    var totalNumChangedValues = valuesToChange.length;
    for (var i = 0; i < totalNumChangedValues; i++) {
        var key = valuesToChange[i];
        if (blacklist.has(key)) continue;
        var isTransformKey = isTransformProp(key);
        var value = state[key];
        var valueType = getValueType(key);
        if (isTransformKey) {
            if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                transformIsDefault = false;
            }
        }
        if (valueType && (typeof value === NUMBER || typeof value === OBJECT) && valueType.transform) {
            value = valueType.transform(value);
        }
        if (isTransformKey) {
            transformString += key + '(' + value + ') ';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
        } else if (isTransformOriginProp(key)) {
            state[key] = value;
            hasTransformOrigin = true;
        } else {
            propertyString += styleRule(prefixer(key, true), value);
        }
    }
    if (hasTransformOrigin) {
        propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY || 0) + " " + (state.transformOriginZ || 0));
    }
    if (hasTransform) {
        if (!transformHasZ && enableHardwareAcceleration) {
            transformString += TRANSLATE_Z + "(0)";
        }
        propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
    }
    return propertyString;
}

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollValues = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);
var cssStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element,
            preparseOutput = _a.preparseOutput;
        var valueType = getValueType(key);
        if (isTransformProp(key)) {
            return valueType ? valueType.default || 0 : 0;
        } else if (scrollValues.has(key)) {
            return element[key];
        } else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
            return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function (state, _a, changedValues) {
        var element = _a.element,
            enableHardwareAcceleration = _a.enableHardwareAcceleration;
        element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
        if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
        if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
    },
    aliasMap: aliasMap,
    uncachedValues: scrollValues
});
var css = function (element, props) {
    return cssStyler(Object(__WEBPACK_IMPORTED_MODULE_2_tslib__["a" /* __assign */])({ element: element, enableHardwareAcceleration: true, preparseOutput: true }, props));
};

var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function (percent$$1, length) {
    return percent$$1 / 100 * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale$$1 * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale$$1;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (isTransformProp(key)) {
                hasTransform = true;
            } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, pathLength);
            } else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
            } else {
                props[camelToDash(key)] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = key === 'scale' ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};

var valueTypes$1 = {
    fill: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    stroke: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["color"],
    scale: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    scaleX: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    scaleY: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["scale"],
    opacity: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["alpha"],
    fillOpacity: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["alpha"],
    strokeOpacity: __WEBPACK_IMPORTED_MODULE_1_style_value_types__["alpha"]
};
var getValueType$1 = function (key) {
    return valueTypes$1[key];
};

var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType$1(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function (state, _a, changedValues) {
        var dimensions = _a.dimensions,
            element = _a.element,
            isPath = _a.isPath,
            pathLength = _a.pathLength;
        setDomAttrs(element, build(state, dimensions, isPath, pathLength));
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        background: 'fill'
    }
});
var svg = function (element) {
    var _a = element.getBBox(),
        x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height;
    var props = {
        element: element,
        dimensions: { x: x, y: y, width: width, height: height },
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var createDOMStyler = function (node, props) {
    var styler;
    if (node instanceof HTMLElement) {
        styler = css(node, props);
    } else if (node instanceof SVGElement) {
        styler = svg(node);
    } else if (typeof window !== 'undefined' && node === window) {
        styler = viewport(node);
    }
    Object(__WEBPACK_IMPORTED_MODULE_3_hey_listen__["a" /* invariant */])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["a"] = (index);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jump = __webpack_require__(6);

var _jump2 = _interopRequireDefault(_jump);

var _popmotion = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(9);

document.addEventListener('DOMContentLoaded', function () {
  var App = new Application();
  App.handleAnchorNavigation();
  App.handleEmbeddedSocialMedia();
  App.handleJoinUsModal();
  App.handleMobileNavigation();
  App.subscribeToBrowserWidthChange();
}, false);

var Application = function () {
  function Application() {
    var _this = this;

    _classCallCheck(this, Application);

    this.subscribeToBrowserWidthChange = function () {
      if (_this.constructor.isMobileDevice()) {
        window.addEventListener("resize", _this.handleBrowserWidthChange);
      }
    };

    this.unsubscribeFromBrowserWidthChange = function () {
      window.removeEventListener("resize", _this.handleBrowserWidthChange);
    };

    this.state = {
      anchorNavigating: false,
      modalOpen: false,
      mobileNavOpen: false,
      embeddedSocialMediaIsAdded: false
    };

    this.handleBrowserWidthChange = this.addEmbeddedSocialMediaIfNeeded.bind(this);
    this.mobileWidth = 950;
  }

  _createClass(Application, [{
    key: 'addEmbeddedSocialMediaIfNeeded',
    value: function addEmbeddedSocialMediaIfNeeded(e) {
      var width = e.target.innerWidth;
      if (width > this.mobileWidth && !this.state.embeddedSocialMediaIsAdded) {
        this.handleEmbeddedSocialMedia();
      }
    }
  }, {
    key: 'handleAnchorNavigation',
    value: function handleAnchorNavigation() {
      var _this2 = this;

      var nodes = ["introduction", "events", "sponsors", "contact"];

      nodes.map(function (node) {
        var triggers = document.querySelectorAll('.' + node + '-node');
        var target = document.querySelector('#' + node);

        triggers.forEach(function (trigger) {
          trigger.addEventListener("click", function () {
            if (!_this2.state.anchorNavigating) {
              _this2.state.anchorNavigating = true;

              (0, _jump2.default)(target, {
                offset: -80,
                callback: function callback() {
                  return _this2.state.anchorNavigating = false;
                }
              });
            }
          });
        });
      });
    }
  }, {
    key: 'handleEmbeddedSocialMedia',
    value: function handleEmbeddedSocialMedia() {
      if (!this.constructor.isMobileDevice()) {
        this.state.embeddedSocialMediaIsAdded = true;
        this.unsubscribeFromBrowserWidthChange();
        // TWITTER
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.getElementsByTagName("head")[0].appendChild(script);

        // FACEBOOK
        (function (d, s, id) {
          var js,
              fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);js.id = id;
          js.async = true;
          js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=122107125107711';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      }
    }
  }, {
    key: 'handleMobileNavigation',
    value: function handleMobileNavigation() {
      var navigationButton = document.querySelector('.mobile-menu-trigger');
      var mobileNavigationContainer = document.querySelector(".mobile-navigation");
      var shade = document.querySelector('.mobile-nav-shade');
      var mobileNavigationItems = document.querySelectorAll(".mobile-nav-li");

      var toggleMobileNavigation = function toggleMobileNavigation() {
        [navigationButton, mobileNavigationContainer, shade].map(function (e) {
          e.classList.toggle("is-active");
        });
      };

      mobileNavigationItems.forEach(function (e) {
        return e.addEventListener("click", function () {
          return toggleMobileNavigation();
        });
      });
      navigationButton.addEventListener("click", function () {
        return toggleMobileNavigation();
      });
    }
  }, {
    key: 'handleJoinUsModal',
    value: function handleJoinUsModal() {
      var _this3 = this;

      var openModalButton = document.querySelector('.open-modal');
      var cancelModalButton = document.querySelector('.modal-cancel');

      var modalShade = (0, _popmotion.styler)(document.querySelector('.modal-shade'));
      var modalContainer = (0, _popmotion.styler)(document.querySelector('.modal-container'));
      var modal = (0, _popmotion.styler)(document.querySelector('.modal'));
      var modalSections = Array.from(document.querySelector('.modal').children).map(_popmotion.styler);
      var sectionLabels = modalSections.map(function (s, i) {
        return 'section' + i;
      });

      var tweenUp = function tweenUp(track) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var yFrom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return {
          track: track,
          duration: duration,
          from: { y: yFrom, opacity: 0 },
          to: { y: 0, opacity: 1 },
          ease: { y: _popmotion.easing.backOut, opacity: _popmotion.easing.linear }
        };
      };

      var setStylers = function setStylers(v) {
        if (v.shade !== undefined) modalShade.set('opacity', v.shade);
        if (v.modal !== undefined) modal.set(v.modal);
        sectionLabels.forEach(function (label, i) {
          if (v[label] !== undefined) modalSections[i].set(v[label]);
        });
      };

      var showContainers = function showContainers() {
        modalShade.set('display', 'block');
        modalContainer.set('display', 'flex');
      };

      var hideContainers = function hideContainers() {
        modalShade.set('display', 'none');
        modalContainer.set('display', 'none');
      };

      var openModal = function openModal() {
        _this3.state.modalOpen = true;
        showContainers();

        (0, _popmotion.timeline)([{ track: 'shade', from: 0, to: 1, ease: _popmotion.easing.linear }, '-100', tweenUp('modal'), '-200', [].concat(_toConsumableArray(modalSections.map(function (s, i) {
          return tweenUp(sectionLabels[i], 300, 50);
        })), [50])]).start(setStylers);
      };

      var cancelModal = function cancelModal() {
        (0, _popmotion.timeline)([{
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: 100, opacity: 0 },
          ease: { y: _popmotion.easing.easeIn, opacity: _popmotion.easing.linear }
        }, '-100', { track: 'shade', from: 1, to: 0, ease: _popmotion.easing.linear, duration: 200 }]).start({
          update: setStylers,
          complete: hideContainers
        });
      };

      var okModal = function okModal() {
        (0, _popmotion.timeline)([{
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: -200, opacity: 0 },
          ease: { y: _popmotion.easing.easeOut, opacity: _popmotion.easing.linear }
        }, '-100', { track: 'shade', from: 1, to: 0, ease: _popmotion.easing.linear, duration: 300 }]).start({
          update: setStylers,
          complete: hideContainers
        });
      };

      (0, _popmotion.listen)(openModalButton, 'click').start(openModal);
      (0, _popmotion.listen)(cancelModalButton, 'click').start(cancelModal);
    }
  }], [{
    key: 'isMobileDevice',
    value: function isMobileDevice() {
      return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1 || window.innerWidth <= this.mobileWidth;
    }
  }]);

  return Application;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_framesync__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_style_value_types__ = __webpack_require__(0);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueTypes", function() { return __WEBPACK_IMPORTED_MODULE_2_style_value_types__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hey_listen__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_stylefire__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return __WEBPACK_IMPORTED_MODULE_4_stylefire__["a"]; });









var isNum = function (v) {
    return typeof v === 'number';
};
var isPoint = function (point) {
    return point.x !== undefined && point.y !== undefined;
};
var isPoint3D = function (point) {
    return point.z !== undefined;
};
var toDecimal = function (num, precision) {
    if (precision === void 0) {
        precision = 2;
    }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
var ZERO_POINT = {
    x: 0,
    y: 0,
    z: 0
};
var distance1D = function (a, b) {
    return Math.abs(a - b);
};
var angle = function (a, b) {
    if (b === void 0) {
        b = ZERO_POINT;
    }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};
var degreesToRadians = function (degrees$$1) {
    return degrees$$1 * Math.PI / 180;
};
var dilate = function (a, b, dilation) {
    return a + (b - a) * dilation;
};
var distance = function (a, b) {
    if (b === void 0) {
        b = ZERO_POINT;
    }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
};
var getProgressFromValue = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
var getValueFromProgress = function (from, to, progress) {
    return -progress * from + progress * to + from;
};
var pointFromAngleAndDistance = function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};
var radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};
var smooth = function (newValue, oldValue, duration, smoothing) {
    if (smoothing === void 0) {
        smoothing = 0;
    }
    return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};
var speedPerFrame = function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
};
var speedPerSecond = function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
var stepProgress = function (steps, progress) {
    var segment = 1 / (steps - 1);
    var target = 1 - 1 / steps;
    var progressOfTarget = Math.min(progress / target, 1);
    return Math.floor(progressOfTarget / segment) * segment;
};

var calc = /*#__PURE__*/Object.freeze({
    isPoint: isPoint,
    isPoint3D: isPoint3D,
    angle: angle,
    degreesToRadians: degreesToRadians,
    dilate: dilate,
    distance: distance,
    getProgressFromValue: getProgressFromValue,
    getValueFromProgress: getValueFromProgress,
    pointFromAngleAndDistance: pointFromAngleAndDistance,
    radiansToDegrees: radiansToDegrees,
    smooth: smooth,
    speedPerFrame: speedPerFrame,
    speedPerSecond: speedPerSecond,
    stepProgress: stepProgress
});

var noop = function (v) {
    return v;
};
var appendUnit = function (unit) {
    return function (v) {
        return "" + v + unit;
    };
};
var applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    var getOffset = function (v) {
        return v - from;
    };
    var applyOffsetTo = function (v) {
        return v + to;
    };
    return function (v) {
        if (hasReceivedFrom) {
            return applyOffsetTo(getOffset(v));
        } else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};
var blend = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
var blendColor = function (from, to) {
    var fromColor = typeof from === 'string' ? __WEBPACK_IMPORTED_MODULE_2_style_value_types__["color"].parse(from) : from;
    var toColor = typeof to === 'string' ? __WEBPACK_IMPORTED_MODULE_2_style_value_types__["color"].parse(to) : to;
    var blended = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, fromColor);
    var blendFunc = from.hue !== undefined || typeof from === 'string' && __WEBPACK_IMPORTED_MODULE_2_style_value_types__["hsla"].test(from) ? getValueFromProgress : blend;
    return function (v) {
        blended = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, blended);
        for (var key in blended) {
            if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                blended[key] = blendFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
        return blended;
    };
};
var blendArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) {
        var toThis = to[i];
        return typeof fromThis === 'number' ? function (v) {
            return getValueFromProgress(fromThis, toThis, v);
        } : blendColor(fromThis, toThis);
    });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var clamp = function (min, max) {
    return function (v) {
        return Math.min(Math.max(v, min), max);
    };
};
var combineFunctions = function (a, b) {
    return function (v) {
        return b(a(v));
    };
};
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};
var conditional = function (check, apply) {
    return function (v) {
        return check(v) ? apply(v) : v;
    };
};
var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
    var finalIndex = rangeLength - 1;
    if (input[0] > input[finalIndex]) {
        input.reverse();
        output.reverse();
    }
    return function (v) {
        if (v <= input[0]) {
            return output[0];
        }
        if (v >= input[finalIndex]) {
            return output[finalIndex];
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalIndex) {
                break;
            }
        }
        var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
        var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
        return getValueFromProgress(output[i - 1], output[i], easedProgress);
    };
};
var fastInterpolate = function (minA, maxA, minB, maxB) {
    return function (v) {
        return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
    };
};
var interpolate = function (input, output, rangeEasing) {
    var rangeLength = input.length;
    return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
};
var generateStaticSpring = function (alterDisplacement) {
    if (alterDisplacement === void 0) {
        alterDisplacement = noop;
    }
    return function (constant, origin) {
        return function (v) {
            var displacement = origin - v;
            var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
            return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
        };
    };
};
var linearSpring = /*#__PURE__*/generateStaticSpring();
var nonlinearSpring = /*#__PURE__*/generateStaticSpring(Math.sqrt);
var wrap = function (min, max) {
    return function (v) {
        var rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
    };
};
var smooth$1 = function (strength) {
    if (strength === void 0) {
        strength = 50;
    }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["b" /* currentFrameTime */])();
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};
var snap = function (points) {
    if (typeof points === 'number') {
        return function (v) {
            return Math.round(v / points) * points;
        };
    } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance$$1 = Math.abs(point - v);
                if (distance$$1 === 0) return point;
                if (distance$$1 > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance$$1;
            }
        };
    }
};
var steps = function (st, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return function (v) {
        var progress = getProgressFromValue(min, max, v);
        return getValueFromProgress(min, max, stepProgress(st, progress));
    };
};
var transformMap = function (childTransformers) {
    return function (v) {
        var output = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    };
};

var transformers = /*#__PURE__*/Object.freeze({
    appendUnit: appendUnit,
    applyOffset: applyOffset,
    blendColor: blendColor,
    blendArray: blendArray,
    clamp: clamp,
    pipe: pipe,
    conditional: conditional,
    interpolate: interpolate,
    generateStaticSpring: generateStaticSpring,
    linearSpring: linearSpring,
    nonlinearSpring: nonlinearSpring,
    wrap: wrap,
    smooth: smooth$1,
    snap: snap,
    steps: steps,
    transformMap: transformMap
});

var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function (init) {
    return new Action({ init: init });
};

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var isValueList = function (v) {
    return Array.isArray(v);
};
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = /*#__PURE__*/function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["d" /* onFrameEnd */])(_this.velocityCheck);
        };
        _this.velocityCheck = function () {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["b" /* currentFrameTime */])() !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        this.timeDelta = Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["g" /* timeSinceLastFrame */])();
        this.lastUpdated = Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["b" /* currentFrameTime */])();
        Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["d" /* onFrameEnd */])(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? speedPerSecond(current - prev, this.timeDelta) : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updateOutput, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
                var _a;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.reduce(function (isVector, key) {
            return isVector || isVectorProp(props[key], key);
        }, false);
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [__WEBPACK_IMPORTED_MODULE_2_style_value_types__["px"], __WEBPACK_IMPORTED_MODULE_2_style_value_types__["percent"], __WEBPACK_IMPORTED_MODULE_2_style_value_types__["degrees"], __WEBPACK_IMPORTED_MODULE_2_style_value_types__["vh"], __WEBPACK_IMPORTED_MODULE_2_style_value_types__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var reduceArrayValue = function (i) {
    return function (props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        var childActionProps = vectorKeys.reduce(reduceArrayValue(i), Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, props));
        return getActionCreator(v)(action, childActionProps);
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function (key) {
    return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        var childActionProps = vectorKeys.reduce(reduceObjectValue(key), Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, props));
        map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
        return map;
    }, {});
    return composite(actionMap);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createColorAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["from", "to"]);
    return action(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, props, { from: 0, to: 1 })).pipe(blendColor(from, to), __WEBPACK_IMPORTED_MODULE_2_style_value_types__["color"].transform);
};
var createComplexAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["from", "to"]);
    var valueTemplate = __WEBPACK_IMPORTED_MODULE_2_style_value_types__["complex"].createTransformer(from);
    Object(__WEBPACK_IMPORTED_MODULE_3_hey_listen__["a" /* invariant */])(valueTemplate(from) === __WEBPACK_IMPORTED_MODULE_2_style_value_types__["complex"].createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
    return action(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, props, { from: 0, to: 1 })).pipe(blendArray(__WEBPACK_IMPORTED_MODULE_2_style_value_types__["complex"].parse(from), __WEBPACK_IMPORTED_MODULE_2_style_value_types__["complex"].parse(to)), valueTemplate);
};
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    var actionCreator = createAction;
    if (typeof prop === 'number') {
        actionCreator = createAction;
    } else if (Array.isArray(prop)) {
        actionCreator = createArrayAction;
    } else if (isUnitProp(prop)) {
        actionCreator = createUnitAction;
    } else if (__WEBPACK_IMPORTED_MODULE_2_style_value_types__["color"].test(prop)) {
        actionCreator = createColorAction;
    } else if (__WEBPACK_IMPORTED_MODULE_2_style_value_types__["complex"].test(prop)) {
        actionCreator = createComplexAction;
    } else if (typeof prop === 'object') {
        actionCreator = createObjectAction;
    }
    return actionCreator;
};

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var isActive = true;
        var startTime = Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["c" /* currentTime */])();
        var nextFrame = function () {
            if (!isActive) return;
            update(Math.max(Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["b" /* currentFrameTime */])() - startTime, 0));
            Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(nextFrame);
        };
        Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(nextFrame);
        return {
            stop: function () {
                return isActive = false;
            }
        };
    });
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var timer = frame().start(function () {
            elapsed += Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["g" /* timeSinceLastFrame */])();
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                timer.stop();
                complete();
            }
        });
        return {
            stop: function () {
                return timer.stop();
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test
});

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var createReversedEasing = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var createMirroredEasing = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var linear = function (p) {
    return p;
};
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/createReversedEasing(easeIn);
var easeInOut = /*#__PURE__*/createMirroredEasing(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/createReversedEasing(circIn);
var circInOut = /*#__PURE__*/createMirroredEasing(circOut);
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/createReversedEasing(backIn);
var backInOut = /*#__PURE__*/createMirroredEasing(backIn);
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var _precomputed = false;
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    var precompute = function () {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) {
            calcSampleValues();
        }
    };
    var resolver = function (aX) {
        var returnValue;
        if (!_precomputed) {
            precompute();
        }
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}

var easing = /*#__PURE__*/Object.freeze({
    createReversedEasing: createReversedEasing,
    createMirroredEasing: createMirroredEasing,
    linear: linear,
    createExpoIn: createExpoIn,
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut,
    circIn: circIn,
    circOut: circOut,
    circInOut: circInOut,
    createBackIn: createBackIn,
    backIn: backIn,
    backOut: backOut,
    backInOut: backInOut,
    createAnticipateEasing: createAnticipateEasing,
    anticipate: anticipate,
    cubicBezier: cubicBezier
});

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? linear : _d;
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function (v) {
        return getValueFromProgress(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    to: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test
});

var clampProgress = /*#__PURE__*/clamp(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? easeOut : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from,
            from = _g === void 0 ? 0 : _g,
            _h = props.to,
            to = _h === void 0 ? 1 : _h,
            _j = props.elapsed,
            elapsed = _j === void 0 ? 0 : _j,
            _k = props.playDirection,
            playDirection = _k === void 0 ? 1 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var progress = 0;
        var tweenTimer;
        var isActive = false;
        var reverseTween = function () {
            return playDirection *= -1;
        };
        var isTweenComplete = function () {
            var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            } else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [to, from], from = _a[0], to = _a[1];
                playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
                flipCount++;
                isStepTaken = true;
            } else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            return !isStepTaken;
            var _a;
        };
        var updateTween = function () {
            progress = clampProgress(getProgressFromValue(0, duration, elapsed));
            playhead.seek(progress);
        };
        var startTimer = function () {
            isActive = true;
            tweenTimer = frame().start(function () {
                elapsed += Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["g" /* timeSinceLastFrame */])() * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    tweenTimer.stop();
                    Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(complete, true);
                }
            });
        };
        var stopTimer = function () {
            isActive = false;
            if (tweenTimer) tweenTimer.stop();
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return clamp(0, duration)(elapsed);
            },
            getProgress: function () {
                return progress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = getValueFromProgress(0, duration, newProgress);
                Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updateTween, true);
                return this;
            },
            reverse: function () {
                reverseTween();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/clamp(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () {
        return easing || easeOut;
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? linear : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var timer = frame().start(function () {
            var elapsed = Math.max(Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["g" /* timeSinceLastFrame */])(), 16);
            if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
            }
            current += speedPerFrame(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                timer.stop();
                complete();
            }
        });
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return timer.stop();
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    friction: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    velocity: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    from: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    to: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    springStrength: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var springTimer = frame().start(function () {
            var timeDelta = Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["g" /* timeSinceLastFrame */])();
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = speedPerSecond(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                springTimer.stop();
                complete();
            } else {
                update(position);
            }
        });
        return {
            stop: function () {
                return springTimer.stop();
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    to: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    stiffness: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    damping: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    mass: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test,
    velocity: __WEBPACK_IMPORTED_MODULE_2_style_value_types__["number"].test
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(linear);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(linear);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(linear);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || easeInOut);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', true).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = distance(firstTouch, secondTouch);
            initialRotation = angle(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = distance(firstTouch, secondTouch);
                var newRotation = angle(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', { passive: !preventDefault }).start(onMove);
        if (isTouchDevice) Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updatePoint);
        return {
            stop: function () {
                Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["a" /* cancelOnFrameUpdate */])(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["f" /* onFrameUpdate */])(updatePoint);
        return {
            stop: function () {
                Object(__WEBPACK_IMPORTED_MODULE_1_framesync__["a" /* cancelOnFrameUpdate */])(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __rest */])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = applyOffset(x || 0);
        var applyYOffset_1 = applyOffset(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(getValueFromProgress(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var css = function (element, props) {
    Object(__WEBPACK_IMPORTED_MODULE_3_hey_listen__["b" /* warning */])(false, 'css() is deprecated, use styler instead');
    return Object(__WEBPACK_IMPORTED_MODULE_4_stylefire__["a" /* default */])(element, props);
};
var svg = function (element, props) {
    Object(__WEBPACK_IMPORTED_MODULE_3_hey_listen__["b" /* warning */])(false, 'svg() is deprecated, use styler instead');
    return Object(__WEBPACK_IMPORTED_MODULE_4_stylefire__["a" /* default */])(element, props);
};




/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(12)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib/index.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".gradient-button {\n  transition: all 0.2s ease;\n  background: linear-gradient(135deg, #009FDA 0%, #48C4E5 100%);\n  font-weight: 700;\n  box-shadow: 0 1.5px 3.5px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.14); }\n  .gradient-button:hover {\n    box-shadow: 0 2.5px 4.5px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.24); }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  -moz-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: .4s;\n  -moz-animation-duration: .4s;\n  animation-duration: .4s; }\n  .fade-in.one {\n    -webkit-animation-delay: 0.1s;\n    -moz-animation-delay: 0.1s; }\n  .fade-in.two {\n    -webkit-animation-delay: .4s;\n    -moz-animation-delay: .4s;\n    animation-delay: .4s; }\n  .fade-in.three {\n    -webkit-animation-delay: .5s;\n    -moz-animation-delay: .5s;\n    animation-delay: .5s; }\n  .fade-in.four {\n    -webkit-animation-delay: .6s;\n    -moz-animation-delay: .6s;\n    animation-delay: .8s; }\n\n.section-content-wrapper {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 10%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: auto; }\n\nheader {\n  width: 100%;\n  height: 80px;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  position: fixed; }\n\n.navbar {\n  max-width: 1440px;\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  background-color: #fff;\n  margin: 0 auto;\n  padding: 0 10%; }\n  .navbar .navbar-lower-wrapper {\n    display: flex;\n    width: 100%; }\n    .navbar .navbar-lower-wrapper .logo-wrapper {\n      display: inline-flex;\n      flex: 1;\n      background-color: #fff;\n      align-items: center;\n      justify-content: center; }\n      .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n        height: 65px;\n        padding-top: 5px;\n        width: auto;\n        cursor: pointer;\n        transition: all .4s ease-out; }\n        @media screen and (max-width: 1375px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 55px; } }\n        @media screen and (max-width: 1275px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 50px; } }\n        @media screen and (max-width: 1225px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 48px; } }\n        @media screen and (max-width: 1175px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 44px; } }\n        @media screen and (max-width: 420px) {\n          .navbar .navbar-lower-wrapper .logo-wrapper .logo {\n            height: 36px; } }\n    .navbar .navbar-lower-wrapper .nav-items-wrapper {\n      display: inline-flex;\n      flex: 9; }\n      .navbar .navbar-lower-wrapper .nav-items-wrapper ul {\n        flex: 1;\n        justify-content: flex-start;\n        align-items: center;\n        flex-direction: row;\n        display: flex;\n        padding-left: 7%; }\n        @media screen and (max-width: 950px) {\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul {\n            display: none; } }\n        .navbar .navbar-lower-wrapper .nav-items-wrapper ul div {\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n          .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n            color: #009FDA;\n            margin: 0;\n            padding: 0;\n            border: 0;\n            font-size: 100%;\n            font: inherit;\n            vertical-align: baseline;\n            text-transform: uppercase;\n            font-size: 16px;\n            padding: 20px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all .4s ease-out; }\n            @media screen and (max-width: 1375px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 15px; } }\n            @media screen and (max-width: 1275px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 15px; } }\n            @media screen and (max-width: 1225px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 14px; } }\n            @media screen and (max-width: 1175px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                font-size: 12px;\n                padding: 14px; } }\n            @media screen and (max-width: 1055px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 12px; } }\n            @media screen and (max-width: 1005px) {\n              .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li {\n                padding: 9px; } }\n            .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li:after {\n              display: block;\n              content: '';\n              position: relative;\n              top: 4px;\n              height: 2px;\n              background: #009FDA;\n              transform: scaleX(0.0001);\n              transition: transform 240ms ease-in-out;\n              box-shadow: inset -40px 0px 30px -25px, rgba(72, 196, 229, 0.2); }\n            .navbar .navbar-lower-wrapper .nav-items-wrapper ul div li:hover:after {\n              transform: scaleX(1); }\n    .navbar .navbar-lower-wrapper .nav-button-wrapper {\n      display: flex;\n      flex: 1;\n      justify-content: center;\n      align-items: center; }\n      @media screen and (max-width: 1055px) {\n        .navbar .navbar-lower-wrapper .nav-button-wrapper button {\n          height: 33px;\n          width: 115px;\n          font-size: 14px; } }\n\n.section-introduction {\n  height: 90vh;\n  color: #fff;\n  background: linear-gradient(135deg, #25336E 0%, #009FDA 36%, #48C4E5 81%, #9CDBF1 100%);\n  background-size: 400% 400%;\n  z-index: 10;\n  -webkit-animation: Gradient 35s ease infinite;\n  -moz-animation: Gradient 35s ease infinite;\n  animation: Gradient 35s ease infinite;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column; }\n  .section-introduction .section-introduction-content-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    flex-direction: column; }\n    .section-introduction .section-introduction-content-wrapper .logo {\n      height: auto;\n      max-width: 15%;\n      min-width: 180px;\n      margin-bottom: 1%; }\n      @media screen and (max-width: 730px) {\n        .section-introduction .section-introduction-content-wrapper .logo {\n          min-width: 160px;\n          margin-bottom: 2%; } }\n    .section-introduction .section-introduction-content-wrapper .club-description-wrapper {\n      text-align: center;\n      width: 80%;\n      max-width: 560px;\n      justify-content: center;\n      display: flex;\n      flex-direction: column;\n      padding-top: 10px;\n      margin-bottom: 20px; }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n        margin-bottom: 10px;\n        font-size: 24px; }\n        @media screen and (max-width: 730px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n            font-size: 23px; } }\n        @media screen and (max-width: 690px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n            font-size: 21px; } }\n        @media screen and (max-width: 590px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n            font-size: 20px; } }\n        @media screen and (max-width: 470px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper h1 {\n            font-size: 17px; } }\n      .section-introduction .section-introduction-content-wrapper .club-description-wrapper p {\n        font-size: 18px;\n        line-height: 1.4;\n        width: 90%;\n        margin: 0 auto; }\n        @media screen and (max-width: 730px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper p {\n            font-size: 15px; } }\n        @media screen and (max-width: 690px) {\n          .section-introduction .section-introduction-content-wrapper .club-description-wrapper p {\n            font-size: 14px; } }\n    .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper {\n      display: flex;\n      position: relative;\n      flex-direction: column;\n      align-items: center;\n      top: 1vh;\n      cursor: pointer; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper:hover i {\n        top: 3px; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper p {\n        font-weight: 700;\n        font-size: 14px;\n        text-transform: uppercase; }\n      .section-introduction .section-introduction-content-wrapper .down-arrow-wrapper i {\n        font-size: 20px;\n        transition: all 0.2s ease-in-out;\n        position: relative;\n        top: 0px; }\n\n@-webkit-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@-moz-keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n@keyframes Gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.section-events {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  padding: 60px 0 90px 0;\n  background-color: #fff;\n  z-index: 9;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.09); }\n  @media screen and (max-width: 950px) {\n    .section-events {\n      padding: 70px 0 10px 0; } }\n  .section-events .header {\n    padding-bottom: 30px; }\n  .section-events p {\n    text-align: justify; }\n  .section-events .section-main-event {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    margin-bottom: 70px; }\n    @media screen and (max-width: 950px) {\n      .section-events .section-main-event {\n        flex-flow: column-reverse; }\n        .section-events .section-main-event:first-of-type {\n          margin-bottom: 0px; } }\n    .section-events .section-main-event .section-event-left {\n      display: flex;\n      flex: 1;\n      flex-direction: column;\n      text-align: left;\n      height: 100%;\n      justify-content: center; }\n      @media screen and (max-width: 950px) {\n        .section-events .section-main-event .section-event-left {\n          min-height: 315px;\n          justify-content: baseline;\n          margin-bottom: 0px; } }\n      @media screen and (max-width: 550px) {\n        .section-events .section-main-event .section-event-left {\n          min-height: 370px;\n          justify-content: baseline;\n          margin-bottom: 0px; } }\n      @media screen and (max-width: 450px) {\n        .section-events .section-main-event .section-event-left {\n          min-height: 390px;\n          justify-content: baseline;\n          margin-bottom: 0px; } }\n      .section-events .section-main-event .section-event-left p:first-of-type {\n        padding-bottom: 15px; }\n      .section-events .section-main-event .section-event-left p {\n        padding-bottom: 20px; }\n      .section-events .section-main-event .section-event-left .event-location {\n        font-size: 18px;\n        color: #444;\n        font-weight: 700; }\n      .section-events .section-main-event .section-event-left .event-date {\n        font-weight: 700;\n        transition: all 0.2s ease; }\n        @media screen and (max-width: 490px) {\n          .section-events .section-main-event .section-event-left .event-date {\n            font-size: 16px; } }\n      @media screen and (max-width: 1175px) {\n        .section-events .section-main-event .section-event-left .event-description {\n          font-size: 15px; } }\n      @media screen and (max-width: 420px) {\n        .section-events .section-main-event .section-event-left .event-description {\n          font-size: 14px; } }\n    .section-events .section-main-event .section-event-right {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end;\n      align-items: center;\n      height: 100%; }\n      @media screen and (max-width: 950px) {\n        .section-events .section-main-event .section-event-right {\n          width: 100%;\n          justify-content: center; } }\n      .section-events .section-main-event .section-event-right img {\n        max-width: 480px;\n        transition: all 0.2s ease; }\n        @media screen and (max-width: 1375px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 450px; } }\n        @media screen and (max-width: 1275px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 400px; } }\n        @media screen and (max-width: 1175px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 380px; } }\n        @media screen and (max-width: 1155px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 350px; } }\n        @media screen and (max-width: 1135px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 330px; } }\n        @media screen and (max-width: 1115px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 315px; } }\n        @media screen and (max-width: 950px) {\n          .section-events .section-main-event .section-event-right img {\n            padding: 1% 0 2% 0;\n            max-width: 400px;\n            margin-bottom: 20px; } }\n        @media screen and (max-width: 490px) {\n          .section-events .section-main-event .section-event-right img {\n            max-width: 100%; } }\n  .section-events .section-other-events {\n    margin-top: 70px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    flex: 1;\n    color: #333; }\n    @media screen and (max-width: 950px) {\n      .section-events .section-other-events {\n        align-items: inherit;\n        flex-direction: column;\n        margin-top: 40px; } }\n    .section-events .section-other-events p {\n      font-size: 15px;\n      margin-top: 5px; }\n      @media screen and (max-width: 1000px) {\n        .section-events .section-other-events p {\n          font-size: 14px; } }\n      .section-events .section-other-events p:first-of-type {\n        margin-top: 5px; }\n    .section-events .section-other-events .event {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      height: 340px;\n      padding-right: 60px; }\n      @media screen and (max-width: 950px) {\n        .section-events .section-other-events .event {\n          height: 100%;\n          min-height: 300px; } }\n      @media screen and (max-width: 580px) {\n        .section-events .section-other-events .event {\n          padding-right: 0px; } }\n      .section-events .section-other-events .event:last-of-type {\n        padding-right: 0px; }\n        @media screen and (max-width: 950px) {\n          .section-events .section-other-events .event:last-of-type {\n            height: 100%;\n            min-height: inherit; } }\n      .section-events .section-other-events .event .event-date {\n        font-weight: 700; }\n        @media screen and (max-width: 1000px) {\n          .section-events .section-other-events .event .event-date {\n            font-size: 14px; } }\n      .section-events .section-other-events .event button {\n        margin-top: 25px; }\n\n.section-friends {\n  background-color: #fff;\n  padding: 6% 0;\n  -webkit-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  -moz-box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02);\n  box-shadow: inset 0 8px 4px -4.5px rgba(0, 0, 0, 0.02); }\n  @media screen and (max-width: 730px) {\n    .section-friends {\n      padding-top: 10%; } }\n  .section-friends .section-friends-content-wrapper {\n    flex-direction: column; }\n  .section-friends .friends-title-wrapper h1 {\n    margin-bottom: 5px; }\n  .section-friends .friends-title-wrapper p {\n    font-size: 16px; }\n  .section-friends .friends {\n    padding-top: 8%; }\n    .section-friends .friends .friends-row:last-of-type {\n      margin-bottom: 100px; }\n    .section-friends .friends .friends-row {\n      height: 30px;\n      display: flex;\n      flex: 1;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 100px; }\n      @media screen and (max-width: 730px) {\n        .section-friends .friends .friends-row {\n          margin-bottom: 70px; } }\n      @media screen and (max-width: 600px) {\n        .section-friends .friends .friends-row {\n          margin-bottom: 45px; } }\n      .section-friends .friends .friends-row .friend {\n        flex: 1; }\n        .section-friends .friends .friends-row .friend img {\n          flex: 1;\n          display: flex !important;\n          max-width: 180px;\n          max-height: 130px;\n          height: auto;\n          margin: 0 auto; }\n          @media screen and (max-width: 1100px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 150px;\n              max-height: 100px; } }\n          @media screen and (max-width: 900px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 130px;\n              max-height: 80px; } }\n          @media screen and (max-width: 730px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 115px;\n              max-height: 65px; } }\n          @media screen and (max-width: 630px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 105px; } }\n          @media screen and (max-width: 620px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 100px; } }\n          @media screen and (max-width: 600px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 90px; } }\n          @media screen and (max-width: 490px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 70px; } }\n          @media screen and (max-width: 390px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 60px;\n              max-height: 55px; } }\n          @media screen and (max-width: 390px) {\n            .section-friends .friends .friends-row .friend img {\n              max-width: 50px;\n              max-height: 45px; } }\n        .section-friends .friends .friends-row .friend .uxpa-logo {\n          max-width: 150px; }\n\n.footer {\n  background-color: #22292C;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  -moz-box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  box-shadow: inset 0 8px 4px -2px rgba(0, 0, 0, 0.4);\n  min-height: 350px; }\n  @media screen and (max-width: 620px) {\n    .footer {\n      height: 30vh; } }\n  .footer .footer-content-wrapper {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    .footer .footer-content-wrapper .footer-left {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      @media screen and (max-width: 950px) {\n        .footer .footer-content-wrapper .footer-left {\n          display: none; } }\n      .footer .footer-content-wrapper .footer-left .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-middle {\n      display: flex;\n      flex-direction: column;\n      flex: 2; }\n      @media screen and (max-width: 950px) {\n        .footer .footer-content-wrapper .footer-middle {\n          display: none; } }\n      .footer .footer-content-wrapper .footer-middle .content-wrapper {\n        padding: 4% 0%; }\n    .footer .footer-content-wrapper .footer-right {\n      display: flex;\n      flex-direction: column;\n      flex: 3; }\n      .footer .footer-content-wrapper .footer-right .content-wrapper {\n        padding: 4% 0%;\n        justify-content: center;\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        padding-right: 5px;\n        padding-bottom: 70px; }\n        @media screen and (max-width: 950px) {\n          .footer .footer-content-wrapper .footer-right .content-wrapper {\n            padding-bottom: 0px; } }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper {\n          top: 5px;\n          position: relative;\n          height: 1px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .error {\n            color: #ff003d; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .success {\n            color: #48C4E5; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .responses-wrapper .response {\n            font-size: 12px;\n            display: block;\n            padding-top: 5px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .header-container {\n          padding-bottom: 10px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container h3 {\n            color: #fff; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .header-container p {\n            color: #fff;\n            font-size: 14px; }\n        .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container {\n          display: flex;\n          border: 1px solid #fff;\n          border-radius: 2px;\n          position: relative;\n          height: 48px; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container:after {\n            content: '';\n            position: absolute;\n            left: 0;\n            bottom: 5px;\n            display: block;\n            width: 100%;\n            height: 1px;\n            background: #fff; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input {\n            display: block;\n            background-color: #22292C;\n            width: 100%;\n            height: 40px;\n            border: none;\n            padding-left: 20px;\n            padding-right: 20px;\n            font-size: 12px;\n            font-family: 'Montserrat', sans-serif;\n            color: #fff; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input::placeholder {\n              transition: all 0.3s;\n              color: #ddd; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container input:focus::placeholder {\n              color: #666; }\n          .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button {\n            border-bottom: 1px solid #fff;\n            font-weight: normal;\n            border-left: 1px solid #fff;\n            font-size: 14px;\n            height: 43px;\n            transition: all 0.5s; }\n            .footer .footer-content-wrapper .footer-right .content-wrapper .footer-email-signup-form-container form .input-container button:hover {\n              background-color: #fff;\n              color: #222;\n              font-weight: 700; }\n\n.gutter {\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #181d1f;\n  -webkit-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 8px 4px -4px rgba(0, 0, 0, 0.05);\n  padding: 0 10%; }\n  @media screen and (max-width: 950px) {\n    .gutter {\n      height: 25vh; } }\n  @media screen and (max-width: 620px) {\n    .gutter {\n      flex-flow: column-reverse; } }\n  .gutter .gutter-left {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    @media screen and (max-width: 620px) {\n      .gutter .gutter-left {\n        align-items: flex-start; } }\n    .gutter .gutter-left .header {\n      display: flex;\n      justify-content: flex-start;\n      flex: 1; }\n      .gutter .gutter-left .header p {\n        font-weight: 700;\n        font-size: 12px;\n        color: #fff; }\n        @media screen and (max-width: 550px) {\n          .gutter .gutter-left .header p {\n            font-size: 11px; } }\n        @media screen and (max-width: 510px) {\n          .gutter .gutter-left .header p {\n            font-size: 10px; } }\n        @media screen and (max-width: 480px) {\n          .gutter .gutter-left .header p {\n            font-size: 9px; } }\n      .gutter .gutter-left .header .fa-heart {\n        color: #f21d5b; }\n  .gutter .gutter-right {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    height: 100%; }\n    @media screen and (max-width: 620px) {\n      .gutter .gutter-right {\n        align-items: flex-end;\n        margin-top: 30px; } }\n    .gutter .gutter-right .links {\n      display: flex;\n      justify-content: flex-end;\n      flex: 1; }\n      @media screen and (max-width: 620px) {\n        .gutter .gutter-right .links {\n          margin-bottom: 30px; } }\n      .gutter .gutter-right .links .email {\n        text-decoration: none;\n        padding-top: 1px; }\n        .gutter .gutter-right .links .email p {\n          font-size: 12px;\n          font-weight: 700;\n          color: #fff;\n          opacity: 1;\n          transition: all 0.2s; }\n          .gutter .gutter-right .links .email p:hover {\n            opacity: 0.5; }\n      .gutter .gutter-right .links .fa {\n        color: #fff;\n        font-size: 30px;\n        transition: all 0.2s ease-in-out; }\n      .gutter .gutter-right .links .fa:hover {\n        cursor: pointer; }\n      .gutter .gutter-right .links .fa-facebook-official:hover {\n        color: #3C599F; }\n      .gutter .gutter-right .links .fa-twitter:hover {\n        color: #1ea1f3; }\n      .gutter .gutter-right .links .instagram-logo-container {\n        position: relative; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type {\n          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          opacity: 0;\n          transition: all 0.2s;\n          position: absolute;\n          z-index: 9999; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:first-of-type:hover {\n          opacity: 1; }\n        .gutter .gutter-right .links .instagram-logo-container .fa-instagram:last-of-type {\n          transition: all 0.2s;\n          color: #fff;\n          opacity: 1;\n          position: absolute; }\n      .gutter .gutter-right .links a {\n        margin-right: 30px; }\n\n.modal-shade {\n  display: none;\n  opacity: 0;\n  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0, rgba(0, 0, 0, 0.8) 100%);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  will-change: opacity; }\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: none;\n  justify-content: center;\n  align-items: center; }\n  .modal-container .modal {\n    opacity: 0;\n    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);\n    background: white;\n    border-radius: 5px;\n    padding: 30px 45px;\n    width: 35%;\n    height: 45%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media screen and (max-width: 950px) {\n      .modal-container .modal {\n        width: 60%; } }\n    @media screen and (max-width: 830px) {\n      .modal-container .modal {\n        width: 70%; } }\n    .modal-container .modal .footer-email-signup-form-container form .input-container {\n      display: flex;\n      border: 1px solid #222;\n      border-radius: 2px;\n      position: relative;\n      height: 48px; }\n      .modal-container .modal .footer-email-signup-form-container form .input-container:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 5px;\n        display: block;\n        width: 100%;\n        height: 1px;\n        background: #222; }\n      .modal-container .modal .footer-email-signup-form-container form .input-container input {\n        display: block;\n        width: 100%;\n        height: 40px;\n        border: none;\n        padding-left: 20px;\n        padding-right: 20px;\n        font-size: 12px;\n        font-family: 'Montserrat', sans-serif;\n        color: #222; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container input::placeholder {\n          transition: all 0.3s;\n          color: #555; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container input:focus::placeholder {\n          color: #666; }\n      .modal-container .modal .footer-email-signup-form-container form .input-container button {\n        border-bottom: 1px solid #222;\n        font-weight: normal;\n        border-left: 1px solid #222;\n        font-size: 14px;\n        height: 43px;\n        transition: all 0.5s;\n        color: #222; }\n        .modal-container .modal .footer-email-signup-form-container form .input-container button:hover {\n          background-color: #222;\n          color: #fff;\n          font-weight: 700; }\n    .modal-container .modal .modal-cancel {\n      position: absolute;\n      transform: translateY(0px) translateZ(0px);\n      right: left;\n      left: 93%;\n      top: 3.5%;\n      color: #ff003d;\n      font-size: 30px;\n      cursor: pointer;\n      color: #555;\n      transition: all 0.2s;\n      width: 25px; }\n      .modal-container .modal .modal-cancel:hover {\n        color: #222; }\n      @media screen and (max-width: 420px) {\n        .modal-container .modal .modal-cancel {\n          left: 89%; } }\n    .modal-container .modal .links .email {\n      text-decoration: none;\n      padding-top: 1px; }\n      .modal-container .modal .links .email p {\n        font-size: 12px;\n        font-weight: 700;\n        color: #fff;\n        opacity: 1;\n        transition: all 0.2s; }\n        .modal-container .modal .links .email p:hover {\n          opacity: 0.5; }\n    .modal-container .modal .links .fa {\n      color: #222;\n      font-size: 30px;\n      transition: all 0.1s ease-in-out;\n      opacity: .93; }\n      .modal-container .modal .links .fa:hover {\n        opacity: 1;\n        cursor: pointer; }\n    .modal-container .modal .links .fa-facebook-official {\n      color: #3C599F; }\n    .modal-container .modal .links .fa-twitter {\n      color: #1ea1f3; }\n    .modal-container .modal .links .fa-instagram {\n      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      transition: all 0.2s; }\n    .modal-container .modal .links .fa-envelope-o {\n      font-size: 27px;\n      position: relative;\n      bottom: 2px;\n      color: #25336E; }\n    .modal-container .modal .links a {\n      margin-right: 20px;\n      text-decoration: none; }\n  .modal-container .modal-header {\n    align-self: flex-start; }\n  .modal-container .modal-middle p {\n    margin-bottom: 30px; }\n  .modal-container .modal-footer {\n    align-self: flex-end; }\n\n.mobile-nav-shade {\n  z-index: -1;\n  transition: all 0.3s ease;\n  opacity: 0;\n  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0.86) 100%);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  will-change: opacity; }\n  .mobile-nav-shade.is-active {\n    opacity: 1;\n    z-index: 1; }\n\n.mobile-menu-trigger {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #1E429A 0%, #48C4E5 100%);\n  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.3);\n  position: fixed;\n  z-index: 13;\n  bottom: 15px;\n  right: 15px; }\n  @media screen and (max-width: 950px) {\n    .mobile-menu-trigger {\n      display: flex; } }\n  .mobile-menu-trigger.is-active span {\n    background: #1A1F21; }\n  .mobile-menu-trigger span {\n    width: 25px;\n    height: 2px;\n    display: block;\n    background: white; }\n  .mobile-menu-trigger span + span {\n    margin-top: 4px; }\n\n.mobile-navigation {\n  transform: scale(0);\n  position: fixed;\n  bottom: 82px;\n  right: 7%;\n  z-index: 9999; }\n  .mobile-navigation.is-active {\n    transform: scale(1); }\n    .mobile-navigation.is-active li {\n      opacity: 1;\n      transform: translate3d(0, 0, 0); }\n  .mobile-navigation li {\n    opacity: 0;\n    display: inline-block;\n    text-align: left;\n    transition: all 0.3s ease;\n    transform: translate3d(4px, 0px, 0);\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n    text-transform: uppercase;\n    font-size: 16px;\n    padding: 20px;\n    font-weight: 700;\n    cursor: pointer; }\n    .mobile-navigation li li:first-child {\n      transition-delay: 0.08s; }\n    .mobile-navigation li li:nth-child(2) {\n      transition-delay: 0.07s; }\n    .mobile-navigation li li:nth-child(3) {\n      transition-delay: 0.05s; }\n    .mobile-navigation li li:nth-child(4) {\n      transition-delay: 0.01s; }\n    .mobile-navigation li:after {\n      display: block;\n      content: '';\n      position: relative;\n      top: 4px;\n      height: 2px;\n      background: #fff;\n      transform: scaleX(0.0001);\n      transition: transform 240ms ease-in-out;\n      box-shadow: inset -40px 0px 30px -25px, rgba(72, 196, 229, 0.2); }\n    .mobile-navigation li:hover:after {\n      transform: scaleX(1); }\n\n*:focus {\n  outline: none; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\n* {\n  -webkit-tap-highlight-color: transparent; }\n\na, article, div, h1, h2, h3, h4, h5, h6, img, section, span {\n  -moz-user-select: none;\n  -webkit-user-select: none; }\n\ninput, select, textarea {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\nbody {\n  margin: 0;\n  background-color: #f1f1f1;\n  padding-top: 80px;\n  font-family: 'Montserrat', sans-serif;\n  color: #222;\n  -webkit-font-smoothing: antialiased; }\n\nh1 {\n  font-size: 250%; }\n  @media screen and (max-width: 1175px) {\n    h1 {\n      font-size: 230%; } }\n  @media screen and (max-width: 850px) {\n    h1 {\n      font-size: 200%; } }\n\nh2 {\n  font-size: 160%; }\n  @media screen and (max-width: 850px) {\n    h2 {\n      font-size: 145%; } }\n\np {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 28px; }\n  @media screen and (max-width: 950px) {\n    p {\n      line-height: 26px; } }\n  @media screen and (max-width: 550px) {\n    p {\n      font-size: 15px;\n      line-height: 24px; } }\n\nu {\n  color: #25336E; }\n\nbutton {\n  font-weight: bold;\n  height: 42px;\n  width: 140px;\n  border-radius: 1px;\n  background: none;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  color: #fff;\n  font: inherit;\n  line-height: normal;\n  padding: 0;\n  -webkit-appearance: button;\n  /* for input */\n  -webkit-user-select: none;\n  /* for button */\n  -moz-user-select: none;\n  -ms-user-select: none; }\n\nol, ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.section-placeholder {\n  background-color: #fcfcfc;\n  height: 40vh;\n  padding-top: 6%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex: 1;\n  flex: 1;\n  box-shadow: inset 0 8px 4px -6px rgba(0, 0, 0, 0.02); }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(13);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);