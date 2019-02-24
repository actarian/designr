/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { SectionConfig, SECTION_CONFIG } from '../config/section.config';
import { SectionComponent } from './section.component';
import * as i0 from "@angular/core";
import * as i1 from "../config/section.config";
export class SectionService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('SectionService', options);
        options = options || {};
        this.options = new SectionConfig(options);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    resolve(section) {
        /** @type {?} */
        let component;
        if (section) {
            component = this.options.sections[section.component] || SectionComponent;
        }
        else {
            component = SectionComponent;
            // component = this.pageService.options.notFoundPage || SectionComponent;
        }
        return component;
    }
}
SectionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SectionService.ctorParameters = () => [
    { type: SectionConfig, decorators: [{ type: Inject, args: [SECTION_CONFIG,] }] }
];
/** @nocollapse */ SectionService.ngInjectableDef = i0.defineInjectable({ factory: function SectionService_Factory() { return new SectionService(i0.inject(i1.SECTION_CONFIG)); }, token: SectionService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SectionService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3ZELE1BQU0sT0FBTyxjQUFjOzs7O0lBRzFCLFlBQ3lCLE9BQXNCO1FBRTlDLDBDQUEwQztRQUMxQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQWdCOztZQUNuQixTQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksZ0JBQWdCLENBQUM7U0FDekU7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3Qix5RUFBeUU7U0FDekU7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7WUF2QkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTlEsYUFBYSx1QkFXbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBRnZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbkNvbmZpZywgU0VDVElPTl9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvc2VjdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25TZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogU2VjdGlvbkNvbmZpZztcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChTRUNUSU9OX0NPTkZJRykgb3B0aW9uczogU2VjdGlvbkNvbmZpZyxcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1NlY3Rpb25TZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFNlY3Rpb25Db25maWcob3B0aW9ucyk7XG5cdH1cblxuXHRyZXNvbHZlKHNlY3Rpb246IFNlY3Rpb24pOiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+IHtcblx0XHRsZXQgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+O1xuXHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRjb21wb25lbnQgPSB0aGlzLm9wdGlvbnMuc2VjdGlvbnNbc2VjdGlvbi5jb21wb25lbnRdIHx8IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0XHQvLyBjb21wb25lbnQgPSB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19