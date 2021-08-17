/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';
import { NzMNContainerComponent } from './base';
import { NzMessageData } from './typings';
import * as ɵngcc0 from '@angular/core';
export declare class NzMessageContainerComponent extends NzMNContainerComponent {
    readonly destroy$: Subject<void>;
    dir: Direction;
    instances: Array<Required<NzMessageData>>;
    top?: string | null;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService);
    protected subscribeConfigChange(): void;
    protected updateConfig(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMessageContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzMessageContainerComponent, "nz-message-container", ["nzMessageContainer"], {}, {}, never, never>;
}

//# sourceMappingURL=message-container.component.d.ts.map