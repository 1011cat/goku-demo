/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { TabTemplateContext } from './interfaces';
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
import * as ɵngcc0 from '@angular/core';
export declare class NzTabLinkTemplateDirective {
    templateRef: TemplateRef<TabTemplateContext>;
    constructor(templateRef: TemplateRef<TabTemplateContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabLinkTemplateDirective, [{ host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTabLinkTemplateDirective, "ng-template[nzTabLink]", ["nzTabLinkTemplate"], {}, {}, never>;
}
/**
 * This component is for catching `routerLink` directive.
 */
export declare class NzTabLinkDirective {
    elementRef: ElementRef<HTMLAnchorElement>;
    routerLink?: RouterLink | undefined;
    routerLinkWithHref?: RouterLinkWithHref | undefined;
    constructor(elementRef: ElementRef<HTMLAnchorElement>, routerLink?: RouterLink | undefined, routerLinkWithHref?: RouterLinkWithHref | undefined);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTabLinkDirective, [null, { optional: true; self: true; }, { optional: true; self: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTabLinkDirective, "a[nz-tab-link]", ["nzTabLink"], {}, {}, never>;
}

//# sourceMappingURL=tab-link.directive.d.ts.map