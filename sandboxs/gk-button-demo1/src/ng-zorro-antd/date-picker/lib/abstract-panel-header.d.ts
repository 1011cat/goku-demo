/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { NzDateMode } from '../standard-types';
import { PanelSelector } from './interface';
import * as ɵngcc0 from '@angular/core';
export declare abstract class AbstractPanelHeader implements OnInit, OnChanges {
    prefixCls: string;
    selectors: PanelSelector[];
    value: CandyDate;
    locale: NzCalendarI18nInterface;
    showSuperPreBtn: boolean;
    showSuperNextBtn: boolean;
    showPreBtn: boolean;
    showNextBtn: boolean;
    readonly panelModeChange: EventEmitter<NzDateMode>;
    readonly valueChange: EventEmitter<CandyDate>;
    abstract getSelectors(): PanelSelector[];
    superPreviousTitle(): string;
    previousTitle(): string;
    superNextTitle(): string;
    nextTitle(): string;
    superPrevious(): void;
    superNext(): void;
    previous(): void;
    next(): void;
    changeValue(value: CandyDate): void;
    changeMode(mode: NzDateMode): void;
    private render;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AbstractPanelHeader, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AbstractPanelHeader, never, never, { "showSuperPreBtn": "showSuperPreBtn"; "showSuperNextBtn": "showSuperNextBtn"; "showPreBtn": "showPreBtn"; "showNextBtn": "showNextBtn"; "value": "value"; "locale": "locale"; }, { "panelModeChange": "panelModeChange"; "valueChange": "valueChange"; }, never>;
}

//# sourceMappingURL=abstract-panel-header.d.ts.map