/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class ControlOption {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        if (options) {
            Object.assign(this, options);
        }
        this._originalValue = this.value;
        /** @type {?} */
        const name = `${options.key || 'Control'} ${++ControlOption.uid}`;
        this.label = this.label || name;
        this.placeholder = this.placeholder || name;
        this.order = this.order === undefined ? 1 : this.order;
        this.schema = this.schema || 'text';
        this.type = this.type || this.schema;
        /*
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
        */
    }
}
// export class ControlOption<T> implements ControlValueAccessor {
ControlOption.uid = 0;
if (false) {
    /** @type {?} */
    ControlOption.uid;
    /**
     * @type {?}
     * @protected
     */
    ControlOption.prototype._originalValue;
    /** @type {?} */
    ControlOption.prototype.value;
    /** @type {?} */
    ControlOption.prototype.key;
    /** @type {?} */
    ControlOption.prototype.label;
    /** @type {?} */
    ControlOption.prototype.placeholder;
    /** @type {?} */
    ControlOption.prototype.order;
    /** @type {?} */
    ControlOption.prototype.schema;
    /** @type {?} */
    ControlOption.prototype.type;
    /** @type {?} */
    ControlOption.prototype.min;
    /** @type {?} */
    ControlOption.prototype.max;
    /** @type {?} */
    ControlOption.prototype.required;
    /** @type {?} */
    ControlOption.prototype.requiredTrue;
    /** @type {?} */
    ControlOption.prototype.email;
    /** @type {?} */
    ControlOption.prototype.minlength;
    /** @type {?} */
    ControlOption.prototype.maxlength;
    /** @type {?} */
    ControlOption.prototype.pattern;
    /** @type {?} */
    ControlOption.prototype.match;
    /** @type {?} */
    ControlOption.prototype.reverse;
    /** @type {?} */
    ControlOption.prototype.options;
    /** @type {?} */
    ControlOption.prototype.disabled;
    /** @type {?} */
    ControlOption.prototype.step;
    /** @type {?} */
    ControlOption.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE1BQU0sT0FBTyxhQUFhOzs7O0lBbUN6QixZQUFZLFVBQTRCLEVBQUU7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Y0FDM0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBa0JFO0lBQ0gsQ0FBQzs7O0FBN0RNLGlCQUFHLEdBQVcsQ0FBQyxDQUFDOzs7SUFBdkIsa0JBQXVCOzs7OztJQUV2Qix1Q0FBNkI7O0lBRTdCLDhCQUFVOztJQUNWLDRCQUFhOztJQUNiLDhCQUFlOztJQUNmLG9DQUFxQjs7SUFFckIsOEJBQWU7O0lBQ2YsK0JBQWdCOztJQUNoQiw2QkFBYzs7SUFFZCw0QkFBYTs7SUFDYiw0QkFBYTs7SUFDYixpQ0FBbUI7O0lBQ25CLHFDQUF1Qjs7SUFDdkIsOEJBQWdCOztJQUNoQixrQ0FBbUI7O0lBQ25CLGtDQUFtQjs7SUFDbkIsZ0NBQTBCOztJQUMxQiw4QkFBZTs7SUFFZixnQ0FBa0I7O0lBQ2xCLGdDQUEyQzs7SUFFM0MsaUNBQW1COztJQUVuQiw2QkFBYzs7SUFDZCwrQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBDb250cm9sT3B0aW9uPFQ+IHtcblxuXHQvLyBleHBvcnQgY2xhc3MgQ29udHJvbE9wdGlvbjxUPiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuXHRzdGF0aWMgdWlkOiBudW1iZXIgPSAwO1xuXG5cdHByb3RlY3RlZCBfb3JpZ2luYWxWYWx1ZT86IFQ7XG5cblx0dmFsdWU/OiBUO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0Ly8gb3JkZXJcblx0b3JkZXI/OiBudW1iZXI7XG5cdHNjaGVtYT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW4/OiBudW1iZXI7XG5cdG1heD86IG51bWJlcjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU/OiBib29sZWFuO1xuXHRlbWFpbD86IGJvb2xlYW47XG5cdG1pbmxlbmd0aD86IG51bWJlcjtcblx0bWF4bGVuZ3RoPzogbnVtYmVyO1xuXHRwYXR0ZXJuPzogc3RyaW5nIHwgUmVnRXhwO1xuXHRtYXRjaD86IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0b3B0aW9ucz86IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdO1xuXHQvLyBzdGF0ZVxuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcD86IG51bWJlcjtcblx0Zm9ybWF0Pzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IENvbnRyb2xPcHRpb248VD4gPSB7fSkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHR0aGlzLl9vcmlnaW5hbFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRjb25zdCBuYW1lID0gYCR7b3B0aW9ucy5rZXkgfHwgJ0NvbnRyb2wnfSAkeysrQ29udHJvbE9wdGlvbi51aWR9YDtcblx0XHR0aGlzLmxhYmVsID0gdGhpcy5sYWJlbCB8fCBuYW1lO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IG5hbWU7XG5cdFx0dGhpcy5vcmRlciA9IHRoaXMub3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiB0aGlzLm9yZGVyO1xuXHRcdHRoaXMuc2NoZW1hID0gdGhpcy5zY2hlbWEgfHwgJ3RleHQnO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMudHlwZSB8fCB0aGlzLnNjaGVtYTtcblx0XHQvKlxuXHRcdHRoaXMubWluID0gb3B0aW9ucy5taW4gfHwgbnVsbDtcblx0XHR0aGlzLm1heCA9IG9wdGlvbnMubWF4IHx8IG51bGw7XG5cdFx0dGhpcy5yZXF1aXJlZCA9ICEhb3B0aW9ucy5yZXF1aXJlZDtcblx0XHR0aGlzLnJlcXVpcmVkVHJ1ZSA9ICEhb3B0aW9ucy5yZXF1aXJlZFRydWU7XG5cdFx0dGhpcy5lbWFpbCA9ICEhb3B0aW9ucy5lbWFpbDtcblx0XHR0aGlzLm1pbmxlbmd0aCA9IG9wdGlvbnMubWlubGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5tYXhsZW5ndGggPSBvcHRpb25zLm1heGxlbmd0aCB8fCBudWxsO1xuXHRcdHRoaXMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCBudWxsO1xuXHRcdHRoaXMubWF0Y2ggPSBvcHRpb25zLm1hdGNoIHx8IG51bGw7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdHRoaXMucmV2ZXJzZSA9ICEhb3B0aW9ucy5yZXZlcnNlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMub3B0aW9ucyB8fCBbXTtcblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuZGlzYWJsZWQgPSAhIW9wdGlvbnMuZGlzYWJsZWQ7XG5cdFx0Ly8gZm9ybWF0dGVyc1xuXHRcdHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCB8fCBudWxsO1xuXHRcdHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgbnVsbDtcblx0XHQqL1xuXHR9XG5cbn1cbiJdfQ==