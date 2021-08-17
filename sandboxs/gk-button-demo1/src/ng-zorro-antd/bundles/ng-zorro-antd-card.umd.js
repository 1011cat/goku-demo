(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/cdk/bidi'),require('@angular/common'),require('ng-zorro-antd/core/outlet'),exports, require('@angular/core'), require('ng-zorro-antd/core/util'), require('@angular/cdk/bidi'), require('ng-zorro-antd/core/config'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/core/outlet')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/card', ['@angular/core','ng-zorro-antd/core/config','@angular/cdk/bidi','@angular/common','ng-zorro-antd/core/outlet','exports', '@angular/core', 'ng-zorro-antd/core/util', '@angular/cdk/bidi', 'ng-zorro-antd/core/config', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/core/outlet'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.cdk.bidi,global.ng.common,global.ngZorroAntd.core.outlet,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].card = {}), global.ng.core, global['ng-zorro-antd'].core.util, global.ng.cdk.bidi, global['ng-zorro-antd'].core.config, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd'].core.outlet));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, core, util, bidi, config, rxjs, operators, common, outlet) { 
function NzCardTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
var _c0 = ["*"];
function NzCardComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.nzTitle);
} }
function NzCardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 11);
    ɵngcc0.ɵɵtemplate(1, NzCardComponent_div_0_div_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.nzTitle);
} }
function NzCardComponent_div_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r10.nzExtra);
} }
function NzCardComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, NzCardComponent_div_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzExtra);
} }
function NzCardComponent_div_0_ng_container_4_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzCardComponent_div_0_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.listOfNzCardTabComponent.template);
} }
function NzCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵelementStart(1, "div", 7);
    ɵngcc0.ɵɵtemplate(2, NzCardComponent_div_0_div_2_Template, 2, 1, "div", 8);
    ɵngcc0.ɵɵtemplate(3, NzCardComponent_div_0_div_3_Template, 2, 1, "div", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, NzCardComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.nzExtra);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.listOfNzCardTabComponent);
} }
function NzCardComponent_div_1_ng_template_1_Template(rf, ctx) { }
function NzCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, NzCardComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.nzCover);
} }
function NzCardComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementContainerEnd();
} }
function NzCardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-card-loading");
} }
function NzCardComponent_ul_6_li_1_ng_template_2_Template(rf, ctx) { }
function NzCardComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtemplate(2, NzCardComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var action_r14 = ctx.$implicit;
    var ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("width", 100 / ctx_r13.nzActions.length, "%");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", action_r14);
} }
function NzCardComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 16);
    ɵngcc0.ɵɵtemplate(1, NzCardComponent_ul_6_li_1_Template, 3, 3, "li", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.nzActions);
} }
function NzCardLoadingComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelement(1, "div", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var className_r3 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", className_r3);
} }
function NzCardLoadingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, NzCardLoadingComponent_div_1_div_1_Template, 2, 1, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var listOfClassName_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", listOfClassName_r1);
} }
function NzCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzCardMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtemplate(1, NzCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzAvatar);
} }
function NzCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzTitle);
} }
function NzCardMetaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
} }
function NzCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzDescription);
} }
function NzCardMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzDescription);
} }
function NzCardMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtemplate(1, NzCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, NzCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzDescription);
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
    var NzCardGridDirective = /** @class */ (function () {
        function NzCardGridDirective(elementRef) {
            this.elementRef = elementRef;
            this.nzHoverable = true;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-card-grid');
        }
NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) { return new (t || NzCardGridDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCardGridDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCardGridDirective, selectors: [["", "nz-card-grid", ""]], hostVars: 2, hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-card-hoverable", ctx.nzHoverable);
    } }, inputs: { nzHoverable: "nzHoverable" }, exportAs: ["nzCardGrid"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardGridDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-card-grid]',
                exportAs: 'nzCardGrid',
                host: {
                    '[class.ant-card-hoverable]': 'nzHoverable'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzHoverable: [{
            type: core.Input
        }] }); })();
        return NzCardGridDirective;
    }());
    NzCardGridDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NzCardGridDirective.propDecorators = {
        nzHoverable: [{ type: core.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardGridDirective.prototype, "nzHoverable", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCardTabComponent = /** @class */ (function () {
        function NzCardTabComponent() {
        }
NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) { return new (t || NzCardTabComponent)(); };
NzCardTabComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCardTabComponent, selectors: [["nz-card-tab"]], viewQuery: function NzCardTabComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(core.TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, exportAs: ["nzCardTab"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCardTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardTabComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-card-tab',
                exportAs: 'nzCardTab',
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n    <ng-template>\n      <ng-content></ng-content>\n    </ng-template>\n  "
            }]
    }], function () { return []; }, { template: [{
            type: core.ViewChild,
            args: [core.TemplateRef, { static: true }]
        }] }); })();
        return NzCardTabComponent;
    }());
    NzCardTabComponent.propDecorators = {
        template: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NZ_CONFIG_MODULE_NAME = 'card';
    var NzCardComponent = /** @class */ (function () {
        function NzCardComponent(nzConfigService, cdr, elementRef, directionality) {
            var _this = this;
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzBordered = true;
            this.nzBorderless = false;
            this.nzLoading = false;
            this.nzHoverable = false;
            this.nzBodyStyle = null;
            this.nzActions = [];
            this.nzType = null;
            this.nzSize = 'default';
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-card');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
        }
        NzCardComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        NzCardComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
NzCardComponent.ɵfac = function NzCardComponent_Factory(t) { return new (t || NzCardComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzCardComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCardComponent, selectors: [["nz-card"]], contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCardTabComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzCardGridDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzCardTabComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzCardGridDirective = _t);
    } }, hostVars: 16, hostBindings: function NzCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBorderless === false && ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent)("ant-card-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBordered: "nzBordered", nzBorderless: "nzBorderless", nzLoading: "nzLoading", nzHoverable: "nzHoverable", nzBodyStyle: "nzBodyStyle", nzActions: "nzActions", nzType: "nzType", nzSize: "nzSize", nzCover: "nzCover", nzTitle: "nzTitle", nzExtra: "nzExtra" }, exportAs: ["nzCard"], ngContentSelectors: _c0, decls: 7, vars: 6, consts: [["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzCardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzCardComponent_div_0_Template, 5, 3, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzCardComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzCardComponent_ng_container_3_Template, 2, 0, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(4, NzCardComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, NzCardComponent_ul_6_Template, 2, 1, "ul", 5);
    } if (rf & 2) {
        var _r3 = ɵngcc0.ɵɵreference(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzCover);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzBodyStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzLoading)("ngIfElse", _r3);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzActions.length);
    } }, directives: function () { return [ɵngcc3.NgIf, ɵngcc3.NgStyle, ɵngcc4.NzStringTemplateOutletDirective, ɵngcc3.NgTemplateOutlet, NzCardLoadingComponent, ɵngcc3.NgForOf]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-card',
                exportAs: 'nzCard',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "\n    <div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || listOfNzCardTabComponent\">\n      <div class=\"ant-card-head-wrapper\">\n        <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n          <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n        </div>\n      </div>\n      <ng-container *ngIf=\"listOfNzCardTabComponent\">\n        <ng-template [ngTemplateOutlet]=\"listOfNzCardTabComponent.template\"></ng-template>\n      </ng-container>\n    </div>\n    <div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n      <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n    </div>\n    <div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n      <ng-container *ngIf=\"!nzLoading; else loadingTemplate\">\n        <ng-content></ng-content>\n      </ng-container>\n      <ng-template #loadingTemplate>\n        <nz-card-loading></nz-card-loading>\n      </ng-template>\n    </div>\n    <ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n      <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n        <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n      </li>\n    </ul>\n  ",
                host: {
                    '[class.ant-card-loading]': 'nzLoading',
                    '[class.ant-card-bordered]': 'nzBorderless === false && nzBordered',
                    '[class.ant-card-hoverable]': 'nzHoverable',
                    '[class.ant-card-small]': 'nzSize === "small"',
                    '[class.ant-card-contain-grid]': 'listOfNzCardGridDirective && listOfNzCardGridDirective.length',
                    '[class.ant-card-type-inner]': 'nzType === "inner"',
                    '[class.ant-card-contain-tabs]': '!!listOfNzCardTabComponent',
                    '[class.ant-card-rtl]': "dir === 'rtl'"
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzBordered: [{
            type: core.Input
        }], nzBorderless: [{
            type: core.Input
        }], nzLoading: [{
            type: core.Input
        }], nzHoverable: [{
            type: core.Input
        }], nzBodyStyle: [{
            type: core.Input
        }], nzActions: [{
            type: core.Input
        }], nzType: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzCover: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzExtra: [{
            type: core.Input
        }], listOfNzCardTabComponent: [{
            type: core.ContentChild,
            args: [NzCardTabComponent, { static: false }]
        }], listOfNzCardGridDirective: [{
            type: core.ContentChildren,
            args: [NzCardGridDirective]
        }] }); })();
        return NzCardComponent;
    }());
    NzCardComponent.ctorParameters = function () { return [
        { type: config.NzConfigService },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: core.Input }],
        nzBorderless: [{ type: core.Input }],
        nzLoading: [{ type: core.Input }],
        nzHoverable: [{ type: core.Input }],
        nzBodyStyle: [{ type: core.Input }],
        nzCover: [{ type: core.Input }],
        nzActions: [{ type: core.Input }],
        nzType: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzTitle: [{ type: core.Input }],
        nzExtra: [{ type: core.Input }],
        listOfNzCardTabComponent: [{ type: core.ContentChild, args: [NzCardTabComponent, { static: false },] }],
        listOfNzCardGridDirective: [{ type: core.ContentChildren, args: [NzCardGridDirective,] }]
    };
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzBorderless", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    __decorate([
        config.WithConfig(),
        util.InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzCardComponent.prototype, "nzSize", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCardLoadingComponent = /** @class */ (function () {
        function NzCardLoadingComponent(elementRef) {
            this.elementRef = elementRef;
            this.listOfLoading = [
                ['ant-col-22'],
                ['ant-col-8', 'ant-col-15'],
                ['ant-col-6', 'ant-col-18'],
                ['ant-col-13', 'ant-col-9'],
                ['ant-col-4', 'ant-col-3', 'ant-col-16'],
                ['ant-col-8', 'ant-col-6', 'ant-col-8']
            ];
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-card-loading-content');
        }
NzCardLoadingComponent.ɵfac = function NzCardLoadingComponent_Factory(t) { return new (t || NzCardLoadingComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCardLoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCardLoadingComponent, selectors: [["nz-card-loading"]], exportAs: ["nzCardLoading"], decls: 2, vars: 1, consts: [[1, "ant-card-loading-content"], ["class", "ant-row", "style", "margin-left: -4px; margin-right: -4px;", 4, "ngFor", "ngForOf"], [1, "ant-row", 2, "margin-left", "-4px", "margin-right", "-4px"], ["style", "padding-left: 4px; padding-right: 4px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [2, "padding-left", "4px", "padding-right", "4px", 3, "ngClass"], [1, "ant-card-loading-block"]], template: function NzCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzCardLoadingComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.listOfLoading);
    } }, directives: [ɵngcc3.NgForOf, ɵngcc3.NgClass], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardLoadingComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-card-loading',
                exportAs: 'nzCardLoading',
                template: "\n    <div class=\"ant-card-loading-content\">\n      <div class=\"ant-row\" style=\"margin-left: -4px; margin-right: -4px;\" *ngFor=\"let listOfClassName of listOfLoading\">\n        <div *ngFor=\"let className of listOfClassName\" [ngClass]=\"className\" style=\"padding-left: 4px; padding-right: 4px;\">\n          <div class=\"ant-card-loading-block\"></div>\n        </div>\n      </div>\n    </div>\n  ",
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return NzCardLoadingComponent;
    }());
    NzCardLoadingComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCardMetaComponent = /** @class */ (function () {
        function NzCardMetaComponent(elementRef) {
            this.elementRef = elementRef;
            this.nzTitle = null;
            this.nzDescription = null;
            this.nzAvatar = null;
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-card-meta');
        }
NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) { return new (t || NzCardMetaComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCardMetaComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCardMetaComponent, selectors: [["nz-card-meta"]], inputs: { nzTitle: "nzTitle", nzDescription: "nzDescription", nzAvatar: "nzAvatar" }, exportAs: ["nzCardMeta"], decls: 2, vars: 2, consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]], template: function NzCardMetaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzCardMetaComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzCardMetaComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzAvatar);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTitle || ctx.nzDescription);
    } }, directives: [ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardMetaComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-card-meta',
                exportAs: 'nzCardMeta',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "\n    <div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n      <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n    </div>\n    <div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n      <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n      </div>\n      <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n        <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzTitle: [{
            type: core.Input
        }], nzDescription: [{
            type: core.Input
        }], nzAvatar: [{
            type: core.Input
        }] }); })();
        return NzCardMetaComponent;
    }());
    NzCardMetaComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NzCardMetaComponent.propDecorators = {
        nzTitle: [{ type: core.Input }],
        nzDescription: [{ type: core.Input }],
        nzAvatar: [{ type: core.Input }]
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCardModule = /** @class */ (function () {
        function NzCardModule() {
        }
NzCardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCardModule });
NzCardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCardModule_Factory(t) { return new (t || NzCardModule)(); }, imports: [[common.CommonModule, outlet.NzOutletModule], ɵngcc2.BidiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCardModule, { declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent], imports: [ɵngcc3.CommonModule, ɵngcc4.NzOutletModule], exports: [ɵngcc2.BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCardModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule, outlet.NzOutletModule],
                declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                exports: [bidi.BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
            }]
    }], function () { return []; }, null); })();
        return NzCardModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzCardComponent = NzCardComponent;
    exports.NzCardGridDirective = NzCardGridDirective;
    exports.NzCardLoadingComponent = NzCardLoadingComponent;
    exports.NzCardMetaComponent = NzCardMetaComponent;
    exports.NzCardModule = NzCardModule;
    exports.NzCardTabComponent = NzCardTabComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-card.umd.js.map