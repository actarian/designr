/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
import * as i2 from "./segment.pipe";
var PublicPipe = /** @class */ (function () {
    function PublicPipe(configService, segment) {
        this.configService = configService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    PublicPipe.prototype.transform = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var segments = this.segment.transform(data);
        segments.unshift(this.configService.options.public);
        return segments.join('/');
    };
    PublicPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'public',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PublicPipe.ctorParameters = function () { return [
        { type: ConfigService },
        { type: SegmentPipe }
    ]; };
    /** @nocollapse */ PublicPipe.ngInjectableDef = i0.defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(i0.inject(i1.ConfigService), i0.inject(i2.SegmentPipe)); }, token: PublicPipe, providedIn: "root" });
    return PublicPipe;
}());
export { PublicPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3B1YmxpYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU3QztJQVVDLG9CQUNTLGFBQTRCLEVBQzVCLE9BQW9CO1FBRHBCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDekIsQ0FBQzs7Ozs7SUFFTCw4QkFBUzs7OztJQUFULFVBQVUsSUFBb0I7O1lBQ3ZCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsUUFBUTtpQkFFZDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVZRLGFBQWE7Z0JBQ2IsV0FBVzs7O3FCQUZwQjtDQXlCQyxBQXJCRCxJQXFCQztTQWJZLFVBQVU7Ozs7OztJQUdyQixtQ0FBb0M7Ozs7O0lBQ3BDLDZCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3NlZ21lbnQucGlwZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3B1YmxpYycsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQdWJsaWNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnB1YmxpYyk7XG5cdFx0cmV0dXJuIHNlZ21lbnRzLmpvaW4oJy8nKTtcblx0fVxuXG59XG4iXX0=