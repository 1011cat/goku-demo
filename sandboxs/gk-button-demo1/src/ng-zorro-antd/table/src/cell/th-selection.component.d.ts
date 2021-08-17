/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzThSelectionComponent implements OnChanges {
    private elementRef;
    static ngAcceptInputType_nzShowCheckbox: BooleanInput;
    static ngAcceptInputType_nzShowRowSelection: BooleanInput;
    nzSelections: Array<{
        text: string;
        onSelect(...args: NzSafeAny[]): NzSafeAny;
    }>;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzShowCheckbox: boolean;
    nzShowRowSelection: boolean;
    readonly nzCheckedChange: EventEmitter<boolean>;
    private isNzShowExpandChanged;
    private isNzShowCheckboxChanged;
    constructor(elementRef: ElementRef);
    onCheckedChange(checked: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzThSelectionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzThSelectionComponent, "th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]", never, { "nzSelections": "nzSelections"; "nzChecked": "nzChecked"; "nzDisabled": "nzDisabled"; "nzIndeterminate": "nzIndeterminate"; "nzShowCheckbox": "nzShowCheckbox"; "nzShowRowSelection": "nzShowRowSelection"; }, { "nzCheckedChange": "nzCheckedChange"; }, never, ["*"]>;
}

//# sourceMappingURL=th-selection.component.d.ts.map