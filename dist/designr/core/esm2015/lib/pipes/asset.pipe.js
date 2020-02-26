import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
export class AssetPipe {
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    transform(data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            const segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    }
}
AssetPipe.ɵfac = function AssetPipe_Factory(t) { return new (t || AssetPipe)(i0.ɵɵdirectiveInject(i1.CoreService), i0.ɵɵdirectiveInject(i2.SegmentPipe)); };
AssetPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "asset", type: AssetPipe, pure: true });
AssetPipe.ɵprov = i0.ɵɵdefineInjectable({ token: AssetPipe, factory: AssetPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AssetPipe, [{
        type: Pipe,
        args: [{
                name: 'asset',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }, { type: i2.SegmentPipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU3QyxNQUFNLE9BQU8sU0FBUztJQUVyQixZQUNTLFdBQXdCLEVBQ3hCLE9BQW9CO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDekIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUYsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDOztrRUFmVyxTQUFTO3lEQUFULFNBQVM7aURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtrREFFTixTQUFTO2NBUnJCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUViOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vc2VnbWVudC5waXBlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnYXNzZXQnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzZWdtZW50OiBTZWdtZW50UGlwZVxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShkYXRhOiBhbnlbXSB8IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiAoZGF0YS5pbmRleE9mKCdodHRwJykgPT09IDAgfHwgZGF0YS5pbmRleE9mKCcvbWVkaWEvJykgPT09IDApKSB7XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdFx0c2VnbWVudHMudW5zaGlmdCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuYXNzZXRzKTtcblx0XHRcdHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==