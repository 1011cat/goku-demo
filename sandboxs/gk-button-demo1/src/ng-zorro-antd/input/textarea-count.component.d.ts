/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzInputDirective } from './input.directive';
import * as ɵngcc0 from '@angular/core';
export declare class NzTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: NzInputDirective;
    nzMaxCharacterCount: number;
    nzComputeCharacterCount: (v: string) => number;
    nzFormatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTextareaCountComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTextareaCountComponent, "nz-textarea-count", never, { "nzMaxCharacterCount": "nzMaxCharacterCount"; "nzComputeCharacterCount": "nzComputeCharacterCount"; "nzFormatter": "nzFormatter"; }, {}, ["nzInputDirective"], ["textarea[nz-input]"]>;
}

//# sourceMappingURL=textarea-count.component.d.ts.map