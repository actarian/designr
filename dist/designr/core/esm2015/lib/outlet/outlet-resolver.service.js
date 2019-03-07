/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { OUTLETS } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import * as i0 from "@angular/core";
import * as i1 from "./outlet";
export class OutletResolverService {
    /**
     * @param {?} outlets
     */
    constructor(outlets) {
        outlets = outlets || {};
    }
    /**
     * @param {?} outlet
     * @return {?}
     */
    resolve(outlet) {
        /** @type {?} */
        let component;
        if (outlet) {
            component = this.outlets[outlet.component] || OutletDefaultComponent;
        }
        else {
            component = OutletDefaultComponent;
        }
        return component;
    }
}
OutletResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OutletResolverService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [OUTLETS,] }] }
];
/** @nocollapse */ OutletResolverService.ngInjectableDef = i0.defineInjectable({ factory: function OutletResolverService_Factory() { return new OutletResolverService(i0.inject(i1.OUTLETS)); }, token: OutletResolverService, providedIn: "root" });
if (false) {
    /** @type {?} */
    OutletResolverService.prototype.outlets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL291dGxldC9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLE9BQU8sRUFBVyxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBS3BFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJakMsWUFDa0IsT0FBZ0I7UUFFakMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBYzs7WUFDakIsU0FBdUM7UUFDM0MsSUFBSSxNQUFNLEVBQUU7WUFDWCxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksc0JBQXNCLENBQUM7U0FDckU7YUFBTTtZQUNOLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztTQUNuQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7OztZQXJCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7NENBTUUsTUFBTSxTQUFDLE9BQU87Ozs7O0lBSGhCLHdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0LCBPVVRMRVRTLCBPdXRsZXRzIH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3V0bGV0czogT3V0bGV0cztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE9VVExFVFMpIG91dGxldHM6IE91dGxldHMsXG5cdCkge1xuXHRcdG91dGxldHMgPSBvdXRsZXRzIHx8IHt9O1xuXHR9XG5cblx0cmVzb2x2ZShvdXRsZXQ6IE91dGxldCk6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD47XG5cdFx0aWYgKG91dGxldCkge1xuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vdXRsZXRzW291dGxldC5jb21wb25lbnRdIHx8IE91dGxldERlZmF1bHRDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IE91dGxldERlZmF1bHRDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19