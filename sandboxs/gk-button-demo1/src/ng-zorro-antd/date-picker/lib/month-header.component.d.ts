/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class MonthHeaderComponent extends AbstractPanelHeader {
    private dateHelper;
    constructor(dateHelper: DateHelperService);
    getSelectors(): PanelSelector[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthHeaderComponent, "month-header", ["monthHeader"], {}, {}, never, never>;
}

//# sourceMappingURL=month-header.component.d.ts.map