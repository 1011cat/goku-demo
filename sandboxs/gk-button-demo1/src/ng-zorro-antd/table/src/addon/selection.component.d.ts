/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzTableSelectionComponent {
    private elementRef;
    listOfSelections: Array<{
        text: string;
        onSelect(...args: NzSafeAny[]): NzSafeAny;
    }>;
    checked: boolean;
    disabled: boolean;
    indeterminate: boolean;
    showCheckbox: boolean;
    showRowSelection: boolean;
    readonly checkedChange: EventEmitter<boolean>;
    constructor(elementRef: ElementRef);
    onCheckedChange(checked: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTableSelectionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTableSelectionComponent, "nz-table-selection", never, { "listOfSelections": "listOfSelections"; "checked": "checked"; "disabled": "disabled"; "indeterminate": "indeterminate"; "showCheckbox": "showCheckbox"; "showRowSelection": "showRowSelection"; }, { "checkedChange": "checkedChange"; }, never, never>;
}

//# sourceMappingURL=selection.component.d.ts.map