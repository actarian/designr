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
export class AssetPipe {
    /**
     * @param {?} configService
     * @param {?} segment
     */
    constructor(configService, segment) {
        this.configService = configService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            /** @type {?} */
            const segments = this.segment.transform(data);
            segments.unshift(this.configService.options.assets);
            return segments.join('/');
        }
    }
}
AssetPipe.decorators = [
    { type: Pipe, args: [{
                name: 'asset',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AssetPipe.ctorParameters = () => [
    { type: ConfigService },
    { type: SegmentPipe }
];
/** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(i1.ConfigService), i0.inject(i2.SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVN0MsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBRXJCLFlBQ1MsYUFBNEIsRUFDNUIsT0FBb0I7UUFEcEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN6QixDQUFDOzs7OztJQUVMLFNBQVMsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUYsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNOztrQkFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7O1lBdkJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUViO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVlEsYUFBYTtZQUNiLFdBQVc7Ozs7Ozs7O0lBYWxCLGtDQUFvQzs7Ozs7SUFDcEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vc2VnbWVudC5waXBlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnYXNzZXQnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgKGRhdGEuaW5kZXhPZignaHR0cCcpID09PSAwIHx8IGRhdGEuaW5kZXhPZignL21lZGlhLycpID09PSAwKSkge1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRcdHNlZ21lbnRzLnVuc2hpZnQodGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuYXNzZXRzKTtcblx0XHRcdHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==