import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation, ElementRef, Renderer2, ContentChild, ViewChild, NgZone, ChangeDetectorRef, ContentChildren, Directive, Optional, HostBinding, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, defer, of, merge, BehaviorSubject } from 'rxjs';
import { take, switchMap, takeUntil } from 'rxjs/operators';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/avatar';
import * as ɵngcc3 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc4 from 'ng-zorro-antd/empty';
import * as ɵngcc5 from '@angular/cdk/bidi';
import * as ɵngcc6 from 'ng-zorro-antd/spin';
import * as ɵngcc7 from 'ng-zorro-antd/grid';

const _c0 = ["*"];
function NzListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-avatar", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSrc", ctx_r0.nzSrc);
} }
function NzListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nzSrc"]);
} }
function NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-list-item-meta-avatar", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSrc", ctx_r0.avatarStr);
} }
function NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-item-meta-avatar");
    ɵngcc0.ɵɵelementContainer(1, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.avatarTpl);
} }
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzTitle);
} }
function NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-item-meta-title");
    ɵngcc0.ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzDescription);
} }
function NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-item-meta-description");
    ɵngcc0.ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzDescription);
} }
function NzListItemMetaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, NzListItemMetaComponent_div_3_nz_list_item_meta_title_1_Template, 2, 1, "nz-list-item-meta-title", 1);
    ɵngcc0.ɵɵtemplate(2, NzListItemMetaComponent_div_3_nz_list_item_meta_description_2_Template, 2, 1, "nz-list-item-meta-description", 1);
    ɵngcc0.ɵɵprojection(3, 1);
    ɵngcc0.ɵɵprojection(4, 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzTitle && !ctx_r2.titleComponent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzDescription && !ctx_r2.descriptionComponent);
} }
const _c1 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
const _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) { }
function NzListItemActionsComponent_li_0_em_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "em", 3);
} }
function NzListItemActionsComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵtemplate(1, NzListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵngcc0.ɵɵtemplate(2, NzListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", i_r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !last_r2);
} }
function NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzListComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzListComponent_ng_template_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r9.nzRenderItem)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c4, item_r10, index_r11));
} }
function NzListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, NzListComponent_ng_template_0_ng_container_1_Template, 2, 5, "ng-container", 8);
    ɵngcc0.ɵɵprojection(2, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.nzDataSource);
} }
function NzListComponent_nz_list_header_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r13.nzHeader);
} }
function NzListComponent_nz_list_header_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-header");
    ɵngcc0.ɵɵtemplate(1, NzListComponent_nz_list_header_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzHeader);
} }
function NzListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} if (rf & 2) {
    ɵngcc0.ɵɵstyleProp("min-height", 53, "px");
} }
function NzListComponent_div_7_div_1_ng_template_1_Template(rf, ctx) { }
function NzListComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, NzListComponent_div_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzSpan", ctx_r14.nzGrid.span || null)("nzXs", ctx_r14.nzGrid.xs || null)("nzSm", ctx_r14.nzGrid.sm || null)("nzMd", ctx_r14.nzGrid.md || null)("nzLg", ctx_r14.nzGrid.lg || null)("nzXl", ctx_r14.nzGrid.xl || null)("nzXXl", ctx_r14.nzGrid.xxl || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r14.nzRenderItem)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c4, item_r15, index_r16));
} }
function NzListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, NzListComponent_div_7_div_1_Template, 2, 12, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzGutter", ctx_r4.nzGrid.gutter || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.nzDataSource);
} }
function NzListComponent_nz_list_empty_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-list-empty", 14);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzNoResult", ctx_r5.nzNoResult);
} }
function NzListComponent_nz_list_footer_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r18.nzFooter);
} }
function NzListComponent_nz_list_footer_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-footer");
    ɵngcc0.ɵɵtemplate(1, NzListComponent_nz_list_footer_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.nzFooter);
} }
function NzListComponent_ng_template_11_Template(rf, ctx) { }
function NzListComponent_nz_list_pagination_13_ng_template_1_Template(rf, ctx) { }
function NzListComponent_nz_list_pagination_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-list-pagination");
    ɵngcc0.ɵɵtemplate(1, NzListComponent_nz_list_pagination_13_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.nzPagination);
} }
const _c5 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
const _c6 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
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
const _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
const _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
class NzListItemMetaTitleComponent {
}
NzListItemMetaTitleComponent.ɵfac = function NzListItemMetaTitleComponent_Factory(t) { return new (t || NzListItemMetaTitleComponent)(); };
NzListItemMetaTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaTitleComponent, selectors: [["nz-list-item-meta-title"]], exportAs: ["nzListItemMetaTitle"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-title"]], template: function NzListItemMetaTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "h4", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
class NzListItemMetaDescriptionComponent {
}
NzListItemMetaDescriptionComponent.ɵfac = function NzListItemMetaDescriptionComponent_Factory(t) { return new (t || NzListItemMetaDescriptionComponent)(); };
NzListItemMetaDescriptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaDescriptionComponent, selectors: [["nz-list-item-meta-description"]], exportAs: ["nzListItemMetaDescription"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-description"]], template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
class NzListItemMetaAvatarComponent {
}
NzListItemMetaAvatarComponent.ɵfac = function NzListItemMetaAvatarComponent_Factory(t) { return new (t || NzListItemMetaAvatarComponent)(); };
NzListItemMetaAvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaAvatarComponent, selectors: [["nz-list-item-meta-avatar"]], inputs: { nzSrc: "nzSrc" }, exportAs: ["nzListItemMetaAvatar"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]], template: function NzListItemMetaAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1);
        ɵngcc0.ɵɵtemplate(2, NzListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSrc);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSrc);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzAvatarComponent], encapsulation: 2, changeDetection: 0 });
