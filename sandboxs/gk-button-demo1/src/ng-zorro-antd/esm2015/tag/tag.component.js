/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { isPresetColor, isStatusColor, presetColors, statusColors } from 'ng-zorro-antd/core/color';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/icon';

function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "i", 1);
    ɵngcc0.ɵɵlistener("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.closeTag($event); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class NzTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    clearPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        // /(ant-tag-(?:pink|red|...))/g
        const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join('|')}))`, 'g');
        const classname = hostElement.classList.toString();
        const matches = [];
        let match = regexp.exec(classname);
        while (match !== null) {
            matches.push(match[1]);
            match = regexp.exec(classname);
        }
        hostElement.classList.remove(...matches);
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    setPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        this.clearPresetColor();
        if (!this.nzColor) {
            this.isPresetColor = false;
        }
        else {
            this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
        }
        if (this.isPresetColor) {
            hostElement.classList.add(`ant-tag-${this.nzColor}`);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.setPresetColor();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzTagComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 10, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        ɵngcc0.ɵɵclassProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzColor: "nzColor" }, outputs: { nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMode === "closeable");
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTagComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzOnClose: [{ type: Output }],
    nzCheckedChange: [{ type: Output }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTagComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <i nz-icon nzType="close" class="ant-tag-close-icon" *ngIf="nzMode === 'closeable'" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : nzColor`,
                    '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzMode: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzOnClose: [{
            type: Output
        }], nzCheckedChange: [{
            type: Output
        }], nzColor: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBZ0MsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQXFCM0MsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQVc1QixZQUNVLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1YsY0FBOEI7QUFDbkQsUUFKUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDWCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFDdEQsUUFkRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztBQUN4QixRQUFXLFdBQU0sR0FBMEMsU0FBUyxDQUFDO0FBQ3JFLFFBQzJCLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDN0MsUUFBcUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7QUFDaEUsUUFBcUIsb0JB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LEVBQUUsOEJBQThCO2lCQUMxRDt3QkFBMkIsRUFBRSwyQkFBMkIsc0JBQ3hEO2dCQUEyQixFQUFFLHdCQUF3QixzQkFDckQsbUNBQW1DLEVBQUUsV0FBVyxzQkFDaEQscUJBQXFCLEVBQUUsZUFBZSxzQkFDdEMsU0FBUyxFQUFFO2lCQUF1QixrQkFDbkMsY0FDRjs7Ozs7OztvR0FDSTtBQUFDO0FBQXdDLFlBdkM1QyxpQkFBaUI7QUFDakIsWUFTQSxTQUFTO0FBQ1QsWUFUQSxVQUFVO0FBQ1YsWUFOa0IsY0FBYyx1QkF5RDdCLFFBQVE7QUFBTTtBQUFHO0FBQ3JCLHFCQWJFLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHdCQUNWLE1BQU07QUFBSyw4QkFDWCxNQUFNO0FBQUk7QUFGYztBQUFhLElBQTVCLFlBQVksRUFBRTtBQUFFO0FBQ1IsaURBRHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUM3QztBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQcmVzZXRDb2xvciwgaXNTdGF0dXNDb2xvciwgTnpQcmVzZXRDb2xvciwgTnpTdGF0dXNDb2xvciwgcHJlc2V0Q29sb3JzLCBzdGF0dXNDb2xvcnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29sb3InO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdGFnJyxcbiAgZXhwb3J0QXM6ICduelRhZycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJhbnQtdGFnLWNsb3NlLWljb25cIiAqbmdJZj1cIm56TW9kZSA9PT0gJ2Nsb3NlYWJsZSdcIiB0YWJpbmRleD1cIi0xXCIgKGNsaWNrKT1cImNsb3NlVGFnKCRldmVudClcIj48L2k+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6IGBpc1ByZXNldENvbG9yID8gJycgOiBuekNvbG9yYCxcbiAgICAnW2NsYXNzLmFudC10YWctaGFzLWNvbG9yXSc6IGBuekNvbG9yICYmICFpc1ByZXNldENvbG9yYCxcbiAgICAnW2NsYXNzLmFudC10YWctY2hlY2thYmxlXSc6IGBuek1vZGUgPT09ICdjaGVja2FibGUnYCxcbiAgICAnW2NsYXNzLmFudC10YWctY2hlY2thYmxlLWNoZWNrZWRdJzogYG56Q2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFnLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJyhjbGljayknOiAndXBkYXRlQ2hlY2tlZFN0YXR1cygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekNoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcbiAgaXNQcmVzZXRDb2xvciA9IGZhbHNlO1xuICBASW5wdXQoKSBuek1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56Q29sb3I/OiBzdHJpbmcgfCBOelN0YXR1c0NvbG9yIHwgTnpQcmVzZXRDb2xvcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdGFnJyk7XG4gIH1cblxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcbiAgICAgIHRoaXMubnpDaGVja2VkID0gIXRoaXMubnpDaGVja2VkO1xuICAgICAgdGhpcy5uekNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICogaG9zdDoge1xuICAgKiAgICdbY2xhc3NdJzogYGlzUHJlc2V0Q29sb3IgPyAoJ2FudC10YWctJyArIG56Q29sb3IpIDogJydgXG4gICAqIH1cbiAgICovXG4gIHByaXZhdGUgY2xlYXJQcmVzZXRDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIC8vIC8oYW50LXRhZy0oPzpwaW5rfHJlZHwuLi4pKS9nXG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgKGFudC10YWctKD86JHtbLi4ucHJlc2V0Q29sb3JzLCAuLi5zdGF0dXNDb2xvcnNdLmpvaW4oJ3wnKX0pKWAsICdnJyk7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gaG9zdEVsZW1lbnQuY2xhc3NMaXN0LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbWF0Y2hlczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSByZWdleHAuZXhlYyhjbGFzc25hbWUpO1xuICAgIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoWzFdKTtcbiAgICAgIG1hdGNoID0gcmVnZXhwLmV4ZWMoY2xhc3NuYW1lKTtcbiAgICB9XG4gICAgaG9zdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5tYXRjaGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICogaG9zdDoge1xuICAgKiAgICdbY2xhc3NdJzogYGlzUHJlc2V0Q29sb3IgPyAoJ2FudC10YWctJyArIG56Q29sb3IpIDogJydgXG4gICAqIH1cbiAgICovXG4gIHByaXZhdGUgc2V0UHJlc2V0Q29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmNsZWFyUHJlc2V0Q29sb3IoKTtcbiAgICBpZiAoIXRoaXMubnpDb2xvcikge1xuICAgICAgdGhpcy5pc1ByZXNldENvbG9yID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNQcmVzZXRDb2xvciA9IGlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKSB8fCBpc1N0YXR1c0NvbG9yKHRoaXMubnpDb2xvcik7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzUHJlc2V0Q29sb3IpIHtcbiAgICAgIGhvc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYGFudC10YWctJHt0aGlzLm56Q29sb3J9YCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56Q29sb3IgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56Q29sb3IpIHtcbiAgICAgIHRoaXMuc2V0UHJlc2V0Q29sb3IoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==