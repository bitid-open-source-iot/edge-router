(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-devices-devices-module"],{

/***/ "0IaG":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
  \************************************************************************/
/*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function() { return MAT_DIALOG_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function() { return MAT_DIALOG_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function() { return MAT_DIALOG_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialog", function() { return MatDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogActions", function() { return MatDialogActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogClose", function() { return MatDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function() { return MatDialogConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function() { return MatDialogContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogContent", function() { return MatDialogContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return MatDialogModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef", function() { return MatDialogRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function() { return MatDialogTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function() { return _MatDialogBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function() { return _MatDialogContainerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function() { return _closeDialogVia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function() { return matDialogAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function() { return throwMatDialogContentAlreadyAttachedError; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */






function MatDialogContainer_ng_template_0_Template(rf, ctx) { }
class MatDialogConfig {
    constructor() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */
        this.panelClass = '';
        /** Whether the dialog has a backdrop. */
        this.hasBackdrop = true;
        /** Custom class for the backdrop. */
        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
        this.maxWidth = '80vw';
        /** Data being injected into the child component. */
        this.data = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */
        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by MatDialog.
 * @docs-private
 */
const matDialogAnimations = {
    /** Animation that is applied on the dialog container by default. */
    dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('dialogContainer', [
        // Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0, transform: 'scale(0.7)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none', opacity: 1 }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ opacity: 0 }))),
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
 * Throws an exception for the case when a ComponentPortal is
 * attached to a DomPortalOutlet without an origin.
 * @docs-private
 */
function throwMatDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Base class for the `MatDialogContainer`. The base class does not implement
 * animations as these are left to implementers of the dialog container.
 */
class _MatDialogContainerBase extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, 
    /** The dialog configuration. */
    _config, _focusMonitor) {
        super();
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        this._focusMonitor = _focusMonitor;
        /** Emits when an animation state changes. */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this._elementFocusedBeforeDialogWasOpened = null;
        /**
         * Type of interaction that led to the dialog being closed. This is used to determine
         * whether the focus style will be applied when returning focus to its original location
         * after the dialog is closed.
         */
        this._closeInteractionType = null;
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwMatDialogContentAlreadyAttachedError();
            }
            return this._portalOutlet.attachDomPortal(portal);
        };
        this._ariaLabelledBy = _config.ariaLabelledBy || null;
        this._document = _document;
    }
    /** Initializes the dialog container with the attached content. */
    _initializeWithAttachedContent() {
        this._setupFocusTrap();
        // Save the previously focused element. This element will be re-focused
        // when the dialog closes.
        this._capturePreviouslyFocusedElement();
        // Move focus onto the dialog immediately in order to prevent the user
        // from accidentally opening multiple dialogs at the same time.
        this._focusDialogContainer();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDialogContentAlreadyAttachedError();
        }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal(portal) {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDialogContentAlreadyAttachedError();
        }
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Moves focus back into the dialog if it was moved out. */
    _recaptureFocus() {
        if (!this._containsFocus()) {
            const focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();
            if (focusContainer) {
                this._elementRef.nativeElement.focus();
            }
        }
    }
    /** Moves the focus inside the focus trap. */
    _trapFocus() {
        // If we were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else if (!this._containsFocus()) {
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            this._elementRef.nativeElement.focus();
        }
    }
    /** Restores focus to the element that was focused before the dialog opened. */
    _restoreFocus() {
        const previousElement = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this._config.restoreFocus && previousElement &&
            typeof previousElement.focus === 'function') {
            const activeElement = this._getActiveElement();
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                if (this._focusMonitor) {
                    this._focusMonitor.focusVia(previousElement, this._closeInteractionType);
                    this._closeInteractionType = null;
                }
                else {
                    previousElement.focus();
                }
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /** Sets up the focus trap. */
    _setupFocusTrap() {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
    }
    /** Captures the element that was focused before the dialog was opened. */
    _capturePreviouslyFocusedElement() {
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = this._getActiveElement();
        }
    }
    /** Focuses the dialog container. */
    _focusDialogContainer() {
        // Note that there is no focus method when rendering on the server.
        if (this._elementRef.nativeElement.focus) {
            this._elementRef.nativeElement.focus();
        }
    }
    /** Returns whether focus is inside the dialog. */
    _containsFocus() {
        const element = this._elementRef.nativeElement;
        const activeElement = this._getActiveElement();
        return element === activeElement || element.contains(activeElement);
    }
    /** Gets the currently-focused element on the page. */
    _getActiveElement() {
        var _a;
        // If the `activeElement` is inside a shadow root, `document.activeElement` will
        // point to the shadow root so we have to descend into it ourselves.
        const activeElement = this._document.activeElement;
        return ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) || activeElement;
    }
}
_MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) { return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"])); };
_MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogContainerBase, viewQuery: function _MatDialogContainerBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
_MatDialogContainerBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: MatDialogConfig },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"] }
];
_MatDialogContainerBase.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: MatDialogConfig }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"] }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();
/**
 * Internal component that wraps user-provided dialog content.
 * Animation is based on https://material.io/guidelines/motion/choreography.html.
 * @docs-private
 */
