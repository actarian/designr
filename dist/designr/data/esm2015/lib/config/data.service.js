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
        // console.log('DataService', options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXZCLFlBQ3NCLE9BQW1CO1FBRXhDLHVDQUF1QztRQUN2QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUpRLFVBQVUsdUJBVWhCLE1BQU0sU0FBQyxXQUFXOzs7OztJQUhwQiw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuL2RhdGEuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBEYXRhQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoREFUQV9DT05GSUcpIG9wdGlvbnM6IERhdGFDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0RhdGFTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IERhdGFDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19