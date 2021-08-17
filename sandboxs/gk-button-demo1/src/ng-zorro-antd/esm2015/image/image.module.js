/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzImageGroupComponent } from './image-group.component';
import { NzImagePreviewComponent } from './image-preview.component';
import { NzImageDirective } from './image.directive';
import { NzImageService } from './image.service';
import * as ɵngcc0 from '@angular/core';
export class NzImageModule {
}
NzImageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzImageModule });
NzImageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzImageModule_Factory(t) { return new (t || NzImageModule)(); }, providers: [NzImageService], imports: [[BidiModule, OverlayModule, PortalModule, DragDropModule, CommonModule, NzIconModule, NzPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzImageModule, { declarations: function () { return [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]; }, imports: function () { return [BidiModule, OverlayModule, PortalModule, DragDropModule, CommonModule, NzIconModule, NzPipesModule]; }, exports: function () { return [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzImageModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, OverlayModule, PortalModule, DragDropModule, CommonModule, NzIconModule, NzPipesModule],
                exports: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent],
                providers: [NzImageService],
                entryComponents: [NzImagePreviewComponent],
                declarations: [NzImageDirective, NzImagePreviewComponent, NzImageGroupComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVNqRCxNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQVA1QixRQUFRLFNBQUM7S0FDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsa0JBQzdHLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDLGtCQUMzRSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsa0JBQzNCO1VBQWUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLGtCQUMxQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQyxjQUNqRjs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpQaXBlc01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGlwZXMnO1xuXG5pbXBvcnQgeyBOekltYWdlR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekltYWdlUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpJbWFnZURpcmVjdGl2ZSB9IGZyb20gJy4vaW1hZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56SW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi9pbWFnZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSwgRHJhZ0Ryb3BNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOelBpcGVzTW9kdWxlXSxcbiAgZXhwb3J0czogW056SW1hZ2VEaXJlY3RpdmUsIE56SW1hZ2VQcmV2aWV3Q29tcG9uZW50LCBOekltYWdlR3JvdXBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOekltYWdlU2VydmljZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW056SW1hZ2VQcmV2aWV3Q29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTnpJbWFnZURpcmVjdGl2ZSwgTnpJbWFnZVByZXZpZXdDb21wb25lbnQsIE56SW1hZ2VHcm91cENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTnpJbWFnZU1vZHVsZSB7fVxuIl19