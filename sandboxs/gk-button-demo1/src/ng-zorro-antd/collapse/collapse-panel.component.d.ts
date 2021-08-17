/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzCollapseComponent } from './collapse.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private nzCollapseComponent;
    private elementRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzActive: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzShowArrow: BooleanInput;
    nzActive: boolean;
    nzDisabled: boolean;
    nzShowArrow: boolean;
    nzExtra?: string | TemplateRef<void>;
    nzHeader?: string | TemplateRef<void>;
    nzExpandedIcon?: string | TemplateRef<void>;
    readonly nzActiveChange: EventEmitter<boolean>;
    private destroy$;
    clickHeader(): void;
    markForCheck(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, nzCollapseComponent: NzCollapseComponent, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCollapsePanelComponent, [null, null, { host: true; }, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCollapsePanelComponent, "nz-collapse-panel", ["nzCollapsePanel"], { "nzActive": "nzActive"; "nzDisabled": "nzDisabled"; "nzShowArrow": "nzShowArrow"; "nzExtra": "nzExtra"; "nzHeader": "nzHeader"; "nzExpandedIcon": "nzExpandedIcon"; }, { "nzActiveChange": "nzActiveChange"; }, never, ["*"]>;
}

//# sourceMappingURL=collapse-panel.component.d.ts.map