/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { EditorConfig, EDITOR_CONFIG } from './editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./editor.config";
export class EditorService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('EditorService', options);
        options = options || {};
        this.options = new EditorConfig(options);
    }
}
EditorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EditorService.ctorParameters = () => [
    { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
];
/** @nocollapse */ EditorService.ngInjectableDef = i0.defineInjectable({ factory: function EditorService_Factory() { return new EditorService(i0.inject(i1.EDITOR_CONFIG)); }, token: EditorService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EditorService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2VkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLOUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFDd0IsT0FBcUI7UUFFNUMseUNBQXlDO1FBQ3pDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBYkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsWUFBWSx1QkFVbEIsTUFBTSxTQUFDLGFBQWE7Ozs7O0lBSHRCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9lZGl0b3IuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvclNlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgb3B0aW9uczogRWRpdG9yQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoRURJVE9SX0NPTkZJRykgb3B0aW9uczogRWRpdG9yQ29uZmlnXHJcblx0KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yU2VydmljZScsIG9wdGlvbnMpO1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgRWRpdG9yQ29uZmlnKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19