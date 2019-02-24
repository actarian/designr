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
var ControlService = /** @class */ (function () {
    function ControlService(options) {
        // console.log('ControlService', options);
        options = options || {};
        this.options = new ControlConfig(options);
    }
    /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    ControlService.prototype.getValidators = /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    function (control, group) {
        /** @type {?} */
        var validators = [];
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
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    ControlService.prototype.toFormGroup = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        var _this = this;
        /** @type {?} */
        var options = {};
        controls.forEach(function (x) {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            var formControl = new FormControl(x.value);
            if (x.disabled) {
                formControl.disable();
            }
            options[x.key] = formControl;
            // x.setControl(formControl); // !!!
        });
        /** @type {?} */
        var group = new FormGroup(options);
        // console.log(group);
        controls.forEach(function (x) {
            /** @type {?} */
            var validators = _this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUcvRDtJQU9DLHdCQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxzQ0FBYTs7Ozs7SUFBYixVQUFjLE9BQXlCLEVBQUUsS0FBZ0I7O1lBQ2xELFVBQVUsR0FBa0IsRUFBRTtRQUNwQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUNELHdDQUF3QztRQUN4QyxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxRQUE0QjtRQUF4QyxpQkFtQkM7O1lBbEJNLE9BQU8sR0FBUSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOzs7Z0JBRVgsV0FBVyxHQUFnQixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdEI7WUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUM3QixvQ0FBb0M7UUFDckMsQ0FBQyxDQUFDLENBQUM7O1lBQ0csS0FBSyxHQUFjLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUMvQyxzQkFBc0I7UUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7O2dCQUNYLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0MsMkJBQTJCO1lBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Z0JBbkVELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBTlEsYUFBYSx1QkFZbkIsTUFBTSxTQUFDLGNBQWM7Ozt5QkFkeEI7Q0EyRUMsQUFyRUQsSUFxRUM7U0FsRVksY0FBYzs7O0lBRTFCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sQ29uZmlnLCBDT05UUk9MX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9jb250cm9sLmNvbmZpZyc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWF0Y2gudmFsaWRhdG9yJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IENvbnRyb2xDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT05UUk9MX0NPTkZJRykgb3B0aW9uczogQ29udHJvbENvbmZpZ1xuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbFNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgQ29udHJvbENvbmZpZyhvcHRpb25zKTtcblx0fVxuXG5cdGdldFZhbGlkYXRvcnMoY29udHJvbDogQ29udHJvbEJhc2U8YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAoY29udHJvbC5taW4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihjb250cm9sLm1pbikpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heChjb250cm9sLm1heCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZFRydWUpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLmVtYWlsKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1pbkxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGNvbnRyb2wubWluTGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1heExlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGNvbnRyb2wubWF4TGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oY29udHJvbC5wYXR0ZXJuKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3IoY29udHJvbC5tYXRjaCwgY29udHJvbC5yZXZlcnNlLCBncm91cCkpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhjb250cm9sLmtleSwgdmFsaWRhdG9ycyk7XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Ly8gZ3JvdXBbeC5rZXldID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCkpO1xuXHRcdFx0Y29uc3QgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUpO1xuXHRcdFx0aWYgKHguZGlzYWJsZWQpIHtcblx0XHRcdFx0Zm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXHRcdFx0b3B0aW9uc1t4LmtleV0gPSBmb3JtQ29udHJvbDtcblx0XHRcdC8vIHguc2V0Q29udHJvbChmb3JtQ29udHJvbCk7IC8vICEhIVxuXHRcdH0pO1xuXHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKG9wdGlvbnMpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3JzKTtcblx0XHRcdGdyb3VwLmNvbnRyb2xzW3gua2V5XS5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG59XG4iXX0=