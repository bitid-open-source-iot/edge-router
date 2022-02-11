(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-live-logs-live-logs-module~pages-mapping-mapping-module"],{

/***/ "AbOq":
/*!*********************************************!*\
  !*** ./src/app/pipes/filter/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "boci");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(array, params, revert) {
        const filters = Object.keys(params).filter(key => (typeof (params[key]) != 'undefined' && params[key] != null));
        if (filters.length > 0) {
            return array.filter(item => {
                let found = [];
                filters.map(key => {
                    if (object_path__WEBPACK_IMPORTED_MODULE_0__["has"](item, key)) {
                        if (typeof (object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key)) == 'string') {
                            if (typeof (params[key]) == 'string') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).trim().toLowerCase().indexOf(params[key].trim().toLowerCase()) > -1));
                            }
                            else if (Array.isArray(params[key])) {
                                found.push((params[key].filter((o) => object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).trim().toLowerCase().indexOf(o) > -1).length > 0));
                            }
                            else if (typeof (params[key]) == 'number') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).trim().toLowerCase().indexOf(params[key]) > -1));
                            }
                        }
                        else if (Array.isArray(object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key))) {
                            if (typeof (params[key]) == 'string') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).includes(params[key].trim().toLowerCase()) > -1));
                            }
                            else if (Array.isArray(params[key])) {
                                found.push((params[key].filter((o) => object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).includes(o)).length > 0));
                            }
                            else if (typeof (params[key]) == 'number') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).includes(params[key]) > -1));
                            }
                        }
                        else if (typeof (object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key)) == 'number') {
                            if (typeof (params[key]) == 'string') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).toString().trim().toLowerCase().indexOf(params[key].trim().toLowerCase()) > -1));
                            }
                            else if (Array.isArray(params[key])) {
                                found.push((params[key].includes(object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key)).length > -1));
                            }
                            else if (typeof (params[key]) == 'number') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key) == params[key]));
                            }
                        }
                        else if (typeof (object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key)) == 'boolean') {
                            if (typeof (params[key]) == 'boolean') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key) == params[key]));
                            }
                            else if (Array.isArray(params[key])) {
                                found.push((params[key].filter((o) => object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).indexOf(o) > -1).length > 0));
                            }
                            else if (typeof (params[key]) == 'number') {
                                found.push((object_path__WEBPACK_IMPORTED_MODULE_0__["get"](item, key).indexOf(new Boolean(params[key])) > -1));
                            }
                        }
                    }
                });
                return !found.includes(false);
            });
        }
        else {
            if (Array.isArray(revert)) {
                return revert;
            }
            else {
                return array;
            }
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "filterBy", type: FilterPipe, pure: false });


/***/ }),

