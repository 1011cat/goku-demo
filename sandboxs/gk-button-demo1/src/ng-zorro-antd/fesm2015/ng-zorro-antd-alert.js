import { __decorate, __metadata } from 'tslib';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Optional, Input, Output, NgModule } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';

function NzAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r1.nzIconType || ctx_r1.inferredIconType)("nzTheme", ctx_r1.iconTheme);
} }
function NzAlertComponent_div_0_div_2_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzMessage);
} }
function NzAlertComponent_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzMessage);
} }
function NzAlertComponent_div_0_div_2_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.nzDescription);
} }
function NzAlertComponent_div_0_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzDescription);
} }
function NzAlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_1_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵtemplate(2, NzAlertComponent_div_0_div_2_span_2_Template, 2, 1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzMessage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzDescription);
} }
function NzAlertComponent_div_0_button_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 15);
} }
function NzAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 16);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.nzCloseText);
} }
function NzAlertComponent_div_0_button_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.nzCloseText);
} }
function NzAlertComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function NzAlertComponent_div_0_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.closeAlert(); });
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_button_3_ng_template_1_Template, 1, 0, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NzAlertComponent_div_0_button_3_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(2);
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzCloseText)("ngIfElse", _r8);
} }
function NzAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onFadeAnimationDone(); });
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_Template, 2, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzAlertComponent_div_0_div_2_Template, 3, 2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, NzAlertComponent_div_0_button_3_Template, 4, 2, "button", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-alert-rtl", ctx_r0.dir === "rtl")("ant-alert-success", ctx_r0.nzType === "success")("ant-alert-info", ctx_r0.nzType === "info")("ant-alert-warning", ctx_r0.nzType === "warning")("ant-alert-error", ctx_r0.nzType === "error")("ant-alert-no-icon", !ctx_r0.nzShowIcon)("ant-alert-banner", ctx_r0.nzBanner)("ant-alert-closable", ctx_r0.nzCloseable)("ant-alert-with-description", !!ctx_r0.nzDescription);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r0.nzNoAnimation)("@slideAlertMotion", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzShowIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzMessage || ctx_r0.nzDescription);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzCloseable || ctx_r0.nzCloseText);
} }
const NZ_CONFIG_MODULE_NAME = 'alert';
class NzAlertComponent {
    constructor(nzConfigService, cdr, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCloseText = null;
        this.nzIconType = null;
        this.nzMessage = null;
        this.nzDescription = null;
        this.nzType = 'info';
        this.nzCloseable = false;
        this.nzShowIcon = false;
        this.nzBanner = false;
        this.nzNoAnimation = false;
        this.nzOnClose = new EventEmitter();
        this.closed = false;
        this.iconTheme = 'fill';
        this.inferredIconType = 'info-circle';
        this.dir = 'ltr';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    closeAlert() {
        this.closed = true;
    }
    onFadeAnimationDone() {
        if (this.closed) {
            this.nzOnClose.emit(true);
        }
    }
    ngOnChanges(changes) {
        const { nzShowIcon, nzDescription, nzType, nzBanner } = changes;
        if (nzShowIcon) {
            this.isShowIconSet = true;
        }
        if (nzType) {
            this.isTypeSet = true;
            switch (this.nzType) {
                case 'error':
                    this.inferredIconType = 'close-circle';
                    break;
                case 'success':
                    this.inferredIconType = 'check-circle';
                    break;
                case 'info':
                    this.inferredIconType = 'info-circle';
                    break;
                case 'warning':
                    this.inferredIconType = 'exclamation-circle';
                    break;
            }
        }
        if (nzDescription) {
            this.iconTheme = this.nzDescription ? 'outline' : 'fill';
        }
        if (nzBanner) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) { return new (t || NzAlertComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAlertComponent, selectors: [["nz-alert"]], inputs: { nzCloseText: "nzCloseText", nzIconType: "nzIconType", nzMessage: "nzMessage", nzDescription: "nzDescription", nzType: "nzType", nzCloseable: "nzCloseable", nzShowIcon: "nzShowIcon", nzBanner: "nzBanner", nzNoAnimation: "nzNoAnimation" }, outputs: { nzOnClose: "nzOnClose" }, exportAs: ["nzAlert"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-content", 4, "ngIf"], ["type", "button", "tabindex", "0", "class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-content"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"], [1, "ant-alert-close-text"]], template: function NzAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzAlertComponent_div_0_Template, 4, 23, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc5.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [slideAlertMotion] }, changeDetection: 0 });
NzAlertComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzAlertComponent.propDecorators = {
    nzCloseText: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzMessage: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCloseable: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzBanner: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzOnClose: [{ type: Output }]
};
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzBanner", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAlertComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAlertComponent, [{
        type: Component,
        args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [slideAlertMotion],
                template: `
    <div
      *ngIf="!closed"
      class="ant-alert"
      [class.ant-alert-rtl]="dir === 'rtl'"
      [class.ant-alert-success]="nzType === 'success'"
      [class.ant-alert-info]="nzType === 'info'"
      [class.ant-alert-warning]="nzType === 'warning'"
      [class.ant-alert-error]="nzType === 'error'"
      [class.ant-alert-no-icon]="!nzShowIcon"
      [class.ant-alert-banner]="nzBanner"
      [class.ant-alert-closable]="nzCloseable"
      [class.ant-alert-with-description]="!!nzDescription"
      [@.disabled]="nzNoAnimation"
      [@slideAlertMotion]
      (@slideAlertMotion.done)="onFadeAnimationDone()"
    >
      <ng-container *ngIf="nzShowIcon">
        <i nz-icon class="ant-alert-icon" [nzType]="nzIconType || inferredIconType" [nzTheme]="iconTheme"></i>
      </ng-container>
      <div class="ant-alert-content" *ngIf="nzMessage || nzDescription">
        <span class="ant-alert-message" *ngIf="nzMessage">
          <ng-container *nzStringTemplateOutlet="nzMessage">{{ nzMessage }}</ng-container>
        </span>
        <span class="ant-alert-description" *ngIf="nzDescription">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </span>
      </div>
      <button type="button" tabindex="0" *ngIf="nzCloseable || nzCloseText" class="ant-alert-close-icon" (click)="closeAlert()">
        <ng-template #closeDefaultTemplate>
          <i nz-icon nzType="close"></i>
        </ng-template>
        <ng-container *ngIf="nzCloseText; else closeDefaultTemplate">
          <ng-container *nzStringTemplateOutlet="nzCloseText">
            <span class="ant-alert-close-text">{{ nzCloseText }}</span>
          </ng-container>
        </ng-container>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCloseText: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzMessage: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCloseable: [{
            type: Input
        }], nzShowIcon: [{
            type: Input
        }], nzBanner: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzOnClose: [{
            type: Output
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAlertModule {
}
NzAlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAlertModule });
NzAlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAlertModule_Factory(t) { return new (t || NzAlertModule)(); }, imports: [[BidiModule, CommonModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAlertModule, { declarations: function () { return [NzAlertComponent]; }, imports: function () { return [BidiModule, CommonModule, NzIconModule, NzOutletModule]; }, exports: function () { return [NzAlertComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAlertModule, [{
        type: NgModule,
        args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [BidiModule, CommonModule, NzIconModule, NzOutletModule]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzAlertComponent, NzAlertModule };

//# sourceMappingURL=ng-zorro-antd-alert.js.map