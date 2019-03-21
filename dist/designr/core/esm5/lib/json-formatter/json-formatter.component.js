/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
// require('json-formatter-js').default
import JSONFormatter from 'json-formatter-js';
import { isArray, isObject } from 'util';
var JsonFormatterComponent = /** @class */ (function () {
    function JsonFormatterComponent(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    JsonFormatterComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            if (!isObject(this.json) && !isArray(this.json)) {
                return;
            }
            // console.log('JsonFormatterComponent', this.json);
            if (this.elementRef) {
                this.input.nativeElement.removeChild(this.elementRef.nativeElement);
            }
            // const JSONFormatter = require('json-formatter-js').default;
            /** @type {?} */
            var formatter = new JSONFormatter(this.json);
            /** @type {?} */
            var elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    };
    JsonFormatterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'json-formatter',
                    template: "<div #jsonFormatter></div>",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    JsonFormatterComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    JsonFormatterComponent.propDecorators = {
        input: [{ type: ViewChild, args: ["jsonFormatter",] }],
        json: [{ type: Input }]
    };
    return JsonFormatterComponent;
}());
export { JsonFormatterComponent };
if (false) {
    /** @type {?} */
    JsonFormatterComponent.prototype.input;
    /** @type {?} */
    JsonFormatterComponent.prototype.json;
    /** @type {?} */
    JsonFormatterComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    JsonFormatterComponent.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0gsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFhQyxnQ0FDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM1QyxDQUFDOzs7O0lBRUwsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7O2dCQUVLLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztnQkFDeEMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDOztnQkFoQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw0QkFBNEI7b0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7NkNBU0UsTUFBTSxTQUFDLFdBQVc7Ozt3QkFQbkIsU0FBUyxTQUFDLGVBQWU7dUJBRXpCLEtBQUs7O0lBd0JQLDZCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksc0JBQXNCOzs7SUFDbEMsdUNBQThDOztJQUU5QyxzQ0FBeUM7O0lBRXpDLDRDQUF1Qjs7Ozs7SUFHdEIsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyByZXF1aXJlKCdqc29uLWZvcm1hdHRlci1qcycpLmRlZmF1bHRcbmltcG9ydCBKU09ORm9ybWF0dGVyIGZyb20gJ2pzb24tZm9ybWF0dGVyLWpzJztcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0IH0gZnJvbSAndXRpbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2pzb24tZm9ybWF0dGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2ICNqc29uRm9ybWF0dGVyPjwvZGl2PmAsXG5cdHN0eWxlVXJsczogWycuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QFZpZXdDaGlsZChganNvbkZvcm1hdHRlcmApIGlucHV0OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpIGpzb246IEFycmF5PGFueT4gfCBPYmplY3QgfCBhbnk7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0KSB7IH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKCFpc09iamVjdCh0aGlzLmpzb24pICYmICFpc0FycmF5KHRoaXMuanNvbikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0pzb25Gb3JtYXR0ZXJDb21wb25lbnQnLCB0aGlzLmpzb24pO1xuXHRcdFx0aWYgKHRoaXMuZWxlbWVudFJlZikge1xuXHRcdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc3QgSlNPTkZvcm1hdHRlciA9IHJlcXVpcmUoJ2pzb24tZm9ybWF0dGVyLWpzJykuZGVmYXVsdDtcblx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKHRoaXMuanNvbik7XG5cdFx0XHRjb25zdCBlbGVtZW50UmVmID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuXHRcdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRSZWYpO1xuXHRcdFx0dGhpcy5lbGVtZW50UmVmID0gbmV3IEVsZW1lbnRSZWYoZWxlbWVudFJlZik7XG5cdFx0fVxuXHR9XG59XG4iXX0=