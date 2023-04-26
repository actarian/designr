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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL291dGxldC9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLE9BQU8sRUFBVyxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBS3BFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJakMsWUFDa0IsT0FBZ0I7UUFFakMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBYzs7WUFDakIsU0FBdUM7UUFDM0MsSUFBSSxNQUFNLEVBQUU7WUFDWCxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksc0JBQXNCLENBQUM7U0FDckU7YUFBTTtZQUNOLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztTQUNuQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7OztZQXJCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7NENBTUUsTUFBTSxTQUFDLE9BQU87Ozs7O0lBSGhCLHdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPdXRsZXQsIE9VVExFVFMsIE91dGxldHMgfSBmcm9tICcuL291dGxldCc7XHJcbmltcG9ydCB7IE91dGxldERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC1kZWZhdWx0LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZXNvbHZlclNlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgb3V0bGV0czogT3V0bGV0cztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KE9VVExFVFMpIG91dGxldHM6IE91dGxldHMsXHJcblx0KSB7XHJcblx0XHRvdXRsZXRzID0gb3V0bGV0cyB8fCB7fTtcclxuXHR9XHJcblxyXG5cdHJlc29sdmUob3V0bGV0OiBPdXRsZXQpOiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+IHtcclxuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD47XHJcblx0XHRpZiAob3V0bGV0KSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3V0bGV0c1tvdXRsZXQuY29tcG9uZW50XSB8fCBPdXRsZXREZWZhdWx0Q29tcG9uZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gT3V0bGV0RGVmYXVsdENvbXBvbmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjb21wb25lbnQ7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=