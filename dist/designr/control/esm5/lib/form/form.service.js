/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ControlCheckbox } from '../control/control-checkbox';
import { ControlEmail } from '../control/control-email';
import { ControlMarkdown } from '../control/control-markdown';
import { ControlNumber } from '../control/control-number';
import { ControlPassword } from '../control/control-password';
import { ControlRadio } from '../control/control-radio';
import { ControlSelect } from '../control/control-select';
import { ControlText } from '../control/control-text';
import { ControlService } from '../control/control.service';
import * as i0 from "@angular/core";
import * as i1 from "../control/control.service";
var FormService = /** @class */ (function () {
    function FormService(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getControlsFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var controls = options.map(function (o) {
            switch (o.schema) {
                case 'checkbox':
                    return new ControlCheckbox(o);
                case 'email':
                    return new ControlEmail(o);
                case 'number':
                    return new ControlNumber(o);
                case 'password':
                    return new ControlPassword(o);
                case 'radio':
                    return new ControlRadio(o);
                case 'select':
                    return new ControlSelect(o);
                case 'markdown':
                    return new ControlMarkdown(o);
                case 'text':
                    return new ControlText(o);
                default:
                    return new ControlText(o);
            }
        });
        controls.sort(function (a, b) { return a.order - b.order; });
        return controls;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getGroupFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var controls = this.getControlsFromOptions(options);
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    FormService.prototype.getGroupFromControls = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
    };
    FormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return [
        { type: ControlService }
    ]; };
    /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.ControlService)); }, token: FormService, providedIn: "root" });
    return FormService;
}());
export { FormService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormService.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRTVEO0lBS0MscUJBQ1MsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ25DLENBQUM7Ozs7O0lBRUwsNENBQXNCOzs7O0lBQXRCLFVBQXVCLE9BQWtDOztZQUNsRCxRQUFRLEdBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ2pELFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxVQUFVO29CQUNkLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssT0FBTztvQkFDWCxPQUFPLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLFFBQVE7b0JBQ1osT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxVQUFVO29CQUNkLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssT0FBTztvQkFDWCxPQUFPLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLFFBQVE7b0JBQ1osT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxVQUFVO29CQUNkLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssTUFBTTtvQkFDVixPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQjtvQkFDQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUMzQyxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELHlDQUFtQjs7OztJQUFuQixVQUFvQixPQUFrQzs7WUFDL0MsUUFBUSxHQUF1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDOztZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCwwQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsUUFBNEI7O1lBQzFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOztnQkE3Q0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxjQUFjOzs7c0JBWHZCO0NBNERDLEFBL0NELElBK0NDO1NBNUNZLFdBQVc7Ozs7OztJQUd0QixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSwgQ29udHJvbEJhc2VPcHRpb25zIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLWNoZWNrYm94JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC1lbWFpbCc7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtbWFya2Rvd24nO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlciB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC1udW1iZXInO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLXBhc3N3b3JkJztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC1yYWRpbyc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0IH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC10ZXh0JztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2Vcblx0KSB7IH1cblxuXHRnZXRDb250cm9sc0Zyb21PcHRpb25zKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10pOiBDb250cm9sQmFzZTxhbnk+W10ge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10gPSBvcHRpb25zLm1hcChvID0+IHtcblx0XHRcdHN3aXRjaCAoby5zY2hlbWEpIHtcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbENoZWNrYm94KG8pO1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sRW1haWwobyk7XG5cdFx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sTnVtYmVyKG8pO1xuXHRcdFx0XHRjYXNlICdwYXNzd29yZCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sUGFzc3dvcmQobyk7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xSYWRpbyhvKTtcblx0XHRcdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xTZWxlY3Qobyk7XG5cdFx0XHRcdGNhc2UgJ21hcmtkb3duJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xNYXJrZG93bihvKTtcblx0XHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sVGV4dChvKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xUZXh0KG8pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnRyb2xzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblx0XHRyZXR1cm4gY29udHJvbHM7XG5cdH1cblxuXHRnZXRHcm91cEZyb21PcHRpb25zKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10gPSB0aGlzLmdldENvbnRyb2xzRnJvbU9wdGlvbnMob3B0aW9ucyk7XG5cdFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxuXHRnZXRHcm91cEZyb21Db250cm9scyhjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBncm91cCA9IHRoaXMuY29udHJvbFNlcnZpY2UudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG59XG4iXX0=