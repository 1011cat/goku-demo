/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { CalendarFooterComponent } from './calendar-footer.component';
import { NzDatePickerComponent } from './date-picker.component';
import { DateRangePopupComponent } from './date-range-popup.component';
import { InnerPopupComponent } from './inner-popup.component';
import { LibPackerModule } from './lib/lib-packer.module';
import { NzMonthPickerComponent } from './month-picker.component';
import { NzRangePickerComponent } from './range-picker.component';
import { NzWeekPickerComponent } from './week-picker.component';
import { NzYearPickerComponent } from './year-picker.component';
import * as ɵngcc0 from '@angular/core';
export class NzDatePickerModule {
}
NzDatePickerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDatePickerModule });
NzDatePickerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[
            BidiModule,
            CommonModule,
            FormsModule,
            OverlayModule,
            LibPackerModule,
            NzIconModule,
            NzOverlayModule,
            NzNoAnimationModule,
            NzOutletModule,
            NzTimePickerModule,
            NzButtonModule,
            LibPackerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDatePickerModule, { declarations: function () { return [NzDatePickerComponent,
        NzMonthPickerComponent,
        NzYearPickerComponent,
        NzWeekPickerComponent,
        NzRangePickerComponent,
        CalendarFooterComponent,
        InnerPopupComponent,
        DateRangePopupComponent]; }, imports: function () { return [BidiModule,
        CommonModule,
        FormsModule,
        OverlayModule,
        LibPackerModule,
        NzIconModule,
        NzOverlayModule,
        NzNoAnimationModule,
        NzOutletModule,
        NzTimePickerModule,
        NzButtonModule,
        LibPackerModule]; }, exports: function () { return [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDatePickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BidiModule,
                    CommonModule,
                    FormsModule,
                    OverlayModule,
                    LibPackerModule,
                    NzIconModule,
                    NzOverlayModule,
                    NzNoAnimationModule,
                    NzOutletModule,
                    NzTimePickerModule,
                    NzButtonModule,
                    LibPackerModule
                ],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                declarations: [
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent,
                    CalendarFooterComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUE4QmhFLE1BQU0sT0FBTyxrQkFBa0I7QUFBRzs4Q0E1QmpDLFFBQVEsU0FBQztBQUNSLE9BQU8sRUFBRSxzQkFDUCxVQUFVLHNCQUNWLFlBQVksc0JBQ1osV0FBVyxzQkFDWCxhQUFhO1FBQ2IsZUFBZTtxQkFDZjtPQUFZO0lBQ1osZUFBZTtjQUNmO0lBQW1CO0FBQ25CLGNBQWM7T0FDZCxrQkFBa0I7Y0FDbEI7QUFBYyxzQkFDZDtLQUFlLGtCQUNoQjthQUNELE9BQU8sRUFBRSxDQUFDOztDQUFxQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFDLGtCQUM5SCxZQUFZLEVBQUUsc0JBQ1oscUJBQXFCO29CQUNyQjtVQUFzQjtDQUN0QixxQkFBcUI7YUFDckI7RUFBcUIsc0JBQ3JCO2FBQXNCO01BRXRCLHVCQUF1QixzQkFDdkIsbUJBQW1CO1lBQ25CO2FBQXVCO1VBQ3hCO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpPdmVybGF5TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGltZS1waWNrZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5uZXJQb3B1cENvbXBvbmVudCB9IGZyb20gJy4vaW5uZXItcG9wdXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGliUGFja2VyTW9kdWxlIH0gZnJvbSAnLi9saWIvbGliLXBhY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTnpNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56V2Vla1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vd2Vlay1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56WWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4veWVhci1waWNrZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJpZGlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTGliUGFja2VyTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOek92ZXJsYXlNb2R1bGUsXG4gICAgTnpOb0FuaW1hdGlvbk1vZHVsZSxcbiAgICBOek91dGxldE1vZHVsZSxcbiAgICBOelRpbWVQaWNrZXJNb2R1bGUsXG4gICAgTnpCdXR0b25Nb2R1bGUsXG4gICAgTGliUGFja2VyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtOekRhdGVQaWNrZXJDb21wb25lbnQsIE56UmFuZ2VQaWNrZXJDb21wb25lbnQsIE56TW9udGhQaWNrZXJDb21wb25lbnQsIE56WWVhclBpY2tlckNvbXBvbmVudCwgTnpXZWVrUGlja2VyQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIE56TW9udGhQaWNrZXJDb21wb25lbnQsXG4gICAgTnpZZWFyUGlja2VyQ29tcG9uZW50LFxuICAgIE56V2Vla1BpY2tlckNvbXBvbmVudCxcbiAgICBOelJhbmdlUGlja2VyQ29tcG9uZW50LFxuXG4gICAgQ2FsZW5kYXJGb290ZXJDb21wb25lbnQsXG4gICAgSW5uZXJQb3B1cENvbXBvbmVudCxcbiAgICBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlck1vZHVsZSB7fVxuIl19