class MatDialogContainer extends _MatDialogContainerBase {
    constructor() {
        super(...arguments);
        /** State of the dialog animation. */
        this._state = 'enter';
    }
    /** Callback, invoked whenever an animation on the host completes. */
    _onAnimationDone({ toState, totalTime }) {
        if (toState === 'enter') {
            this._trapFocus();
            this._animationStateChanged.next({ state: 'opened', totalTime });
        }
        else if (toState === 'exit') {
            this._restoreFocus();
            this._animationStateChanged.next({ state: 'closed', totalTime });
        }
    }
    /** Callback, invoked when an animation on the host starts. */
    _onAnimationStart({ toState, totalTime }) {
        if (toState === 'enter') {
            this._animationStateChanged.next({ state: 'opening', totalTime });
        }
        else if (toState === 'exit' || toState === 'void') {
            this._animationStateChanged.next({ state: 'closing', totalTime });
        }
    }
    /** Starts the dialog exit animation. */
    _startExitAnimation() {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    }
}
MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) { return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer); };
MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatDialogContainer, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"], hostVars: 6, hostBindings: function MatDialogContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatDialogContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, data: { animation: [matDialogAnimations.dialogContainer] } });
const ɵMatDialogContainer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                animations: [matDialogAnimations.dialogContainer],
                host: {
                    'class': 'mat-dialog-container',
                    'tabindex': '-1',
                    'aria-modal': 'true',
                    '[id]': '_id',
                    '[attr.role]': '_config.role',
                    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
                    '[attr.aria-label]': '_config.ariaLabel',
                    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
                    '[@dialogContainer]': '_state',
                    '(@dialogContainer.start)': '_onAnimationStart($event)',
                    '(@dialogContainer.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jelbourn): resizing
// Counter for unique dialog ids.
let uniqueId = 0;
/**
 * Reference to a dialog opened via the MatDialog service.
 */
class MatDialogRef {
    constructor(_overlayRef, _containerInstance, id = `mat-dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        /** Whether the user is allowed to close the dialog. */
        this.disableClose = this._containerInstance._config.disableClose;
        /** Subject for notifying the user that the dialog has finished opening. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Subject for notifying the user that the dialog has started closing. */
        this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /** Current state of the dialog. */
        this._state = 0 /* OPEN */;
        // Pass the id along to the container.
        _containerInstance._id = id;
        // Emit when opening animation completes
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'opened'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'closed'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        });
        _overlayRef.detachments().subscribe(() => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._afterClosed.next(this._result);
            this._afterClosed.complete();
            this.componentInstance = null;
            this._overlayRef.dispose();
        });
        _overlayRef.keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !this.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
        }))
            .subscribe(event => {
            event.preventDefault();
            _closeDialogVia(this, 'keyboard');
        });
        _overlayRef.backdropClick().subscribe(() => {
            if (this.disableClose) {
                this._containerInstance._recaptureFocus();
            }
            else {
                _closeDialogVia(this, 'mouse');
            }
        });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        this._result = dialogResult;
        // Transition the backdrop in parallel to the dialog.
        this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.state === 'closing'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._overlayRef.detachBackdrop();
            // The logic that disposes of the overlay depends on the exit animation completing, however
            // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
            // timeout which will clean everything up if the animation hasn't fired within the specified
            // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
            // vast majority of cases the timeout will have been cleared before it has the chance to fire.
            this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = 1 /* CLOSING */;
        this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed() {
        return this._afterClosed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    beforeClosed() {
        return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width = '', height = '') {
        this._overlayRef.updateSize({ width, height });
        this._overlayRef.updatePosition();
        return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        this._overlayRef.addPanelClass(classes);
        return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        this._overlayRef.removePanelClass(classes);
        return this;
    }
    /** Gets the current state of the dialog's lifecycle. */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */
    _finishDialogClose() {
        this._state = 2 /* CLOSED */;
        this._overlayRef.dispose();
    }
    /** Fetches the position strategy object from the overlay ref. */
    _getPositionStrategy() {
        return this._overlayRef.getConfig().positionStrategy;
    }
}
/**
 * Closes the dialog with the specified interaction type. This is currently not part of
 * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
 * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
 */
// TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.
function _closeDialogVia(ref, interactionType, result) {
    // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
    // For those, we keep the behavior as is and do not deal with the interaction type.
    if (ref._containerInstance !== undefined) {
        ref._containerInstance._closeInteractionType = interactionType;
    }
    return ref.close(result);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a dialog. */
const MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
/** Injection token that can be used to specify default dialog options. */
const MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
/** Injection token that determines the scroll handling while the dialog is open. */
const MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DIALOG_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Base class for dialog services. The base dialog service allows
 * for arbitrary dialog refs and dialog container components.
 */
class _MatDialogBase {
    constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._defaultOptions = _defaultOptions;
        this._parentDialog = _parentDialog;
        this._overlayContainer = _overlayContainer;
        this._dialogRefConstructor = _dialogRefConstructor;
        this._dialogContainerType = _dialogContainerType;
        this._dialogDataToken = _dialogDataToken;
        this._openDialogsAtThisLevel = [];
        this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._ariaHiddenElements = new Map();
        // TODO (jelbourn): tighten the typing right-hand side of this expression.
        /**
         * Stream that emits when all open dialog have finished closing.
         * Will emit on subscribe if there are no open dialogs to begin with.
         */
        this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(() => this.openDialogs.length ?
            this._getAfterAllClosed() :
            this._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined)));
        this._scrollStrategy = scrollStrategy;
    }
    /** Keeps track of the currently-open dialogs. */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    open(componentOrTemplateRef, config) {
        config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());
        if (config.id && this.getDialogById(config.id) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayRef = this._createOverlay(config);
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        const dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config);
        // If this is the first dialog that we're opening, hide all the non-overlay content.
        if (!this.openDialogs.length) {
            this._hideNonDialogContentFromAssistiveTechnology();
        }
        this.openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));
        this.afterOpened.next(dialogRef);
        // Notify the dialog container that the content has been attached.
        dialogContainer._initializeWithAttachedContent();
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    getDialogById(id) {
        return this.openDialogs.find(dialog => dialog.id === id);
    }
    ngOnDestroy() {
        // Only close the dialogs at this level on destroy
        // since the parent service may still be active.
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param config The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    _createOverlay(config) {
        const overlayConfig = this._getOverlayConfig(config);
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an overlay config from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    _getOverlayConfig(dialogConfig) {
        const state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
            panelClass: dialogConfig.panelClass,
            hasBackdrop: dialogConfig.hasBackdrop,
            direction: dialogConfig.direction,
            minWidth: dialogConfig.minWidth,
            minHeight: dialogConfig.minHeight,
            maxWidth: dialogConfig.maxWidth,
            maxHeight: dialogConfig.maxHeight,
            disposeOnNavigation: dialogConfig.closeOnNavigation
        });
        if (dialogConfig.backdropClass) {
            state.backdropClass = dialogConfig.backdropClass;
        }
        return state;
    }
    /**
     * Attaches a dialog container to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatDialogConfig, useValue: config }]
        });
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
        const containerRef = overlay.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created dialog container.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping dialog container.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, { $implicit: config.data, dialogRef }));
        }
        else {
            const injector = this._createInjector(config, dialogRef, dialogContainer);
            const contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
            dialogRef.componentInstance = contentRef.instance;
        }
        dialogRef
            .updateSize(config.width, config.height)
            .updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the dialog.
     * @param dialogRef Reference to the dialog.
     * @param dialogContainer Dialog container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        // The dialog container should be provided as the dialog container and the dialog's
        // content are created out of the same `ViewContainerRef` and as such, are siblings
        // for injector purposes. To allow the hierarchy that is expected, the dialog
        // container is explicitly provided in the injector.
        const providers = [
            { provide: this._dialogContainerType, useValue: dialogContainer },
            { provide: this._dialogDataToken, useValue: config.data },
            { provide: this._dialogRefConstructor, useValue: dialogRef }
        ];
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
            providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: { value: config.direction, change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])() }
            });
        }
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({ parent: userInjector || this._injector, providers });
    }
    /**
     * Removes a dialog from the array of open dialogs.
     * @param dialogRef Dialog to be removed.
     */
    _removeOpenDialog(dialogRef) {
        const index = this.openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this.openDialogs.splice(index, 1);
            // If all the dialogs were closed, remove/restore the `aria-hidden`
            // to a the siblings and emit to the `afterAllClosed` stream.
            if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach((previousValue, element) => {
                    if (previousValue) {
                        element.setAttribute('aria-hidden', previousValue);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this._ariaHiddenElements.clear();
                this._getAfterAllClosed().next();
            }
        }
    }
    /**
     * Hides all of the content that isn't an overlay from assistive technology.
     */
    _hideNonDialogContentFromAssistiveTechnology() {
        const overlayContainer = this._overlayContainer.getContainerElement();
        // Ensure that the overlay container is attached to the DOM.
        if (overlayContainer.parentElement) {
            const siblings = overlayContainer.parentElement.children;
            for (let i = siblings.length - 1; i > -1; i--) {
                let sibling = siblings[i];
                if (sibling !== overlayContainer &&
                    sibling.nodeName !== 'SCRIPT' &&
                    sibling.nodeName !== 'STYLE' &&
                    !sibling.hasAttribute('aria-live')) {
                    this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));
                    sibling.setAttribute('aria-hidden', 'true');
                }
            }
        }
    }
    /** Closes all of the dialogs in an array. */
    _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            dialogs[i].close();
        }
    }
}
_MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) { return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"])); };
_MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatDialogBase });
_MatDialogBase.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: undefined },
    { type: undefined },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] },
    { type: undefined },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: undefined }, { type: undefined }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }, { type: undefined }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"] }]; }, null); })();
/**
 * Service to open Material Design modal dialogs.
 */
class MatDialog extends _MatDialogBase {
    constructor(overlay, injector, 
    /**
     * @deprecated `_location` parameter to be removed.
     * @breaking-change 10.0.0
     */
    location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
        super(overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
    }
}
MatDialog.ɵfac = function MatDialog_Factory(t) { return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"])); };
MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MatDialog, factory: MatDialog.ɵfac });
MatDialog.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: MatDialogConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_DIALOG_SCROLL_STRATEGY,] }] },
    { type: MatDialog, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: MatDialogConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_DIALOG_SCROLL_STRATEGY]
            }] }, { type: MatDialog, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }]; }, null); })();
/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
class MatDialogClose {
    constructor(
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    dialogRef, _elementRef, _dialog) {
        this.dialogRef = dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        /** Default to "button" to prevents accidental form submits. */
        this.type = 'button';
    }
    ngOnInit() {
        if (!this.dialogRef) {
            // When this directive is included in a dialog via TemplateRef (rather than being
            // in a Component), the DialogRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the DialogRef by
            // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
            // be resolved at constructor time.
            this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
    }
    ngOnChanges(changes) {
        const proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
    _onButtonClick(event) {
        // Determinate the focus origin using the click event, because using the FocusMonitor will
        // result in incorrect origins. Most of the time, close buttons will be auto focused in the
        // dialog, and therefore clicking the button won't result in a focus change. This means that
        // the FocusMonitor won't detect any origin change, and will always output `program`.
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
    }
}
MatDialogClose.ɵfac = function MatDialogClose_Factory(t) { return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogClose, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function MatDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) { return ctx._onButtonClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
    } }, inputs: { type: "type", dialogResult: ["mat-dialog-close", "dialogResult"], ariaLabel: ["aria-label", "ariaLabel"], _matDialogClose: ["matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
MatDialogClose.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogClose.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dialogResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-dialog-close',] }],
    _matDialogClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['matDialogClose',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-close], [matDialogClose]',
                exportAs: 'matDialogClose',
                host: {
                    '(click)': '_onButtonClick($event)',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.type]': 'type'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
        }] }); })();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
class MatDialogTitle {
    constructor(
    // The dialog title directive is always used in combination with a `MatDialogRef`.
    // tslint:disable-next-line: lightweight-tokens
    _dialogRef, _elementRef, _dialog) {
        this._dialogRef = _dialogRef;
        this._elementRef = _elementRef;
        this._dialog = _dialog;
        this.id = `mat-dialog-title-${dialogElementUid++}`;
    }
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
            Promise.resolve().then(() => {
                const container = this._dialogRef._containerInstance;
                if (container && !container._ariaLabelledBy) {
                    container._ariaLabelledBy = this.id;
                }
            });
        }
    }
}
MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) { return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog)); };
MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogTitle, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-dialog-title"], hostVars: 1, hostBindings: function MatDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["matDialogTitle"] });
MatDialogTitle.ctorParameters = () => [
    { type: MatDialogRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatDialog }
];
MatDialogTitle.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mat-dialog-title], [matDialogTitle]',
                exportAs: 'matDialogTitle',
                host: {
                    'class': 'mat-dialog-title',
                    '[id]': 'id'
                }
            }]
    }], function () { return [{ type: MatDialogRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: MatDialog }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/**
 * Scrollable content container of a dialog.
 */
class MatDialogContent {
}
MatDialogContent.ɵfac = function MatDialogContent_Factory(t) { return new (t || MatDialogContent)(); };
MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogContent, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-dialog-content"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                host: { 'class': 'mat-dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
class MatDialogActions {
}
MatDialogActions.ɵfac = function MatDialogActions_Factory(t) { return new (t || MatDialogActions)(); };
MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatDialogActions, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-dialog-actions"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                host: { 'class': 'mat-dialog-actions' }
            }]
    }], null, null); })();
/**
 * Finds the closest MatDialogRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a dialog.
 * @param openDialogs References to the currently-open dialogs.
 */
function getClosestDialog(element, openDialogs) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mat-dialog-container')) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatDialogModule {
}
MatDialogModule.ɵfac = function MatDialogModule_Factory(t) { return new (t || MatDialogModule)(); };
MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatDialogModule });
MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        MatDialog,
        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
    ], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, { declarations: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogContent,
                    MatDialogActions,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                declarations: [
                    MatDialogContainer,
                    MatDialogClose,
                    MatDialogTitle,
                    MatDialogActions,
                    MatDialogContent,
                ],
                providers: [
                    MatDialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                ],
                entryComponents: [MatDialogContainer]
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



//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "0Zf/":
/*!***********************************************!*\
  !*** ./src/app/pages/devices/devices.page.ts ***!
  \***********************************************/
/*! exports provided: DevicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesPage", function() { return DevicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/device */ "QKk4");
/* harmony import */ var src_app_classes_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/socket */ "rNNM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/libs/options/options.service */ "u0tM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_libs_confirm_confirm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/libs/confirm/confirm.service */ "swrf");
/* harmony import */ var src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/devices/devices.service */ "glxi");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/mat-menu-button/mat-menu-button */ "CcPE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");























function DevicesPage_mat_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-progress-bar", 16);
} }
function DevicesPage_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DevicesPage_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r15.description, " ");
} }
function DevicesPage_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DevicesPage_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", element_r16.type == "modbus" ? "Modbus" : "", " ", element_r16.type == "external" ? "External" : "", " ", element_r16.type == "programmable-logic-controller" ? "Programmable Logic Controller" : "", " ");
} }
function DevicesPage_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Last Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DevicesPage_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r17.lastConnection ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r17.lastConnection, "yyyy/MM/dd HH:mm:ss") : "not connected!", " ");
} }
function DevicesPage_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 17);
} }
function DevicesPage_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("isConnected", element_r18.isConnected);
} }
function DevicesPage_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 20);
} }
function DevicesPage_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("enabled", element_r19.publish);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", element_r19.publish ? "Publishing is enabled" : "Publishing is disabled");
} }
function DevicesPage_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 20);
} }
function DevicesPage_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("enabled", element_r20.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", element_r20.enabled ? "Device is enabled" : "Device is disabled");
} }
function DevicesPage_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 23);
} }
function DevicesPage_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DevicesPage_tr_28_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const row_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.options(row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { mode: "add" }; };
class DevicesPage {
    constructor(toast, sheet, router, confirm, service) {
        this.toast = toast;
        this.sheet = sheet;
        this.router = router;
        this.confirm = confirm;
        this.service = service;
        this.sort = new _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]();
        this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.columns = ['description', 'type', 'lastConnection', 'isConnected', 'publish', 'enabled'];
        this.observers = {};
    }
    list() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.list({});
            if (response.ok) {
                this.table.data = response.result.map((o) => new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"](o));
            }
            else {
                this.table.data = [];
            }
            ;
            this.loading = false;
        });
    }
    options(device) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sheet.show({
                role: 0,
                title: device.description,
                options: [
                    {
                        icon: 'visibility',
                        title: 'View',
                        handler: () => {
                            this.router.navigate(['/devices', 'viewer'], {
                                queryParams: {
                                    deviceId: device.deviceId
                                }
                            });
                        },
                        disabled: []
                    },
                    {
                        icon: 'content_copy',
                        title: 'Copy',
                        handler: () => {
                            this.router.navigate(['/devices', 'editor'], {
                                queryParams: {
                                    mode: 'copy',
                                    deviceId: device.deviceId
                                }
                            });
                        },
                        disabled: []
                    },
                    {
                        icon: 'edit',
                        title: 'Edit',
                        handler: () => {
                            this.router.navigate(['/devices', 'editor'], {
                                queryParams: {
                                    mode: 'update',
                                    deviceId: device.deviceId
                                }
                            });
                        },
                        disabled: []
                    },
                    {
                        icon: 'delete',
                        title: 'Delete',
                        danger: true,
                        handler: () => {
                            this.confirm.show({
                                message: 'Are you sure you want to delete ' + device.description + '?',
                                handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    this.loading = true;
                                    const response = yield this.service.delete({
                                        deviceId: device.deviceId
                                    });
                                    if (response.ok) {
                                        for (let i = 0; i < this.table.data.length; i++) {
                                            if (this.table.data[i].deviceId == device.deviceId) {
                                                this.table.data.splice(i, 1);
                                                break;
                                            }
                                            ;
                                        }
                                        ;
                                        this.table.data = this.table.data.map(o => new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"](o));
                                    }
                                    else {
                                        this.toast.error(response.result.message);
                                    }
                                    ;
                                    this.loading = false;
                                })
                            });
                        },
                        disabled: []
                    }
                ]
            });
        });
    }
    ngOnInit() {
        this.table.sort = this.sort;
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.list();
            const socket = new src_app_classes_socket__WEBPACK_IMPORTED_MODULE_2__["Socket"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socket, 'devices');
            this.observers.data = socket.data.subscribe((event) => {
                switch (event.process) {
                    case ('data'):
                        for (let i = 0; i < this.table.data.length; i++) {
                            if (this.table.data[i].deviceId == event.result.deviceId) {
                                this.table.data[i].lastConnection = new Date();
                                this.table.data[i].isConnected = true;
                                this.table.data[i].io.map((io) => {
                                    event.result.data.map((data) => {
                                        if (io.inputId == data.inputId) {
                                            io.value = data.value;
                                        }
                                        ;
                                    });
                                });
                            }
                            ;
                        }
                        ;
                        this.table.data = this.table.data.map((o) => new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"](o));
                        break;
                    case ('timeout'):
                        for (let i = 0; i < this.table.data.length; i++) {
                            if (this.table.data[i].deviceId == event.result.deviceId) {
                                if (event.result.timeout) {
                                    delete this.table.data[i].lastConnection;
                                    this.table.data[i].isConnected = false;
                                }
                                else {
                                    this.table.data[i].isConnected = true;
                                }
                                ;
                            }
                            ;
                        }
                        ;
                        this.table.data = this.table.data.map((o) => new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"](o));
                        break;
                }
                ;
            });
            this.observers.status = socket.status.subscribe((status) => {
                if (status == 'disconnected') {
                    setTimeout(() => socket.reconnect(), 5000);
                }
                ;
            });
        }))();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.observers.data) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.observers.status) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
DevicesPage.ɵfac = function DevicesPage_Factory(t) { return new (t || DevicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_libs_confirm_confirm_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_11__["DevicesService"])); };
DevicesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DevicesPage, selectors: [["devices-page"]], viewQuery: function DevicesPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 29, vars: 7, consts: [[1, "spacer"], ["mat-icon-button", "", "routerLink", "editor", 3, "queryParams"], ["svgIcon", "add"], ["mode", "indeterminate", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "lastConnection"], ["matColumnDef", "isConnected"], ["matColumnDef", "publish"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "enabled"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["svgIcon", "wifi"], ["mat-header-cell", ""], ["svgIcon", "file_upload", 3, "matTooltip"], ["svgIcon", "file_download", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function DevicesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DevicesPage_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DevicesPage_th_10_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DevicesPage_td_11_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DevicesPage_th_13_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, DevicesPage_td_14_Template, 2, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DevicesPage_th_16_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DevicesPage_td_17_Template, 3, 4, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DevicesPage_th_19_Template, 1, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, DevicesPage_td_20_Template, 2, 2, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, DevicesPage_th_22_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, DevicesPage_td_23_Template, 2, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DevicesPage_th_25_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, DevicesPage_td_26_Template, 2, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, DevicesPage_tr_27_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, DevicesPage_tr_28_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _libs_mat_menu_button_mat_menu_button__WEBPACK_IMPORTED_MODULE_13__["MatMenuButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_18__["MatContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], styles: [".mat-column-lastConnection[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n.mat-column-isConnected[_ngcontent-%COMP%] {\n  width: 48px;\n}\n\n.mat-column-isConnected[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.mat-column-isConnected[_ngcontent-%COMP%]   mat-icon.isConnected[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n\n.mat-column-publish[_ngcontent-%COMP%], .mat-column-enabled[_ngcontent-%COMP%] {\n  width: 32px;\n  padding-right: 16px !important;\n}\n\n.mat-column-publish[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .mat-column-enabled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n\n.mat-column-publish[_ngcontent-%COMP%]   mat-icon.enabled[_ngcontent-%COMP%], .mat-column-enabled[_ngcontent-%COMP%]   mat-icon.enabled[_ngcontent-%COMP%] {\n  color: #4CAF50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFJO0VBQ0ksY0FBQTtBQUVSOztBQURRO0VBQ0ksY0FBQTtBQUdaOztBQUNBOztFQUVJLFdBQUE7RUFDQSw4QkFBQTtBQUVKOztBQURJOztFQUNJLGNBQUE7QUFJUjs7QUFIUTs7RUFDSSxjQUFBO0FBTVoiLCJmaWxlIjoiZGV2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1sYXN0Q29ubmVjdGlvbiB7XG4gICAgd2lkdGg6IDE4MHB4O1xufVxuLm1hdC1jb2x1bW4taXNDb25uZWN0ZWQge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICNmNDQzMzY7XG4gICAgICAgICYuaXNDb25uZWN0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWF0LWNvbHVtbi1wdWJsaXNoLFxuLm1hdC1jb2x1bW4tZW5hYmxlZCB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6ICNGNDQzMzY7XG4gICAgICAgICYuZW5hYmxlZCB7XG4gICAgICAgICAgICBjb2xvcjogIzRDQUY1MDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "2ChS":
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js ***!
  \******************************************************************************/
/*! exports provided: MAT_BOTTOM_SHEET_DATA, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef, matBottomSheetAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DATA", function() { return MAT_BOTTOM_SHEET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BOTTOM_SHEET_DEFAULT_OPTIONS", function() { return MAT_BOTTOM_SHEET_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheet", function() { return MatBottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetConfig", function() { return MatBottomSheetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetContainer", function() { return MatBottomSheetContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return MatBottomSheetModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetRef", function() { return MatBottomSheetRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matBottomSheetAnimations", function() { return matBottomSheetAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to access the data that was passed in to a bottom sheet. */






function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) { }
const MAT_BOTTOM_SHEET_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatBottomSheetData');
/**
 * Configuration used when opening a bottom sheet.
 */
class MatBottomSheetConfig {
    constructor() {
        /** Data being injected into the child component. */
        this.data = null;
        /** Whether the bottom sheet has a backdrop. */
        this.hasBackdrop = true;
        /** Whether the user can use escape or clicking outside to close the bottom sheet. */
        this.disableClose = false;
        /** Aria label to assign to the bottom sheet element. */
        this.ariaLabel = null;
        /**
         * Whether the bottom sheet should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.closeOnNavigation = true;
        // Note that this is disabled by default, because while the a11y recommendations are to focus
        // the first focusable element, doing so prevents screen readers from reading out the
        // rest of the bottom sheet content.
        /** Whether the bottom sheet should focus the first focusable element on open. */
        this.autoFocus = false;
        /**
         * Whether the bottom sheet should restore focus to the
         * previously-focused element, after it's closed.
         */
        this.restoreFocus = true;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Animations used by the Material bottom sheet. */
const matBottomSheetAnimations = {
    /** Animation that shows and hides a bottom sheet. */
    bottomSheetState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(100%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].COMPLEX} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].ACCELERATION_CURVE}`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(`${_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationDurations"].EXITING} ${_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["AnimationCurves"].DECELERATION_CURVE}`)),
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(crisbeto): consolidate some logic between this, MatDialog and MatSnackBar
/**
 * Internal component that wraps user-provided bottom sheet content.
 * @docs-private
 */
class MatBottomSheetContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    constructor(_elementRef, _changeDetectorRef, _focusTrapFactory, breakpointObserver, document, 
    /** The bottom sheet configuration. */
    bottomSheetConfig) {
        super();
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusTrapFactory = _focusTrapFactory;
        this.bottomSheetConfig = bottomSheetConfig;
        /** The state of the bottom sheet animations. */
        this._animationState = 'void';
        /** Emits whenever the state of the animation changes. */
        this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Element that was focused before the bottom sheet was opened. */
        this._elementFocusedBeforeOpened = null;
        /**
         * Attaches a DOM portal to the bottom sheet container.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            this._validatePortalAttached();
            this._setPanelClass();
            this._savePreviouslyFocusedElement();
            return this._portalOutlet.attachDomPortal(portal);
        };
        this._document = document;
        this._breakpointSubscription = breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge])
            .subscribe(() => {
            this._toggleClass('mat-bottom-sheet-container-medium', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Medium));
            this._toggleClass('mat-bottom-sheet-container-large', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Large));
            this._toggleClass('mat-bottom-sheet-container-xlarge', breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].XLarge));
        });
    }
    /** Attach a component portal as content to this bottom sheet container. */
    attachComponentPortal(portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachComponentPortal(portal);
    }
    /** Attach a template portal as content to this bottom sheet container. */
    attachTemplatePortal(portal) {
        this._validatePortalAttached();
        this._setPanelClass();
        this._savePreviouslyFocusedElement();
        return this._portalOutlet.attachTemplatePortal(portal);
    }
    /** Begin animation of bottom sheet entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Begin animation of the bottom sheet exiting from view. */
    exit() {
        if (!this._destroyed) {
            this._animationState = 'hidden';
            this._changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
        this._destroyed = true;
    }
    _onAnimationDone(event) {
        if (event.toState === 'hidden') {
            this._restoreFocus();
        }
        else if (event.toState === 'visible') {
            this._trapFocus();
        }
        this._animationStateChanged.emit(event);
    }
    _onAnimationStart(event) {
        this._animationStateChanged.emit(event);
    }
    _toggleClass(cssClass, add) {
        const classList = this._elementRef.nativeElement.classList;
        add ? classList.add(cssClass) : classList.remove(cssClass);
    }
    _validatePortalAttached() {
        if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Attempting to attach bottom sheet content after content is already attached');
        }
    }
    _setPanelClass() {
        const element = this._elementRef.nativeElement;
        const panelClass = this.bottomSheetConfig.panelClass;
        if (Array.isArray(panelClass)) {
            // Note that we can't use a spread here, because IE doesn't support multiple arguments.
            panelClass.forEach(cssClass => element.classList.add(cssClass));
        }
        else if (panelClass) {
            element.classList.add(panelClass);
        }
    }
    /** Moves the focus inside the focus trap. */
    _trapFocus() {
        const element = this._elementRef.nativeElement;
        if (!this._focusTrap) {
            this._focusTrap = this._focusTrapFactory.create(element);
        }
        if (this.bottomSheetConfig.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady();
        }
        else {
            const activeElement = this._getActiveElement();
            // Otherwise ensure that focus is on the container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the bottom sheet already, because it's possible that the
            // consumer turned off `autoFocus` in order to move focus themselves.
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    /** Restores focus to the element that was focused before the bottom sheet was opened. */
    _restoreFocus() {
        const toFocus = this._elementFocusedBeforeOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.bottomSheetConfig.restoreFocus && toFocus && typeof toFocus.focus === 'function') {
            const activeElement = this._getActiveElement();
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the bottom sheet or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this._focusTrap) {
            this._focusTrap.destroy();
        }
    }
    /** Saves a reference to the element that was focused before the bottom sheet was opened. */
    _savePreviouslyFocusedElement() {
        this._elementFocusedBeforeOpened = this._getActiveElement();
        // The `focus` method isn't available during server-side rendering.
        if (this._elementRef.nativeElement.focus) {
            Promise.resolve().then(() => this._elementRef.nativeElement.focus());
        }
    }
    /** Gets the currently-focused element on the page. */
    _getActiveElement() {
        var _a;
        // If the `activeElement` is inside a shadow root, `document.activeElement` will
        // point to the shadow root so we have to descend into it ourselves.
        const activeElement = this._document.activeElement;
        return ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) || activeElement;
    }
}
MatBottomSheetContainer.ɵfac = function MatBottomSheetContainer_Factory(t) { return new (t || MatBottomSheetContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatBottomSheetConfig)); };
MatBottomSheetContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatBottomSheetContainer, selectors: [["mat-bottom-sheet-container"]], viewQuery: function MatBottomSheetContainer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "mat-bottom-sheet-container"], hostVars: 2, hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@state.start", function MatBottomSheetContainer_animation_state_start_HostBindingHandler($event) { return ctx._onAnimationStart($event); })("@state.done", function MatBottomSheetContainer_animation_state_done_HostBindingHandler($event) { return ctx._onAnimationDone($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.bottomSheetConfig == null ? null : ctx.bottomSheetConfig.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function MatBottomSheetContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]], styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"], encapsulation: 2, data: { animation: [matBottomSheetAnimations.bottomSheetState] } });
MatBottomSheetContainer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: MatBottomSheetConfig }
];
MatBottomSheetContainer.propDecorators = {
    _portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-bottom-sheet-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
                // In Ivy embedded views will be change detected from their declaration place, rather than where
                // they were stamped out. This means that we can't have the bottom sheet container be OnPush,
                // because it might cause the sheets that were opened from a template not to be out of date.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                animations: [matBottomSheetAnimations.bottomSheetState],
                host: {
                    'class': 'mat-bottom-sheet-container',
                    'tabindex': '-1',
                    'role': 'dialog',
                    'aria-modal': 'true',
                    '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
                    '[@state]': '_animationState',
                    '(@state.start)': '_onAnimationStart($event)',
                    '(@state.done)': '_onAnimationDone($event)'
                },
                styles: [".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }, { type: MatBottomSheetConfig }]; }, { _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatBottomSheetModule {
}
MatBottomSheetModule.ɵfac = function MatBottomSheetModule_Factory(t) { return new (t || MatBottomSheetModule)(); };
MatBottomSheetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatBottomSheetModule });
MatBottomSheetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatBottomSheetModule, { declarations: function () { return [MatBottomSheetContainer]; }, imports: function () { return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]; }, exports: function () { return [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                ],
                exports: [MatBottomSheetContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
                declarations: [MatBottomSheetContainer],
                entryComponents: [MatBottomSheetContainer]
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
 * Reference to a bottom sheet dispatched from the bottom sheet service.
 */
class MatBottomSheetRef {
    constructor(containerInstance, _overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the bottom sheet has been dismissed. */
        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Subject for notifying the user that the bottom sheet has opened and appeared. */
        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.containerInstance = containerInstance;
        this.disableClose = containerInstance.bottomSheetConfig.disableClose;
        // Emit when opening animation completes
        containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event.phaseName === 'done' && event.toState === 'visible'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
            .subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        // Dispose overlay when closing animation is complete
        containerInstance._animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event.phaseName === 'done' && event.toState === 'hidden'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
            .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            _overlayRef.dispose();
        });
        _overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(() => {
            this._afterDismissed.next(this._result);
            this._afterDismissed.complete();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(_overlayRef.backdropClick(), _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]))).subscribe(event => {
            if (!this.disableClose &&
                (event.type !== 'keydown' || !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event))) {
                event.preventDefault();
                this.dismiss();
            }
        });
    }
    /**
     * Dismisses the bottom sheet.
     * @param result Data to be passed back to the bottom sheet opener.
     */
    dismiss(result) {
        if (!this._afterDismissed.closed) {
            // Transition the backdrop in parallel to the bottom sheet.
            this.containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(event => event.phaseName === 'start'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(event => {
                // The logic that disposes of the overlay depends on the exit animation completing, however
                // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
                // timeout which will clean everything up if the animation hasn't fired within the specified
                // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
                // vast majority of cases the timeout will have been cleared before it has fired.
                this._closeFallbackTimeout = setTimeout(() => {
                    this._overlayRef.dispose();
                }, event.totalTime + 100);
                this._overlayRef.detachBackdrop();
            });
            this._result = result;
            this.containerInstance.exit();
        }
    }
    /** Gets an observable that is notified when the bottom sheet is finished closing. */
    afterDismissed() {
        return this._afterDismissed;
    }
    /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to specify default bottom sheet options. */
const MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-bottom-sheet-default-options');
/**
 * Service to trigger Material Design bottom sheets.
 */
class MatBottomSheet {
    constructor(_overlay, _injector, _parentBottomSheet, _defaultOptions) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._parentBottomSheet = _parentBottomSheet;
        this._defaultOptions = _defaultOptions;
        this._bottomSheetRefAtThisLevel = null;
    }
    /** Reference to the currently opened bottom sheet. */
    get _openedBottomSheetRef() {
        const parent = this._parentBottomSheet;
        return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
    }
    set _openedBottomSheetRef(value) {
        if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
        }
        else {
            this._bottomSheetRefAtThisLevel = value;
        }
    }
    open(componentOrTemplateRef, config) {
        const _config = _applyConfigDefaults(this._defaultOptions || new MatBottomSheetConfig(), config);
        const overlayRef = this._createOverlay(_config);
        const container = this._attachContainer(overlayRef, _config);
        const ref = new MatBottomSheetRef(container, overlayRef);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: _config.data,
                bottomSheetRef: ref
            }));
        }
        else {
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, undefined, this._createInjector(_config, ref));
            const contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        // When the bottom sheet is dismissed, clear the reference to it.
        ref.afterDismissed().subscribe(() => {
            // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
            if (this._openedBottomSheetRef == ref) {
                this._openedBottomSheetRef = null;
            }
        });
        if (this._openedBottomSheetRef) {
            // If a bottom sheet is already in view, dismiss it and enter the
            // new bottom sheet after exit animation is complete.
            this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance.enter());
            this._openedBottomSheetRef.dismiss();
        }
        else {
            // If no bottom sheet is in view, enter the new bottom sheet.
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    }
    /**
     * Dismisses the currently-visible bottom sheet.
     * @param result Data to pass to the bottom sheet instance.
     */
    dismiss(result) {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss(result);
        }
    }
    ngOnDestroy() {
        if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
        }
    }
    /**
     * Attaches the bottom sheet container component to the overlay.
     */
    _attachContainer(overlayRef, config) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this._injector,
            providers: [{ provide: MatBottomSheetConfig, useValue: config }]
        });
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatBottomSheetContainer, config.viewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @param config The user-specified bottom sheet config.
     */
    _createOverlay(config) {
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            direction: config.direction,
            hasBackdrop: config.hasBackdrop,
            disposeOnNavigation: config.closeOnNavigation,
            maxWidth: '100%',
            scrollStrategy: config.scrollStrategy || this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position().global().centerHorizontally().bottom('0')
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    }
    /**
     * Creates an injector to be used inside of a bottom sheet component.
     * @param config Config that was used to create the bottom sheet.
     * @param bottomSheetRef Reference to the bottom sheet.
     */
    _createInjector(config, bottomSheetRef) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const providers = [
            { provide: MatBottomSheetRef, useValue: bottomSheetRef },
            { provide: MAT_BOTTOM_SHEET_DATA, useValue: config.data }
        ];
        if (config.direction &&
            (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], null))) {
            providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
                useValue: { value: config.direction, change: Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])() }
            });
        }
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({ parent: userInjector || this._injector, providers });
    }
}
MatBottomSheet.ɵfac = function MatBottomSheet_Factory(t) { return new (t || MatBottomSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatBottomSheet, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); };
MatBottomSheet.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatBottomSheet_Factory() { return new MatBottomSheet(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MatBottomSheet, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, 8)); }, token: MatBottomSheet, providedIn: MatBottomSheetModule });
MatBottomSheet.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: MatBottomSheet, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] },
    { type: MatBottomSheetConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBottomSheet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: MatBottomSheetModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: MatBottomSheet, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }, { type: MatBottomSheetConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_BOTTOM_SHEET_DEFAULT_OPTIONS]
            }] }]; }, null); })();