NzListItemMetaAvatarComponent.propDecorators = {
    nzSrc: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzListItemMetaComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    set nzAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
}
NzListItemMetaComponent.ɵfac = function NzListItemMetaComponent_Factory(t) { return new (t || NzListItemMetaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzListItemMetaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaComponent, selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemMetaDescriptionComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemMetaTitleComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.descriptionComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.titleComponent = _t.first);
    } }, inputs: { nzAvatar: "nzAvatar", nzTitle: "nzTitle", nzDescription: "nzDescription" }, exportAs: ["nzListItemMeta"], ngContentSelectors: _c2, decls: 4, vars: 3, consts: [[3, "nzSrc", 4, "ngIf"], [4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [3, "nzSrc"], [3, "ngTemplateOutlet"], [1, "ant-list-item-meta-content"], [4, "nzStringTemplateOutlet"]], template: function NzListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, NzListItemMetaComponent_nz_list_item_meta_avatar_0_Template, 1, 1, "nz-list-item-meta-avatar", 0);
        ɵngcc0.ɵɵtemplate(1, NzListItemMetaComponent_nz_list_item_meta_avatar_1_Template, 2, 1, "nz-list-item-meta-avatar", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵtemplate(3, NzListItemMetaComponent_div_3_Template, 5, 2, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.avatarStr);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.avatarTpl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent);
    } }, directives: [ɵngcc1.NgIf, NzListItemMetaAvatarComponent, ɵngcc1.NgTemplateOutlet, NzListItemMetaTitleComponent, ɵngcc3.NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent], encapsulation: 2, changeDetection: 0 });
NzListItemMetaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzListItemMetaComponent.propDecorators = {
    nzAvatar: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    descriptionComponent: [{ type: ContentChild, args: [NzListItemMetaDescriptionComponent,] }],
    titleComponent: [{ type: ContentChild, args: [NzListItemMetaTitleComponent,] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzListItemExtraComponent {
    constructor() { }
}
NzListItemExtraComponent.ɵfac = function NzListItemExtraComponent_Factory(t) { return new (t || NzListItemExtraComponent)(); };
NzListItemExtraComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemExtraComponent, selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]], hostAttrs: [1, "ant-list-item-extra"], exportAs: ["nzListItemExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemExtraComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzListItemExtraComponent.ctorParameters = () => [];
class NzListItemActionComponent {
    constructor() { }
}
NzListItemActionComponent.ɵfac = function NzListItemActionComponent_Factory(t) { return new (t || NzListItemActionComponent)(); };
NzListItemActionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemActionComponent, selectors: [["nz-list-item-action"]], viewQuery: function NzListItemActionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzListItemAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListItemActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzListItemActionComponent.ctorParameters = () => [];
NzListItemActionComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
class NzListItemActionsComponent {
    constructor(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer(() => {
            if (this.nzListItemActions) {
                return of(null);
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.contentChildrenChanges$));
        });
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if (this.nzActions.length) {
                this.actions = this.nzActions;
            }
            else {
                this.actions = this.nzListItemActions.map(action => action.templateRef);
            }
            this.cdr.detectChanges();
        });
    }
    ngOnChanges() {
        this.inputActionChanges$.next(null);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzListItemActionsComponent.ɵfac = function NzListItemActionsComponent_Factory(t) { return new (t || NzListItemActionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzListItemActionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemActionsComponent, selectors: [["ul", "nz-list-item-actions", ""]], contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemActionComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
    } }, hostAttrs: [1, "ant-list-item-action"], inputs: { nzActions: "nzActions" }, exportAs: ["nzListItemActions"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c3, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]], template: function NzListItemActionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.actions);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
NzListItemActionsComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef }
];
NzListItemActionsComponent.propDecorators = {
    nzActions: [{ type: Input }],
    nzListItemActions: [{ type: ContentChildren, args: [NzListItemActionComponent,] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzListEmptyComponent {
}
NzListEmptyComponent.ɵfac = function NzListEmptyComponent_Factory(t) { return new (t || NzListEmptyComponent)(); };
NzListEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListEmptyComponent, selectors: [["nz-list-empty"]], hostAttrs: [1, "ant-list-empty-text"], inputs: { nzNoResult: "nzNoResult" }, exportAs: ["nzListHeader"], decls: 1, vars: 2, consts: [[3, "nzComponentName", "specificContent"]], template: function NzListEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "nz-embed-empty", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx.nzNoResult);
    } }, directives: [ɵngcc4.NzEmbedEmptyComponent], encapsulation: 2, changeDetection: 0 });
