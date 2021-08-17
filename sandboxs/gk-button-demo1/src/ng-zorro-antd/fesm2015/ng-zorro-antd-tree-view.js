import { Directionality, BidiModule } from '@angular/cdk/bidi';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, IterableDiffers, ChangeDetectorRef, Host, Optional, ElementRef, Renderer2, Directive, ViewContainerRef, Inject, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { NzNoAnimationDirective, NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject, animationFrameScheduler, asapScheduler, merge, BehaviorSubject } from 'rxjs';
import { takeUntil, auditTime, take, map } from 'rxjs/operators';
import { CdkTree, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTreeNodeOutletContext } from '@angular/cdk/tree';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { DataSource } from '@angular/cdk/collections';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc2 from '@angular/cdk/bidi';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/cdk/scrolling';

function NzTreeNodeComponent_nz_tree_node_indents_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-tree-node-indents", 2);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("indents", ctx_r0.indents);
} }
function NzTreeNodeComponent_nz_tree_node_toggle_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-tree-node-toggle", 3);
    ɵngcc0.ɵɵelement(1, "span", 4);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = [[["nz-tree-node-toggle"], ["", "nz-tree-node-toggle", ""]], [["nz-tree-node-checkbox"]], [["nz-tree-node-option"]], "*"];
const _c1 = ["nz-tree-node-toggle, [nz-tree-node-toggle]", "nz-tree-node-checkbox", "nz-tree-node-option", "*"];
function NzTreeNodeIndentsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const isEnd_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-tree-indent-unit-end", !isEnd_r1);
} }
const _c2 = ["*"];
function NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzTreeVirtualScrollViewComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTreeVirtualScrollViewComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("data", item_r1);
} }
class NzTreeNodeCheckboxComponent {
    constructor() {
        this.nzClick = new EventEmitter();
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
}
NzTreeNodeCheckboxComponent.ɵfac = function NzTreeNodeCheckboxComponent_Factory(t) { return new (t || NzTreeNodeCheckboxComponent)(); };
NzTreeNodeCheckboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeCheckboxComponent, selectors: [["nz-tree-node-checkbox", 3, "builtin", ""]], hostAttrs: [1, "ant-tree-checkbox"], hostVars: 6, hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeNodeCheckboxComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-checkbox-checked", ctx.nzChecked)("ant-tree-checkbox-indeterminate", ctx.nzIndeterminate)("ant-tree-checkbox-disabled", ctx.nzDisabled);
    } }, inputs: { nzChecked: "nzChecked", nzIndeterminate: "nzIndeterminate", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick" }, decls: 1, vars: 0, consts: [[1, "ant-tree-checkbox-inner"]], template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeCheckboxComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], NzTreeNodeCheckboxComponent.prototype, "nzDisabled", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line: component-class-suffix
class NzTreeView extends CdkTree {
    constructor(differs, changeDetectorRef, noAnimation, directionality) {
        super(differs, changeDetectorRef);
        this.differs = differs;
        this.changeDetectorRef = changeDetectorRef;
        this.noAnimation = noAnimation;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this._dataSourceChanged = new Subject();
        this.nzDirectoryTree = false;
        this.nzBlockNode = false;
    }
    get dataSource() {
        return super.dataSource;
    }
    set dataSource(dataSource) {
        super.dataSource = dataSource;
    }
    ngOnInit() {
        var _a;
        super.ngOnInit();
        if (this.directionality) {
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
                this.dir = direction;
                this.changeDetectorRef.detectChanges();
            });
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroy$.next();
        this.destroy$.complete();
    }
    renderNodeChanges(data, dataDiffer, viewContainer, parentData) {
        super.renderNodeChanges(data, dataDiffer, viewContainer, parentData);
        this._dataSourceChanged.next();
    }
}
NzTreeView.ɵfac = function NzTreeView_Factory(t) { return new (t || NzTreeView)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzTreeView.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeView, selectors: [["ng-component"]], inputs: { nzDirectoryTree: "nzDirectoryTree", nzBlockNode: "nzBlockNode", dataSource: ["nzDataSource", "dataSource"], treeControl: ["nzTreeControl", "treeControl"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function NzTreeView_Template(rf, ctx) { }, encapsulation: 2 });
NzTreeView.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTreeView.propDecorators = {
    treeControl: [{ type: Input, args: ['nzTreeControl',] }],
    dataSource: [{ type: Input, args: ['nzDataSource',] }],
    nzDirectoryTree: [{ type: Input }],
    nzBlockNode: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeView.prototype, "nzDirectoryTree", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeView.prototype, "nzBlockNode", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeComponent extends CdkTreeNode {
    constructor(elementRef, tree, renderer, cdr) {
        super(elementRef, tree);
        this.elementRef = elementRef;
        this.tree = tree;
        this.renderer = renderer;
        this.cdr = cdr;
        this.indents = [];
        this.disabled = false;
        this.selected = false;
        this.isLeaf = false;
        this._elementRef.nativeElement.classList.add('ant-tree-treenode');
    }
    ngOnInit() {
        this.isLeaf = !this.tree.treeControl.isExpandable(this.data);
    }
    disable() {
        this.disabled = true;
        this.updateDisabledClass();
    }
    enable() {
        this.disabled = false;
        this.updateDisabledClass();
    }
    select() {
        this.selected = true;
        this.updateSelectedClass();
    }
    deselect() {
        this.selected = false;
        this.updateSelectedClass();
    }
    setIndents(indents) {
        this.indents = indents;
        this.cdr.markForCheck();
    }
    updateSelectedClass() {
        if (this.selected) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-selected');
        }
    }
    updateDisabledClass() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-tree-treenode-disabled');
        }
    }
}
NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(NzTreeView), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTreeNodeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeComponent, selectors: [["nz-tree-node", 3, "builtin", ""]], hostVars: 4, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-treenode-switcher-open", ctx.isExpanded)("ant-tree-treenode-switcher-close", !ctx.isExpanded);
    } }, exportAs: ["nzTreeNode"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNode, useExisting: NzTreeNodeComponent }]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [[3, "indents", 4, "ngIf"], ["class", "nz-tree-leaf-line-icon", "nzTreeNodeNoopToggle", "", 4, "ngIf"], [3, "indents"], ["nzTreeNodeNoopToggle", "", 1, "nz-tree-leaf-line-icon"], [1, "ant-tree-switcher-leaf-line"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeComponent_nz_tree_node_indents_0_Template, 1, 1, "nz-tree-node-indents", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, NzTreeNodeComponent_nz_tree_node_toggle_2_Template, 2, 0, "nz-tree-node-toggle", 1);
        ɵngcc0.ɵɵprojection(3, 1);
        ɵngcc0.ɵɵprojection(4, 2);
        ɵngcc0.ɵɵprojection(5, 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.indents.length);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.indents.length && ctx.isLeaf);
    } }, directives: function () { return [ɵngcc3.NgIf, NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective]; }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzTreeView },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
