/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ControlService } from '../control/control.service';
import * as i0 from "@angular/core";
import * as i1 from "../control/control.service";
export class FormService {
    /**
     * @param {?} controlService
     */
    constructor(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getControlsFromOptions(options) {
        /** @type {?} */
        const controls = options.map(o => {
            /** @type {?} */
            const control = this.controlService.options.controls[o.schema];
            if (control) {
                /** @type {?} */
                const controlBase = control.model;
                return new controlBase(o);
            }
            else {
                console.error(`missing control for key ${o.schema}`);
                return null;
            }
        }).filter(x => x);
        controls.sort((a, b) => a.order - b.order);
        return controls;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getGroupFromOptions(options) {
        /** @type {?} */
        const controls = this.getControlsFromOptions(options);
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    getGroupFromControls(controls) {
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: ControlService }
];
/** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.ControlService)); }, token: FormService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormService.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQU01RCxNQUFNLE9BQU8sV0FBVzs7OztJQUV2QixZQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLHNCQUFzQixDQUFDLE9BQWtDOztjQUNsRCxRQUFRLEdBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2tCQUM5QyxPQUFPLEdBQXFCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hGLElBQUksT0FBTyxFQUFFOztzQkFDTixXQUFXLEdBQTJCLE9BQU8sQ0FBQyxLQUFLO2dCQUN6RCxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLElBQUksQ0FBQzthQUNaO1FBQ0YsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLE9BQWtDOztjQUMvQyxRQUFRLEdBQXVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7O2NBQ25FLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLFFBQTRCOztjQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBakNELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUxRLGNBQWM7Ozs7Ozs7O0lBU3JCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlJztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbEludGVyZmFjZSB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2Vcblx0KSB7IH1cblxuXHRnZXRDb250cm9sc0Zyb21PcHRpb25zKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10pOiBDb250cm9sQmFzZTxhbnk+W10ge1xuXHRcdGNvbnN0IGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10gPSBvcHRpb25zLm1hcChvID0+IHtcblx0XHRcdGNvbnN0IGNvbnRyb2w6IENvbnRyb2xJbnRlcmZhY2UgPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLm9wdGlvbnMuY29udHJvbHNbby5zY2hlbWFdO1xuXHRcdFx0aWYgKGNvbnRyb2wpIHtcblx0XHRcdFx0Y29uc3QgY29udHJvbEJhc2U6IFR5cGU8Q29udHJvbEJhc2U8YW55Pj4gPSBjb250cm9sLm1vZGVsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IGNvbnRyb2xCYXNlKG8pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgbWlzc2luZyBjb250cm9sIGZvciBrZXkgJHtvLnNjaGVtYX1gKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSkuZmlsdGVyKHggPT4geCk7XG5cdFx0Y29udHJvbHMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXHRcdHJldHVybiBjb250cm9scztcblx0fVxuXG5cdGdldEdyb3VwRnJvbU9wdGlvbnMob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSA9IHRoaXMuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyhvcHRpb25zKTtcblx0XHRjb25zdCBncm91cCA9IHRoaXMuY29udHJvbFNlcnZpY2UudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdGdldEdyb3VwRnJvbUNvbnRyb2xzKGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGdyb3VwID0gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChjb250cm9scyk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cbn1cbiJdfQ==