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
var ControlService = /** @class */ (function () {
    function ControlService(options) {
        // console.log('ControlService', options);
        this.options = new ControlConfig(options || {});
    }
    /**
     * @param {?} options
     * @return {?}
     */
    ControlService.prototype.resolve = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var component;
        if (options) {
            component = this.options.controls[options.schema].component || ControlComponent;
        }
        else {
            component = ControlComponent;
        }
        return component;
    };
    /**
     * @param {?} options
     * @param {?} group
     * @return {?}
     */
    ControlService.prototype.getValidators = /**
     * @param {?} options
     * @param {?} group
     * @return {?}
     */
    function (options, group) {
        /** @type {?} */
        var validators = [];
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
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ControlService.prototype.toFormGroup = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var controls = {};
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            var control = new FormControl(x.value);
            if (x.disabled) {
                control.disable();
            }
            controls[x.key] = control;
            // x.setControl(control); // !!!
        }));
        /** @type {?} */
        var group = new FormGroup(controls);
        // console.log(group);
        options.forEach((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var validators = _this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        }));
        return group;
    };
    ControlService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ControlService.ctorParameters = function () { return [
        { type: ControlConfig, decorators: [{ type: Inject, args: [CONTROL_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(i0.inject(i1.CONTROL_CONFIG)); }, token: ControlService, providedIn: "root" });
    return ControlService;
}());
export { ControlService };
if (false) {
    /** @type {?} */
    ControlService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV2RDtJQU9DLHdCQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBNEI7O1lBQy9CLFNBQWlDO1FBQ3JDLElBQUksT0FBTyxFQUFFO1lBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksZ0JBQWdCLENBQUM7U0FDaEY7YUFBTTtZQUNOLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztTQUM3QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELHNDQUFhOzs7OztJQUFiLFVBQWMsT0FBNEIsRUFBRSxLQUFnQjs7WUFDckQsVUFBVSxHQUFrQixFQUFFO1FBQ3BDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELHdDQUF3QztRQUN4QyxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUE4QjtRQUExQyxpQkFtQkM7O1lBbEJNLFFBQVEsR0FBbUMsRUFBRTtRQUNuRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQzs7O2dCQUVWLE9BQU8sR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1lBQ0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDMUIsZ0NBQWdDO1FBQ2pDLENBQUMsRUFBQyxDQUFDOztZQUNHLEtBQUssR0FBYyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsc0JBQXNCO1FBQ3RCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDOztnQkFDVixVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQy9DLDJCQUEyQjtZQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7O2dCQTVFRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVBRLGFBQWEsdUJBYW5CLE1BQU0sU0FBQyxjQUFjOzs7eUJBZnhCO0NBcUZDLEFBOUVELElBOEVDO1NBM0VZLGNBQWM7OztJQUUxQixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvY29udHJvbC5jb25maWcnO1xuaW1wb3J0IHsgbWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBJQ29udHJvbE9wdGlvbiB9IGZyb20gJy4vY29udHJvbC1vcHRpb24nO1xuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IENvbnRyb2xDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT05UUk9MX0NPTkZJRykgb3B0aW9uczogQ29udHJvbENvbmZpZ1xuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbFNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgQ29udHJvbENvbmZpZyhvcHRpb25zIHx8IHt9KTtcblx0fVxuXG5cdHJlc29sdmUob3B0aW9uczogSUNvbnRyb2xPcHRpb248YW55Pik6IFR5cGU8Q29udHJvbENvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD47XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdGNvbXBvbmVudCA9IHRoaXMub3B0aW9ucy5jb250cm9sc1tvcHRpb25zLnNjaGVtYV0uY29tcG9uZW50IHx8IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbXBvbmVudCA9IENvbnRyb2xDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRnZXRWYWxpZGF0b3JzKG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT4sIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cdFx0aWYgKG9wdGlvbnMubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4ob3B0aW9ucy5taW4pKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMubWF4KSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgob3B0aW9ucy5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucmVxdWlyZWQpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucmVxdWlyZWRUcnVlKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5taW5sZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChvcHRpb25zLm1pbmxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5tYXhsZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChvcHRpb25zLm1heGxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5wYXR0ZXJuKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKG9wdGlvbnMucGF0dGVybikpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5tYXRjaCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKG1hdGNoVmFsaWRhdG9yKG9wdGlvbnMubWF0Y2gsIG9wdGlvbnMucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMuc2NoZW1hID09PSAnZW1haWwnKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKG9wdGlvbnMua2V5LCB2YWxpZGF0b3JzKTtcblx0XHRyZXR1cm4gdmFsaWRhdG9ycztcblx0fVxuXG5cdHRvRm9ybUdyb3VwKG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogRm9ybUNvbnRyb2wgfSA9IHt9O1xuXHRcdG9wdGlvbnMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdC8vIGdyb3VwW3gua2V5XSA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlLCB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApKTtcblx0XHRcdGNvbnN0IGNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUpO1xuXHRcdFx0aWYgKHguZGlzYWJsZWQpIHtcblx0XHRcdFx0Y29udHJvbC5kaXNhYmxlKCk7XG5cdFx0XHR9XG5cdFx0XHRjb250cm9sc1t4LmtleV0gPSBjb250cm9sO1xuXHRcdFx0Ly8geC5zZXRDb250cm9sKGNvbnRyb2wpOyAvLyAhISFcblx0XHR9KTtcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChjb250cm9scyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xuXHRcdG9wdGlvbnMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRncm91cC5jb250cm9sc1t4LmtleV0uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19