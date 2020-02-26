import { Injectable } from '@angular/core';
import { ControlService } from '../control/control.service';
import { ControlGroup } from '../control/group/control-group';
import * as i0 from "@angular/core";
import * as i1 from "../control/control.service";
var FormService = /** @class */ (function () {
    function FormService(controlService) {
        this.controlService = controlService;
    }
    FormService.prototype.getOptions = function (data) {
        var _this = this;
        var options = data.map(function (option) {
            var control = _this.controlService.options.controls[option.schema];
            if (control) {
                var optionModel = control.model;
                var optionModelInstance = new optionModel(option);
                if (optionModelInstance instanceof ControlGroup) {
                    var options_1 = _this.getOptions(optionModelInstance.options);
                    options_1.sort(function (a, b) { return a.order - b.order; });
                    optionModelInstance.options = options_1;
                }
                return optionModelInstance;
            }
            else {
                console.error("missing option for key " + option.schema);
                return null;
            }
        }).filter(function (x) { return x; });
        options.sort(function (a, b) { return a.order - b.order; });
        return options;
    };
    FormService.prototype.getFormGroup = function (options) {
        return this.controlService.toFormGroup(options);
    };
    FormService.prototype.getFormGroupFromOptions = function (options) {
        return this.getFormGroup(this.getOptions(options));
    };
    FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(i0.ɵɵinject(i1.ControlService)); };
    FormService.ɵprov = i0.ɵɵdefineInjectable({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
    return FormService;
}());
export { FormService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ControlService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBSWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUU5RDtJQUtDLHFCQUNXLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUwsZ0NBQVUsR0FBVixVQUFXLElBQTJCO1FBQXRDLGlCQW1CQztRQWxCQSxJQUFNLE9BQU8sR0FBeUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQTJCO1lBQzFFLElBQU0sT0FBTyxHQUFxQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RGLElBQUksT0FBTyxFQUFFO2dCQUNaLElBQU0sV0FBVyxHQUE2QixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM1RCxJQUFNLG1CQUFtQixHQUF1QixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxtQkFBbUIsWUFBWSxZQUFZLEVBQUU7b0JBQ2hELElBQU0sU0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdELFNBQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBQzFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxTQUFPLENBQUM7aUJBQ3RDO2dCQUNELE9BQU8sbUJBQW1CLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBMEIsTUFBTSxDQUFDLE1BQVEsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLElBQUksQ0FBQzthQUNaO1FBQ0YsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxPQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw2Q0FBdUIsR0FBdkIsVUFBd0IsT0FBOEI7UUFDckQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOzBFQWpDVyxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBUm5CO0NBNkNDLEFBdENELElBc0NDO1NBbkNZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRyb2xHcm91cCB9IGZyb20gJy4uL2NvbnRyb2wvZ3JvdXAvY29udHJvbC1ncm91cCc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgY29udHJvbFNlcnZpY2U6IENvbnRyb2xTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdGdldE9wdGlvbnMoZGF0YTogSUNvbnRyb2xPcHRpb248YW55PltdKTogQ29udHJvbE9wdGlvbjxhbnk+W10ge1xuXHRcdGNvbnN0IG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdID0gZGF0YS5tYXAoKG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55PikgPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbDogQ29udHJvbEludGVyZmFjZSA9IHRoaXMuY29udHJvbFNlcnZpY2Uub3B0aW9ucy5jb250cm9sc1tvcHRpb24uc2NoZW1hXTtcblx0XHRcdGlmIChjb250cm9sKSB7XG5cdFx0XHRcdGNvbnN0IG9wdGlvbk1vZGVsOiBUeXBlPENvbnRyb2xPcHRpb248YW55Pj4gPSBjb250cm9sLm1vZGVsO1xuXHRcdFx0XHRjb25zdCBvcHRpb25Nb2RlbEluc3RhbmNlOiBDb250cm9sT3B0aW9uPGFueT4gPSBuZXcgb3B0aW9uTW9kZWwob3B0aW9uKTtcblx0XHRcdFx0aWYgKG9wdGlvbk1vZGVsSW5zdGFuY2UgaW5zdGFuY2VvZiBDb250cm9sR3JvdXApIHtcblx0XHRcdFx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKG9wdGlvbk1vZGVsSW5zdGFuY2Uub3B0aW9ucyk7XG5cdFx0XHRcdFx0b3B0aW9ucy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cdFx0XHRcdFx0b3B0aW9uTW9kZWxJbnN0YW5jZS5vcHRpb25zID0gb3B0aW9ucztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3B0aW9uTW9kZWxJbnN0YW5jZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYG1pc3Npbmcgb3B0aW9uIGZvciBrZXkgJHtvcHRpb24uc2NoZW1hfWApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9KS5maWx0ZXIoeCA9PiB4KTtcblx0XHRvcHRpb25zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGdldEZvcm1Hcm91cChvcHRpb25zOiBDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbFNlcnZpY2UudG9Gb3JtR3JvdXAob3B0aW9ucyk7XG5cdH1cblxuXHRnZXRGb3JtR3JvdXBGcm9tT3B0aW9ucyhvcHRpb25zOiBJQ29udHJvbE9wdGlvbjxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdHJldHVybiB0aGlzLmdldEZvcm1Hcm91cCh0aGlzLmdldE9wdGlvbnMob3B0aW9ucykpO1xuXHR9XG5cbn1cbiJdfQ==