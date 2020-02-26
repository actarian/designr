import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';
import * as i0 from "@angular/core";
import * as i1 from "./core.config";
export class CoreService {
    constructor(options) {
        // console.log('CoreService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(i0.ɵɵinject(CORE_CONFIG)); };
CoreService.ɵprov = i0.ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreConfig, decorators: [{
                type: Inject,
                args: [CORE_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvY29yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLFdBQVc7SUFJdkIsWUFDc0IsT0FBbUI7UUFFeEMsdUNBQXVDO1FBQ3ZDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLCtGQUErRjtRQUMvRixpR0FBaUc7UUFDakcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOztzRUFaVyxXQUFXLGNBS2QsV0FBVzttREFMUixXQUFXLFdBQVgsV0FBVyxtQkFGWCxNQUFNO2tEQUVOLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFNRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvcmUuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBDb3JlQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09SRV9DT05GSUcpIG9wdGlvbnM6IENvcmVDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0Ly8gb3B0aW9ucy5kZWZhdWx0UGFnZSA9IChvcHRpb25zLmRlZmF1bHRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvcmVDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19