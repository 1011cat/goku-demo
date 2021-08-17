/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzDisplayedMark, NzExtendedMark } from './typings';
import * as ɵngcc0 from '@angular/core';
export declare class NzSliderMarksComponent implements OnChanges {
    static ngAcceptInputType_vertical: BooleanInput;
    static ngAcceptInputType_included: BooleanInput;
    lowerBound: number | null;
    upperBound: number | null;
    marksArray: NzExtendedMark[];
    min: number;
    max: number;
    vertical: boolean;
    included: boolean;
    reverse: boolean;
    marks: NzDisplayedMark[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, mark: NzDisplayedMark): number;
    private buildMarks;
    private getMarkStyles;
    private togglePointActive;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderMarksComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderMarksComponent, "nz-slider-marks", ["nzSliderMarks"], { "lowerBound": "lowerBound"; "upperBound": "upperBound"; "marksArray": "marksArray"; "vertical": "vertical"; "included": "included"; "min": "min"; "max": "max"; "reverse": "reverse"; }, {}, never, never>;
}

//# sourceMappingURL=marks.component.d.ts.map