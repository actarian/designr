/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { OUTLETS } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import * as i0 from "@angular/core";
import * as i1 from "./outlet";
var OutletResolverService = /** @class */ (function () {
    function OutletResolverService(outlets) {
        outlets = outlets || {};
    }
    /**
     * @param {?} outlet
     * @return {?}
     */
    OutletResolverService.prototype.resolve = /**
     * @param {?} outlet
     * @return {?}
     */
    function (outlet) {
        /** @type {?} */
        var component;
        if (outlet) {
            component = this.outlets[outlet.component] || OutletDefaultComponent;
        }
        else {
            component = OutletDefaultComponent;
        }
        return component;
    };
    OutletResolverService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OutletResolverService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [OUTLETS,] }] }
    ]; };
    /** @nocollapse */ OutletResolverService.ngInjectableDef = i0.defineInjectable({ factory: function OutletResolverService_Factory() { return new OutletResolverService(i0.inject(i1.OUTLETS)); }, token: OutletResolverService, providedIn: "root" });
    return OutletResolverService;
}());
export { OutletResolverService };
if (false) {
    /** @type {?} */
    OutletResolverService.prototype.outlets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL291dGxldC9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLE9BQU8sRUFBVyxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXBFO0lBT0MsK0JBQ2tCLE9BQWdCO1FBRWpDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLE1BQWM7O1lBQ2pCLFNBQXVDO1FBQzNDLElBQUksTUFBTSxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDO1NBQ3JFO2FBQU07WUFDTixTQUFTLEdBQUcsc0JBQXNCLENBQUM7U0FDbkM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOztnQkFyQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnREFNRSxNQUFNLFNBQUMsT0FBTzs7O2dDQVpqQjtDQTJCQyxBQXZCRCxJQXVCQztTQXBCWSxxQkFBcUI7OztJQUVqQyx3Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3V0bGV0LCBPVVRMRVRTLCBPdXRsZXRzIH0gZnJvbSAnLi9vdXRsZXQnO1xyXG5pbXBvcnQgeyBPdXRsZXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQtZGVmYXVsdC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG91dGxldHM6IE91dGxldHM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChPVVRMRVRTKSBvdXRsZXRzOiBPdXRsZXRzLFxyXG5cdCkge1xyXG5cdFx0b3V0bGV0cyA9IG91dGxldHMgfHwge307XHJcblx0fVxyXG5cclxuXHRyZXNvbHZlKG91dGxldDogT3V0bGV0KTogVHlwZTxPdXRsZXREZWZhdWx0Q29tcG9uZW50PiB7XHJcblx0XHRsZXQgY29tcG9uZW50OiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+O1xyXG5cdFx0aWYgKG91dGxldCkge1xyXG5cdFx0XHRjb21wb25lbnQgPSB0aGlzLm91dGxldHNbb3V0bGV0LmNvbXBvbmVudF0gfHwgT3V0bGV0RGVmYXVsdENvbXBvbmVudDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IE91dGxldERlZmF1bHRDb21wb25lbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY29tcG9uZW50O1xyXG5cdH1cclxuXHJcbn1cclxuIl19