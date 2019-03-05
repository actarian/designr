/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ControlBase } from '../base/control-base';
var ControlEmail = /** @class */ (function (_super) {
    tslib_1.__extends(ControlEmail, _super);
    function ControlEmail(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.schema = 'email';
        _this.type = options.type || _this.type;
        _this.email = true;
        _this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
        return _this;
    }
    return ControlEmail;
}(ControlBase));
export { ControlEmail };
if (false) {
    /** @type {?} */
    ControlEmail.prototype.schema;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBc0IsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RTtJQUFrQyx3Q0FBbUI7SUFJcEQsc0JBQVksT0FBd0M7UUFBeEMsd0JBQUEsRUFBQSxZQUF3QztRQUFwRCxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUlkO1FBUFEsWUFBTSxHQUFXLE9BQU8sQ0FBQztRQUlqQyxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUkscURBQXFELENBQUM7O0lBQ3pGLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFWRCxDQUFrQyxXQUFXLEdBVTVDOzs7O0lBUkEsOEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UvY29udHJvbC1iYXNlJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xFbWFpbCBleHRlbmRzIENvbnRyb2xCYXNlPHN0cmluZz4ge1xuXG5cdHJlYWRvbmx5IHNjaGVtYTogc3RyaW5nID0gJ2VtYWlsJztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8c3RyaW5nPiA9IHt9KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IHRoaXMudHlwZTtcblx0XHR0aGlzLmVtYWlsID0gdHJ1ZTtcblx0XHR0aGlzLnBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm4gfHwgJ1thLXpBLVowLTkuLV9dezEsfUBbYS16QS1aLi1dezIsfVsuXXsxfVthLXpBLVpdezIsfSc7XG5cdH1cbn1cbiJdfQ==