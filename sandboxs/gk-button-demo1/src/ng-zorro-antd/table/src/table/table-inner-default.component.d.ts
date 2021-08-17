/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableLayout } from '../table.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableInnerDefaultComponent {
    private elementRef;
    tableLayout: NzTableLayout;
    listOfColWidth: ReadonlyArray<string | null>;
    theadTemplate: TemplateRef<NzSafeAny> | null;
    contentTemplate: TemplateRef<NzSafeAny> | null;
    constructor(elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableInnerDefaultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableInnerDefaultComponent, "nz-table-inner-default", never, { "tableLayout": "tableLayout"; "listOfColWidth": "listOfColWidth"; "theadTemplate": "theadTemplate"; "contentTemplate": "contentTemplate"; }, {}, never, never>;
}

//# sourceMappingURL=table-inner-default.component.d.ts.map