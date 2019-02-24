/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ControlCheckbox } from '../control/control-checkbox';
import { ControlEmail } from '../control/control-email';
import { ControlMarkdown } from '../control/control-markdown';
import { ControlNumber } from '../control/control-number';
import { ControlPassword } from '../control/control-password';
import { ControlRadio } from '../control/control-radio';
import { ControlSelect } from '../control/control-select';
import { ControlText } from '../control/control-text';
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
            switch (o.schema) {
                case 'checkbox':
                    return new ControlCheckbox(o);
                case 'email':
                    return new ControlEmail(o);
                case 'number':
                    return new ControlNumber(o);
                case 'password':
                    return new ControlPassword(o);
                case 'radio':
                    return new ControlRadio(o);
                case 'select':
                    return new ControlSelect(o);
                case 'markdown':
                    return new ControlMarkdown(o);
                case 'text':
                    return new ControlText(o);
                default:
                    return new ControlText(o);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBSzVELE1BQU0sT0FBTyxXQUFXOzs7O0lBRXZCLFlBQ1MsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ25DLENBQUM7Ozs7O0lBRUwsc0JBQXNCLENBQUMsT0FBa0M7O2NBQ2xELFFBQVEsR0FBdUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE9BQU87b0JBQ1gsT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxRQUFRO29CQUNaLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE9BQU87b0JBQ1gsT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxRQUFRO29CQUNaLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssVUFBVTtvQkFDZCxPQUFPLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLE1BQU07b0JBQ1YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0I7b0JBQ0MsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQjtRQUNGLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLE9BQWtDOztjQUMvQyxRQUFRLEdBQXVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7O2NBQ25FLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDdkQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLFFBQTRCOztjQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBN0NELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUpRLGNBQWM7Ozs7Ozs7O0lBUXJCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQgeyBDb250cm9sQ2hlY2tib3ggfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtY2hlY2tib3gnO1xuaW1wb3J0IHsgQ29udHJvbEVtYWlsIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLWVtYWlsJztcbmltcG9ydCB7IENvbnRyb2xNYXJrZG93biB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC1tYXJrZG93bic7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLW51bWJlcic7XG5pbXBvcnQgeyBDb250cm9sUGFzc3dvcmQgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtcGFzc3dvcmQnO1xuaW1wb3J0IHsgQ29udHJvbFJhZGlvIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLXJhZGlvJztcbmltcG9ydCB7IENvbnRyb2xTZWxlY3QgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtc2VsZWN0JztcbmltcG9ydCB7IENvbnRyb2xUZXh0IH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLXRleHQnO1xuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZVxuXHQpIHsgfVxuXG5cdGdldENvbnRyb2xzRnJvbU9wdGlvbnMob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSk6IENvbnRyb2xCYXNlPGFueT5bXSB7XG5cdFx0Y29uc3QgY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSA9IG9wdGlvbnMubWFwKG8gPT4ge1xuXHRcdFx0c3dpdGNoIChvLnNjaGVtYSkge1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBDb250cm9sQ2hlY2tib3gobyk7XG5cdFx0XHRcdGNhc2UgJ2VtYWlsJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xFbWFpbChvKTtcblx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xOdW1iZXIobyk7XG5cdFx0XHRcdGNhc2UgJ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xQYXNzd29yZChvKTtcblx0XHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbFJhZGlvKG8pO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QnOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbFNlbGVjdChvKTtcblx0XHRcdFx0Y2FzZSAnbWFya2Rvd24nOlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbE1hcmtkb3duKG8pO1xuXHRcdFx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdFx0XHRyZXR1cm4gbmV3IENvbnRyb2xUZXh0KG8pO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBuZXcgQ29udHJvbFRleHQobyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y29udHJvbHMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXHRcdHJldHVybiBjb250cm9scztcblx0fVxuXG5cdGdldEdyb3VwRnJvbU9wdGlvbnMob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSA9IHRoaXMuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyhvcHRpb25zKTtcblx0XHRjb25zdCBncm91cCA9IHRoaXMuY29udHJvbFNlcnZpY2UudG9Gb3JtR3JvdXAoY29udHJvbHMpO1xuXHRcdHJldHVybiBncm91cDtcblx0fVxuXG5cdGdldEdyb3VwRnJvbUNvbnRyb2xzKGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdGNvbnN0IGdyb3VwID0gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChjb250cm9scyk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cbn1cbiJdfQ==