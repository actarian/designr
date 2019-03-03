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
            component = this.options.controls[control.schema].component || ControlBaseComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUtyRSxNQUFNLE9BQU8sY0FBYzs7OztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUF5Qjs7WUFDNUIsU0FBcUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztTQUNwRjthQUFNO1lBQ04sU0FBUyxHQUFHLG9CQUFvQixDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQXlCLEVBQUUsS0FBZ0I7O2NBQ2xELFVBQVUsR0FBa0IsRUFBRTtRQUNwQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUN0QixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUNELHdDQUF3QztRQUN4QyxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUE0Qjs7Y0FDakMsT0FBTyxHQUFRLEVBQUU7UUFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7O2tCQUVkLFdBQVcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN6RCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDN0Isb0NBQW9DO1FBQ3JDLENBQUMsQ0FBQyxDQUFDOztjQUNHLEtBQUssR0FBYyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDL0Msc0JBQXNCO1FBQ3RCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2tCQUNkLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDL0MsMkJBQTJCO1lBQzNCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBN0VELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVBRLGFBQWEsdUJBYW5CLE1BQU0sU0FBQyxjQUFjOzs7OztJQUh2QixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbENvbmZpZywgQ09OVFJPTF9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvY29udHJvbC5jb25maWcnO1xuaW1wb3J0IHsgbWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL21hdGNoLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBDb250cm9sQmFzZSB9IGZyb20gJy4vYmFzZS9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvY29udHJvbC1iYXNlLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogQ29udHJvbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPTlRST0xfQ09ORklHKSBvcHRpb25zOiBDb250cm9sQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBDb250cm9sQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cblx0cmVzb2x2ZShjb250cm9sOiBDb250cm9sQmFzZTxhbnk+KTogVHlwZTxDb250cm9sQmFzZUNvbXBvbmVudD4ge1xuXHRcdGxldCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbEJhc2VDb21wb25lbnQ+O1xuXHRcdGlmIChjb250cm9sKSB7XG5cdFx0XHRjb21wb25lbnQgPSB0aGlzLm9wdGlvbnMuY29udHJvbHNbY29udHJvbC5zY2hlbWFdLmNvbXBvbmVudCB8fCBDb250cm9sQmFzZUNvbXBvbmVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29tcG9uZW50ID0gQ29udHJvbEJhc2VDb21wb25lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRnZXRWYWxpZGF0b3JzKGNvbnRyb2w6IENvbnRyb2xCYXNlPGFueT4sIGdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbltdIHtcblx0XHRjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG5cdFx0aWYgKGNvbnRyb2wubWluKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW4oY29udHJvbC5taW4pKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wubWF4KSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXgoY29udHJvbC5tYXgpKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wucmVxdWlyZWQpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKGNvbnRyb2wucmVxdWlyZWRUcnVlKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5lbWFpbCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5taW5sZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChjb250cm9sLm1pbmxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXhsZW5ndGgpIHtcblx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aChjb250cm9sLm1heGxlbmd0aCkpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5wYXR0ZXJuKSB7XG5cdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKGNvbnRyb2wucGF0dGVybikpO1xuXHRcdH1cblx0XHRpZiAoY29udHJvbC5tYXRjaCkge1xuXHRcdFx0dmFsaWRhdG9ycy5wdXNoKG1hdGNoVmFsaWRhdG9yKGNvbnRyb2wubWF0Y2gsIGNvbnRyb2wucmV2ZXJzZSwgZ3JvdXApKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coY29udHJvbC5rZXksIHZhbGlkYXRvcnMpO1xuXHRcdHJldHVybiB2YWxpZGF0b3JzO1xuXHR9XG5cblx0dG9Gb3JtR3JvdXAoY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3Qgb3B0aW9uczogYW55ID0ge307XG5cdFx0Y29udHJvbHMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdC8vIGdyb3VwW3gua2V5XSA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlLCB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApKTtcblx0XHRcdGNvbnN0IGZvcm1Db250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh4LnZhbHVlKTtcblx0XHRcdGlmICh4LmRpc2FibGVkKSB7XG5cdFx0XHRcdGZvcm1Db250cm9sLmRpc2FibGUoKTtcblx0XHRcdH1cblx0XHRcdG9wdGlvbnNbeC5rZXldID0gZm9ybUNvbnRyb2w7XG5cdFx0XHQvLyB4LnNldENvbnRyb2woZm9ybUNvbnRyb2wpOyAvLyAhISFcblx0XHR9KTtcblx0XHRjb25zdCBncm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cChvcHRpb25zKTtcblx0XHQvLyBjb25zb2xlLmxvZyhncm91cCk7XG5cdFx0Y29udHJvbHMuZm9yRWFjaCh4ID0+IHtcblx0XHRcdGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLmdldFZhbGlkYXRvcnMoeCwgZ3JvdXApO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsaWRhdG9ycyk7XG5cdFx0XHRncm91cC5jb250cm9sc1t4LmtleV0uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19