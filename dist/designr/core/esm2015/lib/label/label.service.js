/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, delay, filter, first, map, tap } from 'rxjs/operators';
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
        // console.log('missingLabel', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        // console.log('missingLabel', key);
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
     * @return {?}
     */
    register() {
        return this.emitter.pipe(
        // throttleTime(500),
        tap((/**
         * @return {?}
         */
        () => {
            this.collectKeys().pipe(first()).subscribe((/**
             * @param {?} keys
             * @return {?}
             */
            (keys) => {
                // console.log('LabelService.collected', keys);
            }));
        })));
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
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getKey(key, defaultValue, params) {
        // console.log('LabelService.getKey', key);
        if (this.cache.hasOwnProperty(key)) {
            /** @type {?} */
            const label = this.cache[key];
            return of(label).pipe(delay(1));
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        this.parsers[key] = (/**
         * @param {?} label
         * @return {?}
         */
        (label) => this.parseLabel(label, key, defaultValue, params));
        // !!! never reach this, return of(null) ?
        return this.labels$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        items => items[key] || null)), filter((/**
         * @param {?} label
         * @return {?}
         */
        label => label !== null)), 
        // tap(label => console.log('getKey', key, label)),
        map((/**
         * @param {?} label
         * @return {?}
         */
        label => this.parseLabel(label, key, defaultValue, params))), tap((/**
         * @param {?} label
         * @return {?}
         */
        label => this.cache[key] = label)));
    }
    /**
     * @private
     * @return {?}
     */
    collectKeys() {
        /** @type {?} */
        const keys = Object.keys(this.collectedKeys).map((/**
         * @param {?} x
         * @return {?}
         */
        x => this.collectedKeys[x]));
        // console.log('LabelService.collectKeys', keys);
        this.collectedKeys = {};
        if (keys.length) {
            return this.statePost(keys).pipe(map((/**
             * @param {?} keys
             * @return {?}
             */
            (keys) => {
                // console.log('LabelService.collectKeys', JSON.stringify(keys));
                /** @type {?} */
                const items = {};
                keys.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => items[x.id] = this.parsers[x.id](x.value || x.defaultValue || x.id)));
                return items;
            })), tap((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                Object.assign(this.cache, items);
                this.labels$.next(this.cache);
                // console.log('collectKeys', this.cache);
            })), 
            // shareReplay(),
            catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                // console.log('LabelService.collectKeys.error', error);
                return of({});
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLFFBQVE7Q0FJcEI7OztJQUhBLHNCQUFZOztJQUNaLHlCQUFlOztJQUNmLGdDQUFzQjs7Ozs7QUFNdkIsTUFBTSxPQUFPLFlBQThCLFNBQVEsVUFBYTs7OztJQWlCL0QsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVOztRQVhyQixrQkFBYSxHQUFpQyxFQUFFLENBQUM7UUFLbEQsVUFBSyxHQUFPLEVBQUUsQ0FBQztRQUNmLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUF3QyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzdELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU14RCxDQUFDOzs7O0lBbkJELElBQUksVUFBVTtRQUNiLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7OztJQW1CTyxVQUFVLENBQUMsS0FBb0IsRUFBRSxHQUFXLEVBQUUsWUFBcUIsRUFBRSxNQUFZO1FBQ3hGLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNsQixLQUFLLEdBQUcsWUFBWSxDQUFD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SyxDQUFDO1lBQ2QsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztZQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFO2dCQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsMENBQTBDO1lBQzNDLENBQUMsRUFBQztZQUNGLGlCQUFpQjtZQUNqQixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLHdEQUF3RDtnQkFDeEQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUMsQ0FDRixDQUFDO1lBQ0Y7Ozs7Ozs7Ozs7Ozs7Y0FhRTtTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7O1lBOUlELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWRrQyxRQUFROzs7Ozs7OztJQXNCMUMscUNBQXlEOztJQUd6RCxzQ0FBaUM7O0lBRWpDLDZCQUFzQjs7SUFDdEIsK0JBQXdCOzs7OztJQUN4QiwrQkFBcUU7Ozs7O0lBQ3JFLCtCQUF3RDs7Ozs7SUFHdkQsZ0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlbGF5LCBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcblxuZXhwb3J0IGNsYXNzIExhYmVsS2V5IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHZhbHVlPzogc3RyaW5nO1xuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsU2VydmljZTxUIGV4dGVuZHMgTGFiZWw+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbGFiZWwnO1xuXHR9XG5cblx0Ly8gISEhIG5ldyBhc3luYyBwaXBlXG5cdHByaXZhdGUgY29sbGVjdGVkS2V5czogeyBba2V5OiBzdHJpbmddOiBMYWJlbEtleTsgfSA9IHt9O1xuXHQvLyBwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdHB1YmxpYyBjYWNoZToge30gPSB7fTtcblx0cHVibGljIHBhcnNlcnM6IHt9ID0ge307XG5cdHByaXZhdGUgbGFiZWxzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5taXNzaW5nTGFiZWwoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ0xhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHQvLyBjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5LCB0aGlzLm1pc3NpbmdIYW5kbGVyKTtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ21pc3NpbmdMYWJlbCcsIGtleSk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0AoW157fVxcc10qKS9nOyAvLyAve3tcXEBcXHM/KFtee31cXHNdKilcXHM/L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0cmVnaXN0ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHQvLyB0aHJvdHRsZVRpbWUoNTAwKSxcblx0XHRcdHRhcCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdEtleXMoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKChrZXlzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0ZWQnLCBrZXlzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0KCk6IHZvaWQge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lbWl0dGVyLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmdldEtleScsIGtleSk7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0Y29uc3QgbGFiZWwgPSB0aGlzLmNhY2hlW2tleV07XG5cdFx0XHRyZXR1cm4gb2YobGFiZWwpLnBpcGUoXG5cdFx0XHRcdGRlbGF5KDEpXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jb2xsZWN0ZWRLZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IHsgaWQ6IGtleSwgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUgfSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLnBhcnNlcnNba2V5XSA9IChsYWJlbCkgPT4gdGhpcy5wYXJzZUxhYmVsKGxhYmVsLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHQvLyAhISEgbmV2ZXIgcmVhY2ggdGhpcywgcmV0dXJuIG9mKG51bGwpID9cblx0XHRyZXR1cm4gdGhpcy5sYWJlbHMkLnBpcGUoXG5cdFx0XHRtYXAoaXRlbXMgPT4gaXRlbXNba2V5XSB8fCBudWxsKSxcblx0XHRcdGZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPT0gbnVsbCksXG5cdFx0XHQvLyB0YXAobGFiZWwgPT4gY29uc29sZS5sb2coJ2dldEtleScsIGtleSwgbGFiZWwpKSxcblx0XHRcdG1hcChsYWJlbCA9PiB0aGlzLnBhcnNlTGFiZWwobGFiZWwsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpKSxcblx0XHRcdHRhcChsYWJlbCA9PiB0aGlzLmNhY2hlW2tleV0gPSBsYWJlbCksXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29sbGVjdEtleXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLm1hcCh4ID0+IHRoaXMuY29sbGVjdGVkS2V5c1t4XSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cycsIGtleXMpO1xuXHRcdHRoaXMuY29sbGVjdGVkS2V5cyA9IHt9O1xuXHRcdGlmIChrZXlzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzKSk7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHRoaXMucGFyc2Vyc1t4LmlkXSh4LnZhbHVlIHx8IHguZGVmYXVsdFZhbHVlIHx8IHguaWQpKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Ly8gc2hhcmVSZXBsYXkoKSxcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQvKlxuXHRcdFx0cmV0dXJuIHRoaXMucG9zdChgL2FwaS9pMThuL2xhYmVsc2AsIGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW1zID0ge307XG5cdFx0XHRcdFx0a2V5cy5mb3JFYWNoKHggPT4gaXRlbXNbeC5pZF0gPSB4LnZhbHVlIHx8IHguZGVmYXVsdFZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQqL1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=