/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    FormService.prototype.getControlsFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        /** @type {?} */
        var controls = options.map(function (o) {
            /** @type {?} */
            var control = _this.controlService.options.controls[o.schema];
            if (control) {
                /** @type {?} */
                var controlBase = control.model;
                return new controlBase(o);
            }
            else {
                console.error("missing control for key " + o.schema);
                return null;
            }
        }).filter(function (x) { return x; });
        controls.sort(function (a, b) { return a.order - b.order; });
        return controls;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormService.prototype.getGroupFromOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var controls = this.getControlsFromOptions(options);
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
    };
    /**
     * @param {?} controls
     * @return {?}
     */
    FormService.prototype.getGroupFromControls = /**
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        /** @type {?} */
        var group = this.controlService.toFormGroup(controls);
        return group;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUdqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUc1RDtJQUtDLHFCQUNTLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7OztJQUVMLDRDQUFzQjs7OztJQUF0QixVQUF1QixPQUFrQztRQUF6RCxpQkFhQzs7WUFaTSxRQUFRLEdBQXVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDOztnQkFDM0MsT0FBTyxHQUFxQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNoRixJQUFJLE9BQU8sRUFBRTs7b0JBQ04sV0FBVyxHQUEyQixPQUFPLENBQUMsS0FBSztnQkFDekQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUEyQixDQUFDLENBQUMsTUFBUSxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sSUFBSSxDQUFDO2FBQ1o7UUFDRixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDM0MsT0FBTyxRQUFRLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCx5Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsT0FBa0M7O1lBQy9DLFFBQVEsR0FBdUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQzs7WUFDbkUsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsMENBQW9COzs7O0lBQXBCLFVBQXFCLFFBQTRCOztZQUMxQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Z0JBakNELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBTFEsY0FBYzs7O3NCQUh2QjtDQXlDQyxBQW5DRCxJQW1DQztTQWhDWSxXQUFXOzs7Ozs7SUFHdEIscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2NvbnRyb2wvYmFzZS9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuLi9jb250cm9sL2NvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBDb250cm9sSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29udHJvbC9jb250cm9scyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZVxuXHQpIHsgfVxuXG5cdGdldENvbnRyb2xzRnJvbU9wdGlvbnMob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSk6IENvbnRyb2xCYXNlPGFueT5bXSB7XG5cdFx0Y29uc3QgY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSA9IG9wdGlvbnMubWFwKG8gPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbDogQ29udHJvbEludGVyZmFjZSA9IHRoaXMuY29udHJvbFNlcnZpY2Uub3B0aW9ucy5jb250cm9sc1tvLnNjaGVtYV07XG5cdFx0XHRpZiAoY29udHJvbCkge1xuXHRcdFx0XHRjb25zdCBjb250cm9sQmFzZTogVHlwZTxDb250cm9sQmFzZTxhbnk+PiA9IGNvbnRyb2wubW9kZWw7XG5cdFx0XHRcdHJldHVybiBuZXcgY29udHJvbEJhc2Uobyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBtaXNzaW5nIGNvbnRyb2wgZm9yIGtleSAke28uc2NoZW1hfWApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9KS5maWx0ZXIoeCA9PiB4KTtcblx0XHRjb250cm9scy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cdFx0cmV0dXJuIGNvbnRyb2xzO1xuXHR9XG5cblx0Z2V0R3JvdXBGcm9tT3B0aW9ucyhvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdKTogRm9ybUdyb3VwIHtcblx0XHRjb25zdCBjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdID0gdGhpcy5nZXRDb250cm9sc0Zyb21PcHRpb25zKG9wdGlvbnMpO1xuXHRcdGNvbnN0IGdyb3VwID0gdGhpcy5jb250cm9sU2VydmljZS50b0Zvcm1Hcm91cChjb250cm9scyk7XG5cdFx0cmV0dXJuIGdyb3VwO1xuXHR9XG5cblx0Z2V0R3JvdXBGcm9tQ29udHJvbHMoY29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXSk6IEZvcm1Hcm91cCB7XG5cdFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnRvRm9ybUdyb3VwKGNvbnRyb2xzKTtcblx0XHRyZXR1cm4gZ3JvdXA7XG5cdH1cblxufVxuIl19