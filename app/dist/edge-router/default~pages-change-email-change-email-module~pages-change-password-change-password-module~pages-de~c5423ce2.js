(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2"],{

/***/ "4jEk":
/*!*************************************************!*\
  !*** ./src/app/libs/mat-content/mat-content.ts ***!
  \*************************************************/
/*! exports provided: MatContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatContent", function() { return MatContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class MatContent {
    constructor() { }
}
MatContent.ɵfac = function MatContent_Factory(t) { return new (t || MatContent)(); };
MatContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatContent, selectors: [["mat-content"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["mat-content {\n  flex: 1 auto;\n  height: calc(100% - 100px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hdC1jb250ZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6Im1hdC1jb250ZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY29udGVudCB7XG4gICAgZmxleDogMSBhdXRvO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "H0Zp":
/*!********************************************************!*\
  !*** ./src/app/libs/mat-content/mat-content.module.ts ***!
  \********************************************************/
/*! exports provided: MatContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatContentModule", function() { return MatContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mat_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat-content */ "4jEk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

/* --- COMPONENTS --- */


class MatContentModule {
}
MatContentModule.ɵfac = function MatContentModule_Factory(t) { return new (t || MatContentModule)(); };
MatContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatContentModule });
MatContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatContentModule, { declarations: [_mat_content__WEBPACK_IMPORTED_MODULE_1__["MatContent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_mat_content__WEBPACK_IMPORTED_MODULE_1__["MatContent"]] }); })();


/***/ }),

/***/ "bv9b":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
  \******************************************************************************/
/*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return MAT_PROGRESS_BAR_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return MAT_PROGRESS_BAR_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return MatProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return MatProgressBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatProgressBar.
/** @docs-private */



const _c0 = ["primaryValueBar"];
class MatProgressBarBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', { providedIn: 'root', factory: MAT_PROGRESS_BAR_LOCATION_FACTORY });
/** @docs-private */
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** Counter used to generate unique IDs for progress bars. */
let progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
class MatProgressBar extends _MatProgressBarMixinBase {
    constructor(_elementRef, _ngZone, _animationMode, 
    /**
     * @deprecated `location` parameter to be made required.
     * @breaking-change 8.0.0
     */
    location) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        /** Flag that indicates whether NoopAnimations mode is set to true. */
        this._isNoopAnimation = false;
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */
        this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Reference to animation end subscription to be unsubscribed on destroy. */
        this._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
        /** ID of the progress bar. */
        this.progressbarId = `mat-progress-bar-${progressbarId++}`;
        // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.
        const path = location ? location.getPathname().split('#')[0] : '';
        this._rectangleFillValue = `url('${path}#${this.progressbarId}')`;
        this._isNoopAnimation = _animationMode === 'NoopAnimations';
    }
    /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() { return this._value; }
    set value(v) {
        this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform() {
        // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
        const scale = this.value / 100;
        return { transform: `scale3d(${scale}, 1, 1)` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
            const scale = this.bufferValue / 100;
            return { transform: `scale3d(${scale}, 1, 1)` };
        }
        return null;
    }
    ngAfterViewInit() {
        // Run outside angular so change detection didn't get triggered on every transition end
        // instead only on the animation that we care about (primary value bar's transitionend)
        this._ngZone.runOutsideAngular((() => {
            const element = this._primaryValueBar.nativeElement;
            this._animationEndSubscription =
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(((e) => e.target === element)))
                    .subscribe(() => {
                    if (this.mode === 'determinate' || this.mode === 'buffer') {
                        this._ngZone.run(() => this.animationEnd.next({ value: this.value }));
                    }
                });
        }));
    }
    ngOnDestroy() {
        this._animationEndSubscription.unsubscribe();
    }
}
MatProgressBar.ɵfac = function MatProgressBar_Factory(t) { return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8)); };
MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatProgressBar, selectors: [["mat-progress-bar"]], viewQuery: function MatProgressBar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
    } }, hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-progress-bar"], hostVars: 4, hostBindings: function MatProgressBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
    } }, inputs: { color: "color", mode: "mode", value: "value", bufferValue: "bufferValue" }, outputs: { animationEnd: "animationEnd" }, exportAs: ["matProgressBar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [["aria-hidden", "true"], ["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]], template: function MatProgressBar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pattern", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"], encapsulation: 2, changeDetection: 0 });
MatProgressBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_PROGRESS_BAR_LOCATION,] }] }
];
MatProgressBar.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _primaryValueBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['primaryValueBar',] }],
    animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-progress-bar',
                exportAs: 'matProgressBar',
                host: {
                    'role': 'progressbar',
                    'aria-valuemin': '0',
                    'aria-valuemax': '100',
                    // set tab index to -1 so screen readers will read the aria-label
                    // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
                    'tabindex': '-1',
                    '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
                    '[attr.mode]': 'mode',
                    'class': 'mat-progress-bar',
                    '[class._mat-animation-noopable]': '_isNoopAnimation'
                },
                inputs: ['color'],
                template: "<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div aria-hidden=\"true\">\n  <svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n    <defs>\n      <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n        <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n      </pattern>\n    </defs>\n    <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n  </svg>\n  <!--\n    The background div is named as such because it appears below the other divs and is not sized based\n    on values.\n  -->\n  <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n  <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n  <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_PROGRESS_BAR_LOCATION]
            }] }]; }, { animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
        }] }); })();
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatProgressBarModule {
}
MatProgressBarModule.ɵfac = function MatProgressBarModule_Factory(t) { return new (t || MatProgressBarModule)(); };
MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatProgressBarModule });
MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, { declarations: function () { return [MatProgressBar]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatProgressBar]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ "d3UM":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _MatSelectBase, matSelectAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function() { return MAT_SELECT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function() { return MAT_SELECT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectBase", function() { return _MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










const _c0 = ["trigger"];
const _c1 = ["panel"];
function MatSelect_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder);
} }
function MatSelect_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
} }
function MatSelect_span_5_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
} }
function MatSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
} }
function MatSelect_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8._panelDoneAnimatingStream.next($event.toState); })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10._handleKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
} }
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
    /**
     * This animation ensures the select's overlay panel animation (transformPanel) is called when
     * closing the select.
     * This is needed due to https://github.com/angular/angular/issues/23302
     */
    transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], { optional: true }))
    ]),
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 })))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/**
 * The max height of the select's overlay panel.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */
const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
/** @docs-private */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */
const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
/** @docs-private */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/** Change event object that is emitted when the select value has changed. */
class MatSelectChange {
    constructor(
    /** Reference to the select that emitted the change event. */
    source, 
    /** Current value of the select that emitted the event. */
    value) {
        this.source = source;
        this.value = value;
    }
}
// Boilerplate for applying mixins to MatSelect.
/** @docs-private */
class MatSelectBase {
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
class MatSelectTrigger {
}
MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) { return new (t || MatSelectTrigger)(); };
MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatSelectTrigger, selectors: [["mat-select-trigger"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-select-trigger',
                providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
            }]
    }], null, null); })();
