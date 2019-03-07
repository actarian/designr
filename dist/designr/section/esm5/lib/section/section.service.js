/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { SectionConfig, SECTION_CONFIG } from '../config/section.config';
import { SectionComponent } from './section.component';
import * as i0 from "@angular/core";
import * as i1 from "../config/section.config";
var SectionService = /** @class */ (function () {
    function SectionService(options) {
        // console.log('SectionService', options);
        options = options || {};
        this.options = new SectionConfig(options);
    }
    /**
     * @param {?} section
     * @return {?}
     */
    SectionService.prototype.resolve = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var component;
        if (section) {
            component = this.options.sections[section.component] || SectionComponent;
        }
        else {
            component = SectionComponent;
            // component = this.pageService.options.notFoundPage || SectionComponent;
        }
        return component;
    };
    SectionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SectionService.ctorParameters = function () { return [
        { type: SectionConfig, decorators: [{ type: Inject, args: [SECTION_CONFIG,] }] }
    ]; };
    /** @nocollapse */ SectionService.ngInjectableDef = i0.defineInjectable({ factory: function SectionService_Factory() { return new SectionService(i0.inject(i1.SECTION_CONFIG)); }, token: SectionService, providedIn: "root" });
    return SectionService;
}());
export { SectionService };
if (false) {
    /** @type {?} */
    SectionService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZEO0lBTUMsd0JBQ3lCLE9BQXNCO1FBRTlDLDBDQUEwQztRQUMxQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQWdCOztZQUNuQixTQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksZ0JBQWdCLENBQUM7U0FDekU7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3Qix5RUFBeUU7U0FDekU7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOztnQkF2QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFOUSxhQUFhLHVCQVduQixNQUFNLFNBQUMsY0FBYzs7O3lCQVp4QjtDQThCQyxBQXpCRCxJQXlCQztTQXRCWSxjQUFjOzs7SUFFMUIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWN0aW9uQ29uZmlnLCBTRUNUSU9OX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9zZWN0aW9uLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCB7IFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24uY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvblNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBTZWN0aW9uQ29uZmlnO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFNFQ1RJT05fQ09ORklHKSBvcHRpb25zOiBTZWN0aW9uQ29uZmlnLFxuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnU2VjdGlvblNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgU2VjdGlvbkNvbmZpZyhvcHRpb25zKTtcblx0fVxuXG5cdHJlc29sdmUoc2VjdGlvbjogU2VjdGlvbik6IFR5cGU8U2VjdGlvbkNvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8U2VjdGlvbkNvbXBvbmVudD47XG5cdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5zZWN0aW9uc1tzZWN0aW9uLmNvbXBvbmVudF0gfHwgU2VjdGlvbkNvbXBvbmVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29tcG9uZW50ID0gU2VjdGlvbkNvbXBvbmVudDtcblx0XHRcdC8vIGNvbXBvbmVudCA9IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgU2VjdGlvbkNvbXBvbmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG59XG4iXX0=