/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
import * as ɵngcc0 from '@angular/core';
export declare class NzI18nPipe implements PipeTransform {
    private _locale;
    constructor(_locale: NzI18nService);
    transform(path: string, keyValue?: object): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzI18nPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<NzI18nPipe, "nzI18n">;
}

//# sourceMappingURL=nz-i18n.pipe.d.ts.map