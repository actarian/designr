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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvY29udHJvbHMvY29udHJvbC1lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBc0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxNQUFNLE9BQU8sWUFBYSxTQUFRLFdBQW1COzs7O0lBSXBELFlBQVksVUFBc0MsRUFBRTtRQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFIaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUloQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUkscURBQXFELENBQUM7SUFDekYsQ0FBQztDQUNEOzs7SUFSQSw4QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sQmFzZSwgQ29udHJvbEJhc2VPcHRpb25zIH0gZnJvbSAnLi9jb250cm9sLWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbEVtYWlsIGV4dGVuZHMgQ29udHJvbEJhc2U8c3RyaW5nPiB7XG5cblx0c2NoZW1hID0gJ2VtYWlsJztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8c3RyaW5nPiA9IHt9KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IHRoaXMudHlwZTtcblx0XHR0aGlzLmVtYWlsID0gdHJ1ZTtcblx0XHR0aGlzLnBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm4gfHwgJ1thLXpBLVowLTkuLV9dezEsfUBbYS16QS1aLi1dezIsfVsuXXsxfVthLXpBLVpdezIsfSc7XG5cdH1cbn1cbiJdfQ==