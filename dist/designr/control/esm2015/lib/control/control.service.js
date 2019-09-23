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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsU0FBUyxFQUFpQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SSxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBRWxELE1BQU0sVUFBVSxhQUFhO0lBQzVCOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLEVBQUM7QUFDSCxDQUFDO0FBS0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFJMUIsWUFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQThCOztjQUNuQyxRQUFRLEdBQStDLEVBQUU7UUFDL0QsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1B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LFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFqQlEsYUFBYSx1QkF1Qm5CLE1BQU0sU0FBQyxjQUFjOzs7OztJQUh2QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBleGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2V4aXN0cy52YWxpZGF0b3InO1xuaW1wb3J0IHsgbWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uLCBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnLi9ncm91cC9jb250cm9sLWdyb3VwJztcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi9pbmZvL2NvbnRyb2wtaW5mbyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wVmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29udHJvbCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogQ29udHJvbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPTlRST0xfQ09ORklHKSBvcHRpb25zOiBDb250cm9sQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBDb250cm9sQ29uZmlnKG9wdGlvbnMgfHwge30pO1xuXHR9XG5cblx0dG9Gb3JtR3JvdXAob3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBjb250cm9sczogeyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB8IEZvcm1Hcm91cCB9ID0ge307XG5cdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb246IENvbnRyb2xPcHRpb248YW55PikgPT4ge1xuXHRcdFx0Ly8gZ3JvdXBbeC5rZXldID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCkpO1xuXHRcdFx0aWYgKG9wdGlvbiBpbnN0YW5jZW9mIENvbnRyb2xHcm91cCkge1xuXHRcdFx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gdGhpcy50b0Zvcm1Hcm91cChvcHRpb24ub3B0aW9ucyk7XG5cdFx0XHRcdGNvbnRyb2xzW29wdGlvbi5rZXldID0gZ3JvdXA7XG5cdFx0XHR9IGVsc2UgaWYgKCEob3B0aW9uIGluc3RhbmNlb2YgQ29udHJvbEluZm8pKSB7XG5cdFx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMob3B0aW9uKTtcblx0XHRcdFx0Y29uc3QgYXN5bmNWYWxpZGF0b3JzID0gdGhpcy5nZXRBc3luY1ZhbGlkYXRvcnMob3B0aW9uKTtcblx0XHRcdFx0Y29uc3QgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wob3B0aW9uLnZhbHVlLCB7XG5cdFx0XHRcdFx0dmFsaWRhdG9yczogdmFsaWRhdG9ycy5sZW5ndGggPyB2YWxpZGF0b3JzIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdGFzeW5jVmFsaWRhdG9yczogYXN5bmNWYWxpZGF0b3JzLmxlbmd0aCA/IGFzeW5jVmFsaWRhdG9ycyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChvcHRpb24uZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjb250cm9sLmRpc2FibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250cm9sc1tvcHRpb24ua2V5XSA9IGNvbnRyb2w7XG5cdFx0XHRcdC8vIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHRcdFx0XHQvLyB4LnNldENvbnRyb2woY29udHJvbCk7IC8vICEhIVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRncm91cC5tYXJrQXNEaXJ0eSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+KSA9PiB7XG5cdFx0XHRpZiAoIShvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sSW5mbykpIHtcblx0XHRcdFx0Y29uc3QgZ3JvdXBWYWxpZGF0b3JzID0gdGhpcy5nZXRHcm91cFZhbGlkYXRvcnMob3B0aW9uLCBncm91cCk7XG5cdFx0XHRcdGlmIChncm91cFZhbGlkYXRvcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRcdFx0Z3JvdXAuY29udHJvbHNbb3B0aW9uLmtleV0uc2V0VmFsaWRhdG9ycyhncm91cFZhbGlkYXRvcnMpO1xuXHRcdFx0XHRcdC8vIGdyb3VwLmNvbnRyb2xzW29wdGlvbi5rZXldLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdGdldFZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogVmFsaWRhdG9yRm5bXSB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuXHRcdGlmIChvcHRpb24ubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4ob3B0aW9uLm1pbikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLm1heCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KG9wdGlvbi5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnJlcXVpcmVkVHJ1ZSkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5taW5sZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChvcHRpb24ubWlubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24ubWF4bGVuZ3RoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgob3B0aW9uLm1heGxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4ob3B0aW9uLnBhdHRlcm4pKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5zY2hlbWEgPT09ICdlbWFpbCcpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHRnZXRBc3luY1ZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogQXN5bmNWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAob3B0aW9uLmV4aXN0cykge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKGV4aXN0c1ZhbGlkYXRvcihvcHRpb24uZXhpc3RzKSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWxpZGF0b3JzO1xuXHR9XG5cblx0Z2V0R3JvdXBWYWxpZGF0b3JzKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAob3B0aW9uLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3Iob3B0aW9uLm1hdGNoLCBvcHRpb24ucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHRyZXNvbHZlKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdFx0aWYgKG9wdGlvbikge1xuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzW29wdGlvbi5zY2hlbWFdLmNvbXBvbmVudCB8fCBDb250cm9sQ29tcG9uZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb21wb25lbnQgPSBDb250cm9sQ29tcG9uZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cbn1cbiJdfQ==