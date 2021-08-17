/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTableData, NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableQueryParams, NzTableSize } from '../table.types';
import { NzTableInnerScrollComponent } from './table-inner-scroll.component';
import { NzTableVirtualScrollDirective } from './table-virtual-scroll.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableComponent<T = NzSafeAny> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private elementRef;
    private nzResizeObserver;
    private nzConfigService;
    private cdr;
    private nzTableStyleService;
    private nzTableDataService;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzFrontPagination: BooleanInput;
    static ngAcceptInputType_nzTemplateMode: BooleanInput;
    static ngAcceptInputType_nzShowPagination: BooleanInput;
    static ngAcceptInputType_nzLoading: BooleanInput;
    static ngAcceptInputType_nzBordered: BooleanInput;
    static ngAcceptInputType_nzOuterBordered: BooleanInput;
    static ngAcceptInputType_nzShowSizeChanger: BooleanInput;
    static ngAcceptInputType_nzHideOnSinglePage: BooleanInput;
    static ngAcceptInputType_nzShowQuickJumper: BooleanInput;
    static ngAcceptInputType_nzSimple: BooleanInput;
    nzTableLayout: NzTableLayout;
    nzShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }> | null;
    nzItemRender: TemplateRef<PaginationItemRenderContext> | null;
    nzTitle: string | TemplateRef<NzSafeAny> | null;
    nzFooter: string | TemplateRef<NzSafeAny> | null;
    nzNoResult: string | TemplateRef<NzSafeAny> | undefined;
    nzPageSizeOptions: number[];
    nzVirtualItemSize: number;
    nzVirtualMaxBufferPx: number;
    nzVirtualMinBufferPx: number;
    nzVirtualForTrackBy: TrackByFunction<NzTableData>;
    nzLoadingDelay: number;
    nzPageIndex: number;
    nzPageSize: number;
    nzTotal: number;
    nzWidthConfig: ReadonlyArray<string | null>;
    nzData: ReadonlyArray<T>;
    nzPaginationPosition: NzTablePaginationPosition;
    nzScroll: {
        x?: string | null;
        y?: string | null;
    };
    nzPaginationType: NzTablePaginationType;
    nzFrontPagination: boolean;
    nzTemplateMode: boolean;
    nzShowPagination: boolean;
    nzLoading: boolean;
    nzOuterBordered: boolean;
    nzLoadingIndicator: TemplateRef<NzSafeAny> | null;
    nzBordered: boolean;
    nzSize: NzTableSize;
    nzShowSizeChanger: boolean;
    nzHideOnSinglePage: boolean;
    nzShowQuickJumper: boolean;
    nzSimple: boolean;
    readonly nzPageSizeChange: EventEmitter<number>;
    readonly nzPageIndexChange: EventEmitter<number>;
    readonly nzQueryParams: EventEmitter<NzTableQueryParams>;
    readonly nzCurrentPageDataChange: EventEmitter<readonly any[]>;
    /** public data for ngFor tr */
    data: ReadonlyArray<T>;
    cdkVirtualScrollViewport?: CdkVirtualScrollViewport;
    scrollX: string | null;
    scrollY: string | null;
    theadTemplate: TemplateRef<NzSafeAny> | null;
    listOfAutoColWidth: ReadonlyArray<string | null>;
    listOfManualColWidth: ReadonlyArray<string | null>;
    hasFixLeft: boolean;
    hasFixRight: boolean;
    showPagination: boolean;
    private destroy$;
    private loading$;
    private templateMode$;
    dir: Direction;
    nzVirtualScrollDirective: NzTableVirtualScrollDirective;
    nzTableInnerScrollComponent: NzTableInnerScrollComponent;
    verticalScrollBarWidth: number;
    onPageSizeChange(size: number): void;
    onPageIndexChange(index: number): void;
    constructor(elementRef: ElementRef, nzResizeObserver: NzResizeObserver, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, nzTableStyleService: NzTableStyleService, nzTableDataService: NzTableDataService, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private setScrollOnChanges;
    private updateShowPagination;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableComponent<any>, [null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableComponent<any>, "nz-table", ["nzTable"], { "nzTableLayout": "nzTableLayout"; "nzShowTotal": "nzShowTotal"; "nzItemRender": "nzItemRender"; "nzTitle": "nzTitle"; "nzFooter": "nzFooter"; "nzNoResult": "nzNoResult"; "nzPageSizeOptions": "nzPageSizeOptions"; "nzVirtualItemSize": "nzVirtualItemSize"; "nzVirtualMaxBufferPx": "nzVirtualMaxBufferPx"; "nzVirtualMinBufferPx": "nzVirtualMinBufferPx"; "nzVirtualForTrackBy": "nzVirtualForTrackBy"; "nzLoadingDelay": "nzLoadingDelay"; "nzPageIndex": "nzPageIndex"; "nzPageSize": "nzPageSize"; "nzTotal": "nzTotal"; "nzWidthConfig": "nzWidthConfig"; "nzData": "nzData"; "nzPaginationPosition": "nzPaginationPosition"; "nzScroll": "nzScroll"; "nzPaginationType": "nzPaginationType"; "nzFrontPagination": "nzFrontPagination"; "nzTemplateMode": "nzTemplateMode"; "nzShowPagination": "nzShowPagination"; "nzLoading": "nzLoading"; "nzOuterBordered": "nzOuterBordered"; "nzLoadingIndicator": "nzLoadingIndicator"; "nzBordered": "nzBordered"; "nzSize": "nzSize"; "nzShowSizeChanger": "nzShowSizeChanger"; "nzHideOnSinglePage": "nzHideOnSinglePage"; "nzShowQuickJumper": "nzShowQuickJumper"; "nzSimple": "nzSimple"; }, { "nzPageSizeChange": "nzPageSizeChange"; "nzPageIndexChange": "nzPageIndexChange"; "nzQueryParams": "nzQueryParams"; "nzCurrentPageDataChange": "nzCurrentPageDataChange"; }, ["nzVirtualScrollDirective"], ["*"]>;
}

//# sourceMappingURL=table.component.d.ts.map