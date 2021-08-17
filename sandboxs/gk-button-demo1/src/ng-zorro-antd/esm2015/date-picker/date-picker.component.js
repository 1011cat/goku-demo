/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Host, Inject, Input, Optional, Output, QueryList, Renderer2, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { CandyDate, cloneDate, wrongSortOrder } from 'ng-zorro-antd/core/time';
import { InputBoolean, toBoolean, valueFunctionProp } from 'ng-zorro-antd/core/util';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { DateRangePopupComponent } from './date-range-popup.component';
import { PREFIX_CLASS } from './util';
import { Directionality } from '@angular/cdk/bidi';
import { ESCAPE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from './date-picker.service';
import * as ɵngcc3 from 'ng-zorro-antd/i18n';
import * as ɵngcc4 from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc5 from '@angular/cdk/platform';
import * as ɵngcc6 from '@angular/cdk/bidi';
import * as ɵngcc7 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc8 from '@angular/common';
import * as ɵngcc9 from '@angular/cdk/overlay';
import * as ɵngcc10 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc11 from '@angular/forms';
import * as ɵngcc12 from 'ng-zorro-antd/icon';
import * as ɵngcc13 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc14 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc15 from './date-range-popup.component';

const _c0 = ["separatorElement"];
const _c1 = ["pickerInput"];
const _c2 = ["rangePickerInput"];
function NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDatePickerComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 7, 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.inputValue = $event; })("focus", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focus_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onFocus($event); })("focusout", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focusout_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onFocusout($event); })("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onInputChange($event); })("keyup.enter", function NzDatePickerComponent_ng_container_0_div_1_Template_input_keyup_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onKeyupEnter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r8.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-input-disabled", ctx_r8.nzDisabled);
    ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx_r8.getPlaceholder());
    ɵngcc0.ɵɵproperty("disabled", ctx_r8.nzDisabled)("readOnly", ctx_r8.nzInputReadOnly)("ngModel", ctx_r8.inputValue)("size", ctx_r8.inputSize);
    ɵngcc0.ɵɵattribute("id", ctx_r8.nzId);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r20.nzSeparator);
} }
function NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function () { return { partType: "left" }; };
const _c4 = function () { return { partType: "right" }; };
function NzDatePickerComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", null, 11);
    ɵngcc0.ɵɵelementStart(5, "span");
    ɵngcc0.ɵɵtemplate(6, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, NzDatePickerComponent_ng_container_0_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "div");
    ɵngcc0.ɵɵtemplate(10, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_10_Template, 1, 0, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, NzDatePickerComponent_ng_container_0_ng_container_2_ng_container_11_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r21 = ɵngcc0.ɵɵreference(8);
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    const _r1 = ɵngcc0.ɵɵreference(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(19, _c3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-range-separator");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-separator");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzSeparator)("ngIfElse", _r21);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(20, _c4));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzDatePickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_ng_container_0_div_1_Template, 4, 12, "div", 5);
    ɵngcc0.ɵɵtemplate(2, NzDatePickerComponent_ng_container_0_ng_container_2_Template, 12, 21, "ng-container", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isRange);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isRange);
} }
function NzDatePickerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 14, 15);
    ɵngcc0.ɵɵlistener("click", function NzDatePickerComponent_ng_template_1_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onClickInputBox($event); })("focusout", function NzDatePickerComponent_ng_template_1_Template_input_focusout_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onFocusout($event); })("focus", function NzDatePickerComponent_ng_template_1_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const partType_r25 = ctx.partType; const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onFocus($event, partType_r25); })("keyup.enter", function NzDatePickerComponent_ng_template_1_Template_input_keyup_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onKeyupEnter($event); })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const partType_r25 = ctx.partType; const ctx_r32 = ɵngcc0.ɵɵnextContext(); return (ctx_r32.inputValue[ctx_r32.datePickerService.getActiveIndex(partType_r25)] = $event); })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r25 = ctx.partType;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx_r2.getPlaceholder(partType_r25));
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize)("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r25)]);
} }
function NzDatePickerComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵlistener("click", function NzDatePickerComponent_ng_template_3_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onClickClear($event); });
    ɵngcc0.ɵɵelement(1, "i", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r34.prefixCls, "-clear");
} }
function NzDatePickerComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r38 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", suffixIcon_r38);
} }
function NzDatePickerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16);
    ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_ng_template_3_span_1_Template, 2, 3, "span", 17);
    ɵngcc0.ɵɵelementStart(2, "span");
    ɵngcc0.ɵɵtemplate(3, NzDatePickerComponent_ng_template_3_ng_container_3_Template, 2, 1, "ng-container", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-active-bar");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r4.activeBarStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.showClear());
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-suffix");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzSuffixIcon);
} }
function NzDatePickerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "date-range-popup", 23);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_panelModeChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onPanelModeChange($event); })("calendarChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_calendarChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_resultOk_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.onResultOk(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzNoAnimation", !!(ctx_r6.noAnimation == null ? null : ctx_r6.noAnimation.nzNoAnimation))("@slideMotion", "enter");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.nzDropdownClassName, "");
    ɵngcc0.ɵɵclassProp("ant-picker-dropdown-rtl", ctx_r6.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange)("ant-picker-active-left", ctx_r6.datePickerService.activeInput === "left")("ant-picker-active-right", ctx_r6.datePickerService.activeInput === "right");
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r6.nzPopupStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("isRange", ctx_r6.isRange)("inline", ctx_r6.nzInline)("defaultPickerValue", ctx_r6.nzDefaultPickerValue)("showWeek", ctx_r6.nzMode === "week")("panelMode", ctx_r6.panelMode)("locale", ctx_r6.nzLocale == null ? null : ctx_r6.nzLocale.lang)("showToday", ctx_r6.nzMode === "date" && ctx_r6.nzShowToday && !ctx_r6.isRange && !ctx_r6.nzShowTime)("showNow", ctx_r6.nzMode === "date" && ctx_r6.nzShowNow && !ctx_r6.isRange && !!ctx_r6.nzShowTime)("showTime", ctx_r6.nzShowTime)("dateRender", ctx_r6.nzDateRender)("disabledDate", ctx_r6.nzDisabledDate)("disabledTime", ctx_r6.nzDisabledTime)("extraFooter", ctx_r6.extraFooter)("ranges", ctx_r6.nzRanges)("dir", ctx_r6.dir);
} }
function NzDatePickerComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDatePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzDatePickerComponent_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working because the overlay can't get the height/width of it's content)
const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
export class NzDatePickerComponent {
    // ------------------------------------------------------------------------
    // Input API End
    // ------------------------------------------------------------------------
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, doc, directionality, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.datePickerService = datePickerService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.nzResizeObserver = nzResizeObserver;
        this.platform = platform;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isRange = false; // Indicate whether the value is a range value
        this.dir = 'ltr';
        this.panelMode = 'date';
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        this.isCustomFormat = false;
        this.showTime = false;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzBorderless = false;
        this.nzInputReadOnly = false;
        this.nzInline = false;
        this.nzPlaceHolder = '';
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzSize = 'default';
        this.nzShowToday = true;
        this.nzMode = 'date';
        this.nzShowNow = true;
        this.nzDefaultPickerValue = null;
        this.nzSeparator = undefined;
        this.nzSuffixIcon = 'calendar';
        this.nzBackdrop = false;
        this.nzId = null;
        // TODO(@wenqi73) The PanelMode need named for each pickers and export
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
        this.nzOnOpenChange = new EventEmitter();
        this.inputSize = 12;
        this.destroy$ = new Subject();
        this.prefixCls = PREFIX_CLASS;
        this.activeBarStyle = {};
        this.overlayOpen = false; // Available when "nzOpen" = undefined
        this.overlayPositions = [
            {
                offsetY: 2,
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                offsetY: -2,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                offsetY: 2,
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                offsetY: -2,
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ];
        this.currentPositionX = 'start';
        this.currentPositionY = 'bottom';
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        this.document = doc;
        this.origin = new CdkOverlayOrigin(this.elementRef);
    }
    get nzShowTime() {
        return this.showTime;
    }
    set nzShowTime(value) {
        this.showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
        if (this.isRange && this.platform.isBrowser) {
            this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.updateInputWidthAndArrowLeft();
            });
        }
        this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe(partType => {
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.focus();
            this.updateInputWidthAndArrowLeft();
        });
    }
    updateInputWidthAndArrowLeft() {
        var _a, _b, _c;
        this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
        const baseStyle = { position: 'absolute', width: `${this.inputWidth}px` };
        this.datePickerService.arrowLeft =
            this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
        if (this.dir === 'rtl') {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { right: `${this.datePickerService.arrowLeft}px` });
        }
        else {
            this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { left: `${this.datePickerService.arrowLeft}px` });
        }
        this.cdr.markForCheck();
    }
    getInput(partType) {
        var _a, _b;
        if (this.nzInline) {
            return undefined;
        }
        return this.isRange
            ? partType === 'left'
                ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement
            : this.pickerInput.nativeElement;
    }
    focus() {
        const activeInputElement = this.getInput(this.datePickerService.activeInput);
        if (this.document.activeElement !== activeInputElement) {
            activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
        }
    }
    onFocus(event, partType) {
        event.preventDefault();
        if (partType) {
            this.datePickerService.inputPartChange$.next(partType);
        }
        this.renderClass(true);
    }
    // blur event has not the relatedTarget in IE11, use focusout instead.
    onFocusout(event) {
        event.preventDefault();
        if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
            this.checkAndClose();
        }
        this.renderClass(false);
    }
    // Show overlay content
    open() {
        if (this.nzInline) {
            return;
        }
        if (!this.realOpenState && !this.nzDisabled) {
            this.updateInputWidthAndArrowLeft();
            this.overlayOpen = true;
            this.nzOnOpenChange.emit(true);
            this.cdr.markForCheck();
        }
    }
    close() {
        if (this.nzInline) {
            return;
        }
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.nzOnOpenChange.emit(false);
        }
    }
    showClear() {
        return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
    }
    checkAndClose() {
        if (!this.realOpenState) {
            return;
        }
        if (this.panel.isAllowed(this.datePickerService.value, true)) {
            if (Array.isArray(this.datePickerService.value) && wrongSortOrder(this.datePickerService.value)) {
                const index = this.datePickerService.getActiveIndex();
                const value = this.datePickerService.value[index];
                this.panel.changeValueFromSelect(value, true);
                return;
            }
            this.updateInputValue();
            this.datePickerService.emitValue$.next();
        }
        else {
            this.datePickerService.setValue(this.datePickerService.initialValue);
            this.close();
        }
    }
    onClickInputBox(event) {
        event.stopPropagation();
        this.focus();
        if (!this.isOpenHandledByUser()) {
            this.open();
        }
    }
    onOverlayKeydown(event) {
        if (event.keyCode === ESCAPE) {
            this.datePickerService.initValue();
        }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.cdr.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.datePickerService.initValue(true);
        this.datePickerService.emitValue$.next();
    }
    updateInputValue() {
        const newValue = this.datePickerService.value;
        if (this.isRange) {
            this.inputValue = newValue ? newValue.map(v => this.formatValue(v)) : ['', ''];
        }
        else {
            this.inputValue = this.formatValue(newValue);
        }
        this.cdr.markForCheck();
    }
    formatValue(value) {
        return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
    }
    onInputChange(value, isEnter = false) {
        /**
         * in IE11 focus/blur will trigger ngModelChange if placeholder changes,
         * so we forbidden IE11 to open panel through input change
         */
        if (!this.platform.TRIDENT &&
            this.document.activeElement === this.getInput(this.datePickerService.activeInput) &&
            !this.realOpenState) {
            this.open();
            return;
        }
        const date = this.checkValidDate(value);
        // Can only change date when it's open
        if (date && this.realOpenState) {
            this.panel.changeValueFromSelect(date, isEnter);
        }
    }
    onKeyupEnter(event) {
        this.onInputChange(event.target.value, true);
    }
    checkValidDate(value) {
        const date = new CandyDate(this.dateHelper.parseDate(value, this.nzFormat));
        if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
            return null;
        }
        return date;
    }
    getPlaceholder(partType) {
        return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.nzOpen !== undefined;
    }
    ngOnInit() {
        var _a;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(takeUntil(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue(true);
        this.datePickerService.emitValue$.pipe(takeUntil(this.destroyed$)).subscribe(_ => {
            var _a, _b, _c, _d;
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = cloneDate(value);
            if (this.isRange) {
                const vAsRange = value;
                if (vAsRange.length) {
                    this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    this.onChangeFn(value.nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
            // When value emitted, overlay will be closed
            this.close();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroyed$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.inputValue = this.isRange ? ['', ''] : '';
        this.setModeAndFormat();
        this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateInputValue();
        });
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if ((_a = changes.nzPlaceHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.isCustomPlaceHolder = true;
        }
        if ((_b = changes.nzFormat) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.isCustomFormat = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzMode) {
            this.setDefaultPlaceHolder();
            this.setModeAndFormat();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    setModeAndFormat() {
        const inputFormats = {
            year: 'yyyy',
            month: 'yyyy-MM',
            week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
            date: this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
        };
        if (!this.nzMode) {
            this.nzMode = 'date';
        }
        this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode;
        // Default format when it's empty
        if (!this.isCustomFormat) {
            this.nzFormat = inputFormats[this.nzMode];
        }
        this.inputSize = Math.max(10, this.nzFormat.length) + 2;
        this.updateInputValue();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            const defaultPlaceholder = {
                year: this.getPropertyOfLocale('yearPlaceholder'),
                month: this.getPropertyOfLocale('monthPlaceholder'),
                week: this.getPropertyOfLocale('weekPlaceholder'),
                date: this.getPropertyOfLocale('placeholder')
            };
            const defaultRangePlaceholder = {
                year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                date: this.getPropertyOfLocale('rangePlaceholder')
            };
            this.nzPlaceHolder = this.isRange
                ? defaultRangePlaceholder[this.nzMode]
                : defaultPlaceholder[this.nzMode];
        }
    }
    getPropertyOfLocale(type) {
        return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    }
    // Safe way of setting value with default
    setValue(value) {
        const newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    }
    renderClass(value) {
        // TODO: avoid autoFocus cause change after checked error
        if (value) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    }
    onPanelModeChange(panelMode) {
        this.nzOnPanelChange.emit(panelMode);
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
        if (this.isRange && Array.isArray(value)) {
            const rangeValue = value.filter(x => x instanceof CandyDate).map(x => x.nativeDate);
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    onResultOk() {
        var _a, _b;
        if (this.isRange) {
            const value = this.datePickerService.value;
            if (value.length) {
                this.nzOnOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.datePickerService.value) {
                this.nzOnOk.emit(this.datePickerService.value.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
    }
}
NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DatePickerService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Platform), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzNoAnimationDirective, 9)); };
NzDatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]], viewQuery: function NzDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(CdkConnectedOverlay, true);
        ɵngcc0.ɵɵviewQuery(DateRangePopupComponent, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.separatorElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.rangePickerInputs = _t);
    } }, hostVars: 16, hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzDatePickerComponent_click_HostBindingHandler($event) { return ctx.onClickInputBox($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker", true)("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless)("ant-picker-inline", ctx.nzInline);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzBorderless: "nzBorderless", nzInputReadOnly: "nzInputReadOnly", nzInline: "nzInline", nzPlaceHolder: "nzPlaceHolder", nzPopupStyle: "nzPopupStyle", nzSize: "nzSize", nzShowToday: "nzShowToday", nzMode: "nzMode", nzShowNow: "nzShowNow", nzDefaultPickerValue: "nzDefaultPickerValue", nzSeparator: "nzSeparator", nzSuffixIcon: "nzSuffixIcon", nzBackdrop: "nzBackdrop", nzId: "nzId", nzShowTime: "nzShowTime", nzFormat: "nzFormat", nzLocale: "nzLocale", nzOpen: "nzOpen", nzDisabledDate: "nzDisabledDate", nzDropdownClassName: "nzDropdownClassName", nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzRanges: "nzRanges" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk", nzOnOpenChange: "nzOnOpenChange" }, exportAs: ["nzDatePicker"], features: [ɵngcc0.ɵɵProvidersFeature([
            DatePickerService,
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef(() => NzDatePickerComponent)
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 7, consts: [[4, "ngIf", "ngIfElse"], ["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "focusout", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "focusout", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"], [3, "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDatePickerComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzDatePickerComponent_ng_template_3_Template, 4, 9, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NzDatePickerComponent_ng_template_5_Template, 3, 38, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NzDatePickerComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
        ɵngcc0.ɵɵlistener("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_7_listener($event) { return ctx.onPositionChange($event); })("detach", function NzDatePickerComponent_Template_ng_template_detach_7_listener() { return ctx.close(); })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_7_listener($event) { return ctx.onOverlayKeydown($event); });
    } if (rf & 2) {
        const _r5 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzInline)("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
    } }, directives: [ɵngcc8.NgIf, ɵngcc9.CdkConnectedOverlay, ɵngcc10.NzConnectedOverlayDirective, ɵngcc11.DefaultValueAccessor, ɵngcc11.NgControlStatus, ɵngcc11.NgModel, ɵngcc8.NgTemplateOutlet, ɵngcc12.NzIconDirective, ɵngcc13.ɵNzTransitionPatchDirective, ɵngcc8.NgStyle, ɵngcc14.NzStringTemplateOutletDirective, ɵngcc7.NzNoAnimationDirective, ɵngcc15.DateRangePopupComponent, ɵngcc6.Dir], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
NzDatePickerComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: DatePickerService },
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: DateHelperService },
    { type: NzResizeObserver },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzDatePickerComponent.propDecorators = {
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzBorderless: [{ type: Input }],
    nzInputReadOnly: [{ type: Input }],
    nzInline: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzLocale: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzPopupStyle: [{ type: Input }],
    nzDropdownClassName: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzDateRender: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzShowNow: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzDefaultPickerValue: [{ type: Input }],
    nzSeparator: [{ type: Input }],
    nzSuffixIcon: [{ type: Input }],
    nzBackdrop: [{ type: Input }],
    nzId: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzOnCalendarChange: [{ type: Output }],
    nzOnOk: [{ type: Output }],
    nzOnOpenChange: [{ type: Output }],
    nzShowTime: [{ type: Input }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay, { static: false },] }],
    panel: [{ type: ViewChild, args: [DateRangePopupComponent, { static: false },] }],
    separatorElement: [{ type: ViewChild, args: ['separatorElement', { static: false },] }],
    pickerInput: [{ type: ViewChild, args: ['pickerInput', { static: false },] }],
    rangePickerInputs: [{ type: ViewChildren, args: ['rangePickerInput',] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzBorderless", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzInline", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzOpen", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzShowToday", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzShowNow", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDatePickerComponent.prototype, "nzSeparator", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDatePickerComponent.prototype, "nzBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                exportAs: 'nzDatePicker',
                template: `
    <ng-container *ngIf="!nzInline; else inlineMode">
      <!-- Content of single picker -->
      <div *ngIf="!isRange" class="{{ prefixCls }}-input">
        <input
          #pickerInput
          [attr.id]="nzId"
          [class.ant-input-disabled]="nzDisabled"
          [disabled]="nzDisabled"
          [readOnly]="nzInputReadOnly"
          [(ngModel)]="inputValue"
          placeholder="{{ getPlaceholder() }}"
          [size]="inputSize"
          (focus)="onFocus($event)"
          (focusout)="onFocusout($event)"
          (ngModelChange)="onInputChange($event)"
          (keyup.enter)="onKeyupEnter($event)"
        />
        <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
      </div>

      <!-- Content of range picker -->
      <ng-container *ngIf="isRange">
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }"></ng-container>
        </div>
        <div #separatorElement class="{{ prefixCls }}-range-separator">
          <span class="{{ prefixCls }}-separator">
            <ng-container *ngIf="nzSeparator; else defaultSeparator">{{ nzSeparator }}</ng-container>
          </span>
          <ng-template #defaultSeparator>
            <i nz-icon nzType="swap-right" nzTheme="outline"></i>
          </ng-template>
        </div>
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }"></ng-container>
        </div>
        <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
      </ng-container>
    </ng-container>
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        [size]="inputSize"
        (click)="onClickInputBox($event)"
        (focusout)="onFocusout($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [ngStyle]="activeBarStyle"></div>
      <span *ngIf="showClear()" class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill"></i>
      </span>
      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
    </ng-template>

    <ng-template #inlineMode>
      <div class="ant-picker-wrapper" [nzNoAnimation]="!!noAnimation?.nzNoAnimation" [@slideMotion]="'enter'" style="position: relative;">
        <div
          class="{{ prefixCls }}-dropdown {{ nzDropdownClassName }}"
          [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
          [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-range]="isRange"
          [class.ant-picker-active-left]="datePickerService.activeInput === 'left'"
          [class.ant-picker-active-right]="datePickerService.activeInput === 'right'"
          [ngStyle]="nzPopupStyle"
        >
          <date-range-popup
            [isRange]="isRange"
            [inline]="nzInline"
            [defaultPickerValue]="nzDefaultPickerValue"
            [showWeek]="nzMode === 'week'"
            [panelMode]="panelMode"
            (panelModeChange)="onPanelModeChange($event)"
            (calendarChange)="onCalendarChange($event)"
            [locale]="nzLocale?.lang!"
            [showToday]="nzMode === 'date' && nzShowToday && !isRange && !nzShowTime"
            [showNow]="nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime"
            [showTime]="nzShowTime"
            [dateRender]="nzDateRender"
            [disabledDate]="nzDisabledDate"
            [disabledTime]="nzDisabledTime"
            [extraFooter]="extraFooter"
            [ranges]="nzRanges"
            [dir]="dir"
            (resultOk)="onResultOk()"
          ></date-range-popup>
        </div>
      </div>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="close()"
      (overlayKeydown)="onOverlayKeydown($event)"
    >
      <ng-container *ngTemplateOutlet="inlineMode"></ng-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker]': `true`,
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
                    '[class.ant-picker-rtl]': `dir === 'rtl'`,
                    '[class.ant-picker-borderless]': `nzBorderless`,
                    '[class.ant-picker-inline]': `nzInline`,
                    '(click)': 'onClickInputBox($event)'
                },
                providers: [
                    DatePickerService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzDatePickerComponent)
                    }
                ],
                animations: [slideMotion]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc2.DatePickerService }, { type: ɵngcc3.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc3.DateHelperService }, { type: ɵngcc4.NzResizeObserver }, { type: ɵngcc5.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc6.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc7.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzAllowClear: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzBorderless: [{
            type: Input
        }], nzInputReadOnly: [{
            type: Input
        }], nzInline: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzPopupStyle: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzShowToday: [{
            type: Input
        }], nzMode: [{
            type: Input
        }], nzShowNow: [{
            type: Input
        }], nzDefaultPickerValue: [{
            type: Input
        }], nzSeparator: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], nzId: [{
            type: Input
        }], nzOnPanelChange: [{
            type: Output
        }], nzOnCalendarChange: [{
            type: Output
        }], nzOnOk: [{
            type: Output
        }], nzOnOpenChange: [{
            type: Output
        }], nzShowTime: [{
            type: Input
        }], nzFormat: [{
            type: Input
        }], nzLocale: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], nzDisabledDate: [{
            type: Input
        }], nzDropdownClassName: [{
            type: Input
        }], nzDateRender: [{
            type: Input
        }], nzDisabledTime: [{
            type: Input
        }], nzRenderExtraFooter: [{
            type: Input
        }], nzRanges: [{
            type: Input
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: false }]
        }], panel: [{
            type: ViewChild,
            args: [DateRangePopupComponent, { static: false }]
        }], separatorElement: [{
            type: ViewChild,
            args: ['separatorElement', { static: false }]
        }], pickerInput: [{
            type: ViewChild,
            args: ['pickerInput', { static: false }]
        }], rangePickerInputs: [{
            type: ViewChildren,
            args: ['rangePickerInput']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUdULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1CLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhHLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUE0RCxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoSSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFB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RSxLQUFLLEVBQUU7QUFBTyxnQ0FDakQsWUFBWSxTQUFDLGtCQUFrQjtBQUFNO0FBaERiO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDbEIsMkRBRDhDO0FBQzdCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDbEIsMERBRDhDO0FBQzdCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDakIseURBRDRDO0FBQzVCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDbkIsMkRBRGdEO0FBQzlCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDdEIsOERBRHNEO0FBQ2pDO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZix1REFEd0M7QUFDMUI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNOLHFEQURzQjtBQVdqQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2pCLDBEQUQ0QztBQUU1QjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2Ysd0RBRHdDO0FBRzVCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDckIsMERBRHFEO0FBQ2pDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsMkRBQW9CO0FBQzNEO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDUCx5REFEeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM1QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpSZXNpemVPYnNlcnZlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9yZXNpemUtb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUsIHdyb25nU29ydE9yZGVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBGdW5jdGlvblByb3AsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlLCBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4vZGF0ZS1waWNrZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3Ncbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQ29tcGF0aWJsZURhdGUsIERpc2FibGVkVGltZUZuLCBOekRhdGVNb2RlLCBQcmVzZXRSYW5nZXMsIFJhbmdlUGFydFR5cGUsIFN1cHBvcnRUaW1lT3B0aW9ucyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgcG9zaXRpb246ICdyZWxhdGl2ZScgfTsgLy8gQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWNhdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZGF0ZVBpY2tlcic7XG5cbmV4cG9ydCB0eXBlIE56RGF0ZVBpY2tlclNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ256LWRhdGUtcGlja2VyLG56LXdlZWstcGlja2VyLG56LW1vbnRoLXBpY2tlcixuei15ZWFyLXBpY2tlcixuei1yYW5nZS1waWNrZXInLFxuICBleHBvcnRBczogJ256RGF0ZVBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFueklubGluZTsgZWxzZSBpbmxpbmVNb2RlXCI+XG4gICAgICA8IS0tIENvbnRlbnQgb2Ygc2luZ2xlIHBpY2tlciAtLT5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaXNSYW5nZVwiIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICNwaWNrZXJJbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cIm56SWRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgICAgIFtyZWFkT25seV09XCJueklucHV0UmVhZE9ubHlcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBnZXRQbGFjZWhvbGRlcigpIH19XCJcbiAgICAgICAgICBbc2l6ZV09XCJpbnB1dFNpemVcIlxuICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgICAgIChmb2N1c291dCk9XCJvbkZvY3Vzb3V0KCRldmVudClcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uS2V5dXBFbnRlcigkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJpZ2h0UmVzdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gQ29udGVudCBvZiByYW5nZSBwaWNrZXIgLS0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNSYW5nZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWlucHV0XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbFJhbmdlSW5wdXQ7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNzZXBhcmF0b3JFbGVtZW50IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXJhbmdlLXNlcGFyYXRvclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXNlcGFyYXRvclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2VwYXJhdG9yOyBlbHNlIGRlZmF1bHRTZXBhcmF0b3JcIj57eyBuelNlcGFyYXRvciB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRTZXBhcmF0b3I+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInN3YXAtcmlnaHRcIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1pbnB1dFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSYW5nZUlucHV0OyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxSaWdodFJlc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwhLS0gSW5wdXQgZm9yIFJhbmdlIE9OTFkgLS0+XG4gICAgPG5nLXRlbXBsYXRlICN0cGxSYW5nZUlucHV0IGxldC1wYXJ0VHlwZT1cInBhcnRUeXBlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI3JhbmdlUGlja2VySW5wdXRcbiAgICAgICAgW2Rpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgICBbcmVhZE9ubHldPVwibnpJbnB1dFJlYWRPbmx5XCJcbiAgICAgICAgW3NpemVdPVwiaW5wdXRTaXplXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tJbnB1dEJveCgkZXZlbnQpXCJcbiAgICAgICAgKGZvY3Vzb3V0KT1cIm9uRm9jdXNvdXQoJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgICAgKGtleXVwLmVudGVyKT1cIm9uS2V5dXBFbnRlcigkZXZlbnQpXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlW2RhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV1cIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlKSB9fVwiXG4gICAgICAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIFJpZ2h0IG9wZXJhdG9yIGljb25zIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsUmlnaHRSZXN0PlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1hY3RpdmUtYmFyXCIgW25nU3R5bGVdPVwiYWN0aXZlQmFyU3R5bGVcIj48L2Rpdj5cbiAgICAgIDxzcGFuICpuZ0lmPVwic2hvd0NsZWFyKClcIiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1jbGVhclwiIChjbGljayk9XCJvbkNsaWNrQ2xlYXIoJGV2ZW50KVwiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIG56VGhlbWU9XCJmaWxsXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tc3VmZml4XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2lubGluZU1vZGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXBpY2tlci13cmFwcGVyXCIgW256Tm9BbmltYXRpb25dPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiIFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tZHJvcGRvd24ge3sgbnpEcm9wZG93bkNsYXNzTmFtZSB9fVwiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICdib3R0b20nICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdzdGFydCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICd0b3AnICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdzdGFydCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtcGlja2VyLWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodF09XCJjdXJyZW50UG9zaXRpb25ZID09PSAnYm90dG9tJyAmJiBjdXJyZW50UG9zaXRpb25YID09PSAnZW5kJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC1waWNrZXItZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0XT1cImN1cnJlbnRQb3NpdGlvblkgPT09ICd0b3AnICYmIGN1cnJlbnRQb3NpdGlvblggPT09ICdlbmQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1kcm9wZG93bi1yYW5nZV09XCJpc1JhbmdlXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1hY3RpdmUtbGVmdF09XCJkYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9PT0gJ2xlZnQnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXBpY2tlci1hY3RpdmUtcmlnaHRdPVwiZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgPT09ICdyaWdodCdcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cIm56UG9wdXBTdHlsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGF0ZS1yYW5nZS1wb3B1cFxuICAgICAgICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICAgICAgICBbaW5saW5lXT1cIm56SW5saW5lXCJcbiAgICAgICAgICAgIFtkZWZhdWx0UGlja2VyVmFsdWVdPVwibnpEZWZhdWx0UGlja2VyVmFsdWVcIlxuICAgICAgICAgICAgW3Nob3dXZWVrXT1cIm56TW9kZSA9PT0gJ3dlZWsnXCJcbiAgICAgICAgICAgIFtwYW5lbE1vZGVdPVwicGFuZWxNb2RlXCJcbiAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwib25QYW5lbE1vZGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAoY2FsZW5kYXJDaGFuZ2UpPVwib25DYWxlbmRhckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgIFtsb2NhbGVdPVwibnpMb2NhbGU/LmxhbmchXCJcbiAgICAgICAgICAgIFtzaG93VG9kYXldPVwibnpNb2RlID09PSAnZGF0ZScgJiYgbnpTaG93VG9kYXkgJiYgIWlzUmFuZ2UgJiYgIW56U2hvd1RpbWVcIlxuICAgICAgICAgICAgW3Nob3dOb3ddPVwibnpNb2RlID09PSAnZGF0ZScgJiYgbnpTaG93Tm93ICYmICFpc1JhbmdlICYmICEhbnpTaG93VGltZVwiXG4gICAgICAgICAgICBbc2hvd1RpbWVdPVwibnpTaG93VGltZVwiXG4gICAgICAgICAgICBbZGF0ZVJlbmRlcl09XCJuekRhdGVSZW5kZXJcIlxuICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJuekRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRUaW1lXT1cIm56RGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICAgIFtleHRyYUZvb3Rlcl09XCJleHRyYUZvb3RlclwiXG4gICAgICAgICAgICBbcmFuZ2VzXT1cIm56UmFuZ2VzXCJcbiAgICAgICAgICAgIFtkaXJdPVwiZGlyXCJcbiAgICAgICAgICAgIChyZXN1bHRPayk9XCJvblJlc3VsdE9rKClcIlxuICAgICAgICAgID48L2RhdGUtcmFuZ2UtcG9wdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gT3ZlcmxheSAtLT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgIG56Q29ubmVjdGVkT3ZlcmxheVxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJuekJhY2tkcm9wXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwicmVhbE9wZW5TdGF0ZVwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtcGlja2VyLXdyYXBwZXInXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgKGRldGFjaCk9XCJjbG9zZSgpXCJcbiAgICAgIChvdmVybGF5S2V5ZG93bik9XCJvbk92ZXJsYXlLZXlkb3duKCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbmxpbmVNb2RlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXBpY2tlcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJhbmdlXSc6IGBpc1JhbmdlYCxcbiAgICAnW2NsYXNzLmFudC1waWNrZXItbGFyZ2VdJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXNtYWxsXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3MuYW50LXBpY2tlci1kaXNhYmxlZF0nOiBgbnpEaXNhYmxlZGAsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWJvcmRlcmxlc3NdJzogYG56Qm9yZGVybGVzc2AsXG4gICAgJ1tjbGFzcy5hbnQtcGlja2VyLWlubGluZV0nOiBgbnpJbmxpbmVgLFxuICAgICcoY2xpY2spJzogJ29uQ2xpY2tJbnB1dEJveCgkZXZlbnQpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBEYXRlUGlja2VyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpEYXRlUGlja2VyQ29tcG9uZW50KVxuICAgIH1cbiAgXSxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBOekRhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpCb3JkZXJsZXNzOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ueklucHV0UmVhZE9ubHk6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256SW5saW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek9wZW46IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1RvZGF5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dOb3c6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSB8IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256U2hvd1RpbWU6IEJvb2xlYW5JbnB1dCB8IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHJhbmdlIHZhbHVlXG4gIGV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwdWJsaWMgcGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdID0gJ2RhdGUnO1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlzQ3VzdG9tUGxhY2VIb2xkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0N1c3RvbUZvcm1hdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gLS0tIENvbW1vbiBBUElcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJsZXNzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBueklucHV0UmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5saW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW4/OiBib29sZWFuO1xuICBASW5wdXQoKSBuekRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZSE6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpEYXRlUGlja2VyU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56Rm9ybWF0ITogc3RyaW5nO1xuICBASW5wdXQoKSBuekRhdGVSZW5kZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgbnpEaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbjtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3Rlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpEYXRlTW9kZSA9ICdkYXRlJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd05vdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56UmFuZ2VzPzogUHJlc2V0UmFuZ2VzO1xuICBASW5wdXQoKSBuekRlZmF1bHRQaWNrZXJWYWx1ZTogQ29tcGF0aWJsZURhdGUgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuelNlcGFyYXRvcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuelN1ZmZpeEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAnY2FsZW5kYXInO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56QmFja2Ryb3AgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gVE9ETyhAd2VucWk3MykgVGhlIFBhbmVsTW9kZSBuZWVkIG5hbWVkIGZvciBlYWNoIHBpY2tlcnMgYW5kIGV4cG9ydFxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdIHwgc3RyaW5nIHwgc3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFycmF5PERhdGUgfCBudWxsPj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1RpbWU7XG4gIH1cblxuICBzZXQgbnpTaG93VGltZSh2YWx1ZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIElucHV0IEFQSSBTdGFydFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogZmFsc2UgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheT86IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBwYW5lbCE6IERhdGVSYW5nZVBvcHVwQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdzZXBhcmF0b3JFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlcGFyYXRvckVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwaWNrZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3JhbmdlUGlja2VySW5wdXQnKSByYW5nZVBpY2tlcklucHV0cz86IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+PjtcblxuICBvcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgaW5wdXRTaXplOiBudW1iZXIgPSAxMjtcbiAgaW5wdXRXaWR0aD86IG51bWJlcjtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcmVmaXhDbHMgPSBQUkVGSVhfQ0xBU1M7XG4gIGlucHV0VmFsdWUhOiBOelNhZmVBbnk7XG4gIGFjdGl2ZUJhclN0eWxlOiBvYmplY3QgPSB7fTtcbiAgb3ZlcmxheU9wZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gQXZhaWxhYmxlIHdoZW4gXCJuek9wZW5cIiA9IHVuZGVmaW5lZFxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbXG4gICAge1xuICAgICAgb2Zmc2V0WTogMixcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRZOiAtMixcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfSxcbiAgICB7XG4gICAgICBvZmZzZXRZOiAyLFxuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb2Zmc2V0WTogLTIsXG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfVxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcbiAgY3VycmVudFBvc2l0aW9uWDogSG9yaXpvbnRhbENvbm5lY3Rpb25Qb3MgPSAnc3RhcnQnO1xuICBjdXJyZW50UG9zaXRpb25ZOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MgPSAnYm90dG9tJztcblxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHtcbiAgICAvLyBUaGUgdmFsdWUgdGhhdCByZWFsbHkgZGVjaWRlIHRoZSBvcGVuIHN0YXRlIG9mIG92ZXJsYXlcbiAgICByZXR1cm4gdGhpcy5pc09wZW5IYW5kbGVkQnlVc2VyKCkgPyAhIXRoaXMubnpPcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubnpSZXNpemVPYnNlcnZlclxuICAgICAgICAub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoQW5kQXJyb3dMZWZ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHBhcnRUeXBlID0+IHtcbiAgICAgIGlmIChwYXJ0VHlwZSkge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ID0gcGFydFR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0V2lkdGhBbmRBcnJvd0xlZnQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFdpZHRoID0gdGhpcy5yYW5nZVBpY2tlcklucHV0cz8uZmlyc3Q/Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcblxuICAgIGNvbnN0IGJhc2VTdHlsZSA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiBgJHt0aGlzLmlucHV0V2lkdGh9cHhgIH07XG4gICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnQgPVxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5hY3RpdmVJbnB1dCA9PT0gJ2xlZnQnID8gMCA6IHRoaXMuaW5wdXRXaWR0aCArIHRoaXMuc2VwYXJhdG9yRWxlbWVudD8ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xuXG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgdGhpcy5hY3RpdmVCYXJTdHlsZSA9IHsgLi4uYmFzZVN0eWxlLCByaWdodDogYCR7dGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnR9cHhgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQmFyU3R5bGUgPSB7IC4uLmJhc2VTdHlsZSwgbGVmdDogYCR7dGhpcy5kYXRlUGlja2VyU2VydmljZS5hcnJvd0xlZnR9cHhgIH07XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRJbnB1dChwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5ueklubGluZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZVxuICAgICAgPyBwYXJ0VHlwZSA9PT0gJ2xlZnQnXG4gICAgICAgID8gdGhpcy5yYW5nZVBpY2tlcklucHV0cz8uZmlyc3QubmF0aXZlRWxlbWVudFxuICAgICAgICA6IHRoaXMucmFuZ2VQaWNrZXJJbnB1dHM/Lmxhc3QubmF0aXZlRWxlbWVudFxuICAgICAgOiB0aGlzLnBpY2tlcklucHV0IS5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgY29uc3QgYWN0aXZlSW5wdXRFbGVtZW50ID0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KTtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBhY3RpdmVJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGFjdGl2ZUlucHV0RWxlbWVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50LCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwYXJ0VHlwZSkge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQocGFydFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckNsYXNzKHRydWUpO1xuICB9XG5cbiAgLy8gYmx1ciBldmVudCBoYXMgbm90IHRoZSByZWxhdGVkVGFyZ2V0IGluIElFMTEsIHVzZSBmb2N1c291dCBpbnN0ZWFkLlxuICBvbkZvY3Vzb3V0KGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICB0aGlzLmNoZWNrQW5kQ2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJDbGFzcyhmYWxzZSk7XG4gIH1cblxuICAvLyBTaG93IG92ZXJsYXkgY29udGVudFxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56SW5saW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aEFuZEFycm93TGVmdCgpO1xuICAgICAgdGhpcy5vdmVybGF5T3BlbiA9IHRydWU7XG4gICAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ueklubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpEaXNhYmxlZCAmJiAhdGhpcy5pc0VtcHR5VmFsdWUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgdGhpcy5uekFsbG93Q2xlYXI7XG4gIH1cblxuICBjaGVja0FuZENsb3NlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWwuaXNBbGxvd2VkKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUhLCB0cnVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgJiYgd3JvbmdTb3J0T3JkZXIodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZVtpbmRleF07XG4gICAgICAgIHRoaXMucGFuZWwuY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlISwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSEpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tJbnB1dEJveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBvbk92ZXJsYXlLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSkge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0VmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQb3NpdGlvblggPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5YO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpOyAvLyBUYWtlIHNpZGUtZWZmZWN0cyB0byBwb3NpdGlvbiBzdHlsZXNcbiAgfVxuXG4gIG9uQ2xpY2tDbGVhcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRWYWx1ZSh0cnVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWU7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbmV3VmFsdWUgPyAobmV3VmFsdWUgYXMgQ2FuZHlEYXRlW10pLm1hcCh2ID0+IHRoaXMuZm9ybWF0VmFsdWUodikpIDogWycnLCAnJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUobmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSAmJiAodmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlLCB0aGlzLm56Rm9ybWF0KTtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZywgaXNFbnRlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgLyoqXG4gICAgICogaW4gSUUxMSBmb2N1cy9ibHVyIHdpbGwgdHJpZ2dlciBuZ01vZGVsQ2hhbmdlIGlmIHBsYWNlaG9sZGVyIGNoYW5nZXMsXG4gICAgICogc28gd2UgZm9yYmlkZGVuIElFMTEgdG8gb3BlbiBwYW5lbCB0aHJvdWdoIGlucHV0IGNoYW5nZVxuICAgICAqL1xuICAgIGlmIChcbiAgICAgICF0aGlzLnBsYXRmb3JtLlRSSURFTlQgJiZcbiAgICAgIHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5nZXRJbnB1dCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0KSAmJlxuICAgICAgIXRoaXMucmVhbE9wZW5TdGF0ZVxuICAgICkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY2hlY2tWYWxpZERhdGUodmFsdWUpO1xuICAgIC8vIENhbiBvbmx5IGNoYW5nZSBkYXRlIHdoZW4gaXQncyBvcGVuXG4gICAgaWYgKGRhdGUgJiYgdGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLnBhbmVsLmNoYW5nZVZhbHVlRnJvbVNlbGVjdChkYXRlLCBpc0VudGVyKTtcbiAgICB9XG4gIH1cblxuICBvbktleXVwRW50ZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1ZhbGlkRGF0ZSh2YWx1ZTogc3RyaW5nKTogQ2FuZHlEYXRlIHwgbnVsbCB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBDYW5keURhdGUodGhpcy5kYXRlSGVscGVyLnBhcnNlRGF0ZSh2YWx1ZSwgdGhpcy5uekZvcm1hdCkpO1xuXG4gICAgaWYgKCFkYXRlLmlzVmFsaWQoKSB8fCB2YWx1ZSAhPT0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLm5hdGl2ZURhdGUsIHRoaXMubnpGb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMubnpQbGFjZUhvbGRlclt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlISldIDogKHRoaXMubnpQbGFjZUhvbGRlciBhcyBzdHJpbmcpO1xuICB9XG5cbiAgaXNFbXB0eVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSh2YWwgPT4gIXZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2hldGhlciBvcGVuIHN0YXRlIGlzIHBlcm1hbmVudGx5IGNvbnRyb2xsZWQgYnkgdXNlciBoaW1zZWxmXG4gIGlzT3BlbkhhbmRsZWRCeVVzZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpPcGVuICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSW5wdXQgQVBJIEVuZFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHVibGljIGRhdGVQaWNrZXJTZXJ2aWNlOiBEYXRlUGlja2VyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICAgIHRoaXMub3JpZ2luID0gbmV3IENka092ZXJsYXlPcmlnaW4odGhpcy5lbGVtZW50UmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxuICAgIGlmICghdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaXNSYW5nZSA9IHRoaXMuaXNSYW5nZTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRWYWx1ZSh0cnVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbml0aWFsVmFsdWUgPSBjbG9uZURhdGUodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICBjb25zdCB2QXNSYW5nZSA9IHZhbHVlIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgICBpZiAodkFzUmFuZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFt2QXNSYW5nZVswXT8ubmF0aXZlRGF0ZSA/PyBudWxsLCB2QXNSYW5nZVsxXT8ubmF0aXZlRGF0ZSA/PyBudWxsXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFtdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKCh2YWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5vblRvdWNoZWRGbigpO1xuICAgICAgLy8gV2hlbiB2YWx1ZSBlbWl0dGVkLCBvdmVybGF5IHdpbGwgYmUgY2xvc2VkXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFsnJywgJyddIDogJyc7XG4gICAgdGhpcy5zZXRNb2RlQW5kRm9ybWF0KCk7XG5cbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56UG9wdXBTdHlsZSkge1xuICAgICAgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcbiAgICAgIHRoaXMubnpQb3B1cFN0eWxlID0gdGhpcy5uelBvcHVwU3R5bGUgPyB7IC4uLnRoaXMubnpQb3B1cFN0eWxlLCAuLi5QT1BVUF9TVFlMRV9QQVRDSCB9IDogUE9QVVBfU1RZTEVfUEFUQ0g7XG4gICAgfVxuXG4gICAgLy8gTWFyayBhcyBjdXN0b21pemVkIHBsYWNlaG9sZGVyIGJ5IHVzZXIgb25jZSBuelBsYWNlSG9sZGVyIGFzc2lnbmVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgaWYgKGNoYW5nZXMubnpQbGFjZUhvbGRlcj8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56Rm9ybWF0Py5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuaXNDdXN0b21Gb3JtYXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56TG9jYWxlKSB7XG4gICAgICAvLyBUaGUgbnpMb2NhbGUgaXMgY3VycmVudGx5IGhhbmRsZWQgYnkgdXNlclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyISk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpNb2RlKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICAgICAgdGhpcy5zZXRNb2RlQW5kRm9ybWF0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHNldE1vZGVBbmRGb3JtYXQoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRGb3JtYXRzOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmcgfSA9IHtcbiAgICAgIHllYXI6ICd5eXl5JyxcbiAgICAgIG1vbnRoOiAneXl5eS1NTScsXG4gICAgICB3ZWVrOiB0aGlzLmkxOG4uZ2V0RGF0ZUxvY2FsZSgpID8gJ1JSUlItSUknIDogJ3l5eXktd3cnLCAvLyBGb3JtYXQgZm9yIHdlZWtcbiAgICAgIGRhdGU6IHRoaXMubnpTaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJ1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMubnpNb2RlKSB7XG4gICAgICB0aGlzLm56TW9kZSA9ICdkYXRlJztcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuaXNSYW5nZSA/IFt0aGlzLm56TW9kZSwgdGhpcy5uek1vZGVdIDogdGhpcy5uek1vZGU7XG5cbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21Gb3JtYXQpIHtcbiAgICAgIHRoaXMubnpGb3JtYXQgPSBpbnB1dEZvcm1hdHNbdGhpcy5uek1vZGUgYXMgTnpEYXRlTW9kZV0hO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRTaXplID0gTWF0aC5tYXgoMTAsIHRoaXMubnpGb3JtYXQubGVuZ3RoKSArIDI7XG4gICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcbiAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcbiAgICovXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcbiAgb25DaGFuZ2VGbjogT25DaGFuZ2VUeXBlID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xuICAgIHRoaXMubnpMb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlcicsIHt9KTtcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5uekxvY2FsZSkge1xuICAgICAgY29uc3QgZGVmYXVsdFBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmcgfSA9IHtcbiAgICAgICAgeWVhcjogdGhpcy5nZXRQcm9wZXJ0eU9mTG9jYWxlKCd5ZWFyUGxhY2Vob2xkZXInKSxcbiAgICAgICAgbW9udGg6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgnbW9udGhQbGFjZWhvbGRlcicpLFxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3dlZWtQbGFjZWhvbGRlcicpLFxuICAgICAgICBkYXRlOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3BsYWNlaG9sZGVyJylcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlZmF1bHRSYW5nZVBsYWNlaG9sZGVyOiB7IFtrZXkgaW4gTnpEYXRlTW9kZV0/OiBzdHJpbmdbXSB9ID0ge1xuICAgICAgICB5ZWFyOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlWWVhclBsYWNlaG9sZGVyJyksXG4gICAgICAgIG1vbnRoOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlTW9udGhQbGFjZWhvbGRlcicpLFxuICAgICAgICB3ZWVrOiB0aGlzLmdldFByb3BlcnR5T2ZMb2NhbGUoJ3JhbmdlV2Vla1BsYWNlaG9sZGVyJyksXG4gICAgICAgIGRhdGU6IHRoaXMuZ2V0UHJvcGVydHlPZkxvY2FsZSgncmFuZ2VQbGFjZWhvbGRlcicpXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm56UGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2VcbiAgICAgICAgPyBkZWZhdWx0UmFuZ2VQbGFjZWhvbGRlclt0aGlzLm56TW9kZSBhcyBOekRhdGVNb2RlXSFcbiAgICAgICAgOiBkZWZhdWx0UGxhY2Vob2xkZXJbdGhpcy5uek1vZGUgYXMgTnpEYXRlTW9kZV0hO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvcGVydHlPZkxvY2FsZTxUIGV4dGVuZHMga2V5b2YgTnpEYXRlUGlja2VyTGFuZ0kxOG5JbnRlcmZhY2U+KHR5cGU6IFQpOiBOekRhdGVQaWNrZXJMYW5nSTE4bkludGVyZmFjZVtUXSB7XG4gICAgcmV0dXJuIHRoaXMubnpMb2NhbGUubGFuZ1t0eXBlXSB8fCB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YShgRGF0ZVBpY2tlci5sYW5nLiR7dHlwZX1gKTtcbiAgfVxuXG4gIC8vIFNhZmUgd2F5IG9mIHNldHRpbmcgdmFsdWUgd2l0aCBkZWZhdWx0XG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWU6IENvbXBhdGlibGVWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubWFrZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmluaXRpYWxWYWx1ZSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgcmVuZGVyQ2xhc3ModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBhdm9pZCBhdXRvRm9jdXMgY2F1c2UgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtcGlja2VyLWZvY3VzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1waWNrZXItZm9jdXNlZCcpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKHBhbmVsTW9kZTogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXSk6IHZvaWQge1xuICAgIHRoaXMubnpPblBhbmVsQ2hhbmdlLmVtaXQocGFuZWxNb2RlKTtcbiAgfVxuXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB2YWx1ZS5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgQ2FuZHlEYXRlKS5tYXAoeCA9PiB4IS5uYXRpdmVEYXRlKTtcbiAgICAgIHRoaXMubnpPbkNhbGVuZGFyQ2hhbmdlLmVtaXQocmFuZ2VWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW3ZhbHVlWzBdPy5uYXRpdmVEYXRlIHx8IG51bGwsIHZhbHVlWzFdPy5uYXRpdmVEYXRlIHx8IG51bGxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KCh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19