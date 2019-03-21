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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0gsT0FBTyxhQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFRekMsTUFBTSxPQUFPLHNCQUFzQjs7OztJQU9sQyxZQUM4QixVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQzVDLENBQUM7Ozs7SUFFTCxXQUFXO1FBQ1YsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxPQUFPO2FBQ1A7WUFDRCxvREFBb0Q7WUFDcEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwRTs7O2tCQUVLLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztrQkFDeEMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSw0QkFBNEI7Z0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROzthQUN6Qzs7Ozt5Q0FTRSxNQUFNLFNBQUMsV0FBVzs7O29CQVBuQixTQUFTLFNBQUMsZUFBZTttQkFFekIsS0FBSzs7OztJQUZOLHVDQUE4Qzs7SUFFOUMsc0NBQXlDOztJQUV6Qyw0Q0FBdUI7Ozs7O0lBR3RCLDRDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0XG5pbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tICdqc29uLWZvcm1hdHRlci1qcyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCB9IGZyb20gJ3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdqc29uLWZvcm1hdHRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiAjanNvbkZvcm1hdHRlcj48L2Rpdj5gLFxuXHRzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1hdHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBWaWV3Q2hpbGQoYGpzb25Gb3JtYXR0ZXJgKSBpbnB1dDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSBqc29uOiBBcnJheTxhbnk+IHwgT2JqZWN0IHwgYW55O1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdCkgeyB9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICghaXNPYmplY3QodGhpcy5qc29uKSAmJiAhaXNBcnJheSh0aGlzLmpzb24pKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdKc29uRm9ybWF0dGVyQ29tcG9uZW50JywgdGhpcy5qc29uKTtcblx0XHRcdGlmICh0aGlzLmVsZW1lbnRSZWYpIHtcblx0XHRcdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnN0IEpTT05Gb3JtYXR0ZXIgPSByZXF1aXJlKCdqc29uLWZvcm1hdHRlci1qcycpLmRlZmF1bHQ7XG5cdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLmpzb24pO1xuXHRcdFx0Y29uc3QgZWxlbWVudFJlZiA9IGZvcm1hdHRlci5yZW5kZXIoKTtcblx0XHRcdHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50UmVmKTtcblx0XHRcdHRoaXMuZWxlbWVudFJlZiA9IG5ldyBFbGVtZW50UmVmKGVsZW1lbnRSZWYpO1xuXHRcdH1cblx0fVxufVxuIl19