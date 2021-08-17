/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzPaginationI18nInterface } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
export declare class NzPaginationOptionsComponent implements OnChanges {
    private elementRef;
    nzSize: 'default' | 'small';
    disabled: boolean;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    locale: NzPaginationI18nInterface;
    total: number;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: number[];
    readonly pageIndexChange: EventEmitter<number>;
    readonly pageSizeChange: EventEmitter<number>;
    listOfPageSizeOption: Array<{
        value: number;
        label: string;
    }>;
    constructor(elementRef: ElementRef);
    onPageSizeChange(size: number): void;
    jumpToPageViaInput($event: Event): void;
    trackByOption(_: number, option: {
        value: number;
        label: string;
    }): number;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzPaginationOptionsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzPaginationOptionsComponent, "div[nz-pagination-options]", never, { "nzSize": "nzSize"; "disabled": "disabled"; "showSizeChanger": "showSizeChanger"; "showQuickJumper": "showQuickJumper"; "total": "total"; "pageIndex": "pageIndex"; "pageSize": "pageSize"; "pageSizeOptions": "pageSizeOptions"; "locale": "locale"; }, { "pageIndexChange": "pageIndexChange"; "pageSizeChange": "pageSizeChange"; }, never, never>;
}

//# sourceMappingURL=pagination-options.component.d.ts.map