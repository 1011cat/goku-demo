(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/a11y'),require('@angular/cdk/overlay'),require('ng-zorro-antd/core/config'),require('ng-zorro-antd/i18n'),require('@angular/common'),require('ng-zorro-antd/core/transition-patch'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/outlet'),require('@angular/cdk/portal'),require('ng-zorro-antd/button'),require('ng-zorro-antd/core/wave'),require('ng-zorro-antd/pipes'),require('@angular/cdk/bidi'),require('ng-zorro-antd/core/no-animation'),exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/core'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/common'), require('@angular/platform-browser/animations'), require('ng-zorro-antd/i18n'), require('@angular/animations'), require('@angular/cdk/keycodes'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/pipes')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/modal', ['@angular/core','@angular/cdk/a11y','@angular/cdk/overlay','ng-zorro-antd/core/config','ng-zorro-antd/i18n','@angular/common','ng-zorro-antd/core/transition-patch','ng-zorro-antd/icon','ng-zorro-antd/core/outlet','@angular/cdk/portal','ng-zorro-antd/button','ng-zorro-antd/core/wave','ng-zorro-antd/pipes','@angular/cdk/bidi','ng-zorro-antd/core/no-animation','exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/core', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/a11y', '@angular/common', '@angular/platform-browser/animations', 'ng-zorro-antd/i18n', '@angular/animations', '@angular/cdk/keycodes', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/pipes'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.cdk.a11y,global.ng.cdk.overlay,global.ngZorroAntd.core.config,global.ngZorroAntd.i18n,global.ng.common,global.ngZorroAntd.core.transitionPatch,global.ngZorroAntd.icon,global.ngZorroAntd.core.outlet,global.ng.cdk.portal,global.ngZorroAntd.button,global.ngZorroAntd.core.wave,global.ngZorroAntd.pipes,global.ng.cdk.bidi,global.ngZorroAntd.core.noAnimation,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].modal = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.core, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.a11y, global.ng.common, global.ng.platformBrowser.animations, global['ng-zorro-antd'].i18n, global.ng.animations, global.ng.cdk.keycodes, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].pipes));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,ɵngcc13,ɵngcc14,exports, bidi, overlay, portal, core, config, logger, util, rxjs, operators, a11y, common, animations$1, i18n, animations, keycodes, button, noAnimation, outlet, icon, pipes) { 
var _c0 = ["modalElement"];
function NzModalConfirmContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onCloseClick(); });
    ɵngcc0.ɵɵelementEnd();
} }
function NzModalConfirmContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.config.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalConfirmContainerComponent_ng_template_12_Template(rf, ctx) { }
function NzModalConfirmContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.config.nzContent, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalConfirmContainerComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_15_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onCancel(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzLoading", !!ctx_r5.config.nzCancelLoading)("disabled", ctx_r5.config.nzCancelDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r5.config.nzAutofocus === "cancel" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.config.nzCancelText || ctx_r5.locale.cancelText, " ");
} }
function NzModalConfirmContainerComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 19);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_16_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onOk(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r6.config.nzOkType)("nzLoading", !!ctx_r6.config.nzOkLoading)("disabled", ctx_r6.config.nzOkDisabled)("nzDanger", ctx_r6.config.nzOkDanger);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r6.config.nzAutofocus === "ok" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.config.nzOkText || ctx_r6.locale.okText, " ");
} }
function NzModalContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 9);
    ɵngcc0.ɵɵlistener("click", function NzModalContainerComponent_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onCloseClick(); });
    ɵngcc0.ɵɵelementEnd();
} }
function NzModalContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 10);
} }
function NzModalContainerComponent_ng_template_7_Template(rf, ctx) { }
function NzModalContainerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.config.nzContent, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalContainerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("cancelTriggered", function NzModalContainerComponent_div_9_Template_div_cancelTriggered_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onCloseClick(); })("okTriggered", function NzModalContainerComponent_div_9_Template_div_okTriggered_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onOkClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("modalRef", ctx_r5.modalRef);
} }
function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c1 = ["*"];
var _c2 = ["nz-modal-close", ""];
function NzModalCloseComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var closeIcon_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", closeIcon_r1);
} }
var _c3 = ["nz-modal-footer", ""];
function NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.config.nzFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var button_r7 = ctx.$implicit; var ctx_r8 = ɵngcc0.ɵɵnextContext(4); return ctx_r8.onButtonClick(button_r7); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var button_r7 = ctx.$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("hidden", !ctx_r6.getButtonCallableProp(button_r7, "show"))("nzLoading", ctx_r6.getButtonCallableProp(button_r7, "loading"))("disabled", ctx_r6.getButtonCallableProp(button_r7, "disabled"))("nzType", button_r7.type)("nzDanger", button_r7.danger)("nzShape", button_r7.shape)("nzSize", button_r7.size)("nzGhost", button_r7.ghost);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", button_r7.label, " ");
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template, 2, 9, "button", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.buttons);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template, 1, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.buttonsFooter);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.buttonsFooter);
} }
var _c4 = function (a0, a1) { return { $implicit: a0, modalRef: a1 }; };
function NzModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.config.nzFooter)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c4, ctx_r0.config.nzComponentParams, ctx_r0.modalRef));
} }
function NzModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 10);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.onCancel(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzLoading", !!ctx_r10.config.nzCancelLoading)("disabled", ctx_r10.config.nzCancelDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r10.config.nzAutofocus === "cancel" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r10.config.nzCancelText || ctx_r10.locale.cancelText, " ");
} }
function NzModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 11);
    ɵngcc0.ɵɵlistener("click", function NzModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onOk(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r11.config.nzOkType)("nzDanger", ctx_r11.config.nzOkDanger)("nzLoading", !!ctx_r11.config.nzOkLoading)("disabled", ctx_r11.config.nzOkDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r11.config.nzAutofocus === "ok" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r11.config.nzOkText || ctx_r11.locale.okText, " ");
} }
function NzModalFooterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzModalFooterComponent_ng_template_1_button_0_Template, 2, 4, "button", 8);
    ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_template_1_button_1_Template, 2, 6, "button", 9);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.nzCancelText !== null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.config.nzOkText !== null);
} }
var _c5 = ["nz-modal-title", ""];
function NzModalTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.config.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var noopFun = function () { return void 0; };
    var ɵ0 = noopFun;
    var ModalOptions = /** @class */ (function () {
        function ModalOptions() {
            this.nzCentered = false;
            this.nzClosable = true;
            this.nzOkLoading = false;
            this.nzOkDisabled = false;
            this.nzCancelDisabled = false;
            this.nzCancelLoading = false;
            this.nzNoAnimation = false;
            this.nzAutofocus = 'auto';
            this.nzKeyboard = true;
            this.nzZIndex = 1000;
            this.nzWidth = 520;
            this.nzCloseIcon = 'close';
            this.nzOkType = 'primary';
            this.nzOkDanger = false;
            this.nzModalType = 'default';
            this.nzOnCancel = noopFun;
            this.nzOnOk = noopFun;
            // Confirm
            this.nzIconType = 'question-circle';
        }
        return ModalOptions;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var ZOOM_CLASS_NAME_MAP = {
        enter: 'ant-zoom-enter',
        enterActive: 'ant-zoom-enter-active',
        leave: 'ant-zoom-leave',
        leaveActive: 'ant-zoom-leave-active'
    };
    var FADE_CLASS_NAME_MAP = {
        enter: 'ant-fade-enter',
        enterActive: 'ant-fade-enter-active',
        leave: 'ant-fade-leave',
        leaveActive: 'ant-fade-leave-active'
    };
    var MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
    var NZ_CONFIG_MODULE_NAME = 'modal';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var nzModalAnimations = {
        modalContainer: animations.trigger('modalContainer', [
            animations.state('void, exit', animations.style({})),
            animations.state('enter', animations.style({})),
            animations.transition('* => enter', animations.animate('.24s', animations.style({}))),
            animations.transition('* => void, * => exit', animations.animate('.2s', animations.style({})))
        ])
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
    }
    function getValueWithConfig(userValue, configValue, defaultValue) {
        return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
    }
    /**
     * Assign the params into the content component instance.
     * @deprecated Should use dependency injection to get the params for user
     * @breaking-change 12.0.0
     */
    function setContentInstanceParams(instance, params) {
        Object.assign(instance, params);
    }
    function getConfigFromComponent(component) {
        var nzCentered = component.nzCentered, nzMask = component.nzMask, nzMaskClosable = component.nzMaskClosable, nzClosable = component.nzClosable, nzOkLoading = component.nzOkLoading, nzOkDisabled = component.nzOkDisabled, nzCancelDisabled = component.nzCancelDisabled, nzCancelLoading = component.nzCancelLoading, nzKeyboard = component.nzKeyboard, nzNoAnimation = component.nzNoAnimation, nzContent = component.nzContent, nzComponentParams = component.nzComponentParams, nzFooter = component.nzFooter, nzZIndex = component.nzZIndex, nzWidth = component.nzWidth, nzWrapClassName = component.nzWrapClassName, nzClassName = component.nzClassName, nzStyle = component.nzStyle, nzTitle = component.nzTitle, nzCloseIcon = component.nzCloseIcon, nzMaskStyle = component.nzMaskStyle, nzBodyStyle = component.nzBodyStyle, nzOkText = component.nzOkText, nzCancelText = component.nzCancelText, nzOkType = component.nzOkType, nzOkDanger = component.nzOkDanger, nzIconType = component.nzIconType, nzModalType = component.nzModalType, nzOnOk = component.nzOnOk, nzOnCancel = component.nzOnCancel, nzAfterOpen = component.nzAfterOpen, nzAfterClose = component.nzAfterClose, nzCloseOnNavigation = component.nzCloseOnNavigation, nzAutofocus = component.nzAutofocus;
        return {
            nzCentered: nzCentered,
            nzMask: nzMask,
            nzMaskClosable: nzMaskClosable,
            nzClosable: nzClosable,
            nzOkLoading: nzOkLoading,
            nzOkDisabled: nzOkDisabled,
            nzCancelDisabled: nzCancelDisabled,
            nzCancelLoading: nzCancelLoading,
            nzKeyboard: nzKeyboard,
            nzNoAnimation: nzNoAnimation,
            nzContent: nzContent,
            nzComponentParams: nzComponentParams,
            nzFooter: nzFooter,
            nzZIndex: nzZIndex,
            nzWidth: nzWidth,
            nzWrapClassName: nzWrapClassName,
            nzClassName: nzClassName,
            nzStyle: nzStyle,
            nzTitle: nzTitle,
            nzCloseIcon: nzCloseIcon,
            nzMaskStyle: nzMaskStyle,
            nzBodyStyle: nzBodyStyle,
            nzOkText: nzOkText,
            nzCancelText: nzCancelText,
            nzOkType: nzOkType,
            nzOkDanger: nzOkDanger,
            nzIconType: nzIconType,
            nzModalType: nzModalType,
            nzOnOk: nzOnOk,
            nzOnCancel: nzOnCancel,
            nzAfterOpen: nzAfterOpen,
            nzAfterClose: nzAfterClose,
            nzCloseOnNavigation: nzCloseOnNavigation,
            nzAutofocus: nzAutofocus
        };
    }

    function throwNzModalContentAlreadyAttachedError() {
        throw Error('Attempting to attach modal content after content is already attached');
    }
    var BaseModalContainerComponent = /** @class */ (function (_super) {
        __extends(BaseModalContainerComponent, _super);
        function BaseModalContainerComponent(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this) || this;
            _this.elementRef = elementRef;
            _this.focusTrapFactory = focusTrapFactory;
            _this.cdr = cdr;
            _this.render = render;
            _this.overlayRef = overlayRef;
            _this.nzConfigService = nzConfigService;
            _this.config = config;
            _this.animationType = animationType;
            _this.animationStateChanged = new core.EventEmitter();
            _this.containerClick = new core.EventEmitter();
            _this.cancelTriggered = new core.EventEmitter();
            _this.okTriggered = new core.EventEmitter();
            _this.state = 'enter';
            _this.isStringContent = false;
            _this.dir = 'ltr';
            _this.elementFocusedBeforeModalWasOpened = null;
            _this.mouseDown = false;
            _this.oldMaskStyle = null;
            _this.destroy$ = new rxjs.Subject();
            _this.document = document;
            _this.dir = overlayRef.getDirection();
            _this.isStringContent = typeof config.nzContent === 'string';
            _this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(_this.destroy$))
                .subscribe(function () {
                _this.updateMaskClassname();
            });
            return _this;
        }
        Object.defineProperty(BaseModalContainerComponent.prototype, "showMask", {
            get: function () {
                var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
                return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseModalContainerComponent.prototype, "maskClosable", {
            get: function () {
                var defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
                return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
            },
            enumerable: false,
            configurable: true
        });
        BaseModalContainerComponent.prototype.onContainerClick = function (e) {
            if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
                this.containerClick.emit();
            }
        };
        BaseModalContainerComponent.prototype.onMousedown = function () {
            this.mouseDown = true;
        };
        BaseModalContainerComponent.prototype.onMouseup = function () {
            var _this = this;
            if (this.mouseDown) {
                setTimeout(function () {
                    _this.mouseDown = false;
                });
            }
        };
        BaseModalContainerComponent.prototype.onCloseClick = function () {
            this.cancelTriggered.emit();
        };
        BaseModalContainerComponent.prototype.onOkClick = function () {
            this.okTriggered.emit();
        };
        BaseModalContainerComponent.prototype.attachComponentPortal = function (portal) {
            if (this.portalOutlet.hasAttached()) {
                throwNzModalContentAlreadyAttachedError();
            }
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
            return this.portalOutlet.attachComponentPortal(portal);
        };
        BaseModalContainerComponent.prototype.attachTemplatePortal = function (portal) {
            if (this.portalOutlet.hasAttached()) {
                throwNzModalContentAlreadyAttachedError();
            }
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
            return this.portalOutlet.attachTemplatePortal(portal);
        };
        BaseModalContainerComponent.prototype.attachStringContent = function () {
            this.savePreviouslyFocusedElement();
            this.setZIndexForBackdrop();
        };
        BaseModalContainerComponent.prototype.getNativeElement = function () {
            return this.elementRef.nativeElement;
        };
        BaseModalContainerComponent.prototype.animationDisabled = function () {
            return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
        };
        BaseModalContainerComponent.prototype.setModalTransformOrigin = function () {
            var modalElement = this.modalElementRef.nativeElement;
            if (this.elementFocusedBeforeModalWasOpened) {
                var previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
                var lastPosition = util.getElementOffset(this.elementFocusedBeforeModalWasOpened);
                var x = lastPosition.left + previouslyDOMRect.width / 2;
                var y = lastPosition.top + previouslyDOMRect.height / 2;
                var transformOrigin = x - modalElement.offsetLeft + "px " + (y - modalElement.offsetTop) + "px 0px";
                this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
            }
        };
        BaseModalContainerComponent.prototype.savePreviouslyFocusedElement = function () {
            var _this = this;
            if (!this.focusTrap) {
                this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
            }
            if (this.document) {
                this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
                if (this.elementRef.nativeElement.focus) {
                    Promise.resolve().then(function () { return _this.elementRef.nativeElement.focus(); });
                }
            }
        };
        BaseModalContainerComponent.prototype.trapFocus = function () {
            var element = this.elementRef.nativeElement;
            if (this.config.nzAutofocus) {
                this.focusTrap.focusInitialElementWhenReady().then();
            }
            else {
                var activeElement = this.document.activeElement;
                if (activeElement !== element && !element.contains(activeElement)) {
                    element.focus();
                }
            }
        };
        BaseModalContainerComponent.prototype.restoreFocus = function () {
            var toFocus = this.elementFocusedBeforeModalWasOpened;
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (toFocus && typeof toFocus.focus === 'function') {
                var activeElement = this.document.activeElement;
                var element = this.elementRef.nativeElement;
                if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                    toFocus.focus();
                }
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
        };
        BaseModalContainerComponent.prototype.setEnterAnimationClass = function () {
            if (this.animationDisabled()) {
                return;
            }
            // Make sure to set the `TransformOrigin` style before set the modelElement's class names
            this.setModalTransformOrigin();
            var modalElement = this.modalElementRef.nativeElement;
            var backdropElement = this.overlayRef.backdropElement;
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
            if (backdropElement) {
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
            }
        };
        BaseModalContainerComponent.prototype.setExitAnimationClass = function () {
            var modalElement = this.modalElementRef.nativeElement;
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
            modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
            this.setMaskExitAnimationClass();
        };
        BaseModalContainerComponent.prototype.setMaskExitAnimationClass = function (force) {
            if (force === void 0) { force = false; }
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.animationDisabled() || force) {
                    // https://github.com/angular/components/issues/18645
                    backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                    return;
                }
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
                backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
            }
        };
        BaseModalContainerComponent.prototype.cleanAnimationClass = function () {
            if (this.animationDisabled()) {
                return;
            }
            var backdropElement = this.overlayRef.backdropElement;
            var modalElement = this.modalElementRef.nativeElement;
            if (backdropElement) {
                backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
                backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
            }
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
            modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
        };
        BaseModalContainerComponent.prototype.setZIndexForBackdrop = function () {
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (util.isNotNil(this.config.nzZIndex)) {
                    this.render.setStyle(backdropElement, 'z-index', this.config.nzZIndex);
                }
            }
        };
        BaseModalContainerComponent.prototype.bindBackdropStyle = function () {
            var _this = this;
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.oldMaskStyle) {
                    var styles = this.oldMaskStyle;
                    Object.keys(styles).forEach(function (key) {
                        _this.render.removeStyle(backdropElement, key);
                    });
                    this.oldMaskStyle = null;
                }
                this.setZIndexForBackdrop();
                if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                    var styles_1 = Object.assign({}, this.config.nzMaskStyle);
                    Object.keys(styles_1).forEach(function (key) {
                        _this.render.setStyle(backdropElement, key, styles_1[key]);
                    });
                    this.oldMaskStyle = styles_1;
                }
            }
        };
        BaseModalContainerComponent.prototype.updateMaskClassname = function () {
            var backdropElement = this.overlayRef.backdropElement;
            if (backdropElement) {
                if (this.showMask) {
                    backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
                }
                else {
                    backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                }
            }
        };
        BaseModalContainerComponent.prototype.onAnimationDone = function (event) {
            if (event.toState === 'enter') {
                this.trapFocus();
            }
            else if (event.toState === 'exit') {
                this.restoreFocus();
            }
            this.cleanAnimationClass();
            this.animationStateChanged.emit(event);
        };
        BaseModalContainerComponent.prototype.onAnimationStart = function (event) {
            if (event.toState === 'enter') {
                this.setEnterAnimationClass();
                this.bindBackdropStyle();
            }
            else if (event.toState === 'exit') {
                this.setExitAnimationClass();
            }
            this.animationStateChanged.emit(event);
        };
        BaseModalContainerComponent.prototype.startExitAnimation = function () {
            this.state = 'exit';
            this.cdr.markForCheck();
        };
        BaseModalContainerComponent.prototype.ngOnDestroy = function () {
            this.setMaskExitAnimationClass(true);
            this.destroy$.next();
            this.destroy$.complete();
        };
