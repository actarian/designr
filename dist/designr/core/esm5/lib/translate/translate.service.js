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
        var TEMPLATE_REGEXP = /@([^{}\s]*)/g;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHaEQ7SUFHMkQsNENBQWE7SUE0QnZFLDBCQUNXLFFBQWtCO1FBRDdCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBTWY7UUFSVSxjQUFRLEdBQVIsUUFBUSxDQUFVOztRQXRCdEIsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQUssR0FBTyxFQUFFLENBQUM7UUFFZCxlQUFTLEdBQVEsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsY0FBUSxHQUFvQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGdCQUFVLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELGVBQVMsR0FBc0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQWtCN0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFD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Q0FBQyxJQUFJLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLDhCQUFHOzs7O0lBQVYsVUFBVyxJQUFZO0lBRXZCLENBQUM7Ozs7O0lBRU0seUNBQWM7Ozs7SUFBckIsVUFBc0IsSUFBWTtJQUVsQyxDQUFDOzs7OztJQUVNLG1DQUFROzs7O0lBQWYsVUFBZ0IsSUFBYztJQUU5QixDQUFDOzs7O0lBRU0seUNBQWM7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBbklELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUmtDLFFBQVE7OzsyQkFBM0M7Q0EwSUMsQUFwSUQsQ0FHMkQsVUFBVSxHQWlJcEU7U0FqSVksZ0JBQWdCOzs7SUFPNUIsa0NBQXNEOztJQUN0RCwwQ0FBaUM7O0lBQ2pDLGlDQUFzQjs7Ozs7SUFFdEIscUNBQWlEOztJQUNqRCxvQ0FBMEU7Ozs7O0lBQzFFLHNDQUEwRTs7SUFDMUUscUNBQThFOzs7OztJQUU5RSxpQ0FBc0I7Ozs7O0lBYXJCLG9DQUE0Qjs7Ozs7OztBQXVHOUIsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFFBQWtCO0lBQ3ZELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2U8VCBleHRlbmRzIFRyYW5zbGF0ZT4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xuXHR9XG5cblx0Ly8gcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblx0cHVibGljIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXHRwdWJsaWMgY2FjaGU6IHt9ID0ge307XG5cblx0cHJpdmF0ZSBfbGFuZ3VhZ2U6IGFueSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2xhbmd1YWdlLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5ndWFnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuX2xhbmd1YWdlcy5hc09ic2VydmFibGUoKTtcblxuXHRwcml2YXRlIF9sYW5nOiBzdHJpbmc7XG5cdHB1YmxpYyBnZXQgbGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cdHB1YmxpYyBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcblx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0dGhpcy5fbGFuZyA9IGxhbmc7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdFx0dGhpcy5fbGFuZ3VhZ2VzLm5leHQodGhpcy5jb25maWcubGFuZ3VhZ2VzKTtcblx0XHR0aGlzLl9sYW5nID0gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xuXHRcdHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5sYW5nKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG5cdFx0aWYgKCFsYW5nIHx8ICFsYW5nLnRyaW0oKSkge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmcgPSBsYW5nO1xuXHRcdGlmICh0aGlzLmNhY2hlW2xhbmddKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZVtsYW5nXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldCh7IGxhbmcgfSkucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0bWFwKCh4OiBUcmFuc2xhdGVbXSkgPT4ge1xuXHRcdFx0XHRcdGlmICh4WzBdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSB4WzBdLmxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuY2FjaGVbbGFuZ10gPSBsYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGxhYmVscyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFiZWxzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Lypcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ki9cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0bGV0IGxhYmVsczogYW55ID0gdGhpcy5jYWNoZVt0aGlzLmxhbmddO1xuXHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG5cdFx0XHRsZXQgayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdGxhYmVscyA9IGxhYmVsc1trXTtcblx0XHRcdFx0ayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gbGFiZWxzW2tdIHx8IGB7JHtrfX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVRyYW5zbGF0ZSh2YWx1ZSwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcyk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdUcmFuc2xhdGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ1RyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc29sZS5sb2coJ21pc3NpbmdUcmFuc2xhdGUnLCBrZXksIHRoaXMubWlzc2luZ0hhbmRsZXIpO1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ1RyYW5zbGF0ZScsIGtleSk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0AoW157fVxcc10qKS9nOyAvLyAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURV9SRUdFWFAsICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcgPyByZXBsYWNlciA6IHRleHQ7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRMYW5ncyhsYW5nOiBzdHJpbmdbXSkge1xuXG5cdH1cblxuXHRwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2l0Jztcblx0fVxufVxuXG4vLyAhISFcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21UcmFuc2xhdGVMb2FkZXIoaW5qZWN0b3I6IEluamVjdG9yKSB7XG5cdHJldHVybiBuZXcgVHJhbnNsYXRlU2VydmljZShpbmplY3Rvcik7XG59XG4iXX0=