(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/cdk/bidi'),require('@angular/common'),require('ng-zorro-antd/dropdown'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/outlet'),require('@angular/cdk/overlay'),require('ng-zorro-antd/core/overlay'),exports, require('@angular/core'), require('@angular/cdk/bidi'), require('@angular/router'), require('ng-zorro-antd/core/logger'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/core/overlay'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/breadcrumb', ['@angular/core','@angular/cdk/bidi','@angular/common','ng-zorro-antd/dropdown','ng-zorro-antd/icon','ng-zorro-antd/core/outlet','@angular/cdk/overlay','ng-zorro-antd/core/overlay','exports', '@angular/core', '@angular/cdk/bidi', '@angular/router', 'ng-zorro-antd/core/logger', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/core/overlay', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.cdk.bidi,global.ng.common,global.ngZorroAntd.dropdown,global.ngZorroAntd.icon,global.ngZorroAntd.core.outlet,global.ng.cdk.overlay,global.ngZorroAntd.core.overlay,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].breadcrumb = {}), global.ng.core, global.ng.cdk.bidi, global.ng.router, global['ng-zorro-antd'].core.logger, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.overlay, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].core.overlay, global['ng-zorro-antd'].dropdown, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,exports, core, bidi, router, logger, util, rxjs, operators, overlay, common, outlet, overlay$1, dropdown, icon) { 
function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "nz-breadcrumb-item");
    ɵngcc0.ɵɵelementStart(1, "a", 2);
    ɵngcc0.ɵɵlistener("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var breadcrumb_r2 = ctx.$implicit; var ctx_r3 = ɵngcc0.ɵɵnextContext(2); return ctx_r3.navigate(breadcrumb_r2.url, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var breadcrumb_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("href", breadcrumb_r2.url, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(breadcrumb_r2.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
var _c0 = ["*"];
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 6);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    ɵngcc0.ɵɵtemplate(3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r1 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzDropdownMenu", ctx_r0.nzOverlay);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !!ctx_r0.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} }
function NzBreadCrumbItemComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.nzBreadCrumbComponent.nzSeparator, " ");
} }
function NzBreadCrumbItemComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtemplate(1, NzBreadCrumbItemComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzBreadCrumbComponent.nzSeparator);
} }
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

    var NzBreadCrumbComponent = /** @class */ (function () {
        function NzBreadCrumbComponent(injector, ngZone, cdr, elementRef, renderer, directionality) {
            this.injector = injector;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.directionality = directionality;
            this.nzAutoGenerate = false;
            this.nzSeparator = '/';
            this.nzRouteLabel = 'breadcrumb';
            this.nzRouteLabelFn = function (label) { return label; };
            this.breadcrumbs = [];
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
        }
        NzBreadCrumbComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            if (this.nzAutoGenerate) {
                this.registerRouterChange();
            }
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.prepareComponentForRtl();
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.prepareComponentForRtl();
        };
        NzBreadCrumbComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzBreadCrumbComponent.prototype.navigate = function (url, e) {
            var _this = this;
            e.preventDefault();
            this.ngZone.run(function () { return _this.injector.get(router.Router).navigateByUrl(url).then(); }).then();
        };
        NzBreadCrumbComponent.prototype.registerRouterChange = function () {
            var _this = this;
            try {
                var router$1 = this.injector.get(router.Router);
                var activatedRoute_1 = this.injector.get(router.ActivatedRoute);
                router$1.events
                    .pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.takeUntil(this.destroy$), operators.startWith(true) // trigger initial render
                )
                    .subscribe(function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root);
                    _this.cdr.markForCheck();
                });
            }
            catch (e) {
                throw new Error(logger.PREFIX + " You should import RouterModule if you want to use 'NzAutoGenerate'.");
            }
        };
        NzBreadCrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
            var e_1, _b;
            if (url === void 0) { url = ''; }
            if (breadcrumbs === void 0) { breadcrumbs = []; }
            var children = route.children;
            // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
            if (children.length === 0) {
                return breadcrumbs;
            }
            try {
                for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var child = children_1_1.value;
                    if (child.outlet === router.PRIMARY_OUTLET) {
                        // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                        // Parse this layer and generate a breadcrumb item.
                        var routeUrl = child.snapshot.url
                            .map(function (segment) { return segment.path; })
                            .filter(function (path) { return path; })
                            .join('/');
                        // Do not change nextUrl if routeUrl is falsy. This happens when it's a route lazy loading other modules.
                        var nextUrl = !!routeUrl ? url + ("/" + routeUrl) : url;
                        var breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
                        // If have data, go to generate a breadcrumb for it.
                        if (routeUrl && breadcrumbLabel) {
                            var breadcrumb = {
                                label: breadcrumbLabel,
                                params: child.snapshot.params,
                                url: nextUrl
                            };
                            breadcrumbs.push(breadcrumb);
                        }
                        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_b = children_1.return)) _b.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return breadcrumbs;
        };
        NzBreadCrumbComponent.prototype.prepareComponentForRtl = function () {
            if (this.dir === 'rtl') {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
            }
        };
NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Directionality, 8)); };
NzBreadCrumbComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel", nzRouteLabelFn: "nzRouteLabelFn" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵtemplate(1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAutoGenerate && ctx.breadcrumbs.length);
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc2.NgForOf, NzBreadCrumbItemComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: "\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"nzAutoGenerate && breadcrumbs.length\">\n      <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n        <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n      </nz-breadcrumb-item>\n    </ng-container>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzAutoGenerate: [{
            type: core.Input
        }], nzSeparator: [{
            type: core.Input
        }], nzRouteLabel: [{
            type: core.Input
        }], nzRouteLabelFn: [{
            type: core.Input
        }] }); })();
        return NzBreadCrumbComponent;
    }());
    NzBreadCrumbComponent.ctorParameters = function () { return [
        { type: core.Injector },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzBreadCrumbComponent.propDecorators = {
        nzAutoGenerate: [{ type: core.Input }],
        nzSeparator: [{ type: core.Input }],
        nzRouteLabel: [{ type: core.Input }],
        nzRouteLabelFn: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBreadCrumbItemComponent = /** @class */ (function () {
        function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
            this.nzBreadCrumbComponent = nzBreadCrumbComponent;
        }
NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(ɵngcc0.ɵɵdirectiveInject(NzBreadCrumbComponent)); };
NzBreadCrumbItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], ["class", "ant-breadcrumb-separator", 4, "ngIf"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzBreadCrumbItemComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", !!ctx.nzOverlay)("ngIfElse", _r1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzDropDownDirective, ɵngcc2.NgTemplateOutlet, ɵngcc4.NzIconDirective, ɵngcc5.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbItemComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                template: "\n    <ng-container *ngIf=\"!!nzOverlay; else noMenuTpl\">\n      <span class=\"ant-breadcrumb-overlay-link\" nz-dropdown [nzDropdownMenu]=\"nzOverlay\">\n        <ng-template [ngTemplateOutlet]=\"noMenuTpl\"></ng-template>\n        <i *ngIf=\"!!nzOverlay\" nz-icon nzType=\"down\"></i>\n      </span>\n    </ng-container>\n\n    <ng-template #noMenuTpl>\n      <span class=\"ant-breadcrumb-link\">\n        <ng-content></ng-content>\n      </span>\n    </ng-template>\n\n    <span class=\"ant-breadcrumb-separator\" *ngIf=\"nzBreadCrumbComponent.nzSeparator\">\n      <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\n        {{ nzBreadCrumbComponent.nzSeparator }}\n      </ng-container>\n    </span>\n  "
            }]
    }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: core.Input
        }] }); })();
        return NzBreadCrumbItemComponent;
    }());
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    NzBreadCrumbItemComponent.propDecorators = {
        nzOverlay: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBreadCrumbSeparatorComponent = /** @class */ (function () {
        function NzBreadCrumbSeparatorComponent() {
        }
NzBreadCrumbSeparatorComponent.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) { return new (t || NzBreadCrumbSeparatorComponent)(); };
NzBreadCrumbSeparatorComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBreadCrumbSeparatorComponent, selectors: [["nz-breadcrumb-separator"]], exportAs: ["nzBreadcrumbSeparator"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-breadcrumb-separator"]], template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbSeparatorComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-breadcrumb-separator',
                exportAs: 'nzBreadcrumbSeparator',
                template: "\n    <span class=\"ant-breadcrumb-separator\">\n      <ng-content></ng-content>\n    </span>\n  "
            }]
    }], function () { return []; }, null); })();
        return NzBreadCrumbSeparatorComponent;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBreadCrumbModule = /** @class */ (function () {
        function NzBreadCrumbModule() {
        }
NzBreadCrumbModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBreadCrumbModule });
NzBreadCrumbModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[common.CommonModule, outlet.NzOutletModule, overlay.OverlayModule, overlay$1.NzOverlayModule, dropdown.NzDropDownModule, icon.NzIconModule], ɵngcc1.BidiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBreadCrumbModule, { declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent], imports: [ɵngcc2.CommonModule, ɵngcc5.NzOutletModule, ɵngcc6.OverlayModule, ɵngcc7.NzOverlayModule, ɵngcc3.NzDropDownModule, ɵngcc4.NzIconModule], exports: [ɵngcc1.BidiModule, NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBreadCrumbModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, outlet.NzOutletModule, overlay.OverlayModule, overlay$1.NzOverlayModule, dropdown.NzDropDownModule, icon.NzIconModule],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
                exports: [bidi.BidiModule, NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
            }]
    }], function () { return []; }, null); })();
        return NzBreadCrumbModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzBreadCrumbComponent = NzBreadCrumbComponent;
    exports.NzBreadCrumbItemComponent = NzBreadCrumbItemComponent;
    exports.NzBreadCrumbModule = NzBreadCrumbModule;
    exports.NzBreadCrumbSeparatorComponent = NzBreadCrumbSeparatorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-breadcrumb.umd.js.map