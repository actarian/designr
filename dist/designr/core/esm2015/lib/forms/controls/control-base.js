/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class ControlBaseOptions {
}
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
export class ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this._originalValue = options.value;
        this.value = options.value;
        this.key = options.key;
        //
        /** @type {?} */
        const name = `${options.key || 'Control'} ${++ControlBase.uid}`;
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
}
// export class ControlBase<T> implements ControlValueAccessor {
ControlBase.uid = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy9jb250cm9scy9jb250cm9sLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBTyxrQkFBa0I7Q0EyQjlCOzs7SUExQkEsbUNBQVU7O0lBQ1YsaUNBQWE7O0lBQ2IsbUNBQWU7O0lBQ2YseUNBQXFCOztJQUVyQixtQ0FBZTs7SUFDZixvQ0FBZ0I7O0lBQ2hCLGtDQUFjOztJQUVkLGlDQUFhOztJQUNiLGlDQUFhOztJQUNiLHNDQUFtQjs7SUFDbkIsMENBQXVCOztJQUN2QixtQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLG1DQUFlOztJQUVmLHFDQUFrQjs7SUFDbEIscUNBQTJDOztJQUUzQyxzQ0FBbUI7O0lBRW5CLGtDQUFjOztJQUNkLG9DQUFnQjs7Ozs7QUFHakIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFrQ3ZCLFlBQVksVUFBaUMsRUFBRTtRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7O2NBRWpCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksU0FBUyxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDL0MsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLGFBQWE7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7O0FBN0RNLGVBQUcsR0FBVyxDQUFDLENBQUM7OztJQUF2QixnQkFBdUI7Ozs7O0lBRXZCLHFDQUEwQjs7SUFDMUIsNEJBQVM7O0lBQ1QsMEJBQVk7O0lBRVosNEJBQWM7O0lBQ2Qsa0NBQW9COztJQUVwQiw0QkFBYzs7SUFDZCw2QkFBZTs7SUFDZiwyQkFBYTs7SUFFYiwwQkFBWTs7SUFDWiwwQkFBWTs7SUFDWiwrQkFBa0I7O0lBQ2xCLG1DQUFzQjs7SUFDdEIsNEJBQWU7O0lBQ2YsZ0NBQWtCOztJQUNsQixnQ0FBa0I7O0lBQ2xCLDhCQUF5Qjs7SUFDekIsNEJBQWM7O0lBRWQsOEJBQWlCOztJQUNqQiw4QkFBMEM7O0lBRTFDLCtCQUFrQjs7SUFFbEIsMkJBQWE7O0lBQ2IsNkJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udHJvbEJhc2VPcHRpb25zPFQ+IHtcblx0dmFsdWU/OiBUO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI/OiBudW1iZXI7XG5cdHNjaGVtYT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW4/OiBudW1iZXI7XG5cdG1heD86IG51bWJlcjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU/OiBib29sZWFuO1xuXHRlbWFpbD86IGJvb2xlYW47XG5cdG1pbkxlbmd0aD86IG51bWJlcjtcblx0bWF4TGVuZ3RoPzogbnVtYmVyO1xuXHRwYXR0ZXJuPzogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaD86IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0b3B0aW9ucz86IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcD86IG51bWJlcjtcblx0Zm9ybWF0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4ge1xuXHQvLyBleHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0c3RhdGljIHVpZDogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIF9vcmlnaW5hbFZhbHVlOiBUO1xuXHR2YWx1ZTogVDtcblx0a2V5OiBzdHJpbmc7XG5cdC8vXG5cdGxhYmVsOiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyOiBudW1iZXI7XG5cdHNjaGVtYTogc3RyaW5nO1xuXHR0eXBlOiBzdHJpbmc7XG5cdC8vIHZhbGlkYXRvcnNcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRyZXF1aXJlZDogYm9vbGVhbjtcblx0cmVxdWlyZWRUcnVlOiBib29sZWFuO1xuXHRlbWFpbDogYm9vbGVhbjtcblx0bWluTGVuZ3RoOiBudW1iZXI7XG5cdG1heExlbmd0aDogbnVtYmVyO1xuXHRwYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHA7XG5cdG1hdGNoOiBzdHJpbmc7XG5cdC8vIG9wdGlvbnNcblx0cmV2ZXJzZTogYm9vbGVhbjtcblx0b3B0aW9uczogeyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W107XG5cdC8vIHN0YXRlXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXHQvLyBmb3JtYXR0ZXJzXG5cdHN0ZXA6IG51bWJlcjtcblx0Zm9ybWF0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPFQ+ID0ge30pIHtcblx0XHR0aGlzLl9vcmlnaW5hbFZhbHVlID0gb3B0aW9ucy52YWx1ZTtcblx0XHR0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcblx0XHR0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuXHRcdC8vXG5cdFx0Y29uc3QgbmFtZSA9IGAke29wdGlvbnMua2V5IHx8ICdDb250cm9sJ30gJHsrK0NvbnRyb2xCYXNlLnVpZH1gO1xuXHRcdHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsIHx8IG5hbWU7XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXIgfHwgbmFtZTtcblx0XHQvLyBvcmRlclxuXHRcdHRoaXMub3JkZXIgPSBvcHRpb25zLm9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogb3B0aW9ucy5vcmRlcjtcblx0XHR0aGlzLnNjaGVtYSA9IG9wdGlvbnMuc2NoZW1hIHx8ICd0ZXh0Jztcblx0XHR0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgdGhpcy5zY2hlbWE7XG5cdFx0Ly8gdmFsaWRhdG9yc1xuXHRcdHRoaXMubWluID0gb3B0aW9ucy5taW4gfHwgbnVsbDtcblx0XHR0aGlzLm1heCA9IG9wdGlvbnMubWF4IHx8IG51bGw7XG5cdFx0dGhpcy5yZXF1aXJlZCA9ICEhb3B0aW9ucy5yZXF1aXJlZDtcblx0XHR0aGlzLnJlcXVpcmVkVHJ1ZSA9ICEhb3B0aW9ucy5yZXF1aXJlZFRydWU7XG5cdFx0dGhpcy5lbWFpbCA9ICEhb3B0aW9ucy5lbWFpbDtcblx0XHR0aGlzLm1pbkxlbmd0aCA9IG9wdGlvbnMubWluTGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5tYXhMZW5ndGggPSBvcHRpb25zLm1heExlbmd0aCB8fCBudWxsO1xuXHRcdHRoaXMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCBudWxsO1xuXHRcdHRoaXMubWF0Y2ggPSBvcHRpb25zLm1hdGNoIHx8IG51bGw7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdHRoaXMucmV2ZXJzZSA9ICEhb3B0aW9ucy5yZXZlcnNlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMub3B0aW9ucyB8fCBbXTtcblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuZGlzYWJsZWQgPSAhIW9wdGlvbnMuZGlzYWJsZWQ7XG5cdFx0Ly8gZm9ybWF0dGVyc1xuXHRcdHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCB8fCBudWxsO1xuXHRcdHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgbnVsbDtcblx0fVxuXG5cdC8qXG5cdC8vXG5cdGNvbnRyb2w/OiBGb3JtQ29udHJvbDtcblx0aW5uZXJ2YWx1ZTogYW55O1xuXHRibHVycmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Zm9jdXMoKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLmZvY3VzJywgdGhpcy5jb250cm9sLnZhbHVlKTtcblx0XHR0aGlzLmJsdXJyZWQgPSBmYWxzZTtcblx0XHRpZiAodGhpcy5pbm5lcnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2wucGF0Y2hWYWx1ZSh0aGlzLmlubmVydmFsdWUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRibHVyKCk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5ibHVyJywgdGhpcy5jb250cm9sLnZhbHVlKTtcblx0XHR0aGlzLmJsdXJyZWQgPSB0cnVlO1xuXHRcdGlmICh0aGlzLmlubmVydmFsdWUpIHtcblx0XHRcdHRoaXMuY29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5uZXJ2YWx1ZSArICcgSCcsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRzZXRDb250cm9sKGNvbnRyb2w6IEZvcm1Db250cm9sKTogdm9pZCB7XG5cdFx0dGhpcy5jb250cm9sID0gY29udHJvbDtcblx0XHR0aGlzLmlubmVydmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXHRcdGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UuY29udHJvbC52YWx1ZUNoYW5nZXMnLCB2YWx1ZSk7XG5cdFx0XHRpZiAodGhpcy5ibHVycmVkKSB7XG5cdFx0XHRcdGNvbnRyb2wucGF0Y2hWYWx1ZSh2YWx1ZSArICcgSCcsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5uZXJ2YWx1ZSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIHRoaXMuYmx1cigpO1xuXHR9XG5cblx0Zm9ybWF0VmFsdWUoKTogc3RyaW5nIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UuZm9ybWF0VmFsdWUnLCB0aGlzLCB0aGlzLmNvbnRyb2wpO1xuXHRcdHJldHVybiAnYWFhJztcblx0fVxuXG5cdHBhcnNlVmFsdWUoZTogRXZlbnQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UucGFyc2VWYWx1ZScsIGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7IH07XG5cblx0cHJpdmF0ZSBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLndyaXRlVmFsdWUnLCB2YWx1ZSk7XG5cdFx0Ly8gdGhpcy5mb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5yZWdpc3Rlck9uQ2hhbmdlJywgZm4pO1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0XHQvLyB0aGlzLm9uQ2hhbmdlKCdteSBuZXcgdmFsdWUnKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLnJlZ2lzdGVyT25Ub3VjaGVkJywgZm4pO1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLnNldERpc2FibGVkU3RhdGUnLCBpc0Rpc2FibGVkKTtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0fVxuXHQqL1xuXG59XG4iXX0=