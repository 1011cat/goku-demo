(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/i18n'),require('@angular/common'),require('ng-zorro-antd/button'),require('ng-zorro-antd/core/wave'),require('ng-zorro-antd/core/transition-patch'),require('ng-zorro-antd/core/config'),require('ng-zorro-antd/core/resize-observers'),require('@angular/cdk/platform'),require('@angular/cdk/bidi'),require('ng-zorro-antd/core/no-animation'),require('@angular/cdk/overlay'),require('ng-zorro-antd/core/overlay'),require('@angular/forms'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/outlet'),require('ng-zorro-antd/time-picker'),exports, require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/core/time'), require('ng-zorro-antd/core/util'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/resize-observers'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/cdk/platform'), require('ng-zorro-antd/core/config')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/date-picker', ['@angular/core','ng-zorro-antd/i18n','@angular/common','ng-zorro-antd/button','ng-zorro-antd/core/wave','ng-zorro-antd/core/transition-patch','ng-zorro-antd/core/config','ng-zorro-antd/core/resize-observers','@angular/cdk/platform','@angular/cdk/bidi','ng-zorro-antd/core/no-animation','@angular/cdk/overlay','ng-zorro-antd/core/overlay','@angular/forms','ng-zorro-antd/icon','ng-zorro-antd/core/outlet','ng-zorro-antd/time-picker','exports', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/icon', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/core/time', 'ng-zorro-antd/core/util', 'ng-zorro-antd/i18n', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/resize-observers', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/cdk/platform', 'ng-zorro-antd/core/config'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.i18n,global.ng.common,global.ngZorroAntd.button,global.ngZorroAntd.core.wave,global.ngZorroAntd.core.transitionPatch,global.ngZorroAntd.core.config,global.ngZorroAntd.core.resizeObservers,global.ng.cdk.platform,global.ng.cdk.bidi,global.ngZorroAntd.core.noAnimation,global.ng.cdk.overlay,global.ngZorroAntd.core.overlay,global.ng.forms,global.ngZorroAntd.icon,global.ngZorroAntd.core.outlet,global.ngZorroAntd.timePicker,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['date-picker'] = {}), global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].icon, global['ng-zorro-antd']['time-picker'], global['ng-zorro-antd'].core.time, global['ng-zorro-antd'].core.util, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core['resize-observers'], global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.cdk.platform, global['ng-zorro-antd'].core.config));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,ɵngcc13,ɵngcc14,ɵngcc15,ɵngcc16,exports, bidi, overlay, common, core, forms, button, noAnimation, outlet, overlay$1, icon, timePicker, time, util, i18n, animation, resizeObservers, rxjs, operators, keycodes, platform, config) { 
function CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraFooter);
} }
function CalendarFooterComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.extraFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementContainerStart(1, 2);
    ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_div_1_ng_container_3_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-footer-extra");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.extraFooter));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.extraFooter));
} }
function CalendarFooterComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 6);
    ɵngcc0.ɵɵlistener("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r1.prefixCls, "-today-btn ", ctx_r1.isTodayDisabled ? ctx_r1.prefixCls + "-today-btn-disabled" : "", "");
    ɵngcc0.ɵɵpropertyInterpolate("title", ctx_r1.todayTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.locale.today, " ");
} }
function CalendarFooterComponent_ul_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function CalendarFooterComponent_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r12); var ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-now");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-now-btn");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r9.locale.now, " ");
} }
function CalendarFooterComponent_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 8);
    ɵngcc0.ɵɵlistener("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r10.prefixCls, "-ok");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r10.okDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r10.locale.ok, " ");
} }
function CalendarFooterComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul");
    ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_ul_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_ul_3_li_2_Template, 3, 7, "li", 0);
    ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_ul_3_li_3_Template, 3, 5, "li", 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-ranges");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.rangeQuickSelector);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showNow);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.hasTimePicker);
} }
function DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c0 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r9.datePickerService.activeInput));
} }
function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c1 = function () { return { partType: "left" }; };
var _c2 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(4, _c1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(5, _c2));
} }
function DateRangePopupComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelement(2, "div");
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, DateRangePopupComponent_ng_container_0_ng_container_5_Template, 2, 4, "ng-container", 0);
    ɵngcc0.ɵɵtemplate(6, DateRangePopupComponent_ng_container_0_ng_template_6_Template, 2, 6, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, DateRangePopupComponent_ng_container_0_ng_container_8_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r10 = ɵngcc0.ɵɵreference(7);
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-range-arrow");
    ɵngcc0.ɵɵstyleProp("left", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.arrowLeft, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panel-container");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panels");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.hasTimePicker)("ngIfElse", _r10);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵtemplate(2, DateRangePopupComponent_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r3 = ɵngcc0.ɵɵreference(4);
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵclassMapInterpolate4("", ctx_r2.prefixCls, "-panel-container ", ctx_r2.showWeek ? ctx_r2.prefixCls + "-week-number" : "", " ", ctx_r2.hasTimePicker ? ctx_r2.prefixCls + "-time" : "", " ", ctx_r2.isRange ? ctx_r2.prefixCls + "-range" : "", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-panel");
    ɵngcc0.ɵɵclassProp("ant-picker-panel-rtl", ctx_r2.dir === "rtl");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "inner-popup", 9);
    ɵngcc0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var partType_r18 = ctx.partType; var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onPanelModeChange($event, partType_r18); })("cellHover", function DateRangePopupComponent_ng_template_3_Template_inner_popup_cellHover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onCellHover($event); })("selectDate", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectDate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changeValueFromSelect($event, !ctx_r22.showTime); })("selectTime", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectTime_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var partType_r18 = ctx.partType; var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onSelectTime($event, partType_r18); })("headerChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_headerChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); var partType_r18 = ctx.partType; var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onActiveDateChange($event, partType_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r18 = ctx.partType;
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-panel");
    ɵngcc0.ɵɵclassProp("ant-picker-panel-rtl", ctx_r4.dir === "rtl");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showWeek", ctx_r4.showWeek)("endPanelMode", ctx_r4.getPanelMode(ctx_r4.endPanelMode, partType_r18))("partType", partType_r18)("locale", ctx_r4.locale)("showTimePicker", ctx_r4.hasTimePicker)("timeOptions", ctx_r4.getTimeOptions(partType_r18))("panelMode", ctx_r4.getPanelMode(ctx_r4.panelMode, partType_r18))("activeDate", ctx_r4.getActiveDate(partType_r18))("value", ctx_r4.getValue(partType_r18))("disabledDate", ctx_r4.disabledDate)("dateRender", ctx_r4.dateRender)("selectedValue", ctx_r4.datePickerService == null ? null : ctx_r4.datePickerService.value)("hoverValue", ctx_r4.hoverValue);
} }
function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    var _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "calendar-footer", 11);
    ɵngcc0.ɵɵlistener("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); var ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onClickToday($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    var _r7 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵproperty("locale", ctx_r25.locale)("isRange", ctx_r25.isRange)("showToday", ctx_r25.showToday)("showNow", ctx_r25.showNow)("hasTimePicker", ctx_r25.hasTimePicker)("okDisabled", !ctx_r25.isAllowed(ctx_r25.datePickerService == null ? null : ctx_r25.datePickerService.value))("extraFooter", ctx_r25.extraFooter)("rangeQuickSelector", ctx_r25.ranges ? _r7 : null);
} }
function DateRangePopupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 8, "calendar-footer", 10);
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.hasFooter);
} }
function DateRangePopupComponent_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_li_0_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); var name_r30 = ctx.$implicit; var ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.onClickPresetRange(ctx_r31.ranges[name_r30]); })("mouseenter", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); var name_r30 = ctx.$implicit; var ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onHoverPresetRange(ctx_r33.ranges[name_r30]); })("mouseleave", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); var ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.onPresetRangeMouseLeave(); });
    ɵngcc0.ɵɵelementStart(1, "span", 14);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var name_r30 = ctx.$implicit;
    var ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r29.prefixCls, "-preset");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(name_r30);
} }
function DateRangePopupComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_7_li_0_Template, 3, 4, "li", 12);
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r8.getObjectKeys(ctx_r8.ranges));
} }
var _c3 = ["separatorElement"];
var _c4 = ["pickerInput"];
var _c5 = ["rangePickerInput"];
function NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDatePickerComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 7, 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.inputValue = $event; })("focus", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focus_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r14 = ɵngcc0.ɵɵnextContext(2); return ctx_r14.onFocus($event); })("focusout", function NzDatePickerComponent_ng_container_0_div_1_Template_input_focusout_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onFocusout($event); })("ngModelChange", function NzDatePickerComponent_ng_container_0_div_1_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onInputChange($event); })("keyup.enter", function NzDatePickerComponent_ng_container_0_div_1_Template_input_keyup_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onKeyupEnter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, NzDatePickerComponent_ng_container_0_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
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
    var ctx_r20 = ɵngcc0.ɵɵnextContext(3);
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
    var _r21 = ɵngcc0.ɵɵreference(8);
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    var _r1 = ɵngcc0.ɵɵreference(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(19, _c1));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-range-separator");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-separator");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzSeparator)("ngIfElse", _r21);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-input");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction0(20, _c2));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzDatePickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_ng_container_0_div_1_Template, 4, 12, "div", 5);
    ɵngcc0.ɵɵtemplate(2, NzDatePickerComponent_ng_container_0_ng_container_2_Template, 12, 21, "ng-container", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.isRange);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isRange);
} }
function NzDatePickerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 14, 15);
    ɵngcc0.ɵɵlistener("click", function NzDatePickerComponent_ng_template_1_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.onClickInputBox($event); })("focusout", function NzDatePickerComponent_ng_template_1_Template_input_focusout_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onFocusout($event); })("focus", function NzDatePickerComponent_ng_template_1_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var partType_r25 = ctx.partType; var ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.onFocus($event, partType_r25); })("keyup.enter", function NzDatePickerComponent_ng_template_1_Template_input_keyup_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.onKeyupEnter($event); })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var partType_r25 = ctx.partType; var ctx_r32 = ɵngcc0.ɵɵnextContext(); return (ctx_r32.inputValue[ctx_r32.datePickerService.getActiveIndex(partType_r25)] = $event); })("ngModelChange", function NzDatePickerComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r28); var ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.onInputChange($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var partType_r25 = ctx.partType;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵpropertyInterpolate("placeholder", ctx_r2.getPlaceholder(partType_r25));
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize)("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r25)]);
} }
function NzDatePickerComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵlistener("click", function NzDatePickerComponent_ng_template_3_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); var ctx_r36 = ɵngcc0.ɵɵnextContext(2); return ctx_r36.onClickClear($event); });
    ɵngcc0.ɵɵelement(1, "i", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r34 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r34.prefixCls, "-clear");
} }
function NzDatePickerComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var suffixIcon_r38 = ctx.$implicit;
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
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
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
    var _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "div", 16);
    ɵngcc0.ɵɵelementStart(2, "date-range-popup", 23);
    ɵngcc0.ɵɵlistener("panelModeChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_panelModeChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r39 = ɵngcc0.ɵɵnextContext(); return ctx_r39.onPanelModeChange($event); })("calendarChange", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_calendarChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r41 = ɵngcc0.ɵɵnextContext(); return ctx_r41.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_ng_template_5_Template_date_range_popup_resultOk_2_listener() { ɵngcc0.ɵɵrestoreView(_r40); var ctx_r42 = ɵngcc0.ɵɵnextContext(); return ctx_r42.onResultOk(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
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
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function InnerPopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "decade-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "decade-table", 5);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onChooseDecade($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
} }
function InnerPopupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "year-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "year-table", 6);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onChooseYear($event); })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
} }
function InnerPopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    var _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "month-header", 4);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "month-table", 7);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.onChooseMonth($event); })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
} }
function InnerPopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    var _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "date-header", 8);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.headerChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "date-table", 9);
    ɵngcc0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onSelectDate($event); })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.cellHover.emit($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-body");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
} }
function InnerPopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    var _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "nz-time-picker-panel", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); var ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.onSelectTime($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
} }
function DateHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() { var selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r1.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
function DateTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 6);
} }
function DateTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r4 = ctx.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r4.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function DateTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr", 3);
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    ɵngcc0.ɵɵtemplate(3, DateTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function DateTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-cell-week");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r5.weekNum, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c6 = function (a0) { return { $implicit: a0 }; };
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", cell_r9.cellRender, ɵngcc0.ɵɵsanitizeHtml);
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r14.prefixCls, "-cell-inner");
    ɵngcc0.ɵɵattribute("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r9.content, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(4, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r9.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c6, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    ɵngcc0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r21 = ɵngcc0.ɵɵreference(4);
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    ɵngcc0.ɵɵclassProp("ant-picker-calendar-date-today", cell_r9.isToday);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function DateTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 12);
    ɵngcc0.ɵɵlistener("click", function DateTableComponent_tr_3_td_2_Template_td_click_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DateTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, DateTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ctx.$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r9.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r9.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r7.prefixCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker-calendar");
} }
function DateTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 8);
    ɵngcc0.ɵɵtemplate(1, DateTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    ɵngcc0.ɵɵtemplate(2, DateTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", row_r5.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r5.weekNum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() { var selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r1.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
function DecadeTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 6);
} }
function DecadeTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r4 = ctx.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r4.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function DecadeTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr", 3);
    ɵngcc0.ɵɵtemplate(2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function DecadeTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-cell-week");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r5.weekNum, " ");
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", cell_r9.cellRender, ɵngcc0.ɵɵsanitizeHtml);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r14.prefixCls, "-cell-inner");
    ɵngcc0.ɵɵattribute("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r9.content, " ");
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r9.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c6, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r21 = ɵngcc0.ɵɵreference(4);
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    ɵngcc0.ɵɵclassProp("ant-picker-calendar-date-today", cell_r9.isToday);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function DecadeTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 12);
    ɵngcc0.ɵɵlistener("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ctx.$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r9.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r9.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r7.prefixCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker-calendar");
} }
function DecadeTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 8);
    ɵngcc0.ɵɵtemplate(1, DecadeTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    ɵngcc0.ɵɵtemplate(2, DecadeTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", row_r5.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r5.weekNum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function MonthHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() { var selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r1.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
function MonthTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 6);
} }
function MonthTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r4 = ctx.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r4.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function MonthTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr", 3);
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function MonthTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-cell-week");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r5.weekNum, " ");
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", cell_r9.cellRender, ɵngcc0.ɵɵsanitizeHtml);
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r14.prefixCls, "-cell-inner");
    ɵngcc0.ɵɵattribute("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r9.content, " ");
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r9.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c6, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r21 = ɵngcc0.ɵɵreference(4);
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    ɵngcc0.ɵɵclassProp("ant-picker-calendar-date-today", cell_r9.isToday);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function MonthTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 12);
    ɵngcc0.ɵɵlistener("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ctx.$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r9.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r9.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r7.prefixCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker-calendar");
} }
function MonthTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 8);
    ɵngcc0.ɵɵtemplate(1, MonthTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    ɵngcc0.ɵɵtemplate(2, MonthTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", row_r5.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r5.weekNum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function YearHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 6);
    ɵngcc0.ɵɵlistener("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() { var selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var selector_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(selector_r1.className);
    ɵngcc0.ɵɵpropertyInterpolate("title", selector_r1.title || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", selector_r1.label, " ");
} }
function YearTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "th", 6);
} }
function YearTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r4 = ctx.$implicit;
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r4.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r4.content, " ");
} }
function YearTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr", 3);
    ɵngcc0.ɵɵtemplate(2, YearTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    ɵngcc0.ɵɵtemplate(3, YearTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.showWeek);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.headRow);
} }
function YearTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 11);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-cell-week");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", row_r5.weekNum, " ");
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", cell_r9.cellRender, ɵngcc0.ɵɵsanitizeHtml);
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r14.prefixCls, "-cell-inner");
    ɵngcc0.ɵɵattribute("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", cell_r9.content, " ");
} }
function YearTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(4, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c6, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ɵngcc0.ɵɵnextContext(2).$implicit;
    var ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-value");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(cell_r9.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r22.prefixCls, "-date-content");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c6, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    ɵngcc0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r21 = ɵngcc0.ɵɵreference(4);
    var cell_r9 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    ɵngcc0.ɵɵclassProp("ant-picker-calendar-date-today", cell_r9.isToday);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function YearTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 12);
    ɵngcc0.ɵɵlistener("click", function YearTableComponent_tr_3_td_2_Template_td_click_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function YearTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { var cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    ɵngcc0.ɵɵelementContainerStart(1, 13);
    ɵngcc0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    ɵngcc0.ɵɵtemplate(3, YearTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r9 = ctx.$implicit;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵpropertyInterpolate("title", cell_r9.title);
    ɵngcc0.ɵɵproperty("ngClass", cell_r9.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r7.prefixCls);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "ant-picker-calendar");
} }
function YearTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 8);
    ɵngcc0.ɵɵtemplate(1, YearTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    ɵngcc0.ɵɵtemplate(2, YearTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r5 = ctx.$implicit;
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", row_r5.classMap);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", row_r5.weekNum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var PREFIX_CLASS = 'ant-picker';
    var defaultDisabledTime = {
        nzDisabledHours: function () {
            return [];
        },
        nzDisabledMinutes: function () {
            return [];
        },
        nzDisabledSeconds: function () {
            return [];
        }
    };
    function getTimeConfig(value, disabledTime) {
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
        disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
        return disabledTimeConfig;
    }
    function isTimeValidByConfig(value, disabledTimeConfig) {
        var invalidTime = false;
        if (value) {
            var hour = value.getHours();
            var minutes = value.getMinutes();
            var seconds = value.getSeconds();
            var disabledHours = disabledTimeConfig.nzDisabledHours();
            if (disabledHours.indexOf(hour) === -1) {
                var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
                if (disabledMinutes.indexOf(minutes) === -1) {
                    var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                    invalidTime = disabledSeconds.indexOf(seconds) !== -1;
                }
                else {
                    invalidTime = true;
                }
            }
            else {
                invalidTime = true;
            }
        }
        return !invalidTime;
    }
    function isTimeValid(value, disabledTime) {
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
    }
    function isAllowedDate(value, disabledDate, disabledTime) {
        if (!value) {
            return false;
        }
        if (disabledDate) {
            if (disabledDate(value.nativeDate)) {
                return false;
            }
        }
        if (disabledTime) {
            if (!isTimeValid(value, disabledTime)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param format input format pattern
     */
    function transCompatFormat(format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    }

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var CalendarFooterComponent = /** @class */ (function () {
        function CalendarFooterComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.showToday = false;
            this.showNow = false;
            this.hasTimePicker = false;
            this.isRange = false;
            this.okDisabled = false;
            this.rangeQuickSelector = null;
            this.clickOk = new core.EventEmitter();
            this.clickToday = new core.EventEmitter();
            this.prefixCls = PREFIX_CLASS;
            this.isTemplateRef = util.isTemplateRef;
            this.isNonEmptyString = util.isNonEmptyString;
            this.isTodayDisabled = false;
            this.todayTitle = '';
        }
        CalendarFooterComponent.prototype.ngOnChanges = function (changes) {
            var now = new Date();
            if (changes.disabledDate) {
                this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
            }
            if (changes.locale) {
                // NOTE: Compat for DatePipe formatting rules
                var dateFormat = transCompatFormat(this.locale.dateFormat);
                this.todayTitle = this.dateHelper.format(now, dateFormat);
            }
        };
        CalendarFooterComponent.prototype.onClickToday = function () {
            var now = new time.CandyDate();
            this.clickToday.emit(now.clone()); // To prevent the "now" being modified from outside, we use clone
        };
CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
CalendarFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { showToday: "showToday", showNow: "showNow", hasTimePicker: "hasTimePicker", isRange: "isRange", okDisabled: "okDisabled", rangeQuickSelector: "rangeQuickSelector", locale: "locale", disabledDate: "disabledDate", extraFooter: "extraFooter" }, outputs: { clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 6, consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled", "click"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, CalendarFooterComponent_div_1_Template, 4, 6, "div", 0);
        ɵngcc0.ɵɵtemplate(2, CalendarFooterComponent_a_2_Template, 2, 6, "a", 1);
        ɵngcc0.ɵɵtemplate(3, CalendarFooterComponent_ul_3_Template, 4, 6, "ul", 0);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-footer");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.extraFooter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showToday);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasTimePicker || ctx.rangeQuickSelector);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzButtonComponent, ɵngcc4.NzWaveDirective, ɵngcc5.ɵNzTransitionPatchDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CalendarFooterComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: "\n    <div class=\"{{ prefixCls }}-footer\">\n      <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra\">\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n            <ng-container *ngTemplateOutlet=\"$any(extraFooter)\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n            <span [innerHTML]=\"extraFooter\"></span>\n          </ng-container>\n        </ng-container>\n      </div>\n      <a\n        *ngIf=\"showToday\"\n        class=\"{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n        role=\"button\"\n        (click)=\"isTodayDisabled ? null : onClickToday()\"\n        title=\"{{ todayTitle }}\"\n      >\n        {{ locale.today }}\n      </a>\n      <ul *ngIf=\"hasTimePicker || rangeQuickSelector\" class=\"{{ prefixCls }}-ranges\">\n        <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n        <li *ngIf=\"showNow\" class=\"{{ prefixCls }}-now\">\n          <a class=\"{{ prefixCls }}-now-btn\" (click)=\"isTodayDisabled ? null : onClickToday()\">\n            {{ locale.now }}\n          </a>\n        </li>\n        <li *ngIf=\"hasTimePicker\" class=\"{{ prefixCls }}-ok\">\n          <button\n            nz-button\n            type=\"button\"\n            nzType=\"primary\"\n            nzSize=\"small\"\n            [disabled]=\"okDisabled\"\n            (click)=\"okDisabled ? null : clickOk.emit()\"\n          >\n            {{ locale.ok }}\n          </button>\n        </li>\n      </ul>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, { showToday: [{
            type: core.Input
        }], showNow: [{
            type: core.Input
        }], hasTimePicker: [{
            type: core.Input
        }], isRange: [{
            type: core.Input
        }], okDisabled: [{
            type: core.Input
        }], rangeQuickSelector: [{
            type: core.Input
        }], clickOk: [{
            type: core.Output
        }], clickToday: [{
            type: core.Output
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], extraFooter: [{
            type: core.Input
        }] }); })();
        return CalendarFooterComponent;
    }());
    CalendarFooterComponent.ctorParameters = function () { return [
        { type: i18n.DateHelperService }
    ]; };
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: core.Input }],
        showToday: [{ type: core.Input }],
        showNow: [{ type: core.Input }],
        hasTimePicker: [{ type: core.Input }],
        isRange: [{ type: core.Input }],
        okDisabled: [{ type: core.Input }],
        disabledDate: [{ type: core.Input }],
        extraFooter: [{ type: core.Input }],
        rangeQuickSelector: [{ type: core.Input }],
        clickOk: [{ type: core.Output }],
        clickToday: [{ type: core.Output }]
    };

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
    var DatePickerService = /** @class */ (function () {
        function DatePickerService() {
            this.activeInput = 'left';
            this.arrowLeft = 0;
            this.isRange = false;
            this.valueChange$ = new rxjs.ReplaySubject(1);
            this.emitValue$ = new rxjs.Subject();
            this.inputPartChange$ = new rxjs.Subject();
        }
        DatePickerService.prototype.initValue = function (reset) {
            if (reset === void 0) { reset = false; }
            if (reset) {
                this.initialValue = this.isRange ? [] : null;
            }
            this.setValue(this.initialValue);
        };
        DatePickerService.prototype.hasValue = function (value) {
            if (value === void 0) { value = this.value; }
            if (Array.isArray(value)) {
                return !!value[0] || !!value[1];
            }
            else {
                return !!value;
            }
        };
        DatePickerService.prototype.makeValue = function (value) {
            if (this.isRange) {
                return value ? value.map(function (val) { return new time.CandyDate(val); }) : [];
            }
            else {
                return value ? new time.CandyDate(value) : null;
            }
        };
        DatePickerService.prototype.setActiveDate = function (value, hasTimePicker, mode) {
            if (hasTimePicker === void 0) { hasTimePicker = false; }
            if (mode === void 0) { mode = 'month'; }
            var parentPanels = {
                date: 'month',
                month: 'year',
                year: 'decade'
            };
            if (this.isRange) {
                this.activeDate = time.normalizeRangeValue(value, hasTimePicker, parentPanels[mode], this.activeInput);
            }
            else {
                this.activeDate = time.cloneDate(value);
            }
        };
        DatePickerService.prototype.setValue = function (value) {
            this.value = value;
            this.valueChange$.next(this.value);
        };
        DatePickerService.prototype.getActiveIndex = function (part) {
            if (part === void 0) { part = this.activeInput; }
            return { left: 0, right: 1 }[part];
        };
        DatePickerService.prototype.ngOnDestroy = function () {
            this.valueChange$.complete();
            this.emitValue$.complete();
            this.inputPartChange$.complete();
        };
DatePickerService.ɵfac = function DatePickerService_Factory(t) { return new (t || DatePickerService)(); };
DatePickerService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DatePickerService, factory: function (t) { return DatePickerService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DatePickerService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();
        return DatePickerService;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var DateRangePopupComponent = /** @class */ (function () {
        function DateRangePopupComponent(datePickerService, cdr) {
            var _this = this;
            this.datePickerService = datePickerService;
            this.cdr = cdr;
            this.inline = false;
            this.dir = 'ltr';
            this.panelModeChange = new core.EventEmitter();
            this.calendarChange = new core.EventEmitter();
            this.resultOk = new core.EventEmitter(); // Emitted when done with date selecting
            this.prefixCls = PREFIX_CLASS;
            this.endPanelMode = 'date';
            this.timeOptions = null;
            this.hoverValue = []; // Range ONLY
            this.checkedPartArr = [false, false];
            this.destroy$ = new rxjs.Subject();
            this.disabledStartTime = function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'start');
            };
            this.disabledEndTime = function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'end');
            };
        }
        Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
            get: function () {
                return !!this.showTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
            get: function () {
                return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
            },
            enumerable: false,
            configurable: true
        });
        DateRangePopupComponent.prototype.ngOnInit = function () {
            var _this = this;
            rxjs.merge(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateActiveDate();
                _this.cdr.markForCheck();
            });
        };
        DateRangePopupComponent.prototype.ngOnChanges = function (changes) {
            // Parse showTime options
            if (changes.showTime || changes.disabledTime) {
                if (this.showTime) {
                    this.buildTimeOptions();
                }
            }
            if (changes.panelMode) {
                this.endPanelMode = this.panelMode;
            }
            if (changes.defaultPickerValue) {
                this.updateActiveDate();
            }
        };
        DateRangePopupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        DateRangePopupComponent.prototype.updateActiveDate = function () {
            var activeDate = this.datePickerService.hasValue()
                ? this.datePickerService.value
                : this.datePickerService.makeValue(this.defaultPickerValue);
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
        };
        /**
         * Prevent input losing focus when click panel
         * @param event
         */
        DateRangePopupComponent.prototype.onMousedown = function (event) {
            event.preventDefault();
        };
        DateRangePopupComponent.prototype.onClickOk = function () {
            var inputIndex = { left: 0, right: 1 }[this.datePickerService.activeInput];
            var value = this.isRange
                ? this.datePickerService.value[inputIndex]
                : this.datePickerService.value;
            this.changeValueFromSelect(value);
            this.resultOk.emit();
        };
        DateRangePopupComponent.prototype.onClickToday = function (value) {
            this.changeValueFromSelect(value, !this.showTime);
        };
        DateRangePopupComponent.prototype.onCellHover = function (value) {
            if (!this.isRange) {
                return;
            }
            var otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
            var base = this.datePickerService.value[otherInputIndex];
            if (base) {
                if (base.isBeforeDay(value)) {
                    this.hoverValue = [base, value];
                }
                else {
                    this.hoverValue = [value, base];
                }
            }
        };
        DateRangePopupComponent.prototype.onPanelModeChange = function (mode, partType) {
            if (this.isRange) {
                var index = this.datePickerService.getActiveIndex(partType);
                if (index === 0) {
                    this.panelMode = [mode, this.panelMode[1]];
                }
                else {
                    this.panelMode = [this.panelMode[0], mode];
                }
            }
            else {
                this.panelMode = mode;
            }
            this.panelModeChange.emit(this.panelMode);
        };
        DateRangePopupComponent.prototype.onActiveDateChange = function (value, partType) {
            if (this.isRange) {
                var activeDate = [];
                activeDate[this.datePickerService.getActiveIndex(partType)] = value;
                this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
            }
            else {
                this.datePickerService.setActiveDate(value);
            }
        };
        DateRangePopupComponent.prototype.onSelectTime = function (value, partType) {
            if (this.isRange) {
                var newValue = time.cloneDate(this.datePickerService.value);
                var index = this.datePickerService.getActiveIndex(partType);
                newValue[index] = this.overrideHms(value, newValue[index]);
                this.datePickerService.setValue(newValue);
            }
            else {
                var newValue = this.overrideHms(value, this.datePickerService.value);
                this.datePickerService.setValue(newValue); // If not select a date currently, use today
            }
            this.datePickerService.inputPartChange$.next();
            this.buildTimeOptions();
        };
        DateRangePopupComponent.prototype.changeValueFromSelect = function (value, emitValue) {
            if (emitValue === void 0) { emitValue = true; }
            if (this.isRange) {
                var selectedValue = time.cloneDate(this.datePickerService.value);
                var checkedPart = this.datePickerService.activeInput;
                var nextPart = checkedPart;
                selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
                this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
                this.hoverValue = selectedValue;
                if (emitValue) {
                    if (this.inline) {
                        // For UE, Should always be reversed, and clear vaue when next part is right
                        nextPart = this.reversedPart(checkedPart);
                        if (nextPart === 'right') {
                            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                        }
                        this.datePickerService.setValue(selectedValue);
                        this.calendarChange.emit(selectedValue);
                        if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                            this.clearHoverValue();
                            this.datePickerService.emitValue$.next();
                        }
                    }
                    else {
                        /**
                         * if sort order is wrong, clear the other part's value
                         */
                        if (time.wrongSortOrder(selectedValue)) {
                            nextPart = this.reversedPart(checkedPart);
                            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                        }
                        this.datePickerService.setValue(selectedValue);
                        /**
                         * range date usually selected paired,
                         * so we emit the date value only both date is allowed and both part are checked
                         */
                        if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                            this.calendarChange.emit(selectedValue);
                            this.clearHoverValue();
                            this.datePickerService.emitValue$.next();
                        }
                        else if (this.isAllowed(selectedValue)) {
                            nextPart = this.reversedPart(checkedPart);
                            this.calendarChange.emit([value.clone()]);
                        }
                    }
                }
                else {
                    this.datePickerService.setValue(selectedValue);
                }
                this.datePickerService.inputPartChange$.next(nextPart);
            }
            else {
                this.datePickerService.setValue(value);
                this.datePickerService.inputPartChange$.next();
                if (emitValue && this.isAllowed(value)) {
                    this.datePickerService.emitValue$.next();
                }
            }
        };
        DateRangePopupComponent.prototype.reversedPart = function (part) {
            return part === 'left' ? 'right' : 'left';
        };
        DateRangePopupComponent.prototype.getPanelMode = function (panelMode, partType) {
            if (this.isRange) {
                return panelMode[this.datePickerService.getActiveIndex(partType)];
            }
            else {
                return panelMode;
            }
        };
        // Get single value or part value of a range
        DateRangePopupComponent.prototype.getValue = function (partType) {
            if (this.isRange) {
                return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
            }
            else {
                return this.datePickerService.value;
            }
        };
        DateRangePopupComponent.prototype.getActiveDate = function (partType) {
            if (this.isRange) {
                return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
            }
            else {
                return this.datePickerService.activeDate;
            }
        };
        DateRangePopupComponent.prototype.isOneAllowed = function (selectedValue) {
            var index = this.datePickerService.getActiveIndex();
            var disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
            return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
        };
        DateRangePopupComponent.prototype.isBothAllowed = function (selectedValue) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        };
        DateRangePopupComponent.prototype.isAllowed = function (value, isBoth) {
            if (isBoth === void 0) { isBoth = false; }
            if (this.isRange) {
                return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
            }
            else {
                return isAllowedDate(value, this.disabledDate, this.disabledTime);
            }
        };
        DateRangePopupComponent.prototype.getTimeOptions = function (partType) {
            if (this.showTime && this.timeOptions) {
                return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
            }
            return null;
        };
        DateRangePopupComponent.prototype.onClickPresetRange = function (val) {
            var value = typeof val === 'function' ? val() : val;
            if (value) {
                this.datePickerService.setValue([new time.CandyDate(value[0]), new time.CandyDate(value[1])]);
                this.datePickerService.emitValue$.next();
            }
        };
        DateRangePopupComponent.prototype.onPresetRangeMouseLeave = function () {
            this.clearHoverValue();
        };
        DateRangePopupComponent.prototype.onHoverPresetRange = function (val) {
            if (typeof val !== 'function') {
                this.hoverValue = [new time.CandyDate(val[0]), new time.CandyDate(val[1])];
            }
        };
        DateRangePopupComponent.prototype.getObjectKeys = function (obj) {
            return obj ? Object.keys(obj) : [];
        };
        DateRangePopupComponent.prototype.show = function (partType) {
            var hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
            return !hide;
        };
        DateRangePopupComponent.prototype.clearHoverValue = function () {
            this.hoverValue = [];
        };
        DateRangePopupComponent.prototype.buildTimeOptions = function () {
            if (this.showTime) {
                var showTime = typeof this.showTime === 'object' ? this.showTime : {};
                if (this.isRange) {
                    var value = this.datePickerService.value;
                    this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
                }
                else {
                    this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
                }
            }
            else {
                this.timeOptions = null;
            }
        };
        DateRangePopupComponent.prototype.overrideTimeOptions = function (origin, value, partial) {
            var disabledTimeFn;
            if (partial) {
                disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
            }
            else {
                disabledTimeFn = this.disabledTime;
            }
            return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
        };
        DateRangePopupComponent.prototype.overrideHms = function (newValue, oldValue) {
            // tslint:disable-next-line:no-parameter-reassignment
            newValue = newValue || new time.CandyDate();
            // tslint:disable-next-line:no-parameter-reassignment
            oldValue = oldValue || new time.CandyDate();
            return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
        };
DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(ɵngcc0.ɵɵdirectiveInject(DatePickerService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DateRangePopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], hostBindings: function DateRangePopupComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function DateRangePopupComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } }, inputs: { inline: "inline", dir: "dir", panelMode: "panelMode", isRange: "isRange", showWeek: "showWeek", locale: "locale", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showNow: "showNow", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", defaultPickerValue: "defaultPickerValue" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", resultOk: "resultOk" }, exportAs: ["dateRangePopup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], ["noTimePicker", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_container_0_Template, 9, 18, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_1_Template, 4, 13, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_3_Template, 2, 18, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, DateRangePopupComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, InnerPopupComponent, CalendarFooterComponent, ɵngcc2.NgForOf]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateRangePopupComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: "\n    <ng-container *ngIf=\"isRange; else singlePanel\">\n      <div class=\"{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper\">\n        <div class=\"{{ prefixCls }}-range-arrow\" [style.left.px]=\"datePickerService?.arrowLeft\"></div>\n        <div class=\"{{ prefixCls }}-panel-container\">\n          <div class=\"{{ prefixCls }}-panels\">\n            <ng-container *ngIf=\"hasTimePicker; else noTimePicker\">\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: datePickerService.activeInput }\"></ng-container>\n            </ng-container>\n            <ng-template #noTimePicker>\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: 'left' }\"></ng-container>\n              <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: 'right' }\"></ng-container>\n            </ng-template>\n          </div>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-container>\n    <ng-template #singlePanel>\n      <div\n        class=\"{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{\n          hasTimePicker ? prefixCls + '-time' : ''\n        }} {{ isRange ? prefixCls + '-range' : '' }}\"\n      >\n        <div class=\"{{ prefixCls }}-panel\" [class.ant-picker-panel-rtl]=\"dir === 'rtl'\" tabindex=\"-1\">\n          <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template #tplInnerPopup let-partType=\"partType\">\n      <div class=\"{{ prefixCls }}-panel\" [class.ant-picker-panel-rtl]=\"dir === 'rtl'\">\n        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->\n        <inner-popup\n          [showWeek]=\"showWeek\"\n          [endPanelMode]=\"getPanelMode(endPanelMode, partType)\"\n          [partType]=\"partType\"\n          [locale]=\"locale!\"\n          [showTimePicker]=\"hasTimePicker\"\n          [timeOptions]=\"getTimeOptions(partType)\"\n          [panelMode]=\"getPanelMode(panelMode, partType)\"\n          (panelModeChange)=\"onPanelModeChange($event, partType)\"\n          [activeDate]=\"getActiveDate(partType)\"\n          [value]=\"getValue(partType)\"\n          [disabledDate]=\"disabledDate\"\n          [dateRender]=\"dateRender\"\n          [selectedValue]=\"$any(datePickerService?.value)\"\n          [hoverValue]=\"$any(hoverValue)\"\n          (cellHover)=\"onCellHover($event)\"\n          (selectDate)=\"changeValueFromSelect($event, !showTime)\"\n          (selectTime)=\"onSelectTime($event, partType)\"\n          (headerChange)=\"onActiveDateChange($event, partType)\"\n        ></inner-popup>\n      </div>\n    </ng-template>\n\n    <ng-template #tplFooter>\n      <calendar-footer\n        *ngIf=\"hasFooter\"\n        [locale]=\"locale!\"\n        [isRange]=\"isRange\"\n        [showToday]=\"showToday\"\n        [showNow]=\"showNow\"\n        [hasTimePicker]=\"hasTimePicker\"\n        [okDisabled]=\"!isAllowed($any(datePickerService?.value))\"\n        [extraFooter]=\"extraFooter\"\n        [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n        (clickOk)=\"onClickOk()\"\n        (clickToday)=\"onClickToday($event)\"\n      ></calendar-footer>\n    </ng-template>\n\n    <!-- Range ONLY: Range Quick Selector -->\n    <ng-template #tplRangeQuickSelector>\n      <li\n        *ngFor=\"let name of getObjectKeys(ranges)\"\n        class=\"{{ prefixCls }}-preset\"\n        (click)=\"onClickPresetRange(ranges![name])\"\n        (mouseenter)=\"onHoverPresetRange(ranges![name])\"\n        (mouseleave)=\"onPresetRangeMouseLeave()\"\n      >\n        <span class=\"ant-tag ant-tag-blue\">{{ name }}</span>\n      </li>\n    </ng-template>\n  ",
                host: {
                    '(mousedown)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: DatePickerService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { inline: [{
            type: core.Input
        }], dir: [{
            type: core.Input
        }], panelModeChange: [{
            type: core.Output
        }], calendarChange: [{
            type: core.Output
        }], resultOk: [{
            type: core.Output
        }], panelMode: [{
            type: core.Input
        }], isRange: [{
            type: core.Input
        }], showWeek: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], disabledTime: [{
            type: core.Input
        }], showToday: [{
            type: core.Input
        }], showNow: [{
            type: core.Input
        }], showTime: [{
            type: core.Input
        }], extraFooter: [{
            type: core.Input
        }], ranges: [{
            type: core.Input
        }], dateRender: [{
            type: core.Input
        }], defaultPickerValue: [{
            type: core.Input
        }] }); })();
        return DateRangePopupComponent;
    }());
    DateRangePopupComponent.ctorParameters = function () { return [
        { type: DatePickerService },
        { type: core.ChangeDetectorRef }
    ]; };
    DateRangePopupComponent.propDecorators = {
        isRange: [{ type: core.Input }],
        inline: [{ type: core.Input }],
        showWeek: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        disabledDate: [{ type: core.Input }],
        disabledTime: [{ type: core.Input }],
        showToday: [{ type: core.Input }],
        showNow: [{ type: core.Input }],
        showTime: [{ type: core.Input }],
        extraFooter: [{ type: core.Input }],
        ranges: [{ type: core.Input }],
        dateRender: [{ type: core.Input }],
        panelMode: [{ type: core.Input }],
        defaultPickerValue: [{ type: core.Input }],
        dir: [{ type: core.Input }],
        panelModeChange: [{ type: core.Output }],
        calendarChange: [{ type: core.Output }],
        resultOk: [{ type: core.Output }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working because the overlay can't get the height/width of it's content)
    var NZ_CONFIG_MODULE_NAME = 'datePicker';
    /**
     * The base picker for all common APIs
     */
    var NzDatePickerComponent = /** @class */ (function () {
        // ------------------------------------------------------------------------
        // Input API End
        // ------------------------------------------------------------------------
        function NzDatePickerComponent(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, nzResizeObserver, platform, doc, directionality, noAnimation) {
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
            this.destroyed$ = new rxjs.Subject();
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
            this.nzOnPanelChange = new core.EventEmitter();
            this.nzOnCalendarChange = new core.EventEmitter();
            this.nzOnOk = new core.EventEmitter();
            this.nzOnOpenChange = new core.EventEmitter();
            this.inputSize = 12;
            this.destroy$ = new rxjs.Subject();
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
            this.onChangeFn = function () { return void 0; };
            this.onTouchedFn = function () { return void 0; };
            this.document = doc;
            this.origin = new overlay.CdkOverlayOrigin(this.elementRef);
        }
        Object.defineProperty(NzDatePickerComponent.prototype, "nzShowTime", {
            get: function () {
                return this.showTime;
            },
            set: function (value) {
                this.showTime = typeof value === 'object' ? value : util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzDatePickerComponent.prototype, "realOpenState", {
            get: function () {
                // The value that really decide the open state of overlay
                return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
            },
            enumerable: false,
            configurable: true
        });
        NzDatePickerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.nzAutoFocus) {
                this.focus();
            }
            if (this.isRange && this.platform.isBrowser) {
                this.nzResizeObserver
                    .observe(this.elementRef)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () {
                    _this.updateInputWidthAndArrowLeft();
                });
            }
            this.datePickerService.inputPartChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (partType) {
                if (partType) {
                    _this.datePickerService.activeInput = partType;
                }
                _this.focus();
                _this.updateInputWidthAndArrowLeft();
            });
        };
        NzDatePickerComponent.prototype.updateInputWidthAndArrowLeft = function () {
            var _a, _b, _c;
            this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
            var baseStyle = { position: 'absolute', width: this.inputWidth + "px" };
            this.datePickerService.arrowLeft =
                this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
            if (this.dir === 'rtl') {
                this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { right: this.datePickerService.arrowLeft + "px" });
            }
            else {
                this.activeBarStyle = Object.assign(Object.assign({}, baseStyle), { left: this.datePickerService.arrowLeft + "px" });
            }
            this.cdr.markForCheck();
        };
        NzDatePickerComponent.prototype.getInput = function (partType) {
            var _a, _b;
            if (this.nzInline) {
                return undefined;
            }
            return this.isRange
                ? partType === 'left'
                    ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement
                : this.pickerInput.nativeElement;
        };
        NzDatePickerComponent.prototype.focus = function () {
            var activeInputElement = this.getInput(this.datePickerService.activeInput);
            if (this.document.activeElement !== activeInputElement) {
                activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
            }
        };
        NzDatePickerComponent.prototype.onFocus = function (event, partType) {
            event.preventDefault();
            if (partType) {
                this.datePickerService.inputPartChange$.next(partType);
            }
            this.renderClass(true);
        };
        // blur event has not the relatedTarget in IE11, use focusout instead.
        NzDatePickerComponent.prototype.onFocusout = function (event) {
            event.preventDefault();
            if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
                this.checkAndClose();
            }
            this.renderClass(false);
        };
        // Show overlay content
        NzDatePickerComponent.prototype.open = function () {
            if (this.nzInline) {
                return;
            }
            if (!this.realOpenState && !this.nzDisabled) {
                this.updateInputWidthAndArrowLeft();
                this.overlayOpen = true;
                this.nzOnOpenChange.emit(true);
                this.cdr.markForCheck();
            }
        };
        NzDatePickerComponent.prototype.close = function () {
            if (this.nzInline) {
                return;
            }
            if (this.realOpenState) {
                this.overlayOpen = false;
                this.nzOnOpenChange.emit(false);
            }
        };
        NzDatePickerComponent.prototype.showClear = function () {
            return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
        };
        NzDatePickerComponent.prototype.checkAndClose = function () {
            if (!this.realOpenState) {
                return;
            }
            if (this.panel.isAllowed(this.datePickerService.value, true)) {
                if (Array.isArray(this.datePickerService.value) && time.wrongSortOrder(this.datePickerService.value)) {
                    var index = this.datePickerService.getActiveIndex();
                    var value = this.datePickerService.value[index];
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
        };
        NzDatePickerComponent.prototype.onClickInputBox = function (event) {
            event.stopPropagation();
            this.focus();
            if (!this.isOpenHandledByUser()) {
                this.open();
            }
        };
        NzDatePickerComponent.prototype.onOverlayKeydown = function (event) {
            if (event.keyCode === keycodes.ESCAPE) {
                this.datePickerService.initValue();
            }
        };
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        NzDatePickerComponent.prototype.onPositionChange = function (position) {
            this.currentPositionX = position.connectionPair.originX;
            this.currentPositionY = position.connectionPair.originY;
            this.cdr.detectChanges(); // Take side-effects to position styles
        };
        NzDatePickerComponent.prototype.onClickClear = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.datePickerService.initValue(true);
            this.datePickerService.emitValue$.next();
        };
        NzDatePickerComponent.prototype.updateInputValue = function () {
            var _this = this;
            var newValue = this.datePickerService.value;
            if (this.isRange) {
                this.inputValue = newValue ? newValue.map(function (v) { return _this.formatValue(v); }) : ['', ''];
            }
            else {
                this.inputValue = this.formatValue(newValue);
            }
            this.cdr.markForCheck();
        };
        NzDatePickerComponent.prototype.formatValue = function (value) {
            return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
        };
        NzDatePickerComponent.prototype.onInputChange = function (value, isEnter) {
            if (isEnter === void 0) { isEnter = false; }
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
            var date = this.checkValidDate(value);
            // Can only change date when it's open
            if (date && this.realOpenState) {
                this.panel.changeValueFromSelect(date, isEnter);
            }
        };
        NzDatePickerComponent.prototype.onKeyupEnter = function (event) {
            this.onInputChange(event.target.value, true);
        };
        NzDatePickerComponent.prototype.checkValidDate = function (value) {
            var date = new time.CandyDate(this.dateHelper.parseDate(value, this.nzFormat));
            if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
                return null;
            }
            return date;
        };
        NzDatePickerComponent.prototype.getPlaceholder = function (partType) {
            return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
        };
        NzDatePickerComponent.prototype.isEmptyValue = function (value) {
            if (value === null) {
                return true;
            }
            else if (this.isRange) {
                return !value || !Array.isArray(value) || value.every(function (val) { return !val; });
            }
            else {
                return !value;
            }
        };
        // Whether open state is permanently controlled by user himself
        NzDatePickerComponent.prototype.isOpenHandledByUser = function () {
            return this.nzOpen !== undefined;
        };
        NzDatePickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            // Subscribe the every locale change if the nzLocale is not handled by user
            if (!this.nzLocale) {
                this.i18n.localeChange.pipe(operators.takeUntil(this.destroyed$)).subscribe(function () { return _this.setLocale(); });
            }
            // Default value
            this.datePickerService.isRange = this.isRange;
            this.datePickerService.initValue(true);
            this.datePickerService.emitValue$.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (_) {
                var _a, _b, _c, _d;
                var value = _this.datePickerService.value;
                _this.datePickerService.initialValue = time.cloneDate(value);
                if (_this.isRange) {
                    var vAsRange = value;
                    if (vAsRange.length) {
                        _this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
                    }
                    else {
                        _this.onChangeFn([]);
                    }
                }
                else {
                    if (value) {
                        _this.onChangeFn(value.nativeDate);
                    }
                    else {
                        _this.onChangeFn(null);
                    }
                }
                _this.onTouchedFn();
                // When value emitted, overlay will be closed
                _this.close();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroyed$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.inputValue = this.isRange ? ['', ''] : '';
            this.setModeAndFormat();
            this.datePickerService.valueChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.updateInputValue();
            });
        };
        NzDatePickerComponent.prototype.ngOnChanges = function (changes) {
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
                this.extraFooter = util.valueFunctionProp(this.nzRenderExtraFooter);
            }
            if (changes.nzMode) {
                this.setDefaultPlaceHolder();
                this.setModeAndFormat();
            }
        };
        NzDatePickerComponent.prototype.ngOnDestroy = function () {
            this.destroyed$.next();
            this.destroyed$.complete();
        };
        NzDatePickerComponent.prototype.setModeAndFormat = function () {
            var inputFormats = {
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
        };
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param open The overlayOpen in picker component
         */
        NzDatePickerComponent.prototype.onOpenChange = function (open) {
            this.nzOnOpenChange.emit(open);
        };
        NzDatePickerComponent.prototype.writeValue = function (value) {
            this.setValue(value);
            this.cdr.markForCheck();
        };
        NzDatePickerComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        NzDatePickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedFn = fn;
        };
        NzDatePickerComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        NzDatePickerComponent.prototype.setLocale = function () {
            this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
            this.setDefaultPlaceHolder();
            this.cdr.markForCheck();
        };
        NzDatePickerComponent.prototype.setDefaultPlaceHolder = function () {
            if (!this.isCustomPlaceHolder && this.nzLocale) {
                var defaultPlaceholder = {
                    year: this.getPropertyOfLocale('yearPlaceholder'),
                    month: this.getPropertyOfLocale('monthPlaceholder'),
                    week: this.getPropertyOfLocale('weekPlaceholder'),
                    date: this.getPropertyOfLocale('placeholder')
                };
                var defaultRangePlaceholder = {
                    year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                    month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                    week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                    date: this.getPropertyOfLocale('rangePlaceholder')
                };
                this.nzPlaceHolder = this.isRange
                    ? defaultRangePlaceholder[this.nzMode]
                    : defaultPlaceholder[this.nzMode];
            }
        };
        NzDatePickerComponent.prototype.getPropertyOfLocale = function (type) {
            return this.nzLocale.lang[type] || this.i18n.getLocaleData("DatePicker.lang." + type);
        };
        // Safe way of setting value with default
        NzDatePickerComponent.prototype.setValue = function (value) {
            var newValue = this.datePickerService.makeValue(value);
            this.datePickerService.setValue(newValue);
            this.datePickerService.initialValue = newValue;
        };
        NzDatePickerComponent.prototype.renderClass = function (value) {
            // TODO: avoid autoFocus cause change after checked error
            if (value) {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
            }
        };
        NzDatePickerComponent.prototype.onPanelModeChange = function (panelMode) {
            this.nzOnPanelChange.emit(panelMode);
        };
        // Emit nzOnCalendarChange when select date by nz-range-picker
        NzDatePickerComponent.prototype.onCalendarChange = function (value) {
            if (this.isRange && Array.isArray(value)) {
                var rangeValue = value.filter(function (x) { return x instanceof time.CandyDate; }).map(function (x) { return x.nativeDate; });
                this.nzOnCalendarChange.emit(rangeValue);
            }
        };
        NzDatePickerComponent.prototype.onResultOk = function () {
            var _a, _b;
            if (this.isRange) {
                var value = this.datePickerService.value;
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
        };
NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc6.NzConfigService), ɵngcc0.ɵɵdirectiveInject(DatePickerService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzResizeObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc8.Platform), ɵngcc0.ɵɵdirectiveInject(common.DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc9.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc10.NzNoAnimationDirective, 9)); };
NzDatePickerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDatePickerComponent, selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]], viewQuery: function NzDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
        ɵngcc0.ɵɵviewQuery(DateRangePopupComponent, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
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
                provide: forms.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: core.forwardRef(function () { return NzDatePickerComponent; })
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 7, consts: [[4, "ngIf", "ngIfElse"], ["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "focusout", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "focusout", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [3, "ngStyle"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"], [3, "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir", "panelModeChange", "calendarChange", "resultOk"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDatePickerComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzDatePickerComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzDatePickerComponent_ng_template_3_Template, 4, 9, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NzDatePickerComponent_ng_template_5_Template, 3, 38, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NzDatePickerComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
        ɵngcc0.ɵɵlistener("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_7_listener($event) { return ctx.onPositionChange($event); })("detach", function NzDatePickerComponent_Template_ng_template_detach_7_listener() { return ctx.close(); })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_7_listener($event) { return ctx.onOverlayKeydown($event); });
    } if (rf & 2) {
        var _r5 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzInline)("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
    } }, directives: [ɵngcc2.NgIf, ɵngcc11.CdkConnectedOverlay, ɵngcc12.NzConnectedOverlayDirective, ɵngcc13.DefaultValueAccessor, ɵngcc13.NgControlStatus, ɵngcc13.NgModel, ɵngcc2.NgTemplateOutlet, ɵngcc14.NzIconDirective, ɵngcc5.ɵNzTransitionPatchDirective, ɵngcc2.NgStyle, ɵngcc15.NzStringTemplateOutletDirective, ɵngcc10.NzNoAnimationDirective, DateRangePopupComponent, ɵngcc9.Dir], encapsulation: 2, data: { animation: [animation.slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                exportAs: 'nzDatePicker',
                template: "\n    <ng-container *ngIf=\"!nzInline; else inlineMode\">\n      <!-- Content of single picker -->\n      <div *ngIf=\"!isRange\" class=\"{{ prefixCls }}-input\">\n        <input\n          #pickerInput\n          [attr.id]=\"nzId\"\n          [class.ant-input-disabled]=\"nzDisabled\"\n          [disabled]=\"nzDisabled\"\n          [readOnly]=\"nzInputReadOnly\"\n          [(ngModel)]=\"inputValue\"\n          placeholder=\"{{ getPlaceholder() }}\"\n          [size]=\"inputSize\"\n          (focus)=\"onFocus($event)\"\n          (focusout)=\"onFocusout($event)\"\n          (ngModelChange)=\"onInputChange($event)\"\n          (keyup.enter)=\"onKeyupEnter($event)\"\n        />\n        <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n      </div>\n\n      <!-- Content of range picker -->\n      <ng-container *ngIf=\"isRange\">\n        <div class=\"{{ prefixCls }}-input\">\n          <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\n        </div>\n        <div #separatorElement class=\"{{ prefixCls }}-range-separator\">\n          <span class=\"{{ prefixCls }}-separator\">\n            <ng-container *ngIf=\"nzSeparator; else defaultSeparator\">{{ nzSeparator }}</ng-container>\n          </span>\n          <ng-template #defaultSeparator>\n            <i nz-icon nzType=\"swap-right\" nzTheme=\"outline\"></i>\n          </ng-template>\n        </div>\n        <div class=\"{{ prefixCls }}-input\">\n          <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\n        </div>\n        <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n      </ng-container>\n    </ng-container>\n    <!-- Input for Range ONLY -->\n    <ng-template #tplRangeInput let-partType=\"partType\">\n      <input\n        #rangePickerInput\n        [disabled]=\"nzDisabled\"\n        [readOnly]=\"nzInputReadOnly\"\n        [size]=\"inputSize\"\n        (click)=\"onClickInputBox($event)\"\n        (focusout)=\"onFocusout($event)\"\n        (focus)=\"onFocus($event, partType)\"\n        (keyup.enter)=\"onKeyupEnter($event)\"\n        [(ngModel)]=\"inputValue[datePickerService.getActiveIndex(partType)]\"\n        (ngModelChange)=\"onInputChange($event)\"\n        placeholder=\"{{ getPlaceholder(partType) }}\"\n      />\n    </ng-template>\n\n    <!-- Right operator icons -->\n    <ng-template #tplRightRest>\n      <div class=\"{{ prefixCls }}-active-bar\" [ngStyle]=\"activeBarStyle\"></div>\n      <span *ngIf=\"showClear()\" class=\"{{ prefixCls }}-clear\" (click)=\"onClickClear($event)\">\n        <i nz-icon nzType=\"close-circle\" nzTheme=\"fill\"></i>\n      </span>\n      <span class=\"{{ prefixCls }}-suffix\">\n        <ng-container *nzStringTemplateOutlet=\"nzSuffixIcon; let suffixIcon\">\n          <i nz-icon [nzType]=\"suffixIcon\"></i>\n        </ng-container>\n      </span>\n    </ng-template>\n\n    <ng-template #inlineMode>\n      <div class=\"ant-picker-wrapper\" [nzNoAnimation]=\"!!noAnimation?.nzNoAnimation\" [@slideMotion]=\"'enter'\" style=\"position: relative;\">\n        <div\n          class=\"{{ prefixCls }}-dropdown {{ nzDropdownClassName }}\"\n          [class.ant-picker-dropdown-rtl]=\"dir === 'rtl'\"\n          [class.ant-picker-dropdown-placement-bottomLeft]=\"currentPositionY === 'bottom' && currentPositionX === 'start'\"\n          [class.ant-picker-dropdown-placement-topLeft]=\"currentPositionY === 'top' && currentPositionX === 'start'\"\n          [class.ant-picker-dropdown-placement-bottomRight]=\"currentPositionY === 'bottom' && currentPositionX === 'end'\"\n          [class.ant-picker-dropdown-placement-topRight]=\"currentPositionY === 'top' && currentPositionX === 'end'\"\n          [class.ant-picker-dropdown-range]=\"isRange\"\n          [class.ant-picker-active-left]=\"datePickerService.activeInput === 'left'\"\n          [class.ant-picker-active-right]=\"datePickerService.activeInput === 'right'\"\n          [ngStyle]=\"nzPopupStyle\"\n        >\n          <date-range-popup\n            [isRange]=\"isRange\"\n            [inline]=\"nzInline\"\n            [defaultPickerValue]=\"nzDefaultPickerValue\"\n            [showWeek]=\"nzMode === 'week'\"\n            [panelMode]=\"panelMode\"\n            (panelModeChange)=\"onPanelModeChange($event)\"\n            (calendarChange)=\"onCalendarChange($event)\"\n            [locale]=\"nzLocale?.lang!\"\n            [showToday]=\"nzMode === 'date' && nzShowToday && !isRange && !nzShowTime\"\n            [showNow]=\"nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime\"\n            [showTime]=\"nzShowTime\"\n            [dateRender]=\"nzDateRender\"\n            [disabledDate]=\"nzDisabledDate\"\n            [disabledTime]=\"nzDisabledTime\"\n            [extraFooter]=\"extraFooter\"\n            [ranges]=\"nzRanges\"\n            [dir]=\"dir\"\n            (resultOk)=\"onResultOk()\"\n          ></date-range-popup>\n        </div>\n      </div>\n    </ng-template>\n\n    <!-- Overlay -->\n    <ng-template\n      cdkConnectedOverlay\n      nzConnectedOverlay\n      [cdkConnectedOverlayHasBackdrop]=\"nzBackdrop\"\n      [cdkConnectedOverlayOrigin]=\"origin\"\n      [cdkConnectedOverlayOpen]=\"realOpenState\"\n      [cdkConnectedOverlayPositions]=\"overlayPositions\"\n      [cdkConnectedOverlayTransformOriginOn]=\"'.ant-picker-wrapper'\"\n      (positionChange)=\"onPositionChange($event)\"\n      (detach)=\"close()\"\n      (overlayKeydown)=\"onOverlayKeydown($event)\"\n    >\n      <ng-container *ngTemplateOutlet=\"inlineMode\"></ng-container>\n    </ng-template>\n  ",
                host: {
                    '[class.ant-picker]': "true",
                    '[class.ant-picker-range]': "isRange",
                    '[class.ant-picker-large]': "nzSize === 'large'",
                    '[class.ant-picker-small]': "nzSize === 'small'",
                    '[class.ant-picker-disabled]': "nzDisabled",
                    '[class.ant-picker-rtl]': "dir === 'rtl'",
                    '[class.ant-picker-borderless]': "nzBorderless",
                    '[class.ant-picker-inline]': "nzInline",
                    '(click)': 'onClickInputBox($event)'
                },
                providers: [
                    DatePickerService,
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: core.forwardRef(function () { return NzDatePickerComponent; })
                    }
                ],
                animations: [animation.slideMotion]
            }]
    }], function () { return [{ type: ɵngcc6.NzConfigService }, { type: DatePickerService }, { type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.DateHelperService }, { type: ɵngcc7.NzResizeObserver }, { type: ɵngcc8.Platform }, { type: undefined, decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }] }, { type: ɵngcc9.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc10.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzAllowClear: [{
            type: core.Input
        }], nzAutoFocus: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzBorderless: [{
            type: core.Input
        }], nzInputReadOnly: [{
            type: core.Input
        }], nzInline: [{
            type: core.Input
        }], nzPlaceHolder: [{
            type: core.Input
        }], nzPopupStyle: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzShowToday: [{
            type: core.Input
        }], nzMode: [{
            type: core.Input
        }], nzShowNow: [{
            type: core.Input
        }], nzDefaultPickerValue: [{
            type: core.Input
        }], nzSeparator: [{
            type: core.Input
        }], nzSuffixIcon: [{
            type: core.Input
        }], nzBackdrop: [{
            type: core.Input
        }], nzId: [{
            type: core.Input
        }], nzOnPanelChange: [{
            type: core.Output
        }], nzOnCalendarChange: [{
            type: core.Output
        }], nzOnOk: [{
            type: core.Output
        }], nzOnOpenChange: [{
            type: core.Output
        }], nzShowTime: [{
            type: core.Input
        }], nzFormat: [{
            type: core.Input
        }], nzLocale: [{
            type: core.Input
        }], nzOpen: [{
            type: core.Input
        }], nzDisabledDate: [{
            type: core.Input
        }], nzDropdownClassName: [{
            type: core.Input
        }], nzDateRender: [{
            type: core.Input
        }], nzDisabledTime: [{
            type: core.Input
        }], nzRenderExtraFooter: [{
            type: core.Input
        }], nzRanges: [{
            type: core.Input
        }], cdkConnectedOverlay: [{
            type: core.ViewChild,
            args: [overlay.CdkConnectedOverlay, { static: false }]
        }], panel: [{
            type: core.ViewChild,
            args: [DateRangePopupComponent, { static: false }]
        }], separatorElement: [{
            type: core.ViewChild,
            args: ['separatorElement', { static: false }]
        }], pickerInput: [{
            type: core.ViewChild,
            args: ['pickerInput', { static: false }]
        }], rangePickerInputs: [{
            type: core.ViewChildren,
            args: ['rangePickerInput']
        }] }); })();
        return NzDatePickerComponent;
    }());
    NzDatePickerComponent.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: DatePickerService },
        { type: i18n.NzI18nService },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: i18n.DateHelperService },
        { type: resizeObservers.NzResizeObserver },
        { type: platform.Platform },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
    ]; };
    NzDatePickerComponent.propDecorators = {
        nzAllowClear: [{ type: core.Input }],
        nzAutoFocus: [{ type: core.Input }],
        nzDisabled: [{ type: core.Input }],
        nzBorderless: [{ type: core.Input }],
        nzInputReadOnly: [{ type: core.Input }],
        nzInline: [{ type: core.Input }],
        nzOpen: [{ type: core.Input }],
        nzDisabledDate: [{ type: core.Input }],
        nzLocale: [{ type: core.Input }],
        nzPlaceHolder: [{ type: core.Input }],
        nzPopupStyle: [{ type: core.Input }],
        nzDropdownClassName: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzFormat: [{ type: core.Input }],
        nzDateRender: [{ type: core.Input }],
        nzDisabledTime: [{ type: core.Input }],
        nzRenderExtraFooter: [{ type: core.Input }],
        nzShowToday: [{ type: core.Input }],
        nzMode: [{ type: core.Input }],
        nzShowNow: [{ type: core.Input }],
        nzRanges: [{ type: core.Input }],
        nzDefaultPickerValue: [{ type: core.Input }],
        nzSeparator: [{ type: core.Input }],
        nzSuffixIcon: [{ type: core.Input }],
        nzBackdrop: [{ type: core.Input }],
        nzId: [{ type: core.Input }],
        nzOnPanelChange: [{ type: core.Output }],
        nzOnCalendarChange: [{ type: core.Output }],
        nzOnOk: [{ type: core.Output }],
        nzOnOpenChange: [{ type: core.Output }],
        nzShowTime: [{ type: core.Input }],
        cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: false },] }],
        panel: [{ type: core.ViewChild, args: [DateRangePopupComponent, { static: false },] }],
        separatorElement: [{ type: core.ViewChild, args: ['separatorElement', { static: false },] }],
        pickerInput: [{ type: core.ViewChild, args: ['pickerInput', { static: false },] }],
        rangePickerInputs: [{ type: core.ViewChildren, args: ['rangePickerInput',] }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzBorderless", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzInline", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzOpen", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzShowToday", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzDatePickerComponent.prototype, "nzShowNow", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzDatePickerComponent.prototype, "nzSeparator", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Object)
    ], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Object)
    ], NzDatePickerComponent.prototype, "nzBackdrop", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var InnerPopupComponent = /** @class */ (function () {
        function InnerPopupComponent() {
            this.panelModeChange = new core.EventEmitter();
            // TODO: name is not proper
            this.headerChange = new core.EventEmitter(); // Emitted when user changed the header's value
            this.selectDate = new core.EventEmitter(); // Emitted when the date is selected by click the date panel
            this.selectTime = new core.EventEmitter();
            this.cellHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            this.prefixCls = PREFIX_CLASS;
        }
        /**
         * Hide "next" arrow in left panel,
         * hide "prev" arrow in right panel
         * @param direction
         * @param panelMode
         */
        InnerPopupComponent.prototype.enablePrevNext = function (direction, panelMode) {
            if (!this.showTimePicker &&
                panelMode === this.endPanelMode &&
                ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
                return false;
            }
            return true;
        };
        InnerPopupComponent.prototype.onSelectTime = function (date) {
            this.selectTime.emit(new time.CandyDate(date));
        };
        // The value real changed to outside
        InnerPopupComponent.prototype.onSelectDate = function (date) {
            var value = date instanceof time.CandyDate ? date : new time.CandyDate(date);
            var timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
            // Display timeValue when value is null
            if (!this.value && timeValue) {
                value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
            }
            this.selectDate.emit(value);
        };
        InnerPopupComponent.prototype.onChooseMonth = function (value) {
            this.activeDate = this.activeDate.setMonth(value.getMonth());
            if (this.endPanelMode === 'month') {
                this.value = value;
                this.selectDate.emit(value);
            }
            else {
                this.headerChange.emit(value);
                this.panelModeChange.emit(this.endPanelMode);
            }
        };
        InnerPopupComponent.prototype.onChooseYear = function (value) {
            this.activeDate = this.activeDate.setYear(value.getYear());
            if (this.endPanelMode === 'year') {
                this.value = value;
                this.selectDate.emit(value);
            }
            else {
                this.headerChange.emit(value);
                this.panelModeChange.emit(this.endPanelMode);
            }
        };
        InnerPopupComponent.prototype.onChooseDecade = function (value) {
            this.activeDate = this.activeDate.setYear(value.getYear());
            if (this.endPanelMode === 'decade') {
                this.value = value;
                this.selectDate.emit(value);
            }
            else {
                this.headerChange.emit(value);
                this.panelModeChange.emit('year');
            }
        };
        InnerPopupComponent.prototype.ngOnChanges = function (changes) {
            if (changes.activeDate && !changes.activeDate.currentValue) {
                this.activeDate = new time.CandyDate();
            }
            // New Antd vesion has merged 'date' ant 'time' to one panel,
            // So there is not 'time' panel
            if (changes.panelMode && changes.panelMode.currentValue === 'time') {
                this.panelMode = 'date';
            }
        };
InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
InnerPopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { activeDate: "activeDate", value: "value", panelMode: "panelMode", endPanelMode: "endPanelMode", showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", partType: "partType" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", cellHover: "cellHover" }, exportAs: ["innerPopup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 11, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementContainerStart(2, 0);
        ɵngcc0.ɵɵtemplate(3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(6, InnerPopupComponent_ng_container_6_Template, 4, 17, "ng-container", 2);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-datetime-panel", ctx.showTimePicker);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.panelMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "decade");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "year");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "month");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
    } }, directives: function () { return [ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgIf, DecadeHeaderComponent, DecadeTableComponent, YearHeaderComponent, YearTableComponent, MonthHeaderComponent, MonthTableComponent, DateHeaderComponent, DateTableComponent, ɵngcc16.NzTimePickerPanelComponent, ɵngcc13.NgControlStatus, ɵngcc13.NgModel]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InnerPopupComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: "\n    <div [class.ant-picker-datetime-panel]=\"showTimePicker\">\n      <div class=\"{{ prefixCls }}-{{ panelMode }}-panel\">\n        <ng-container [ngSwitch]=\"panelMode\">\n          <ng-container *ngSwitchCase=\"'decade'\">\n            <decade-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'decade')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'decade')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></decade-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <decade-table\n                [activeDate]=\"activeDate\"\n                [value]=\"value\"\n                [locale]=\"locale\"\n                (valueChange)=\"onChooseDecade($event)\"\n                [disabledDate]=\"disabledDate\"\n              ></decade-table>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'year'\">\n            <year-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'year')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'year')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></year-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <year-table\n                [activeDate]=\"activeDate\"\n                [value]=\"value\"\n                [locale]=\"locale\"\n                [disabledDate]=\"disabledDate\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onChooseYear($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></year-table>\n            </div>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'month'\">\n            <month-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"enablePrevNext('prev', 'month')\"\n              [showSuperNextBtn]=\"enablePrevNext('next', 'month')\"\n              [showNextBtn]=\"false\"\n              [showPreBtn]=\"false\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></month-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <month-table\n                [value]=\"value\"\n                [activeDate]=\"activeDate\"\n                [locale]=\"locale\"\n                [disabledDate]=\"disabledDate\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onChooseMonth($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></month-table>\n            </div>\n          </ng-container>\n\n          <ng-container *ngSwitchDefault>\n            <date-header\n              [(value)]=\"activeDate\"\n              [locale]=\"locale\"\n              [showSuperPreBtn]=\"showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')\"\n              [showSuperNextBtn]=\"showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')\"\n              [showPreBtn]=\"showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')\"\n              [showNextBtn]=\"showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')\"\n              (panelModeChange)=\"panelModeChange.emit($event)\"\n              (valueChange)=\"headerChange.emit($event)\"\n            ></date-header>\n            <div class=\"{{ prefixCls }}-body\">\n              <date-table\n                [locale]=\"locale\"\n                [showWeek]=\"showWeek\"\n                [value]=\"value\"\n                [activeDate]=\"activeDate\"\n                [disabledDate]=\"disabledDate\"\n                [cellRender]=\"dateRender\"\n                [selectedValue]=\"selectedValue\"\n                [hoverValue]=\"hoverValue\"\n                (valueChange)=\"onSelectDate($event)\"\n                (cellHover)=\"cellHover.emit($event)\"\n              ></date-table>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"showTimePicker && timeOptions\">\n        <nz-time-picker-panel\n          [nzInDatePicker]=\"true\"\n          [ngModel]=\"value?.nativeDate\"\n          (ngModelChange)=\"onSelectTime($event)\"\n          [format]=\"$any(timeOptions.nzFormat)\"\n          [nzHourStep]=\"$any(timeOptions.nzHourStep)\"\n          [nzMinuteStep]=\"$any(timeOptions.nzMinuteStep)\"\n          [nzSecondStep]=\"$any(timeOptions.nzSecondStep)\"\n          [nzDisabledHours]=\"$any(timeOptions.nzDisabledHours)\"\n          [nzDisabledMinutes]=\"$any(timeOptions.nzDisabledMinutes)\"\n          [nzDisabledSeconds]=\"$any(timeOptions.nzDisabledSeconds)\"\n          [nzHideDisabledOptions]=\"!!timeOptions.nzHideDisabledOptions\"\n          [nzDefaultOpenValue]=\"$any(timeOptions.nzDefaultOpenValue)\"\n          [nzUse12Hours]=\"!!timeOptions.nzUse12Hours\"\n          [nzAddOn]=\"$any(timeOptions.nzAddOn)\"\n        ></nz-time-picker-panel>\n        <!-- use [opened] to trigger time panel `initPosition()` -->\n      </ng-container>\n    </div>\n  "
            }]
    }], function () { return []; }, { panelModeChange: [{
            type: core.Output
        }], headerChange: [{
            type: core.Output
        }], selectDate: [{
            type: core.Output
        }], selectTime: [{
            type: core.Output
        }], cellHover: [{
            type: core.Output
        }], activeDate: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], panelMode: [{
            type: core.Input
        }], endPanelMode: [{
            type: core.Input
        }], showWeek: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], showTimePicker: [{
            type: core.Input
        }], timeOptions: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], dateRender: [{
            type: core.Input
        }], selectedValue: [{
            type: core.Input
        }], hoverValue: [{
            type: core.Input
        }], partType: [{
            type: core.Input
        }] }); })();
        return InnerPopupComponent;
    }());
    InnerPopupComponent.propDecorators = {
        activeDate: [{ type: core.Input }],
        endPanelMode: [{ type: core.Input }],
        panelMode: [{ type: core.Input }],
        showWeek: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        showTimePicker: [{ type: core.Input }],
        timeOptions: [{ type: core.Input }],
        disabledDate: [{ type: core.Input }],
        dateRender: [{ type: core.Input }],
        selectedValue: [{ type: core.Input }],
        hoverValue: [{ type: core.Input }],
        value: [{ type: core.Input }],
        partType: [{ type: core.Input }],
        panelModeChange: [{ type: core.Output }],
        headerChange: [{ type: core.Output }],
        selectDate: [{ type: core.Output }],
        selectTime: [{ type: core.Output }],
        cellHover: [{ type: core.Output }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var AbstractPanelHeader = /** @class */ (function () {
        function AbstractPanelHeader() {
            this.prefixCls = "ant-picker-header";
            this.selectors = [];
            this.showSuperPreBtn = true;
            this.showSuperNextBtn = true;
            this.showPreBtn = true;
            this.showNextBtn = true;
            this.panelModeChange = new core.EventEmitter();
            this.valueChange = new core.EventEmitter();
        }
        AbstractPanelHeader.prototype.superPreviousTitle = function () {
            return this.locale.previousYear;
        };
        AbstractPanelHeader.prototype.previousTitle = function () {
            return this.locale.previousMonth;
        };
        AbstractPanelHeader.prototype.superNextTitle = function () {
            return this.locale.nextYear;
        };
        AbstractPanelHeader.prototype.nextTitle = function () {
            return this.locale.nextMonth;
        };
        AbstractPanelHeader.prototype.superPrevious = function () {
            this.changeValue(this.value.addYears(-1));
        };
        AbstractPanelHeader.prototype.superNext = function () {
            this.changeValue(this.value.addYears(1));
        };
        AbstractPanelHeader.prototype.previous = function () {
            this.changeValue(this.value.addMonths(-1));
        };
        AbstractPanelHeader.prototype.next = function () {
            this.changeValue(this.value.addMonths(1));
        };
        AbstractPanelHeader.prototype.changeValue = function (value) {
            if (this.value !== value) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.render();
            }
        };
        AbstractPanelHeader.prototype.changeMode = function (mode) {
            this.panelModeChange.emit(mode);
        };
        AbstractPanelHeader.prototype.render = function () {
            if (this.value) {
                this.selectors = this.getSelectors();
            }
        };
        AbstractPanelHeader.prototype.ngOnInit = function () {
            if (!this.value) {
                this.value = new time.CandyDate(); // Show today by default
            }
            this.selectors = this.getSelectors();
        };
        AbstractPanelHeader.prototype.ngOnChanges = function (changes) {
            if (changes.value || changes.locale) {
                this.render();
            }
        };
AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) { return new (t || AbstractPanelHeader)(); };
AbstractPanelHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractPanelHeader, inputs: { showSuperPreBtn: "showSuperPreBtn", showSuperNextBtn: "showSuperNextBtn", showPreBtn: "showPreBtn", showNextBtn: "showNextBtn", value: "value", locale: "locale" }, outputs: { panelModeChange: "panelModeChange", valueChange: "valueChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractPanelHeader, [{
        type: core.Directive
    }], function () { return []; }, { showSuperPreBtn: [{
            type: core.Input
        }], showSuperNextBtn: [{
            type: core.Input
        }], showPreBtn: [{
            type: core.Input
        }], showNextBtn: [{
            type: core.Input
        }], panelModeChange: [{
            type: core.Output
        }], valueChange: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }] }); })();
        return AbstractPanelHeader;
    }());
    AbstractPanelHeader.propDecorators = {
        value: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        showSuperPreBtn: [{ type: core.Input }],
        showSuperNextBtn: [{ type: core.Input }],
        showPreBtn: [{ type: core.Input }],
        showNextBtn: [{ type: core.Input }],
        panelModeChange: [{ type: core.Output }],
        valueChange: [{ type: core.Output }]
    };

    var DateHeaderComponent = /** @class */ (function (_super) {
        __extends(DateHeaderComponent, _super);
        function DateHeaderComponent(dateHelper) {
            var _this = _super.call(this) || this;
            _this.dateHelper = dateHelper;
            return _this;
        }
        DateHeaderComponent.prototype.getSelectors = function () {
            var _this = this;
            return [
                {
                    className: this.prefixCls + "-year-btn",
                    title: this.locale.yearSelect,
                    onClick: function () { return _this.changeMode('year'); },
                    label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
                },
                {
                    className: this.prefixCls + "-month-btn",
                    title: this.locale.monthSelect,
                    onClick: function () { return _this.changeMode('month'); },
                    label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
                }
            ];
        };
DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) { return new (t || DateHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
DateHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateHeaderComponent, selectors: [["date-header"]], exportAs: ["dateHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DateHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, DateHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelement(8, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DateHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        ɵngcc0.ɵɵelement(10, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'date-header',
                exportAs: 'dateHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, null); })();
        return DateHeaderComponent;
    }(AbstractPanelHeader));
    DateHeaderComponent.ctorParameters = function () { return [
        { type: i18n.DateHelperService }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var AbstractTable = /** @class */ (function () {
        function AbstractTable() {
            this.isTemplateRef = util.isTemplateRef;
            this.isNonEmptyString = util.isNonEmptyString;
            this.headRow = [];
            this.bodyRows = [];
            this.MAX_ROW = 6;
            this.MAX_COL = 7;
            this.prefixCls = 'ant-picker';
            this.activeDate = new time.CandyDate();
            this.showWeek = false;
            this.selectedValue = []; // Range ONLY
            this.hoverValue = []; // Range ONLY
            this.valueChange = new core.EventEmitter();
            this.cellHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
        }
        AbstractTable.prototype.render = function () {
            if (this.activeDate) {
                this.headRow = this.makeHeadRow();
                this.bodyRows = this.makeBodyRows();
            }
        };
        AbstractTable.prototype.trackByBodyRow = function (_index, item) {
            return item.trackByIndex;
        };
        AbstractTable.prototype.trackByBodyColumn = function (_index, item) {
            return item.trackByIndex;
        };
        AbstractTable.prototype.hasRangeValue = function () {
            var _a, _b;
            return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
        };
        AbstractTable.prototype.getClassMap = function (cell) {
            var _c;
            return _c = {},
                _c["ant-picker-cell"] = true,
                _c["ant-picker-cell-in-view"] = true,
                _c["ant-picker-cell-selected"] = cell.isSelected,
                _c["ant-picker-cell-disabled"] = cell.isDisabled,
                _c["ant-picker-cell-in-range"] = !!cell.isInSelectedRange,
                _c["ant-picker-cell-range-start"] = !!cell.isSelectedStart,
                _c["ant-picker-cell-range-end"] = !!cell.isSelectedEnd,
                _c["ant-picker-cell-range-start-single"] = !!cell.isStartSingle,
                _c["ant-picker-cell-range-end-single"] = !!cell.isEndSingle,
                _c["ant-picker-cell-range-hover"] = !!cell.isInHoverRange,
                _c["ant-picker-cell-range-hover-start"] = !!cell.isHoverStart,
                _c["ant-picker-cell-range-hover-end"] = !!cell.isHoverEnd,
                _c["ant-picker-cell-range-hover-edge-start"] = !!cell.isFirstCellInPanel,
                _c["ant-picker-cell-range-hover-edge-end"] = !!cell.isLastCellInPanel,
                _c["ant-picker-cell-range-start-near-hover"] = !!cell.isRangeStartNearHover,
                _c["ant-picker-cell-range-end-near-hover"] = !!cell.isRangeEndNearHover,
                _c;
        };
        AbstractTable.prototype.ngOnInit = function () {
            this.render();
        };
        AbstractTable.prototype.ngOnChanges = function (changes) {
            if (changes.activeDate && !changes.activeDate.currentValue) {
                this.activeDate = new time.CandyDate();
            }
            if (changes.disabledDate ||
                changes.locale ||
                changes.showWeek ||
                this.isDateRealChange(changes.activeDate) ||
                this.isDateRealChange(changes.value) ||
                this.isDateRealChange(changes.selectedValue) ||
                this.isDateRealChange(changes.hoverValue)) {
                this.render();
            }
        };
        AbstractTable.prototype.isDateRealChange = function (change) {
            if (change) {
                var previousValue_1 = change.previousValue;
                var currentValue = change.currentValue;
                if (Array.isArray(currentValue)) {
                    return (!Array.isArray(previousValue_1) ||
                        currentValue.length !== previousValue_1.length ||
                        currentValue.some(function (value, index) {
                            var previousCandyDate = previousValue_1[index];
                            return previousCandyDate instanceof time.CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                        }));
                }
                else {
                    return !this.isSameDate(previousValue_1, currentValue);
                }
            }
            return false;
        };
        AbstractTable.prototype.isSameDate = function (left, right) {
            return (!left && !right) || (left && right && right.isSameDay(left));
        };
AbstractTable.ɵfac = function AbstractTable_Factory(t) { return new (t || AbstractTable)(); };
AbstractTable.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AbstractTable, inputs: { prefixCls: "prefixCls", activeDate: "activeDate", showWeek: "showWeek", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", locale: "locale", disabledDate: "disabledDate", cellRender: "cellRender", fullCellRender: "fullCellRender" }, outputs: { valueChange: "valueChange", cellHover: "cellHover" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractTable, [{
        type: core.Directive
    }], function () { return []; }, { prefixCls: [{
            type: core.Input
        }], activeDate: [{
            type: core.Input
        }], showWeek: [{
            type: core.Input
        }], selectedValue: [{
            type: core.Input
        }], hoverValue: [{
            type: core.Input
        }], valueChange: [{
            type: core.Output
        }], cellHover: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], locale: [{
            type: core.Input
        }], disabledDate: [{
            type: core.Input
        }], cellRender: [{
            type: core.Input
        }], fullCellRender: [{
            type: core.Input
        }] }); })();
        return AbstractTable;
    }());
    AbstractTable.propDecorators = {
        prefixCls: [{ type: core.Input }],
        value: [{ type: core.Input }],
        locale: [{ type: core.Input }],
        activeDate: [{ type: core.Input }],
        showWeek: [{ type: core.Input }],
        selectedValue: [{ type: core.Input }],
        hoverValue: [{ type: core.Input }],
        disabledDate: [{ type: core.Input }],
        cellRender: [{ type: core.Input }],
        fullCellRender: [{ type: core.Input }],
        valueChange: [{ type: core.Output }],
        cellHover: [{ type: core.Output }]
    };

    var DateTableComponent = /** @class */ (function (_super) {
        __extends(DateTableComponent, _super);
        function DateTableComponent(i18n, dateHelper) {
            var _this = _super.call(this) || this;
            _this.i18n = i18n;
            _this.dateHelper = dateHelper;
            return _this;
        }
        DateTableComponent.prototype.changeValueFromInside = function (value) {
            // Only change date not change time
            this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
            this.valueChange.emit(this.activeDate);
            if (!this.activeDate.isSameMonth(this.value)) {
                this.render();
            }
        };
        DateTableComponent.prototype.makeHeadRow = function () {
            var weekDays = [];
            var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                var day = start.addDays(colIndex);
                weekDays.push({
                    trackByIndex: null,
                    value: day.nativeDate,
                    title: this.dateHelper.format(day.nativeDate, 'E'),
                    content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                    isSelected: false,
                    isDisabled: false,
                    onClick: function () { },
                    onMouseEnter: function () { }
                });
            }
            return weekDays;
        };
        DateTableComponent.prototype.getVeryShortWeekFormat = function () {
            return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
        };
        DateTableComponent.prototype.makeBodyRows = function () {
            var _b;
            var _this = this;
            var weekRows = [];
            var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var week = 0; week < this.MAX_ROW; week++) {
                var weekStart = firstDayOfMonth.addDays(week * 7);
                var row = {
                    isActive: false,
                    dateCells: [],
                    trackByIndex: week
                };
                var _loop_1 = function (day) {
                    var date = weekStart.addDays(day);
                    var dateFormat = transCompatFormat(this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                    var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                    var label = this_1.dateHelper.format(date.nativeDate, 'dd');
                    var cell = {
                        trackByIndex: day,
                        value: date.nativeDate,
                        label: label,
                        isSelected: false,
                        isDisabled: false,
                        isToday: false,
                        title: title,
                        cellRender: util.valueFunctionProp(this_1.cellRender, date),
                        fullCellRender: util.valueFunctionProp(this_1.fullCellRender, date),
                        content: "" + date.getDate(),
                        onClick: function () { return _this.changeValueFromInside(date); },
                        onMouseEnter: function () { return _this.cellHover.emit(date); }
                    };
                    this_1.addCellProperty(cell, date);
                    if (this_1.showWeek && !row.weekNum) {
                        row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                    }
                    if (date.isSameDay(this_1.value)) {
                        row.isActive = date.isSameDay(this_1.value);
                    }
                    row.dateCells.push(cell);
                };
                var this_1 = this;
                for (var day = 0; day < 7; day++) {
                    _loop_1(day);
                }
                row.classMap = (_b = {},
                    _b["ant-picker-week-panel-row"] = this.showWeek,
                    _b["ant-picker-week-panel-row-selected"] = this.showWeek && row.isActive,
                    _b);
                weekRows.push(row);
            }
            return weekRows;
        };
        DateTableComponent.prototype.addCellProperty = function (cell, date) {
            var _a;
            if (this.hasRangeValue() && !this.showWeek) {
                var _b = __read(this.hoverValue, 2), startHover = _b[0], endHover = _b[1];
                var _c = __read(this.selectedValue, 2), startSelected = _c[0], endSelected = _c[1];
                // Selected
                if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
                    cell.isSelectedStart = true;
                    cell.isSelected = true;
                }
                if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
                    cell.isSelectedEnd = true;
                    cell.isSelected = true;
                }
                if (startHover && endHover) {
                    cell.isHoverStart = startHover.isSameDay(date);
                    cell.isHoverEnd = endHover.isSameDay(date);
                    cell.isLastCellInPanel = date.isLastDayOfMonth();
                    cell.isFirstCellInPanel = date.isFirstDayOfMonth();
                    cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
                }
                cell.isStartSingle = startSelected && !endSelected;
                cell.isEndSingle = !startSelected && endSelected;
                cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
                cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
                cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            }
            cell.isToday = date.isToday();
            cell.isSelected = date.isSameDay(this.value);
            cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
            cell.classMap = this.getClassMap(cell);
        };
        DateTableComponent.prototype.getClassMap = function (cell) {
            var _b;
            var date = new time.CandyDate(cell.value);
            return Object.assign(Object.assign({}, _super.prototype.getClassMap.call(this, cell)), (_b = {}, _b["ant-picker-cell-today"] = !!cell.isToday, _b["ant-picker-cell-in-view"] = date.isSameMonth(this.activeDate), _b));
        };
DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
DateTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { locale: "locale" }, exportAs: ["dateTable"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵtemplate(1, DateTableComponent_thead_1_Template, 4, 2, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵtemplate(3, DateTableComponent_tr_3_Template, 3, 4, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc1.DateHelperService }]; }, { locale: [{
            type: core.Input
        }] }); })();
        return DateTableComponent;
    }(AbstractTable));
    DateTableComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: i18n.DateHelperService }
    ]; };
    DateTableComponent.propDecorators = {
        locale: [{ type: core.Input }]
    };

    var DecadeHeaderComponent = /** @class */ (function (_super) {
        __extends(DecadeHeaderComponent, _super);
        function DecadeHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DecadeHeaderComponent.prototype.previous = function () { };
        DecadeHeaderComponent.prototype.next = function () { };
        Object.defineProperty(DecadeHeaderComponent.prototype, "startYear", {
            get: function () {
                return parseInt("" + this.value.getYear() / 100, 10) * 100;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DecadeHeaderComponent.prototype, "endYear", {
            get: function () {
                return this.startYear + 99;
            },
            enumerable: false,
            configurable: true
        });
        DecadeHeaderComponent.prototype.superPrevious = function () {
            this.changeValue(this.value.addYears(-100));
        };
        DecadeHeaderComponent.prototype.superNext = function () {
            this.changeValue(this.value.addYears(100));
        };
        DecadeHeaderComponent.prototype.getSelectors = function () {
            return [
                {
                    className: this.prefixCls + "-decade-btn",
                    title: '',
                    onClick: function () {
                        // noop
                    },
                    label: this.startYear + "-" + this.endYear
                }
            ];
        };
DecadeHeaderComponent.ɵfac = function DecadeHeaderComponent_Factory(t) { return ɵDecadeHeaderComponent_BaseFactory(t || DecadeHeaderComponent); };
DecadeHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DecadeHeaderComponent, selectors: [["decade-header"]], exportAs: ["decadeHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DecadeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, DecadeHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelement(8, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 0);
        ɵngcc0.ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        ɵngcc0.ɵɵelement(10, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
var ɵDecadeHeaderComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DecadeHeaderComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DecadeHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'decade-header',
                exportAs: 'decadeHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], null, null); })();
        return DecadeHeaderComponent;
    }(AbstractPanelHeader));

    var MAX_ROW = 4;
    var MAX_COL = 3;
    var DecadeTableComponent = /** @class */ (function (_super) {
        __extends(DecadeTableComponent, _super);
        function DecadeTableComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DecadeTableComponent.prototype, "startYear", {
            get: function () {
                return parseInt("" + this.activeDate.getYear() / 100, 10) * 100;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DecadeTableComponent.prototype, "endYear", {
            get: function () {
                return this.startYear + 99;
            },
            enumerable: false,
            configurable: true
        });
        DecadeTableComponent.prototype.makeHeadRow = function () {
            return [];
        };
        DecadeTableComponent.prototype.makeBodyRows = function () {
            var _this = this;
            var decades = [];
            var currentYear = this.value && this.value.getYear();
            var startYear = this.startYear;
            var endYear = this.endYear;
            var previousYear = startYear - 10;
            var index = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                var row = {
                    dateCells: [],
                    trackByIndex: rowIndex
                };
                var _loop_1 = function (colIndex) {
                    var start = previousYear + index * 10;
                    var end = previousYear + index * 10 + 9;
                    var content = start + "-" + end;
                    var cell = {
                        trackByIndex: colIndex,
                        value: this_1.activeDate.setYear(start).nativeDate,
                        content: content,
                        title: content,
                        isDisabled: false,
                        isSelected: currentYear >= start && currentYear <= end,
                        isLowerThanStart: end < startYear,
                        isBiggerThanEnd: start > endYear,
                        classMap: {},
                        onClick: function () { },
                        onMouseEnter: function () { }
                    };
                    cell.classMap = this_1.getClassMap(cell);
                    cell.onClick = function () { return _this.chooseDecade(start); };
                    index++;
                    row.dateCells.push(cell);
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
                decades.push(row);
            }
            return decades;
        };
        DecadeTableComponent.prototype.getClassMap = function (cell) {
            var _a;
            return _a = {},
                _a[this.prefixCls + "-cell"] = true,
                _a[this.prefixCls + "-cell-in-view"] = !cell.isBiggerThanEnd && !cell.isLowerThanStart,
                _a[this.prefixCls + "-cell-selected"] = cell.isSelected,
                _a[this.prefixCls + "-cell-disabled"] = cell.isDisabled,
                _a;
        };
        DecadeTableComponent.prototype.chooseDecade = function (year) {
            this.value = this.activeDate.setYear(year);
            this.valueChange.emit(this.value);
        };
DecadeTableComponent.ɵfac = function DecadeTableComponent_Factory(t) { return ɵDecadeTableComponent_BaseFactory(t || DecadeTableComponent); };
DecadeTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DecadeTableComponent, selectors: [["decade-table"]], exportAs: ["decadeTable"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DecadeTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵtemplate(1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵtemplate(3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
var ɵDecadeTableComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DecadeTableComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DecadeTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-table',
                exportAs: 'decadeTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], null, null); })();
        return DecadeTableComponent;
    }(AbstractTable));

    var MonthHeaderComponent = /** @class */ (function (_super) {
        __extends(MonthHeaderComponent, _super);
        function MonthHeaderComponent(dateHelper) {
            var _this = _super.call(this) || this;
            _this.dateHelper = dateHelper;
            return _this;
        }
        MonthHeaderComponent.prototype.getSelectors = function () {
            var _this = this;
            return [
                {
                    className: this.prefixCls + "-month-btn",
                    title: this.locale.yearSelect,
                    onClick: function () { return _this.changeMode('year'); },
                    label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
                }
            ];
        };
MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) { return new (t || MonthHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
MonthHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthHeaderComponent, selectors: [["month-header"]], exportAs: ["monthHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function MonthHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, MonthHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelement(8, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 0);
        ɵngcc0.ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        ɵngcc0.ɵɵelement(10, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'month-header',
                exportAs: 'monthHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, null); })();
        return MonthHeaderComponent;
    }(AbstractPanelHeader));
    MonthHeaderComponent.ctorParameters = function () { return [
        { type: i18n.DateHelperService }
    ]; };

    var MonthTableComponent = /** @class */ (function (_super) {
        __extends(MonthTableComponent, _super);
        function MonthTableComponent(dateHelper) {
            var _this = _super.call(this) || this;
            _this.dateHelper = dateHelper;
            _this.MAX_ROW = 4;
            _this.MAX_COL = 3;
            return _this;
        }
        MonthTableComponent.prototype.makeHeadRow = function () {
            return [];
        };
        MonthTableComponent.prototype.makeBodyRows = function () {
            var _this = this;
            var months = [];
            var monthValue = 0;
            for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
                var row = {
                    dateCells: [],
                    trackByIndex: rowIndex
                };
                var _loop_1 = function (colIndex) {
                    var month = this_1.activeDate.setMonth(monthValue);
                    var isDisabled = this_1.isDisabledMonth(month);
                    var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                    var cell = {
                        trackByIndex: colIndex,
                        value: month.nativeDate,
                        isDisabled: isDisabled,
                        isSelected: month.isSameMonth(this_1.value),
                        content: content,
                        title: content,
                        classMap: {},
                        cellRender: util.valueFunctionProp(this_1.cellRender, month),
                        fullCellRender: util.valueFunctionProp(this_1.fullCellRender, month),
                        onClick: function () { return _this.chooseMonth(cell.value.getMonth()); },
                        onMouseEnter: function () { return _this.cellHover.emit(month); }
                    };
                    this_1.addCellProperty(cell, month);
                    row.dateCells.push(cell);
                    monthValue++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
                months.push(row);
            }
            return months;
        };
        MonthTableComponent.prototype.isDisabledMonth = function (month) {
            if (!this.disabledDate) {
                return false;
            }
            var firstOfMonth = month.setDate(1);
            for (var date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
                if (!this.disabledDate(date.nativeDate)) {
                    return false;
                }
            }
            return true;
        };
        MonthTableComponent.prototype.addCellProperty = function (cell, month) {
            if (this.hasRangeValue()) {
                var _a = __read(this.hoverValue, 2), startHover = _a[0], endHover = _a[1];
                var _b = __read(this.selectedValue, 2), startSelected = _b[0], endSelected = _b[1];
                // Selected
                if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
                    cell.isSelectedStart = true;
                    cell.isSelected = true;
                }
                if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
                    cell.isSelectedEnd = true;
                    cell.isSelected = true;
                }
                if (startHover && endHover) {
                    cell.isHoverStart = startHover.isSameMonth(month);
                    cell.isHoverEnd = endHover.isSameMonth(month);
                    cell.isLastCellInPanel = month.getMonth() === 11;
                    cell.isFirstCellInPanel = month.getMonth() === 0;
                    cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
                }
                cell.isStartSingle = startSelected && !endSelected;
                cell.isEndSingle = !startSelected && endSelected;
                cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
                cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
                cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            }
            else if (month.isSameMonth(this.value)) {
                cell.isSelected = true;
            }
            cell.classMap = this.getClassMap(cell);
        };
        MonthTableComponent.prototype.chooseMonth = function (month) {
            this.value = this.activeDate.setMonth(month);
            this.valueChange.emit(this.value);
        };
MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
MonthTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], exportAs: ["monthTable"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵtemplate(1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵtemplate(3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MonthTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, null); })();
        return MonthTableComponent;
    }(AbstractTable));
    MonthTableComponent.ctorParameters = function () { return [
        { type: i18n.DateHelperService }
    ]; };

    var YearHeaderComponent = /** @class */ (function (_super) {
        __extends(YearHeaderComponent, _super);
        function YearHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(YearHeaderComponent.prototype, "startYear", {
            get: function () {
                return parseInt("" + this.value.getYear() / 10, 10) * 10;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(YearHeaderComponent.prototype, "endYear", {
            get: function () {
                return this.startYear + 9;
            },
            enumerable: false,
            configurable: true
        });
        YearHeaderComponent.prototype.superPrevious = function () {
            this.changeValue(this.value.addYears(-10));
        };
        YearHeaderComponent.prototype.superNext = function () {
            this.changeValue(this.value.addYears(10));
        };
        YearHeaderComponent.prototype.getSelectors = function () {
            var _this = this;
            return [
                {
                    className: this.prefixCls + "-year-btn",
                    title: '',
                    onClick: function () { return _this.changeMode('decade'); },
                    label: this.startYear + "-" + this.endYear
                }
            ];
        };
YearHeaderComponent.ɵfac = function YearHeaderComponent_Factory(t) { return ɵYearHeaderComponent_BaseFactory(t || YearHeaderComponent); };
YearHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: YearHeaderComponent, selectors: [["year-header"]], exportAs: ["yearHeader"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function YearHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "button", 0);
        ɵngcc0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        ɵngcc0.ɵɵelement(2, "span", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 0);
        ɵngcc0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        ɵngcc0.ɵɵelement(4, "span", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div");
        ɵngcc0.ɵɵtemplate(6, YearHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 0);
        ɵngcc0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        ɵngcc0.ɵɵelement(8, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "button", 0);
        ɵngcc0.ɵɵlistener("click", function YearHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        ɵngcc0.ɵɵelement(10, "span", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.prefixCls);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.previousTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.selectors);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.nextTitle());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
        ɵngcc0.ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        ɵngcc0.ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    } }, directives: [ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
var ɵYearHeaderComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(YearHeaderComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(YearHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'year-header',
                exportAs: 'yearHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], null, null); })();
        return YearHeaderComponent;
    }(AbstractPanelHeader));

    var YearTableComponent = /** @class */ (function (_super) {
        __extends(YearTableComponent, _super);
        function YearTableComponent(dateHelper) {
            var _this = _super.call(this) || this;
            _this.dateHelper = dateHelper;
            _this.MAX_ROW = 4;
            _this.MAX_COL = 3;
            return _this;
        }
        YearTableComponent.prototype.makeHeadRow = function () {
            return [];
        };
        YearTableComponent.prototype.makeBodyRows = function () {
            var _this = this;
            var currentYear = this.activeDate && this.activeDate.getYear();
            var startYear = parseInt("" + currentYear / 10, 10) * 10;
            var endYear = startYear + 9;
            var previousYear = startYear - 1;
            var years = [];
            var yearValue = 0;
            for (var rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
                var row = {
                    dateCells: [],
                    trackByIndex: rowIndex
                };
                var _loop_1 = function (colIndex) {
                    var yearNum = previousYear + yearValue;
                    var year = this_1.activeDate.setYear(yearNum);
                    var content = this_1.dateHelper.format(year.nativeDate, 'yyyy');
                    var isDisabled = this_1.isDisabledYear(year);
                    var cell = {
                        trackByIndex: colIndex,
                        value: year.nativeDate,
                        isDisabled: isDisabled,
                        isSameDecade: yearNum >= startYear && yearNum <= endYear,
                        isSelected: yearNum === (this_1.value && this_1.value.getYear()),
                        content: content,
                        title: content,
                        classMap: {},
                        isLastCellInPanel: year.getYear() === endYear,
                        isFirstCellInPanel: year.getYear() === startYear,
                        cellRender: util.valueFunctionProp(this_1.cellRender, year),
                        fullCellRender: util.valueFunctionProp(this_1.fullCellRender, year),
                        onClick: function () { return _this.chooseYear(cell.value.getFullYear()); },
                        onMouseEnter: function () { return _this.cellHover.emit(year); }
                    };
                    this_1.addCellProperty(cell, year);
                    row.dateCells.push(cell);
                    yearValue++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
                years.push(row);
            }
            return years;
        };
        YearTableComponent.prototype.getClassMap = function (cell) {
            var _a;
            return Object.assign(Object.assign({}, _super.prototype.getClassMap.call(this, cell)), (_a = {}, _a["ant-picker-cell-in-view"] = !!cell.isSameDecade, _a));
        };
        YearTableComponent.prototype.isDisabledYear = function (year) {
            if (!this.disabledDate) {
                return false;
            }
            var firstOfMonth = year.setMonth(0).setDate(1);
            for (var date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
                if (!this.disabledDate(date.nativeDate)) {
                    return false;
                }
            }
            return true;
        };
        YearTableComponent.prototype.addCellProperty = function (cell, year) {
            if (this.hasRangeValue()) {
                var _a = __read(this.hoverValue, 2), startHover = _a[0], endHover = _a[1];
                var _b = __read(this.selectedValue, 2), startSelected = _b[0], endSelected = _b[1];
                // Selected
                if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameYear(year)) {
                    cell.isSelectedStart = true;
                    cell.isSelected = true;
                }
                if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameYear(year)) {
                    cell.isSelectedEnd = true;
                    cell.isSelected = true;
                }
                if (startHover && endHover) {
                    cell.isHoverStart = startHover.isSameYear(year);
                    cell.isHoverEnd = endHover.isSameYear(year);
                    cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
                }
                cell.isStartSingle = startSelected && !endSelected;
                cell.isEndSingle = !startSelected && endSelected;
                cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeYear(year)) && (year === null || year === void 0 ? void 0 : year.isBeforeYear(endSelected));
                cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
                cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
            }
            else if (year.isSameYear(this.value)) {
                cell.isSelected = true;
            }
            cell.classMap = this.getClassMap(cell);
        };
        YearTableComponent.prototype.chooseYear = function (year) {
            this.value = this.activeDate.setYear(year);
            this.valueChange.emit(this.value);
            this.render();
        };
YearTableComponent.ɵfac = function YearTableComponent_Factory(t) { return new (t || YearTableComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService)); };
YearTableComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: YearTableComponent, selectors: [["year-table"]], exportAs: ["yearTable"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function YearTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "table", 0);
        ɵngcc0.ɵɵtemplate(1, YearTableComponent_thead_1_Template, 4, 2, "thead", 1);
        ɵngcc0.ɵɵelementStart(2, "tbody");
        ɵngcc0.ɵɵtemplate(3, YearTableComponent_tr_3_Template, 3, 4, "tr", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headRow && ctx.headRow.length > 0);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf, ɵngcc2.NgClass, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(YearTableComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-table',
                exportAs: 'yearTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ɵngcc1.DateHelperService }]; }, null); })();
        return YearTableComponent;
    }(AbstractTable));
    YearTableComponent.ctorParameters = function () { return [
        { type: i18n.DateHelperService }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var LibPackerModule = /** @class */ (function () {
        function LibPackerModule() {
        }
LibPackerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LibPackerModule });
LibPackerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, outlet.NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LibPackerModule, { declarations: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent], imports: [ɵngcc2.CommonModule, ɵngcc13.FormsModule, ɵngcc1.NzI18nModule, ɵngcc16.NzTimePickerModule, ɵngcc15.NzOutletModule], exports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibPackerModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule, outlet.NzOutletModule],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            }]
    }], function () { return []; }, null); })();
        return LibPackerModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var NzMonthPickerComponent = /** @class */ (function () {
        function NzMonthPickerComponent(datePicker) {
            this.datePicker = datePicker;
            this.datePicker.nzMode = 'month';
        }
NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(ɵngcc0.ɵɵdirectiveInject(NzDatePickerComponent, 9)); };
NzMonthPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], exportAs: ["nzMonthPicker"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthPickerComponent, [{
        type: core.Directive,
        args: [{
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: core.Optional
            }, {
                type: core.Host
            }] }]; }, null); })();
        return NzMonthPickerComponent;
    }());
    NzMonthPickerComponent.ctorParameters = function () { return [
        { type: NzDatePickerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var NzRangePickerComponent = /** @class */ (function () {
        function NzRangePickerComponent(datePicker) {
            this.datePicker = datePicker;
            this.datePicker.isRange = true;
        }
NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(ɵngcc0.ɵɵdirectiveInject(NzDatePickerComponent, 9)); };
NzRangePickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRangePickerComponent, [{
        type: core.Directive,
        args: [{
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: core.Optional
            }, {
                type: core.Host
            }] }]; }, null); })();
        return NzRangePickerComponent;
    }());
    NzRangePickerComponent.ctorParameters = function () { return [
        { type: NzDatePickerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var NzWeekPickerComponent = /** @class */ (function () {
        function NzWeekPickerComponent(datePicker) {
            this.datePicker = datePicker;
            this.datePicker.nzMode = 'week';
        }
NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) { return new (t || NzWeekPickerComponent)(ɵngcc0.ɵɵdirectiveInject(NzDatePickerComponent, 9)); };
NzWeekPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzWeekPickerComponent, selectors: [["nz-week-picker"]], exportAs: ["nzWeekPicker"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzWeekPickerComponent, [{
        type: core.Directive,
        args: [{
                selector: 'nz-week-picker',
                exportAs: 'nzWeekPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: core.Optional
            }, {
                type: core.Host
            }] }]; }, null); })();
        return NzWeekPickerComponent;
    }());
    NzWeekPickerComponent.ctorParameters = function () { return [
        { type: NzDatePickerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // tslint:disable-next-line:directive-class-suffix
    var NzYearPickerComponent = /** @class */ (function () {
        function NzYearPickerComponent(datePicker) {
            this.datePicker = datePicker;
            this.datePicker.nzMode = 'year';
        }
NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(ɵngcc0.ɵɵdirectiveInject(NzDatePickerComponent, 9)); };
NzYearPickerComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], exportAs: ["nzYearPicker"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzYearPickerComponent, [{
        type: core.Directive,
        args: [{
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: core.Optional
            }, {
                type: core.Host
            }] }]; }, null); })();
        return NzYearPickerComponent;
    }());
    NzYearPickerComponent.ctorParameters = function () { return [
        { type: NzDatePickerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDatePickerModule = /** @class */ (function () {
        function NzDatePickerModule() {
        }
NzDatePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDatePickerModule });
NzDatePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[
            bidi.BidiModule,
            common.CommonModule,
            forms.FormsModule,
            overlay.OverlayModule,
            LibPackerModule,
            icon.NzIconModule,
            overlay$1.NzOverlayModule,
            noAnimation.NzNoAnimationModule,
            outlet.NzOutletModule,
            timePicker.NzTimePickerModule,
            button.NzButtonModule,
            LibPackerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent], imports: [ɵngcc9.BidiModule, ɵngcc2.CommonModule, ɵngcc13.FormsModule, ɵngcc11.OverlayModule, LibPackerModule, ɵngcc14.NzIconModule, ɵngcc12.NzOverlayModule, ɵngcc10.NzNoAnimationModule, ɵngcc15.NzOutletModule, ɵngcc16.NzTimePickerModule, ɵngcc3.NzButtonModule, LibPackerModule], exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    bidi.BidiModule,
                    common.CommonModule,
                    forms.FormsModule,
                    overlay.OverlayModule,
                    LibPackerModule,
                    icon.NzIconModule,
                    overlay$1.NzOverlayModule,
                    noAnimation.NzNoAnimationModule,
                    outlet.NzOutletModule,
                    timePicker.NzTimePickerModule,
                    button.NzButtonModule,
                    LibPackerModule
                ],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                declarations: [
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent,
                    CalendarFooterComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            }]
    }], function () { return []; }, null); })();
        return NzDatePickerModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LibPackerModule = LibPackerModule;
    exports.NzDatePickerComponent = NzDatePickerComponent;
    exports.NzDatePickerModule = NzDatePickerModule;
    exports.NzMonthPickerComponent = NzMonthPickerComponent;
    exports.NzRangePickerComponent = NzRangePickerComponent;
    exports.NzWeekPickerComponent = NzWeekPickerComponent;
    exports.NzYearPickerComponent = NzYearPickerComponent;
    exports.PREFIX_CLASS = PREFIX_CLASS;
    exports.getTimeConfig = getTimeConfig;
    exports.isAllowedDate = isAllowedDate;
    exports.isTimeValid = isTimeValid;
    exports.isTimeValidByConfig = isTimeValidByConfig;
    exports.transCompatFormat = transCompatFormat;
    exports.ɵAbstractPanelHeader = AbstractPanelHeader;
    exports.ɵAbstractTable = AbstractTable;
    exports.ɵCalendarFooterComponent = CalendarFooterComponent;
    exports.ɵDateHeaderComponent = DateHeaderComponent;
    exports.ɵDatePickerService = DatePickerService;
    exports.ɵDateRangePopupComponent = DateRangePopupComponent;
    exports.ɵDateTableComponent = DateTableComponent;
    exports.ɵDecadeHeaderComponent = DecadeHeaderComponent;
    exports.ɵDecadeTableComponent = DecadeTableComponent;
    exports.ɵInnerPopupComponent = InnerPopupComponent;
    exports.ɵMonthHeaderComponent = MonthHeaderComponent;
    exports.ɵMonthTableComponent = MonthTableComponent;
    exports.ɵYearHeaderComponent = YearHeaderComponent;
    exports.ɵYearTableComponent = YearTableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-date-picker.umd.js.map