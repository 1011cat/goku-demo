import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { Directive, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, Output, forwardRef, ChangeDetectorRef, Optional, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { LibPackerModule } from 'ng-zorro-antd/date-picker';
import { NzI18nService, DateHelperService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from 'ng-zorro-antd/select';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/radio';
import * as ɵngcc6 from '@angular/cdk/bidi';
import * as ɵngcc7 from 'ng-zorro-antd/date-picker';

function NzCalendarHeaderComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    const year_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", year_r2.label)("nzValue", year_r2.value);
} }
function NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    const month_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", month_r4.label)("nzValue", month_r4.value);
} }
function NzCalendarHeaderComponent_nz_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_3_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.monthChange.emit($event); });
    ɵngcc0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template, 1, 2, "nz-option", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
function NzCalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-table", 6);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_5_Template_date_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r2.prefixCls)("value", ctx_r2.activeDate)("activeDate", ctx_r2.activeDate)("cellRender", ctx_r2.dateCell)("fullCellRender", ctx_r2.dateFullCell)("disabledDate", ctx_r2.nzDisabledDate);
} }
function NzCalendarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "month-table", 7);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_7_Template_month_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r4.prefixCls)("value", ctx_r4.activeDate)("activeDate", ctx_r4.activeDate)("cellRender", ctx_r4.monthCell)("fullCellRender", ctx_r4.monthFullCell);
} }
class NzDateCellDirective {
}
NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
NzDateCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
class NzMonthCellDirective {
}
NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
NzMonthCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
class NzDateFullCellDirective {
}
NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
NzDateFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
class NzMonthFullCellDirective {
}
NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
NzMonthFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarHeaderComponent {
    constructor(i18n, dateHelper, elementRef) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new CandyDate();
        this.modeChange = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.years = [];
        this.months = [];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-fullcalendar-header');
    }
    get activeYear() {
        return this.activeDate.getYear();
    }
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.lang.year;
    }
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.lang.month;
    }
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    setUpYears(year) {
        const start = (year || this.activeYear) - this.yearOffset;
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            const dateInMonth = this.activeDate.setMonth(i);
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DateHelperService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCalendarHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostVars: 2, hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", "block");
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 9, vars: 9, consts: [[1, "ant-picker-calendar-header"], [1, "ant-picker-calendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ant-picker-calendar-mode-switch", 3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "nz-select", 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.updateYear($event); });
        ɵngcc0.ɵɵtemplate(2, NzCalendarHeaderComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NzCalendarHeaderComponent_nz_select_3_Template, 2, 4, "nz-select", 3);
        ɵngcc0.ɵɵelementStart(4, "nz-radio-group", 4);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.modeChange.emit($event); });
        ɵngcc0.ɵɵelementStart(5, "label", 5);
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "label", 6);
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.years);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mode === "month");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.monthTypeText);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.yearTypeText);
    } }, directives: [ɵngcc2.NzSelectComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc4.NgForOf, ɵngcc4.NgIf, ɵngcc5.NzRadioGroupComponent, ɵngcc5.NzRadioComponent, ɵngcc5.NzRadioButtonDirective, ɵngcc2.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: DateHelperService },
    { type: ElementRef }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    fullscreen: [{ type: Input }],
    activeDate: [{ type: Input }],
    modeChange: [{ type: Output }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarComponent {
    constructor(cdr, elementRef, directionality) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.activeDate = new CandyDate();
        this.prefixCls = 'ant-picker-calendar';
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.nzFullscreen = true;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker-calendar');
    }
    get dateCell() {
        return (this.nzDateCell || this.nzDateCellChild);
    }
    get dateFullCell() {
        return (this.nzDateFullCell || this.nzDateFullCellChild);
    }
    get monthCell() {
        return (this.nzMonthCell || this.nzMonthCellChild);
    }
    get monthFullCell() {
        return (this.nzMonthFullCell || this.nzMonthFullCellChild);
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.dir = this.directionality.value;
        });
    }
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    onYearSelect(year) {
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    onMonthSelect(month) {
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    writeValue(value) {
        this.updateDate(new CandyDate(value), false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.updateDate(new CandyDate(this.nzValue), false);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.Directionality, 8)); };
NzCalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateCellDirective, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthCellDirective, true, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 6, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzDisabledDate: "nzDisabledDate", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 9, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate", "valueChange"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-calendar-header", 0);
        ɵngcc0.ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzCalendarComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NzCalendarComponent_ng_template_5_Template, 1, 6, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NzCalendarComponent_ng_template_7_Template, 1, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(6);
        const _r3 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NzCalendarHeaderComponent, ɵngcc4.NgIf, ɵngcc7.ɵDateTableComponent, ɵngcc7.ɵMonthTableComponent], encapsulation: 2, changeDetection: 0 });
NzCalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzDisabledDate: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzPanelChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateCellChild: [{ type: ContentChild, args: [NzDateCellDirective, { static: false, read: TemplateRef },] }],
    nzDateFullCell: [{ type: Input }],
    nzDateFullCellChild: [{ type: ContentChild, args: [NzDateFullCellDirective, { static: false, read: TemplateRef },] }],
    nzMonthCell: [{ type: Input }],
    nzMonthCellChild: [{ type: ContentChild, args: [NzMonthCellDirective, { static: false, read: TemplateRef },] }],
    nzMonthFullCell: [{ type: Input }],
    nzMonthFullCellChild: [{ type: ContentChild, args: [NzMonthFullCellDirective, { static: false, read: TemplateRef },] }],
    nzFullscreen: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateFullCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthFullCellDirective, [{
        type: Directive,
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: `
    <div class="ant-picker-calendar-header">
      <nz-select
        class="ant-picker-calendar-year-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeYear"
        (ngModelChange)="updateYear($event)"
      >
        <nz-option *ngFor="let year of years" [nzLabel]="year.label" [nzValue]="year.value"></nz-option>
      </nz-select>

      <nz-select
        *ngIf="mode === 'month'"
        class="ant-picker-calendar-month-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeMonth"
        (ngModelChange)="monthChange.emit($event)"
      >
        <nz-option *ngFor="let month of months" [nzLabel]="month.label" [nzValue]="month.value"></nz-option>
      </nz-select>

      <nz-radio-group class="ant-picker-calendar-mode-switch" [(ngModel)]="mode" (ngModelChange)="modeChange.emit($event)" [nzSize]="size">
        <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
        <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
      </nz-radio-group>
    </div>
  `,
                host: {
                    '[style.display]': `'block'`
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc1.DateHelperService }, { type: ɵngcc0.ElementRef }]; }, { mode: [{
            type: Input
        }], fullscreen: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], modeChange: [{
            type: Output
        }], yearChange: [{
            type: Output
        }], monthChange: [{
            type: Output
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    ></nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          <ng-container *ngIf="nzMode === 'month'; then monthModeTable; else yearModeTable"></ng-container>
        </div>
      </div>
    </div>
    <ng-template #monthModeTable>
      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
      <date-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(dateCell)"
        [fullCellRender]="$any(dateFullCell)"
        [disabledDate]="nzDisabledDate"
        (valueChange)="onDateSelect($event)"
      ></date-table>
    </ng-template>

    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->
    <ng-template #yearModeTable>
      <month-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="$any(monthCell)"
        [fullCellRender]="$any(monthFullCell)"
        (valueChange)="onDateSelect($event)"
      ></month-table>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen',
                    '[class.ant-picker-calendar-rtl]': `dir === 'rtl'`
                },
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc6.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzMode: [{
            type: Input
        }], nzModeChange: [{
            type: Output
        }], nzPanelChange: [{
            type: Output
        }], nzSelectChange: [{
            type: Output
        }], nzValueChange: [{
            type: Output
        }], nzFullscreen: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzDisabledDate: [{
            type: Input
        }], nzDateCell: [{
            type: Input
        }], nzDateCellChild: [{
            type: ContentChild,
            args: [NzDateCellDirective, { static: false, read: TemplateRef }]
        }], nzDateFullCell: [{
            type: Input
        }], nzDateFullCellChild: [{
            type: ContentChild,
            args: [NzDateFullCellDirective, { static: false, read: TemplateRef }]
        }], nzMonthCell: [{
            type: Input
        }], nzMonthCellChild: [{
            type: ContentChild,
            args: [NzMonthCellDirective, { static: false, read: TemplateRef }]
        }], nzMonthFullCell: [{
            type: Input
        }], nzMonthFullCellChild: [{
            type: ContentChild,
            args: [NzMonthFullCellDirective, { static: false, read: TemplateRef }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCalendarModule {
}
NzCalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCalendarModule });
NzCalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: function () { return [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]; }, imports: function () { return [BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]; }, exports: function () { return [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
                imports: [BidiModule, CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule, LibPackerModule]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective };

//# sourceMappingURL=ng-zorro-antd-calendar.js.map