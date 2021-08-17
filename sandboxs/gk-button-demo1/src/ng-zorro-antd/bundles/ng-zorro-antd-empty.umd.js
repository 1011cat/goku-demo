(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/common'),require('@angular/cdk/portal'),require('ng-zorro-antd/i18n'),require('ng-zorro-antd/core/outlet'),require('@angular/cdk/bidi'),exports, require('@angular/cdk/portal'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/i18n'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/core/outlet')) :
  typeof define === 'function' && define.amd ? define('ng-zorro-antd/empty', ['@angular/core','ng-zorro-antd/core/config','@angular/common','@angular/cdk/portal','ng-zorro-antd/i18n','ng-zorro-antd/core/outlet','@angular/cdk/bidi','exports', '@angular/cdk/portal', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core/config', 'ng-zorro-antd/i18n', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/core/outlet'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.common,global.ng.cdk.portal,global.ngZorroAntd.i18n,global.ngZorroAntd.core.outlet,global.ng.cdk.bidi,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].empty = {}), global.ng.cdk.portal, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].i18n, global.ng.cdk.bidi, global.ng.common, global['ng-zorro-antd'].core.outlet));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,exports, portal, core, rxjs, operators, config, i18n, bidi, common, outlet) { 
function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty", 6);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("nzNotFoundImage", "simple");
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty", 7);
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("nzNotFoundImage", "simple");
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty");
} }
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 2);
    ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    ɵngcc0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    ɵngcc0.ɵɵtemplate(3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r0.size);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "normal");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "small");
} }
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("cdkPortalOutlet", ctx_r5.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    ɵngcc0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType !== "string");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType === "string");
} }
function NzEmptyComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "img", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r5.nzNotFoundImage, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r5.isContentString ? ctx_r5.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
} }
function NzEmptyComponent_nz_empty_default_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty-default");
} }
function NzEmptyComponent_nz_empty_simple_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty-simple");
} }
function NzEmptyComponent_p_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.isContentString ? ctx_r6.nzNotFoundContent : ctx_r6.locale["description"], " ");
} }
function NzEmptyComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 6);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_p_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzNotFoundContent);
} }
function NzEmptyComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r7.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzNotFoundFooter);
} }
'use strict';

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NZ_EMPTY_COMPONENT_NAME = new core.InjectionToken('nz-empty-component-name');

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  function getEmptySize(componentName) {
      switch (componentName) {
          case 'table':
          case 'list':
              return 'normal';
          case 'select':
          case 'tree-select':
          case 'cascader':
          case 'transfer':
              return 'small';
          default:
              return '';
      }
  }
  var NzEmbedEmptyComponent = /** @class */ (function () {
      function NzEmbedEmptyComponent(configService, viewContainerRef, cdr, injector) {
          this.configService = configService;
          this.viewContainerRef = viewContainerRef;
          this.cdr = cdr;
          this.injector = injector;
          this.contentType = 'string';
          this.size = '';
          this.destroy$ = new rxjs.Subject();
      }
      NzEmbedEmptyComponent.prototype.ngOnChanges = function (changes) {
          if (changes.nzComponentName) {
              this.size = getEmptySize(changes.nzComponentName.currentValue);
          }
          if (changes.specificContent && !changes.specificContent.isFirstChange()) {
              this.content = changes.specificContent.currentValue;
              this.renderEmpty();
          }
      };
      NzEmbedEmptyComponent.prototype.ngOnInit = function () {
          this.subscribeDefaultEmptyContentChange();
      };
      NzEmbedEmptyComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
      NzEmbedEmptyComponent.prototype.renderEmpty = function () {
          var content = this.content;
          if (typeof content === 'string') {
              this.contentType = 'string';
          }
          else if (content instanceof core.TemplateRef) {
              var context = { $implicit: this.nzComponentName };
              this.contentType = 'template';
              this.contentPortal = new portal.TemplatePortal(content, this.viewContainerRef, context);
          }
          else if (content instanceof core.Type) {
              var injector = core.Injector.create({
                  parent: this.injector,
                  providers: [{ provide: NZ_EMPTY_COMPONENT_NAME, useValue: this.nzComponentName }]
              });
              this.contentType = 'component';
              this.contentPortal = new portal.ComponentPortal(content, this.viewContainerRef, injector);
          }
          else {
              this.contentType = 'string';
              this.contentPortal = undefined;
          }
          this.cdr.detectChanges();
      };
      NzEmbedEmptyComponent.prototype.subscribeDefaultEmptyContentChange = function () {
          var _this = this;
          this.configService
              .getConfigChangeEventForComponent('empty')
              .pipe(operators.startWith(true), operators.takeUntil(this.destroy$))
              .subscribe(function () {
              _this.content = _this.specificContent || _this.getUserDefaultEmptyContent();
              _this.renderEmpty();
          });
      };
      NzEmbedEmptyComponent.prototype.getUserDefaultEmptyContent = function () {
          return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
      };
NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NzEmbedEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.content && ctx.specificContent !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.content);
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, NzEmptyComponent, ɵngcc3.CdkPortalOutlet]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmbedEmptyComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: "\n    <ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\n      <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"'simple'\"></nz-empty>\n      <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"'simple'\"></nz-empty>\n      <nz-empty *ngSwitchDefault></nz-empty>\n    </ng-container>\n    <ng-container *ngIf=\"content\">\n      <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\n      <ng-container *ngIf=\"contentType === 'string'\">\n        {{ content }}\n      </ng-container>\n    </ng-container>\n  "
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Injector }]; }, { nzComponentName: [{
            type: core.Input
        }], specificContent: [{
            type: core.Input
        }] }); })();
      return NzEmbedEmptyComponent;
  }());
  NzEmbedEmptyComponent.ctorParameters = function () { return [
      { type: config.NzConfigService },
      { type: core.ViewContainerRef },
      { type: core.ChangeDetectorRef },
      { type: core.Injector }
  ]; };
  NzEmbedEmptyComponent.propDecorators = {
      nzComponentName: [{ type: core.Input }],
      specificContent: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzEmptyDefaultImages = ['default', 'simple'];
  var NzEmptyComponent = /** @class */ (function () {
      function NzEmptyComponent(i18n, cdr) {
          this.i18n = i18n;
          this.cdr = cdr;
          this.nzNotFoundImage = 'default';
          this.isContentString = false;
          this.isImageBuildIn = true;
          this.destroy$ = new rxjs.Subject();
      }
      NzEmptyComponent.prototype.ngOnChanges = function (changes) {
          var nzNotFoundContent = changes.nzNotFoundContent, nzNotFoundImage = changes.nzNotFoundImage;
          if (nzNotFoundContent) {
              var content = nzNotFoundContent.currentValue;
              this.isContentString = typeof content === 'string';
          }
          if (nzNotFoundImage) {
              var image_1 = nzNotFoundImage.currentValue || 'default';
              this.isImageBuildIn = NzEmptyDefaultImages.findIndex(function (i) { return i === image_1; }) > -1;
          }
      };
      NzEmptyComponent.prototype.ngOnInit = function () {
          var _this = this;
          this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
              _this.locale = _this.i18n.getLocaleData('Empty');
              _this.cdr.markForCheck();
          });
      };
      NzEmptyComponent.prototype.ngOnDestroy = function () {
          this.destroy$.next();
          this.destroy$.complete();
      };
NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostAttrs: [1, "ant-empty"], inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[1, "ant-empty-image"], [4, "ngIf"], ["class", "ant-empty-description", 4, "ngIf"], ["class", "ant-empty-footer", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzEmptyComponent_nz_empty_default_2_Template, 1, 0, "nz-empty-default", 1);
        ɵngcc0.ɵɵtemplate(3, NzEmptyComponent_nz_empty_simple_3_Template, 1, 0, "nz-empty-simple", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzEmptyComponent_p_4_Template, 2, 1, "p", 2);
        ɵngcc0.ɵɵtemplate(5, NzEmptyComponent_div_5_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isImageBuildIn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage !== "simple");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage === "simple");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzNotFoundContent !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzNotFoundFooter);
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc5.NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: "\n    <div class=\"ant-empty-image\">\n      <ng-container *ngIf=\"!isImageBuildIn\">\n        <ng-container *nzStringTemplateOutlet=\"nzNotFoundImage\">\n          <img [src]=\"nzNotFoundImage\" [alt]=\"isContentString ? nzNotFoundContent : 'empty'\" />\n        </ng-container>\n      </ng-container>\n      <nz-empty-default *ngIf=\"isImageBuildIn && nzNotFoundImage !== 'simple'\"></nz-empty-default>\n      <nz-empty-simple *ngIf=\"isImageBuildIn && nzNotFoundImage === 'simple'\"></nz-empty-simple>\n    </div>\n    <p class=\"ant-empty-description\" *ngIf=\"nzNotFoundContent !== null\">\n      <ng-container *nzStringTemplateOutlet=\"nzNotFoundContent\">\n        {{ isContentString ? nzNotFoundContent : locale['description'] }}\n      </ng-container>\n    </p>\n    <div class=\"ant-empty-footer\" *ngIf=\"nzNotFoundFooter\">\n      <ng-container *nzStringTemplateOutlet=\"nzNotFoundFooter\">\n        {{ nzNotFoundFooter }}\n      </ng-container>\n    </div>\n  ",
                host: {
                    class: 'ant-empty'
                }
            }]
    }], function () { return [{ type: ɵngcc4.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzNotFoundImage: [{
            type: core.Input
        }], nzNotFoundContent: [{
            type: core.Input
        }], nzNotFoundFooter: [{
            type: core.Input
        }] }); })();
      return NzEmptyComponent;
  }());
  NzEmptyComponent.ctorParameters = function () { return [
      { type: i18n.NzI18nService },
      { type: core.ChangeDetectorRef }
  ]; };
  NzEmptyComponent.propDecorators = {
      nzNotFoundImage: [{ type: core.Input }],
      nzNotFoundContent: [{ type: core.Input }],
      nzNotFoundFooter: [{ type: core.Input }]
  };

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzEmptyDefaultComponent = /** @class */ (function () {
      function NzEmptyDefaultComponent() {
      }
NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) { return new (t || NzEmptyDefaultComponent)(); };
NzEmptyDefaultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmptyDefaultComponent, selectors: [["nz-empty-default"]], exportAs: ["nzEmptyDefault"], decls: 12, vars: 0, consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]], template: function NzEmptyDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelementStart(2, "g", 2);
        ɵngcc0.ɵɵelement(3, "ellipse", 3);
        ɵngcc0.ɵɵelement(4, "path", 4);
        ɵngcc0.ɵɵelement(5, "path", 5);
        ɵngcc0.ɵɵelement(6, "path", 6);
        ɵngcc0.ɵɵelement(7, "path", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(8, "path", 8);
        ɵngcc0.ɵɵelementStart(9, "g", 9);
        ɵngcc0.ɵɵelement(10, "ellipse", 10);
        ɵngcc0.ɵɵelement(11, "path", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyDefaultComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-empty-default',
                exportAs: 'nzEmptyDefault',
                template: "\n    <svg class=\"ant-empty-img-default\" width=\"184\" height=\"152\" viewBox=\"0 0 184 152\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g fill=\"none\" fill-rule=\"evenodd\">\n        <g transform=\"translate(24 31.67)\">\n          <ellipse class=\"ant-empty-img-default-ellipse\" cx=\"67.797\" cy=\"106.89\" rx=\"67.797\" ry=\"12.668\" />\n          <path\n            class=\"ant-empty-img-default-path-1\"\n            d=\"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z\"\n          />\n          <path\n            class=\"ant-empty-img-default-path-2\"\n            d=\"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z\"\n            transform=\"translate(13.56)\"\n          />\n          <path\n            class=\"ant-empty-img-default-path-3\"\n            d=\"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z\"\n          />\n          <path\n            class=\"ant-empty-img-default-path-4\"\n            d=\"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z\"\n          />\n        </g>\n        <path\n          class=\"ant-empty-img-default-path-5\"\n          d=\"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z\"\n        />\n        <g class=\"ant-empty-img-default-g\" transform=\"translate(149.65 15.383)\">\n          <ellipse cx=\"20.654\" cy=\"3.167\" rx=\"2.849\" ry=\"2.815\" />\n          <path d=\"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z\" />\n        </g>\n      </g>\n    </svg>\n  "
            }]
    }], function () { return []; }, null); })();
      return NzEmptyDefaultComponent;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzEmptySimpleComponent = /** @class */ (function () {
      function NzEmptySimpleComponent() {
      }
NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) { return new (t || NzEmptySimpleComponent)(); };
NzEmptySimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmptySimpleComponent, selectors: [["nz-empty-simple"]], exportAs: ["nzEmptySimple"], decls: 6, vars: 0, consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]], template: function NzEmptySimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 0);
        ɵngcc0.ɵɵelementStart(1, "g", 1);
        ɵngcc0.ɵɵelement(2, "ellipse", 2);
        ɵngcc0.ɵɵelementStart(3, "g", 3);
        ɵngcc0.ɵɵelement(4, "path", 4);
        ɵngcc0.ɵɵelement(5, "path", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptySimpleComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-empty-simple',
                exportAs: 'nzEmptySimple',
                template: "\n    <svg class=\"ant-empty-img-simple\" width=\"64\" height=\"41\" viewBox=\"0 0 64 41\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g transform=\"translate(0 1)\" fill=\"none\" fill-rule=\"evenodd\">\n        <ellipse class=\"ant-empty-img-simple-ellipse\" cx=\"32\" cy=\"33\" rx=\"32\" ry=\"7\" />\n        <g class=\"ant-empty-img-simple-g\" fill-rule=\"nonzero\">\n          <path d=\"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z\" />\n          <path\n            d=\"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z\"\n            class=\"ant-empty-img-simple-path\"\n          />\n        </g>\n      </g>\n    </svg>\n  "
            }]
    }], function () { return []; }, null); })();
      return NzEmptySimpleComponent;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */
  var NzEmptyModule = /** @class */ (function () {
      function NzEmptyModule() {
      }
NzEmptyModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzEmptyModule });
NzEmptyModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, portal.PortalModule, outlet.NzOutletModule, i18n.NzI18nModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzEmptyModule, { declarations: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent], imports: [ɵngcc6.BidiModule, ɵngcc2.CommonModule, ɵngcc3.PortalModule, ɵngcc5.NzOutletModule, ɵngcc4.NzI18nModule], exports: [NzEmptyComponent, NzEmbedEmptyComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyModule, [{
        type: core.NgModule,
        args: [{
                imports: [bidi.BidiModule, common.CommonModule, portal.PortalModule, outlet.NzOutletModule, i18n.NzI18nModule],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
            }]
    }], function () { return []; }, null); })();
      return NzEmptyModule;
  }());

  /**
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NZ_EMPTY_COMPONENT_NAME = NZ_EMPTY_COMPONENT_NAME;
  exports.NzEmbedEmptyComponent = NzEmbedEmptyComponent;
  exports.NzEmptyComponent = NzEmptyComponent;
  exports.NzEmptyDefaultComponent = NzEmptyDefaultComponent;
  exports.NzEmptyModule = NzEmptyModule;
  exports.NzEmptySimpleComponent = NzEmptySimpleComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-empty.umd.js.map