/**
 * Applies default options to the bottom sheet config.
 * @param defaults Object containing the default values to which to fall back.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
function _applyConfigDefaults(defaults, config) {
    return Object.assign(Object.assign({}, defaults), config);
}

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



//# sourceMappingURL=bottom-sheet.js.map

/***/ }),

/***/ "3i2b":
/*!***************************************************!*\
  !*** ./src/app/libs/options/options.component.ts ***!
  \***************************************************/
/*! exports provided: OptionsSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsSheet", function() { return OptionsSheet; });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");








function OptionsSheet_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsSheet_mat_list_item_3_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const option_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return !option_r1.disabled && ctx_r2.submit(option_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("danger", option_r1.danger)("disabled", option_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", option_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("color", option_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", option_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r1.title, " ");
} }
class OptionsSheet {
    constructor(sheet, config) {
        this.sheet = sheet;
        this.config = config;
        this.title = this.config.title;
        this.options = this.config.options;
    }
    submit(option) {
        this.sheet.dismiss(option);
    }
    ngOnInit() {
        this.options.map(option => {
            if (!option.disabled.includes(this.config.role)) {
                option.disabled = false;
            }
            else {
                option.disabled = true;
            }
        });
    }
}
OptionsSheet.ɵfac = function OptionsSheet_Factory(t) { return new (t || OptionsSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MAT_BOTTOM_SHEET_DATA"])); };
OptionsSheet.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OptionsSheet, selectors: [["options-sheet"]], decls: 4, vars: 2, consts: [["type", "button", "lines", "full", "matRipple", "", 3, "danger", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", "lines", "full", "matRipple", "", 3, "matRippleDisabled", "click"], ["slot", "start", 3, "svgIcon"]], template: function OptionsSheet_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OptionsSheet_mat_list_item_3_Template, 5, 8, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"]], styles: ["options-sheet h1 {\n  margin: 0px !important;\n  padding: 8px 16px !important;\n  font-size: 16px !important;\n  font-weight: 500 !important;\n}\noptions-sheet mat-list mat-list-item.danger {\n  color: #f44336 !important;\n}\noptions-sheet mat-list mat-list-item.disabled {\n  cursor: default !important;\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQUFSO0FBR1E7RUFDSSx5QkFBQTtBQURaO0FBR1E7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0FBRFoiLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm9wdGlvbnMtc2hlZXQge1xuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgbWF0LWxpc3Qge1xuICAgICAgICBtYXQtbGlzdC1pdGVtLmRhbmdlciB7XG4gICAgICAgICAgICBjb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIG1hdC1saXN0LWl0ZW0uZGlzYWJsZWQge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "CCJE":
/*!*****************************************************!*\
  !*** ./src/app/pages/devices/editor/editor.page.ts ***!
  \*****************************************************/
