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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0gsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekM7SUFhQyxnQ0FDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM1QyxDQUFDOzs7O0lBRUwsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7O2dCQUVLLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztnQkFDeEMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDOztnQkFoQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw0QkFBNEI7b0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7NkNBU0UsTUFBTSxTQUFDLFdBQVc7Ozt3QkFQbkIsU0FBUyxTQUFDLGVBQWU7dUJBRXpCLEtBQUs7O0lBd0JQLDZCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksc0JBQXNCOzs7SUFDbEMsdUNBQThDOztJQUU5QyxzQ0FBeUM7O0lBRXpDLDRDQUF1Qjs7Ozs7SUFHdEIsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0XHJcbmltcG9ydCBKU09ORm9ybWF0dGVyIGZyb20gJ2pzb24tZm9ybWF0dGVyLWpzJztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICd1dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnanNvbi1mb3JtYXR0ZXInLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjanNvbkZvcm1hdHRlcj48L2Rpdj5gLFxyXG5cdHN0eWxlVXJsczogWycuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHRAVmlld0NoaWxkKGBqc29uRm9ybWF0dGVyYCkgaW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG5cdEBJbnB1dCgpIGpzb246IEFycmF5PGFueT4gfCBPYmplY3QgfCBhbnk7XHJcblxyXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0KSB7IH1cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRpZiAoIWlzT2JqZWN0KHRoaXMuanNvbikgJiYgIWlzQXJyYXkodGhpcy5qc29uKSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnSnNvbkZvcm1hdHRlckNvbXBvbmVudCcsIHRoaXMuanNvbik7XHJcblx0XHRcdGlmICh0aGlzLmVsZW1lbnRSZWYpIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGNvbnN0IEpTT05Gb3JtYXR0ZXIgPSByZXF1aXJlKCdqc29uLWZvcm1hdHRlci1qcycpLmRlZmF1bHQ7XHJcblx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKHRoaXMuanNvbik7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnRSZWYgPSBmb3JtYXR0ZXIucmVuZGVyKCk7XHJcblx0XHRcdHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50UmVmKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmID0gbmV3IEVsZW1lbnRSZWYoZWxlbWVudFJlZik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==