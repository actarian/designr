/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isArray, isObject } from 'util';
// import JSONFormatter from 'json-formatter-js';
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
            /** @type {?} */
            var JSONFormatter = require('json-formatter-js').default;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHekM7SUFhQyxnQ0FDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM1QyxDQUFDOzs7O0lBRUwsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7Z0JBQ0ssYUFBYSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU87O2dCQUNwRCxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Z0JBQ3hDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0YsQ0FBQzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNEJBQTRCO29CQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7aUJBQ3pDOzs7OzZDQVNFLE1BQU0sU0FBQyxXQUFXOzs7d0JBUG5CLFNBQVMsU0FBQyxlQUFlO3VCQUV6QixLQUFLOztJQXdCUCw2QkFBQztDQUFBLEFBakNELElBaUNDO1NBM0JZLHNCQUFzQjs7O0lBQ2xDLHVDQUE4Qzs7SUFFOUMsc0NBQXlDOztJQUV6Qyw0Q0FBdUI7Ozs7O0lBR3RCLDRDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICd1dGlsJztcbi8vIGltcG9ydCBKU09ORm9ybWF0dGVyIGZyb20gJ2pzb24tZm9ybWF0dGVyLWpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnanNvbi1mb3JtYXR0ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgI2pzb25Gb3JtYXR0ZXI+PC9kaXY+YCxcblx0c3R5bGVVcmxzOiBbJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRAVmlld0NoaWxkKGBqc29uRm9ybWF0dGVyYCkgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KCkganNvbjogQXJyYXk8YW55PiB8IE9iamVjdCB8IGFueTtcblxuXHRlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHQpIHsgfVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAoIWlzT2JqZWN0KHRoaXMuanNvbikgJiYgIWlzQXJyYXkodGhpcy5qc29uKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnSnNvbkZvcm1hdHRlckNvbXBvbmVudCcsIHRoaXMuanNvbik7XG5cdFx0XHRpZiAodGhpcy5lbGVtZW50UmVmKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBKU09ORm9ybWF0dGVyID0gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0O1xuXHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIodGhpcy5qc29uKTtcblx0XHRcdGNvbnN0IGVsZW1lbnRSZWYgPSBmb3JtYXR0ZXIucmVuZGVyKCk7XG5cdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudFJlZik7XG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZihlbGVtZW50UmVmKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==