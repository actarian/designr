import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
var DocumentService = /** @class */ (function (_super) {
    __extends(DocumentService, _super);
    function DocumentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DocumentService.prototype, "collection", {
        get: function () {
            return '/api/document';
        },
        enumerable: true,
        configurable: true
    });
    DocumentService.prototype.getDetailBySlug = function (slug) {
        if (!slug.trim()) {
            // if not search term, return empty identity array.
            return of();
        }
        return this.get({ slug: slug }).pipe(
        // tap(x => this.logger.log(`found identities matching "${slug}"`)),
        switchMap(function (x) { return of(x[0]); }));
    };
    DocumentService.ɵfac = function DocumentService_Factory(t) { return ɵDocumentService_BaseFactory(t || DocumentService); };
    DocumentService.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
    return DocumentService;
}(EntityService));
export { DocumentService };
var ɵDocumentService_BaseFactory = i0.ɵɵgetInheritedFactory(DocumentService);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocumentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDtJQUd5RCxtQ0FBZ0I7SUFIekU7O0tBb0JDO0lBZkEsc0JBQUksdUNBQVU7YUFBZDtZQUNDLE9BQU8sZUFBZSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQseUNBQWUsR0FBZixVQUFnQixJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsbURBQW1EO1lBQ25ELE9BQU8sRUFBRSxFQUFFLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQzdCLG9FQUFvRTtRQUNwRSxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQVIsQ0FBUSxDQUFDLENBQ3hCLENBQUM7SUFDSCxDQUFDOzBHQWZXLGVBQWU7MkRBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRmYsTUFBTTswQkFQbkI7Q0EwQkMsQUFwQkQsQ0FHeUQsYUFBYSxHQWlCckU7U0FqQlksZUFBZTs0REFBZixlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi9kb2N1bWVudCc7IC8vICEhISBEb2N1bWVudCBjbGFzcyBjb25mbGljdD9cbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2VudGl0eS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTZXJ2aWNlPFQgZXh0ZW5kcyBEb2N1bWVudD4gZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9kb2N1bWVudCc7XG5cdH1cblxuXHRnZXREZXRhaWxCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cdFx0aWYgKCFzbHVnLnRyaW0oKSkge1xuXHRcdFx0Ly8gaWYgbm90IHNlYXJjaCB0ZXJtLCByZXR1cm4gZW1wdHkgaWRlbnRpdHkgYXJyYXkuXG5cdFx0XHRyZXR1cm4gb2YoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgc2x1ZyB9KS5waXBlKFxuXHRcdFx0Ly8gdGFwKHggPT4gdGhpcy5sb2dnZXIubG9nKGBmb3VuZCBpZGVudGl0aWVzIG1hdGNoaW5nIFwiJHtzbHVnfVwiYCkpLFxuXHRcdFx0c3dpdGNoTWFwKHggPT4gb2YoeFswXSkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=