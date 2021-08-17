/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NzRowExpandButtonDirective {
    private elementRef;
    expand: boolean;
    spaceMode: boolean;
    readonly expandChange: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    onHostClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzRowExpandButtonDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzRowExpandButtonDirective, "button[nz-row-expand-button]", never, { "expand": "expand"; "spaceMode": "spaceMode"; }, { "expandChange": "expandChange"; }, never>;
}

//# sourceMappingURL=row-expand-button.directive.d.ts.map