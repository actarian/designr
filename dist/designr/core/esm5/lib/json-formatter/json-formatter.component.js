import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
// require('json-formatter-js').default
import JSONFormatter from 'json-formatter-js';
import { isArray, isObject } from 'util';
import * as i0 from "@angular/core";
var _c0 = ["jsonFormatter"];
var JsonFormatterComponent = /** @class */ (function () {
    function JsonFormatterComponent(platformId) {
        this.platformId = platformId;
    }
    JsonFormatterComponent.prototype.ngOnChanges = function () {
        if (isPlatformBrowser(this.platformId)) {
            if (!isObject(this.json) && !isArray(this.json)) {
                return;
            }
            // console.log('JsonFormatterComponent', this.json);
            if (this.elementRef) {
                this.input.nativeElement.removeChild(this.elementRef.nativeElement);
            }
            // const JSONFormatter = require('json-formatter-js').default;
            var formatter = new JSONFormatter(this.json);
            var elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    };
    JsonFormatterComponent.ɵfac = function JsonFormatterComponent_Factory(t) { return new (t || JsonFormatterComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
    JsonFormatterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonFormatterComponent, selectors: [["json-formatter"]], viewQuery: function JsonFormatterComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        } }, inputs: { json: "json" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["jsonFormatter", ""]], template: function JsonFormatterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", null, 0);
        } }, styles: [""] });
    return JsonFormatterComponent;
}());
export { JsonFormatterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonFormatterComponent, [{
        type: Component,
        args: [{
                selector: 'json-formatter',
                template: "<div #jsonFormatter></div>",
                styleUrls: ['./json-formatter.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { input: [{
            type: ViewChild,
            args: ["jsonFormatter", { static: true }]
        }], json: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILHVDQUF1QztBQUN2QyxPQUFPLGFBQWEsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRXpDO0lBYUMsZ0NBQzhCLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7SUFDNUMsQ0FBQztJQUVMLDRDQUFXLEdBQVg7UUFDQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELE9BQU87YUFDUDtZQUNELG9EQUFvRDtZQUNwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsOERBQThEO1lBQzlELElBQU0sU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7SUFDRixDQUFDO2dHQTFCVyxzQkFBc0IsdUJBUXpCLFdBQVc7K0RBUlIsc0JBQXNCOzs7Ozs7WUFKdkIsK0JBQTBCOztpQ0FSdEM7Q0F1Q0MsQUFqQ0QsSUFpQ0M7U0EzQlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FObEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6Qzs7c0JBU0UsTUFBTTt1QkFBQyxXQUFXOztrQkFQbkIsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFM0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBQTEFURk9STV9JRCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0XG5pbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tICdqc29uLWZvcm1hdHRlci1qcyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iamVjdCB9IGZyb20gJ3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdqc29uLWZvcm1hdHRlcicsXG5cdHRlbXBsYXRlOiBgPGRpdiAjanNvbkZvcm1hdHRlcj48L2Rpdj5gLFxuXHRzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkZvcm1hdHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBWaWV3Q2hpbGQoYGpzb25Gb3JtYXR0ZXJgLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSBqc29uOiBBcnJheTxhbnk+IHwgT2JqZWN0IHwgYW55O1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdCkgeyB9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICghaXNPYmplY3QodGhpcy5qc29uKSAmJiAhaXNBcnJheSh0aGlzLmpzb24pKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdKc29uRm9ybWF0dGVyQ29tcG9uZW50JywgdGhpcy5qc29uKTtcblx0XHRcdGlmICh0aGlzLmVsZW1lbnRSZWYpIHtcblx0XHRcdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnN0IEpTT05Gb3JtYXR0ZXIgPSByZXF1aXJlKCdqc29uLWZvcm1hdHRlci1qcycpLmRlZmF1bHQ7XG5cdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLmpzb24pO1xuXHRcdFx0Y29uc3QgZWxlbWVudFJlZiA9IGZvcm1hdHRlci5yZW5kZXIoKTtcblx0XHRcdHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50UmVmKTtcblx0XHRcdHRoaXMuZWxlbWVudFJlZiA9IG5ldyBFbGVtZW50UmVmKGVsZW1lbnRSZWYpO1xuXHRcdH1cblx0fVxufVxuIl19