class NzTreeNodeDefDirective extends CdkTreeNodeDef {
}
NzTreeNodeDefDirective.ɵfac = function NzTreeNodeDefDirective_Factory(t) { return ɵNzTreeNodeDefDirective_BaseFactory(t || NzTreeNodeDefDirective); };
NzTreeNodeDefDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeDefDirective, selectors: [["", "nzTreeNodeDef", ""]], inputs: { when: ["nzTreeNodeDefWhen", "when"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NzTreeNodeDefDirective.propDecorators = {
    when: [{ type: Input, args: ['nzTreeNodeDefWhen',] }]
};
class NzTreeVirtualScrollNodeOutletDirective {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._viewRef = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            const viewContainerRef = this._viewContainerRef;
            if (this._viewRef) {
                viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
            }
            this._viewRef = this.data ? viewContainerRef.createEmbeddedView(this.data.nodeDef.template, this.data.context) : null;
            if (CdkTreeNode.mostRecentTreeNode && this._viewRef) {
                CdkTreeNode.mostRecentTreeNode.data = this.data.data;
            }
        }
        else if (this._viewRef && this.data.context) {
            this.updateExistingContext(this.data.context);
        }
    }
    shouldRecreateView(changes) {
        const ctxChange = changes.data;
        return !!changes.data || (ctxChange && this.hasContextShapeChanged(ctxChange));
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            this._viewRef.context[propName] = this.data.context[propName];
        }
    }
}
NzTreeVirtualScrollNodeOutletDirective.ɵfac = function NzTreeVirtualScrollNodeOutletDirective_Factory(t) { return new (t || NzTreeVirtualScrollNodeOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
NzTreeVirtualScrollNodeOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeVirtualScrollNodeOutletDirective, selectors: [["", "nzTreeVirtualScrollNodeOutlet", ""]], inputs: { data: "data" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzTreeVirtualScrollNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzTreeVirtualScrollNodeOutletDirective.propDecorators = {
    data: [{ type: Input }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getParent(nodes, node, getLevel) {
    let index = nodes.indexOf(node);
    if (index < 0) {
        return null;
    }
    const level = getLevel(node);
    for (index--; index >= 0; index--) {
        const preLevel = getLevel(nodes[index]);
        if (preLevel + 1 === level) {
            return nodes[index];
        }
        if (preLevel + 1 < level) {
            return null;
        }
    }
    return null;
}
function getNextSibling(nodes, node, getLevel, _index) {
    let index = typeof _index !== 'undefined' ? _index : nodes.indexOf(node);
    if (index < 0) {
        return null;
    }
    const level = getLevel(node);
    for (index++; index < nodes.length; index++) {
        const nextLevel = getLevel(nodes[index]);
        if (nextLevel < level) {
            return null;
        }
        if (nextLevel === level) {
            return nodes[index];
        }
    }
    return null;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * [true, false, false, true] => 1001
 */
function booleanArrayToString(arr) {
    return arr.map(i => (i ? 1 : 0)).join('');
}
const BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
class NzTreeNodeIndentsComponent {
    constructor() {
        this.indents = [];
    }
}
NzTreeNodeIndentsComponent.ɵfac = function NzTreeNodeIndentsComponent_Factory(t) { return new (t || NzTreeNodeIndentsComponent)(); };
NzTreeNodeIndentsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeIndentsComponent, selectors: [["nz-tree-node-indents"]], hostAttrs: [1, "ant-tree-indent"], inputs: { indents: "indents" }, decls: 1, vars: 1, consts: [["class", "ant-tree-indent-unit", 3, "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"], [1, "ant-tree-indent-unit"]], template: function NzTreeNodeIndentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeIndentsComponent_span_0_Template, 1, 2, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.indents);
    } }, directives: [ɵngcc3.NgForOf], encapsulation: 2, changeDetection: 0 });
NzTreeNodeIndentsComponent.propDecorators = {
    indents: [{ type: Input }]
};
class NzTreeNodeIndentLineDirective {
    constructor(treeNode, tree, cdr) {
        this.treeNode = treeNode;
        this.tree = tree;
        this.cdr = cdr;
        this.isLast = 'unset';
        this.isLeaf = false;
        this.preNodeRef = null;
        this.nextNodeRef = null;
        this.currentIndents = '';
        this.buildIndents();
        this.checkLast();
        /**
         * The dependent data (TreeControl.dataNodes) can be set after node instantiation,
         * and setting the indents can cause frame rate loss if it is set too often.
         */
        this.changeSubscription = merge(this.treeNode._dataChanges, tree._dataSourceChanged)
            .pipe(auditTime(0, BUILD_INDENTS_SCHEDULER))
            .subscribe(() => {
            this.buildIndents();
            this.checkAdjacent();
            this.cdr.markForCheck();
        });
    }
    getIndents() {
        const indents = [];
        const nodes = this.tree.treeControl.dataNodes;
        const getLevel = this.tree.treeControl.getLevel;
        let parent = getParent(nodes, this.treeNode.data, getLevel);
        while (parent) {
            const parentNextSibling = getNextSibling(nodes, parent, getLevel);
            if (parentNextSibling) {
                indents.unshift(true);
            }
            else {
                indents.unshift(false);
            }
            parent = getParent(nodes, parent, getLevel);
        }
        return indents;
    }
    buildIndents() {
        if (this.treeNode.data) {
            const indents = this.getIndents();
            const diffString = booleanArrayToString(indents);
            if (diffString !== this.currentIndents) {
                this.treeNode.setIndents(this.getIndents());
                this.currentIndents = diffString;
            }
        }
    }
    /**
     * We need to add an class name for the last child node,
     * this result can also be affected when the adjacent nodes are changed.
     */
    checkAdjacent() {
        const nodes = this.tree.treeControl.dataNodes;
        const index = nodes.indexOf(this.treeNode.data);
        const preNode = nodes[index - 1] || null;
        const nextNode = nodes[index + 1] || null;
        if (this.nextNodeRef !== nextNode || this.preNodeRef !== preNode) {
            this.checkLast(index);
        }
        this.preNodeRef = preNode;
        this.nextNodeRef = nextNode;
    }
    checkLast(index) {
        const nodes = this.tree.treeControl.dataNodes;
        this.isLeaf = this.treeNode.isLeaf;
        this.isLast = !getNextSibling(nodes, this.treeNode.data, this.tree.treeControl.getLevel, index);
    }
    ngOnDestroy() {
        this.preNodeRef = null;
        this.nextNodeRef = null;
        this.changeSubscription.unsubscribe();
    }
}
NzTreeNodeIndentLineDirective.ɵfac = function NzTreeNodeIndentLineDirective_Factory(t) { return new (t || NzTreeNodeIndentLineDirective)(ɵngcc0.ɵɵdirectiveInject(NzTreeNodeComponent), ɵngcc0.ɵɵdirectiveInject(NzTreeView), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTreeNodeIndentLineDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeIndentLineDirective, selectors: [["nz-tree-node", "nzTreeNodeIndentLine", ""]], hostAttrs: [1, "ant-tree-show-line"], hostVars: 2, hostBindings: function NzTreeNodeIndentLineDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-treenode-leaf-last", ctx.isLast && ctx.isLeaf);
    } } });