/** Base class with all of the `MatSelect` functionality. */
class _MatSelectBase extends _MatSelectMixinBase {
    constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
        var _a, _b, _c;
        super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._parentFormField = _parentFormField;
        this.ngControl = ngControl;
        this._liveAnnouncer = _liveAnnouncer;
        this._defaultOptions = _defaultOptions;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Comparison function to specify which option is displayed. Defaults to object equality. */
        this._compareWith = (o1, o2) => o1 === o2;
        /** Unique id for this input. */
        this._uid = `mat-select-${nextUniqueId++}`;
        /** Current `ariar-labelledby` value for the select trigger. */
        this._triggerAriaLabelledBy = null;
        /** Emits whenever the component is destroyed. */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when select has been touched` */
        this._onTouched = () => { };
        /** ID for the DOM node containing the select's value. */
        this._valueId = `mat-select-value-${nextUniqueId++}`;
        /** Emits when the panel element is finished transforming in. */
        this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._overlayPanelClass = ((_a = this._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
        this._focused = false;
        /** A name for this control that can be used by `mat-form-field`. */
        this.controlType = 'mat-select';
        this._required = false;
        this._multiple = false;
        this._disableOptionCentering = (_c = (_b = this._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
        /** Aria label of the select. */
        this.ariaLabel = '';
        /** Combined stream of all of the child options' change events. */
        this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(() => {
            const options = this.options;
            if (options) {
                return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...options.map(option => option.onSelectionChange))));
            }
            return this._ngZone.onStable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => this.optionSelectionChanges));
        });
        /** Event emitted when the select panel has been toggled. */
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Event emitted when the select has been opened. */
        this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(o => o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(() => { }));
        /** Event emitted when the select has been closed. */
        this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(o => !o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(() => { }));
        /** Event emitted when the selected value has been changed by the user. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        // Note that we only want to set this when the defaults pass it in, otherwise it should
        // stay as `undefined` so that it falls back to the default in the key manager.
        if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
            this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
        }
        this._scrollStrategyFactory = scrollStrategyFactory;
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /** Whether the select is focused. */
    get focused() {
        return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether the component is required. */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectDynamicMultipleError();
        }
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /** Whether to center the active option over the trigger. */
    get disableOptionCentering() { return this._disableOptionCentering; }
    set disableOptionCentering(value) {
        this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /** Value of the select control. */
    get value() { return this._value; }
    set value(newValue) {
        // Always re-assign an array, because it might have been mutated.
        if (newValue !== this._value || (this._multiple && Array.isArray(newValue))) {
            if (this.options) {
                this._setSelectionByValue(newValue);
            }
            this._value = newValue;
        }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
    get typeaheadDebounceInterval() { return this._typeaheadDebounceInterval; }
    set typeaheadDebounceInterval(value) {
        this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
    }
    /** Unique id of the element. */
    get id() { return this._id; }
    set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe(() => this._panelDoneAnimating(this.panelOpen));
    }
    ngAfterContentInit() {
        this._initKeyManager();
        this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(event => {
            event.added.forEach(option => option.select());
            event.removed.forEach(option => option.deselect());
        });
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            this._resetOptions();
            this._initializeSelection();
        });
    }
    ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        // We have to manage setting the `aria-labelledby` ourselves, because part of its value
        // is computed as a result of a content query which can cause this binding to trigger a
        // "changed after checked" error.
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
            const element = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = newAriaLabelledby;
            if (newAriaLabelledby) {
                element.setAttribute('aria-labelledby', newAriaLabelledby);
            }
            else {
                element.removeAttribute('aria-labelledby');
            }
        }
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
            this.stateChanges.next();
        }
        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */
    open() {
        if (this._canOpen()) {
            this._panelOpen = true;
            this._keyManager.withHorizontalOrientation(null);
            this._highlightCorrectOption();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Closes the overlay panel and focuses the host element. */
    close() {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */
    get panelOpen() {
        return this._panelOpen;
    }
    /** The currently selected option. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
        if (this.empty) {
            return '';
        }
        if (this._multiple) {
            const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
            if (this._isRtl()) {
                selectedOptions.reverse();
            }
            // TODO(crisbeto): delimiter should be configurable for proper localization.
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /** Whether the element is in RTL mode. */
    _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */
    _handleKeydown(event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    }
    /** Handles keyboard events while the select is closed. */
    _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
        const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
        const manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if (!manager.isTyping() && (isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) ||
            ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            const previouslySelectedOption = this.selected;
            manager.onKeydown(event);
            const selectedOption = this.selected;
            // Since the value has changed, we need to announce it ourselves.
            if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
            }
        }
    }
    /** Handles keyboard events when the selected is open. */
    _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
            // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
        }
        else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem &&
            !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
            event.preventDefault();
            const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
            this.options.forEach(option => {
                if (!option.disabled) {
                    hasDeselectedOptions ? option.select() : option.deselect();
                }
            });
        }
        else {
            const previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    }
    _onFocus() {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur() {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    _onAttached() {
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
            this._changeDetectorRef.detectChanges();
            this._positioningSettled();
        });
    }
    /** Returns the theme to be used on the panel. */
    _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    /** Whether the select has a value. */
    get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);
            this.stateChanges.next();
        });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
        this._selectionModel.selected.forEach(option => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
            if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getMatSelectNonArrayValueError();
            }
            value.forEach((currentValue) => this._selectValue(currentValue));
            this._sortValues();
        }
        else {
            const correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.updateActiveItem(correspondingOption);
            }
            else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.updateActiveItem(-1);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    _selectValue(value) {
        const correspondingOption = this.options.find((option) => {
            // Skip options that are already in the model. This allows us to handle cases
            // where the same primitive value is selected multiple times.
            if (this._selectionModel.isSelected(option)) {
                return false;
            }
            try {
                // Treat null as a special reset value.
                return option.value != null && this._compareWith(option.value, value);
            }
            catch (error) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    _initKeyManager() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead(this._typeaheadDebounceInterval)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withHomeAndEnd()
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!this.multiple && this._keyManager.activeItem) {
                    this._keyManager.activeItem._selectViaInteraction();
                }
                // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.
                this.focus();
                this.close();
            }
        });
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this._panelOpen && this.panel) {
                this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
            }
            else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
                this._keyManager.activeItem._selectViaInteraction();
            }
        });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */
    _resetOptions() {
        const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(event => {
            this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !this.multiple && this._panelOpen) {
                this.close();
                this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map(option => option._stateChanges))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
            .subscribe(() => {
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** Invoked when an option is clicked. */
    _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            if (this.value != null) {
                this._propagateChanges(option.value);
            }
        }
        else {
            if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) :
                    this._selectionModel.deselect(option);
            }
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */
    _sortValues() {
        if (this.multiple) {
            const options = this.options.toArray();
            this._selectionModel.sort((a, b) => {
                return this.sortComparator ? this.sortComparator(a, b, options) :
                    options.indexOf(a) - options.indexOf(b);
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (this.multiple) {
            valueToEmit = this.selected.map(option => option.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */
    _highlightCorrectOption() {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    }
    /** Whether the panel is allowed to open. */
    _canOpen() {
        var _a;
        return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    /** Focuses the select element. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Gets the aria-labelledby for the select panel. */
    _getPanelAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        const labelExpression = (labelId ? labelId + ' ' : '');
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */
    _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    }
    /** Gets the aria-labelledby of the select component trigger. */
    _getTriggerAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        let value = (labelId ? labelId + ' ' : '') + this._valueId;
        if (this.ariaLabelledby) {
            value += ' ' + this.ariaLabelledby;
        }
        return value;
    }
    /** Called when the overlay panel is done animating. */
    _panelDoneAnimating(isOpen) {
        this.openedChange.emit(isOpen);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        this.focus();
        this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        return this._panelOpen || !this.empty || (this._focused && !!this._placeholder);
    }
}
_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) { return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8)); };
_MatSelectBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatSelectBase, viewQuery: function _MatSelectBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], id: "id", placeholder: "placeholder", required: "required", multiple: "multiple", disableOptionCentering: "disableOptionCentering", compareWith: "compareWith", value: "value", typeaheadDebounceInterval: "typeaheadDebounceInterval", panelClass: "panelClass", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", sortComparator: "sortComparator" }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
_MatSelectBase.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_SELECT_CONFIG,] }] }
];
_MatSelectBase.propDecorators = {
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['trigger',] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['panel',] }],
    overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"],] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    typeaheadDebounceInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['opened',] }],
    _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['closed',] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSelectBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_SELECT_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_SELECT_CONFIG]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
        }], _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger']
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
        }], overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
class MatSelect extends _MatSelectBase {
    constructor() {
        super(...arguments);
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** The cached font-size of the trigger element. */
        this._triggerFontSize = 0;
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        const halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    ngOnInit() {
        super.ngOnInit();
        this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    open() {
        if (super._canOpen()) {
            super.open();
            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
            // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.
            this._triggerFontSize =
                parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
            this._calculateOverlayPosition();
            // Set the font size on the panel element once it exists.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
                if (this._triggerFontSize && this.overlayDir.overlayRef &&
                    this.overlayDir.overlayRef.overlayElement) {
                    this.overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
                }
            });
        }
    }
    /** Scrolls the active option into view. */
    _scrollOptionIntoView(index) {
        const labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.options, this.optionGroups);
        const itemHeight = this._getItemHeight();
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
    _positioningSettled() {
        this._calculateOverlayOffsetX();
        this.panel.nativeElement.scrollTop = this._scrollTop;
    }
    _panelDoneAnimating(isOpen) {
        if (this.panelOpen) {
            this._scrollTop = 0;
        }
        else {
            this.overlayDir.offsetX = 0;
            this._changeDetectorRef.markForCheck();
        }
        super._panelDoneAnimating(isOpen);
    }
    _getChangeEvent(value) {
        return new MatSelectChange(this, value);
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    _calculateOverlayOffsetX() {
        const overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        const viewportSize = this._viewportRuler.getViewportSize();
        const isRtl = this._isRtl();
        const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        let offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else if (this.disableOptionCentering) {
            offsetX = SELECT_PANEL_PADDING_X;
        }
        else {
            let selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        const rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        let optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this.disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    _checkOverlayWithinViewport(maxScroll) {
        const itemHeight = this._getItemHeight();
        const viewportSize = this._viewportRuler.getViewportSize();
        const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        const panelHeightTop = Math.abs(this._offsetY);
        const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */
    _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = `50% bottom 0px`;
        }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */
    _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = `50% top 0px`;
            return;
        }
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    _calculateOverlayPosition() {
        const itemHeight = this._getItemHeight();
        const items = this._getItemCount();
        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        const maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        let selectedOptionOffset;
        if (this.empty) {
            selectedOptionOffset = 0;
        }
        else {
            selectedOptionOffset =
                Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
        }
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        const scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    }
    /** Sets the transform origin point based on the selected option. */
    _getOriginBasedOnOption() {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return `50% ${originY}px 0px`;
    }
    /** Calculates the height of the select's options. */
    _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */
    _getItemCount() {
        return this.options.length + this.optionGroups.length;
    }
}
MatSelect.ɵfac = function MatSelect_Factory(t) { return ɵMatSelect_BaseFactory(t || MatSelect); };
MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatSelect, selectors: [["mat-select"]], contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    } }, hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"], hostVars: 20, hostBindings: function MatSelect_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatSelect_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSelect_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], useExisting: MatSelect },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 9, vars: 12, consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]], template: function MatSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() { return ctx.close(); })("attach", function MatSelect_Template_ng_template_attach_8_listener() { return ctx._onAttached(); })("detach", function MatSelect_Template_ng_template_detach_8_listener() { return ctx.close(); });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"], encapsulation: 2, data: { animation: [
            matSelectAnimations.transformPanelWrap,
            matSelectAnimations.transformPanel
        ] }, changeDetection: 0 });
MatSelect.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], { descendants: true },] }],
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], { descendants: true },] }],
    customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MAT_SELECT_TRIGGER,] }]
};
const ɵMatSelect_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatSelect);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-select',
                exportAs: 'matSelect',
                template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'role': 'combobox',
                    'aria-autocomplete': 'none',
                    // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
                    // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
                    // value. At some point we should try to switch it back to being `listbox`.
                    'aria-haspopup': 'true',
                    'class': 'mat-select',
                    '[attr.id]': 'id',
                    '[attr.tabindex]': 'tabIndex',
                    '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
                    '[attr.aria-expanded]': 'panelOpen',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.aria-required]': 'required.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                    '[class.mat-select-disabled]': 'disabled',
                    '[class.mat-select-invalid]': 'errorState',
                    '[class.mat-select-required]': 'required',
                    '[class.mat-select-empty]': 'empty',
                    '[class.mat-select-multiple]': 'multiple',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()'
                },
                animations: [
                    matSelectAnimations.transformPanelWrap,
                    matSelectAnimations.transformPanel
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], useExisting: MatSelect },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                ],
                styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"]
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], { descendants: true }]
        }], optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], { descendants: true }]
        }], customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MAT_SELECT_TRIGGER]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSelectModule {
}
MatSelectModule.ɵfac = function MatSelectModule_Factory(t) { return new (t || MatSelectModule)(); };
MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatSelectModule });
MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, { declarations: function () { return [MatSelect, MatSelectTrigger]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    MatSelect,
                    MatSelectTrigger,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                ],
                declarations: [MatSelect, MatSelectTrigger],
                providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=select.js.map

/***/ }),

/***/ "ihCf":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Options to pass to the animationstart listener. */


const listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
class AutofillMonitor {
    constructor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            return info.subject;
        }
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const cssClass = 'cdk-text-field-autofilled';
        const listener = ((event) => {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: true }));
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                this._ngZone.run(() => result.next({ target: event.target, isAutofilled: false }));
            }
        });
        this._ngZone.runOutsideAngular(() => {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: () => {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result;
    }
    stopMonitoring(elementOrRef) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    }
    ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }
}
AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) { return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: AutofillMonitor, providedIn: "root" });
AutofillMonitor.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
/** A directive that can be used to monitor the autofill state of an input. */
class CdkAutofill {
    constructor(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /** Emits when the autofill state of the element changes. */
        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(event => this.cdkAutofill.emit(event));
    }
    ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    }
}
CdkAutofill.ɵfac = function CdkAutofill_Factory(t) { return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor)); };
CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkAutofill, selectors: [["", "cdkAutofill", ""]], outputs: { cdkAutofill: "cdkAutofill" } });
CdkAutofill.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: AutofillMonitor }
];
CdkAutofill.propDecorators = {
    cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkAutofill]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: AutofillMonitor }]; }, { cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Directive to automatically resize a textarea to fit its content. */
class CdkTextareaAutosize {
    constructor(_elementRef, _platform, _ngZone, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement = this._elementRef.nativeElement;
        this._measuringClass = _platform.FIREFOX ?
            'cdk-textarea-autosize-measuring-firefox' :
            'cdk-textarea-autosize-measuring';
    }
    /** Minimum amount of rows in the textarea. */
    get minRows() { return this._minRows; }
    set minRows(value) {
        this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
        this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() { return this._maxRows; }
    set maxRows(value) {
        this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);
        this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */
    get enabled() { return this._enabled; }
    set enabled(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        // Only act if the actual value changed. This specifically helps to not run
        // resizeToFitContent too early (i.e. before ngAfterViewInit)
        if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
    }
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ?
            `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ?
            `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(() => {
                const window = this._getWindow();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed))
                    .subscribe(() => this.resizeToFitContent(true));
            });
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
            return;
        }
        // Use a clone element because we have to override some styles.
        let textareaClone = this._textareaElement.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        this._textareaElement.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    }
    ngDoCheck() {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force = false) {
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add(this._measuringClass);
        textarea.placeholder = '';
        // The measuring class includes a 2px padding to workaround an issue with Chrome,
        // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
        const height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove(this._measuringClass);
        textarea.placeholder = placeholderText;
        this._ngZone.runOutsideAngular(() => {
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
            }
            else {
                setTimeout(() => this._scrollToCaretPosition(textarea));
            }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */
    reset() {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */
    _getDocument() {
        return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        const document = this._getDocument();
        // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.
        if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    }
}
CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) { return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkTextareaAutosize, selectors: [["textarea", "cdkTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"], hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() { return ctx._noopInputHandler(); });
    } }, inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled"] }, exportAs: ["cdkTextareaAutosize"] });
CdkTextareaAutosize.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
CdkTextareaAutosize.propDecorators = {
    minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMinRows',] }],
    maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMaxRows',] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTextareaAutosize',] }],
    _noopInputHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'textarea[cdkTextareaAutosize]',
                exportAs: 'cdkTextareaAutosize',
                host: {
                    'class': 'cdk-textarea-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
        }], maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
        }], enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
        }], 
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class TextFieldModule {
}
TextFieldModule.ɵfac = function TextFieldModule_Factory(t) { return new (t || TextFieldModule)(); };
TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextFieldModule });
TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, { declarations: function () { return [CdkAutofill, CdkTextareaAutosize]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [CdkAutofill, CdkTextareaAutosize]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CdkAutofill, CdkTextareaAutosize],
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                exports: [CdkAutofill, CdkTextareaAutosize]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=text-field.js.map

/***/ }),

/***/ "qFsG":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */






class MatTextareaAutosize extends _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"] {
    get matAutosizeMinRows() { return this.minRows; }
    set matAutosizeMinRows(value) { this.minRows = value; }
    get matAutosizeMaxRows() { return this.maxRows; }
    set matAutosizeMaxRows(value) { this.maxRows = value; }
    get matAutosize() { return this.enabled; }
    set matAutosize(value) { this.enabled = value; }
    get matTextareaAutosize() { return this.enabled; }
    set matTextareaAutosize(value) { this.enabled = value; }
}
MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) { return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize); };
MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatTextareaAutosize, selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"], inputs: { cdkAutosizeMinRows: "cdkAutosizeMinRows", cdkAutosizeMaxRows: "cdkAutosizeMaxRows", matAutosizeMinRows: "matAutosizeMinRows", matAutosizeMaxRows: "matAutosizeMaxRows", matAutosize: ["mat-autosize", "matAutosize"], matTextareaAutosize: "matTextareaAutosize" }, exportAs: ["matTextareaAutosize"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
MatTextareaAutosize.propDecorators = {
    matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mat-autosize',] }],
    matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                exportAs: 'matTextareaAutosize',
                inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                host: {
                    'class': 'cdk-textarea-autosize mat-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], null, { matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
        }], matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
function getMatInputUnsupportedTypeError(type) {
    return Error(`Input type "${type}" isn't supported by matInput.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */
const MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
let nextUniqueId = 0;
// Boilerplate for applying mixins to MatInput.
/** @docs-private */
class MatInputBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, 
    /** @docs-private */
    ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */
class MatInput extends _MatInputMixinBase {
    constructor(_elementRef, _platform, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, 
    // TODO: Remove this once the legacy appearance has been removed. We only need
    // to inject the form-field for determining whether the placeholder has been promoted.
    _formField) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._elementRef = _elementRef;
        this._platform = _platform;
        this.ngControl = ngControl;
        this._autofillMonitor = _autofillMonitor;
        this._formField = _formField;
        this._uid = `mat-input-${nextUniqueId++}`;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        this.autofilled = false;
        this._disabled = false;
        this._required = false;
        this._type = 'text';
        this._readonly = false;
        this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(t => Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t));
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        this._inputValueAccessor = inputValueAccessor || element;
        this._previousNativeValue = this.value;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(() => {
                _elementRef.nativeElement.addEventListener('keyup', (event) => {
                    let el = event.target;
                    if (!el.value && !el.selectionStart && !el.selectionEnd) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === 'select';
        this._isTextarea = nodeName === 'textarea';
        if (this._isNativeSelect) {
            this.controlType = element.multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() { return this._id; }
    set id(value) { this._id = value || this._uid; }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); }
    /** Input type of the element. */
    get type() { return this._type; }
    set type(value) {
        this._type = value || 'text';
        this._validateType();
        // When using Angular inputs, developers are no longer able to set the properties on the native
        // input element. To ensure that bindings for `type` work, we need to sync the setter
        // with the native property. Textarea elements don't support the type property or attribute.
        if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            this._elementRef.nativeElement.type = this._type;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() { return this._inputValueAccessor.value; }
    set value(value) {
        if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
        }
    }
    /** Whether the element is readonly. */
    get readonly() { return this._readonly; }
    set readonly(value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
                this.autofilled = event.isAutofilled;
                this.stateChanges.next();
            });
        }
    }
    ngOnChanges() {
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
        // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
        // present or not depends on a query which is prone to "changed after checked" errors.
        this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged(isFocused) {
        if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput() {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    _dirtyCheckPlaceholder() {
        var _a, _b;
        // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
        // screen readers will read it out twice: once from the label and once from the attribute.
        // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
        // the only one that supports promoting the placeholder to a label.
        const placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;
        if (placeholder !== this._previousPlaceholder) {
            const element = this._elementRef.nativeElement;
            this._previousPlaceholder = placeholder;
            placeholder ?
                element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
        }
    }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    }
    /** Make sure the input is a supported type. */
    _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    }
    /** Checks whether the input type is one of the types that are never empty. */
    _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */
    _isBadInput() {
        // The `validity` property won't be present on platform-server.
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
            !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.
            const selectElement = this._elementRef.nativeElement;
            const firstOption = selectElement.options[0];
            // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.
            return this.focused || selectElement.multiple || !this.empty ||
                !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        }
        else {
            return this.focused || !this.empty;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        if (ids.length) {
            this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
        }
        else {
            this._elementRef.nativeElement.removeAttribute('aria-describedby');
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
        if (!this.focused) {
            this.focus();
        }
    }
}
MatInput.ɵfac = function MatInput_Factory(t) { return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], 8)); };
MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatInput, selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]], hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"], hostVars: 9, hostBindings: function MatInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() { return ctx._focusChanged(true); })("blur", function MatInput_blur_HostBindingHandler() { return ctx._focusChanged(false); })("input", function MatInput_input_HostBindingHandler() { return ctx._onInput(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState && !ctx.empty)("aria-required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    } }, inputs: { id: "id", disabled: "disabled", required: "required", type: "type", value: "value", readonly: "readonly", placeholder: "placeholder", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"] }, exportAs: ["matInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], useExisting: MatInput }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
MatInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
    { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"],] }] }
];
MatInput.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    userAriaDescribedBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-describedby',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    _focusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus', ['true'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur', ['false'],] }],
    _onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
                exportAs: 'matInput',
                host: {
                    /**
                     * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                     */
                    'class': 'mat-input-element mat-form-field-autofill-control',
                    '[class.mat-input-server]': '_isServer',
                    // Native input properties that are overwritten by Angular inputs need to be synced with
                    // the native input element. Otherwise property bindings for those don't work.
                    '[attr.id]': 'id',
                    // At the time of writing, we have a lot of customer tests that look up the input based on its
                    // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
                    // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
                    '[attr.data-placeholder]': 'placeholder',
                    '[disabled]': 'disabled',
                    '[required]': 'required',
                    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                    // Only mark the input as invalid for assistive technology if it has a value since the
                    // state usually overlaps with `aria-required` when the input is empty and can be redundant.
                    '[attr.aria-invalid]': 'errorState && !empty',
                    '[attr.aria-required]': 'required'
                },
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], useExisting: MatInput }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_INPUT_VALUE_ACCESSOR]
            }] }, { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
        }], 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-describedby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatInputModule {
}
MatInputModule.ɵfac = function MatInputModule_Factory(t) { return new (t || MatInputModule)(); };
MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatInputModule });
MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]], imports: [[
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        ], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, { declarations: function () { return [MatInput, MatTextareaAutosize]; }, imports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]; }, exports: function () { return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
        // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [MatInput, MatTextareaAutosize],
                imports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                ],
                exports: [
                    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"],
                    // We re-export the `MatFormFieldModule` since `MatInput` will almost always
                    // be used together with `MatFormField`.
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    MatInput,
                    MatTextareaAutosize,
                ],
                providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=input.js.map

/***/ })

}]);
//# sourceMappingURL=default~pages-change-email-change-email-module~pages-change-password-change-password-module~pages-de~c5423ce2.js.map