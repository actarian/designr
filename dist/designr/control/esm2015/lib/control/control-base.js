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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxPQUFPLGtCQUFrQjtDQTJCOUI7OztJQTFCQSxtQ0FBVTs7SUFDVixpQ0FBYTs7SUFDYixtQ0FBZTs7SUFDZix5Q0FBcUI7O0lBRXJCLG1DQUFlOztJQUNmLG9DQUFnQjs7SUFDaEIsa0NBQWM7O0lBRWQsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBQ2Isc0NBQW1COztJQUNuQiwwQ0FBdUI7O0lBQ3ZCLG1DQUFnQjs7SUFDaEIsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsbUNBQWU7O0lBRWYscUNBQWtCOztJQUNsQixxQ0FBMkM7O0lBRTNDLHNDQUFtQjs7SUFFbkIsa0NBQWM7O0lBQ2Qsb0NBQWdCOzs7OztBQUdqQixNQUFNLE9BQU8sV0FBVzs7OztJQWtDdkIsWUFBWSxVQUFpQyxFQUFFO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7Y0FFakIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLElBQUksRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztRQUMvQyxRQUFRO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDckMsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkMsYUFBYTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztJQUN0QyxDQUFDOzs7QUE3RE0sZUFBRyxHQUFXLENBQUMsQ0FBQzs7O0lBQXZCLGdCQUF1Qjs7Ozs7SUFFdkIscUNBQTBCOztJQUMxQiw0QkFBUzs7SUFDVCwwQkFBWTs7SUFFWiw0QkFBYzs7SUFDZCxrQ0FBb0I7O0lBRXBCLDRCQUFjOztJQUNkLDZCQUFlOztJQUNmLDJCQUFhOztJQUViLDBCQUFZOztJQUNaLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsbUNBQXNCOztJQUN0Qiw0QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLGdDQUFrQjs7SUFDbEIsOEJBQXlCOztJQUN6Qiw0QkFBYzs7SUFFZCw4QkFBaUI7O0lBQ2pCLDhCQUEwQzs7SUFFMUMsK0JBQWtCOztJQUVsQiwyQkFBYTs7SUFDYiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb250cm9sQmFzZU9wdGlvbnM8VD4ge1xuXHR2YWx1ZT86IFQ7XG5cdGtleT86IHN0cmluZztcblx0bGFiZWw/OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXHQvLyBvcmRlclxuXHRvcmRlcj86IG51bWJlcjtcblx0c2NoZW1hPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xuXHQvLyB2YWxpZGF0b3JzXG5cdG1pbj86IG51bWJlcjtcblx0bWF4PzogbnVtYmVyO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdHJlcXVpcmVkVHJ1ZT86IGJvb2xlYW47XG5cdGVtYWlsPzogYm9vbGVhbjtcblx0bWluTGVuZ3RoPzogbnVtYmVyO1xuXHRtYXhMZW5ndGg/OiBudW1iZXI7XG5cdHBhdHRlcm4/OiBzdHJpbmcgfCBSZWdFeHA7XG5cdG1hdGNoPzogc3RyaW5nO1xuXHQvLyBvcHRpb25zXG5cdHJldmVyc2U/OiBib29sZWFuO1xuXHRvcHRpb25zPzogeyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W107XG5cdC8vIHN0YXRlXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcblx0Ly8gZm9ybWF0dGVyc1xuXHRzdGVwPzogbnVtYmVyO1xuXHRmb3JtYXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sQmFzZTxUPiB7XG5cdC8vIGV4cG9ydCBjbGFzcyBDb250cm9sQmFzZTxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXHRzdGF0aWMgdWlkOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgX29yaWdpbmFsVmFsdWU6IFQ7XG5cdHZhbHVlOiBUO1xuXHRrZXk6IHN0cmluZztcblx0Ly9cblx0bGFiZWw6IHN0cmluZztcblx0cGxhY2Vob2xkZXI6IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI6IG51bWJlcjtcblx0c2NoZW1hOiBzdHJpbmc7XG5cdHR5cGU6IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW46IG51bWJlcjtcblx0bWF4OiBudW1iZXI7XG5cdHJlcXVpcmVkOiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU6IGJvb2xlYW47XG5cdGVtYWlsOiBib29sZWFuO1xuXHRtaW5MZW5ndGg6IG51bWJlcjtcblx0bWF4TGVuZ3RoOiBudW1iZXI7XG5cdHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g6IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlOiBib29sZWFuO1xuXHRvcHRpb25zOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcDogbnVtYmVyO1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8VD4gPSB7fSkge1xuXHRcdHRoaXMuX29yaWdpbmFsVmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG5cdFx0Ly9cblx0XHRjb25zdCBuYW1lID0gYCR7b3B0aW9ucy5rZXkgfHwgJ0NvbnRyb2wnfSAkeysrQ29udHJvbEJhc2UudWlkfWA7XG5cdFx0dGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWwgfHwgbmFtZTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlciB8fCBuYW1lO1xuXHRcdC8vIG9yZGVyXG5cdFx0dGhpcy5vcmRlciA9IG9wdGlvbnMub3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBvcHRpb25zLm9yZGVyO1xuXHRcdHRoaXMuc2NoZW1hID0gb3B0aW9ucy5zY2hlbWEgfHwgJ3RleHQnO1xuXHRcdHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLnNjaGVtYTtcblx0XHQvLyB2YWxpZGF0b3JzXG5cdFx0dGhpcy5taW4gPSBvcHRpb25zLm1pbiB8fCBudWxsO1xuXHRcdHRoaXMubWF4ID0gb3B0aW9ucy5tYXggfHwgbnVsbDtcblx0XHR0aGlzLnJlcXVpcmVkID0gISFvcHRpb25zLnJlcXVpcmVkO1xuXHRcdHRoaXMucmVxdWlyZWRUcnVlID0gISFvcHRpb25zLnJlcXVpcmVkVHJ1ZTtcblx0XHR0aGlzLmVtYWlsID0gISFvcHRpb25zLmVtYWlsO1xuXHRcdHRoaXMubWluTGVuZ3RoID0gb3B0aW9ucy5taW5MZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8IG51bGw7XG5cdFx0dGhpcy5tYXRjaCA9IG9wdGlvbnMubWF0Y2ggfHwgbnVsbDtcblx0XHQvLyBvcHRpb25zXG5cdFx0dGhpcy5yZXZlcnNlID0gISFvcHRpb25zLnJldmVyc2U7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucy5vcHRpb25zIHx8IFtdO1xuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5kaXNhYmxlZCA9ICEhb3B0aW9ucy5kaXNhYmxlZDtcblx0XHQvLyBmb3JtYXR0ZXJzXG5cdFx0dGhpcy5zdGVwID0gb3B0aW9ucy5zdGVwIHx8IG51bGw7XG5cdFx0dGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBudWxsO1xuXHR9XG5cblx0Lypcblx0Ly9cblx0Y29udHJvbD86IEZvcm1Db250cm9sO1xuXHRpbm5lcnZhbHVlOiBhbnk7XG5cdGJsdXJyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRmb2N1cygpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UuZm9jdXMnLCB0aGlzLmNvbnRyb2wudmFsdWUpO1xuXHRcdHRoaXMuYmx1cnJlZCA9IGZhbHNlO1xuXHRcdGlmICh0aGlzLmlubmVydmFsdWUpIHtcblx0XHRcdHRoaXMuY29udHJvbC5wYXRjaFZhbHVlKHRoaXMuaW5uZXJ2YWx1ZSwgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdGJsdXIoKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLmJsdXInLCB0aGlzLmNvbnRyb2wudmFsdWUpO1xuXHRcdHRoaXMuYmx1cnJlZCA9IHRydWU7XG5cdFx0aWYgKHRoaXMuaW5uZXJ2YWx1ZSkge1xuXHRcdFx0dGhpcy5jb250cm9sLnBhdGNoVmFsdWUodGhpcy5pbm5lcnZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdHNldENvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuXHRcdHRoaXMuaW5uZXJ2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0Y29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5jb250cm9sLnZhbHVlQ2hhbmdlcycsIHZhbHVlKTtcblx0XHRcdGlmICh0aGlzLmJsdXJyZWQpIHtcblx0XHRcdFx0Y29udHJvbC5wYXRjaFZhbHVlKHZhbHVlICsgJyBIJywgeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbm5lcnZhbHVlID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gdGhpcy5ibHVyKCk7XG5cdH1cblxuXHRmb3JtYXRWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5mb3JtYXRWYWx1ZScsIHRoaXMsIHRoaXMuY29udHJvbCk7XG5cdFx0cmV0dXJuICdhYWEnO1xuXHR9XG5cblx0cGFyc2VWYWx1ZShlOiBFdmVudCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb250cm9sQmFzZS5wYXJzZVZhbHVlJywgZSk7XG5cdH1cblxuXHRwcml2YXRlIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHsgfTtcblxuXHRwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2Uud3JpdGVWYWx1ZScsIHZhbHVlKTtcblx0XHQvLyB0aGlzLmZvcm1hdHRlZFZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvbnRyb2xCYXNlLnJlZ2lzdGVyT25DaGFuZ2UnLCBmbik7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHRcdC8vIHRoaXMub25DaGFuZ2UoJ215IG5ldyB2YWx1ZScpO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2UucmVnaXN0ZXJPblRvdWNoZWQnLCBmbik7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29udHJvbEJhc2Uuc2V0RGlzYWJsZWRTdGF0ZScsIGlzRGlzYWJsZWQpO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXHR9XG5cdCovXG5cbn1cbiJdfQ==