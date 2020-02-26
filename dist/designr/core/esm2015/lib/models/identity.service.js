import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
export class IdentityService extends ApiService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get collection() {
        return '/api/identity';
    }
    getDetailById(id) {
        return this.get({ id });
    }
}
IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(i0.ɵɵinject(i0.Injector)); };
IdentityService.ɵprov = i0.ɵɵdefineInjectable({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IdentityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQU1oRCxNQUFNLE9BQU8sZUFBb0MsU0FBUSxVQUFhO0lBRXJFLFlBQ1csUUFBa0I7UUFFNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUc3QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ2IsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OzhFQWRXLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRmYsTUFBTTtrREFFTixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElkZW50aXR5U2VydmljZTxUIGV4dGVuZHMgSWRlbnRpdHk+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9pZGVudGl0eSc7XG5cdH1cblxuXHRnZXREZXRhaWxCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcblx0XHRyZXR1cm4gdGhpcy5nZXQoeyBpZCB9KTtcblx0fVxuXG59XG4iXX0=