(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/cdk/platform'),require('@angular/common'),require('ng-zorro-antd/icon'),require('@angular/cdk/bidi'),exports, require('@angular/cdk/platform'), require('@angular/core'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/util'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/avatar', ['@angular/core','ng-zorro-antd/core/config','@angular/cdk/platform','@angular/common','ng-zorro-antd/icon','@angular/cdk/bidi','exports', '@angular/cdk/platform', '@angular/core', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/util', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.cdk.platform,global.ng.common,global.ngZorroAntd.icon,global.ng.cdk.bidi,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].avatar = {}), global.ng.cdk.platform, global.ng.core, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.util, global.ng.cdk.bidi, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, platform, core, config, util, bidi, common, icon) { 
var _c0 = ["textEl"];
function NzAvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzIcon);
} }
function NzAvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 4);
    ɵngcc0.ɵɵlistener("error", function NzAvatarComponent_img_1_Template_img_error_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.imgError($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r1.nzSrc, ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵattribute("srcset", ctx_r1.nzSrcSet, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.nzAlt);
} }
function NzAvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5, 6);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2.textStyles);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzText);
} }
var _c1 = ["*"];
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
    var NZ_CONFIG_MODULE_NAME = 'avatar';
    var NzAvatarComponent = /** @class */ (function () {
        function NzAvatarComponent(nzConfigService, elementRef, cdr, platform) {
            this.nzConfigService = nzConfigService;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.platform = platform;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzShape = 'circle';
            this.nzSize = 'default';
            this.nzGap = 4;
            this.nzError = new core.EventEmitter();
            this.hasText = false;
            this.hasSrc = true;
            this.hasIcon = false;
            this.textStyles = {};
            this.classMap = {};
            this.customSize = null;
            this.el = this.elementRef.nativeElement;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-avatar');
        }
        NzAvatarComponent.prototype.imgError = function ($event) {
            this.nzError.emit($event);
            if (!$event.defaultPrevented) {
                this.hasSrc = false;
                this.hasIcon = false;
                this.hasText = false;
                if (this.nzIcon) {
                    this.hasIcon = true;
                }
                else if (this.nzText) {
                    this.hasText = true;
                }
                this.cdr.detectChanges();
                this.setSizeStyle();
                this.notifyCalc();
            }
        };
        NzAvatarComponent.prototype.ngOnChanges = function () {
            this.hasText = !this.nzSrc && !!this.nzText;
            this.hasIcon = !this.nzSrc && !!this.nzIcon;
            this.hasSrc = !!this.nzSrc;
            this.setSizeStyle();
            this.notifyCalc();
        };
        NzAvatarComponent.prototype.calcStringSize = function () {
            if (!this.hasText) {
                return;
            }
            var childrenWidth = this.textEl.nativeElement.offsetWidth;
            var avatarWidth = this.el.getBoundingClientRect().width;
            var offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
            var scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
            this.textStyles = {
                transform: "scale(" + scale + ") translateX(-50%)"
            };
            if (this.customSize) {
                Object.assign(this.textStyles, {
                    lineHeight: this.customSize
                });
            }
            this.cdr.detectChanges();
        };
        NzAvatarComponent.prototype.notifyCalc = function () {
            var _this = this;
            // If use ngAfterViewChecked, always demands more computations, so......
            if (this.platform.isBrowser) {
                setTimeout(function () {
                    _this.calcStringSize();
                });
            }
        };
        NzAvatarComponent.prototype.setSizeStyle = function () {
            if (typeof this.nzSize === 'number') {
                this.customSize = this.nzSize + "px";
            }
            else {
                this.customSize = null;
            }
            this.cdr.markForCheck();
        };
NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) { return new (t || NzAvatarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Platform)); };
NzAvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAvatarComponent, selectors: [["nz-avatar"]], viewQuery: function NzAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textEl = _t.first);
    } }, hostVars: 20, hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
        ɵngcc0.ɵɵclassProp("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    } }, inputs: { nzShape: "nzShape", nzSize: "nzSize", nzGap: "nzGap", nzText: "nzText", nzSrc: "nzSrc", nzSrcSet: "nzSrcSet", nzAlt: "nzAlt", nzIcon: "nzIcon" }, outputs: { nzError: "nzError" }, exportAs: ["nzAvatar"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 3, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]], template: function NzAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzAvatarComponent_i_0_Template, 1, 1, "i", 0);
        ɵngcc0.ɵɵtemplate(1, NzAvatarComponent_img_1_Template, 1, 3, "img", 1);
        ɵngcc0.ɵɵtemplate(2, NzAvatarComponent_span_2_Template, 3, 2, "span", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzIcon && ctx.hasIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSrc && ctx.hasSrc);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzText && ctx.hasText);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc3.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAvatarComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-avatar',
                exportAs: 'nzAvatar',
                template: "\n    <i nz-icon *ngIf=\"nzIcon && hasIcon\" [nzType]=\"nzIcon\"></i>\n    <img *ngIf=\"nzSrc && hasSrc\" [src]=\"nzSrc\" [attr.srcset]=\"nzSrcSet\" [attr.alt]=\"nzAlt\" (error)=\"imgError($event)\" />\n    <span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>\n  ",
                host: {
                    '[class.ant-avatar-lg]': "nzSize === 'large'",
                    '[class.ant-avatar-sm]': "nzSize === 'small'",
                    '[class.ant-avatar-square]': "nzShape === 'square'",
                    '[class.ant-avatar-circle]': "nzShape === 'circle'",
                    '[class.ant-avatar-icon]': "nzIcon",
                    '[class.ant-avatar-image]': "hasSrc ",
                    '[style.width]': 'customSize',
                    '[style.height]': 'customSize',
                    '[style.line-height]': 'customSize',
                    // nzSize type is number when customSize is true
                    '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
                },
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Platform }]; }, { nzShape: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzGap: [{
            type: core.Input
        }], nzError: [{
            type: core.Output
        }], nzText: [{
            type: core.Input
        }], nzSrc: [{
            type: core.Input
        }], nzSrcSet: [{
            type: core.Input
        }], nzAlt: [{
            type: core.Input
        }], nzIcon: [{
            type: core.Input
        }], textEl: [{
            type: core.ViewChild,
            args: ['textEl', { static: false }]
        }] }); })();
        return NzAvatarComponent;
    }());
    NzAvatarComponent.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: platform.Platform }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzGap: [{ type: core.Input }],
        nzText: [{ type: core.Input }],
        nzSrc: [{ type: core.Input }],
        nzSrcSet: [{ type: core.Input }],
        nzAlt: [{ type: core.Input }],
        nzIcon: [{ type: core.Input }],
        nzError: [{ type: core.Output }],
        textEl: [{ type: core.ViewChild, args: ['textEl', { static: false },] }]
    };
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzAvatarComponent.prototype, "nzShape", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzSize", void 0);
    __decorate([
        config.WithConfig(),
        util.InputNumber(),
        __metadata("design:type", Object)
    ], NzAvatarComponent.prototype, "nzGap", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAvatarGroupComponent = /** @class */ (function () {
        function NzAvatarGroupComponent() {
        }
NzAvatarGroupComponent.ɵfac = function NzAvatarGroupComponent_Factory(t) { return new (t || NzAvatarGroupComponent)(); };
NzAvatarGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzAvatarGroupComponent, selectors: [["nz-avatar-group"]], hostAttrs: [1, "ant-avatar-group"], exportAs: ["nzAvatarGroup"], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzAvatarGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAvatarGroupComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-avatar-group',
                exportAs: 'nzAvatarGroup',
                template: "\n    <ng-content></ng-content>\n  ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-avatar-group'
                }
            }]
    }], function () { return []; }, null); })();
        return NzAvatarGroupComponent;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAvatarModule = /** @class */ (function () {
        function NzAvatarModule() {
        }
NzAvatarModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzAvatarModule });
NzAvatarModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzAvatarModule_Factory(t) { return new (t || NzAvatarModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, icon.NzIconModule, platform.PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzAvatarModule, { declarations: [NzAvatarComponent, NzAvatarGroupComponent], imports: [ɵngcc5.BidiModule, ɵngcc3.CommonModule, ɵngcc4.NzIconModule, ɵngcc2.PlatformModule], exports: [NzAvatarComponent, NzAvatarGroupComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzAvatarModule, [{
        type: core.NgModule,
        args: [{
                declarations: [NzAvatarComponent, NzAvatarGroupComponent],
                exports: [NzAvatarComponent, NzAvatarGroupComponent],
                imports: [bidi.BidiModule, common.CommonModule, icon.NzIconModule, platform.PlatformModule]
            }]
    }], function () { return []; }, null); })();
        return NzAvatarModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzAvatarComponent = NzAvatarComponent;
    exports.NzAvatarModule = NzAvatarModule;
    exports.ɵa = NzAvatarGroupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-avatar.umd.js.map