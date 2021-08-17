import { __decorate, __metadata } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from 'ng-zorro-antd/icon';
import * as ɵngcc4 from '@angular/forms';

const _c0 = ["inputElement"];
export class NzInputNumberComponent {
    constructor(elementRef, cdr, focusMonitor, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.dir = 'ltr';
        this.onChange = () => { };
        this.onTouched = () => { };
        this.nzBlur = new EventEmitter();
        this.nzFocus = new EventEmitter();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (value) => value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, '');
        this.nzPrecisionMode = 'toFixed';
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzInputMode = 'decimal';
        this.nzId = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = value => value;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-input-number');
    }
    onModelChange(value) {
        this.parsedValue = this.nzParser(value);
        this.inputElement.nativeElement.value = `${this.parsedValue}`;
        const validValue = this.getCurrentValidValue(this.parsedValue);
        this.setValue(validValue);
    }
    getCurrentValidValue(value) {
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = `${this.getValidValue(val)}`;
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber(num) {
        return isNaN(num) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    }
    getValidValue(value) {
        let val = parseFloat(value);
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    }
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return num;
        }
        const numStr = String(num);
        if (numStr.indexOf('.') >= 0 && isNotNil(this.nzPrecision)) {
            if (typeof this.nzPrecisionMode === 'function') {
                return this.nzPrecisionMode(num, this.nzPrecision);
            }
            else if (this.nzPrecisionMode === 'cut') {
                const numSplit = numStr.split('.');
                numSplit[1] = numSplit[1].slice(0, this.nzPrecision);
                return Number(numSplit.join('.'));
            }
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    }
    getRatio(e) {
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    getPrecision(value) {
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision(currentValue, ratio) {
        if (isNotNil(this.nzPrecision)) {
            return this.nzPrecision;
        }
        const ratioPrecision = this.getPrecision(ratio);
        const stepPrecision = this.getPrecision(this.nzStep);
        const currentValuePrecision = this.getPrecision(currentValue);
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    getPrecisionFactor(currentValue, ratio) {
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    upStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    downStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        const value = this.getCurrentValidValue(this.parsedValue) || 0;
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        const outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val);
        this.updateDisplayValue(val);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout(() => {
            this[type](e, ratio);
        }, 300);
    }
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    setValue(value) {
        if (`${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.parsedValue = value;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            const val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    }
    updateDisplayValue(value) {
        const displayValue = isNotNil(this.nzFormatter(value)) ? this.nzFormatter(value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = `${displayValue}`;
    }
    onKeyDown(e) {
        if (e.keyCode === UP_ARROW) {
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.keyCode === DOWN_ARROW) {
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === ENTER) {
            this.updateDisplayValue(this.value);
        }
    }
    writeValue(value) {
        this.value = value;
        this.setValue(value);
        this.updateDisplayValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnInit() {
        var _a;
        this.focusMonitor.monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.isFocused = false;
                this.updateDisplayValue(this.value);
                this.nzBlur.emit();
                Promise.resolve().then(() => this.onTouched());
            }
            else {
                this.isFocused = true;
                this.nzFocus.emit();
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        if (changes.nzFormatter && !changes.nzFormatter.isFirstChange()) {
            const validValue = this.getCurrentValidValue(this.parsedValue);
            this.setValue(validValue);
            this.updateDisplayValue(validValue);
        }
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzInputNumberComponent.ɵfac = function NzInputNumberComponent_Factory(t) { return new (t || NzInputNumberComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzInputNumberComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzInputNumberComponent, selectors: [["nz-input-number"]], viewQuery: function NzInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 10, hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.nzSize === "large")("ant-input-number-sm", ctx.nzSize === "small")("ant-input-number-disabled", ctx.nzDisabled)("ant-input-number-rtl", ctx.dir === "rtl");
    } }, inputs: { nzSize: "nzSize", nzMin: "nzMin", nzMax: "nzMax", nzParser: "nzParser", nzPrecisionMode: "nzPrecisionMode", nzPlaceHolder: "nzPlaceHolder", nzStep: "nzStep", nzInputMode: "nzInputMode", nzId: "nzId", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzFormatter: "nzFormatter", nzPrecision: "nzPrecision" }, outputs: { nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzInputNumber"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzInputNumberComponent),
                multi: true
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 8, vars: 13, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function NzInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_1_listener() { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_1_listener() { return ctx.stop(); });
        ɵngcc0.ɵɵelement(2, "i", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵlistener("mousedown", function NzInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_3_listener() { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_3_listener() { return ctx.stop(); });
        ɵngcc0.ɵɵelement(4, "i", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵelementStart(6, "input", 6, 7);
        ɵngcc0.ɵɵlistener("keydown", function NzInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function NzInputNumberComponent_Template_input_keyup_6_listener() { return ctx.stop(); })("ngModelChange", function NzInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-input-number-handler-up-disabled", ctx.disabledUp);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ant-input-number-handler-down-disabled", ctx.disabledDown);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("placeholder", ctx.nzPlaceHolder)("ngModel", ctx.displayValue);
        ɵngcc0.ɵɵattribute("id", ctx.nzId)("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("min", ctx.nzMin)("max", ctx.nzMax)("step", ctx.nzStep)("inputmode", ctx.nzInputMode);
    } }, directives: [ɵngcc3.NzIconDirective, ɵngcc4.DefaultValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], encapsulation: 2, changeDetection: 0 });
NzInputNumberComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzInputNumberComponent.propDecorators = {
    nzBlur: [{ type: Output }],
    nzFocus: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    nzSize: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzParser: [{ type: Input }],
    nzPrecision: [{ type: Input }],
    nzPrecisionMode: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzInputMode: [{ type: Input }],
    nzId: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzFormatter: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputNumberComponent, [{
        type: Component,
        args: [{
                selector: 'nz-input-number',
                exportAs: 'nzInputNumber',
                template: `
    <div class="ant-input-number-handler-wrap">
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-up"
        (mousedown)="up($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-up-disabled]="disabledUp"
      >
        <i nz-icon nzType="up" class="ant-input-number-handler-up-inner"></i>
      </span>
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-down"
        (mousedown)="down($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-down-disabled]="disabledDown"
      >
        <i nz-icon nzType="down" class="ant-input-number-handler-down-inner"></i>
      </span>
    </div>
    <div class="ant-input-number-input-wrap">
      <input
        #inputElement
        autocomplete="off"
        class="ant-input-number-input"
        [attr.id]="nzId"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [disabled]="nzDisabled"
        [attr.min]="nzMin"
        [attr.max]="nzMax"
        [placeholder]="nzPlaceHolder"
        [attr.step]="nzStep"
        [attr.inputmode]="nzInputMode"
        (keydown)="onKeyDown($event)"
        (keyup)="stop()"
        [ngModel]="displayValue"
        (ngModelChange)="onModelChange($event)"
      />
    </div>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzInputNumberComponent),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `nzSize === 'large'`,
                    '[class.ant-input-number-sm]': `nzSize === 'small'`,
                    '[class.ant-input-number-disabled]': 'nzDisabled',
                    '[class.ant-input-number-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBlur: [{
            type: Output
        }], nzFocus: [{
            type: Output
        }], nzSize: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzParser: [{
            type: Input
        }], nzPrecisionMode: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], nzStep: [{
            type: Input
        }], nzInputMode: [{
            type: Input
        }], nzId: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzFormatter: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzPrecision: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBaUUzQyxNQUFNLE9BQU8sc0JBQXNCO0FBQUcsSUFzUnBDLFlBQ1UsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsWUFBMEIsRUFDZCxjQUE4QjtBQUNuRCxRQUpTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0FBQUMsUUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFwUlUsYUFBUSxHQUFHLElBQUksT0FBTyxF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LG9CQUFvQixzQkFDbkQsbUNBQW1DLEVBQUUsWUFBWSxzQkFDakQsOEJBQThCLEVBQUUsZUFBZSxrQkFDaEQsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRKQUNJO0FBQUM7QUFBZ0QsWUFuRnBELFVBQVU7QUFDVixZQUhBLGlCQUFpQjtBQUNqQixZQVBPLFlBQVk7QUFBSSxZQUNMLGNBQWMsdUJBb1g3QixRQUFRO0FBQU07QUFBRztBQUVuQixxQkE3UUEsTUFBTTtBQUFLLHNCQUNYLE1BQU07QUFBSywyQkFDWCxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUFPLHFCQUNqRCxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssMEJBS1YsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSyw0QkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUk7QUFGZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1QsMERBRDJCO0FBQ25CO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDViwyREFENkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUMvQztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTaXplTERTVHlwZSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWlucHV0LW51bWJlcicsXG4gIGV4cG9ydEFzOiAnbnpJbnB1dE51bWJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlci13cmFwXCI+XG4gICAgICA8c3BhblxuICAgICAgICB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlciBhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXBcIlxuICAgICAgICAobW91c2Vkb3duKT1cInVwKCRldmVudClcIlxuICAgICAgICAobW91c2V1cCk9XCJzdG9wKClcIlxuICAgICAgICAobW91c2VsZWF2ZSk9XCJzdG9wKClcIlxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LW51bWJlci1oYW5kbGVyLXVwLWRpc2FibGVkXT1cImRpc2FibGVkVXBcIlxuICAgICAgPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInVwXCIgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItdXAtaW5uZXJcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICB1bnNlbGVjdGFibGU9XCJ1bnNlbGVjdGFibGVcIlxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaGFuZGxlciBhbnQtaW5wdXQtbnVtYmVyLWhhbmRsZXItZG93blwiXG4gICAgICAgIChtb3VzZWRvd24pPVwiZG93bigkZXZlbnQpXCJcbiAgICAgICAgKG1vdXNldXApPVwic3RvcCgpXCJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic3RvcCgpXCJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1udW1iZXItaGFuZGxlci1kb3duLWRpc2FibGVkXT1cImRpc2FibGVkRG93blwiXG4gICAgICA+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiIGNsYXNzPVwiYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd24taW5uZXJcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC1pbnB1dC1udW1iZXItaW5wdXQtd3JhcFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgICNpbnB1dEVsZW1lbnRcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtbnVtYmVyLWlucHV0XCJcbiAgICAgICAgW2F0dHIuaWRdPVwibnpJZFwiXG4gICAgICAgIFthdHRyLmF1dG9mb2N1c109XCJuekF1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIubWluXT1cIm56TWluXCJcbiAgICAgICAgW2F0dHIubWF4XT1cIm56TWF4XCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIm56UGxhY2VIb2xkZXJcIlxuICAgICAgICBbYXR0ci5zdGVwXT1cIm56U3RlcFwiXG4gICAgICAgIFthdHRyLmlucHV0bW9kZV09XCJueklucHV0TW9kZVwiXG4gICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgKGtleXVwKT1cInN0b3AoKVwiXG4gICAgICAgIFtuZ01vZGVsXT1cImRpc3BsYXlWYWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTW9kZWxDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56SW5wdXROdW1iZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWZvY3VzZWRdJzogJ2lzRm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnXSc6IGBuelNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1zbV0nOiBgbnpTaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZGlzYWJsZWRdJzogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbnB1dE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256QXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBhdXRvU3RlcFRpbWVyPzogbnVtYmVyO1xuICBwcml2YXRlIHBhcnNlZFZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwcml2YXRlIHZhbHVlPzogbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZGlzcGxheVZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWRVcCA9IGZhbHNlO1xuICBkaXNhYmxlZERvd24gPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHt9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Rm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpNaW46IG51bWJlciA9IC1JbmZpbml0eTtcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlciA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuelBhcnNlciA9ICh2YWx1ZTogc3RyaW5nKSA9PlxuICAgIHZhbHVlXG4gICAgICAudHJpbSgpXG4gICAgICAucmVwbGFjZSgv44CCL2csICcuJylcbiAgICAgIC5yZXBsYWNlKC9bXlxcd1xcLi1dKy9nLCAnJyk7XG4gIEBJbnB1dCgpIG56UHJlY2lzaW9uPzogbnVtYmVyO1xuICBASW5wdXQoKSBuelByZWNpc2lvbk1vZGU6ICdjdXQnIHwgJ3RvRml4ZWQnIHwgKCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpID0+IG51bWJlcikgPSAndG9GaXhlZCc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcbiAgQElucHV0KCkgbnpJbnB1dE1vZGU6IHN0cmluZyA9ICdkZWNpbWFsJztcbiAgQElucHV0KCkgbnpJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG9uTW9kZWxDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFyc2VkVmFsdWUgPSB0aGlzLm56UGFyc2VyKHZhbHVlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gYCR7dGhpcy5wYXJzZWRWYWx1ZX1gO1xuICAgIGNvbnN0IHZhbGlkVmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMucGFyc2VkVmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsaWRWYWx1ZSk7XG4gIH1cblxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgIHZhbCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcih2YWwpKSB7XG4gICAgICB2YWwgPSBgJHt0aGlzLmdldFZhbGlkVmFsdWUodmFsKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSB0aGlzLnZhbHVlITtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodmFsKTtcbiAgfVxuXG4gIC8vICcxLicgJzF4JyAneHgnICcnID0+IGFyZSBub3QgY29tcGxldGUgbnVtYmVyc1xuICBpc05vdENvbXBsZXRlTnVtYmVyKG51bTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzTmFOKG51bSBhcyBudW1iZXIpIHx8IG51bSA9PT0gJycgfHwgbnVtID09PSBudWxsIHx8ICEhKG51bSAmJiBudW0udG9TdHJpbmcoKS5pbmRleE9mKCcuJykgPT09IG51bS50b1N0cmluZygpLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQodmFsdWUgYXMgc3RyaW5nKTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83MzU4XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA8IHRoaXMubnpNaW4pIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNaW47XG4gICAgfVxuICAgIGlmICh2YWwgPiB0aGlzLm56TWF4KSB7XG4gICAgICB2YWwgPSB0aGlzLm56TWF4O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgdG9OdW1iZXIobnVtOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzTm90Q29tcGxldGVOdW1iZXIobnVtKSkge1xuICAgICAgcmV0dXJuIG51bSBhcyBudW1iZXI7XG4gICAgfVxuICAgIGNvbnN0IG51bVN0ciA9IFN0cmluZyhudW0pO1xuICAgIGlmIChudW1TdHIuaW5kZXhPZignLicpID49IDAgJiYgaXNOb3ROaWwodGhpcy5uelByZWNpc2lvbikpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5uelByZWNpc2lvbk1vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb25Nb2RlKG51bSwgdGhpcy5uelByZWNpc2lvbik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpQcmVjaXNpb25Nb2RlID09PSAnY3V0Jykge1xuICAgICAgICBjb25zdCBudW1TcGxpdCA9IG51bVN0ci5zcGxpdCgnLicpO1xuICAgICAgICBudW1TcGxpdFsxXSA9IG51bVNwbGl0WzFdLnNsaWNlKDAsIHRoaXMubnpQcmVjaXNpb24pO1xuICAgICAgICByZXR1cm4gTnVtYmVyKG51bVNwbGl0LmpvaW4oJy4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5uelByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XG4gIH1cblxuICBnZXRSYXRpbyhlOiBLZXlib2FyZEV2ZW50KTogbnVtYmVyIHtcbiAgICBsZXQgcmF0aW8gPSAxO1xuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICByYXRpbyA9IDAuMTtcbiAgICB9IGVsc2UgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIHJhdGlvID0gMTA7XG4gICAgfVxuICAgIHJldHVybiByYXRpbztcbiAgfVxuXG4gIGRvd24oZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAoJ2Rvd24nLCBlLCByYXRpbyk7XG4gIH1cblxuICB1cChlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcCgndXAnLCBlLCByYXRpbyk7XG4gIH1cblxuICBnZXRQcmVjaXNpb24odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpID49IDApIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZVN0cmluZy5zbGljZSh2YWx1ZVN0cmluZy5pbmRleE9mKCdlLScpICsgMiksIDEwKTtcbiAgICB9XG4gICAgbGV0IHByZWNpc2lvbiA9IDA7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSA+PSAwKSB7XG4gICAgICBwcmVjaXNpb24gPSB2YWx1ZVN0cmluZy5sZW5ndGggLSB2YWx1ZVN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xuICAgIH1cbiAgICByZXR1cm4gcHJlY2lzaW9uO1xuICB9XG5cbiAgLy8gc3RlcD17MS4wfSB2YWx1ZT17MS41MX1cbiAgLy8gcHJlc3MgK1xuICAvLyB0aGVuIHZhbHVlIHNob3VsZCBiZSAyLjUxLCByYXRoZXIgdGhhbiAyLjVcbiAgLy8gaWYgdGhpcy5wcm9wcy5wcmVjaXNpb24gaXMgdW5kZWZpbmVkXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvaW5wdXQtbnVtYmVyL2lzc3Vlcy8zOVxuICBnZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChpc05vdE5pbCh0aGlzLm56UHJlY2lzaW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpQcmVjaXNpb247XG4gICAgfVxuICAgIGNvbnN0IHJhdGlvUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24ocmF0aW8pO1xuICAgIGNvbnN0IHN0ZXBQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlUHJlY2lzaW9uID0gdGhpcy5nZXRQcmVjaXNpb24oY3VycmVudFZhbHVlIGFzIG51bWJlcik7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiByYXRpb1ByZWNpc2lvbiArIHN0ZXBQcmVjaXNpb247XG4gICAgfVxuICAgIHJldHVybiBNYXRoLm1heChjdXJyZW50VmFsdWVQcmVjaXNpb24sIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbik7XG4gIH1cblxuICBnZXRQcmVjaXNpb25GYWN0b3IoY3VycmVudFZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIHJhdGlvOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0TWF4UHJlY2lzaW9uKGN1cnJlbnRWYWx1ZSwgcmF0aW8pO1xuICAgIHJldHVybiBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIHVwU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCArIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyB0aGlzLm56U3RlcCA6IHRoaXMubnpNaW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHJlc3VsdCk7XG4gIH1cblxuICBkb3duU3RlcCh2YWw6IHN0cmluZyB8IG51bWJlciwgcmF0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHByZWNpc2lvbkZhY3RvciA9IHRoaXMuZ2V0UHJlY2lzaW9uRmFjdG9yKHZhbCwgcmF0KTtcbiAgICBjb25zdCBwcmVjaXNpb24gPSBNYXRoLmFicyh0aGlzLmdldE1heFByZWNpc2lvbih2YWwsIHJhdCkpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXN1bHQgPSAoKHByZWNpc2lvbkZhY3RvciAqIHZhbCAtIHByZWNpc2lvbkZhY3RvciAqIHRoaXMubnpTdGVwICogcmF0KSAvIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLm56TWluID09PSAtSW5maW5pdHkgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56TWluO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xuICB9XG5cbiAgc3RlcDxUIGV4dGVuZHMga2V5b2YgTnpJbnB1dE51bWJlckNvbXBvbmVudD4odHlwZTogVCwgZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEN1cnJlbnRWYWxpZFZhbHVlKHRoaXMucGFyc2VkVmFsdWUhKSB8fCAwO1xuICAgIGxldCB2YWwgPSAwO1xuICAgIGlmICh0eXBlID09PSAndXAnKSB7XG4gICAgICB2YWwgPSB0aGlzLnVwU3RlcCh2YWx1ZSwgcmF0aW8pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Rvd24nKSB7XG4gICAgICB2YWwgPSB0aGlzLmRvd25TdGVwKHZhbHVlLCByYXRpbyk7XG4gICAgfVxuICAgIGNvbnN0IG91dE9mUmFuZ2UgPSB2YWwgPiB0aGlzLm56TWF4IHx8IHZhbCA8IHRoaXMubnpNaW47XG4gICAgaWYgKHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgIHZhbCA9IHRoaXMubnpNYXg7XG4gICAgfSBlbHNlIGlmICh2YWwgPCB0aGlzLm56TWluKSB7XG4gICAgICB2YWwgPSB0aGlzLm56TWluO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodmFsKTtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAodGhpc1t0eXBlXSBhcyAoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIHJhdGlvOiBudW1iZXIpID0+IHZvaWQpKGUsIHJhdGlvKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU3RlcFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvU3RlcFRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGAke3RoaXMudmFsdWV9YCAhPT0gYCR7dmFsdWV9YCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnBhcnNlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5kaXNhYmxlZFVwID0gdGhpcy5kaXNhYmxlZERvd24gPSBmYWxzZTtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIGNvbnN0IHZhbCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAodmFsID49IHRoaXMubnpNYXgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFVwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwgPD0gdGhpcy5uek1pbikge1xuICAgICAgICB0aGlzLmRpc2FibGVkRG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGlzcGxheVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpc05vdE5pbCh0aGlzLm56Rm9ybWF0dGVyKHZhbHVlKSkgPyB0aGlzLm56Rm9ybWF0dGVyKHZhbHVlKSA6ICcnO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gZGlzcGxheVZhbHVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHtkaXNwbGF5VmFsdWV9YDtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMuZG93bihlLCByYXRpbyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheVZhbHVlKHRoaXMudmFsdWUhKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtaW5wdXQtbnVtYmVyJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlWYWx1ZSh0aGlzLnZhbHVlISk7XG4gICAgICAgICAgdGhpcy5uekJsdXIuZW1pdCgpO1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubnpGb2N1cy5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpGb3JtYXR0ZXIgJiYgIWNoYW5nZXMubnpGb3JtYXR0ZXIuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICBjb25zdCB2YWxpZFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLnBhcnNlZFZhbHVlISk7XG4gICAgICB0aGlzLnNldFZhbHVlKHZhbGlkVmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5VmFsdWUodmFsaWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==