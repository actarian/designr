/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.slugs$.pipe(map(function (items) { return items[key]; }), filter(function (item) { return item !== null; }));
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
        tap(function () {
            _this.collectKeys().pipe(first()).subscribe(function (keys) {
                // console.log('SlugService.collected', keys);
            });
        }));
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
        return this.getSlugs(keys).pipe(map(function (items) {
            /** @type {?} */
            var dictionary = {};
            items.forEach(function (x) { return dictionary[x.mnemonic] = [x.slug]; });
            return dictionary;
        }), tap(function (dictionary) {
            Object.assign(_this.cache, dictionary);
            _this.slugs$.next(_this.cache);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpEO0lBR2lDLHVDQUE0QjtJQUg3RDtRQUFBLHFFQTRFQztRQXZFUSxtQkFBYSxHQUErQixFQUFFLENBQUM7UUFDL0MsV0FBSyxHQUFpQyxFQUFFLENBQUM7UUFDekMsWUFBTSxHQUEwQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlELGFBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7S0FvRXhEO0lBbEVBLHNCQUFJLG1DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ04sMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsMkJBQTJCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLENBQUMsRUFDeEIsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLElBQUksRUFBYixDQUFhLENBQUMsQ0FDN0IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZBLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZCLHFCQUFxQjtRQUNyQixHQUFHLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUN0QixLQUFLLEVBQUUsQ0FDUCxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7Z0JBQ2hCLDhDQUE4QztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsNkJBQU87OztJQUFQO1FBQ0MsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtJQUNGLENBQUM7Ozs7OztJQUVPLDhCQUFROzs7OztJQUFoQixVQUFpQixJQUFjO1FBQzlCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJO1FBQy9CLG9DQUFvQztTQUNwQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpQ0FBVzs7OztJQUFuQjtRQUFBLGlCQWVDO1FBZEEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxVQUFDLEtBQXNCOztnQkFDcEIsVUFBVSxHQUFHLEVBQUU7WUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztZQUN0RCxPQUFPLFVBQVUsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsVUFBQyxVQUFzQztZQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOztnQkExRUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7O3NCQVJEO0NBa0ZDLEFBNUVELENBR2lDLGFBQWEsR0F5RTdDO1NBekVZLFdBQVc7Ozs7OztJQUV2QixvQ0FBdUQ7Ozs7O0lBQ3ZELDRCQUFpRDs7Ozs7SUFDakQsNkJBQXNFOzs7OztJQUN0RSw4QkFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50SW5kZXggfSBmcm9tICcuLi9tb2RlbHMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxEb2N1bWVudEluZGV4PiB7XG5cblx0cHJpdmF0ZSBjb2xsZWN0ZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXHRwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdOyB9ID0ge307XG5cdHByaXZhdGUgc2x1Z3MkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0+ID0gbmV3IFN1YmplY3QoKTtcblx0cHJpdmF0ZSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgL2FwaS9zbHVnYDtcblx0fVxuXG5cdGdldEtleShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZVtrZXldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1NsdWdTZXJ2aWNlLmdldEtleScsIGtleSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jb2xsZWN0ZWRLZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IGtleSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyByZXR1cm4gb2JzZXJ2YWJsZSBvZiBrZXlcblx0XHRyZXR1cm4gdGhpcy5zbHVncyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldKSxcblx0XHRcdGZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpLFxuXHRcdCk7XG5cdH1cblxuXHRyZWdpc3RlcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdC8vIHRocm90dGxlVGltZSg1MDApLFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0S2V5cygpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoKGtleXMpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnU2x1Z1NlcnZpY2UuY29sbGVjdGVkJywga2V5cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCgpOiB2b2lkIHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdHRlci5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbHVncyhrZXlzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8RG9jdW1lbnRJbmRleFtdPiB7XG5cdFx0a2V5cyA9IGtleXMgfHwgW107XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHQvLyB0YXAoaXRlbXMgPT4gY29uc29sZS5sb2coaXRlbXMpKSxcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb2xsZWN0S2V5cygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0dGhpcy5zbHVncyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKTtcblx0XHR0aGlzLmNvbGxlY3RlZEtleXMgPSB7fTtcblx0XHRyZXR1cm4gdGhpcy5nZXRTbHVncyhrZXlzKS5waXBlKFxuXHRcdFx0bWFwKChpdGVtczogRG9jdW1lbnRJbmRleFtdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRpY3Rpb25hcnkgPSB7fTtcblx0XHRcdFx0aXRlbXMuZm9yRWFjaCh4ID0+IGRpY3Rpb25hcnlbeC5tbmVtb25pY10gPSBbeC5zbHVnXSk7XG5cdFx0XHRcdHJldHVybiBkaWN0aW9uYXJ5O1xuXHRcdFx0fSksXG5cdFx0XHR0YXAoKGRpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgZGljdGlvbmFyeSk7XG5cdFx0XHRcdHRoaXMuc2x1Z3MkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19