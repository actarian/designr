/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import { ControlBaseComponent } from './base/control-base.component';
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
     * @return {?}
     */
    resolve(control) {
        /** @type {?} */
        let component;
        if (control) {
            component = this.options.controls[control.schema] || ControlBaseComponent;
        }
        else {
            component = ControlBaseComponent;
        }
        return component;
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
        if (control.minlength) {
            validators.push(Validators.minLength(control.minlength));
        }
        if (control.maxlength) {
            validators.push(Validators.maxLength(control.maxlength));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUtyRSxNQUFNLE9BQU8sY0FBYzs7OztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUF5Qjs7WUFDNUIsU0FBcUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFvQixDQUFDO1NBQzFFO2FBQU07WUFDTixTQUFTLEdBQUcsb0JBQW9CLENBQUM7U0FDakM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBeUIsRUFBRSxLQUFnQjs7Y0FDbEQsVUFBVSxHQUFrQixFQUFFO1FBQ3BDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0Qsd0NBQXdDO1FBQ3hDLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQTRCOztjQUNqQyxPQUFPLEdBQVEsRUFBRTtRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzs7a0JBRWQsV0FBVyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdEI7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUM3QixvQ0FBb0M7UUFDckMsQ0FBQyxDQUFDLENBQUM7O2NBQ0csS0FBSyxHQUFjLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUMvQyxzQkFBc0I7UUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvQywyQkFBMkI7WUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUE3RUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsYUFBYSx1QkFhbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBSHZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9iYXNlL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQgeyBDb250cm9sQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9jb250cm9sLWJhc2UuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBDb250cm9sQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVFJPTF9DT05GSUcpIG9wdGlvbnM6IENvbnRyb2xDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvbnRyb2xDb25maWcob3B0aW9ucyk7XG5cdH1cblxuXHRyZXNvbHZlKGNvbnRyb2w6IENvbnRyb2xCYXNlPGFueT4pOiBUeXBlPENvbnRyb2xCYXNlQ29tcG9uZW50PiB7XG5cdFx0bGV0IGNvbXBvbmVudDogVHlwZTxDb250cm9sQmFzZUNvbXBvbmVudD47XG5cdFx0aWYgKGNvbnRyb2wpIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5jb250cm9sc1tjb250cm9sLnNjaGVtYV0gfHwgQ29udHJvbEJhc2VDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IENvbnRyb2xCYXNlQ29tcG9uZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcG9uZW50O1xuXHR9XG5cblx0Z2V0VmFsaWRhdG9ycyhjb250cm9sOiBDb250cm9sQmFzZTxhbnk+LCBncm91cDogRm9ybUdyb3VwKTogVmFsaWRhdG9yRm5bXSB7XG5cdFx0Y29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xuXHRcdGlmIChjb250cm9sLm1pbikge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluKGNvbnRyb2wubWluKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1heCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KGNvbnRyb2wubWF4KSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLnJlcXVpcmVkKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLnJlcXVpcmVkVHJ1ZSkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wuZW1haWwpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wubWlubGVuZ3RoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgoY29udHJvbC5taW5sZW5ndGgpKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wubWF4bGVuZ3RoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgoY29udHJvbC5tYXhsZW5ndGgpKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wucGF0dGVybikge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucGF0dGVybihjb250cm9sLnBhdHRlcm4pKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wubWF0Y2gpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChtYXRjaFZhbGlkYXRvcihjb250cm9sLm1hdGNoLCBjb250cm9sLnJldmVyc2UsIGdyb3VwKSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKGNvbnRyb2wua2V5LCB2YWxpZGF0b3JzKTtcblx0XHRyZXR1cm4gdmFsaWRhdG9ycztcblx0fVxuXG5cdHRvRm9ybUdyb3VwKGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xuXHRcdGNvbnRyb2xzLmZvckVhY2goeCA9PiB7XG5cdFx0XHQvLyBncm91cFt4LmtleV0gPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSwgdGhpcy5nZXRWYWxpZGF0b3JzKHgsIGdyb3VwKSk7XG5cdFx0XHRjb25zdCBmb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeC52YWx1ZSk7XG5cdFx0XHRpZiAoeC5kaXNhYmxlZCkge1xuXHRcdFx0XHRmb3JtQ29udHJvbC5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRvcHRpb25zW3gua2V5XSA9IGZvcm1Db250cm9sO1xuXHRcdFx0Ly8geC5zZXRDb250cm9sKGZvcm1Db250cm9sKTsgLy8gISEhXG5cdFx0fSk7XG5cdFx0Y29uc3QgZ3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAob3B0aW9ucyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xuXHRcdGNvbnRyb2xzLmZvckVhY2goeCA9PiB7XG5cdFx0XHRjb25zdCB2YWxpZGF0b3JzID0gdGhpcy5nZXRWYWxpZGF0b3JzKHgsIGdyb3VwKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbGlkYXRvcnMpO1xuXHRcdFx0Z3JvdXAuY29udHJvbHNbeC5rZXldLnNldFZhbGlkYXRvcnModmFsaWRhdG9ycyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cbn1cbiJdfQ==