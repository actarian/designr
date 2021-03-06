/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/*
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
*/
var /*
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
*/
MapboxConfig = /** @class */ (function () {
    function MapboxConfig() {
    }
    return MapboxConfig;
}());
/*
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
*/
export { MapboxConfig };
if (false) {
    /** @type {?} */
    MapboxConfig.prototype.accessToken;
    /** @type {?} */
    MapboxConfig.prototype.style;
}
var MapboxMapOptions = /** @class */ (function () {
    function MapboxMapOptions() {
    }
    return MapboxMapOptions;
}());
export { MapboxMapOptions };
if (false) {
    /** @type {?} */
    MapboxMapOptions.prototype.element;
    /** @type {?} */
    MapboxMapOptions.prototype.style;
}
var MapboxService = /** @class */ (function () {
    function MapboxService() {
    }
    MapboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MapboxService.ngInjectableDef = i0.defineInjectable({ factory: function MapboxService_Factory() { return new MapboxService(); }, token: MapboxService, providedIn: "root" });
    return MapboxService;
}());
export { MapboxService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFVdkQ7Ozs7Ozs7O0lBQUE7SUFHQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7Ozs7Ozs7Ozs7SUFGQSxtQ0FBNEI7O0lBQzVCLDZCQUFzQjs7QUFHdkI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsbUNBQTJCOztJQUMzQixpQ0FBc0I7O0FBR3ZCO0lBQUE7S0E4Q0M7O2dCQTlDQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7d0JBdEJEO0NBa0VDLEFBOUNELElBOENDO1NBM0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuKi9cblxuZXhwb3J0IGNsYXNzIE1hcGJveENvbmZpZyB7XG5cdHB1YmxpYyBhY2Nlc3NUb2tlbj86IHN0cmluZztcblx0cHVibGljIHN0eWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWFwYm94TWFwT3B0aW9ucyB7XG5cdHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmO1xuXHRwdWJsaWMgc3R5bGU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hcGJveFNlcnZpY2Uge1xuXG5cdC8qXG5cdHByaXZhdGUgb3B0aW9uczogTWFwYm94Q29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBsdWdpbnMubWFwYm94KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01hcGJveFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMubWFwYm94Jyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IE1hcGJveENvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5tYXBib3gpO1xuXHR9XG5cblx0Z2V0TWFwKG9wdGlvbnM6IE1hcGJveE1hcE9wdGlvbnMpOiBPYnNlcnZhYmxlPG1hcGJveGdsLk1hcD4ge1xuXHRcdHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0bWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLm9wdGlvbnMuYWNjZXNzVG9rZW47XG5cdFx0XHRcdG9wdGlvbnMuc3R5bGUgPSBvcHRpb25zLnN0eWxlIHx8IHRoaXMub3B0aW9ucy5zdHlsZSB8fCAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMCc7XG5cdFx0XHRcdGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuXHRcdFx0XHRcdGNvbnRhaW5lcjogb3B0aW9ucy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0c3R5bGU6IG9wdGlvbnMuc3R5bGVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZSA9IGZyb21FdmVudChtYXAsICdsb2FkJykucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoKCkgPT4ge1xuXHRcdFx0XHRcdFx0bWFwLnJlc2l6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG1hcCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHNvdXJjZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHQqL1xuXG59XG4iXX0=