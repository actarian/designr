import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
// require('json-formatter-js').default
import JSONFormatter from 'json-formatter-js';
import { isArray, isObject } from 'util';
import * as i0 from "@angular/core";
const _c0 = ["jsonFormatter"];
export class JsonFormatterComponent {
    constructor(platformId) {
        this.platformId = platformId;
    }
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
            const formatter = new JSONFormatter(this.json);
            const elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    }
}
JsonFormatterComponent.ɵfac = function JsonFormatterComponent_Factory(t) { return new (t || JsonFormatterComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID)); };
JsonFormatterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonFormatterComponent, selectors: [["json-formatter"]], viewQuery: function JsonFormatterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { json: "json" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["jsonFormatter", ""]], template: function JsonFormatterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonFormatterComponent, [{
        type: Component,
        args: [{
                selector: 'json-formatter',
                template: `<div #jsonFormatter></div>`,
                styleUrls: ['./json-formatter.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { input: [{
            type: ViewChild,
            args: [`jsonFormatter`, { static: true }]
        }], json: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILHVDQUF1QztBQUN2QyxPQUFPLGFBQWEsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBUXpDLE1BQU0sT0FBTyxzQkFBc0I7SUFPbEMsWUFDOEIsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUM1QyxDQUFDO0lBRUwsV0FBVztRQUNWLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsT0FBTzthQUNQO1lBQ0Qsb0RBQW9EO1lBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEU7WUFDRCw4REFBOEQ7WUFDOUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QztJQUNGLENBQUM7OzRGQTFCVyxzQkFBc0IsdUJBUXpCLFdBQVc7MkRBUlIsc0JBQXNCOzs7Ozs7UUFKdkIsK0JBQTBCOztrREFJekIsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFDekM7O3NCQVNFLE1BQU07dUJBQUMsV0FBVzs7a0JBUG5CLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRTNDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIHJlcXVpcmUoJ2pzb24tZm9ybWF0dGVyLWpzJykuZGVmYXVsdFxuaW1wb3J0IEpTT05Gb3JtYXR0ZXIgZnJvbSAnanNvbi1mb3JtYXR0ZXItanMnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmplY3QgfSBmcm9tICd1dGlsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnanNvbi1mb3JtYXR0ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgI2pzb25Gb3JtYXR0ZXI+PC9kaXY+YCxcblx0c3R5bGVVcmxzOiBbJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRAVmlld0NoaWxkKGBqc29uRm9ybWF0dGVyYCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KCkganNvbjogQXJyYXk8YW55PiB8IE9iamVjdCB8IGFueTtcblxuXHRlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHQpIHsgfVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAoIWlzT2JqZWN0KHRoaXMuanNvbikgJiYgIWlzQXJyYXkodGhpcy5qc29uKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnSnNvbkZvcm1hdHRlckNvbXBvbmVudCcsIHRoaXMuanNvbik7XG5cdFx0XHRpZiAodGhpcy5lbGVtZW50UmVmKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zdCBKU09ORm9ybWF0dGVyID0gcmVxdWlyZSgnanNvbi1mb3JtYXR0ZXItanMnKS5kZWZhdWx0O1xuXHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIodGhpcy5qc29uKTtcblx0XHRcdGNvbnN0IGVsZW1lbnRSZWYgPSBmb3JtYXR0ZXIucmVuZGVyKCk7XG5cdFx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudFJlZik7XG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYgPSBuZXcgRWxlbWVudFJlZihlbGVtZW50UmVmKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==