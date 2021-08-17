/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzEmptyI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
declare const NzEmptyDefaultImages: readonly ["default", "simple"];
declare type NzEmptyNotFoundImageType = typeof NzEmptyDefaultImages[number] | null | string | TemplateRef<void>;
export declare class NzEmptyComponent implements OnChanges, OnInit, OnDestroy {
    private i18n;
    private cdr;
    nzNotFoundImage: NzEmptyNotFoundImageType;
    nzNotFoundContent?: string | TemplateRef<void> | null;
    nzNotFoundFooter?: string | TemplateRef<void>;
    isContentString: boolean;
    isImageBuildIn: boolean;
    locale: NzEmptyI18nInterface;
    private readonly destroy$;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzEmptyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzEmptyComponent, "nz-empty", ["nzEmpty"], { "nzNotFoundImage": "nzNotFoundImage"; "nzNotFoundContent": "nzNotFoundContent"; "nzNotFoundFooter": "nzNotFoundFooter"; }, {}, never, never>;
}
export {};

//# sourceMappingURL=empty.component.d.ts.map