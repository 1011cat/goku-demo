/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService, NzTableI18nInterface } from 'ng-zorro-antd/i18n';
import { NzTableFilterList } from '../table.types';
import * as ɵngcc0 from '@angular/core';
interface NzThItemInterface {
    text: string;
    value: NzSafeAny;
    checked: boolean;
}
export declare class NzTableFilterComponent implements OnChanges, OnDestroy, OnInit {
    private cdr;
    private i18n;
    private elementRef;
    contentTemplate: TemplateRef<NzSafeAny> | null;
    customFilter: boolean;
    extraTemplate: TemplateRef<NzSafeAny> | null;
    filterMultiple: boolean;
    listOfFilter: NzTableFilterList;
    readonly filterChange: EventEmitter<any>;
    private destroy$;
    locale: NzTableI18nInterface;
    isChecked: boolean;
    isVisible: boolean;
    listOfParsedFilter: NzThItemInterface[];
    listOfChecked: NzSafeAny[];
    trackByValue(_: number, item: NzThItemInterface): NzSafeAny;
    check(filter: NzThItemInterface): void;
    confirm(): void;
    reset(): void;
    onVisibleChange(value: boolean): void;
    emitFilterData(): void;
    parseListOfFilter(listOfFilter: NzTableFilterList, reset?: boolean): NzThItemInterface[];
    getCheckedStatus(listOfParsedFilter: NzThItemInterface[]): boolean;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableFilterComponent, "nz-table-filter", never, { "contentTemplate": "contentTemplate"; "customFilter": "customFilter"; "extraTemplate": "extraTemplate"; "filterMultiple": "filterMultiple"; "listOfFilter": "listOfFilter"; }, { "filterChange": "filterChange"; }, never, never>;
}
export {};

//# sourceMappingURL=filter.component.d.ts.map