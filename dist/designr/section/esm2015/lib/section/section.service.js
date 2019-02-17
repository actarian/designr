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
        console.log('SectionService', options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3ZELE1BQU0sT0FBTyxjQUFjOzs7O0lBRzFCLFlBQ3lCLE9BQXNCO1FBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFnQjs7WUFDbkIsU0FBaUM7UUFDckMsSUFBSSxPQUFPLEVBQUU7WUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1NBQ3pFO2FBQU07WUFDTixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7WUFDN0IseUVBQXlFO1NBQ3pFO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7O1lBdkJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQU5RLGFBQWEsdUJBV25CLE1BQU0sU0FBQyxjQUFjOzs7OztJQUZ2QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb25Db25maWcsIFNFQ1RJT05fQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL3NlY3Rpb24uY29uZmlnJztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFNlY3Rpb25Db25maWc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoU0VDVElPTl9DT05GSUcpIG9wdGlvbnM6IFNlY3Rpb25Db25maWcsXG5cdCkge1xuXHRcdGNvbnNvbGUubG9nKCdTZWN0aW9uU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBTZWN0aW9uQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cblx0cmVzb2x2ZShzZWN0aW9uOiBTZWN0aW9uKTogVHlwZTxTZWN0aW9uQ29tcG9uZW50PiB7XG5cdFx0bGV0IGNvbXBvbmVudDogVHlwZTxTZWN0aW9uQ29tcG9uZW50Pjtcblx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vcHRpb25zLnNlY3Rpb25zW3NlY3Rpb24uY29tcG9uZW50XSB8fCBTZWN0aW9uQ29tcG9uZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb21wb25lbnQgPSBTZWN0aW9uQ29tcG9uZW50O1xuXHRcdFx0Ly8gY29tcG9uZW50ID0gdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBTZWN0aW9uQ29tcG9uZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cbn1cbiJdfQ==