/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.slugs$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        items => items[key])), filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item !== null)));
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
                // console.log('SlugService.collected', keys);
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
        return this.getSlugs(keys).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            /** @type {?} */
            const dictionary = {};
            items.forEach((/**
             * @param {?} x
             * @return {?}
             */
            x => dictionary[x.mnemonic] = [x.slug]));
            return dictionary;
        })), tap((/**
         * @param {?} dictionary
         * @return {?}
         */
        (dictionary) => {
            Object.assign(this.cache, dictionary);
            this.slugs$.next(this.cache);
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLFdBQVksU0FBUSxhQUE0QjtJQUg3RDs7UUFLUyxrQkFBYSxHQUErQixFQUFFLENBQUM7UUFDL0MsVUFBSyxHQUFpQyxFQUFFLENBQUM7UUFDekMsV0FBTSxHQUEwQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQW9FeEQ7Ozs7SUFsRUEsSUFBSSxVQUFVO1FBQ2IsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ04sMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLEtBQUssRUFBRSxHQUFHO2dCQUNWLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsMkJBQTJCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUN4QixNQUFNOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQzdCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1FBQ3ZCLHFCQUFxQjtRQUNyQixHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUN0QixLQUFLLEVBQUUsQ0FDUCxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNwQiw4Q0FBOEM7WUFDL0MsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE9BQU87UUFDTixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLElBQWM7UUFDOUIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7UUFDL0Isb0NBQW9DO1NBQ3BDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUN2QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXNCLEVBQUUsRUFBRTs7a0JBQ3hCLFVBQVUsR0FBRyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7WUFDdEQsT0FBTyxVQUFVLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsVUFBc0MsRUFBRSxFQUFFO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7OztZQTFFRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7O0lBR0Esb0NBQXVEOzs7OztJQUN2RCw0QkFBaUQ7Ozs7O0lBQ2pELDZCQUFzRTs7Ozs7SUFDdEUsOEJBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudEluZGV4IH0gZnJvbSAnLi4vbW9kZWxzL2RvY3VtZW50JztcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8RG9jdW1lbnRJbmRleD4ge1xuXG5cdHByaXZhdGUgY29sbGVjdGVkS2V5czogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblx0cHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTsgfSA9IHt9O1xuXHRwcml2YXRlIHNsdWdzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYC9hcGkvc2x1Z2A7XG5cdH1cblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVba2V5XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnU2VydmljZS5nZXRLZXknLCBrZXkpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY29sbGVjdGVkS2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiBrZXksXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5jYWNoZVtrZXldID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gcmV0dXJuIG9ic2VydmFibGUgb2Yga2V5XG5cdFx0cmV0dXJuIHRoaXMuc2x1Z3MkLnBpcGUoXG5cdFx0XHRtYXAoaXRlbXMgPT4gaXRlbXNba2V5XSksXG5cdFx0XHRmaWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0cmVnaXN0ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHQvLyB0aHJvdHRsZVRpbWUoNTAwKSxcblx0XHRcdHRhcCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdEtleXMoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKChrZXlzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1NsdWdTZXJ2aWNlLmNvbGxlY3RlZCcsIGtleXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QoKTogdm9pZCB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVtaXR0ZXIuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2x1Z3Moa2V5czogc3RyaW5nW10pOiBPYnNlcnZhYmxlPERvY3VtZW50SW5kZXhbXT4ge1xuXHRcdGtleXMgPSBrZXlzIHx8IFtdO1xuXHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxuXHRcdFx0Ly8gdGFwKGl0ZW1zID0+IGNvbnNvbGUubG9nKGl0ZW1zKSksXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgY29sbGVjdEtleXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdHRoaXMuc2x1Z3MkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cyk7XG5cdFx0dGhpcy5jb2xsZWN0ZWRLZXlzID0ge307XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U2x1Z3Moa2V5cykucGlwZShcblx0XHRcdG1hcCgoaXRlbXM6IERvY3VtZW50SW5kZXhbXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkaWN0aW9uYXJ5ID0ge307XG5cdFx0XHRcdGl0ZW1zLmZvckVhY2goeCA9PiBkaWN0aW9uYXJ5W3gubW5lbW9uaWNdID0gW3guc2x1Z10pO1xuXHRcdFx0XHRyZXR1cm4gZGljdGlvbmFyeTtcblx0XHRcdH0pLFxuXHRcdFx0dGFwKChkaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGRpY3Rpb25hcnkpO1xuXHRcdFx0XHR0aGlzLnNsdWdzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==