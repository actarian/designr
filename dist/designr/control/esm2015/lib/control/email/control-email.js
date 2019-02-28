/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ControlBase } from '../base/control-base';
export class ControlEmail extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.component = 'ControlEmailComponent';
        this.schema = 'email';
        this.type = options.type || this.type;
        this.email = true;
        this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}
if (false) {
    /** @type {?} */
    ControlEmail.prototype.component;
    /** @type {?} */
    ControlEmail.prototype.schema;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBRXZFLE1BQU0sT0FBTyxZQUFhLFNBQVEsV0FBbUI7Ozs7SUFLcEQsWUFBWSxVQUFzQyxFQUFFO1FBQ25ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUpQLGNBQVMsR0FBVyx1QkFBdUIsQ0FBQztRQUM1QyxXQUFNLEdBQVcsT0FBTyxDQUFDO1FBSWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxxREFBcUQsQ0FBQztJQUN6RixDQUFDO0NBQ0Q7OztJQVRBLGlDQUFxRDs7SUFDckQsOEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UvY29udHJvbC1iYXNlJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xFbWFpbCBleHRlbmRzIENvbnRyb2xCYXNlPHN0cmluZz4ge1xuXG5cdHJlYWRvbmx5IGNvbXBvbmVudDogc3RyaW5nID0gJ0NvbnRyb2xFbWFpbENvbXBvbmVudCc7XG5cdHJlYWRvbmx5IHNjaGVtYTogc3RyaW5nID0gJ2VtYWlsJztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8c3RyaW5nPiA9IHt9KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IHRoaXMudHlwZTtcblx0XHR0aGlzLmVtYWlsID0gdHJ1ZTtcblx0XHR0aGlzLnBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm4gfHwgJ1thLXpBLVowLTkuLV9dezEsfUBbYS16QS1aLi1dezIsfVsuXXsxfVthLXpBLVpdezIsfSc7XG5cdH1cbn1cbiJdfQ==