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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVncy9zbHVnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBS3pELE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBNEI7SUFIN0Q7O1FBS1Msa0JBQWEsR0FBK0IsRUFBRSxDQUFDO1FBQy9DLFVBQUssR0FBaUMsRUFBRSxDQUFDO1FBQ3pDLFdBQU0sR0FBMEMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5RCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7S0FvRXhEOzs7O0lBbEVBLElBQUksVUFBVTtRQUNiLE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNOLDBDQUEwQztZQUMxQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO2dCQUM5QyxLQUFLLEVBQUUsR0FBRztnQkFDVixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELDJCQUEyQjtRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUM3QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUN2QixxQkFBcUI7UUFDckIsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ3RCLEtBQUssRUFBRSxDQUNQLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BCLDhDQUE4QztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNOLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsSUFBYztRQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTtRQUMvQixvQ0FBb0M7U0FDcEMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRU8sV0FBVztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2NBQ3ZCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFOztrQkFDeEIsVUFBVSxHQUFHLEVBQUU7WUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxPQUFPLFVBQVUsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxVQUFzQyxFQUFFLEVBQUU7WUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7O1lBMUVELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozs7Ozs7SUFHQSxvQ0FBdUQ7Ozs7O0lBQ3ZELDRCQUFpRDs7Ozs7SUFDakQsNkJBQXNFOzs7OztJQUN0RSw4QkFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50SW5kZXggfSBmcm9tICcuLi9tb2RlbHMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxEb2N1bWVudEluZGV4PiB7XG5cblx0cHJpdmF0ZSBjb2xsZWN0ZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSA9IHt9O1xuXHRwcml2YXRlIGNhY2hlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdOyB9ID0ge307XG5cdHByaXZhdGUgc2x1Z3MkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0+ID0gbmV3IFN1YmplY3QoKTtcblx0cHJpdmF0ZSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgL2FwaS9zbHVnYDtcblx0fVxuXG5cdGdldEtleShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZVtrZXldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1NsdWdTZXJ2aWNlLmdldEtleScsIGtleSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jb2xsZWN0ZWRLZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IGtleSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyByZXR1cm4gb2JzZXJ2YWJsZSBvZiBrZXlcblx0XHRyZXR1cm4gdGhpcy5zbHVncyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldKSxcblx0XHRcdGZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG51bGwpLFxuXHRcdCk7XG5cdH1cblxuXHRyZWdpc3RlcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdC8vIHRocm90dGxlVGltZSg1MDApLFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0S2V5cygpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoKGtleXMpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnU2x1Z1NlcnZpY2UuY29sbGVjdGVkJywga2V5cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCgpOiB2b2lkIHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdHRlci5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTbHVncyhrZXlzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8RG9jdW1lbnRJbmRleFtdPiB7XG5cdFx0a2V5cyA9IGtleXMgfHwgW107XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHQvLyB0YXAoaXRlbXMgPT4gY29uc29sZS5sb2coaXRlbXMpKSxcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb2xsZWN0S2V5cygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0dGhpcy5zbHVncyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKTtcblx0XHR0aGlzLmNvbGxlY3RlZEtleXMgPSB7fTtcblx0XHRyZXR1cm4gdGhpcy5nZXRTbHVncyhrZXlzKS5waXBlKFxuXHRcdFx0bWFwKChpdGVtczogRG9jdW1lbnRJbmRleFtdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRpY3Rpb25hcnkgPSB7fTtcblx0XHRcdFx0aXRlbXMuZm9yRWFjaCh4ID0+IGRpY3Rpb25hcnlbeC5tbmVtb25pY10gPSBbeC5zbHVnXSk7XG5cdFx0XHRcdHJldHVybiBkaWN0aW9uYXJ5O1xuXHRcdFx0fSksXG5cdFx0XHR0YXAoKGRpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgZGljdGlvbmFyeSk7XG5cdFx0XHRcdHRoaXMuc2x1Z3MkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19