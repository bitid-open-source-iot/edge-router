(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapping-mapping-module"],{

/***/ "XncX":
/*!***********************************************!*\
  !*** ./src/app/pages/mapping/mapping.page.ts ***!
  \***********************************************/
/*! exports provided: MappingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingPage", function() { return MappingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/map */ "cyT3");
/* harmony import */ var src_app_classes_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/device */ "QKk4");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/devices/devices.service */ "glxi");
/* harmony import */ var src_app_services_mapping_mapping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mapping/mapping.service */ "Cybb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/mat-menu-button/mat-menu-button */ "CcPE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../pipes/filter/filter.pipe */ "AbOq");























function MappingPage_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 17);
} }
function MappingPage_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Source Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_9_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", device_r30.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", device_r30.description, " ");
} }
function MappingPage_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_9_Template_mat_select_ngModelChange_1_listener($event) { const element_r28 = ctx.$implicit; return element_r28.source.deviceId = $event; })("ngModelChange", function MappingPage_td_9_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const element_r28 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.update(element_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MappingPage_td_9_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r28.source.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.devices.data);
} }
function MappingPage_td_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", device_r35.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", device_r35.description, " ");
} }
function MappingPage_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Source Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MappingPage_td_10_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.devices.data);
} }
function MappingPage_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Source Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_13_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", input_r38.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", input_r38.description, " ");
} }
const _c0 = function (a0) { return { "deviceId": a0 }; };
function MappingPage_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_13_Template_mat_select_ngModelChange_1_listener($event) { const element_r36 = ctx.$implicit; return element_r36.source.inputId = $event; })("ngModelChange", function MappingPage_td_13_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41); const element_r36 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.update(element_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MappingPage_td_13_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r36.source.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r5.inputs, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, element_r36.source.deviceId)));
} }
function MappingPage_td_14_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", input_r43.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", input_r43.description, " ");
} }
function MappingPage_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Source Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MappingPage_td_14_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r6.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 2, ctx_r6.inputs, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx_r6.map.value.source.deviceId)));
} }
function MappingPage_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Source Mask ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_17_Template_input_ngModelChange_1_listener($event) { const element_r44 = ctx.$implicit; return element_r44.source.mask = $event; })("ngModelChange", function MappingPage_td_17_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const element_r44 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r46.update(element_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r44.source.mask);
} }
function MappingPage_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Source Mask ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r9.map);
} }
function MappingPage_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r12.map);
} }
function MappingPage_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Destination Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_25_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", device_r51.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", device_r51.description, " ");
} }
function MappingPage_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_25_Template_mat_select_ngModelChange_1_listener($event) { const element_r49 = ctx.$implicit; return element_r49.destination.deviceId = $event; })("ngModelChange", function MappingPage_td_25_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const element_r49 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r53.update(element_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MappingPage_td_25_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r49.destination.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r14.devices.data);
} }
function MappingPage_td_26_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", device_r56.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", device_r56.description, " ");
} }
function MappingPage_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Destination Device ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MappingPage_td_26_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r15.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r15.devices.data);
} }
function MappingPage_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Destination Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_29_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", input_r59.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", input_r59.description, " ");
} }
function MappingPage_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_29_Template_mat_select_ngModelChange_1_listener($event) { const element_r57 = ctx.$implicit; return element_r57.destination.inputId = $event; })("ngModelChange", function MappingPage_td_29_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); const element_r57 = ctx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r61.update(element_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MappingPage_td_29_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r57.destination.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, ctx_r17.inputs, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, element_r57.destination.deviceId)));
} }
function MappingPage_td_30_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", input_r64.inputId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", input_r64.description, " ");
} }
function MappingPage_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Destination Input ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MappingPage_td_30_mat_option_5_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r18.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 2, ctx_r18.inputs, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx_r18.map.value.destination.deviceId)));
} }
function MappingPage_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Destination Mask ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MappingPage_td_33_Template_input_ngModelChange_1_listener($event) { const element_r65 = ctx.$implicit; return element_r65.destination.mask = $event; })("ngModelChange", function MappingPage_td_33_Template_input_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); const element_r65 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r67.update(element_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", element_r65.destination.mask);
} }
function MappingPage_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Destination Mask ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r21.map);
} }
function MappingPage_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 18);
} }
function MappingPage_td_37_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MappingPage_td_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r71); const element_r69 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return !ctx_r70.loading && ctx_r70.delete(element_r69); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function MappingPage_td_38_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MappingPage_td_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return !ctx_r72.loading && !ctx_r72.map.invalid && ctx_r72.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r24.map);
} }
function MappingPage_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 36);
} }
function MappingPage_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 37);
} }
function MappingPage_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 38);
} }
class MappingPage {
    constructor(toast, devices, service) {
        this.toast = toast;
        this.devices = devices;
        this.service = service;
        this.map = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                mask: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                inputId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            }),
            destination: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                mask: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                inputId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            })
        });
        this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.inputs = [];
        this.columns = ['source.deviceId', 'source.inputId', 'source.mask', 'route', 'destination.deviceId', 'destination.inputId', 'destination.mask', 'options'];
        this.loading = false;
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.add(this.map.value);
            if (response.ok) {
                let map = new src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__["Map"](this.map.value);
                map.mapId = response.result.mapId;
                this.table.data.push(map);
                this.map.reset();
                this.map.markAsPristine();
                this.map.markAsUntouched();
                this.table.data = this.table.data.map(o => new src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__["Map"](o));
            }
            else {
                this.toast.error(response.result.message);
            }
            ;
            this.loading = false;
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const devices = yield this.devices.list({});
            if (devices.ok) {
                this.devices.data = devices.result.map((o) => new src_app_classes_device__WEBPACK_IMPORTED_MODULE_2__["Device"](o));
                this.devices.data.map((device) => {
                    device.io.map((input) => {
                        input.deviceId = device.deviceId;
                        this.inputs.push(input);
                    });
                });
            }
            else {
                this.devices.data = [];
            }
            ;
            this.loading = false;
        });
    }
    list() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.list({});
            if (response.ok) {
                this.table.data = response.result.map((o) => new src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__["Map"](o));
            }
            else {
                this.table.data = [];
            }
            ;
            this.loading = false;
        });
    }
    delete(map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.delete({
                mapId: map.mapId
            });
            if (response.ok) {
                for (let i = 0; i < this.table.data.length; i++) {
                    if (this.table.data[i]) {
                        this.table.data.splice(i, 1);
                        break;
                    }
                    ;
                }
                ;
                this.table.data = this.table.data.map(o => new src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__["Map"](o));
                this.toast.success('Mapping deleted!');
            }
            else {
                this.toast.error(response.result.message);
            }
            ;
            this.loading = false;
        });
    }
    update(map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.update(map);
            if (response.ok) {
                for (let i = 0; i < this.table.data.length; i++) {
                    if (this.table.data[i].mapId == map.mapId) {
                        Object.keys(map).map((key) => {
                            this.table.data[i][key] = map[key];
                        });
                        break;
                    }
                    ;
                }
                ;
                this.table.data = this.table.data.map(o => new src_app_classes_map__WEBPACK_IMPORTED_MODULE_1__["Map"](o));
            }
            else {
                this.toast.error(response.result.message);
            }
            ;
            this.loading = false;
        });
    }
    ngOnInit() {
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.load();
            yield this.list();
        }))();
    }
    ngOnDestroy() { }
}
MappingPage.ɵfac = function MappingPage_Factory(t) { return new (t || MappingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_7__["DevicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_mapping_mapping_service__WEBPACK_IMPORTED_MODULE_8__["MappingService"])); };
MappingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MappingPage, selectors: [["mapping-page"]], decls: 42, vars: 7, consts: [[1, "spacer"], ["mode", "indeterminate", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "source.deviceId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 3, "formGroup", 4, "matFooterCellDef"], ["matColumnDef", "source.inputId"], ["matColumnDef", "source.mask"], ["matColumnDef", "route"], ["matColumnDef", "destination.deviceId"], ["matColumnDef", "destination.inputId"], ["matColumnDef", "destination.mask"], ["matColumnDef", "options"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["placeholder", "device", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-footer-cell", "", 3, "formGroup"], ["formGroupName", "source"], ["placeholder", "device", "formControlName", "deviceId", "required", ""], ["placeholder", "input", "required", "", 3, "ngModel", "ngModelChange"], ["placeholder", "input", "formControlName", "inputId", "required", ""], ["matInput", "", "min", "-1", "max", "65535", "type", "number", "placeholder", "mask", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "min", "-1", "max", "65535", "type", "number", "placeholder", "mask", "formControlName", "mask", "required", ""], ["svgIcon", "double_arrow"], ["formGroupName", "destination"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["svgIcon", "delete"], ["type", "button", "mat-icon-button", "", "color", "primary", 3, "click"], ["svgIcon", "add"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function MappingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Mapping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MappingPage_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MappingPage_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, MappingPage_td_9_Template, 3, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MappingPage_td_10_Template, 6, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MappingPage_th_12_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, MappingPage_td_13_Template, 4, 7, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MappingPage_td_14_Template, 7, 7, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MappingPage_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MappingPage_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, MappingPage_td_18_Template, 5, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, MappingPage_th_20_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, MappingPage_td_21_Template, 2, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, MappingPage_td_22_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MappingPage_th_24_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, MappingPage_td_25_Template, 3, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MappingPage_td_26_Template, 6, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, MappingPage_th_28_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, MappingPage_td_29_Template, 4, 7, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, MappingPage_td_30_Template, 7, 7, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, MappingPage_th_32_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, MappingPage_td_33_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, MappingPage_td_34_Template, 5, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](35, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, MappingPage_th_36_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, MappingPage_td_37_Template, 3, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, MappingPage_td_38_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, MappingPage_tr_39_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, MappingPage_tr_40_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, MappingPage_tr_41_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matFooterRowDef", ctx.columns)("matFooterRowDefSticky", true);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_10__["MatMenuButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_13__["MatContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRowDef"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRow"]], pipes: [_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"]], styles: [".mat-column-route[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.mat-column-route[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-self: center;\n  justify-self: center;\n}\n.mat-column-source-mask[_ngcontent-%COMP%], .mat-column-source-inputId[_ngcontent-%COMP%], .mat-column-source-deviceId[_ngcontent-%COMP%], .mat-column-destination-mask[_ngcontent-%COMP%], .mat-column-destination-inputId[_ngcontent-%COMP%], .mat-column-destination-deviceId[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.mat-column-options[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-right: 16px !important;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -16px !important;\n}\n.mat-footer-cell[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcHBpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRVI7QUFDQTs7Ozs7O0VBTUksbUJBQUE7QUFFSjtBQUFBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FBR0o7QUFEQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtBQUlKO0FBRkE7RUFDSSxnQkFBQTtBQUtKIiwiZmlsZSI6Im1hcHBpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tcm91dGUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMDAwMCwgMC4zKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICB9XG59XG4ubWF0LWNvbHVtbi1zb3VyY2UtbWFzayxcbi5tYXQtY29sdW1uLXNvdXJjZS1pbnB1dElkLFxuLm1hdC1jb2x1bW4tc291cmNlLWRldmljZUlkLFxuLm1hdC1jb2x1bW4tZGVzdGluYXRpb24tbWFzayxcbi5tYXQtY29sdW1uLWRlc3RpbmF0aW9uLWlucHV0SWQsXG4ubWF0LWNvbHVtbi1kZXN0aW5hdGlvbi1kZXZpY2VJZCB7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5tYXQtY29sdW1uLW9wdGlvbnMge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTZweCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb290ZXItY2VsbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ "cyT3":
/*!********************************!*\
  !*** ./src/app/classes/map.ts ***!
  \********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id */ "aS/e");

class Map {
    constructor(args) {
        this.mapId = Object(_id__WEBPACK_IMPORTED_MODULE_0__["ObjectId"])();
        this.source = {
            mask: 0,
            inputId: '',
            deviceId: ''
        };
        this.destination = {
            mask: 0,
            inputId: '',
            deviceId: ''
        };
        if (typeof (args) != 'undefined' && args != null) {
            if (typeof (args.mapId) != 'undefined' && args.mapId != null) {
                this.mapId = args.mapId;
            }
            ;
            if (typeof (args.source) != 'undefined' && args.source != null) {
                if (typeof (args.source.mask) != 'undefined' && args.source.mask != null) {
                    this.source.mask = args.source.mask;
                }
                if (typeof (args.source.inputId) != 'undefined' && args.source.inputId != null) {
                    this.source.inputId = args.source.inputId;
                }
                if (typeof (args.source.deviceId) != 'undefined' && args.source.deviceId != null) {
                    this.source.deviceId = args.source.deviceId;
                }
            }
            if (typeof (args.destination) != 'undefined' && args.destination != null) {
                if (typeof (args.destination.mask) != 'undefined' && args.destination.mask != null) {
                    this.destination.mask = args.destination.mask;
                }
                if (typeof (args.destination.inputId) != 'undefined' && args.destination.inputId != null) {
                    this.destination.inputId = args.destination.inputId;
                }
                if (typeof (args.destination.deviceId) != 'undefined' && args.destination.deviceId != null) {
                    this.destination.deviceId = args.destination.deviceId;
                }
            }
        }
    }
}


/***/ }),

/***/ "ws3e":
/*!*************************************************!*\
  !*** ./src/app/pages/mapping/mapping.module.ts ***!
  \*************************************************/
/*! exports provided: MappingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingPageModule", function() { return MappingPageModule; });
/* harmony import */ var _mapping_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping.page */ "XncX");
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
        component: _mapping_page__WEBPACK_IMPORTED_MODULE_0__["MappingPage"]
    }
];
class MappingPageModule {
}
MappingPageModule.ɵfac = function MappingPageModule_Factory(t) { return new (t || MappingPageModule)(); };
MappingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: MappingPageModule });
MappingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](MappingPageModule, { declarations: [_mapping_page__WEBPACK_IMPORTED_MODULE_0__["MappingPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
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


/***/ })

}]);
//# sourceMappingURL=pages-mapping-mapping-module.js.map