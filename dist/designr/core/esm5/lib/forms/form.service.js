/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ControlCheckbox } from './controls/control-checkbox';
import { ControlEmail } from './controls/control-email';
import { ControlMarkdown } from './controls/control-markdown';
import { ControlNumber } from './controls/control-number';
import { ControlPassword } from './controls/control-password';
import { ControlRadio } from './controls/control-radio';
import { ControlSelect } from './controls/control-select';
import { ControlText } from './controls/control-text';
import { ControlService } from './controls/control.service';
import * as i0 from "@angular/core";
import * as i1 from "./controls/control.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUU1RDtJQUtDLHFCQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLDRDQUFzQjs7OztJQUF0QixVQUF1QixPQUFrQzs7WUFDbEQsUUFBUSxHQUF1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUNqRCxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE9BQU87b0JBQ1gsT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxRQUFRO29CQUNaLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE9BQU87b0JBQ1gsT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxRQUFRO29CQUNaLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE1BQU07b0JBQ1YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0I7b0JBQ0MsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtRQUNGLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDM0MsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCx5Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsT0FBa0M7O1lBQy9DLFFBQVEsR0FBdUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQzs7WUFDbkUsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsMENBQW9COzs7O0lBQXBCLFVBQXFCLFFBQTRCOztZQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Z0JBN0NELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBSlEsY0FBYzs7O3NCQVh2QjtDQTREQyxBQS9DRCxJQStDQztTQTVDWSxXQUFXOzs7Ozs7SUFHdEIscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucyB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1iYXNlJztcbmltcG9ydCB7IENvbnRyb2xDaGVja2JveCB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1jaGVja2JveCc7XG5pbXBvcnQgeyBDb250cm9sRW1haWwgfSBmcm9tICcuL2NvbnRyb2xzL2NvbnRyb2wtZW1haWwnO1xuaW1wb3J0IHsgQ29udHJvbE1hcmtkb3duIH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLW1hcmtkb3duJztcbmltcG9ydCB7IENvbnRyb2xOdW1iZXIgfSBmcm9tICcuL2NvbnRyb2xzL2NvbnRyb2wtbnVtYmVyJztcbmltcG9ydCB7IENvbnRyb2xQYXNzd29yZCB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1wYXNzd29yZCc7XG5pbXBvcnQgeyBDb250cm9sUmFkaW8gfSBmcm9tICcuL2NvbnRyb2xzL2NvbnRyb2wtcmFkaW8nO1xuaW1wb3J0IHsgQ29udHJvbFNlbGVjdCB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udHJvbFRleHQgfSBmcm9tICcuL2NvbnRyb2xzL2NvbnRyb2wtdGV4dCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29udHJvbFNlcnZpY2U6IENvbnRyb2xTZXJ2aWNlXG5cdCkgeyB9XG5cblx0Z2V0Q29udHJvbHNGcm9tT3B0aW9ucyhvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdKTogQ29udHJvbEJhc2U8YW55PltdIHtcblx0XHRjb25zdCBjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdID0gb3B0aW9ucy5tYXAobyA9PiB7XG5cdFx0XHRzd2l0Y2ggKG8uc2NoZW1hKSB7XG5cdFx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xDaGVja2JveChvKTtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbEVtYWlsKG8pO1xuXHRcdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbE51bWJlcihvKTtcblx0XHRcdFx0Y2FzZSAncGFzc3dvcmQnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbFBhc3N3b3JkKG8pO1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sUmFkaW8obyk7XG5cdFx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sU2VsZWN0KG8pO1xuXHRcdFx0XHRjYXNlICdtYXJrZG93bic6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sTWFya2Rvd24obyk7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbFRleHQobyk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sVGV4dChvKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjb250cm9scy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cdFx0cmV0dXJuIGNvbnRyb2xzO1xuXHR9XG5cblx0Z2V0R3JvdXBGcm9tT3B0aW9ucyhvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdID0gdGhpcy5nZXRDb250cm9sc0Zyb21PcHRpb25zKG9wdGlvbnMpO1xuXHRcdGNvbnN0IGdyb3VwID0gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChjb250cm9scyk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cblx0Z2V0R3JvdXBGcm9tQ29udHJvbHMoY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19