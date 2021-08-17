/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class DateHeaderComponent extends AbstractPanelHeader {
    private dateHelper;
    constructor(dateHelper: DateHelperService);
    getSelectors(): PanelSelector[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DateHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DateHeaderComponent, "date-header", ["dateHeader"], {}, {}, never, never>;
}

//# sourceMappingURL=date-header.component.d.ts.map