(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/connor/Documents/edge-router/app/src/main.ts */"zUnb");


/***/ }),

/***/ "9ZKQ":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class ToastService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    error(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.snackbar.open(message, '', {
                duration: duration || 3000
            });
        });
    }
    success(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.snackbar.open(message, '', {
                duration: duration || 3000
            });
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManager", function() { return AuthManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session-storage/session-storage.service */ "CfMw");



class AuthManager {
    constructor(router, sessionstorage) {
        this.router = router;
        this.sessionstorage = sessionstorage;
    }
    canActivate() {
        let email = this.sessionstorage.get('email');
        let valid = true;
        let password = this.sessionstorage.get('password');
        if (typeof (email) == 'undefined' || email == null) {
            valid = false;
        }
        ;
        if (typeof (password) == 'undefined' || password == null) {
            valid = false;
        }
        ;
        if (!valid) {
            this.router.navigate(['/sign-in'], {
                replaceUrl: true
            });
            this.sessionstorage.clear();
        }
        ;
        return valid;
    }
}
AuthManager.ɵfac = function AuthManager_Factory(t) { return new (t || AuthManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"])); };
AuthManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthManager, factory: AuthManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    'socket': 'ws://127.0.0.1:8080',
    'server': 'http://127.0.0.1:8080',
    'version': __webpack_require__(/*! ../../package.json */ "kiQV").version,
    'production': false
};


/***/ }),

/***/ "CfMw":
/*!*********************************************************************!*\
  !*** ./src/app/services/session-storage/session-storage.service.ts ***!
  \*********************************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SessionStorageService {
    constructor() { }
    clear() {
        window.sessionStorage.clear();
    }
    remove(key) {
        window.sessionStorage.removeItem(key);
    }
    set(key, value) {
        window.sessionStorage.setItem(key, value);
    }
    get(key, value) {
        const result = window.sessionStorage.getItem(key);
        if (typeof (result) != 'undefined' && result !== null) {
            return result;
        }
        else {
            return value;
        }
    }
    setObject(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value || {}));
    }
    getObject(key, value) {
        if (!value) {
            value = {};
        }
        const kayvalue = window.sessionStorage.getItem(key);
        if (typeof (kayvalue) == 'undefined' || kayvalue == null) {
            return value;
        }
        else {
            return JSON.parse(kayvalue);
        }
    }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Cybb":
/*!*****************************************************!*\
  !*** ./src/app/services/mapping/mapping.service.ts ***!
  \*****************************************************/
/*! exports provided: MappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingService", function() { return MappingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");




class MappingService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    add(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/mapping/add', params);
        });
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/mapping/get', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/mapping/list', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/mapping/update', params);
        });
    }
    delete(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/mapping/delete', params);
        });
    }
}
MappingService.ɵfac = function MappingService_Factory(t) { return new (t || MappingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
MappingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MappingService, factory: MappingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "L7HW":
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");




class ConfigService {
    constructor(api) {
        this.api = api;
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/config/get', params);
        });
    }
    import(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/config/import', params);
        });
    }
    export(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/config/export', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/config/update', params);
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/menu/menu.service */ "d3yR");
/* harmony import */ var _services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/session-storage/session-storage.service */ "CfMw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













