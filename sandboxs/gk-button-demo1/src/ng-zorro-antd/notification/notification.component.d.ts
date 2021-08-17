/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { NzMNComponent } from 'ng-zorro-antd/message';
import { NzNotificationData } from './typings';
import * as ɵngcc0 from '@angular/core';
export declare class NzNotificationComponent extends NzMNComponent implements OnDestroy {
    instance: Required<NzNotificationData>;
    placement?: string;
    index: number;
    readonly destroyed: EventEmitter<{
        id: string;
        userAction: boolean;
    }>;
    constructor(cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    onClick(event: MouseEvent): void;
    close(): void;
    get state(): string | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzNotificationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzNotificationComponent, "nz-notification", ["nzNotification"], { "instance": "instance"; "placement": "placement"; "index": "index"; }, { "destroyed": "destroyed"; }, never, never>;
}

//# sourceMappingURL=notification.component.d.ts.map