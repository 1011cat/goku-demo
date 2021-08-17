/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnInit, TemplateRef } from '@angular/core';
import { NzBreakpointKey } from 'ng-zorro-antd/core/services';
import * as ɵngcc0 from '@angular/core';
export declare class NzSiderTriggerComponent implements OnChanges, OnInit {
    nzCollapsed: boolean;
    nzReverseArrow: boolean;
    nzZeroTrigger: TemplateRef<void> | null;
    nzTrigger: TemplateRef<void> | undefined | null;
    matchBreakPoint: boolean;
    nzCollapsedWidth: number | null;
    siderWidth: string | null;
    nzBreakpoint: NzBreakpointKey | null;
    isZeroTrigger: boolean;
    isNormalTrigger: boolean;
    updateTriggerType(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSiderTriggerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSiderTriggerComponent, "[nz-sider-trigger]", ["nzSiderTrigger"], { "nzCollapsed": "nzCollapsed"; "nzReverseArrow": "nzReverseArrow"; "nzZeroTrigger": "nzZeroTrigger"; "nzTrigger": "nzTrigger"; "matchBreakPoint": "matchBreakPoint"; "nzCollapsedWidth": "nzCollapsedWidth"; "siderWidth": "siderWidth"; "nzBreakpoint": "nzBreakpoint"; }, {}, never, never>;
}

//# sourceMappingURL=sider-trigger.component.d.ts.map