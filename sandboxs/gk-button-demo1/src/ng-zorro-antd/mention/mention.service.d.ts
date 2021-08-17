/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NzMentionTriggerDirective } from './mention-trigger';
import * as ɵngcc0 from '@angular/core';
export declare class NzMentionService implements OnDestroy {
    private trigger?;
    private triggerChange$;
    triggerChanged(): Observable<NzMentionTriggerDirective>;
    registerTrigger(trigger: NzMentionTriggerDirective): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzMentionService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NzMentionService>;
}

//# sourceMappingURL=mention.service.d.ts.map