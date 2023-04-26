/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// !!! Document class conflict?
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
export class DocumentService extends EntityService {
    /**
     * @return {?}
     */
    get collection() {
        return '/api/document';
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getDetailBySlug(slug) {
        if (!slug.trim()) {
            // if not search term, return empty identity array.
            return of();
        }
        return this.get({ slug }).pipe(
        // tap(x => this.logger.log(`found identities matching "${slug}"`)),
        switchMap((/**
         * @param {?} x
         * @return {?}
         */
        x => of(x[0]))));
    }
}
DocumentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DocumentService.ngInjectableDef = i0.defineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.inject(i0.INJECTOR)); }, token: DocumentService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFLakQsTUFBTSxPQUFPLGVBQW9DLFNBQVEsYUFBZ0I7Ozs7SUFFeEUsSUFBSSxVQUFVO1FBQ2IsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLG1EQUFtRDtZQUNuRCxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0Isb0VBQW9FO1FBQ3BFLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7O1lBbEJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4vZG9jdW1lbnQnOyAvLyAhISEgRG9jdW1lbnQgY2xhc3MgY29uZmxpY3Q/XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2VudGl0eS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2VydmljZTxUIGV4dGVuZHMgRG9jdW1lbnQ+IGV4dGVuZHMgRW50aXR5U2VydmljZTxUPiB7XHJcblxyXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gJy9hcGkvZG9jdW1lbnQnO1xyXG5cdH1cclxuXHJcblx0Z2V0RGV0YWlsQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0aWYgKCFzbHVnLnRyaW0oKSkge1xyXG5cdFx0XHQvLyBpZiBub3Qgc2VhcmNoIHRlcm0sIHJldHVybiBlbXB0eSBpZGVudGl0eSBhcnJheS5cclxuXHRcdFx0cmV0dXJuIG9mKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoeyBzbHVnIH0pLnBpcGUoXHJcblx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgaWRlbnRpdGllcyBtYXRjaGluZyBcIiR7c2x1Z31cImApKSxcclxuXHRcdFx0c3dpdGNoTWFwKHggPT4gb2YoeFswXSkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19