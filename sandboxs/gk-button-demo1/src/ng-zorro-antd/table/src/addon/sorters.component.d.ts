/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableSortOrder } from '../table.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableSortersComponent implements OnChanges {
    private elementRef;
    sortDirections: NzTableSortOrder[];
    sortOrder: NzTableSortOrder;
    contentTemplate: TemplateRef<NzSafeAny> | null;
    isUp: boolean;
    isDown: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableSortersComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableSortersComponent, "nz-table-sorters", never, { "sortDirections": "sortDirections"; "sortOrder": "sortOrder"; "contentTemplate": "contentTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=sorters.component.d.ts.map