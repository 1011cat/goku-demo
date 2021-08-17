/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzBadgeSupComponent } from './badge-sup.component';
import { NzBadgeComponent } from './badge.component';
import { NzRibbonComponent } from './ribbon.component';
import * as ɵngcc0 from '@angular/core';
export class NzBadgeModule {
}
NzBadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBadgeModule });
NzBadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBadgeModule, { declarations: function () { return [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent]; }, imports: function () { return [BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]; }, exports: function () { return [NzBadgeComponent, NzRibbonComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent],
                exports: [NzBadgeComponent, NzRibbonComponent],
                imports: [BidiModule, CommonModule, ObserversModule, NzOutletModule, NzNoAnimationModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQztLQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLGtCQUN4RSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxrQkFDOUMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUU7QUFBYyxFQUFFLG1CQUFtQixDQUFDLGNBQzFGOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpCYWRnZVN1cENvbXBvbmVudCB9IGZyb20gJy4vYmFkZ2Utc3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9iYWRnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSaWJib25Db21wb25lbnQgfSBmcm9tICcuL3JpYmJvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekJhZGdlQ29tcG9uZW50LCBOekJhZGdlU3VwQ29tcG9uZW50LCBOelJpYmJvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekJhZGdlQ29tcG9uZW50LCBOelJpYmJvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZSwgTnpPdXRsZXRNb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56QmFkZ2VNb2R1bGUge31cbiJdfQ==