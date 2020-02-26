import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IdentityService } from './identity.service';
import * as i0 from "@angular/core";
export class EntityService extends IdentityService {
    get collection() {
        return '/api/entity';
    }
    getDetailByName(name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name });
    }
}
EntityService.ɵfac = function EntityService_Factory(t) { return ɵEntityService_BaseFactory(t || EntityService); };
EntityService.ɵprov = i0.ɵɵdefineInjectable({ token: EntityService, factory: EntityService.ɵfac, providedIn: 'root' });
const ɵEntityService_BaseFactory = i0.ɵɵgetInheritedFactory(EntityService);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUtyRCxNQUFNLE9BQU8sYUFBZ0MsU0FBUSxlQUFrQjtJQUV0RSxJQUFJLFVBQVU7UUFDYixPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOztnR0FYVyxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07NERBRU4sYUFBYTtrREFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuL2VudGl0eSc7XG5pbXBvcnQgeyBJZGVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2lkZW50aXR5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlPFQgZXh0ZW5kcyBFbnRpdHk+IGV4dGVuZHMgSWRlbnRpdHlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9lbnRpdHknO1xuXHR9XG5cblx0Z2V0RGV0YWlsQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKCFuYW1lLnRyaW0oKSkge1xuXHRcdFx0cmV0dXJuIG9mKFtdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgbmFtZSB9KTtcblx0fVxuXG59XG4iXX0=