NzListEmptyComponent.propDecorators = {
    nzNoResult: [{ type: Input }]
};
class NzListHeaderComponent {
}
NzListHeaderComponent.ɵfac = function NzListHeaderComponent_Factory(t) { return new (t || NzListHeaderComponent)(); };
NzListHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListHeaderComponent, selectors: [["nz-list-header"]], hostAttrs: [1, "ant-list-header"], exportAs: ["nzListHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
class NzListFooterComponent {
}
NzListFooterComponent.ɵfac = function NzListFooterComponent_Factory(t) { return new (t || NzListFooterComponent)(); };
NzListFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListFooterComponent, selectors: [["nz-list-footer"]], hostAttrs: [1, "ant-list-footer"], exportAs: ["nzListFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
class NzListPaginationComponent {
}
NzListPaginationComponent.ɵfac = function NzListPaginationComponent_Factory(t) { return new (t || NzListPaginationComponent)(); };
NzListPaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListPaginationComponent, selectors: [["nz-list-pagination"]], hostAttrs: [1, "ant-list-pagination"], exportAs: ["nzListPagination"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
class NzListLoadMoreDirective {
}
NzListLoadMoreDirective.ɵfac = function NzListLoadMoreDirective_Factory(t) { return new (t || NzListLoadMoreDirective)(); };
NzListLoadMoreDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzListLoadMoreDirective, selectors: [["nz-list-load-more"]], exportAs: ["nzListLoadMoreDirective"] });
class NzListGridDirective {
}
NzListGridDirective.ɵfac = function NzListGridDirective_Factory(t) { return new (t || NzListGridDirective)(); };
NzListGridDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzListGridDirective, selectors: [["nz-list", "nzGrid", ""]], hostAttrs: [1, "ant-list-grid"] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzListComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.nzBordered = false;
        this.nzGrid = '';
        this.nzItemLayout = 'horizontal';
        this.nzRenderItem = null;
        this.nzLoading = false;
        this.nzLoadMore = null;
        this.nzSize = 'default';
        this.nzSplit = true;
        this.hasSomethingAfterLastItem = false;
        this.dir = 'ltr';
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-list');
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    getSomethingAfterLastItem() {
        return !!(this.nzLoadMore ||
            this.nzPagination ||
            this.nzFooter ||
            this.nzListFooterComponent ||
            this.nzListPaginationComponent ||
            this.nzListLoadMoreDirective);
    }
    ngOnChanges(changes) {
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterContentInit() {
        this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
    }
}
NzListComponent.ɵfac = function NzListComponent_Factory(t) { return new (t || NzListComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8)); };
NzListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListComponent, selectors: [["nz-list"], ["", "nz-list", ""]], contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListFooterComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListPaginationComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListLoadMoreDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzListFooterComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzListPaginationComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
    } }, hostVars: 16, hostBindings: function NzListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
    } }, inputs: { nzBordered: "nzBordered", nzGrid: "nzGrid", nzItemLayout: "nzItemLayout", nzRenderItem: "nzRenderItem", nzLoading: "nzLoading", nzLoadMore: "nzLoadMore", nzSize: "nzSize", nzSplit: "nzSplit", nzDataSource: "nzDataSource", nzHeader: "nzHeader", nzFooter: "nzFooter", nzPagination: "nzPagination", nzNoResult: "nzNoResult" }, exportAs: ["nzList"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c6, decls: 15, vars: 9, consts: [["itemsTpl", ""], [4, "ngIf"], [3, "nzSpinning"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], [3, "nzNoResult", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "nzNoResult"]], template: function NzListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c5);
        ɵngcc0.ɵɵtemplate(0, NzListComponent_ng_template_0_Template, 3, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzListComponent_nz_list_header_2_Template, 2, 1, "nz-list-header", 1);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementStart(4, "nz-spin", 2);
        ɵngcc0.ɵɵelementContainerStart(5);
        ɵngcc0.ɵɵtemplate(6, NzListComponent_div_6_Template, 1, 2, "div", 3);
        ɵngcc0.ɵɵtemplate(7, NzListComponent_div_7_Template, 2, 2, "div", 4);
        ɵngcc0.ɵɵtemplate(8, NzListComponent_nz_list_empty_8_Template, 1, 1, "nz-list-empty", 5);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(9, NzListComponent_nz_list_footer_9_Template, 2, 1, "nz-list-footer", 1);
        ɵngcc0.ɵɵprojection(10, 1);
        ɵngcc0.ɵɵtemplate(11, NzListComponent_ng_template_11_Template, 0, 0, "ng-template", 6);
        ɵngcc0.ɵɵprojection(12, 2);
        ɵngcc0.ɵɵtemplate(13, NzListComponent_nz_list_pagination_13_Template, 2, 1, "nz-list-pagination", 1);
        ɵngcc0.ɵɵprojection(14, 3);
    } if (rf & 2) {
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzHeader);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzSpinning", ctx.nzLoading);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzGrid && ctx.nzDataSource)("ngIfElse", _r0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzFooter);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.nzLoadMore);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPagination);
    } }, directives: [ɵngcc1.NgIf, ɵngcc6.NzSpinComponent, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, NzListHeaderComponent, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc7.NzRowDirective, ɵngcc7.NzColDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent], encapsulation: 2, changeDetection: 0 });
NzListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzListComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzGrid: [{ type: Input }],
    nzHeader: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzItemLayout: [{ type: Input }],
    nzRenderItem: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzLoadMore: [{ type: Input }],
    nzPagination: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzSplit: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzListFooterComponent: [{ type: ContentChild, args: [NzListFooterComponent,] }],
    nzListPaginationComponent: [{ type: ContentChild, args: [NzListPaginationComponent,] }],
    nzListLoadMoreDirective: [{ type: ContentChild, args: [NzListLoadMoreDirective,] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzBordered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzListComponent.prototype, "nzSplit", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzListItemComponent {
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
NzListItemComponent.ɵfac = function NzListItemComponent_Factory(t) { return new (t || NzListItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(NzListComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzListItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemComponent, selectors: [["nz-list-item"], ["", "nz-list-item", ""]], contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzListItemExtraComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
    } }, hostVars: 2, hostBindings: function NzListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
    } }, inputs: { nzActions: "nzActions", nzExtra: "nzExtra", nzNoFlex: "nzNoFlex", nzContent: "nzContent" }, exportAs: ["nzListItem"], ngContentSelectors: _c8, decls: 9, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["nz-list-item-actions", "", 3, "nzActions", 4, "ngIf"], ["nz-list-item-actions", "", 3, "nzActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]], template: function NzListItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c7);
        ɵngcc0.ɵɵtemplate(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(6, NzListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(8, NzListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
    } if (rf & 2) {
        const _r6 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(8);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r6);
    } }, directives: [ɵngcc1.NgIf, NzListItemActionsComponent, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc1.NgTemplateOutlet, NzListItemExtraComponent], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaTitleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-title',
                exportAs: 'nzListItemMetaTitle',
                template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaDescriptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-description',
                exportAs: 'nzListItemMetaDescription',
                template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-avatar',
                exportAs: 'nzListItemMetaAvatar',
                template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="nzSrc" [nzSrc]="nzSrc"></nz-avatar>
      <ng-content *ngIf="!nzSrc"></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { nzSrc: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta, [nz-list-item-meta]',
                exportAs: 'nzListItemMeta',
                template: `
    <!--Old API Start-->
    <nz-list-item-meta-avatar *ngIf="avatarStr" [nzSrc]="avatarStr"></nz-list-item-meta-avatar>
    <nz-list-item-meta-avatar *ngIf="avatarTpl">
      <ng-container [ngTemplateOutlet]="avatarTpl"></ng-container>
    </nz-list-item-meta-avatar>
    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar"></ng-content>

    <div *ngIf="nzTitle || nzDescription || descriptionComponent || titleComponent" class="ant-list-item-meta-content">
      <!--Old API Start-->
      <nz-list-item-meta-title *ngIf="nzTitle && !titleComponent">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </nz-list-item-meta-title>
      <nz-list-item-meta-description *ngIf="nzDescription && !descriptionComponent">
        <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
      </nz-list-item-meta-description>
      <!--Old API End-->

      <ng-content select="nz-list-item-meta-title"></ng-content>
      <ng-content select="nz-list-item-meta-description"></ng-content>
    </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzAvatar: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], descriptionComponent: [{
            type: ContentChild,
            args: [NzListItemMetaDescriptionComponent]
        }], titleComponent: [{
            type: ContentChild,
            args: [NzListItemMetaTitleComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemExtraComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-extra, [nz-list-item-extra]',
                exportAs: 'nzListItemExtra',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-item-extra'
                }
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemActionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-action',
                exportAs: 'nzListItemAction',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template><ng-content></ng-content></ng-template> `
            }]
    }], function () { return []; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ul[nz-list-item-actions]',
                exportAs: 'nzListItemActions',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
                host: {
                    class: 'ant-list-item-action'
                }
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzActions: [{
            type: Input
        }], nzListItemActions: [{
            type: ContentChildren,
            args: [NzListItemActionComponent]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListEmptyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-empty',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
                host: {
                    class: 'ant-list-empty-text'
                }
            }]
    }], null, { nzNoResult: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-header',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-header'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListFooterComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-footer',
                exportAs: 'nzListFooter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-footer'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-pagination',
                exportAs: 'nzListPagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-pagination'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListLoadMoreDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-list-load-more',
                exportAs: 'nzListLoadMoreDirective'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListGridDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-list[nzGrid]',
                host: {
                    class: 'ant-list-grid'
                }
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list, [nz-list]',
                exportAs: 'nzList',
                template: `
    <ng-template #itemsTpl>
      <div class="ant-list-items">
        <ng-container *ngFor="let item of nzDataSource; let index = index">
          <ng-template [ngTemplateOutlet]="nzRenderItem" [ngTemplateOutletContext]="{ $implicit: item, index: index }"></ng-template>
        </ng-container>
        <ng-content></ng-content>
      </div>
    </ng-template>

    <nz-list-header *ngIf="nzHeader">
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
    </nz-list-header>
    <ng-content select="nz-list-header"></ng-content>

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        <div *ngIf="nzLoading && nzDataSource && nzDataSource.length === 0" [style.min-height.px]="53"></div>
        <div *ngIf="nzGrid && nzDataSource; else itemsTpl" nz-row [nzGutter]="nzGrid.gutter || null">
          <div
            nz-col
            [nzSpan]="nzGrid.span || null"
            [nzXs]="nzGrid.xs || null"
            [nzSm]="nzGrid.sm || null"
            [nzMd]="nzGrid.md || null"
            [nzLg]="nzGrid.lg || null"
            [nzXl]="nzGrid.xl || null"
            [nzXXl]="nzGrid.xxl || null"
            *ngFor="let item of nzDataSource; let index = index"
          >
            <ng-template [ngTemplateOutlet]="nzRenderItem" [ngTemplateOutletContext]="{ $implicit: item, index: index }"></ng-template>
          </div>
        </div>
        <nz-list-empty *ngIf="!nzLoading && nzDataSource && nzDataSource.length === 0" [nzNoResult]="nzNoResult"></nz-list-empty>
      </ng-container>
    </nz-spin>

    <nz-list-footer *ngIf="nzFooter">
      <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
    </nz-list-footer>
    <ng-content select="nz-list-footer, [nz-list-footer]"></ng-content>

    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content select="nz-list-load-more, [nz-list-load-more]"></ng-content>

    <nz-list-pagination *ngIf="nzPagination">
      <ng-template [ngTemplateOutlet]="nzPagination"></ng-template>
    </nz-list-pagination>
    <ng-content select="nz-list-pagination, [nz-list-pagination]"></ng-content>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-list-rtl]': `dir === 'rtl'`,
                    '[class.ant-list-vertical]': 'nzItemLayout === "vertical"',
                    '[class.ant-list-lg]': 'nzSize === "large"',
                    '[class.ant-list-sm]': 'nzSize === "small"',
                    '[class.ant-list-split]': 'nzSplit',
                    '[class.ant-list-bordered]': 'nzBordered',
                    '[class.ant-list-loading]': 'nzLoading',
                    '[class.ant-list-something-after-last-item]': 'hasSomethingAfterLastItem'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc5.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBordered: [{
            type: Input
        }], nzGrid: [{
            type: Input
        }], nzItemLayout: [{
            type: Input
        }], nzRenderItem: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzLoadMore: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzSplit: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], nzHeader: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzPagination: [{
            type: Input
        }], nzNoResult: [{
            type: Input
        }], nzListFooterComponent: [{
            type: ContentChild,
            args: [NzListFooterComponent]
        }], nzListPaginationComponent: [{
            type: ContentChild,
            args: [NzListPaginationComponent]
        }], nzListLoadMoreDirective: [{
            type: ContentChild,
            args: [NzListLoadMoreDirective]
        }] }); })();
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
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: NzListComponent }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzActions: [{
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    NzListComponent,
    NzListHeaderComponent,
    NzListFooterComponent,
    NzListPaginationComponent,
    NzListEmptyComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzListItemMetaTitleComponent,
    NzListItemMetaDescriptionComponent,
    NzListItemMetaAvatarComponent,
    NzListItemActionsComponent,
    NzListItemActionComponent,
    NzListItemExtraComponent,
    NzListLoadMoreDirective,
    NzListGridDirective
];
class NzListModule {
}
NzListModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzListModule });
NzListModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzListModule_Factory(t) { return new (t || NzListModule)(); }, imports: [[BidiModule, CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzOutletModule, NzEmptyModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzListModule, { declarations: function () { return [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]; }, imports: function () { return [BidiModule, CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzOutletModule, NzEmptyModule]; }, exports: function () { return [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzSpinModule, NzGridModule, NzAvatarModule, NzOutletModule, NzEmptyModule],
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzListComponent, NzListEmptyComponent, NzListFooterComponent, NzListGridDirective, NzListHeaderComponent, NzListItemActionComponent, NzListItemActionsComponent, NzListItemComponent, NzListItemExtraComponent, NzListItemMetaAvatarComponent, NzListItemMetaComponent, NzListItemMetaDescriptionComponent, NzListItemMetaTitleComponent, NzListLoadMoreDirective, NzListModule, NzListPaginationComponent };

//# sourceMappingURL=ng-zorro-antd-list.js.map