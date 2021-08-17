/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuService } from './menu.service';
import { NzMenuModeType } from './menu.types';
import * as ɵngcc0 from '@angular/core';
export declare class NzSubmenuService implements OnDestroy {
    private nzHostSubmenuService;
    nzMenuService: MenuService;
    isMenuInsideDropDown: boolean;
    mode$: Observable<NzMenuModeType>;
    level: number;
    isCurrentSubMenuOpen$: BehaviorSubject<boolean>;
    private isChildSubMenuOpen$;
    /** submenu title & overlay mouse enter status **/
    private isMouseEnterTitleOrOverlay$;
    private childMenuItemClick$;
    private destroy$;
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    onChildMenuItemClick(menu: NzSafeAny): void;
    setOpenStateWithoutDebounce(value: boolean): void;
    setMouseEnterTitleOrOverlayState(value: boolean): void;
    constructor(nzHostSubmenuService: NzSubmenuService, nzMenuService: MenuService, isMenuInsideDropDown: boolean);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSubmenuService, [{ optional: true; skipSelf: true; }, null, null]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzSubmenuService>;
}

//# sourceMappingURL=submenu.service.d.ts.map