/*! exports provided: DevicesEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesEditorPage", function() { return DevicesEditorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _input_output_input_output_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-output/input-output.dialog */ "Sk86");
/* harmony import */ var src_app_classes_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/device */ "QKk4");
/* harmony import */ var src_app_classes_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/id */ "aS/e");
/* harmony import */ var src_app_classes_input_output__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/input-output */ "Gi+I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/libs/options/options.service */ "u0tM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/devices/devices.service */ "glxi");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_back_button_mat_back_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../libs/mat-back-button/mat-back-button */ "gwL/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../libs/mat-footer/mat-footer */ "ZRfb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");



/* --- DIALOGS --- */

/* --- CLASSES --- */

























function DevicesEditorPage_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 32);
} }
function DevicesEditorPage_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.errors.type, " ");
} }
function DevicesEditorPage_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.errors.deviceId, " ");
} }
function DevicesEditorPage_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.errors.ip, " ");
} }
function DevicesEditorPage_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.errors.port, " ");
} }
function DevicesEditorPage_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.errors.publish, " ");
} }
function DevicesEditorPage_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.errors.pxtime, " ");
} }
function DevicesEditorPage_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.errors.enabled, " ");
} }
function DevicesEditorPage_mat_error_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r8.errors.timeout, " ");
} }
function DevicesEditorPage_mat_error_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r9.errors.txtime, " ");
} }
function DevicesEditorPage_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r10.errors.barcode, " ");
} }
function DevicesEditorPage_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r11.errors.description, " ");
} }
function DevicesEditorPage_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DevicesEditorPage_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r17.description, " ");
} }
function DevicesEditorPage_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 35);
} }
function DevicesEditorPage_tr_92_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DevicesEditorPage_tr_92_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const row_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.options(row_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class DevicesEditorPage {
    constructor(sheet, dialog, toast, route, router, service, formerror) {
        this.sheet = sheet;
        this.dialog = dialog;
        this.toast = toast;
        this.route = route;
        this.router = router;
        this.service = service;
        this.formerror = formerror;
        this.mode = 'add';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0.0.0.0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            txtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](5, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            pxtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](120, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(120)]),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            publish: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            timeout: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](60, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(24), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(24)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.table = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.errors = {
            ip: '',
            port: '',
            type: '',
            txtime: '',
            pxtime: '',
            barcode: '',
            publish: '',
            timeout: '',
            enabled: '',
            deviceId: '',
            description: ''
        };
        this.columns = ['description'];
        this.loading = false;
        this.observers = {};
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.get({
                filter: [
                    'io',
                    'ip',
                    'port',
                    'type',
                    'pxtime',
                    'txtime',
                    'barcode',
                    'publish',
                    'timeout',
                    'enabled',
                    'deviceId',
                    'description'
                ],
                deviceId: this.deviceId
            });
            if (response.ok) {
                const device = new src_app_classes_device__WEBPACK_IMPORTED_MODULE_4__["Device"](response.result);
                this.table.data = device.io.map((o) => new src_app_classes_input_output__WEBPACK_IMPORTED_MODULE_6__["InputOutput"](o));
                this.form.controls['ip'].setValue(device.ip);
                this.form.controls['port'].setValue(device.port);
                this.form.controls['type'].setValue(device.type);
                this.form.controls['pxtime'].setValue(device.pxtime);
                this.form.controls['txtime'].setValue(device.txtime);
                this.form.controls['barcode'].setValue(device.barcode);
                this.form.controls['timeout'].setValue(device.timeout);
                this.form.controls['publish'].setValue(device.publish);
                this.form.controls['enabled'].setValue(device.enabled);
                this.form.controls['deviceId'].setValue(device.deviceId);
                this.form.controls['description'].setValue(device.description);
            }
            else {
                this.toast.error(response.result.message);
                this.router.navigate(['/devices']);
            }
            ;
            this.loading = false;
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            let mode = this.mode;
            if (mode == 'copy') {
                mode = 'add';
                delete this.deviceId;
            }
            ;
            const response = yield this.service[mode]({
                io: this.table.data,
                ip: this.form.value.ip,
                port: this.form.value.port,
                type: this.form.value.type,
                txtime: this.form.value.txtime,
                pxtime: this.form.value.pxtime,
                barcode: this.form.value.barcode,
                timeout: this.form.value.timeout,
                publish: this.form.value.publish,
                enabled: this.form.value.enabled,
                deviceId: this.form.value.deviceId,
                description: this.form.value.description
            });
            if (response.ok) {
                this.router.navigate(['/devices']);
            }
            else {
                this.toast.error(response.result.message);
            }
            ;
            this.loading = false;
        });
    }
    options(io) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sheet.show({
                role: 0,
                title: io.description,
                options: [
                    {
                        icon: 'content_copy',
                        title: 'Copy',
                        handler: () => this.editor('copy', io),
                        disabled: []
                    },
                    {
                        icon: 'edit',
                        title: 'Update',
                        handler: () => this.editor('update', io),
                        disabled: []
                    },
                    {
                        icon: 'delete',
                        title: 'Delete',
                        danger: true,
                        handler: () => {
                            for (let i = 0; i < this.table.data.length; i++) {
                                if (this.table.data[i].inputId == io.inputId) {
                                    this.table.data.splice(i, 1);
                                    break;
                                }
                                ;
                            }
                            ;
                            this.table.data = this.table.data.map(o => new src_app_classes_input_output__WEBPACK_IMPORTED_MODULE_6__["InputOutput"](o));
                        },
                        disabled: []
                    }
                ]
            });
        });
    }
    editor(mode, io) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = yield this.dialog.open(_input_output_input_output_dialog__WEBPACK_IMPORTED_MODULE_3__["InputOutputDialog"], {
                data: {
                    io: new src_app_classes_input_output__WEBPACK_IMPORTED_MODULE_6__["InputOutput"](io),
                    type: this.form.value.type
                },
                panelClass: 'fullscreen-dialog'
            });
            yield dialog.afterClosed().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result) {
                    switch (mode) {
                        case ('add'):
                        case ('copy'):
                            result.inputId = Object(src_app_classes_id__WEBPACK_IMPORTED_MODULE_5__["ObjectId"])();
                            this.table.data.push(result);
                            break;
                        case ('update'):
                            this.table.data.map((o) => {
                                if (o.inputId == (io === null || io === void 0 ? void 0 : io.inputId)) {
                                    Object.keys(result).map(key => {
                                        o[key] = result[key];
                                    });
                                }
                                ;
                            });
                            break;
                    }
                    ;
                    this.table.data = this.table.data.map((o) => new src_app_classes_input_output__WEBPACK_IMPORTED_MODULE_6__["InputOutput"](o));
                }
                ;
            }));
        });
    }
    ngOnInit() {
        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
        const params = this.route.snapshot.queryParams;
        this.mode = params.mode;
        this.deviceId = params.deviceId;
        if (this.mode != 'add') {
            this.get();
        }
        ;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.observers.form) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
