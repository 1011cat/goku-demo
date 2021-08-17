/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, InputBoolean, InputNumber, isNil, silentEvent } from 'ng-zorro-antd/core/util';
import { fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { NzSliderHandleComponent } from './handle.component';
import { NzSliderService } from './slider.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './slider.service';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from './track.component';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from './step.component';
import * as ɵngcc7 from './handle.component';
import * as ɵngcc8 from './marks.component';

const _c0 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-slider-step", 6);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("vertical", ctx_r1.nzVertical)("min", ctx_r1.nzMin)("max", ctx_r1.nzMax)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.nzIncluded)("reverse", ctx_r1.nzReverse);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-slider-handle", 7);
    ɵngcc0.ɵɵlistener("focusin", function NzSliderComponent_nz_slider_handle_5_Template_nz_slider_handle_focusin_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const handleIndex_r5 = ctx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onHandleFocusIn(handleIndex_r5); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("vertical", ctx_r2.nzVertical)("reverse", ctx_r2.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.nzTipFormatter)("tooltipVisible", ctx_r2.nzTooltipVisible)("tooltipPlacement", ctx_r2.nzTooltipPlacement)("dir", ctx_r2.dir);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-slider-marks", 6);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("vertical", ctx_r3.nzVertical)("min", ctx_r3.nzMin)("max", ctx_r3.nzMax)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.nzIncluded)("reverse", ctx_r3.nzReverse);
} }
export class NzSliderComponent {
    constructor(sliderService, cdr, platform, directionality) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.directionality = directionality;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzReverse = false;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.handles = []; // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        });
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
            this.setValue(this.formatValue(null));
        }
    }
    ngOnDestroy() {
        this.unsubscribeDrag();
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e) {
        if (this.nzDisabled) {
            return;
        }
        const code = e.keyCode;
        const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
        const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        let step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
        step = this.dir === 'rtl' ? step * -1 : step;
        const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
        this.setActiveValue(ensureNumberInRange(newVal, this.nzMin, this.nzMax));
    }
    onHandleFocusIn(index) {
        this.activeValueIndex = index;
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueRange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    setActiveValue(pointerValue) {
        if (isValueRange(this.value)) {
            const newValue = [...this.value];
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    getLogicalValue(value) {
        if (this.nzReverse) {
            if (!this.nzVertical && this.dir === 'rtl') {
                return value;
            }
            return this.nzMax - value + this.nzMin;
        }
        if (!this.nzVertical && this.dir === 'rtl') {
            return this.nzMax - value + this.nzMin;
        }
        return value;
    }
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        const sliderDOM = this.slider.nativeElement;
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
        });
        this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = merge(mouse.end$, touch.end$);
    }
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    toggleDragMoving(movable) {
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        const points = this.nzMarks === null
            ? []
            : Object.keys(this.nzMarks)
                .map(parseFloat)
                .sort((a, b) => a - b);
        if (this.nzStep !== 0 && !this.nzDots) {
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
        return this.nzStep === 0 ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    }
    valueToOffset(value) {
        return getPercent(this.nzMin, this.nzMax, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = getElementOffset(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        if (isNil(value)) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map(val => ensureNumberInRange(val, this.nzMin, this.nzMax))
                : ensureNumberInRange(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            if (marks.hasOwnProperty(key)) {
                const mark = marks[key];
                const val = typeof key === 'number' ? key : parseFloat(key);
                if (val >= this.nzMin && val <= this.nzMax) {
                    marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                }
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzSliderService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzSliderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzSliderHandleComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.slider = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function NzSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzReverse: "nzReverse", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzDefaultValue: "nzDefaultValue", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzSliderComponent),
                multi: true
            },
            NzSliderService
        ]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 17, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", "focusin", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", "focusin"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "nz-slider-track", 3);
        ɵngcc0.ɵɵtemplate(4, NzSliderComponent_nz_slider_step_4_Template, 1, 8, "nz-slider-step", 4);
        ɵngcc0.ɵɵtemplate(5, NzSliderComponent_nz_slider_handle_5_Template, 1, 9, "nz-slider-handle", 5);
        ɵngcc0.ɵɵtemplate(6, NzSliderComponent_nz_slider_marks_6_Template, 1, 8, "nz-slider-marks", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse)("dir", ctx.dir);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marksArray);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.handles);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.marksArray);
    } }, directives: [ɵngcc4.NzSliderTrackComponent, ɵngcc3.Dir, ɵngcc5.NgIf, ɵngcc5.NgForOf, ɵngcc6.NzSliderStepComponent, ɵngcc7.NzSliderHandleComponent, ɵngcc8.NzSliderMarksComponent], encapsulation: 2, changeDetection: 0 });
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: ChangeDetectorRef },
    { type: Platform },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: ViewChild, args: ['slider', { static: true },] }],
    handlerComponents: [{ type: ViewChildren, args: [NzSliderHandleComponent,] }],
    nzDisabled: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzIncluded: [{ type: Input }],
    nzRange: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzReverse: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzMarks: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTooltipPlacement: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzOnAfterChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzReverse", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzMax", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzMin", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSliderComponent.prototype, "nzStep", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSliderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSliderComponent),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                template: `
    <div
      #slider
      class="ant-slider"
      [class.ant-slider-rtl]="dir === 'rtl'"
      [class.ant-slider-disabled]="nzDisabled"
      [class.ant-slider-vertical]="nzVertical"
      [class.ant-slider-with-marks]="marksArray"
    >
      <div class="ant-slider-rail"></div>
      <nz-slider-track
        [vertical]="nzVertical"
        [included]="nzIncluded"
        [offset]="track.offset!"
        [length]="track.length!"
        [reverse]="nzReverse"
        [dir]="dir"
      ></nz-slider-track>
      <nz-slider-step
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-step>
      <nz-slider-handle
        *ngFor="let handle of handles; index as handleIndex"
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
        [dir]="dir"
        (focusin)="onHandleFocusIn(handleIndex)"
      ></nz-slider-handle>
      <nz-slider-marks
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-marks>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc1.NzSliderService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzDisabled: [{
            type: Input
        }], nzDots: [{
            type: Input
        }], nzIncluded: [{
            type: Input
        }], nzRange: [{
            type: Input
        }], nzVertical: [{
            type: Input
        }], nzReverse: [{
            type: Input
        }], nzMarks: [{
            type: Input
        }], nzMax: [{
            type: Input
        }], nzMin: [{
            type: Input
        }], nzStep: [{
            type: Input
        }], nzTooltipVisible: [{
            type: Input
        }], nzTooltipPlacement: [{
            type: Input
        }], nzOnAfterChange: [{
            type: Output
        }], slider: [{
            type: ViewChild,
            args: ['slider', { static: true }]
        }], handlerComponents: [{
            type: ViewChildren,
            args: [NzSliderHandleComponent]
        }], nzDefaultValue: [{
            type: Input
        }], nzTipFormatter: [{
            type: Input
        }] }); })();
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map(() => ({ offset: null, value: null, active: false }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(v => isNaN(v)))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxXQUFXLEVBQ1osTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVuRCxNQUFNLE9BQU8saUJBQWlCO0FBQUcsSUFpRC9CLFlBQ1UsYUFBOEIsRUFDOUIsR0FBc0IsRUFDdEIsUUFBa0IsRUFDTixjQUE4QjtBQUNuRCxRQUpTLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtBQUFDLFFBQy9CLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtBQUFDLFFBQ1AsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQ3RELFFBeEMyQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQTJCLFdBQU0sR0FBWSxLQUFLLENBQUM7QUFDbkQsUUFBMkIsZUFBVSxHQUFZLElBQUksQ0FBQztBQUN0RCxRQUEyQixZQUFPLEdBQVksS0FBSyxDQUFDO0FBQ3BELFFBQTJCLGVBQVUsR0FBWSxLQUFLLENBQUM7QUFDdkQsUUFBMkIsY0FBUyxHQUFZLEtBQUssQ0FBQztBQUN0RCxRQUNXLFlBQU8sR0FBbUIsSUFBSSxDQUFDO0FBQzFDLFFBQTBCLFVBQUssR0FBRyxHQUFHLENBQUM7QUFDdEMsUUFBMEIsVUFBSyxHQUFHLENBQUMsQ0FBQztBQUNwQyxRQUEwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLFFBQVcscUJBQWdCLEdBQXdCLFNBQVMsQ0FBQztBQUM3RCxRQUFXLHVCQUFrQixHQUFXLEtBQUssQ0FBQztBQUM5QyxRQUVxQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0FBQ3pFLFFBQ0UsVUFBSyxHQUF5QixJQUFJLENBQUM7QUFDckMsUUFBRSxxQkFBZ0IsR0FBa0IsSUFBSSxDQUFDO0FBQ3pDLFFBQUUsc0JBQWlCLEdBQWtCLElBQUksQ0FBQztBQUMxQyxRQUFFLHFCQUFnQixHQUF1QixTQUFTLENBQUMsQ0FBQyx1REFBdUQ7QUFDM0csUUFBRSxVQUFLLEdBQXFELEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7QUFDeEgsUUFBRSxZQUFPLEdBQXNCLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtBQUNyRCxRQUFFLGVBQVUsR0FBNEIsSUFBSSxDQUFDLENBQUMscUVBQXFFO0FBQ25ILFFBQUUsV0FBTSxHQUFpRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMseUJBQXlCO0FBQ2hJLFFBQUUsUUFBRyxHQUFjLEtBQUssQ0FBQztBQUN6QixRQU9VLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ25DLElBTUssQ0FBQztBQUNOLElBQ0UsUUFBUTtBQUFLO0FBQ0wsUUFBTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ3pDLFFBQUksTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO0FBQ2xHLFlBQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQy9CLFlBQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDbkMsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5QyxRQUFJLENBQUMsRUFBRTtBQUNQLFFBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDakYsUUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNoQyxRQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsUUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDckQsUUFDSSxJQUFJLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELFNBQUs7QUFBQyxhQUFLLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtBQUNoRCxZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ25GLFNBQUs7QUFBQyxhQUFLLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtBQUNoRCxZQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVSxDQUFDLEdBQXlCO0FBQUksUUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhLENBQUMsTUFBcUIsSUFBUyxDQUFDO0FBQy9DLElBQ0UsU0FBUyxLQUFVLENBQUM7QUFDdEIsSUFDRSxnQkFBZ0IsQ0FBQyxFQUFrQztBQUFJLFFBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsRUFBYztBQUFJLFFBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsVUFBbUI7QUFBSSxRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QyxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxTQUFTLENBQUMsQ0FBZ0I7QUFBSSxRQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDekIsWUFBTSxPQUFPO0FBQ2IsU0FBSztBQUNMLFFBQ0ksTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMzQixRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNqRSxRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNsRSxRQUNJLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRTtBQUNyQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckYsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2pELFFBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsS0FBZ0IsR0FBRyxJQUFJLENBQUM7QUFDMUgsUUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzdFLElBQUUsQ0FBQztBQUNILElBQ0UsZUFBZSxDQUFDLEtBQWE7QUFBSSxRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNILElBQ1UsUUFBUSxDQUFDLEtBQTJCLEVBQUUsZUFBd0IsS0FBSztBQUFJLFFBQzdFLElBQUksWUFBWSxFQUFFO0FBQ3RCLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNDLFlBQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDbkMsU0FBSztBQUFDLGFBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBTSxFQUFFLEtBQU0sQ0FBQyxFQUFFO0FBQ2xELFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsWUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNuQyxZQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNVLFFBQVEsQ0FBQyxlQUF3QixLQUFLO0FBQUksUUFDaEQsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2hFLFlBQU0sT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxTQUFLO0FBQ0wsUUFBSSxPQUFPLElBQUksQ0FBQyxLQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVUsZ0JBQWdCLENBQUMsS0FBcUI7QUFBSSxRQUNoRCxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFDSSxJQUFJLE9BQU8sZUFBZSxLQUFLLFdBQVcsRUFBRTtBQUNoRCxZQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLFNBQUs7QUFDTCxRQUNJLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JJLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG1CQUFtQixDQUFDLFlBQW9CO0FBQUksUUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2xDLFFBQUksSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDN0IsWUFBTSxJQUFJLE9BQU8sR0FBa0IsSUFBSSxDQUFDO0FBQ3hDLFlBQU0sSUFBSSxHQUFXLENBQUM7QUFDdEIsWUFBTSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQixZQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDbkMsZ0JBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLGdCQUFRLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxHQUFHLEdBQUcsT0FBUSxFQUFFO0FBQ2hELG9CQUFVLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDeEIsb0JBQVUsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUM5QixpQkFBUztBQUNULFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxZQUFNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7QUFDMUMsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDNUQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDVSxjQUFjLENBQUMsWUFBb0I7QUFBSSxRQUM3QyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBTSxDQUFDLEVBQUU7QUFDbkMsWUFBTSxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLEtBQWtCLENBQUMsQ0FBQztBQUNyRCxZQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWlCLENBQUMsR0FBRyxZQUFZLENBQUM7QUFDdEQsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBVSxxQkFBcUI7QUFBSyxRQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEMsUUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEQsUUFBSSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLFFBQUksTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELFFBQUksTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2xGLFFBQUksTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzdILFFBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDM0MsWUFBTSxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEUsWUFBTSxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3JFLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDeEQsUUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3hELFFBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNVLFdBQVcsQ0FBQyxLQUFhO0FBQUksUUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLFFBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDL0IsUUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFELFFBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDckQsUUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRSxJQUFFLENBQUM7QUFDSCxJQUNVLFVBQVUsQ0FBQyxLQUFhO0FBQUksUUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDckQsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ1UsZUFBZSxDQUFDLEtBQWE7QUFBSSxRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtBQUNsRCxnQkFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixhQUFPO0FBQ1AsWUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDN0MsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7QUFDaEQsWUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDN0MsU0FBSztBQUNMLFFBQ0ksT0FBTyxLQUFLLENBQUM7QUFDakIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxTQUFTO0FBQUssUUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLFFBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDaEMsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG9CQUFvQjtBQUFLLFFBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtBQUNsQyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUNoRCxRQUFJLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzVELFFBQUksTUFBTSxLQUFLLEdBQTZCO0FBQzVDLFlBQU0sS0FBSyxFQUFFLFdBQVc7QUFDeEIsWUFBTSxJQUFJLEVBQUUsV0FBVztBQUN2QixZQUFNLEdBQUcsRUFBRSxTQUFTO0FBQ3BCLFlBQU0sUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDO0FBQzdCLFNBQUssQ0FBQztBQUNOLFFBQUksTUFBTSxLQUFLLEdBQTZCO0FBQzVDLFlBQU0sS0FBSyxFQUFFLFlBQVk7QUFDekIsWUFBTSxJQUFJLEVBQUUsV0FBVztBQUN2QixZQUFNLEdBQUcsRUFBRSxVQUFVO0FBQ3JCLFlBQU0sUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUM7QUFDN0MsWUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksVUFBVTtBQUNyRSxTQUFLLENBQUM7QUFDTixRQUNJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNwQyxZQUFNLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDckYsWUFDTSxNQUFNLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNyRCxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQ2xCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFDaEIsS0FBSyxDQUFnQixHQUFHLFFBQVEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDM0QsQ0FBQztBQUNSLFlBQU0sTUFBTSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLFlBQU0sTUFBTSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUNsQixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQ2hCLEtBQUssQ0FBZ0IsR0FBRyxRQUFRLENBQUMsRUFDakMsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQzFELG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQ3ZCLENBQUM7QUFDUixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYyxFQUFFLEtBQUssQ0FBQyxhQUFjLENBQUMsQ0FBQztBQUN4RSxRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFjLEVBQUUsS0FBSyxDQUFDLGFBQWMsQ0FBQyxDQUFDO0FBQ3ZFLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUssRUFBRSxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUM7QUFDcEQsSUFBRSxDQUFDO0FBQ0gsSUFDVSxhQUFhLENBQUMsVUFBb0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUFJLFFBQ3BFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNoRixZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvRSxTQUFLO0FBQ0wsUUFDSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDN0UsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUUsU0FBSztBQUNMLFFBQ0ksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzFFLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNVLGVBQWUsQ0FBQyxVQUFvQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO0FBQUksUUFDdEUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDNUQsWUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDN0IsU0FBSztBQUNMLFFBQ0ksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDMUQsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25DLFlBQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQ0ksSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDeEQsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xDLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDM0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ1UsZ0JBQWdCLENBQUMsT0FBZ0I7QUFBSSxRQUMzQyxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxRQUFJLElBQUksT0FBTyxFQUFFO0FBQ2pCLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFlBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDVSxrQkFBa0IsQ0FBQyxRQUFpQjtBQUFJLFFBQzlDLElBQUksUUFBUSxFQUFFO0FBQ2xCLFlBQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzdCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDVSxnQkFBZ0IsQ0FBQyxRQUFnQjtBQUFJLFFBQzNDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3RELFFBQUksTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ2hELFFBQUksTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyRixRQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQy9GLFFBQUksTUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO0FBQzNCLFlBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDWixZQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDbkMsaUJBQWEsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUM1QixpQkFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkMsUUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUMzQyxZQUFNLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JFLFlBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixTQUFLO0FBQ0wsUUFDSSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RCxRQUFJLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsUUFDSSxpRUFBaUU7QUFDckUsUUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hHLElBQUUsQ0FBQztBQUNILElBQ1UsYUFBYSxDQUFDLEtBQWE7QUFBSSxRQUNyQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDVSxzQkFBc0I7QUFBSyxRQUNqQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7QUFDeEMsWUFBTSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNuQyxTQUFLO0FBQ0wsUUFBSSxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9ELFFBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3RELElBQUUsQ0FBQztBQUNILElBQ1UsZUFBZTtBQUFLLFFBQzFCLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtBQUN6QyxZQUFNLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFNBQUs7QUFDTCxRQUFJLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQ2hELFFBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0FBQzVFLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG1CQUFtQixDQUFDLFNBQWtCLEtBQUs7QUFBSSxRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQzFFLFFBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEUsSUFBRSxDQUFDO0FBQ0gsSUFDVSxXQUFXLENBQUMsS0FBMkI7QUFBSSxRQUNqRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN0QixZQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNsRSxTQUFLO0FBQUMsYUFBSyxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDdEQsWUFBTSxPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDaEMsZ0JBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUUsZ0JBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQzlHLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBVSxpQkFBaUIsQ0FBQyxjQUFzQixDQUFDO0FBQUksUUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDM0MsWUFBTSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxXQUFXLENBQUM7QUFDNUMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ1Usb0JBQW9CO0FBQUssUUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFDSCxJQUNVLGlCQUFpQixDQUFDLEtBQWM7QUFBSSxRQUMxQyxNQUFNLFVBQVUsR0FBcUIsRUFBRSxDQUFDO0FBQzVDLFFBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDN0IsWUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckMsZ0JBQVEsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLGdCQUFRLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEUsZ0JBQVEsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwRCxvQkFBVSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN6RixpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNIOzZDQS9nQkMsU0FBUyxTQUFDLGtCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLFdBQVcsa0JBQ3JCLFFBQVEsRUFBRSxVQUFVLGtCQUNwQixtQkFBbUIsRUFBRTtFQUFLLGtCQUMxQixTQUFTLEVBQUUsc0JBQ1QsMEJBQ0UsT0FBTyxFQUFFLGlCQUFpQiwwQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUFpQixDQUFDLDBCQUNoRCxLQUFLLEVBQUUsSUFBSTttQkFDWixzQkFDRCxlQUFlO2VBQ2hCO2FBQ0Q7Q0FBSSxFQUFFLHNCQUNKLFdBQVcsRUFBRSxtQkFBbUIsa0JBQ2pDO1FBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7O2dyQkFzRFQsY0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29PQUNJO0FBQUM7QUFBMkMsWUE3RXhDLGVBQWU7QUFBSSxZQW5DMUIsaUJBQWlCO0FBQ2pCLFlBSk8sUUFBUTtBQUFJLFlBRkQsY0FBYyx1QkEwSzdCLFFBQVE7QUFBTTtBQUFHO0FBQ2xCLHFCQTNDRCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtBQUFPLGdDQUMzQyxZQUFZLFNBQUMsdUJBQXVCO0FBQU8seUJBRTNDLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyw2QkFDVixLQUFLO0FBQUssOEJBRVYsTUFBTTtBQUFJO0FBZmM7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNULHFEQUQyQjtBQUNuQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ2IsaURBRG9DO0FBQ3hCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDaEIscURBRDBDO0FBQzNCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZCxrREFEc0M7QUFDekI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNqQixxREFENEM7QUFDNUI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNoQixvREFEMEM7QUFHNUI7QUFDMUIsSUFEWSxXQUFXLEVBQUU7QUFBRTtBQUNELGdEQURZO0FBQ1o7QUFDeEIsSUFEVSxXQUFXLEVBQUU7QUFBRTtBQUNDLGdEQURRO0FBQ1Y7QUFDekIsSUFEVyxXQUFXLEVBQUU7QUFBRTtBQUNBLGlEQURVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ3JDO0FBK2FBLFNBQVMseUJBQXlCO0FBQUssSUFDckMsT0FBTyxJQUFJLEtBQUssQ0FDZCx3SEFBd0gsQ0FDekgsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxLQUFvQjtBQUFJLElBQzVDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtBQUM5QixRQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDOUIsS0FBRztBQUFDLFNBQUs7QUFDVCxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEtBQUc7QUFDSCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFjO0FBQUksSUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3RCLFNBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNaLFNBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBRUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLGdCQUFnQixDQUFDLEtBQW9CLEVBQUUsT0FBaUI7QUFBSSxJQUNuRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDcEcsUUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixLQUFHO0FBQ0gsSUFBRSxPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLEtBQW9CLEVBQUUsVUFBbUIsS0FBSztBQUFJLElBQzlFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sRUFBRTtBQUN2QyxRQUFJLE1BQU0seUJBQXlCLEVBQUUsQ0FBQztBQUN0QyxLQUFHO0FBQ0gsSUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFtQixFQUFFLElBQW1CO0FBQUksSUFDL0QsSUFBSSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksRUFBRTtBQUNuQyxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEtBQUc7QUFDSCxJQUFFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFTLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNwRyxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHtcbiAgYXJyYXlzRXF1YWwsXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXG4gIGdldEVsZW1lbnRPZmZzZXQsXG4gIGdldFBlcmNlbnQsXG4gIGdldFByZWNpc2lvbixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgaXNOaWwsXG4gIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyxcbiAgc2lsZW50RXZlbnRcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBsdWNrLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL2hhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zbGlkZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IE56RXh0ZW5kZWRNYXJrLCBOek1hcmtzLCBOelNsaWRlckhhbmRsZXIsIE56U2xpZGVyU2hvd1Rvb2x0aXAsIE56U2xpZGVyVmFsdWUgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyJyxcbiAgZXhwb3J0QXM6ICduelNsaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2xpZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBOelNsaWRlclNlcnZpY2VcbiAgXSxcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI3NsaWRlclxuICAgICAgY2xhc3M9XCJhbnQtc2xpZGVyXCJcbiAgICAgIFtjbGFzcy5hbnQtc2xpZGVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgIFtjbGFzcy5hbnQtc2xpZGVyLWRpc2FibGVkXT1cIm56RGlzYWJsZWRcIlxuICAgICAgW2NsYXNzLmFudC1zbGlkZXItdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICBbY2xhc3MuYW50LXNsaWRlci13aXRoLW1hcmtzXT1cIm1hcmtzQXJyYXlcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXJhaWxcIj48L2Rpdj5cbiAgICAgIDxuei1zbGlkZXItdHJhY2tcbiAgICAgICAgW3ZlcnRpY2FsXT1cIm56VmVydGljYWxcIlxuICAgICAgICBbaW5jbHVkZWRdPVwibnpJbmNsdWRlZFwiXG4gICAgICAgIFtvZmZzZXRdPVwidHJhY2sub2Zmc2V0IVwiXG4gICAgICAgIFtsZW5ndGhdPVwidHJhY2subGVuZ3RoIVwiXG4gICAgICAgIFtyZXZlcnNlXT1cIm56UmV2ZXJzZVwiXG4gICAgICAgIFtkaXJdPVwiZGlyXCJcbiAgICAgID48L256LXNsaWRlci10cmFjaz5cbiAgICAgIDxuei1zbGlkZXItc3RlcFxuICAgICAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFttaW5dPVwibnpNaW5cIlxuICAgICAgICBbbWF4XT1cIm56TWF4XCJcbiAgICAgICAgW2xvd2VyQm91bmRdPVwiJGFueShib3VuZHMubG93ZXIpXCJcbiAgICAgICAgW3VwcGVyQm91bmRdPVwiJGFueShib3VuZHMudXBwZXIpXCJcbiAgICAgICAgW21hcmtzQXJyYXldPVwibWFya3NBcnJheVwiXG4gICAgICAgIFtpbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcbiAgICAgICAgW3JldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICAgID48L256LXNsaWRlci1zdGVwPlxuICAgICAgPG56LXNsaWRlci1oYW5kbGVcbiAgICAgICAgKm5nRm9yPVwibGV0IGhhbmRsZSBvZiBoYW5kbGVzOyBpbmRleCBhcyBoYW5kbGVJbmRleFwiXG4gICAgICAgIFt2ZXJ0aWNhbF09XCJuelZlcnRpY2FsXCJcbiAgICAgICAgW3JldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICAgICAgW29mZnNldF09XCJoYW5kbGUub2Zmc2V0IVwiXG4gICAgICAgIFt2YWx1ZV09XCJoYW5kbGUudmFsdWUhXCJcbiAgICAgICAgW2FjdGl2ZV09XCJoYW5kbGUuYWN0aXZlXCJcbiAgICAgICAgW3Rvb2x0aXBGb3JtYXR0ZXJdPVwibnpUaXBGb3JtYXR0ZXJcIlxuICAgICAgICBbdG9vbHRpcFZpc2libGVdPVwibnpUb29sdGlwVmlzaWJsZVwiXG4gICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cIm56VG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgIFtkaXJdPVwiZGlyXCJcbiAgICAgICAgKGZvY3VzaW4pPVwib25IYW5kbGVGb2N1c0luKGhhbmRsZUluZGV4KVwiXG4gICAgICA+PC9uei1zbGlkZXItaGFuZGxlPlxuICAgICAgPG56LXNsaWRlci1tYXJrc1xuICAgICAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxuICAgICAgICBbdmVydGljYWxdPVwibnpWZXJ0aWNhbFwiXG4gICAgICAgIFttaW5dPVwibnpNaW5cIlxuICAgICAgICBbbWF4XT1cIm56TWF4XCJcbiAgICAgICAgW2xvd2VyQm91bmRdPVwiJGFueShib3VuZHMubG93ZXIpXCJcbiAgICAgICAgW3VwcGVyQm91bmRdPVwiJGFueShib3VuZHMudXBwZXIpXCJcbiAgICAgICAgW21hcmtzQXJyYXldPVwibWFya3NBcnJheVwiXG4gICAgICAgIFtpbmNsdWRlZF09XCJuekluY2x1ZGVkXCJcbiAgICAgICAgW3JldmVyc2VdPVwibnpSZXZlcnNlXCJcbiAgICAgID48L256LXNsaWRlci1tYXJrcz5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RG90czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpJbmNsdWRlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpSYW5nZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpWZXJ0aWNhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNYXg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpNaW46IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpTdGVwOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256UmV2ZXJzZTogQm9vbGVhbklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlciE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkcmVuKE56U2xpZGVySGFuZGxlQ29tcG9uZW50KSBoYW5kbGVyQ29tcG9uZW50cyE6IFF1ZXJ5TGlzdDxOelNsaWRlckhhbmRsZUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEZWZhdWx0VmFsdWU/OiBOelNsaWRlclZhbHVlO1xuICBASW5wdXQoKSBuek1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TWF4ID0gMTAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuek1pbiA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyPzogbnVsbCB8ICgodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNsaWRlclZhbHVlPigpO1xuXG4gIHZhbHVlOiBOelNsaWRlclZhbHVlIHwgbnVsbCA9IG51bGw7XG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGFjdGl2ZVZhbHVlSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDsgLy8gQ3VycmVudCBhY3RpdmF0ZWQgaGFuZGxlJ3MgaW5kZXggT05MWSBmb3IgcmFuZ2U9dHJ1ZVxuICB0cmFjazogeyBvZmZzZXQ6IG51bGwgfCBudW1iZXI7IGxlbmd0aDogbnVsbCB8IG51bWJlciB9ID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXG4gIGhhbmRsZXM6IE56U2xpZGVySGFuZGxlcltdID0gW107IC8vIEhhbmRsZXMnIG9mZnNldFxuICBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdIHwgbnVsbCA9IG51bGw7IC8vIFwic3RlcHNcIiBpbiBhcnJheSB0eXBlIHdpdGggbW9yZSBkYXRhICYgRklMVEVSIG91dCB0aGUgaW52YWxpZCBtYXJrXG4gIGJvdW5kczogeyBsb3dlcjogTnpTbGlkZXJWYWx1ZSB8IG51bGw7IHVwcGVyOiBOelNsaWRlclZhbHVlIHwgbnVsbCB9ID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZHJhZ1N0YXJ0JD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBkcmFnTW92ZSQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZHJhZ0VuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnTW92ZV8/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuICBwcml2YXRlIGRyYWdFbmRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzbGlkZXJTZXJ2aWNlOiBOelNsaWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhhbmRsZXMgPSBnZW5lcmF0ZUhhbmRsZXJzKHRoaXMubnpSYW5nZSA/IDIgOiAxKTtcbiAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubnpNYXJrcykgOiBudWxsO1xuICAgIHRoaXMuYmluZERyYWdnaW5nSGFuZGxlcnMoKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVkLCBuek1hcmtzLCBuelJhbmdlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG56TWFya3MgJiYgIW56TWFya3MuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XG4gICAgfSBlbHNlIGlmIChuelJhbmdlICYmICFuelJhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmhhbmRsZXMgPSBnZW5lcmF0ZUhhbmRsZXJzKG56UmFuZ2UuY3VycmVudFZhbHVlID8gMiA6IDEpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBOelNsaWRlclZhbHVlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UoX3ZhbHVlOiBOelNsaWRlclZhbHVlKTogdm9pZCB7fVxuXG4gIG9uVG91Y2hlZCgpOiB2b2lkIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBOelNsaWRlclZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZXIgaXMgb25seSB0cmlnZ2VyZWQgd2hlbiBhIHNsaWRlciBoYW5kbGVyIGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGlzSW5jcmVhc2UgPSBjb2RlID09PSBSSUdIVF9BUlJPVyB8fCBjb2RlID09PSBVUF9BUlJPVztcbiAgICBjb25zdCBpc0RlY3JlYXNlID0gY29kZSA9PT0gTEVGVF9BUlJPVyB8fCBjb2RlID09PSBET1dOX0FSUk9XO1xuXG4gICAgaWYgKCEoaXNJbmNyZWFzZSB8fCBpc0RlY3JlYXNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzdGVwID0gKGlzRGVjcmVhc2UgPyAtdGhpcy5uelN0ZXAgOiB0aGlzLm56U3RlcCkgKiAodGhpcy5uelJldmVyc2UgPyAtMSA6IDEpO1xuICAgIHN0ZXAgPSB0aGlzLmRpciA9PT0gJ3J0bCcgPyBzdGVwICogLTEgOiBzdGVwO1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMubnpSYW5nZSA/ICh0aGlzLnZhbHVlIGFzIG51bWJlcltdKVt0aGlzLmFjdGl2ZVZhbHVlSW5kZXghXSArIHN0ZXAgOiAodGhpcy52YWx1ZSBhcyBudW1iZXIpICsgc3RlcDtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKGVuc3VyZU51bWJlckluUmFuZ2UobmV3VmFsLCB0aGlzLm56TWluLCB0aGlzLm56TWF4KSk7XG4gIH1cblxuICBvbkhhbmRsZUZvY3VzSW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVmFsdWVJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwsIGlzV3JpdGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZXNFcXVhbCh0aGlzLnZhbHVlISwgdmFsdWUhKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFZhbHVlKGNsb25lQW5kU29ydDogYm9vbGVhbiA9IGZhbHNlKTogTnpTbGlkZXJWYWx1ZSB7XG4gICAgaWYgKGNsb25lQW5kU29ydCAmJiB0aGlzLnZhbHVlICYmIGlzVmFsdWVSYW5nZSh0aGlzLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIFsuLi50aGlzLnZhbHVlXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogTnpTbGlkZXJWYWx1ZSk6IE56U2xpZGVyVmFsdWUge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlb2Ygbm9ybWFsaXplZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbm9ybWFsaXplZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWx1ZVJhbmdlKG5vcm1hbGl6ZWRWYWx1ZSkgPyBub3JtYWxpemVkVmFsdWUubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOiB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBjbG9zZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWVJbmRleChwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGlmIChpc1ZhbHVlUmFuZ2UodmFsdWUpKSB7XG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgZ2FwOiBudW1iZXI7XG4gICAgICBsZXQgYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCEpIHtcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgICB0aGlzLmhhbmRsZXJDb21wb25lbnRzLnRvQXJyYXkoKVthY3RpdmVJbmRleF0uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVyQ29tcG9uZW50cy50b0FycmF5KClbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZVZhbHVlKHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsdWVSYW5nZSh0aGlzLnZhbHVlISkpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gWy4uLih0aGlzLnZhbHVlIGFzIG51bWJlcltdKV07XG4gICAgICBuZXdWYWx1ZVt0aGlzLmFjdGl2ZVZhbHVlSW5kZXghXSA9IHBvaW50ZXJWYWx1ZTtcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHBvaW50ZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0cmFjayBhbmQgaGFuZGxlcycgcG9zaXRpb24gYW5kIGxlbmd0aC5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZSk7XG4gICAgY29uc3QgdmFsdWVTb3J0ZWQgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XG4gICAgY29uc3QgYm91bmRQYXJ0cyA9IGlzVmFsdWVSYW5nZSh2YWx1ZVNvcnRlZCkgPyB2YWx1ZVNvcnRlZCA6IFswLCB2YWx1ZVNvcnRlZF07XG4gICAgY29uc3QgdHJhY2tQYXJ0cyA9IGlzVmFsdWVSYW5nZShvZmZzZXRTb3J0ZWQpID8gW29mZnNldFNvcnRlZFswXSwgb2Zmc2V0U29ydGVkWzFdIC0gb2Zmc2V0U29ydGVkWzBdXSA6IFswLCBvZmZzZXRTb3J0ZWRdO1xuXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSBpc1ZhbHVlUmFuZ2Uob2Zmc2V0KSA/IG9mZnNldFtpbmRleF0gOiBvZmZzZXQ7XG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlUmFuZ2UodmFsdWUpID8gdmFsdWVbaW5kZXhdIDogdmFsdWUgfHwgMDtcbiAgICB9KTtcblxuICAgIFt0aGlzLmJvdW5kcy5sb3dlciwgdGhpcy5ib3VuZHMudXBwZXJdID0gYm91bmRQYXJ0cztcbiAgICBbdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoXSA9IHRyYWNrUGFydHM7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnU3RhcnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkoKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlSW5kZXgodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHRoaXMuZ2V0TG9naWNhbFZhbHVlKHZhbHVlKSk7XG4gICAgdGhpcy5zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh0aGlzLmdldExvZ2ljYWxWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2dpY2FsVmFsdWUodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMubnpSZXZlcnNlKSB7XG4gICAgICBpZiAoIXRoaXMubnpWZXJ0aWNhbCAmJiB0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubnpNYXggLSB2YWx1ZSArIHRoaXMubnpNaW47XG4gICAgfVxuICAgIGlmICghdGhpcy5uelZlcnRpY2FsICYmIHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgcmV0dXJuIHRoaXMubnpNYXggLSB2YWx1ZSArIHRoaXMubnpNaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdFbmQoKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcoZmFsc2UpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcbiAgICB0aGlzLmhpZGVBbGxIYW5kbGVUb29sdGlwKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXG4gICAqL1xuICBwcml2YXRlIGJpbmREcmFnZ2luZ0hhbmRsZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy5uelZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogW29yaWVudEZpZWxkXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkXSxcbiAgICAgIGZpbHRlcjogKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudFxuICAgIH07XG5cbiAgICBbbW91c2UsIHRvdWNoXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XG5cbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXG4gICAgICApO1xuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkISwgdG91Y2guc3RhcnRQbHVja2VkJCEpO1xuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcbiAgICB0aGlzLmRyYWdFbmQkID0gbWVyZ2UobW91c2UuZW5kJCEsIHRvdWNoLmVuZCQhKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0JCAmJiAhdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gdGhpcy5kcmFnTW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kJCAmJiAhdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IHRoaXMuZHJhZ0VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xuICAgICAgdGhpcy5kcmFnTW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgICBjb25zdCByYXRpbyA9IGVuc3VyZU51bWJlckluUmFuZ2UoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5uek1heCAtIHRoaXMubnpNaW4pICogKHRoaXMubnpWZXJ0aWNhbCA/IDEgLSByYXRpbyA6IHJhdGlvKSArIHRoaXMubnpNaW47XG4gICAgY29uc3QgcG9pbnRzID1cbiAgICAgIHRoaXMubnpNYXJrcyA9PT0gbnVsbFxuICAgICAgICA/IFtdXG4gICAgICAgIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKVxuICAgICAgICAgICAgLm1hcChwYXJzZUZsb2F0KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gMCAmJiAhdGhpcy5uekRvdHMpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3RPbmUgPSBNYXRoLnJvdW5kKHZhbCAvIHRoaXMubnpTdGVwKSAqIHRoaXMubnpTdGVwO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdE9uZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzW2dhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSldO1xuXG4gICAgLy8gcmV0dXJuIHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKGdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IDAgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRQZXJjZW50KHRoaXMubnpNaW4sIHRoaXMubnpNYXgsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyU3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXG4gICAqL1xuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgdGhpcy5jYWNoZVNsaWRlckxlbmd0aCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRWYWx1ZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwpOiBOelNsaWRlclZhbHVlIHtcbiAgICBpZiAoaXNOaWwodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelJhbmdlID8gW3RoaXMubnpNaW4sIHRoaXMubnpNYXhdIDogdGhpcy5uek1pbjtcbiAgICB9IGVsc2UgaWYgKGFzc2VydFZhbHVlVmFsaWQodmFsdWUsIHRoaXMubnpSYW5nZSkpIHtcbiAgICAgIHJldHVybiBpc1ZhbHVlUmFuZ2UodmFsdWUpXG4gICAgICAgID8gdmFsdWUubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpXG4gICAgICAgIDogZW5zdXJlTnVtYmVySW5SYW5nZSh2YWx1ZSwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm56RGVmYXVsdFZhbHVlID8gdGhpcy5uekRlZmF1bHRWYWx1ZSA6IHRoaXMubnpSYW5nZSA/IFt0aGlzLm56TWluLCB0aGlzLm56TWF4XSA6IHRoaXMubnpNaW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJy5cbiAgICovXG4gIHByaXZhdGUgc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IChoYW5kbGUuYWN0aXZlID0gZmFsc2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVNYXJrSXRlbXMobWFya3M6IE56TWFya3MpOiBOekV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XG4gICAgY29uc3QgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XG4gICAgICBpZiAobWFya3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBtYXJrID0gbWFya3Nba2V5XTtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGtleSA9PT0gJ251bWJlcicgPyBrZXkgOiBwYXJzZUZsb2F0KGtleSk7XG4gICAgICAgIGlmICh2YWwgPj0gdGhpcy5uek1pbiAmJiB2YWwgPD0gdGhpcy5uek1heCkge1xuICAgICAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFya3NBcnJheS5sZW5ndGggPyBtYXJrc0FycmF5IDogbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZVR5cGVOb3RNYXRjaEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICBgVGhlIFwibnpSYW5nZVwiIGNhbid0IG1hdGNoIHRoZSBcIm5nTW9kZWxcIidzIHR5cGUsIHBsZWFzZSBjaGVjayB0aGVzZSBwcm9wZXJ0aWVzOiBcIm56UmFuZ2VcIiwgXCJuZ01vZGVsXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVSYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhhbmRsZXJzKGFtb3VudDogbnVtYmVyKTogTnpTbGlkZXJIYW5kbGVyW10ge1xuICByZXR1cm4gQXJyYXkoYW1vdW50KVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoKSA9PiAoeyBvZmZzZXQ6IG51bGwsIHZhbHVlOiBudWxsLCBhY3RpdmU6IGZhbHNlIH0pKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCBhbmQgdGhyb3cgZXJyb3IgaWYgdmFsdWUtdHlwZS9yYW5nZSBub3QgbWF0Y2guXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFZhbHVlVmFsaWQodmFsdWU6IE56U2xpZGVyVmFsdWUsIGlzUmFuZ2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGlmICgoIWlzVmFsdWVSYW5nZSh2YWx1ZSkgJiYgaXNOYU4odmFsdWUpKSB8fCAoaXNWYWx1ZVJhbmdlKHZhbHVlKSAmJiB2YWx1ZS5zb21lKHYgPT4gaXNOYU4odikpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VmFsdWVUeXBlTWF0Y2godmFsdWUsIGlzUmFuZ2UpO1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IGlmIGB0aGlzLm56UmFuZ2VgIGlzIGB0cnVlYCwgdmFsdWUgaXMgYWxzbyBhIHJhbmdlLCB2aWNlIHZlcnNhLlxuICovXG5mdW5jdGlvbiBhc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZTogTnpTbGlkZXJWYWx1ZSwgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gIGlmIChpc1ZhbHVlUmFuZ2UodmFsdWUpICE9PSBpc1JhbmdlKSB7XG4gICAgdGhyb3cgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNFcXVhbCh2YWxBOiBOelNsaWRlclZhbHVlLCB2YWxCOiBOelNsaWRlclZhbHVlKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsQSAhPT0gdHlwZW9mIHZhbEIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzVmFsdWVSYW5nZSh2YWxBKSAmJiBpc1ZhbHVlUmFuZ2UodmFsQikgPyBhcnJheXNFcXVhbDxudW1iZXI+KHZhbEEsIHZhbEIpIDogdmFsQSA9PT0gdmFsQjtcbn1cbiJdfQ==