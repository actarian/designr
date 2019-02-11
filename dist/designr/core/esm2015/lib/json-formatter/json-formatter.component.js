/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isArray, isObject } from 'util';
// import JSONFormatter from 'json-formatter-js';
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
            /** @type {?} */
            const JSONFormatter = require('json-formatter-js').default;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTekMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQU9sQyxZQUM4QixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzVDLENBQUM7Ozs7SUFFTCxXQUFXO1FBQ1YsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7a0JBQ0ssYUFBYSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU87O2tCQUNwRCxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7a0JBQ3hDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0lBQ0YsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNEJBQTRCO2dCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBU0UsTUFBTSxTQUFDLFdBQVc7OztvQkFQbkIsU0FBUyxTQUFDLGVBQWU7bUJBRXpCLEtBQUs7Ozs7SUFGTix1Q0FBOEM7O0lBRTlDLHNDQUF5Qzs7SUFFekMsNENBQXVCOzs7OztJQUd0Qiw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0IH0gZnJvbSAndXRpbCc7XG4vLyBpbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tICdqc29uLWZvcm1hdHRlci1qcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2pzb24tZm9ybWF0dGVyJyxcblx0dGVtcGxhdGU6IGA8ZGl2ICNqc29uRm9ybWF0dGVyPjwvZGl2PmAsXG5cdHN0eWxlVXJsczogWycuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0QFZpZXdDaGlsZChganNvbkZvcm1hdHRlcmApIGlucHV0OiBFbGVtZW50UmVmO1xuXG5cdEBJbnB1dCgpIGpzb246IEFycmF5PGFueT4gfCBPYmplY3QgfCBhbnk7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0KSB7IH1cblxuXHRuZ09uQ2hhbmdlcygpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKCFpc09iamVjdCh0aGlzLmpzb24pICYmICFpc0FycmF5KHRoaXMuanNvbikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0pzb25Gb3JtYXR0ZXJDb21wb25lbnQnLCB0aGlzLmpzb24pO1xuXHRcdFx0aWYgKHRoaXMuZWxlbWVudFJlZikge1xuXHRcdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgSlNPTkZvcm1hdHRlciA9IHJlcXVpcmUoJ2pzb24tZm9ybWF0dGVyLWpzJykuZGVmYXVsdDtcblx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKHRoaXMuanNvbik7XG5cdFx0XHRjb25zdCBlbGVtZW50UmVmID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuXHRcdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRSZWYpO1xuXHRcdFx0dGhpcy5lbGVtZW50UmVmID0gbmV3IEVsZW1lbnRSZWYoZWxlbWVudFJlZik7XG5cdFx0fVxuXHR9XG59XG4iXX0=