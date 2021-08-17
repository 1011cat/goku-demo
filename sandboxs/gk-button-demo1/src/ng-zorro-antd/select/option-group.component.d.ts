/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzOptionGroupComponent implements OnChanges {
    nzLabel: string | number | TemplateRef<NzSafeAny> | null;
    changes: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzOptionGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzOptionGroupComponent, "nz-option-group", ["nzOptionGroup"], { "nzLabel": "nzLabel"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=option-group.component.d.ts.map