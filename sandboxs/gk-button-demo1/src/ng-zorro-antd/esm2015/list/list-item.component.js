/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzListItemExtraComponent } from './list-item-cell';
import { NzListComponent } from './list.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './list.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './list-item-cell';
import * as ɵngcc4 from 'ng-zorro-antd/core/outlet';

function NzListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ul", 6);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzActions", ctx_r9.nzActions);
} }
function NzListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_ul_0_Template, 1, 1, "ul", 5);
    ɵngcc0.ɵɵprojection(1);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzActions && ctx_r1.nzActions.length > 0);
} }
function NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.nzContent);
} }
function NzListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.nzContent);
} }
function NzListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵtemplate(2, NzListItemComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 7);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzContent);
} }
function NzListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 3);
} }
function NzListItemComponent_ng_template_6_ng_template_0_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzListItemComponent_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵtemplate(1, NzListItemComponent_ng_template_6_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵtemplate(2, NzListItemComponent_ng_template_6_ng_template_2_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵtemplate(3, NzListItemComponent_ng_template_6_ng_template_3_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    const _r4 = ɵngcc0.ɵɵreference(5);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.nzExtra);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzListItemComponent_ng_container_8_ng_template_2_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_ng_template_3_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-item-extra");
    ɵngcc0.ɵɵtemplate(1, NzListItemComponent_ng_container_8_nz_list_item_extra_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r18.nzExtra);
} }
function NzListItemComponent_ng_container_8_ng_template_5_Template(rf, ctx) { }
function NzListItemComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵtemplate(2, NzListItemComponent_ng_container_8_ng_template_2_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵtemplate(3, NzListItemComponent_ng_container_8_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, NzListItemComponent_ng_container_8_nz_list_item_extra_4_Template, 2, 1, "nz-list-item-extra", 7);
    ɵngcc0.ɵɵtemplate(5, NzListItemComponent_ng_container_8_ng_template_5_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    const _r0 = ɵngcc0.ɵɵreference(1);
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.nzExtra);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
const _c0 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
const _c1 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
export class NzListItemComponent {
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzExtra = null;
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.nzExtra);
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
}
NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzListComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzListItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemExtraComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
    } }, hostVars: 2, hostBindings: function NzListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
    } }, inputs: { nzActions: "nzActions", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex", nzContent: "nzContent" }, exportAs: ["nzListItem"], ngContentSelectors: _c1, decls: 9, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"], ["nz-list-item-actions", "", 3, "nzActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]], template: function NzListItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NzListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
    } if (rf & 2) {
        const _r6 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r6);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzListItemActionsComponent, ɵngcc4.NzStringTemplateOutletDirective, ɵngcc2.NgTemplateOutlet, ɵngcc3.NzListItemExtraComponent], encapsulation: 2, changeDetection: 0 });
NzListItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzListComponent },
    { type: ChangeDetectorRef }
];
NzListItemComponent.propDecorators = {
    nzActions: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzNoFlex: [{ type: Input }, { type: HostBinding, args: ['class.ant-list-item-no-flex',] }],
    listItemExtraDirective: [{ type: ContentChild, args: [NzListItemExtraComponent,] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzListItemComponent.prototype, "nzNoFlex", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item, [nz-list-item]',
                exportAs: 'nzListItem',
                template: `
    <ng-template #actionsTpl>
      <ul nz-list-item-actions *ngIf="nzActions && nzActions.length > 0" [nzActions]="nzActions"></ul>
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]"></ng-content>
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]"></ng-content>
      <ng-content></ng-content>
      <ng-container *ngIf="nzContent">
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      </ng-container>
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]"></ng-content>
    </ng-template>
    <ng-template #simpleTpl>
      <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
    </ng-template>

    <ng-container *ngIf="isVerticalAndExtra; else simpleTpl">
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
      </div>
      <nz-list-item-extra *ngIf="nzExtra">
        <ng-template [ngTemplateOutlet]="nzExtra"></ng-template>
      </nz-list-item-extra>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
    </ng-container>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.NzListComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzActions: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }], nzContent: [{
            type: Input
        }], listItemExtraDirective: [{
            type: ContentChild,
            args: [NzListItemExtraComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENuRCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUFpQmpDLFlBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFVLFVBQTJCLEVBQVUsR0FBc0I7QUFDOUgsUUFEbUUsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7QUFBQyxRQUFTLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFkcEgsY0FBUyxHQUE2QixFQUFFLENBQUM7QUFDcEQsUUFDVyxZQUFPLEdBQTZCLElBQUksQ0FBQztBQUNwRCxRQUF1RSxhQUFRLEdBQVksS0FBSyxDQUFDO0FBQ2pHLFFBV0ksUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2pFLElBQUUsQ0FBQztBQUNILElBUEUsSUFBSSxrQkFBa0I7QUFBSyxRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9GLElBQUUsQ0FBQztBQUNILElBS0UsZUFBZTtBQUFLLFFBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDekUsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUM1QixZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7K0NBekVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsOEJBQThCLGtCQUN4QyxRQUFRLEVBQUUsWUFBWSxrQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztBQWdDVCxrQkFDRCxtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFO3NCQUF1QixDQUFDLE1BQU0sY0FDaEQ7Ozs7Ozs7aU5BQ0k7QUFBQztBQUE2QyxZQXZEakQsVUFBVTtBQUNWLFlBR0EsU0FBUztBQUNULFlBUU8sZUFBZTtBQUFJLFlBaEIxQixpQkFBaUI7QUFDbEI7QUFBRztBQUdKLHdCQXlERyxLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLLFlBQW9CLFdBQVcsU0FBQyw2QkFBNkI7QUFBTyxxQ0FFekUsWUFBWSxTQUFDLHdCQUF3QjtBQUFNO0FBRnlCO0FBQWEsSUFBeEUsWUFBWSxFQUFFO0FBQUU7QUFBdUMscURBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ2pHO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56RGlyZWN0aW9uVkhUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekxpc3RJdGVtRXh0cmFDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtaXRlbS1jZWxsJztcbmltcG9ydCB7IE56TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0sIFtuei1saXN0LWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUcGw+XG4gICAgICA8dWwgbnotbGlzdC1pdGVtLWFjdGlvbnMgKm5nSWY9XCJuekFjdGlvbnMgJiYgbnpBY3Rpb25zLmxlbmd0aCA+IDBcIiBbbnpBY3Rpb25zXT1cIm56QWN0aW9uc1wiPjwvdWw+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1saXN0LWl0ZW0tYWN0aW9ucywgW256LWxpc3QtaXRlbS1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRwbD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm56LWxpc3QtaXRlbS1tZXRhLCBbbnotbGlzdC1pdGVtLW1ldGFdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56Q29udGVudFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50XCI+e3sgbnpDb250ZW50IH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmFUcGw+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuei1saXN0LWl0ZW0tZXh0cmEsIFtuei1saXN0LWl0ZW0tZXh0cmFdXCI+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNzaW1wbGVUcGw+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpFeHRyYVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNWZXJ0aWNhbEFuZEV4dHJhOyBlbHNlIHNpbXBsZVRwbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWFpblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25zVHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPG56LWxpc3QtaXRlbS1leHRyYSAqbmdJZj1cIm56RXh0cmFcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56RXh0cmFcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uei1saXN0LWl0ZW0tZXh0cmE+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek5vRmxleDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIG56QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBJbnB1dCgpIG56Q29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGlzdC1pdGVtLW5vLWZsZXgnKSBuek5vRmxleDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50KSBsaXN0SXRlbUV4dHJhRGlyZWN0aXZlPzogTnpMaXN0SXRlbUV4dHJhQ29tcG9uZW50O1xuXG4gIHByaXZhdGUgaXRlbUxheW91dD86IE56RGlyZWN0aW9uVkhUeXBlO1xuICBwcml2YXRlIGl0ZW1MYXlvdXQkPzogU3Vic2NyaXB0aW9uO1xuXG4gIGdldCBpc1ZlcnRpY2FsQW5kRXh0cmEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAoISF0aGlzLmxpc3RJdGVtRXh0cmFEaXJlY3RpdmUgfHwgISF0aGlzLm56RXh0cmEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBwYXJlbnRDb21wOiBOekxpc3RDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0nKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1MYXlvdXQkID0gdGhpcy5wYXJlbnRDb21wLml0ZW1MYXlvdXROb3RpZnkkLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0ID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXRlbUxheW91dCQpIHtcbiAgICAgIHRoaXMuaXRlbUxheW91dCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==