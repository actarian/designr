/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
export class SlugService extends EntityService {
    constructor() {
        super(...arguments);
        this.collectedKeys = {};
        this.cache = {};
        this.slugs$ = new Subject();
        this.emitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get collection() {
        return `/api/slug`;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getKey(key) {
        if (this.cache.hasOwnProperty(key)) {
            return of(this.cache[key]);
        }
        else {
            // console.log('SlugService.getKey', key);
            Object.defineProperty(this.collectedKeys, key, {
                value: key,
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        // return observable of key
        return this.slugs$.pipe(map(items => items[key]), filter(item => item !== null));
    }
    /**
     * @return {?}
     */
    register() {
        return this.emitter.pipe(
        // throttleTime(500),
        tap(() => {
            this.collectKeys().pipe(first()).subscribe((keys) => {
                // console.log('SlugService.collected', keys);
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
     * @param {?} keys
     * @return {?}
     */
    getSlugs(keys) {
        keys = keys || [];
        return this.statePost(keys).pipe(
        // tap(items => console.log(items)),
        );
    }
    /**
     * @private
     * @return {?}
     */
    collectKeys() {
        this.slugs$.next(this.cache);
        /** @type {?} */
        const keys = Object.keys(this.collectedKeys);
        this.collectedKeys = {};
        return this.getSlugs(keys).pipe(map((items) => {
            /** @type {?} */
            const dictionary = {};
            items.forEach(x => dictionary[x.mnemonic] = [x.slug]);
            return dictionary;
        }), tap((dictionary) => {
            Object.assign(this.cache, dictionary);
            this.slugs$.next(this.cache);
        }));
    }
}
SlugService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.collectedKeys;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.cache;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.slugs$;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.emitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLFdBQVksU0FBUSxhQUE0QjtJQUg3RDs7UUFLUyxrQkFBYSxHQUErQixFQUFFLENBQUM7UUFDL0MsVUFBSyxHQUFpQyxFQUFFLENBQUM7UUFDekMsV0FBTSxHQUEwQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQW9FeEQ7Ozs7SUFsRUEsSUFBSSxVQUFVO1FBQ2IsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ04sMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsMkJBQTJCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQzdCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZCLHFCQUFxQjtRQUNyQixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDdEIsS0FBSyxFQUFFLENBQ1AsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEIsOENBQThDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxJQUFjO1FBQzlCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJO1FBQy9CLG9DQUFvQztTQUNwQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Y0FDdkIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsQ0FBQyxLQUFzQixFQUFFLEVBQUU7O2tCQUN4QixVQUFVLEdBQUcsRUFBRTtZQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sVUFBVSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLFVBQXNDLEVBQUUsRUFBRTtZQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7WUExRUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7Ozs7OztJQUdBLG9DQUF1RDs7Ozs7SUFDdkQsNEJBQWlEOzs7OztJQUNqRCw2QkFBc0U7Ozs7O0lBQ3RFLDhCQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnRJbmRleCB9IGZyb20gJy4uL21vZGVscy9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2x1Z1NlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPERvY3VtZW50SW5kZXg+IHtcblxuXHRwcml2YXRlIGNvbGxlY3RlZEtleXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cdHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0gPSB7fTtcblx0cHJpdmF0ZSBzbHVncyQ6IFN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAvYXBpL3NsdWdgO1xuXHR9XG5cblx0Z2V0S2V5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlW2tleV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnU2x1Z1NlcnZpY2UuZ2V0S2V5Jywga2V5KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZToga2V5LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIHJldHVybiBvYnNlcnZhYmxlIG9mIGtleVxuXHRcdHJldHVybiB0aGlzLnNsdWdzJC5waXBlKFxuXHRcdFx0bWFwKGl0ZW1zID0+IGl0ZW1zW2tleV0pLFxuXHRcdFx0ZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCksXG5cdFx0KTtcblx0fVxuXG5cdHJlZ2lzdGVyKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxuXHRcdFx0Ly8gdGhyb3R0bGVUaW1lKDUwMCksXG5cdFx0XHR0YXAoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3RLZXlzKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZSgoa2V5cykgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnU2VydmljZS5jb2xsZWN0ZWQnLCBrZXlzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0KCk6IHZvaWQge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lbWl0dGVyLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFNsdWdzKGtleXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxEb2N1bWVudEluZGV4W10+IHtcblx0XHRrZXlzID0ga2V5cyB8fCBbXTtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcblx0XHRcdC8vIHRhcChpdGVtcyA9PiBjb25zb2xlLmxvZyhpdGVtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbGxlY3RLZXlzKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHR0aGlzLnNsdWdzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpO1xuXHRcdHRoaXMuY29sbGVjdGVkS2V5cyA9IHt9O1xuXHRcdHJldHVybiB0aGlzLmdldFNsdWdzKGtleXMpLnBpcGUoXG5cdFx0XHRtYXAoKGl0ZW1zOiBEb2N1bWVudEluZGV4W10pID0+IHtcblx0XHRcdFx0Y29uc3QgZGljdGlvbmFyeSA9IHt9O1xuXHRcdFx0XHRpdGVtcy5mb3JFYWNoKHggPT4gZGljdGlvbmFyeVt4Lm1uZW1vbmljXSA9IFt4LnNsdWddKTtcblx0XHRcdFx0cmV0dXJuIGRpY3Rpb25hcnk7XG5cdFx0XHR9KSxcblx0XHRcdHRhcCgoZGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBkaWN0aW9uYXJ5KTtcblx0XHRcdFx0dGhpcy5zbHVncyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=