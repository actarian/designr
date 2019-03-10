/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var ControlOption = /** @class */ (function () {
    function ControlOption(options) {
        if (options === void 0) { options = {}; }
        if (options) {
            Object.assign(this, options);
        }
        this._originalValue = this.value;
        /** @type {?} */
        var name = (options.key || 'Control') + " " + ++ControlOption.uid;
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
    // export class ControlOption<T> implements ControlValueAccessor {
    ControlOption.uid = 0;
    return ControlOption;
}());
export { ControlOption };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0lBbUNDLHVCQUFZLE9BQThCO1FBQTlCLHdCQUFBLEVBQUEsWUFBOEI7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7WUFDM0IsSUFBSSxHQUFHLENBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLFVBQUksRUFBRSxhQUFhLENBQUMsR0FBSztRQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWtCRTtJQUNILENBQUM7O0lBN0RNLGlCQUFHLEdBQVcsQ0FBQyxDQUFDO0lBK0R4QixvQkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVZLGFBQWE7OztJQUl6QixrQkFBdUI7Ozs7O0lBRXZCLHVDQUE2Qjs7SUFFN0IsOEJBQVU7O0lBQ1YsNEJBQWE7O0lBQ2IsOEJBQWU7O0lBQ2Ysb0NBQXFCOztJQUVyQiw4QkFBZTs7SUFDZiwrQkFBZ0I7O0lBQ2hCLDZCQUFjOztJQUVkLDRCQUFhOztJQUNiLDRCQUFhOztJQUNiLGlDQUFtQjs7SUFDbkIscUNBQXVCOztJQUN2Qiw4QkFBZ0I7O0lBQ2hCLGtDQUFtQjs7SUFDbkIsa0NBQW1COztJQUNuQixnQ0FBMEI7O0lBQzFCLDhCQUFlOztJQUVmLGdDQUFrQjs7SUFDbEIsZ0NBQTJDOztJQUUzQyxpQ0FBbUI7O0lBRW5CLDZCQUFjOztJQUNkLCtCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIENvbnRyb2xPcHRpb248VD4ge1xuXG5cdC8vIGV4cG9ydCBjbGFzcyBDb250cm9sT3B0aW9uPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdHN0YXRpYyB1aWQ6IG51bWJlciA9IDA7XG5cblx0cHJvdGVjdGVkIF9vcmlnaW5hbFZhbHVlPzogVDtcblxuXHR2YWx1ZT86IFQ7XG5cdGtleT86IHN0cmluZztcblx0bGFiZWw/OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXHQvLyBvcmRlclxuXHRvcmRlcj86IG51bWJlcjtcblx0c2NoZW1hPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xuXHQvLyB2YWxpZGF0b3JzXG5cdG1pbj86IG51bWJlcjtcblx0bWF4PzogbnVtYmVyO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdHJlcXVpcmVkVHJ1ZT86IGJvb2xlYW47XG5cdGVtYWlsPzogYm9vbGVhbjtcblx0bWlubGVuZ3RoPzogbnVtYmVyO1xuXHRtYXhsZW5ndGg/OiBudW1iZXI7XG5cdHBhdHRlcm4/OiBzdHJpbmcgfCBSZWdFeHA7XG5cdG1hdGNoPzogc3RyaW5nO1xuXHQvLyBvcHRpb25zXG5cdHJldmVyc2U/OiBib29sZWFuO1xuXHRvcHRpb25zPzogeyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W107XG5cdC8vIHN0YXRlXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcblx0Ly8gZm9ybWF0dGVyc1xuXHRzdGVwPzogbnVtYmVyO1xuXHRmb3JtYXQ/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogQ29udHJvbE9wdGlvbjxUPiA9IHt9KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdHRoaXMuX29yaWdpbmFsVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdGNvbnN0IG5hbWUgPSBgJHtvcHRpb25zLmtleSB8fCAnQ29udHJvbCd9ICR7KytDb250cm9sT3B0aW9uLnVpZH1gO1xuXHRcdHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IG5hbWU7XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgbmFtZTtcblx0XHR0aGlzLm9yZGVyID0gdGhpcy5vcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IHRoaXMub3JkZXI7XG5cdFx0dGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYSB8fCAndGV4dCc7XG5cdFx0dGhpcy50eXBlID0gdGhpcy50eXBlIHx8IHRoaXMuc2NoZW1hO1xuXHRcdC8qXG5cdFx0dGhpcy5taW4gPSBvcHRpb25zLm1pbiB8fCBudWxsO1xuXHRcdHRoaXMubWF4ID0gb3B0aW9ucy5tYXggfHwgbnVsbDtcblx0XHR0aGlzLnJlcXVpcmVkID0gISFvcHRpb25zLnJlcXVpcmVkO1xuXHRcdHRoaXMucmVxdWlyZWRUcnVlID0gISFvcHRpb25zLnJlcXVpcmVkVHJ1ZTtcblx0XHR0aGlzLmVtYWlsID0gISFvcHRpb25zLmVtYWlsO1xuXHRcdHRoaXMubWlubGVuZ3RoID0gb3B0aW9ucy5taW5sZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLm1heGxlbmd0aCA9IG9wdGlvbnMubWF4bGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8IG51bGw7XG5cdFx0dGhpcy5tYXRjaCA9IG9wdGlvbnMubWF0Y2ggfHwgbnVsbDtcblx0XHQvLyBvcHRpb25zXG5cdFx0dGhpcy5yZXZlcnNlID0gISFvcHRpb25zLnJldmVyc2U7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucy5vcHRpb25zIHx8IFtdO1xuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5kaXNhYmxlZCA9ICEhb3B0aW9ucy5kaXNhYmxlZDtcblx0XHQvLyBmb3JtYXR0ZXJzXG5cdFx0dGhpcy5zdGVwID0gb3B0aW9ucy5zdGVwIHx8IG51bGw7XG5cdFx0dGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBudWxsO1xuXHRcdCovXG5cdH1cblxufVxuIl19