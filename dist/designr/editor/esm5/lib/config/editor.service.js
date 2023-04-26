/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { EditorConfig, EDITOR_CONFIG } from './editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./editor.config";
var EditorService = /** @class */ (function () {
    function EditorService(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
    EditorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EditorService.ctorParameters = function () { return [
        { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
    ]; };
    /** @nocollapse */ EditorService.ngInjectableDef = i0.defineInjectable({ factory: function EditorService_Factory() { return new EditorService(i0.inject(i1.EDITOR_CONFIG)); }, token: EditorService, providedIn: "root" });
    return EditorService;
}());
export { EditorService };
if (false) {
    /** @type {?} */
    EditorService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2VkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFOUQ7SUFPQyx1QkFDd0IsT0FBcUI7UUFFNUMseUNBQXlDO1FBQ3pDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBYkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxZQUFZLHVCQVVsQixNQUFNLFNBQUMsYUFBYTs7O3dCQVp2QjtDQW1CQyxBQWZELElBZUM7U0FaWSxhQUFhOzs7SUFFekIsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb25maWcsIEVESVRPUl9DT05GSUcgfSBmcm9tICcuL2VkaXRvci5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBFZGl0b3JDb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBvcHRpb25zOiBFZGl0b3JDb25maWdcclxuXHQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JTZXJ2aWNlJywgb3B0aW9ucyk7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBFZGl0b3JDb25maWcob3B0aW9ucyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=