/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzListItemExtraComponent } from './list-item-cell';
import { NzListComponent } from './list.component';
import * as ɵngcc0 from '@angular/core';
export declare class NzListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    static ngAcceptInputType_nzNoFlex: BooleanInput;
    nzActions: Array<TemplateRef<void>>;
    nzContent?: string | TemplateRef<void>;
    nzExtra: TemplateRef<void> | null;
    nzNoFlex: boolean;
    listItemExtraDirective?: NzListItemExtraComponent;
    private itemLayout?;
    private itemLayout$?;
    get isVerticalAndExtra(): boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: NzListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzListItemComponent, "nz-list-item, [nz-list-item]", ["nzListItem"], { "nzActions": "nzActions"; "nzExtra": "nzExtra"; "nzNoFlex": "nzNoFlex"; "nzContent": "nzContent"; }, {}, ["listItemExtraDirective"], ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"]>;
}

//# sourceMappingURL=list-item.component.d.ts.map