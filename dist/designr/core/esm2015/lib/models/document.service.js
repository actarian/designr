/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        switchMap(x => of(x[0])));
    }
}
DocumentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DocumentService.ngInjectableDef = i0.defineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.inject(i0.INJECTOR)); }, token: DocumentService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFLakQsTUFBTSxPQUFPLGVBQW9DLFNBQVEsYUFBZ0I7Ozs7SUFFeEUsSUFBSSxVQUFVO1FBQ2IsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLG1EQUFtRDtZQUNuRCxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0Isb0VBQW9FO1FBQ3BFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7O1lBbEJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4vZG9jdW1lbnQnOyAvLyAhISEgRG9jdW1lbnQgY2xhc3MgY29uZmxpY3Q/XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9lbnRpdHkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2VydmljZTxUIGV4dGVuZHMgRG9jdW1lbnQ+IGV4dGVuZHMgRW50aXR5U2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvZG9jdW1lbnQnO1xuXHR9XG5cblx0Z2V0RGV0YWlsQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuXHRcdGlmICghc2x1Zy50cmltKCkpIHtcblx0XHRcdC8vIGlmIG5vdCBzZWFyY2ggdGVybSwgcmV0dXJuIGVtcHR5IGlkZW50aXR5IGFycmF5LlxuXHRcdFx0cmV0dXJuIG9mKCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmdldCh7IHNsdWcgfSkucGlwZShcblx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgaWRlbnRpdGllcyBtYXRjaGluZyBcIiR7c2x1Z31cImApKSxcblx0XHRcdHN3aXRjaE1hcCh4ID0+IG9mKHhbMF0pKVxuXHRcdCk7XG5cdH1cblxufVxuIl19