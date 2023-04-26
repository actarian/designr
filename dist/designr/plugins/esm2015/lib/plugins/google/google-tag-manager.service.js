/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Logger, OnceService } from '@designr/core';
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
export class GoogleTagManagerPageViewEvent {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.url;
}
export class GoogleTagManagerConfig {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerConfig.prototype.id;
}
export class GoogleTagManagerService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} zone
     * @param {?} onceService
     * @param {?} logger
     */
    constructor(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.initialized = false;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer && this.initialized) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                const id = this.options.id;
                /** @type {?} */
                const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
                /** @type {?} */
                const dataLayer = window['dataLayer'];
                dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    // console.log('GoogleTagManagerConfig.dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    this.initialized = true;
                    return dataLayer;
                })));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    push(payload) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe((/**
                 * @param {?} dataLayer
                 * @return {?}
                 */
                dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                }));
            }
        }));
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: NgZone },
    { type: OnceService },
    { type: Logger }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i2.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GoogleTagManagerService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer$;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLDZCQUE2QjtDQUd6Qzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYixNQUFNLE9BQU8sc0JBQXNCO0NBRWxDOzs7SUFEQSxvQ0FBVzs7QUFNWixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQVFuQyxZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFXcEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gsSUFBSSxD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ZCwwQ0FBdUM7Ozs7O0lBRXZDLDhDQUFxQzs7Ozs7SUFDckMsNENBQXlCOzs7OztJQUN6Qiw2Q0FBc0M7Ozs7O0lBR3JDLDZDQUErQzs7Ozs7SUFDL0MsaURBQXNDOzs7OztJQUN0Qyx1Q0FBb0I7Ozs7O0lBQ3BCLDhDQUFnQzs7Ozs7SUFDaEMseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvZ2dlciwgT25jZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyUGFnZVZpZXdFdmVudCB7XHJcblx0ZGF0YUxheWVyOiBhbnlbXTtcclxuXHR1cmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb25maWcge1xyXG5cdGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG9wdGlvbnM6IEdvb2dsZVRhZ01hbmFnZXJDb25maWc7XHJcblxyXG5cdHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGRhdGFMYXllcjogYW55W107XHJcblx0cHJpdmF0ZSBkYXRhTGF5ZXIkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcclxuXHRcdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlVGFnTWFuYWdlcikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZVRhZ01hbmFnZXInKTtcclxuXHRcdH1cclxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZVRhZ01hbmFnZXJDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZVRhZ01hbmFnZXIpO1xyXG5cdH1cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCogIGNhbGwgR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxyXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cclxuXHJcblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIgJiYgdGhpcy5pbml0aWFsaXplZCkge1xyXG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmRhdGFMYXllcik7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhTGF5ZXIkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YUxheWVyJDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3dbJ2RhdGFMYXllciddID0gd2luZG93WydkYXRhTGF5ZXInXSB8fCBbXTtcclxuXHRcdFx0XHRjb25zdCBpZCA9IHRoaXMub3B0aW9ucy5pZDtcclxuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPSR7aWR9YDtcclxuXHRcdFx0XHRjb25zdCBkYXRhTGF5ZXIgPSB3aW5kb3dbJ2RhdGFMYXllciddO1xyXG5cdFx0XHRcdGRhdGFMYXllci5wdXNoKHsgJ2d0bS5zdGFydCc6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBldmVudDogJ2d0bS5qcycgfSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZScsIHNyYywgZGF0YUxheWVyKTtcclxuXHRcdFx0XHR0aGlzLmRhdGFMYXllciQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXHJcblx0XHRcdFx0XHRtYXAoeCA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLmRhdGFMYXllcicsIGRhdGFMYXllciwgeCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyID0gZGF0YUxheWVyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGFMYXllcjtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRhTGF5ZXIkO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdXNoKHBheWxvYWQ6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XHJcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcclxuXHRcdFx0XHR0aGlzLmxvZ2dlci5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcucHVzaCcsIHBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMub25jZSgpLnBpcGUoXHJcblx0XHRcdFx0XHRmaXJzdCgpLFxyXG5cdFx0XHRcdCkuc3Vic2NyaWJlKGRhdGFMYXllciA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLnB1c2gnLCBwYXlsb2FkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG48IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAtLT5cclxuPHNjcmlwdD4oZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XHJcbm5ldyBEYXRlKCkuZ2V0VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcclxuaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XHJcbidodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcclxufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5ZXInLCdHVE0tVFMySDZWRycpOzwvc2NyaXB0PlxyXG48IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgLS0+XHJcbiovXHJcblxyXG4vKlxyXG48IS0tIGFmdGVyIDxib2R5PiAtLT5cclxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cclxuPG5vc2NyaXB0PjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1HVE0tVFMySDZWR1wiXHJcbmhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPjwvbm9zY3JpcHQ+XHJcbjwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxyXG4qL1xyXG5cclxuLypcclxud2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xyXG4gJ2V2ZW50JzogJ1BhZ2V2aWV3JyxcclxuICd1cmwnOiAnaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vc29tZXRoaW5nL2NvbnRhY3QtdXMnXHJcbiB9KTtcclxuKi9cclxuXHJcblxyXG4iXX0=