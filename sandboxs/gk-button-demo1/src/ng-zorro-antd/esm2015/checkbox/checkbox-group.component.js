/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './checkbox.component';

function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 1);
    ɵngcc0.ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const o_r1 = ctx.$implicit; const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.onCheckedChange(o_r1, $event); });
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(o_r1.label);
} }
export class NzCheckboxGroupComponent {
    constructor(elementRef, focusMonitor, cdr, directionality) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.directionality = directionality;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.options = [];
        this.nzDisabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-checkbox-group');
    }
    trackByOption(_, option) {
        return option.value;
    }
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.options = value;
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
}
NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzCheckboxGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], hostVars: 2, hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-checkbox-group-rtl", ctx.dir === "rtl");
    } }, inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzCheckboxGroupComponent),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc4.NzCheckboxComponent], encapsulation: 2 });
NzCheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusMonitor },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzCheckboxGroupComponent.propDecorators = {
    nzDisabled: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                template: `
    <label
      nz-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [nzDisabled]="o.disabled || nzDisabled"
      [nzChecked]="o.checked!"
      (nzCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzCheckboxGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-group-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzDisabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUMzQyxNQUFNLE9BQU8sd0JBQXdCO0FBQUcsSUFxQnRDLFlBQ1UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsR0FBc0IsRUFDVixjQUE4QjtBQUNuRCxRQUpTLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBQzNCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUF2QkUsYUFBUSxHQUFpQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDcEMsUUFBRSxjQUFTLEdBQWtCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztBQUN0QyxRQUFFLFlBQU8sR0FBZ0MsRUFBRSxDQUFDO0FBQzVD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QUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxRQUFRLEVBQUU7O21EQVdULGtCQUNEO0tBQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUUsaUJBQWlCLDBCQUMxQjtDQUFXLEVBQUUsVUFBVTtBQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3ZELEtBQUssRUFBRSxJQUFJLHNCQUNaLGtCQUNGO1NBQ0QsSUFBSSxFQUFFO1NBQ0o7MkJBQWdDLEVBQUUsZUFBZSxrQkFDbEQsY0FDRjs7Ozt1RkFDSTtBQUFDO0FBQWtELFlBMUNqQixVQUFVO0FBQUksWUFGNUMsWUFBWTtBQUFJLFlBRWhCLGlCQUFpQjtBQUFJLFlBRFYsY0FBYyx1QkFvRTdCLFFBQVE7QUFBTTtBQUFHO0FBRWpCLHlCQXJCRixLQUFLO0FBQUk7QUFBZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBRVYsNERBRjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDOUM7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2Uge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jaGVja2JveC1ncm91cCcsXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveEdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsXG4gICAgICBuei1jaGVja2JveFxuICAgICAgY2xhc3M9XCJhbnQtY2hlY2tib3gtZ3JvdXAtaXRlbVwiXG4gICAgICAqbmdGb3I9XCJsZXQgbyBvZiBvcHRpb25zOyB0cmFja0J5OiB0cmFja0J5T3B0aW9uXCJcbiAgICAgIFtuekRpc2FibGVkXT1cIm8uZGlzYWJsZWQgfHwgbnpEaXNhYmxlZFwiXG4gICAgICBbbnpDaGVja2VkXT1cIm8uY2hlY2tlZCFcIlxuICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UobywgJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHNwYW4+e3sgby5sYWJlbCB9fTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICBgLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2hlY2tib3hHcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpEaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XG4gIG9wdGlvbnM6IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgdHJhY2tCeU9wdGlvbihfOiBudW1iZXIsIG9wdGlvbjogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIG9uQ2hlY2tlZENoYW5nZShvcHRpb246IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2UsIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBvcHRpb24uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1jaGVja2JveC1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==