import { Injectable, Pipe } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../route/route.pipe";
var SlugPipe = /** @class */ (function () {
    function SlugPipe(slugService, routePipe) {
        this.slugService = slugService;
        this.routePipe = routePipe;
    }
    SlugPipe.prototype.transform = function (key, segments) {
        var slug = this.slugService.transform(key);
        if (slug) {
            var slugs = this.routePipe.transform(slug);
            if (slugs && segments) {
                slugs = slugs.concat(segments);
            }
            return slugs;
        }
        else {
            return [];
        }
    };
    SlugPipe.ɵfac = function SlugPipe_Factory(t) { return new (t || SlugPipe)(i0.ɵɵdirectiveInject(i1.SlugService), i0.ɵɵdirectiveInject(i2.RoutePipe)); };
    SlugPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "slug", type: SlugPipe, pure: false });
    SlugPipe.ɵprov = i0.ɵɵdefineInjectable({ token: SlugPipe, factory: SlugPipe.ɵfac, providedIn: 'root' });
    return SlugPipe;
}());
export { SlugPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU3QztJQVVDLGtCQUNTLFdBQXdCLEVBQ3hCLFNBQW9CO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDekIsQ0FBQztJQUVMLDRCQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsUUFBbUI7UUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLEVBQUU7WUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7Z0JBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDYjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUM7U0FDVjtJQUNGLENBQUM7b0VBbEJXLFFBQVE7MkRBQVIsUUFBUTtvREFBUixRQUFRLFdBQVIsUUFBUSxtQkFGUixNQUFNO21CQVZuQjtDQWdDQyxBQTVCRCxJQTRCQztTQXBCWSxRQUFRO2tEQUFSLFFBQVE7Y0FScEIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxLQUFLO2FBQ1g7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUucGlwZSc7XG5pbXBvcnQgeyBTbHVnU2VydmljZSB9IGZyb20gJy4vc2x1Zy5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2x1ZycsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2x1Z1NlcnZpY2U6IFNsdWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVQaXBlOiBSb3V0ZVBpcGUsXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBzZWdtZW50cz86IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuXHRcdGNvbnN0IHNsdWcgPSB0aGlzLnNsdWdTZXJ2aWNlLnRyYW5zZm9ybShrZXkpO1xuXHRcdGlmIChzbHVnKSB7XG5cdFx0XHRsZXQgc2x1Z3MgPSB0aGlzLnJvdXRlUGlwZS50cmFuc2Zvcm0oc2x1Zyk7XG5cdFx0XHRpZiAoc2x1Z3MgJiYgc2VnbWVudHMpIHtcblx0XHRcdFx0c2x1Z3MgPSBzbHVncy5jb25jYXQoc2VnbWVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNsdWdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==