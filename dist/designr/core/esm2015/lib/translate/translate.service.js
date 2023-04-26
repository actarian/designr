/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IdentityService } from '../models/identity.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
export class TranslateService extends IdentityService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.events = new EventEmitter();
        this.language_ = new BehaviorSubject(undefined);
        this.languages_ = new BehaviorSubject([]);
        this.languages_.next(this.config.languages);
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/translate';
    }
    /**
     * @return {?}
     */
    get lang() {
        return TranslateService.lang_;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== TranslateService.lang_) {
            TranslateService.lang_ = lang;
            /** @type {?} */
            const languages = this.languages_.getValue();
            if (languages.length) {
                /** @type {?} */
                const language = languages.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.lang === lang));
                this.language_.next(language);
            }
        }
    }
    /**
     * @return {?}
     */
    get language() {
        return this.language_.getValue();
    }
    /**
     * @return {?}
     */
    get languages() {
        return this.languages_.getValue();
    }
    /**
     * @return {?}
     */
    observe$() {
        // console.log(new Error().stack);
        return this.language_.pipe(filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== undefined)), switchMap((/**
         * @param {?} language
         * @return {?}
         */
        (language) => this.getTranslation(language.lang))));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        if (!lang || !lang.trim()) {
            return of(null);
        }
        TranslateService.lang_ = lang;
        if (TranslateService.cache[lang]) {
            return of(TranslateService.cache[lang]);
        }
        else {
            return this.get(`?lang=${lang}`, { lang }).pipe(
            // take(1),
            map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                if (x.length && x[0]) {
                    /** @type {?} */
                    const labels = x[0].labels;
                    TranslateService.cache[lang] = labels;
                    this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            })));
        }
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getTranslate(key, defaultValue, params) {
        // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
        if (key) {
            /** @type {?} */
            let value = null;
            /** @type {?} */
            let labels = TranslateService.cache[TranslateService.lang_];
            // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
            if (labels) {
                /** @type {?} */
                const keys = key.split('.');
                /** @type {?} */
                let k = keys.shift();
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
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    transform(key, defaultValue, params) {
        /** @type {?} */
        const value = this.getTranslate(key, defaultValue, params);
        return value;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    parseTranslate(value, key, defaultValue, params) {
        if (value == null) {
            return defaultValue || this.missingTranslate(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    missingTranslate(key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    parseParams(value, params) {
        /** @type {?} */
        const TEMPLATEREGEXP_ = /@([^{}\s]*)/g;
        return value.replace(TEMPLATEREGEXP_, (/**
         * @param {?} text
         * @param {?} key
         * @return {?}
         */
        (text, key) => {
            /** @type {?} */
            const replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        }));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    addLangs(lang) {
    }
    /**
     * @return {?}
     */
    getBrowserLang() {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const lang = this.getFirstBrowserLang() || this.config.defaultLanguage;
            // console.log('getBrowserLang', lang, navigator.languages);
            return lang;
        }
        else {
            return this.config.defaultLanguage;
        }
    }
    /**
     * @return {?}
     */
    getFirstBrowserLang() {
        /** @type {?} */
        const lang = this.getFirstBrowserLocale();
        if (lang) {
            return lang.split('-')[0];
        }
    }
    /**
     * @return {?}
     */
    getFirstBrowserLocale() {
        /** @type {?} */
        const navigator = window.navigator;
        /** @type {?} */
        const properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        /** @type {?} */
        let lang;
        if (Array.isArray(navigator.languages)) {
            lang = navigator.languages[0];
        }
        /** @type {?} */
        let i = 0;
        while (!lang && i < properties.length) {
            lang = navigator[properties[i]];
            i++;
        }
        return lang;
    }
}
TranslateService.cache = {};
TranslateService.lang_ = null;
TranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFNN0QsTUFBTSxPQUFPLGdCQUFzQyxTQUFRLGVBQWtCOzs7O0lBcUM1RSxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7UUE3QnRCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxjQUFTLEdBQVEsSUFBSSxlQUFlLENBQU0sU0FBUyxDQUFDLENBQUM7UUFDckQsZUFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQTRCekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBckNELElBQUksVUFBVTtRQUNiLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7OztJQVFELElBQVcsSUFBSTtRQUNkLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsSUFBWTtRQUMzQixJQUFJLElB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QWMsQ0FBQzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7QUExS00sc0JBQUssR0FBTyxFQUFFLENBQUM7QUFDZixzQkFBSyxHQUFXLElBQUksQ0FBQzs7WUFONUIsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUmtDLFFBQVE7Ozs7O0lBVzFDLHVCQUFzQjs7SUFDdEIsdUJBQTRCOztJQU01QixrQ0FBc0Q7O0lBQ3RELDBDQUFpQzs7Ozs7SUFFakMscUNBQTZEOzs7OztJQUM3RCxzQ0FBMEU7Ozs7O0lBeUJ6RSxvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJZGVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2U8VCBleHRlbmRzIFRyYW5zbGF0ZT4gZXh0ZW5kcyBJZGVudGl0eVNlcnZpY2U8VD4ge1xyXG5cclxuXHRzdGF0aWMgY2FjaGU6IHt9ID0ge307XHJcblx0c3RhdGljIGxhbmdfOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpL3RyYW5zbGF0ZSc7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcclxuXHJcblx0cHJpdmF0ZSBsYW5ndWFnZV86IGFueSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih1bmRlZmluZWQpO1xyXG5cdHByaXZhdGUgbGFuZ3VhZ2VzXzogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcblxyXG5cdHB1YmxpYyBnZXQgbGFuZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ187XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcclxuXHRcdGlmIChsYW5nICE9PSBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfKSB7XHJcblx0XHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xyXG5cdFx0XHRjb25zdCBsYW5ndWFnZXMgPSB0aGlzLmxhbmd1YWdlc18uZ2V0VmFsdWUoKTtcclxuXHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlcy5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcclxuXHRcdFx0XHR0aGlzLmxhbmd1YWdlXy5uZXh0KGxhbmd1YWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBsYW5ndWFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlXy5nZXRWYWx1ZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBsYW5ndWFnZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHRcdHRoaXMubGFuZ3VhZ2VzXy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7fT4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2cobmV3IEVycm9yKCkuc3RhY2spO1xyXG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLnBpcGUoXHJcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCksXHJcblx0XHRcdHN3aXRjaE1hcCgobGFuZ3VhZ2U6IGFueSkgPT4gdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5ndWFnZS5sYW5nKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcclxuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdFx0VHJhbnNsYXRlU2VydmljZS5sYW5nXyA9IGxhbmc7XHJcblx0XHRpZiAoVHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSkge1xyXG5cdFx0XHRyZXR1cm4gb2YoVHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoYD9sYW5nPSR7bGFuZ31gLCB7IGxhbmcgfSkucGlwZShcclxuXHRcdFx0XHQvLyB0YWtlKDEpLFxyXG5cdFx0XHRcdG1hcCgoeDogVHJhbnNsYXRlW10pID0+IHtcclxuXHRcdFx0XHRcdGlmICh4Lmxlbmd0aCAmJiB4WzBdKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IHhbMF0ubGFiZWxzO1xyXG5cdFx0XHRcdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddID0gbGFiZWxzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGxhYmVscyk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsYWJlbHM7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBsYWJlbCBtYXRjaGluZyBcIiR7bGFuZ31cImApKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlJywga2V5LCBUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlLCBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfKTtcclxuXHRcdGlmIChrZXkpIHtcclxuXHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHRcdFx0bGV0IGxhYmVsczogYW55ID0gVHJhbnNsYXRlU2VydmljZS5jYWNoZVtUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfXTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVscycsIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18sIFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUsIGxhYmVscyk7XHJcblx0XHRcdGlmIChsYWJlbHMpIHtcclxuXHRcdFx0XHRjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xyXG5cdFx0XHRcdGxldCBrID0ga2V5cy5zaGlmdCgpO1xyXG5cdFx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XHJcblx0XHRcdFx0XHRsYWJlbHMgPSBsYWJlbHNba107XHJcblx0XHRcdFx0XHRrID0ga2V5cy5zaGlmdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YWx1ZSA9IGxhYmVsc1trXTsgLy8gfHwgYHske2t9fWA7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VUcmFuc2xhdGUodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHRyYW5zZm9ybShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFRyYW5zbGF0ZShrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VUcmFuc2xhdGUodmFsdWU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHRoaXMubWlzc2luZ1RyYW5zbGF0ZShrZXkpO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG1pc3NpbmdUcmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMubWlzc2luZ0hhbmRsZXIpIHtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cclxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxyXG5cdFx0XHRcdHRoaXMubWlzc2luZ0hhbmRsZXI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ga2V5O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XHJcblx0XHRjb25zdCBURU1QTEFURVJFR0VYUF86IFJlZ0V4cCA9IC9AKFtee31cXHNdKikvZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XHJcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURVJFR0VYUF8sICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkTGFuZ3MobGFuZzogc3RyaW5nW10pIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGNvbnN0IGxhbmcgPSB0aGlzLmdldEZpcnN0QnJvd3NlckxhbmcoKSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7IC8vIG5hdmlnYXRvci5sYW5ndWFnZXMgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3JbJ3VzZXJMYW5ndWFnZSddIHx8IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZSk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRCcm93c2VyTGFuZycsIGxhbmcsIG5hdmlnYXRvci5sYW5ndWFnZXMpO1xyXG5cdFx0XHRyZXR1cm4gbGFuZztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHtcclxuXHRcdGNvbnN0IGxhbmcgPSB0aGlzLmdldEZpcnN0QnJvd3NlckxvY2FsZSgpO1xyXG5cdFx0aWYgKGxhbmcpIHtcclxuXHRcdFx0cmV0dXJuIGxhbmcuc3BsaXQoJy0nKVswXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRGaXJzdEJyb3dzZXJMb2NhbGUoKSB7XHJcblx0XHRjb25zdCBuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xyXG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddO1xyXG5cdFx0bGV0IGxhbmc7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IubGFuZ3VhZ2VzKSkge1xyXG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlc1swXTtcclxuXHRcdH1cclxuXHRcdGxldCBpID0gMDtcclxuXHRcdHdoaWxlICghbGFuZyAmJiBpIDwgcHJvcGVydGllcy5sZW5ndGgpIHtcclxuXHRcdFx0bGFuZyA9IG5hdmlnYXRvcltwcm9wZXJ0aWVzW2ldXTtcclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxhbmc7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=