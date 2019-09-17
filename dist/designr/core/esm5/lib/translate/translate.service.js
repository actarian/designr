/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
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
        _this.events = new EventEmitter();
        _this.language_ = new BehaviorSubject(undefined);
        _this.languages_ = new BehaviorSubject([]);
        _this.cache_ = {};
        _this.languages_.next(_this.config.languages);
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
            return this.lang_;
        },
        set: /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (lang !== this.lang_) {
                this.lang_ = lang;
                /** @type {?} */
                var languages = this.languages_.getValue();
                if (languages.length) {
                    /** @type {?} */
                    var language = languages.find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.lang === lang; }));
                    this.language_.next(language);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "language", {
        get: /**
         * @return {?}
         */
        function () {
            return this.language_.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "languages", {
        get: /**
         * @return {?}
         */
        function () {
            return this.languages_.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TranslateService.prototype.observe$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.language_.pipe(filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== undefined; })), switchMap((/**
         * @param {?} language
         * @return {?}
         */
        function (language) { return _this.getTranslation(language.lang); })));
    };
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
        this.lang_ = lang;
        if (this.cache_[lang]) {
            return of(this.cache_[lang]);
        }
        else {
            return this.get("?lang=" + lang, { lang: lang }).pipe(
            // take(1),
            map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (x.length && x[0]) {
                    /** @type {?} */
                    var labels = x[0].labels;
                    _this.cache_[lang] = labels;
                    _this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            })));
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
        // console.log('TranslateService.getTranslate', key, this.cache_, this.lang_);
        if (key) {
            /** @type {?} */
            var value = null;
            /** @type {?} */
            var labels = this.cache_[this.lang_];
            // console.log('labels', this.lang_, this.cache_, labels);
            if (labels) {
                /** @type {?} */
                var keys = key.split('.');
                /** @type {?} */
                var k = keys.shift();
                while (keys.length > 0 && labels[k]) {
                    labels = labels[k];
                    k = keys.shift();
                }
                value = labels[k]; // || `{${k}}`;
                if (typeof value !== 'string') {
                    value = null;
                }
            }
            return this.parseTranslate(value, key, defaultValue, params);
        }
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    TranslateService.prototype.transform = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        /** @type {?} */
        var value = this.getTranslate(key, defaultValue, params);
        return value;
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
            return defaultValue || this.missingTranslate(key);
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
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
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
        return value.replace(TEMPLATE_REGEXP, (/**
         * @param {?} text
         * @param {?} key
         * @return {?}
         */
        function (text, key) {
            /** @type {?} */
            var replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        }));
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
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            var lang = this.getFirstBrowserLang() || this.config.defaultLanguage;
            // console.log('getBrowserLang', lang, navigator.languages);
            return lang;
        }
        else {
            return this.config.defaultLanguage;
        }
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getFirstBrowserLang = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lang = this.getFirstBrowserLocale();
        if (lang) {
            return lang.split('-')[0];
        }
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getFirstBrowserLocale = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var navigator = window.navigator;
        /** @type {?} */
        var properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        /** @type {?} */
        var lang;
        if (Array.isArray(navigator.languages)) {
            lang = navigator.languages[0];
        }
        /** @type {?} */
        var i = 0;
        while (!lang && i < properties.length) {
            lang = navigator[properties[i]];
            i++;
        }
        return lang;
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
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.lang_;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.language_;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.languages_;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.cache_;
    /**
     * @type {?}
     * @protected
     */
    TranslateService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBR2hEO0lBRzJELDRDQUFhO0lBcUN2RSwwQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUVmO1FBSlUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQWhDdEIsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTlDLGVBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUNyRCxnQkFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRSxZQUFNLEdBQStCLEVBQUUsQ0FBQztRQTZCL0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDN0MsQ0FBQztJQXhDRCxzQkFBSSx3Q0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQVVELHNCQUFXLGtDQUFJOzs7O1FBQWY7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFFRCxV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SUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7OztJQUVNLGdEQUFxQjs7O0lBQTVCOztZQUNPLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUzs7WUFDNUIsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7Z0JBOUtELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUmtDLFFBQVE7OzsyQkFEM0M7Q0F1TEMsQUFoTEQsQ0FHMkQsVUFBVSxHQTZLcEU7U0E3S1ksZ0JBQWdCOzs7SUFNNUIsa0NBQXNEOztJQUN0RCwwQ0FBaUM7Ozs7O0lBRWpDLGlDQUFzQjs7Ozs7SUFDdEIscUNBQTZEOzs7OztJQUM3RCxzQ0FBMEU7Ozs7O0lBQzFFLGtDQUFnRDs7Ozs7SUEwQi9DLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZTxUIGV4dGVuZHMgVHJhbnNsYXRlPiBleHRlbmRzIEFwaVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL3RyYW5zbGF0ZSc7XG5cdH1cblxuXHRwdWJsaWMgZXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSBsYW5nXzogc3RyaW5nO1xuXHRwcml2YXRlIGxhbmd1YWdlXzogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHVuZGVmaW5lZCk7XG5cdHByaXZhdGUgbGFuZ3VhZ2VzXzogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHByaXZhdGUgY2FjaGVfOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXG5cdHB1YmxpYyBnZXQgbGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmxhbmdfO1xuXHR9XG5cblx0cHVibGljIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSB0aGlzLmxhbmdfKSB7XG5cdFx0XHR0aGlzLmxhbmdfID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VzXy5nZXRWYWx1ZSgpO1xuXHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZXMuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHRcdHRoaXMubGFuZ3VhZ2VfLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGxhbmd1YWdlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHR0aGlzLmxhbmd1YWdlc18ubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xuXHR9XG5cblx0cHVibGljIG9ic2VydmUkKCk6IE9ic2VydmFibGU8e30+IHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8ucGlwZShcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCksXG5cdFx0XHRzd2l0Y2hNYXAoKGxhbmd1YWdlOiBhbnkpID0+IHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZ3VhZ2UubGFuZykpLFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5nXyA9IGxhbmc7XG5cdFx0aWYgKHRoaXMuY2FjaGVfW2xhbmddKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZV9bbGFuZ10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoYD9sYW5nPSR7bGFuZ31gLCB7IGxhbmcgfSkucGlwZShcblx0XHRcdFx0Ly8gdGFrZSgxKSxcblx0XHRcdFx0bWFwKCh4OiBUcmFuc2xhdGVbXSkgPT4ge1xuXHRcdFx0XHRcdGlmICh4Lmxlbmd0aCAmJiB4WzBdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSB4WzBdLmxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuY2FjaGVfW2xhbmddID0gbGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhYmVscztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZScsIGtleSwgdGhpcy5jYWNoZV8sIHRoaXMubGFuZ18pO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0XHRsZXQgbGFiZWxzOiBhbnkgPSB0aGlzLmNhY2hlX1t0aGlzLmxhbmdfXTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdsYWJlbHMnLCB0aGlzLmxhbmdfLCB0aGlzLmNhY2hlXywgbGFiZWxzKTtcblx0XHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcblx0XHRcdFx0bGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xuXHRcdFx0XHRcdGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSBsYWJlbHNba107IC8vIHx8IGB7JHtrfX1gO1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VUcmFuc2xhdGUodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VUcmFuc2xhdGUodmFsdWU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUgfHwgdGhpcy5taXNzaW5nVHJhbnNsYXRlKGtleSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIG1pc3NpbmdUcmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYUCwgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMYW5nKCkgfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlOyAvLyBuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEJyb3dzZXJMYW5nJywgbGFuZywgbmF2aWdhdG9yLmxhbmd1YWdlcyk7XG5cdFx0XHRyZXR1cm4gbGFuZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHtcblx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMb2NhbGUoKTtcblx0XHRpZiAobGFuZykge1xuXHRcdFx0cmV0dXJuIGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCkge1xuXHRcdGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddO1xuXHRcdGxldCBsYW5nO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG5hdmlnYXRvci5sYW5ndWFnZXMpKSB7XG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlc1swXTtcblx0XHR9XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlICghbGFuZyAmJiBpIDwgcHJvcGVydGllcy5sZW5ndGgpIHtcblx0XHRcdGxhbmcgPSBuYXZpZ2F0b3JbcHJvcGVydGllc1tpXV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9XG5cbn1cbiJdfQ==