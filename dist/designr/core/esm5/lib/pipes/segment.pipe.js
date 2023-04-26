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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zZWdtZW50LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQUVoRTtJQVNDLHFCQUNTLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdkIsQ0FBQzs7Ozs7SUFFTCwrQkFBUzs7OztJQUFULFVBQVUsUUFBd0I7UUFDakMsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDMUYsSUFBSSxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLElBQUksR0FBRyxNQUFJLElBQU0sQ0FBQztTQUNsQjtRQUNELFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7O2dCQXRCRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFNBQVM7aUJBQ2Y7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFUUSxRQUFROzs7c0JBRGpCO0NBNEJDLEFBeEJELElBd0JDO1NBakJZLFdBQVc7Ozs7OztJQUd0QiwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3NlZ21lbnQnLFxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VnbWVudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxyXG5cdCkgeyB9XHJcblxyXG5cdHRyYW5zZm9ybShzZWdtZW50czogYW55W10gfCBzdHJpbmcpOiBhbnlbXSB7XHJcblx0XHRzZWdtZW50cyA9IHNlZ21lbnRzICE9IG51bGwgPyAoQXJyYXkuaXNBcnJheShzZWdtZW50cykgPyBzZWdtZW50cyA6IHNlZ21lbnRzLnNwbGl0KCcvJykpIDogW107XHJcblx0XHRsZXQgcGF0aDogc3RyaW5nID0gc2VnbWVudHMuam9pbignLycpO1xyXG5cdFx0cGF0aCA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHBhdGgpO1xyXG5cdFx0aWYgKHBhdGguaW5kZXhPZignLycpICE9PSAwKSB7XHJcblx0XHRcdHBhdGggPSBgLyR7cGF0aH1gO1xyXG5cdFx0fVxyXG5cdFx0c2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XHJcblx0XHRyZXR1cm4gc2VnbWVudHM7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=