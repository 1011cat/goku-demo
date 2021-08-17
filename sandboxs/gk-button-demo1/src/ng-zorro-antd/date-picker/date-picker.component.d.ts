/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzResizeObserver } from 'ng-zorro-antd/core/resize-observers';
import { CandyDate, CompatibleValue } from 'ng-zorro-antd/core/time';
import { BooleanInput, FunctionProp, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { DateHelperService, NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { Subject } from 'rxjs';
import { DatePickerService } from './date-picker.service';
import { DateRangePopupComponent } from './date-range-popup.component';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair, HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { CompatibleDate, DisabledTimeFn, NzDateMode, PresetRanges, RangePartType, SupportTimeOptions } from './standard-types';
import * as ɵngcc0 from '@angular/core';
export declare type NzDatePickerSizeType = 'large' | 'default' | 'small';
/**
 * The base picker for all common APIs
 */
export declare class NzDatePickerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, ControlValueAccessor {
    nzConfigService: NzConfigService;
    datePickerService: DatePickerService;
    protected i18n: NzI18nService;
    protected cdr: ChangeDetectorRef;
    private renderer;
    private elementRef;
    private dateHelper;
    private nzResizeObserver;
    private platform;
    private directionality;
    noAnimation?: NzNoAnimationDirective | undefined;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_nzAllowClear: BooleanInput;
    static ngAcceptInputType_nzAutoFocus: BooleanInput;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    static ngAcceptInputType_nzBorderless: BooleanInput;
    static ngAcceptInputType_nzInputReadOnly: BooleanInput;
    static ngAcceptInputType_nzInline: BooleanInput;
    static ngAcceptInputType_nzOpen: BooleanInput;
    static ngAcceptInputType_nzShowToday: BooleanInput;
    static ngAcceptInputType_nzShowNow: BooleanInput;
    static ngAcceptInputType_nzMode: NzDateMode | NzDateMode[] | string | string[] | null | undefined;
    static ngAcceptInputType_nzShowTime: BooleanInput | SupportTimeOptions | null | undefined;
    isRange: boolean;
    extraFooter?: TemplateRef<NzSafeAny> | string;
    dir: Direction;
    panelMode: NzDateMode | NzDateMode[];
    private destroyed$;
    private isCustomPlaceHolder;
    private isCustomFormat;
    private showTime;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzBorderless: boolean;
    nzInputReadOnly: boolean;
    nzInline: boolean;
    nzOpen?: boolean;
    nzDisabledDate?: (d: Date) => boolean;
    nzLocale: NzDatePickerI18nInterface;
    nzPlaceHolder: string | string[];
    nzPopupStyle: object;
    nzDropdownClassName?: string;
    nzSize: NzDatePickerSizeType;
    nzFormat: string;
    nzDateRender?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<Date> | string>;
    nzDisabledTime?: DisabledTimeFn;
    nzRenderExtraFooter?: TemplateRef<NzSafeAny> | string | FunctionProp<TemplateRef<NzSafeAny> | string>;
    nzShowToday: boolean;
    nzMode: NzDateMode;
    nzShowNow: boolean;
    nzRanges?: PresetRanges;
    nzDefaultPickerValue: CompatibleDate | null;
    nzSeparator?: string;
    nzSuffixIcon: string | TemplateRef<NzSafeAny>;
    nzBackdrop: boolean;
    nzId: string | null;
    readonly nzOnPanelChange: EventEmitter<string | NzDateMode[] | string[]>;
    readonly nzOnCalendarChange: EventEmitter<(Date | null)[]>;
    readonly nzOnOk: EventEmitter<Date | Date[] | null>;
    readonly nzOnOpenChange: EventEmitter<boolean>;
    get nzShowTime(): SupportTimeOptions | boolean;
    set nzShowTime(value: SupportTimeOptions | boolean);
    cdkConnectedOverlay?: CdkConnectedOverlay;
    panel: DateRangePopupComponent;
    separatorElement?: ElementRef;
    pickerInput?: ElementRef<HTMLInputElement>;
    rangePickerInputs?: QueryList<ElementRef<HTMLInputElement>>;
    origin: CdkOverlayOrigin;
    document: Document;
    inputSize: number;
    inputWidth?: number;
    destroy$: Subject<unknown>;
    prefixCls: string;
    inputValue: NzSafeAny;
    activeBarStyle: object;
    overlayOpen: boolean;
    overlayPositions: ConnectionPositionPair[];
    currentPositionX: HorizontalConnectionPos;
    currentPositionY: VerticalConnectionPos;
    get realOpenState(): boolean;
    ngAfterViewInit(): void;
    updateInputWidthAndArrowLeft(): void;
    getInput(partType?: RangePartType): HTMLInputElement | undefined;
    focus(): void;
    onFocus(event: FocusEvent, partType?: RangePartType): void;
    onFocusout(event: FocusEvent): void;
    open(): void;
    close(): void;
    showClear(): boolean;
    checkAndClose(): void;
    onClickInputBox(event: MouseEvent): void;
    onOverlayKeydown(event: KeyboardEvent): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickClear(event: MouseEvent): void;
    updateInputValue(): void;
    formatValue(value: CandyDate): string;
    onInputChange(value: string, isEnter?: boolean): void;
    onKeyupEnter(event: Event): void;
    private checkValidDate;
    getPlaceholder(partType?: RangePartType): string;
    isEmptyValue(value: CompatibleValue): boolean;
    isOpenHandledByUser(): boolean;
    constructor(nzConfigService: NzConfigService, datePickerService: DatePickerService, i18n: NzI18nService, cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, dateHelper: DateHelperService, nzResizeObserver: NzResizeObserver, platform: Platform, doc: NzSafeAny, directionality: Directionality, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setModeAndFormat(): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: OnChangeType;
    onTouchedFn: OnTouchedType;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(isDisabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private getPropertyOfLocale;
    private setValue;
    renderClass(value: boolean): void;
    onPanelModeChange(panelMode: NzDateMode | NzDateMode[]): void;
    onCalendarChange(value: CompatibleValue): void;
    onResultOk(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzDatePickerComponent, [null, null, null, null, null, null, null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzDatePickerComponent, "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", ["nzDatePicker"], { "nzAllowClear": "nzAllowClear"; "nzAutoFocus": "nzAutoFocus"; "nzDisabled": "nzDisabled"; "nzBorderless": "nzBorderless"; "nzInputReadOnly": "nzInputReadOnly"; "nzInline": "nzInline"; "nzPlaceHolder": "nzPlaceHolder"; "nzPopupStyle": "nzPopupStyle"; "nzSize": "nzSize"; "nzShowToday": "nzShowToday"; "nzMode": "nzMode"; "nzShowNow": "nzShowNow"; "nzDefaultPickerValue": "nzDefaultPickerValue"; "nzSeparator": "nzSeparator"; "nzSuffixIcon": "nzSuffixIcon"; "nzBackdrop": "nzBackdrop"; "nzId": "nzId"; "nzShowTime": "nzShowTime"; "nzFormat": "nzFormat"; "nzLocale": "nzLocale"; "nzOpen": "nzOpen"; "nzDisabledDate": "nzDisabledDate"; "nzDropdownClassName": "nzDropdownClassName"; "nzDateRender": "nzDateRender"; "nzDisabledTime": "nzDisabledTime"; "nzRenderExtraFooter": "nzRenderExtraFooter"; "nzRanges": "nzRanges"; }, { "nzOnPanelChange": "nzOnPanelChange"; "nzOnCalendarChange": "nzOnCalendarChange"; "nzOnOk": "nzOnOk"; "nzOnOpenChange": "nzOnOpenChange"; }, never, never>;
}

//# sourceMappingURL=date-picker.component.d.ts.map