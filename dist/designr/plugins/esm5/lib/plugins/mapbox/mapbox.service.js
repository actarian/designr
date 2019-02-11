/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFVdkQ7Ozs7Ozs7O0lBQUE7SUFHQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7Ozs7Ozs7Ozs7SUFGQSxtQ0FBNEI7O0lBQzVCLDZCQUFzQjs7QUFHdkI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsbUNBQTJCOztJQUMzQixpQ0FBc0I7O0FBR3ZCO0lBQUE7S0E4Q0M7O2dCQTlDQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7d0JBdEJEO0NBa0VDLEFBOUNELElBOENDO1NBM0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuKi9cblxuZXhwb3J0IGNsYXNzIE1hcGJveENvbmZpZyB7XG5cdHB1YmxpYyBhY2Nlc3NUb2tlbj86IHN0cmluZztcblx0cHVibGljIHN0eWxlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWFwYm94TWFwT3B0aW9ucyB7XG5cdHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmO1xuXHRwdWJsaWMgc3R5bGU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hcGJveFNlcnZpY2Uge1xuXG5cdC8qXG5cdHByaXZhdGUgb3B0aW9uczogTWFwYm94Q29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucyAmJiAhdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5tYXBib3gpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWFwYm94U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5tYXBib3gnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgTWFwYm94Q29uZmlnKCksIHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBsdWdpbnMubWFwYm94KTtcblx0fVxuXG5cdGdldE1hcChvcHRpb25zOiBNYXBib3hNYXBPcHRpb25zKTogT2JzZXJ2YWJsZTxtYXBib3hnbC5NYXA+IHtcblx0XHRyZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRcdG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5vcHRpb25zLmFjY2Vzc1Rva2VuO1xuXHRcdFx0XHRvcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCB0aGlzLm9wdGlvbnMuc3R5bGUgfHwgJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTAnO1xuXHRcdFx0XHRjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcblx0XHRcdFx0XHRjb250YWluZXI6IG9wdGlvbnMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuXHRcdFx0XHRcdHN0eWxlOiBvcHRpb25zLnN0eWxlXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCBzb3VyY2UgPSBmcm9tRXZlbnQobWFwLCAnbG9hZCcpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdG1hcC5yZXNpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybiBvZihtYXApO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBzb3VyY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0Ki9cblxufVxuIl19