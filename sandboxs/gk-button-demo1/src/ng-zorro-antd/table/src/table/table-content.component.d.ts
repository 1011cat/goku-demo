/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableLayout } from '../table.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableContentComponent {
    tableLayout: NzTableLayout;
    theadTemplate: TemplateRef<NzSafeAny> | null;
    contentTemplate: TemplateRef<NzSafeAny> | null;
    listOfColWidth: ReadonlyArray<string | null>;
    scrollX: string | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableContentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableContentComponent, "table[nz-table-content]", never, { "tableLayout": "tableLayout"; "theadTemplate": "theadTemplate"; "contentTemplate": "contentTemplate"; "listOfColWidth": "listOfColWidth"; "scrollX": "scrollX"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=table-content.component.d.ts.map