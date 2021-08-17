import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { DOCUMENT, CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, Output, NgZone, ViewChild, ViewContainerRef, Renderer2, Inject, Optional, NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzResizeService } from 'ng-zorro-antd/core/services';
import { isStyleSupport, measure, InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/clipboard';
import * as ɵngcc2 from 'ng-zorro-antd/i18n';
import * as ɵngcc3 from 'ng-zorro-antd/core/trans-button';
import * as ɵngcc4 from 'ng-zorro-antd/tooltip';
import * as ɵngcc5 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc6 from 'ng-zorro-antd/icon';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from 'ng-zorro-antd/input';
import * as ɵngcc9 from 'ng-zorro-antd/core/config';
import * as ɵngcc10 from '@angular/cdk/platform';
import * as ɵngcc11 from 'ng-zorro-antd/core/services';
import * as ɵngcc12 from '@angular/cdk/bidi';

function NzTextCopyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r1);
} }
const _c0 = ["textarea"];
function NzTextEditComponent_button_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", icon_r3);
} }
function NzTextEditComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 2);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick(); });
    ɵngcc0.ɵɵtemplate(1, NzTextEditComponent_button_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzTooltipTitle", ctx_r0.tooltip === null ? null : ctx_r0.tooltip || (ctx_r0.locale == null ? null : ctx_r0.locale.edit));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.icon);
} }
function NzTextEditComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "textarea", 5, 6);
    ɵngcc0.ɵɵlistener("input", function NzTextEditComponent_ng_container_1_Template_textarea_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onInput($event); })("blur", function NzTextEditComponent_ng_container_1_Template_textarea_blur_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.confirm(); })("keydown.esc", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_esc_1_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onCancel(); })("keydown.enter", function NzTextEditComponent_ng_container_1_Template_textarea_keydown_enter_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onEnter($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 7);
    ɵngcc0.ɵɵlistener("click", function NzTextEditComponent_ng_container_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.confirm(); });
    ɵngcc0.ɵɵelement(4, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} }
