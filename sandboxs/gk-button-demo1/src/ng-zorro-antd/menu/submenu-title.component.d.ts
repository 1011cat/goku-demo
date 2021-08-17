/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzMenuModeType } from './menu.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzSubMenuTitleComponent implements OnDestroy, OnInit {
    private cdr;
    private directionality;
    nzIcon: string | null;
    nzTitle: string | TemplateRef<void> | null;
    isMenuInsideDropDown: boolean;
    nzDisabled: boolean;
    paddingLeft: number | null;
    mode: NzMenuModeType;
    readonly toggleSubMenu: EventEmitter<any>;
    readonly subMenuMouseState: EventEmitter<boolean>;
    dir: Direction;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setMouseState(state: boolean): void;
    clickTitle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSubMenuTitleComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSubMenuTitleComponent, "[nz-submenu-title]", ["nzSubmenuTitle"], { "nzIcon": "nzIcon"; "nzTitle": "nzTitle"; "isMenuInsideDropDown": "isMenuInsideDropDown"; "nzDisabled": "nzDisabled"; "paddingLeft": "paddingLeft"; "mode": "mode"; }, { "toggleSubMenu": "toggleSubMenu"; "subMenuMouseState": "subMenuMouseState"; }, never, ["*"]>;
}

//# sourceMappingURL=submenu-title.component.d.ts.map