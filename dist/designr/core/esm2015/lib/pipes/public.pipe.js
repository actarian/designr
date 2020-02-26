import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
export class PublicPipe {
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    transform(data) {
        const segments = this.segment.transform(data);
        segments.unshift(this.coreService.options.public);
        return segments.join('/');
    }
}
PublicPipe.ɵfac = function PublicPipe_Factory(t) { return new (t || PublicPipe)(i0.ɵɵdirectiveInject(i1.CoreService), i0.ɵɵdirectiveInject(i2.SegmentPipe)); };
PublicPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "public", type: PublicPipe, pure: true });
PublicPipe.ɵprov = i0.ɵɵdefineInjectable({ token: PublicPipe, factory: PublicPipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3B1YmxpYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVTdDLE1BQU0sT0FBTyxVQUFVO0lBRXRCLFlBQ1MsV0FBd0IsRUFDeEIsT0FBb0I7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN6QixDQUFDO0lBRUwsU0FBUyxDQUFDLElBQW9CO1FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O29FQVhXLFVBQVU7MkRBQVYsVUFBVTtrREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVixNQUFNO2tEQUVOLFVBQVU7Y0FSdEIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxRQUFRO2FBRWQ7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9zZWdtZW50LnBpcGUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdwdWJsaWMnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHVibGljUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wdWJsaWMpO1xuXHRcdHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XG5cdH1cblxufVxuIl19