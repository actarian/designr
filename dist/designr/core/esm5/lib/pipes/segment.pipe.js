/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Location } from '@angular/common';
import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var SegmentPipe = /** @class */ (function () {
    function SegmentPipe(location) {
        this.location = location;
    }
    /**
     * @param {?} segments
     * @return {?}
     */
    SegmentPipe.prototype.transform = /**
     * @param {?} segments
     * @return {?}
     */
    function (segments) {
        segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
        /** @type {?} */
        var path = segments.join('/');
        path = this.location.normalize(path);
        if (path.indexOf('/') !== 0) {
            path = "/" + path;
        }
        segments = path.split('/');
        return segments;
    };
    SegmentPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'segment',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SegmentPipe.ctorParameters = function () { return [
        { type: Location }
    ]; };
    /** @nocollapse */ SegmentPipe.ngInjectableDef = i0.defineInjectable({ factory: function SegmentPipe_Factory() { return new SegmentPipe(i0.inject(i1.Location)); }, token: SegmentPipe, providedIn: "root" });
    return SegmentPipe;
}());
export { SegmentPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SegmentPipe.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zZWdtZW50LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQUVoRTtJQVNDLHFCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdkIsQ0FBQzs7Ozs7SUFFTCwrQkFBUzs7OztJQUFULFVBQVUsUUFBd0I7UUFDakMsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDMUYsSUFBSSxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLElBQUksR0FBRyxNQUFJLElBQU0sQ0FBQztTQUNsQjtRQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7O2dCQXRCRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFNBQVM7aUJBQ2Y7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFUUSxRQUFROzs7c0JBRGpCO0NBNEJDLEFBeEJELElBd0JDO1NBakJZLFdBQVc7Ozs7OztJQUd0QiwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2VnbWVudCcsXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHNlZ21lbnRzOiBhbnlbXSB8IHN0cmluZyk6IGFueVtdIHtcblx0XHRzZWdtZW50cyA9IHNlZ21lbnRzICE9IG51bGwgPyAoQXJyYXkuaXNBcnJheShzZWdtZW50cykgPyBzZWdtZW50cyA6IHNlZ21lbnRzLnNwbGl0KCcvJykpIDogW107XG5cdFx0bGV0IHBhdGg6IHN0cmluZyA9IHNlZ21lbnRzLmpvaW4oJy8nKTtcblx0XHRwYXRoID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUocGF0aCk7XG5cdFx0aWYgKHBhdGguaW5kZXhPZignLycpICE9PSAwKSB7XG5cdFx0XHRwYXRoID0gYC8ke3BhdGh9YDtcblx0XHR9XG5cdFx0c2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XG5cdFx0cmV0dXJuIHNlZ21lbnRzO1xuXHR9XG5cbn1cbiJdfQ==