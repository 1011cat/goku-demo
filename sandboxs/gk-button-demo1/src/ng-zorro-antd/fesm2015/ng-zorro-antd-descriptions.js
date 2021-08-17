import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, TemplateRef, Input, ChangeDetectorRef, Optional, ContentChildren, NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { __decorate, __metadata } from 'tslib';
import { InputNumber, InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, merge } from 'rxjs';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warn } from 'ng-zorro-antd/core/logger';
import { NzBreakpointEnum, gridResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { takeUntil, startWith, switchMap, auditTime, tap } from 'rxjs/operators';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/cdk/bidi';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';

function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c0 = ["*"];
function NzDescriptionsComponent_div_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzDescriptionsComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzExtra);
} }
function NzDescriptionsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzExtra);
} }
function NzDescriptionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_div_0_div_1_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_div_0_div_2_Template, 2, 1, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzExtra);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 14);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", 15);
    ɵngcc0.ɵɵtemplate(6, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_ng_template_6_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r11.span);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r13.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(3).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11.title, " ");
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td", 14);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_td_1_Template, 2, 1, "td", 17);
    ɵngcc0.ɵɵelementStart(2, "td", 18);
    ɵngcc0.ɵɵtemplate(3, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r11.title);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r11.span * 2 - 1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r11.content);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_1_Template, 7, 5, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r10.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r10.nzBordered);
} }
function NzDescriptionsComponent_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tr", 10);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_ng_container_1_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", row_r8);
} }
function NzDescriptionsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_4_tr_1_Template, 2, 1, "tr", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r32 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r32.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 14);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r30 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r32.span);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r30.nzColon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r32.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 12);
    ɵngcc0.ɵɵelementStart(2, "div", 13);
    ɵngcc0.ɵɵelementStart(3, "span", 15);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_ng_template_4_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r36.span);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r36.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 10);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_2_Template, 5, 4, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 10);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_ng_container_4_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r28);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r28);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_ng_container_1_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r25.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r44 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r44.title, " ");
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 19);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r44.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", item_r44.title);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "td", 18);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_ng_template_2_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("colSpan", item_r48.span);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", item_r48.content);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 10);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "tr", 10);
    ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r40);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", row_r40);
} }
function NzDescriptionsComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r26.itemMatrix);
} }
function NzDescriptionsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDescriptionsComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzDescriptionsComponent_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.nzBordered);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzBordered);
} }
class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
        this.inputChange$ = new Subject();
    }
    ngOnChanges() {
        this.inputChange$.next();
    }
    ngOnDestroy() {
        this.inputChange$.complete();
    }
}
NzDescriptionsItemComponent.ɵfac = function NzDescriptionsItemComponent_Factory(t) { return new (t || NzDescriptionsItemComponent)(); };
NzDescriptionsItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDescriptionsItemComponent, selectors: [["nz-descriptions-item"]], viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { nzSpan: "nzSpan", nzTitle: "nzTitle" }, exportAs: ["nzDescriptionsItem"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzDescriptionsItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzDescriptionsItemComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    nzSpan: [{ type: Input }],
    nzTitle: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'descriptions';
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
class NzDescriptionsComponent {
    constructor(nzConfigService, cdr, breakpointService, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzBordered = false;
        this.nzLayout = 'horizontal';
        this.nzColumn = defaultColumnMap;
        this.nzSize = 'default';
        this.nzTitle = '';
        this.nzColon = true;
        this.itemMatrix = [];
        this.realColumn = 3;
        this.dir = 'ltr';
        this.breakpoint = NzBreakpointEnum.md;
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.prepareMatrix();
        }
    }
    ngAfterContentInit() {
        const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
        merge(contentChange$, contentChange$.pipe(switchMap(() => merge(...this.items.map(i => i.inputChange$)).pipe(auditTime(16)))), this.breakpointService.subscribe(gridResponsiveMap).pipe(tap(bp => (this.breakpoint = bp))))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     */
    prepareMatrix() {
        if (!this.items) {
            return;
        }
        let currentRow = [];
        let width = 0;
        const column = (this.realColumn = this.getColumn());
        const items = this.items.toArray();
        const length = items.length;
        const matrix = [];
        const flushRow = () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        };
        for (let i = 0; i < length; i++) {
            const item = items[i];
            const { nzTitle: title, content, nzSpan: span } = item;
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column) {
                    warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else if (i === length - 1) {
                currentRow.push({ title, content, span: column - (width - span) });
                flushRow();
            }
            else {
                currentRow.push({ title, content, span });
            }
        }
        this.itemMatrix = matrix;
    }
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.breakpoint];
        }
        return this.nzColumn;
    }
}
NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) { return new (t || NzDescriptionsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzBreakpointService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Directionality, 8)); };
NzDescriptionsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDescriptionsComponent, selectors: [["nz-descriptions"]], contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, hostAttrs: [1, "ant-descriptions"], hostVars: 8, hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBordered: "nzBordered", nzLayout: "nzLayout", nzColumn: "nzColumn", nzSize: "nzSize", nzTitle: "nzTitle", nzColon: "nzColon", nzExtra: "nzExtra" }, exportAs: ["nzDescriptions"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 3, consts: [["class", "ant-descriptions-header", 4, "ngIf"], [1, "ant-descriptions-view"], [4, "ngIf"], [1, "ant-descriptions-header"], ["class", "ant-descriptions-title", 4, "ngIf"], ["class", "ant-descriptions-extra", 4, "ngIf"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-extra"], ["class", "ant-descriptions-row", 4, "ngFor", "ngForOf"], [1, "ant-descriptions-row"], [4, "ngFor", "ngForOf"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], ["class", "ant-descriptions-item-label", 4, "nzStringTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], [1, "ant-descriptions-item-label", 3, "colSpan"]], template: function NzDescriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzDescriptionsComponent_div_0_Template, 3, 2, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "table");
        ɵngcc0.ɵɵelementStart(3, "tbody");
        ɵngcc0.ɵɵtemplate(4, NzDescriptionsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(5, NzDescriptionsComponent_ng_container_5_Template, 3, 2, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzExtra);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLayout === "vertical");
    } }, directives: [ɵngcc4.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc4.NgForOf, ɵngcc4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzDescriptionsComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzDescriptionsComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
    nzBordered: [{ type: Input }],
    nzLayout: [{ type: Input }],
    nzColumn: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzExtra: [{ type: Input }],
    nzColon: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    WithConfig(),
    __metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzColumn", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDescriptionsComponent.prototype, "nzSize", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDescriptionsComponent.prototype, "nzColon", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions-item',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { nzSpan: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], content: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions',
                exportAs: 'nzDescriptions',
                preserveWhitespaces: false,
                template: `
    <div *ngIf="nzTitle || nzExtra" class="ant-descriptions-header">
      <div *ngIf="nzTitle" class="ant-descriptions-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div *ngIf="nzExtra" class="ant-descriptions-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    </div>
    <div class="ant-descriptions-view">
      <table>
        <tbody>
          <ng-container *ngIf="nzLayout === 'horizontal'">
            <tr class="ant-descriptions-row" *ngFor="let row of itemMatrix; let i = index">
              <ng-container *ngFor="let item of row; let isLast = last">
                <!-- Horizontal & NOT Bordered -->
                <ng-container *ngIf="!nzBordered">
                  <td class="ant-descriptions-item" [colSpan]="item.span">
                    <div class="ant-descriptions-item-container">
                      <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                        <ng-container *nzStringTemplateOutlet="item.title">
                          {{ item.title }}
                        </ng-container>
                      </span>
                      <span class="ant-descriptions-item-content">
                        <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                      </span>
                    </div>
                  </td>
                </ng-container>
                <!-- Horizontal & Bordered -->
                <ng-container *ngIf="nzBordered">
                  <td class="ant-descriptions-item-label" *nzStringTemplateOutlet="item.title">
                    <ng-container *nzStringTemplateOutlet="item.title">
                      {{ item.title }}
                    </ng-container>
                  </td>
                  <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                    <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                  </td>
                </ng-container>
              </ng-container>
            </tr>
          </ng-container>

          <ng-container *ngIf="nzLayout === 'vertical'">
            <!-- Vertical & NOT Bordered -->
            <ng-container *ngIf="!nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                        </span>
                      </div>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
            <!-- Vertical & Bordered -->
            <ng-container *ngIf="nzBordered">
              <ng-container *ngFor="let row of itemMatrix; let i = index">
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  </ng-container>
                </tr>
                <tr class="ant-descriptions-row">
                  <ng-container *ngFor="let item of row; let isLast = last">
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                    </td>
                  </ng-container>
                </tr>
              </ng-container>
            </ng-container>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
                host: {
                    class: 'ant-descriptions',
                    '[class.ant-descriptions-bordered]': 'nzBordered',
                    '[class.ant-descriptions-middle]': 'nzSize === "middle"',
                    '[class.ant-descriptions-small]': 'nzSize === "small"',
                    '[class.ant-descriptions-rtl]': 'dir === "rtl"'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzBreakpointService }, { type: ɵngcc3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzBordered: [{
            type: Input
        }], nzLayout: [{
            type: Input
        }], nzColumn: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzColon: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [NzDescriptionsItemComponent]
        }], nzExtra: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDescriptionsModule {
}
NzDescriptionsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDescriptionsModule });
NzDescriptionsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDescriptionsModule_Factory(t) { return new (t || NzDescriptionsModule)(); }, imports: [[BidiModule, CommonModule, NzOutletModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDescriptionsModule, { declarations: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; }, imports: function () { return [BidiModule, CommonModule, NzOutletModule, PlatformModule]; }, exports: function () { return [NzDescriptionsComponent, NzDescriptionsItemComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDescriptionsModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzOutletModule, PlatformModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzDescriptionsComponent, NzDescriptionsItemComponent, NzDescriptionsModule };

//# sourceMappingURL=ng-zorro-antd-descriptions.js.map