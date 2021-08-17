/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BooleanInput, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzInputDirective implements OnChanges, OnInit, OnDestroy {
    ngControl: NgControl;
    private directionality;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_nzBorderless: BooleanInput;
    nzBorderless: boolean;
    nzSize: NzSizeLDSType;
    get disabled(): boolean;
    set disabled(value: boolean);
    _disabled: boolean;
    disabled$: Subject<boolean>;
    dir: Direction;
    private destroy$;
    constructor(ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzInputDirective, [{ optional: true; self: true; }, null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzInputDirective, "input[nz-input],textarea[nz-input]", ["nzInput"], { "nzBorderless": "nzBorderless"; "nzSize": "nzSize"; "disabled": "disabled"; }, {}, never>;
}

//# sourceMappingURL=input.directive.d.ts.map