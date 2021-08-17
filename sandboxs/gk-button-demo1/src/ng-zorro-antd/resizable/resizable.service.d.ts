/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone, OnDestroy } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { NzResizeHandleMouseDownEvent } from './resize-handle.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzResizableService implements OnDestroy {
    private ngZone;
    private document;
    private listeners;
    handleMouseDown$: Subject<NzResizeHandleMouseDownEvent>;
    documentMouseUp$: Subject<MouseEvent | TouchEvent>;
    documentMouseMove$: Subject<MouseEvent | TouchEvent>;
    mouseEntered$: Subject<boolean>;
    constructor(ngZone: NgZone, document: NzSafeAny);
    startResizing(event: MouseEvent | TouchEvent): void;
    private clearListeners;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzResizableService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzResizableService>;
}

//# sourceMappingURL=resizable.service.d.ts.map