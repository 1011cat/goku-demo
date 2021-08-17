/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzCheckboxComponent } from './checkbox.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<any[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCheckboxWrapperComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCheckboxWrapperComponent, "nz-checkbox-wrapper", ["nzCheckboxWrapper"], {}, { "nzOnChange": "nzOnChange"; }, never, ["*"]>;
}

//# sourceMappingURL=checkbox-wrapper.component.d.ts.map