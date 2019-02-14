/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from './data.config';
import * as i0 from "@angular/core";
import * as i1 from "./data.config";
export class DataService {
    /**
     * @param {?} options
     */
    constructor(options) {
        console.log('DataService', options);
        options = options || {};
        this.options = new DataConfig(options);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.DATA_CONFIG)); }, token: DataService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DataService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXZCLFlBQ3NCLE9BQW1CO1FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBYkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsVUFBVSx1QkFVaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4vZGF0YS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IERhdGFDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgb3B0aW9uczogRGF0YUNvbmZpZ1xuXHQpIHtcblx0XHRjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgRGF0YUNvbmZpZyhvcHRpb25zKTtcblx0fVxuXG59XG4iXX0=