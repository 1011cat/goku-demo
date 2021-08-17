(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/cdk/bidi'),require('ng-zorro-antd/core/no-animation'),require('@angular/common'),require('ng-zorro-antd/core/outlet'),require('@angular/cdk/observers'),exports, require('@angular/cdk/bidi'), require('@angular/core'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/core/outlet')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/badge', ['@angular/core','ng-zorro-antd/core/config','@angular/cdk/bidi','ng-zorro-antd/core/no-animation','@angular/common','ng-zorro-antd/core/outlet','@angular/cdk/observers','exports', '@angular/cdk/bidi', '@angular/core', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/core/outlet'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.cdk.bidi,global.ngZorroAntd.core.noAnimation,global.ng.common,global.ngZorroAntd.core.outlet,global.ng.cdk.observers,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].badge = {}), global.ng.cdk.bidi, global.ng.core, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core['no-animation'], global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.cdk.observers, global.ng.common, global['ng-zorro-antd'].core.outlet));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,exports, bidi, core, animation, config, noAnimation, util, rxjs, operators, observers, common, outlet) { 
function NzBadgeComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzText);
} }
function NzBadgeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵelementStart(2, "span", 3);
    ɵngcc0.ɵɵtemplate(3, NzBadgeComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
    ɵngcc0.ɵɵstyleProp("background", !ctx_r0.presetColor && ctx_r0.nzColor);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.nzStyle);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
} }
function NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-badge-sup", 5);
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("nzOffset", ctx_r3.nzOffset)("nzTitle", ctx_r3.nzTitle)("nzStyle", ctx_r3.nzStyle)("nzDot", ctx_r3.nzDot)("nzOverflowCount", ctx_r3.nzOverflowCount)("disableAnimation", !!(ctx_r3.nzStandalone || ctx_r3.nzStatus || ctx_r3.nzColor || (ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)))("nzCount", ctx_r3.nzCount)("noAnimation", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation));
} }
function NzBadgeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_2_nz_badge_sup_1_Template, 1, 8, "nz-badge-sup", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.showSup);
} }
var _c0 = ["*"];
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r8 = ctx.$implicit;
    var i_r5 = ɵngcc0.ɵɵnextContext(2).index;
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("current", p_r8 === ctx_r7.countArray[i_r5]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", p_r8, " ");
} }
function NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_p_1_Template, 2, 3, "p", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.countSingleArray);
} }
function NzBadgeSupComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("transform", "translateY(" + -ctx_r3.countArray[i_r5] * 100 + "%)");
    ɵngcc0.ɵɵproperty("nzNoAnimation", ctx_r3.noAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.nzDot && ctx_r3.countArray[i_r5] !== undefined);
} }
function NzBadgeSupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_container_0_span_1_Template, 2, 4, "span", 2);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.maxNumberArray);
} }
function NzBadgeSupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r2.nzOverflowCount, "+");
} }
function NzRibbonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzText);
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

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var badgePresetColors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime'
    ];

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_CONFIG_MODULE_NAME = 'badge';
    var NzBadgeComponent = /** @class */ (function () {
        function NzBadgeComponent(nzConfigService, renderer, cdr, elementRef, directionality, noAnimation) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.noAnimation = noAnimation;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.showSup = false;
            this.presetColor = null;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.nzShowZero = false;
            this.nzShowDot = true;
            this.nzStandalone = false;
            this.nzDot = false;
            this.nzOverflowCount = 99;
            this.nzColor = undefined;
            this.nzStyle = null;
            this.nzText = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-badge');
        }
        NzBadgeComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.prepareBadgeForRtl();
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
            this.prepareBadgeForRtl();
        };
        NzBadgeComponent.prototype.ngOnChanges = function (changes) {
            var nzColor = changes.nzColor, nzShowDot = changes.nzShowDot, nzDot = changes.nzDot, nzCount = changes.nzCount, nzShowZero = changes.nzShowZero;
            if (nzColor) {
                this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
            if (nzShowDot || nzDot || nzCount || nzShowZero) {
                this.showSup = (this.nzShowDot && this.nzDot) || this.nzCount > 0 || (this.nzCount <= 0 && this.nzShowZero);
            }
        };
        NzBadgeComponent.prototype.prepareBadgeForRtl = function () {
            if (this.isRtlLayout) {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-rtl');
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-rtl');
            }
        };
        Object.defineProperty(NzBadgeComponent.prototype, "isRtlLayout", {
            get: function () {
                return this.dir === 'rtl';
            },
            enumerable: false,
            configurable: true
        });
        NzBadgeComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.NzNoAnimationDirective, 9)); };
NzBadgeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], hostVars: 4, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
    } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzStandalone: "nzStandalone", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzColor: "nzColor", nzStyle: "nzStyle", nzText: "nzText", nzTitle: "nzTitle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation", 4, "ngIf"], [3, "nzOffset", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzBadgeComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
    } }, directives: function () { return [ɵngcc4.NgIf, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc4.NgStyle, NzBadgeSupComponent]; }, encapsulation: 2, data: { animation: [animation.zoomBadgeMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                animations: [animation.zoomBadgeMotion],
                template: "\n    <ng-container *ngIf=\"nzStatus || nzColor\">\n      <span\n        class=\"ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}\"\n        [style.background]=\"!presetColor && nzColor\"\n        [ngStyle]=\"nzStyle\"\n      ></span>\n      <span class=\"ant-badge-status-text\">\n        <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n      </span>\n    </ng-container>\n    <ng-content></ng-content>\n    <ng-container *nzStringTemplateOutlet=\"nzCount\">\n      <nz-badge-sup\n        *ngIf=\"showSup\"\n        [nzOffset]=\"nzOffset\"\n        [nzTitle]=\"nzTitle\"\n        [nzStyle]=\"nzStyle\"\n        [nzDot]=\"nzDot\"\n        [nzOverflowCount]=\"nzOverflowCount\"\n        [disableAnimation]=\"!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)\"\n        [nzCount]=\"nzCount\"\n        [noAnimation]=\"!!noAnimation?.nzNoAnimation\"\n      ></nz-badge-sup>\n    </ng-container>\n  ",
                host: {
                    '[class.ant-badge-status]': 'nzStatus',
                    '[class.ant-badge-not-a-wrapper]': '!!(nzStandalone || nzStatus || nzColor)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc3.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzShowZero: [{
            type: core.Input
        }], nzShowDot: [{
            type: core.Input
        }], nzStandalone: [{
            type: core.Input
        }], nzDot: [{
            type: core.Input
        }], nzOverflowCount: [{
            type: core.Input
        }], nzColor: [{
            type: core.Input
        }], nzStyle: [{
            type: core.Input
        }], nzText: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzStatus: [{
            type: core.Input
        }], nzCount: [{
            type: core.Input
        }], nzOffset: [{
            type: core.Input
        }] }); })();
        return NzBadgeComponent;
    }());
    NzBadgeComponent.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] },
        { type: noAnimation.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
    ]; };
    NzBadgeComponent.propDecorators = {
        nzShowZero: [{ type: core.Input }],
        nzShowDot: [{ type: core.Input }],
        nzStandalone: [{ type: core.Input }],
        nzDot: [{ type: core.Input }],
        nzOverflowCount: [{ type: core.Input }],
        nzColor: [{ type: core.Input }],
        nzStyle: [{ type: core.Input }],
        nzText: [{ type: core.Input }],
        nzTitle: [{ type: core.Input }],
        nzStatus: [{ type: core.Input }],
        nzCount: [{ type: core.Input }],
        nzOffset: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzStandalone", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBadgeSupComponent = /** @class */ (function () {
        function NzBadgeSupComponent(elementRef) {
            this.elementRef = elementRef;
            this.nzStyle = null;
            this.nzDot = false;
            this.nzOverflowCount = 99;
            this.disableAnimation = false;
            this.noAnimation = false;
            this.maxNumberArray = [];
            this.countArray = [];
            this.count = 0;
            this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-scroll-number');
        }
        NzBadgeSupComponent.prototype.generateMaxNumberArray = function () {
            this.maxNumberArray = this.nzOverflowCount.toString().split('');
        };
        NzBadgeSupComponent.prototype.ngOnInit = function () {
            this.generateMaxNumberArray();
        };
        NzBadgeSupComponent.prototype.ngOnChanges = function (changes) {
            var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount;
            if (nzCount && typeof nzCount.currentValue === 'number') {
                this.count = Math.max(0, nzCount.currentValue);
                this.countArray = this.count
                    .toString()
                    .split('')
                    .map(function (item) { return +item; });
            }
            if (nzOverflowCount) {
                this.generateMaxNumberArray();
            }
        };
NzBadgeSupComponent.ɵfac = function NzBadgeSupComponent_Factory(t) { return new (t || NzBadgeSupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzBadgeSupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBadgeSupComponent, selectors: [["nz-badge-sup"]], hostVars: 15, hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
        ɵngcc0.ɵɵsyntheticHostProperty("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", undefined);
        ɵngcc0.ɵɵstyleMap(ctx.nzStyle);
        ɵngcc0.ɵɵstyleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
        ɵngcc0.ɵɵclassProp("ant-badge-count", !ctx.nzDot)("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
    } }, inputs: { nzStyle: "nzStyle", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", disableAnimation: "disableAnimation", noAnimation: "noAnimation", nzOffset: "nzOffset", nzTitle: "nzTitle", nzCount: "nzCount" }, exportAs: ["nzBadgeSup"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["overflowTemplate", ""], ["class", "ant-scroll-number-only", 3, "nzNoAnimation", "transform", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only", 3, "nzNoAnimation"], [4, "ngIf"], ["class", "ant-scroll-number-only-unit", 3, "current", 4, "ngFor", "ngForOf"], [1, "ant-scroll-number-only-unit"]], template: function NzBadgeSupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzBadgeSupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzBadgeSupComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.count <= ctx.nzOverflowCount)("ngIfElse", _r1);
    } }, directives: [ɵngcc4.NgIf, ɵngcc4.NgForOf, ɵngcc3.NzNoAnimationDirective], encapsulation: 2, data: { animation: [animation.zoomBadgeMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeSupComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-badge-sup',
                exportAs: 'nzBadgeSup',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                animations: [animation.zoomBadgeMotion],
                template: "\n    <ng-container *ngIf=\"count <= nzOverflowCount; else overflowTemplate\">\n      <span\n        [nzNoAnimation]=\"noAnimation\"\n        *ngFor=\"let n of maxNumberArray; let i = index\"\n        class=\"ant-scroll-number-only\"\n        [style.transform]=\"'translateY(' + -countArray[i] * 100 + '%)'\"\n      >\n        <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\n          <p *ngFor=\"let p of countSingleArray\" class=\"ant-scroll-number-only-unit\" [class.current]=\"p === countArray[i]\">\n            {{ p }}\n          </p>\n        </ng-container>\n      </span>\n    </ng-container>\n    <ng-template #overflowTemplate>{{ nzOverflowCount }}+</ng-template>\n  ",
                host: {
                    '[@.disabled]': "disableAnimation",
                    '[@zoomBadgeMotion]': '',
                    '[attr.title]': "nzTitle === null ? '' : nzTitle || nzCount",
                    '[style]': "nzStyle",
                    '[style.right.px]': "nzOffset && nzOffset[0] ? -nzOffset[0] : null",
                    '[style.margin-top.px]': "nzOffset && nzOffset[1] ? nzOffset[1] : null",
                    '[class.ant-badge-count]': "!nzDot",
                    '[class.ant-badge-dot]': "nzDot",
                    '[class.ant-badge-multiple-words]': "countArray.length >= 2"
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzStyle: [{
            type: core.Input
        }], nzDot: [{
            type: core.Input
        }], nzOverflowCount: [{
            type: core.Input
        }], disableAnimation: [{
            type: core.Input
        }], noAnimation: [{
            type: core.Input
        }], nzOffset: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzCount: [{
            type: core.Input
        }] }); })();
        return NzBadgeSupComponent;
    }());
    NzBadgeSupComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NzBadgeSupComponent.propDecorators = {
        nzOffset: [{ type: core.Input }],
        nzTitle: [{ type: core.Input }],
        nzStyle: [{ type: core.Input }],
        nzDot: [{ type: core.Input }],
        nzOverflowCount: [{ type: core.Input }],
        disableAnimation: [{ type: core.Input }],
        nzCount: [{ type: core.Input }],
        noAnimation: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzRibbonComponent = /** @class */ (function () {
        function NzRibbonComponent(elementRef) {
            this.elementRef = elementRef;
            this.nzPlacement = 'end';
            this.nzText = null;
            this.presetColor = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-ribbon-wrapper');
        }
        NzRibbonComponent.prototype.ngOnChanges = function (changes) {
            var nzColor = changes.nzColor;
            if (nzColor) {
                this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
            }
        };
NzRibbonComponent.ɵfac = function NzRibbonComponent_Factory(t) { return new (t || NzRibbonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRibbonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzRibbonComponent, selectors: [["nz-ribbon"]], inputs: { nzPlacement: "nzPlacement", nzText: "nzText", nzColor: "nzColor" }, exportAs: ["nzRibbon"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 11, consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"]], template: function NzRibbonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, NzRibbonComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelement(3, "div", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
        ɵngcc0.ɵɵstyleProp("background-color", !ctx.presetColor && ctx.nzColor);
        ɵngcc0.ɵɵclassProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("color", !ctx.presetColor && ctx.nzColor);
    } }, directives: [ɵngcc5.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRibbonComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-ribbon',
                exportAs: 'nzRibbon',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <ng-content></ng-content>\n    <div\n      class=\"ant-ribbon\"\n      [class]=\"presetColor && 'ant-ribbon-color-' + presetColor\"\n      [class.ant-ribbon-placement-end]=\"nzPlacement === 'end'\"\n      [class.ant-ribbon-placement-start]=\"nzPlacement === 'start'\"\n      [style.background-color]=\"!presetColor && nzColor\"\n    >\n      <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n      <div class=\"ant-ribbon-corner\" [style.color]=\"!presetColor && nzColor\"></div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzPlacement: [{
            type: core.Input
        }], nzText: [{
            type: core.Input
        }], nzColor: [{
            type: core.Input
        }] }); })();
        return NzRibbonComponent;
    }());
    NzRibbonComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NzRibbonComponent.propDecorators = {
        nzColor: [{ type: core.Input }],
        nzPlacement: [{ type: core.Input }],
        nzText: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzBadgeModule = /** @class */ (function () {
        function NzBadgeModule() {
        }
NzBadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBadgeModule });
NzBadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, observers.ObserversModule, outlet.NzOutletModule, noAnimation.NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBadgeModule, { declarations: [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent], imports: [ɵngcc2.BidiModule, ɵngcc4.CommonModule, ɵngcc6.ObserversModule, ɵngcc5.NzOutletModule, ɵngcc3.NzNoAnimationModule], exports: [NzBadgeComponent, NzRibbonComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzBadgeComponent, NzBadgeSupComponent, NzRibbonComponent],
                exports: [NzBadgeComponent, NzRibbonComponent],
                imports: [bidi.BidiModule, common.CommonModule, observers.ObserversModule, outlet.NzOutletModule, noAnimation.NzNoAnimationModule]
            }]
    }], function () { return []; }, null); })();
        return NzBadgeModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzBadgeComponent = NzBadgeComponent;
    exports.NzBadgeModule = NzBadgeModule;
    exports.ɵa = NzBadgeSupComponent;
    exports.ɵb = NzRibbonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-badge.umd.js.map