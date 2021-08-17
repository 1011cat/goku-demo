import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, EventEmitter, ChangeDetectorRef, ContentChild, Output, Input, Optional, ContentChildren, NgModule } from '@angular/core';
import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { siderResponsiveMap, NzBreakpointService } from 'ng-zorro-antd/core/services';
import { toCssPixel, inNextTick, InputBoolean } from 'ng-zorro-antd/core/util';
import { NzMenuDirective } from 'ng-zorro-antd/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from 'ng-zorro-antd/core/services';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/cdk/bidi';
import * as ɵngcc5 from 'ng-zorro-antd/icon';

const _c0 = ["*"];
function NzSiderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("click", function NzSiderComponent_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.setCollapsed(!ctx_r1.nzCollapsed); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("matchBreakPoint", ctx_r0.matchBreakPoint)("nzCollapsedWidth", ctx_r0.nzCollapsedWidth)("nzCollapsed", ctx_r0.nzCollapsed)("nzBreakpoint", ctx_r0.nzBreakpoint)("nzReverseArrow", ctx_r0.nzReverseArrow)("nzTrigger", ctx_r0.nzTrigger)("nzZeroTrigger", ctx_r0.nzZeroTrigger)("siderWidth", ctx_r0.widthSetting);
} }
const _c1 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    const _r4 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzZeroTrigger || _r4);
} }
function NzSiderTriggerComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.nzTrigger || _r2);
} }
function NzSiderTriggerComponent_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r8.nzCollapsed ? "right" : "left");
} }
function NzSiderTriggerComponent_ng_template_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzType", ctx_r9.nzCollapsed ? "left" : "right");
} }
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSiderTriggerComponent_ng_template_2_i_0_Template, 1, 1, "i", 4);
    ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_template_2_i_1_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzReverseArrow);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzReverseArrow);
} }
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} }
class NzContentComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
    }
}
NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzContentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFooterComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
    }
}
NzFooterComponent.ɵfac = function NzFooterComponent_Factory(t) { return new (t || NzFooterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzFooterComponent, selectors: [["nz-footer"]], exportAs: ["nzFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzHeaderComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
    }
}
NzHeaderComponent.ɵfac = function NzHeaderComponent_Factory(t) { return new (t || NzHeaderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzHeaderComponent, selectors: [["nz-header"]], exportAs: ["nzHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzHeaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderComponent {
    constructor(platform, cdr, breakpointService, elementRef) {
        this.platform = platform;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.elementRef = elementRef;
        this.destroy$ = new Subject();
        this.nzMenuDirective = null;
        this.nzCollapsedChange = new EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzBreakpoint = null;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.matchBreakPoint = false;
        this.flexSetting = null;
        this.widthSetting = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout-sider');
    }
    updateStyleMap() {
        this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : toCssPixel(this.nzWidth);
        this.flexSetting = `0 0 ${this.widthSetting}`;
        this.cdr.markForCheck();
    }
    updateMenuInlineCollapsed() {
        if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
            this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
        }
    }
    setCollapsed(collapsed) {
        if (collapsed !== this.nzCollapsed) {
            this.nzCollapsed = collapsed;
            this.nzCollapsedChange.emit(collapsed);
            this.updateMenuInlineCollapsed();
            this.updateStyleMap();
            this.cdr.markForCheck();
        }
    }
    ngOnInit() {
        this.updateStyleMap();
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(siderResponsiveMap, true)
                .pipe(takeUntil(this.destroy$))
                .subscribe(map => {
                const breakpoint = this.nzBreakpoint;
                if (breakpoint) {
                    inNextTick().subscribe(() => {
                        this.matchBreakPoint = !map[breakpoint];
                        this.setCollapsed(this.matchBreakPoint);
                        this.cdr.markForCheck();
                    });
                }
            });
        }
    }
    ngOnChanges(changes) {
        const { nzCollapsed, nzCollapsedWidth, nzWidth } = changes;
        if (nzCollapsed || nzCollapsedWidth || nzWidth) {
            this.updateStyleMap();
        }
        if (nzCollapsed) {
            this.updateMenuInlineCollapsed();
        }
    }
    ngAfterContentInit() {
        this.updateMenuInlineCollapsed();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzBreakpointService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzSiderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSiderComponent, selectors: [["nz-sider"]], contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMenuDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzMenuDirective = _t.first);
    } }, hostVars: 16, hostBindings: function NzSiderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        ɵngcc0.ɵɵclassProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed);
    } }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click", 4, "ngIf"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click"]], template: function NzSiderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, NzSiderComponent_div_2_Template, 1, 8, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCollapsible && ctx.nzTrigger !== null);
    } }, directives: function () { return [ɵngcc3.NgIf, NzSiderTriggerComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSiderComponent.ctorParameters = () => [
    { type: Platform },
    { type: ChangeDetectorRef },
    { type: NzBreakpointService },
    { type: ElementRef }
];
NzSiderComponent.propDecorators = {
    nzMenuDirective: [{ type: ContentChild, args: [NzMenuDirective,] }],
    nzCollapsedChange: [{ type: Output }],
    nzWidth: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzCollapsible: [{ type: Input }],
    nzCollapsed: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSiderComponent.prototype, "nzCollapsed", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzContentComponent, [{
        type: Component,
        args: [{
                selector: 'nz-content',
                exportAs: 'nzContent',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFooterComponent, [{
        type: Component,
        args: [{
                selector: 'nz-footer',
                exportAs: 'nzFooter',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-header',
                exportAs: 'nzHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSiderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nzCollapsible && nzTrigger !== null"
      nz-sider-trigger
      [matchBreakPoint]="matchBreakPoint"
      [nzCollapsedWidth]="nzCollapsedWidth"
      [nzCollapsed]="nzCollapsed"
      [nzBreakpoint]="nzBreakpoint"
      [nzReverseArrow]="nzReverseArrow"
      [nzTrigger]="nzTrigger"
      [nzZeroTrigger]="nzZeroTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!nzCollapsed)"
    ></div>
  `,
                host: {
                    '[class.ant-layout-sider-zero-width]': `nzCollapsed && nzCollapsedWidth === 0`,
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-dark]': `nzTheme === 'dark'`,
                    '[class.ant-layout-sider-collapsed]': `nzCollapsed`,
                    '[style.flex]': 'flexSetting',
                    '[style.maxWidth]': 'widthSetting',
                    '[style.minWidth]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }]
    }], function () { return [{ type: ɵngcc1.Platform }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.NzBreakpointService }, { type: ɵngcc0.ElementRef }]; }, { nzMenuDirective: [{
            type: ContentChild,
            args: [NzMenuDirective]
        }], nzCollapsedChange: [{
            type: Output
        }], nzWidth: [{
            type: Input
        }], nzTheme: [{
            type: Input
        }], nzCollapsedWidth: [{
            type: Input
        }], nzBreakpoint: [{
            type: Input
        }], nzZeroTrigger: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], nzReverseArrow: [{
            type: Input
        }], nzCollapsible: [{
            type: Input
        }], nzCollapsed: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout');
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzLayoutComponent.ɵfac = function NzLayoutComponent_Factory(t) { return new (t || NzLayoutComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.Directionality, 8)); };
NzLayoutComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzLayoutComponent, selectors: [["nz-layout"]], contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzSiderComponent, false);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzSiderComponent = _t);
    } }, hostVars: 4, hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
    } }, exportAs: ["nzLayout"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
NzLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzLayoutComponent.propDecorators = {
    listOfNzSiderComponent: [{ type: ContentChildren, args: [NzSiderComponent,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'nz-layout',
                exportAs: 'nzLayout',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-layout-rtl]': `dir === 'rtl'`,
                    '[class.ant-layout-has-sider]': 'listOfNzSiderComponent.length > 0'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzSiderComponent: [{
            type: ContentChildren,
            args: [NzSiderComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderTriggerComponent {
    constructor() {
        this.nzCollapsed = false;
        this.nzReverseArrow = false;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.matchBreakPoint = false;
        this.nzCollapsedWidth = null;
        this.siderWidth = null;
        this.nzBreakpoint = null;
        this.isZeroTrigger = false;
        this.isNormalTrigger = false;
    }
    updateTriggerType() {
        this.isZeroTrigger = this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
        this.isNormalTrigger = this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        this.updateTriggerType();
    }
    ngOnChanges() {
        this.updateTriggerType();
    }
}
NzSiderTriggerComponent.ɵfac = function NzSiderTriggerComponent_Factory(t) { return new (t || NzSiderTriggerComponent)(); };
NzSiderTriggerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSiderTriggerComponent, selectors: [["", "nz-sider-trigger", ""]], hostVars: 10, hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        ɵngcc0.ɵɵclassProp("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
    } }, inputs: { nzCollapsed: "nzCollapsed", nzReverseArrow: "nzReverseArrow", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", matchBreakPoint: "matchBreakPoint", nzCollapsedWidth: "nzCollapsedWidth", siderWidth: "siderWidth", nzBreakpoint: "nzBreakpoint" }, exportAs: ["nzSiderTrigger"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 6, vars: 2, consts: [[4, "ngIf"], ["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzSiderTriggerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzSiderTriggerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(2, NzSiderTriggerComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.isZeroTrigger);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isNormalTrigger);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc5.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzSiderTriggerComponent.propDecorators = {
    nzCollapsed: [{ type: Input }],
    nzReverseArrow: [{ type: Input }],
    nzZeroTrigger: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    matchBreakPoint: [{ type: Input }],
    nzCollapsedWidth: [{ type: Input }],
    siderWidth: [{ type: Input }],
    nzBreakpoint: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSiderTriggerComponent, [{
        type: Component,
        args: [{
                selector: '[nz-sider-trigger]',
                exportAs: 'nzSiderTrigger',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger"></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" *ngIf="!nzReverseArrow"></i>
      <i nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" *ngIf="nzReverseArrow"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i nz-icon nzType="bars"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
                    '[style.width]': 'isNormalTrigger ? siderWidth : null',
                    '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
                    '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
                    '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
                }
            }]
    }], function () { return []; }, { nzCollapsed: [{
            type: Input
        }], nzReverseArrow: [{
            type: Input
        }], nzZeroTrigger: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], matchBreakPoint: [{
            type: Input
        }], nzCollapsedWidth: [{
            type: Input
        }], siderWidth: [{
            type: Input
        }], nzBreakpoint: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutModule {
}
NzLayoutModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzLayoutModule });
NzLayoutModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzLayoutModule_Factory(t) { return new (t || NzLayoutModule)(); }, imports: [[BidiModule, CommonModule, NzIconModule, LayoutModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzLayoutModule, { declarations: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent]; }, imports: function () { return [BidiModule, CommonModule, NzIconModule, LayoutModule, PlatformModule]; }, exports: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzLayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
                exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                imports: [BidiModule, CommonModule, NzIconModule, LayoutModule, PlatformModule]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzLayoutModule, NzSiderComponent, NzSiderTriggerComponent as ɵNzSiderTriggerComponent };

//# sourceMappingURL=ng-zorro-antd-layout.js.map