(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "RdAG":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin/admin.service */ "VKgo");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/mat-menu-button/mat-menu-button */ "CcPE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
















function ChangePasswordPage_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 10);
} }
function ChangePasswordPage_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errors.password, " ");
} }
function ChangePasswordPage_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.errors.confirm, " ");
} }
class ChangePasswordPage {
    constructor(toast, router, service, formerror) {
        this.toast = toast;
        this.router = router;
        this.service = service;
        this.formerror = formerror;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.errors = {
            confirm: '',
            password: ''
        };
        this.loading = false;
        this.observers = {};
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.changePassword(this.form.value);
            if (response.ok) {
                this.router.navigate(['/devices']);
                this.toast.success('Password was changed!');
            }
            else {
                this.toast.error(response.result.message);
            }
            ;
            this.loading = false;
        });
    }
    ngOnInit() {
        this.observers.form = this.form.valueChanges.subscribe(() => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
    }
    ngOnDestroy() {
        this.observers.form.unsubscribe();
    }
}
ChangePasswordPage.ɵfac = function ChangePasswordPage_Factory(t) { return new (t || ChangePasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__["FormErrorService"])); };
ChangePasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordPage, selectors: [["change-password-page"]], decls: 21, vars: 4, consts: [[1, "spacer"], ["mode", "indeterminate", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "password", "name", "password", "placeholder", "new password", "formControlName", "password", "required", ""], ["new", ""], [4, "ngIf"], ["matInput", "", "type", "password", "name", "confirm", "placeholder", "confirm password", "formControlName", "confirm", "required", ""], ["confirm", ""], ["mat-flat-button", "", "type", "submit", "color", "primary"], ["mode", "indeterminate"]], template: function ChangePasswordPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChangePasswordPage_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChangePasswordPage_Template_form_ngSubmit_6_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " New Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ChangePasswordPage_mat_error_12_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Confirm Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ChangePasswordPage_mat_error_18_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.confirm);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_8__["MatMenuButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__["MatContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px auto;\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "wdPO":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ "RdAG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/libs/mat-menu-button/mat-menu-button.module */ "wC7X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* --- PAGES --- */















const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordPage"]
    }
];
class ChangePasswordPageModule {
}
ChangePasswordPageModule.ɵfac = function ChangePasswordPageModule_Factory(t) { return new (t || ChangePasswordPageModule)(); };
ChangePasswordPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ChangePasswordPageModule });
ChangePasswordPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__["MatContentModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_9__["MatMenuButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ChangePasswordPageModule, { declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__["MatContentModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_9__["MatMenuButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module.js.map