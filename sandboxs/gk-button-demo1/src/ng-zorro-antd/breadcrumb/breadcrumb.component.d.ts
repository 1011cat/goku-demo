/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, Injector, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class NzBreadCrumbComponent implements OnInit, OnDestroy {
    private injector;
    private ngZone;
    private cdr;
    private elementRef;
    private renderer;
    private directionality;
    static ngAcceptInputType_nzAutoGenerate: BooleanInput;
    nzAutoGenerate: boolean;
    nzSeparator: string | TemplateRef<void> | null;
    nzRouteLabel: string;
    nzRouteLabelFn: (label: string) => string;
    breadcrumbs: BreadcrumbOption[];
    dir: Direction;
    private destroy$;
    constructor(injector: Injector, ngZone: NgZone, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    navigate(url: string, e: MouseEvent): void;
    private registerRouterChange;
    private getBreadcrumbs;
    private prepareComponentForRtl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBreadCrumbComponent, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzBreadCrumbComponent, "nz-breadcrumb", ["nzBreadcrumb"], { "nzAutoGenerate": "nzAutoGenerate"; "nzSeparator": "nzSeparator"; "nzRouteLabel": "nzRouteLabel"; "nzRouteLabelFn": "nzRouteLabelFn"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=breadcrumb.component.d.ts.map