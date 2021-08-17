/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzBadgeSupComponent implements OnInit, OnChanges {
    private elementRef;
    nzOffset?: [number, number];
    nzTitle?: string | null | undefined;
    nzStyle: {
        [key: string]: string;
    } | null;
    nzDot: boolean;
    nzOverflowCount: number;
    disableAnimation: boolean;
    nzCount?: number | TemplateRef<NzSafeAny>;
    noAnimation: boolean;
    maxNumberArray: string[];
    countArray: number[];
    count: number;
    countSingleArray: number[];
    constructor(elementRef: ElementRef);
    generateMaxNumberArray(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBadgeSupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzBadgeSupComponent, "nz-badge-sup", ["nzBadgeSup"], { "nzStyle": "nzStyle"; "nzDot": "nzDot"; "nzOverflowCount": "nzOverflowCount"; "disableAnimation": "disableAnimation"; "noAnimation": "noAnimation"; "nzOffset": "nzOffset"; "nzTitle": "nzTitle"; "nzCount": "nzCount"; }, {}, never, never>;
}

//# sourceMappingURL=badge-sup.component.d.ts.map