NzTreeNodeIndentLineDirective.ctorParameters = () => [
    { type: NzTreeNodeComponent },
    { type: NzTreeView },
    { type: ChangeDetectorRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeOptionComponent {
    constructor(treeNode) {
        this.treeNode = treeNode;
        this.nzSelected = false;
        this.nzDisabled = false;
        this.nzClick = new EventEmitter();
    }
    get isExpanded() {
        return this.treeNode.isExpanded;
    }
    onClick(e) {
        if (!this.nzDisabled) {
            this.nzClick.emit(e);
        }
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzSelected } = changes;
        if (nzDisabled) {
            if (nzDisabled.currentValue) {
                this.treeNode.disable();
            }
            else {
                this.treeNode.enable();
            }
        }
        if (nzSelected) {
            if (nzSelected.currentValue) {
                this.treeNode.select();
            }
            else {
                this.treeNode.deselect();
            }
        }
    }
}
NzTreeNodeOptionComponent.ɵfac = function NzTreeNodeOptionComponent_Factory(t) { return new (t || NzTreeNodeOptionComponent)(ɵngcc0.ɵɵdirectiveInject(NzTreeNodeComponent)); };
NzTreeNodeOptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeOptionComponent, selectors: [["nz-tree-node-option"]], hostAttrs: [1, "ant-tree-node-content-wrapper"], hostVars: 4, hostBindings: function NzTreeNodeOptionComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTreeNodeOptionComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-node-content-wrapper-open", ctx.isExpanded)("ant-tree-node-selected", ctx.nzSelected);
    } }, inputs: { nzSelected: "nzSelected", nzDisabled: "nzDisabled" }, outputs: { nzClick: "nzClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 2, vars: 0, consts: [[1, "ant-tree-title"]], template: function NzTreeNodeOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeOptionComponent.ctorParameters = () => [
    { type: NzTreeNodeComponent }
];
NzTreeNodeOptionComponent.propDecorators = {
    nzSelected: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzClick: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzSelected", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTreeNodeOptionComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-checkbox:not([builtin])',
                template: `
    <span class="ant-tree-checkbox-inner"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    class: 'ant-tree-checkbox',
                    '[class.ant-tree-checkbox-checked]': `nzChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `nzIndeterminate`,
                    '[class.ant-tree-checkbox-disabled]': `nzDisabled`,
                    '(click)': 'onClick($event)'
                }
            }]
    }], function () { return []; }, { nzClick: [{
            type: Output
        }], nzChecked: [{
            type: Input
        }], nzIndeterminate: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeView, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: ɵngcc0.IterableDiffers }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ɵngcc2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzDirectoryTree: [{
            type: Input
        }], nzBlockNode: [{
            type: Input
        }], dataSource: [{
            type: Input,
            args: ['nzDataSource']
        }], treeControl: [{
            type: Input,
            args: ['nzTreeControl']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node:not([builtin])',
                exportAs: 'nzTreeNode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{ provide: CdkTreeNode, useExisting: NzTreeNodeComponent }],
                template: `
    <nz-tree-node-indents [indents]="indents" *ngIf="indents.length"></nz-tree-node-indents>
    <ng-content select="nz-tree-node-toggle, [nz-tree-node-toggle]"></ng-content>
    <nz-tree-node-toggle class="nz-tree-leaf-line-icon" *ngIf="indents.length && isLeaf" nzTreeNodeNoopToggle>
      <span class="ant-tree-switcher-leaf-line"></span>
    </nz-tree-node-toggle>
    <ng-content select="nz-tree-node-checkbox"></ng-content>
    <ng-content select="nz-tree-node-option"></ng-content>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-tree-treenode-switcher-open]': 'isExpanded',
                    '[class.ant-tree-treenode-switcher-close]': '!isExpanded'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: NzTreeView }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();
const ɵNzTreeNodeDefDirective_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeNodeDefDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeDefDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodeDef]',
                providers: [{ provide: CdkTreeNodeDef, useExisting: NzTreeNodeDefDirective }]
            }]
    }], null, { when: [{
            type: Input,
            args: ['nzTreeNodeDefWhen']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeVirtualScrollNodeOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeVirtualScrollNodeOutlet]'
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, { data: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeIndentsComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-indents',
                template: `
    <span class="ant-tree-indent-unit" [class.ant-tree-indent-unit-end]="!isEnd" *ngFor="let isEnd of indents"></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-tree-indent'
                }
            }]
    }], function () { return []; }, { indents: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeIndentLineDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-tree-node[nzTreeNodeIndentLine]',
                host: {
                    class: 'ant-tree-show-line',
                    '[class.ant-tree-treenode-leaf-last]': 'isLast && isLeaf'
                }
            }]
    }], function () { return [{ type: NzTreeNodeComponent }, { type: NzTreeView }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeOptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-node-option',
                template: `
    <span class="ant-tree-title"><ng-content></ng-content></span>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-tree-node-content-wrapper',
                    '[class.ant-tree-node-content-wrapper-open]': 'isExpanded',
                    '[class.ant-tree-node-selected]': 'nzSelected',
                    '(click)': 'onClick($event)'
                }
            }]
    }], function () { return [{ type: NzTreeNodeComponent }]; }, { nzSelected: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzClick: [{
            type: Output
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeOutletDirective {
    constructor(viewContainer, _node) {
        this.viewContainer = viewContainer;
        this._node = _node;
    }
}
NzTreeNodeOutletDirective.ɵfac = function NzTreeNodeOutletDirective_Factory(t) { return new (t || NzTreeNodeOutletDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(CDK_TREE_NODE_OUTLET_NODE, 8)); };
NzTreeNodeOutletDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeOutletDirective, selectors: [["", "nzTreeNodeOutlet", ""]], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: CdkTreeNodeOutlet,
                useExisting: NzTreeNodeOutletDirective
            }
        ])] });
NzTreeNodeOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_TREE_NODE_OUTLET_NODE,] }, { type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodeOutlet]',
                providers: [
                    {
                        provide: CdkTreeNodeOutlet,
                        useExisting: NzTreeNodeOutletDirective
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [CDK_TREE_NODE_OUTLET_NODE]
            }, {
                type: Optional
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodePaddingDirective extends CdkTreeNodePadding {
    constructor() {
        super(...arguments);
        this._indent = 24;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
}
NzTreeNodePaddingDirective.ɵfac = function NzTreeNodePaddingDirective_Factory(t) { return ɵNzTreeNodePaddingDirective_BaseFactory(t || NzTreeNodePaddingDirective); };
NzTreeNodePaddingDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodePaddingDirective, selectors: [["", "nzTreeNodePadding", ""]], inputs: { level: ["nzTreeNodePadding", "level"], indent: ["nzTreeNodePaddingIndent", "indent"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NzTreeNodePaddingDirective.propDecorators = {
    level: [{ type: Input, args: ['nzTreeNodePadding',] }],
    indent: [{ type: Input, args: ['nzTreeNodePaddingIndent',] }]
};
const ɵNzTreeNodePaddingDirective_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeNodePaddingDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodePaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]
            }]
    }], null, { level: [{
            type: Input,
            args: ['nzTreeNodePadding']
        }], indent: [{
            type: Input,
            args: ['nzTreeNodePaddingIndent']
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeNodeNoopToggleDirective {
}
NzTreeNodeNoopToggleDirective.ɵfac = function NzTreeNodeNoopToggleDirective_Factory(t) { return new (t || NzTreeNodeNoopToggleDirective)(); };
NzTreeNodeNoopToggleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeNoopToggleDirective, selectors: [["nz-tree-node-toggle", "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeNoopToggle", ""]], hostAttrs: [1, "ant-tree-switcher", "ant-tree-switcher-noop"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeNoopToggleDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-tree-node-toggle[nzTreeNodeNoopToggle], [nzTreeNodeNoopToggle]',
                host: {
                    class: 'ant-tree-switcher ant-tree-switcher-noop'
                }
            }]
    }], null, null); })();
class NzTreeNodeToggleDirective extends CdkTreeNodeToggle {
    get recursive() {
        return this._recursive;
    }
    set recursive(value) {
        this._recursive = coerceBooleanProperty(value);
    }
    get isExpanded() {
        return this._treeNode.isExpanded;
    }
}
NzTreeNodeToggleDirective.ɵfac = function NzTreeNodeToggleDirective_Factory(t) { return ɵNzTreeNodeToggleDirective_BaseFactory(t || NzTreeNodeToggleDirective); };
NzTreeNodeToggleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeToggleDirective, selectors: [["nz-tree-node-toggle", 3, "nzTreeNodeNoopToggle", ""], ["", "nzTreeNodeToggle", ""]], hostAttrs: [1, "ant-tree-switcher"], hostVars: 4, hostBindings: function NzTreeNodeToggleDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-switcher_open", ctx.isExpanded)("ant-tree-switcher_close", !ctx.isExpanded);
    } }, inputs: { recursive: ["nzTreeNodeToggleRecursive", "recursive"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodeToggle, useExisting: NzTreeNodeToggleDirective }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NzTreeNodeToggleDirective.propDecorators = {
    recursive: [{ type: Input, args: ['nzTreeNodeToggleRecursive',] }]
};
const ɵNzTreeNodeToggleDirective_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeNodeToggleDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeToggleDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-tree-node-toggle:not([nzTreeNodeNoopToggle]), [nzTreeNodeToggle]',
                providers: [{ provide: CdkTreeNodeToggle, useExisting: NzTreeNodeToggleDirective }],
                host: {
                    class: 'ant-tree-switcher',
                    '[class.ant-tree-switcher_open]': 'isExpanded',
                    '[class.ant-tree-switcher_close]': '!isExpanded'
                }
            }]
    }], null, { recursive: [{
            type: Input,
            args: ['nzTreeNodeToggleRecursive']
        }] }); })();
class NzTreeNodeToggleRotateIconDirective {
}
NzTreeNodeToggleRotateIconDirective.ɵfac = function NzTreeNodeToggleRotateIconDirective_Factory(t) { return new (t || NzTreeNodeToggleRotateIconDirective)(); };
NzTreeNodeToggleRotateIconDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeToggleRotateIconDirective, selectors: [["", "nz-icon", "", "nzTreeNodeToggleRotateIcon", ""]], hostAttrs: [1, "ant-tree-switcher-icon"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeToggleRotateIconDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-icon][nzTreeNodeToggleRotateIcon]',
                host: {
                    class: 'ant-tree-switcher-icon'
                }
            }]
    }], null, null); })();
class NzTreeNodeToggleActiveIconDirective {
}
NzTreeNodeToggleActiveIconDirective.ɵfac = function NzTreeNodeToggleActiveIconDirective_Factory(t) { return new (t || NzTreeNodeToggleActiveIconDirective)(); };
NzTreeNodeToggleActiveIconDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeToggleActiveIconDirective, selectors: [["", "nz-icon", "", "nzTreeNodeToggleActiveIcon", ""]], hostAttrs: [1, "ant-tree-switcher-loading-icon"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeToggleActiveIconDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-icon][nzTreeNodeToggleActiveIcon]',
                host: {
                    class: 'ant-tree-switcher-loading-icon'
                }
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeViewComponent extends NzTreeView {
    constructor() {
        super(...arguments);
        this._afterViewInit = false;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this._afterViewInit = true;
            this.changeDetectorRef.markForCheck();
        });
    }
}
NzTreeViewComponent.ɵfac = function NzTreeViewComponent_Factory(t) { return ɵNzTreeViewComponent_BaseFactory(t || NzTreeViewComponent); };
NzTreeViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeViewComponent, selectors: [["nz-tree-view"]], viewQuery: function NzTreeViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzTreeNodeOutletDirective, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
    } }, hostAttrs: [1, "ant-tree"], hostVars: 6, hostBindings: function NzTreeViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
    } }, exportAs: ["nzTreeView"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkTree, useExisting: NzTreeViewComponent },
            { provide: NzTreeView, useExisting: NzTreeViewComponent }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "ant-tree-list-holder"], [1, "ant-tree-list-holder-inner"], ["nzTreeNodeOutlet", ""]], template: function NzTreeViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementContainer(2, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@.disabled", !ctx._afterViewInit || (ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@treeCollapseMotion", ctx._nodeOutlet.viewContainer.length);
    } }, directives: [NzTreeNodeOutletDirective], encapsulation: 2, data: { animation: [treeCollapseMotion] }, changeDetection: 0 });
NzTreeViewComponent.propDecorators = {
    nodeOutlet: [{ type: ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }]
};
const ɵNzTreeViewComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeViewComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeViewComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-view',
                exportAs: 'nzTreeView',
                template: `
    <div class="ant-tree-list-holder">
      <div
        [@.disabled]="!_afterViewInit || noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="_nodeOutlet.viewContainer.length"
        class="ant-tree-list-holder-inner"
      >
        <ng-container nzTreeNodeOutlet></ng-container>
      </div>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: CdkTree, useExisting: NzTreeViewComponent },
                    { provide: NzTreeView, useExisting: NzTreeViewComponent }
                ],
                host: {
                    class: 'ant-tree',
                    '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                    '[class.ant-tree-directory]': 'nzDirectoryTree',
                    '[class.ant-tree-rtl]': `dir === 'rtl'`
                },
                animations: [treeCollapseMotion]
            }]
    }], null, { nodeOutlet: [{
            type: ViewChild,
            args: [NzTreeNodeOutletDirective, { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DEFAULT_SIZE = 28;
class NzTreeVirtualScrollViewComponent extends NzTreeView {
    constructor() {
        super(...arguments);
        this.itemSize = DEFAULT_SIZE;
        /**
         * @deprecated use `nzItemSize` instead
         * @breaking-change 12.0.0
         */
        this.nzNodeWidth = DEFAULT_SIZE;
        this.nzItemSize = DEFAULT_SIZE;
        this.nzMinBufferPx = DEFAULT_SIZE * 5;
        this.nzMaxBufferPx = DEFAULT_SIZE * 10;
        this.nodes = [];
    }
    renderNodeChanges(data) {
        this.nodes = new Array(...data).map((n, i) => this.createNode(n, i));
    }
    createNode(nodeData, index) {
        const node = this._getNodeDef(nodeData, index);
        const context = new CdkTreeNodeOutletContext(nodeData);
        if (this.treeControl.getLevel) {
            context.level = this.treeControl.getLevel(nodeData);
        }
        else {
            context.level = 0;
        }
        return {
            data: nodeData,
            context,
            nodeDef: node
        };
    }
    ngOnChanges(changes) {
        const { nzNodeWidth, nzItemSize } = changes;
        if (nzNodeWidth) {
            warnDeprecation('`nzNodeWidth` in nz-tree-virtual-scroll-view will be removed in 12.0.0, please use `nzItemSize` instead.');
            this.itemSize = nzNodeWidth.currentValue;
        }
        if (nzItemSize) {
            this.itemSize = nzItemSize.currentValue;
        }
    }
}
NzTreeVirtualScrollViewComponent.ɵfac = function NzTreeVirtualScrollViewComponent_Factory(t) { return ɵNzTreeVirtualScrollViewComponent_BaseFactory(t || NzTreeVirtualScrollViewComponent); };
NzTreeVirtualScrollViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeVirtualScrollViewComponent, selectors: [["nz-tree-virtual-scroll-view"]], viewQuery: function NzTreeVirtualScrollViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzTreeNodeOutletDirective, true);
        ɵngcc0.ɵɵstaticViewQuery(CdkVirtualScrollViewport, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeOutlet = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.virtualScrollViewport = _t.first);
    } }, hostAttrs: [1, "ant-tree"], hostVars: 6, hostBindings: function NzTreeVirtualScrollViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-block-node", ctx.nzDirectoryTree || ctx.nzBlockNode)("ant-tree-directory", ctx.nzDirectoryTree)("ant-tree-rtl", ctx.dir === "rtl");
    } }, inputs: { nzNodeWidth: "nzNodeWidth", nzItemSize: "nzItemSize", nzMinBufferPx: "nzMinBufferPx", nzMaxBufferPx: "nzMaxBufferPx" }, exportAs: ["nzTreeVirtualScrollView"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
            { provide: CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
        ]), ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 4, vars: 4, consts: [[1, "ant-tree-list"], [1, "ant-tree-list-holder", 3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["nzTreeNodeOutlet", ""], ["nzTreeVirtualScrollNodeOutlet", "", 3, "data"]], template: function NzTreeVirtualScrollViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        ɵngcc0.ɵɵtemplate(2, NzTreeVirtualScrollViewComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementContainer(3, 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("itemSize", ctx.itemSize)("minBufferPx", ctx.nzMinBufferPx)("maxBufferPx", ctx.nzMaxBufferPx);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkVirtualForOf", ctx.nodes);
    } }, directives: [ɵngcc4.CdkVirtualScrollViewport, ɵngcc4.CdkFixedSizeVirtualScroll, ɵngcc4.CdkVirtualForOf, NzTreeNodeOutletDirective, NzTreeVirtualScrollNodeOutletDirective], encapsulation: 2, changeDetection: 0 });
