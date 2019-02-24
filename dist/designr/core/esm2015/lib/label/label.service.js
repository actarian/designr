/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, filter, first, map, tap } from 'rxjs/operators';
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
        // !!! new async pipe
        this.collectedKeys = {};
        this.cache = {};
        this.labels$ = new Subject();
        this.emitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/label';
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
        console.log('parseLabel', value, key, defaultValue, params);
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
        console.log('missingLabel', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        console.log('missingLabel', key);
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
            return this.statePost(keys).pipe(map((keys) => {
                // console.log('LabelService.collectKeys', JSON.stringify(keys));
                /** @type {?} */
                const items = {};
                keys.forEach(x => items[x.id] = x.value || x.defaultValue || x.id);
                return items;
            }), tap((items) => {
                Object.assign(this.cache, items);
                this.labels$.next(this.cache);
                // console.log('collectKeys', this.cache);
            }), catchError(error => {
                // console.log('LabelService.collectKeys.error', error);
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
    LabelService.prototype.collectedKeys;
    /** @type {?} */
    LabelService.prototype.missingHandler;
    /** @type {?} */
    LabelService.prototype.cache;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdoRCxNQUFNLE9BQU8sUUFBUTtDQUlwQjs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQU12QixNQUFNLE9BQU8sWUFBOEIsU0FBUSxVQUFhOzs7O0lBZ0IvRCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7O1FBVnJCLGtCQUFhLEdBQWlDLEVBQUUsQ0FBQztRQUtsRCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUF3QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU14RCxDQUFDOzs7O0lBbEJELElBQUksVUFBVTtRQUNiLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7OztJQWtCTyxVQUFVLENBQUMsS0FBb0IsRUFBRSxHQUFXLEVBQUUsWUFBcUIsRUFBRSxNQUFZO1FBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUks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eEQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FDRixDQUFDO1lBQ0Y7Ozs7Ozs7Ozs7Ozs7Y0FhRTtTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7O1lBcklELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWRrQyxRQUFROzs7Ozs7OztJQXNCMUMscUNBQXlEOztJQUd6RCxzQ0FBaUM7O0lBRWpDLDZCQUFzQjs7Ozs7SUFDdEIsK0JBQXFFOzs7OztJQUNyRSwrQkFBd0Q7Ozs7O0lBR3ZELGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcblxuZXhwb3J0IGNsYXNzIExhYmVsS2V5IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHZhbHVlPzogc3RyaW5nO1xuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsU2VydmljZTxUIGV4dGVuZHMgTGFiZWw+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbGFiZWwnO1xuXHR9XG5cblx0Ly8gISEhIG5ldyBhc3luYyBwaXBlXG5cdHByaXZhdGUgY29sbGVjdGVkS2V5czogeyBba2V5OiBzdHJpbmddOiBMYWJlbEtleTsgfSA9IHt9O1xuXHQvLyBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdHB1YmxpYyBjYWNoZToge30gPSB7fTtcblx0cHJpdmF0ZSBsYWJlbHMkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUxhYmVsKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGNvbnNvbGUubG9nKCdwYXJzZUxhYmVsJywgdmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdMYWJlbChrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nTGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnNvbGUubG9nKCdtaXNzaW5nTGFiZWwnLCBrZXksIHRoaXMubWlzc2luZ0hhbmRsZXIpO1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5KTtcblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQFxccz8oW157fVxcc10qKVxccz8vZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVba2V5XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmxhYmVscyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldIHx8IG51bGwpLFxuXHRcdFx0ZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9PSBudWxsKSxcblx0XHRcdC8vIHRhcChsYWJlbCA9PiBjb25zb2xlLmxvZygnZ2V0S2V5Jywga2V5LCBsYWJlbCkpLFxuXHRcdFx0bWFwKGxhYmVsID0+IHRoaXMucGFyc2VMYWJlbChsYWJlbCwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRyZWdpc3RlcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdC8vIHRocm90dGxlVGltZSg1MDApLFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0S2V5cygpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoKGtleXMpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RlZCcsIGtleXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QoKTogdm9pZCB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVtaXR0ZXIuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29sbGVjdEtleXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLm1hcCh4ID0+IHRoaXMuY29sbGVjdGVkS2V5c1t4XSk7XG5cdFx0dGhpcy5jb2xsZWN0ZWRLZXlzID0ge307XG5cdFx0aWYgKGtleXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcblx0XHRcdFx0bWFwKChrZXlzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cycsIEpTT04uc3RyaW5naWZ5KGtleXMpKTtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0geC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSB8fCB4LmlkKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQvKlxuXHRcdFx0cmV0dXJuIHRoaXMucG9zdChgL2FwaS9pMThuL2xhYmVsc2AsIGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW1zID0ge307XG5cdFx0XHRcdFx0a2V5cy5mb3JFYWNoKHggPT4gaXRlbXNbeC5pZF0gPSB4LnZhbHVlIHx8IHguZGVmYXVsdFZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQqL1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=