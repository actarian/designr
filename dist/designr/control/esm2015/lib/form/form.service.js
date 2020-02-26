import { Injectable } from '@angular/core';
import { ControlService } from '../control/control.service';
import { ControlGroup } from '../control/group/control-group';
import * as i0 from "@angular/core";
import * as i1 from "../control/control.service";
export class FormService {
    constructor(controlService) {
        this.controlService = controlService;
    }
    getOptions(data) {
        const options = data.map((option) => {
            const control = this.controlService.options.controls[option.schema];
            if (control) {
                const optionModel = control.model;
                const optionModelInstance = new optionModel(option);
                if (optionModelInstance instanceof ControlGroup) {
                    const options = this.getOptions(optionModelInstance.options);
                    options.sort((a, b) => a.order - b.order);
                    optionModelInstance.options = options;
                }
                return optionModelInstance;
            }
            else {
                console.error(`missing option for key ${option.schema}`);
                return null;
            }
        }).filter(x => x);
        options.sort((a, b) => a.order - b.order);
        return options;
    }
    getFormGroup(options) {
        return this.controlService.toFormGroup(options);
    }
    getFormGroupFromOptions(options) {
        return this.getFormGroup(this.getOptions(options));
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(i1.ControlService)); };
FormService.ɵprov = i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ControlService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUs5RCxNQUFNLE9BQU8sV0FBVztJQUV2QixZQUNXLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUwsVUFBVSxDQUFDLElBQTJCO1FBQ3JDLE1BQU0sT0FBTyxHQUF5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBMkIsRUFBRSxFQUFFO1lBQzlFLE1BQU0sT0FBTyxHQUFxQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RGLElBQUksT0FBTyxFQUFFO2dCQUNaLE1BQU0sV0FBVyxHQUE2QixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM1RCxNQUFNLG1CQUFtQixHQUF1QixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxtQkFBbUIsWUFBWSxZQUFZLEVBQUU7b0JBQ2hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDdEM7Z0JBQ0QsT0FBTyxtQkFBbUIsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDekQsT0FBTyxJQUFJLENBQUM7YUFDWjtRQUNGLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQTZCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHVCQUF1QixDQUFDLE9BQThCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7c0VBakNXLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlgsTUFBTTtrREFFTixXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xJbnRlcmZhY2UgfSBmcm9tICcuLi9jb25maWcvY29udHJvbC5jb25maWcnO1xuaW1wb3J0IHsgQ29udHJvbE9wdGlvbiwgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnLi4vY29udHJvbC9ncm91cC9jb250cm9sLWdyb3VwJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2UsXG5cdCkgeyB9XG5cblx0Z2V0T3B0aW9ucyhkYXRhOiBJQ29udHJvbE9wdGlvbjxhbnk+W10pOiBDb250cm9sT3B0aW9uPGFueT5bXSB7XG5cdFx0Y29uc3Qgb3B0aW9uczogQ29udHJvbE9wdGlvbjxhbnk+W10gPSBkYXRhLm1hcCgob3B0aW9uOiBJQ29udHJvbE9wdGlvbjxhbnk+KSA9PiB7XG5cdFx0XHRjb25zdCBjb250cm9sOiBDb250cm9sSW50ZXJmYWNlID0gdGhpcy5jb250cm9sU2VydmljZS5vcHRpb25zLmNvbnRyb2xzW29wdGlvbi5zY2hlbWFdO1xuXHRcdFx0aWYgKGNvbnRyb2wpIHtcblx0XHRcdFx0Y29uc3Qgb3B0aW9uTW9kZWw6IFR5cGU8Q29udHJvbE9wdGlvbjxhbnk+PiA9IGNvbnRyb2wubW9kZWw7XG5cdFx0XHRcdGNvbnN0IG9wdGlvbk1vZGVsSW5zdGFuY2U6IENvbnRyb2xPcHRpb248YW55PiA9IG5ldyBvcHRpb25Nb2RlbChvcHRpb24pO1xuXHRcdFx0XHRpZiAob3B0aW9uTW9kZWxJbnN0YW5jZSBpbnN0YW5jZW9mIENvbnRyb2xHcm91cCkge1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9uTW9kZWxJbnN0YW5jZS5vcHRpb25zKTtcblx0XHRcdFx0XHRvcHRpb25zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblx0XHRcdFx0XHRvcHRpb25Nb2RlbEluc3RhbmNlLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcHRpb25Nb2RlbEluc3RhbmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgbWlzc2luZyBvcHRpb24gZm9yIGtleSAke29wdGlvbi5zY2hlbWF9YCk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0pLmZpbHRlcih4ID0+IHgpO1xuXHRcdG9wdGlvbnMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Z2V0Rm9ybUdyb3VwKG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChvcHRpb25zKTtcblx0fVxuXG5cdGdldEZvcm1Hcm91cEZyb21PcHRpb25zKG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Rm9ybUdyb3VwKHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKSk7XG5cdH1cblxufVxuIl19