import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
const antDesignIcons = AllIcons;
const ɵ0 = key => {
    const i = antDesignIcons[key];
    return i;
};
const icons = Object.keys(antDesignIcons).map(ɵ0);
const ɵ1 = icons;
/**
 * Include this module in every testing spec, except `icon.spec.ts`.
 */
// @dynamic
class NzIconTestModule {
}
NzIconTestModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzIconTestModule });
NzIconTestModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzIconTestModule_Factory(t) { return new (t || NzIconTestModule)(); }, providers: [
        {
            provide: NZ_ICONS,
            useValue: ɵ1
        }
    ], imports: [NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzIconTestModule, { exports: function () { return [NzIconModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzIconTestModule, [{
        type: NgModule,
        args: [{
                exports: [NzIconModule],
                providers: [
                    {
                        provide: NZ_ICONS,
                        useValue: ɵ1
                    }
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzIconTestModule, ɵ0, ɵ1 };

//# sourceMappingURL=ng-zorro-antd-icon-testing.js.map