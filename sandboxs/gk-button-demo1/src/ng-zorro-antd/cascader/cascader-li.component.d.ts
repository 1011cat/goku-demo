/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import { NzCascaderOption } from './typings';
import * as ɵngcc0 from '@angular/core';
export declare class NzCascaderOptionComponent implements OnInit {
    private cdr;
    optionTemplate: TemplateRef<NzCascaderOption> | null;
    option: NzCascaderOption;
    activated: boolean;
    highlightText: string;
    nzLabelProperty: string;
    columnIndex: number;
    expandIcon: string | TemplateRef<void>;
    dir: Direction;
    readonly nativeElement: HTMLElement;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    get optionLabel(): string;
    markForCheck(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzCascaderOptionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzCascaderOptionComponent, "[nz-cascader-option]", ["nzCascaderOption"], { "optionTemplate": "optionTemplate"; "activated": "activated"; "nzLabelProperty": "nzLabelProperty"; "expandIcon": "expandIcon"; "dir": "dir"; "option": "option"; "highlightText": "highlightText"; "columnIndex": "columnIndex"; }, {}, never, never>;
}

//# sourceMappingURL=cascader-li.component.d.ts.map