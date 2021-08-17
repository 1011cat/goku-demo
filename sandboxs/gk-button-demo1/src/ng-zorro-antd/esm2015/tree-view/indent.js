/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, Input } from '@angular/core';
import { animationFrameScheduler, asapScheduler, merge } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { NzTreeNodeComponent } from './node';
import { NzTreeView } from './tree';
import { getNextSibling, getParent } from './utils';
/**
 * [true, false, false, true] => 1001
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './node';
import * as ɵngcc3 from './tree';

function NzTreeNodeIndentsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const isEnd_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("ant-tree-indent-unit-end", !isEnd_r1);
} }
function booleanArrayToString(arr) {
    return arr.map(i => (i ? 1 : 0)).join('');
}
const BUILD_INDENTS_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
export class NzTreeNodeIndentsComponent {
    constructor() {
        this.indents = [];
    }
}
NzTreeNodeIndentsComponent.ɵfac = function NzTreeNodeIndentsComponent_Factory(t) { return new (t || NzTreeNodeIndentsComponent)(); };
NzTreeNodeIndentsComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTreeNodeIndentsComponent, selectors: [["nz-tree-node-indents"]], hostAttrs: [1, "ant-tree-indent"], inputs: { indents: "indents" }, decls: 1, vars: 1, consts: [["class", "ant-tree-indent-unit", 3, "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"], [1, "ant-tree-indent-unit"]], template: function NzTreeNodeIndentsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTreeNodeIndentsComponent_span_0_Template, 1, 2, "span", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.indents);
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2, changeDetection: 0 });
NzTreeNodeIndentsComponent.propDecorators = {
    indents: [{ type: Input }]
};
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
export class NzTreeNodeIndentLineDirective {
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
NzTreeNodeIndentLineDirective.ɵfac = function NzTreeNodeIndentLineDirective_Factory(t) { return new (t || NzTreeNodeIndentLineDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzTreeNodeComponent), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzTreeView), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTreeNodeIndentLineDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodeIndentLineDirective, selectors: [["nz-tree-node", "nzTreeNodeIndentLine", ""]], hostAttrs: [1, "ant-tree-show-line"], hostVars: 2, hostBindings: function NzTreeNodeIndentLineDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tree-treenode-leaf-last", ctx.isLast && ctx.isLeaf);
    } } });
NzTreeNodeIndentLineDirective.ctorParameters = () => [
    { type: NzTreeNodeComponent },
    { type: NzTreeView },
    { type: ChangeDetectorRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodeIndentLineDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-tree-node[nzTreeNodeIndentLine]',
                host: {
                    class: 'ant-tree-show-line',
                    '[class.ant-tree-treenode-leaf-last]': 'isLast && isLeaf'
                }
            }]
    }], function () { return [{ type: ɵngcc2.NzTreeNodeComponent }, { type: ɵngcc3.NzTreeView }, { type: ɵngcc0.ChangeDetectorRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RyZWUtdmlldy9pbmRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXBEO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7QUFDSCxTQUFTLG9CQUFvQixDQUFDLEdBQWM7QUFBSSxJQUM5QyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsTUFBTSx1QkFBdUIsR0FBRyxPQUFPLHFCQUFxQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQVl2SCxNQUFNLE9BQU8sMEJBQTBCO0FBQ3ZDLElBWEE7QUFDRyxRQVVRLFlBQU8sR0FBYyxFQUFFLENBQUM7QUFDbkMsSUFBQSxDQUFDO0FBQ0Q7c0RBYkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQkFBc0I7TUFDaEMsUUFB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QUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BHLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDM0IsUUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUM1QixRQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxQyxJQUFFLENBQUM7QUFDSDt5REF2RkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxvQ0FBb0Msa0JBQzlDLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsb0JBQW9CLHNCQUMzQixxQ0FBcUMsRUFBRSxrQkFBa0I7aUJBQzFELGNBQ0Y7O1dBQ0k7QUFBQztBQUF1RCxZQW5DcEQsbUJBQW1CO0FBQUksWUFDdkIsVUFBVTtBQUFJLFlBSlcsaUJBQWlCO0FBQUc7Ozs7Ozs7Ozs7cUpBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBhc2FwU2NoZWR1bGVyLCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7IE56VHJlZVZpZXcgfSBmcm9tICcuL3RyZWUnO1xuXG5pbXBvcnQgeyBnZXROZXh0U2libGluZywgZ2V0UGFyZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV0gPT4gMTAwMVxuICovXG5mdW5jdGlvbiBib29sZWFuQXJyYXlUb1N0cmluZyhhcnI6IGJvb2xlYW5bXSk6IHN0cmluZyB7XG4gIHJldHVybiBhcnIubWFwKGkgPT4gKGkgPyAxIDogMCkpLmpvaW4oJycpO1xufVxuXG5jb25zdCBCVUlMRF9JTkRFTlRTX1NDSEVEVUxFUiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnID8gYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgOiBhc2FwU2NoZWR1bGVyO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmVlLW5vZGUtaW5kZW50cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJlZS1pbmRlbnQtdW5pdFwiIFtjbGFzcy5hbnQtdHJlZS1pbmRlbnQtdW5pdC1lbmRdPVwiIWlzRW5kXCIgKm5nRm9yPVwibGV0IGlzRW5kIG9mIGluZGVudHNcIj48L3NwYW4+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdHJlZS1pbmRlbnQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUluZGVudHNDb21wb25lbnQge1xuICBASW5wdXQoKSBpbmRlbnRzOiBib29sZWFuW10gPSBbXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotdHJlZS1ub2RlW256VHJlZU5vZGVJbmRlbnRMaW5lXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10cmVlLXNob3ctbGluZScsXG4gICAgJ1tjbGFzcy5hbnQtdHJlZS10cmVlbm9kZS1sZWFmLWxhc3RdJzogJ2lzTGFzdCAmJiBpc0xlYWYnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUluZGVudExpbmVEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpc0xhc3Q6IGJvb2xlYW4gfCAndW5zZXQnID0gJ3Vuc2V0JztcbiAgaXNMZWFmID0gZmFsc2U7XG4gIHByaXZhdGUgcHJlTm9kZVJlZjogVCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG5leHROb2RlUmVmOiBUIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY3VycmVudEluZGVudHM6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlZU5vZGU6IE56VHJlZU5vZGVDb21wb25lbnQ8VD4sIHByaXZhdGUgdHJlZTogTnpUcmVlVmlldzxUPiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5idWlsZEluZGVudHMoKTtcbiAgICB0aGlzLmNoZWNrTGFzdCgpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlcGVuZGVudCBkYXRhIChUcmVlQ29udHJvbC5kYXRhTm9kZXMpIGNhbiBiZSBzZXQgYWZ0ZXIgbm9kZSBpbnN0YW50aWF0aW9uLFxuICAgICAqIGFuZCBzZXR0aW5nIHRoZSBpbmRlbnRzIGNhbiBjYXVzZSBmcmFtZSByYXRlIGxvc3MgaWYgaXQgaXMgc2V0IHRvbyBvZnRlbi5cbiAgICAgKi9cbiAgICB0aGlzLmNoYW5nZVN1YnNjcmlwdGlvbiA9IG1lcmdlKHRoaXMudHJlZU5vZGUuX2RhdGFDaGFuZ2VzLCB0cmVlLl9kYXRhU291cmNlQ2hhbmdlZClcbiAgICAgIC5waXBlKGF1ZGl0VGltZSgwLCBCVUlMRF9JTkRFTlRTX1NDSEVEVUxFUikpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5idWlsZEluZGVudHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0FkamFjZW50KCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEluZGVudHMoKTogYm9vbGVhbltdIHtcbiAgICBjb25zdCBpbmRlbnRzID0gW107XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZGF0YU5vZGVzO1xuICAgIGNvbnN0IGdldExldmVsID0gdGhpcy50cmVlLnRyZWVDb250cm9sLmdldExldmVsO1xuICAgIGxldCBwYXJlbnQgPSBnZXRQYXJlbnQobm9kZXMsIHRoaXMudHJlZU5vZGUuZGF0YSwgZ2V0TGV2ZWwpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5leHRTaWJsaW5nID0gZ2V0TmV4dFNpYmxpbmcobm9kZXMsIHBhcmVudCwgZ2V0TGV2ZWwpO1xuICAgICAgaWYgKHBhcmVudE5leHRTaWJsaW5nKSB7XG4gICAgICAgIGluZGVudHMudW5zaGlmdCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudHMudW5zaGlmdChmYWxzZSk7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBnZXRQYXJlbnQobm9kZXMsIHBhcmVudCwgZ2V0TGV2ZWwpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZW50cztcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRJbmRlbnRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyZWVOb2RlLmRhdGEpIHtcbiAgICAgIGNvbnN0IGluZGVudHMgPSB0aGlzLmdldEluZGVudHMoKTtcbiAgICAgIGNvbnN0IGRpZmZTdHJpbmcgPSBib29sZWFuQXJyYXlUb1N0cmluZyhpbmRlbnRzKTtcbiAgICAgIGlmIChkaWZmU3RyaW5nICE9PSB0aGlzLmN1cnJlbnRJbmRlbnRzKSB7XG4gICAgICAgIHRoaXMudHJlZU5vZGUuc2V0SW5kZW50cyh0aGlzLmdldEluZGVudHMoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGVudHMgPSBkaWZmU3RyaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBuZWVkIHRvIGFkZCBhbiBjbGFzcyBuYW1lIGZvciB0aGUgbGFzdCBjaGlsZCBub2RlLFxuICAgKiB0aGlzIHJlc3VsdCBjYW4gYWxzbyBiZSBhZmZlY3RlZCB3aGVuIHRoZSBhZGphY2VudCBub2RlcyBhcmUgY2hhbmdlZC5cbiAgICovXG4gIHByaXZhdGUgY2hlY2tBZGphY2VudCgpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMudHJlZS50cmVlQ29udHJvbC5kYXRhTm9kZXM7XG4gICAgY29uc3QgaW5kZXggPSBub2Rlcy5pbmRleE9mKHRoaXMudHJlZU5vZGUuZGF0YSk7XG4gICAgY29uc3QgcHJlTm9kZSA9IG5vZGVzW2luZGV4IC0gMV0gfHwgbnVsbDtcbiAgICBjb25zdCBuZXh0Tm9kZSA9IG5vZGVzW2luZGV4ICsgMV0gfHwgbnVsbDtcbiAgICBpZiAodGhpcy5uZXh0Tm9kZVJlZiAhPT0gbmV4dE5vZGUgfHwgdGhpcy5wcmVOb2RlUmVmICE9PSBwcmVOb2RlKSB7XG4gICAgICB0aGlzLmNoZWNrTGFzdChpbmRleCk7XG4gICAgfVxuICAgIHRoaXMucHJlTm9kZVJlZiA9IHByZU5vZGU7XG4gICAgdGhpcy5uZXh0Tm9kZVJlZiA9IG5leHROb2RlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0xhc3QoaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlcyA9IHRoaXMudHJlZS50cmVlQ29udHJvbC5kYXRhTm9kZXM7XG4gICAgdGhpcy5pc0xlYWYgPSB0aGlzLnRyZWVOb2RlLmlzTGVhZjtcbiAgICB0aGlzLmlzTGFzdCA9ICFnZXROZXh0U2libGluZyhub2RlcywgdGhpcy50cmVlTm9kZS5kYXRhLCB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZ2V0TGV2ZWwsIGluZGV4KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJlTm9kZVJlZiA9IG51bGw7XG4gICAgdGhpcy5uZXh0Tm9kZVJlZiA9IG51bGw7XG4gICAgdGhpcy5jaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19