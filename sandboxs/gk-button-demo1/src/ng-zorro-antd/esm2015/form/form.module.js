/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormControlComponent } from './form-control.component';
import { NzFormItemComponent } from './form-item.component';
import { NzFormLabelComponent } from './form-label.component';
import { NzFormSplitComponent } from './form-split.component';
import { NzFormTextComponent } from './form-text.component';
import { NzFormDirective } from './form.directive';
import * as ɵngcc0 from '@angular/core';
export class NzFormModule {
}
NzFormModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzFormModule });
NzFormModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzFormModule_Factory(t) { return new (t || NzFormModule)(); }, imports: [[BidiModule, CommonModule, NzGridModule, NzIconModule, NzToolTipModule, LayoutModule, PlatformModule, NzOutletModule], NzGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzFormModule, { declarations: function () { return [NzFormDirective,
        NzFormItemComponent,
        NzFormLabelComponent,
        NzFormControlComponent,
        NzFormTextComponent,
        NzFormSplitComponent]; }, imports: function () { return [BidiModule, CommonModule, NzGridModule, NzIconModule, NzToolTipModule, LayoutModule, PlatformModule, NzOutletModule]; }, exports: function () { return [NzGridModule,
        NzFormDirective,
        NzFormItemComponent,
        NzFormLabelComponent,
        NzFormControlComponent,
        NzFormTextComponent,
        NzFormSplitComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzFormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormLabelComponent,
                    NzFormControlComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzGridModule,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormLabelComponent,
                    NzFormControlComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [BidiModule, CommonModule, NzGridModule, NzIconModule, NzToolTipModule, LayoutModule, PlatformModule, NzOutletModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybS9mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFzQm5ELE1BQU0sT0FBTyxZQUFZO0FBQUc7d0NBcEIzQixRQUFRLFNBQUM7TUFDUixZQUFZLEVBQUUsc0JBQ1osZUFBZSxzQkFDZixtQkFBbUIsc0JBQ25CLG9CQUFvQixzQkFDcEIsc0JBQXNCLHNCQUN0QixtQkFBbUIsc0JBQ25CLG9CQUFvQjtXQUNyQixrQkFDRCxPQUFPLEVBQUUsc0JBQ1AsWUFBWSxzQkFDWixlQUFlLHNCQUNmLG1CQUFtQjtXQUNuQjtFQUFvQixzQkFDcEI7Z0JBQXNCO01BQ3RCLG1CQUFtQjtrQkFDbkIsb0JBQW9CLGtCQUNyQixrQkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLGNBQy9IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56Rm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekZvcm1MYWJlbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb3JtU3BsaXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tc3BsaXQuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybVRleHRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56Rm9ybURpcmVjdGl2ZSxcbiAgICBOekZvcm1JdGVtQ29tcG9uZW50LFxuICAgIE56Rm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIE56Rm9ybUNvbnRyb2xDb21wb25lbnQsXG4gICAgTnpGb3JtVGV4dENvbXBvbmVudCxcbiAgICBOekZvcm1TcGxpdENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpHcmlkTW9kdWxlLFxuICAgIE56Rm9ybURpcmVjdGl2ZSxcbiAgICBOekZvcm1JdGVtQ29tcG9uZW50LFxuICAgIE56Rm9ybUxhYmVsQ29tcG9uZW50LFxuICAgIE56Rm9ybUNvbnRyb2xDb21wb25lbnQsXG4gICAgTnpGb3JtVGV4dENvbXBvbmVudCxcbiAgICBOekZvcm1TcGxpdENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBOekdyaWRNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlLCBMYXlvdXRNb2R1bGUsIFBsYXRmb3JtTW9kdWxlLCBOek91dGxldE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtTW9kdWxlIHt9XG4iXX0=