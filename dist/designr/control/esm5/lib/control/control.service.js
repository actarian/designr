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
    return function (control) {
        console.log(control);
        return null;
    };
}
var ControlService = /** @class */ (function () {
    function ControlService(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    ControlService.prototype.toFormGroup = function (options) {
        var _this = this;
        var controls = {};
        options.forEach(function (option) {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            if (option instanceof ControlGroup) {
                var group_1 = _this.toFormGroup(option.options);
                controls[option.key] = group_1;
            }
            else if (!(option instanceof ControlInfo)) {
                var validators = _this.getValidators(option);
                var asyncValidators = _this.getAsyncValidators(option);
                var control = new FormControl(option.value, {
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
        var group = new FormGroup(controls);
        group.markAsDirty();
        // console.log(group);
        options.forEach(function (option) {
            if (!(option instanceof ControlInfo)) {
                var groupValidators = _this.getGroupValidators(option, group);
                if (groupValidators.length) {
                    // console.log(validators);
                    group.controls[option.key].setValidators(groupValidators);
                    // group.controls[option.key].updateValueAndValidity();
                }
            }
        });
        return group;
    };
    ControlService.prototype.getValidators = function (option) {
        var validators = [];
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
    };
    ControlService.prototype.getAsyncValidators = function (option) {
        var validators = [];
        if (option.exists) {
            validators.push(existsValidator(option.exists));
        }
        return validators;
    };
    ControlService.prototype.getGroupValidators = function (option, group) {
        var validators = [];
        if (option.match) {
            validators.push(matchValidator(option.match, option.reverse, group));
        }
        return validators;
    };
    ControlService.prototype.resolve = function (option) {
        var component;
        if (option) {
            component = this.options.controls[option.schema].component || ControlComponent;
        }
        else {
            component = ControlComponent;
        }
        return component;
    };
    ControlService.ɵfac = function ControlService_Factory(t) { return new (t || ControlService)(i0.ɵɵinject(CONTROL_CONFIG)); };
    ControlService.ɵprov = i0.ɵɵdefineInjectable({ token: ControlService, factory: ControlService.ɵfac, providedIn: 'root' });
    return ControlService;
}());
export { ControlService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ControlConfig, decorators: [{
                type: Inject,
                args: [CONTROL_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxTQUFTLEVBQWlDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFbEQsTUFBTSxVQUFVLGFBQWE7SUFDNUIsT0FBTyxVQUFDLE9BQXdCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDLENBQUM7QUFDSCxDQUFDO0FBRUQ7SUFPQyx3QkFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBOEI7UUFBMUMsaUJBb0NDO1FBbkNBLElBQU0sUUFBUSxHQUErQyxFQUFFLENBQUM7UUFDaEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQTBCO1lBQzFDLHlFQUF5RTtZ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QWdCLENBQUM7U0FDN0I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO2dGQXRHVyxjQUFjLGNBS2pCLGNBQWM7MERBTFgsY0FBYyxXQUFkLGNBQWMsbUJBRmQsTUFBTTt5QkFsQm5CO0NBNEhDLEFBM0dELElBMkdDO1NBeEdZLGNBQWM7a0RBQWQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU1FLE1BQU07dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xDb25maWcsIENPTlRST0xfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcbmltcG9ydCB7IGV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZXhpc3RzLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICcuL2dyb3VwL2NvbnRyb2wtZ3JvdXAnO1xuaW1wb3J0IHsgQ29udHJvbEluZm8gfSBmcm9tICcuL2luZm8vY29udHJvbC1pbmZvJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3BWYWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblx0XHRjb25zb2xlLmxvZyhjb250cm9sKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBDb250cm9sQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVFJPTF9DT05GSUcpIG9wdGlvbnM6IENvbnRyb2xDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvbnRyb2xDb25maWcob3B0aW9ucyB8fCB7fSk7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Db250cm9sIHwgRm9ybUdyb3VwIH0gPSB7fTtcblx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbjogQ29udHJvbE9wdGlvbjxhbnk+KSA9PiB7XG5cdFx0XHQvLyBncm91cFt4LmtleV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgdGhpcy5nZXRWYWxpZGF0b3JzKHgsIGdyb3VwKSk7XG5cdFx0XHRpZiAob3B0aW9uIGluc3RhbmNlb2YgQ29udHJvbEdyb3VwKSB7XG5cdFx0XHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSB0aGlzLnRvRm9ybUdyb3VwKG9wdGlvbi5vcHRpb25zKTtcblx0XHRcdFx0Y29udHJvbHNbb3B0aW9uLmtleV0gPSBncm91cDtcblx0XHRcdH0gZWxzZSBpZiAoIShvcHRpb24gaW5zdGFuY2VvZiBDb250cm9sSW5mbykpIHtcblx0XHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycyhvcHRpb24pO1xuXHRcdFx0XHRjb25zdCBhc3luY1ZhbGlkYXRvcnMgPSB0aGlzLmdldEFzeW5jVmFsaWRhdG9ycyhvcHRpb24pO1xuXHRcdFx0XHRjb25zdCBjb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChvcHRpb24udmFsdWUsIHtcblx0XHRcdFx0XHR2YWxpZGF0b3JzOiB2YWxpZGF0b3JzLmxlbmd0aCA/IHZhbGlkYXRvcnMgOiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0YXN5bmNWYWxpZGF0b3JzOiBhc3luY1ZhbGlkYXRvcnMubGVuZ3RoID8gYXN5bmNWYWxpZGF0b3JzIDogdW5kZWZpbmVkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNvbnRyb2wuZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRyb2xzW29wdGlvbi5rZXldID0gY29udHJvbDtcblx0XHRcdFx0Ly8gY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG5cdFx0XHRcdC8vIHguc2V0Q29udHJvbChjb250cm9sKTsgLy8gISEhXG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoY29udHJvbHMpO1xuXHRcdGdyb3VwLm1hcmtBc0RpcnR5KCk7XG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xuXHRcdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBDb250cm9sT3B0aW9uPGFueT4pID0+IHtcblx0XHRcdGlmICghKG9wdGlvbiBpbnN0YW5jZW9mIENvbnRyb2xJbmZvKSkge1xuXHRcdFx0XHRjb25zdCBncm91cFZhbGlkYXRvcnMgPSB0aGlzLmdldEdyb3VwVmFsaWRhdG9ycyhvcHRpb24sIGdyb3VwKTtcblx0XHRcdFx0aWYgKGdyb3VwVmFsaWRhdG9ycy5sZW5ndGgpIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3JzKTtcblx0XHRcdFx0XHRncm91cC5jb250cm9sc1tvcHRpb24ua2V5XS5zZXRWYWxpZGF0b3JzKGdyb3VwVmFsaWRhdG9ycyk7XG5cdFx0XHRcdFx0Ly8gZ3JvdXAuY29udHJvbHNbb3B0aW9uLmtleV0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cblx0Z2V0VmFsaWRhdG9ycyhvcHRpb246IElDb250cm9sT3B0aW9uPGFueT4pOiBWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cdFx0aWYgKG9wdGlvbi5taW4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihvcHRpb24ubWluKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24ubWF4KSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgob3B0aW9uLm1heCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnJlcXVpcmVkKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24ucmVxdWlyZWRUcnVlKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLm1pbmxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKG9wdGlvbi5taW5sZW5ndGgpKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbi5tYXhsZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChvcHRpb24ubWF4bGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24ucGF0dGVybikge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihvcHRpb24ucGF0dGVybikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnNjaGVtYSA9PT0gJ2VtYWlsJykge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsaWRhdG9ycztcblx0fVxuXG5cdGdldEFzeW5jVmFsaWRhdG9ycyhvcHRpb246IElDb250cm9sT3B0aW9uPGFueT4pOiBBc3luY1ZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSA9IFtdO1xuXHRcdGlmIChvcHRpb24uZXhpc3RzKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goZXhpc3RzVmFsaWRhdG9yKG9wdGlvbi5leGlzdHMpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHRnZXRHcm91cFZhbGlkYXRvcnMob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+LCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm5bXSB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuXHRcdGlmIChvcHRpb24ubWF0Y2gpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChtYXRjaFZhbGlkYXRvcihvcHRpb24ubWF0Y2gsIG9wdGlvbi5yZXZlcnNlLCBncm91cCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsaWRhdG9ycztcblx0fVxuXG5cdHJlc29sdmUob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KTogVHlwZTxDb250cm9sQ29tcG9uZW50PiB7XG5cdFx0bGV0IGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50Pjtcblx0XHRpZiAob3B0aW9uKSB7XG5cdFx0XHRjb21wb25lbnQgPSB0aGlzLm9wdGlvbnMuY29udHJvbHNbb3B0aW9uLnNjaGVtYV0uY29tcG9uZW50IHx8IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxufVxuIl19