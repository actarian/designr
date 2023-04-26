/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
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
     * @param {?} id
     * @return {?}
     */
    getDetailById(id) {
        return this.get({ id });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFNaEQsTUFBTSxPQUFPLGVBQW9DLFNBQVEsVUFBYTs7OztJQUVyRSxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7SUFHN0IsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNiLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEVBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBakJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVBvQixRQUFROzs7Ozs7OztJQVczQixtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTZXJ2aWNlPFQgZXh0ZW5kcyBJZGVudGl0eT4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7XHJcblx0XHRzdXBlcihpbmplY3Rvcik7XHJcblx0fVxyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpL2lkZW50aXR5JztcclxuXHR9XHJcblxyXG5cdGdldERldGFpbEJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgaWQgfSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=