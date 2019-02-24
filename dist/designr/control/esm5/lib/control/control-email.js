/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ControlBase } from './control-base';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBc0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRTtJQUFrQyx3Q0FBbUI7SUFJcEQsc0JBQVksT0FBd0M7UUFBeEMsd0JBQUEsRUFBQSxZQUF3QztRQUFwRCxZQUNDLGtCQUFNLE9BQU8sQ0FBQyxTQUlkO1FBUEQsWUFBTSxHQUFHLE9BQU8sQ0FBQztRQUloQixLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUkscURBQXFELENBQUM7O0lBQ3pGLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFWRCxDQUFrQyxXQUFXLEdBVTVDOzs7O0lBUkEsOEJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucyB9IGZyb20gJy4vY29udHJvbC1iYXNlJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xFbWFpbCBleHRlbmRzIENvbnRyb2xCYXNlPHN0cmluZz4ge1xuXG5cdHNjaGVtYSA9ICdlbWFpbCc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPHN0cmluZz4gPSB7fSkge1xuXHRcdHN1cGVyKG9wdGlvbnMpO1xuXHRcdHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLnR5cGU7XG5cdFx0dGhpcy5lbWFpbCA9IHRydWU7XG5cdFx0dGhpcy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8ICdbYS16QS1aMC05Li1fXXsxLH1AW2EtekEtWi4tXXsyLH1bLl17MX1bYS16QS1aXXsyLH0nO1xuXHR9XG59XG4iXX0=