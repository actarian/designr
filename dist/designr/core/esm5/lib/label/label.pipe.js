/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelPipe = /** @class */ (function () {
    function LabelPipe(labelService) {
        this.labelService = labelService;
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        return this.labelService.transform(key, defaultValue, params);
    };
    LabelPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'label',
                    pure: false
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LabelPipe.ctorParameters = function () { return [
        { type: LabelService }
    ]; };
    /** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
    return LabelPipe;
}());
export { LabelPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRS9DO0lBVUMsbUJBQ1MsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3RDLENBQUM7Ozs7Ozs7SUFFTCw2QkFBUzs7Ozs7O0lBQVQsVUFBVSxHQUFXLEVBQUUsWUFBcUIsRUFBRSxNQUFZO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFoQkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVFEsWUFBWTs7O29CQUZyQjtDQXNCQyxBQWxCRCxJQWtCQztTQVZZLFNBQVM7Ozs7OztJQUdwQixpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ2xhYmVsJyxcclxuXHRwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXHJcblx0KSB7IH1cclxuXHJcblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYWJlbFNlcnZpY2UudHJhbnNmb3JtKGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19