BaseModalContainerComponent.ɵfac = function BaseModalContainerComponent_Factory(t) { return new (t || BaseModalContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ModalOptions), ɵngcc0.ɵɵdirectiveInject(undefined), ɵngcc0.ɵɵdirectiveInject(String)); };
BaseModalContainerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BaseModalContainerComponent, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseModalContainerComponent, [{
        type: core.Directive
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.OverlayRef }, { type: ɵngcc3.NzConfigService }, { type: ModalOptions }, { type: undefined }, { type: String }]; }, null); })();
        return BaseModalContainerComponent;
    }(portal.BasePortalOutlet));
    BaseModalContainerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined },
        { type: String }
    ]; };

    var NzModalConfirmContainerComponent = /** @class */ (function (_super) {
        __extends(NzModalConfirmContainerComponent, _super);
        function NzModalConfirmContainerComponent(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
            _this.i18n = i18n;
            _this.config = config;
            _this.cancelTriggered = new core.EventEmitter();
            _this.okTriggered = new core.EventEmitter();
            _this.i18n.localeChange.pipe(operators.takeUntil(_this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            });
            return _this;
        }
        NzModalConfirmContainerComponent.prototype.onCancel = function () {
            this.cancelTriggered.emit();
        };
        NzModalConfirmContainerComponent.prototype.onOk = function () {
            this.okTriggered.emit();
        };
NzModalConfirmContainerComponent.ɵfac = function NzModalConfirmContainerComponent_Factory(t) { return new (t || NzModalConfirmContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ModalOptions), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(animations$1.ANIMATION_MODULE_TYPE, 8)); };
NzModalConfirmContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalConfirmContainerComponent, selectors: [["nz-modal-confirm-container"]], viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(portal.CdkPortalOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 10, hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵsyntheticHostListener("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); })("mouseup", function NzModalConfirmContainerComponent_mouseup_HostBindingHandler() { return ctx.onMouseup(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        ɵngcc0.ɵɵclassMap(ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        ɵngcc0.ɵɵstyleProp("z-index", ctx.config.nzZIndex);
        ɵngcc0.ɵɵclassProp("ant-modal-wrap-rtl", ctx.dir === "rtl")("ant-modal-centered", ctx.config.nzCentered);
    } }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["nzModalConfirmContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 17, vars: 13, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle", "mousedown"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "nzDanger", "click", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "nzDanger", "click"]], template: function NzModalConfirmContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mousedown", function NzModalConfirmContainerComponent_Template_div_mousedown_0_listener() { return ctx.onMousedown(); });
        ɵngcc0.ɵɵpipe(2, "nzToCssUnit");
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzModalConfirmContainerComponent_button_4_Template, 1, 0, "button", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelement(8, "i", 7);
        ɵngcc0.ɵɵelementStart(9, "span", 8);
        ɵngcc0.ɵɵtemplate(10, NzModalConfirmContainerComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵtemplate(12, NzModalConfirmContainerComponent_ng_template_12_Template, 0, 0, "ng-template", 11);
        ɵngcc0.ɵɵtemplate(13, NzModalConfirmContainerComponent_div_13_Template, 1, 1, "div", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 13);
        ɵngcc0.ɵɵtemplate(15, NzModalConfirmContainerComponent_button_15_Template, 2, 4, "button", 14);
        ɵngcc0.ɵɵtemplate(16, NzModalConfirmContainerComponent_button_16_Template, 2, 6, "button", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ɵngcc0.ɵɵpipeBind1(2, 11, ctx.config == null ? null : ctx.config.nzWidth));
        ɵngcc0.ɵɵproperty("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzClosable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.config.nzBodyStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("nzType", ctx.config.nzIconType);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isStringContent);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzCancelText !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzOkText !== null);
    } }, directives: function () { return [ɵngcc5.NgClass, ɵngcc5.NgStyle, ɵngcc5.NgIf, ɵngcc6.ɵNzTransitionPatchDirective, ɵngcc7.NzIconDirective, ɵngcc8.NzStringTemplateOutletDirective, ɵngcc9.CdkPortalOutlet, NzModalCloseComponent, ɵngcc10.NzButtonComponent, ɵngcc11.NzWaveDirective]; }, pipes: function () { return [ɵngcc12.NzToCssUnitPipe]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalConfirmContainerComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-modal-confirm-container',
                exportAs: 'nzModalConfirmContainer',
                template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <div class=\"ant-modal-confirm-body-wrapper\">\n            <div class=\"ant-modal-confirm-body\">\n              <i nz-icon [nzType]=\"config.nzIconType!\"></i>\n              <span class=\"ant-modal-confirm-title\">\n                <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n                  <span [innerHTML]=\"config.nzTitle\"></span>\n                </ng-container>\n              </span>\n              <div class=\"ant-modal-confirm-content\">\n                <ng-template cdkPortalOutlet></ng-template>\n                <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n              </div>\n            </div>\n            <div class=\"ant-modal-confirm-btns\">\n              <button\n                *ngIf=\"config.nzCancelText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n                nz-button\n                (click)=\"onCancel()\"\n                [nzLoading]=\"!!config.nzCancelLoading\"\n                [disabled]=\"config.nzCancelDisabled\"\n              >\n                {{ config.nzCancelText || locale.cancelText }}\n              </button>\n              <button\n                *ngIf=\"config.nzOkText !== null\"\n                [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n                nz-button\n                [nzType]=\"config.nzOkType!\"\n                (click)=\"onOk()\"\n                [nzLoading]=\"!!config.nzOkLoading\"\n                [disabled]=\"config.nzOkDisabled\"\n                [nzDanger]=\"config.nzOkDanger\"\n              >\n                {{ config.nzOkText || locale.okText }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: core.ChangeDetectionStrategy.Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[class.ant-modal-wrap-rtl]': "dir === 'rtl'",
                    '[class.ant-modal-centered]': 'config.nzCentered',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            }]
    }], function () { return [{ type: ɵngcc4.NzI18nService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.OverlayRef }, { type: ɵngcc3.NzConfigService }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations$1.ANIMATION_MODULE_TYPE]
            }] }]; }, { portalOutlet: [{
            type: core.ViewChild,
            args: [portal.CdkPortalOutlet, { static: true }]
        }], modalElementRef: [{
            type: core.ViewChild,
            args: ['modalElement', { static: true }]
        }], cancelTriggered: [{
            type: core.Output
        }], okTriggered: [{
            type: core.Output
        }] }); })();
        return NzModalConfirmContainerComponent;
    }(BaseModalContainerComponent));
    NzModalConfirmContainerComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations$1.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzModalConfirmContainerComponent.propDecorators = {
        portalOutlet: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: core.ViewChild, args: ['modalElement', { static: true },] }],
        cancelTriggered: [{ type: core.Output }],
        okTriggered: [{ type: core.Output }]
    };

    var NzModalContainerComponent = /** @class */ (function (_super) {
        __extends(NzModalContainerComponent, _super);
        function NzModalContainerComponent(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
            var _this = _super.call(this, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) || this;
            _this.config = config;
            return _this;
        }
NzModalContainerComponent.ɵfac = function NzModalContainerComponent_Factory(t) { return new (t || NzModalContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ModalOptions), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(animations$1.ANIMATION_MODULE_TYPE, 8)); };
NzModalContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalContainerComponent, selectors: [["nz-modal-container"]], viewQuery: function NzModalContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(portal.CdkPortalOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 10, hostBindings: function NzModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵsyntheticHostListener("@modalContainer.start", function NzModalContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        ɵngcc0.ɵɵlistener("click", function NzModalContainerComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); })("mouseup", function NzModalContainerComponent_mouseup_HostBindingHandler() { return ctx.onMouseup(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        ɵngcc0.ɵɵclassMap(ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        ɵngcc0.ɵɵstyleProp("z-index", ctx.config.nzZIndex);
        ɵngcc0.ɵɵclassProp("ant-modal-wrap-rtl", ctx.dir === "rtl")("ant-modal-centered", ctx.config.nzCentered);
    } }, exportAs: ["nzModalContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 11, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle", "mousedown"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], ["nz-modal-title", "", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], ["nz-modal-title", ""], [3, "innerHTML"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function NzModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mousedown", function NzModalContainerComponent_Template_div_mousedown_0_listener() { return ctx.onMousedown(); });
        ɵngcc0.ɵɵpipe(2, "nzToCssUnit");
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzModalContainerComponent_button_4_Template, 1, 0, "button", 3);
        ɵngcc0.ɵɵtemplate(5, NzModalContainerComponent_div_5_Template, 1, 0, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵtemplate(7, NzModalContainerComponent_ng_template_7_Template, 0, 0, "ng-template", 6);
        ɵngcc0.ɵɵtemplate(8, NzModalContainerComponent_div_8_Template, 1, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, NzModalContainerComponent_div_9_Template, 1, 1, "div", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ɵngcc0.ɵɵpipeBind1(2, 9, ctx.config == null ? null : ctx.config.nzWidth));
        ɵngcc0.ɵɵproperty("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzClosable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.config.nzBodyStyle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isStringContent);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzFooter !== null);
    } }, directives: function () { return [ɵngcc5.NgClass, ɵngcc5.NgStyle, ɵngcc5.NgIf, ɵngcc9.CdkPortalOutlet, NzModalCloseComponent, NzModalTitleComponent, NzModalFooterComponent]; }, pipes: function () { return [ɵngcc12.NzToCssUnitPipe]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalContainerComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-modal-container',
                exportAs: 'nzModalContainer',
                template: "\n    <div\n      #modalElement\n      role=\"document\"\n      class=\"ant-modal\"\n      (mousedown)=\"onMousedown()\"\n      [ngClass]=\"config.nzClassName!\"\n      [ngStyle]=\"config.nzStyle!\"\n      [style.width]=\"config?.nzWidth! | nzToCssUnit\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"config.nzClosable\" nz-modal-close (click)=\"onCloseClick()\"></button>\n        <div *ngIf=\"config.nzTitle\" nz-modal-title></div>\n        <div class=\"ant-modal-body\" [ngStyle]=\"config.nzBodyStyle!\">\n          <ng-template cdkPortalOutlet></ng-template>\n          <div *ngIf=\"isStringContent\" [innerHTML]=\"config.nzContent\"></div>\n        </div>\n        <div\n          *ngIf=\"config.nzFooter !== null\"\n          nz-modal-footer\n          [modalRef]=\"modalRef\"\n          (cancelTriggered)=\"onCloseClick()\"\n          (okTriggered)=\"onOkClick()\"\n        ></div>\n      </div>\n    </div>\n  ",
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: core.ChangeDetectionStrategy.Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[class.ant-modal-wrap-rtl]': "dir === 'rtl'",
                    '[class.ant-modal-centered]': 'config.nzCentered',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusTrapFactory }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.OverlayRef }, { type: ɵngcc3.NzConfigService }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [animations$1.ANIMATION_MODULE_TYPE]
            }] }]; }, { portalOutlet: [{
            type: core.ViewChild,
            args: [portal.CdkPortalOutlet, { static: true }]
        }], modalElementRef: [{
            type: core.ViewChild,
            args: ['modalElement', { static: true }]
        }] }); })();
        return NzModalContainerComponent;
    }(BaseModalContainerComponent));
    NzModalContainerComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: overlay.OverlayRef },
        { type: config.NzConfigService },
        { type: ModalOptions },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations$1.ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzModalContainerComponent.propDecorators = {
        portalOutlet: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: true },] }],
        modalElementRef: [{ type: core.ViewChild, args: ['modalElement', { static: true },] }]
    };

    var NzModalRef = /** @class */ (function () {
        function NzModalRef(overlayRef, config, containerInstance) {
            var _this = this;
            this.overlayRef = overlayRef;
            this.config = config;
            this.containerInstance = containerInstance;
            this.componentInstance = null;
            this.state = 0 /* OPEN */;
            this.afterClose = new rxjs.Subject();
            this.afterOpen = new rxjs.Subject();
            containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'enter'; }), operators.take(1))
                .subscribe(function () {
                _this.afterOpen.next();
                _this.afterOpen.complete();
                if (config.nzAfterOpen instanceof core.EventEmitter) {
                    config.nzAfterOpen.emit();
                }
            });
            containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'done' && event.toState === 'exit'; }), operators.take(1))
                .subscribe(function () {
                clearTimeout(_this.closeTimeout);
                _this._finishDialogClose();
            });
            containerInstance.containerClick.pipe(operators.take(1)).subscribe(function () {
                var cancelable = !_this.config.nzCancelLoading && !_this.config.nzOkLoading;
                if (cancelable) {
                    _this.trigger("cancel" /* CANCEL */);
                }
            });
            overlayRef
                .keydownEvents()
                .pipe(operators.filter(function (event) {
                return (_this.config.nzKeyboard &&
                    !_this.config.nzCancelLoading &&
                    !_this.config.nzOkLoading &&
                    event.keyCode === keycodes.ESCAPE &&
                    !keycodes.hasModifierKey(event));
            }))
                .subscribe(function (event) {
                event.preventDefault();
                _this.trigger("cancel" /* CANCEL */);
            });
            containerInstance.cancelTriggered.subscribe(function () { return _this.trigger("cancel" /* CANCEL */); });
            containerInstance.okTriggered.subscribe(function () { return _this.trigger("ok" /* OK */); });
            overlayRef.detachments().subscribe(function () {
                _this.afterClose.next(_this.result);
                _this.afterClose.complete();
                if (config.nzAfterClose instanceof core.EventEmitter) {
                    config.nzAfterClose.emit(_this.result);
                }
                _this.componentInstance = null;
                _this.overlayRef.dispose();
            });
        }
        NzModalRef.prototype.getContentComponent = function () {
            return this.componentInstance;
        };
        NzModalRef.prototype.getElement = function () {
            return this.containerInstance.getNativeElement();
        };
        NzModalRef.prototype.destroy = function (result) {
            this.close(result);
        };
        NzModalRef.prototype.triggerOk = function () {
            return this.trigger("ok" /* OK */);
        };
        NzModalRef.prototype.triggerCancel = function () {
            return this.trigger("cancel" /* CANCEL */);
        };
        NzModalRef.prototype.close = function (result) {
            var _this = this;
            if (this.state !== 0 /* OPEN */) {
                return;
            }
            this.result = result;
            this.containerInstance.animationStateChanged
                .pipe(operators.filter(function (event) { return event.phaseName === 'start'; }), operators.take(1))
                .subscribe(function (event) {
                _this.overlayRef.detachBackdrop();
                _this.closeTimeout = setTimeout(function () {
                    _this._finishDialogClose();
                }, event.totalTime + 100);
            });
            this.containerInstance.startExitAnimation();
            this.state = 1 /* CLOSING */;
        };
        NzModalRef.prototype.updateConfig = function (config) {
            Object.assign(this.config, config);
            this.containerInstance.bindBackdropStyle();
            this.containerInstance.cdr.markForCheck();
        };
        NzModalRef.prototype.getState = function () {
            return this.state;
        };
        NzModalRef.prototype.getConfig = function () {
            return this.config;
        };
        NzModalRef.prototype.getBackdropElement = function () {
            return this.overlayRef.backdropElement;
        };
        NzModalRef.prototype.trigger = function (action) {
            return __awaiter(this, void 0, void 0, function () {
                var trigger, loadingKey, loading, result, doClose;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
                            loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action];
                            loading = this.config[loadingKey];
                            if (loading) {
                                return [2 /*return*/];
                            }
                            if (!(trigger instanceof core.EventEmitter)) return [3 /*break*/, 1];
                            trigger.emit(this.getContentComponent());
                            return [3 /*break*/, 7];
                        case 1:
                            if (!(typeof trigger === 'function')) return [3 /*break*/, 7];
                            result = trigger(this.getContentComponent());
                            if (!util.isPromise(result)) return [3 /*break*/, 6];
                            this.config[loadingKey] = true;
                            doClose = false;
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, , 4, 5]);
                            return [4 /*yield*/, result];
                        case 3:
                            doClose = _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            this.config[loadingKey] = false;
                            this.closeWhitResult(doClose);
                            return [7 /*endfinally*/];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            this.closeWhitResult(result);
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        NzModalRef.prototype.closeWhitResult = function (result) {
            if (result !== false) {
                this.close(result);
            }
        };
        NzModalRef.prototype._finishDialogClose = function () {
            this.state = 2 /* CLOSED */;
            this.overlayRef.dispose();
        };
        return NzModalRef;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalService = /** @class */ (function () {
        function NzModalService(overlay, injector, nzConfigService, parentModal, directionality) {
            var _this = this;
            this.overlay = overlay;
            this.injector = injector;
            this.nzConfigService = nzConfigService;
            this.parentModal = parentModal;
            this.directionality = directionality;
            this.openModalsAtThisLevel = [];
            this.afterAllClosedAtThisLevel = new rxjs.Subject();
            this.afterAllClose = rxjs.defer(function () { return _this.openModals.length ? _this._afterAllClosed : _this._afterAllClosed.pipe(operators.startWith(undefined)); });
        }
        Object.defineProperty(NzModalService.prototype, "openModals", {
            get: function () {
                return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalService.prototype, "_afterAllClosed", {
            get: function () {
                var parent = this.parentModal;
                return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
            },
            enumerable: false,
            configurable: true
        });
        NzModalService.prototype.create = function (config) {
            return this.open(config.nzContent, config);
        };
        NzModalService.prototype.closeAll = function () {
            this.closeModals(this.openModals);
        };
        NzModalService.prototype.confirm = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            if (confirmType === void 0) { confirmType = 'confirm'; }
            if ('nzFooter' in options) {
                logger.warn("The Confirm-Modal doesn't support \"nzFooter\", this property will be ignored.");
            }
            if (!('nzWidth' in options)) {
                options.nzWidth = 416;
            }
            if (!('nzMaskClosable' in options)) {
                options.nzMaskClosable = false;
            }
            options.nzModalType = 'confirm';
            options.nzClassName = "ant-modal-confirm ant-modal-confirm-" + confirmType + " " + (options.nzClassName || '');
            return this.create(options);
        };
        NzModalService.prototype.info = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'info');
        };
        NzModalService.prototype.success = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'success');
        };
        NzModalService.prototype.error = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'error');
        };
        NzModalService.prototype.warning = function (options) {
            if (options === void 0) { options = {}; }
            return this.confirmFactory(options, 'warning');
        };
        NzModalService.prototype.open = function (componentOrTemplateRef, config) {
            var _this = this;
            var configMerged = applyConfigDefaults(config || {}, new ModalOptions());
            var overlayRef = this.createOverlay(configMerged);
            var modalContainer = this.attachModalContainer(overlayRef, configMerged);
            var modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
            modalContainer.modalRef = modalRef;
            this.openModals.push(modalRef);
            modalRef.afterClose.subscribe(function () { return _this.removeOpenModal(modalRef); });
            return modalRef;
        };
        NzModalService.prototype.removeOpenModal = function (modalRef) {
            var index = this.openModals.indexOf(modalRef);
            if (index > -1) {
                this.openModals.splice(index, 1);
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        NzModalService.prototype.closeModals = function (dialogs) {
            var i = dialogs.length;
            while (i--) {
                dialogs[i].close();
                if (!this.openModals.length) {
                    this._afterAllClosed.next();
                }
            }
        };
        NzModalService.prototype.createOverlay = function (config) {
            var globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
            var overlayConfig = new overlay.OverlayConfig({
                hasBackdrop: true,
                scrollStrategy: this.overlay.scrollStrategies.block(),
                positionStrategy: this.overlay.position().global(),
                disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true),
                direction: getValueWithConfig(config.nzDirection, globalConfig.nzDirection, this.directionality.value)
            });
            if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
                overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
            }
            return this.overlay.create(overlayConfig);
        };
        NzModalService.prototype.attachModalContainer = function (overlayRef, config) {
            var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
            var injector = core.Injector.create({
                parent: userInjector || this.injector,
                providers: [
                    { provide: overlay.OverlayRef, useValue: overlayRef },
                    { provide: ModalOptions, useValue: config }
                ]
            });
            var ContainerComponent = config.nzModalType === 'confirm'
                ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                    NzModalConfirmContainerComponent
                : // If the mode is not `confirm`, use `NzModalContainerComponent`
                    NzModalContainerComponent;
            var containerPortal = new portal.ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
            var containerRef = overlayRef.attach(containerPortal);
            return containerRef.instance;
        };
        NzModalService.prototype.attachModalContent = function (componentOrTemplateRef, modalContainer, overlayRef, config) {
            var modalRef = new NzModalRef(overlayRef, config, modalContainer);
            if (componentOrTemplateRef instanceof core.TemplateRef) {
                modalContainer.attachTemplatePortal(new portal.TemplatePortal(componentOrTemplateRef, null, { $implicit: config.nzComponentParams, modalRef: modalRef }));
            }
            else if (util.isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
                var injector = this.createInjector(modalRef, config);
                var contentRef = modalContainer.attachComponentPortal(new portal.ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
                setContentInstanceParams(contentRef.instance, config.nzComponentParams);
                modalRef.componentInstance = contentRef.instance;
            }
            else {
                modalContainer.attachStringContent();
            }
            return modalRef;
        };
        NzModalService.prototype.createInjector = function (modalRef, config) {
            var userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
            return core.Injector.create({
                parent: userInjector || this.injector,
                providers: [{ provide: NzModalRef, useValue: modalRef }]
            });
        };
        NzModalService.prototype.confirmFactory = function (options, confirmType) {
            if (options === void 0) { options = {}; }
            var iconMap = {
                info: 'info-circle',
                success: 'check-circle',
                error: 'close-circle',
                warning: 'exclamation-circle'
            };
            if (!('nzIconType' in options)) {
                options.nzIconType = iconMap[confirmType];
            }
            if (!('nzCancelText' in options)) {
                // Remove the Cancel button if the user not specify a Cancel button
                options.nzCancelText = null;
            }
            return this.confirm(options, confirmType);
        };
        NzModalService.prototype.ngOnDestroy = function () {
            this.closeModals(this.openModalsAtThisLevel);
            this.afterAllClosedAtThisLevel.complete();
        };
NzModalService.ɵfac = function NzModalService_Factory(t) { return new (t || NzModalService)(ɵngcc0.ɵɵinject(ɵngcc2.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc3.NzConfigService), ɵngcc0.ɵɵinject(NzModalService, 12), ɵngcc0.ɵɵinject(ɵngcc13.Directionality, 8)); };
NzModalService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzModalService, factory: function (t) { return NzModalService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalService, [{
        type: core.Injectable
    }], function () { return [{ type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc3.NzConfigService }, { type: NzModalService, decorators: [{
                type: core.Optional
            }, {
                type: core.SkipSelf
            }] }, { type: ɵngcc13.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, null); })();
        return NzModalService;
    }());
    NzModalService.ctorParameters = function () { return [
        { type: overlay.Overlay },
        { type: core.Injector },
        { type: config.NzConfigService },
        { type: NzModalService, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalContentDirective = /** @class */ (function () {
        function NzModalContentDirective(templateRef) {
            this.templateRef = templateRef;
        }
NzModalContentDirective.ɵfac = function NzModalContentDirective_Factory(t) { return new (t || NzModalContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzModalContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzModalContentDirective, selectors: [["", "nzModalContent", ""]], exportAs: ["nzModalContent"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalContentDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzModalContent]',
                exportAs: 'nzModalContent'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
        return NzModalContentDirective;
    }());
    NzModalContentDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalFooterDirective = /** @class */ (function () {
        function NzModalFooterDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.updateConfig({
                    nzFooter: this.templateRef
                });
            }
        }
NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(ɵngcc0.ɵɵdirectiveInject(NzModalRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzModalFooterDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalFooterDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: NzModalRef, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.TemplateRef }]; }, null); })();
        return NzModalFooterDirective;
    }());
    NzModalFooterDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: core.Optional }] },
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalTitleDirective = /** @class */ (function () {
        function NzModalTitleDirective(nzModalRef, templateRef) {
            this.nzModalRef = nzModalRef;
            this.templateRef = templateRef;
            if (this.nzModalRef) {
                this.nzModalRef.updateConfig({
                    nzTitle: this.templateRef
                });
            }
        }
NzModalTitleDirective.ɵfac = function NzModalTitleDirective_Factory(t) { return new (t || NzModalTitleDirective)(ɵngcc0.ɵɵdirectiveInject(NzModalRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzModalTitleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzModalTitleDirective, selectors: [["", "nzModalTitle", ""]], exportAs: ["nzModalTitle"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalTitleDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzModalTitle]',
                exportAs: 'nzModalTitle'
            }]
    }], function () { return [{ type: NzModalRef, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.TemplateRef }]; }, null); })();
        return NzModalTitleDirective;
    }());
    NzModalTitleDirective.ctorParameters = function () { return [
        { type: NzModalRef, decorators: [{ type: core.Optional }] },
        { type: core.TemplateRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalComponent = /** @class */ (function () {
        function NzModalComponent(cdr, modal, viewContainerRef) {
            this.cdr = cdr;
            this.modal = modal;
            this.viewContainerRef = viewContainerRef;
            this.nzVisible = false;
            this.nzClosable = true;
            this.nzOkLoading = false;
            this.nzOkDisabled = false;
            this.nzCancelDisabled = false;
            this.nzCancelLoading = false;
            this.nzKeyboard = true;
            this.nzNoAnimation = false;
            this.nzCentered = false;
            this.nzZIndex = 1000;
            this.nzWidth = 520;
            this.nzCloseIcon = 'close';
            this.nzOkType = 'primary';
            this.nzOkDanger = false;
            this.nzIconType = 'question-circle'; // Confirm Modal ONLY
            this.nzModalType = 'default';
            this.nzAutofocus = 'auto';
            // TODO(@hsuanxyz) Input will not be supported
            this.nzOnOk = new core.EventEmitter();
            // TODO(@hsuanxyz) Input will not be supported
            this.nzOnCancel = new core.EventEmitter();
            this.nzAfterOpen = new core.EventEmitter();
            this.nzAfterClose = new core.EventEmitter();
            this.nzVisibleChange = new core.EventEmitter();
            this.modalRef = null;
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(NzModalComponent.prototype, "modalTitle", {
            set: function (value) {
                if (value) {
                    this.setTitleWithTemplate(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "modalFooter", {
            set: function (value) {
                if (value) {
                    this.setFooterWithTemplate(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterOpen", {
            get: function () {
                // Observable alias for nzAfterOpen
                return this.nzAfterOpen.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzModalComponent.prototype, "afterClose", {
            get: function () {
                // Observable alias for nzAfterClose
                return this.nzAfterClose.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        NzModalComponent.prototype.open = function () {
            var _this = this;
            if (!this.nzVisible) {
                this.nzVisible = true;
                this.nzVisibleChange.emit(true);
            }
            if (!this.modalRef) {
                var config = this.getConfig();
                this.modalRef = this.modal.create(config);
                // When the modal is implicitly closed (e.g. closeAll) the nzVisible needs to be set to the correct value and emit.
                this.modalRef.afterClose
                    .asObservable()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.close();
                });
            }
        };
        NzModalComponent.prototype.close = function (result) {
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(false);
            }
            if (this.modalRef) {
                this.modalRef.close(result);
                this.modalRef = null;
            }
        };
        NzModalComponent.prototype.destroy = function (result) {
            this.close(result);
        };
        NzModalComponent.prototype.triggerOk = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
        };
        NzModalComponent.prototype.triggerCancel = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
        };
        NzModalComponent.prototype.getContentComponent = function () {
            var _a;
            return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
        };
        NzModalComponent.prototype.getElement = function () {
            var _a;
            return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
        };
        NzModalComponent.prototype.getModalRef = function () {
            return this.modalRef;
        };
        NzModalComponent.prototype.setTitleWithTemplate = function (templateRef) {
            var _this = this;
            this.nzTitle = templateRef;
            if (this.modalRef) {
                // If modalRef already created, set the title in next tick
                Promise.resolve().then(function () {
                    _this.modalRef.updateConfig({
                        nzTitle: _this.nzTitle
                    });
                });
            }
        };
        NzModalComponent.prototype.setFooterWithTemplate = function (templateRef) {
            var _this = this;
            this.nzFooter = templateRef;
            if (this.modalRef) {
                // If modalRef already created, set the footer in next tick
                Promise.resolve().then(function () {
                    _this.modalRef.updateConfig({
                        nzFooter: _this.nzFooter
                    });
                });
            }
            this.cdr.markForCheck();
        };
        NzModalComponent.prototype.getConfig = function () {
            var componentConfig = getConfigFromComponent(this);
            componentConfig.nzViewContainerRef = this.viewContainerRef;
            if (!this.nzContent && !this.contentFromContentChild) {
                componentConfig.nzContent = this.contentTemplateRef;
                logger.warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzModalContent></ng-template>` to declare the content of the modal.');
            }
            else {
                componentConfig.nzContent = this.nzContent || this.contentFromContentChild;
            }
            return componentConfig;
        };
        NzModalComponent.prototype.ngOnChanges = function (changes) {
            var nzVisible = changes.nzVisible, otherChanges = __rest(changes, ["nzVisible"]);
            if (Object.keys(otherChanges).length && this.modalRef) {
                this.modalRef.updateConfig(getConfigFromComponent(this));
            }
            if (nzVisible) {
                if (this.nzVisible) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
        };
        NzModalComponent.prototype.ngOnDestroy = function () {
            var _a;
            (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
            this.destroy$.next();
            this.destroy$.complete();
        };
NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzModalService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalTitleDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalFooterDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalContentDirective, true, core.TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalTitle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
    } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplateRef = _t.first);
    } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzCentered: "nzCentered", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzCloseIcon: "nzCloseIcon", nzOkType: "nzOkType", nzOkDanger: "nzOkDanger", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAutofocus: "nzAutofocus", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzTitle: "nzTitle", nzFooter: "nzFooter", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzCloseOnNavigation: "nzCloseOnNavigation", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: NzModalService }, { type: ɵngcc0.ViewContainerRef }]; }, { nzVisible: [{
            type: core.Input
        }], nzClosable: [{
            type: core.Input
        }], nzOkLoading: [{
            type: core.Input
        }], nzOkDisabled: [{
            type: core.Input
        }], nzCancelDisabled: [{
            type: core.Input
        }], nzCancelLoading: [{
            type: core.Input
        }], nzKeyboard: [{
            type: core.Input
        }], nzNoAnimation: [{
            type: core.Input
        }], nzCentered: [{
            type: core.Input
        }], nzZIndex: [{
            type: core.Input
        }], nzWidth: [{
            type: core.Input
        }], nzCloseIcon: [{
            type: core.Input
        }], nzOkType: [{
            type: core.Input
        }], nzOkDanger: [{
            type: core.Input
        }], nzIconType: [{
            type: core.Input
        }], nzModalType: [{
            type: core.Input
        }], nzAutofocus: [{
            type: core.Input
        }], nzOnOk: [{
            type: core.Input
        }, {
            type: core.Output
        }], nzOnCancel: [{
            type: core.Input
        }, {
            type: core.Output
        }], nzAfterOpen: [{
            type: core.Output
        }], nzAfterClose: [{
            type: core.Output
        }], nzVisibleChange: [{
            type: core.Output
        }], modalTitle: [{
            type: core.ContentChild,
            args: [NzModalTitleDirective, { static: true, read: core.TemplateRef }]
        }], modalFooter: [{
            type: core.ContentChild,
            args: [NzModalFooterDirective, { static: true, read: core.TemplateRef }]
        }], nzTitle: [{
            type: core.Input
        }], nzFooter: [{
            type: core.Input
        }], nzMask: [{
            type: core.Input
        }], nzMaskClosable: [{
            type: core.Input
        }], nzCloseOnNavigation: [{
            type: core.Input
        }], nzContent: [{
            type: core.Input
        }], nzComponentParams: [{
            type: core.Input
        }], nzWrapClassName: [{
            type: core.Input
        }], nzClassName: [{
            type: core.Input
        }], nzStyle: [{
            type: core.Input
        }], nzMaskStyle: [{
            type: core.Input
        }], nzBodyStyle: [{
            type: core.Input
        }], nzOkText: [{
            type: core.Input
        }], nzCancelText: [{
            type: core.Input
        }], contentTemplateRef: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: true }]
        }], contentFromContentChild: [{
            type: core.ContentChild,
            args: [NzModalContentDirective, { static: true, read: core.TemplateRef }]
        }] }); })();
        return NzModalComponent;
    }());
    NzModalComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: NzModalService },
        { type: core.ViewContainerRef }
    ]; };
    NzModalComponent.propDecorators = {
        nzMask: [{ type: core.Input }],
        nzMaskClosable: [{ type: core.Input }],
        nzCloseOnNavigation: [{ type: core.Input }],
        nzVisible: [{ type: core.Input }],
        nzClosable: [{ type: core.Input }],
        nzOkLoading: [{ type: core.Input }],
        nzOkDisabled: [{ type: core.Input }],
        nzCancelDisabled: [{ type: core.Input }],
        nzCancelLoading: [{ type: core.Input }],
        nzKeyboard: [{ type: core.Input }],
        nzNoAnimation: [{ type: core.Input }],
        nzCentered: [{ type: core.Input }],
        nzContent: [{ type: core.Input }],
        nzComponentParams: [{ type: core.Input }],
        nzFooter: [{ type: core.Input }],
        nzZIndex: [{ type: core.Input }],
        nzWidth: [{ type: core.Input }],
        nzWrapClassName: [{ type: core.Input }],
        nzClassName: [{ type: core.Input }],
        nzStyle: [{ type: core.Input }],
        nzTitle: [{ type: core.Input }],
        nzCloseIcon: [{ type: core.Input }],
        nzMaskStyle: [{ type: core.Input }],
        nzBodyStyle: [{ type: core.Input }],
        nzOkText: [{ type: core.Input }],
        nzCancelText: [{ type: core.Input }],
        nzOkType: [{ type: core.Input }],
        nzOkDanger: [{ type: core.Input }],
        nzIconType: [{ type: core.Input }],
        nzModalType: [{ type: core.Input }],
        nzAutofocus: [{ type: core.Input }],
        nzOnOk: [{ type: core.Input }, { type: core.Output }],
        nzOnCancel: [{ type: core.Input }, { type: core.Output }],
        nzAfterOpen: [{ type: core.Output }],
        nzAfterClose: [{ type: core.Output }],
        nzVisibleChange: [{ type: core.Output }],
        contentTemplateRef: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
        modalTitle: [{ type: core.ContentChild, args: [NzModalTitleDirective, { static: true, read: core.TemplateRef },] }],
        contentFromContentChild: [{ type: core.ContentChild, args: [NzModalContentDirective, { static: true, read: core.TemplateRef },] }],
        modalFooter: [{ type: core.ContentChild, args: [NzModalFooterDirective, { static: true, read: core.TemplateRef },] }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMask", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzMaskClosable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzVisible", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzClosable", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkLoading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzCancelLoading", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzKeyboard", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzNoAnimation", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzModalComponent.prototype, "nzCentered", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzModalComponent.prototype, "nzOkDanger", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalCloseComponent = /** @class */ (function () {
        function NzModalCloseComponent(config) {
            this.config = config;
        }
NzModalCloseComponent.ɵfac = function NzModalCloseComponent_Factory(t) { return new (t || NzModalCloseComponent)(ɵngcc0.ɵɵdirectiveInject(ModalOptions)); };
NzModalCloseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalCloseComponent, selectors: [["button", "nz-modal-close", ""]], hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"], exportAs: ["NzModalCloseBuiltin"], attrs: _c2, decls: 2, vars: 1, consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]], template: function NzModalCloseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzCloseIcon);
    } }, directives: [ɵngcc8.NzStringTemplateOutletDirective, ɵngcc6.ɵNzTransitionPatchDirective, ɵngcc7.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalCloseComponent, [{
        type: core.Component,
        args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: "\n    <span class=\"ant-modal-close-x\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzCloseIcon; let closeIcon\">\n        <i nz-icon [nzType]=\"closeIcon\" class=\"ant-modal-close-icon\"></i>\n      </ng-container>\n    </span>\n  ",
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ModalOptions }]; }, null); })();
        return NzModalCloseComponent;
    }());
    NzModalCloseComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalFooterComponent = /** @class */ (function () {
        function NzModalFooterComponent(i18n, config) {
            var _this = this;
            this.i18n = i18n;
            this.config = config;
            this.buttonsFooter = false;
            this.buttons = [];
            this.cancelTriggered = new core.EventEmitter();
            this.okTriggered = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            if (Array.isArray(config.nzFooter)) {
                this.buttonsFooter = true;
                this.buttons = config.nzFooter.map(mergeDefaultOption);
            }
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Modal');
            });
        }
        NzModalFooterComponent.prototype.onCancel = function () {
            this.cancelTriggered.emit();
        };
        NzModalFooterComponent.prototype.onOk = function () {
            this.okTriggered.emit();
        };
        /**
         * Returns the value of the specified key.
         * If it is a function, run and return the return value of the function.
         */
        NzModalFooterComponent.prototype.getButtonCallableProp = function (options, prop) {
            var value = options[prop];
            var componentInstance = this.modalRef.getContentComponent();
            return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        };
        /**
         * Run function based on the type and set its `loading` prop if needed.
         */
        NzModalFooterComponent.prototype.onButtonClick = function (options) {
            var loading = this.getButtonCallableProp(options, 'loading');
            if (!loading) {
                var result = this.getButtonCallableProp(options, 'onClick');
                if (options.autoLoading && util.isPromise(result)) {
                    options.loading = true;
                    result.then(function () { return (options.loading = false); }).catch(function () { return (options.loading = false); });
                }
            }
        };
        NzModalFooterComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzModalFooterComponent.ɵfac = function NzModalFooterComponent_Factory(t) { return new (t || NzModalFooterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ModalOptions)); };
NzModalFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalFooterComponent, selectors: [["div", "nz-modal-footer", ""]], hostAttrs: [1, "ant-modal-footer"], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["NzModalFooterBuiltin"], attrs: _c3, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzDanger", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzDanger", "nzLoading", "disabled", "click"]], template: function NzModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzModalFooterComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzFooter)("ngIfElse", _r1);
    } }, directives: [ɵngcc5.NgIf, ɵngcc8.NzStringTemplateOutletDirective, ɵngcc5.NgForOf, ɵngcc10.NzButtonComponent, ɵngcc11.NzWaveDirective, ɵngcc6.ɵNzTransitionPatchDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalFooterComponent, [{
        type: core.Component,
        args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: "\n    <ng-container *ngIf=\"config.nzFooter; else defaultFooterButtons\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzFooter; context: { $implicit: config.nzComponentParams, modalRef: modalRef }\">\n        <div *ngIf=\"!buttonsFooter\" [innerHTML]=\"config.nzFooter\"></div>\n        <ng-container *ngIf=\"buttonsFooter\">\n          <button\n            *ngFor=\"let button of buttons\"\n            nz-button\n            (click)=\"onButtonClick(button)\"\n            [hidden]=\"!getButtonCallableProp(button, 'show')\"\n            [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n            [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n            [nzType]=\"button.type!\"\n            [nzDanger]=\"button.danger\"\n            [nzShape]=\"button.shape!\"\n            [nzSize]=\"button.size!\"\n            [nzGhost]=\"button.ghost!\"\n          >\n            {{ button.label }}\n          </button>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n    <ng-template #defaultFooterButtons>\n      <button\n        *ngIf=\"config.nzCancelText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'cancel' || null\"\n        nz-button\n        (click)=\"onCancel()\"\n        [nzLoading]=\"!!config.nzCancelLoading\"\n        [disabled]=\"config.nzCancelDisabled\"\n      >\n        {{ config.nzCancelText || locale.cancelText }}\n      </button>\n      <button\n        *ngIf=\"config.nzOkText !== null\"\n        [attr.cdkFocusInitial]=\"config.nzAutofocus === 'ok' || null\"\n        nz-button\n        [nzType]=\"config.nzOkType!\"\n        [nzDanger]=\"config.nzOkDanger\"\n        (click)=\"onOk()\"\n        [nzLoading]=\"!!config.nzOkLoading\"\n        [disabled]=\"config.nzOkDisabled\"\n      >\n        {{ config.nzOkText || locale.okText }}\n      </button>\n    </ng-template>\n  ",
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: core.ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: ɵngcc4.NzI18nService }, { type: ModalOptions }]; }, { cancelTriggered: [{
            type: core.Output
        }], okTriggered: [{
            type: core.Output
        }], modalRef: [{
            type: core.Input
        }] }); })();
        return NzModalFooterComponent;
    }());
    NzModalFooterComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: ModalOptions }
    ]; };
    NzModalFooterComponent.propDecorators = {
        cancelTriggered: [{ type: core.Output }],
        okTriggered: [{ type: core.Output }],
        modalRef: [{ type: core.Input }]
    };
    function mergeDefaultOption(options) {
        return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalTitleComponent = /** @class */ (function () {
        function NzModalTitleComponent(config) {
            this.config = config;
        }
NzModalTitleComponent.ɵfac = function NzModalTitleComponent_Factory(t) { return new (t || NzModalTitleComponent)(ɵngcc0.ɵɵdirectiveInject(ModalOptions)); };
NzModalTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalTitleComponent, selectors: [["div", "nz-modal-title", ""]], hostAttrs: [1, "ant-modal-header"], exportAs: ["NzModalTitleBuiltin"], attrs: _c5, decls: 2, vars: 1, consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]], template: function NzModalTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
    } }, directives: [ɵngcc8.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalTitleComponent, [{
        type: core.Component,
        args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: "\n    <div class=\"ant-modal-title\">\n      <ng-container *nzStringTemplateOutlet=\"config.nzTitle\">\n        <div [innerHTML]=\"config.nzTitle\"></div>\n      </ng-container>\n    </div>\n  ",
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ModalOptions }]; }, null); })();
        return NzModalTitleComponent;
    }());
    NzModalTitleComponent.ctorParameters = function () { return [
        { type: ModalOptions }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalModule = /** @class */ (function () {
        function NzModalModule() {
        }
NzModalModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzModalModule });
NzModalModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, providers: [NzModalService], imports: [[
            common.CommonModule,
            bidi.BidiModule,
            overlay.OverlayModule,
            outlet.NzOutletModule,
            portal.PortalModule,
            i18n.NzI18nModule,
            button.NzButtonModule,
            icon.NzIconModule,
            pipes.NzPipesModule,
            noAnimation.NzNoAnimationModule,
            pipes.NzPipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzModalModule, { declarations: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalTitleDirective, NzModalContainerComponent, NzModalConfirmContainerComponent, NzModalComponent], imports: [ɵngcc5.CommonModule, ɵngcc13.BidiModule, ɵngcc2.OverlayModule, ɵngcc8.NzOutletModule, ɵngcc9.PortalModule, ɵngcc4.NzI18nModule, ɵngcc10.NzButtonModule, ɵngcc7.NzIconModule, ɵngcc12.NzPipesModule, ɵngcc14.NzNoAnimationModule, ɵngcc12.NzPipesModule], exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    bidi.BidiModule,
                    overlay.OverlayModule,
                    outlet.NzOutletModule,
                    portal.PortalModule,
                    i18n.NzI18nModule,
                    button.NzButtonModule,
                    icon.NzIconModule,
                    pipes.NzPipesModule,
                    noAnimation.NzNoAnimationModule,
                    pipes.NzPipesModule
                ],
                exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective],
                providers: [NzModalService],
                entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                declarations: [
                    NzModalComponent,
                    NzModalFooterDirective,
                    NzModalContentDirective,
                    NzModalCloseComponent,
                    NzModalFooterComponent,
                    NzModalTitleComponent,
                    NzModalTitleDirective,
                    NzModalContainerComponent,
                    NzModalConfirmContainerComponent,
                    NzModalComponent
                ]
            }]
    }], function () { return []; }, null); })();
        return NzModalModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzModalLegacyAPI = /** @class */ (function () {
        function NzModalLegacyAPI() {
        }
        return NzModalLegacyAPI;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BaseModalContainerComponent = BaseModalContainerComponent;
    exports.FADE_CLASS_NAME_MAP = FADE_CLASS_NAME_MAP;
    exports.MODAL_MASK_CLASS_NAME = MODAL_MASK_CLASS_NAME;
    exports.ModalOptions = ModalOptions;
    exports.NZ_CONFIG_MODULE_NAME = NZ_CONFIG_MODULE_NAME;
    exports.NzModalCloseComponent = NzModalCloseComponent;
    exports.NzModalComponent = NzModalComponent;
    exports.NzModalConfirmContainerComponent = NzModalConfirmContainerComponent;
    exports.NzModalContainerComponent = NzModalContainerComponent;
    exports.NzModalContentDirective = NzModalContentDirective;
    exports.NzModalFooterComponent = NzModalFooterComponent;
    exports.NzModalFooterDirective = NzModalFooterDirective;
    exports.NzModalLegacyAPI = NzModalLegacyAPI;
    exports.NzModalModule = NzModalModule;
    exports.NzModalRef = NzModalRef;
    exports.NzModalService = NzModalService;
    exports.NzModalTitleComponent = NzModalTitleComponent;
    exports.NzModalTitleDirective = NzModalTitleDirective;
    exports.ZOOM_CLASS_NAME_MAP = ZOOM_CLASS_NAME_MAP;
    exports.applyConfigDefaults = applyConfigDefaults;
    exports.getConfigFromComponent = getConfigFromComponent;
    exports.getValueWithConfig = getValueWithConfig;
    exports.nzModalAnimations = nzModalAnimations;
    exports.setContentInstanceParams = setContentInstanceParams;
    exports.throwNzModalContentAlreadyAttachedError = throwNzModalContentAlreadyAttachedError;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-modal.umd.js.map