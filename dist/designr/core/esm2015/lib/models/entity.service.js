/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IdentityService } from './identity.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
export class EntityService extends IdentityService {
    /**
     * @return {?}
     */
    get collection() {
        return '/api/entity';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getDetailByName(name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name });
    }
}
EntityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i0.INJECTOR)); }, token: EntityService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFLckQsTUFBTSxPQUFPLGFBQWdDLFNBQVEsZUFBa0I7Ozs7SUFFdEUsSUFBSSxVQUFVO1FBQ2IsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQWRELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBJZGVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2lkZW50aXR5LnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VydmljZTxUIGV4dGVuZHMgRW50aXR5PiBleHRlbmRzIElkZW50aXR5U2VydmljZTxUPiB7XHJcblxyXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gJy9hcGkvZW50aXR5JztcclxuXHR9XHJcblxyXG5cdGdldERldGFpbEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFuYW1lLnRyaW0oKSkge1xyXG5cdFx0XHRyZXR1cm4gb2YoW10pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0KHsgbmFtZSB9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==