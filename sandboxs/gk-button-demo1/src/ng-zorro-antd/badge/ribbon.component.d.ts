/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzRibbonComponent implements OnChanges {
    private elementRef;
    nzColor: string | undefined;
    nzPlacement: 'start' | 'end';
    nzText: string | TemplateRef<void> | null;
    presetColor: string | null;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRibbonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzRibbonComponent, "nz-ribbon", ["nzRibbon"], { "nzPlacement": "nzPlacement"; "nzText": "nzText"; "nzColor": "nzColor"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=ribbon.component.d.ts.map