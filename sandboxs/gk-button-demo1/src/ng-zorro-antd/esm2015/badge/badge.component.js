/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { badgePresetColors } from './preset-colors';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc6 from './badge-sup.component';

function NzBadgeComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzText);
} }
function NzBadgeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵelementStart(2, "span", 3);
    ɵngcc0.ɵɵtemplate(3, NzBadgeComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
    ɵngcc0.ɵɵstyleProp("background", !ctx_r0.presetColor && ctx_r0.nzColor);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.nzStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
} }
function NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-badge-sup", 5);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzOffset", ctx_r3.nzOffset)("nzTitle", ctx_r3.nzTitle)("nzStyle", ctx_r3.nzStyle)("nzDot", ctx_r3.nzDot)("nzOverflowCount", ctx_r3.nzOverflowCount)("disableAnimation", !!(ctx_r3.nzStandalone || ctx_r3.nzStatus || ctx_r3.nzColor || (ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)))("nzCount", ctx_r3.nzCount)("noAnimation", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation));
} }
function NzBadgeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template, 1, 8, "nz-badge-sup", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showSup);
} }
const _c0 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'badge';
export class NzBadgeComponent {
    constructor(nzConfigService, renderer, cdr, elementRef, directionality, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.showSup = false;
        this.presetColor = null;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzStandalone = false;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.nzColor = undefined;
        this.nzStyle = null;
        this.nzText = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-badge');
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.prepareBadgeForRtl();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.prepareBadgeForRtl();
    }
    ngOnChanges(changes) {
        const { nzColor, nzShowDot, nzDot, nzCount, nzShowZero } = changes;
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
        if (nzShowDot || nzDot || nzCount || nzShowZero) {
            this.showSup = (this.nzShowDot && this.nzDot) || this.nzCount > 0 || (this.nzCount <= 0 && this.nzShowZero);
        }
    }
    prepareBadgeForRtl() {
        if (this.isRtlLayout) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-rtl');
        }
    }
    get isRtlLayout() {
        return this.dir === 'rtl';
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzNoAnimationDirective, 9)); };
NzBadgeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], hostVars: 4, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
    } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzStandalone: "nzStandalone", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzColor: "nzColor", nzStyle: "nzStyle", nzText: "nzText", nzTitle: "nzTitle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation", 4, "ngIf"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzBadgeComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
    } }, directives: [ɵngcc4.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc4.NgStyle, ɵngcc6.NzBadgeSupComponent], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzBadgeComponent.propDecorators = {
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzStandalone: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzText: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzBadgeComponent.prototype, "nzShowZero", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzShowDot", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzStandalone", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzBadgeComponent.prototype, "nzDot", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Number)
], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzBadgeComponent.prototype, "nzColor", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: `
    <ng-container *ngIf="nzStatus || nzColor">
      <span
        class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
        [style.background]="!presetColor && nzColor"
        [ngStyle]="nzStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    </ng-container>
    <ng-content></ng-content>
    <ng-container *nzStringTemplateOutlet="nzCount">
      <nz-badge-sup
        *ngIf="showSup"
        [nzOffset]="nzOffset"
        [nzTitle]="nzTitle"
        [nzStyle]="nzStyle"
        [nzDot]="nzDot"
        [nzOverflowCount]="nzOverflowCount"
        [disableAnimation]="!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)"
        [nzCount]="nzCount"
        [noAnimation]="!!noAnimation?.nzNoAnimation"
      ></nz-badge-sup>
    </ng-container>
  `,
                host: {
                    '[class.ant-badge-status]': 'nzStatus',
                    '[class.ant-badge-not-a-wrapper]': '!!(nzStandalone || nzStatus || nzColor)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzShowZero: [{
            type: Input
        }], nzShowDot: [{
            type: Input
        }], nzStandalone: [{
            type: Input
        }], nzDot: [{
            type: Input
        }], nzOverflowCount: [{
            type: Input
        }], nzColor: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzCount: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQWUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHcEQsTUFBTSxxQkFBcUIsR0FBZ0IsT0FBTyxDQUFDO0FBd0NuRCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUF1QjlCLFlBQ1MsZUFBZ0MsRUFDL0IsUUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBc0IsRUFDVixjQUE4QixFQUN2QixXQUFvQztBQUNoRSxRQU5RLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtBQUFDLFFBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNw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LEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSTtBQVhlO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDakIsb0RBRDRDO0FBQzVCO0FBQWEsSUFBNUIsWUFBWSxFQUFFO0FBQUU7QUFDUCxtREFEdUI7QUFDakI7QUFBYSxJQUE1QixZQUFZLEVBQUU7QUFBRTtBQUNYLHNEQUQrQjtBQUNyQjtBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ0osK0NBRGlCO0FBQ2hCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDakIseURBRDZDO0FBQzdCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDakIsaURBRDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDdEQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpvb21CYWRnZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgYmFkZ2VQcmVzZXRDb2xvcnMgfSBmcm9tICcuL3ByZXNldC1jb2xvcnMnO1xuaW1wb3J0IHsgTnpCYWRnZVN0YXR1c1R5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdiYWRnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWJhZGdlJyxcbiAgZXhwb3J0QXM6ICduekJhZGdlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbem9vbUJhZGdlTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpTdGF0dXMgfHwgbnpDb2xvclwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJhbnQtYmFkZ2Utc3RhdHVzLWRvdCBhbnQtYmFkZ2Utc3RhdHVzLXt7IG56U3RhdHVzIHx8IHByZXNldENvbG9yIH19XCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiIXByZXNldENvbG9yICYmIG56Q29sb3JcIlxuICAgICAgICBbbmdTdHlsZV09XCJuelN0eWxlXCJcbiAgICAgID48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1iYWRnZS1zdGF0dXMtdGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpUZXh0XCI+e3sgbnpUZXh0IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekNvdW50XCI+XG4gICAgICA8bnotYmFkZ2Utc3VwXG4gICAgICAgICpuZ0lmPVwic2hvd1N1cFwiXG4gICAgICAgIFtuek9mZnNldF09XCJuek9mZnNldFwiXG4gICAgICAgIFtuelRpdGxlXT1cIm56VGl0bGVcIlxuICAgICAgICBbbnpTdHlsZV09XCJuelN0eWxlXCJcbiAgICAgICAgW256RG90XT1cIm56RG90XCJcbiAgICAgICAgW256T3ZlcmZsb3dDb3VudF09XCJuek92ZXJmbG93Q291bnRcIlxuICAgICAgICBbZGlzYWJsZUFuaW1hdGlvbl09XCIhIShuelN0YW5kYWxvbmUgfHwgbnpTdGF0dXMgfHwgbnpDb2xvciB8fCBub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvbilcIlxuICAgICAgICBbbnpDb3VudF09XCJuekNvdW50XCJcbiAgICAgICAgW25vQW5pbWF0aW9uXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgPjwvbnotYmFkZ2Utc3VwPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utc3RhdHVzXSc6ICduelN0YXR1cycsXG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2Utbm90LWEtd3JhcHBlcl0nOiAnISEobnpTdGFuZGFsb25lIHx8IG56U3RhdHVzIHx8IG56Q29sb3IpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3daZXJvOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelNob3dEb3Q6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RG90OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelN0YW5kYWxvbmU6IEJvb2xlYW5JbnB1dDtcbiAgc2hvd1N1cCA9IGZhbHNlO1xuICBwcmVzZXRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93WmVybzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RG90ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3RhbmRhbG9uZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEb3QgPSBmYWxzZTtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBuek92ZXJmbG93Q291bnQ6IG51bWJlciA9IDk5O1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56Q29sb3I/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUZXh0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56U3RhdHVzPzogTnpCYWRnZVN0YXR1c1R5cGUgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q291bnQ/OiBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuICBASW5wdXQoKSBuek9mZnNldD86IFtudW1iZXIsIG51bWJlcl07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtYmFkZ2UnKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5wcmVwYXJlQmFkZ2VGb3JSdGwoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5wcmVwYXJlQmFkZ2VGb3JSdGwoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Q29sb3IsIG56U2hvd0RvdCwgbnpEb3QsIG56Q291bnQsIG56U2hvd1plcm8gfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q29sb3IpIHtcbiAgICAgIHRoaXMucHJlc2V0Q29sb3IgPSB0aGlzLm56Q29sb3IgJiYgYmFkZ2VQcmVzZXRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpICE9PSAtMSA/IHRoaXMubnpDb2xvciA6IG51bGw7XG4gICAgfVxuICAgIGlmIChuelNob3dEb3QgfHwgbnpEb3QgfHwgbnpDb3VudCB8fCBuelNob3daZXJvKSB7XG4gICAgICB0aGlzLnNob3dTdXAgPSAodGhpcy5uelNob3dEb3QgJiYgdGhpcy5uekRvdCkgfHwgdGhpcy5uekNvdW50ISA+IDAgfHwgKHRoaXMubnpDb3VudCEgPD0gMCAmJiB0aGlzLm56U2hvd1plcm8pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUJhZGdlRm9yUnRsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUnRsTGF5b3V0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLXJ0bCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLXJ0bCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc1J0bExheW91dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXIgPT09ICdydGwnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=