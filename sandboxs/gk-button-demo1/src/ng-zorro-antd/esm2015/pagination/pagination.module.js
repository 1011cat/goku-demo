/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationDefaultComponent } from './pagination-default.component';
import { NzPaginationItemComponent } from './pagination-item.component';
import { NzPaginationOptionsComponent } from './pagination-options.component';
import { NzPaginationSimpleComponent } from './pagination-simple.component';
import { NzPaginationComponent } from './pagination.component';
import * as ɵngcc0 from '@angular/core';
export class NzPaginationModule {
}
NzPaginationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPaginationModule });
NzPaginationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[BidiModule, CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPaginationModule, { declarations: function () { return [NzPaginationComponent,
        NzPaginationSimpleComponent,
        NzPaginationOptionsComponent,
        NzPaginationItemComponent,
        NzPaginationDefaultComponent]; }, imports: function () { return [BidiModule, CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]; }, exports: function () { return [NzPaginationComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPaginationModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzPaginationComponent,
                    NzPaginationSimpleComponent,
                    NzPaginationOptionsComponent,
                    NzPaginationItemComponent,
                    NzPaginationDefaultComponent
                ],
                exports: [NzPaginationComponent],
                imports: [BidiModule, CommonModule, FormsModule, NzSelectModule, NzI18nModule, NzIconModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFhL0QsTUFBTSxPQUFPLGtCQUFrQjtBQUFHOzhDQVhqQyxRQUFRLFNBQUM7QUFDUixZQUFZLEVBQUUsc0JBQ1oscUJBQXFCLHNCQUNyQiwyQkFBMkIsc0JBQzNCLDRCQUE0QixzQkFDNUIseUJBQXlCLHNCQUN6QjtTQUE0QixrQkFDN0Isa0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUMsa0JBQ2hDLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZO0NBQUUsWUFBWSxDQUFDLGNBQzdGOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25EZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLWRlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uT3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi1vcHRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25TaW1wbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24tc2ltcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIE56UGFnaW5hdGlvblNpbXBsZUNvbXBvbmVudCxcbiAgICBOelBhZ2luYXRpb25PcHRpb25zQ29tcG9uZW50LFxuICAgIE56UGFnaW5hdGlvbkl0ZW1Db21wb25lbnQsXG4gICAgTnpQYWdpbmF0aW9uRGVmYXVsdENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTnpQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56U2VsZWN0TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56SWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uTW9kdWxlIHt9XG4iXX0=