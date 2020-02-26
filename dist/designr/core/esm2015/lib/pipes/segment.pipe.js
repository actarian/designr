import { Location } from '@angular/common';
import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SegmentPipe {
    constructor(location) {
        this.location = location;
    }
    transform(segments) {
        segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
        let path = segments.join('/');
        path = this.location.normalize(path);
        if (path.indexOf('/') !== 0) {
            path = `/${path}`;
        }
        segments = path.split('/');
        return segments;
    }
}
SegmentPipe.ɵfac = function SegmentPipe_Factory(t) { return new (t || SegmentPipe)(i0.ɵɵdirectiveInject(i1.Location)); };
SegmentPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "segment", type: SegmentPipe, pure: true });
SegmentPipe.ɵprov = i0.ɵɵdefineInjectable({ token: SegmentPipe, factory: SegmentPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentPipe, [{
        type: Pipe,
        args: [{
                name: 'segment',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Location }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zZWdtZW50LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBU2hFLE1BQU0sT0FBTyxXQUFXO0lBRXZCLFlBQ1MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN2QixDQUFDO0lBRUwsU0FBUyxDQUFDLFFBQXdCO1FBQ2pDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUYsSUFBSSxJQUFJLEdBQVcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNsQjtRQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7O3NFQWZXLFdBQVc7NkRBQVgsV0FBVzttREFBWCxXQUFXLFdBQVgsV0FBVyxtQkFGWCxNQUFNO2tEQUVOLFdBQVc7Y0FQdkIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxTQUFTO2FBQ2Y7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NlZ21lbnQnLFxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShzZWdtZW50czogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XG5cdFx0c2VnbWVudHMgPSBzZWdtZW50cyAhPSBudWxsID8gKEFycmF5LmlzQXJyYXkoc2VnbWVudHMpID8gc2VnbWVudHMgOiBzZWdtZW50cy5zcGxpdCgnLycpKSA6IFtdO1xuXHRcdGxldCBwYXRoOiBzdHJpbmcgPSBzZWdtZW50cy5qb2luKCcvJyk7XG5cdFx0cGF0aCA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHBhdGgpO1xuXHRcdGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xuXHRcdFx0cGF0aCA9IGAvJHtwYXRofWA7XG5cdFx0fVxuXHRcdHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuXHRcdHJldHVybiBzZWdtZW50cztcblx0fVxuXG59XG4iXX0=