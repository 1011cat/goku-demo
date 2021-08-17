/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate, cloneDate, wrongSortOrder } from 'ng-zorro-antd/core/time';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DatePickerService } from './date-picker.service';
import { getTimeConfig, isAllowedDate, PREFIX_CLASS } from './util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './date-picker.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './inner-popup.component';
import * as ɵngcc4 from './calendar-footer.component';

function DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_0_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r9.datePickerService.activeInput));
} }
function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function () { return { partType: "left" }; };
const _c2 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_container_0_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r3 = ɵngcc0.ɵɵreference(4);
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
    const _r10 = ɵngcc0.ɵɵreference(7);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(6);
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
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(4);
    const _r5 = ɵngcc0.ɵɵreference(6);
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
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "inner-popup", 9);
    ɵngcc0.ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_panelModeChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const partType_r18 = ctx.partType; const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onPanelModeChange($event, partType_r18); })("cellHover", function DateRangePopupComponent_ng_template_3_Template_inner_popup_cellHover_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onCellHover($event); })("selectDate", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectDate_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.changeValueFromSelect($event, !ctx_r22.showTime); })("selectTime", function DateRangePopupComponent_ng_template_3_Template_inner_popup_selectTime_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const partType_r18 = ctx.partType; const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onSelectTime($event, partType_r18); })("headerChange", function DateRangePopupComponent_ng_template_3_Template_inner_popup_headerChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const partType_r18 = ctx.partType; const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onActiveDateChange($event, partType_r18); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const partType_r18 = ctx.partType;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-panel");
    ɵngcc0.ɵɵclassProp("ant-picker-panel-rtl", ctx_r4.dir === "rtl");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showWeek", ctx_r4.showWeek)("endPanelMode", ctx_r4.getPanelMode(ctx_r4.endPanelMode, partType_r18))("partType", partType_r18)("locale", ctx_r4.locale)("showTimePicker", ctx_r4.hasTimePicker)("timeOptions", ctx_r4.getTimeOptions(partType_r18))("panelMode", ctx_r4.getPanelMode(ctx_r4.panelMode, partType_r18))("activeDate", ctx_r4.getActiveDate(partType_r18))("value", ctx_r4.getValue(partType_r18))("disabledDate", ctx_r4.disabledDate)("dateRender", ctx_r4.dateRender)("selectedValue", ctx_r4.datePickerService == null ? null : ctx_r4.datePickerService.value)("hoverValue", ctx_r4.hoverValue);
} }
function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "calendar-footer", 11);
    ɵngcc0.ɵɵlistener("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.onClickToday($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    const _r7 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵproperty("locale", ctx_r25.locale)("isRange", ctx_r25.isRange)("showToday", ctx_r25.showToday)("showNow", ctx_r25.showNow)("hasTimePicker", ctx_r25.hasTimePicker)("okDisabled", !ctx_r25.isAllowed(ctx_r25.datePickerService == null ? null : ctx_r25.datePickerService.value))("extraFooter", ctx_r25.extraFooter)("rangeQuickSelector", ctx_r25.ranges ? _r7 : null);
} }
function DateRangePopupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 8, "calendar-footer", 10);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.hasFooter);
} }
function DateRangePopupComponent_ng_template_7_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 13);
    ɵngcc0.ɵɵlistener("click", function DateRangePopupComponent_ng_template_7_li_0_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); const name_r30 = ctx.$implicit; const ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.onClickPresetRange(ctx_r31.ranges[name_r30]); })("mouseenter", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); const name_r30 = ctx.$implicit; const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.onHoverPresetRange(ctx_r33.ranges[name_r30]); })("mouseleave", function DateRangePopupComponent_ng_template_7_li_0_Template_li_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.onPresetRangeMouseLeave(); });
    ɵngcc0.ɵɵelementStart(1, "span", 14);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const name_r30 = ctx.$implicit;
    const ctx_r29 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassMapInterpolate1("", ctx_r29.prefixCls, "-preset");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(name_r30);
} }
function DateRangePopupComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_template_7_li_0_Template, 3, 4, "li", 12);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r8.getObjectKeys(ctx_r8.ranges));
} }
export class DateRangePopupComponent {
    constructor(datePickerService, cdr) {
        this.datePickerService = datePickerService;
        this.cdr = cdr;
        this.inline = false;
        this.dir = 'ltr';
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.prefixCls = PREFIX_CLASS;
        this.endPanelMode = 'date';
        this.timeOptions = null;
        this.hoverValue = []; // Range ONLY
        this.checkedPartArr = [false, false];
        this.destroy$ = new Subject();
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    ngOnInit() {
        merge(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateActiveDate();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
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
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateActiveDate() {
        const activeDate = this.datePickerService.hasValue()
            ? this.datePickerService.value
            : this.datePickerService.makeValue(this.defaultPickerValue);
        this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
    }
    /**
     * Prevent input losing focus when click panel
     * @param event
     */
    onMousedown(event) {
        event.preventDefault();
    }
    onClickOk() {
        const inputIndex = { left: 0, right: 1 }[this.datePickerService.activeInput];
        const value = this.isRange
            ? this.datePickerService.value[inputIndex]
            : this.datePickerService.value;
        this.changeValueFromSelect(value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        this.changeValueFromSelect(value, !this.showTime);
    }
    onCellHover(value) {
        if (!this.isRange) {
            return;
        }
        const otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
        const base = this.datePickerService.value[otherInputIndex];
        if (base) {
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            const index = this.datePickerService.getActiveIndex(partType);
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
    }
    onActiveDateChange(value, partType) {
        if (this.isRange) {
            const activeDate = [];
            activeDate[this.datePickerService.getActiveIndex(partType)] = value;
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
        }
        else {
            this.datePickerService.setActiveDate(value);
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = cloneDate(this.datePickerService.value);
            const index = this.datePickerService.getActiveIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.datePickerService.setValue(newValue);
        }
        else {
            const newValue = this.overrideHms(value, this.datePickerService.value);
            this.datePickerService.setValue(newValue); // If not select a date currently, use today
        }
        this.datePickerService.inputPartChange$.next();
        this.buildTimeOptions();
    }
    changeValueFromSelect(value, emitValue = true) {
        if (this.isRange) {
            const selectedValue = cloneDate(this.datePickerService.value);
            const checkedPart = this.datePickerService.activeInput;
            let nextPart = checkedPart;
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
                    if (wrongSortOrder(selectedValue)) {
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
    }
    reversedPart(part) {
        return part === 'left' ? 'right' : 'left';
    }
    getPanelMode(panelMode, partType) {
        if (this.isRange) {
            return panelMode[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.value;
        }
    }
    getActiveDate(partType) {
        if (this.isRange) {
            return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.activeDate;
        }
    }
    isOneAllowed(selectedValue) {
        const index = this.datePickerService.getActiveIndex();
        const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
        return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
    }
    isBothAllowed(selectedValue) {
        return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
            isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
    }
    isAllowed(value, isBoth = false) {
        if (this.isRange) {
            return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
        }
        else {
            return isAllowedDate(value, this.disabledDate, this.disabledTime);
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
            this.datePickerService.emitValue$.next();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    show(partType) {
        const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
        return !hide;
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.datePickerService.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }
    overrideHms(newValue, oldValue) {
        // tslint:disable-next-line:no-parameter-reassignment
        newValue = newValue || new CandyDate();
        // tslint:disable-next-line:no-parameter-reassignment
        oldValue = oldValue || new CandyDate();
        return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    }
}
DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DatePickerService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DateRangePopupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], hostBindings: function DateRangePopupComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function DateRangePopupComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } }, inputs: { inline: "inline", dir: "dir", panelMode: "panelMode", isRange: "isRange", showWeek: "showWeek", locale: "locale", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showNow: "showNow", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", defaultPickerValue: "defaultPickerValue" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", resultOk: "resultOk" }, exportAs: ["dateRangePopup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], ["noTimePicker", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DateRangePopupComponent_ng_container_0_Template, 9, 18, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, DateRangePopupComponent_ng_template_1_Template, 4, 13, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, DateRangePopupComponent_ng_template_3_Template, 2, 18, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, DateRangePopupComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isRange)("ngIfElse", _r1);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc3.InnerPopupComponent, ɵngcc4.CalendarFooterComponent, ɵngcc2.NgForOf], encapsulation: 2, changeDetection: 0 });
DateRangePopupComponent.ctorParameters = () => [
    { type: DatePickerService },
    { type: ChangeDetectorRef }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    inline: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showNow: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    panelMode: [{ type: Input }],
    defaultPickerValue: [{ type: Input }],
    dir: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    calendarChange: [{ type: Output }],
    resultOk: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DateRangePopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: `
    <ng-container *ngIf="isRange; else singlePanel">
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style.left.px]="datePickerService?.arrowLeft"></div>
        <div class="{{ prefixCls }}-panel-container">
          <div class="{{ prefixCls }}-panels">
            <ng-container *ngIf="hasTimePicker; else noTimePicker">
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: datePickerService.activeInput }"></ng-container>
            </ng-container>
            <ng-template #noTimePicker>
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'left' }"></ng-container>
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'right' }"></ng-container>
            </ng-template>
          </div>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-template #singlePanel>
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup"></ng-container>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-template>

    <ng-template #tplInnerPopup let-partType="partType">
      <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'">
        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
        <inner-popup
          [showWeek]="showWeek"
          [endPanelMode]="getPanelMode(endPanelMode, partType)"
          [partType]="partType"
          [locale]="locale!"
          [showTimePicker]="hasTimePicker"
          [timeOptions]="getTimeOptions(partType)"
          [panelMode]="getPanelMode(panelMode, partType)"
          (panelModeChange)="onPanelModeChange($event, partType)"
          [activeDate]="getActiveDate(partType)"
          [value]="getValue(partType)"
          [disabledDate]="disabledDate"
          [dateRender]="dateRender"
          [selectedValue]="$any(datePickerService?.value)"
          [hoverValue]="$any(hoverValue)"
          (cellHover)="onCellHover($event)"
          (selectDate)="changeValueFromSelect($event, !showTime)"
          (selectTime)="onSelectTime($event, partType)"
          (headerChange)="onActiveDateChange($event, partType)"
        ></inner-popup>
      </div>
    </ng-template>

    <ng-template #tplFooter>
      <calendar-footer
        *ngIf="hasFooter"
        [locale]="locale!"
        [isRange]="isRange"
        [showToday]="showToday"
        [showNow]="showNow"
        [hasTimePicker]="hasTimePicker"
        [okDisabled]="!isAllowed($any(datePickerService?.value))"
        [extraFooter]="extraFooter"
        [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
        (clickOk)="onClickOk()"
        (clickToday)="onClickToday($event)"
      ></calendar-footer>
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      <li
        *ngFor="let name of getObjectKeys(ranges)"
        class="{{ prefixCls }}-preset"
        (click)="onClickPresetRange(ranges![name])"
        (mouseenter)="onHoverPresetRange(ranges![name])"
        (mouseleave)="onPresetRangeMouseLeave()"
      >
        <span class="ant-tag ant-tag-blue">{{ name }}</span>
      </li>
    </ng-template>
  `,
                host: {
                    '(mousedown)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.DatePickerService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { inline: [{
            type: Input
        }], dir: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], calendarChange: [{
            type: Output
        }], resultOk: [{
            type: Output
        }], panelMode: [{
            type: Input
        }], isRange: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], locale: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], disabledTime: [{
            type: Input
        }], showToday: [{
            type: Input
        }], showNow: [{
            type: Input
        }], showTime: [{
            type: Input
        }], extraFooter: [{
            type: Input
        }], ranges: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], defaultPickerValue: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWdELGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzdILE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVcxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtR3BFLE1BQU0sT0FBTyx1QkFBdUI7QUFBRyxJQW9DckMsWUFBbUIsaUJBQW9DLEVBQVMsR0FBc0I7QUFBSSxRQUF2RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0FBQUMsUUFBUSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBbEM5RSxXQUFNLEdBQVksS0FBSyxDQUFDO0FBQ25DLFFBWVcsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUNsQyxRQUNx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QkFvQmM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2FuZHlEYXRlLCBjbG9uZURhdGUsIENvbXBhdGlibGVWYWx1ZSwgTm9ybWFsaXplZE1vZGUsIFNpbmdsZVZhbHVlLCB3cm9uZ1NvcnRPcmRlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2RhdGUtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ29tcGF0aWJsZURhdGUsXG4gIERpc2FibGVkRGF0ZUZuLFxuICBEaXNhYmxlZFRpbWVGbixcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcbiAgTnpEYXRlTW9kZSxcbiAgUHJlc2V0UmFuZ2VzLFxuICBSYW5nZVBhcnRUeXBlLFxuICBTdXBwb3J0VGltZU9wdGlvbnNcbn0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBpc0FsbG93ZWREYXRlLCBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcbiAgZXhwb3J0QXM6ICdkYXRlUmFuZ2VQb3B1cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzUmFuZ2U7IGVsc2Ugc2luZ2xlUGFuZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2Utd3JhcHBlciB7eyBwcmVmaXhDbHMgfX0tZGF0ZS1yYW5nZS13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcmFuZ2UtYXJyb3dcIiBbc3R5bGUubGVmdC5weF09XCJkYXRlUGlja2VyU2VydmljZT8uYXJyb3dMZWZ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tcGFuZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbHNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUaW1lUGlja2VyOyBlbHNlIG5vVGltZVBpY2tlclwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsSW5uZXJQb3B1cDsgY29udGV4dDogeyBwYXJ0VHlwZTogZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vVGltZVBpY2tlcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbElubmVyUG9wdXA7IGNvbnRleHQ6IHsgcGFydFR5cGU6ICdsZWZ0JyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cGxJbm5lclBvcHVwOyBjb250ZXh0OiB7IHBhcnRUeXBlOiAncmlnaHQnIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbEZvb3RlclwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2luZ2xlUGFuZWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LXBhbmVsLWNvbnRhaW5lciB7eyBzaG93V2VlayA/IHByZWZpeENscyArICctd2Vlay1udW1iZXInIDogJycgfX0ge3tcbiAgICAgICAgICBoYXNUaW1lUGlja2VyID8gcHJlZml4Q2xzICsgJy10aW1lJyA6ICcnXG4gICAgICAgIH19IHt7IGlzUmFuZ2UgPyBwcmVmaXhDbHMgKyAnLXJhbmdlJyA6ICcnIH19XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiIFtjbGFzcy5hbnQtcGlja2VyLXBhbmVsLXJ0bF09XCJkaXIgPT09ICdydGwnXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgIDwhLS0gU2luZ2xlIE9OTFkgLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRwbElubmVyUG9wdXBcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHBsRm9vdGVyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjdHBsSW5uZXJQb3B1cCBsZXQtcGFydFR5cGU9XCJwYXJ0VHlwZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wYW5lbFwiIFtjbGFzcy5hbnQtcGlja2VyLXBhbmVsLXJ0bF09XCJkaXIgPT09ICdydGwnXCI+XG4gICAgICAgIDwhLS0gVE9ETyhAd2VucWk3MykgW3NlbGVjdGVkVmFsdWVdIFtob3ZlclZhbHVlXSB0eXBlcy0tPlxuICAgICAgICA8aW5uZXItcG9wdXBcbiAgICAgICAgICBbc2hvd1dlZWtdPVwic2hvd1dlZWtcIlxuICAgICAgICAgIFtlbmRQYW5lbE1vZGVdPVwiZ2V0UGFuZWxNb2RlKGVuZFBhbmVsTW9kZSwgcGFydFR5cGUpXCJcbiAgICAgICAgICBbcGFydFR5cGVdPVwicGFydFR5cGVcIlxuICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlIVwiXG4gICAgICAgICAgW3Nob3dUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXJcIlxuICAgICAgICAgIFt0aW1lT3B0aW9uc109XCJnZXRUaW1lT3B0aW9ucyhwYXJ0VHlwZSlcIlxuICAgICAgICAgIFtwYW5lbE1vZGVdPVwiZ2V0UGFuZWxNb2RlKHBhbmVsTW9kZSwgcGFydFR5cGUpXCJcbiAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cIm9uUGFuZWxNb2RlQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJnZXRBY3RpdmVEYXRlKHBhcnRUeXBlKVwiXG4gICAgICAgICAgW3ZhbHVlXT1cImdldFZhbHVlKHBhcnRUeXBlKVwiXG4gICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgICAgICAgIFtkYXRlUmVuZGVyXT1cImRhdGVSZW5kZXJcIlxuICAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cIiRhbnkoZGF0ZVBpY2tlclNlcnZpY2U/LnZhbHVlKVwiXG4gICAgICAgICAgW2hvdmVyVmFsdWVdPVwiJGFueShob3ZlclZhbHVlKVwiXG4gICAgICAgICAgKGNlbGxIb3Zlcik9XCJvbkNlbGxIb3ZlcigkZXZlbnQpXCJcbiAgICAgICAgICAoc2VsZWN0RGF0ZSk9XCJjaGFuZ2VWYWx1ZUZyb21TZWxlY3QoJGV2ZW50LCAhc2hvd1RpbWUpXCJcbiAgICAgICAgICAoc2VsZWN0VGltZSk9XCJvblNlbGVjdFRpbWUoJGV2ZW50LCBwYXJ0VHlwZSlcIlxuICAgICAgICAgIChoZWFkZXJDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudCwgcGFydFR5cGUpXCJcbiAgICAgICAgPjwvaW5uZXItcG9wdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICN0cGxGb290ZXI+XG4gICAgICA8Y2FsZW5kYXItZm9vdGVyXG4gICAgICAgICpuZ0lmPVwiaGFzRm9vdGVyXCJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGUhXCJcbiAgICAgICAgW2lzUmFuZ2VdPVwiaXNSYW5nZVwiXG4gICAgICAgIFtzaG93VG9kYXldPVwic2hvd1RvZGF5XCJcbiAgICAgICAgW3Nob3dOb3ddPVwic2hvd05vd1wiXG4gICAgICAgIFtoYXNUaW1lUGlja2VyXT1cImhhc1RpbWVQaWNrZXJcIlxuICAgICAgICBbb2tEaXNhYmxlZF09XCIhaXNBbGxvd2VkKCRhbnkoZGF0ZVBpY2tlclNlcnZpY2U/LnZhbHVlKSlcIlxuICAgICAgICBbZXh0cmFGb290ZXJdPVwiZXh0cmFGb290ZXJcIlxuICAgICAgICBbcmFuZ2VRdWlja1NlbGVjdG9yXT1cInJhbmdlcyA/IHRwbFJhbmdlUXVpY2tTZWxlY3RvciA6IG51bGxcIlxuICAgICAgICAoY2xpY2tPayk9XCJvbkNsaWNrT2soKVwiXG4gICAgICAgIChjbGlja1RvZGF5KT1cIm9uQ2xpY2tUb2RheSgkZXZlbnQpXCJcbiAgICAgID48L2NhbGVuZGFyLWZvb3Rlcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBSYW5nZSBPTkxZOiBSYW5nZSBRdWljayBTZWxlY3RvciAtLT5cbiAgICA8bmctdGVtcGxhdGUgI3RwbFJhbmdlUXVpY2tTZWxlY3Rvcj5cbiAgICAgIDxsaVxuICAgICAgICAqbmdGb3I9XCJsZXQgbmFtZSBvZiBnZXRPYmplY3RLZXlzKHJhbmdlcylcIlxuICAgICAgICBjbGFzcz1cInt7IHByZWZpeENscyB9fS1wcmVzZXRcIlxuICAgICAgICAoY2xpY2spPVwib25DbGlja1ByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Ib3ZlclByZXNldFJhbmdlKHJhbmdlcyFbbmFtZV0pXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwib25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhZyBhbnQtdGFnLWJsdWVcIj57eyBuYW1lIH19PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJyhtb3VzZWRvd24pJzogJ29uTW91c2Vkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaXNSYW5nZSE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93V2VlayE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbjtcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm47IC8vIFRoaXMgd2lsbCBsZWFkIHRvIHJlYnVpbGQgdGltZSBvcHRpb25zXG4gIEBJbnB1dCgpIHNob3dUb2RheSE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dOb3chOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93VGltZSE6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyPzogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhbmdlcz86IFByZXNldFJhbmdlcztcbiAgQElucHV0KCkgZGF0ZVJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgcGFuZWxNb2RlITogTnpEYXRlTW9kZSB8IE56RGF0ZU1vZGVbXTtcbiAgQElucHV0KCkgZGVmYXVsdFBpY2tlclZhbHVlITogQ29tcGF0aWJsZURhdGUgfCB1bmRlZmluZWQgfCBudWxsO1xuICBASW5wdXQoKSBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjYWxlbmRhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZVZhbHVlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVzdWx0T2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9IFBSRUZJWF9DTEFTUztcbiAgZW5kUGFuZWxNb2RlOiBOekRhdGVNb2RlIHwgTnpEYXRlTW9kZVtdID0gJ2RhdGUnO1xuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW10gfCBudWxsID0gbnVsbDtcbiAgaG92ZXJWYWx1ZTogU2luZ2xlVmFsdWVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXG4gIGNoZWNrZWRQYXJ0QXJyOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlXTtcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGdldCBoYXNUaW1lUGlja2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2hvd1RpbWU7XG4gIH1cblxuICBnZXQgaGFzRm9vdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dUb2RheSB8fCB0aGlzLmhhc1RpbWVQaWNrZXIgfHwgISF0aGlzLmV4dHJhRm9vdGVyIHx8ICEhdGhpcy5yYW5nZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZVBpY2tlclNlcnZpY2U6IERhdGVQaWNrZXJTZXJ2aWNlLCBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBtZXJnZSh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlQ2hhbmdlJCwgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlRGF0ZSgpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xuICAgICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSkge1xuICAgICAgdGhpcy5lbmRQYW5lbE1vZGUgPSB0aGlzLnBhbmVsTW9kZTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdFBpY2tlclZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZURhdGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVEYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZURhdGUgPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmhhc1ZhbHVlKClcbiAgICAgID8gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZVxuICAgICAgOiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLm1ha2VWYWx1ZSh0aGlzLmRlZmF1bHRQaWNrZXJWYWx1ZSEpO1xuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0QWN0aXZlRGF0ZShhY3RpdmVEYXRlLCB0aGlzLmhhc1RpbWVQaWNrZXIsIHRoaXMuZ2V0UGFuZWxNb2RlKHRoaXMuZW5kUGFuZWxNb2RlKSBhcyBOb3JtYWxpemVkTW9kZSk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCBpbnB1dCBsb3NpbmcgZm9jdXMgd2hlbiBjbGljayBwYW5lbFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uQ2xpY2tPaygpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dEluZGV4ID0geyBsZWZ0OiAwLCByaWdodDogMSB9W3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXRdO1xuICAgIGNvbnN0IHZhbHVlOiBDYW5keURhdGUgPSB0aGlzLmlzUmFuZ2VcbiAgICAgID8gKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW10pW2lucHV0SW5kZXhdXG4gICAgICA6ICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWUpO1xuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xuICB9XG5cbiAgb25DbGlja1RvZGF5KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZSwgIXRoaXMuc2hvd1RpbWUpO1xuICB9XG5cbiAgb25DZWxsSG92ZXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG90aGVySW5wdXRJbmRleCA9IHsgbGVmdDogMSwgcmlnaHQ6IDAgfVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0XTtcbiAgICBjb25zdCBiYXNlID0gKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW10pW290aGVySW5wdXRJbmRleF0hO1xuICAgIGlmIChiYXNlKSB7XG4gICAgICBpZiAoYmFzZS5pc0JlZm9yZURheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW2Jhc2UsIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFt2YWx1ZSwgYmFzZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogTnpEYXRlTW9kZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKTtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBhbmVsTW9kZSA9IFttb2RlLCB0aGlzLnBhbmVsTW9kZVsxXV0gYXMgTnpEYXRlTW9kZVtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYW5lbE1vZGUgPSBbdGhpcy5wYW5lbE1vZGVbMF0sIG1vZGVdIGFzIE56RGF0ZU1vZGVbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xuICAgIH1cbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcbiAgfVxuXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZURhdGU6IFNpbmdsZVZhbHVlW10gPSBbXTtcbiAgICAgIGFjdGl2ZURhdGVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldEFjdGl2ZURhdGUoXG4gICAgICAgIGFjdGl2ZURhdGUsXG4gICAgICAgIHRoaXMuaGFzVGltZVBpY2tlcixcbiAgICAgICAgdGhpcy5nZXRQYW5lbE1vZGUodGhpcy5lbmRQYW5lbE1vZGUsIHBhcnRUeXBlKSBhcyBOb3JtYWxpemVkTW9kZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRBY3RpdmVEYXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFRpbWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjbG9uZURhdGUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgYXMgU2luZ2xlVmFsdWVbXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSk7XG4gICAgICBuZXdWYWx1ZVtpbmRleF0gPSB0aGlzLm92ZXJyaWRlSG1zKHZhbHVlLCBuZXdWYWx1ZVtpbmRleF0pO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGUpO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShuZXdWYWx1ZSk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XG4gICAgfVxuICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KCk7XG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSwgZW1pdFZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWU6IFNpbmdsZVZhbHVlW10gPSBjbG9uZURhdGUodGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSkgYXMgQ2FuZHlEYXRlW107XG4gICAgICBjb25zdCBjaGVja2VkUGFydDogUmFuZ2VQYXJ0VHlwZSA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlSW5wdXQ7XG4gICAgICBsZXQgbmV4dFBhcnQ6IFJhbmdlUGFydFR5cGUgPSBjaGVja2VkUGFydDtcblxuICAgICAgc2VsZWN0ZWRWYWx1ZVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KGNoZWNrZWRQYXJ0KV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2hlY2tlZFBhcnRBcnJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChjaGVja2VkUGFydCldID0gdHJ1ZTtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG5cbiAgICAgIGlmIChlbWl0VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICAgICAgLy8gRm9yIFVFLCBTaG91bGQgYWx3YXlzIGJlIHJldmVyc2VkLCBhbmQgY2xlYXIgdmF1ZSB3aGVuIG5leHQgcGFydCBpcyByaWdodFxuICAgICAgICAgIG5leHRQYXJ0ID0gdGhpcy5yZXZlcnNlZFBhcnQoY2hlY2tlZFBhcnQpO1xuICAgICAgICAgIGlmIChuZXh0UGFydCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KG5leHRQYXJ0KV0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkUGFydEFyclt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KG5leHRQYXJ0KV0gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgaWYgKHRoaXMuaXNCb3RoQWxsb3dlZChzZWxlY3RlZFZhbHVlKSAmJiB0aGlzLmNoZWNrZWRQYXJ0QXJyWzBdICYmIHRoaXMuY2hlY2tlZFBhcnRBcnJbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBpZiBzb3J0IG9yZGVyIGlzIHdyb25nLCBjbGVhciB0aGUgb3RoZXIgcGFydCdzIHZhbHVlXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHdyb25nU29ydE9yZGVyKHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgICAgICBuZXh0UGFydCA9IHRoaXMucmV2ZXJzZWRQYXJ0KGNoZWNrZWRQYXJ0KTtcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFBhcnRBcnJbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChuZXh0UGFydCldID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5zZXRWYWx1ZShzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByYW5nZSBkYXRlIHVzdWFsbHkgc2VsZWN0ZWQgcGFpcmVkLFxuICAgICAgICAgICAqIHNvIHdlIGVtaXQgdGhlIGRhdGUgdmFsdWUgb25seSBib3RoIGRhdGUgaXMgYWxsb3dlZCBhbmQgYm90aCBwYXJ0IGFyZSBjaGVja2VkXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRoaXMuaXNCb3RoQWxsb3dlZChzZWxlY3RlZFZhbHVlKSAmJiB0aGlzLmNoZWNrZWRQYXJ0QXJyWzBdICYmIHRoaXMuY2hlY2tlZFBhcnRBcnJbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJDaGFuZ2UuZW1pdChzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmVtaXRWYWx1ZSQubmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FsbG93ZWQoc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG5leHRQYXJ0ID0gdGhpcy5yZXZlcnNlZFBhcnQoY2hlY2tlZFBhcnQpO1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhckNoYW5nZS5lbWl0KFt2YWx1ZS5jbG9uZSgpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5pbnB1dFBhcnRDaGFuZ2UkLm5leHQobmV4dFBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuaW5wdXRQYXJ0Q2hhbmdlJC5uZXh0KCk7XG5cbiAgICAgIGlmIChlbWl0VmFsdWUgJiYgdGhpcy5pc0FsbG93ZWQodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZW1pdFZhbHVlJC5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV2ZXJzZWRQYXJ0KHBhcnQ6IFJhbmdlUGFydFR5cGUpOiBSYW5nZVBhcnRUeXBlIHtcbiAgICByZXR1cm4gcGFydCA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgfVxuXG4gIGdldFBhbmVsTW9kZShwYW5lbE1vZGU6IE56RGF0ZU1vZGUgfCBOekRhdGVNb2RlW10sIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IE56RGF0ZU1vZGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiBwYW5lbE1vZGVbdGhpcy5kYXRlUGlja2VyU2VydmljZS5nZXRBY3RpdmVJbmRleChwYXJ0VHlwZSldIGFzIE56RGF0ZU1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYW5lbE1vZGUgYXMgTnpEYXRlTW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgc2luZ2xlIHZhbHVlIG9yIHBhcnQgdmFsdWUgb2YgYSByYW5nZVxuICBnZXRWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAoKHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlW10pIHx8IFtdKVt0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmdldEFjdGl2ZUluZGV4KHBhcnRUeXBlKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLnZhbHVlIGFzIENhbmR5RGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRBY3RpdmVEYXRlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuICh0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZURhdGUgYXMgQ2FuZHlEYXRlW10pW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuYWN0aXZlRGF0ZSBhcyBDYW5keURhdGU7XG4gICAgfVxuICB9XG5cbiAgZGlzYWJsZWRTdGFydFRpbWU6IERpc2FibGVkVGltZUZuID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnc3RhcnQnKTtcbiAgfTtcblxuICBkaXNhYmxlZEVuZFRpbWU6IERpc2FibGVkVGltZUZuID0gKHZhbHVlOiBEYXRlIHwgRGF0ZVtdKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnZW5kJyk7XG4gIH07XG5cbiAgaXNPbmVBbGxvd2VkKHNlbGVjdGVkVmFsdWU6IFNpbmdsZVZhbHVlW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgoKTtcbiAgICBjb25zdCBkaXNhYmxlZFRpbWVBcnIgPSBbdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSwgdGhpcy5kaXNhYmxlZEVuZFRpbWVdO1xuICAgIHJldHVybiBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbaW5kZXhdISwgdGhpcy5kaXNhYmxlZERhdGUsIGRpc2FibGVkVGltZUFycltpbmRleF0pO1xuICB9XG5cbiAgaXNCb3RoQWxsb3dlZChzZWxlY3RlZFZhbHVlOiBTaW5nbGVWYWx1ZVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVswXSEsIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkU3RhcnRUaW1lKSAmJlxuICAgICAgaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWzFdISwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKVxuICAgICk7XG4gIH1cblxuICBpc0FsbG93ZWQodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgaXNCb3RoOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gaXNCb3RoID8gdGhpcy5pc0JvdGhBbGxvd2VkKHZhbHVlIGFzIENhbmR5RGF0ZVtdKSA6IHRoaXMuaXNPbmVBbGxvd2VkKHZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzQWxsb3dlZERhdGUodmFsdWUgYXMgQ2FuZHlEYXRlLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGwge1xuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbWVPcHRpb25zIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLnRpbWVPcHRpb25zW3RoaXMuZGF0ZVBpY2tlclNlcnZpY2UuZ2V0QWN0aXZlSW5kZXgocGFydFR5cGUpXSA6IHRoaXMudGltZU9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwoKSA6IHZhbDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2Uuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xuICAgICAgdGhpcy5kYXRlUGlja2VyU2VydmljZS5lbWl0VmFsdWUkLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBvblByZXNldFJhbmdlTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xuICB9XG5cbiAgb25Ib3ZlclByZXNldFJhbmdlKHZhbDogUHJlc2V0UmFuZ2VzW2tleW9mIFByZXNldFJhbmdlc10pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW25ldyBDYW5keURhdGUodmFsWzBdKSwgbmV3IENhbmR5RGF0ZSh2YWxbMV0pXTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RLZXlzKG9iaj86IFByZXNldFJhbmdlcyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xuICB9XG5cbiAgc2hvdyhwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhpZGUgPSB0aGlzLnNob3dUaW1lICYmIHRoaXMuaXNSYW5nZSAmJiB0aGlzLmRhdGVQaWNrZXJTZXJ2aWNlLmFjdGl2ZUlucHV0ICE9PSBwYXJ0VHlwZTtcbiAgICByZXR1cm4gIWhpZGU7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRUaW1lT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlUGlja2VyU2VydmljZS52YWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFt0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHZhbHVlWzBdLCAnc3RhcnQnKSwgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UudmFsdWUgYXMgQ2FuZHlEYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZVRpbWVPcHRpb25zKG9yaWdpbjogU3VwcG9ydFRpbWVPcHRpb25zLCB2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0aWFsPzogRGlzYWJsZWRUaW1lUGFydGlhbCk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XG4gICAgbGV0IGRpc2FibGVkVGltZUZuO1xuICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc2FibGVkVGltZUZuID0gdGhpcy5kaXNhYmxlZFRpbWU7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLm9yaWdpbiwgLi4uZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lRm4pIH07XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlSG1zKG5ld1ZhbHVlOiBDYW5keURhdGUgfCBudWxsLCBvbGRWYWx1ZTogQ2FuZHlEYXRlIHwgbnVsbCk6IENhbmR5RGF0ZSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnRcbiAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlIHx8IG5ldyBDYW5keURhdGUoKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudFxuICAgIG9sZFZhbHVlID0gb2xkVmFsdWUgfHwgbmV3IENhbmR5RGF0ZSgpO1xuICAgIHJldHVybiBvbGRWYWx1ZS5zZXRIbXMobmV3VmFsdWUuZ2V0SG91cnMoKSwgbmV3VmFsdWUuZ2V0TWludXRlcygpLCBuZXdWYWx1ZS5nZXRTZWNvbmRzKCkpO1xuICB9XG59XG4iXX0=