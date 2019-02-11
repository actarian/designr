/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
ControlBaseOptions = /** @class */ (function () {
    function ControlBaseOptions() {
    }
    return ControlBaseOptions;
}());
/**
 * @template T
 */
export { ControlBaseOptions };
if (false) {
    /** @type {?} */
    ControlBaseOptions.prototype.value;
    /** @type {?} */
    ControlBaseOptions.prototype.key;
    /** @type {?} */
    ControlBaseOptions.prototype.label;
    /** @type {?} */
    ControlBaseOptions.prototype.placeholder;
    /** @type {?} */
    ControlBaseOptions.prototype.order;
    /** @type {?} */
    ControlBaseOptions.prototype.schema;
    /** @type {?} */
    ControlBaseOptions.prototype.type;
    /** @type {?} */
    ControlBaseOptions.prototype.min;
    /** @type {?} */
    ControlBaseOptions.prototype.max;
    /** @type {?} */
    ControlBaseOptions.prototype.required;
    /** @type {?} */
    ControlBaseOptions.prototype.requiredTrue;
    /** @type {?} */
    ControlBaseOptions.prototype.email;
    /** @type {?} */
    ControlBaseOptions.prototype.minLength;
    /** @type {?} */
    ControlBaseOptions.prototype.maxLength;
    /** @type {?} */
    ControlBaseOptions.prototype.pattern;
    /** @type {?} */
    ControlBaseOptions.prototype.match;
    /** @type {?} */
    ControlBaseOptions.prototype.reverse;
    /** @type {?} */
    ControlBaseOptions.prototype.options;
    /** @type {?} */
    ControlBaseOptions.prototype.disabled;
    /** @type {?} */
    ControlBaseOptions.prototype.step;
    /** @type {?} */
    ControlBaseOptions.prototype.format;
}
/**
 * @template T
 */
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this._originalValue = options.value;
        this.value = options.value;
        this.key = options.key;
        //
        /** @type {?} */
        var name = (options.key || 'Control') + " " + ++ControlBase.uid;
        this.label = options.label || name;
        this.placeholder = options.placeholder || name;
        // order
        this.order = options.order === undefined ? 1 : options.order;
        this.schema = options.schema || 'text';
        this.type = options.type || this.schema;
        // validators
        this.min = options.min || null;
        this.max = options.max || null;
        this.required = !!options.required;
        this.requiredTrue = !!options.requiredTrue;
        this.email = !!options.email;
        this.minLength = options.minLength || null;
        this.maxLength = options.maxLength || null;
        this.pattern = options.pattern || null;
        this.match = options.match || null;
        // options
        this.reverse = !!options.reverse;
        this.options = options.options || [];
        // state
        this.disabled = !!options.disabled;
        // formatters
        this.step = options.step || null;
        this.format = options.format || null;
    }
    // export class ControlBase<T> implements ControlValueAccessor {
    ControlBase.uid = 0;
    return ControlBase;
}());
export { ControlBase };
if (false) {
    /** @type {?} */
    ControlBase.uid;
    /**
     * @type {?}
     * @private
     */
    ControlBase.prototype._originalValue;
    /** @type {?} */
    ControlBase.prototype.value;
    /** @type {?} */
    ControlBase.prototype.key;
    /** @type {?} */
    ControlBase.prototype.label;
    /** @type {?} */
    ControlBase.prototype.placeholder;
    /** @type {?} */
    ControlBase.prototype.order;
    /** @type {?} */
    ControlBase.prototype.schema;
    /** @type {?} */
    ControlBase.prototype.type;
    /** @type {?} */
    ControlBase.prototype.min;
    /** @type {?} */
    ControlBase.prototype.max;
    /** @type {?} */
    ControlBase.prototype.required;
    /** @type {?} */
    ControlBase.prototype.requiredTrue;
    /** @type {?} */
    ControlBase.prototype.email;
    /** @type {?} */
    ControlBase.prototype.minLength;
    /** @type {?} */
    ControlBase.prototype.maxLength;
    /** @type {?} */
    ControlBase.prototype.pattern;
    /** @type {?} */
    ControlBase.prototype.match;
    /** @type {?} */
    ControlBase.prototype.reverse;
    /** @type {?} */
    ControlBase.prototype.options;
    /** @type {?} */
    ControlBase.prototype.disabled;
    /** @type {?} */
    ControlBase.prototype.step;
    /** @type {?} */
    ControlBase.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9jb250cm9sLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBQUE7SUEyQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQzs7Ozs7OztJQTFCQSxtQ0FBVTs7SUFDVixpQ0FBYTs7SUFDYixtQ0FBZTs7SUFDZix5Q0FBcUI7O0lBRXJCLG1DQUFlOztJQUNmLG9DQUFnQjs7SUFDaEIsa0NBQWM7O0lBRWQsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBQ2Isc0NBQW1COztJQUNuQiwwQ0FBdUI7O0lBQ3ZCLG1DQUFnQjs7SUFDaEIsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsbUNBQWU7O0lBRWYscUNBQWtCOztJQUNsQixxQ0FBMkM7O0lBRTNDLHNDQUFtQjs7SUFFbkIsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdqQjtJQWtDQyxxQkFBWSxPQUFtQztRQUFuQyx3QkFBQSxFQUFBLFlBQW1DO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7WUFFakIsSUFBSSxHQUFHLENBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLFVBQUksRUFBRSxXQUFXLENBQUMsR0FBSztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDL0MsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLGFBQWE7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7SUE3RE0sZUFBRyxHQUFXLENBQUMsQ0FBQztJQXVJeEIsa0JBQUM7Q0FBQSxBQTFJRCxJQTBJQztTQTFJWSxXQUFXOzs7SUFHdkIsZ0JBQXVCOzs7OztJQUV2QixxQ0FBMEI7O0lBQzFCLDRCQUFTOztJQUNULDBCQUFZOztJQUVaLDRCQUFjOztJQUNkLGtDQUFvQjs7SUFFcEIsNEJBQWM7O0lBQ2QsNkJBQWU7O0lBQ2YsMkJBQWE7O0lBRWIsMEJBQVk7O0lBQ1osMEJBQVk7O0lBQ1osK0JBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLDRCQUFlOztJQUNmLGdDQUFrQjs7SUFDbEIsZ0NBQWtCOztJQUNsQiw4QkFBeUI7O0lBQ3pCLDRCQUFjOztJQUVkLDhCQUFpQjs7SUFDakIsOEJBQTBDOztJQUUxQywrQkFBa0I7O0lBRWxCLDJCQUFhOztJQUNiLDZCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlT3B0aW9uczxUPiB7XG5cdHZhbHVlPzogVDtcblx0a2V5Pzogc3RyaW5nO1xuXHRsYWJlbD86IHN0cmluZztcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyPzogbnVtYmVyO1xuXHRzY2hlbWE/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG5cdC8vIHZhbGlkYXRvcnNcblx0bWluPzogbnVtYmVyO1xuXHRtYXg/OiBudW1iZXI7XG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcblx0cmVxdWlyZWRUcnVlPzogYm9vbGVhbjtcblx0ZW1haWw/OiBib29sZWFuO1xuXHRtaW5MZW5ndGg/OiBudW1iZXI7XG5cdG1heExlbmd0aD86IG51bWJlcjtcblx0cGF0dGVybj86IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g/OiBzdHJpbmc7XG5cdC8vIG9wdGlvbnNcblx0cmV2ZXJzZT86IGJvb2xlYW47XG5cdG9wdGlvbnM/OiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHQvLyBmb3JtYXR0ZXJzXG5cdHN0ZXA/OiBudW1iZXI7XG5cdGZvcm1hdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IHtcblx0Ly8gZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdHN0YXRpYyB1aWQ6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSBfb3JpZ2luYWxWYWx1ZTogVDtcblx0dmFsdWU6IFQ7XG5cdGtleTogc3RyaW5nO1xuXHQvL1xuXHRsYWJlbDogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHQvLyBvcmRlclxuXHRvcmRlcjogbnVtYmVyO1xuXHRzY2hlbWE6IHN0cmluZztcblx0dHlwZTogc3RyaW5nO1xuXHQvLyB2YWxpZGF0b3JzXG5cdG1pbjogbnVtYmVyO1xuXHRtYXg6IG51bWJlcjtcblx0cmVxdWlyZWQ6IGJvb2xlYW47XG5cdHJlcXVpcmVkVHJ1ZTogYm9vbGVhbjtcblx0ZW1haWw6IGJvb2xlYW47XG5cdG1pbkxlbmd0aDogbnVtYmVyO1xuXHRtYXhMZW5ndGg6IG51bWJlcjtcblx0cGF0dGVybjogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaDogc3RyaW5nO1xuXHQvLyBvcHRpb25zXG5cdHJldmVyc2U6IGJvb2xlYW47XG5cdG9wdGlvbnM6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0Ly8gZm9ybWF0dGVyc1xuXHRzdGVwOiBudW1iZXI7XG5cdGZvcm1hdDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxUPiA9IHt9KSB7XG5cdFx0dGhpcy5fb3JpZ2luYWxWYWx1ZSA9IG9wdGlvbnMudmFsdWU7XG5cdFx0dGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG5cdFx0dGhpcy5rZXkgPSBvcHRpb25zLmtleTtcblx0XHQvL1xuXHRcdGNvbnN0IG5hbWUgPSBgJHtvcHRpb25zLmtleSB8fCAnQ29udHJvbCd9ICR7KytDb250cm9sQmFzZS51aWR9YDtcblx0XHR0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbCB8fCBuYW1lO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyIHx8IG5hbWU7XG5cdFx0Ly8gb3JkZXJcblx0XHR0aGlzLm9yZGVyID0gb3B0aW9ucy5vcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IG9wdGlvbnMub3JkZXI7XG5cdFx0dGhpcy5zY2hlbWEgPSBvcHRpb25zLnNjaGVtYSB8fCAndGV4dCc7XG5cdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IHRoaXMuc2NoZW1hO1xuXHRcdC8vIHZhbGlkYXRvcnNcblx0XHR0aGlzLm1pbiA9IG9wdGlvbnMubWluIHx8IG51bGw7XG5cdFx0dGhpcy5tYXggPSBvcHRpb25zLm1heCB8fCBudWxsO1xuXHRcdHRoaXMucmVxdWlyZWQgPSAhIW9wdGlvbnMucmVxdWlyZWQ7XG5cdFx0dGhpcy5yZXF1aXJlZFRydWUgPSAhIW9wdGlvbnMucmVxdWlyZWRUcnVlO1xuXHRcdHRoaXMuZW1haWwgPSAhIW9wdGlvbnMuZW1haWw7XG5cdFx0dGhpcy5taW5MZW5ndGggPSBvcHRpb25zLm1pbkxlbmd0aCB8fCBudWxsO1xuXHRcdHRoaXMubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLnBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm4gfHwgbnVsbDtcblx0XHR0aGlzLm1hdGNoID0gb3B0aW9ucy5tYXRjaCB8fCBudWxsO1xuXHRcdC8vIG9wdGlvbnNcblx0XHR0aGlzLnJldmVyc2UgPSAhIW9wdGlvbnMucmV2ZXJzZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnMgfHwgW107XG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLmRpc2FibGVkID0gISFvcHRpb25zLmRpc2FibGVkO1xuXHRcdC8vIGZvcm1hdHRlcnNcblx0XHR0aGlzLnN0ZXAgPSBvcHRpb25zLnN0ZXAgfHwgbnVsbDtcblx0XHR0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IG51bGw7XG5cdH1cblxuXHQvKlxuXHQvL1xuXHRjb250cm9sPzogRm9ybUNvbnRyb2w7XG5cdGlubmVydmFsdWU6IGFueTtcblx0Ymx1cnJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGZvY3VzKCk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5mb2N1cycsIHRoaXMuY29udHJvbC52YWx1ZSk7XG5cdFx0dGhpcy5ibHVycmVkID0gZmFsc2U7XG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fVxuXHR9XG5cblx0Ymx1cigpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UuYmx1cicsIHRoaXMuY29udHJvbC52YWx1ZSk7XG5cdFx0dGhpcy5ibHVycmVkID0gdHJ1ZTtcblx0XHRpZiAodGhpcy5pbm5lcnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlubmVydmFsdWUgKyAnIEgnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0Q29udHJvbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHZvaWQge1xuXHRcdHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG5cdFx0dGhpcy5pbm5lcnZhbHVlID0gY29udHJvbC52YWx1ZTtcblx0XHRjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLmNvbnRyb2wudmFsdWVDaGFuZ2VzJywgdmFsdWUpO1xuXHRcdFx0aWYgKHRoaXMuYmx1cnJlZCkge1xuXHRcdFx0XHRjb250cm9sLnBhdGNoVmFsdWUodmFsdWUgKyAnIEgnLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlubmVydmFsdWUgPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyB0aGlzLmJsdXIoKTtcblx0fVxuXG5cdGZvcm1hdFZhbHVlKCk6IHN0cmluZyB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLmZvcm1hdFZhbHVlJywgdGhpcywgdGhpcy5jb250cm9sKTtcblx0XHRyZXR1cm4gJ2FhYSc7XG5cdH1cblxuXHRwYXJzZVZhbHVlKGU6IEV2ZW50KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLnBhcnNlVmFsdWUnLCBlKTtcblx0fVxuXG5cdHByaXZhdGUgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4geyB9O1xuXG5cdHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS53cml0ZVZhbHVlJywgdmFsdWUpO1xuXHRcdC8vIHRoaXMuZm9ybWF0dGVkVmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UucmVnaXN0ZXJPbkNoYW5nZScsIGZuKTtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdFx0Ly8gdGhpcy5vbkNoYW5nZSgnbXkgbmV3IHZhbHVlJyk7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5yZWdpc3Rlck9uVG91Y2hlZCcsIGZuKTtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5zZXREaXNhYmxlZFN0YXRlJywgaXNEaXNhYmxlZCk7XG5cdFx0dGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG5cdH1cblx0Ki9cblxufVxuIl19