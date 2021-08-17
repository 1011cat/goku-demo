(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core/config'),require('@angular/cdk/bidi'),require('@angular/common'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/core/outlet'),exports, require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/core/util'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/progress', ['@angular/core','ng-zorro-antd/core/config','@angular/cdk/bidi','@angular/common','ng-zorro-antd/icon','ng-zorro-antd/core/outlet','exports', '@angular/cdk/bidi', '@angular/common', '@angular/core', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/config', 'ng-zorro-antd/core/util', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ngZorroAntd.core.config,global.ng.cdk.bidi,global.ng.common,global.ngZorroAntd.icon,global.ngZorroAntd.core.outlet,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].progress = {}), global.ng.cdk.bidi, global.ng.common, global.ng.core, global['ng-zorro-antd'].core.outlet, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].core.config, global['ng-zorro-antd'].core.util, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,exports, bidi, common, core, outlet, icon, config, util, rxjs, operators) { 
function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "i", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzType", ctx_r5.icon);
} }
function NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var formatter_r9 = ctx.$implicit;
    var ctx_r8 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", formatter_r9(ctx_r8.nzPercent), " ");
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.formatter)("nzStringTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r7.nzPercent));
} }
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r6 = ɵngcc0.ɵɵreference(3);
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.nzFormat)("ngIfElse", _r6);
} }
function NzProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nzShowInfo);
} }
function NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    var ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵstyleProp("width", ctx_r14.nzSuccessPercent, "%")("border-radius", ctx_r14.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
} }
function NzProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelementStart(1, "div", 14);
    ɵngcc0.ɵɵelement(2, "div", 15);
    ɵngcc0.ɵɵtemplate(3, NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵstyleProp("width", ctx_r12.nzPercent, "%")("border-radius", ctx_r12.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.nzStrokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r12.nzSuccessPercent || ctx_r12.nzSuccessPercent === 0);
} }
function NzProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) { }
function NzProgressComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r10.isSteps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzProgressComponent_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    var step_r17 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngStyle", step_r17);
} }
function NzProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) { }
function NzProgressComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 18);
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r11.steps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function NzProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.isSteps);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.isSteps);
} }
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "stop");
} if (rf & 2) {
    var i_r23 = ctx.$implicit;
    ɵngcc0.ɵɵattribute("offset", i_r23.offset)("stop-color", i_r23.color);
} }
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(0, "defs");
    ɵngcc0.ɵɵelementStart(1, "linearGradient", 24);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("id", "gradient-" + ctx_r19.gradientId);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r19.circleGradient);
} }
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "path", 26);
} if (rf & 2) {
    var p_r24 = ctx.$implicit;
    var ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", p_r24.strokePathStyle);
    ɵngcc0.ɵɵattribute("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.nzStrokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.nzPercent ? ctx_r20.strokeWidth : 0);
} }
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
} }
function NzProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(1, "svg", 21);
    ɵngcc0.ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵngcc0.ɵɵelement(3, "path", 22);
    ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");
    ɵngcc0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.isGradient);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    ɵngcc0.ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r0);
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
    function stripPercentToNumber(percent) {
        return +percent.replace('%', '');
    }
    var sortGradient = function (gradients) {
        var tempArr = [];
        Object.keys(gradients).forEach(function (key) {
            var value = gradients[key];
            var formatKey = stripPercentToNumber(key);
            if (!isNaN(formatKey)) {
                tempArr.push({
                    key: formatKey,
                    value: value
                });
            }
        });
        tempArr = tempArr.sort(function (a, b) { return a.key - b.key; });
        return tempArr;
    };
    var handleCircleGradient = function (strokeColor) {
        return sortGradient(strokeColor).map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({ offset: key + "%", color: value });
        });
    };
    var handleLinearGradient = function (strokeColor) {
        var _a = strokeColor.from, from = _a === void 0 ? '#1890ff' : _a, _b = strokeColor.to, to = _b === void 0 ? '#1890ff' : _b, _c = strokeColor.direction, direction = _c === void 0 ? 'to right' : _c, rest = __rest(strokeColor, ["from", "to", "direction"]);
        if (Object.keys(rest).length !== 0) {
            var sortedGradients = sortGradient(rest)
                .map(function (_a) {
                var key = _a.key, value = _a.value;
                return value + " " + key + "%";
            })
                .join(', ');
            return "linear-gradient(" + direction + ", " + sortedGradients + ")";
        }
        return "linear-gradient(" + direction + ", " + from + ", " + to + ")";
    };

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var gradientIdSeed = 0;
    var NZ_CONFIG_MODULE_NAME = 'progress';
    var statusIconNameMap = new Map([
        ['success', 'check'],
        ['exception', 'close']
    ]);
    var statusColorMap = new Map([
        ['normal', '#108ee9'],
        ['exception', '#ff5500'],
        ['success', '#87d068']
    ]);
    var defaultFormatter = function (p) { return p + "%"; };
    var ɵ0 = defaultFormatter;
    var NzProgressComponent = /** @class */ (function () {
        function NzProgressComponent(cdr, nzConfigService, directionality) {
            this.cdr = cdr;
            this.nzConfigService = nzConfigService;
            this.directionality = directionality;
            this._nzModuleName = NZ_CONFIG_MODULE_NAME;
            this.nzShowInfo = true;
            this.nzWidth = 132;
            this.nzStrokeColor = undefined;
            this.nzSize = 'default';
            this.nzPercent = 0;
            this.nzStrokeWidth = undefined;
            this.nzGapDegree = undefined;
            this.nzType = 'line';
            this.nzGapPosition = 'top';
            this.nzStrokeLinecap = 'round';
            this.nzSteps = 0;
            this.steps = [];
            /** Gradient style when `nzType` is `line`. */
            this.lineGradient = null;
            /** If user uses gradient color. */
            this.isGradient = false;
            /** If the linear progress is a step progress. */
            this.isSteps = false;
            /**
             * Each progress whose `nzType` is circle or dashboard should have unique id to
             * define `<linearGradient>`.
             */
            this.gradientId = gradientIdSeed++;
            /** Paths to rendered in the template. */
            this.progressCirclePath = [];
            this.trailPathStyle = null;
            this.dir = 'ltr';
            this.trackByFn = function (index) { return "" + index; };
            this.cachedStatus = 'normal';
            this.inferredStatus = 'normal';
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(NzProgressComponent.prototype, "formatter", {
            get: function () {
                return this.nzFormat || defaultFormatter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "status", {
            get: function () {
                return this.nzStatus || this.inferredStatus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
            get: function () {
                return this.nzStrokeWidth || (this.nzType === 'line' && this.nzSize !== 'small' ? 8 : 6);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
            get: function () {
                return this.nzType === 'circle' || this.nzType === 'dashboard';
            },
            enumerable: false,
            configurable: true
        });
        NzProgressComponent.prototype.ngOnChanges = function (changes) {
            var nzSteps = changes.nzSteps, nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzStrokeColor = changes.nzStrokeColor, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent, nzStrokeWidth = changes.nzStrokeWidth;
            if (nzStatus) {
                this.cachedStatus = this.nzStatus || this.cachedStatus;
            }
            if (nzPercent || nzSuccessPercent) {
                var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
                if (fillAll) {
                    if ((util.isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100) || this.nzSuccessPercent === undefined) {
                        this.inferredStatus = 'success';
                    }
                }
                else {
                    this.inferredStatus = this.cachedStatus;
                }
            }
            if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
                this.updateIcon();
            }
            if (nzStrokeColor) {
                this.setStrokeColor();
            }
            if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
                this.getCirclePaths();
            }
            if (nzPercent || nzSteps || nzStrokeWidth) {
                this.isSteps = this.nzSteps > 0;
                if (this.isSteps) {
                    this.getSteps();
                }
            }
        };
        NzProgressComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.updateIcon();
                _this.setStrokeColor();
                _this.getCirclePaths();
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        NzProgressComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzProgressComponent.prototype.updateIcon = function () {
            var ret = statusIconNameMap.get(this.status);
            this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
        };
        /**
         * Calculate step render configs.
         */
        NzProgressComponent.prototype.getSteps = function () {
            var current = Math.floor(this.nzSteps * (this.nzPercent / 100));
            var stepWidth = this.nzSize === 'small' ? 2 : 14;
            var steps = [];
            for (var i = 0; i < this.nzSteps; i++) {
                var color = void 0;
                if (i <= current - 1) {
                    color = this.nzStrokeColor;
                }
                var stepStyle = {
                    backgroundColor: "" + color,
                    width: stepWidth + "px",
                    height: this.strokeWidth + "px"
                };
                steps.push(stepStyle);
            }
            this.steps = steps;
        };
        /**
         * Calculate paths when the type is circle or dashboard.
         */
        NzProgressComponent.prototype.getCirclePaths = function () {
            var _this = this;
            if (!this.isCircleStyle) {
                return;
            }
            var values = util.isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
            // Calculate shared styles.
            var radius = 50 - this.strokeWidth / 2;
            var gapPosition = this.nzGapPosition || (this.nzType === 'circle' ? 'top' : 'bottom');
            var len = Math.PI * 2 * radius;
            var gapDegree = this.nzGapDegree || (this.nzType === 'circle' ? 0 : 75);
            var beginPositionX = 0;
            var beginPositionY = -radius;
            var endPositionX = 0;
            var endPositionY = radius * -2;
            switch (gapPosition) {
                case 'left':
                    beginPositionX = -radius;
                    beginPositionY = 0;
                    endPositionX = radius * 2;
                    endPositionY = 0;
                    break;
                case 'right':
                    beginPositionX = radius;
                    beginPositionY = 0;
                    endPositionX = radius * -2;
                    endPositionY = 0;
                    break;
                case 'bottom':
                    beginPositionY = radius;
                    endPositionY = radius * 2;
                    break;
                default:
            }
            this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n       a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
            this.trailPathStyle = {
                strokeDasharray: len - gapDegree + "px " + len + "px",
                strokeDashoffset: "-" + gapDegree / 2 + "px",
                transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
            };
            // Calculate styles for each path.
            this.progressCirclePath = values
                .map(function (value, index) {
                var isSuccessPercent = values.length === 2 && index === 0;
                return {
                    stroke: _this.isGradient && !isSuccessPercent ? "url(#gradient-" + _this.gradientId + ")" : null,
                    strokePathStyle: {
                        stroke: !_this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : _this.nzStrokeColor) : null,
                        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                        strokeDasharray: ((value || 0) / 100) * (len - gapDegree) + "px " + len + "px",
                        strokeDashoffset: "-" + gapDegree / 2 + "px"
                    }
                };
            })
                .reverse();
        };
        NzProgressComponent.prototype.setStrokeColor = function () {
            var color = this.nzStrokeColor;
            var isGradient = (this.isGradient = !!color && typeof color !== 'string');
            if (isGradient && !this.isCircleStyle) {
                this.lineGradient = handleLinearGradient(color);
            }
            else if (isGradient && this.isCircleStyle) {
                this.circleGradient = handleCircleGradient(this.nzStrokeColor);
            }
            else {
                this.lineGradient = null;
                this.circleGradient = [];
            }
        };
NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) { return new (t || NzProgressComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Directionality, 8)); };
NzProgressComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzProgressComponent, selectors: [["nz-progress"]], inputs: { nzShowInfo: "nzShowInfo", nzWidth: "nzWidth", nzStrokeColor: "nzStrokeColor", nzSize: "nzSize", nzPercent: "nzPercent", nzStrokeWidth: "nzStrokeWidth", nzGapDegree: "nzGapDegree", nzType: "nzType", nzGapPosition: "nzGapPosition", nzStrokeLinecap: "nzStrokeLinecap", nzSteps: "nzSteps", nzFormat: "nzFormat", nzSuccessPercent: "nzSuccessPercent", nzStatus: "nzStatus" }, exportAs: ["nzProgress"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 15, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function NzProgressComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzProgressComponent_div_3_Template, 3, 2, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ant-progress-line", ctx.nzType == "line")("ant-progress-small", ctx.nzSize == "small")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
        ɵngcc0.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzType === "line");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCircleStyle);
    } }, directives: [ɵngcc3.NgClass, ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc5.NzStringTemplateOutletDirective, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgForOf, ɵngcc3.NgStyle], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzProgressComponent, [{
        type: core.Component,
        args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: "\n    <ng-template #progressInfoTemplate>\n      <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n        <ng-container *ngIf=\"(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate\">\n          <i nz-icon [nzType]=\"icon\"></i>\n        </ng-container>\n        <ng-template #formatTemplate>\n          <ng-container *nzStringTemplateOutlet=\"formatter; context: { $implicit: nzPercent }; let formatter\">\n            {{ formatter(nzPercent) }}\n          </ng-container>\n        </ng-template>\n      </span>\n    </ng-template>\n\n    <div\n      [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n      [class.ant-progress-line]=\"nzType == 'line'\"\n      [class.ant-progress-small]=\"nzSize == 'small'\"\n      [class.ant-progress-show-info]=\"nzShowInfo\"\n      [class.ant-progress-circle]=\"isCircleStyle\"\n      [class.ant-progress-steps]=\"isSteps\"\n      [class.ant-progress-rtl]=\"dir === 'rtl'\"\n    >\n      <!-- line progress -->\n      <div *ngIf=\"nzType === 'line'\">\n        <!-- normal line style -->\n        <ng-container *ngIf=\"!isSteps\">\n          <div class=\"ant-progress-outer\" *ngIf=\"!isSteps\">\n            <div class=\"ant-progress-inner\">\n              <div\n                class=\"ant-progress-bg\"\n                [style.width.%]=\"nzPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.background]=\"!isGradient ? nzStrokeColor : null\"\n                [style.background-image]=\"isGradient ? lineGradient : null\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n              <div\n                *ngIf=\"nzSuccessPercent || nzSuccessPercent === 0\"\n                class=\"ant-progress-success-bg\"\n                [style.width.%]=\"nzSuccessPercent\"\n                [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n                [style.height.px]=\"strokeWidth\"\n              ></div>\n            </div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </ng-container>\n        <!-- step style -->\n        <div class=\"ant-progress-steps-outer\" *ngIf=\"isSteps\">\n          <div *ngFor=\"let step of steps; let i = index\" class=\"ant-progress-steps-item\" [ngStyle]=\"step\"></div>\n          <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n        </div>\n      </div>\n\n      <!-- circle / dashboard progress -->\n      <div\n        [style.width.px]=\"this.nzWidth\"\n        [style.height.px]=\"this.nzWidth\"\n        [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n        class=\"ant-progress-inner\"\n        [class.ant-progress-circle-gradient]=\"isGradient\"\n        *ngIf=\"isCircleStyle\"\n      >\n        <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n          <defs *ngIf=\"isGradient\">\n            <linearGradient [id]=\"'gradient-' + gradientId\" x1=\"100%\" y1=\"0%\" x2=\"0%\" y2=\"0%\">\n              <stop *ngFor=\"let i of circleGradient\" [attr.offset]=\"i.offset\" [attr.stop-color]=\"i.color\"></stop>\n            </linearGradient>\n          </defs>\n          <path\n            class=\"ant-progress-circle-trail\"\n            stroke=\"#f3f3f3\"\n            fill-opacity=\"0\"\n            [attr.stroke-width]=\"strokeWidth\"\n            [attr.d]=\"pathString\"\n            [ngStyle]=\"trailPathStyle\"\n          ></path>\n          <path\n            *ngFor=\"let p of progressCirclePath; trackBy: trackByFn\"\n            class=\"ant-progress-circle-path\"\n            fill-opacity=\"0\"\n            [attr.d]=\"pathString\"\n            [attr.stroke-linecap]=\"nzStrokeLinecap\"\n            [attr.stroke]=\"p.stroke\"\n            [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n            [ngStyle]=\"p.strokePathStyle\"\n          ></path>\n        </svg>\n        <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n      </div>\n    </div>\n  "
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc1.NzConfigService }, { type: ɵngcc2.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzShowInfo: [{
            type: core.Input
        }], nzWidth: [{
            type: core.Input
        }], nzStrokeColor: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzPercent: [{
            type: core.Input
        }], nzStrokeWidth: [{
            type: core.Input
        }], nzGapDegree: [{
            type: core.Input
        }], nzType: [{
            type: core.Input
        }], nzGapPosition: [{
            type: core.Input
        }], nzStrokeLinecap: [{
            type: core.Input
        }], nzSteps: [{
            type: core.Input
        }], nzFormat: [{
            type: core.Input
        }], nzSuccessPercent: [{
            type: core.Input
        }], nzStatus: [{
            type: core.Input
        }] }); })();
        return NzProgressComponent;
    }());
    NzProgressComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: config.NzConfigService },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: core.Input }],
        nzWidth: [{ type: core.Input }],
        nzStrokeColor: [{ type: core.Input }],
        nzSize: [{ type: core.Input }],
        nzFormat: [{ type: core.Input }],
        nzSuccessPercent: [{ type: core.Input }],
        nzPercent: [{ type: core.Input }],
        nzStrokeWidth: [{ type: core.Input }],
        nzGapDegree: [{ type: core.Input }],
        nzStatus: [{ type: core.Input }],
        nzType: [{ type: core.Input }],
        nzGapPosition: [{ type: core.Input }],
        nzStrokeLinecap: [{ type: core.Input }],
        nzSteps: [{ type: core.Input }]
    };
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Boolean)
    ], NzProgressComponent.prototype, "nzShowInfo", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", Object)
    ], NzProgressComponent.prototype, "nzStrokeColor", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzSize", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    __decorate([
        config.WithConfig(),
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    __decorate([
        config.WithConfig(),
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzGapPosition", void 0);
    __decorate([
        config.WithConfig(),
        __metadata("design:type", String)
    ], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSteps", void 0);

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzProgressModule = /** @class */ (function () {
        function NzProgressModule() {
        }
NzProgressModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzProgressModule });
NzProgressModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzProgressModule_Factory(t) { return new (t || NzProgressModule)(); }, imports: [[bidi.BidiModule, common.CommonModule, icon.NzIconModule, outlet.NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzProgressModule, { declarations: [NzProgressComponent], imports: [ɵngcc2.BidiModule, ɵngcc3.CommonModule, ɵngcc4.NzIconModule, ɵngcc5.NzOutletModule], exports: [NzProgressComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzProgressModule, [{
        type: core.NgModule,
        args: [{
                exports: [NzProgressComponent],
                declarations: [NzProgressComponent],
                imports: [bidi.BidiModule, common.CommonModule, icon.NzIconModule, outlet.NzOutletModule]
            }]
    }], function () { return []; }, null); })();
        return NzProgressModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzProgressComponent = NzProgressComponent;
    exports.NzProgressModule = NzProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-progress.umd.js.map