import { Inject, Injectable } from '@angular/core';
import { OUTLETS } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import * as i0 from "@angular/core";
var OutletResolverService = /** @class */ (function () {
    function OutletResolverService(outlets) {
        outlets = outlets || {};
    }
    OutletResolverService.prototype.resolve = function (outlet) {
        var component;
        if (outlet) {
            component = this.outlets[outlet.component] || OutletDefaultComponent;
        }
        else {
            component = OutletDefaultComponent;
        }
        return component;
    };
    OutletResolverService.ɵfac = function OutletResolverService_Factory(t) { return new (t || OutletResolverService)(i0.ɵɵinject(OUTLETS)); };
    OutletResolverService.ɵprov = i0.ɵɵdefineInjectable({ token: OutletResolverService, factory: OutletResolverService.ɵfac, providedIn: 'root' });
    return OutletResolverService;
}());
export { OutletResolverService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OutletResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [OUTLETS]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlc29sdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL291dGxldC9vdXRsZXQtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQVUsT0FBTyxFQUFXLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVwRTtJQU9DLCtCQUNrQixPQUFnQjtRQUVqQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLE1BQWM7UUFDckIsSUFBSSxTQUF1QyxDQUFDO1FBQzVDLElBQUksTUFBTSxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLHNCQUFzQixDQUFDO1NBQ3JFO2FBQU07WUFDTixTQUFTLEdBQUcsc0JBQXNCLENBQUM7U0FDbkM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzhGQWxCVyxxQkFBcUIsY0FLeEIsT0FBTztpRUFMSixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZyQixNQUFNO2dDQUxuQjtDQTJCQyxBQXZCRCxJQXVCQztTQXBCWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU1FLE1BQU07dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0LCBPVVRMRVRTLCBPdXRsZXRzIH0gZnJvbSAnLi9vdXRsZXQnO1xuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVzb2x2ZXJTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3V0bGV0czogT3V0bGV0cztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KE9VVExFVFMpIG91dGxldHM6IE91dGxldHMsXG5cdCkge1xuXHRcdG91dGxldHMgPSBvdXRsZXRzIHx8IHt9O1xuXHR9XG5cblx0cmVzb2x2ZShvdXRsZXQ6IE91dGxldCk6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8T3V0bGV0RGVmYXVsdENvbXBvbmVudD47XG5cdFx0aWYgKG91dGxldCkge1xuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vdXRsZXRzW291dGxldC5jb21wb25lbnRdIHx8IE91dGxldERlZmF1bHRDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IE91dGxldERlZmF1bHRDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19