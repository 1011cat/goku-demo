/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NZ_EMPTY_COMPONENT_NAME } from './config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/config';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './empty.component';
import * as ɵngcc4 from '@angular/cdk/portal';

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
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
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
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("cdkPortalOutlet", ctx_r5.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    ɵngcc0.ɵɵtemplate(2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType !== "string");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.contentType === "string");
} }
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
export class NzEmbedEmptyComponent {
    constructor(configService, viewContainerRef, cdr, injector) {
        this.configService = configService;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        this.size = '';
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        if (changes.nzComponentName) {
            this.size = getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    }
    ngOnInit() {
        this.subscribeDefaultEmptyContentChange();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    renderEmpty() {
        const content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            const context = { $implicit: this.nzComponentName };
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            const injector = Injector.create({
                parent: this.injector,
                providers: [{ provide: NZ_EMPTY_COMPONENT_NAME, useValue: this.nzComponentName }]
            });
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.detectChanges();
    }
    subscribeDefaultEmptyContentChange() {
        this.configService
            .getConfigChangeEventForComponent('empty')
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            this.content = this.specificContent || this.getUserDefaultEmptyContent();
            this.renderEmpty();
        });
    }
    getUserDefaultEmptyContent() {
        return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
    }
}
NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
NzEmbedEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.content && ctx.specificContent !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.content);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgSwitch, ɵngcc2.NgSwitchCase, ɵngcc2.NgSwitchDefault, ɵngcc3.NzEmptyComponent, ɵngcc4.CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
NzEmbedEmptyComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef },
    { type: Injector }
];
NzEmbedEmptyComponent.propDecorators = {
    nzComponentName: [{ type: Input }],
    specificContent: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmbedEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: `
    <ng-container *ngIf="!content && specificContent !== null" [ngSwitch]="size">
      <nz-empty *ngSwitchCase="'normal'" class="ant-empty-normal" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchCase="'small'" class="ant-empty-small" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchDefault></nz-empty>
    </ng-container>
    <ng-container *ngIf="content">
      <ng-template *ngIf="contentType !== 'string'" [cdkPortalOutlet]="contentPortal"></ng-template>
      <ng-container *ngIf="contentType === 'string'">
        {{ content }}
      </ng-container>
    </ng-container>
  `
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Injector }]; }, { nzComponentName: [{
            type: Input
        }], specificContent: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2VtcHR5L2VtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLGVBQWUsRUFBVSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFLTCxXQUFXLEVBQ1gsSUFBSSxFQUNKLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQXFDLHVCQUF1QixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixTQUFTLFlBQVksQ0FBQyxhQUFxQjtBQUFJLElBQzdDLFFBQVEsYUFBYSxFQUFFO0FBQ3pCLFFBQUksS0FBSyxPQUFPLENBQUM7QUFDakIsUUFBSSxLQUFLLE1BQU07QUFDZixZQUFNLE9BQU8sUUFBUSxDQUFDO0FBQ3RCLFFBQUksS0FBSyxRQUFRLENBQUM7QUFDbEIsUUFBSSxLQUFLLGFBQWEsQ0FBQztBQUN2QixRQUFJLEtBQUssVUFBVSxDQUFDO0FBQ3BCLFFBQUksS0FBSyxVQUFVO0FBQ25CLFlBQU0sT0FBTyxPQUFPLENBQUM7QUFDckIsUUFBSTtBQUNKLFlBQU0sT0FBTyxFQUFFLENBQUM7QUFDaEIsS0FBRztBQUNILENBQUM7QUF1QkQs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QUM7QUFDSCxJQUNVLGtDQUFrQztBQUFLLFFBQzdDLElBQUksQ0FBQyxhQUFhO0FBQ3RCLGFBQU8sZ0NBQWdDLENBQUMsT0FBTyxDQUFDO0FBQ2hELGFBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELGFBQU8sU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUN0QixZQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztBQUNqRixZQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBQ0gsSUFDVSwwQkFBMEI7QUFBSyxRQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztBQUMzRixJQUFFLENBQUM7QUFDSDtpREE5RkMsU0FBUyxTQUFDLGtCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRTs4bEJBWVQsY0FDRjs7Ozs7OzsyTEFDSTtBQUFDO0FBQStDLFlBdkM1QyxlQUFlO0FBQUksWUFQMUIsZ0JBQWdCO0FBQ2hCLFlBWEEsaUJBQWlCO0FBQ2pCLFlBQ0EsUUFBUTtBQUNUO0FBQUc7QUFJSiw4QkFrREcsS0FBSztBQUFLLDhCQUNWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE56RW1wdHlDdXN0b21Db250ZW50LCBOekVtcHR5U2l6ZSwgTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIGdldEVtcHR5U2l6ZShjb21wb25lbnROYW1lOiBzdHJpbmcpOiBOekVtcHR5U2l6ZSB7XG4gIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgIGNhc2UgJ3RhYmxlJzpcbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHJldHVybiAnbm9ybWFsJztcbiAgICBjYXNlICdzZWxlY3QnOlxuICAgIGNhc2UgJ3RyZWUtc2VsZWN0JzpcbiAgICBjYXNlICdjYXNjYWRlcic6XG4gICAgY2FzZSAndHJhbnNmZXInOlxuICAgICAgcmV0dXJuICdzbWFsbCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufVxuXG50eXBlIE56RW1wdHlDb250ZW50VHlwZSA9ICdjb21wb25lbnQnIHwgJ3RlbXBsYXRlJyB8ICdzdHJpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotZW1iZWQtZW1wdHknLFxuICBleHBvcnRBczogJ256RW1iZWRFbXB0eScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb250ZW50ICYmIHNwZWNpZmljQ29udGVudCAhPT0gbnVsbFwiIFtuZ1N3aXRjaF09XCJzaXplXCI+XG4gICAgICA8bnotZW1wdHkgKm5nU3dpdGNoQ2FzZT1cIidub3JtYWwnXCIgY2xhc3M9XCJhbnQtZW1wdHktbm9ybWFsXCIgW256Tm90Rm91bmRJbWFnZV09XCInc2ltcGxlJ1wiPjwvbnotZW1wdHk+XG4gICAgICA8bnotZW1wdHkgKm5nU3dpdGNoQ2FzZT1cIidzbWFsbCdcIiBjbGFzcz1cImFudC1lbXB0eS1zbWFsbFwiIFtuek5vdEZvdW5kSW1hZ2VdPVwiJ3NpbXBsZSdcIj48L256LWVtcHR5PlxuICAgICAgPG56LWVtcHR5ICpuZ1N3aXRjaERlZmF1bHQ+PC9uei1lbXB0eT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwiY29udGVudFR5cGUgIT09ICdzdHJpbmcnXCIgW2Nka1BvcnRhbE91dGxldF09XCJjb250ZW50UG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50VHlwZSA9PT0gJ3N0cmluZydcIj5cbiAgICAgICAge3sgY29udGVudCB9fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTnpFbWJlZEVtcHR5Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56Q29tcG9uZW50TmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgc3BlY2lmaWNDb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XG5cbiAgY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50O1xuICBjb250ZW50VHlwZTogTnpFbXB0eUNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XG4gIGNvbnRlbnRQb3J0YWw/OiBQb3J0YWw8TnpTYWZlQW55PjtcbiAgc2l6ZTogTnpFbXB0eVNpemUgPSAnJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpDb21wb25lbnROYW1lKSB7XG4gICAgICB0aGlzLnNpemUgPSBnZXRFbXB0eVNpemUoY2hhbmdlcy5uekNvbXBvbmVudE5hbWUuY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQgJiYgIWNoYW5nZXMuc3BlY2lmaWNDb250ZW50LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlRGVmYXVsdEVtcHR5Q29udGVudENoYW5nZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdzdHJpbmcnO1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMubnpDb21wb25lbnROYW1lIH0gYXMgTnpTYWZlQW55O1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwoY29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcbiAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOWl9FTVBUWV9DT01QT05FTlRfTkFNRSwgdXNlVmFsdWU6IHRoaXMubnpDb21wb25lbnROYW1lIH1dXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnY29tcG9uZW50JztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnc3RyaW5nJztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlZmF1bHRFbXB0eUNvbnRlbnRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ2VtcHR5JylcbiAgICAgIC5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IHRoaXMuZ2V0VXNlckRlZmF1bHRFbXB0eUNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFVzZXJEZWZhdWx0RW1wdHlDb250ZW50KCk6IFR5cGU8TnpTYWZlQW55PiB8IFRlbXBsYXRlUmVmPHN0cmluZz4gfCBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiAodGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudCgnZW1wdHknKSB8fCB7fSkubnpEZWZhdWx0RW1wdHlDb250ZW50O1xuICB9XG59XG4iXX0=