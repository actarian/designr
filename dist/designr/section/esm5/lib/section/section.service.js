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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZEO0lBTUMsd0JBQ3lCLE9BQXNCO1FBRTlDLDBDQUEwQztRQUMxQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQWdCOztZQUNuQixTQUFpQztRQUNyQyxJQUFJLE9BQU8sRUFBRTtZQUNaLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksZ0JBQWdCLENBQUM7U0FDekU7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUM3Qix5RUFBeUU7U0FDekU7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOztnQkF2QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFOUSxhQUFhLHVCQVduQixNQUFNLFNBQUMsY0FBYzs7O3lCQVp4QjtDQThCQyxBQXpCRCxJQXlCQztTQXRCWSxjQUFjOzs7SUFFMUIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25Db25maWcsIFNFQ1RJT05fQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL3NlY3Rpb24uY29uZmlnJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XHJcbmltcG9ydCB7IFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25TZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG9wdGlvbnM6IFNlY3Rpb25Db25maWc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFNFQ1RJT05fQ09ORklHKSBvcHRpb25zOiBTZWN0aW9uQ29uZmlnLFxyXG5cdCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1NlY3Rpb25TZXJ2aWNlJywgb3B0aW9ucyk7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBTZWN0aW9uQ29uZmlnKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcblx0cmVzb2x2ZShzZWN0aW9uOiBTZWN0aW9uKTogVHlwZTxTZWN0aW9uQ29tcG9uZW50PiB7XHJcblx0XHRsZXQgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+O1xyXG5cdFx0aWYgKHNlY3Rpb24pIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vcHRpb25zLnNlY3Rpb25zW3NlY3Rpb24uY29tcG9uZW50XSB8fCBTZWN0aW9uQ29tcG9uZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gU2VjdGlvbkNvbXBvbmVudDtcclxuXHRcdFx0Ly8gY29tcG9uZW50ID0gdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBTZWN0aW9uQ29tcG9uZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==