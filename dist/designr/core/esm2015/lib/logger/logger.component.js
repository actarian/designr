/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger';
export class LoggerComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-logger',
                template: "<div class=\"error-http\" *ngIf=\"logger.httpError\">\n\t<span>error</span>&nbsp;\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\n</div>\n<!--\n<div *ngIf=\"logger.logs.length\">\n\t<ul class=\"list-group \">\n\t\t<li class=\"list-group-item\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\n\t\t\t<span>{{log}}</span>\n\t\t</li>\n\t</ul>\n\t<br>\n</div>\n-->\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
            }] }
];
/** @nocollapse */
LoggerComponent.ctorParameters = () => [
    { type: Logger }
];
if (false) {
    /** @type {?} */
    LoggerComponent.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVFsQyxNQUFNLE9BQU8sZUFBZTs7OztJQUMzQixZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7Ozs7SUFFdEMsUUFBUTtJQUNSLENBQUM7OztZQVZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIscXRCQUFzQztnQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2FBQ3pDOzs7O1lBUFEsTUFBTTs7OztJQVNGLGlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWxvZ2dlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9sb2dnZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9sb2dnZXIuY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBsb2dnZXI6IExvZ2dlcikgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cbn1cbiJdfQ==