/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuDividerDirective } from './menu-divider.directive';
import { NzMenuGroupComponent } from './menu-group.component';
import { NzMenuItemDirective } from './menu-item.directive';
import { NzMenuDirective } from './menu.directive';
import { NzSubmenuInlineChildComponent } from './submenu-inline-child.component';
import { NzSubmenuNoneInlineChildComponent } from './submenu-non-inline-child.component';
import { NzSubMenuTitleComponent } from './submenu-title.component';
import { NzSubMenuComponent } from './submenu.component';
import * as ɵngcc0 from '@angular/core';
export class NzMenuModule {
}
NzMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMenuModule });
NzMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[BidiModule, CommonModule, PlatformModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzMenuModule, { declarations: function () { return [NzMenuDirective,
        NzMenuItemDirective,
        NzSubMenuComponent,
        NzMenuDividerDirective,
        NzMenuGroupComponent,
        NzSubMenuTitleComponent,
        NzSubmenuInlineChildComponent,
        NzSubmenuNoneInlineChildComponent]; }, imports: function () { return [BidiModule, CommonModule, PlatformModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzOutletModule]; }, exports: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, PlatformModule, OverlayModule, NzIconModule, NzNoAnimationModule, NzOutletModule],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent,
                    NzSubMenuTitleComponent,
                    NzSubmenuInlineChildComponent,
                    NzSubmenuNoneInlineChildComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBZ0J6RCxNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQWQzQixRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxrQkFDckgsWUFBWSxFQUFFLHNCQUNaLGVBQWUsc0JBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQixzQkFDbEIsc0JBQXNCLHNCQUN0QixvQkFBb0Isc0JBQ3BCLHVCQUF1QjtjQUN2QjtjQUE2QjtRQUM3QjtTQUFpQyxrQkFDbEM7ZUFDRCxPQUFPLEVBQUUsQ0FBQztPQUFlLEVBQUUsbUJBQW1CLEVBQUU7U0FBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxjQUNsSDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOek1lbnVEaXZpZGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWRpdmlkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IE56TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpTdWJtZW51SW5saW5lQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnUtaW5saW5lLWNoaWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelN1Ym1lbnVOb25lSW5saW5lQ2hpbGRDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnUtbm9uLWlubGluZS1jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTdWJNZW51VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1lbnUtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3VibWVudS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56TWVudURpcmVjdGl2ZSxcbiAgICBOek1lbnVJdGVtRGlyZWN0aXZlLFxuICAgIE56U3ViTWVudUNvbXBvbmVudCxcbiAgICBOek1lbnVEaXZpZGVyRGlyZWN0aXZlLFxuICAgIE56TWVudUdyb3VwQ29tcG9uZW50LFxuICAgIE56U3ViTWVudVRpdGxlQ29tcG9uZW50LFxuICAgIE56U3VibWVudUlubGluZUNoaWxkQ29tcG9uZW50LFxuICAgIE56U3VibWVudU5vbmVJbmxpbmVDaGlsZENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTnpNZW51RGlyZWN0aXZlLCBOek1lbnVJdGVtRGlyZWN0aXZlLCBOelN1Yk1lbnVDb21wb25lbnQsIE56TWVudURpdmlkZXJEaXJlY3RpdmUsIE56TWVudUdyb3VwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOek1lbnVNb2R1bGUge31cbiJdfQ==