DevicesEditorPage.ɵfac = function DevicesEditorPage_Factory(t) { return new (t || DevicesEditorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_8__["OptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_12__["DevicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_13__["FormErrorService"])); };
DevicesEditorPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DevicesEditorPage, selectors: [["devices-editor-page"]], decls: 98, vars: 23, consts: [[1, "spacer"], ["mode", "indeterminate", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["placeholder", "type", "formControlName", "type", "required", ""], ["value", "modbus"], ["value", "external"], ["value", "programmable-logic-controller"], [4, "ngIf"], ["matInput", "", "type", "text", "minlength", "24", "maxlength", "24", "placeholder", "device id", "formControlName", "deviceId", "required", ""], ["matInput", "", "type", "url", "placeholder", "ip", "formControlName", "ip", "required", ""], ["matInput", "", "type", "number", "min", "0", "placeholder", "port", "formControlName", "port", "required", ""], ["placeholder", "publish", "formControlName", "publish", "required", ""], [3, "value"], ["matInput", "", "min", "120", "type", "number", "placeholder", "publish interval", "formControlName", "pxtime", "required", ""], ["matSuffix", ""], ["placeholder", "enabled", "formControlName", "enabled", "required", ""], ["matInput", "", "min", "120", "type", "number", "placeholder", "Timeout", "formControlName", "timeout", "required", ""], ["matInput", "", "min", "1", "type", "number", "placeholder", "tx time", "formControlName", "txtime", "required", ""], ["matInput", "", "type", "text", "placeholder", "barcode", "formControlName", "barcode", "required", ""], ["matInput", "", "type", "text", "placeholder", "description", "formControlName", "description", "required", ""], ["type", "submit", 2, "display", "none"], ["button", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-icon-button", "", "color", "primary", 1, "add", 3, "click"], ["svgIcon", "add"], ["type", "button", "color", "primary", "mat-flat-button", "", 3, "click"], ["mode", "indeterminate"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function DevicesEditorPage_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Devices Editor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DevicesEditorPage_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function DevicesEditorPage_Template_form_ngSubmit_6_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Modbus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " External ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Programmable Logic Controller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DevicesEditorPage_mat_error_18_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " Device ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, DevicesEditorPage_mat_error_23_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " IP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, DevicesEditorPage_mat_error_29_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Port ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DevicesEditorPage_mat_error_34_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " Publish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Enabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, DevicesEditorPage_mat_error_44_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " Publish Interval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, DevicesEditorPage_mat_error_51_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " Enabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, " Enabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, " Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, DevicesEditorPage_mat_error_61_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, " Timeout Interval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, DevicesEditorPage_mat_error_68_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " TX Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, DevicesEditorPage_mat_error_74_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " Barcode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, DevicesEditorPage_mat_error_79_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, DevicesEditorPage_mat_error_84_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "button", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](88, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, DevicesEditorPage_th_89_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, DevicesEditorPage_td_90_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, DevicesEditorPage_tr_91_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, DevicesEditorPage_tr_92_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DevicesEditorPage_Template_button_click_93_listener() { return ctx.editor("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "mat-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DevicesEditorPage_Template_button_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](86); return _r12.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.deviceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.ip);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.port);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.publish);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" second", ctx.form.value.pxtime > 1 ? "s" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.pxtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.enabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" second", ctx.form.value.timeout > 1 ? "s" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.timeout);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.txtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _libs_mat_back_button_mat_back_button__WEBPACK_IMPORTED_MODULE_15__["MatBackButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_18__["MatContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIcon"], _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_25__["MatFooter"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".add[_ngcontent-%COMP%] {\n  margin: 8px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImVkaXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkIHtcbiAgICBtYXJnaW46IDhweCBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ "Kbl2":
/*!*************************************************!*\
  !*** ./src/app/pages/devices/devices.module.ts ***!
  \*************************************************/
/*! exports provided: DevicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesPageModule", function() { return DevicesPageModule; });
/* harmony import */ var _viewer_viewer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/viewer.page */ "a19K");
/* harmony import */ var _devices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices.page */ "0Zf/");
/* harmony import */ var _editor_editor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.page */ "CCJE");
/* harmony import */ var _editor_input_output_input_output_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/input-output/input-output.dialog */ "Sk86");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/libs/options/options.module */ "gyTc");
/* harmony import */ var src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/libs/confirm/confirm.module */ "R32p");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/libs/mat-footer/mat-footer.module */ "tVzd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/libs/mat-menu-button/mat-menu-button.module */ "wC7X");
/* harmony import */ var src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/libs/mat-back-button/mat-back-button.module */ "du2n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* --- PAGES --- */



