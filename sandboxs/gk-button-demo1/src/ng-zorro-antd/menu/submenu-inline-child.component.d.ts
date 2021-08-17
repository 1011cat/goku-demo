/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMenuModeType } from './menu.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzSubmenuInlineChildComponent implements OnDestroy, OnInit, OnChanges {
    private elementRef;
    private renderer;
    private directionality;
    templateOutlet: TemplateRef<NzSafeAny> | null;
    menuClass: string;
    mode: NzMenuModeType;
    nzOpen: boolean;
    listOfCacheClassName: string[];
    expandState: string;
    dir: Direction;
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, directionality: Directionality);
    calcMotionState(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSubmenuInlineChildComponent, [null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSubmenuInlineChildComponent, "[nz-submenu-inline-child]", ["nzSubmenuInlineChild"], { "templateOutlet": "templateOutlet"; "menuClass": "menuClass"; "mode": "mode"; "nzOpen": "nzOpen"; }, {}, never, never>;
}

//# sourceMappingURL=submenu-inline-child.component.d.ts.map