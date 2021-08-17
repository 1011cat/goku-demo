/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata, __rest } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzModalContentDirective } from './modal-content.directive';
import { NzModalFooterDirective } from './modal-footer.directive';
import { NzModalTitleDirective } from './modal-title.directive';
import { NzModalService } from './modal.service';
import { getConfigFromComponent } from './utils';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './modal.service';

function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class NzModalComponent {
    constructor(cdr, modal, viewContainerRef) {
        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzCentered = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzOkDanger = false;
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAutofocus = 'auto';
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnOk = new EventEmitter();
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnCancel = new EventEmitter();
        this.nzAfterOpen = new EventEmitter();
        this.nzAfterClose = new EventEmitter();
        this.nzVisibleChange = new EventEmitter();
        this.modalRef = null;
        this.destroy$ = new Subject();
    }
    set modalTitle(value) {
        if (value) {
            this.setTitleWithTemplate(value);
        }
    }
    set modalFooter(value) {
        if (value) {
            this.setFooterWithTemplate(value);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
            // When the modal is implicitly closed (e.g. closeAll) the nzVisible needs to be set to the correct value and emit.
            this.modalRef.afterClose
                .asObservable()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                this.close();
            });
        }
    }
    close(result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    getModalRef() {
        return this.modalRef;
    }
    setTitleWithTemplate(templateRef) {
        this.nzTitle = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the title in next tick
            Promise.resolve().then(() => {
                this.modalRef.updateConfig({
                    nzTitle: this.nzTitle
                });
            });
        }
    }
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then(() => {
                this.modalRef.updateConfig({
                    nzFooter: this.nzFooter
                });
            });
        }
        this.cdr.markForCheck();
    }
    getConfig() {
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent && !this.contentFromContentChild) {
            componentConfig.nzContent = this.contentTemplateRef;
            warnDeprecation('Usage `<ng-content></ng-content>` is deprecated, which will be removed in 12.0.0. Please instead use `<ng-template nzModalContent></ng-template>` to declare the content of the modal.');
        }
        else {
            componentConfig.nzContent = this.nzContent || this.contentFromContentChild;
        }
        return componentConfig;
    }
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = __rest(changes, ["nzVisible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (nzVisible) {
            if (this.nzVisible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzModalService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzModalComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalTitleDirective, true, TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalFooterDirective, true, TemplateRef);
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzModalContentDirective, true, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalTitle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
    } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentTemplateRef = _t.first);
    } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzCentered: "nzCentered", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzCloseIcon: "nzCloseIcon", nzOkType: "nzOkType", nzOkDanger: "nzOkDanger", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAutofocus: "nzAutofocus", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzTitle: "nzTitle", nzFooter: "nzFooter", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzCloseOnNavigation: "nzCloseOnNavigation", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzModalComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzModalService },
    { type: ViewContainerRef }
];
NzModalComponent.propDecorators = {
    nzMask: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzCloseOnNavigation: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzOkLoading: [{ type: Input }],
    nzOkDisabled: [{ type: Input }],
    nzCancelDisabled: [{ type: Input }],
    nzCancelLoading: [{ type: Input }],
    nzKeyboard: [{ type: Input }],
    nzNoAnimation: [{ type: Input }],
    nzCentered: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzComponentParams: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzZIndex: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzCloseIcon: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzOkText: [{ type: Input }],
    nzCancelText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzOkDanger: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzModalType: [{ type: Input }],
    nzAutofocus: [{ type: Input }],
    nzOnOk: [{ type: Input }, { type: Output }],
    nzOnCancel: [{ type: Input }, { type: Output }],
    nzAfterOpen: [{ type: Output }],
    nzAfterClose: [{ type: Output }],
    nzVisibleChange: [{ type: Output }],
    contentTemplateRef: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    modalTitle: [{ type: ContentChild, args: [NzModalTitleDirective, { static: true, read: TemplateRef },] }],
    contentFromContentChild: [{ type: ContentChild, args: [NzModalContentDirective, { static: true, read: TemplateRef },] }],
    modalFooter: [{ type: ContentChild, args: [NzModalFooterDirective, { static: true, read: TemplateRef },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzModalComponent.prototype, "nzCentered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDanger", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzModalComponent, [{
        type: Component,
        args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzModalService }, { type: ɵngcc0.ViewContainerRef }]; }, { nzVisible: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzOkLoading: [{
            type: Input
        }], nzOkDisabled: [{
            type: Input
        }], nzCancelDisabled: [{
            type: Input
        }], nzCancelLoading: [{
            type: Input
        }], nzKeyboard: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzCentered: [{
            type: Input
        }], nzZIndex: [{
            type: Input
        }], nzWidth: [{
            type: Input
        }], nzCloseIcon: [{
            type: Input
        }], nzOkType: [{
            type: Input
        }], nzOkDanger: [{
            type: Input
        }], nzIconType: [{
            type: Input
        }], nzModalType: [{
            type: Input
        }], nzAutofocus: [{
            type: Input
        }], nzOnOk: [{
            type: Input
        }, {
            type: Output
        }], nzOnCancel: [{
            type: Input
        }, {
            type: Output
        }], nzAfterOpen: [{
            type: Output
        }], nzAfterClose: [{
            type: Output
        }], nzVisibleChange: [{
            type: Output
        }], modalTitle: [{
            type: ContentChild,
            args: [NzModalTitleDirective, { static: true, read: TemplateRef }]
        }], modalFooter: [{
            type: ContentChild,
            args: [NzModalFooterDirective, { static: true, read: TemplateRef }]
        }], nzTitle: [{
            type: Input
        }], nzFooter: [{
            type: Input
        }], nzMask: [{
            type: Input
        }], nzMaskClosable: [{
            type: Input
        }], nzCloseOnNavigation: [{
            type: Input
        }], nzContent: [{
            type: Input
        }], nzComponentParams: [{
            type: Input
        }], nzWrapClassName: [{
            type: Input
        }], nzClassName: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzMaskStyle: [{
            type: Input
        }], nzBodyStyle: [{
            type: Input
        }], nzOkText: [{
            type: Input
        }], nzCancelText: [{
            type: Input
        }], contentTemplateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], contentFromContentChild: [{
            type: ContentChild,
            args: [NzModalContentDirective, { static: true, read: TemplateRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFFWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7QUFZakQsTUFBTSxPQUFPLGdCQUFnQjtBQUFHLElBNkY5QixZQUFvQixHQUFzQixFQUFVLEtBQXFCLEVBQVUsZ0JBQWtDO0FBQUksUUFBckcsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO0FBQUMsUUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0FBQUMsUUEzRTdGLGNBQVMsR0FBWSxLQUFLLENBQUM7QUFDdEQsUUFB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Ozs7O29CQUN2RDtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpCdXR0b25UeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56TW9kYWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOek1vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TW9kYWxMZWdhY3lBUEkgfSBmcm9tICcuL21vZGFsLWxlZ2FjeS1hcGknO1xuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7IE56TW9kYWxUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGVzLCBPbkNsaWNrQ2FsbGJhY2ssIFN0eWxlT2JqZWN0TGlrZSB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnRnJvbUNvbXBvbmVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1tb2RhbCcsXG4gIGV4cG9ydEFzOiAnbnpNb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IE56U2FmZUFueSwgUiA9IE56U2FmZUFueT4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE56TW9kYWxMZWdhY3lBUEk8VCwgUj4sIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek1hc2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256TWFza0Nsb3NhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNsb3NlT25OYXZpZ2F0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uelZpc2libGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2xvc2FibGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256T2tMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uek9rRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2FuY2VsRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Q2FuY2VsTG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpLZXlib2FyZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0FuaW1hdGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpPa0RhbmdlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpDZW50ZXJlZDogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2s/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZU9uTmF2aWdhdGlvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuektleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2VudGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjtcbiAgQElucHV0KCkgbnpDb21wb25lbnRQYXJhbXM/OiBUO1xuICBASW5wdXQoKSBuekZvb3Rlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsO1xuICBASW5wdXQoKSBuelpJbmRleDogbnVtYmVyID0gMTAwMDtcbiAgQElucHV0KCkgbnpXaWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNTIwO1xuICBASW5wdXQoKSBueldyYXBDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlPzogb2JqZWN0O1xuICBASW5wdXQoKSBuelRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBuekNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnY2xvc2UnO1xuICBASW5wdXQoKSBuek1hc2tTdHlsZT86IFN0eWxlT2JqZWN0TGlrZTtcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU/OiBTdHlsZU9iamVjdExpa2U7XG4gIEBJbnB1dCgpIG56T2tUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCkgbnpPa1R5cGU6IE56QnV0dG9uVHlwZSA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T2tEYW5nZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJY29uVHlwZTogc3RyaW5nID0gJ3F1ZXN0aW9uLWNpcmNsZSc7IC8vIENvbmZpcm0gTW9kYWwgT05MWVxuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlcyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpBdXRvZm9jdXM6ICdvaycgfCAnY2FuY2VsJyB8ICdhdXRvJyB8IG51bGwgPSAnYXV0byc7XG5cbiAgLy8gVE9ETyhAaHN1YW54eXopIElucHV0IHdpbGwgbm90IGJlIHN1cHBvcnRlZFxuICBASW5wdXQoKVxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gfCBOelNhZmVBbnkgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgLy8gVE9ETyhAaHN1YW54eXopIElucHV0IHdpbGwgbm90IGJlIHN1cHBvcnRlZFxuICBASW5wdXQoKVxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+IHwgTnpTYWZlQW55ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50VGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjx7fT47XG5cbiAgQENvbnRlbnRDaGlsZChOek1vZGFsVGl0bGVEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBzZXQgbW9kYWxUaXRsZSh2YWx1ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55Pikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRUaXRsZVdpdGhUZW1wbGF0ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZChOek1vZGFsQ29udGVudERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGNvbnRlbnRGcm9tQ29udGVudENoaWxkITogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcblxuICBAQ29udGVudENoaWxkKE56TW9kYWxGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBzZXQgbW9kYWxGb290ZXIodmFsdWU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vZGFsUmVmOiBOek1vZGFsUmVmIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cbiAgICByZXR1cm4gdGhpcy5uekFmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIG56QWZ0ZXJDbG9zZVxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm1vZGFsUmVmKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWwuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgIC8vIFdoZW4gdGhlIG1vZGFsIGlzIGltcGxpY2l0bHkgY2xvc2VkIChlLmcuIGNsb3NlQWxsKSB0aGUgbnpWaXNpYmxlIG5lZWRzIHRvIGJlIHNldCB0byB0aGUgY29ycmVjdCB2YWx1ZSBhbmQgZW1pdC5cbiAgICAgIHRoaXMubW9kYWxSZWYuYWZ0ZXJDbG9zZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgdGhpcy5tb2RhbFJlZi5jbG9zZShyZXN1bHQpO1xuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICB9XG5cbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWY/LnRyaWdnZXJPaygpO1xuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmPy50cmlnZ2VyQ2FuY2VsKCk7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQgfCB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbFJlZj8uZ2V0Q29udGVudENvbXBvbmVudCgpO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IHZvaWQge1xuICAgIHJldHVybiB0aGlzLm1vZGFsUmVmPy5nZXRFbGVtZW50KCk7XG4gIH1cblxuICBnZXRNb2RhbFJlZigpOiBOek1vZGFsUmVmIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWY7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlV2l0aFRlbXBsYXRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pOiB2b2lkIHtcbiAgICB0aGlzLm56VGl0bGUgPSB0ZW1wbGF0ZVJlZjtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgLy8gSWYgbW9kYWxSZWYgYWxyZWFkeSBjcmVhdGVkLCBzZXQgdGhlIHRpdGxlIGluIG5leHQgdGlja1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYhLnVwZGF0ZUNvbmZpZyh7XG4gICAgICAgICAgbnpUaXRsZTogdGhpcy5uelRpdGxlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xuICAgIHRoaXMubnpGb290ZXIgPSB0ZW1wbGF0ZVJlZjtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgLy8gSWYgbW9kYWxSZWYgYWxyZWFkeSBjcmVhdGVkLCBzZXQgdGhlIGZvb3RlciBpbiBuZXh0IHRpY2tcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm1vZGFsUmVmIS51cGRhdGVDb25maWcoe1xuICAgICAgICAgIG56Rm9vdGVyOiB0aGlzLm56Rm9vdGVyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZygpOiBNb2RhbE9wdGlvbnMge1xuICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IGdldENvbmZpZ0Zyb21Db21wb25lbnQodGhpcyk7XG4gICAgY29tcG9uZW50Q29uZmlnLm56Vmlld0NvbnRhaW5lclJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZjtcbiAgICBpZiAoIXRoaXMubnpDb250ZW50ICYmICF0aGlzLmNvbnRlbnRGcm9tQ29udGVudENoaWxkKSB7XG4gICAgICBjb21wb25lbnRDb25maWcubnpDb250ZW50ID0gdGhpcy5jb250ZW50VGVtcGxhdGVSZWY7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oXG4gICAgICAgICdVc2FnZSBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAgaXMgZGVwcmVjYXRlZCwgd2hpY2ggd2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMC4gUGxlYXNlIGluc3RlYWQgdXNlIGA8bmctdGVtcGxhdGUgbnpNb2RhbENvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5gIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnQgb2YgdGhlIG1vZGFsLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudENvbmZpZy5uekNvbnRlbnQgPSB0aGlzLm56Q29udGVudCB8fCB0aGlzLmNvbnRlbnRGcm9tQ29udGVudENoaWxkO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50Q29uZmlnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpWaXNpYmxlLCAuLi5vdGhlckNoYW5nZXMgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAoT2JqZWN0LmtleXMob3RoZXJDaGFuZ2VzKS5sZW5ndGggJiYgdGhpcy5tb2RhbFJlZikge1xuICAgICAgdGhpcy5tb2RhbFJlZi51cGRhdGVDb25maWcoZ2V0Q29uZmlnRnJvbUNvbXBvbmVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKG56VmlzaWJsZSkge1xuICAgICAgaWYgKHRoaXMubnpWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWY/Ll9maW5pc2hEaWFsb2dDbG9zZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19