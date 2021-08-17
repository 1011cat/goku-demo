/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare class NzSanitizerPipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: NzSafeAny, type: 'html'): SafeHtml;
    transform(value: NzSafeAny, type: 'style'): SafeStyle;
    transform(value: NzSafeAny, type: 'url'): SafeUrl;
    transform(value: NzSafeAny, type: 'resourceUrl'): SafeResourceUrl;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSanitizerPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<NzSanitizerPipe, "nzSanitizer">;
}

//# sourceMappingURL=nz-sanitizer.pipe.d.ts.map