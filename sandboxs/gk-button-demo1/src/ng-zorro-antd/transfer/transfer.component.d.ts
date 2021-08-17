/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { BooleanInput, NgStyleInterface, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService, NzTransferI18nInterface } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import { TransferCanMove, TransferChange, TransferDirection, TransferItem, TransferSearchChange, TransferSelectChange } from './interface';
import { NzTransferListComponent } from './transfer-list.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzTransferComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private elementRef;
    private directionality;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzShowSelectAll: BooleanInput;
    static ngAcceptInputType_nzShowSearch: BooleanInput;
    private unsubscribe$;
    lists: QueryList<NzTransferListComponent>;
    locale: NzTransferI18nInterface;
    leftFilter: string;
    rightFilter: string;
    dir: Direction;
    nzDisabled: boolean;
    nzDataSource: TransferItem[];
    nzTitles: string[];
    nzOperations: string[];
    nzListStyle: NgStyleInterface;
    nzShowSelectAll: boolean;
    nzItemUnit?: string;
    nzItemsUnit?: string;
    nzCanMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    nzRenderList: Array<TemplateRef<NzSafeAny> | null> | null;
    nzRender: TemplateRef<NzSafeAny> | null;
    nzFooter: TemplateRef<NzSafeAny> | null;
    nzShowSearch: boolean;
    nzFilterOption?: (inputValue: string, item: TransferItem) => boolean;
    nzSearchPlaceholder?: string;
    nzNotFoundContent?: string;
    nzTargetKeys: string[];
    nzSelectedKeys: string[];
    readonly nzChange: EventEmitter<TransferChange>;
    readonly nzSearchChange: EventEmitter<TransferSearchChange>;
    readonly nzSelectChange: EventEmitter<TransferSelectChange>;
    leftDataSource: TransferItem[];
    rightDataSource: TransferItem[];
    private splitDataSource;
    private getCheckedData;
    handleLeftSelectAll: (checked: boolean) => void;
    handleRightSelectAll: (checked: boolean) => void;
    handleLeftSelect: (item: TransferItem) => void;
    handleRightSelect: (item: TransferItem) => void;
    handleSelect(direction: TransferDirection, checked: boolean, item?: TransferItem): void;
    handleFilterChange(ret: {
        direction: TransferDirection;
        value: string;
    }): void;
    leftActive: boolean;
    rightActive: boolean;
    private updateOperationStatus;
    moveToLeft: () => void;
    moveToRight: () => void;
    moveTo(direction: TransferDirection): void;
    private truthMoveTo;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, elementRef: ElementRef, directionality: Directionality);
    private markForCheckAllList;
    private handleNzTargetKeys;
    private handleNzSelectedKeys;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTransferComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTransferComponent, "nz-transfer", ["nzTransfer"], { "nzDisabled": "nzDisabled"; "nzDataSource": "nzDataSource"; "nzTitles": "nzTitles"; "nzOperations": "nzOperations"; "nzListStyle": "nzListStyle"; "nzShowSelectAll": "nzShowSelectAll"; "nzCanMove": "nzCanMove"; "nzRenderList": "nzRenderList"; "nzRender": "nzRender"; "nzFooter": "nzFooter"; "nzShowSearch": "nzShowSearch"; "nzTargetKeys": "nzTargetKeys"; "nzSelectedKeys": "nzSelectedKeys"; "nzItemUnit": "nzItemUnit"; "nzItemsUnit": "nzItemsUnit"; "nzFilterOption": "nzFilterOption"; "nzSearchPlaceholder": "nzSearchPlaceholder"; "nzNotFoundContent": "nzNotFoundContent"; }, { "nzChange": "nzChange"; "nzSearchChange": "nzSearchChange"; "nzSelectChange": "nzSelectChange"; }, never, never>;
}

//# sourceMappingURL=transfer.component.d.ts.map