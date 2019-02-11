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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvY29udHJvbHMvY29udHJvbC1lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQXNCLE1BQU0sZ0JBQWdCLENBQUM7QUFFakU7SUFBa0Msd0NBQW1CO0lBSXBELHNCQUFZLE9BQXdDO1FBQXhDLHdCQUFBLEVBQUEsWUFBd0M7UUFBcEQsWUFDQyxrQkFBTSxPQUFPLENBQUMsU0FJZDtRQVBELFlBQU0sR0FBRyxPQUFPLENBQUM7UUFJaEIsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLHFEQUFxRCxDQUFDOztJQUN6RixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0MsV0FBVyxHQVU1Qzs7OztJQVJBLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sRW1haWwgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmc+IHtcblxuXHRzY2hlbWEgPSAnZW1haWwnO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxzdHJpbmc+ID0ge30pIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblx0XHR0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgdGhpcy50eXBlO1xuXHRcdHRoaXMuZW1haWwgPSB0cnVlO1xuXHRcdHRoaXMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCAnW2EtekEtWjAtOS4tX117MSx9QFthLXpBLVouLV17Mix9Wy5dezF9W2EtekEtWl17Mix9Jztcblx0fVxufVxuIl19