class AppComponent {
    constructor(menu, storage, sanitizer, iconRegistry) {
        this.menu = menu;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.iconRegistry = iconRegistry;
        this.title = [];
        this.badges = {};
        this.iconRegistry.addSvgIcon('add', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/add.svg'));
        this.iconRegistry.addSvgIcon('wifi', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/wifi.svg'));
        this.iconRegistry.addSvgIcon('menu', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/menu.svg'));
        this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/edit.svg'));
        this.iconRegistry.addSvgIcon('close', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/close.svg'));
        this.iconRegistry.addSvgIcon('route', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/route.svg'));
        this.iconRegistry.addSvgIcon('email', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/email.svg'));
        this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/delete.svg'));
        this.iconRegistry.addSvgIcon('logout', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/logout.svg'));
        this.iconRegistry.addSvgIcon('router', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/router.svg'));
        this.iconRegistry.addSvgIcon('storage', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/storage.svg'));
        this.iconRegistry.addSvgIcon('password', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/password.svg'));
        this.iconRegistry.addSvgIcon('visibility', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/visibility.svg'));
        this.iconRegistry.addSvgIcon('arrow_back', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/arrow_back.svg'));
        this.iconRegistry.addSvgIcon('file_upload', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/file_upload.svg'));
        this.iconRegistry.addSvgIcon('double_arrow', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/double_arrow.svg'));
        this.iconRegistry.addSvgIcon('content_copy', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/content_copy.svg'));
        this.iconRegistry.addSvgIcon('file_download', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/file_download.svg'));
        this.iconRegistry.addSvgIcon('import_export', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/import_export.svg'));
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menu.close();
            this.storage.clear();
        });
    }
    ngOnInit() {
        this.menu.events.subscribe(event => {
            var _a, _b, _c;
            switch (event) {
                case ('open'):
                    (_a = this.drawer) === null || _a === void 0 ? void 0 : _a.open();
                    break;
                case ('close'):
                    (_b = this.drawer) === null || _b === void 0 ? void 0 : _b.close();
                    break;
                case ('toggle'):
                    (_c = this.drawer) === null || _c === void 0 ? void 0 : _c.toggle();
                    break;
            }
        });
        this.menu.badge.subscribe((data) => {
            Object.keys(data).map(key => {
                this.badges[key] = data[key];
            });
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 37, vars: 0, consts: [["mode", "side"], ["src", "./assets/icons/icon-512x512.png", "alt", "logo", "width", "40", "height", "40", "draggable", "false"], [1, "spacer"], ["type", "button", "lines", "full", "routerLink", "/devices", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "router"], ["type", "button", "lines", "full", "routerLink", "/mapping", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "route"], ["type", "button", "lines", "full", "routerLink", "/live-logs", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "storage"], ["type", "button", "lines", "full", "routerLink", "/change-email", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "email"], ["type", "button", "lines", "full", "routerLink", "/change-password", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "password"], ["type", "button", "lines", "full", "routerLink", "/import-export", "routerLinkActive", "active", "matRipple", "", 3, "click"], ["svgIcon", "import_export"], ["type", "button", "matRipple", "", 3, "click"], ["svgIcon", "logout"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Edge Router ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_7_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_11_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Mapping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_15_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Live Logs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_19_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Change Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_23_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_27_listener() { return ctx.menu.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Import & Export Config ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_31_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #fff;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 300px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item.active[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFBWTtFQUNJLGNBQUE7QUFFaEI7QUFEZ0I7RUFDSSxjQUFBO0FBR3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWF0LWRyYXdlciB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgbWF0LWxpc3Qge1xuICAgICAgICAgICAgbWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiMyMTk2RjM7XG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojMjE5NkYzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "VKgo":
/*!*************************************************!*\
  !*** ./src/app/services/admin/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");
/* harmony import */ var _session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session-storage/session-storage.service */ "CfMw");





class AdminService {
    constructor(api, storage) {
        this.api = api;
        this.storage = storage;
    }
    changeEmail(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/admin/change-email', params);
            if (response.ok) {
                this.storage.set('email', params.email);
            }
            ;
            return response;
        });
    }
    authenticate(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.set('email', params.email);
            this.storage.set('password', params.password);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/admin/authenticate', {});
        });
    }
    changePassword(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/admin/change-password', params);
            if (response.ok) {
                this.storage.set('password', params.password);
            }
            ;
            return response;
        });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WF9o":
/*!***************************************************************!*\
  !*** ./src/app/services/localstorage/localstorage.service.ts ***!
  \***************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalstorageService {
    constructor() { }
    clear() {
        window.localStorage.clear();
    }
    remove(key) {
        window.localStorage.removeItem(key);
    }
    set(key, value) {
        window.localStorage.setItem(key, value);
    }
    get(key, value) {
        const result = window.localStorage.getItem(key);
        if (typeof (result) != 'undefined' && result !== null) {
            return result;
        }
        else {
            return value;
        }
    }
    setObject(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value || {}));
    }
    getObject(key, value) {
        if (!value) {
            value = {};
        }
        const kayvalue = window.localStorage.getItem(key);
        if (typeof (kayvalue) == 'undefined' || kayvalue == null) {
            return value;
        }
        else {
            return JSON.parse(kayvalue);
        }
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/api/api.service */ "oZWX");
/* harmony import */ var _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/menu/menu.service */ "d3yR");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/admin/admin.service */ "VKgo");
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/config/config.service */ "L7HW");
/* harmony import */ var _services_devices_devices_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/devices/devices.service */ "glxi");
/* harmony import */ var _services_filters_filters_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/filters/filters.service */ "bS1C");
/* harmony import */ var _services_mapping_mapping_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/mapping/mapping.service */ "Cybb");
/* harmony import */ var _services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/session-storage/session-storage.service */ "CfMw");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");











/* --- SERVICES --- */











/* --- COMPONENTS --- */


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _services_api_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
        _services_menu_menu_service__WEBPACK_IMPORTED_MODULE_12__["MenuService"],
        _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_13__["AdminService"],
        _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"],
        _services_config_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"],
        _services_devices_devices_service__WEBPACK_IMPORTED_MODULE_16__["DevicesService"],
        _services_filters_filters_service__WEBPACK_IMPORTED_MODULE_17__["FiltersService"],
        _services_mapping_mapping_service__WEBPACK_IMPORTED_MODULE_18__["MappingService"],
        _services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_19__["FormErrorService"],
        _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_20__["LocalstorageService"],
        _services_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_21__["SessionStorageService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "bS1C":
/*!*****************************************************!*\
  !*** ./src/app/services/filters/filters.service.ts ***!
  \*****************************************************/
/*! exports provided: FiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return FiltersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");



class FiltersService {
    constructor(localstorage) {
        this.localstorage = localstorage;
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.filter.next(this.localstorage.getObject('filters', []));
    }
    ;
    get(filter) {
        let found = false;
        this.filter.value.map(o => {
            if (o.route == window.location.pathname) {
                found = true;
                Object.keys(o.filter).map(key => {
                    filter[key] = o.filter[key];
                });
            }
            ;
        });
        if (found) {
            this.update(filter);
        }
        else {
            this.add(filter);
        }
        ;
        return filter;
    }
    ;
    add(filter) {
        let filters = this.filter.value;
        filters.push({
            'route': window.location.pathname,
            'filter': filter
        });
        this.localstorage.setObject('filters', filters);
        this.filter.next(filters);
    }
    ;
    update(filter) {
        let filters = this.filter.value;
        filters.map(o => {
            if (o.route == window.location.pathname) {
                o.filter = filter;
            }
            ;
        });
        this.localstorage.setObject('filters', filters);
        this.filter.next(filters);
    }
    ;
}
FiltersService.ɵfac = function FiltersService_Factory(t) { return new (t || FiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"])); };
FiltersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FiltersService, factory: FiltersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "d3yR":
/*!***********************************************!*\
  !*** ./src/app/services/menu/menu.service.ts ***!
  \***********************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MenuService {
    constructor() {
        this.badge = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    open() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events.next('open');
        });
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events.next('close');
        });
    }
    toggle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events.next('toggle');
        });
    }
    addBadge(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = this.badge.value;
            params[key] = value;
            this.badge.next(params);
        });
    }
    clearBadge(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = this.badge.value;
            params[key] = 0;
            this.badge.next(params);
        });
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dWDE":
/*!***********************************************************!*\
  !*** ./src/app/services/form-error/form-error.service.ts ***!
  \***********************************************************/
/*! exports provided: FormErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorService", function() { return FormErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FormErrorService {
    messages() {
        return {
            email: 'This email address is invalid',
            required: 'This field is required',
            not_allowed_characters: (matches) => {
                let matchedCharacters = matches;
                matchedCharacters = matchedCharacters.reduce((characterString, character, index) => {
                    let string = characterString;
                    string += character;
                    if (matchedCharacters.length !== index + 1) {
                        string += ', ';
                    }
                    return string;
                }, '');
                return `These characters are not allowed: ${matchedCharacters}`;
            },
        };
    }
    errors(group, errors, dirty) {
        const form = group;
        Object.keys(errors).map(field => {
            if (typeof (errors[field]) == 'string') {
                if (field) {
                    errors[field] = '';
                    const control = form.get(field);
                    const messages = this.messages();
                    if (control && !control.valid) {
                        if (!dirty || (control.dirty || control.touched)) {
                            for (const key in control.errors) {
                                if (key && key !== 'not_allowed_characters') {
                                    errors[field] = errors[field] || messages[key];
                                }
                                else {
                                    errors[field] = errors[field] || messages[key](control.errors[key]);
                                }
                            }
                        }
                    }
                }
            }
            else if (typeof (errors[field]) == 'object') {
                const inner = form.get(field);
                errors[field] = this.errors(inner, errors[field], dirty);
            }
        });
        return errors;
    }
    validateForm(formToValidate, errors, checkDirty) {
        return this.errors(formToValidate, errors, checkDirty);
    }
}
FormErrorService.ɵfac = function FormErrorService_Factory(t) { return new (t || FormErrorService)(); };
FormErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormErrorService, factory: FormErrorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "glxi":
/*!*****************************************************!*\
  !*** ./src/app/services/devices/devices.service.ts ***!
  \*****************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");




class DevicesService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    add(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/devices/add', params);
        });
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/devices/get', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/devices/list', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/devices/update', params);
        });
    }
    delete(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server, '/edge-router/devices/delete', params);
        });
    }
}
DevicesService.ɵfac = function DevicesService_Factory(t) { return new (t || DevicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DevicesService, factory: DevicesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"edge-router\",\"version\":\"1.0.8\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.2.10\",\"@angular/cdk\":\"^11.2.13\",\"@angular/common\":\"~11.2.10\",\"@angular/compiler\":\"~11.2.10\",\"@angular/core\":\"~11.2.10\",\"@angular/forms\":\"~11.2.10\",\"@angular/material\":\"^11.2.13\",\"@angular/platform-browser\":\"~11.2.10\",\"@angular/platform-browser-dynamic\":\"~11.2.10\",\"@angular/router\":\"~11.2.10\",\"file-saver\":\"^2.0.5\",\"object-id\":\"0.0.1\",\"object-path\":\"^0.11.7\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.11.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1102.9\",\"@angular/cli\":\"~11.2.9\",\"@angular/compiler-cli\":\"~11.2.10\",\"@types/file-saver\":\"^2.0.3\",\"@types/jasmine\":\"~3.6.0\",\"@types/node\":\"^12.20.43\",\"@types/object-path\":\"^0.11.1\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~6.1.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage\":\"~2.0.3\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.1.5\"}}");

/***/ }),

/***/ "oZWX":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session-storage/session-storage.service */ "CfMw");






class ApiService {
    constructor(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
    }
    put(url, endpoint, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            payload.header = {
                email: this.storage.get('email'),
                password: this.storage.get('password')
            };
            return yield this.http.put(url + endpoint, payload, options)
                .toPromise()
                .then(response => {
                return {
                    ok: true,
                    result: response
                };
            })
                .catch(error => {
                return this.error(error);
            });
        });
    }
    post(url, endpoint, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            payload.header = {
                email: this.storage.get('email'),
                password: this.storage.get('password')
            };
            return yield this.http.post(url + endpoint, payload, options)
                .toPromise()
                .then(response => {
                return {
                    ok: true,
                    result: response
                };
            })
                .catch(error => {
                return this.error(error);
            });
        });
    }
    error(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.error) {
                if (error.error.errors) {
                    if (error.error.code == 401) {
                        this.storage.clear();
                        this.router.navigate(['/sign-in']);
                    }
                    ;
                    return {
                        ok: false,
                        result: error.error.errors[0]
                    };
                }
                else {
                    return {
                        ok: false,
                        result: error
                    };
                }
            }
            else {
                return {
                    ok: false,
                    result: error
                };
            }
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_session_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'sign-in',
        loadChildren: () => Promise.all(/*! import() | pages-sign-in-sign-in-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("pages-sign-in-sign-in-module")]).then(__webpack_require__.bind(null, /*! ./pages/sign-in/sign-in.module */ "b8Qw")).then(m => m.SignInPageModule)
    },
    {
        path: 'devices',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-devices-devices-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("default~pages-devices-devices-module~pages-live-logs-live-logs-module~pages-mapping-mapping-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-devices-devices-module")]).then(__webpack_require__.bind(null, /*! ./pages/devices/devices.module */ "Kbl2")).then(m => m.DevicesPageModule)
    },
    {
        path: 'mapping',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-mapping-mapping-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("default~pages-devices-devices-module~pages-live-logs-live-logs-module~pages-mapping-mapping-module"), __webpack_require__.e("default~pages-live-logs-live-logs-module~pages-mapping-mapping-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-mapping-mapping-module")]).then(__webpack_require__.bind(null, /*! ./pages/mapping/mapping.module */ "ws3e")).then(m => m.MappingPageModule)
    },
    {
        path: 'live-logs',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-live-logs-live-logs-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("default~pages-devices-devices-module~pages-live-logs-live-logs-module~pages-mapping-mapping-module"), __webpack_require__.e("default~pages-live-logs-live-logs-module~pages-mapping-mapping-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-live-logs-live-logs-module")]).then(__webpack_require__.bind(null, /*! ./pages/live-logs/live-logs.module */ "3OC9")).then(m => m.LiveLogsPageModule)
    },
    {
        path: 'change-email',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-change-email-change-email-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("pages-change-email-change-email-module")]).then(__webpack_require__.bind(null, /*! ./pages/change-email/change-email.module */ "QZRe")).then(m => m.ChangeEmailPageModule)
    },
    {
        path: 'import-export',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-import-export-import-export-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("pages-import-export-import-export-module")]).then(__webpack_require__.bind(null, /*! ./pages/import-export/import-export.module */ "gdo/")).then(m => m.ImportExportPageModule)
    },
    {
        path: 'change-password',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-change-password-change-password-module */[__webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"), __webpack_require__.e("default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~1f4a9b24"), __webpack_require__.e("pages-change-password-change-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/change-password/change-password.module */ "wdPO")).then(m => m.ChangePasswordPageModule)
    },
    {
        path: '**',
        redirectTo: 'devices'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map