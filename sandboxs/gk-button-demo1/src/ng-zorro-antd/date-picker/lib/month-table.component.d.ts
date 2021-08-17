/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnInit } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class MonthTableComponent extends AbstractTable implements OnChanges, OnInit {
    private dateHelper;
    MAX_ROW: number;
    MAX_COL: number;
    constructor(dateHelper: DateHelperService);
    makeHeadRow(): DateCell[];
    makeBodyRows(): DateBodyRow[];
    private isDisabledMonth;
    private addCellProperty;
    private chooseMonth;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthTableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthTableComponent, "month-table", ["monthTable"], {}, {}, never, never>;
}

//# sourceMappingURL=month-table.component.d.ts.map