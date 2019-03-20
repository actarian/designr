/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ControlService } from '../control/control.service';
import * as i0 from "@angular/core";
import * as i1 from "../control/control.service";
var FormService = /** @class */ (function () {
    function FormService(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getFormGroup = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.controlService.toFormGroup(options);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormService.prototype.getOptions = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var options = data.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            /** @type {?} */
            var control = _this.controlService.options.controls[o.schema];
            if (control) {
                /** @type {?} */
                var optionModel = control.model;
                return new optionModel(o);
            }
            else {
                console.error("missing option for key " + o.schema);
                return null;
            }
        })).filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x; }));
        options.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        return options;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getFormGroupFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.getFormGroup(this.getOptions(options));
    };
    FormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return [
        { type: ControlService }
    ]; };
    /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.ControlService)); }, token: FormService, providedIn: "root" });
    return FormService;
}());
export { FormService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormService.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUU1RDtJQUtDLHFCQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLGtDQUFZOzs7O0lBQVosVUFBYSxPQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLElBQTJCO1FBQXRDLGlCQWFDOztZQVpNLE9BQU8sR0FBeUIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUN6QyxPQUFPLEdBQXFCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hGLElBQUksT0FBTyxFQUFFOztvQkFDTixXQUFXLEdBQTZCLE9BQU8sQ0FBQyxLQUFLO2dCQUMzRCxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTBCLENBQUMsQ0FBQyxNQUFRLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUM7YUFDWjtRQUNGLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7UUFDakIsT0FBTyxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw2Q0FBdUI7Ozs7SUFBdkIsVUFBd0IsT0FBOEI7UUFDckQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkE5QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxjQUFjOzs7c0JBSnZCO0NBc0NDLEFBaENELElBZ0NDO1NBN0JZLFdBQVc7Ozs7OztJQUd0QixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4uL2NvbnRyb2wvY29udHJvbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29udHJvbFNlcnZpY2U6IENvbnRyb2xTZXJ2aWNlXG5cdCkgeyB9XG5cblx0Z2V0Rm9ybUdyb3VwKG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChvcHRpb25zKTtcblx0fVxuXG5cdGdldE9wdGlvbnMoZGF0YTogSUNvbnRyb2xPcHRpb248YW55PltdKTogQ29udHJvbE9wdGlvbjxhbnk+W10ge1xuXHRcdGNvbnN0IG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdID0gZGF0YS5tYXAobyA9PiB7XG5cdFx0XHRjb25zdCBjb250cm9sOiBDb250cm9sSW50ZXJmYWNlID0gdGhpcy5jb250cm9sU2VydmljZS5vcHRpb25zLmNvbnRyb2xzW28uc2NoZW1hXTtcblx0XHRcdGlmIChjb250cm9sKSB7XG5cdFx0XHRcdGNvbnN0IG9wdGlvbk1vZGVsOiBUeXBlPENvbnRyb2xPcHRpb248YW55Pj4gPSBjb250cm9sLm1vZGVsO1xuXHRcdFx0XHRyZXR1cm4gbmV3IG9wdGlvbk1vZGVsKG8pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgbWlzc2luZyBvcHRpb24gZm9yIGtleSAke28uc2NoZW1hfWApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9KS5maWx0ZXIoeCA9PiB4KTtcblx0XHRvcHRpb25zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGdldEZvcm1Hcm91cEZyb21PcHRpb25zKG9wdGlvbnM6IElDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Rm9ybUdyb3VwKHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKSk7XG5cdH1cblxufVxuIl19