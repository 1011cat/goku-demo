(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/cdk/bidi'),require('@angular/common'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/outlet'),exports, require('@angular/cdk/bidi'), require('@angular/core'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/alert', ['@angular/core','ng-zorro-antd/core/config','@angular/cdk/bidi','@angular/common','ng-zorro-antd/icon','ng-zorro-antd/core/outlet','exports', '@angular/cdk/bidi', '@angular/core', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.cdk.bidi,global.ng.common,global.ngZorroAntd.icon,global.ngZorroAntd.core.outlet,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].alert = {}), global.ng.cdk.bidi, global.ng.core, global['ng-zorro-antd'].core.animation, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, bidi, core, animation, config, util, rxjs, operators, common, outlet, icon) { 
function NzAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r1.nzIconType || ctx_r1.inferredIconType)("nzTheme", ctx_r1.iconTheme);
} }
function NzAlertComponent_div_0_div_2_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzMessage);
} }
function NzAlertComponent_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzMessage);
} }
function NzAlertComponent_div_0_div_2_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.nzDescription);
} }
function NzAlertComponent_div_0_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzDescription);
} }
function NzAlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_div_2_span_1_Template, 2, 1, "span", 7);
    ɵngcc0.ɵɵtemplate(2, NzAlertComponent_div_0_div_2_span_2_Template, 2, 1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzMessage);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzDescription);
} }
function NzAlertComponent_div_0_button_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 15);
} }
function NzAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 16);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r11.nzCloseText);
} }
function NzAlertComponent_div_0_button_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.nzCloseText);
} }
function NzAlertComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 12);
    ɵngcc0.ɵɵlistener("click", function NzAlertComponent_div_0_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.closeAlert(); });
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_button_3_ng_template_1_Template, 1, 0, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(3, NzAlertComponent_div_0_button_3_ng_container_3_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r8 = ɵngcc0.ɵɵreference(2);
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.nzCloseText)("ngIfElse", _r8);
} }
function NzAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onFadeAnimationDone(); });
    ɵngcc0.ɵɵtemplate(1, NzAlertComponent_div_0_ng_container_1_Template, 2, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzAlertComponent_div_0_div_2_Template, 3, 2, "div", 3);
    ɵngcc0.ɵɵtemplate(3, NzAlertComponent_div_0_button_3_Template, 4, 2, "button", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-alert-rtl", ctx_r0.dir === "rtl")("ant-alert-success", ctx_r0.nzType === "success")("ant-alert-info", ctx_r0.nzType === "info")("ant-alert-warning", ctx_r0.nzType === "warning")("ant-alert-error", ctx_r0.nzType === "error")("ant-alert-no-icon", !ctx_r0.nzShowIcon)("ant-alert-banner", ctx_r0.nzBanner)("ant-alert-closable", ctx_r0.nzCloseable)("ant-alert-with-description", !!ctx_r0.nzDescription);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r0.nzNoAnimation)("@slideAlertMotion", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzShowIcon);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzMessage || ctx_r0.nzDescription);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzCloseable || ctx_r0.nzCloseText);
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
    var NZ_CONFIG_MODULE_NAME = 'alert';
    var NzAlertComponent = /** @class */ (function () {
        function NzAlertComponent(nzConfigService, cdr, directionality) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzCloseText = null;
            this.nzIconType = null;
            this.nzMessage = null;
            this.nzDescription = null;
            this.nzType = 'info';
            this.nzCloseable = false;
            this.nzShowIcon = false;
            this.nzBanner = false;
            this.nzNoAnimation = false;
            this.nzOnClose = new core.EventEmitter();
            this.closed = false;
            this.iconTheme = 'fill';
            this.inferredIconType = 'info-circle';
            this.dir = 'ltr';
            this.isTypeSet = false;
            this.isShowIconSet = false;
            this.destroy$ = new rxjs.Subject();
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
        }
        NzAlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        NzAlertComponent.prototype.closeAlert = function () {
            this.closed = true;
        };
        NzAlertComponent.prototype.onFadeAnimationDone = function () {
            if (this.closed) {
                this.nzOnClose.emit(true);
            }
        };
        NzAlertComponent.prototype.ngOnChanges = function (changes) {
            var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner;
            if (nzShowIcon) {
                this.isShowIconSet = true;
            }
            if (nzType) {
                this.isTypeSet = true;
                switch (this.nzType) {
                    case 'error':
                        this.inferredIconType = 'close-circle';
                        break;
                    case 'success':
                        this.inferredIconType = 'check-circle';
                        break;
                    case 'info':
                        this.inferredIconType = 'info-circle';
                        break;
                    case 'warning':
                        this.inferredIconType = 'exclamation-circle';
                        break;
                }
            }
            if (nzDescription) {
                this.iconTheme = this.nzDescription ? 'outline' : 'fill';
            }
            if (nzBanner) {
                if (!this.isTypeSet) {
                    this.nzType = 'warning';
                }
                if (!this.isShowIconSet) {
                    this.nzShowIcon = true;
                }
            }
        };
        NzAlertComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) { return new (t || NzAlertComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAlertComponent, selectors: [["nz-alert"]], inputs: { nzCloseText: "nzCloseText", nzIconType: "nzIconType", nzMessage: "nzMessage", nzDescription: "nzDescription", nzType: "nzType", nzCloseable: "nzCloseable", nzShowIcon: "nzShowIcon", nzBanner: "nzBanner", nzNoAnimation: "nzNoAnimation" }, outputs: { nzOnClose: "nzOnClose" }, exportAs: ["nzAlert"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-content", 4, "ngIf"], ["type", "button", "tabindex", "0", "class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-content"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"], [1, "ant-alert-close-text"]], template: function NzAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzAlertComponent_div_0_Template, 4, 23, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc5.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [animation.slideAlertMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAlertComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-alert',
                exportAs: 'nzAlert',
                animations: [animation.slideAlertMotion],
                template: "\n    <div\n      *ngIf=\"!closed\"\n      class=\"ant-alert\"\n      [class.ant-alert-rtl]=\"dir === 'rtl'\"\n      [class.ant-alert-success]=\"nzType === 'success'\"\n      [class.ant-alert-info]=\"nzType === 'info'\"\n      [class.ant-alert-warning]=\"nzType === 'warning'\"\n      [class.ant-alert-error]=\"nzType === 'error'\"\n      [class.ant-alert-no-icon]=\"!nzShowIcon\"\n      [class.ant-alert-banner]=\"nzBanner\"\n      [class.ant-alert-closable]=\"nzCloseable\"\n      [class.ant-alert-with-description]=\"!!nzDescription\"\n      [@.disabled]=\"nzNoAnimation\"\n      [@slideAlertMotion]\n      (@slideAlertMotion.done)=\"onFadeAnimationDone()\"\n    >\n      <ng-container *ngIf=\"nzShowIcon\">\n        <i nz-icon class=\"ant-alert-icon\" [nzType]=\"nzIconType || inferredIconType\" [nzTheme]=\"iconTheme\"></i>\n      </ng-container>\n      <div class=\"ant-alert-content\" *ngIf=\"nzMessage || nzDescription\">\n        <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n          <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n        </span>\n        <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n          <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n        </span>\n      </div>\n      <button type=\"button\" tabindex=\"0\" *ngIf=\"nzCloseable || nzCloseText\" class=\"ant-alert-close-icon\" (click)=\"closeAlert()\">\n        <ng-template #closeDefaultTemplate>\n          <i nz-icon nzType=\"close\"></i>\n        </ng-template>\n        <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n          <ng-container *nzStringTemplateOutlet=\"nzCloseText\">\n            <span class=\"ant-alert-close-text\">{{ nzCloseText }}</span>\n          </ng-container>\n        </ng-container>\n      </button>\n    </div>\n  ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzCloseText: [{
            type: core.Input
        }], nzIconType: [{
            type: core.Input
        }], nzMessage: [{
            type: core.Input
        }], nzDescription: [{
            type: core.Input
        }], nzType: [{
            type: core.Input
        }], nzCloseable: [{
            type: core.Input
        }], nzShowIcon: [{
            type: core.Input
        }], nzBanner: [{
            type: core.Input
        }], nzNoAnimation: [{
            type: core.Input
        }], nzOnClose: [{
            type: core.Output
        }] }); })();
        return NzAlertComponent;
    }());
    NzAlertComponent.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: core.ChangeDetectorRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzAlertComponent.propDecorators = {
        nzCloseText: [{ type: core.Input }],
        nzIconType: [{ type: core.Input }],
        nzMessage: [{ type: core.Input }],
        nzDescription: [{ type: core.Input }],
        nzType: [{ type: core.Input }],
        nzCloseable: [{ type: core.Input }],
        nzShowIcon: [{ type: core.Input }],
        nzBanner: [{ type: core.Input }],
        nzNoAnimation: [{ type: core.Input }],
        nzOnClose: [{ type: core.Output }]
    };
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzCloseable", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzAlertComponent.prototype, "nzShowIcon", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzBanner", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzAlertComponent.prototype, "nzNoAnimation", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAlertModule = /** @class */ (function () {
        function NzAlertModule() {
        }
NzAlertModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAlertModule });
NzAlertModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAlertModule_Factory(t) { return new (t || NzAlertModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, icon.NzIconModule, outlet.NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAlertModule, { declarations: [NzAlertComponent], imports: [ɵngcc2.BidiModule, ɵngcc3.CommonModule, ɵngcc4.NzIconModule, ɵngcc5.NzOutletModule], exports: [NzAlertComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAlertModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzAlertComponent],
                exports: [NzAlertComponent],
                imports: [bidi.BidiModule, common.CommonModule, icon.NzIconModule, outlet.NzOutletModule]
            }]
    }], function () { return []; }, null); })();
        return NzAlertModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzAlertComponent = NzAlertComponent;
    exports.NzAlertModule = NzAlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-alert.umd.js.map