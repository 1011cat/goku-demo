/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTagComponent implements OnChanges, OnDestroy, OnInit {
    private cdr;
    private renderer;
    private elementRef;
    private directionality;
    static ngAcceptInputType_nzChecked: BooleanInput;
    isPresetColor: boolean;
    nzMode: 'default' | 'closeable' | 'checkable';
    nzColor?: string | NzStatusColor | NzPresetColor;
    nzChecked: boolean;
    readonly nzOnClose: EventEmitter<MouseEvent>;
    readonly nzCheckedChange: EventEmitter<boolean>;
    dir: Direction;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, directionality: Directionality);
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    private clearPresetColor;
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    private setPresetColor;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTagComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTagComponent, "nz-tag", ["nzTag"], { "nzMode": "nzMode"; "nzChecked": "nzChecked"; "nzColor": "nzColor"; }, { "nzOnClose": "nzOnClose"; "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=tag.component.d.ts.map