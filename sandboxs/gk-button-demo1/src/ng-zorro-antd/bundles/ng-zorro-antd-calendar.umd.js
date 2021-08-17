(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/i18n'),require('ng-zorro-antd/select'),require('@angular/forms'),require('@angular/common'),require('ng-zorro-antd/radio'),require('@angular/cdk/bidi'),require('ng-zorro-antd/date-picker'),exports, require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/core/time'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/calendar', ['@angular/core','ng-zorro-antd/i18n','ng-zorro-antd/select','@angular/forms','@angular/common','ng-zorro-antd/radio','@angular/cdk/bidi','ng-zorro-antd/date-picker','exports', '@angular/cdk/bidi', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/i18n', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/core/time', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.i18n,global.ngZorroAntd.select,global.ng.forms,global.ng.common,global.ngZorroAntd.radio,global.ng.cdk.bidi,global.ngZorroAntd.datePicker,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].calendar = {}), global.ng.cdk.bidi, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd']['date-picker'], global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].select, global['ng-zorro-antd'].core.time, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,exports, bidi, common, core, forms, datePicker, i18n, radio, select, time, util, rxjs, operators) { 
function NzCalendarHeaderComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    var year_r2 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", year_r2.label)("nzValue", year_r2.value);
} }
function NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-option", 7);
} if (rf & 2) {
    var month_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzLabel", month_r4.label)("nzValue", month_r4.value);
} }
function NzCalendarHeaderComponent_nz_select_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-select", 8);
    ɵngcc0.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_3_Template_nz_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.monthChange.emit($event); });
    ɵngcc0.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template, 1, 2, "nz-option", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSize", ctx_r1.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r1.activeMonth);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.months);
} }
function NzCalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "date-table", 6);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_5_Template_date_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r2.prefixCls)("value", ctx_r2.activeDate)("activeDate", ctx_r2.activeDate)("cellRender", ctx_r2.dateCell)("fullCellRender", ctx_r2.dateFullCell)("disabledDate", ctx_r2.nzDisabledDate);
} }
function NzCalendarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "month-table", 7);
    ɵngcc0.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_7_Template_month_table_valueChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onDateSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("prefixCls", ctx_r4.prefixCls)("value", ctx_r4.activeDate)("activeDate", ctx_r4.activeDate)("cellRender", ctx_r4.monthCell)("fullCellRender", ctx_r4.monthFullCell);
} }
'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDateCellDirective = /** @class */ (function () {
        function NzDateCellDirective() {
        }
NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
NzDateCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], function () { return []; }, null); })();
        return NzDateCellDirective;
    }());
    var NzMonthCellDirective = /** @class */ (function () {
        function NzMonthCellDirective() {
        }
NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
NzMonthCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], function () { return []; }, null); })();
        return NzMonthCellDirective;
    }());
    var NzDateFullCellDirective = /** @class */ (function () {
        function NzDateFullCellDirective() {
        }
NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
NzDateFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDateFullCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], function () { return []; }, null); })();
        return NzDateFullCellDirective;
    }());
    var NzMonthFullCellDirective = /** @class */ (function () {
        function NzMonthFullCellDirective() {
        }
NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
NzMonthFullCellDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMonthFullCellDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], function () { return []; }, null); })();
        return NzMonthFullCellDirective;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCalendarHeaderComponent = /** @class */ (function () {
        function NzCalendarHeaderComponent(i18n, dateHelper, elementRef) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.elementRef = elementRef;
            this.mode = 'month';
            this.fullscreen = true;
            this.activeDate = new time.CandyDate();
            this.modeChange = new core.EventEmitter();
            this.yearChange = new core.EventEmitter();
            this.monthChange = new core.EventEmitter();
            // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
            this.yearOffset = 10;
            this.yearTotal = 20;
            this.years = [];
            this.months = [];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-fullcalendar-header');
        }
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
            get: function () {
                return this.activeDate.getYear();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
            get: function () {
                return this.activeDate.getMonth();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
            get: function () {
                return this.fullscreen ? 'default' : 'small';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
            get: function () {
                return this.i18n.getLocale().Calendar.lang.year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
            get: function () {
                return this.i18n.getLocale().Calendar.lang.month;
            },
            enumerable: false,
            configurable: true
        });
        NzCalendarHeaderComponent.prototype.ngOnInit = function () {
            this.setUpYears();
            this.setUpMonths();
        };
        NzCalendarHeaderComponent.prototype.updateYear = function (year) {
            this.yearChange.emit(year);
            this.setUpYears(year);
        };
        NzCalendarHeaderComponent.prototype.setUpYears = function (year) {
            var start = (year || this.activeYear) - this.yearOffset;
            var end = start + this.yearTotal;
            this.years = [];
            for (var i = start; i < end; i++) {
                this.years.push({ label: "" + i, value: i });
            }
        };
        NzCalendarHeaderComponent.prototype.setUpMonths = function () {
            this.months = [];
            for (var i = 0; i < 12; i++) {
                var dateInMonth = this.activeDate.setMonth(i);
                var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
                this.months.push({ label: monthText, value: i });
            }
        };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: "\n    <div class=\"ant-picker-calendar-header\">\n      <nz-select\n        class=\"ant-picker-calendar-year-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeYear\"\n        (ngModelChange)=\"updateYear($event)\"\n      >\n        <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n      </nz-select>\n\n      <nz-select\n        *ngIf=\"mode === 'month'\"\n        class=\"ant-picker-calendar-month-select\"\n        [nzSize]=\"size\"\n        [nzDropdownMatchSelectWidth]=\"false\"\n        [ngModel]=\"activeMonth\"\n        (ngModelChange)=\"monthChange.emit($event)\"\n      >\n        <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n      </nz-select>\n\n      <nz-radio-group class=\"ant-picker-calendar-mode-switch\" [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n        <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n        <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n      </nz-radio-group>\n    </div>\n  ",
                host: {
                    '[style.display]': "'block'"
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc1.DateHelperService }, { type: ɵngcc0.ElementRef }]; }, { mode: [{
            type: core.Input
        }], fullscreen: [{
            type: core.Input
        }], activeDate: [{
            type: core.Input
        }], modeChange: [{
            type: core.Output
        }], yearChange: [{
            type: core.Output
        }], monthChange: [{
            type: core.Output
        }] }); })();
        return NzCalendarHeaderComponent;
    }());
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: i18n.NzI18nService },
        { type: i18n.DateHelperService },
        { type: core.ElementRef }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: core.Input }],
        fullscreen: [{ type: core.Input }],
        activeDate: [{ type: core.Input }],
        modeChange: [{ type: core.Output }],
        yearChange: [{ type: core.Output }],
        monthChange: [{ type: core.Output }]
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
    var NzCalendarComponent = /** @class */ (function () {
        function NzCalendarComponent(cdr, elementRef, directionality) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.activeDate = new time.CandyDate();
            this.prefixCls = 'ant-picker-calendar';
            this.destroy$ = new rxjs.Subject();
            this.dir = 'ltr';
            this.onChangeFn = function () { };
            this.onTouchFn = function () { };
            this.nzMode = 'month';
            this.nzModeChange = new core.EventEmitter();
            this.nzPanelChange = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter();
            this.nzValueChange = new core.EventEmitter();
            this.nzFullscreen = true;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-picker-calendar');
        }
        Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
            get: function () {
                return (this.nzDateCell || this.nzDateCellChild);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
            get: function () {
                return (this.nzDateFullCell || this.nzDateFullCellChild);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
            get: function () {
                return (this.nzMonthCell || this.nzMonthCellChild);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
            get: function () {
                return (this.nzMonthFullCell || this.nzMonthFullCellChild);
            },
            enumerable: false,
            configurable: true
        });
        NzCalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.dir = _this.directionality.value;
            });
        };
        NzCalendarComponent.prototype.onModeChange = function (mode) {
            this.nzModeChange.emit(mode);
            this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
        };
        NzCalendarComponent.prototype.onYearSelect = function (year) {
            var date = this.activeDate.setYear(year);
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.onMonthSelect = function (month) {
            var date = this.activeDate.setMonth(month);
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.onDateSelect = function (date) {
            // Only activeDate is enough in calendar
            // this.value = date;
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.writeValue = function (value) {
            this.updateDate(new time.CandyDate(value), false);
            this.cdr.markForCheck();
        };
        NzCalendarComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        NzCalendarComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchFn = fn;
        };
        NzCalendarComponent.prototype.updateDate = function (date, touched) {
            if (touched === void 0) { touched = true; }
            this.activeDate = date;
            if (touched) {
                this.onChangeFn(date.nativeDate);
                this.onTouchFn();
                this.nzSelectChange.emit(date.nativeDate);
                this.nzValueChange.emit(date.nativeDate);
            }
        };
        NzCalendarComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzValue) {
                this.updateDate(new time.CandyDate(this.nzValue), false);
            }
        };
        NzCalendarComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.Directionality, 8)); };
NzCalendarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthCellDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, true, core.TemplateRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 6, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen)("ant-picker-calendar-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzDisabledDate: "nzDisabledDate", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return NzCalendarComponent; }), multi: true }]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 9, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "disabledDate", "valueChange"], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
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
        var _r1 = ɵngcc0.ɵɵreference(6);
        var _r3 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NzCalendarHeaderComponent, ɵngcc4.NgIf, ɵngcc7.ɵDateTableComponent, ɵngcc7.ɵMonthTableComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarComponent, [{
        type: core.Component,
        args: [{
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: "\n    <nz-calendar-header\n      [fullscreen]=\"nzFullscreen\"\n      [activeDate]=\"activeDate\"\n      [(mode)]=\"nzMode\"\n      (modeChange)=\"onModeChange($event)\"\n      (yearChange)=\"onYearSelect($event)\"\n      (monthChange)=\"onMonthSelect($event)\"\n    ></nz-calendar-header>\n\n    <div class=\"ant-picker-panel\">\n      <div class=\"ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel\">\n        <div class=\"ant-picker-body\">\n          <ng-container *ngIf=\"nzMode === 'month'; then monthModeTable; else yearModeTable\"></ng-container>\n        </div>\n      </div>\n    </div>\n    <ng-template #monthModeTable>\n      <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n      <date-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(dateCell)\"\n        [fullCellRender]=\"$any(dateFullCell)\"\n        [disabledDate]=\"nzDisabledDate\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></date-table>\n    </ng-template>\n\n    <!--  TODO(@wenqi73) [cellRender] [fullCellRender] -->\n    <ng-template #yearModeTable>\n      <month-table\n        [prefixCls]=\"prefixCls\"\n        [value]=\"activeDate\"\n        [activeDate]=\"activeDate\"\n        [cellRender]=\"$any(monthCell)\"\n        [fullCellRender]=\"$any(monthFullCell)\"\n        (valueChange)=\"onDateSelect($event)\"\n      ></month-table>\n    </ng-template>\n  ",
                host: {
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen',
                    '[class.ant-picker-calendar-rtl]': "dir === 'rtl'"
                },
                providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef(function () { return NzCalendarComponent; }), multi: true }]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc6.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzMode: [{
            type: core.Input
        }], nzModeChange: [{
            type: core.Output
        }], nzPanelChange: [{
            type: core.Output
        }], nzSelectChange: [{
            type: core.Output
        }], nzValueChange: [{
            type: core.Output
        }], nzFullscreen: [{
            type: core.Input
        }], nzValue: [{
            type: core.Input
        }], nzDisabledDate: [{
            type: core.Input
        }], nzDateCell: [{
            type: core.Input
        }], nzDateCellChild: [{
            type: core.ContentChild,
            args: [NzDateCellDirective, { static: false, read: core.TemplateRef }]
        }], nzDateFullCell: [{
            type: core.Input
        }], nzDateFullCellChild: [{
            type: core.ContentChild,
            args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef }]
        }], nzMonthCell: [{
            type: core.Input
        }], nzMonthCellChild: [{
            type: core.ContentChild,
            args: [NzMonthCellDirective, { static: false, read: core.TemplateRef }]
        }], nzMonthFullCell: [{
            type: core.Input
        }], nzMonthFullCellChild: [{
            type: core.ContentChild,
            args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef }]
        }] }); })();
        return NzCalendarComponent;
    }());
    NzCalendarComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: core.Input }],
        nzValue: [{ type: core.Input }],
        nzDisabledDate: [{ type: core.Input }],
        nzModeChange: [{ type: core.Output }],
        nzPanelChange: [{ type: core.Output }],
        nzSelectChange: [{ type: core.Output }],
        nzValueChange: [{ type: core.Output }],
        nzDateCell: [{ type: core.Input }],
        nzDateCellChild: [{ type: core.ContentChild, args: [NzDateCellDirective, { static: false, read: core.TemplateRef },] }],
        nzDateFullCell: [{ type: core.Input }],
        nzDateFullCellChild: [{ type: core.ContentChild, args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef },] }],
        nzMonthCell: [{ type: core.Input }],
        nzMonthCellChild: [{ type: core.ContentChild, args: [NzMonthCellDirective, { static: false, read: core.TemplateRef },] }],
        nzMonthFullCell: [{ type: core.Input }],
        nzMonthFullCellChild: [{ type: core.ContentChild, args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef },] }],
        nzFullscreen: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCalendarComponent.prototype, "nzFullscreen", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCalendarModule = /** @class */ (function () {
        function NzCalendarModule() {
        }
NzCalendarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCalendarModule });
NzCalendarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule, datePicker.LibPackerModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: [NzCalendarHeaderComponent, NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective], imports: [ɵngcc6.BidiModule, ɵngcc4.CommonModule, ɵngcc3.FormsModule, ɵngcc1.NzI18nModule, ɵngcc5.NzRadioModule, ɵngcc2.NzSelectModule, ɵngcc7.LibPackerModule], exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCalendarModule, [{
        type: core.NgModule,
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
                imports: [bidi.BidiModule, common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule, datePicker.LibPackerModule]
            }]
    }], function () { return []; }, null); })();
        return NzCalendarModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzCalendarComponent = NzCalendarComponent;
    exports.NzCalendarHeaderComponent = NzCalendarHeaderComponent;
    exports.NzCalendarModule = NzCalendarModule;
    exports.NzDateCellDirective = NzDateCellDirective;
    exports.NzDateFullCellDirective = NzDateFullCellDirective;
    exports.NzMonthCellDirective = NzMonthCellDirective;
    exports.NzMonthFullCellDirective = NzMonthFullCellDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-calendar.umd.js.map