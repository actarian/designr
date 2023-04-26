/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger.service';
var LoggerComponent = /** @class */ (function () {
    function LoggerComponent(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    LoggerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoggerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-logger',
                    template: "<div class=\"error-http\" [ngClass]=\"'http--' + logger.httpError.statusType\" *ngIf=\"logger.httpError\">\r\n\t<span>{{logger.httpError.statusType}}</span>&nbsp;\r\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\r\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\r\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\r\n</div>\r\n<!--\r\n<div *ngIf=\"logger.logs.length\">\r\n\t<ul class=\"list-group \">\r\n\t\t<li class=\"list-group-item\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\r\n\t\t</li>\r\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\r\n\t\t\t<span>{{log}}</span>\r\n\t\t</li>\r\n\t</ul>\r\n\t<br>\r\n</div>\r\n-->\r\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
                }] }
    ];
    /** @nocollapse */
    LoggerComponent.ctorParameters = function () { return [
        { type: Logger }
    ]; };
    return LoggerComponent;
}());
export { LoggerComponent };
if (false) {
    /** @type {?} */
    LoggerComponent.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTFDO0lBT0MseUJBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV0QyxrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFWRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDAwQkFBc0M7b0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7Z0JBUFEsTUFBTTs7SUFhZixzQkFBQztDQUFBLEFBWEQsSUFXQztTQUxZLGVBQWU7OztJQUNmLGlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29yZS1sb2dnZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9sb2dnZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2xvZ2dlci5jb21wb25lbnQuc2NzcyddLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbG9nZ2VyOiBMb2dnZXIpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcbn1cclxuIl19