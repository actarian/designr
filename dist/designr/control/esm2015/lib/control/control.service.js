/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import { ControlComponent } from './control.component';
import { ControlGroup } from './group/control-group';
import { ControlInfo } from './info/control-info';
import * as i0 from "@angular/core";
import * as i1 from "../config/control.config";
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
                const control = new FormControl(option.value);
                if (option.disabled) {
                    control.disable();
                }
                controls[option.key] = control;
                // x.setControl(control); // !!!
            }
        }));
        /** @type {?} */
        const group = new FormGroup(controls);
        // console.log(group);
        options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (!(option instanceof ControlInfo)) {
                /** @type {?} */
                const validators = this.getValidators(option, group);
                // console.log(validators);
                group.controls[option.key].setValidators(validators);
            }
        }));
        return group;
    }
    /**
     * @param {?} options
     * @param {?} group
     * @return {?}
     */
    getValidators(options, group) {
        /** @type {?} */
        const validators = [];
        if (options.min) {
            validators.push(Validators.min(options.min));
        }
        if (options.max) {
            validators.push(Validators.max(options.max));
        }
        if (options.required) {
            validators.push(Validators.required);
        }
        if (options.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (options.minlength) {
            validators.push(Validators.minLength(options.minlength));
        }
        if (options.maxlength) {
            validators.push(Validators.maxLength(options.maxlength));
        }
        if (options.pattern) {
            validators.push(Validators.pattern(options.pattern));
        }
        if (options.match) {
            validators.push(matchValidator(options.match, options.reverse, group));
        }
        if (options.schema === 'email') {
            validators.push(Validators.email);
        }
        // console.log(options.key, validators);
        return validators;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    resolve(options) {
        /** @type {?} */
        let component;
        if (options) {
            component = this.options.controls[options.schema].component || ControlComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxjQUFjOzs7O0lBSTFCLFlBQ3lCLE9BQXNCO1FBRTlDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE4Qjs7Y0FDbkMsUUFBUSxHQUErQyxFQUFFO1FBQy9ELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7WUFDOUMseUVBQXlFO1lBQ3pFLElBQUksTUFBTSxZQUFZLFlBQVksRUFBRTs7c0JBQzdCLEtBQUssR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3pELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzdCO2lCQUFNLElBQUksQ0FBQyxD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UyxJQUFJLGdCQUFnQixDQUFDO1NBQ2hGO2FBQU07WUFDTixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7U0FDN0I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7WUFuRkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsYUFBYSx1QkFlbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBSHZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuL2dyb3VwL2NvbnRyb2wtZ3JvdXAnO1xuaW1wb3J0IHsgQ29udHJvbEluZm8gfSBmcm9tICcuL2luZm8vY29udHJvbC1pbmZvJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBDb250cm9sQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVFJPTF9DT05GSUcpIG9wdGlvbnM6IENvbnRyb2xDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvbnRyb2xDb25maWcob3B0aW9ucyB8fCB7fSk7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Db250cm9sIHwgRm9ybUdyb3VwIH0gPSB7fTtcblx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+KSA9PiB7XG5cdFx0XHQvLyBncm91cFt4LmtleV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgdGhpcy5nZXRWYWxpZGF0b3JzKHgsIGdyb3VwKSk7XG5cdFx0XHRpZiAob3B0aW9uIGluc3RhbmNlb2YgQ29udHJvbEdyb3VwKSB7XG5cdFx0XHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLnRvRm9ybUdyb3VwKG9wdGlvbi5vcHRpb25zKTtcblx0XHRcdFx0Y29udHJvbHNbb3B0aW9uLmtleV0gPSBncm91cDtcblx0XHRcdH0gZWxzZSBpZiAoIShvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sSW5mbykpIHtcblx0XHRcdFx0Y29uc3QgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wob3B0aW9uLnZhbHVlKTtcblx0XHRcdFx0aWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNvbnRyb2wuZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRyb2xzW29wdGlvbi5rZXldID0gY29udHJvbDtcblx0XHRcdFx0Ly8geC5zZXRDb250cm9sKGNvbnRyb2wpOyAvLyAhISFcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChjb250cm9scyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xuXHRcdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBDb250cm9sT3B0aW9uPGFueT4pID0+IHtcblx0XHRcdGlmICghKG9wdGlvbiBpbnN0YW5jZW9mIENvbnRyb2xJbmZvKSkge1xuXHRcdFx0XHRjb25zdCB2YWxpZGF0b3JzID0gdGhpcy5nZXRWYWxpZGF0b3JzKG9wdGlvbiwgZ3JvdXApO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3JzKTtcblx0XHRcdFx0Z3JvdXAuY29udHJvbHNbb3B0aW9uLmtleV0uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxuXHRnZXRWYWxpZGF0b3JzKG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT4sIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cdFx0aWYgKG9wdGlvbnMubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4ob3B0aW9ucy5taW4pKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMubWF4KSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgob3B0aW9ucy5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucmVxdWlyZWQpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucmVxdWlyZWRUcnVlKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5taW5sZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChvcHRpb25zLm1pbmxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5tYXhsZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChvcHRpb25zLm1heGxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5wYXR0ZXJuKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKG9wdGlvbnMucGF0dGVybikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5tYXRjaCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKG1hdGNoVmFsaWRhdG9yKG9wdGlvbnMubWF0Y2gsIG9wdGlvbnMucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuc2NoZW1hID09PSAnZW1haWwnKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKG9wdGlvbnMua2V5LCB2YWxpZGF0b3JzKTtcblx0XHRyZXR1cm4gdmFsaWRhdG9ycztcblx0fVxuXG5cdHJlc29sdmUob3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5jb250cm9sc1tvcHRpb25zLnNjaGVtYV0uY29tcG9uZW50IHx8IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19