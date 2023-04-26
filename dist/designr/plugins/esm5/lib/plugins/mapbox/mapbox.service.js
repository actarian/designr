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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwYm94LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFVdkQ7Ozs7Ozs7O0lBQUE7SUFHQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7Ozs7Ozs7Ozs7SUFGQSxtQ0FBNEI7O0lBQzVCLDZCQUFzQjs7QUFHdkI7SUFBQTtJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsbUNBQTJCOztJQUMzQixpQ0FBc0I7O0FBR3ZCO0lBQUE7S0E4Q0M7O2dCQTlDQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7d0JBdEJEO0NBa0VDLEFBOUNELElBOENDO1NBM0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbiovXHJcblxyXG5leHBvcnQgY2xhc3MgTWFwYm94Q29uZmlnIHtcclxuXHRwdWJsaWMgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XHJcblx0cHVibGljIHN0eWxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwYm94TWFwT3B0aW9ucyB7XHJcblx0cHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblx0cHVibGljIHN0eWxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBib3hTZXJ2aWNlIHtcclxuXHJcblx0LypcclxuXHRwcml2YXRlIG9wdGlvbnM6IE1hcGJveENvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGx1Z2lucy5tYXBib3gpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNYXBib3hTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLm1hcGJveCcpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgTWFwYm94Q29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5wbHVnaW5zLm1hcGJveCk7XHJcblx0fVxyXG5cclxuXHRnZXRNYXAob3B0aW9uczogTWFwYm94TWFwT3B0aW9ucyk6IE9ic2VydmFibGU8bWFwYm94Z2wuTWFwPiB7XHJcblx0XHRyZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0XHRtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbjtcclxuXHRcdFx0XHRvcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCB0aGlzLm9wdGlvbnMuc3R5bGUgfHwgJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTAnO1xyXG5cdFx0XHRcdGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBvcHRpb25zLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuXHRcdFx0XHRcdHN0eWxlOiBvcHRpb25zLnN0eWxlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc3Qgc291cmNlID0gZnJvbUV2ZW50KG1hcCwgJ2xvYWQnKS5waXBlKFxyXG5cdFx0XHRcdFx0Y29uY2F0TWFwKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0bWFwLnJlc2l6ZSgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobWFwKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gc291cmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdCovXHJcblxyXG59XHJcbiJdfQ==