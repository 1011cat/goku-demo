/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList } from '@angular/core';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import * as ɵngcc0 from '@angular/core';
export declare class NzTrMeasureComponent implements AfterViewInit, OnDestroy {
    private nzResizeObserver;
    private ngZone;
    private elementRef;
    listOfMeasureColumn: ReadonlyArray<string>;
    readonly listOfAutoWidth: EventEmitter<number[]>;
    listOfTdElement: QueryList<ElementRef>;
    private destroy$;
    constructor(nzResizeObserver: NzResizeObserver, ngZone: NgZone, elementRef: ElementRef);
    trackByFunc(_: number, key: string): string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTrMeasureComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTrMeasureComponent, "tr[nz-table-measure-row]", never, { "listOfMeasureColumn": "listOfMeasureColumn"; }, { "listOfAutoWidth": "listOfAutoWidth"; }, never, never>;
}

//# sourceMappingURL=tr-measure.component.d.ts.map