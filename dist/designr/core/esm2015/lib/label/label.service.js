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
        this.parsers = {};
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
        const TEMPLATE_REGEXP = /@([^{}\s]*)/g;
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
            /** @type {?} */
            const label = this.cache[key];
            return of(label);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        this.parsers[key] = (label) => this.parseLabel(label, key, defaultValue, params);
        // !!! never reach this, return of(null) ?
        return this.labels$.pipe(map(items => items[key] || null), filter(label => label !== null), 
        // tap(label => console.log('getKey', key, label)),
        map(label => this.parseLabel(label, key, defaultValue, params)), tap(label => this.cache[key] = label));
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
                keys.forEach(x => items[x.id] = this.parsers[x.id](x.value || x.defaultValue || x.id));
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
    /** @type {?} */
    LabelService.prototype.parsers;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUdoRCxNQUFNLE9BQU8sUUFBUTtDQUlwQjs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQU12QixNQUFNLE9BQU8sWUFBOEIsU0FBUSxVQUFhOzs7O0lBaUIvRCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7O1FBWHJCLGtCQUFhLEdBQWlDLEVBQUUsQ0FBQztRQUtsRCxVQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFPLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQXdDLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0QsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXhELENBQUM7Ozs7SUFuQkQsSUFBSSxVQUFVO1FBQ2IsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7O0lBbUJPLFVBQVUsQ0FBQyxLQUFvQixFQUFFLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7UUFDeEYsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2xCLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDckI7UUFD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QUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUFpQyxFQUFFLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QiwwQ0FBMEM7WUFDM0MsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQix3REFBd0Q7Z0JBQ3hELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQ0YsQ0FBQztZQUNGOzs7Ozs7Ozs7Ozs7O2NBYUU7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7OztZQXpJRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFka0MsUUFBUTs7Ozs7Ozs7SUFzQjFDLHFDQUF5RDs7SUFHekQsc0NBQWlDOztJQUVqQyw2QkFBc0I7O0lBQ3RCLCtCQUF3Qjs7Ozs7SUFDeEIsK0JBQXFFOzs7OztJQUNyRSwrQkFBd0Q7Ozs7O0lBR3ZELGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcblxuZXhwb3J0IGNsYXNzIExhYmVsS2V5IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHZhbHVlPzogc3RyaW5nO1xuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsU2VydmljZTxUIGV4dGVuZHMgTGFiZWw+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbGFiZWwnO1xuXHR9XG5cblx0Ly8gISEhIG5ldyBhc3luYyBwaXBlXG5cdHByaXZhdGUgY29sbGVjdGVkS2V5czogeyBba2V5OiBzdHJpbmddOiBMYWJlbEtleTsgfSA9IHt9O1xuXHQvLyBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdHB1YmxpYyBjYWNoZToge30gPSB7fTtcblx0cHVibGljIHBhcnNlcnM6IHt9ID0ge307XG5cdHByaXZhdGUgbGFiZWxzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5taXNzaW5nTGFiZWwoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ0xhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5LCB0aGlzLm1pc3NpbmdIYW5kbGVyKTtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ21pc3NpbmdMYWJlbCcsIGtleSk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0AoW157fVxcc10qKS9nOyAvLyAve3tcXEBcXHM/KFtee31cXHNdKilcXHM/L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0S2V5KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0Y29uc3QgbGFiZWwgPSB0aGlzLmNhY2hlW2tleV07XG5cdFx0XHRyZXR1cm4gb2YobGFiZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jb2xsZWN0ZWRLZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IHsgaWQ6IGtleSwgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUgfSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLnBhcnNlcnNba2V5XSA9IChsYWJlbCkgPT4gdGhpcy5wYXJzZUxhYmVsKGxhYmVsLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHQvLyAhISEgbmV2ZXIgcmVhY2ggdGhpcywgcmV0dXJuIG9mKG51bGwpID9cblx0XHRyZXR1cm4gdGhpcy5sYWJlbHMkLnBpcGUoXG5cdFx0XHRtYXAoaXRlbXMgPT4gaXRlbXNba2V5XSB8fCBudWxsKSxcblx0XHRcdGZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPT0gbnVsbCksXG5cdFx0XHQvLyB0YXAobGFiZWwgPT4gY29uc29sZS5sb2coJ2dldEtleScsIGtleSwgbGFiZWwpKSxcblx0XHRcdG1hcChsYWJlbCA9PiB0aGlzLnBhcnNlTGFiZWwobGFiZWwsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpKSxcblx0XHRcdHRhcChsYWJlbCA9PiB0aGlzLmNhY2hlW2tleV0gPSBsYWJlbCksXG5cdFx0KTtcblx0fVxuXG5cdHJlZ2lzdGVyKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxuXHRcdFx0Ly8gdGhyb3R0bGVUaW1lKDUwMCksXG5cdFx0XHR0YXAoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3RLZXlzKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZSgoa2V5cykgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdGVkJywga2V5cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCgpOiB2b2lkIHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdHRlci5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb2xsZWN0S2V5cygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubWFwKHggPT4gdGhpcy5jb2xsZWN0ZWRLZXlzW3hdKTtcblx0XHR0aGlzLmNvbGxlY3RlZEtleXMgPSB7fTtcblx0XHRpZiAoa2V5cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGtleXM6IExhYmVsS2V5W10pID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RLZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5cykpO1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW1zID0ge307XG5cdFx0XHRcdFx0a2V5cy5mb3JFYWNoKHggPT4gaXRlbXNbeC5pZF0gPSB0aGlzLnBhcnNlcnNbeC5pZF0oeC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSB8fCB4LmlkKSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Lypcblx0XHRcdHJldHVybiB0aGlzLnBvc3QoYC9hcGkvaTE4bi9sYWJlbHNgLCBrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGtleXM6IExhYmVsS2V5W10pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0geC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Ki9cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHR9XG5cdH1cblxufVxuIl19