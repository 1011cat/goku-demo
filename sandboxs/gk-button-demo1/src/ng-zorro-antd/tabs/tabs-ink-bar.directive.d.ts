/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, NgZone } from '@angular/core';
import { NzTabPositionMode } from './interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class NzTabsInkBarDirective {
    private elementRef;
    private ngZone;
    animationMode?: string | undefined;
    position: NzTabPositionMode;
    animated: boolean;
    get _animated(): boolean;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, animationMode?: string | undefined);
    alignToElement(element: HTMLElement): void;
    setStyles(element: HTMLElement): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabsInkBarDirective, [null, null, { optional: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTabsInkBarDirective, "nz-tabs-ink-bar, [nz-tabs-ink-bar]", never, { "position": "position"; "animated": "animated"; }, {}, never>;
}

//# sourceMappingURL=tabs-ink-bar.directive.d.ts.map