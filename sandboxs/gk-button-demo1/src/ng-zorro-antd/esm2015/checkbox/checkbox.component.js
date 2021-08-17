/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzCheckboxWrapperComponent } from './checkbox-wrapper.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './checkbox-wrapper.component';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/forms';

const _c0 = ["inputElement"];
const _c1 = ["nz-checkbox", ""];
const _c2 = ["*"];
export class NzCheckboxComponent {
    constructor(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
        this.elementRef = elementRef;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.nzCheckedChange = new EventEmitter();
        this.nzValue = null;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-checkbox-wrapper');
    }
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    }
    innerCheckedChange(checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    }
    writeValue(value) {
        this.nzChecked = value;
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
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzCheckboxWrapperComponent, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 4, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
    } }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzCheckboxComponent),
                multi: true
            }
        ])], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 10, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(3, "span", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span");
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        ɵngcc0.ɵɵattribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null);
    } }, directives: [ɵngcc4.CheckboxControlValueAccessor, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], encapsulation: 2, changeDetection: 0 });
NzCheckboxComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzCheckboxWrapperComponent, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzCheckboxComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: true },] }],
    nzCheckedChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzChecked: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxComponent.prototype, "nzChecked", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
        (click)="$event.stopPropagation()"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzCheckboxComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-wrapper-checked]': 'nzChecked',
                    '[class.ant-checkbox-rtl]': `dir === 'rtl'`,
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.FocusMonitor }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCheckedChange: [{
            type: Output
        }], nzValue: [{
            type: Input
        }], nzAutoFocus: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7QUEyQzFFLE1BQU0sT0FBTyxtQkFBbUI7QUFBRyxJQThEakMsWUFDVSxVQUFtQyxFQUN2QiwwQkFBc0QsRUFDbEUsR0FBc0IsRUFDdEIsWUFBMEIsRUFDZCxjQUE4QjtBQUNuRCxRQUxTLGVBQVUsR0FBVixVQUFVLENBQXlCO0FBQUMsUUFDeEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtBQUFDLFFBQ25FLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7QUFBQyxRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUN0RCxRQTlERSxRQUFH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Q25CO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDZCw0REFEcUM7QUFDeEI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUVULHNEQUYwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM3QztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW256LWNoZWNrYm94XScsXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtY2hlY2tib3hcIlxuICAgICAgW2NsYXNzLmFudC1jaGVja2JveC1jaGVja2VkXT1cIm56Q2hlY2tlZCAmJiAhbnpJbmRldGVybWluYXRlXCJcbiAgICAgIFtjbGFzcy5hbnQtY2hlY2tib3gtZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbY2xhc3MuYW50LWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdPVwibnpJbmRldGVybWluYXRlXCJcbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgI2lucHV0RWxlbWVudFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBjbGFzcz1cImFudC1jaGVja2JveC1pbnB1dFwiXG4gICAgICAgIFthdHRyLmF1dG9mb2N1c109XCJuekF1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXG4gICAgICAgIFtjaGVja2VkXT1cIm56Q2hlY2tlZFwiXG4gICAgICAgIFtuZ01vZGVsXT1cIm56Q2hlY2tlZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5uZXJDaGVja2VkQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1jaGVja2JveC1pbm5lclwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY2hlY2tib3gtd3JhcHBlci1jaGVja2VkXSc6ICduekNoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJyhjbGljayknOiAnaG9zdENsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekF1dG9Gb2N1czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpJbmRldGVybWluYXRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHt9O1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2VkID0gZmFsc2U7XG5cbiAgaG9zdENsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5mb2N1cygpO1xuICAgIHRoaXMuaW5uZXJDaGVja2VkQ2hhbmdlKCF0aGlzLm56Q2hlY2tlZCk7XG4gIH1cblxuICBpbm5lckNoZWNrZWRDaGFuZ2UoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56Q2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpDaGVja2VkKTtcbiAgICAgIHRoaXMubnpDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5uekNoZWNrZWQpO1xuICAgICAgaWYgKHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudC5vbkNoYW5nZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekNoZWNrYm94V3JhcHBlckNvbXBvbmVudDogTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWNoZWNrYm94LXdyYXBwZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBpZiAodGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekNoZWNrYm94V3JhcHBlckNvbXBvbmVudC5hZGRDaGVja2JveCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gICAgaWYgKHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=