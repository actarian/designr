import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Logger, OnceService } from '@designr/core';
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
var GoogleTagManagerPageViewEvent = /** @class */ (function () {
    function GoogleTagManagerPageViewEvent() {
    }
    return GoogleTagManagerPageViewEvent;
}());
export { GoogleTagManagerPageViewEvent };
var GoogleTagManagerConfig = /** @class */ (function () {
    function GoogleTagManagerConfig() {
    }
    return GoogleTagManagerConfig;
}());
export { GoogleTagManagerConfig };
var GoogleTagManagerService = /** @class */ (function () {
    function GoogleTagManagerService(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.init();
    }
    GoogleTagManagerService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    GoogleTagManagerService.prototype.once = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                var id = this.options.id;
                var src = "https://www.googletagmanager.com/gtm.js?id=" + id;
                var dataLayer_1 = window['dataLayer'];
                dataLayer_1.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map(function (x) {
                    // console.log('dataLayer', dataLayer, x);
                    _this.dataLayer = dataLayer_1;
                    return dataLayer_1;
                }));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    };
    GoogleTagManagerService.prototype.push = function (payload) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.dataLayer) {
                _this.dataLayer.push(payload);
                _this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                _this.once().pipe(first()).subscribe(function (dataLayer) {
                    if (_this.dataLayer) {
                        _this.dataLayer.push(payload);
                        _this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
    };
    GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.OnceService), i0.ɵɵinject(i2.Logger)); };
    GoogleTagManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
    return GoogleTagManagerService;
}());
export { GoogleTagManagerService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleTagManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i0.NgZone }, { type: i2.OnceService }, { type: i2.Logger }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RDtJQUFBO0lBR0EsQ0FBQztJQUFELG9DQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7O0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCw2QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVEO0lBVUMsaUNBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLElBQVksRUFDWixXQUF3QixFQUN4QixNQUFjO1FBSk8sZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVPLHNDQUFJLEdBQVo7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENB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c0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvZ2dlciwgT25jZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJQYWdlVmlld0V2ZW50IHtcblx0ZGF0YUxheWVyOiBhbnlbXTtcblx0dXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnIHtcblx0aWQ6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnO1xuXG5cdHByaXZhdGUgZGF0YUxheWVyOiBhbnlbXTtcblx0cHJpdmF0ZSBkYXRhTGF5ZXIkOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZVRhZ01hbmFnZXIpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlVGFnTWFuYWdlcicpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGVUYWdNYW5hZ2VyKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55W10+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmRhdGFMYXllcik7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YUxheWVyJCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5kYXRhTGF5ZXIkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93WydkYXRhTGF5ZXInXSA9IHdpbmRvd1snZGF0YUxheWVyJ10gfHwgW107XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5vcHRpb25zLmlkO1xuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPSR7aWR9YDtcblx0XHRcdFx0Y29uc3QgZGF0YUxheWVyID0gd2luZG93WydkYXRhTGF5ZXInXTtcblx0XHRcdFx0ZGF0YUxheWVyLnB1c2goeyAnZ3RtLnN0YXJ0JzogbmV3IERhdGUoKS5nZXRUaW1lKCksIGV2ZW50OiAnZ3RtLmpzJyB9KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZScsIHNyYywgZGF0YUxheWVyKTtcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhTGF5ZXInLCBkYXRhTGF5ZXIsIHgpO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIgPSBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGF0YUxheWVyO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGFMYXllciQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRwdXNoKHBheWxvYWQ6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcblx0XHRcdFx0dGhpcy5sb2dnZXIubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLnB1c2gnLCBwYXlsb2FkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoZGF0YUxheWVyID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyLnB1c2gocGF5bG9hZCk7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZ2dlci5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcucHVzaCcsIHBheWxvYWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLypcbjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPlxuPHNjcmlwdD4oZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XG5uZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXG5qPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz1cbidodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcbn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLVRTMkg2VkcnKTs8L3NjcmlwdD5cbjwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAtLT5cbiovXG5cbi8qXG48IS0tIGFmdGVyIDxib2R5PiAtLT5cbjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XG48bm9zY3JpcHQ+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPUdUTS1UUzJINlZHXCJcbmhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPjwvbm9zY3JpcHQ+XG48IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cbiovXG5cbi8qXG53aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICdldmVudCc6ICdQYWdldmlldycsXG4gJ3VybCc6ICdodHRwczovL3d3dy5leGFtcGxlLmNvbS9zb21ldGhpbmcvY29udGFjdC11cydcbiB9KTtcbiovXG5cblxuIl19