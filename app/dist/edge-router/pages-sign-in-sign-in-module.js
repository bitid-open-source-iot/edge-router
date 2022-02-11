(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "Ik3T":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin/admin.service */ "VKgo");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");














function SignInPage_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 8);
} }
function SignInPage_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.errors.email, " ");
} }
function SignInPage_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errors.password, " ");
} }
class SignInPage {
    constructor(toast, router, service, formerror) {
        this.toast = toast;
        this.router = router;
        this.service = service;
        this.formerror = formerror;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.errors = {
            email: '',
            password: ''
        };
        this.loading = false;
        this.observers = {};
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.authenticate(this.form.value);
            if (response.ok) {
                if (response.result.authenticated) {
                    this.router.navigate(['/devices'], {
                        replaceUrl: true
                    });
                    this.toast.success('Sign in successful!');
                }
                else {
                    this.toast.error('Invalid Credentials!');
                }
                ;
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
SignInPage.ɵfac = function SignInPage_Factory(t) { return new (t || SignInPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__["FormErrorService"])); };
SignInPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInPage, selectors: [["sign-in-page"]], decls: 18, vars: 4, consts: [["mode", "indeterminate", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["src", "./assets/icons/icon-512x512.png", "alt", "biTid", "width", "100", "height", "100", "draggable", "false"], ["appearance", "outline"], ["matInput", "", "type", "email", "name", "email", "placeholder", "email", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "name", "password", "placeholder", "password", "formControlName", "password", "required", ""], ["mat-flat-button", "", "type", "submit", "color", "primary"], ["mode", "indeterminate"]], template: function SignInPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SignInPage_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignInPage_Template_form_ngSubmit_2_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Edge Router ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SignInPage_mat_error_10_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SignInPage_mat_error_15_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_8__["MatContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["form[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px auto;\n  max-width: 400px;\n}\nform[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 16px auto;\n}\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtBQUVSIiwiZmlsZSI6InNpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICB9XG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "b8Qw":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ "Ik3T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* --- PAGES --- */














const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__["SignInPage"]
    }
];
class SignInPageModule {
}
SignInPageModule.ɵfac = function SignInPageModule_Factory(t) { return new (t || SignInPageModule)(); };
SignInPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SignInPageModule });
SignInPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__["MatContentModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SignInPageModule, { declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_0__["SignInPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_6__["MatContentModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module.js.map