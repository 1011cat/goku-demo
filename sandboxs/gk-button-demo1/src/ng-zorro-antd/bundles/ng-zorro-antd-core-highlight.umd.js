(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/core/highlight', ['@angular/core','@angular/common','exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ng.core,global.ng.common,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].core = global['ng-zorro-antd'].core || {}, global['ng-zorro-antd'].core.highlight = {}), global.ng.core, global.ng.common));
}(this, (function (ɵngcc0,ɵngcc1,exports, core, common) { 'use strict';

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    // Regular Expressions for parsing tags and attributes
    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // ! to ~ is the ASCII range.
    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     */
    function encodeEntities(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(SURROGATE_PAIR_REGEXP, function (match) {
            var hi = match.charCodeAt(0);
            var low = match.charCodeAt(1);
            return "&#" + ((hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000) + ";";
        })
            .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return "&#" + match.charCodeAt(0) + ";"; })
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    var NzHighlightPipe = /** @class */ (function () {
        function NzHighlightPipe() {
            this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
        }
        NzHighlightPipe.prototype.transform = function (value, highlightValue, flags, klass) {
            if (!highlightValue) {
                return value;
            }
            // Escapes regex keyword to interpret these characters literally
            var searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
            var wrapValue = value.replace(searchValue, this.UNIQUE_WRAPPERS[0] + "$&" + this.UNIQUE_WRAPPERS[1]);
            return encodeEntities(wrapValue)
                .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? "<span class=\"" + klass + "\">" : '<span>')
                .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
        };
NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
NzHighlightPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzHighlightPipe, [{
        type: core.Pipe,
        args: [{
                name: 'nzHighlight',
                pure: true
            }]
    }], function () { return []; }, null); })();
        return NzHighlightPipe;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzHighlightModule = /** @class */ (function () {
        function NzHighlightModule() {
        }
NzHighlightModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzHighlightModule });
NzHighlightModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[common.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzHighlightModule, { declarations: [NzHighlightPipe], imports: [ɵngcc1.CommonModule], exports: [NzHighlightPipe] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzHighlightModule, [{
        type: core.NgModule,
        args: [{
                imports: [common.CommonModule],
                exports: [NzHighlightPipe],
                declarations: [NzHighlightPipe]
            }]
    }], function () { return []; }, null); })();
        return NzHighlightModule;
    }());

    /**
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NzHighlightModule = NzHighlightModule;
    exports.NzHighlightPipe = NzHighlightPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-core-highlight.umd.js.map