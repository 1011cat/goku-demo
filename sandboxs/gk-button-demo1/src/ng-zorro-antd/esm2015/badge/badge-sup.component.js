/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { zoomBadgeMotion } from 'ng-zorro-antd/core/animation';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/core/no-animation';

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
export class NzBadgeSupComponent {
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
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.NzNoAnimationDirective], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utc3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9iYWRnZS9iYWRnZS1zdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUtMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUMvRCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUFjakMsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBWGxDLFlBQU8sR0FBcUMsSUFBSSxDQUFDO0FBQzVELFFBQVcsVUFBSyxHQUFHLEtBQUssQ0FBQztBQUN6QixRQUFXLG9CQUFlLEdBQVcsRUFBRSxDQUFDO0FBQ3hDLFFBQVcscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLFFBQ1csZ0JBQVcsR0FBRyxLQUFLLENBQUM7QUFDL0IsUUFBRSxtQkFBYyxHQUFhLEVBQUUsQ0FBQztBQUNoQyxRQUFFLGVBQVUsR0FBYSxFQUFFLENBQUM7QUFDNUIsUUFBRSxVQUFLLEdBQVcsQ0FBQyxDQUFDO0FBQ3BCLFFBQUUscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxRQUVJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRSxJQUFFLENBQUM7QUFDSCxJQUNFLHNCQUFzQjtBQUFLLFFBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFDWCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLE1BQU0sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ2pELFFBQUksSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRTtBQUM3RCxZQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JELFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSztBQUNsQyxpQkFBUyxRQUFRLEVBQUU7QUFDbkIsaUJBQVMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNsQixpQkFBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLFNBQUs7QUFDTCxRQUFJLElBQUksZUFBZSxFQUFFO0FBQ3pCLFlBQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDcEMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOytDQTVFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRSxZQUFZO1NBQ3RCLG1CQUFtQixFQUFFLEtBQUssa0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCLFFBQVEsRUFBRTs7Ozs7MEhBZ0JULGtCQUNELElBQUksRUFBRSxzQkFDSixjQUFjLEVBQUUsa0JBQWtCLHNCQUNsQyxvQkFBb0IsRUFBRSxFQUFFLHNCQUN4QixjQUFjLEVBQUUsNENBQTRDLHNCQUM1RCxTQUFTLEVBQUUsU0FBUyxzQkFDcEIsa0JBQWtCLEVBQUUsK0NBQStDLHNCQUNuRSx1QkFBdUIsRUFBRSw4Q0FBOEMsc0JBQ3ZFLHlCQUF5QixFQUFFLFFBQVEsc0JBQ25DLHVCQUF1QixFQUFFLE9BQU8sc0JBQ2hDO1FBQWtDLEVBQUUsd0JBQXdCLGtCQUM3RCxjQUNGOzs7OzttS0FDSTtBQUFDO0FBQTZDLFlBL0NqRCxVQUFVO0FBQ1g7QUFBRztBQUdPLHVCQTRDUixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssOEJBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHpvb21CYWRnZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYmFkZ2Utc3VwJyxcbiAgZXhwb3J0QXM6ICduekJhZGdlU3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbem9vbUJhZGdlTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY291bnQgPD0gbnpPdmVyZmxvd0NvdW50OyBlbHNlIG92ZXJmbG93VGVtcGxhdGVcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IG4gb2YgbWF4TnVtYmVyQXJyYXk7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICBjbGFzcz1cImFudC1zY3JvbGwtbnVtYmVyLW9ubHlcIlxuICAgICAgICBbc3R5bGUudHJhbnNmb3JtXT1cIid0cmFuc2xhdGVZKCcgKyAtY291bnRBcnJheVtpXSAqIDEwMCArICclKSdcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW56RG90ICYmIGNvdW50QXJyYXlbaV0gIT09IHVuZGVmaW5lZFwiPlxuICAgICAgICAgIDxwICpuZ0Zvcj1cImxldCBwIG9mIGNvdW50U2luZ2xlQXJyYXlcIiBjbGFzcz1cImFudC1zY3JvbGwtbnVtYmVyLW9ubHktdW5pdFwiIFtjbGFzcy5jdXJyZW50XT1cInAgPT09IGNvdW50QXJyYXlbaV1cIj5cbiAgICAgICAgICAgIHt7IHAgfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjb3ZlcmZsb3dUZW1wbGF0ZT57eyBuek92ZXJmbG93Q291bnQgfX0rPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbQC5kaXNhYmxlZF0nOiBgZGlzYWJsZUFuaW1hdGlvbmAsXG4gICAgJ1tAem9vbUJhZGdlTW90aW9uXSc6ICcnLFxuICAgICdbYXR0ci50aXRsZV0nOiBgbnpUaXRsZSA9PT0gbnVsbCA/ICcnIDogbnpUaXRsZSB8fCBuekNvdW50YCxcbiAgICAnW3N0eWxlXSc6IGBuelN0eWxlYCxcbiAgICAnW3N0eWxlLnJpZ2h0LnB4XSc6IGBuek9mZnNldCAmJiBuek9mZnNldFswXSA/IC1uek9mZnNldFswXSA6IG51bGxgLFxuICAgICdbc3R5bGUubWFyZ2luLXRvcC5weF0nOiBgbnpPZmZzZXQgJiYgbnpPZmZzZXRbMV0gPyBuek9mZnNldFsxXSA6IG51bGxgLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLWNvdW50XSc6IGAhbnpEb3RgLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLWRvdF0nOiBgbnpEb3RgLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLW11bHRpcGxlLXdvcmRzXSc6IGBjb3VudEFycmF5Lmxlbmd0aCA+PSAyYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QmFkZ2VTdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56T2Zmc2V0PzogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KCkgbnpUaXRsZT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIG56U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpEb3QgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPdmVyZmxvd0NvdW50OiBudW1iZXIgPSA5OTtcbiAgQElucHV0KCkgZGlzYWJsZUFuaW1hdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNvdW50PzogbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgbm9BbmltYXRpb24gPSBmYWxzZTtcbiAgbWF4TnVtYmVyQXJyYXk6IHN0cmluZ1tdID0gW107XG4gIGNvdW50QXJyYXk6IG51bWJlcltdID0gW107XG4gIGNvdW50OiBudW1iZXIgPSAwO1xuICBjb3VudFNpbmdsZUFycmF5ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1zY3JvbGwtbnVtYmVyJyk7XG4gIH1cblxuICBnZW5lcmF0ZU1heE51bWJlckFycmF5KCk6IHZvaWQge1xuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLm56T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuZXJhdGVNYXhOdW1iZXJBcnJheSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpPdmVyZmxvd0NvdW50LCBuekNvdW50IH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekNvdW50ICYmIHR5cGVvZiBuekNvdW50LmN1cnJlbnRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuY291bnQgPSBNYXRoLm1heCgwLCBuekNvdW50LmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLmNvdW50QXJyYXkgPSB0aGlzLmNvdW50XG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgLm1hcChpdGVtID0+ICtpdGVtKTtcbiAgICB9XG4gICAgaWYgKG56T3ZlcmZsb3dDb3VudCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZU1heE51bWJlckFycmF5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=