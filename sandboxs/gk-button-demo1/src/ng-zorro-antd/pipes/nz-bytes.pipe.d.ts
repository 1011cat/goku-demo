/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as ɵngcc0 from '@angular/core';
export declare type ByteUnit = 'B' | 'kB' | 'KB' | 'MB' | 'GB' | 'TB';
export declare class NzBytesPipe implements PipeTransform {
    static formats: {
        [key: string]: {
            max: number;
            prev?: ByteUnit;
        };
    };
    transform(input: NzSafeAny, decimal?: number, from?: ByteUnit, to?: ByteUnit): NzSafeAny;
    static formatResult(result: number, unit: string): string;
    static calculateResult(format: {
        max: number;
        prev?: ByteUnit;
    }, bytes: number): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzBytesPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<NzBytesPipe, "nzBytes">;
}

//# sourceMappingURL=nz-bytes.pipe.d.ts.map