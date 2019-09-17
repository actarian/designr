/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
export class TranslateService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.events = new EventEmitter();
        this.language_ = new BehaviorSubject(undefined);
        this.languages_ = new BehaviorSubject([]);
        this.cache_ = {};
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
        return this.lang_;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== this.lang_) {
            this.lang_ = lang;
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
        this.lang_ = lang;
        if (this.cache_[lang]) {
            return of(this.cache_[lang]);
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
                    this.cache_[lang] = labels;
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
        // console.log('TranslateService.getTranslate', key, this.cache_, this.lang_);
        if (key) {
            /** @type {?} */
            let value = null;
            /** @type {?} */
            let labels = this.cache_[this.lang_];
            // console.log('labels', this.lang_, this.cache_, labels);
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
        const TEMPLATE_REGEXP = /@([^{}\s]*)/g;
        return value.replace(TEMPLATE_REGEXP, (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFNaEQsTUFBTSxPQUFPLGdCQUFzQyxTQUFRLFVBQWE7Ozs7SUFxQ3ZFLFlBQ1csUUFBa0I7UUFFNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWhDdEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTlDLGNBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUNyRCxlQUFVLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLFdBQU0sR0FBK0IsRUFBRSxDQUFDO1FBNkIvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUF4Q0QsSUFBSSxVQUFVO1FBQ2IsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7O0lBVUQsSUFBVyxJQUFJO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsSUFBVyxJQUFJ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Qzs7WUFDaEYsSUFBSTtRQUNSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7O1lBQ0csQ0FBQyxHQUFHLENBQUM7UUFDVCxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxFQUFFLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7O1lBOUtELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVJrQyxRQUFROzs7OztJQWUxQyxrQ0FBc0Q7O0lBQ3RELDBDQUFpQzs7Ozs7SUFFakMsaUNBQXNCOzs7OztJQUN0QixxQ0FBNkQ7Ozs7O0lBQzdELHNDQUEwRTs7Ozs7SUFDMUUsa0NBQWdEOzs7OztJQTBCL0Msb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2xhdGU+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvdHJhbnNsYXRlJztcblx0fVxuXG5cdHB1YmxpYyBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIGxhbmdfOiBzdHJpbmc7XG5cdHByaXZhdGUgbGFuZ3VhZ2VfOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcblx0cHJpdmF0ZSBsYW5ndWFnZXNfOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0cHJpdmF0ZSBjYWNoZV86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cblx0cHVibGljIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ187XG5cdH1cblxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IHRoaXMubGFuZ18pIHtcblx0XHRcdHRoaXMubGFuZ18gPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdFx0XHRpZiAobGFuZ3VhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlcy5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdFx0dGhpcy5sYW5ndWFnZV8ubmV4dChsYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBsYW5ndWFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2VzKCkge1xuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlc18uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMubGFuZ3VhZ2VzXy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XG5cdH1cblxuXHRwdWJsaWMgb2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlXy5waXBlKFxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gdW5kZWZpbmVkKSxcblx0XHRcdHN3aXRjaE1hcCgobGFuZ3VhZ2U6IGFueSkgPT4gdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5ndWFnZS5sYW5nKSksXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG5cdFx0aWYgKCFsYW5nIHx8ICFsYW5nLnRyaW0oKSkge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmdfID0gbGFuZztcblx0XHRpZiAodGhpcy5jYWNoZV9bbGFuZ10pIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlX1tsYW5nXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChgP2xhbmc9JHtsYW5nfWAsIHsgbGFuZyB9KS5waXBlKFxuXHRcdFx0XHQvLyB0YWtlKDEpLFxuXHRcdFx0XHRtYXAoKHg6IFRyYW5zbGF0ZVtdKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHgubGVuZ3RoICYmIHhbMF0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IHhbMF0ubGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5jYWNoZV9bbGFuZ10gPSBsYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGxhYmVscyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFiZWxzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBsYWJlbCBtYXRjaGluZyBcIiR7bGFuZ31cImApKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRlKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlJywga2V5LCB0aGlzLmNhY2hlXywgdGhpcy5sYW5nXyk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdGxldCBsYWJlbHM6IGFueSA9IHRoaXMuY2FjaGVfW3RoaXMubGFuZ19dO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVscycsIHRoaXMubGFuZ18sIHRoaXMuY2FjaGVfLCBsYWJlbHMpO1xuXHRcdFx0aWYgKGxhYmVscykge1xuXHRcdFx0XHRjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuXHRcdFx0XHRsZXQgayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdFx0d2hpbGUgKGtleXMubGVuZ3RoID4gMCAmJiBsYWJlbHNba10pIHtcblx0XHRcdFx0XHRsYWJlbHMgPSBsYWJlbHNba107XG5cdFx0XHRcdFx0ayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YWx1ZSA9IGxhYmVsc1trXTsgLy8gfHwgYHske2t9fWA7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVRyYW5zbGF0ZSh2YWx1ZSwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHRyYW5zZm9ybShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5nZXRUcmFuc2xhdGUoa2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcyk7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVRyYW5zbGF0ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCB0aGlzLm1pc3NpbmdUcmFuc2xhdGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ1RyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMubWlzc2luZ0hhbmRsZXIpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgdGhpcy5taXNzaW5nSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdHRoaXMubWlzc2luZ0hhbmRsZXIoa2V5KSA6XG5cdFx0XHRcdHRoaXMubWlzc2luZ0hhbmRsZXI7XG5cdFx0fVxuXHRcdHJldHVybiBrZXk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlUGFyYW1zKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogYW55KTogc3RyaW5nIHtcblx0XHRjb25zdCBURU1QTEFURV9SRUdFWFA6IFJlZ0V4cCA9IC9AKFtee31cXHNdKikvZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIHNldERlZmF1bHRMYW5nKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgYWRkTGFuZ3MobGFuZzogc3RyaW5nW10pIHtcblxuXHR9XG5cblx0cHVibGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGxhbmcgPSB0aGlzLmdldEZpcnN0QnJvd3NlckxhbmcoKSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7IC8vIG5hdmlnYXRvci5sYW5ndWFnZXMgPyBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3JbJ3VzZXJMYW5ndWFnZSddIHx8IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnZ2V0QnJvd3NlckxhbmcnLCBsYW5nLCBuYXZpZ2F0b3IubGFuZ3VhZ2VzKTtcblx0XHRcdHJldHVybiBsYW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRGaXJzdEJyb3dzZXJMYW5nKCkge1xuXHRcdGNvbnN0IGxhbmcgPSB0aGlzLmdldEZpcnN0QnJvd3NlckxvY2FsZSgpO1xuXHRcdGlmIChsYW5nKSB7XG5cdFx0XHRyZXR1cm4gbGFuZy5zcGxpdCgnLScpWzBdO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRGaXJzdEJyb3dzZXJMb2NhbGUoKSB7XG5cdFx0Y29uc3QgbmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcjtcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gWydsYW5ndWFnZScsICdicm93c2VyTGFuZ3VhZ2UnLCAnc3lzdGVtTGFuZ3VhZ2UnLCAndXNlckxhbmd1YWdlJ107XG5cdFx0bGV0IGxhbmc7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobmF2aWdhdG9yLmxhbmd1YWdlcykpIHtcblx0XHRcdGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdO1xuXHRcdH1cblx0XHRsZXQgaSA9IDA7XG5cdFx0d2hpbGUgKCFsYW5nICYmIGkgPCBwcm9wZXJ0aWVzLmxlbmd0aCkge1xuXHRcdFx0bGFuZyA9IG5hdmlnYXRvcltwcm9wZXJ0aWVzW2ldXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0cmV0dXJuIGxhbmc7XG5cdH1cblxufVxuIl19