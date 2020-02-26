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
    SectionService.prototype.resolve = function (section) {
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
    SectionService.ɵfac = function SectionService_Factory(t) { return new (t || SectionService)(i0.ɵɵinject(SECTION_CONFIG)); };
    SectionService.ɵprov = i0.ɵɵdefineInjectable({ token: SectionService, factory: SectionService.ɵfac, providedIn: 'root' });
    return SectionService;
}());
export { SectionService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SectionConfig, decorators: [{
                type: Inject,
                args: [SECTION_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdkQ7SUFNQyx3QkFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxPQUFnQjtRQUN2QixJQUFJLFNBQWlDLENBQUM7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1NBQ3pFO2FBQU07WUFDTixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7WUFDN0IseUVBQXlFO1NBQ3pFO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztnRkFwQlcsY0FBYyxjQUlqQixjQUFjOzBEQUpYLGNBQWMsV0FBZCxjQUFjLG1CQUZkLE1BQU07eUJBTm5CO0NBOEJDLEFBekJELElBeUJDO1NBdEJZLGNBQWM7a0RBQWQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQUtFLE1BQU07dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbkNvbmZpZywgU0VDVElPTl9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvc2VjdGlvbi5jb25maWcnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25TZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogU2VjdGlvbkNvbmZpZztcblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChTRUNUSU9OX0NPTkZJRykgb3B0aW9uczogU2VjdGlvbkNvbmZpZyxcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1NlY3Rpb25TZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFNlY3Rpb25Db25maWcob3B0aW9ucyk7XG5cdH1cblxuXHRyZXNvbHZlKHNlY3Rpb246IFNlY3Rpb24pOiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+IHtcblx0XHRsZXQgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+O1xuXHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRjb21wb25lbnQgPSB0aGlzLm9wdGlvbnMuc2VjdGlvbnNbc2VjdGlvbi5jb21wb25lbnRdIHx8IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0XHQvLyBjb21wb25lbnQgPSB0aGlzLnBhZ2VTZXJ2aWNlLm9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFNlY3Rpb25Db21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19