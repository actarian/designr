/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IdentityService } from '../models/identity.service';
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
            return TranslateService.lang_;
        },
        set: /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (lang !== TranslateService.lang_) {
                TranslateService.lang_ = lang;
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
        // console.log(new Error().stack);
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
        TranslateService.lang_ = lang;
        if (TranslateService.cache[lang]) {
            return of(TranslateService.cache[lang]);
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
                    TranslateService.cache[lang] = labels;
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
        // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
        if (key) {
            /** @type {?} */
            var value = null;
            /** @type {?} */
            var labels = TranslateService.cache[TranslateService.lang_];
            // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
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
        var TEMPLATEREGEXP_ = /@([^{}\s]*)/g;
        return value.replace(TEMPLATEREGEXP_, (/**
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
    TranslateService.cache = {};
    TranslateService.lang_ = null;
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
}(IdentityService));
export { TranslateService };
if (false) {
    /** @type {?} */
    TranslateService.cache;
    /** @type {?} */
    TranslateService.lang_;
    /** @type {?} */
    TranslateService.prototype.events;
    /** @type {?} */
    TranslateService.prototype.missingHandler;
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
     * @protected
     */
    TranslateService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRzdEO0lBRzJELDRDQUFrQjtJQXFDNUUsMEJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FFZjtRQUpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUE3QnRCLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxlQUFTLEdBQVEsSUFBSSxlQUFlLENBQU0sU0FBUyxDQUFDLENBQUM7UUFDckQsZ0JBQVUsR0FBZ0MsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUE0QnpFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQzdDLENBQUM7SUFyQ0Qsc0JBQUksd0NBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sZ0JBQWdCLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBVyxrQ0FBSTs7OztRQUFmO1lBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixJQUFZO1lBQzNCLElBQUksSUFB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LElBQUksSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7OztJQUVNLGdEQUFxQjs7O0lBQTVCOztZQUNPLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUzs7WUFDNUIsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQTFLTSxzQkFBSyxHQUFPLEVBQUUsQ0FBQztJQUNmLHNCQUFLLEdBQVcsSUFBSSxDQUFDOztnQkFONUIsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFSa0MsUUFBUTs7OzJCQUQzQztDQXdMQyxBQWpMRCxDQUcyRCxlQUFlLEdBOEt6RTtTQTlLWSxnQkFBZ0I7OztJQUU1Qix1QkFBc0I7O0lBQ3RCLHVCQUE0Qjs7SUFNNUIsa0NBQXNEOztJQUN0RCwwQ0FBaUM7Ozs7O0lBRWpDLHFDQUE2RDs7Ozs7SUFDN0Qsc0NBQTBFOzs7OztJQXlCekUsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2xhdGU+IGV4dGVuZHMgSWRlbnRpdHlTZXJ2aWNlPFQ+IHtcclxuXHJcblx0c3RhdGljIGNhY2hlOiB7fSA9IHt9O1xyXG5cdHN0YXRpYyBsYW5nXzogc3RyaW5nID0gbnVsbDtcclxuXHJcblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XHJcblxyXG5cdHByaXZhdGUgbGFuZ3VhZ2VfOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcclxuXHRwcml2YXRlIGxhbmd1YWdlc186IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG5cclxuXHRwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XHJcblx0XHRpZiAobGFuZyAhPT0gVHJhbnNsYXRlU2VydmljZS5sYW5nXykge1xyXG5cdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfID0gbGFuZztcclxuXHRcdFx0Y29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XHJcblx0XHRcdGlmIChsYW5ndWFnZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZXMuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XHJcblx0XHRcdFx0dGhpcy5sYW5ndWFnZV8ubmV4dChsYW5ndWFnZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8uZ2V0VmFsdWUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2VzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VzXy5nZXRWYWx1ZSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7XHJcblx0XHRzdXBlcihpbmplY3Rvcik7XHJcblx0XHR0aGlzLmxhbmd1YWdlc18ubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9ic2VydmUkKCk6IE9ic2VydmFibGU8e30+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKG5ldyBFcnJvcigpLnN0YWNrKTtcclxuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlXy5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGxhbmd1YWdlOiBhbnkpID0+IHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZ3VhZ2UubGFuZykpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XHJcblx0XHRpZiAoIWxhbmcgfHwgIWxhbmcudHJpbSgpKSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xyXG5cdFx0aWYgKFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbbGFuZ10pIHtcclxuXHRcdFx0cmV0dXJuIG9mKFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbbGFuZ10pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGA/bGFuZz0ke2xhbmd9YCwgeyBsYW5nIH0pLnBpcGUoXHJcblx0XHRcdFx0Ly8gdGFrZSgxKSxcclxuXHRcdFx0XHRtYXAoKHg6IFRyYW5zbGF0ZVtdKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoeC5sZW5ndGggJiYgeFswXSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSB4WzBdLmxhYmVscztcclxuXHRcdFx0XHRcdFx0VHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSA9IGxhYmVscztcclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFiZWxzO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGUoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZScsIGtleSwgVHJhbnNsYXRlU2VydmljZS5jYWNoZSwgVHJhbnNsYXRlU2VydmljZS5sYW5nXyk7XHJcblx0XHRpZiAoa2V5KSB7XHJcblx0XHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblx0XHRcdGxldCBsYWJlbHM6IGFueSA9IFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbVHJhbnNsYXRlU2VydmljZS5sYW5nX107XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdsYWJlbHMnLCBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfLCBUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlLCBsYWJlbHMpO1xyXG5cdFx0XHRpZiAobGFiZWxzKSB7XHJcblx0XHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcclxuXHRcdFx0XHRsZXQgayA9IGtleXMuc2hpZnQoKTtcclxuXHRcdFx0XHR3aGlsZSAoa2V5cy5sZW5ndGggPiAwICYmIGxhYmVsc1trXSkge1xyXG5cdFx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xyXG5cdFx0XHRcdFx0ayA9IGtleXMuc2hpZnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFsdWUgPSBsYWJlbHNba107IC8vIHx8IGB7JHtrfX1gO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlVHJhbnNsYXRlKHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRUcmFuc2xhdGUoa2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcyk7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCB0aGlzLm1pc3NpbmdUcmFuc2xhdGUoa2V5KTtcclxuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLCBwYXJhbXMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBtaXNzaW5nVHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpcy5taXNzaW5nSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyA/XHJcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcclxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGtleTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xyXG5cdFx0Y29uc3QgVEVNUExBVEVSRUdFWFBfOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xyXG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVSRUdFWFBfLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMYW5nKCkgfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlOyAvLyBuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0QnJvd3NlckxhbmcnLCBsYW5nLCBuYXZpZ2F0b3IubGFuZ3VhZ2VzKTtcclxuXHRcdFx0cmV0dXJuIGxhbmc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEZpcnN0QnJvd3NlckxhbmcoKSB7XHJcblx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMb2NhbGUoKTtcclxuXHRcdGlmIChsYW5nKSB7XHJcblx0XHRcdHJldHVybiBsYW5nLnNwbGl0KCctJylbMF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCkge1xyXG5cdFx0Y29uc3QgbmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcjtcclxuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBbJ2xhbmd1YWdlJywgJ2Jyb3dzZXJMYW5ndWFnZScsICdzeXN0ZW1MYW5ndWFnZScsICd1c2VyTGFuZ3VhZ2UnXTtcclxuXHRcdGxldCBsYW5nO1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobmF2aWdhdG9yLmxhbmd1YWdlcykpIHtcclxuXHRcdFx0bGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZXNbMF07XHJcblx0XHR9XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHR3aGlsZSAoIWxhbmcgJiYgaSA8IHByb3BlcnRpZXMubGVuZ3RoKSB7XHJcblx0XHRcdGxhbmcgPSBuYXZpZ2F0b3JbcHJvcGVydGllc1tpXV07XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiBsYW5nO1xyXG5cdH1cclxuXHJcbn1cclxuIl19