const _c1 = ["ellipsisContainer"];
const _c2 = ["expandable"];
const _c3 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!content"]);
} }
function NzTypographyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 1);
    ɵngcc0.ɵɵtext(1);
} if (rf & 2) {
    const content_r5 = ctx.content;
    ɵngcc0.ɵɵproperty("ngIf", !content_r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", content_r5, " ");
} }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.nzSuffix);
} }
const _c4 = function (a0) { return { content: a0 }; };
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    const _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(3, _c4, ctx_r7.nzContent));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r13.ellipsisStr);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r14.nzSuffix);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 9, 10);
    ɵngcc0.ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.onExpand(); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.locale == null ? null : ctx_r15.locale.expand);
} }
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", null, 7);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 8);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.isEllipsis);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzSuffix);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.nzExpandable && ctx_r9.isEllipsis);
} }
function NzTypographyComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(3);
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.expanded || !ctx_r2.hasOperationsWithEllipsis && ctx_r2.nzEllipsisRows === 1 && !ctx_r2.hasEllipsisObservers || ctx_r2.canCssEllipsis || ctx_r2.nzSuffix && ctx_r2.expanded)("ngIfElse", _r8);
} }
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-edit", 11);
    ɵngcc0.ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(); return ctx_r19.onEndEditing($event); })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.onStartEditing(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r3.nzContent)("icon", ctx_r3.nzEditIcon)("tooltip", ctx_r3.nzEditTooltip);
} }
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-text-copy", 12);
    ɵngcc0.ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.onTextCopy($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("text", ctx_r4.copyText)("tooltips", ctx_r4.nzCopyTooltips)("icons", ctx_r4.nzCopyIcons);
} }
const _c5 = ["*"];
class NzTextCopyComponent {
    constructor(host, cdr, clipboard, i18n) {
        this.host = host;
        this.cdr = cdr;
        this.clipboard = clipboard;
        this.i18n = i18n;
        this.copied = false;
        this.copyId = -1;
        this.nativeElement = this.host.nativeElement;
        this.copyTooltip = null;
        this.copedTooltip = null;
        this.copyIcon = 'copy';
        this.copedIcon = 'check';
        this.destroy$ = new Subject();
        this.icons = ['copy', 'check'];
        this.textCopy = new EventEmitter();
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.updateTooltips();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { tooltips, icons } = changes;
        if (tooltips) {
            this.updateTooltips();
        }
        if (icons) {
            this.updateIcons();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.copyId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        if (this.copied) {
            return;
        }
        this.copied = true;
        this.cdr.detectChanges();
        const text = this.text;
        this.textCopy.emit(text);
        this.clipboard.copy(text);
        this.onCopied();
    }
    onCopied() {
        clearTimeout(this.copyId);
        this.copyId = setTimeout(() => {
            this.copied = false;
            this.cdr.detectChanges();
        }, 3000);
    }
    updateTooltips() {
        var _a, _b, _c, _d;
        if (this.tooltips === null) {
            this.copedTooltip = null;
            this.copyTooltip = null;
        }
        else if (Array.isArray(this.tooltips)) {
            const [copyTooltip, copedTooltip] = this.tooltips;
            this.copyTooltip = copyTooltip || ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.copy);
            this.copedTooltip = copedTooltip || ((_b = this.locale) === null || _b === void 0 ? void 0 : _b.copied);
        }
        else {
            this.copyTooltip = (_c = this.locale) === null || _c === void 0 ? void 0 : _c.copy;
            this.copedTooltip = (_d = this.locale) === null || _d === void 0 ? void 0 : _d.copied;
        }
        this.cdr.markForCheck();
    }
    updateIcons() {
        const [copyIcon, copedIcon] = this.icons;
        this.copyIcon = copyIcon;
        this.copedIcon = copedIcon;
        this.cdr.markForCheck();
    }
}
NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) { return new (t || NzTextCopyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Clipboard), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService)); };
NzTextCopyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextCopyComponent, selectors: [["nz-text-copy"]], inputs: { icons: "icons", text: "text", tooltips: "tooltips" }, outputs: { textCopy: "textCopy" }, exportAs: ["nzTextCopy"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzTextCopyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener() { return ctx.onClick(); });
        ɵngcc0.ɵɵtemplate(1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-typography-copy-success", ctx.copied);
        ɵngcc0.ɵɵproperty("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
    } }, directives: [ɵngcc3.NzTransButtonDirective, ɵngcc4.NzTooltipDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc6.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTextCopyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Clipboard },
    { type: NzI18nService }
];
NzTextCopyComponent.propDecorators = {
    text: [{ type: Input }],
    tooltips: [{ type: Input }],
    icons: [{ type: Input }],
    textCopy: [{ type: Output }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTextEditComponent {
    constructor(zone, host, cdr, i18n) {
        this.zone = zone;
        this.host = host;
        this.cdr = cdr;
        this.i18n = i18n;
        this.editing = false;
        this.destroy$ = new Subject();
        this.icon = 'edit';
        this.startEditing = new EventEmitter();
        this.endEditing = new EventEmitter(true);
        this.nativeElement = this.host.nativeElement;
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onClick() {
        this.beforeText = this.text;
        this.currentText = this.beforeText;
        this.editing = true;
        this.startEditing.emit();
        this.focusAndSetValue();
    }
    confirm() {
        this.editing = false;
        this.endEditing.emit(this.currentText);
    }
    onInput(event) {
        const target = event.target;
        this.currentText = target.value;
    }
    onEnter(event) {
        event.stopPropagation();
        event.preventDefault();
        this.confirm();
    }
    onCancel() {
        this.currentText = this.beforeText;
        this.confirm();
    }
    focusAndSetValue() {
        this.zone.onStable.pipe(take(1), takeUntil(this.destroy$)).subscribe(() => {
            var _a;
            if ((_a = this.textarea) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.textarea.nativeElement.focus();
                this.textarea.nativeElement.value = this.currentText || '';
                this.autosizeDirective.resizeToFitContent();
                this.cdr.markForCheck();
            }
        });
    }
}
NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) { return new (t || NzTextEditComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService)); };
NzTextEditComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextEditComponent, selectors: [["nz-text-edit"]], viewQuery: function NzTextEditComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(NzAutosizeDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
    } }, inputs: { icon: "icon", text: "text", tooltip: "tooltip" }, outputs: { startEditing: "startEditing", endEditing: "endEditing" }, exportAs: ["nzTextEdit"], decls: 2, vars: 2, consts: [["nz-tooltip", "", "nz-trans-button", "", "class", "ant-typography-edit", 3, "nzTooltipTitle", "click", 4, "ngIf"], [4, "ngIf"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-input", "", "nzAutosize", "", 3, "input", "blur", "keydown.esc", "keydown.enter"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"]], template: function NzTextEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTextEditComponent_button_0_Template, 2, 2, "button", 0);
        ɵngcc0.ɵɵtemplate(1, NzTextEditComponent_ng_container_1_Template, 5, 0, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.editing);
    } }, directives: [ɵngcc7.NgIf, ɵngcc3.NzTransButtonDirective, ɵngcc4.NzTooltipDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc6.NzIconDirective, ɵngcc8.NzInputDirective, ɵngcc8.NzAutosizeDirective], encapsulation: 2, changeDetection: 0 });
NzTextEditComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzTextEditComponent.propDecorators = {
    text: [{ type: Input }],
    icon: [{ type: Input }],
    tooltip: [{ type: Input }],
    startEditing: [{ type: Output }],
    endEditing: [{ type: Output }],
    textarea: [{ type: ViewChild, args: ['textarea', { static: false },] }],
    autosizeDirective: [{ type: ViewChild, args: [NzAutosizeDirective, { static: false },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'typography';
const EXPAND_ELEMENT_CLASSNAME = 'ant-typography-expand';
class NzTypographyComponent {
    constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.platform = platform;
        this.i18n = i18n;
        this.resizeService = resizeService;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCopyable = false;
        this.nzEditable = false;
        this.nzDisabled = false;
        this.nzExpandable = false;
        this.nzEllipsis = false;
        this.nzCopyTooltips = undefined;
        this.nzCopyIcons = ['copy', 'check'];
        this.nzEditTooltip = undefined;
        this.nzEditIcon = 'edit';
        this.nzEllipsisRows = 1;
        this.nzContentChange = new EventEmitter();
        this.nzCopy = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        // This is not a two-way binding output with {@link nzEllipsis}
        this.nzOnEllipsis = new EventEmitter();
        this.expandableBtnElementCache = null;
        this.editing = false;
        this.cssEllipsis = false;
        this.isEllipsis = true;
        this.expanded = false;
        this.ellipsisStr = '...';
        this.dir = 'ltr';
        this.viewInit = false;
        this.rfaId = -1;
        this.destroy$ = new Subject();
        this.windowResizeSubscription = Subscription.EMPTY;
        this.document = document;
    }
    get hasEllipsisObservers() {
        return this.nzOnEllipsis.observers.length > 0;
    }
    get canCssEllipsis() {
        return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
    }
    get hasOperationsWithEllipsis() {
        return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
    }
    get copyText() {
        return (typeof this.nzCopyText === 'string' ? this.nzCopyText : this.nzContent);
    }
    onTextCopy(text) {
        this.nzCopy.emit(text);
    }
    onStartEditing() {
        this.editing = true;
    }
    onEndEditing(text) {
        this.editing = false;
        this.nzContentChange.emit(text);
        if (this.nzContent === text) {
            this.renderOnNextFrame();
        }
        this.cdr.markForCheck();
    }
    onExpand() {
        this.isEllipsis = false;
        this.expanded = true;
        this.nzExpandChange.emit();
        this.nzOnEllipsis.emit(false);
    }
    canUseCSSEllipsis() {
        if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
            return false;
        }
        // make sure {@link nzOnEllipsis} works, will force use JS to calculations
        if (this.hasEllipsisObservers) {
            return false;
        }
        if (this.nzEllipsisRows === 1) {
            return isStyleSupport('textOverflow');
        }
        else {
            return isStyleSupport('webkitLineClamp');
        }
    }
    renderOnNextFrame() {
        cancelRequestAnimationFrame(this.rfaId);
        if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
            return;
        }
        this.rfaId = reqAnimFrame(() => {
            this.syncEllipsis();
        });
    }
    getOriginContentViewRef() {
        const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
            content: this.nzContent
        });
        viewRef.detectChanges();
        return {
            viewRef,
            removeView: () => {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
            }
        };
    }
    syncEllipsis() {
        if (this.cssEllipsis) {
            return;
        }
        const { viewRef, removeView } = this.getOriginContentViewRef();
        const fixedNodes = [this.textCopyRef, this.textEditRef].filter(e => e && e.nativeElement).map(e => e.nativeElement);
        const expandableBtnElement = this.getExpandableBtnElement();
        if (expandableBtnElement) {
            fixedNodes.push(expandableBtnElement);
        }
        const { contentNodes, text, ellipsis } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
        removeView();
        this.ellipsisText = text;
        if (ellipsis !== this.isEllipsis) {
            this.isEllipsis = ellipsis;
            this.nzOnEllipsis.emit(ellipsis);
        }
        const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
        while (ellipsisContainerNativeElement.firstChild) {
            this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
        }
        contentNodes.forEach(n => {
            this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
        });
        this.cdr.markForCheck();
    }
    // Need to create the element for calculation size before view init
    getExpandableBtnElement() {
        if (this.nzExpandable) {
            const expandText = this.locale ? this.locale.expand : '';
            const cache = this.expandableBtnElementCache;
            if (!cache || cache.innerText === expandText) {
                const el = this.document.createElement('a');
                el.className = EXPAND_ELEMENT_CLASSNAME;
                el.innerText = expandText;
                this.expandableBtnElementCache = el;
            }
            return this.expandableBtnElementCache;
        }
        else {
            this.expandableBtnElementCache = null;
            return null;
        }
    }
    renderAndSubscribeWindowResize() {
        if (this.platform.isBrowser) {
            this.windowResizeSubscription.unsubscribe();
            this.cssEllipsis = this.canUseCSSEllipsis();
            this.renderOnNextFrame();
            this.windowResizeSubscription = this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.renderOnNextFrame());
        }
    }
    ngOnInit() {
        var _a;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Text');
            this.cdr.markForCheck();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.viewInit = true;
        this.renderAndSubscribeWindowResize();
    }
    ngOnChanges(changes) {
        const { nzCopyable, nzEditable, nzExpandable, nzEllipsis, nzContent, nzEllipsisRows, nzSuffix } = changes;
        if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
            if (this.nzEllipsis) {
                if (this.expanded) {
                    this.windowResizeSubscription.unsubscribe();
                }
                else {
                    this.renderAndSubscribeWindowResize();
                }
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.expandableBtnElementCache = null;
        this.windowResizeSubscription.unsubscribe();
    }
}
NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) { return new (t || NzTypographyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc9.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc10.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzI18nService), ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc11.NzResizeService), ɵngcc0.ɵɵdirectiveInject(ɵngcc12.Directionality, 8)); };
NzTypographyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTypographyComponent, selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]], viewQuery: function NzTypographyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTextEditComponent, true);
        ɵngcc0.ɵɵviewQuery(NzTextCopyComponent, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, hostVars: 24, hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
        ɵngcc0.ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    } }, inputs: { nzCopyable: "nzCopyable", nzEditable: "nzEditable", nzDisabled: "nzDisabled", nzExpandable: "nzExpandable", nzEllipsis: "nzEllipsis", nzCopyTooltips: "nzCopyTooltips", nzCopyIcons: "nzCopyIcons", nzEditTooltip: "nzEditTooltip", nzEditIcon: "nzEditIcon", nzEllipsisRows: "nzEllipsisRows", nzContent: "nzContent", nzType: "nzType", nzCopyText: "nzCopyText", nzSuffix: "nzSuffix" }, outputs: { nzContentChange: "nzContentChange", nzCopy: "nzCopy", nzExpandChange: "nzExpandChange", nzOnEllipsis: "nzOnEllipsis" }, exportAs: ["nzTypography"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 5, vars: 3, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["jsEllipsis", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "icon", "tooltip", "endEditing", "startEditing"], [3, "text", "tooltips", "icons", "textCopy"]], template: function NzTypographyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 2);
        ɵngcc0.ɵɵtemplate(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.editing);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzEditable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    } }, directives: [ɵngcc7.NgIf, ɵngcc7.NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent], encapsulation: 2, changeDetection: 0 });
NzTypographyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: Platform },
    { type: NzI18nService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NzResizeService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTypographyComponent.propDecorators = {
    nzCopyable: [{ type: Input }],
    nzEditable: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzExpandable: [{ type: Input }],
    nzEllipsis: [{ type: Input }],
    nzCopyTooltips: [{ type: Input }],
    nzCopyIcons: [{ type: Input }],
    nzEditTooltip: [{ type: Input }],
    nzEditIcon: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzEllipsisRows: [{ type: Input }],
    nzType: [{ type: Input }],
    nzCopyText: [{ type: Input }],
    nzSuffix: [{ type: Input }],
    nzContentChange: [{ type: Output }],
    nzCopy: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnEllipsis: [{ type: Output }],
    textEditRef: [{ type: ViewChild, args: [NzTextEditComponent, { static: false },] }],
    textCopyRef: [{ type: ViewChild, args: [NzTextCopyComponent, { static: false },] }],
    ellipsisContainer: [{ type: ViewChild, args: ['ellipsisContainer', { static: false },] }],
    expandableBtn: [{ type: ViewChild, args: ['expandable', { static: false },] }],
    contentTemplate: [{ type: ViewChild, args: ['contentTemplate', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Array)
], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", Object)
], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([
    WithConfig(),
    InputNumber(),
    __metadata("design:type", Number)
], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextCopyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-copy',
                exportAs: 'nzTextCopy',
                template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.Clipboard }, { type: ɵngcc2.NzI18nService }]; }, { icons: [{
            type: Input
        }], textCopy: [{
            type: Output
        }], text: [{
            type: Input
        }], tooltips: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextEditComponent, [{
        type: Component,
        args: [{
                selector: 'nz-text-edit',
                exportAs: 'nzTextEdit',
                template: `
    <button
      *ngIf="!editing"
      nz-tooltip
      nz-trans-button
      class="ant-typography-edit"
      [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="icon; let icon">
        <i nz-icon [nzType]="icon"></i>
      </ng-container>
    </button>
    <ng-container *ngIf="editing">
      <textarea
        #textarea
        nz-input
        nzAutosize
        (input)="onInput($event)"
        (blur)="confirm()"
        (keydown.esc)="onCancel()"
        (keydown.enter)="onEnter($event)"
      ></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <i nz-icon nzType="enter"></i>
      </button>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzI18nService }]; }, { icon: [{
            type: Input
        }], startEditing: [{
            type: Output
        }], endEditing: [{
            type: Output
        }], text: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { static: false }]
        }], autosizeDirective: [{
            type: ViewChild,
            args: [NzAutosizeDirective, { static: false }]
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyComponent, [{
        type: Component,
        args: [{
                selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
                exportAs: 'nzTypography',
                template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template [ngTemplateOutlet]="contentTemplate" [ngTemplateOutletContext]="{ content: nzContent }"></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">{{ locale?.expand }}</a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-typography]': '!editing',
                    '[class.ant-typography-rtl]': 'dir === "rtl"',
                    '[class.ant-typography-edit-content]': 'editing',
                    '[class.ant-typography-secondary]': 'nzType === "secondary"',
                    '[class.ant-typography-warning]': 'nzType === "warning"',
                    '[class.ant-typography-danger]': 'nzType === "danger"',
                    '[class.ant-typography-success]': 'nzType === "success"',
                    '[class.ant-typography-disabled]': 'nzDisabled',
                    '[class.ant-typography-ellipsis]': 'nzEllipsis && !expanded',
                    '[class.ant-typography-ellipsis-single-line]': 'canCssEllipsis && nzEllipsisRows === 1',
                    '[class.ant-typography-ellipsis-multiple-line]': 'canCssEllipsis && nzEllipsisRows > 1',
                    '[style.-webkit-line-clamp]': '(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null'
                }
            }]
    }], function () { return [{ type: ɵngcc9.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc10.Platform }, { type: ɵngcc2.NzI18nService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc11.NzResizeService }, { type: ɵngcc12.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCopyable: [{
            type: Input
        }], nzEditable: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzExpandable: [{
            type: Input
        }], nzEllipsis: [{
            type: Input
        }], nzCopyTooltips: [{
            type: Input
        }], nzCopyIcons: [{
            type: Input
        }], nzEditTooltip: [{
            type: Input
        }], nzEditIcon: [{
            type: Input
        }], nzEllipsisRows: [{
            type: Input
        }], nzContentChange: [{
            type: Output
        }], nzCopy: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnEllipsis: [{
            type: Output
        }], nzContent: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzCopyText: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], textEditRef: [{
            type: ViewChild,
            args: [NzTextEditComponent, { static: false }]
        }], textCopyRef: [{
            type: ViewChild,
            args: [NzTextCopyComponent, { static: false }]
        }], ellipsisContainer: [{
            type: ViewChild,
            args: ['ellipsisContainer', { static: false }]
        }], expandableBtn: [{
            type: ViewChild,
            args: ['expandable', { static: false }]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: false }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTypographyModule {
}
NzTypographyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTypographyModule });
NzTypographyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTypographyModule_Factory(t) { return new (t || NzTypographyModule)(); }, imports: [[
            BidiModule,
            CommonModule,
            NzIconModule,
            NzToolTipModule,
            NzInputModule,
            NzI18nModule,
            NzTransButtonModule,
            ClipboardModule,
            NzOutletModule
        ], PlatformModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTypographyModule, { declarations: function () { return [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]; }, imports: function () { return [BidiModule,
        CommonModule,
        NzIconModule,
        NzToolTipModule,
        NzInputModule,
        NzI18nModule,
        NzTransButtonModule,
        ClipboardModule,
        NzOutletModule]; }, exports: function () { return [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTypographyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    NzIconModule,
                    NzToolTipModule,
                    NzInputModule,
                    NzI18nModule,
                    NzTransButtonModule,
                    ClipboardModule,
                    NzOutletModule
                ],
                exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent, PlatformModule],
                declarations: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTextCopyComponent, NzTextEditComponent, NzTypographyComponent, NzTypographyModule };

//# sourceMappingURL=ng-zorro-antd-typography.js.map