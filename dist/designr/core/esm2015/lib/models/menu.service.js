/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
export class MenuService extends EntityService {
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
        return '/api/menu';
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i0.INJECTOR)); }, token: MenuService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MenuService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBTWpELE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBdUI7Ozs7SUFNdkQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzdCLENBQUM7Ozs7SUFSRCxJQUFJLFVBQVU7UUFDYixPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzs7WUFQRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFOb0IsUUFBUTs7Ozs7Ozs7SUFjM0IsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4vZW50aXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vbWVudS1pdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxNZW51SXRlbT4ge1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpL21lbnUnO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19