/* --- DIALOGS --- */

























const routes = [
    {
        path: '',
        component: _devices_page__WEBPACK_IMPORTED_MODULE_1__["DevicesPage"]
    },
    {
        path: 'editor',
        component: _editor_editor_page__WEBPACK_IMPORTED_MODULE_2__["DevicesEditorPage"]
    },
    {
        path: 'viewer',
        component: _viewer_viewer_page__WEBPACK_IMPORTED_MODULE_0__["ViewerPage"]
    }
];
class DevicesPageModule {
}
DevicesPageModule.ɵfac = function DevicesPageModule_Factory(t) { return new (t || DevicesPageModule)(); };
DevicesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: DevicesPageModule });
DevicesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_5__["OptionsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_6__["ConfirmModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_13__["MatFooterModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_17__["MatContentModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_22__["MatBackButtonModule"],
            src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_21__["MatMenuButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](DevicesPageModule, { declarations: [_viewer_viewer_page__WEBPACK_IMPORTED_MODULE_0__["ViewerPage"],
        _devices_page__WEBPACK_IMPORTED_MODULE_1__["DevicesPage"],
        _editor_input_output_input_output_dialog__WEBPACK_IMPORTED_MODULE_3__["InputOutputDialog"],
        _editor_editor_page__WEBPACK_IMPORTED_MODULE_2__["DevicesEditorPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_5__["OptionsModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_6__["ConfirmModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_13__["MatFooterModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_17__["MatContentModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
        src_app_libs_mat_back_button_mat_back_button_module__WEBPACK_IMPORTED_MODULE_22__["MatBackButtonModule"],
        src_app_libs_mat_menu_button_mat_menu_button_module__WEBPACK_IMPORTED_MODULE_21__["MatMenuButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]] }); })();


/***/ }),

/***/ "R32p":
/*!************************************************!*\
  !*** ./src/app/libs/confirm/confirm.module.ts ***!
  \************************************************/
/*! exports provided: ConfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModule", function() { return ConfirmModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _confirm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm.service */ "swrf");
/* harmony import */ var _confirm_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm.dialog */ "dqmm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");








/* --- SERVICES ---*/

/* --- COMPONENTS ---*/


class ConfirmModule {
}
ConfirmModule.ɵfac = function ConfirmModule_Factory(t) { return new (t || ConfirmModule)(); };
ConfirmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ConfirmModule });
ConfirmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _confirm_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmService"]
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ConfirmModule, { declarations: [_confirm_dialog__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialog"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "Sk86":
/*!**************************************************************************!*\
  !*** ./src/app/pages/devices/editor/input-output/input-output.dialog.ts ***!
  \**************************************************************************/
/*! exports provided: InputOutputDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputDialog", function() { return InputOutputDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../libs/mat-footer/mat-footer */ "ZRfb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function InputOutputDialog_mat_form_field_7_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.errors.register, " ");
} }
function InputOutputDialog_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InputOutputDialog_mat_form_field_7_mat_error_4_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r0.type == "modbus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errors.register);
} }
function InputOutputDialog_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.errors.moduleId, " ");
} }
function InputOutputDialog_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", key_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", key_r11, " ");
} }
function InputOutputDialog_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errors.key, " ");
} }
function InputOutputDialog_section_20_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.errors.bit, " ");
} }
function InputOutputDialog_section_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Bit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InputOutputDialog_section_20_mat_error_5_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r4.type == "external" || ctx_r4.form.value.key == "digitalsIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.errors.bit);
} }
function InputOutputDialog_section_21_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.errors.readable, " ");
} }
function InputOutputDialog_section_21_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.errors.writeable, " ");
} }
function InputOutputDialog_section_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Readable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, InputOutputDialog_section_21_mat_error_9_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Writeable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Enabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Disabled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, InputOutputDialog_section_21_mat_error_18_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r5.type == "programmable-logic-controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.errors.readable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r5.type == "programmable-logic-controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.errors.writeable);
} }
function InputOutputDialog_mat_form_field_22_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.errors.tagId, " ");
} }
function InputOutputDialog_mat_form_field_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Tag ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InputOutputDialog_mat_form_field_22_mat_error_4_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r6.type == "programmable-logic-controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.errors.tagId);
} }
function InputOutputDialog_mat_form_field_23_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", o_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", o_r18, " ");
} }
function InputOutputDialog_mat_form_field_23_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r17.errors.interface, " ");
} }
function InputOutputDialog_mat_form_field_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Data Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InputOutputDialog_mat_form_field_23_mat_option_4_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InputOutputDialog_mat_form_field_23_mat_error_5_Template, 2, 1, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx_r7.type == "programmable-logic-controller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.interfaces);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.errors.interface);
} }
function InputOutputDialog_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.errors.description, " ");
} }
class InputOutputDialog {
    constructor(dialog, config, formerror) {
        this.dialog = dialog;
        this.config = config;
        this.formerror = formerror;
        this.keys = [
            'AI1',
            'AI2',
            'AI3',
            'AI4',
            'TEXT1',
            'TEXT2',
            'TEXT3',
            'TEXT4',
            'AIExt1',
            'AIExt2',
            'AIExt3',
            'AIExt4',
            'AIExt5',
            'AIExt6',
            'AIExt7',
            'AIExt8',
            'BATT',
            'CI1',
            'CI2',
            'CI3',
            'CI4',
            'CI5',
            'CI6',
            'CI7',
            'CI8',
            'LAT',
            'LNG',
            'SIG',
            'txFlag',
            'digitalsIn'
        ];
        this.type = this.config.type;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            bit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.bit),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.key),
            tagId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.tagId),
            inputId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.inputId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            register: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.register),
            moduleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.moduleId),
            readable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.readable),
            interface: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.interface),
            writeable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.writeable),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.config.io.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.errors = {
            bit: '',
            key: '',
            tagId: '',
            inputId: '',
            register: '',
            moduleId: '',
            readable: '',
            interface: '',
            writeable: '',
            description: ''
        };
        this.registers = [
            'hr2',
            'hr3',
            'hr4',
            'hr5',
            'hr6',
            'hr7',
            'hr8',
            'hr9'
        ];
        this.interfaces = [
            'BOOL',
            'SINT',
            'INT',
            'DINT',
            'LINT',
            'USINT',
            'UINT',
            'UDINT',
            'REAL',
            'LREAL',
            'STIME',
            'DATE',
            'TIME_AND_DAY',
            'DATE_AND_STRING',
            'STRING',
            'WORD',
            'DWORD',
            'BIT_STRING',
            'LWORD',
            'STRING2',
            'FTIME',
            'LTIME',
            'ITIME',
            'STRINGN',
            'SHORT_STRING',
            'TIME',
            'EPATH',
            'ENGUNIT',
            'STRINGI',
            'STRUCT'
        ];
        this.observers = {};
    }
    close() {
        this.dialog.close(null);
    }
    submit() {
        this.dialog.close(this.form.value);
    }
    ngOnInit() {
        this.keys = this.keys.sort();
        switch (this.type) {
            case ('modbus'):
                this.form.controls.register.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.register.updateValueAndValidity();
                break;
            case ('external'):
                this.form.controls.key.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.key.updateValueAndValidity();
                this.form.controls.moduleId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.moduleId.updateValueAndValidity();
                break;
            case ('programmable-logic-controller'):
                this.form.controls.tagId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.tagId.updateValueAndValidity();
                this.form.controls.readable.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.readable.updateValueAndValidity();
                this.form.controls.interface.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.interface.updateValueAndValidity();
                this.form.controls.writeable.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.form.controls.writeable.updateValueAndValidity();
                break;
        }
        ;
        this.observers.key = this.form.controls.key.valueChanges.subscribe(key => {
            if (key == 'digitalsIn') {
                this.form.controls.bit.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]);
            }
            else {
                this.form.controls.bit.setValidators(null);
            }
            ;
            this.form.controls.bit.updateValueAndValidity();
        });
        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.observers.key) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.observers.form) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
InputOutputDialog.ɵfac = function InputOutputDialog_Factory(t) { return new (t || InputOutputDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_3__["FormErrorService"])); };
InputOutputDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputOutputDialog, selectors: [["input-output-dialog"]], decls: 34, vars: 12, consts: [[1, "spacer"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "close"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["matInput", "", "type", "number", "placeholder", "moduleId", "formControlName", "moduleId", 3, "required"], [4, "ngIf"], ["placeholder", "key", "formControlName", "key", 3, "required"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "placeholder", "description", "formControlName", "description", "required", ""], ["type", "submit", 2, "display", "none"], ["button", ""], ["type", "button", "color", "primary", "mat-flat-button", "", 3, "click"], ["matInput", "", "type", "number", "min", "0", "placeholder", "register", "formControlName", "register", 3, "required"], [3, "value"], ["matInput", "", "type", "number", "min", "0", "placeholder", "bit", "formControlName", "bit", 3, "required"], ["placeholder", "readable", "formControlName", "readable", 3, "required"], ["placeholder", "writeable", "formControlName", "writeable", 3, "required"], ["matInput", "", "type", "text", "placeholder", "tagId", "formControlName", "tagId", 3, "required"], ["placeholder", "data type", "formControlName", "interface", 3, "required"]], template: function InputOutputDialog_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Input Output Editor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputOutputDialog_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InputOutputDialog_Template_form_ngSubmit_6_listener() { return !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InputOutputDialog_mat_form_field_7_Template, 5, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Module ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, InputOutputDialog_mat_error_13_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, InputOutputDialog_mat_option_18_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, InputOutputDialog_mat_error_19_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, InputOutputDialog_section_20_Template, 6, 2, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, InputOutputDialog_section_21_Template, 19, 8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, InputOutputDialog_mat_form_field_22_Template, 5, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, InputOutputDialog_mat_form_field_23_Template, 6, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, InputOutputDialog_mat_error_28_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputOutputDialog_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30); return _r9.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "modbus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx.type == "external");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.moduleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", ctx.type == "external");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.keys);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.value.key == "digitalsIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "programmable-logic-controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "programmable-logic-controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type == "programmable-logic-controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.description);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_8__["MatContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_12__["MatFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1vdXRwdXQuZGlhbG9nLnNjc3MifQ== */"] });


/***/ }),

/***/ "ZRfb":
/*!***********************************************!*\
  !*** ./src/app/libs/mat-footer/mat-footer.ts ***!
  \***********************************************/
/*! exports provided: MatFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooter", function() { return MatFooter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class MatFooter {
    constructor() { }
}
MatFooter.ɵfac = function MatFooter_Factory(t) { return new (t || MatFooter)(); };
MatFooter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooter, selectors: [["mat-footer"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatFooter_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["mat-footer {\n  flex: 1 auto;\n  color: rgba(0, 0, 0, 0.87);\n  height: 56px;\n  display: flex;\n  padding: 0px 16px;\n  min-height: 56px;\n  max-height: 56px;\n  background: #f5f5f5;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hdC1mb290ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Im1hdC1mb290ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb290ZXIge1xuICAgIGZsZXg6IDEgYXV0bztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIG1heC1oZWlnaHQ6IDU2cHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "a19K":
/*!*****************************************************!*\
  !*** ./src/app/pages/devices/viewer/viewer.page.ts ***!
  \*****************************************************/
/*! exports provided: ViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerPage", function() { return ViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/device */ "QKk4");
/* harmony import */ var src_app_classes_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/socket */ "rNNM");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/devices/devices.service */ "glxi");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "L7HW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _libs_mat_back_button_mat_back_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/mat-back-button/mat-back-button */ "gwL/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

/* --- CLASSES --- */


/* --- ENVIRONMENT --- */












