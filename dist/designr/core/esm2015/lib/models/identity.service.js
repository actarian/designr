/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
export class IdentityService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/identity';
    }
    /**
     * @return {?}
     */
    getList() {
        return this.get();
    }
    /**
     * @template Data
     * @param {?} id
     * @return {?}
     */
    getDetailByIdNo404(id) {
        return this.get({ id }).pipe(map((/**
         * @param {?} identities
         * @return {?}
         */
        (identities) => identities[0])));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDetailById(id) {
        return this.get({ id });
    }
    /**
     * @param {?} identity
     * @return {?}
     */
    add(identity) {
        return this.post(identity);
    }
    /**
     * @param {?} identity
     * @return {?}
     */
    update(identity) {
        return this.put(identity);
    }
}
IdentityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IdentityService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ IdentityService.ngInjectableDef = i0.defineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.inject(i0.INJECTOR)); }, token: IdentityService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IdentityService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBTWhELE1BQU0sT0FBTyxlQUFvQyxTQUFRLFVBQWE7Ozs7SUFFckUsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzdCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDYixPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFPLEVBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7O1FBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsRUFBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxRQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQW5DRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFSb0IsUUFBUTs7Ozs7Ozs7SUFZM0IsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuL2lkZW50aXR5JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTZXJ2aWNlPFQgZXh0ZW5kcyBJZGVudGl0eT4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL2lkZW50aXR5Jztcblx0fVxuXG5cdGdldExpc3QoKTogT2JzZXJ2YWJsZTxUW10+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoKTtcblx0fVxuXG5cdGdldERldGFpbEJ5SWRObzQwNDxEYXRhPihpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgaWQgfSkucGlwZShcblx0XHRcdG1hcCgoaWRlbnRpdGllczogVFtdKSA9PiBpZGVudGl0aWVzWzBdKSxcblx0XHQpO1xuXHR9XG5cblx0Z2V0RGV0YWlsQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgaWQgfSk7XG5cdH1cblxuXHRhZGQoaWRlbnRpdHk6IFQpIHtcblx0XHRyZXR1cm4gdGhpcy5wb3N0KGlkZW50aXR5KTtcblx0fVxuXG5cdHVwZGF0ZShpZGVudGl0eTogVCkge1xuXHRcdHJldHVybiB0aGlzLnB1dChpZGVudGl0eSk7XG5cdH1cblxufVxuIl19