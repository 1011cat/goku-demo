import { __decorate, __metadata } from 'tslib';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input, NgModule } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/outlet';

function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 1);
    ɵngcc0.ɵɵtemplate(1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
} }
class NzDividerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
        this.nzPlain = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-divider');
    }
}
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzDividerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 16, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzPlain: "nzPlain", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzText);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzDividerComponent.propDecorators = {
    nzText: [{ type: Input }],
    nzType: [{ type: Input }],
    nzOrientation: [{ type: Input }],
    nzDashed: [{ type: Input }],
    nzPlain: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDividerComponent.prototype, "nzPlain", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDividerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span *ngIf="nzText" class="ant-divider-inner-text">
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
    </span>
  `,
                host: {
                    '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
                    '[class.ant-divider-vertical]': `nzType === 'vertical'`,
                    '[class.ant-divider-with-text]': `nzText`,
                    '[class.ant-divider-plain]': `nzPlain`,
                    '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
                    '[class.ant-divider-dashed]': `nzDashed`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzType: [{
            type: Input
        }], nzOrientation: [{
            type: Input
        }], nzDashed: [{
            type: Input
        }], nzPlain: [{
            type: Input
        }], nzText: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDividerModule {
}
NzDividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDividerModule });
NzDividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[BidiModule, CommonModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [BidiModule, CommonModule, NzOutletModule]; }, exports: function () { return [NzDividerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDividerModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzOutletModule],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzDividerComponent, NzDividerModule };

//# sourceMappingURL=ng-zorro-antd-divider.js.map