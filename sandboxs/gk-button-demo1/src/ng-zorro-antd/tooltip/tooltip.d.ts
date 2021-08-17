/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { Directionality } from '@angular/cdk/bidi';
import { NzTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './base';
import * as ɵngcc0 from '@angular/core';
export declare class NzTooltipDirective extends NzTooltipBaseDirective {
    title?: NzTSType | null;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    nzTooltipColor?: string;
    readonly visibleChange: EventEmitter<boolean>;
    componentFactory: ComponentFactory<NzToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    protected getProxyPropertyMap(): PropertyMapping;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTooltipDirective, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTooltipDirective, "[nz-tooltip]", ["nzTooltip"], { "trigger": "nzTooltipTrigger"; "placement": "nzTooltipPlacement"; "title": "nzTooltipTitle"; "directiveTitle": "nz-tooltip"; "origin": "nzTooltipOrigin"; "visible": "nzTooltipVisible"; "mouseEnterDelay": "nzTooltipMouseEnterDelay"; "mouseLeaveDelay": "nzTooltipMouseLeaveDelay"; "overlayClassName": "nzTooltipOverlayClassName"; "overlayStyle": "nzTooltipOverlayStyle"; "nzTooltipColor": "nzTooltipColor"; }, { "visibleChange": "nzTooltipVisibleChange"; }, never>;
}
export declare class NzToolTipComponent extends NzTooltipBaseComponent {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzTitle: NzTSType | null;
    nzColor?: string | NzPresetColor;
    _contentStyleMap: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective | undefined);
    protected isEmpty(): boolean;
    updateStyles(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzToolTipComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzToolTipComponent, "nz-tooltip", ["nzTooltipComponent"], {}, {}, never, never>;
}

//# sourceMappingURL=tooltip.d.ts.map