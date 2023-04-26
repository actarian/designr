/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// !!! Document class conflict?
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
var DocumentService = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentService, _super);
    function DocumentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DocumentService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/document';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} slug
     * @return {?}
     */
    DocumentService.prototype.getDetailBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        if (!slug.trim()) {
            // if not search term, return empty identity array.
            return of();
        }
        return this.get({ slug: slug }).pipe(
        // tap(x => this.logger.log(`found identities matching "${slug}"`)),
        switchMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return of(x[0]); })));
    };
    DocumentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DocumentService.ngInjectableDef = i0.defineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.inject(i0.INJECTOR)); }, token: DocumentService, providedIn: "root" });
    return DocumentService;
}(EntityService));
export { DocumentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBRWpEO0lBR3lELDJDQUFnQjtJQUh6RTs7S0FvQkM7SUFmQSxzQkFBSSx1Q0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxlQUFlLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQseUNBQWU7Ozs7SUFBZixVQUFnQixJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsbURBQW1EO1lBQ25ELE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQzdCLG9FQUFvRTtRQUNwRSxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxFQUFDLENBQ3hCLENBQUM7SUFDSCxDQUFDOztnQkFsQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OzBCQVJEO0NBMEJDLEFBcEJELENBR3lELGFBQWEsR0FpQnJFO1NBakJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuL2RvY3VtZW50JzsgLy8gISEhIERvY3VtZW50IGNsYXNzIGNvbmZsaWN0P1xyXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9lbnRpdHkuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNlcnZpY2U8VCBleHRlbmRzIERvY3VtZW50PiBleHRlbmRzIEVudGl0eVNlcnZpY2U8VD4ge1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpL2RvY3VtZW50JztcclxuXHR9XHJcblxyXG5cdGdldERldGFpbEJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHRcdGlmICghc2x1Zy50cmltKCkpIHtcclxuXHRcdFx0Ly8gaWYgbm90IHNlYXJjaCB0ZXJtLCByZXR1cm4gZW1wdHkgaWRlbnRpdHkgYXJyYXkuXHJcblx0XHRcdHJldHVybiBvZigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgc2x1ZyB9KS5waXBlKFxyXG5cdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGlkZW50aXRpZXMgbWF0Y2hpbmcgXCIke3NsdWd9XCJgKSksXHJcblx0XHRcdHN3aXRjaE1hcCh4ID0+IG9mKHhbMF0pKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==