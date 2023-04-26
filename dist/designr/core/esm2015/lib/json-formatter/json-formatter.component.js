/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
// require('json-formatter-js').default
import JSONFormatter from 'json-formatter-js';
import { isArray, isObject } from 'util';
export class JsonFormatterComponent {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
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
            const formatter = new JSONFormatter(this.json);
            /** @type {?} */
            const elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    }
}
JsonFormatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'json-formatter',
                template: `<div #jsonFormatter></div>`,
                encapsulation: ViewEncapsulation.Emulated,
                styles: [""]
            }] }
];
/** @nocollapse */
JsonFormatterComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
JsonFormatterComponent.propDecorators = {
    input: [{ type: ViewChild, args: [`jsonFormatter`,] }],
    json: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0gsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRekMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQU9sQyxZQUM4QixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzVDLENBQUM7Ozs7SUFFTCxXQUFXO1FBQ1YsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7O2tCQUVLLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztrQkFDeEMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSw0QkFBNEI7Z0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROzthQUN6Qzs7Ozt5Q0FTRSxNQUFNLFNBQUMsV0FBVzs7O29CQVBuQixTQUFTLFNBQUMsZUFBZTttQkFFekIsS0FBSzs7OztJQUZOLHVDQUE4Qzs7SUFFOUMsc0NBQXlDOztJQUV6Qyw0Q0FBdUI7Ozs7O0lBR3RCLDRDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIFBMQVRGT1JNX0lELCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIHJlcXVpcmUoJ2pzb24tZm9ybWF0dGVyLWpzJykuZGVmYXVsdFxyXG5pbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tICdqc29uLWZvcm1hdHRlci1qcyc7XHJcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0IH0gZnJvbSAndXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2pzb24tZm9ybWF0dGVyJyxcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI2pzb25Gb3JtYXR0ZXI+PC9kaXY+YCxcclxuXHRzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1hdHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblx0QFZpZXdDaGlsZChganNvbkZvcm1hdHRlcmApIGlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuXHRASW5wdXQoKSBqc29uOiBBcnJheTxhbnk+IHwgT2JqZWN0IHwgYW55O1xyXG5cclxuXHRlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0aWYgKCFpc09iamVjdCh0aGlzLmpzb24pICYmICFpc0FycmF5KHRoaXMuanNvbikpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0pzb25Gb3JtYXR0ZXJDb21wb25lbnQnLCB0aGlzLmpzb24pO1xyXG5cdFx0XHRpZiAodGhpcy5lbGVtZW50UmVmKSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBjb25zdCBKU09ORm9ybWF0dGVyID0gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0O1xyXG5cdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLmpzb24pO1xyXG5cdFx0XHRjb25zdCBlbGVtZW50UmVmID0gZm9ybWF0dGVyLnJlbmRlcigpO1xyXG5cdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudFJlZik7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZiA9IG5ldyBFbGVtZW50UmVmKGVsZW1lbnRSZWYpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=