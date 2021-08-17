/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { NzDisplayedStep, NzExtendedMark } from './typings';
import * as ɵngcc0 from '@angular/core';
export declare class NzSliderStepComponent implements OnChanges {
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
    steps: NzDisplayedStep[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, step: NzDisplayedStep): number;
    private buildSteps;
    private togglePointActive;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzSliderStepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzSliderStepComponent, "nz-slider-step", ["nzSliderStep"], { "lowerBound": "lowerBound"; "upperBound": "upperBound"; "marksArray": "marksArray"; "vertical": "vertical"; "included": "included"; "min": "min"; "max": "max"; "reverse": "reverse"; }, {}, never, never>;
}

//# sourceMappingURL=step.component.d.ts.map