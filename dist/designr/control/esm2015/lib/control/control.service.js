/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import * as i0 from "@angular/core";
import * as i1 from "../config/control.config";
export class ControlService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('ControlService', options);
        options = options || {};
        this.options = new ControlConfig(options);
    }
    /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    getValidators(control, group) {
        /** @type {?} */
        const validators = [];
        if (control.min) {
            validators.push(Validators.min(control.min));
        }
        if (control.max) {
            validators.push(Validators.max(control.max));
        }
        if (control.required) {
            validators.push(Validators.required);
        }
        if (control.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (control.email) {
            validators.push(Validators.email);
        }
        if (control.minLength) {
            validators.push(Validators.minLength(control.minLength));
        }
        if (control.maxLength) {
            validators.push(Validators.maxLength(control.maxLength));
        }
        if (control.pattern) {
            validators.push(Validators.pattern(control.pattern));
        }
        if (control.match) {
            validators.push(matchValidator(control.match, control.reverse, group));
        }
        // console.log(control.key, validators);
        return validators;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    toFormGroup(controls) {
        /** @type {?} */
        const options = {};
        controls.forEach(x => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            const formControl = new FormControl(x.value);
            if (x.disabled) {
                formControl.disable();
            }
            options[x.key] = formControl;
            // x.setControl(formControl); // !!!
        });
        /** @type {?} */
        const group = new FormGroup(options);
        // console.log(group);
        controls.forEach(x => {
            /** @type {?} */
            const validators = this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        });
        return group;
    }
}
ControlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ControlService.ctorParameters = () => [
    { type: ControlConfig, decorators: [{ type: Inject, args: [CONTROL_CONFIG,] }] }
];
/** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(i0.inject(i1.CONTROL_CONFIG)); }, token: ControlService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ControlService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQU0vRCxNQUFNLE9BQU8sY0FBYzs7OztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBeUIsRUFBRSxLQUFnQjs7Y0FDbEQsVUFBVSxHQUFrQixFQUFFO1FBQ3BDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0Qsd0NBQXdDO1FBQ3hDLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQTRCOztjQUNqQyxPQUFPLEdBQVEsRUFBRTtRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzs7a0JBRWQsV0FBVyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdEI7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUM3QixvQ0FBb0M7UUFDckMsQ0FBQyxDQUFDLENBQUM7O2NBQ0csS0FBSyxHQUFjLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUMvQyxzQkFBc0I7UUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvQywyQkFBMkI7WUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUFuRUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTlEsYUFBYSx1QkFZbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBSHZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IENvbnRyb2xDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT05UUk9MX0NPTkZJRykgb3B0aW9uczogQ29udHJvbENvbmZpZ1xuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbFNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgQ29udHJvbENvbmZpZyhvcHRpb25zKTtcblx0fVxuXG5cdGdldFZhbGlkYXRvcnMoY29udHJvbDogQ29udHJvbEJhc2U8YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAoY29udHJvbC5taW4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihjb250cm9sLm1pbikpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heChjb250cm9sLm1heCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZFRydWUpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLmVtYWlsKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1pbkxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGNvbnRyb2wubWluTGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1heExlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGNvbnRyb2wubWF4TGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oY29udHJvbC5wYXR0ZXJuKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3IoY29udHJvbC5tYXRjaCwgY29udHJvbC5yZXZlcnNlLCBncm91cCkpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhjb250cm9sLmtleSwgdmFsaWRhdG9ycyk7XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Ly8gZ3JvdXBbeC5rZXldID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCkpO1xuXHRcdFx0Y29uc3QgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUpO1xuXHRcdFx0aWYgKHguZGlzYWJsZWQpIHtcblx0XHRcdFx0Zm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXHRcdFx0b3B0aW9uc1t4LmtleV0gPSBmb3JtQ29udHJvbDtcblx0XHRcdC8vIHguc2V0Q29udHJvbChmb3JtQ29udHJvbCk7IC8vICEhIVxuXHRcdH0pO1xuXHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKG9wdGlvbnMpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3JzKTtcblx0XHRcdGdyb3VwLmNvbnRyb2xzW3gua2V5XS5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG59XG4iXX0=