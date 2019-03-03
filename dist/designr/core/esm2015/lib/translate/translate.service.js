/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
        // private cache: { [key: string]: string; } = {};
        this.events = new EventEmitter();
        this.cache = {};
        this._language = new BehaviorSubject({});
        this.language = this._language.asObservable();
        this._languages = new BehaviorSubject([]);
        this.languages = this._languages.asObservable();
        this._languages.next(this.config.languages);
        this._lang = this.config.defaultLanguage;
        this.getTranslation(this.lang).subscribe(x => {
            // console.log(x);
        });
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
        return this._lang;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            /** @type {?} */
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
        }
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        if (!lang || !lang.trim()) {
            return of(null);
        }
        this.lang = lang;
        if (this.cache[lang]) {
            return of(this.cache[lang]);
        }
        else {
            return this.get({ lang }).pipe(take(1), map((x) => {
                if (x[0]) {
                    /** @type {?} */
                    const labels = x[0].labels;
                    this.cache[lang] = labels;
                    this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getTranslate(key, defaultValue, params) {
        /** @type {?} */
        let value = null;
        /** @type {?} */
        let labels = this.cache[this.lang];
        if (labels) {
            /** @type {?} */
            const keys = key.split('.');
            /** @type {?} */
            let k = keys.shift();
            while (keys.length > 0 && labels[k]) {
                labels = labels[k];
                k = keys.shift();
            }
            value = labels[k] || `{${k}}`;
        }
        return this.parseTranslate(value, key, defaultValue, params);
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
            value = defaultValue;
        }
        if (value == null) {
            return this.missingTranslate(key);
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
        console.log('missingTranslate', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        console.log('missingTranslate', key);
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
        return value.replace(TEMPLATE_REGEXP, (text, key) => {
            /** @type {?} */
            const replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
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
        return 'it';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU1oRCxNQUFNLE9BQU8sZ0JBQXNDLFNBQVEsVUFBYTs7OztJQTRCdkUsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVOztRQXRCdEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFVBQUssR0FBTyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQVEsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsYUFBUSxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGVBQVUsR0FBZ0MsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsY0FBUyxHQUFzQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBa0I3RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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LENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLElBQVk7SUFFbEMsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsSUFBYztJQUU5QixDQUFDOzs7O0lBRU0sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OztZQW5JRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFSa0MsUUFBUTs7Ozs7SUFnQjFDLGtDQUFzRDs7SUFDdEQsMENBQWlDOztJQUNqQyxpQ0FBc0I7Ozs7O0lBRXRCLHFDQUFpRDs7SUFDakQsb0NBQTBFOzs7OztJQUMxRSxzQ0FBMEU7O0lBQzFFLHFDQUE4RTs7Ozs7SUFFOUUsaUNBQXNCOzs7OztJQWFyQixvQ0FBNEI7Ozs7Ozs7QUF1RzlCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxRQUFrQjtJQUN2RCxPQUFPLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2xhdGU+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvdHJhbnNsYXRlJztcblx0fVxuXG5cdC8vIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cdHB1YmxpYyBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblx0cHVibGljIGNhY2hlOiB7fSA9IHt9O1xuXG5cdHByaXZhdGUgX2xhbmd1YWdlOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9sYW5ndWFnZS5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZ3VhZ2VzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLl9sYW5ndWFnZXMuYXNPYnNlcnZhYmxlKCk7XG5cblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nO1xuXHRwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdHRoaXMuX2xhbmcgPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMuX2xhbmd1YWdlcy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XG5cdFx0dGhpcy5fbGFuZyA9IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTtcblx0XHR0aGlzLmdldFRyYW5zbGF0aW9uKHRoaXMubGFuZykuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coeCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5nID0gbGFuZztcblx0XHRpZiAodGhpcy5jYWNoZVtsYW5nXSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVbbGFuZ10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoeyBsYW5nIH0pLnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdG1hcCgoeDogVHJhbnNsYXRlW10pID0+IHtcblx0XHRcdFx0XHRpZiAoeFswXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0geFswXS5sYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmNhY2hlW2xhbmddID0gbGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhYmVscztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdC8qXG5cdFx0XHRcdHRhcCh4ID0+IHtcblx0XHRcdFx0XHQvLyB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGxhYmVsIG1hdGNoaW5nIFwiJHtsYW5nfVwiYCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdCovXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGUoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRsZXQgdmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBsYWJlbHM6IGFueSA9IHRoaXMuY2FjaGVbdGhpcy5sYW5nXTtcblx0XHRpZiAobGFiZWxzKSB7XG5cdFx0XHRjb25zdCBrZXlzOiBzdHJpbmdbXSA9IGtleS5zcGxpdCgnLicpO1xuXHRcdFx0bGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHR3aGlsZSAoa2V5cy5sZW5ndGggPiAwICYmIGxhYmVsc1trXSkge1xuXHRcdFx0XHRsYWJlbHMgPSBsYWJlbHNba107XG5cdFx0XHRcdGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IGxhYmVsc1trXSB8fCBgeyR7a319YDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucGFyc2VUcmFuc2xhdGUodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVRyYW5zbGF0ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5taXNzaW5nVHJhbnNsYXRlKGtleSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIG1pc3NpbmdUcmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnNvbGUubG9nKCdtaXNzaW5nVHJhbnNsYXRlJywga2V5LCB0aGlzLm1pc3NpbmdIYW5kbGVyKTtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ21pc3NpbmdUcmFuc2xhdGUnLCBrZXkpO1xuXHRcdHJldHVybiBrZXk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlUGFyYW1zKHZhbHVlOiBzdHJpbmcsIHBhcmFtczogYW55KTogc3RyaW5nIHtcblx0XHRjb25zdCBURU1QTEFURV9SRUdFWFA6IFJlZ0V4cCA9IC9AKFtee31cXHNdKikvZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHVzZShsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIHNldERlZmF1bHRMYW5nKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgYWRkTGFuZ3MobGFuZzogc3RyaW5nW10pIHtcblxuXHR9XG5cblx0cHVibGljIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdpdCc7XG5cdH1cbn1cblxuLy8gISEhXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tVHJhbnNsYXRlTG9hZGVyKGluamVjdG9yOiBJbmplY3Rvcikge1xuXHRyZXR1cm4gbmV3IFRyYW5zbGF0ZVNlcnZpY2UoaW5qZWN0b3IpO1xufVxuIl19