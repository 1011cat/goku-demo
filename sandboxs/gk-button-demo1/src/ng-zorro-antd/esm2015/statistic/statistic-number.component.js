/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { $implicit: a0 }; };
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r0.nzValue));
} }
function NzStatisticNumberComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.displayInt);
} }
function NzStatisticNumberComponent_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.displayDecimal);
} }
function NzStatisticNumberComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_2_span_1_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵtemplate(2, NzStatisticNumberComponent_ng_container_2_span_2_Template, 2, 1, "span", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.displayInt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.displayDecimal);
} }
export class NzStatisticNumberComponent {
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    ngOnChanges() {
        this.formatNumber();
    }
    formatNumber() {
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
NzStatisticNumberComponent.ɵfac = function NzStatisticNumberComponent_Factory(t) { return new (t || NzStatisticNumberComponent)(ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
NzStatisticNumberComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStatisticNumberComponent, selectors: [["nz-statistic-number"]], inputs: { nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatisticNumber"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "ant-statistic-content-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]], template: function NzStatisticNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_Template, 1, 4, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzStatisticNumberComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzValueTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzValueTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzStatisticNumberComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NzStatisticNumberComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticNumberComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                template: `
    <span class="ant-statistic-content-value">
      <ng-container *ngIf="nzValueTemplate" [ngTemplateOutlet]="nzValueTemplate" [ngTemplateOutletContext]="{ $implicit: nzValue }">
      </ng-container>
      <ng-container *ngIf="!nzValueTemplate">
        <span *ngIf="displayInt" class="ant-statistic-content-value-int">{{ displayInt }}</span>
        <span *ngIf="displayDecimal" class="ant-statistic-content-value-decimal">{{ displayDecimal }}</span>
      </ng-container>
    </span>
  `
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc3RhdGlzdGljL3N0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBYSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J4SSxNQUFNLE9BQU8sMEJBQTBCO0FBQUcsSUFPeEMsWUFBdUMsU0FBaUI7QUFBSSxRQUFyQixjQUFTLEdBQVQsU0FBUyxDQUFRO0FBQUMsUUFIekQsZUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFFLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQzZELENBQUM7QUFDOUQsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDVSxZQUFZO0FBQUssUUFDdkIsTUFBTSxnQkFBZ0IsR0FBVyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFJLFFBQUksTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxRQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pELFFBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDMUIsUUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3pFLElBQUUsQ0FBQztBQUNIO3NEQXRDQyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWE7Q0FBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixRQUFRLEVBQUUscUJBQXFCLGtCQUMvQixRQUFRLEVBQUUsbUJBQW1CLGtCQUM3QixRQUFRLEVBQUUsNmVBU1QsY0FDRjs7Ozs7Ozs7OztxR0FDSTtBQUFDO0FBQW9ELHlDQU8zQyxNQUFNLFNBQUMsU0FBUztBQUFRO0FBQUc7QUFHMUMsc0JBVEcsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIE51bWJlclN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBMT0NBTEVfSUQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotc3RhdGlzdGljLW51bWJlcicsXG4gIGV4cG9ydEFzOiAnbnpTdGF0aXN0aWNOdW1iZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpWYWx1ZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpWYWx1ZVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBuelZhbHVlIH1cIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuelZhbHVlVGVtcGxhdGVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5SW50XCIgY2xhc3M9XCJhbnQtc3RhdGlzdGljLWNvbnRlbnQtdmFsdWUtaW50XCI+e3sgZGlzcGxheUludCB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkaXNwbGF5RGVjaW1hbFwiIGNsYXNzPVwiYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlLWRlY2ltYWxcIj57eyBkaXNwbGF5RGVjaW1hbCB9fTwvc3Bhbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56VmFsdWU/OiBOelN0YXRpc3RpY1ZhbHVlVHlwZTtcbiAgQElucHV0KCkgbnpWYWx1ZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U3RhdGlzdGljVmFsdWVUeXBlIH0+O1xuXG4gIGRpc3BsYXlJbnQgPSAnJztcbiAgZGlzcGxheURlY2ltYWwgPSAnJztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGVfaWQ6IHN0cmluZykge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdE51bWJlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gdHlwZW9mIHRoaXMubnpWYWx1ZSA9PT0gJ251bWJlcicgPyAnLicgOiBnZXRMb2NhbGVOdW1iZXJTeW1ib2wodGhpcy5sb2NhbGVfaWQsIE51bWJlclN5bWJvbC5EZWNpbWFsKTtcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyh0aGlzLm56VmFsdWUpO1xuICAgIGNvbnN0IFtpbnQsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoZGVjaW1hbFNlcGFyYXRvcik7XG5cbiAgICB0aGlzLmRpc3BsYXlJbnQgPSBpbnQ7XG4gICAgdGhpcy5kaXNwbGF5RGVjaW1hbCA9IGRlY2ltYWwgPyBgJHtkZWNpbWFsU2VwYXJhdG9yfSR7ZGVjaW1hbH1gIDogJyc7XG4gIH1cbn1cbiJdfQ==