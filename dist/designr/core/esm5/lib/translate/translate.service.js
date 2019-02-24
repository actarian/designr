/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
var TranslateService = /** @class */ (function (_super) {
    tslib_1.__extends(TranslateService, _super);
    function TranslateService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        // private cache: { [key: string]: string; } = {};
        _this.events = new EventEmitter();
        _this.cache = {};
        _this._language = new BehaviorSubject({});
        _this.language = _this._language.asObservable();
        _this._languages = new BehaviorSubject([]);
        _this.languages = _this._languages.asObservable();
        _this._languages.next(_this.config.languages);
        _this._lang = _this.config.defaultLanguage;
        _this.getTranslation(_this.lang).subscribe(function (x) {
            // console.log(x);
        });
        return _this;
    }
    Object.defineProperty(TranslateService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/translate';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "lang", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lang;
        },
        set: /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (lang !== this._lang) {
                this._lang = lang;
                /** @type {?} */
                var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                this._language.next(language);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        if (!lang || !lang.trim()) {
            return of(null);
        }
        this.lang = lang;
        if (this.cache[lang]) {
            return of(this.cache[lang]);
        }
        else {
            return this.get({ lang: lang }).pipe(take(1), map(function (x) {
                if (x[0]) {
                    /** @type {?} */
                    var labels = x[0].labels;
                    _this.cache[lang] = labels;
                    _this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    TranslateService.prototype.getTranslate = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        /** @type {?} */
        var value = null;
        /** @type {?} */
        var labels = this.cache[this.lang];
        if (labels) {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var k = keys.shift();
            while (keys.length > 0 && labels[k]) {
                labels = labels[k];
                k = keys.shift();
            }
            value = labels[k] || "{" + k + "}";
        }
        return this.parseTranslate(value, key, defaultValue, params);
    };
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    TranslateService.prototype.parseTranslate = /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (value, key, defaultValue, params) {
        if (value == null) {
            value = defaultValue;
        }
        if (value == null) {
            return this.missingTranslate(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    TranslateService.prototype.missingTranslate = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        console.log('missingTranslate', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        console.log('missingTranslate', key);
        return key;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    TranslateService.prototype.parseParams = /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (value, params) {
        /** @type {?} */
        var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
        return value.replace(TEMPLATE_REGEXP, function (text, key) {
            /** @type {?} */
            var replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.addLangs = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getBrowserLang = /**
     * @return {?}
     */
    function () {
        return 'it';
    };
    TranslateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
    return TranslateService;
}(ApiService));
export { TranslateService };
if (false) {
    /** @type {?} */
    TranslateService.prototype.events;
    /** @type {?} */
    TranslateService.prototype.missingHandler;
    /** @type {?} */
    TranslateService.prototype.cache;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._language;
    /** @type {?} */
    TranslateService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._languages;
    /** @type {?} */
    TranslateService.prototype.languages;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._lang;
    /**
     * @type {?}
     * @protected
     */
    TranslateService.prototype.injector;
}
// !!!
/**
 * @param {?} injector
 * @return {?}
 */
export function CustomTranslateLoader(injector) {
    return new TranslateService(injector);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHaEQ7SUFHMkQsNENBQWE7SUE0QnZFLDBCQUNXLFFBQWtCO1FBRDdCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBTWY7UUFSVSxjQUFRLEdBQVIsUUFBUSxDQUFVOztRQXRCdEIsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQUssR0FBTyxFQUFFLENBQUM7UUFFZCxlQUFTLEdBQVEsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsY0FBUSxHQUFvQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGdCQUFVLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGVBQVMsR0FBc0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQWtCN0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFD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QyxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sOEJBQUc7Ozs7SUFBVixVQUFXLElBQVk7SUFFdkIsQ0FBQzs7Ozs7SUFFTSx5Q0FBYzs7OztJQUFyQixVQUFzQixJQUFZO0lBRWxDLENBQUM7Ozs7O0lBRU0sbUNBQVE7Ozs7SUFBZixVQUFnQixJQUFjO0lBRTlCLENBQUM7Ozs7SUFFTSx5Q0FBYzs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkFuSUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFSa0MsUUFBUTs7OzJCQUEzQztDQTBJQyxBQXBJRCxDQUcyRCxVQUFVLEdBaUlwRTtTQWpJWSxnQkFBZ0I7OztJQU81QixrQ0FBc0Q7O0lBQ3RELDBDQUFpQzs7SUFDakMsaUNBQXNCOzs7OztJQUV0QixxQ0FBaUQ7O0lBQ2pELG9DQUEwRTs7Ozs7SUFDMUUsc0NBQTBFOztJQUMxRSxxQ0FBOEU7Ozs7O0lBRTlFLGlDQUFzQjs7Ozs7SUFhckIsb0NBQTRCOzs7Ozs7O0FBdUc5QixNQUFNLFVBQVUscUJBQXFCLENBQUMsUUFBa0I7SUFDdkQsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZTxUIGV4dGVuZHMgVHJhbnNsYXRlPiBleHRlbmRzIEFwaVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL3RyYW5zbGF0ZSc7XG5cdH1cblxuXHQvLyBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXHRwdWJsaWMgZXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cdHB1YmxpYyBjYWNoZToge30gPSB7fTtcblxuXHRwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fbGFuZ3VhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmd1YWdlczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5fbGFuZ3VhZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdHByaXZhdGUgX2xhbmc6IHN0cmluZztcblx0cHVibGljIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblx0cHVibGljIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHR0aGlzLl9sYW5nID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHR9XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHR0aGlzLl9sYW5ndWFnZXMubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xuXHRcdHRoaXMuX2xhbmcgPSB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0dGhpcy5nZXRUcmFuc2xhdGlvbih0aGlzLmxhbmcpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcblx0XHRpZiAoIWxhbmcgfHwgIWxhbmcudHJpbSgpKSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZyA9IGxhbmc7XG5cdFx0aWYgKHRoaXMuY2FjaGVbbGFuZ10pIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlW2xhbmddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KHsgbGFuZyB9KS5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHRtYXAoKHg6IFRyYW5zbGF0ZVtdKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHhbMF0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IHhbMF0ubGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5jYWNoZVtsYW5nXSA9IGxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQobGFiZWxzKTtcblx0XHRcdFx0XHRcdHJldHVybiBsYWJlbHM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvKlxuXHRcdFx0XHR0YXAoeCA9PiB7XG5cdFx0XHRcdFx0Ly8gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBsYWJlbCBtYXRjaGluZyBcIiR7bGFuZ31cImApO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQqL1xuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRlKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRsZXQgbGFiZWxzOiBhbnkgPSB0aGlzLmNhY2hlW3RoaXMubGFuZ107XG5cdFx0aWYgKGxhYmVscykge1xuXHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcblx0XHRcdGxldCBrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0d2hpbGUgKGtleXMubGVuZ3RoID4gMCAmJiBsYWJlbHNba10pIHtcblx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xuXHRcdFx0XHRrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSBsYWJlbHNba10gfHwgYHske2t9fWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcnNlVHJhbnNsYXRlKHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VUcmFuc2xhdGUodmFsdWU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubWlzc2luZ1RyYW5zbGF0ZShrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nVHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ1RyYW5zbGF0ZScsIGtleSwgdGhpcy5taXNzaW5nSGFuZGxlcik7XG5cdFx0aWYgKHRoaXMubWlzc2luZ0hhbmRsZXIpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpcy5taXNzaW5nSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdHRoaXMubWlzc2luZ0hhbmRsZXIoa2V5KSA6XG5cdFx0XHRcdHRoaXMubWlzc2luZ0hhbmRsZXI7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCdtaXNzaW5nVHJhbnNsYXRlJywga2V5KTtcblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQFxccz8oW157fVxcc10qKVxccz8vZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIHNldERlZmF1bHRMYW5nKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgYWRkTGFuZ3MobGFuZzogc3RyaW5nW10pIHtcblxuXHR9XG5cblx0cHVibGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdpdCc7XG5cdH1cbn1cblxuLy8gISEhXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tVHJhbnNsYXRlTG9hZGVyKGluamVjdG9yOiBJbmplY3Rvcikge1xuXHRyZXR1cm4gbmV3IFRyYW5zbGF0ZVNlcnZpY2UoaW5qZWN0b3IpO1xufVxuIl19