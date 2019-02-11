/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, filter, first, map, take, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
export class LabelKey {
}
if (false) {
    /** @type {?} */
    LabelKey.prototype.id;
    /** @type {?} */
    LabelKey.prototype.value;
    /** @type {?} */
    LabelKey.prototype.defaultValue;
}
/**
 * @template T
 */
export class LabelService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._language = new BehaviorSubject({});
        this.language = this._language.asObservable();
        this._languages = new BehaviorSubject([]);
        this.languages = this._languages.asObservable();
        this.events = new EventEmitter();
        this.cache = {};
        // !!! new async pipe
        this.collectedKeys = {};
        // private cache: { [key: string]: string; } = {};
        this.labels$ = new Subject();
        this.emitter = new EventEmitter();
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
        return '/api/label';
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
    getLabel(key, defaultValue, params) {
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
        return this.parseLabel(value, key, defaultValue, params);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    parseLabel(value, key, defaultValue, params) {
        if (value == null) {
            value = defaultValue;
        }
        if (value == null) {
            return this.missingLabel(key);
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
    missingLabel(key) {
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
        const TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
        return value.replace(TEMPLATE_REGEXP, (text, key) => {
            /** @type {?} */
            const replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    }
    //
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getKey(key, defaultValue, params) {
        if (this.cache.hasOwnProperty(key)) {
            return of(this.cache[key]);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        return this.labels$.pipe(map(items => items[key] || null), filter(label => label !== null), 
        // tap(label => console.log('getKey', key, label)),
        map(label => this.parseLabel(label, key, defaultValue, params)));
    }
    /**
     * @return {?}
     */
    register() {
        return this.emitter.pipe(
        // throttleTime(500),
        tap(() => {
            this.collectKeys().pipe(first()).subscribe((keys) => {
                // console.log('LabelService.collected', keys);
            });
        }));
    }
    /**
     * @return {?}
     */
    collect() {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    }
    /**
     * @private
     * @return {?}
     */
    collectKeys() {
        /** @type {?} */
        const keys = Object.keys(this.collectedKeys).map(x => this.collectedKeys[x]);
        this.collectedKeys = {};
        if (keys.length) {
            // console.log('LabelService.collectKeys', JSON.stringify(keys));
            return this.statePost(`/api/i18n/labels`, keys).pipe(map((keys) => {
                /** @type {?} */
                const items = {};
                keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                return items;
            }), tap((items) => {
                Object.assign(this.cache, items);
                this.labels$.next(this.cache);
                // console.log('collectKeys', this.cache);
            }), catchError(error => {
                console.log('LabelService.collectKeys.error', error);
                return of({});
            }));
            /*
            return this.post(`/api/i18n/labels`, keys).pipe(
                map((keys: LabelKey[]) => {
                    const items = {};
                    keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                    return items;
                }),
                tap((items: { [key: string]: string; }) => {
                    Object.assign(this.cache, items);
                    this.labels$.next(this.cache);
                    // console.log('collectKeys', this.cache);
                }),
            );
            */
        }
        else {
            return of({});
        }
    }
}
LabelService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ LabelService.ngInjectableDef = i0.defineInjectable({ factory: function LabelService_Factory() { return new LabelService(i0.inject(i0.INJECTOR)); }, token: LabelService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._language;
    /** @type {?} */
    LabelService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._languages;
    /** @type {?} */
    LabelService.prototype.languages;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._lang;
    /** @type {?} */
    LabelService.prototype.events;
    /** @type {?} */
    LabelService.prototype.missingHandler;
    /** @type {?} */
    LabelService.prototype.cache;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.collectedKeys;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.labels$;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.emitter;
    /**
     * @type {?}
     * @protected
     */
    LabelService.prototype.injector;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function CustomTranslateLoader(injector) {
    return new LabelService(injector);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdoRCxNQUFNLE9BQU8sUUFBUTtDQUlwQjs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQU12QixNQUFNLE9BQU8sWUFBOEIsU0FBUSxVQUFhOzs7O0lBaUMvRCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7UUE1QnJCLGNBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxhQUFRLEdBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEUsZUFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxjQUFTLEdBQXNCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFjdkUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFVBQUssR0FBTyxFQUFFLENBQUM7O1FBR2Qsa0JBQWEsR0FBaUMsRUFBRSxDQUFDOztRQUVqRCxZQUFPLEdBQXdDLElBQUksT0FBTyxFQUFF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QUM7Z0JBQzlCLDBDQUEwQztZQUMzQyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQ0YsQ0FBQztZQUNGOzs7Ozs7Ozs7Ozs7O2NBYUU7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7OztZQXRNRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFka0MsUUFBUTs7Ozs7Ozs7SUFxQjFDLGlDQUFpRDs7SUFDakQsZ0NBQTBFOzs7OztJQUMxRSxrQ0FBMEU7O0lBQzFFLGlDQUE4RTs7Ozs7SUFFOUUsNkJBQXNCOztJQVl0Qiw4QkFBc0Q7O0lBQ3RELHNDQUFpQzs7SUFDakMsNkJBQXNCOzs7OztJQUd0QixxQ0FBeUQ7Ozs7O0lBRXpELCtCQUFxRTs7Ozs7SUFDckUsK0JBQXdEOzs7OztJQUd2RCxnQ0FBNEI7Ozs7OztBQXFLOUIsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFFBQWtCO0lBQ3ZELE9BQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgZmlyc3QsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgTGFiZWxLZXkge1xuXHRpZD86IHN0cmluZztcblx0dmFsdWU/OiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxTZXJ2aWNlPFQgZXh0ZW5kcyBMYWJlbD4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9sYWJlbCc7XG5cdH1cblxuXHRwcml2YXRlIF9sYW5ndWFnZTogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fbGFuZ3VhZ2UuYXNPYnNlcnZhYmxlKCk7XG5cdHByaXZhdGUgX2xhbmd1YWdlczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cdHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5fbGFuZ3VhZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdHByaXZhdGUgX2xhbmc6IHN0cmluZztcblx0cHVibGljIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX2xhbmc7XG5cdH1cblx0cHVibGljIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSB0aGlzLl9sYW5nKSB7XG5cdFx0XHR0aGlzLl9sYW5nID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fbGFuZ3VhZ2VzLmdldFZhbHVlKCkuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHR0aGlzLl9sYW5ndWFnZS5uZXh0KGxhbmd1YWdlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZXZlbnRzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cdHB1YmxpYyBjYWNoZToge30gPSB7fTtcblxuXHQvLyAhISEgbmV3IGFzeW5jIHBpcGVcblx0cHJpdmF0ZSBjb2xsZWN0ZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IExhYmVsS2V5OyB9ID0ge307XG5cdC8vIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cdHByaXZhdGUgbGFiZWxzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHR0aGlzLl9sYW5ndWFnZXMubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xuXHRcdHRoaXMuX2xhbmcgPSB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0dGhpcy5nZXRUcmFuc2xhdGlvbih0aGlzLmxhbmcpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcblx0XHRpZiAoIWxhbmcgfHwgIWxhbmcudHJpbSgpKSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZyA9IGxhbmc7XG5cdFx0aWYgKHRoaXMuY2FjaGVbbGFuZ10pIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlW2xhbmddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KHsgbGFuZyB9KS5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHRtYXAoKHg6IExhYmVsW10pID0+IHtcblx0XHRcdFx0XHRpZiAoeFswXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0geFswXS5sYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmNhY2hlW2xhbmddID0gbGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhYmVscztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdC8qXG5cdFx0XHRcdHRhcCh4ID0+IHtcblx0XHRcdFx0XHQvLyB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGxhYmVsIG1hdGNoaW5nIFwiJHtsYW5nfVwiYCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdCovXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRMYWJlbChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0bGV0IGxhYmVsczogYW55ID0gdGhpcy5jYWNoZVt0aGlzLmxhbmddO1xuXHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG5cdFx0XHRsZXQgayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdGxhYmVscyA9IGxhYmVsc1trXTtcblx0XHRcdFx0ayA9IGtleXMuc2hpZnQoKTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gbGFiZWxzW2tdIHx8IGB7JHtrfX1gO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5wYXJzZUxhYmVsKHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5taXNzaW5nTGFiZWwoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ0xhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0BcXHM/KFtee31cXHNdKilcXHM/L2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYUCwgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdC8vXG5cblx0Z2V0S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVba2V5XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmxhYmVscyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldIHx8IG51bGwpLFxuXHRcdFx0ZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9PSBudWxsKSxcblx0XHRcdC8vIHRhcChsYWJlbCA9PiBjb25zb2xlLmxvZygnZ2V0S2V5Jywga2V5LCBsYWJlbCkpLFxuXHRcdFx0bWFwKGxhYmVsID0+IHRoaXMucGFyc2VMYWJlbChsYWJlbCwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRyZWdpc3RlcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdC8vIHRocm90dGxlVGltZSg1MDApLFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0S2V5cygpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoKGtleXMpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RlZCcsIGtleXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QoKTogdm9pZCB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVtaXR0ZXIuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29sbGVjdEtleXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLm1hcCh4ID0+IHRoaXMuY29sbGVjdGVkS2V5c1t4XSk7XG5cdFx0dGhpcy5jb2xsZWN0ZWRLZXlzID0ge307XG5cdFx0aWYgKGtleXMubGVuZ3RoKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RLZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5cykpO1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGAvYXBpL2kxOG4vbGFiZWxzYCwga2V5cykucGlwZShcblx0XHRcdFx0bWFwKChrZXlzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHgudmFsdWUgfHwgeC5kZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtcztcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgoaXRlbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBpdGVtcyk7XG5cdFx0XHRcdFx0dGhpcy5sYWJlbHMkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbGxlY3RLZXlzJywgdGhpcy5jYWNoZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RLZXlzLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiBvZih7fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdC8qXG5cdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGAvYXBpL2kxOG4vbGFiZWxzYCwga2V5cykucGlwZShcblx0XHRcdFx0bWFwKChrZXlzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHgudmFsdWUgfHwgeC5kZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtcztcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgoaXRlbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBpdGVtcyk7XG5cdFx0XHRcdFx0dGhpcy5sYWJlbHMkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbGxlY3RLZXlzJywgdGhpcy5jYWNoZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdCovXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZih7fSk7XG5cdFx0fVxuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbVRyYW5zbGF0ZUxvYWRlcihpbmplY3RvcjogSW5qZWN0b3IpIHtcblx0cmV0dXJuIG5ldyBMYWJlbFNlcnZpY2UoaW5qZWN0b3IpO1xufVxuXG4iXX0=