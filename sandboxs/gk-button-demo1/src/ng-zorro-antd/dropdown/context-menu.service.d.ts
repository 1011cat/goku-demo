/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { NzDropdownMenuComponent } from './dropdown-menu.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzContextMenuService {
    private overlay;
    private overlayRef;
    private closeSubscription;
    constructor(overlay: Overlay);
    create($event: MouseEvent | {
        x: number;
        y: number;
    }, nzDropdownMenuComponent: NzDropdownMenuComponent): void;
    close(clear?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzContextMenuService, never>;
}

//# sourceMappingURL=context-menu.service.d.ts.map