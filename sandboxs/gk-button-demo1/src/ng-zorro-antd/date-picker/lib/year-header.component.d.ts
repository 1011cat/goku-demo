/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class YearHeaderComponent extends AbstractPanelHeader {
    get startYear(): number;
    get endYear(): number;
    superPrevious(): void;
    superNext(): void;
    getSelectors(): PanelSelector[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<YearHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<YearHeaderComponent, "year-header", ["yearHeader"], {}, {}, never, never>;
}

//# sourceMappingURL=year-header.component.d.ts.map