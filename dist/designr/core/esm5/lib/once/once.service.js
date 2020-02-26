import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
// export class OnceEvent extends Event { }
var OnceService = /** @class */ (function () {
    function OnceService(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.uid = 0;
        this.paths = [];
    }
    OnceService.prototype.script = function (url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                var callbackName_1;
                if (callback === true) {
                    callbackName_1 = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName_1);
                }
                else {
                    callbackName_1 = callback;
                }
                var callback$ = void 0;
                var element = document.createElement('script');
                element.type = 'text/javascript';
                if (callback) {
                    callback$ = from(new Promise(function (resolve, reject) {
                        window[callbackName_1] = function (data) {
                            resolve(data);
                        };
                    }));
                }
                else {
                    element.async = true;
                    callback$ = fromEvent(element, 'load').pipe(map(function (x) { return x; }));
                }
                var scripts = document.getElementsByTagName('script');
                if (scripts.length) {
                    var script = scripts[scripts.length - 1];
                    script.parentNode.insertBefore(element, script.nextSibling);
                }
                element.src = url;
                return callback$;
            }
            else {
                return of(new Event('loaded!'));
            }
            // });
        }
        else {
            return of(null);
        }
    };
    OnceService.ɵfac = function OnceService_Factory(t) { return new (t || OnceService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); };
    OnceService.ɵprov = i0.ɵɵdefineInjectable({ token: OnceService, factory: OnceService.ɵfac, providedIn: 'root' });
    return OnceService;
}());
export { OnceService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDLDJDQUEyQztBQUUzQztJQVFDLHFCQUM4QixVQUFrQixFQUN2QyxJQUFZO1FBRFMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTGIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQWEsRUFBRSxDQUFDO0lBS3pCLENBQUM7SUFFTCw0QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLFFBQTJCO1FBQzlDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDBDQUEwQztZQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxjQUFvQixDQUFDO2dCQUN6QixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ3RCLGNBQVksR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVksQ0FBQyxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDTixjQUFZLEdBQUcsUUFBa0IsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxTQUFTLFNBQWlCLENBQUM7Z0JBQy9CLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxFQUFFO29CQUNiLFNBQVMsR0FBRyxJQUFJLENBQ2YsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDM0IsTUFBTSxDQUFDLGNBQVksQ0FBQyxHQUFHLFVBQVUsSUFBSTs0QkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNmLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FDRixDQUFDO2lCQUNGO3FCQUFNO29CQUNOLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQVUsRUFBVixDQUFVLENBQUMsQ0FDcEIsQ0FBQztpQkFDRjtnQkFDRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDbkIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVEO2dCQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixPQUFPLFNBQVMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsTUFBTTtTQUNOO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7MEVBckRXLFdBQVcsY0FNZCxXQUFXO3VEQU5SLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBUm5CO0NBZ0VDLEFBekRELElBeURDO1NBdERZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU9FLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBleHBvcnQgY2xhc3MgT25jZUV2ZW50IGV4dGVuZHMgRXZlbnQgeyB9XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9uY2VTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHVpZDogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBwYXRoczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0KSB7IH1cblxuXHRzY3JpcHQodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogc3RyaW5nIHwgYm9vbGVhbik6IE9ic2VydmFibGU8RXZlbnQ+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Ly8gISEhIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5wYXRocy5pbmRleE9mKHVybCkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMucGF0aHMucHVzaCh1cmwpO1xuXHRcdFx0XHRsZXQgY2FsbGJhY2tOYW1lOiBzdHJpbmc7XG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrTmFtZSA9ICdPbmNlQ2FsbGJhY2snICsgKCsrdGhpcy51aWQpO1xuXHRcdFx0XHRcdHVybCA9IHVybC5zcGxpdCgne3tjYWxsYmFja319Jykuam9pbihjYWxsYmFja05hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNhbGxiYWNrTmFtZSA9IGNhbGxiYWNrIGFzIHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2FsbGJhY2skOiBPYnNlcnZhYmxlPGFueT47XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRcdFx0ZWxlbWVudC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG5cdFx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRcdGNhbGxiYWNrJCA9IGZyb20oXG5cdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRcdGNhbGxiYWNrJCA9IGZyb21FdmVudChlbGVtZW50LCAnbG9hZCcpLnBpcGUoXG5cdFx0XHRcdFx0XHRtYXAoeCA9PiB4IGFzIEV2ZW50KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRcdFx0aWYgKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBzY3JpcHQubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW1lbnQuc3JjID0gdXJsO1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2skO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKG5ldyBFdmVudCgnbG9hZGVkIScpKTtcblx0XHRcdH1cblx0XHRcdC8vIH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=