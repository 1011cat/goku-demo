/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BaseModalContainerComponent } from './modal-container';
import { ModalOptions } from './modal-types';
import * as ɵngcc0 from '@angular/core';
export declare class NzModalContainerComponent extends BaseModalContainerComponent {
    config: ModalOptions;
    portalOutlet: CdkPortalOutlet;
    modalElementRef: ElementRef<HTMLDivElement>;
    constructor(elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef, render: Renderer2, overlayRef: OverlayRef, nzConfigService: NzConfigService, config: ModalOptions, document: NzSafeAny, animationType: string);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzModalContainerComponent, [null, null, null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzModalContainerComponent, "nz-modal-container", ["nzModalContainer"], {}, {}, never, never>;
}

//# sourceMappingURL=modal-container.component.d.ts.map