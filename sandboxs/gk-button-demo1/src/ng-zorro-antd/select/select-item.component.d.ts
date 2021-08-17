/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzSelectItemComponent {
    private elementRef;
    disabled: boolean;
    label: string | number | null | undefined;
    deletable: boolean;
    removeIcon: TemplateRef<NzSafeAny> | null;
    contentTemplateOutletContext: NzSafeAny | null;
    contentTemplateOutlet: string | TemplateRef<NzSafeAny> | null;
    readonly delete: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    onDelete(e: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSelectItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSelectItemComponent, "nz-select-item", never, { "disabled": "disabled"; "label": "label"; "deletable": "deletable"; "removeIcon": "removeIcon"; "contentTemplateOutletContext": "contentTemplateOutletContext"; "contentTemplateOutlet": "contentTemplateOutlet"; }, { "delete": "delete"; }, never, never>;
}

//# sourceMappingURL=select-item.component.d.ts.map