/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3ZELE1BQU0sT0FBTyxjQUFjOzs7O0lBRzFCLFlBQ3lCLE9BQXNCO1FBRTlDLDBDQUEwQztRQUMxQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE9BQWdCOztZQUNuQixTQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksZ0JBQWdCLENBQUM7U0FDekU7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3Qix5RUFBeUU7U0FDekU7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7WUF2QkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTlEsYUFBYSx1QkFXbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBRnZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN0aW9uQ29uZmlnLCBTRUNUSU9OX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9zZWN0aW9uLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBTZWN0aW9uQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChTRUNUSU9OX0NPTkZJRykgb3B0aW9uczogU2VjdGlvbkNvbmZpZyxcclxuXHQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdTZWN0aW9uU2VydmljZScsIG9wdGlvbnMpO1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgU2VjdGlvbkNvbmZpZyhvcHRpb25zKTtcclxuXHR9XHJcblxyXG5cdHJlc29sdmUoc2VjdGlvbjogU2VjdGlvbik6IFR5cGU8U2VjdGlvbkNvbXBvbmVudD4ge1xyXG5cdFx0bGV0IGNvbXBvbmVudDogVHlwZTxTZWN0aW9uQ29tcG9uZW50PjtcclxuXHRcdGlmIChzZWN0aW9uKSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5zZWN0aW9uc1tzZWN0aW9uLmNvbXBvbmVudF0gfHwgU2VjdGlvbkNvbXBvbmVudDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IFNlY3Rpb25Db21wb25lbnQ7XHJcblx0XHRcdC8vIGNvbXBvbmVudCA9IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgU2VjdGlvbkNvbXBvbmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjb21wb25lbnQ7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=