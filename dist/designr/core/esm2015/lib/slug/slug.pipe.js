import { Injectable, Pipe } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../route/route.pipe";
export class SlugPipe {
    constructor(slugService, routePipe) {
        this.slugService = slugService;
        this.routePipe = routePipe;
    }
    transform(key, segments) {
        const slug = this.slugService.transform(key);
        if (slug) {
            let slugs = this.routePipe.transform(slug);
            if (slugs && segments) {
                slugs = slugs.concat(segments);
            }
            return slugs;
        }
        else {
            return [];
        }
    }
}
SlugPipe.ɵfac = function SlugPipe_Factory(t) { return new (t || SlugPipe)(i0.ɵɵdirectiveInject(i1.SlugService), i0.ɵɵdirectiveInject(i2.RoutePipe)); };
SlugPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "slug", type: SlugPipe, pure: false });
SlugPipe.ɵprov = i0.ɵɵdefineInjectable({ token: SlugPipe, factory: SlugPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlugPipe, [{
        type: Pipe,
        args: [{
                name: 'slug',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SlugService }, { type: i2.RoutePipe }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU3QyxNQUFNLE9BQU8sUUFBUTtJQUVwQixZQUNTLFdBQXdCLEVBQ3hCLFNBQW9CO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDekIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxHQUFXLEVBQUUsUUFBbUI7UUFDekMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7Z0JBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUM7U0FDVjtJQUNGLENBQUM7O2dFQWxCVyxRQUFRO3VEQUFSLFFBQVE7Z0RBQVIsUUFBUSxXQUFSLFFBQVEsbUJBRlIsTUFBTTtrREFFTixRQUFRO2NBUnBCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4uL3JvdXRlL3JvdXRlLnBpcGUnO1xuaW1wb3J0IHsgU2x1Z1NlcnZpY2UgfSBmcm9tICcuL3NsdWcuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NsdWcnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2x1Z1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNsdWdTZXJ2aWNlOiBTbHVnU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlUGlwZTogUm91dGVQaXBlLFxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgc2VnbWVudHM/OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcblx0XHRjb25zdCBzbHVnID0gdGhpcy5zbHVnU2VydmljZS50cmFuc2Zvcm0oa2V5KTtcblx0XHRpZiAoc2x1Zykge1xuXHRcdFx0bGV0IHNsdWdzID0gdGhpcy5yb3V0ZVBpcGUudHJhbnNmb3JtKHNsdWcpO1xuXHRcdFx0aWYgKHNsdWdzICYmIHNlZ21lbnRzKSB7XG5cdFx0XHRcdHNsdWdzID0gc2x1Z3MuY29uY2F0KHNlZ21lbnRzKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzbHVncztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=