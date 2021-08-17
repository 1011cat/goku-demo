/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { InputNumber } from 'ng-zorro-antd/core/util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/platform';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

const _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 4);
    ɵngcc0.ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.imgError($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r1.nzSrc, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("srcset", ctx_r1.nzSrcSet, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5, 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.textStyles);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzText);
} }
const NZ_CONFIG_MODULE_NAME = 'avatar';
export class NzAvatarComponent {
    constructor(nzConfigService, elementRef, cdr, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.platform = platform;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.nzGap = 4;
        this.nzError = new EventEmitter();
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.textStyles = {};
        this.classMap = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-avatar');
    }
    imgError($event) {
        this.nzError.emit($event);
        if (!$event.defaultPrevented) {
            this.hasSrc = false;
            this.hasIcon = false;
            this.hasText = false;
            if (this.nzIcon) {
                this.hasIcon = true;
            }
            else if (this.nzText) {
                this.hasText = true;
            }
            this.cdr.detectChanges();
            this.setSizeStyle();
            this.notifyCalc();
        }
    }
    ngOnChanges() {
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setSizeStyle();
        this.notifyCalc();
    }
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        const avatarWidth = this.el.getBoundingClientRect().width;
        const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
        const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    }
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        if (this.platform.isBrowser) {
            setTimeout(() => {
                this.calcStringSize();
            });
        }
    }
    setSizeStyle() {
        if (typeof this.nzSize === 'number') {
            this.customSize = `${this.nzSize}px`;
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    }
}
NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzAvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, hostVars: 20, hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
        ɵngcc0.ɵɵclassProp("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    } }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzGap: "nzGap", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzAvatarComponent_i_0_Template, 1, 1, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
        ɵngcc0.ɵɵtemplate(2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzIcon && ctx.hasIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSrc && ctx.hasSrc);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzText && ctx.hasText);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc3.NgStyle], encapsulation: 2, changeDetection: 0 });
NzAvatarComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzGap: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzSrcSet: [{ type: Input }],
    nzAlt: [{ type: Input }],
    nzIcon: [{ type: Input }],
    nzError: [{ type: Output }],
    textEl: [{ type: ViewChild, args: ['textEl', { static: false },] }]
};
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Object)
], NzAvatarComponent.prototype, "nzGap", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: `
    <i nz-icon *ngIf="nzIcon && hasIcon" [nzType]="nzIcon"></i>
    <img *ngIf="nzSrc && hasSrc" [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    <span class="ant-avatar-string" #textEl [ngStyle]="textStyles" *ngIf="nzText && hasText">{{ nzText }}</span>
  `,
                host: {
                    '[class.ant-avatar-lg]': `nzSize === 'large'`,
                    '[class.ant-avatar-sm]': `nzSize === 'small'`,
                    '[class.ant-avatar-square]': `nzShape === 'square'`,
                    '[class.ant-avatar-circle]': `nzShape === 'circle'`,
                    '[class.ant-avatar-icon]': `nzIcon`,
                    '[class.ant-avatar-image]': `hasSrc `,
                    '[style.width]': 'customSize',
                    '[style.height]': 'customSize',
                    '[style.line-height]': 'customSize',
                    // nzSize type is number when customSize is true
                    '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }]; }, { nzShape: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzGap: [{
            type: Input
        }], nzError: [{
            type: Output
        }], nzText: [{
            type: Input
        }], nzSrc: [{
            type: Input
        }], nzSrcSet: [{
            type: Input
        }], nzAlt: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }], textEl: [{
            type: ViewChild,
            args: ['textEl', { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELE1BQU0scUJBQXFCLEdBQWdCLFFBQVEsQ0FBQztBQTJCcEQsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBeUIvQixZQUNTLGVBQWdDLEVBQy9CLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQWtCO0FBQzNCLFFBSlEsb0JBQWUsR0FBZixlQUFlLENBQWlCO0FBQUMsUUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtBQUM5QixRQTNCVyxrQkFBYSxHQUFnQixxQkFBcUIsQ0FBQztBQUM5RCxRQUF5QixZQUFPLEdBQWtCLFFBQVEsQ0FBQztBQUMzRCxRQUF5QixXQUFNLEdBQTJCLFNBQVMsQ0FBQztBQUNwRSxRQUF3QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELFFBS3FCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0FBQ3pELFFBQ0UsWUFBTyxHQUFZLEtB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MEIsRUFBRSxTQUFTLHNCQUNyQzthQUFlLEVBQUUsWUFBWSxzQkFDN0IsZ0JBQWdCLEVBQUUsWUFBWSxzQkFDOUIscUJBQXFCLEVBQUUsWUFBWSxzQkFDbkMsZ0RBQWdELHFCQUNoRCxzQkFBc0IsRUFBRTttQ0FBbUQsa0JBQzVFLGtCQUNELG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxjQUN0Qzs7Ozs7Ozs7OztvSEFDSTtBQUFDO0FBQTJDLFlBL0IzQixlQUFlO0FBQUksWUFUdkMsVUFBVTtBQUNWLFlBSEEsaUJBQWlCO0FBQ2pCLFlBSk8sUUFBUTtBQUFHO0FBQUc7QUFFdEIsc0JBK0NFLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssc0JBQ1YsTUFBTTtBQUFLLHFCQVNYLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU07QUFqQnJCO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFDdEIsa0RBRHVEO0FBQ2xDO0FBQWEsSUFBMUIsVUFBVSxFQUFFO0FBQUU7QUFBc0MsaURBQUk7QUFDNUI7QUFDdEMsSUFEVSxVQUFVLEVBQUU7QUFBRSxJQUFBLFdBQVcsRUFBRTtBQUFFO0FBRXpDLGdEQUZrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDbEQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSwgTmdTdHlsZUludGVyZmFjZSwgTnVtYmVySW5wdXQsIE56U2hhcGVTQ1R5cGUsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnYXZhdGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYXZhdGFyJyxcbiAgZXhwb3J0QXM6ICduekF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgbnotaWNvbiAqbmdJZj1cIm56SWNvbiAmJiBoYXNJY29uXCIgW256VHlwZV09XCJuekljb25cIj48L2k+XG4gICAgPGltZyAqbmdJZj1cIm56U3JjICYmIGhhc1NyY1wiIFtzcmNdPVwibnpTcmNcIiBbYXR0ci5zcmNzZXRdPVwibnpTcmNTZXRcIiBbYXR0ci5hbHRdPVwibnpBbHRcIiAoZXJyb3IpPVwiaW1nRXJyb3IoJGV2ZW50KVwiIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtYXZhdGFyLXN0cmluZ1wiICN0ZXh0RWwgW25nU3R5bGVdPVwidGV4dFN0eWxlc1wiICpuZ0lmPVwibnpUZXh0ICYmIGhhc1RleHRcIj57eyBuelRleHQgfX08L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItbGddJzogYG56U2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLXNtXSc6IGBuelNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3MuYW50LWF2YXRhci1zcXVhcmVdJzogYG56U2hhcGUgPT09ICdzcXVhcmUnYCxcbiAgICAnW2NsYXNzLmFudC1hdmF0YXItY2lyY2xlXSc6IGBuelNoYXBlID09PSAnY2lyY2xlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLWljb25dJzogYG56SWNvbmAsXG4gICAgJ1tjbGFzcy5hbnQtYXZhdGFyLWltYWdlXSc6IGBoYXNTcmMgYCxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdjdXN0b21TaXplJyxcbiAgICAnW3N0eWxlLmhlaWdodF0nOiAnY3VzdG9tU2l6ZScsXG4gICAgJ1tzdHlsZS5saW5lLWhlaWdodF0nOiAnY3VzdG9tU2l6ZScsXG4gICAgLy8gbnpTaXplIHR5cGUgaXMgbnVtYmVyIHdoZW4gY3VzdG9tU2l6ZSBpcyB0cnVlXG4gICAgJ1tzdHlsZS5mb250LXNpemUucHhdJzogJyhoYXNJY29uICYmIGN1c3RvbVNpemUpID8gJGFueShuelNpemUpIC8gMiA6IG51bGwnXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOekF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekdhcDogTnVtYmVySW5wdXQ7XG5cbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgbnpTaGFwZTogTnpTaGFwZVNDVHlwZSA9ICdjaXJjbGUnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIG56U2l6ZTogTnpTaXplTERTVHlwZSB8IG51bWJlciA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXROdW1iZXIoKSBuekdhcCA9IDQ7XG4gIEBJbnB1dCgpIG56VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgbnpTcmM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3JjU2V0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBuekFsdD86IHN0cmluZztcbiAgQElucHV0KCkgbnpJY29uPzogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG5cbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcbiAgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcbiAgY3VzdG9tU2l6ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQFZpZXdDaGlsZCgndGV4dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRleHRFbD86IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtYXZhdGFyJyk7XG4gIH1cblxuICBpbWdFcnJvcigkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uekVycm9yLmVtaXQoJGV2ZW50KTtcbiAgICBpZiAoISRldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNJY29uID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLm56SWNvbikge1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xuICAgICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5zZXRTaXplU3R5bGUoKTtcbiAgICAgIHRoaXMubm90aWZ5Q2FsYygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzVGV4dCA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uelRleHQ7XG4gICAgdGhpcy5oYXNJY29uID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56SWNvbjtcbiAgICB0aGlzLmhhc1NyYyA9ICEhdGhpcy5uelNyYztcblxuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XG4gICAgdGhpcy5ub3RpZnlDYWxjKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsIS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm56R2FwICogMiA8IGF2YXRhcldpZHRoID8gdGhpcy5uekdhcCAqIDIgOiA4O1xuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSBvZmZzZXQgPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gb2Zmc2V0KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xuXG4gICAgdGhpcy50ZXh0U3R5bGVzID0ge1xuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXG4gICAgfTtcbiAgICBpZiAodGhpcy5jdXN0b21TaXplKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMudGV4dFN0eWxlcywge1xuICAgICAgICBsaW5lSGVpZ2h0OiB0aGlzLmN1c3RvbVNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNhbGMoKTogdm9pZCB7XG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuY3VzdG9tU2l6ZSA9IGAke3RoaXMubnpTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXN0b21TaXplID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==