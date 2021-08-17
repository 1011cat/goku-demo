/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Optional, Output, Renderer2, ViewChild } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { takeUntil } from 'rxjs/operators';
import { nzModalAnimations } from './modal-animations';
import { BaseModalContainerComponent } from './modal-container';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/cdk/a11y';
import * as ɵngcc3 from '@angular/cdk/overlay';
import * as ɵngcc4 from 'ng-zorro-antd/core/config';
import * as ɵngcc5 from './modal-types';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc8 from 'ng-zorro-antd/icon';
import * as ɵngcc9 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc10 from '@angular/cdk/portal';
import * as ɵngcc11 from './modal-close.component';
import * as ɵngcc12 from 'ng-zorro-antd/button';
import * as ɵngcc13 from 'ng-zorro-antd/core/wave';
import * as ɵngcc14 from 'ng-zorro-antd/pipes';

const _c0 = ["modalElement"];
function NzModalConfirmContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 16);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_4_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onCloseClick(); });
    ɵngcc0.ɵɵelementEnd();
} }
function NzModalConfirmContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.config.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalConfirmContainerComponent_ng_template_12_Template(rf, ctx) { }
function NzModalConfirmContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r4.config.nzContent, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzModalConfirmContainerComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_15_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.onCancel(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzLoading", !!ctx_r5.config.nzCancelLoading)("disabled", ctx_r5.config.nzCancelDisabled);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r5.config.nzAutofocus === "cancel" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r5.config.nzCancelText || ctx_r5.locale.cancelText, " ");
} }
function NzModalConfirmContainerComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 19);
    ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_button_16_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onOk(); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r6.config.nzOkType)("nzLoading", !!ctx_r6.config.nzOkLoading)("disabled", ctx_r6.config.nzOkDisabled)("nzDanger", ctx_r6.config.nzOkDanger);
    ɵngcc0.ɵɵattribute("cdkFocusInitial", ctx_r6.config.nzAutofocus === "ok" || null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.config.nzOkText || ctx_r6.locale.okText, " ");
} }
export class NzModalConfirmContainerComponent extends BaseModalContainerComponent {
    constructor(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.i18n = i18n;
        this.config = config;
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
}
NzModalConfirmContainerComponent.ɵfac = function NzModalConfirmContainerComponent_Factory(t) { return new (t || NzModalConfirmContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.OverlayRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.ModalOptions), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
NzModalConfirmContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalConfirmContainerComponent, selectors: [["nz-modal-confirm-container"]], viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(CdkPortalOutlet, true);
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 10, hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵsyntheticHostListener("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        ɵngcc0.ɵɵlistener("click", function NzModalConfirmContainerComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); })("mouseup", function NzModalConfirmContainerComponent_mouseup_HostBindingHandler() { return ctx.onMouseup(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        ɵngcc0.ɵɵclassMap(ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        ɵngcc0.ɵɵstyleProp("z-index", ctx.config.nzZIndex);
        ɵngcc0.ɵɵclassProp("ant-modal-wrap-rtl", ctx.dir === "rtl")("ant-modal-centered", ctx.config.nzCentered);
    } }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["nzModalConfirmContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 17, vars: 13, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle", "mousedown"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "nzDanger", "click", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "nzDanger", "click"]], template: function NzModalConfirmContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mousedown", function NzModalConfirmContainerComponent_Template_div_mousedown_0_listener() { return ctx.onMousedown(); });
        ɵngcc0.ɵɵpipe(2, "nzToCssUnit");
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzModalConfirmContainerComponent_button_4_Template, 1, 0, "button", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelement(8, "i", 7);
        ɵngcc0.ɵɵelementStart(9, "span", 8);
        ɵngcc0.ɵɵtemplate(10, NzModalConfirmContainerComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵtemplate(12, NzModalConfirmContainerComponent_ng_template_12_Template, 0, 0, "ng-template", 11);
        ɵngcc0.ɵɵtemplate(13, NzModalConfirmContainerComponent_div_13_Template, 1, 1, "div", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 13);
        ɵngcc0.ɵɵtemplate(15, NzModalConfirmContainerComponent_button_15_Template, 2, 4, "button", 14);
        ɵngcc0.ɵɵtemplate(16, NzModalConfirmContainerComponent_button_16_Template, 2, 6, "button", 15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ɵngcc0.ɵɵpipeBind1(2, 11, ctx.config == null ? null : ctx.config.nzWidth));
        ɵngcc0.ɵɵproperty("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzClosable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.config.nzBodyStyle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("nzType", ctx.config.nzIconType);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isStringContent);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzCancelText !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.config.nzOkText !== null);
    } }, directives: [ɵngcc6.NgClass, ɵngcc6.NgStyle, ɵngcc6.NgIf, ɵngcc7.ɵNzTransitionPatchDirective, ɵngcc8.NzIconDirective, ɵngcc9.NzStringTemplateOutletDirective, ɵngcc10.CdkPortalOutlet, ɵngcc11.NzModalCloseComponent, ɵngcc12.NzButtonComponent, ɵngcc13.NzWaveDirective], pipes: [ɵngcc14.NzToCssUnitPipe], encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
NzModalConfirmContainerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: OverlayRef },
    { type: NzConfigService },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzModalConfirmContainerComponent.propDecorators = {
    portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
    modalElementRef: [{ type: ViewChild, args: ['modalElement', { static: true },] }],
    cancelTriggered: [{ type: Output }],
    okTriggered: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalConfirmContainerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-modal-confirm-container',
                exportAs: 'nzModalConfirmContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i nz-icon [nzType]="config.nzIconType!"></i>
              <span class="ant-modal-confirm-title">
                <ng-container *nzStringTemplateOutlet="config.nzTitle">
                  <span [innerHTML]="config.nzTitle"></span>
                </ng-container>
              </span>
              <div class="ant-modal-confirm-content">
                <ng-template cdkPortalOutlet></ng-template>
                <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
              </div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                *ngIf="config.nzCancelText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
                nz-button
                (click)="onCancel()"
                [nzLoading]="!!config.nzCancelLoading"
                [disabled]="config.nzCancelDisabled"
              >
                {{ config.nzCancelText || locale.cancelText }}
              </button>
              <button
                *ngIf="config.nzOkText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
                nz-button
                [nzType]="config.nzOkType!"
                (click)="onOk()"
                [nzLoading]="!!config.nzOkLoading"
                [disabled]="config.nzOkDisabled"
                [nzDanger]="config.nzOkDanger"
              >
                {{ config.nzOkText || locale.okText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[class.ant-modal-wrap-rtl]': `dir === 'rtl'`,
                    '[class.ant-modal-centered]': 'config.nzCentered',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.FocusTrapFactory }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc3.OverlayRef }, { type: ɵngcc4.NzConfigService }, { type: ɵngcc5.ModalOptions }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { cancelTriggered: [{
            type: Output
        }], okTriggered: [{
            type: Output
        }], portalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: true }]
        }], modalElementRef: [{
            type: ViewChild,
            args: ['modalElement', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29uZmlybS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLWNvbmZpcm0tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGFBQWEsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEU3QyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMkJBQTJC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Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSwgTnpNb2RhbEkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG56TW9kYWxBbmltYXRpb25zIH0gZnJvbSAnLi9tb2RhbC1hbmltYXRpb25zJztcbmltcG9ydCB7IEJhc2VNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1tb2RhbC1jb25maXJtLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpNb2RhbENvbmZpcm1Db250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgICNtb2RhbEVsZW1lbnRcbiAgICAgIHJvbGU9XCJkb2N1bWVudFwiXG4gICAgICBjbGFzcz1cImFudC1tb2RhbFwiXG4gICAgICAobW91c2Vkb3duKT1cIm9uTW91c2Vkb3duKClcIlxuICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLm56Q2xhc3NOYW1lIVwiXG4gICAgICBbbmdTdHlsZV09XCJjb25maWcubnpTdHlsZSFcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbmZpZz8ubnpXaWR0aCEgfCBuelRvQ3NzVW5pdFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjb25maWcubnpDbG9zYWJsZVwiIG56LW1vZGFsLWNsb3NlIChjbGljayk9XCJvbkNsb3NlQ2xpY2soKVwiPjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBbbmdTdHlsZV09XCJjb25maWcubnpCb2R5U3R5bGUhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvbmZpZy5uekljb25UeXBlIVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcubnpUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJjb25maWcubnpUaXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBjZGtQb3J0YWxPdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNTdHJpbmdDb250ZW50XCIgW2lubmVySFRNTF09XCJjb25maWcubnpDb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYnRuc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcubnpDYW5jZWxUZXh0ICE9PSBudWxsXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY29uZmlnLm56QXV0b2ZvY3VzID09PSAnY2FuY2VsJyB8fCBudWxsXCJcbiAgICAgICAgICAgICAgICBuei1idXR0b25cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DYW5jZWwoKVwiXG4gICAgICAgICAgICAgICAgW256TG9hZGluZ109XCIhIWNvbmZpZy5uekNhbmNlbExvYWRpbmdcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25maWcubnpDYW5jZWxEaXNhYmxlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBjb25maWcubnpDYW5jZWxUZXh0IHx8IGxvY2FsZS5jYW5jZWxUZXh0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWcubnpPa1RleHQgIT09IG51bGxcIlxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjb25maWcubnpBdXRvZm9jdXMgPT09ICdvaycgfHwgbnVsbFwiXG4gICAgICAgICAgICAgICAgbnotYnV0dG9uXG4gICAgICAgICAgICAgICAgW256VHlwZV09XCJjb25maWcubnpPa1R5cGUhXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25PaygpXCJcbiAgICAgICAgICAgICAgICBbbnpMb2FkaW5nXT1cIiEhY29uZmlnLm56T2tMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlnLm56T2tEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgW256RGFuZ2VyXT1cImNvbmZpZy5uek9rRGFuZ2VyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IGNvbmZpZy5uek9rVGV4dCB8fCBsb2NhbGUub2tUZXh0IH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtuek1vZGFsQW5pbWF0aW9ucy5tb2RhbENvbnRhaW5lcl0sXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGhvc3Q6IHtcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnW2NsYXNzXSc6ICdjb25maWcubnpXcmFwQ2xhc3NOYW1lID8gXCJhbnQtbW9kYWwtd3JhcCBcIiArIGNvbmZpZy5ueldyYXBDbGFzc05hbWUgOiBcImFudC1tb2RhbC13cmFwXCInLFxuICAgICdbY2xhc3MuYW50LW1vZGFsLXdyYXAtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmFudC1tb2RhbC1jZW50ZXJlZF0nOiAnY29uZmlnLm56Q2VudGVyZWQnLFxuICAgICdbc3R5bGUuekluZGV4XSc6ICdjb25maWcubnpaSW5kZXgnLFxuICAgICdbQC5kaXNhYmxlZF0nOiAnY29uZmlnLm56Tm9BbmltYXRpb24nLFxuICAgICdbQG1vZGFsQ29udGFpbmVyXSc6ICdzdGF0ZScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuc3RhcnQpJzogJ29uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KScsXG4gICAgJyhAbW9kYWxDb250YWluZXIuZG9uZSknOiAnb25BbmltYXRpb25Eb25lKCRldmVudCknLFxuICAgICcoY2xpY2spJzogJ29uQ29udGFpbmVyQ2xpY2soJGV2ZW50KScsXG4gICAgJyhtb3VzZXVwKSc6ICdvbk1vdXNldXAoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsQ29uZmlybUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJhc2VNb2RhbENvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBwb3J0YWxPdXRsZXQhOiBDZGtQb3J0YWxPdXRsZXQ7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG1vZGFsRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FuY2VsVHJpZ2dlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgb2tUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIGxvY2FsZSE6IE56TW9kYWxJMThuSW50ZXJmYWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICByZW5kZXI6IFJlbmRlcmVyMixcbiAgICBvdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogTnpTYWZlQW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBhbmltYXRpb25UeXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNUcmFwRmFjdG9yeSwgY2RyLCByZW5kZXIsIG92ZXJsYXlSZWYsIG56Q29uZmlnU2VydmljZSwgY29uZmlnLCBkb2N1bWVudCwgYW5pbWF0aW9uVHlwZSk7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJyk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFRyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICBvbk9rKCk6IHZvaWQge1xuICAgIHRoaXMub2tUcmlnZ2VyZWQuZW1pdCgpO1xuICB9XG59XG4iXX0=