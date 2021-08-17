/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzThAddOnComponent } from '../cell/th-addon.component';
import { NzTableDataService } from '../table-data.service';
import { NzTableStyleService } from '../table-style.service';
import { NzTrDirective } from './tr.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzTheadComponent implements AfterContentInit, OnDestroy, AfterViewInit, OnInit {
    private elementRef;
    private renderer;
    private nzTableStyleService;
    private nzTableDataService;
    private destroy$;
    isInsideTable: boolean;
    templateRef: TemplateRef<NzSafeAny>;
    listOfNzTrDirective: QueryList<NzTrDirective>;
    listOfNzThAddOnComponent: QueryList<NzThAddOnComponent>;
    readonly nzSortOrderChange: EventEmitter<{
        key: NzSafeAny;
        value: string | null;
    }>;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzTableStyleService: NzTableStyleService, nzTableDataService: NzTableDataService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTheadComponent, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTheadComponent, "thead:not(.ant-table-thead)", never, {}, { "nzSortOrderChange": "nzSortOrderChange"; }, ["listOfNzTrDirective", "listOfNzThAddOnComponent"], ["*"]>;
}

//# sourceMappingURL=thead.component.d.ts.map