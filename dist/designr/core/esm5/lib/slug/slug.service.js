/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
var SlugService = /** @class */ (function (_super) {
    tslib_1.__extends(SlugService, _super);
    function SlugService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collectedKeys = {};
        _this.cache = {};
        _this.slugs$ = new Subject();
        _this.emitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SlugService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return "/api/slug";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    SlugService.prototype.getKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
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
        return this.slugs$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return items[key]; })), filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item !== null; })));
    };
    /**
     * @return {?}
     */
    SlugService.prototype.register = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.emitter.pipe(
        // throttleTime(500),
        tap((/**
         * @return {?}
         */
        function () {
            _this.collectKeys().pipe(first()).subscribe((/**
             * @param {?} keys
             * @return {?}
             */
            function (keys) {
                // console.log('SlugService.collected', keys);
            }));
        })));
    };
    /**
     * @return {?}
     */
    SlugService.prototype.collect = /**
     * @return {?}
     */
    function () {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    };
    /**
     * @private
     * @param {?} keys
     * @return {?}
     */
    SlugService.prototype.getSlugs = /**
     * @private
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        keys = keys || [];
        return this.statePost(keys).pipe(
        // tap(items => console.log(items)),
        );
    };
    /**
     * @private
     * @return {?}
     */
    SlugService.prototype.collectKeys = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.slugs$.next(this.cache);
        /** @type {?} */
        var keys = Object.keys(this.collectedKeys);
        this.collectedKeys = {};
        return this.getSlugs(keys).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            /** @type {?} */
            var dictionary = {};
            items.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return dictionary[x.mnemonic] = [x.slug]; }));
            return dictionary;
        })), tap((/**
         * @param {?} dictionary
         * @return {?}
         */
        function (dictionary) {
            Object.assign(_this.cache, dictionary);
            _this.slugs$.next(_this.cache);
        })));
    };
    SlugService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
    return SlugService;
}(EntityService));
export { SlugService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpEO0lBR2lDLHVDQUE0QjtJQUg3RDtRQUFBLHFFQTRFQztRQXZFUSxtQkFBYSxHQUErQixFQUFFLENBQUM7UUFDL0MsV0FBSyxHQUFpQyxFQUFFLENBQUM7UUFDekMsWUFBTSxHQUEwQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlELGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7S0FvRXhEO0lBbEVBLHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ04sMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsMkJBQTJCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQUMsRUFDeEIsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLElBQUksRUFBYixDQUFhLEVBQUMsQ0FDN0IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZBLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZCLHFCQUFxQjtRQUNyQixHQUFHOzs7UUFBQztZQUNILEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ3RCLEtBQUssRUFBRSxDQUNQLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBSTtnQkFDaEIsOENBQThDO1lBQy9DLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw2QkFBTzs7O0lBQVA7UUFDQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sOEJBQVE7Ozs7O0lBQWhCLFVBQWlCLElBQWM7UUFDOUIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7UUFDL0Isb0NBQW9DO1NBQ3BDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVPLGlDQUFXOzs7O0lBQW5CO1FBQUEsaUJBZUM7UUFkQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3ZCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRzs7OztRQUFDLFVBQUMsS0FBc0I7O2dCQUNwQixVQUFVLEdBQUcsRUFBRTtZQUNyQixLQUFLLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUFDO1lBQ3RELE9BQU8sVUFBVSxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLFVBQXNDO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7O2dCQTFFRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7c0JBUkQ7Q0FrRkMsQUE1RUQsQ0FHaUMsYUFBYSxHQXlFN0M7U0F6RVksV0FBVzs7Ozs7O0lBRXZCLG9DQUF1RDs7Ozs7SUFDdkQsNEJBQWlEOzs7OztJQUNqRCw2QkFBc0U7Ozs7O0lBQ3RFLDhCQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnRJbmRleCB9IGZyb20gJy4uL21vZGVscy9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2x1Z1NlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPERvY3VtZW50SW5kZXg+IHtcblxuXHRwcml2YXRlIGNvbGxlY3RlZEtleXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cdHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0gPSB7fTtcblx0cHJpdmF0ZSBzbHVncyQ6IFN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAvYXBpL3NsdWdgO1xuXHR9XG5cblx0Z2V0S2V5KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlW2tleV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnU2x1Z1NlcnZpY2UuZ2V0S2V5Jywga2V5KTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZToga2V5LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIHJldHVybiBvYnNlcnZhYmxlIG9mIGtleVxuXHRcdHJldHVybiB0aGlzLnNsdWdzJC5waXBlKFxuXHRcdFx0bWFwKGl0ZW1zID0+IGl0ZW1zW2tleV0pLFxuXHRcdFx0ZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbnVsbCksXG5cdFx0KTtcblx0fVxuXG5cdHJlZ2lzdGVyKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxuXHRcdFx0Ly8gdGhyb3R0bGVUaW1lKDUwMCksXG5cdFx0XHR0YXAoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3RLZXlzKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZSgoa2V5cykgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnU2VydmljZS5jb2xsZWN0ZWQnLCBrZXlzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0KCk6IHZvaWQge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lbWl0dGVyLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFNsdWdzKGtleXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxEb2N1bWVudEluZGV4W10+IHtcblx0XHRrZXlzID0ga2V5cyB8fCBbXTtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcblx0XHRcdC8vIHRhcChpdGVtcyA9PiBjb25zb2xlLmxvZyhpdGVtcykpLFxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbGxlY3RLZXlzKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHR0aGlzLnNsdWdzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpO1xuXHRcdHRoaXMuY29sbGVjdGVkS2V5cyA9IHt9O1xuXHRcdHJldHVybiB0aGlzLmdldFNsdWdzKGtleXMpLnBpcGUoXG5cdFx0XHRtYXAoKGl0ZW1zOiBEb2N1bWVudEluZGV4W10pID0+IHtcblx0XHRcdFx0Y29uc3QgZGljdGlvbmFyeSA9IHt9O1xuXHRcdFx0XHRpdGVtcy5mb3JFYWNoKHggPT4gZGljdGlvbmFyeVt4Lm1uZW1vbmljXSA9IFt4LnNsdWddKTtcblx0XHRcdFx0cmV0dXJuIGRpY3Rpb25hcnk7XG5cdFx0XHR9KSxcblx0XHRcdHRhcCgoZGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBkaWN0aW9uYXJ5KTtcblx0XHRcdFx0dGhpcy5zbHVncyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=