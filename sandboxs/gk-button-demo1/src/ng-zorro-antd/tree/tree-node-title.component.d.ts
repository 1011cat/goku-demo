/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import * as ɵngcc0 from '@angular/core';
export declare class NzTreeNodeTitleComponent implements OnChanges {
    private cdr;
    searchValue: string;
    treeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
        origin: NzTreeNodeOptions;
    }> | null;
    draggable: boolean;
    showIcon: boolean;
    selectMode: boolean;
    context: NzTreeNode;
    icon: string;
    title: string;
    isLoading: boolean;
    isSelected: boolean;
    isDisabled: boolean;
    isMatched: boolean;
    isExpanded: boolean;
    isLeaf: boolean;
    showIndicator: boolean;
    dragPosition?: number;
    get canDraggable(): boolean | null;
    get matchedValue(): string;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzTreeNodeTitleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzTreeNodeTitleComponent, "nz-tree-node-title", never, { "treeTemplate": "treeTemplate"; "selectMode": "selectMode"; "showIndicator": "showIndicator"; "searchValue": "searchValue"; "draggable": "draggable"; "showIcon": "showIcon"; "context": "context"; "icon": "icon"; "title": "title"; "isLoading": "isLoading"; "isSelected": "isSelected"; "isDisabled": "isDisabled"; "isMatched": "isMatched"; "isExpanded": "isExpanded"; "isLeaf": "isLeaf"; "dragPosition": "dragPosition"; }, {}, never, never>;
}

//# sourceMappingURL=tree-node-title.component.d.ts.map