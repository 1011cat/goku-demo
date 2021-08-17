/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzSelectSearchComponent implements AfterViewInit, OnChanges {
    private elementRef;
    private renderer;
    private focusMonitor;
    nzId: string | null;
    disabled: boolean;
    mirrorSync: boolean;
    showInput: boolean;
    focusTrigger: boolean;
    value: string;
    autofocus: boolean;
    readonly valueChange: EventEmitter<string>;
    readonly isComposingChange: EventEmitter<boolean>;
    inputElement: ElementRef;
    mirrorElement?: ElementRef;
    setCompositionState(isComposing: boolean): void;
    onValueChange(value: string): void;
    clearInputValue(): void;
    syncMirrorWidth(): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, focusMonitor: FocusMonitor);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSelectSearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSelectSearchComponent, "nz-select-search", never, { "nzId": "nzId"; "disabled": "disabled"; "mirrorSync": "mirrorSync"; "showInput": "showInput"; "focusTrigger": "focusTrigger"; "value": "value"; "autofocus": "autofocus"; }, { "valueChange": "valueChange"; "isComposingChange": "isComposingChange"; }, never, never>;
}

//# sourceMappingURL=select-search.component.d.ts.map