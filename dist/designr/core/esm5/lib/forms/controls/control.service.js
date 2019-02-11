/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from './match.validator';
import * as i0 from "@angular/core";
var ControlService = /** @class */ (function () {
    function ControlService() {
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
    /** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(); }, token: ControlService, providedIn: "root" });
    return ControlService;
}());
export { ControlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVuRDtJQUFBO0tBMkRDOzs7Ozs7SUF0REEsc0NBQWE7Ozs7O0lBQWIsVUFBYyxPQUF5QixFQUFFLEtBQWdCOztZQUNsRCxVQUFVLEdBQWtCLEVBQUU7UUFDcEMsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCx3Q0FBd0M7UUFDeEMsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksUUFBNEI7UUFBeEMsaUJBbUJDOztZQWxCTSxPQUFPLEdBQVEsRUFBRTtRQUN2QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzs7O2dCQUVYLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDN0Isb0NBQW9DO1FBQ3JDLENBQUMsQ0FBQyxDQUFDOztZQUNHLEtBQUssR0FBYyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDL0Msc0JBQXNCO1FBQ3RCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOztnQkFDWCxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQy9DLDJCQUEyQjtZQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7O2dCQXpERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7eUJBUEQ7Q0FnRUMsQUEzREQsSUEyREM7U0F4RFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2UgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQgeyBtYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vbWF0Y2gudmFsaWRhdG9yJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFNlcnZpY2Uge1xuXG5cdGdldFZhbGlkYXRvcnMoY29udHJvbDogQ29udHJvbEJhc2U8YW55PiwgZ3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRvckZuW10ge1xuXHRcdGNvbnN0IHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSBbXTtcblx0XHRpZiAoY29udHJvbC5taW4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbihjb250cm9sLm1pbikpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heChjb250cm9sLm1heCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5yZXF1aXJlZFRydWUpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLmVtYWlsKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1pbkxlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGNvbnRyb2wubWluTGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1heExlbmd0aCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKGNvbnRyb2wubWF4TGVuZ3RoKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLnBhdHRlcm4pIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4oY29udHJvbC5wYXR0ZXJuKSk7XG5cdFx0fVxuXHRcdGlmIChjb250cm9sLm1hdGNoKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2gobWF0Y2hWYWxpZGF0b3IoY29udHJvbC5tYXRjaCwgY29udHJvbC5yZXZlcnNlLCBncm91cCkpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhjb250cm9sLmtleSwgdmFsaWRhdG9ycyk7XG5cdFx0cmV0dXJuIHZhbGlkYXRvcnM7XG5cdH1cblxuXHR0b0Zvcm1Hcm91cChjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Ly8gZ3JvdXBbeC5rZXldID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUsIHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCkpO1xuXHRcdFx0Y29uc3QgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKHgudmFsdWUpO1xuXHRcdFx0aWYgKHguZGlzYWJsZWQpIHtcblx0XHRcdFx0Zm9ybUNvbnRyb2wuZGlzYWJsZSgpO1xuXHRcdFx0fVxuXHRcdFx0b3B0aW9uc1t4LmtleV0gPSBmb3JtQ29udHJvbDtcblx0XHRcdC8vIHguc2V0Q29udHJvbChmb3JtQ29udHJvbCk7IC8vICEhIVxuXHRcdH0pO1xuXHRcdGNvbnN0IGdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKG9wdGlvbnMpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRjb250cm9scy5mb3JFYWNoKHggPT4ge1xuXHRcdFx0Y29uc3QgdmFsaWRhdG9ycyA9IHRoaXMuZ2V0VmFsaWRhdG9ycyh4LCBncm91cCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh2YWxpZGF0b3JzKTtcblx0XHRcdGdyb3VwLmNvbnRyb2xzW3gua2V5XS5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG59XG4iXX0=