/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { existsValidator } from '../directives/exists.validator';
import { matchValidator } from '../directives/match.validator';
import { ControlComponent } from './control.component';
import { ControlGroup } from './group/control-group';
import { ControlInfo } from './info/control-info';
import * as i0 from "@angular/core";
import * as i1 from "../config/control.config";
/**
 * @return {?}
 */
export function noopValidator() {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        console.log(control);
        return null;
    });
}
export class ControlService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    toFormGroup(options) {
        /** @type {?} */
        const controls = {};
        options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            if (option instanceof ControlGroup) {
                /** @type {?} */
                const group = this.toFormGroup(option.options);
                controls[option.key] = group;
            }
            else if (!(option instanceof ControlInfo)) {
                /** @type {?} */
                const validators = this.getValidators(option);
                /** @type {?} */
                const asyncValidators = this.getAsyncValidators(option);
                /** @type {?} */
                const control = new FormControl(option.value, {
                    validators: validators.length ? validators : undefined,
                    asyncValidators: asyncValidators.length ? asyncValidators : undefined,
                });
                if (option.disabled) {
                    control.disable();
                }
                controls[option.key] = control;
                // control.updateValueAndValidity();
                // x.setControl(control); // !!!
            }
        }));
        /** @type {?} */
        const group = new FormGroup(controls);
        group.markAsDirty();
        // console.log(group);
        options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (!(option instanceof ControlInfo)) {
                /** @type {?} */
                const groupValidators = this.getGroupValidators(option, group);
                if (groupValidators.length) {
                    // console.log(validators);
                    group.controls[option.key].setValidators(groupValidators);
                    // group.controls[option.key].updateValueAndValidity();
                }
            }
        }));
        return group;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getValidators(option) {
        /** @type {?} */
        const validators = [];
        if (option.min) {
            validators.push(Validators.min(option.min));
        }
        if (option.max) {
            validators.push(Validators.max(option.max));
        }
        if (option.required) {
            validators.push(Validators.required);
        }
        if (option.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (option.minlength) {
            validators.push(Validators.minLength(option.minlength));
        }
        if (option.maxlength) {
            validators.push(Validators.maxLength(option.maxlength));
        }
        if (option.pattern) {
            validators.push(Validators.pattern(option.pattern));
        }
        if (option.schema === 'email') {
            validators.push(Validators.email);
        }
        return validators;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getAsyncValidators(option) {
        /** @type {?} */
        const validators = [];
        if (option.exists) {
            validators.push(existsValidator(option.exists));
        }
        return validators;
    }
    /**
     * @param {?} option
     * @param {?} group
     * @return {?}
     */
    getGroupValidators(option, group) {
        /** @type {?} */
        const validators = [];
        if (option.match) {
            validators.push(matchValidator(option.match, option.reverse, group));
        }
        return validators;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    resolve(option) {
        /** @type {?} */
        let component;
        if (option) {
            component = this.options.controls[option.schema].component || ControlComponent;
        }
        else {
            component = ControlComponent;
        }
        return component;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsU0FBUyxFQUFpQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SSxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBRWxELE1BQU0sVUFBVSxhQUFhO0lBQzVCOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLEVBQUM7QUFDSCxDQUFDO0FBS0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFJMUIsWUFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQThCOztjQUNuQyxRQUFRLEdBQStDLEVBQUU7UUFDL0QsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQTBCLEVBQUUsRUFBRTtZQUM5Qyx5RUFBeUU7WUFDekUsSUFBSSxNQUFNLFlBQVksWUFBWSxFQUFFOztzQkFDN0IsS0FBSyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDekQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLFdBQVcsQ0FBQyxFQUFFOztzQkFDdEMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztzQkFDdkMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7O3NCQUNqRCxPQUFPLEdBQWdCLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQzFELFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7b0JBQ3RELGVBQWUsRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVM7aUJBQ3JFLENBQUM7Z0JBQ0YsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNwQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2xCO2dCQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixvQ0FBb0M7Z0JBQ3BDLGdDQUFnQzthQUNoQztRQUNGLENBQUMsRUFBQyxDQUFDOztjQUNHLEtBQUssR0FBYyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFzQjtRQUN0QixPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxXQUFXLENBQUMsRUFBRTs7c0JBQy9CLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztnQkFDOUQsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO29CQUMzQiwyQkFBMkI7b0JBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDMUQsdURBQXVEO2lCQUN2RDthQUNEO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQTJCOztjQUNsQyxVQUFVLEdBQWtCLEVBQUU7UUFDcEMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM5QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBMkI7O2NBQ3ZDLFVBQVUsR0FBdUIsRUFBRTtRQUN6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUEyQixFQUFFLEtBQWdCOztjQUN6RCxVQUFVLEdBQWtCLEVBQUU7UUFDcEMsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBMkI7O1lBQzlCLFNBQWlDO1FBQ3JDLElBQUksTUFBTSxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksZ0JBQWdCLENBQUM7U0FDL0U7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztTQUM3QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7OztZQXpHRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFqQlEsYUFBYSx1QkF1Qm5CLE1BQU0sU0FBQyxjQUFjOzs7OztJQUh2QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvY29udHJvbC5jb25maWcnO1xyXG5pbXBvcnQgeyBleGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2V4aXN0cy52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29udHJvbE9wdGlvbiwgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuL2dyb3VwL2NvbnRyb2wtZ3JvdXAnO1xyXG5pbXBvcnQgeyBDb250cm9sSW5mbyB9IGZyb20gJy4vaW5mby9jb250cm9sLWluZm8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vb3BWYWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG5cdHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coY29udHJvbCk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBDb250cm9sQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoQ09OVFJPTF9DT05GSUcpIG9wdGlvbnM6IENvbnRyb2xDb25maWdcclxuXHQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sU2VydmljZScsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvbnRyb2xDb25maWcob3B0aW9ucyB8fCB7fSk7XHJcblx0fVxyXG5cclxuXHR0b0Zvcm1Hcm91cChvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W10pOiBGb3JtR3JvdXAge1xyXG5cdFx0Y29uc3QgY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfCBGb3JtR3JvdXAgfSA9IHt9O1xyXG5cdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb246IENvbnRyb2xPcHRpb248YW55PikgPT4ge1xyXG5cdFx0XHQvLyBncm91cFt4LmtleV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgdGhpcy5nZXRWYWxpZGF0b3JzKHgsIGdyb3VwKSk7XHJcblx0XHRcdGlmIChvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sR3JvdXApIHtcclxuXHRcdFx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gdGhpcy50b0Zvcm1Hcm91cChvcHRpb24ub3B0aW9ucyk7XHJcblx0XHRcdFx0Y29udHJvbHNbb3B0aW9uLmtleV0gPSBncm91cDtcclxuXHRcdFx0fSBlbHNlIGlmICghKG9wdGlvbiBpbnN0YW5jZW9mIENvbnRyb2xJbmZvKSkge1xyXG5cdFx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMob3B0aW9uKTtcclxuXHRcdFx0XHRjb25zdCBhc3luY1ZhbGlkYXRvcnMgPSB0aGlzLmdldEFzeW5jVmFsaWRhdG9ycyhvcHRpb24pO1xyXG5cdFx0XHRcdGNvbnN0IGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKG9wdGlvbi52YWx1ZSwge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yczogdmFsaWRhdG9ycy5sZW5ndGggPyB2YWxpZGF0b3JzIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdFx0YXN5bmNWYWxpZGF0b3JzOiBhc3luY1ZhbGlkYXRvcnMubGVuZ3RoID8gYXN5bmNWYWxpZGF0b3JzIDogdW5kZWZpbmVkLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChvcHRpb24uZGlzYWJsZWQpIHtcclxuXHRcdFx0XHRcdGNvbnRyb2wuZGlzYWJsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250cm9sc1tvcHRpb24ua2V5XSA9IGNvbnRyb2w7XHJcblx0XHRcdFx0Ly8gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcblx0XHRcdFx0Ly8geC5zZXRDb250cm9sKGNvbnRyb2wpOyAvLyAhISFcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChjb250cm9scyk7XHJcblx0XHRncm91cC5tYXJrQXNEaXJ0eSgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xyXG5cdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb246IENvbnRyb2xPcHRpb248YW55PikgPT4ge1xyXG5cdFx0XHRpZiAoIShvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sSW5mbykpIHtcclxuXHRcdFx0XHRjb25zdCBncm91cFZhbGlkYXRvcnMgPSB0aGlzLmdldEdyb3VwVmFsaWRhdG9ycyhvcHRpb24sIGdyb3VwKTtcclxuXHRcdFx0XHRpZiAoZ3JvdXBWYWxpZGF0b3JzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XHJcblx0XHRcdFx0XHRncm91cC5jb250cm9sc1tvcHRpb24ua2V5XS5zZXRWYWxpZGF0b3JzKGdyb3VwVmFsaWRhdG9ycyk7XHJcblx0XHRcdFx0XHQvLyBncm91cC5jb250cm9sc1tvcHRpb24ua2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblxyXG5cdGdldFZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogVmFsaWRhdG9yRm5bXSB7XHJcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XHJcblx0XHRpZiAob3B0aW9uLm1pbikge1xyXG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4ob3B0aW9uLm1pbikpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbi5tYXgpIHtcclxuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KG9wdGlvbi5tYXgpKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb24ucmVxdWlyZWQpIHtcclxuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbi5yZXF1aXJlZFRydWUpIHtcclxuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb24ubWlubGVuZ3RoKSB7XHJcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChvcHRpb24ubWlubGVuZ3RoKSk7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9uLm1heGxlbmd0aCkge1xyXG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgob3B0aW9uLm1heGxlbmd0aCkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbi5wYXR0ZXJuKSB7XHJcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4ob3B0aW9uLnBhdHRlcm4pKTtcclxuXHRcdH1cclxuXHRcdGlmIChvcHRpb24uc2NoZW1hID09PSAnZW1haWwnKSB7XHJcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWxpZGF0b3JzO1xyXG5cdH1cclxuXHJcblx0Z2V0QXN5bmNWYWxpZGF0b3JzKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pik6IEFzeW5jVmFsaWRhdG9yRm5bXSB7XHJcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcclxuXHRcdGlmIChvcHRpb24uZXhpc3RzKSB7XHJcblx0XHRcdHZhbGlkYXRvcnMucHVzaChleGlzdHNWYWxpZGF0b3Iob3B0aW9uLmV4aXN0cykpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XHJcblx0fVxyXG5cclxuXHRnZXRHcm91cFZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+LCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm5bXSB7XHJcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XHJcblx0XHRpZiAob3B0aW9uLm1hdGNoKSB7XHJcblx0XHRcdHZhbGlkYXRvcnMucHVzaChtYXRjaFZhbGlkYXRvcihvcHRpb24ubWF0Y2gsIG9wdGlvbi5yZXZlcnNlLCBncm91cCkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XHJcblx0fVxyXG5cclxuXHRyZXNvbHZlKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xyXG5cdFx0bGV0IGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50PjtcclxuXHRcdGlmIChvcHRpb24pIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzW29wdGlvbi5zY2hlbWFdLmNvbXBvbmVudCB8fCBDb250cm9sQ29tcG9uZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gQ29udHJvbENvbXBvbmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjb21wb25lbnQ7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=