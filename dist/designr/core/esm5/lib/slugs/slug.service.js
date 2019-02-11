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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVncy9zbHVnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RDtJQUdpQyx1Q0FBNEI7SUFIN0Q7UUFBQSxxRUE0RUM7UUF2RVEsbUJBQWEsR0FBK0IsRUFBRSxDQUFDO1FBQy9DLFdBQUssR0FBaUMsRUFBRSxDQUFDO1FBQ3pDLFlBQU0sR0FBMEMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5RCxhQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0tBb0V4RDtJQWxFQSxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNOLDBDQUEwQztZQUMxQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO2dCQUM5QyxLQUFLLEVBQUUsR0FBRztnQkFDVixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELDJCQUEyQjtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxDQUFDLEVBQ3hCLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxJQUFJLEVBQWIsQ0FBYSxDQUFDLENBQzdCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUN2QixxQkFBcUI7UUFDckIsR0FBRyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDdEIsS0FBSyxFQUFFLENBQ1AsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNoQiw4Q0FBOEM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELDZCQUFPOzs7SUFBUDtRQUNDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7SUFDRixDQUFDOzs7Ozs7SUFFTyw4QkFBUTs7Ozs7SUFBaEIsVUFBaUIsSUFBYztRQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtRQUMvQixvQ0FBb0M7U0FDcEMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRU8saUNBQVc7Ozs7SUFBbkI7UUFBQSxpQkFlQztRQWRBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDdkIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsVUFBQyxLQUFzQjs7Z0JBQ3BCLFVBQVUsR0FBRyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7WUFDdEQsT0FBTyxVQUFVLENBQUM7UUFDbkIsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUMsVUFBc0M7WUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Z0JBMUVELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OztzQkFSRDtDQWtGQyxBQTVFRCxDQUdpQyxhQUFhLEdBeUU3QztTQXpFWSxXQUFXOzs7Ozs7SUFFdkIsb0NBQXVEOzs7OztJQUN2RCw0QkFBaUQ7Ozs7O0lBQ2pELDZCQUFzRTs7Ozs7SUFDdEUsOEJBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudEluZGV4IH0gZnJvbSAnLi4vbW9kZWxzL2RvY3VtZW50JztcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8RG9jdW1lbnRJbmRleD4ge1xuXG5cdHByaXZhdGUgY29sbGVjdGVkS2V5czogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblx0cHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfSA9IHt9O1xuXHRwcml2YXRlIHNsdWdzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYC9hcGkvc2x1Z2A7XG5cdH1cblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVba2V5XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnU2VydmljZS5nZXRLZXknLCBrZXkpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY29sbGVjdGVkS2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiBrZXksXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5jYWNoZVtrZXldID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gcmV0dXJuIG9ic2VydmFibGUgb2Yga2V5XG5cdFx0cmV0dXJuIHRoaXMuc2x1Z3MkLnBpcGUoXG5cdFx0XHRtYXAoaXRlbXMgPT4gaXRlbXNba2V5XSksXG5cdFx0XHRmaWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0cmVnaXN0ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHQvLyB0aHJvdHRsZVRpbWUoNTAwKSxcblx0XHRcdHRhcCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdEtleXMoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKChrZXlzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1NsdWdTZXJ2aWNlLmNvbGxlY3RlZCcsIGtleXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QoKTogdm9pZCB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVtaXR0ZXIuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2x1Z3Moa2V5czogc3RyaW5nW10pOiBPYnNlcnZhYmxlPERvY3VtZW50SW5kZXhbXT4ge1xuXHRcdGtleXMgPSBrZXlzIHx8IFtdO1xuXHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxuXHRcdFx0Ly8gdGFwKGl0ZW1zID0+IGNvbnNvbGUubG9nKGl0ZW1zKSksXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29sbGVjdEtleXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdHRoaXMuc2x1Z3MkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cyk7XG5cdFx0dGhpcy5jb2xsZWN0ZWRLZXlzID0ge307XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U2x1Z3Moa2V5cykucGlwZShcblx0XHRcdG1hcCgoaXRlbXM6IERvY3VtZW50SW5kZXhbXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkaWN0aW9uYXJ5ID0ge307XG5cdFx0XHRcdGl0ZW1zLmZvckVhY2goeCA9PiBkaWN0aW9uYXJ5W3gubW5lbW9uaWNdID0gW3guc2x1Z10pO1xuXHRcdFx0XHRyZXR1cm4gZGljdGlvbmFyeTtcblx0XHRcdH0pLFxuXHRcdFx0dGFwKChkaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGRpY3Rpb25hcnkpO1xuXHRcdFx0XHR0aGlzLnNsdWdzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==