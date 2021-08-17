/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ɵNzTransitionPatchModule as NzTransitionPatchModule } from 'ng-zorro-antd/core/transition-patch';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonGroupComponent } from './button-group.component';
import { NzButtonComponent } from './button.component';
import * as ɵngcc0 from '@angular/core';
export class NzButtonModule {
}
NzButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzButtonModule });
NzButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzButtonModule_Factory(t) { return new (t || NzButtonModule)(); }, imports: [[BidiModule, CommonModule, NzWaveModule, NzIconModule, NzTransitionPatchModule], NzTransitionPatchModule, NzWaveModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzButtonModule, { declarations: function () { return [NzButtonComponent, NzButtonGroupComponent]; }, imports: function () { return [BidiModule, CommonModule, NzWaveModule, NzIconModule, NzTransitionPatchModule]; }, exports: function () { return [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [NzButtonComponent, NzButtonGroupComponent],
                exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule],
                imports: [BidiModule, CommonModule, NzWaveModule, NzIconModule, NzTransitionPatchModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxjQUFjO0FBQUc7MENBTDdCLFFBQVEsU0FBQztJQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDLGtCQUN6RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLENBQUMsa0JBQzNGLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTtRQUF1QixDQUFDLGNBQ3pGOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyDJtU56VHJhbnNpdGlvblBhdGNoTW9kdWxlIGFzIE56VHJhbnNpdGlvblBhdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyYW5zaXRpb24tcGF0Y2gnO1xuaW1wb3J0IHsgTnpXYXZlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3dhdmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56QnV0dG9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekJ1dHRvbkNvbXBvbmVudCwgTnpCdXR0b25Hcm91cENvbXBvbmVudCwgTnpUcmFuc2l0aW9uUGF0Y2hNb2R1bGUsIE56V2F2ZU1vZHVsZV0sXG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIE56V2F2ZU1vZHVsZSwgTnpJY29uTW9kdWxlLCBOelRyYW5zaXRpb25QYXRjaE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpCdXR0b25Nb2R1bGUge31cbiJdfQ==