/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlConfig, CONTROL_CONFIG } from '../config/control.config';
import { matchValidator } from '../directives/match.validator';
import { ControlComponent } from './control.component';
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
        if (options.email) {
            validators.push(Validators.email);
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
        // console.log(options.key, validators);
        return validators;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    toFormGroup(options) {
        /** @type {?} */
        const controls = {};
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            const control = new FormControl(x.value);
            if (x.disabled) {
                control.disable();
            }
            controls[x.key] = control;
            // x.setControl(control); // !!!
        }));
        /** @type {?} */
        const group = new FormGroup(controls);
        // console.log(group);
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const validators = this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUt2RCxNQUFNLE9BQU8sY0FBYzs7OztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsT0FBMkI7O1lBQzlCLFNBQWlDO1FBQ3JDLElBQUksT0FBTyxFQUFFO1lBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksZ0JBQWdCLENBQUM7U0FDaEY7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztTQUM3QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxPQUEyQixFQUFFLEtBQWdCOztjQUNwRCxVQUFVLEdBQWtCLEVBQUU7UUFDcEMsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCx3Q0FBd0M7UUFDeEMsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBNkI7O2NBQ2xDLFFBQVEsR0FBbUMsRUFBRTtRQUNuRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFOzs7a0JBRWIsT0FBTyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3JELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7WUFDRCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUMxQixnQ0FBZ0M7UUFDakMsQ0FBQyxFQUFDLENBQUM7O2NBQ0csS0FBSyxHQUFjLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNoRCxzQkFBc0I7UUFDdEIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7a0JBQ2IsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvQywyQkFBMkI7WUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7WUE1RUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsYUFBYSx1QkFhbkIsTUFBTSxTQUFDLGNBQWM7Ozs7O0lBSHZCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBDb250cm9sQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQ09OVFJPTF9DT05GSUcpIG9wdGlvbnM6IENvbnRyb2xDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvbnRyb2xDb25maWcob3B0aW9ucyB8fCB7fSk7XG5cdH1cblxuXHRyZXNvbHZlKG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5jb250cm9sc1tvcHRpb25zLnNjaGVtYV0uY29tcG9uZW50IHx8IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRnZXRWYWxpZGF0b3JzKG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAob3B0aW9ucy5taW4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihvcHRpb25zLm1pbikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5tYXgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heChvcHRpb25zLm1heCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5yZXF1aXJlZFRydWUpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmVtYWlsKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm1pbmxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKG9wdGlvbnMubWlubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm1heGxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKG9wdGlvbnMubWF4bGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4ob3B0aW9ucy5wYXR0ZXJuKSk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3Iob3B0aW9ucy5tYXRjaCwgb3B0aW9ucy5yZXZlcnNlLCBncm91cCkpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRpb25zLmtleSwgdmFsaWRhdG9ycyk7XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChvcHRpb25zOiBDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfSA9IHt9O1xuXHRcdG9wdGlvbnMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdC8vIGdyb3VwW3gua2V5XSA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlLCB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApKTtcblx0XHRcdGNvbnN0IGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUpO1xuXHRcdFx0aWYgKHguZGlzYWJsZWQpIHtcblx0XHRcdFx0Y29udHJvbC5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRjb250cm9sc1t4LmtleV0gPSBjb250cm9sO1xuXHRcdFx0Ly8geC5zZXRDb250cm9sKGNvbnRyb2wpOyAvLyAhISFcblx0XHR9KTtcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChjb250cm9scyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xuXHRcdG9wdGlvbnMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRncm91cC5jb250cm9sc1t4LmtleV0uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19