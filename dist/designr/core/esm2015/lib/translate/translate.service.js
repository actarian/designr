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
        const TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU1oRCxNQUFNLE9BQU8sZ0JBQXNDLFNBQVEsVUFBYTs7OztJQTRCdkUsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVOztRQXRCdEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFVBQUssR0FBTyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQVEsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsYUFBUSxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGVBQVUsR0FBZ0MsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsY0FBUyxHQUFzQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBa0I3RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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dkIsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsSUFBWTtJQUVsQyxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxJQUFjO0lBRTlCLENBQUM7Ozs7SUFFTSxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7O1lBbklELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVJrQyxRQUFROzs7OztJQWdCMUMsa0NBQXNEOztJQUN0RCwwQ0FBaUM7O0lBQ2pDLGlDQUFzQjs7Ozs7SUFFdEIscUNBQWlEOztJQUNqRCxvQ0FBMEU7Ozs7O0lBQzFFLHNDQUEwRTs7SUFDMUUscUNBQThFOzs7OztJQUU5RSxpQ0FBc0I7Ozs7O0lBYXJCLG9DQUE0Qjs7Ozs7OztBQXVHOUIsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFFBQWtCO0lBQ3ZELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2U8VCBleHRlbmRzIFRyYW5zbGF0ZT4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xuXHR9XG5cblx0Ly8gcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblx0cHVibGljIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXHRwdWJsaWMgY2FjaGU6IHt9ID0ge307XG5cblx0cHJpdmF0ZSBfbGFuZ3VhZ2U6IGFueSA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2xhbmd1YWdlLmFzT2JzZXJ2YWJsZSgpO1xuXHRwcml2YXRlIF9sYW5ndWFnZXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxhbnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXHRwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuX2xhbmd1YWdlcy5hc09ic2VydmFibGUoKTtcblxuXHRwcml2YXRlIF9sYW5nOiBzdHJpbmc7XG5cdHB1YmxpYyBnZXQgbGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLl9sYW5nO1xuXHR9XG5cdHB1YmxpYyBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcblx0XHRpZiAobGFuZyAhPT0gdGhpcy5fbGFuZykge1xuXHRcdFx0dGhpcy5fbGFuZyA9IGxhbmc7XG5cdFx0XHRjb25zdCBsYW5ndWFnZSA9IHRoaXMuX2xhbmd1YWdlcy5nZXRWYWx1ZSgpLmZpbmQoeCA9PiB4LmxhbmcgPT09IGxhbmcpO1xuXHRcdFx0dGhpcy5fbGFuZ3VhZ2UubmV4dChsYW5ndWFnZSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdFx0dGhpcy5fbGFuZ3VhZ2VzLm5leHQodGhpcy5jb25maWcubGFuZ3VhZ2VzKTtcblx0XHR0aGlzLl9sYW5nID0gdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlO1xuXHRcdHRoaXMuZ2V0VHJhbnNsYXRpb24odGhpcy5sYW5nKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG5cdFx0aWYgKCFsYW5nIHx8ICFsYW5nLnRyaW0oKSkge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmcgPSBsYW5nO1xuXHRcdGlmICh0aGlzLmNhY2hlW2xhbmddKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZVtsYW5nXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldCh7IGxhbmcgfSkucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0bWFwKCh4OiBUcmFuc2xhdGVbXSkgPT4ge1xuXHRcdFx0XHRcdGlmICh4WzBdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSB4WzBdLmxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuY2FjaGVbbGFuZ10gPSBsYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGxhYmVscyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFiZWxzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Lypcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ki9cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0bGV0IGxhYmVsczogYW55ID0gdGhpcy5jYWNoZVt0aGlzLmxhbmddO1xuXHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG5cdFx0XHRsZXQgayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdGxhYmVscyA9IGxhYmVsc1trXTtcblx0XHRcdFx0ayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gbGFiZWxzW2tdIHx8IGB7JHtrfX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJzZVRyYW5zbGF0ZSh2YWx1ZSwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcyk7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdUcmFuc2xhdGUoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ1RyYW5zbGF0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Y29uc29sZS5sb2coJ21pc3NpbmdUcmFuc2xhdGUnLCBrZXksIHRoaXMubWlzc2luZ0hhbmRsZXIpO1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ1RyYW5zbGF0ZScsIGtleSk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0BcXHM/KFtee31cXHNdKilcXHM/L2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYUCwgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnaXQnO1xuXHR9XG59XG5cbi8vICEhIVxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbVRyYW5zbGF0ZUxvYWRlcihpbmplY3RvcjogSW5qZWN0b3IpIHtcblx0cmV0dXJuIG5ldyBUcmFuc2xhdGVTZXJ2aWNlKGluamVjdG9yKTtcbn1cbiJdfQ==