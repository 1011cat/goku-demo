/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { NzCheckboxWrapperComponent } from './checkbox-wrapper.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCheckboxComponent implements OnInit, ControlValueAccessor, OnDestroy, AfterViewInit {
    private elementRef;
    private nzCheckboxWrapperComponent;
    private cdr;
    private focusMonitor;
    private directionality;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzIndeterminate: BooleanInput;
    static ngAcceptInputType_nzChecked: BooleanInput;
    dir: Direction;
    private destroy$;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    private inputElement;
    readonly nzCheckedChange: EventEmitter<boolean>;
    nzValue: NzSafeAny | null;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzChecked: boolean;
    hostClick(e: MouseEvent): void;
    innerCheckedChange(checked: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef<HTMLElement>, nzCheckboxWrapperComponent: NzCheckboxWrapperComponent, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, directionality: Directionality);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCheckboxComponent, [null, { optional: true; }, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxComponent, "[nz-checkbox]", ["nzCheckbox"], { "nzValue": "nzValue"; "nzAutoFocus": "nzAutoFocus"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzChecked": "nzChecked"; }, { "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=checkbox.component.d.ts.map