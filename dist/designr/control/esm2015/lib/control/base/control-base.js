/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    ControlBaseOptions.prototype.minlength;
    /** @type {?} */
    ControlBaseOptions.prototype.maxlength;
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
        this.schema = 'base';
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
        this.minlength = options.minlength || null;
        this.maxlength = options.maxlength || null;
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
    /** @type {?} */
    ControlBase.prototype.schema;
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
    ControlBase.prototype.minlength;
    /** @type {?} */
    ControlBase.prototype.maxlength;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNLE9BQU8sa0JBQWtCO0NBMkI5Qjs7O0lBMUJBLG1DQUFVOztJQUNWLGlDQUFhOztJQUNiLG1DQUFlOztJQUNmLHlDQUFxQjs7SUFFckIsbUNBQWU7O0lBQ2Ysb0NBQWdCOztJQUNoQixrQ0FBYzs7SUFFZCxpQ0FBYTs7SUFDYixpQ0FBYTs7SUFDYixzQ0FBbUI7O0lBQ25CLDBDQUF1Qjs7SUFDdkIsbUNBQWdCOztJQUNoQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIscUNBQTBCOztJQUMxQixtQ0FBZTs7SUFFZixxQ0FBa0I7O0lBQ2xCLHFDQUEyQzs7SUFFM0Msc0NBQW1COztJQUVuQixrQ0FBYzs7SUFDZCxvQ0FBZ0I7Ozs7O0FBR2pCLE1BQU0sT0FBTyxXQUFXOzs7O0lBbUN2QixZQUFZLFVBQWlDLEVBQUU7UUE5QnRDLFdBQU0sR0FBVyxNQUFNLENBQUM7UUErQmhDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7Y0FFakIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLElBQUksRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztRQUMvQyxRQUFRO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDckMsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkMsYUFBYTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7QUE5RE0sZUFBRyxHQUFXLENBQUMsQ0FBQzs7O0lBQXZCLGdCQUF1Qjs7SUFFdkIsNkJBQWlDOzs7OztJQUVqQyxxQ0FBMEI7O0lBQzFCLDRCQUFTOztJQUNULDBCQUFZOztJQUVaLDRCQUFjOztJQUNkLGtDQUFvQjs7SUFFcEIsNEJBQWM7O0lBQ2QsMkJBQWE7O0lBRWIsMEJBQVk7O0lBQ1osMEJBQVk7O0lBQ1osK0JBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLDRCQUFlOztJQUNmLGdDQUFrQjs7SUFDbEIsZ0NBQWtCOztJQUNsQiw4QkFBeUI7O0lBQ3pCLDRCQUFjOztJQUVkLDhCQUFpQjs7SUFDakIsOEJBQTBDOztJQUUxQywrQkFBa0I7O0lBRWxCLDJCQUFhOztJQUNiLDZCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2VPcHRpb25zPFQ+IHtcblx0dmFsdWU/OiBUO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI/OiBudW1iZXI7XG5cdHNjaGVtYT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW4/OiBudW1iZXI7XG5cdG1heD86IG51bWJlcjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU/OiBib29sZWFuO1xuXHRlbWFpbD86IGJvb2xlYW47XG5cdG1pbmxlbmd0aD86IG51bWJlcjtcblx0bWF4bGVuZ3RoPzogbnVtYmVyO1xuXHRwYXR0ZXJuPzogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaD86IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0b3B0aW9ucz86IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcD86IG51bWJlcjtcblx0Zm9ybWF0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4ge1xuXHQvLyBleHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0c3RhdGljIHVpZDogbnVtYmVyID0gMDtcblxuXHRyZWFkb25seSBzY2hlbWE6IHN0cmluZyA9ICdiYXNlJztcblxuXHRwcml2YXRlIF9vcmlnaW5hbFZhbHVlOiBUO1xuXHR2YWx1ZTogVDtcblx0a2V5OiBzdHJpbmc7XG5cdC8vXG5cdGxhYmVsOiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyOiBudW1iZXI7XG5cdHR5cGU6IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW46IG51bWJlcjtcblx0bWF4OiBudW1iZXI7XG5cdHJlcXVpcmVkOiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU6IGJvb2xlYW47XG5cdGVtYWlsOiBib29sZWFuO1xuXHRtaW5sZW5ndGg6IG51bWJlcjtcblx0bWF4bGVuZ3RoOiBudW1iZXI7XG5cdHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g6IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlOiBib29sZWFuO1xuXHRvcHRpb25zOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcDogbnVtYmVyO1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8VD4gPSB7fSkge1xuXHRcdHRoaXMuX29yaWdpbmFsVmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG5cdFx0Ly9cblx0XHRjb25zdCBuYW1lID0gYCR7b3B0aW9ucy5rZXkgfHwgJ0NvbnRyb2wnfSAkeysrQ29udHJvbEJhc2UudWlkfWA7XG5cdFx0dGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWwgfHwgbmFtZTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlciB8fCBuYW1lO1xuXHRcdC8vIG9yZGVyXG5cdFx0dGhpcy5vcmRlciA9IG9wdGlvbnMub3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBvcHRpb25zLm9yZGVyO1xuXHRcdHRoaXMuc2NoZW1hID0gb3B0aW9ucy5zY2hlbWEgfHwgJ3RleHQnO1xuXHRcdHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLnNjaGVtYTtcblx0XHQvLyB2YWxpZGF0b3JzXG5cdFx0dGhpcy5taW4gPSBvcHRpb25zLm1pbiB8fCBudWxsO1xuXHRcdHRoaXMubWF4ID0gb3B0aW9ucy5tYXggfHwgbnVsbDtcblx0XHR0aGlzLnJlcXVpcmVkID0gISFvcHRpb25zLnJlcXVpcmVkO1xuXHRcdHRoaXMucmVxdWlyZWRUcnVlID0gISFvcHRpb25zLnJlcXVpcmVkVHJ1ZTtcblx0XHR0aGlzLmVtYWlsID0gISFvcHRpb25zLmVtYWlsO1xuXHRcdHRoaXMubWlubGVuZ3RoID0gb3B0aW9ucy5taW5sZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLm1heGxlbmd0aCA9IG9wdGlvbnMubWF4bGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8IG51bGw7XG5cdFx0dGhpcy5tYXRjaCA9IG9wdGlvbnMubWF0Y2ggfHwgbnVsbDtcblx0XHQvLyBvcHRpb25zXG5cdFx0dGhpcy5yZXZlcnNlID0gISFvcHRpb25zLnJldmVyc2U7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucy5vcHRpb25zIHx8IFtdO1xuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5kaXNhYmxlZCA9ICEhb3B0aW9ucy5kaXNhYmxlZDtcblx0XHQvLyBmb3JtYXR0ZXJzXG5cdFx0dGhpcy5zdGVwID0gb3B0aW9ucy5zdGVwIHx8IG51bGw7XG5cdFx0dGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBudWxsO1xuXHR9XG5cbn1cbiJdfQ==