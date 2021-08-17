import { __decorate, __metadata } from 'tslib';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, ElementRef, Optional, Host, Input, NgModule } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';

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
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const i_r5 = ɵngcc0.ɵɵnextContext(2).index;
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("current", p_r8 === ctx_r7.countArray[i_r5]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", p_r8, " ");
} }
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template, 2, 3, "p", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.countSingleArray);
} }
function NzBadgeSupComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("transform", "translateY(" + -ctx_r3.countArray[i_r5] * 100 + "%)");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r3.noAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzDot && ctx_r3.countArray[i_r5] !== undefined);
} }
function NzBadgeSupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_Template, 2, 4, "span", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.maxNumberArray);
} }
function NzBadgeSupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r2.nzOverflowCount, "+");
} }
function NzRibbonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzText);
} }
const badgePresetColors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'badge';
class NzBadgeComponent {
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
    } }, directives: function () { return [ɵngcc4.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc4.NgStyle, NzBadgeSupComponent]; }, encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBadgeSupComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzStyle = null;
        this.nzDot = false;
        this.nzOverflowCount = 99;
        this.disableAnimation = false;
        this.noAnimation = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.count = 0;
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-scroll-number');
    }
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount } = changes;
        if (nzCount && typeof nzCount.currentValue === 'number') {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map(item => +item);
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
    }
}
NzBadgeSupComponent.ɵfac = function NzBadgeSupComponent_Factory(t) { return new (t || NzBadgeSupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzBadgeSupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBadgeSupComponent, selectors: [["nz-badge-sup"]], hostVars: 15, hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", undefined);
        ɵngcc0.ɵɵstyleMap(ctx.nzStyle);
        ɵngcc0.ɵɵstyleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
        ɵngcc0.ɵɵclassProp("ant-badge-count", !ctx.nzDot)("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
    } }, inputs: { nzStyle: "nzStyle", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", disableAnimation: "disableAnimation", noAnimation: "noAnimation", nzOffset: "nzOffset", nzTitle: "nzTitle", nzCount: "nzCount" }, exportAs: ["nzBadgeSup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["overflowTemplate", ""], ["class", "ant-scroll-number-only", 3, "nzNoAnimation", "transform", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only", 3, "nzNoAnimation"], [4, "ngIf"], ["class", "ant-scroll-number-only-unit", 3, "current", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only-unit"]], template: function NzBadgeSupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzBadgeSupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.count <= ctx.nzOverflowCount)("ngIfElse", _r1);
    } }, directives: [ɵngcc4.NgIf, ɵngcc4.NgForOf, ɵngcc3.NzNoAnimationDirective], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
NzBadgeSupComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzBadgeSupComponent.propDecorators = {
    nzOffset: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    disableAnimation: [{ type: Input }],
    nzCount: [{ type: Input }],
    noAnimation: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeSupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-badge-sup',
                exportAs: 'nzBadgeSup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: `
    <ng-container *ngIf="count <= nzOverflowCount; else overflowTemplate">
      <span
        [nzNoAnimation]="noAnimation"
        *ngFor="let n of maxNumberArray; let i = index"
        class="ant-scroll-number-only"
        [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
      >
        <ng-container *ngIf="!nzDot && countArray[i] !== undefined">
          <p *ngFor="let p of countSingleArray" class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
            {{ p }}
          </p>
        </ng-container>
      </span>
    </ng-container>
    <ng-template #overflowTemplate>{{ nzOverflowCount }}+</ng-template>
  `,
                host: {
                    '[@.disabled]': `disableAnimation`,
                    '[@zoomBadgeMotion]': '',
                    '[attr.title]': `nzTitle === null ? '' : nzTitle || nzCount`,
                    '[style]': `nzStyle`,
                    '[style.right.px]': `nzOffset && nzOffset[0] ? -nzOffset[0] : null`,
                    '[style.margin-top.px]': `nzOffset && nzOffset[1] ? nzOffset[1] : null`,
                    '[class.ant-badge-count]': `!nzDot`,
                    '[class.ant-badge-dot]': `nzDot`,
                    '[class.ant-badge-multiple-words]': `countArray.length >= 2`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzStyle: [{
            type: Input
        }], nzDot: [{
            type: Input
        }], nzOverflowCount: [{
            type: Input
        }], disableAnimation: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzCount: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzRibbonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzPlacement = 'end';
        this.nzText = null;
        this.presetColor = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-ribbon-wrapper');
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
}
NzRibbonComponent.ɵfac = function NzRibbonComponent_Factory(t) { return new (t || NzRibbonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRibbonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRibbonComponent, selectors: [["nz-ribbon"]], inputs: { nzPlacement: "nzPlacement", nzText: "nzText", nzColor: "nzColor" }, exportAs: ["nzRibbon"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 11, consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"]], template: function NzRibbonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NzRibbonComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelement(3, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
        ɵngcc0.ɵɵstyleProp("background-color", !ctx.presetColor && ctx.nzColor);
        ɵngcc0.ɵɵclassProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("color", !ctx.presetColor && ctx.nzColor);
    } }, directives: [ɵngcc5.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzRibbonComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzRibbonComponent.propDecorators = {
    nzColor: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzText: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRibbonComponent, [{
        type: Component,
        args: [{
                selector: 'nz-ribbon',
                exportAs: 'nzRibbon',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-content></ng-content>
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzPlacement: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzColor: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBadgeModule {
}
NzBadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBadgeModule });
NzBadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBadgeModule, { declarations: function () { return [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent]; }, imports: function () { return [BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]; }, exports: function () { return [NzBadgeComponent, NzRibbonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent],
                exports: [NzBadgeComponent, NzRibbonComponent],
                imports: [BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzBadgeComponent, NzBadgeModule, NzBadgeSupComponent as ɵa, NzRibbonComponent as ɵb };

//# sourceMappingURL=ng-zorro-antd-badge.js.map