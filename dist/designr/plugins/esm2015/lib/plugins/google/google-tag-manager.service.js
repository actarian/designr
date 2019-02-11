/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (this.dataLayer) {
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
                this.dataLayer$ = this.onceService.script(src).pipe(map(x => {
                    // console.log('dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    return dataLayer;
                }));
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
        this.zone.runOutsideAngular(() => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe(dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLDZCQUE2QjtDQUd6Qzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYixNQUFNLE9BQU8sc0JBQXNCO0NBRWxDOzs7SUFEQSxvQ0FBVzs7QUFNWixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQU9uQyxZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9B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Ozs7OztJQUNwQiw4Q0FBZ0M7Ozs7O0lBQ2hDLHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIsIE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyUGFnZVZpZXdFdmVudCB7XG5cdGRhdGFMYXllcjogYW55W107XG5cdHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB7XG5cdGlkOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogR29vZ2xlVGFnTWFuYWdlckNvbmZpZztcblxuXHRwcml2YXRlIGRhdGFMYXllcjogYW55W107XG5cdHByaXZhdGUgZGF0YUxheWVyJDogT2JzZXJ2YWJsZTxhbnlbXT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBsb2dnZXI6IExvZ2dlcixcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGVUYWdNYW5hZ2VyKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZVRhZ01hbmFnZXInKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgR29vZ2xlVGFnTWFuYWdlckNvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlVGFnTWFuYWdlcik7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5kYXRhTGF5ZXIpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRhdGFMYXllciQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YUxheWVyJDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1snZGF0YUxheWVyJ10gPSB3aW5kb3dbJ2RhdGFMYXllciddIHx8IFtdO1xuXHRcdFx0XHRjb25zdCBpZCA9IHRoaXMub3B0aW9ucy5pZDtcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0ke2lkfWA7XG5cdFx0XHRcdGNvbnN0IGRhdGFMYXllciA9IHdpbmRvd1snZGF0YUxheWVyJ107XG5cdFx0XHRcdGRhdGFMYXllci5wdXNoKHsgJ2d0bS5zdGFydCc6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBldmVudDogJ2d0bS5qcycgfSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLm9uY2UnLCBzcmMsIGRhdGFMYXllcik7XG5cdFx0XHRcdHRoaXMuZGF0YUxheWVyJCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcblx0XHRcdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZGF0YUxheWVyJywgZGF0YUxheWVyLCB4KTtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyID0gZGF0YUxheWVyO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRhdGFMYXllcjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRhTGF5ZXIkO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cHVzaChwYXlsb2FkOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdHRoaXMuZGF0YUxheWVyLnB1c2gocGF5bG9hZCk7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5wdXNoJywgcGF5bG9hZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKGRhdGFMYXllciA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllci5wdXNoKHBheWxvYWQpO1xuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLnB1c2gnLCBwYXlsb2FkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qXG48IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAtLT5cbjxzY3JpcHQ+KGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxubmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxuaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4naHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG59KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJ0dUTS1UUzJINlZHJyk7PC9zY3JpcHQ+XG48IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgLS0+XG4qL1xuXG4vKlxuPCEtLSBhZnRlciA8Ym9keT4gLS0+XG48IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxuPG5vc2NyaXB0PjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD1HVE0tVFMySDZWR1wiXG5oZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT48L25vc2NyaXB0PlxuPCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XG4qL1xuXG4vKlxud2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gd2luZG93LmRhdGFMYXllci5wdXNoKHtcbiAnZXZlbnQnOiAnUGFnZXZpZXcnLFxuICd1cmwnOiAnaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vc29tZXRoaW5nL2NvbnRhY3QtdXMnXG4gfSk7XG4qL1xuXG5cbiJdfQ==