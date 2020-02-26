import { Component, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger.service';
import * as i0 from "@angular/core";
import * as i1 from "./logger.service";
import * as i2 from "@angular/common";
function LoggerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "\u00A0 ");
    i0.ɵɵelementStart(4, "span", 2);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, "\u00A0 ");
    i0.ɵɵelementStart(7, "span", 3);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, "\u00A0 ");
    i0.ɵɵelementStart(10, "span", 4);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", "http--" + ctx_r1.logger.httpError.statusType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.logger.httpError.statusType);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.logger.httpError.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.logger.httpError.url);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.logger.httpError.body == null ? null : ctx_r1.logger.httpError.body.error);
} }
export class LoggerComponent {
    constructor(logger) {
        this.logger = logger;
    }
    ngOnInit() {
    }
}
LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(i0.ɵɵdirectiveInject(i1.Logger)); };
LoggerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoggerComponent, selectors: [["core-logger"]], decls: 1, vars: 1, consts: [["class", "error-http", 3, "ngClass", 4, "ngIf"], [1, "error-http", 3, "ngClass"], [1, "status"], [1, "url"], [1, "message"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, LoggerComponent_div_0_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.logger.httpError);
    } }, directives: [i2.NgIf, i2.NgClass], styles: [".error-http[_ngcontent-%COMP%]{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoggerComponent, [{
        type: Component,
        args: [{
                selector: 'core-logger',
                templateUrl: './logger.component.html',
                styleUrls: ['./logger.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: i1.Logger }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQudHMiLCJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7SUNEMUMsOEJBQ0M7SUFBQSw0QkFBTTtJQUFBLFlBQStCO0lBQUEsaUJBQU87SUFBQSx1QkFDNUM7SUFBQSwrQkFBcUI7SUFBQSxZQUEyQjtJQUFBLGlCQUFPO0lBQUEsdUJBQ3ZEO0lBQUEsK0JBQWtCO0lBQUEsWUFBd0I7SUFBQSxpQkFBTztJQUFBLHVCQUNqRDtJQUFBLGdDQUFzQjtJQUFBLGFBQWdDO0lBQUEsaUJBQU87SUFDOUQsaUJBQU07OztJQUxrQix1RUFBa0Q7SUFDbkUsZUFBK0I7SUFBL0Isd0RBQStCO0lBQ2hCLGVBQTJCO0lBQTNCLG9EQUEyQjtJQUM5QixlQUF3QjtJQUF4QixpREFBd0I7SUFDcEIsZUFBZ0M7SUFBaEMsc0dBQWdDOztBREt2RCxNQUFNLE9BQU8sZUFBZTtJQUMzQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFdEMsUUFBUTtJQUNSLENBQUM7OzhFQUpXLGVBQWU7b0RBQWYsZUFBZTtRQ1Q1QixpRUFDQzs7UUFEMEUsMkNBQXdCOztrRERTdEYsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbG9nZ2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2dlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xvZ2dlci5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29uc3RydWN0b3IocHVibGljIGxvZ2dlcjogTG9nZ2VyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImVycm9yLWh0dHBcIiBbbmdDbGFzc109XCInaHR0cC0tJyArIGxvZ2dlci5odHRwRXJyb3Iuc3RhdHVzVHlwZVwiICpuZ0lmPVwibG9nZ2VyLmh0dHBFcnJvclwiPlxuXHQ8c3Bhbj57e2xvZ2dlci5odHRwRXJyb3Iuc3RhdHVzVHlwZX19PC9zcGFuPiZuYnNwO1xuXHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7bG9nZ2VyLmh0dHBFcnJvci5zdGF0dXN9fTwvc3Bhbj4mbmJzcDtcblx0PHNwYW4gY2xhc3M9XCJ1cmxcIj57e2xvZ2dlci5odHRwRXJyb3IudXJsfX08L3NwYW4+Jm5ic3A7XG5cdDxzcGFuIGNsYXNzPVwibWVzc2FnZVwiPnt7bG9nZ2VyLmh0dHBFcnJvci5ib2R5Py5lcnJvcn19PC9zcGFuPlxuPC9kaXY+XG48IS0tXG48ZGl2ICpuZ0lmPVwibG9nZ2VyLmxvZ3MubGVuZ3RoXCI+XG5cdDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgXCI+XG5cdFx0PGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1zbSBmbG9hdC1yaWdodFwiIChjbGljayk9XCJsb2dnZXIuY2xlYXIoKVwiIHRpdGxlPVwiQ2xlYXIgTG9nc1wiPnt7ICdhcHAuY2xlYXInIHwgdHJhbnNsYXRlIH19PC9idXR0b24+XG5cdFx0PC9saT5cblx0XHQ8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiAqbmdGb3I9J2xldCBsb2cgb2YgbG9nZ2VyLmxvZ3MnPlxuXHRcdFx0PHNwYW4+e3tsb2d9fTwvc3Bhbj5cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuXHQ8YnI+XG48L2Rpdj5cbi0tPlxuIl19