NzTreeVirtualScrollViewComponent.propDecorators = {
    nodeOutlet: [{ type: ViewChild, args: [NzTreeNodeOutletDirective, { static: true },] }],
    virtualScrollViewport: [{ type: ViewChild, args: [CdkVirtualScrollViewport, { static: true },] }],
    nzNodeWidth: [{ type: Input }],
    nzItemSize: [{ type: Input }],
    nzMinBufferPx: [{ type: Input }],
    nzMaxBufferPx: [{ type: Input }]
};
const ɵNzTreeVirtualScrollViewComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeVirtualScrollViewComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeVirtualScrollViewComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tree-virtual-scroll-view',
                exportAs: 'nzTreeVirtualScrollView',
                template: `
    <div class="ant-tree-list">
      <cdk-virtual-scroll-viewport
        class="ant-tree-list-holder"
        [itemSize]="itemSize"
        [minBufferPx]="nzMinBufferPx"
        [maxBufferPx]="nzMaxBufferPx"
      >
        <ng-container *cdkVirtualFor="let item of nodes; let i = index">
          <ng-template nzTreeVirtualScrollNodeOutlet [data]="item"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>
    </div>
    <ng-container nzTreeNodeOutlet></ng-container>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: NzTreeView, useExisting: NzTreeVirtualScrollViewComponent },
                    { provide: CdkTree, useExisting: NzTreeVirtualScrollViewComponent }
                ],
                host: {
                    class: 'ant-tree',
                    '[class.ant-tree-block-node]': 'nzDirectoryTree || nzBlockNode',
                    '[class.ant-tree-directory]': 'nzDirectoryTree',
                    '[class.ant-tree-rtl]': `dir === 'rtl'`
                }
            }]
    }], null, { nzNodeWidth: [{
            type: Input
        }], nzItemSize: [{
            type: Input
        }], nzMinBufferPx: [{
            type: Input
        }], nzMaxBufferPx: [{
            type: Input
        }], nodeOutlet: [{
            type: ViewChild,
            args: [NzTreeNodeOutletDirective, { static: true }]
        }], virtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const treeWithControlComponents = [
    NzTreeView,
    NzTreeNodeOutletDirective,
    NzTreeViewComponent,
    NzTreeNodeDefDirective,
    NzTreeNodeComponent,
    NzTreeNodeToggleDirective,
    NzTreeNodePaddingDirective,
    NzTreeNodeToggleRotateIconDirective,
    NzTreeNodeToggleActiveIconDirective,
    NzTreeNodeOptionComponent,
    NzTreeNodeNoopToggleDirective,
    NzTreeNodeCheckboxComponent,
    NzTreeNodeIndentsComponent,
    NzTreeVirtualScrollViewComponent,
    NzTreeVirtualScrollNodeOutletDirective,
    NzTreeNodeIndentLineDirective
];
class NzTreeViewModule {
}
NzTreeViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTreeViewModule });
NzTreeViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTreeViewModule_Factory(t) { return new (t || NzTreeViewModule)(); }, imports: [[BidiModule, CommonModule, NzNoAnimationModule, ScrollingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTreeViewModule, { declarations: function () { return [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective]; }, imports: function () { return [BidiModule, CommonModule, NzNoAnimationModule, ScrollingModule]; }, exports: function () { return [NzTreeView, NzTreeNodeOutletDirective, NzTreeViewComponent, NzTreeNodeDefDirective, NzTreeNodeComponent, NzTreeNodeToggleDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleRotateIconDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeOptionComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeCheckboxComponent, NzTreeNodeIndentsComponent, NzTreeVirtualScrollViewComponent, NzTreeVirtualScrollNodeOutletDirective, NzTreeNodeIndentLineDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeViewModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzNoAnimationModule, ScrollingModule],
                declarations: [treeWithControlComponents],
                exports: [treeWithControlComponents]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeFlattener {
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    flattenNode(node, level, resultNodes, parentMap) {
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this.flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(take(1)).subscribe(children => {
                        this.flattenChildren(children, level, resultNodes, parentMap);
                    });
                }
            }
        }
        return resultNodes;
    }
    flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((child, index) => {
            const childParentMap = parentMap.slice();
            childParentMap.push(index !== children.length - 1);
            this.flattenNode(child, level + 1, resultNodes, childParentMap);
        });
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */
    flattenNodes(structuredData) {
        const resultNodes = [];
        structuredData.forEach(node => this.flattenNode(node, 0, resultNodes, []));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */
    expandFlattenedNodes(nodes, treeControl) {
        const results = [];
        const currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach(node => {
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        });
        return results;
    }
}
class NzTreeFlatDataSource extends DataSource {
    constructor(_treeControl, _treeFlattener, initialData = []) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        this._flattenedData = new BehaviorSubject([]);
        this._expandedData = new BehaviorSubject([]);
        this._data = new BehaviorSubject(initialData);
        this.flatNodes();
    }
    setData(value) {
        this._data.next(value);
        this.flatNodes();
    }
    getData() {
        return this._data.getValue();
    }
    connect(collectionViewer) {
        const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() {
        // no op
    }
    flatNodes() {
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.getData()));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NzTreeFlatDataSource, NzTreeFlattener, NzTreeNodeCheckboxComponent, NzTreeNodeComponent, NzTreeNodeDefDirective, NzTreeNodeIndentLineDirective, NzTreeNodeIndentsComponent, NzTreeNodeNoopToggleDirective, NzTreeNodeOptionComponent, NzTreeNodeOutletDirective, NzTreeNodePaddingDirective, NzTreeNodeToggleActiveIconDirective, NzTreeNodeToggleDirective, NzTreeNodeToggleRotateIconDirective, NzTreeViewComponent, NzTreeViewModule, NzTreeVirtualScrollNodeOutletDirective, NzTreeVirtualScrollViewComponent, getNextSibling, getParent, NzTreeView as ɵa };

//# sourceMappingURL=ng-zorro-antd-tree-view.js.map