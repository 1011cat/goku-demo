/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class NzTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges, OnDestroy {
    nzConfigService: NzConfigService;
    protected i18n: NzI18nService;
    private element;
    private renderer;
    private cdr;
    private dateHelper;
    private platform;
    private elementRef;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzUse12Hours: BooleanInput;
    static ngAcceptInputType_nzHideDisabledOptions: BooleanInput;
    static ngAcceptInputType_nzAllowEmpty: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    private _onChange?;
    private _onTouched?;
    private destroy$;
    isInit: boolean;
    focused: boolean;
    inputValue: string;
    value: Date | null;
    preValue: Date | null;
    origin: CdkOverlayOrigin;
    inputSize?: number;
    i18nPlaceHolder$: Observable<string | undefined>;
    overlayPositions: ConnectionPositionPair[];
    dir: Direction;
    inputRef: ElementRef<HTMLInputElement>;
    nzId: string | null;
    nzSize: string | null;
    nzHourStep: number;
    nzMinuteStep: number;
    nzSecondStep: number;
    nzClearText: string;
    nzNowText: string;
    nzOkText: string;
    nzPopupClassName: string;
    nzPlaceHolder: string;
    nzAddOn?: TemplateRef<void>;
    nzDefaultOpenValue?: Date;
    nzDisabledHours?: () => number[];
    nzDisabledMinutes?: (hour: number) => number[];
    nzDisabledSeconds?: (hour: number, minute: number) => number[];
    nzFormat: string;
    nzOpen: boolean;
    nzUse12Hours: boolean;
    nzSuffixIcon: string | TemplateRef<NzSafeAny>;
    readonly nzOpenChange: EventEmitter<boolean>;
    nzHideDisabledOptions: boolean;
    nzAllowEmpty: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzBackdrop: boolean;
    emitValue(value: Date | null): void;
    setValue(value: Date | null, syncPreValue?: boolean): void;
    open(): void;
    close(): void;
    updateAutoFocus(): void;
    onClickClearBtn(event: MouseEvent): void;
    onClickOutside(event: MouseEvent): void;
    onFocus(value: boolean): void;
    focus(): void;
    blur(): void;
    onKeyupEsc(): void;
    onKeyupEnter(): void;
    onInputChange(str: string): void;
    onPanelValueChange(value: Date): void;
    setCurrentValueAndClose(): void;
    constructor(nzConfigService: NzConfigService, i18n: NzI18nService, element: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, dateHelper: DateHelperService, platform: Platform, elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    parseTimeString(str: string): void;
    ngAfterViewInit(): void;
    writeValue(time: Date | null | undefined): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTimePickerComponent, [null, null, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTimePickerComponent, "nz-time-picker", ["nzTimePicker"], { "nzId": "nzId"; "nzSize": "nzSize"; "nzHourStep": "nzHourStep"; "nzMinuteStep": "nzMinuteStep"; "nzSecondStep": "nzSecondStep"; "nzClearText": "nzClearText"; "nzNowText": "nzNowText"; "nzOkText": "nzOkText"; "nzPopupClassName": "nzPopupClassName"; "nzPlaceHolder": "nzPlaceHolder"; "nzFormat": "nzFormat"; "nzOpen": "nzOpen"; "nzUse12Hours": "nzUse12Hours"; "nzSuffixIcon": "nzSuffixIcon"; "nzHideDisabledOptions": "nzHideDisabledOptions"; "nzAllowEmpty": "nzAllowEmpty"; "nzDisabled": "nzDisabled"; "nzAutoFocus": "nzAutoFocus"; "nzBackdrop": "nzBackdrop"; "nzAddOn": "nzAddOn"; "nzDefaultOpenValue": "nzDefaultOpenValue"; "nzDisabledHours": "nzDisabledHours"; "nzDisabledMinutes": "nzDisabledMinutes"; "nzDisabledSeconds": "nzDisabledSeconds"; }, { "nzOpenChange": "nzOpenChange"; }, never, never>;
}

//# sourceMappingURL=time-picker.component.d.ts.map