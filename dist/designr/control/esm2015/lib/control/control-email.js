/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ControlBase } from './control-base';
export class ControlEmail extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'email';
        this.type = options.type || this.type;
        this.email = true;
        this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}
if (false) {
    /** @type {?} */
    ControlEmail.prototype.schema;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE1BQU0sT0FBTyxZQUFhLFNBQVEsV0FBbUI7Ozs7SUFJcEQsWUFBWSxVQUFzQyxFQUFFO1FBQ25ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBSWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxxREFBcUQsQ0FBQztJQUN6RixDQUFDO0NBQ0Q7OztJQVJBLDhCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sRW1haWwgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmc+IHtcblxuXHRzY2hlbWEgPSAnZW1haWwnO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxzdHJpbmc+ID0ge30pIHtcblx0XHRzdXBlcihvcHRpb25zKTtcblx0XHR0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgdGhpcy50eXBlO1xuXHRcdHRoaXMuZW1haWwgPSB0cnVlO1xuXHRcdHRoaXMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCAnW2EtekEtWjAtOS4tX117MSx9QFthLXpBLVouLV17Mix9Wy5dezF9W2EtekEtWl17Mix9Jztcblx0fVxufVxuIl19