import { __decorate, __metadata, __rest } from 'tslib';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayConfig, Overlay, OverlayKeyboardDispatcher, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal, CdkPortalOutlet, PortalModule } from '@angular/cdk/portal';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Directive, TemplateRef, EventEmitter, Type, Injector, Component, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject, Renderer2, ViewContainerRef, Input, Output, ViewChild, ContentChild, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { toCssPixel, InputBoolean } from 'ng-zorro-antd/core/util';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/cdk/overlay';
import * as ɵngcc3 from '@angular/cdk/a11y';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc6 from '@angular/common';
import * as ɵngcc7 from '@angular/cdk/portal';
import * as ɵngcc8 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc9 from 'ng-zorro-antd/icon';

const _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.maskClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r14.nzTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r12.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 19);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const closeIcon_r16 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", closeIcon_r16);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(3); return ctx_r17.closeClick(); });
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r13.nzCloseIcon);
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 1, "button", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("ant-drawer-header", !!ctx_r3.nzTitle)("ant-drawer-header-no-title", !ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r19.nzContent)("ngTemplateOutletContext", ctx_r19.templateContext);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 2, 2, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.isTemplateRef(ctx_r5.nzContent));
} }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r21.contentFromContentChild);
} }
function NzDrawerComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.contentFromContentChild && (ctx_r7.isOpen || ctx_r7.inAnimation));
} }
function NzDrawerComponent_ng_template_0_ng_content_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!(nzContent || contentFromContentChild)"]);
} }
function NzDrawerComponent_ng_template_0_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "div", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r23.nzFooter, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_12_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.nzFooter);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementStart(3, "div", 3);
    ɵngcc0.ɵɵelementStart(4, "div", 4);
    ɵngcc0.ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 6, "div", 5);
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵngcc0.ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(9, NzDrawerComponent_ng_template_0_ng_template_9_Template, 1, 1, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(11, NzDrawerComponent_ng_template_0_ng_content_11_Template, 1, 0, "ng-content", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(12, NzDrawerComponent_ng_template_0_div_12_Template, 2, 1, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = ɵngcc0.ɵɵreference(10);
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    ɵngcc0.ɵɵclassProp("ant-drawer-rtl", ctx_r1.dir === "rtl")("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r1.nzNoAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzMask);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("height", ctx_r1.isLeftOrRight ? "100%" : null);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle || ctx_r1.nzClosable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.nzBodyStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzContent)("ngIfElse", _r6);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r1.nzContent || ctx_r1.contentFromContentChild));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzFooter);
} }
const _c1 = ["*"];
class NzDrawerContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzDrawerContentDirective.ɵfac = function NzDrawerContentDirective_Factory(t) { return new (t || NzDrawerContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
NzDrawerContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDrawerContentDirective, selectors: [["", "nzDrawerContent", ""]], exportAs: ["nzDrawerContent"] });
NzDrawerContentDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerRef {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DRAWER_ANIMATE_DURATION = 300;
const NZ_CONFIG_MODULE_NAME = 'drawer';
class NzDrawerComponent extends NzDrawerRef {
    constructor(cdr, 
    // tslint:disable-next-line:no-any
    document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
        super();
        this.cdr = cdr;
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCloseIcon = 'close';
        this.nzClosable = true;
        this.nzMaskClosable = true;
        this.nzMask = true;
        this.nzCloseOnNavigation = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.componentInstance = null;
        this.nzOnViewInit = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.placementChanging = false;
        this.placementChangeTimeoutId = -1;
        this.isOpen = false;
        this.inAnimation = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: this
        };
        this.nzAfterOpen = new Subject();
        this.nzAfterClose = new Subject();
        // from service config
        this.nzDirection = undefined;
        this.dir = 'ltr';
    }
    set nzVisible(value) {
        this.isOpen = value;
    }
    get nzVisible() {
        return this.isOpen;
    }
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    get width() {
        return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
    }
    get height() {
        return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
    }
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.nzDirection || this.directionality.value;
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.attachBodyContent();
        setTimeout(() => {
            this.nzOnViewInit.emit();
        });
    }
    ngAfterContentInit() {
        if (!(this.contentFromContentChild || this.nzContent)) {
            warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzDrawerContent></ng-template>` to declare the content of the drawer.');
        }
    }
    ngOnChanges(changes) {
        const { nzPlacement, nzVisible } = changes;
        if (nzVisible) {
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
        if (nzPlacement && !nzPlacement.isFirstChange()) {
            this.triggerPlacementChangeCycleOnce();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        clearTimeout(this.placementChangeTimeoutId);
        this.disposeOverlay();
    }
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
        if (!this.nzNoAnimation) {
            this.placementChanging = true;
            this.changeDetectorRef.markForCheck();
            clearTimeout(this.placementChangeTimeoutId);
            this.placementChangeTimeoutId = setTimeout(() => {
                this.placementChanging = false;
                this.changeDetectorRef.markForCheck();
            }, this.getAnimationDuration());
        }
    }
    close(result) {
        this.isOpen = false;
        this.inAnimation = true;
        this.nzVisibleChange.emit(false);
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.inAnimation = false;
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
            this.componentInstance = null;
        }, this.getAnimationDuration());
    }
    open() {
        this.attachOverlay();
        this.isOpen = true;
        this.inAnimation = true;
        this.nzVisibleChange.emit(true);
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.inAnimation = false;
            this.changeDetectorRef.detectChanges();
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    getContentComponent() {
        return this.componentInstance;
    }
    closeClick() {
        this.nzOnClose.emit();
    }
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            const childInjector = Injector.create({
                parent: this.injector,
                providers: [{ provide: NzDrawerRef, useValue: this }]
            });
            const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            this.componentInstance = componentRef.instance;
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe((event) => {
                if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            });
            this.overlayRef
                .detachments()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.disposeOverlay();
            });
        }
    }
    disposeOverlay() {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.dispose();
        this.overlayRef = null;
    }
    getOverlayConfig() {
        return new OverlayConfig({
            disposeOnNavigation: this.nzCloseOnNavigation,
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FocusTrapFactory), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.OverlayKeyboardDispatcher), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzDrawerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzDrawerContentDirective, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
    } }, viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzCloseIcon: "nzCloseIcon", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzCloseOnNavigation: "nzCloseOnNavigation", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible", nzContent: "nzContent", nzTitle: "nzTitle", nzFooter: "nzFooter", nzWrapClassName: "nzWrapClassName" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDrawer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf", "ngIfElse"], ["contentElseTemp", ""], [4, "ngIf"], ["class", "ant-drawer-footer", 4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", "style", "--scroll-bar: 0px;", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 2, "--scroll-bar", "0px", 3, "click"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], [1, "ant-drawer-footer"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 13, 41, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, directives: [ɵngcc5.NzNoAnimationDirective, ɵngcc6.NgIf, ɵngcc6.NgStyle, ɵngcc7.CdkPortalOutlet, ɵngcc8.NzStringTemplateOutletDirective, ɵngcc9.NzIconDirective, ɵngcc6.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzDrawerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: NzConfigService },
    { type: Renderer2 },
    { type: Overlay },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: FocusTrapFactory },
    { type: ViewContainerRef },
    { type: OverlayKeyboardDispatcher },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzDrawerComponent.propDecorators = {
    nzContent: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzMask: [{ type: Input }],
    nzCloseOnNavigation: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzHeight: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzOffsetX: [{ type: Input }],
    nzOffsetY: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzOnViewInit: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzVisibleChange: [{ type: Output }],
    drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate', { static: true },] }],
    bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: false },] }],
    contentFromContentChild: [{ type: ContentChild, args: [NzDrawerContentDirective, { static: true, read: TemplateRef },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzClosable", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMask", void 0);
__decorate([
    WithConfig(),
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzDrawerComponent.prototype, "nzKeyboard", void 0);
__decorate([
    WithConfig(),
    __metadata("design:type", String)
], NzDrawerComponent.prototype, "nzDirection", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerContentDirective, [{
        type: Directive,
        args: [{
                selector: '[nzDrawerContent]',
                exportAs: 'nzDrawerContent'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        <div class="ant-drawer-mask" (click)="maskClick()" *ngIf="nzMask" [ngStyle]="nzMaskStyle"></div>
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              <div *ngIf="nzTitle || nzClosable" [class.ant-drawer-header]="!!nzTitle" [class.ant-drawer-header-no-title]="!nzTitle">
                <div *ngIf="nzTitle" class="ant-drawer-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle"><div [innerHTML]="nzTitle"></div></ng-container>
                </div>
                <button *ngIf="nzClosable" (click)="closeClick()" aria-label="Close" class="ant-drawer-close" style="--scroll-bar: 0px;">
                  <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                    <i nz-icon [nzType]="closeIcon"></i>
                  </ng-container>
                </button>
              </div>
              <div class="ant-drawer-body" [ngStyle]="nzBodyStyle">
                <ng-template cdkPortalOutlet></ng-template>
                <ng-container *ngIf="nzContent; else contentElseTemp">
                  <ng-container *ngIf="isTemplateRef(nzContent)">
                    <ng-container *ngTemplateOutlet="$any(nzContent); context: templateContext"></ng-container>
                  </ng-container>
                </ng-container>
                <ng-template #contentElseTemp>
                  <ng-container *ngIf="contentFromContentChild && (isOpen || inAnimation)">
                    <ng-template [ngTemplateOutlet]="contentFromContentChild"></ng-template>
                  </ng-container>
                </ng-template>
                <ng-content *ngIf="!(nzContent || contentFromContentChild)"></ng-content>
              </div>
              <div *ngIf="nzFooter" class="ant-drawer-footer">
                <ng-container *nzStringTemplateOutlet="nzFooter"><div [innerHTML]="nzFooter"></div></ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.FocusTrapFactory }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.OverlayKeyboardDispatcher }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzCloseIcon: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzCloseOnNavigation: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzHeight: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzOffsetX: [{
            type: Input
        }], nzOffsetY: [{
            type: Input
        }], nzOnViewInit: [{
            type: Output
        }], nzOnClose: [{
            type: Output
        }], nzVisibleChange: [{
            type: Output
        }], nzVisible: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], drawerTemplate: [{
            type: ViewChild,
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: ViewChild,
            args: [CdkPortalOutlet, { static: false }]
        }], contentFromContentChild: [{
            type: ContentChild,
            args: [NzDrawerContentDirective, { static: true, read: TemplateRef }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerServiceModule {
}
NzDrawerServiceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDrawerServiceModule });
NzDrawerServiceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerModule {
}
NzDrawerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDrawerModule });
NzDrawerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[
            BidiModule,
            CommonModule,
            OverlayModule,
            PortalModule,
            NzIconModule,
            NzOutletModule,
            NzNoAnimationModule,
            NzDrawerServiceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDrawerModule, { declarations: function () { return [NzDrawerComponent, NzDrawerContentDirective]; }, imports: function () { return [BidiModule,
        CommonModule,
        OverlayModule,
        PortalModule,
        NzIconModule,
        NzOutletModule,
        NzNoAnimationModule, NzDrawerServiceModule]; }, exports: function () { return [NzDrawerComponent, NzDrawerContentDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    OverlayModule,
                    PortalModule,
                    NzIconModule,
                    NzOutletModule,
                    NzNoAnimationModule,
                    NzDrawerServiceModule
                ],
                exports: [NzDrawerComponent, NzDrawerContentDirective],
                declarations: [NzDrawerComponent, NzDrawerContentDirective],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();

class DrawerBuilderForService {
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        const _a = this.options, { nzOnCancel } = _a, componentOption = __rest(_a, ["nzOnCancel"]);
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.savePreviouslyFocusedElement();
        this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.drawerRef.open();
        });
        this.drawerRef.nzOnClose.subscribe(() => {
            if (nzOnCancel) {
                nzOnCancel().then(canClose => {
                    if (canClose !== false) {
                        this.drawerRef.close();
                    }
                });
            }
            else {
                this.drawerRef.close();
            }
        });
        this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    getInstance() {
        return this.drawerRef;
    }
    updateOptions(options) {
        Object.assign(this.drawerRef, options);
    }
}
class NzDrawerService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(ɵngcc0.ɵɵinject(ɵngcc2.Overlay)); };
NzDrawerService.ɵprov = ɵɵdefineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(ɵɵinject(Overlay)); }, token: NzDrawerService, providedIn: NzDrawerServiceModule });
NzDrawerService.ctorParameters = () => [
    { type: Overlay }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDrawerService, [{
        type: Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: ɵngcc2.Overlay }]; }, null); })();

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

export { DRAWER_ANIMATE_DURATION, DrawerBuilderForService, NzDrawerComponent, NzDrawerContentDirective, NzDrawerModule, NzDrawerRef, NzDrawerService, NzDrawerServiceModule };

//# sourceMappingURL=ng-zorro-antd-drawer.js.map