/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Directionality } from '@angular/cdk/bidi';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from 'ng-zorro-antd/core/wave';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from 'ng-zorro-antd/icon';
import * as ɵngcc7 from 'ng-zorro-antd/core/outlet';

const _c0 = ["switchElement"];
function NzSwitchComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 8);
} }
function NzSwitchComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzCheckedChildren);
} }
function NzSwitchComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSwitchComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzCheckedChildren);
} }
function NzSwitchComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzUnCheckedChildren);
} }
function NzSwitchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSwitchComponent_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzUnCheckedChildren);
} }
const NZ_CONFIG_MODULE_NAME = 'switch';
export class NzSwitchComponent {
    constructor(nzConfigService, cdr, focusMonitor, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
        this.nzCheckedChildren = null;
        this.nzUnCheckedChildren = null;
        this.nzSize = 'default';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    onHostClick(e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.isChecked);
        }
    }
    updateValue(value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    }
    onKeyDown(e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    }
    focus() {
        var _a;
        this.focusMonitor.focusVia((_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'keyboard');
    }
    blur() {
        var _a;
        (_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement.blur();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.isChecked = value;
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
NzSwitchComponent.ɵfac = function NzSwitchComponent_Factory(t) { return new (t || NzSwitchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzSwitchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSwitchComponent, selectors: [["nz-switch"]], viewQuery: function NzSwitchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.switchElement = _t.first);
    } }, hostBindings: function NzSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzSwitchComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } }, inputs: { nzLoading: "nzLoading", nzDisabled: "nzDisabled", nzControl: "nzControl", nzCheckedChildren: "nzCheckedChildren", nzUnCheckedChildren: "nzUnCheckedChildren", nzSize: "nzSize" }, exportAs: ["nzSwitch"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NzSwitchComponent),
                multi: true
            }
        ])], decls: 9, vars: 15, consts: [["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode", "keydown"], ["switchElement", ""], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], ["uncheckTemplate", ""], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"]], template: function NzSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0, 1);
        ɵngcc0.ɵɵlistener("keydown", function NzSwitchComponent_Template_button_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtemplate(3, NzSwitchComponent_i_3_Template, 1, 0, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵtemplate(5, NzSwitchComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(6, NzSwitchComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(8, "div", 7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵclassProp("ant-switch-checked", ctx.isChecked)("ant-switch-loading", ctx.nzLoading)("ant-switch-disabled", ctx.nzDisabled)("ant-switch-small", ctx.nzSize === "small")("ant-switch-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("nzWaveExtraNode", true);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isChecked)("ngIfElse", _r3);
    } }, directives: [ɵngcc4.NzWaveDirective, ɵngcc5.NgIf, ɵngcc6.NzIconDirective, ɵngcc7.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzSwitchComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: FocusMonitor },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzSwitchComponent.propDecorators = {
    switchElement: [{ type: ViewChild, args: ['switchElement', { static: true },] }],
    nzLoading: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzControl: [{ type: Input }],
    nzCheckedChildren: [{ type: Input }],
    nzUnCheckedChildren: [{ type: Input }],
    nzSize: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSwitchComponent.prototype, "nzControl", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzSwitchComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'nz-switch',
                exportAs: 'nzSwitch',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSwitchComponent),
                        multi: true
                    }
                ],
                template: `
    <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [disabled]="nzDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="nzLoading"
      [class.ant-switch-disabled]="nzDisabled"
      [class.ant-switch-small]="nzSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
      (keydown)="onKeyDown($event)"
    >
      <span class="ant-switch-handle">
        <i *ngIf="nzLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></i>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="nzCheckedChildren">{{ nzCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="nzUnCheckedChildren">{{ nzUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
  `,
                host: {
                    '(click)': 'onHostClick($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.FocusMonitor }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzLoading: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzControl: [{
            type: Input
        }], nzCheckedChildren: [{
            type: Input
        }], nzUnCheckedChildren: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], switchElement: [{
            type: ViewChild,
            args: ['switchElement', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBRVIsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxNQUFNLHFCQUFxQixHQUFnQixRQUFRLENBQUM7QUFnRHBELE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQTJEL0IsWUFDUyxlQUFnQyxFQUMvQixHQUFzQixFQUN0QixZQUEwQixFQUNkLGNBQThCO0FBQ25ELFFBSlEsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDaEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQ3RELFFBL0RXLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO0FBQzlELFFBS0UsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUNwQixRQUFFLGFBQVEsR0FBaUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQ3BDLFFBQUUsY0FBUyxHQUFrQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFDdEMsUUFDMkIsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUM3QyxRQUEyQixlQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzlDLFFBQTJCLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDN0MsUUFBVyxzQkFBaUIsR0FBc0MsSUFBSSxDQUFDO0FBQ3ZFLFFBQVcsd0JBQW1CLEdBQXNDLElBQUksQ0FBQztBQUN6RSxRQUF5QixXQUFNLEdBQWlCLFNBQVMsQ0FBQztBQUMxRCxRQUNFLFFBQUcsR0FBYyxLQUFLLENBQUM7QUFDekIsUUFDVSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUN6QyxJQTJDSyxDQUFDO0FBQ04sSUEzQ0UsV0FBVyxDQUFDLENBQWE7QUFBSSxRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hFLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsS0FBYztBQUFJLFFBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUM3QixZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFNBQVMsQ0FBQyxDQUFnQjtBQUFJLFFBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEUsWUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO0FBQ3BDLGdCQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsZ0JBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLGFBQU87QUFBQyxpQkFBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQzVDLGdCQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsZ0JBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLGFBQU87QUFBQyxpQkFBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO0FBQzdELGdCQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUMsZ0JBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxLQUFLO0FBQUs7QUFDRixRQUFOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxPQUFDLElBQUksQ0FBQyxhQUFhLDBDQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM5RSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUk7QUFBSztBQUNELFFBQU4sTUFBQSxJQUFJLENBQUMsYUFBYSwwQ0FBRSxhQUFhLENBQUMsSUFBSSxHQUFHO0FBQzdDLElBQUUsQ0FBQztBQUNILElBUUUsUUFBUTtBQUFLO0FBQ0wsUUFBTixNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7QUFDbEcsWUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztBQUMzQixZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsUUFBSSxDQUFDLEVBQUU7QUFDUCxRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDekMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxlQUFlO0FBQUssUUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO0FBQ3RFLGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsYUFBTyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDL0IsWUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLGdCQUFVLHVEQUF1RDtBQUNqRSxnQkFBVSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELGFBQVM7QUFDVCxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hFLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVLENBQUMsS0FBYztBQUFJLFFBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLEVBQWdCO0FBQUksUUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxFQUFpQjtBQUFJLFFBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsUUFBaUI7QUFBSSxRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUMvQixRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7NkNBM0pDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsV0FBVyxrQkFDckIsUUFBUSxFQUFFLFVBQVUsa0JBQ3BCLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLHNCQUNULDBCQUNFLE9BQU8sRUFBRSxpQkFBaUIsMEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7QUFBaUIsQ0FBQywwQkFDaEQsS0FBSyxFQUFFLElBQUk7ZUFDWjthQUNGO2VBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7NFZBNEJULGtCQUNELElBQUksRUFBRSxzQkFDSixTQUFTLEVBQUUscUJBQXFCLGtCQUNqQyxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvS0FDSTtBQUFDO0FBQTJDLFlBdEQzQixlQUFlO0FBQUksWUFmdkMsaUJBQWlCO0FBQ2pCLFlBTk8sWUFBWTtBQUFJLFlBbUJMLGNBQWMsdUJBc0g3QixRQUFRO0FBQU07QUFBRztBQUNsQiw0QkF0REQsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFBTyx3QkFDbEQsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGtDQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUk7QUFMZTtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1Isb0RBRHlCO0FBQ2xCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDVCxxREFEMkI7QUFDbkI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNSLG9EQUR5QjtBQUdwQjtBQUFhLElBQTFCLFVBQVUsRUFBRTtBQUFFO0FBRXRCLGlEQUZzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUMxRDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRU5URVIsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZURTVHlwZSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzd2l0Y2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1zd2l0Y2gnLFxuICBleHBvcnRBczogJ256U3dpdGNoJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U3dpdGNoQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b25cbiAgICAgIG56LXdhdmVcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3M9XCJhbnQtc3dpdGNoXCJcbiAgICAgICNzd2l0Y2hFbGVtZW50XG4gICAgICBbZGlzYWJsZWRdPVwibnpEaXNhYmxlZFwiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1jaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1sb2FkaW5nXT1cIm56TG9hZGluZ1wiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1kaXNhYmxlZF09XCJuekRpc2FibGVkXCJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLXNtYWxsXT1cIm56U2l6ZSA9PT0gJ3NtYWxsJ1wiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICBbbnpXYXZlRXh0cmFOb2RlXT1cInRydWVcIlxuICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN3aXRjaC1oYW5kbGVcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJuekxvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBjbGFzcz1cImFudC1zd2l0Y2gtbG9hZGluZy1pY29uXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3dpdGNoLWlubmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NoZWNrZWQ7IGVsc2UgdW5jaGVja1RlbXBsYXRlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56Q2hlY2tlZENoaWxkcmVuXCI+e3sgbnpDaGVja2VkQ2hpbGRyZW4gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdW5jaGVja1RlbXBsYXRlPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelVuQ2hlY2tlZENoaWxkcmVuXCI+e3sgbnpVbkNoZWNrZWRDaGlsZHJlbiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jbGljay1hbmltYXRpbmctbm9kZVwiPjwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25Ib3N0Q2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekxvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q29udHJvbDogQm9vbGVhbklucHV0O1xuXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHt9O1xuICBAVmlld0NoaWxkKCdzd2l0Y2hFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBzd2l0Y2hFbGVtZW50PzogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb250cm9sID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuelVuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpTaXplRFNUeXBlID0gJ2RlZmF1bHQnO1xuXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25Ib3N0Q2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCAmJiAhdGhpcy5uekxvYWRpbmcgJiYgIXRoaXMubnpDb250cm9sKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0NoZWNrZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpDb250cm9sICYmICF0aGlzLm56RGlzYWJsZWQgJiYgIXRoaXMubnpMb2FkaW5nKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFNQQUNFIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5pc0NoZWNrZWQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LCAna2V5Ym9hcmQnKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuc3dpdGNoRWxlbWVudCEubmF0aXZlRWxlbWVudCwgdHJ1ZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE3NzkzICoqL1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5zd2l0Y2hFbGVtZW50IS5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19