import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
var PublicPipe = /** @class */ (function () {
    function PublicPipe(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    PublicPipe.prototype.transform = function (data) {
        var segments = this.segment.transform(data);
        segments.unshift(this.coreService.options.public);
        return segments.join('/');
    };
    PublicPipe.ɵfac = function PublicPipe_Factory(t) { return new (t || PublicPipe)(i0.ɵɵdirectiveInject(i1.CoreService), i0.ɵɵdirectiveInject(i2.SegmentPipe)); };
    PublicPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "public", type: PublicPipe, pure: true });
    PublicPipe.ɵprov = i0.ɵɵdefineInjectable({ token: PublicPipe, factory: PublicPipe.ɵfac, providedIn: 'root' });
    return PublicPipe;
}());
export { PublicPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PublicPipe, [{
        type: Pipe,
        args: [{
                name: 'public',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }, { type: i2.SegmentPipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3B1YmxpYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdDO0lBVUMsb0JBQ1MsV0FBd0IsRUFDeEIsT0FBb0I7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN6QixDQUFDO0lBRUwsOEJBQVMsR0FBVCxVQUFVLElBQW9CO1FBQzdCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7d0VBWFcsVUFBVTsrREFBVixVQUFVO3NEQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZWLE1BQU07cUJBVm5CO0NBeUJDLEFBckJELElBcUJDO1NBYlksVUFBVTtrREFBVixVQUFVO2NBUnRCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTthQUVkOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vc2VnbWVudC5waXBlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAncHVibGljJyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFB1YmxpY1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0c2VnbWVudHMudW5zaGlmdCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHVibGljKTtcblx0XHRyZXR1cm4gc2VnbWVudHMuam9pbignLycpO1xuXHR9XG5cbn1cbiJdfQ==