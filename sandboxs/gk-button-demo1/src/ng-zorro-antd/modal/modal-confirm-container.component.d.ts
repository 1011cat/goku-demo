/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService, NzModalI18nInterface } from 'ng-zorro-antd/i18n';
import { BaseModalContainerComponent } from './modal-container';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
export declare class NzModalConfirmContainerComponent extends BaseModalContainerComponent {
    private i18n;
    config: ModalOptions;
    portalOutlet: CdkPortalOutlet;
    modalElementRef: ElementRef<HTMLDivElement>;
    readonly cancelTriggered: EventEmitter<void>;
    readonly okTriggered: EventEmitter<void>;
    locale: NzModalI18nInterface;
    constructor(i18n: NzI18nService, elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, render: Renderer2, overlayRef: OverlayRef, nzConfigService: NzConfigService, config: ModalOptions, document: NzSafeAny, animationType: string);
    onCancel(): void;
    onOk(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzModalConfirmContainerComponent, [null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzModalConfirmContainerComponent, "nz-modal-confirm-container", ["nzModalConfirmContainer"], {}, { "cancelTriggered": "cancelTriggered"; "okTriggered": "okTriggered"; }, never, never>;
}

//# sourceMappingURL=modal-confirm-container.component.d.ts.map