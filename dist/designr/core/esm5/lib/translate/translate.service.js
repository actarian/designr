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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRzdEO0lBRzJELDRDQUFrQjtJQXFDNUUsMEJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FFZjtRQUpVLGNBQVEsR0FBUixRQUFRLENBQVU7UUE3QnRCLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxlQUFTLEdBQVEsSUFBSSxlQUFlLENBQU0sU0FBUyxDQUFDLENBQUM7UUFDckQsZ0JBQVUsR0FBZ0MsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUE0QnpFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQzdDLENBQUM7SUFyQ0Qsc0JBQUksd0NBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sZ0JBQWdCLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBVyxrQ0FBSTs7OztRQUFmO1lBQ0MsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFDRCxVQUFnQixJQUFZO1lBQzNCLElBQUksSUFB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LElBQUksSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7OztJQUVNLGdEQUFxQjs7O0lBQTVCOztZQUNPLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUzs7WUFDNUIsVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQTFLTSxzQkFBSyxHQUFPLEVBQUUsQ0FBQztJQUNmLHNCQUFLLEdBQVcsSUFBSSxDQUFDOztnQkFONUIsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFSa0MsUUFBUTs7OzJCQUQzQztDQXdMQyxBQWpMRCxDQUcyRCxlQUFlLEdBOEt6RTtTQTlLWSxnQkFBZ0I7OztJQUU1Qix1QkFBc0I7O0lBQ3RCLHVCQUE0Qjs7SUFNNUIsa0NBQXNEOztJQUN0RCwwQ0FBaUM7Ozs7O0lBRWpDLHFDQUE2RDs7Ozs7SUFDN0Qsc0NBQTBFOzs7OztJQXlCekUsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElkZW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZTxUIGV4dGVuZHMgVHJhbnNsYXRlPiBleHRlbmRzIElkZW50aXR5U2VydmljZTxUPiB7XG5cblx0c3RhdGljIGNhY2hlOiB7fSA9IHt9O1xuXHRzdGF0aWMgbGFuZ186IHN0cmluZyA9IG51bGw7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvdHJhbnNsYXRlJztcblx0fVxuXG5cdHB1YmxpYyBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIGxhbmd1YWdlXzogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHVuZGVmaW5lZCk7XG5cdHByaXZhdGUgbGFuZ3VhZ2VzXzogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cblx0cHVibGljIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ187XG5cdH1cblx0cHVibGljIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfKSB7XG5cdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VzXy5nZXRWYWx1ZSgpO1xuXHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZXMuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHRcdHRoaXMubGFuZ3VhZ2VfLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGxhbmd1YWdlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHR0aGlzLmxhbmd1YWdlc18ubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xuXHR9XG5cblx0cHVibGljIG9ic2VydmUkKCk6IE9ic2VydmFibGU8e30+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhuZXcgRXJyb3IoKS5zdGFjayk7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLnBpcGUoXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0c3dpdGNoTWFwKChsYW5ndWFnZTogYW55KSA9PiB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmd1YWdlLmxhbmcpKSxcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcblx0XHRpZiAoIWxhbmcgfHwgIWxhbmcudHJpbSgpKSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xuXHRcdGlmIChUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddKSB7XG5cdFx0XHRyZXR1cm4gb2YoVHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChgP2xhbmc9JHtsYW5nfWAsIHsgbGFuZyB9KS5waXBlKFxuXHRcdFx0XHQvLyB0YWtlKDEpLFxuXHRcdFx0XHRtYXAoKHg6IFRyYW5zbGF0ZVtdKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHgubGVuZ3RoICYmIHhbMF0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IHhbMF0ubGFiZWxzO1xuXHRcdFx0XHRcdFx0VHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSA9IGxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQobGFiZWxzKTtcblx0XHRcdFx0XHRcdHJldHVybiBsYWJlbHM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGxhYmVsIG1hdGNoaW5nIFwiJHtsYW5nfVwiYCkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGUoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGUnLCBrZXksIFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUsIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18pO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0XHRsZXQgbGFiZWxzOiBhbnkgPSBUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW1RyYW5zbGF0ZVNlcnZpY2UubGFuZ19dO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVscycsIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18sIFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUsIGxhYmVscyk7XG5cdFx0XHRpZiAobGFiZWxzKSB7XG5cdFx0XHRcdGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG5cdFx0XHRcdGxldCBrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0XHR3aGlsZSAoa2V5cy5sZW5ndGggPiAwICYmIGxhYmVsc1trXSkge1xuXHRcdFx0XHRcdGxhYmVscyA9IGxhYmVsc1trXTtcblx0XHRcdFx0XHRrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gbGFiZWxzW2tdOyAvLyB8fCBgeyR7a319YDtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhcnNlVHJhbnNsYXRlKHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFRyYW5zbGF0ZShrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHRoaXMubWlzc2luZ1RyYW5zbGF0ZShrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nVHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFUkVHRVhQXzogUmVnRXhwID0gL0AoW157fVxcc10qKS9nOyAvLyAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURVJFR0VYUF8sICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcgPyByZXBsYWNlciA6IHRleHQ7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRMYW5ncyhsYW5nOiBzdHJpbmdbXSkge1xuXG5cdH1cblxuXHRwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgbGFuZyA9IHRoaXMuZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHx8IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTsgLy8gbmF2aWdhdG9yLmxhbmd1YWdlcyA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ10gfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRCcm93c2VyTGFuZycsIGxhbmcsIG5hdmlnYXRvci5sYW5ndWFnZXMpO1xuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldEZpcnN0QnJvd3NlckxhbmcoKSB7XG5cdFx0Y29uc3QgbGFuZyA9IHRoaXMuZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCk7XG5cdFx0aWYgKGxhbmcpIHtcblx0XHRcdHJldHVybiBsYW5nLnNwbGl0KCctJylbMF07XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldEZpcnN0QnJvd3NlckxvY2FsZSgpIHtcblx0XHRjb25zdCBuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBbJ2xhbmd1YWdlJywgJ2Jyb3dzZXJMYW5ndWFnZScsICdzeXN0ZW1MYW5ndWFnZScsICd1c2VyTGFuZ3VhZ2UnXTtcblx0XHRsZXQgbGFuZztcblx0XHRpZiAoQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IubGFuZ3VhZ2VzKSkge1xuXHRcdFx0bGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZXNbMF07XG5cdFx0fVxuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoIWxhbmcgJiYgaSA8IHByb3BlcnRpZXMubGVuZ3RoKSB7XG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yW3Byb3BlcnRpZXNbaV1dO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFuZztcblx0fVxuXG59XG4iXX0=