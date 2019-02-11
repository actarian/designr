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
export class FormService {
    /**
     * @param {?} controlService
     */
    constructor(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getControlsFromOptions(options) {
        /** @type {?} */
        const controls = options.map(o => {
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
        controls.sort((a, b) => a.order - b.order);
        return controls;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getGroupFromOptions(options) {
        /** @type {?} */
        const controls = this.getControlsFromOptions(options);
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    getGroupFromControls(controls) {
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: ControlService }
];
/** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.ControlService)); }, token: FormService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormService.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUs1RCxNQUFNLE9BQU8sV0FBVzs7OztJQUV2QixZQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLHNCQUFzQixDQUFDLE9BQWtDOztjQUNsRCxRQUFRLEdBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEQsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNqQixLQUFLLFVBQVU7b0JBQ2QsT0FBTyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxPQUFPO29CQUNYLE9BQU8sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssUUFBUTtvQkFDWixPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFLLFVBQVU7b0JBQ2QsT0FBTyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxPQUFPO29CQUNYLE9BQU8sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssUUFBUTtvQkFDWixPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFLLFVBQVU7b0JBQ2QsT0FBTyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxNQUFNO29CQUNWLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCO29CQUNDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0I7UUFDRixDQUFDLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxPQUFrQzs7Y0FDL0MsUUFBUSxHQUF1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDOztjQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxRQUE0Qjs7Y0FDMUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFKUSxjQUFjOzs7Ozs7OztJQVFyQixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQmFzZSwgQ29udHJvbEJhc2VPcHRpb25zIH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQ29udHJvbENoZWNrYm94IH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLWNoZWNrYm94JztcbmltcG9ydCB7IENvbnRyb2xFbWFpbCB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1lbWFpbCc7XG5pbXBvcnQgeyBDb250cm9sTWFya2Rvd24gfSBmcm9tICcuL2NvbnRyb2xzL2NvbnRyb2wtbWFya2Rvd24nO1xuaW1wb3J0IHsgQ29udHJvbE51bWJlciB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1udW1iZXInO1xuaW1wb3J0IHsgQ29udHJvbFBhc3N3b3JkIH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLXBhc3N3b3JkJztcbmltcG9ydCB7IENvbnRyb2xSYWRpbyB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC1yYWRpbyc7XG5pbXBvcnQgeyBDb250cm9sU2VsZWN0IH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250cm9sVGV4dCB9IGZyb20gJy4vY29udHJvbHMvY29udHJvbC10ZXh0JztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9scy9jb250cm9sLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2Vcblx0KSB7IH1cblxuXHRnZXRDb250cm9sc0Zyb21PcHRpb25zKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10pOiBDb250cm9sQmFzZTxhbnk+W10ge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10gPSBvcHRpb25zLm1hcChvID0+IHtcblx0XHRcdHN3aXRjaCAoby5zY2hlbWEpIHtcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbENoZWNrYm94KG8pO1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sRW1haWwobyk7XG5cdFx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sTnVtYmVyKG8pO1xuXHRcdFx0XHRjYXNlICdwYXNzd29yZCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sUGFzc3dvcmQobyk7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xSYWRpbyhvKTtcblx0XHRcdFx0Y2FzZSAnc2VsZWN0Jzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xTZWxlY3Qobyk7XG5cdFx0XHRcdGNhc2UgJ21hcmtkb3duJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xNYXJrZG93bihvKTtcblx0XHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sVGV4dChvKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xUZXh0KG8pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnRyb2xzLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblx0XHRyZXR1cm4gY29udHJvbHM7XG5cdH1cblxuXHRnZXRHcm91cEZyb21PcHRpb25zKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10gPSB0aGlzLmdldENvbnRyb2xzRnJvbU9wdGlvbnMob3B0aW9ucyk7XG5cdFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxuXHRnZXRHcm91cEZyb21Db250cm9scyhjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBncm91cCA9IHRoaXMuY29udHJvbFNlcnZpY2UudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG59XG4iXX0=