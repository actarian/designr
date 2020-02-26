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
export function noopValidator() {
    return (control) => {
        console.log(control);
        return null;
    };
}
export class ControlService {
    constructor(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    toFormGroup(options) {
        const controls = {};
        options.forEach((option) => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            if (option instanceof ControlGroup) {
                const group = this.toFormGroup(option.options);
                controls[option.key] = group;
            }
            else if (!(option instanceof ControlInfo)) {
                const validators = this.getValidators(option);
                const asyncValidators = this.getAsyncValidators(option);
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
        });
        const group = new FormGroup(controls);
        group.markAsDirty();
        // console.log(group);
        options.forEach((option) => {
            if (!(option instanceof ControlInfo)) {
                const groupValidators = this.getGroupValidators(option, group);
                if (groupValidators.length) {
                    // console.log(validators);
                    group.controls[option.key].setValidators(groupValidators);
                    // group.controls[option.key].updateValueAndValidity();
                }
            }
        });
        return group;
    }
    getValidators(option) {
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
    getAsyncValidators(option) {
        const validators = [];
        if (option.exists) {
            validators.push(existsValidator(option.exists));
        }
        return validators;
    }
    getGroupValidators(option, group) {
        const validators = [];
        if (option.match) {
            validators.push(matchValidator(option.match, option.reverse, group));
        }
        return validators;
    }
    resolve(option) {
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
ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(i0.ɵɵinject(CONTROL_CONFIG)); };
ControlService.ɵprov = i0.ɵɵdefineInjectable({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ControlConfig, decorators: [{
                type: Inject,
                args: [CONTROL_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxTQUFTLEVBQWlDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFbEQsTUFBTSxVQUFVLGFBQWE7SUFDNUIsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUMsQ0FBQztBQUNILENBQUM7QUFLRCxNQUFNLE9BQU8sY0FBYztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUE4QjtRQUN6QyxNQUFNLFFBQVEsR0FBK0MsRUFBRSxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUEwQixFQUFFLEVB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QUFnQixDQUFDO1NBQzdCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7NEVBdEdXLGNBQWMsY0FLakIsY0FBYztzREFMWCxjQUFjLFdBQWQsY0FBYyxtQkFGZCxNQUFNO2tEQUVOLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFNRSxNQUFNO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBleGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2V4aXN0cy52YWxpZGF0b3InO1xuaW1wb3J0IHsgbWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uLCBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnLi9ncm91cC9jb250cm9sLWdyb3VwJztcbmltcG9ydCB7IENvbnRyb2xJbmZvIH0gZnJvbSAnLi9pbmZvL2NvbnRyb2wtaW5mbyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wVmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29udHJvbCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogQ29udHJvbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPTlRST0xfQ09ORklHKSBvcHRpb25zOiBDb250cm9sQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBDb250cm9sQ29uZmlnKG9wdGlvbnMgfHwge30pO1xuXHR9XG5cblx0dG9Gb3JtR3JvdXAob3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBjb250cm9sczogeyBba2V5OiBzdHJpbmddOiBGb3JtQ29udHJvbCB8IEZvcm1Hcm91cCB9ID0ge307XG5cdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb246IENvbnRyb2xPcHRpb248YW55PikgPT4ge1xuXHRcdFx0Ly8gZ3JvdXBbeC5rZXldID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCkpO1xuXHRcdFx0aWYgKG9wdGlvbiBpbnN0YW5jZW9mIENvbnRyb2xHcm91cCkge1xuXHRcdFx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gdGhpcy50b0Zvcm1Hcm91cChvcHRpb24ub3B0aW9ucyk7XG5cdFx0XHRcdGNvbnRyb2xzW29wdGlvbi5rZXldID0gZ3JvdXA7XG5cdFx0XHR9IGVsc2UgaWYgKCEob3B0aW9uIGluc3RhbmNlb2YgQ29udHJvbEluZm8pKSB7XG5cdFx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMob3B0aW9uKTtcblx0XHRcdFx0Y29uc3QgYXN5bmNWYWxpZGF0b3JzID0gdGhpcy5nZXRBc3luY1ZhbGlkYXRvcnMob3B0aW9uKTtcblx0XHRcdFx0Y29uc3QgY29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wob3B0aW9uLnZhbHVlLCB7XG5cdFx0XHRcdFx0dmFsaWRhdG9yczogdmFsaWRhdG9ycy5sZW5ndGggPyB2YWxpZGF0b3JzIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdGFzeW5jVmFsaWRhdG9yczogYXN5bmNWYWxpZGF0b3JzLmxlbmd0aCA/IGFzeW5jVmFsaWRhdG9ycyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChvcHRpb24uZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjb250cm9sLmRpc2FibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250cm9sc1tvcHRpb24ua2V5XSA9IGNvbnRyb2w7XG5cdFx0XHRcdC8vIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHRcdFx0XHQvLyB4LnNldENvbnRyb2woY29udHJvbCk7IC8vICEhIVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRncm91cC5tYXJrQXNEaXJ0eSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+KSA9PiB7XG5cdFx0XHRpZiAoIShvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sSW5mbykpIHtcblx0XHRcdFx0Y29uc3QgZ3JvdXBWYWxpZGF0b3JzID0gdGhpcy5nZXRHcm91cFZhbGlkYXRvcnMob3B0aW9uLCBncm91cCk7XG5cdFx0XHRcdGlmIChncm91cFZhbGlkYXRvcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRcdFx0Z3JvdXAuY29udHJvbHNbb3B0aW9uLmtleV0uc2V0VmFsaWRhdG9ycyhncm91cFZhbGlkYXRvcnMpO1xuXHRcdFx0XHRcdC8vIGdyb3VwLmNvbnRyb2xzW29wdGlvbi5rZXldLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdGdldFZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogVmFsaWRhdG9yRm5bXSB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuXHRcdGlmIChvcHRpb24ubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4ob3B0aW9uLm1pbikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLm1heCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KG9wdGlvbi5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnJlcXVpcmVkVHJ1ZSkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5taW5sZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChvcHRpb24ubWlubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24ubWF4bGVuZ3RoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgob3B0aW9uLm1heGxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4ob3B0aW9uLnBhdHRlcm4pKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5zY2hlbWEgPT09ICdlbWFpbCcpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHRnZXRBc3luY1ZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogQXN5bmNWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAob3B0aW9uLmV4aXN0cykge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKGV4aXN0c1ZhbGlkYXRvcihvcHRpb24uZXhpc3RzKSk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWxpZGF0b3JzO1xuXHR9XG5cblx0Z2V0R3JvdXBWYWxpZGF0b3JzKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAob3B0aW9uLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3Iob3B0aW9uLm1hdGNoLCBvcHRpb24ucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHRyZXNvbHZlKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdFx0aWYgKG9wdGlvbikge1xuXHRcdFx0Y29tcG9uZW50ID0gdGhpcy5vcHRpb25zLmNvbnRyb2xzW29wdGlvbi5zY2hlbWFdLmNvbXBvbmVudCB8fCBDb250cm9sQ29tcG9uZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb21wb25lbnQgPSBDb250cm9sQ29tcG9uZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cbn1cbiJdfQ==