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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL291dGxldC9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLE9BQU8sRUFBVyxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXBFO0lBT0MsK0JBQ2tCLE9BQWdCO1FBRWpDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsdUNBQU87Ozs7SUFBUCxVQUFRLE1BQWM7O1lBQ2pCLFNBQXVDO1FBQzNDLElBQUksTUFBTSxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDO1NBQ3JFO2FBQU07WUFDTixTQUFTLEdBQUcsc0JBQXNCLENBQUM7U0FDbkM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOztnQkFyQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnREFNRSxNQUFNLFNBQUMsT0FBTzs7O2dDQVpqQjtDQTJCQyxBQXZCRCxJQXVCQztTQXBCWSxxQkFBcUI7OztJQUVqQyx3Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldCwgT1VUTEVUUywgT3V0bGV0cyB9IGZyb20gJy4vb3V0bGV0JztcbmltcG9ydCB7IE91dGxldERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC1kZWZhdWx0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFJlc29sdmVyU2VydmljZSB7XG5cblx0cHVibGljIG91dGxldHM6IE91dGxldHM7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChPVVRMRVRTKSBvdXRsZXRzOiBPdXRsZXRzLFxuXHQpIHtcblx0XHRvdXRsZXRzID0gb3V0bGV0cyB8fCB7fTtcblx0fVxuXG5cdHJlc29sdmUob3V0bGV0OiBPdXRsZXQpOiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+IHtcblx0XHRsZXQgY29tcG9uZW50OiBUeXBlPE91dGxldERlZmF1bHRDb21wb25lbnQ+O1xuXHRcdGlmIChvdXRsZXQpIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3V0bGV0c1tvdXRsZXQuY29tcG9uZW50XSB8fCBPdXRsZXREZWZhdWx0Q29tcG9uZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb21wb25lbnQgPSBPdXRsZXREZWZhdWx0Q29tcG9uZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cbn1cbiJdfQ==