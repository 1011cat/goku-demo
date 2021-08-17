(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/overlay'),require('@angular/cdk/platform'),require('ng-zorro-antd/button'),require('ng-zorro-antd/menu'),require('@angular/cdk/bidi'),require('ng-zorro-antd/core/no-animation'),require('@angular/common'),require('@angular/forms'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/overlay'),require('ng-zorro-antd/core/outlet'),exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/portal'), require('@angular/core'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/core/animation')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/dropdown', ['@angular/core','@angular/cdk/overlay','@angular/cdk/platform','ng-zorro-antd/button','ng-zorro-antd/menu','@angular/cdk/bidi','ng-zorro-antd/core/no-animation','@angular/common','@angular/forms','ng-zorro-antd/icon','ng-zorro-antd/core/overlay','ng-zorro-antd/core/outlet','exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/portal', '@angular/core', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/bidi', '@angular/common', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/core/animation'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.cdk.overlay,global.ng.cdk.platform,global.ngZorroAntd.button,global.ngZorroAntd.menu,global.ng.cdk.bidi,global.ngZorroAntd.core.noAnimation,global.ng.common,global.ng.forms,global.ngZorroAntd.icon,global.ngZorroAntd.core.overlay,global.ngZorroAntd.core.outlet,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].dropdown = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.portal, global.ng.core, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.bidi, global.ng.common, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].core.animation));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,exports, keycodes, i1, platform, portal, i0, logger, overlay, util, rxjs, operators, bidi, common, forms, button, noAnimation, outlet, icon, menu, animation) { 
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 0);
    ɵngcc0.ɵɵlistener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onAnimationEvent($event); })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.setMouseState(true); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.setMouseState(false); });
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("@slideMotion", undefined)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
var _c0 = ["*"];
'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var listOfPositions = [overlay.POSITION_MAP.bottomLeft, overlay.POSITION_MAP.bottomRight, overlay.POSITION_MAP.topRight, overlay.POSITION_MAP.topLeft];
    var NzDropDownDirective = /** @class */ (function () {
        function NzDropDownDirective(elementRef, overlay, renderer, viewContainerRef, platform) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.platform = platform;
            this.overlayRef = null;
            this.destroy$ = new rxjs.Subject();
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef.nativeElement)
                .withLockedPosition()
                .withTransformOriginOn('.ant-dropdown');
            this.inputVisible$ = new rxjs.BehaviorSubject(false);
            this.nzTrigger$ = new rxjs.BehaviorSubject('hover');
            this.overlayClose$ = new rxjs.Subject();
            this.nzDropdownMenu = null;
            this.nzTrigger = 'hover';
            this.nzMatchWidthElement = null;
            /**
             * @deprecated Not supported, use `nzHasBackDrop` instead.
             * @breaking-change 12.0.0
             */
            this.nzBackdrop = false;
            this.nzHasBackdrop = false;
            this.nzClickHide = true;
            this.nzDisabled = false;
            this.nzVisible = false;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzPlacement = 'bottomLeft';
            this.nzVisibleChange = new i0.EventEmitter();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-dropdown-trigger');
        }
        NzDropDownDirective.prototype.setDropdownMenuValue = function (key, value) {
            if (this.nzDropdownMenu) {
                this.nzDropdownMenu.setValue(key, value);
            }
        };
        NzDropDownDirective.prototype.ngOnInit = function () { };
        NzDropDownDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.nzDropdownMenu) {
                var nativeElement_1 = this.elementRef.nativeElement;
                /** host mouse state **/
                var hostMouseState$ = rxjs.merge(rxjs.fromEvent(nativeElement_1, 'mouseenter').pipe(operators.mapTo(true)), rxjs.fromEvent(nativeElement_1, 'mouseleave').pipe(operators.mapTo(false)));
                /** menu mouse state **/
                var menuMouseState$ = this.nzDropdownMenu.mouseState$;
                /** merged mouse state **/
                var mergedMouseState$_1 = rxjs.merge(menuMouseState$, hostMouseState$);
                /** host click state **/
                var hostClickState$_1 = rxjs.fromEvent(nativeElement_1, 'click').pipe(operators.map(function () { return !_this.nzVisible; }));
                /** visible state switch by nzTrigger **/
                var visibleStateByTrigger$ = this.nzTrigger$.pipe(operators.switchMap(function (trigger) {
                    if (trigger === 'hover') {
                        return mergedMouseState$_1;
                    }
                    else if (trigger === 'click') {
                        return hostClickState$_1;
                    }
                    else {
                        return rxjs.EMPTY;
                    }
                }));
                var descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(operators.filter(function () { return _this.nzClickHide; }), operators.mapTo(false));
                var domTriggerVisible$ = rxjs.merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(operators.filter(function () { return !_this.nzDisabled; }));
                var visible$ = rxjs.merge(this.inputVisible$, domTriggerVisible$);
                rxjs.combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$])
                    .pipe(operators.map(function (_a) {
                    var _b = __read(_a, 2), visible = _b[0], sub = _b[1];
                    return visible || sub;
                }), operators.auditTime(150), operators.distinctUntilChanged(), operators.filter(function () { return _this.platform.isBrowser; }), operators.takeUntil(this.destroy$))
                    .subscribe(function (visible) {
                    var element = _this.nzMatchWidthElement ? _this.nzMatchWidthElement.nativeElement : nativeElement_1;
                    var triggerWidth = element.getBoundingClientRect().width;
                    if (_this.nzVisible !== visible) {
                        _this.nzVisibleChange.emit(visible);
                    }
                    _this.nzVisible = visible;
                    if (visible) {
                        /** set up overlayRef **/
                        if (!_this.overlayRef) {
                            /** new overlay **/
                            _this.overlayRef = _this.overlay.create({
                                positionStrategy: _this.positionStrategy,
                                minWidth: triggerWidth,
                                disposeOnNavigation: true,
                                hasBackdrop: (_this.nzHasBackdrop || _this.nzBackdrop) && _this.nzTrigger === 'click',
                                scrollStrategy: _this.overlay.scrollStrategies.reposition()
                            });
                            rxjs.merge(_this.overlayRef.backdropClick(), _this.overlayRef.detachments(), _this.overlayRef.outsidePointerEvents().pipe(operators.filter(function (e) { return !_this.elementRef.nativeElement.contains(e.target); })), _this.overlayRef.keydownEvents().pipe(operators.filter(function (e) { return e.keyCode === keycodes.ESCAPE && !keycodes.hasModifierKey(e); })))
                                .pipe(operators.takeUntil(_this.destroy$))
                                .subscribe(function () {
                                _this.overlayClose$.next(false);
                            });
                        }
                        else {
                            /** update overlay config **/
                            var overlayConfig = _this.overlayRef.getConfig();
                            overlayConfig.minWidth = triggerWidth;
                        }
                        /** open dropdown with animation **/
                        _this.positionStrategy.withPositions(__spread([overlay.POSITION_MAP[_this.nzPlacement]], listOfPositions));
                        /** reset portal if needed **/
                        if (!_this.portal || _this.portal.templateRef !== _this.nzDropdownMenu.templateRef) {
                            _this.portal = new portal.TemplatePortal(_this.nzDropdownMenu.templateRef, _this.viewContainerRef);
                        }
                        _this.overlayRef.attach(_this.portal);
                    }
                    else {
                        /** detach overlayRef if needed **/
                        if (_this.overlayRef) {
                            _this.overlayRef.detach();
                        }
                    }
                });
                this.nzDropdownMenu.animationStateChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (event) {
                    if (event.toState === 'void') {
                        if (_this.overlayRef) {
                            _this.overlayRef.dispose();
                        }
                        _this.overlayRef = null;
                    }
                });
            }
        };
        NzDropDownDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.overlayRef = null;
            }
        };
        NzDropDownDirective.prototype.ngOnChanges = function (changes) {
            var nzVisible = changes.nzVisible, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTrigger = changes.nzTrigger, nzBackdrop = changes.nzBackdrop;
            if (nzTrigger) {
                this.nzTrigger$.next(this.nzTrigger);
            }
            if (nzVisible) {
                this.inputVisible$.next(this.nzVisible);
            }
            if (nzDisabled) {
                var nativeElement = this.elementRef.nativeElement;
                if (this.nzDisabled) {
                    this.renderer.setAttribute(nativeElement, 'disabled', '');
                    this.inputVisible$.next(false);
                }
                else {
                    this.renderer.removeAttribute(nativeElement, 'disabled');
                }
            }
            if (nzOverlayClassName) {
                this.setDropdownMenuValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.setDropdownMenuValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzBackdrop) {
                logger.warnDeprecation('`nzBackdrop` in dropdown component will be removed in 12.0.0, please use `nzHasBackdrop` instead.');
            }
        };
NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzDropDownDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzHasBackdrop: "nzHasBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownDirective, [{
        type: i0.Directive,
        args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Overlay }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.Platform }]; }, { nzDropdownMenu: [{
            type: i0.Input
        }], nzTrigger: [{
            type: i0.Input
        }], nzMatchWidthElement: [{
            type: i0.Input
        }], nzBackdrop: [{
            type: i0.Input
        }], nzHasBackdrop: [{
            type: i0.Input
        }], nzClickHide: [{
            type: i0.Input
        }], nzDisabled: [{
            type: i0.Input
        }], nzVisible: [{
            type: i0.Input
        }], nzOverlayClassName: [{
            type: i0.Input
        }], nzOverlayStyle: [{
            type: i0.Input
        }], nzPlacement: [{
            type: i0.Input
        }], nzVisibleChange: [{
            type: i0.Output
        }] }); })();
        return NzDropDownDirective;
    }());
    NzDropDownDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i1.Overlay },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: platform.Platform }
    ]; };
    NzDropDownDirective.propDecorators = {
        nzDropdownMenu: [{ type: i0.Input }],
        nzTrigger: [{ type: i0.Input }],
        nzMatchWidthElement: [{ type: i0.Input }],
        nzBackdrop: [{ type: i0.Input }],
        nzHasBackdrop: [{ type: i0.Input }],
        nzClickHide: [{ type: i0.Input }],
        nzDisabled: [{ type: i0.Input }],
        nzVisible: [{ type: i0.Input }],
        nzOverlayClassName: [{ type: i0.Input }],
        nzOverlayStyle: [{ type: i0.Input }],
        nzPlacement: [{ type: i0.Input }],
        nzVisibleChange: [{ type: i0.Output }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzHasBackdrop", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzContextMenuServiceModule = /** @class */ (function () {
        function NzContextMenuServiceModule() {
        }
NzContextMenuServiceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzContextMenuServiceModule });
NzContextMenuServiceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzContextMenuServiceModule, [{
        type: i0.NgModule
    }], function () { return []; }, null); })();
        return NzContextMenuServiceModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropDownADirective = /** @class */ (function () {
        function NzDropDownADirective(elementRef) {
            this.elementRef = elementRef;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-dropdown-link');
        }
NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzDropDownADirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownADirective, [{
        type: i0.Directive,
        args: [{
                selector: 'a[nz-dropdown]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return NzDropDownADirective;
    }());
    NzDropDownADirective.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropdownButtonDirective = /** @class */ (function () {
        function NzDropdownButtonDirective(renderer, nzButtonGroupComponent, elementRef) {
            this.renderer = renderer;
            this.nzButtonGroupComponent = nzButtonGroupComponent;
            this.elementRef = elementRef;
        }
        NzDropdownButtonDirective.prototype.ngAfterViewInit = function () {
            var parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
            if (this.nzButtonGroupComponent && parentElement) {
                this.renderer.addClass(parentElement, 'ant-dropdown-button');
            }
        };
NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) { return new (t || NzDropdownButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzButtonGroupComponent, 9), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzDropdownButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDropdownButtonDirective, selectors: [["", "nz-button", "", "nz-dropdown", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropdownButtonDirective, [{
        type: i0.Directive,
        args: [{
                selector: '[nz-button][nz-dropdown]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc3.NzButtonGroupComponent, decorators: [{
                type: i0.Host
            }, {
                type: i0.Optional
            }] }, { type: ɵngcc0.ElementRef }]; }, null); })();
        return NzDropdownButtonDirective;
    }());
    NzDropdownButtonDirective.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: button.NzButtonGroupComponent, decorators: [{ type: i0.Host }, { type: i0.Optional }] },
        { type: i0.ElementRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropdownMenuComponent = /** @class */ (function () {
        function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.nzMenuService = nzMenuService;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this.mouseState$ = new rxjs.BehaviorSubject(false);
            this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
            this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
            this.animationStateChange$ = new i0.EventEmitter();
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
        }
        NzDropdownMenuComponent.prototype.onAnimationEvent = function (event) {
            this.animationStateChange$.emit(event);
        };
        NzDropdownMenuComponent.prototype.setMouseState = function (visible) {
            this.mouseState$.next(visible);
        };
        NzDropdownMenuComponent.prototype.setValue = function (key, value) {
            this[key] = value;
            this.cdr.markForCheck();
        };
        NzDropdownMenuComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        NzDropdownMenuComponent.prototype.ngAfterContentInit = function () {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        };
        NzDropdownMenuComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.MenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.NzNoAnimationDirective, 9)); };
NzDropdownMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(i0.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["nzDropdownMenu"], features: [ɵngcc0.ɵɵProvidersFeature([
            menu.MenuService,
            /** menu is inside dropdown-menu component **/
            {
                provide: menu.NzIsMenuInsideDropDownToken,
                useValue: true
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
    } }, directives: [ɵngcc7.NgClass, ɵngcc7.NgStyle, ɵngcc6.NzNoAnimationDirective], encapsulation: 2, data: { animation: [animation.slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: i0.Component,
        args: [{
                selector: "nz-dropdown-menu",
                exportAs: "nzDropdownMenu",
                animations: [animation.slideMotion],
                providers: [
                    menu.MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: menu.NzIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ],
                template: "\n    <ng-template>\n      <div\n        class=\"ant-dropdown\"\n        [class.ant-dropdown-rtl]=\"dir === 'rtl'\"\n        [ngClass]=\"nzOverlayClassName\"\n        [ngStyle]=\"nzOverlayStyle\"\n        @slideMotion\n        (@slideMotion.done)=\"onAnimationEvent($event)\"\n        [@.disabled]=\"noAnimation?.nzNoAnimation\"\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\n        (mouseenter)=\"setMouseState(true)\"\n        (mouseleave)=\"setMouseState(false)\"\n      >\n        <ng-content></ng-content>\n      </div>\n    </ng-template>\n  ",
                preserveWhitespaces: false,
                encapsulation: i0.ViewEncapsulation.None,
                changeDetection: i0.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc4.MenuService }, { type: ɵngcc5.Directionality, decorators: [{
                type: i0.Optional
            }] }, { type: ɵngcc6.NzNoAnimationDirective, decorators: [{
                type: i0.Host
            }, {
                type: i0.Optional
            }] }]; }, { templateRef: [{
            type: i0.ViewChild,
            args: [i0.TemplateRef, { static: true }]
        }] }); })();
        return NzDropdownMenuComponent;
    }());
    NzDropdownMenuComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: menu.MenuService },
        { type: bidi.Directionality, decorators: [{ type: i0.Optional }] },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: i0.Host }, { type: i0.Optional }] }
    ]; };
    NzDropdownMenuComponent.propDecorators = {
        templateRef: [{ type: i0.ViewChild, args: [i0.TemplateRef, { static: true },] }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDropDownModule = /** @class */ (function () {
        function NzDropDownModule() {
        }
NzDropDownModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzDropDownModule });
NzDropDownModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
            bidi.BidiModule,
            common.CommonModule,
            i1.OverlayModule,
            forms.FormsModule,
            button.NzButtonModule,
            menu.NzMenuModule,
            icon.NzIconModule,
            noAnimation.NzNoAnimationModule,
            platform.PlatformModule,
            overlay.NzOverlayModule,
            NzContextMenuServiceModule,
            outlet.NzOutletModule
        ], ɵngcc4.NzMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzDropDownModule, { declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective], imports: [ɵngcc5.BidiModule, ɵngcc7.CommonModule, ɵngcc1.OverlayModule, ɵngcc8.FormsModule, ɵngcc3.NzButtonModule, ɵngcc4.NzMenuModule, ɵngcc9.NzIconModule, ɵngcc6.NzNoAnimationModule, ɵngcc2.PlatformModule, ɵngcc10.NzOverlayModule, NzContextMenuServiceModule, ɵngcc11.NzOutletModule], exports: [ɵngcc4.NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownModule, [{
        type: i0.NgModule,
        args: [{
                imports: [
                    bidi.BidiModule,
                    common.CommonModule,
                    i1.OverlayModule,
                    forms.FormsModule,
                    button.NzButtonModule,
                    menu.NzMenuModule,
                    icon.NzIconModule,
                    noAnimation.NzNoAnimationModule,
                    platform.PlatformModule,
                    overlay.NzOverlayModule,
                    NzContextMenuServiceModule,
                    outlet.NzOutletModule
                ],
                entryComponents: [NzDropdownMenuComponent],
                declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective],
                exports: [menu.NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
            }]
    }], function () { return []; }, null); })();
        return NzDropDownModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var listOfPositions$1 = [
        new i1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
        new i1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        new i1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        new i1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
    ];
    var NzContextMenuService = /** @class */ (function () {
        function NzContextMenuService(overlay) {
            this.overlay = overlay;
            this.overlayRef = null;
            this.closeSubscription = rxjs.Subscription.EMPTY;
        }
        NzContextMenuService.prototype.create = function ($event, nzDropdownMenuComponent) {
            var _this = this;
            this.close(true);
            var x = $event.x, y = $event.y;
            if ($event instanceof MouseEvent) {
                $event.preventDefault();
            }
            var positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo({ x: x, y: y })
                .withPositions(listOfPositions$1)
                .withTransformOriginOn('.ant-dropdown');
            this.overlayRef = this.overlay.create({
                positionStrategy: positionStrategy,
                disposeOnNavigation: true,
                scrollStrategy: this.overlay.scrollStrategies.close()
            });
            this.closeSubscription = rxjs.merge(nzDropdownMenuComponent.descendantMenuItemClick$, rxjs.fromEvent(document, 'click').pipe(operators.filter(function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains(event.target); }), 
            /** handle firefox contextmenu event **/
            operators.filter(function (event) { return event.button !== 2; }), operators.take(1))).subscribe(function () {
                _this.close();
            });
            this.overlayRef.attach(new portal.TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        };
        NzContextMenuService.prototype.close = function (clear) {
            if (clear === void 0) { clear = false; }
            if (this.overlayRef) {
                this.overlayRef.detach();
                if (clear) {
                    this.overlayRef.dispose();
                }
                this.overlayRef = null;
                this.closeSubscription.unsubscribe();
            }
        };
NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(ɵngcc0.ɵɵinject(ɵngcc1.Overlay)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzContextMenuService, [{
        type: i0.Injectable,
        args: [{
                providedIn: NzContextMenuServiceModule
            }]
    }], function () { return [{ type: ɵngcc1.Overlay }]; }, null); })();
        return NzContextMenuService;
    }());
    NzContextMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzContextMenuService_Factory() { return new NzContextMenuService(i0.ɵɵinject(i1.Overlay)); }, token: NzContextMenuService, providedIn: NzContextMenuServiceModule });
    NzContextMenuService.ctorParameters = function () { return [
        { type: i1.Overlay }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzContextMenuService = NzContextMenuService;
    exports.NzContextMenuServiceModule = NzContextMenuServiceModule;
    exports.NzDropDownADirective = NzDropDownADirective;
    exports.NzDropDownDirective = NzDropDownDirective;
    exports.NzDropDownModule = NzDropDownModule;
    exports.NzDropdownButtonDirective = NzDropdownButtonDirective;
    exports.NzDropdownMenuComponent = NzDropdownMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-dropdown.umd.js.map