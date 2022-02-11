(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-live-logs-live-logs-module"],{

/***/ "3OC9":
/*!*****************************************************!*\
  !*** ./src/app/pages/live-logs/live-logs.module.ts ***!
  \*****************************************************/
/*! exports provided: LiveLogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveLogsPageModule", function() { return LiveLogsPageModule; });
/* harmony import */ var _live_logs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-logs.page */ "ZXkb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/order/order.module */ "J89Z");
/* harmony import */ var src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/filter/filter.module */ "p/0r");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/libs/mat-menu-button/mat-menu-button.module */ "wC7X");
/* harmony import */ var src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/libs/mat-back-button/mat-back-button.module */ "du2n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* --- PAGES --- */





















const routes = [
    {
        path: '',
        component: _live_logs_page__WEBPACK_IMPORTED_MODULE_0__["LiveLogsPage"]
    }
];
class LiveLogsPageModule {
}
LiveLogsPageModule.ɵfac = function LiveLogsPageModule_Factory(t) { return new (t || LiveLogsPageModule)(); };
LiveLogsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: LiveLogsPageModule });
LiveLogsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_8__["OrderPipeModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_9__["FilterPipeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_11__["MatContentModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_15__["MatBackButtonModule"],
            src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_14__["MatMenuButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](LiveLogsPageModule, { declarations: [_live_logs_page__WEBPACK_IMPORTED_MODULE_0__["LiveLogsPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_8__["OrderPipeModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_9__["FilterPipeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_11__["MatContentModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_15__["MatBackButtonModule"],
        src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_14__["MatMenuButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]] }); })();


/***/ }),

/***/ "ZXkb":
/*!***************************************************!*\
  !*** ./src/app/pages/live-logs/live-logs.page.ts ***!
  \***************************************************/
/*! exports provided: LiveLogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveLogsPage", function() { return LiveLogsPage; });
/* harmony import */ var src_app_classes_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/log */ "a3uS");
/* harmony import */ var src_app_classes_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/socket */ "rNNM");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/mat-menu-button/mat-menu-button */ "CcPE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");












function LiveLogsPage_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 10);
} }
function LiveLogsPage_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LiveLogsPage_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r9.message, " ");
} }
function LiveLogsPage_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LiveLogsPage_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](element_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r10.type, " ");
} }
function LiveLogsPage_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LiveLogsPage_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r11.date, "dd/MM/yyyy HH:mm:ss"), " ");
} }
function LiveLogsPage_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 13);
} }
function LiveLogsPage_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 14);
} }
class LiveLogsPage {
    constructor() {
        this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.columns = ['message', 'type', 'date'];
        this.loading = false;
        this.observers = {};
    }
    ngOnInit() {
        const socket = new src_app_classes_socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].socket, 'logs');
        this.observers.data = socket.data.subscribe((event) => {
            if (this.table.data.length >= 1000) {
                this.table.data.pop();
            }
            ;
            this.table.data.unshift(event.result);
            this.table.data = this.table.data.map(o => new src_app_classes_log__WEBPACK_IMPORTED_MODULE_0__["Log"](o));
        });
        this.observers.status = socket.status.subscribe((status) => {
            if (status == 'disconnected') {
                setTimeout(() => socket.reconnect(), 5000);
            }
            ;
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.observers.data) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.observers.status) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
LiveLogsPage.ɵfac = function LiveLogsPage_Factory(t) { return new (t || LiveLogsPage)(); };
LiveLogsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LiveLogsPage, selectors: [["live-logs-page"]], decls: 18, vars: 5, consts: [[1, "spacer"], ["mode", "indeterminate", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "message"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function LiveLogsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Live Logs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LiveLogsPage_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, LiveLogsPage_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, LiveLogsPage_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LiveLogsPage_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, LiveLogsPage_td_12_Template, 3, 3, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, LiveLogsPage_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LiveLogsPage_td_15_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LiveLogsPage_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LiveLogsPage_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_6__["MatMenuButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_9__["MatContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".mat-column-type[_ngcontent-%COMP%], .mat-column-date[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.info[_ngcontent-%COMP%], .warn[_ngcontent-%COMP%], .debug[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 8px;\n  font-size: 12px;\n  border-radius: 12px;\n  text-transform: capitalize;\n  background-color: #e0e0e0;\n}\n\n.info[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\n.warn[_ngcontent-%COMP%] {\n  background-color: #FF9800;\n}\n\n.debug[_ngcontent-%COMP%] {\n  background-color: #607D8B;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: #F44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpdmUtbG9ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksWUFBQTtBQUNKOztBQUNBOzs7O0VBSUksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSiIsImZpbGUiOiJsaXZlLWxvZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tdHlwZSxcbi5tYXQtY29sdW1uLWRhdGUge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbi5pbmZvLFxuLndhcm4sXG4uZGVidWcsXG4uZXJyb3Ige1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuLndhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG59XG4uZGVidWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG59XG4uZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG59Il19 */"] });


/***/ }),

/***/ "a3uS":
/*!********************************!*\
  !*** ./src/app/classes/log.ts ***!
  \********************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
class Log {
    constructor(args) {
        this.date = new Date();
        this.type = '';
        this.message = '';
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.type) != 'undefined' && args.type != null) {
                this.type = args.type;
            }
            ;
            if (typeof (args.date) != 'undefined' && args.date != null) {
                this.date = new Date(args.date);
            }
            ;
            if (typeof (args.message) != 'undefined' && args.message != null) {
                this.message = args.message;
            }
            ;
        }
    }
    ;
}


/***/ })

}]);
//# sourceMappingURL=pages-live-logs-live-logs-module.js.map