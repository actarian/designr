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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7QUFNN0QsTUFBTSxPQUFPLGdCQUFzQyxTQUFRLGVBQWtCOzs7O0lBcUM1RSxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7UUE3QnRCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc5QyxjQUFTLEdBQVEsSUFBSSxlQUFlLENBQU0sU0FBUyxDQUFDLENBQUM7UUFDckQsZUFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQTRCekUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBckNELElBQUksVUFBVTtRQUNiLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7OztJQVFELElBQVcsSUFBSTtRQUNkLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBQ0QsSUFBVyxJQUFJLENBQUMsSUFBWTtRQUMzQixJQUFJLElB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QWMsQ0FBQzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7QUExS00sc0JBQUssR0FBTyxFQUFFLENBQUM7QUFDZixzQkFBSyxHQUFXLElBQUksQ0FBQzs7WUFONUIsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUmtDLFFBQVE7Ozs7O0lBVzFDLHVCQUFzQjs7SUFDdEIsdUJBQTRCOztJQU01QixrQ0FBc0Q7O0lBQ3RELDBDQUFpQzs7Ozs7SUFFakMscUNBQTZEOzs7OztJQUM3RCxzQ0FBMEU7Ozs7O0lBeUJ6RSxvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2xhdGU+IGV4dGVuZHMgSWRlbnRpdHlTZXJ2aWNlPFQ+IHtcblxuXHRzdGF0aWMgY2FjaGU6IHt9ID0ge307XG5cdHN0YXRpYyBsYW5nXzogc3RyaW5nID0gbnVsbDtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xuXHR9XG5cblx0cHVibGljIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdHByaXZhdGUgbGFuZ3VhZ2VfOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcblx0cHJpdmF0ZSBsYW5ndWFnZXNfOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuXHRwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gVHJhbnNsYXRlU2VydmljZS5sYW5nXztcblx0fVxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18pIHtcblx0XHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdFx0XHRpZiAobGFuZ3VhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlcy5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdFx0dGhpcy5sYW5ndWFnZV8ubmV4dChsYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBsYW5ndWFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2VzKCkge1xuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlc18uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMubGFuZ3VhZ2VzXy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XG5cdH1cblxuXHRwdWJsaWMgb2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKG5ldyBFcnJvcigpLnN0YWNrKTtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8ucGlwZShcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCksXG5cdFx0XHRzd2l0Y2hNYXAoKGxhbmd1YWdlOiBhbnkpID0+IHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZ3VhZ2UubGFuZykpLFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdFx0VHJhbnNsYXRlU2VydmljZS5sYW5nXyA9IGxhbmc7XG5cdFx0aWYgKFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbbGFuZ10pIHtcblx0XHRcdHJldHVybiBvZihUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGA/bGFuZz0ke2xhbmd9YCwgeyBsYW5nIH0pLnBpcGUoXG5cdFx0XHRcdC8vIHRha2UoMSksXG5cdFx0XHRcdG1hcCgoeDogVHJhbnNsYXRlW10pID0+IHtcblx0XHRcdFx0XHRpZiAoeC5sZW5ndGggJiYgeFswXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0geFswXS5sYWJlbHM7XG5cdFx0XHRcdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddID0gbGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhYmVscztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZScsIGtleSwgVHJhbnNsYXRlU2VydmljZS5jYWNoZSwgVHJhbnNsYXRlU2VydmljZS5sYW5nXyk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdGxldCBsYWJlbHM6IGFueSA9IFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbVHJhbnNsYXRlU2VydmljZS5sYW5nX107XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnbGFiZWxzJywgVHJhbnNsYXRlU2VydmljZS5sYW5nXywgVHJhbnNsYXRlU2VydmljZS5jYWNoZSwgbGFiZWxzKTtcblx0XHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcblx0XHRcdFx0bGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xuXHRcdFx0XHRcdGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSBsYWJlbHNba107IC8vIHx8IGB7JHtrfX1gO1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VUcmFuc2xhdGUodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VUcmFuc2xhdGUodmFsdWU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUgfHwgdGhpcy5taXNzaW5nVHJhbnNsYXRlKGtleSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIG1pc3NpbmdUcmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVSRUdFWFBfOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFUkVHRVhQXywgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMYW5nKCkgfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlOyAvLyBuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEJyb3dzZXJMYW5nJywgbGFuZywgbmF2aWdhdG9yLmxhbmd1YWdlcyk7XG5cdFx0XHRyZXR1cm4gbGFuZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHtcblx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMb2NhbGUoKTtcblx0XHRpZiAobGFuZykge1xuXHRcdFx0cmV0dXJuIGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCkge1xuXHRcdGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddO1xuXHRcdGxldCBsYW5nO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG5hdmlnYXRvci5sYW5ndWFnZXMpKSB7XG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlc1swXTtcblx0XHR9XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlICghbGFuZyAmJiBpIDwgcHJvcGVydGllcy5sZW5ndGgpIHtcblx0XHRcdGxhbmcgPSBuYXZpZ2F0b3JbcHJvcGVydGllc1tpXV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9XG5cbn1cbiJdfQ==