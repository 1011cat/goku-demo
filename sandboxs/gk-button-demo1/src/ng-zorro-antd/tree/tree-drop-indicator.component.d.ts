/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgStyleInterface } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTreeDropIndicatorComponent implements OnChanges {
    private cdr;
    dropPosition?: number;
    level: number;
    direction: string;
    style: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(_changes: SimpleChanges): void;
    renderIndicator(dropPosition: number, direction?: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeDropIndicatorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeDropIndicatorComponent, "nz-tree-drop-indicator", ["NzTreeDropIndicator"], { "level": "level"; "direction": "direction"; "dropPosition": "dropPosition"; }, {}, never, never>;
}

//# sourceMappingURL=tree-drop-indicator.component.d.ts.map