import { EventEmitter, Component, ViewEncapsulation, ChangeDetectorRef, Input, Output, ChangeDetectionStrategy, NgModule, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Injectable, Injector } from '@angular/core';
import { notificationMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent, NzMNContainerComponent, NzMNService } from 'ng-zorro-antd/message';
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzSingletonService } from 'ng-zorro-antd/core/services';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/icon';
import * as ɵngcc3 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc4 from 'ng-zorro-antd/core/config';
import * as ɵngcc5 from 'ng-zorro-antd/core/services';
import * as ɵngcc6 from '@angular/cdk/overlay';

function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 16);
} }
function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 17);
} }
function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 18);
} }
function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 19);
} }
const _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵelementStart(2, "div");
    ɵngcc0.ɵɵelementContainerStart(3, 9);
    ɵngcc0.ɵɵtemplate(4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 10);
    ɵngcc0.ɵɵtemplate(5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 11);
    ɵngcc0.ɵɵtemplate(6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 12);
    ɵngcc0.ɵɵtemplate(7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 13);
    ɵngcc0.ɵɵelementContainerEnd();
    ɵngcc0.ɵɵelement(8, "div", 14);
    ɵngcc0.ɵɵelement(9, "div", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c0, ctx_r0.instance.type !== "blank"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-notification-notice-with-icon", ctx_r0.instance.type !== "blank");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r0.instance.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "success");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "info");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "warning");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "error");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.instance.title, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.instance.content, ɵngcc0.ɵɵsanitizeHtml);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 21);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const closeIcon_r10 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", closeIcon_r10);
} }
function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.instance.options == null ? null : ctx_r2.instance.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 22);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_1_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r4 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r4)("placement", ctx_r0.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_3_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r7 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r7)("placement", ctx_r1.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_5_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r10 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r10)("placement", ctx_r2.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-notification", 5);
    ɵngcc0.ɵɵlistener("destroyed", function NzNotificationContainerComponent_nz_notification_7_Template_nz_notification_destroyed_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.remove($event.id, $event.userAction); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r13 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("instance", instance_r13)("placement", ctx_r3.config.nzPlacement);
} }
class NzNotificationComponent extends NzMNComponent {
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.instance.onClick.complete();
    }
    onClick(event) {
        this.instance.onClick.next(event);
    }
    close() {
        this.destroy(true);
    }
    get state() {
        if (this.instance.state === 'enter') {
            if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
                return 'enterLeft';
            }
            else {
                return 'enterRight';
            }
        }
        else {
            return this.instance.state;
        }
    }
}
NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzNotificationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { instance: "instance", placement: "placement", index: "index" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzNotification"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 8, vars: 12, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "click", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("@notificationMotion.done", function NzNotificationComponent_Template_div_animation_notificationMotion_done_0_listener($event) { return ctx.animationStateChanged.next($event); })("click", function NzNotificationComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); })("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        ɵngcc0.ɵɵtemplate(1, NzNotificationComponent_div_1_Template, 10, 12, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        ɵngcc0.ɵɵelementStart(3, "a", 3);
        ɵngcc0.ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵtemplate(5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵproperty("ngStyle", (ctx.instance.options == null ? null : ctx.instance.options.nzStyle) || null)("ngClass", (ctx.instance.options == null ? null : ctx.instance.options.nzClass) || "")("@notificationMotion", ctx.state);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.instance.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.instance.template)("ngTemplateOutlet", ctx.instance.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c1, ctx, ctx.instance.options == null ? null : ctx.instance.options.nzData));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.instance.options == null ? null : ctx.instance.options.nzCloseIcon)("ngIfElse", _r3);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc2.NzIconDirective, ɵngcc3.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [notificationMotion] } });
NzNotificationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzNotificationComponent.propDecorators = {
    instance: [{ type: Input }],
    placement: [{ type: Input }],
    index: [{ type: Input }],
    destroyed: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [notificationMotion],
                template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle || null"
      [ngClass]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div *ngIf="!instance.template" class="ant-notification-notice-content">
        <div class="ant-notification-notice-content" [ngClass]="{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }">
          <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
            <ng-container [ngSwitch]="instance.type">
              <i
                *ngSwitchCase="'success'"
                nz-icon
                nzType="check-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-success"
              ></i>
              <i
                *ngSwitchCase="'info'"
                nz-icon
                nzType="info-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-info"
              ></i>
              <i
                *ngSwitchCase="'warning'"
                nz-icon
                nzType="exclamation-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-warning"
              ></i>
              <i
                *ngSwitchCase="'error'"
                nz-icon
                nzType="close-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-error"
              ></i>
            </ng-container>
            <div class="ant-notification-notice-message" [innerHTML]="instance.title"></div>
            <div class="ant-notification-notice-description" [innerHTML]="instance.content"></div>
          </div>
        </div>
      </div>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template!"
        [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
      ></ng-template>
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.nzCloseIcon; else iconTpl">
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <i nz-icon [nzType]="closeIcon"></i>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <i nz-icon nzType="close" class="ant-notification-close-icon"></i>
          </ng-template>
        </span>
      </a>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { destroyed: [{
            type: Output
        }], instance: [{
            type: Input
        }], placement: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'notification';
const NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true,
    nzDirection: 'ltr'
};
class NzNotificationContainerComponent extends NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.dir = 'ltr';
        this.instances = [];
        this.topLeftInstances = [];
        this.topRightInstances = [];
        this.bottomLeftInstances = [];
        this.bottomRightInstances = [];
        const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
        this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
    }
    create(notification) {
        const noti = this.onCreate(notification);
        const key = noti.options.nzKey;
        const notificationWithSameKey = this.instances.find(msg => msg.options.nzKey === notification.options.nzKey);
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = [...this.instances, noti];
        }
        this.readyInstances();
        return noti;
    }
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        instance.onClick = new Subject();
        return instance;
    }
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateConfig();
            const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
            if (config) {
                const { nzDirection } = config;
                this.dir = nzDirection || this.dir;
            }
        });
    }
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.bottom = toCssPixel(this.config.nzBottom);
        this.cdr.markForCheck();
    }
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
        old.options = _new.options;
    }
    readyInstances() {
        this.topLeftInstances = this.instances.filter(m => m.options.nzPlacement === 'topLeft');
        this.topRightInstances = this.instances.filter(m => m.options.nzPlacement === 'topRight' || !m.options.nzPlacement);
        this.bottomLeftInstances = this.instances.filter(m => m.options.nzPlacement === 'bottomLeft');
        this.bottomRightInstances = this.instances.filter(m => m.options.nzPlacement === 'bottomRight');
        this.cdr.detectChanges();
    }
    mergeOptions(options) {
        const { nzDuration, nzAnimate, nzPauseOnHover, nzPlacement } = this.config;
        return Object.assign({ nzDuration, nzAnimate, nzPauseOnHover, nzPlacement: nzPlacement }, options);
    }
}
NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzConfigService)); };
NzNotificationContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 8, vars: 28, consts: [[1, "ant-notification", "ant-notification-topLeft"], [3, "instance", "placement", "destroyed", 4, "ngFor", "ngForOf"], [1, "ant-notification", "ant-notification-topRight"], [1, "ant-notification", "ant-notification-bottomLeft"], [1, "ant-notification", "ant-notification-bottomRight"], [3, "instance", "placement", "destroyed"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzNotificationContainerComponent_nz_notification_3_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵtemplate(5, NzNotificationContainerComponent_nz_notification_5_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵtemplate(7, NzNotificationContainerComponent_nz_notification_7_Template, 1, 2, "nz-notification", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("top", ctx.top)("left", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.topLeftInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("top", ctx.top)("right", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.topRightInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("bottom", ctx.bottom)("left", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bottomLeftInstances);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("bottom", ctx.bottom)("right", "0px");
        ɵngcc0.ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.bottomRightInstances);
    } }, directives: [ɵngcc1.NgForOf, NzNotificationComponent], encapsulation: 2, changeDetection: 0 });
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzConfigService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc4.NzConfigService }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzNotificationServiceModule {
}
NzNotificationServiceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzNotificationServiceModule });
NzNotificationServiceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzNotificationServiceModule_Factory(t) { return new (t || NzNotificationServiceModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzNotificationModule {
}
NzNotificationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzNotificationModule });
NzNotificationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzNotificationModule_Factory(t) { return new (t || NzNotificationModule)(); }, imports: [[BidiModule, CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzNotificationServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzNotificationModule, { declarations: function () { return [NzNotificationComponent, NzNotificationContainerComponent]; }, imports: function () { return [BidiModule, CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzNotificationServiceModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, OverlayModule, NzIconModule, NzOutletModule, NzNotificationServiceModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                entryComponents: [NzNotificationContainerComponent]
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
let notificationId = 0;
class NzNotificationService extends NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'notification-';
    }
    success(title, content, options) {
        return this.createInstance({ type: 'success', title, content }, options);
    }
    error(title, content, options) {
        return this.createInstance({ type: 'error', title, content }, options);
    }
    info(title, content, options) {
        return this.createInstance({ type: 'info', title, content }, options);
    }
    warning(title, content, options) {
        return this.createInstance({ type: 'warning', title, content }, options);
    }
    blank(title, content, options) {
        return this.createInstance({ type: 'blank', title, content }, options);
    }
    create(type, title, content, options) {
        return this.createInstance({ type, title, content }, options);
    }
    template(template, options) {
        return this.createInstance({ template }, options);
    }
    generateMessageId() {
        return `${this.componentPrefix}-${notificationId++}`;
    }
    createInstance(message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.generateMessageId(),
            options
        }));
    }
}
NzNotificationService.ɵfac = function NzNotificationService_Factory(t) { return new (t || NzNotificationService)(ɵngcc0.ɵɵinject(ɵngcc5.NzSingletonService), ɵngcc0.ɵɵinject(ɵngcc6.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
NzNotificationService.ɵprov = ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(INJECTOR)); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
NzNotificationService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: NzNotificationServiceModule
            }]
    }], function () { return [{ type: ɵngcc5.NzSingletonService }, { type: ɵngcc6.Overlay }, { type: ɵngcc0.Injector }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzNotificationComponent, NzNotificationContainerComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule };

//# sourceMappingURL=ng-zorro-antd-notification.js.map