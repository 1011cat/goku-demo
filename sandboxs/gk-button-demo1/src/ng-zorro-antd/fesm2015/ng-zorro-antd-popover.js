import { __decorate, __metadata } from 'tslib';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { EventEmitter, Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, Renderer2, Host, Optional, Input, Output, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgModule } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTooltipBaseDirective, NzToolTipComponent, isTooltipEmpty, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from 'ng-zorro-antd/core/config';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/cdk/overlay';
import * as ɵngcc5 from 'ng-zorro-antd/core/overlay';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from 'ng-zorro-antd/core/outlet';

function NzPopoverComponent_ng_template_0_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzTitle);
} }
function NzPopoverComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzPopoverComponent_ng_template_0_div_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzTitle);
} }
function NzPopoverComponent_ng_template_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzContent);
} }
function NzPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelement(2, "div", 4);
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵtemplate(5, NzPopoverComponent_ng_template_0_div_5_Template, 2, 1, "div", 6);
    ɵngcc0.ɵɵelementStart(6, "div", 7);
    ɵngcc0.ɵɵtemplate(7, NzPopoverComponent_ng_template_0_ng_container_7_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzContent);
} }
const NZ_CONFIG_MODULE_NAME = 'popover';
class NzPopoverDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'hover';
        this.placement = 'top';
        this.nzPopoverBackdrop = false;
        // tslint:disable-next-line:no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopoverComponent);
    }
    getProxyPropertyMap() {
        return Object.assign({ nzPopoverBackdrop: ['nzBackdrop', () => this.nzPopoverBackdrop] }, super.getProxyPropertyMap());
    }
}
NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) { return new (t || NzPopoverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService)); };
NzPopoverDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzPopoverDirective, selectors: [["", "nz-popover", ""]], hostVars: 2, hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-popover-open", ctx.visible);
    } }, inputs: { trigger: ["nzPopoverTrigger", "trigger"], placement: ["nzPopoverPlacement", "placement"], nzPopoverBackdrop: "nzPopoverBackdrop", title: ["nzPopoverTitle", "title"], content: ["nzPopoverContent", "content"], directiveTitle: ["nz-popover", "directiveTitle"], origin: ["nzPopoverOrigin", "origin"], visible: ["nzPopoverVisible", "visible"], mouseEnterDelay: ["nzPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["nzPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["nzPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["nzPopoverOverlayStyle", "overlayStyle"] }, outputs: { visibleChange: "nzPopoverVisibleChange" }, exportAs: ["nzPopover"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
NzPopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzConfigService }
];
NzPopoverDirective.propDecorators = {
    title: [{ type: Input, args: ['nzPopoverTitle',] }],
    content: [{ type: Input, args: ['nzPopoverContent',] }],
    directiveTitle: [{ type: Input, args: ['nz-popover',] }],
    trigger: [{ type: Input, args: ['nzPopoverTrigger',] }],
    placement: [{ type: Input, args: ['nzPopoverPlacement',] }],
    origin: [{ type: Input, args: ['nzPopoverOrigin',] }],
    visible: [{ type: Input, args: ['nzPopoverVisible',] }],
    mouseEnterDelay: [{ type: Input, args: ['nzPopoverMouseEnterDelay',] }],
    mouseLeaveDelay: [{ type: Input, args: ['nzPopoverMouseLeaveDelay',] }],
    overlayClassName: [{ type: Input, args: ['nzPopoverOverlayClassName',] }],
    overlayStyle: [{ type: Input, args: ['nzPopoverOverlayStyle',] }],
    nzPopoverBackdrop: [{ type: Input }],
    visibleChange: [{ type: Output, args: ['nzPopoverVisibleChange',] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", Boolean)
], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-popover]',
                exportAs: 'nzPopover',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ɵngcc2.NzConfigService }]; }, { trigger: [{
            type: Input,
            args: ['nzPopoverTrigger']
        }], placement: [{
            type: Input,
            args: ['nzPopoverPlacement']
        }], nzPopoverBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['nzPopoverVisibleChange']
        }], title: [{
            type: Input,
            args: ['nzPopoverTitle']
        }], content: [{
            type: Input,
            args: ['nzPopoverContent']
        }], directiveTitle: [{
            type: Input,
            args: ['nz-popover']
        }], origin: [{
            type: Input,
            args: ['nzPopoverOrigin']
        }], visible: [{
            type: Input,
            args: ['nzPopoverVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['nzPopoverMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['nzPopoverMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['nzPopoverOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['nzPopoverOverlayStyle']
        }] }); })();
class NzPopoverComponent extends NzToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.nzTrigger === 'click' ? this.nzBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
    }
}
NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) { return new (t || NzPopoverComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzPopoverComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzPopoverComponent, selectors: [["nz-popover"]], exportAs: ["nzPopoverComponent"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function NzPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzPopoverComponent_ng_template_0_Template, 8, 9, "ng-template", 0, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵlistener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true);
    } }, directives: [ɵngcc4.CdkConnectedOverlay, ɵngcc5.NzConnectedOverlayDirective, ɵngcc6.NgClass, ɵngcc6.NgStyle, ɵngcc1.NzNoAnimationDirective, ɵngcc6.NgIf, ɵngcc7.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
NzPopoverComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'nz-popover',
                exportAs: 'nzPopoverComponent',
                animations: [zoomBigMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow"></div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPopoverModule {
}
NzPopoverModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPopoverModule });
NzPopoverModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPopoverModule_Factory(t) { return new (t || NzPopoverModule)(); }, imports: [[BidiModule, CommonModule, OverlayModule, NzOutletModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPopoverModule, { declarations: function () { return [NzPopoverDirective, NzPopoverComponent]; }, imports: function () { return [BidiModule, CommonModule, OverlayModule, NzOutletModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]; }, exports: function () { return [NzPopoverDirective, NzPopoverComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPopoverModule, [{
        type: NgModule,
        args: [{
                exports: [NzPopoverDirective, NzPopoverComponent],
                entryComponents: [NzPopoverComponent],
                declarations: [NzPopoverDirective, NzPopoverComponent],
                imports: [BidiModule, CommonModule, OverlayModule, NzOutletModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzPopoverComponent, NzPopoverDirective, NzPopoverModule };

//# sourceMappingURL=ng-zorro-antd-popover.js.map