/***/ "J89Z":
/*!*********************************************!*\
  !*** ./src/app/pipes/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipeModule", function() { return OrderPipeModule; });
/* harmony import */ var _order_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.pipe */ "roMP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class OrderPipeModule {
}
OrderPipeModule.ɵfac = function OrderPipeModule_Factory(t) { return new (t || OrderPipeModule)(); };
OrderPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderPipeModule });
OrderPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderPipeModule, { declarations: [_order_pipe__WEBPACK_IMPORTED_MODULE_0__["OrderPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_order_pipe__WEBPACK_IMPORTED_MODULE_0__["OrderPipe"]] }); })();


/***/ }),

/***/ "boci":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory()
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this, function () {
  'use strict'

  var toStr = Object.prototype.toString

  function hasOwnProperty (obj, prop) {
    if (obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty (value) {
    if (!value) {
      return true
    }
    if (isArray(value) && value.length === 0) {
      return true
    } else if (typeof value !== 'string') {
      for (var i in value) {
        if (hasOwnProperty(value, i)) {
          return false
        }
      }
      return true
    }
    return false
  }

  function toString (type) {
    return toStr.call(type)
  }

  function isObject (obj) {
    return typeof obj === 'object' && toString(obj) === '[object Object]'
  }

  var isArray = Array.isArray || function (obj) {
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]'
  }

  function isBoolean (obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]'
  }

  function getKey (key) {
    var intKey = parseInt(key)
    if (intKey.toString() === key) {
      return intKey
    }
    return key
  }

  function factory (options) {
    options = options || {}

    var objectPath = function (obj) {
      return Object.keys(objectPath).reduce(function (proxy, prop) {
        if (prop === 'create') {
          return proxy
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj)
        }

        return proxy
      }, {})
    }

    var hasShallowProperty
    if (options.includeInheritedProps) {
      hasShallowProperty = function () {
        return true
      }
    } else {
      hasShallowProperty = function (obj, prop) {
        return (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)
      }
    }

    function getShallowProperty (obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop]
      }
    }

    var getShallowPropertySafely
    if (options.includeInheritedProps) {
      getShallowPropertySafely = function (obj, currentPath) {
        if (typeof currentPath !== 'string' && typeof currentPath !== 'number') {
          currentPath = String(currentPath)
        }
        var currentValue = getShallowProperty(obj, currentPath)
        if (currentPath === '__proto__' || currentPath === 'prototype' ||
          (currentPath === 'constructor' && typeof currentValue === 'function')) {
          throw new Error('For security reasons, object\'s magic properties cannot be set')
        }
        return currentValue
      }
    } else {
      getShallowPropertySafely = function (obj, currentPath) {
        return getShallowProperty(obj, currentPath)
      }
    }

    function set (obj, path, value, doNotReplace) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace)
      }
      var currentPath = path[0]
      var currentValue = getShallowPropertySafely(obj, currentPath)
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value
        }
        return currentValue
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if (typeof path[1] === 'number') {
          obj[currentPath] = []
        } else {
          obj[currentPath] = {}
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace)
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      } else if (typeof path === 'string') {
        path = path.split('.')
      }

      if (!path || path.length === 0) {
        return !!obj
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i])

        if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j]
        } else {
          return false
        }
      }

      return true
    }

    objectPath.ensureExists = function (obj, path, value) {
      return set(obj, path, value, true)
    }

    objectPath.set = function (obj, path, value, doNotReplace) {
      return set(obj, path, value, doNotReplace)
    }

    objectPath.insert = function (obj, path, value, at) {
      var arr = objectPath.get(obj, path)
      at = ~~at
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }
      arr.splice(at, 0, value)
    }

    objectPath.empty = function (obj, path) {
      if (isEmpty(path)) {
        return void 0
      }
      if (obj == null) {
        return void 0
      }

      var value, i
      if (!(value = objectPath.get(obj, path))) {
        return void 0
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '')
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false)
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0)
      } else if (isArray(value)) {
        value.length = 0
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i]
          }
        }
      } else {
        return objectPath.set(obj, path, null)
      }
    }

    objectPath.push = function (obj, path /*, values */) {
      var arr = objectPath.get(obj, path)
      if (!isArray(arr)) {
        arr = []
        objectPath.set(obj, path, arr)
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2))
    }

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value
        }
      }

      return defaultValue
    }

    objectPath.get = function (obj, path, defaultValue) {
      if (typeof path === 'number') {
        path = [path]
      }
      if (!path || path.length === 0) {
        return obj
      }
      if (obj == null) {
        return defaultValue
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue)
      }

      var currentPath = getKey(path[0])
      var nextObj = getShallowPropertySafely(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue
      }

      if (path.length === 1) {
        return nextObj
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue)
    }

    objectPath.del = function del (obj, path) {
      if (typeof path === 'number') {
        path = [path]
      }

      if (obj == null) {
        return obj
      }

      if (isEmpty(path)) {
        return obj
      }
      if (typeof path === 'string') {
        return objectPath.del(obj, path.split('.'))
      }

      var currentPath = getKey(path[0])
      getShallowPropertySafely(obj, currentPath)
      if (!hasShallowProperty(obj, currentPath)) {
        return obj
      }

      if (path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1)
        } else {
          delete obj[currentPath]
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1))
      }

      return obj
    }

    return objectPath
  }

  var mod = factory()
  mod.create = factory
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod
})


/***/ }),

/***/ "p/0r":
/*!***********************************************!*\
  !*** ./src/app/pipes/filter/filter.module.ts ***!
  \***********************************************/
/*! exports provided: FilterPipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.pipe */ "AbOq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FilterPipeModule {
}
FilterPipeModule.ɵfac = function FilterPipeModule_Factory(t) { return new (t || FilterPipeModule)(); };
FilterPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FilterPipeModule });
FilterPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FilterPipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]] }); })();


/***/ }),

/***/ "roMP":
/*!*******************************************!*\
  !*** ./src/app/pipes/order/order.pipe.ts ***!
  \*******************************************/
/*! exports provided: OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderPipe {
    transform(array, key, reverse) {
        if (!reverse) {
            return array.sort((a, b) => {
                if (a[key] < b[key]) {
                    return -1;
                }
                else if (a[key] > b[key]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else {
            return array.sort((a, b) => {
                if (a[key] < b[key]) {
                    return 1;
                }
                else if (a[key] > b[key]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
    }
}
OrderPipe.ɵfac = function OrderPipe_Factory(t) { return new (t || OrderPipe)(); };
OrderPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderPipe, pure: false });


/***/ })

}]);
//# sourceMappingURL=default~pages-live-logs-live-logs-module~pages-mapping-mapping-module.js.map