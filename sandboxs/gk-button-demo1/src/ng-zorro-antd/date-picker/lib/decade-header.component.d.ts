/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare class DecadeHeaderComponent extends AbstractPanelHeader {
    previous(): void;
    next(): void;
    get startYear(): number;
    get endYear(): number;
    superPrevious(): void;
    superNext(): void;
    getSelectors(): PanelSelector[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DecadeHeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DecadeHeaderComponent, "decade-header", ["decadeHeader"], {}, {}, never, never>;
}

//# sourceMappingURL=decade-header.component.d.ts.map