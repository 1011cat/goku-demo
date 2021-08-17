/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzCellFixedDirective implements OnChanges {
    private renderer;
    private elementRef;
    nzRight: string | boolean;
    nzLeft: string | boolean;
    colspan: number | null;
    colSpan: number | null;
    changes$: Subject<void>;
    isAutoLeft: boolean;
    isAutoRight: boolean;
    isFixedLeft: boolean;
    isFixedRight: boolean;
    isFixed: boolean;
    setAutoLeftWidth(autoLeft: string | null): void;
    setAutoRightWidth(autoRight: string | null): void;
    setIsFirstRight(isFirstRight: boolean): void;
    setIsLastLeft(isLastLeft: boolean): void;
    private setFixClass;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCellFixedDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzCellFixedDirective, "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", never, { "nzRight": "nzRight"; "nzLeft": "nzLeft"; "colspan": "colspan"; "colSpan": "colSpan"; }, {}, never>;
}

//# sourceMappingURL=cell-fixed.directive.d.ts.map