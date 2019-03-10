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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUU1RDtJQUtDLHFCQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLGtDQUFZOzs7O0lBQVosVUFBYSxPQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLElBQTBCO1FBQXJDLGlCQWFDOztZQVpNLE9BQU8sR0FBeUIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUN6QyxPQUFPLEdBQXFCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hGLElBQUksT0FBTyxFQUFFOztvQkFDTixXQUFXLEdBQTZCLE9BQU8sQ0FBQyxLQUFLO2dCQUMzRCxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTBCLENBQUMsQ0FBQyxNQUFRLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxJQUFJLENBQUM7YUFDWjtRQUNGLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7UUFDakIsT0FBTyxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCw2Q0FBdUI7Ozs7SUFBdkIsVUFBd0IsT0FBNkI7UUFDcEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkE5QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxjQUFjOzs7c0JBSnZCO0NBc0NDLEFBaENELElBZ0NDO1NBN0JZLFdBQVc7Ozs7OztJQUd0QixxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbnRyb2wuY29uZmlnJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24gfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9sLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2Vcblx0KSB7IH1cblxuXHRnZXRGb3JtR3JvdXAob3B0aW9uczogQ29udHJvbE9wdGlvbjxhbnk+W10pOiBGb3JtR3JvdXAge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xTZXJ2aWNlLnRvRm9ybUdyb3VwKG9wdGlvbnMpO1xuXHR9XG5cblx0Z2V0T3B0aW9ucyhkYXRhOiBDb250cm9sT3B0aW9uPGFueT5bXSk6IENvbnRyb2xPcHRpb248YW55PltdIHtcblx0XHRjb25zdCBvcHRpb25zOiBDb250cm9sT3B0aW9uPGFueT5bXSA9IGRhdGEubWFwKG8gPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbDogQ29udHJvbEludGVyZmFjZSA9IHRoaXMuY29udHJvbFNlcnZpY2Uub3B0aW9ucy5jb250cm9sc1tvLnNjaGVtYV07XG5cdFx0XHRpZiAoY29udHJvbCkge1xuXHRcdFx0XHRjb25zdCBvcHRpb25Nb2RlbDogVHlwZTxDb250cm9sT3B0aW9uPGFueT4+ID0gY29udHJvbC5tb2RlbDtcblx0XHRcdFx0cmV0dXJuIG5ldyBvcHRpb25Nb2RlbChvKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYG1pc3Npbmcgb3B0aW9uIGZvciBrZXkgJHtvLnNjaGVtYX1gKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSkuZmlsdGVyKHggPT4geCk7XG5cdFx0b3B0aW9ucy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRnZXRGb3JtR3JvdXBGcm9tT3B0aW9ucyhvcHRpb25zOiBDb250cm9sT3B0aW9uPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Rm9ybUdyb3VwKHRoaXMuZ2V0T3B0aW9ucyhvcHRpb25zKSk7XG5cdH1cblxufVxuIl19