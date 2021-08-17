/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzThMeasureDirective implements OnChanges {
    private renderer;
    private elementRef;
    changes$: Subject<unknown>;
    nzWidth: string | null;
    colspan: string | number | null;
    colSpan: string | number | null;
    rowspan: string | number | null;
    rowSpan: string | number | null;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzThMeasureDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzThMeasureDirective, "th", never, { "nzWidth": "nzWidth"; "colspan": "colspan"; "colSpan": "colSpan"; "rowspan": "rowspan"; "rowSpan": "rowSpan"; }, {}, never>;
}

//# sourceMappingURL=th-measure.directive.d.ts.map