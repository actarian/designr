import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
export class DocumentService extends EntityService {
    get collection() {
        return '/api/document';
    }
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
DocumentService.ɵfac = function DocumentService_Factory(t) { return ɵDocumentService_BaseFactory(t || DocumentService); };
DocumentService.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
const ɵDocumentService_BaseFactory = i0.ɵɵgetInheritedFactory(DocumentService);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocumentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2RvY3VtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBS2pELE1BQU0sT0FBTyxlQUFvQyxTQUFRLGFBQWdCO0lBRXhFLElBQUksVUFBVTtRQUNiLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLG1EQUFtRDtZQUNuRCxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDN0Isb0VBQW9FO1FBQ3BFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUN4QixDQUFDO0lBQ0gsQ0FBQzs7c0dBZlcsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZSxtQkFGZixNQUFNOzhEQUVOLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuL2RvY3VtZW50JzsgLy8gISEhIERvY3VtZW50IGNsYXNzIGNvbmZsaWN0P1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4vZW50aXR5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNlcnZpY2U8VCBleHRlbmRzIERvY3VtZW50PiBleHRlbmRzIEVudGl0eVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL2RvY3VtZW50Jztcblx0fVxuXG5cdGdldERldGFpbEJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRpZiAoIXNsdWcudHJpbSgpKSB7XG5cdFx0XHQvLyBpZiBub3Qgc2VhcmNoIHRlcm0sIHJldHVybiBlbXB0eSBpZGVudGl0eSBhcnJheS5cblx0XHRcdHJldHVybiBvZigpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5nZXQoeyBzbHVnIH0pLnBpcGUoXG5cdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGlkZW50aXRpZXMgbWF0Y2hpbmcgXCIke3NsdWd9XCJgKSksXG5cdFx0XHRzd2l0Y2hNYXAoeCA9PiBvZih4WzBdKSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==