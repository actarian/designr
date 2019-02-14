/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        console.log('EditorService', options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2VkaXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLOUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFJekIsWUFDd0IsT0FBcUI7UUFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFiRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFKUSxZQUFZLHVCQVVsQixNQUFNLFNBQUMsYUFBYTs7Ozs7SUFIdEIsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvckNvbmZpZywgRURJVE9SX0NPTkZJRyB9IGZyb20gJy4vZWRpdG9yLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvclNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBFZGl0b3JDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBvcHRpb25zOiBFZGl0b3JDb25maWdcblx0KSB7XG5cdFx0Y29uc29sZS5sb2coJ0VkaXRvclNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgRWRpdG9yQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==