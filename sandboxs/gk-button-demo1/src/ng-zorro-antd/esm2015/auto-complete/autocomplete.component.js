/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { defer, merge, Subject, Subscription } from 'rxjs';
import { filter, switchMap, take, takeUntil } from 'rxjs/operators';
import { Directionality } from '@angular/cdk/bidi';
import { NzAutocompleteOptionComponent } from './autocomplete-option.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/bidi';
import * as ɵngcc2 from 'ng-zorro-antd/core/no-animation';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './autocomplete-option.component';

const _c0 = ["panel"];
const _c1 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "nz-auto-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzValue", option_r9)("nzLabel", option_r9 && option_r9.label ? option_r9.label : option_r9);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r9 && option_r9.label ? option_r9.label : option_r9, " ");
} }
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 3, "nz-auto-option", 7);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.nzDataSource);
} }
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
    ɵngcc0.ɵɵlistener("@slideMotion.done", function NzAutocompleteComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onAnimationEvent($event); });
    ɵngcc0.ɵɵelementStart(2, "div", 2);
    ɵngcc0.ɵɵelementStart(3, "div", 3);
    ɵngcc0.ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r3 = ɵngcc0.ɵɵreference(6);
    const _r5 = ɵngcc0.ɵɵreference(8);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r0.showPanel)("ant-select-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", undefined)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzDataSource ? _r5 : _r3);
} }
const _c2 = ["*"];
export class NzAutocompleteComponent {
    constructor(changeDetectorRef, ngZone, directionality, noAnimation) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.compareWith = (o1, o2) => o1 === o2;
        this.selectionChange = new EventEmitter();
        this.showPanel = true;
        this.isOpen = false;
        this.activeItem = null;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.animationStateChange = new EventEmitter();
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.optionMouseEnterSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /** Options changes listener */
        this.optionSelectionChanges = defer(() => {
            if (this.options) {
                return merge(...this.options.map(option => option.selectionChange));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.optionSelectionChanges));
        });
        this.optionMouseEnter = defer(() => {
            if (this.options) {
                return merge(...this.options.map(option => option.mouseEntered));
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.optionMouseEnter));
        });
    }
    /**
     * Options accessor, its source may be content or dataSource
     */
    get options() {
        // first dataSource
        if (this.nzDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.changeDetectorRef.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    onAnimationEvent(event) {
        this.animationStateChange.emit(event);
    }
    ngAfterContentInit() {
        if (!this.nzDataSource) {
            this.optionsInit();
        }
    }
    ngAfterViewInit() {
        if (this.nzDataSource) {
            this.optionsInit();
        }
    }
    ngOnDestroy() {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
        this.optionMouseEnterSubscription.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    setActiveItem(index) {
        const activeItem = this.options.get(index);
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
        }
        else {
            this.activeItem = null;
            this.activeItemIndex = -1;
            this.clearSelectedOptions();
        }
        this.changeDetectorRef.markForCheck();
    }
    setNextItemActive() {
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    setPreviousItemActive() {
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    getOptionIndex(value) {
        return this.options.reduce((result, current, index) => {
            return result === -1 ? (this.compareWith(value, current.nzValue) ? index : -1) : result;
        }, -1);
    }
    getOption(value) {
        return this.options.find(item => this.compareWith(value, item.nzValue)) || null;
    }
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe(e => {
            if (!e.dirty && this.isOpen) {
                setTimeout(() => this.setVisibility());
            }
            this.subscribeOptionChanges();
        });
    }
    /**
     * Clear the status of options
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach(option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    }
    subscribeOptionChanges() {
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((event) => event.isUserInput))
            .subscribe((event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        });
        this.optionMouseEnterSubscription.unsubscribe();
        this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((event) => {
            event.setActiveStyles();
            this.activeItem = event;
            this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
            this.clearSelectedOptions(event);
        });
    }
}
NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzNoAnimationDirective, 9)); };
NzAutocompleteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
    } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(TemplateRef, true);
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(NzAutocompleteOptionComponent, true);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.panel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
    } }, inputs: { nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzWidth: "nzWidth", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "ngClass", "ngStyle", "nzNoAnimation"], ["panel", ""], [2, "max-height", "256px", "overflow-y", "auto", "overflow-anchor", "none"], [2, "display", "flex", "flex-direction", "column"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgStyle, ɵngcc2.NzNoAnimationDirective, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgForOf, ɵngcc4.NzAutocompleteOptionComponent], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
NzAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
];
NzAutocompleteComponent.propDecorators = {
    nzWidth: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzDefaultActiveFirstOption: [{ type: Input }],
    nzBackfill: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzDataSource: [{ type: Input }],
    selectionChange: [{ type: Output }],
    fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
    fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
    template: [{ type: ViewChild, args: [TemplateRef, { static: false },] }],
    panel: [{ type: ViewChild, args: ['panel', { static: false },] }],
    content: [{ type: ViewChild, args: ['content', { static: false },] }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutocompleteComponent, [{
        type: Component,
        args: [{
                selector: 'nz-autocomplete',
                exportAs: 'nzAutocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [class.ant-select-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="noAnimation?.nzNoAnimation"
      >
        <div style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
          <div style="display: flex; flex-direction: column;">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate"></ng-template>
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content></ng-content>
      </ng-template>
      <ng-template #optionsTemplate>
        <nz-auto-option
          *ngFor="let option of nzDataSource!"
          [nzValue]="option"
          [nzLabel]="option && $any(option).label ? $any(option).label : $any(option)"
        >
          {{ option && $any(option).label ? $any(option).label : $any(option) }}
        </nz-auto-option>
      </ng-template>
    </ng-template>
  `,
                animations: [slideMotion]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzDefaultActiveFirstOption: [{
            type: Input
        }], nzBackfill: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], nzWidth: [{
            type: Input
        }], nzDataSource: [{
            type: Input
        }], fromContentOptions: [{
            type: ContentChildren,
            args: [NzAutocompleteOptionComponent, { descendants: true }]
        }], fromDataSourceOptions: [{
            type: ViewChildren,
            args: [NzAutocompleteOptionComponent]
        }], template: [{
            type: ViewChild,
            args: [TemplateRef, { static: false }]
        }], panel: [{
            type: ViewChild,
            args: ['panel', { static: false }]
        }], content: [{
            type: ViewChild,
            args: ['content', { static: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9hdXRvLWNvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBRUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQTJCLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EekcsTUFBTSxPQUFPLHVCQUF1QjtBQUFHLElBb0VyQyxZQUNVLGlCQUFvQyxFQUNwQyxNQUFjLEVBQ0YsY0FBOEIsRUFDdkIsV0FBb0M7QUFDaEUsUUFKUyxzQkFBaUIsR0FBakIsaUJB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dGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgQ29tcGFyZVdpdGgsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSA9IEFycmF5PEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHwgc3RyaW5nIHwgbnVtYmVyPjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotYXV0b2NvbXBsZXRlJyxcbiAgZXhwb3J0QXM6ICduekF1dG9jb21wbGV0ZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgICNwYW5lbFxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdFwiXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLWhpZGRlbl09XCIhc2hvd1BhbmVsXCJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICBbbmdDbGFzc109XCJuek92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICBbbmdTdHlsZV09XCJuek92ZXJsYXlTdHlsZVwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgQHNsaWRlTW90aW9uXG4gICAgICAgIChAc2xpZGVNb3Rpb24uZG9uZSk9XCJvbkFuaW1hdGlvbkV2ZW50KCRldmVudClcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXgtaGVpZ2h0OiAyNTZweDsgb3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwibnpEYXRhU291cmNlID8gb3B0aW9uc1RlbXBsYXRlIDogY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICNvcHRpb25zVGVtcGxhdGU+XG4gICAgICAgIDxuei1hdXRvLW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbnpEYXRhU291cmNlIVwiXG4gICAgICAgICAgW256VmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICBbbnpMYWJlbF09XCJvcHRpb24gJiYgJGFueShvcHRpb24pLmxhYmVsID8gJGFueShvcHRpb24pLmxhYmVsIDogJGFueShvcHRpb24pXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG9wdGlvbiAmJiAkYW55KG9wdGlvbikubGFiZWwgPyAkYW55KG9wdGlvbikubGFiZWwgOiAkYW55KG9wdGlvbikgfX1cbiAgICAgICAgPC9uei1hdXRvLW9wdGlvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekJhY2tmaWxsOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgbnpXaWR0aD86IG51bWJlcjtcbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJhY2tmaWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiBDb21wYXJlV2l0aCA9IChvMSwgbzIpID0+IG8xID09PSBvMjtcbiAgQElucHV0KCkgbnpEYXRhU291cmNlPzogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+KCk7XG5cbiAgc2hvd1BhbmVsOiBib29sZWFuID0gdHJ1ZTtcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGFjdGl2ZUl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBhbmltYXRpb25TdGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgYWNjZXNzb3IsIGl0cyBzb3VyY2UgbWF5IGJlIGNvbnRlbnQgb3IgZGF0YVNvdXJjZVxuICAgKi9cbiAgZ2V0IG9wdGlvbnMoKTogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiB7XG4gICAgLy8gZmlyc3QgZGF0YVNvdXJjZVxuICAgIGlmICh0aGlzLm56RGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tQ29udGVudE9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByb3ZpZGVkIGJ5IGNvbnRlbnQgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBmcm9tQ29udGVudE9wdGlvbnMhOiBRdWVyeUxpc3Q8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+O1xuICAvKiogUHJvdmlkZWQgYnkgZGF0YVNvdXJjZSAqL1xuICBAVmlld0NoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnMhOiBRdWVyeUxpc3Q8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+O1xuXG4gIC8qKiBjZGstb3ZlcmxheSAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHBhbmVsPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjb250ZW50PzogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIG9wdGlvbk1vdXNlRW50ZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgLyoqIE9wdGlvbnMgY2hhbmdlcyBsaXN0ZW5lciAqL1xuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gbWVyZ2U8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KC4uLnRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zZWxlY3Rpb25DaGFuZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcylcbiAgICApO1xuICB9KTtcbiAgcmVhZG9ubHkgb3B0aW9uTW91c2VFbnRlcjogT2JzZXJ2YWJsZTxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgcmV0dXJuIG1lcmdlPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiguLi50aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ubW91c2VFbnRlcmVkKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvbk1vdXNlRW50ZXIpXG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBvbkFuaW1hdGlvbkV2ZW50KGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5vcHRpb25zSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMub3B0aW9uc0luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3B0aW9uTW91c2VFbnRlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHNldFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLm9wdGlvbnMuZ2V0KGluZGV4KTtcbiAgICBpZiAoYWN0aXZlSXRlbSAmJiAhYWN0aXZlSXRlbS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyh0aGlzLmFjdGl2ZUl0ZW0pO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA8PSB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA6IDA7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKG5leHRJbmRleCk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMSA8IDAgPyB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMTtcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0ocHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBnZXRPcHRpb25JbmRleCh2YWx1ZTogTnpTYWZlQW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlZHVjZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSAtMSA/ICh0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLCBjdXJyZW50Lm56VmFsdWUpID8gaW5kZXggOiAtMSkgOiByZXN1bHQ7XG4gICAgfSwgLTEpITtcbiAgfVxuXG4gIGdldE9wdGlvbih2YWx1ZTogTnpTYWZlQW55KTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLCBpdGVtLm56VmFsdWUpKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpb25zSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5uekRhdGFTb3VyY2UgPyB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucy5jaGFuZ2VzIDogdGhpcy5mcm9tQ29udGVudE9wdGlvbnMuY2hhbmdlcztcbiAgICAvLyBhc3luY1xuICAgIHRoaXMuZGF0YVNvdXJjZUNoYW5nZVN1YnNjcmlwdGlvbiA9IGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWaXNpYmlsaXR5KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHN0YXR1cyBvZiBvcHRpb25zXG4gICAqL1xuICBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfCBudWxsLCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IGV2ZW50LmlzVXNlcklucHV0KSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgICBldmVudC5zb3VyY2Uuc2VsZWN0KCk7XG4gICAgICAgIGV2ZW50LnNvdXJjZS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuZ2V0T3B0aW9uSW5kZXgodGhpcy5hY3RpdmVJdGVtLm56VmFsdWUpO1xuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKGV2ZW50LnNvdXJjZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQuc291cmNlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25Nb3VzZUVudGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vcHRpb25Nb3VzZUVudGVyU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25Nb3VzZUVudGVyLnN1YnNjcmliZSgoZXZlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICBldmVudC5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGV2ZW50O1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSB0aGlzLmdldE9wdGlvbkluZGV4KHRoaXMuYWN0aXZlSXRlbS5uelZhbHVlKTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=