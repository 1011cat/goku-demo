/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnDestroy, OnInit, QueryList } from '@angular/core';
import { NzSiderComponent } from './sider.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzLayoutComponent implements OnDestroy, OnInit {
    private elementRef;
    private directionality;
    listOfNzSiderComponent: QueryList<NzSiderComponent>;
    dir: Direction;
    private destroy$;
    constructor(elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzLayoutComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzLayoutComponent, "nz-layout", ["nzLayout"], {}, {}, ["listOfNzSiderComponent"], ["*"]>;
}

//# sourceMappingURL=layout.component.d.ts.map