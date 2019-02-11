/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from './match.validator';
import * as i0 from "@angular/core";
export class ControlService {
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
/** @nocollapse */ ControlService.ngInjectableDef = i0.defineInjectable({ factory: function ControlService_Factory() { return new ControlService(); }, token: ControlService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBRTFCLGFBQWEsQ0FBQyxPQUF5QixFQUFFLEtBQWdCOztjQUNsRCxVQUFVLEdBQWtCLEVBQUU7UUFDcEMsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCx3Q0FBd0M7UUFDeEMsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBNEI7O2NBQ2pDLE9BQU8sR0FBUSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztrQkFFZCxXQUFXLEdBQWdCLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDekQsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNmLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO1lBQzdCLG9DQUFvQztRQUNyQyxDQUFDLENBQUMsQ0FBQzs7Y0FDRyxLQUFLLEdBQWMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQy9DLHNCQUFzQjtRQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOztrQkFDZCxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQy9DLDJCQUEyQjtZQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7OztZQXpERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgbWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuL21hdGNoLnZhbGlkYXRvcic7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZXJ2aWNlIHtcblxuXHRnZXRWYWxpZGF0b3JzKGNvbnRyb2w6IENvbnRyb2xCYXNlPGFueT4sIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cdFx0aWYgKGNvbnRyb2wubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4oY29udHJvbC5taW4pKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wubWF4KSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgoY29udHJvbC5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wucmVxdWlyZWQpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wucmVxdWlyZWRUcnVlKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5lbWFpbCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5taW5MZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChjb250cm9sLm1pbkxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXhMZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChjb250cm9sLm1heExlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5wYXR0ZXJuKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKGNvbnRyb2wucGF0dGVybikpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXRjaCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKG1hdGNoVmFsaWRhdG9yKGNvbnRyb2wubWF0Y2gsIGNvbnRyb2wucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coY29udHJvbC5rZXksIHZhbGlkYXRvcnMpO1xuXHRcdHJldHVybiB2YWxpZGF0b3JzO1xuXHR9XG5cblx0dG9Gb3JtR3JvdXAoY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3Qgb3B0aW9uczogYW55ID0ge307XG5cdFx0Y29udHJvbHMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdC8vIGdyb3VwW3gua2V5XSA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlLCB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApKTtcblx0XHRcdGNvbnN0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlKTtcblx0XHRcdGlmICh4LmRpc2FibGVkKSB7XG5cdFx0XHRcdGZvcm1Db250cm9sLmRpc2FibGUoKTtcblx0XHRcdH1cblx0XHRcdG9wdGlvbnNbeC5rZXldID0gZm9ybUNvbnRyb2w7XG5cdFx0XHQvLyB4LnNldENvbnRyb2woZm9ybUNvbnRyb2wpOyAvLyAhISFcblx0XHR9KTtcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChvcHRpb25zKTtcblx0XHQvLyBjb25zb2xlLmxvZyhncm91cCk7XG5cdFx0Y29udHJvbHMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRncm91cC5jb250cm9sc1t4LmtleV0uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19