import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
var AssetPipe = /** @class */ (function () {
    function AssetPipe(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    AssetPipe.prototype.transform = function (data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            var segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    };
    AssetPipe.ɵfac = function AssetPipe_Factory(t) { return new (t || AssetPipe)(i0.ɵɵdirectiveInject(i1.CoreService), i0.ɵɵdirectiveInject(i2.SegmentPipe)); };
    AssetPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "asset", type: AssetPipe, pure: true });
    AssetPipe.ɵprov = i0.ɵɵdefineInjectable({ token: AssetPipe, factory: AssetPipe.ɵfac, providedIn: 'root' });
    return AssetPipe;
}());
export { AssetPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU3QztJQVVDLG1CQUNTLFdBQXdCLEVBQ3hCLE9BQW9CO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFDekIsQ0FBQztJQUVMLDZCQUFTLEdBQVQsVUFBVSxJQUFvQjtRQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUYsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDO3NFQWZXLFNBQVM7NkRBQVQsU0FBUztxREFBVCxTQUFTLFdBQVQsU0FBUyxtQkFGVCxNQUFNO29CQVZuQjtDQTZCQyxBQXpCRCxJQXlCQztTQWpCWSxTQUFTO2tEQUFULFNBQVM7Y0FSckIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2FBRWI7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9zZWdtZW50LnBpcGUnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdhc3NldCcsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBc3NldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIChkYXRhLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCB8fCBkYXRhLmluZGV4T2YoJy9tZWRpYS8nKSA9PT0gMCkpIHtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5hc3NldHMpO1xuXHRcdFx0cmV0dXJuIHNlZ21lbnRzLmpvaW4oJy8nKTtcblx0XHR9XG5cdH1cblxufVxuIl19