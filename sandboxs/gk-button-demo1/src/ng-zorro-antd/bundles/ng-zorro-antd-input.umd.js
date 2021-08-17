(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/forms'),require('@angular/cdk/bidi'),require('@angular/cdk/a11y'),require('@angular/common'),require('@angular/cdk/platform'),require('ng-zorro-antd/core/services'),require('ng-zorro-antd/core/outlet'),require('ng-zorro-antd/icon'),exports, require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/core'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/cdk/platform'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/services')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/input', ['@angular/core','@angular/forms','@angular/cdk/bidi','@angular/cdk/a11y','@angular/common','@angular/cdk/platform','ng-zorro-antd/core/services','ng-zorro-antd/core/outlet','ng-zorro-antd/icon','exports', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/core', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/cdk/platform', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/services'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.forms,global.ng.cdk.bidi,global.ng.cdk.a11y,global.ng.common,global.ng.cdk.platform,global.ngZorroAntd.core.services,global.ngZorroAntd.core.outlet,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].input = {}), global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.core, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.cdk.platform, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.services));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,exports, a11y, bidi, core, util, rxjs, operators, forms, platform, common, outlet, icon, services) { 
function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r7.nzAddOnBeforeIcon)("template", ctx_r7.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 8);
    ɵngcc0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r9.nzAddOnAfterIcon)("template", ctx_r9.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 4);
    ɵngcc0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    ɵngcc0.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    ɵngcc0.ɵɵtemplate(3, NzInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r3 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function NzInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    var ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r13.nzPrefixIcon)("template", ctx_r13.nzPrefix);
} }
function NzInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    var ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("icon", ctx_r15.nzSuffixIcon)("template", ctx_r15.nzSuffix);
} }
function NzInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵngcc0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    var _r5 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.nzPrefix || ctx_r4.nzPrefixIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.nzSuffix || ctx_r4.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var _c1 = ["nz-input-group-slot", ""];
function NzInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.template);
} }
var _c2 = [[["textarea", "nz-input", ""]]];
var _c3 = ["textarea[nz-input]"];
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

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzInputDirective = /** @class */ (function () {
        function NzInputDirective(ngControl, renderer, elementRef, directionality) {
            this.ngControl = ngControl;
            this.directionality = directionality;
            this.nzBorderless = false;
            this.nzSize = 'default';
            this._disabled = false;
            this.disabled$ = new rxjs.Subject();
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-input');
        }
        Object.defineProperty(NzInputDirective.prototype, "disabled", {
            get: function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value != null && "" + value !== 'false';
            },
            enumerable: false,
            configurable: true
        });
        NzInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            if (this.ngControl) {
                (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(operators.filter(function () { return _this.ngControl.disabled !== null; }), operators.takeUntil(this.destroy$)).subscribe(function () {
                    _this.disabled$.next(_this.ngControl.disabled);
                });
            }
            this.dir = this.directionality.value;
            (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        NzInputDirective.prototype.ngOnChanges = function (changes) {
            var disabled = changes.disabled;
            if (disabled) {
                this.disabled$.next(this.disabled);
            }
        };
        NzInputDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgControl, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzInputDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzInputDirective, selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]], hostVars: 11, hostBindings: function NzInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("disabled", ctx.disabled || null);
        ɵngcc0.ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.nzBorderless)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small")("ant-input-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBorderless: "nzBorderless", nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputDirective, [{
        type: core.Directive,
        args: [{
                selector: 'input[nz-input],textarea[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-borderless]': 'nzBorderless',
                    '[class.ant-input-lg]': "nzSize === 'large'",
                    '[class.ant-input-sm]': "nzSize === 'small'",
                    '[attr.disabled]': 'disabled || null',
                    '[class.ant-input-rtl]': "dir=== 'rtl'"
                }
            }]
    }], function () { return [{ type: ɵngcc1.NgControl, decorators: [{
                type: core.Optional
            }, {
                type: core.Self
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzBorderless: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }] }); })();
        return NzInputDirective;
    }());
    NzInputDirective.ctorParameters = function () { return [
        { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzInputDirective.propDecorators = {
        nzBorderless: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputDirective.prototype, "nzBorderless", void 0);

    var NzInputGroupWhitSuffixOrPrefixDirective = /** @class */ (function () {
        function NzInputGroupWhitSuffixOrPrefixDirective(elementRef) {
            this.elementRef = elementRef;
        }
NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) { return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzInputGroupWhitSuffixOrPrefixDirective, selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputGroupWhitSuffixOrPrefixDirective, [{
        type: core.Directive,
        args: [{
                selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return NzInputGroupWhitSuffixOrPrefixDirective;
    }());
    NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    var NzInputGroupComponent = /** @class */ (function () {
        function NzInputGroupComponent(focusMonitor, elementRef, cdr, directionality) {
            this.focusMonitor = focusMonitor;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.directionality = directionality;
            this.nzAddOnBeforeIcon = null;
            this.nzAddOnAfterIcon = null;
            this.nzPrefixIcon = null;
            this.nzSuffixIcon = null;
            this.nzSize = 'default';
            this.nzSearch = false;
            this.nzCompact = false;
            this.isLarge = false;
            this.isSmall = false;
            this.isAffix = false;
            this.isAddOn = false;
            this.focused = false;
            this.disabled = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
        }
        NzInputGroupComponent.prototype.updateChildrenInputSize = function () {
            var _this = this;
            if (this.listOfNzInputDirective) {
                this.listOfNzInputDirective.forEach(function (item) { return (item.nzSize = _this.nzSize); });
            }
        };
        NzInputGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.focusMonitor
                .monitor(this.elementRef, true)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (focusOrigin) {
                _this.focused = !!focusOrigin;
                _this.cdr.markForCheck();
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        NzInputGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.updateChildrenInputSize();
            var listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(operators.startWith(this.listOfNzInputDirective));
            listOfInputChange$
                .pipe(operators.switchMap(function (list) {
                return rxjs.merge.apply(void 0, __spread([listOfInputChange$], list.map(function (input) { return input.disabled$; })));
            }), operators.mergeMap(function () { return listOfInputChange$; }), operators.map(function (list) { return list.some(function (input) { return input.disabled; }); }), operators.takeUntil(this.destroy$))
                .subscribe(function (disabled) {
                _this.disabled = disabled;
                _this.cdr.markForCheck();
            });
        };
        NzInputGroupComponent.prototype.ngOnChanges = function (changes) {
            var nzSize = changes.nzSize, nzSuffix = changes.nzSuffix, nzPrefix = changes.nzPrefix, nzPrefixIcon = changes.nzPrefixIcon, nzSuffixIcon = changes.nzSuffixIcon, nzAddOnAfter = changes.nzAddOnAfter, nzAddOnBefore = changes.nzAddOnBefore, nzAddOnAfterIcon = changes.nzAddOnAfterIcon, nzAddOnBeforeIcon = changes.nzAddOnBeforeIcon;
            if (nzSize) {
                this.updateChildrenInputSize();
                this.isLarge = this.nzSize === 'large';
                this.isSmall = this.nzSize === 'small';
            }
            if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
                this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
            }
            if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
                this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
            }
        };
        NzInputGroupComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
            this.destroy$.next();
            this.destroy$.complete();
        };
NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) { return new (t || NzInputGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzInputGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzInputDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    } }, hostVars: 40, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzSize: "nzSize", nzSearch: "nzSearch", nzCompact: "nzCompact", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix" }, exportAs: ["nzInputGroup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        ɵngcc0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, NzInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
    } }, directives: function () { return [ɵngcc4.NgIf, NzInputGroupSlotComponent, ɵngcc4.NgTemplateOutlet]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputGroupComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn; else noAddOnTemplate\">\n      <span\n        *ngIf=\"nzAddOnBefore || nzAddOnBeforeIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnBeforeIcon\"\n        [template]=\"nzAddOnBefore\"\n      ></span>\n      <span\n        *ngIf=\"isAffix; else contentTemplate\"\n        class=\"ant-input-affix-wrapper\"\n        [class.ant-input-affix-wrapper-sm]=\"isSmall\"\n        [class.ant-input-affix-wrapper-lg]=\"isLarge\"\n      >\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </span>\n      <span\n        *ngIf=\"nzAddOnAfter || nzAddOnAfterIcon\"\n        nz-input-group-slot\n        type=\"addon\"\n        [icon]=\"nzAddOnAfterIcon\"\n        [template]=\"nzAddOnAfter\"\n      ></span>\n    </span>\n    <ng-template #noAddOnTemplate>\n      <ng-template [ngIf]=\"isAffix\" [ngIfElse]=\"contentTemplate\">\n        <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #affixTemplate>\n      <span *ngIf=\"nzPrefix || nzPrefixIcon\" nz-input-group-slot type=\"prefix\" [icon]=\"nzPrefixIcon\" [template]=\"nzPrefix\"></span>\n      <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n      <span *ngIf=\"nzSuffix || nzSuffixIcon\" nz-input-group-slot type=\"suffix\" [icon]=\"nzSuffixIcon\" [template]=\"nzSuffix\"></span>\n    </ng-template>\n    <ng-template #contentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n  ",
                host: {
                    '[class.ant-input-group-compact]': "nzCompact",
                    '[class.ant-input-search-enter-button]': "nzSearch",
                    '[class.ant-input-search]': "nzSearch",
                    '[class.ant-input-search-rtl]': "dir === 'rtl'",
                    '[class.ant-input-search-sm]': "nzSearch && isSmall",
                    '[class.ant-input-search-large]': "nzSearch && isLarge",
                    '[class.ant-input-group-wrapper]': "isAddOn",
                    '[class.ant-input-group-wrapper-rtl]': "dir === 'rtl'",
                    '[class.ant-input-group-wrapper-lg]': "isAddOn && isLarge",
                    '[class.ant-input-group-wrapper-sm]': "isAddOn && isSmall",
                    '[class.ant-input-affix-wrapper]': "isAffix && !isAddOn",
                    '[class.ant-input-affix-wrapper-rtl]': "dir === 'rtl'",
                    '[class.ant-input-affix-wrapper-focused]': "isAffix && focused",
                    '[class.ant-input-affix-wrapper-disabled]': "isAffix && disabled",
                    '[class.ant-input-affix-wrapper-lg]': "isAffix && !isAddOn && isLarge",
                    '[class.ant-input-affix-wrapper-sm]': "isAffix && !isAddOn && isSmall",
                    '[class.ant-input-group]': "!isAffix && !isAddOn",
                    '[class.ant-input-group-rtl]': "dir === 'rtl'",
                    '[class.ant-input-group-lg]': "!isAffix && !isAddOn && isLarge",
                    '[class.ant-input-group-sm]': "!isAffix && !isAddOn && isSmall"
                }
            }]
    }], function () { return [{ type: ɵngcc3.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzAddOnBeforeIcon: [{
            type: core.Input
        }], nzAddOnAfterIcon: [{
            type: core.Input
        }], nzPrefixIcon: [{
            type: core.Input
        }], nzSuffixIcon: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzSearch: [{
            type: core.Input
        }], nzCompact: [{
            type: core.Input
        }], listOfNzInputDirective: [{
            type: core.ContentChildren,
            args: [NzInputDirective]
        }], nzAddOnBefore: [{
            type: core.Input
        }], nzAddOnAfter: [{
            type: core.Input
        }], nzPrefix: [{
            type: core.Input
        }], nzSuffix: [{
            type: core.Input
        }] }); })();
        return NzInputGroupComponent;
    }());
    NzInputGroupComponent.ctorParameters = function () { return [
        { type: a11y.FocusMonitor },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzInputGroupComponent.propDecorators = {
        listOfNzInputDirective: [{ type: core.ContentChildren, args: [NzInputDirective,] }],
        nzAddOnBeforeIcon: [{ type: core.Input }],
        nzAddOnAfterIcon: [{ type: core.Input }],
        nzPrefixIcon: [{ type: core.Input }],
        nzSuffixIcon: [{ type: core.Input }],
        nzAddOnBefore: [{ type: core.Input }],
        nzAddOnAfter: [{ type: core.Input }],
        nzPrefix: [{ type: core.Input }],
        nzSuffix: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzSearch: [{ type: core.Input }],
        nzCompact: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzSearch", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzCompact", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAutosizeDirective = /** @class */ (function () {
        function NzAutosizeDirective(elementRef, ngZone, platform, resizeService) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.platform = platform;
            this.resizeService = resizeService;
            this.autosize = false;
            this.el = this.elementRef.nativeElement;
            this.maxHeight = null;
            this.minHeight = null;
            this.destroy$ = new rxjs.Subject();
            this.inputGap = 10;
        }
        Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
            set: function (value) {
                var isAutoSizeType = function (data) {
                    return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
                };
                if (typeof value === 'string' || value === true) {
                    this.autosize = true;
                }
                else if (isAutoSizeType(value)) {
                    this.autosize = true;
                    this.minRows = value.minRows;
                    this.maxRows = value.maxRows;
                    this.maxHeight = this.setMaxHeight();
                    this.minHeight = this.setMinHeight();
                }
            },
            enumerable: false,
            configurable: true
        });
        NzAutosizeDirective.prototype.resizeToFitContent = function (force) {
            var _this = this;
            if (force === void 0) { force = false; }
            this.cacheTextareaLineHeight();
            // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.
            if (!this.cachedLineHeight) {
                return;
            }
            var textarea = this.el;
            var value = textarea.value;
            // Only resize if the value or minRows have changed since these calculations can be expensive.
            if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
                return;
            }
            var placeholderText = textarea.placeholder;
            // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.
            textarea.classList.add('nz-textarea-autosize-measuring');
            textarea.placeholder = '';
            var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
            if (this.maxHeight !== null && height > this.maxHeight) {
                height = this.maxHeight;
            }
            if (this.minHeight !== null && height < this.minHeight) {
                height = this.minHeight;
            }
            // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
            textarea.style.height = height + "px";
            textarea.classList.remove('nz-textarea-autosize-measuring');
            textarea.placeholder = placeholderText;
            // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
            // We need to re-set the selection in order for it to scroll to the proper position.
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }); });
            }
            this.previousValue = value;
            this.previousMinRows = this.minRows;
        };
        NzAutosizeDirective.prototype.cacheTextareaLineHeight = function () {
            if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
                return;
            }
            // Use a clone element because we have to override some styles.
            var textareaClone = this.el.cloneNode(false);
            textareaClone.rows = 1;
            // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.
            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = '';
            // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
            textareaClone.style.overflow = 'hidden';
            this.el.parentNode.appendChild(textareaClone);
            this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
            this.el.parentNode.removeChild(textareaClone);
            // Min and max heights have to be re-calculated if the cached line height changes
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        };
        NzAutosizeDirective.prototype.setMinHeight = function () {
            var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
            if (minHeight !== null) {
                this.el.style.minHeight = minHeight + "px";
            }
            return minHeight;
        };
        NzAutosizeDirective.prototype.setMaxHeight = function () {
            var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
            if (maxHeight !== null) {
                this.el.style.maxHeight = maxHeight + "px";
            }
            return maxHeight;
        };
        NzAutosizeDirective.prototype.noopInputHandler = function () {
            // no-op handler that ensures we're running change detection on input events.
        };
        NzAutosizeDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.autosize && this.platform.isBrowser) {
                this.resizeToFitContent();
                this.resizeService
                    .subscribe()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            }
        };
        NzAutosizeDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzAutosizeDirective.prototype.ngDoCheck = function () {
            if (this.autosize && this.platform.isBrowser) {
                this.resizeToFitContent();
            }
        };
NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) { return new (t || NzAutosizeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc6.NzResizeService)); };
NzAutosizeDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzAutosizeDirective, selectors: [["textarea", "nzAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function NzAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
    } }, inputs: { nzAutosize: "nzAutosize" }, exportAs: ["nzAutosize"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAutosizeDirective, [{
        type: core.Directive,
        args: [{
                selector: 'textarea[nzAutosize]',
                exportAs: 'nzAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc5.Platform }, { type: ɵngcc6.NzResizeService }]; }, { nzAutosize: [{
            type: core.Input
        }] }); })();
        return NzAutosizeDirective;
    }());
    NzAutosizeDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: platform.Platform },
        { type: services.NzResizeService }
    ]; };
    NzAutosizeDirective.propDecorators = {
        nzAutosize: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzInputGroupSlotComponent = /** @class */ (function () {
        function NzInputGroupSlotComponent() {
            this.icon = null;
            this.type = null;
            this.template = null;
        }
NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) { return new (t || NzInputGroupSlotComponent)(); };
NzInputGroupSlotComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzInputGroupSlotComponent, selectors: [["", "nz-input-group-slot", ""]], hostVars: 6, hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c1, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    } }, directives: [ɵngcc4.NgIf, ɵngcc7.NzStringTemplateOutletDirective, ɵngcc8.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputGroupSlotComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <i nz-icon [nzType]=\"icon\" *ngIf=\"icon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"template\">{{ template }}</ng-container>\n  ",
                host: {
                    '[class.ant-input-group-addon]': "type === 'addon'",
                    '[class.ant-input-prefix]': "type === 'prefix'",
                    '[class.ant-input-suffix]': "type === 'suffix'"
                }
            }]
    }], function () { return []; }, { icon: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }], template: [{
            type: core.Input
        }] }); })();
        return NzInputGroupSlotComponent;
    }());
    NzInputGroupSlotComponent.propDecorators = {
        icon: [{ type: core.Input }],
        type: [{ type: core.Input }],
        template: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTextareaCountComponent = /** @class */ (function () {
        function NzTextareaCountComponent(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.nzMaxCharacterCount = 0;
            this.nzComputeCharacterCount = function (v) { return v.length; };
            this.nzFormatter = function (c, m) { return "" + c + (m > 0 ? "/" + m : ""); };
            this.configChange$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
        }
        NzTextareaCountComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.nzInputDirective && core.isDevMode()) {
                throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
            }
            if (this.nzInputDirective.ngControl) {
                var valueChanges = this.nzInputDirective.ngControl.valueChanges || rxjs.EMPTY;
                rxjs.merge(valueChanges, this.configChange$)
                    .pipe(operators.takeUntil(this.destroy$), operators.map(function () { return _this.nzInputDirective.ngControl.value; }), operators.startWith(this.nzInputDirective.ngControl.value))
                    .subscribe(function (value) {
                    _this.setDataCount(value);
                });
            }
        };
        NzTextareaCountComponent.prototype.setDataCount = function (value) {
            var inputValue = util.isNotNil(value) ? String(value) : '';
            var currentCount = this.nzComputeCharacterCount(inputValue);
            var dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
            this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
        };
        NzTextareaCountComponent.prototype.ngOnDestroy = function () {
            this.configChange$.complete();
            this.destroy$.next();
            this.destroy$.complete();
        };
NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) { return new (t || NzTextareaCountComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTextareaCountComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTextareaCountComponent, selectors: [["nz-textarea-count"]], contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵstaticContentQuery(dirIndex, NzInputDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { nzMaxCharacterCount: "nzMaxCharacterCount", nzComputeCharacterCount: "nzComputeCharacterCount", nzFormatter: "nzFormatter" }, ngContentSelectors: _c3, decls: 1, vars: 0, template: function NzTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTextareaCountComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-textarea-count',
                template: "\n    <ng-content select=\"textarea[nz-input]\"></ng-content>\n  ",
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzMaxCharacterCount: [{
            type: core.Input
        }], nzComputeCharacterCount: [{
            type: core.Input
        }], nzFormatter: [{
            type: core.Input
        }], nzInputDirective: [{
            type: core.ContentChild,
            args: [NzInputDirective, { static: true }]
        }] }); })();
        return NzTextareaCountComponent;
    }());
    NzTextareaCountComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    NzTextareaCountComponent.propDecorators = {
        nzInputDirective: [{ type: core.ContentChild, args: [NzInputDirective, { static: true },] }],
        nzMaxCharacterCount: [{ type: core.Input }],
        nzComputeCharacterCount: [{ type: core.Input }],
        nzFormatter: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzInputModule = /** @class */ (function () {
        function NzInputModule() {
        }
NzInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzInputModule });
NzInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, icon.NzIconModule, platform.PlatformModule, outlet.NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzInputModule, { declarations: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective], imports: [ɵngcc2.BidiModule, ɵngcc4.CommonModule, ɵngcc8.NzIconModule, ɵngcc5.PlatformModule, ɵngcc7.NzOutletModule], exports: [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupSlotComponent,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                exports: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                imports: [bidi.BidiModule, common.CommonModule, icon.NzIconModule, platform.PlatformModule, outlet.NzOutletModule]
            }]
    }], function () { return []; }, null); })();
        return NzInputModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzAutosizeDirective = NzAutosizeDirective;
    exports.NzInputDirective = NzInputDirective;
    exports.NzInputGroupComponent = NzInputGroupComponent;
    exports.NzInputGroupSlotComponent = NzInputGroupSlotComponent;
    exports.NzInputGroupWhitSuffixOrPrefixDirective = NzInputGroupWhitSuffixOrPrefixDirective;
    exports.NzInputModule = NzInputModule;
    exports.NzTextareaCountComponent = NzTextareaCountComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-input.umd.js.map