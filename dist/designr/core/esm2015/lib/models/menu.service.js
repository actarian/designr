import { Injectable, Injector } from '@angular/core';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
export class MenuService extends EntityService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get collection() {
        return '/api/menu';
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(i0.ɵɵinject(i0.Injector)); };
MenuService.ɵprov = i0.ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFNakQsTUFBTSxPQUFPLFdBQVksU0FBUSxhQUF1QjtJQU12RCxZQUNXLFFBQWtCO1FBRTVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQVU7SUFHN0IsQ0FBQztJQVJELElBQUksVUFBVTtRQUNiLE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7O3NFQUpXLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlgsTUFBTTtrREFFTixXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9lbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vbWVudS1pdGVtJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPE1lbnVJdGVtPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbWVudSc7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxufVxuIl19