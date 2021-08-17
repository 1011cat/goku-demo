import { CommonModule } from '@angular/common';
import { Pipe, NgModule } from '@angular/core';
import { timeUnits } from 'ng-zorro-antd/core/time';
import { padStart } from 'ng-zorro-antd/core/util';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
class NzTimeRangePipe {
    transform(value, format = 'HH:mm:ss') {
        let duration = Number(value || 0);
        return timeUnits.reduce((current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (match) => {
                    return padStart(v.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    }
}
NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
NzTimeRangePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTimeRangePipe, [{
        type: Pipe,
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPipesModule {
}
NzPipesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPipesModule });
NzPipesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPipesModule, { declarations: function () { return [NzTimeRangePipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzTimeRangePipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPipesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NzTimeRangePipe],
                declarations: [NzTimeRangePipe]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzPipesModule, NzTimeRangePipe };

//# sourceMappingURL=ng-zorro-antd-core-pipe.js.map