function ViewerPage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const input_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", input_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", input_r1.value, " ");
} }
class ViewerPage {
    constructor(service, config, route, router, toast) {
        this.service = service;
        this.config = config;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.device = new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"]();
        this.loading = false;
        this.observers = {};
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.get({
                filter: [
                    'io',
                    'ip',
                    'port',
                    'type',
                    'pxtime',
                    'txtime',
                    'barcode',
                    'publish',
                    'enabled',
                    'deviceId',
                    'isConnected',
                    'description'
                ],
                deviceId: this.deviceId
            });
            if (response.ok) {
                this.device = new src_app_classes_device__WEBPACK_IMPORTED_MODULE_1__["Device"](response.result);
            }
            else {
                this.toast.error(response.result.message);
                this.router.navigate(['/devices']);
            }
            this.loading = false;
        });
    }
    ngOnInit() {
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = this.route.snapshot.queryParams;
            this.deviceId = params.deviceId;
            yield this.get();
            const socket = new src_app_classes_socket__WEBPACK_IMPORTED_MODULE_2__["Socket"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].socket, 'devices');
            this.observers.data = socket.data.subscribe((event) => {
                switch (event.process) {
                    case ('data'):
                        if (this.deviceId == event.result.deviceId) {
                            this.device.lastConnection = new Date();
                            this.device.isConnected = true;
                            this.device.io.map((io) => {
                                event.result.data.map((data) => {
                                    if (io.inputId == data.inputId) {
                                        io.value = data.value;
                                    }
                                    ;
                                });
                            });
                        }
                        ;
                        break;
                    case ('timeout'):
                        if (this.deviceId == event.result.deviceId) {
                            if (event.result.timeout) {
                                delete this.device.lastConnection;
                                this.device.isConnected = false;
                            }
                            else {
                                this.device.isConnected = true;
                            }
                            ;
                        }
                        ;
                        break;
                }
                ;
            });
            this.observers.status = socket.status.subscribe((status) => {
                if (status == 'disconnected') {
                    setTimeout(() => socket.reconnect(), 5000);
                }
                ;
            });
        }))();
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.observers.data) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.observers.status) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
ViewerPage.ɵfac = function ViewerPage_Factory(t) { return new (t || ViewerPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"])); };
ViewerPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewerPage, selectors: [["devices-viewer-page"]], decls: 12, vars: 8, consts: [[1, "spacer"], [1, "last-connection"], [1, "inputs-container"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "inputs"], [1, "input-description"], [1, "input-value"]], template: function ViewerPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " wifi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ViewerPage_div_11_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.device.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.device.lastConnection ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, ctx.device.lastConnection, "yyyy/MM/dd HH:mm:ss") : "not connected!", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("isConnected", ctx.device.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.device.io);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _libs_mat_back_button_mat_back_button__WEBPACK_IMPORTED_MODULE_10__["MatBackButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_13__["MatContent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%]   .last-connection[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 16px;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-icon.isConnected[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inputs-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  width: calc(20% - 40px);\n  margin: 10px;\n  padding: 10px;\n  text-align: center;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n.inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-description[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input-value[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    width: calc(25% - 40px) !important;\n  }\n}\n@media screen and (max-width: 900px) {\n  .inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    width: calc(33.33% - 40px) !important;\n  }\n}\n@media screen and (max-width: 600px) {\n  .inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    width: calc(50% - 40px) !important;\n  }\n}\n@media screen and (max-width: 400px) {\n  .inputs-container[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    width: calc(100% - 40px) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ZpZXdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksY0FBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtBQUVaO0FBQVE7RUFDSSxXQUFBO0FBRVo7QUFHQTtFQUNJO0lBQ0ksa0NBQUE7RUFBTjtBQUNGO0FBRUE7RUFDSTtJQUNJLHFDQUFBO0VBQU47QUFDRjtBQUVBO0VBQ0k7SUFDSSxrQ0FBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksbUNBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InZpZXdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgLmxhc3QtY29ubmVjdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgICAgICAmLmlzQ29ubmVjdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgICB9XG4gICAgfVxufVxuLmlucHV0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLmlucHV0cyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDIwJSAtIDQwcHgpO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAwLjIpO1xuICAgICAgICAuaW5wdXQtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LXZhbHVlIHtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXRzIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gNDBweCkgIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5pbnB1dHMtY29udGFpbmVyIC5pbnB1dHMge1xuICAgICAgICB3aWR0aDogY2FsYygzMy4zMyUgLSA0MHB4KSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmlucHV0cy1jb250YWluZXIgLmlucHV0cyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAuaW5wdXRzLWNvbnRhaW5lciAuaW5wdXRzIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "dqmm":
/*!************************************************!*\
  !*** ./src/app/libs/confirm/confirm.dialog.ts ***!
  \************************************************/
/*! exports provided: ConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return ConfirmDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmDialog {
    constructor(dialog, config) {
        this.dialog = dialog;
        this.config = config;
        this.message = this.config.message;
    }
    reject() {
        this.dialog.close(false);
    }
    confirm() {
        this.dialog.close(true);
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialog, selectors: [["confirm-dialog"]], decls: 6, vars: 1, consts: [["color", "primary"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "warn", 3, "click"]], template: function ConfirmDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialog_Template_button_click_2_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Yes, I am sure!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialog_Template_button_click_4_listener() { return ctx.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " No, Cancel!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, "\n");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".confirm-dialog {\n  width: 500px !important;\n}\n.confirm-dialog .mat-dialog-container {\n  padding: 0px !important;\n}\n.confirm-dialog .mat-dialog-container mat-toolbar {\n  display: flex;\n  font-size: 14px;\n  margin-bottom: 5px;\n  justify-content: center;\n}\n.confirm-dialog .mat-dialog-container button {\n  width: calc(100% - 20px);\n  margin: 5px 10px;\n  text-transform: none;\n}\n.confirm-dialog .mat-dialog-container button:last-child {\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 600px) {\n  .confirm-dialog .mat-dialog-container {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 5000;\n    position: fixed;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbmZpcm0uZGlhbG9nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKO0FBQUk7RUFDSSx1QkFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFHWjtBQURRO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBR1o7QUFEUTtFQUNJLG1CQUFBO0FBR1o7QUFDQTtFQUNJO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUFFTjtBQUNGIiwiZmlsZSI6ImNvbmZpcm0uZGlhbG9nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1kaWFsb2cge1xuICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICAgIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXQtdG9vbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY29uZmlybS1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDUwMDA7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "gyTc":
/*!************************************************!*\
  !*** ./src/app/libs/options/options.module.ts ***!
  \************************************************/
/*! exports provided: OptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsModule", function() { return OptionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.service */ "u0tM");
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options.component */ "3i2b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");






/* --- SERVICES --- */

/* --- COMPONENTS --- */


class OptionsModule {
}
OptionsModule.ɵfac = function OptionsModule_Factory(t) { return new (t || OptionsModule)(); };
OptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: OptionsModule });
OptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _options_service__WEBPACK_IMPORTED_MODULE_6__["OptionsService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OptionsModule, { declarations: [_options_component__WEBPACK_IMPORTED_MODULE_7__["OptionsSheet"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"]] }); })();


/***/ }),

/***/ "swrf":
/*!*************************************************!*\
  !*** ./src/app/libs/confirm/confirm.service.ts ***!
  \*************************************************/
/*! exports provided: ConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _confirm_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm.dialog */ "dqmm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ConfirmService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    show(config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = yield this.dialog.open(_confirm_dialog__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialog"], {
                data: config,
                panelClass: 'confirm-dialog'
            });
            dialog.afterClosed().subscribe(result => {
                if (result && config.handler) {
                    config.handler();
                }
            });
        });
    }
}
ConfirmService.ɵfac = function ConfirmService_Factory(t) { return new (t || ConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfirmService, factory: ConfirmService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tVzd":
/*!******************************************************!*\
  !*** ./src/app/libs/mat-footer/mat-footer.module.ts ***!
  \******************************************************/
/*! exports provided: MatFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterModule", function() { return MatFooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mat_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat-footer */ "ZRfb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

/* --- COMPONENTS --- */


class MatFooterModule {
}
MatFooterModule.ɵfac = function MatFooterModule_Factory(t) { return new (t || MatFooterModule)(); };
MatFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatFooterModule });
MatFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFooterModule, { declarations: [_mat_footer__WEBPACK_IMPORTED_MODULE_1__["MatFooter"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_mat_footer__WEBPACK_IMPORTED_MODULE_1__["MatFooter"]] }); })();


/***/ }),

/***/ "u0tM":
/*!*************************************************!*\
  !*** ./src/app/libs/options/options.service.ts ***!
  \*************************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.component */ "3i2b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");



class OptionsService {
    constructor(sheet) {
        this.sheet = sheet;
    }
    show(config) {
        this.sheet.open(_options_component__WEBPACK_IMPORTED_MODULE_0__["OptionsSheet"], {
            data: config,
            panelClass: 'options-sheet'
        }).afterDismissed().subscribe(result => {
            if (result && result.handler) {
                result.handler();
            }
        });
    }
}
OptionsService.ɵfac = function OptionsService_Factory(t) { return new (t || OptionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"])); };
OptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OptionsService, factory: OptionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zkoq":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
  \***************************************************************************/
/*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function() { return ɵTileCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */



const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
class TileCoordinator {
    constructor() {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` +
                `grid with cols="${this.tracker.length}".`);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridTile {
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridTile.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MatGridTileText {
    constructor(_element) {
        this._element = _element;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
MatGridTileText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true }]
        }] }); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
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
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(tile => {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(':');
        if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
    return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
    constructor(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) {
        this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = `${value == null ? '' : value}`; }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() { return this._rowHeight; }
    set rowHeight(value) {
        const newValue = `${value == null ? '' : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. ` +
                `Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
}
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatGridList.propDecorators = {
    _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
    cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridListModule {
}
MatGridListModule.ɵfac = function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); };
MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatGridListModule });
MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, { declarations: function () { return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=grid-list.js.map

/***/ })

}]);
//# sourceMappingURL=pages-devices-devices-module.js.map