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
        this.component = 'ControlBaseComponent';
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
    ControlBase.prototype.component;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNLE9BQU8sa0JBQWtCO0NBMkI5Qjs7O0lBMUJBLG1DQUFVOztJQUNWLGlDQUFhOztJQUNiLG1DQUFlOztJQUNmLHlDQUFxQjs7SUFFckIsbUNBQWU7O0lBQ2Ysb0NBQWdCOztJQUNoQixrQ0FBYzs7SUFFZCxpQ0FBYTs7SUFDYixpQ0FBYTs7SUFDYixzQ0FBbUI7O0lBQ25CLDBDQUF1Qjs7SUFDdkIsbUNBQWdCOztJQUNoQix1Q0FBbUI7O0lBQ25CLHVDQUFtQjs7SUFDbkIscUNBQTBCOztJQUMxQixtQ0FBZTs7SUFFZixxQ0FBa0I7O0lBQ2xCLHFDQUEyQzs7SUFFM0Msc0NBQW1COztJQUVuQixrQ0FBYzs7SUFDZCxvQ0FBZ0I7Ozs7O0FBR2pCLE1BQU0sT0FBTyxXQUFXOzs7O0lBb0N2QixZQUFZLFVBQWlDLEVBQUU7UUEvQnRDLGNBQVMsR0FBVyxzQkFBc0IsQ0FBQztRQUMzQyxXQUFNLEdBQVcsTUFBTSxDQUFDO1FBK0JoQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7O2NBRWpCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksU0FBUyxJQUFJLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRTtRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDL0MsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLGFBQWE7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7O0FBL0RNLGVBQUcsR0FBVyxDQUFDLENBQUM7OztJQUF2QixnQkFBdUI7O0lBRXZCLGdDQUFvRDs7SUFDcEQsNkJBQWlDOzs7OztJQUVqQyxxQ0FBMEI7O0lBQzFCLDRCQUFTOztJQUNULDBCQUFZOztJQUVaLDRCQUFjOztJQUNkLGtDQUFvQjs7SUFFcEIsNEJBQWM7O0lBQ2QsMkJBQWE7O0lBRWIsMEJBQVk7O0lBQ1osMEJBQVk7O0lBQ1osK0JBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLDRCQUFlOztJQUNmLGdDQUFrQjs7SUFDbEIsZ0NBQWtCOztJQUNsQiw4QkFBeUI7O0lBQ3pCLDRCQUFjOztJQUVkLDhCQUFpQjs7SUFDakIsOEJBQTBDOztJQUUxQywrQkFBa0I7O0lBRWxCLDJCQUFhOztJQUNiLDZCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2VPcHRpb25zPFQ+IHtcblx0dmFsdWU/OiBUO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI/OiBudW1iZXI7XG5cdHNjaGVtYT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW4/OiBudW1iZXI7XG5cdG1heD86IG51bWJlcjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU/OiBib29sZWFuO1xuXHRlbWFpbD86IGJvb2xlYW47XG5cdG1pbmxlbmd0aD86IG51bWJlcjtcblx0bWF4bGVuZ3RoPzogbnVtYmVyO1xuXHRwYXR0ZXJuPzogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaD86IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0b3B0aW9ucz86IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcD86IG51bWJlcjtcblx0Zm9ybWF0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4ge1xuXHQvLyBleHBvcnQgY2xhc3MgQ29udHJvbEJhc2U8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cblx0c3RhdGljIHVpZDogbnVtYmVyID0gMDtcblxuXHRyZWFkb25seSBjb21wb25lbnQ6IHN0cmluZyA9ICdDb250cm9sQmFzZUNvbXBvbmVudCc7XG5cdHJlYWRvbmx5IHNjaGVtYTogc3RyaW5nID0gJ2Jhc2UnO1xuXG5cdHByaXZhdGUgX29yaWdpbmFsVmFsdWU6IFQ7XG5cdHZhbHVlOiBUO1xuXHRrZXk6IHN0cmluZztcblx0Ly9cblx0bGFiZWw6IHN0cmluZztcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI6IG51bWJlcjtcblx0dHlwZTogc3RyaW5nO1xuXHQvLyB2YWxpZGF0b3JzXG5cdG1pbjogbnVtYmVyO1xuXHRtYXg6IG51bWJlcjtcblx0cmVxdWlyZWQ6IGJvb2xlYW47XG5cdHJlcXVpcmVkVHJ1ZTogYm9vbGVhbjtcblx0ZW1haWw6IGJvb2xlYW47XG5cdG1pbmxlbmd0aDogbnVtYmVyO1xuXHRtYXhsZW5ndGg6IG51bWJlcjtcblx0cGF0dGVybjogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaDogc3RyaW5nO1xuXHQvLyBvcHRpb25zXG5cdHJldmVyc2U6IGJvb2xlYW47XG5cdG9wdGlvbnM6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0Ly8gZm9ybWF0dGVyc1xuXHRzdGVwOiBudW1iZXI7XG5cdGZvcm1hdDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IENvbnRyb2xCYXNlT3B0aW9uczxUPiA9IHt9KSB7XG5cdFx0dGhpcy5fb3JpZ2luYWxWYWx1ZSA9IG9wdGlvbnMudmFsdWU7XG5cdFx0dGhpcy52YWx1ZSA9IG9wdGlvbnMudmFsdWU7XG5cdFx0dGhpcy5rZXkgPSBvcHRpb25zLmtleTtcblx0XHQvL1xuXHRcdGNvbnN0IG5hbWUgPSBgJHtvcHRpb25zLmtleSB8fCAnQ29udHJvbCd9ICR7KytDb250cm9sQmFzZS51aWR9YDtcblx0XHR0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbCB8fCBuYW1lO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyIHx8IG5hbWU7XG5cdFx0Ly8gb3JkZXJcblx0XHR0aGlzLm9yZGVyID0gb3B0aW9ucy5vcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IG9wdGlvbnMub3JkZXI7XG5cdFx0dGhpcy5zY2hlbWEgPSBvcHRpb25zLnNjaGVtYSB8fCAndGV4dCc7XG5cdFx0dGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8IHRoaXMuc2NoZW1hO1xuXHRcdC8vIHZhbGlkYXRvcnNcblx0XHR0aGlzLm1pbiA9IG9wdGlvbnMubWluIHx8IG51bGw7XG5cdFx0dGhpcy5tYXggPSBvcHRpb25zLm1heCB8fCBudWxsO1xuXHRcdHRoaXMucmVxdWlyZWQgPSAhIW9wdGlvbnMucmVxdWlyZWQ7XG5cdFx0dGhpcy5yZXF1aXJlZFRydWUgPSAhIW9wdGlvbnMucmVxdWlyZWRUcnVlO1xuXHRcdHRoaXMuZW1haWwgPSAhIW9wdGlvbnMuZW1haWw7XG5cdFx0dGhpcy5taW5sZW5ndGggPSBvcHRpb25zLm1pbmxlbmd0aCB8fCBudWxsO1xuXHRcdHRoaXMubWF4bGVuZ3RoID0gb3B0aW9ucy5tYXhsZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLnBhdHRlcm4gPSBvcHRpb25zLnBhdHRlcm4gfHwgbnVsbDtcblx0XHR0aGlzLm1hdGNoID0gb3B0aW9ucy5tYXRjaCB8fCBudWxsO1xuXHRcdC8vIG9wdGlvbnNcblx0XHR0aGlzLnJldmVyc2UgPSAhIW9wdGlvbnMucmV2ZXJzZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnMgfHwgW107XG5cdFx0Ly8gc3RhdGVcblx0XHR0aGlzLmRpc2FibGVkID0gISFvcHRpb25zLmRpc2FibGVkO1xuXHRcdC8vIGZvcm1hdHRlcnNcblx0XHR0aGlzLnN0ZXAgPSBvcHRpb25zLnN0ZXAgfHwgbnVsbDtcblx0XHR0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IG51bGw7XG5cdH1cblxufVxuIl19