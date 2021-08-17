/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusableOption } from '@angular/cdk/a11y';
import { ElementRef } from '@angular/core';
import { NzTabComponent } from './tab.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzTabNavItemDirective implements FocusableOption {
    elementRef: ElementRef<HTMLElement>;
    disabled: boolean;
    tab: NzTabComponent;
    active: boolean;
    private el;
    private parentElement;
    constructor(elementRef: ElementRef<HTMLElement>);
    focus(): void;
    get width(): number;
    get height(): number;
    get left(): number;
    get top(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabNavItemDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTabNavItemDirective, "[nzTabNavItem]", never, { "disabled": "disabled"; "active": "active"; "tab": "tab"; }, {}, never>;
}

//# sourceMappingURL=tab-nav-item.directive.d.ts.map