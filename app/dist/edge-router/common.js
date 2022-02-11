(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Gi+I":
/*!*****************************************!*\
  !*** ./src/app/classes/input-output.ts ***!
  \*****************************************/
/*! exports provided: InputOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutput", function() { return InputOutput; });
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id */ "aS/e");

class InputOutput {
    constructor(args) {
        this.bit = 0;
        this.key = '';
        this.tagId = '';
        this.value = 0;
        this.inputId = Object(_id__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])();
        this.register = 0;
        this.moduleId = 0;
        this.readable = false;
        this.interface = '';
        this.writeable = false;
        this.description = '';
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.bit) != 'undefined' && args.bit != null) {
                this.bit = args.bit;
            }
            ;
            if (typeof (args.key) != 'undefined' && args.key != null) {
                this.key = args.key;
            }
            ;
            if (typeof (args.tagId) != 'undefined' && args.tagId != null) {
                this.tagId = args.tagId;
            }
            ;
            if (typeof (args.value) != 'undefined' && args.value != null) {
                this.value = args.value;
            }
            ;
            if (typeof (args.inputId) != 'undefined' && args.inputId != null) {
                this.inputId = args.inputId;
            }
            ;
            if (typeof (args.register) != 'undefined' && args.register != null) {
                this.register = args.register;
            }
            ;
            if (typeof (args.moduleId) != 'undefined' && args.moduleId != null) {
                this.moduleId = args.moduleId;
            }
            ;
            if (typeof (args.readable) != 'undefined' && args.readable != null) {
                this.readable = args.readable;
            }
            ;
            if (typeof (args.interface) != 'undefined' && args.interface != null) {
                this.interface = args.interface;
            }
            ;
            if (typeof (args.writeable) != 'undefined' && args.writeable != null) {
                this.writeable = args.writeable;
            }
            ;
            if (typeof (args.description) != 'undefined' && args.description != null) {
                this.description = args.description;
            }
            ;
        }
    }
}


/***/ }),

/***/ "QKk4":
/*!***********************************!*\
  !*** ./src/app/classes/device.ts ***!
  \***********************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id */ "aS/e");
/* harmony import */ var _input_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-output */ "Gi+I");


class Device {
    constructor(args) {
        this.io = [];
        this.ip = '';
        this.port = 0;
        this.type = '';
        this.txtime = 5;
        this.pxtime = 5;
        this.barcode = '';
        this.publish = false;
        this.timeout = 60;
        this.enabled = false;
        this.deviceId = Object(_id__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])();
        this.isConnected = false;
        this.description = '';
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.io) != 'undefined' && args.io != null) {
                this.io = args.io.map(o => new _input_output__WEBPACK_IMPORTED_MODULE_1__["InputOutput"](o));
            }
            if (typeof (args.ip) != 'undefined' && args.ip != null) {
                this.ip = args.ip;
            }
            if (typeof (args.port) != 'undefined' && args.port != null) {
                this.port = args.port;
            }
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            if (typeof (args.txtime) != 'undefined' && args.txtime != null) {
                this.txtime = args.txtime;
            }
            if (typeof (args.pxtime) != 'undefined' && args.pxtime != null) {
                this.pxtime = args.pxtime;
            }
            if (typeof (args.barcode) != 'undefined' && args.barcode != null) {
                this.barcode = args.barcode;
            }
            if (typeof (args.publish) != 'undefined' && args.publish != null) {
                this.publish = args.publish;
            }
            if (typeof (args.timeout) != 'undefined' && args.timeout != null) {
                this.timeout = args.timeout;
            }
            if (typeof (args.enabled) != 'undefined' && args.enabled != null) {
                this.enabled = args.enabled;
            }
            if (typeof (args.deviceId) != 'undefined' && args.deviceId != null) {
                this.deviceId = args.deviceId;
            }
            if (typeof (args.isConnected) != 'undefined' && args.isConnected != null) {
                this.isConnected = args.isConnected;
            }
            if (typeof (args.description) != 'undefined' && args.description != null) {
                this.description = args.description;
            }
            if (typeof (args.lastConnection) != 'undefined' && args.lastConnection != null) {
                this.lastConnection = new Date(args.lastConnection);
            }
        }
    }
}


/***/ }),

/***/ "aS/e":
/*!*******************************!*\
  !*** ./src/app/classes/id.ts ***!
  \*******************************/
/*! exports provided: ObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectId", function() { return ObjectId; });
function ObjectId() {
    return (new Date().getTime() / 1000 | 0).toString(16) + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16)).toLowerCase();
}


/***/ }),

/***/ "rNNM":
/*!***********************************!*\
  !*** ./src/app/classes/socket.ts ***!
  \***********************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class Socket {
    constructor(url, route) {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.url = url;
        this.route = route;
        this.status.next('connecting');
        this.socket = new WebSocket([this.url, '?route=', this.route].join(''));
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }
    reconnect() {
        delete this.socket;
        this.status.next('connecting');
        this.socket = new WebSocket([this.url, '?route=', this.route].join(''));
        this.socket.onopen = (event) => this.status.next('connected');
        this.socket.onclose = (event) => this.status.next('disconnected');
        this.socket.onerror = (event) => this.status.next('error');
        this.socket.onmessage = (event) => this.data.next(JSON.parse(event.data));
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map