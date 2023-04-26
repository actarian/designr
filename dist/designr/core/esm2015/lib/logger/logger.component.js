/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger.service';
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
                template: "<div class=\"error-http\" [ngClass]=\"'http--' + logger.httpError.statusType\" *ngIf=\"logger.httpError\">\r\n\t<span>{{logger.httpError.statusType}}</span>&nbsp;\r\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\r\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\r\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\r\n</div>\r\n<!--\r\n<div *ngIf=\"logger.logs.length\">\r\n\t<ul class=\"list-group \">\r\n\t\t<li class=\"list-group-item\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\r\n\t\t</li>\r\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\r\n\t\t\t<span>{{log}}</span>\r\n\t\t</li>\r\n\t</ul>\r\n\t<br>\r\n</div>\r\n-->\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUTFDLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzNCLFlBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQzs7OztJQUV0QyxRQUFRO0lBQ1IsQ0FBQzs7O1lBVkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwMEJBQXNDO2dCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7WUFQUSxNQUFNOzs7O0lBU0YsaUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLWxvZ2dlcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2dlci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vbG9nZ2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBsb2dnZXI6IExvZ2dlcikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxufVxyXG4iXX0=