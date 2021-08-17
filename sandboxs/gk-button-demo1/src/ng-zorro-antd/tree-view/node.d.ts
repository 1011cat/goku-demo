/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutletContext } from '@angular/cdk/tree';
import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NzTreeView } from './tree';
import * as ɵngcc0 from '@angular/core';
export interface NzTreeVirtualNodeData<T> {
    data: T;
    context: CdkTreeNodeOutletContext<T>;
    nodeDef: CdkTreeNodeDef<T>;
}
export declare class NzTreeNodeComponent<T> extends CdkTreeNode<T> implements OnDestroy, OnInit {
    protected elementRef: ElementRef<HTMLElement>;
    protected tree: NzTreeView<T>;
    private renderer;
    private cdr;
    indents: boolean[];
    disabled: boolean;
    selected: boolean;
    isLeaf: boolean;
    constructor(elementRef: ElementRef<HTMLElement>, tree: NzTreeView<T>, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    disable(): void;
    enable(): void;
    select(): void;
    deselect(): void;
    setIndents(indents: boolean[]): void;
    private updateSelectedClass;
    private updateDisabledClass;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeNodeComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeNodeComponent<any>, "nz-tree-node:not([builtin])", ["nzTreeNode"], {}, {}, never, ["nz-tree-node-toggle, [nz-tree-node-toggle]", "nz-tree-node-checkbox", "nz-tree-node-option", "*"]>;
}
export declare class NzTreeNodeDefDirective<T> extends CdkTreeNodeDef<T> {
    when: (index: number, nodeData: T) => boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeNodeDefDirective<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTreeNodeDefDirective<any>, "[nzTreeNodeDef]", never, { "when": "nzTreeNodeDefWhen"; }, {}, never>;
}
export declare class NzTreeVirtualScrollNodeOutletDirective<T> implements OnChanges {
    private _viewContainerRef;
    private _viewRef;
    data: NzTreeVirtualNodeData<T>;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    private shouldRecreateView;
    private hasContextShapeChanged;
    private updateExistingContext;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeVirtualScrollNodeOutletDirective<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NzTreeVirtualScrollNodeOutletDirective<any>, "[nzTreeVirtualScrollNodeOutlet]", never, { "data": "data"; }, {}, never>;
}

//# sourceMappingURL=node.d.ts.map