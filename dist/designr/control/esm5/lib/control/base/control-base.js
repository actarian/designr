/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this.schema = 'base';
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
    // export class ControlBase<T> implements ControlValueAccessor {
    ControlBase.uid = 0;
    return ControlBase;
}());
export { ControlBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztJQUFBO0lBMkJBLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7Ozs7SUExQkEsbUNBQVU7O0lBQ1YsaUNBQWE7O0lBQ2IsbUNBQWU7O0lBQ2YseUNBQXFCOztJQUVyQixtQ0FBZTs7SUFDZixvQ0FBZ0I7O0lBQ2hCLGtDQUFjOztJQUVkLGlDQUFhOztJQUNiLGlDQUFhOztJQUNiLHNDQUFtQjs7SUFDbkIsMENBQXVCOztJQUN2QixtQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLG1DQUFlOztJQUVmLHFDQUFrQjs7SUFDbEIscUNBQTJDOztJQUUzQyxzQ0FBbUI7O0lBRW5CLGtDQUFjOztJQUNkLG9DQUFnQjs7Ozs7QUFHakI7SUFtQ0MscUJBQVksT0FBbUM7UUFBbkMsd0JBQUEsRUFBQSxZQUFtQztRQTlCdEMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQStCaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7OztZQUVqQixJQUFJLEdBQUcsQ0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLFNBQVMsVUFBSSxFQUFFLFdBQVcsQ0FBQyxHQUFLO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztRQUMvQyxRQUFRO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLFVBQVU7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDckMsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkMsYUFBYTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztJQUN0QyxDQUFDOztJQTlETSxlQUFHLEdBQVcsQ0FBQyxDQUFDO0lBZ0V4QixrQkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVZLFdBQVc7OztJQUd2QixnQkFBdUI7O0lBRXZCLDZCQUFpQzs7Ozs7SUFFakMscUNBQTBCOztJQUMxQiw0QkFBUzs7SUFDVCwwQkFBWTs7SUFFWiw0QkFBYzs7SUFDZCxrQ0FBb0I7O0lBRXBCLDRCQUFjOztJQUNkLDJCQUFhOztJQUViLDBCQUFZOztJQUNaLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsbUNBQXNCOztJQUN0Qiw0QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLGdDQUFrQjs7SUFDbEIsOEJBQXlCOztJQUN6Qiw0QkFBYzs7SUFFZCw4QkFBaUI7O0lBQ2pCLDhCQUEwQzs7SUFFMUMsK0JBQWtCOztJQUVsQiwyQkFBYTs7SUFDYiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlT3B0aW9uczxUPiB7XG5cdHZhbHVlPzogVDtcblx0a2V5Pzogc3RyaW5nO1xuXHRsYWJlbD86IHN0cmluZztcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyPzogbnVtYmVyO1xuXHRzY2hlbWE/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG5cdC8vIHZhbGlkYXRvcnNcblx0bWluPzogbnVtYmVyO1xuXHRtYXg/OiBudW1iZXI7XG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcblx0cmVxdWlyZWRUcnVlPzogYm9vbGVhbjtcblx0ZW1haWw/OiBib29sZWFuO1xuXHRtaW5sZW5ndGg/OiBudW1iZXI7XG5cdG1heGxlbmd0aD86IG51bWJlcjtcblx0cGF0dGVybj86IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g/OiBzdHJpbmc7XG5cdC8vIG9wdGlvbnNcblx0cmV2ZXJzZT86IGJvb2xlYW47XG5cdG9wdGlvbnM/OiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHQvLyBmb3JtYXR0ZXJzXG5cdHN0ZXA/OiBudW1iZXI7XG5cdGZvcm1hdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IHtcblx0Ly8gZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdHN0YXRpYyB1aWQ6IG51bWJlciA9IDA7XG5cblx0cmVhZG9ubHkgc2NoZW1hOiBzdHJpbmcgPSAnYmFzZSc7XG5cblx0cHJpdmF0ZSBfb3JpZ2luYWxWYWx1ZTogVDtcblx0dmFsdWU6IFQ7XG5cdGtleTogc3RyaW5nO1xuXHQvL1xuXHRsYWJlbDogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHQvLyBvcmRlclxuXHRvcmRlcjogbnVtYmVyO1xuXHR0eXBlOiBzdHJpbmc7XG5cdC8vIHZhbGlkYXRvcnNcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRyZXF1aXJlZDogYm9vbGVhbjtcblx0cmVxdWlyZWRUcnVlOiBib29sZWFuO1xuXHRlbWFpbDogYm9vbGVhbjtcblx0bWlubGVuZ3RoOiBudW1iZXI7XG5cdG1heGxlbmd0aDogbnVtYmVyO1xuXHRwYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHA7XG5cdG1hdGNoOiBzdHJpbmc7XG5cdC8vIG9wdGlvbnNcblx0cmV2ZXJzZTogYm9vbGVhbjtcblx0b3B0aW9uczogeyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9W107XG5cdC8vIHN0YXRlXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXHQvLyBmb3JtYXR0ZXJzXG5cdHN0ZXA6IG51bWJlcjtcblx0Zm9ybWF0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPFQ+ID0ge30pIHtcblx0XHR0aGlzLl9vcmlnaW5hbFZhbHVlID0gb3B0aW9ucy52YWx1ZTtcblx0XHR0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcblx0XHR0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuXHRcdC8vXG5cdFx0Y29uc3QgbmFtZSA9IGAke29wdGlvbnMua2V5IHx8ICdDb250cm9sJ30gJHsrK0NvbnRyb2xCYXNlLnVpZH1gO1xuXHRcdHRoaXMubGFiZWwgPSBvcHRpb25zLmxhYmVsIHx8IG5hbWU7XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXIgfHwgbmFtZTtcblx0XHQvLyBvcmRlclxuXHRcdHRoaXMub3JkZXIgPSBvcHRpb25zLm9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogb3B0aW9ucy5vcmRlcjtcblx0XHR0aGlzLnNjaGVtYSA9IG9wdGlvbnMuc2NoZW1hIHx8ICd0ZXh0Jztcblx0XHR0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgdGhpcy5zY2hlbWE7XG5cdFx0Ly8gdmFsaWRhdG9yc1xuXHRcdHRoaXMubWluID0gb3B0aW9ucy5taW4gfHwgbnVsbDtcblx0XHR0aGlzLm1heCA9IG9wdGlvbnMubWF4IHx8IG51bGw7XG5cdFx0dGhpcy5yZXF1aXJlZCA9ICEhb3B0aW9ucy5yZXF1aXJlZDtcblx0XHR0aGlzLnJlcXVpcmVkVHJ1ZSA9ICEhb3B0aW9ucy5yZXF1aXJlZFRydWU7XG5cdFx0dGhpcy5lbWFpbCA9ICEhb3B0aW9ucy5lbWFpbDtcblx0XHR0aGlzLm1pbmxlbmd0aCA9IG9wdGlvbnMubWlubGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5tYXhsZW5ndGggPSBvcHRpb25zLm1heGxlbmd0aCB8fCBudWxsO1xuXHRcdHRoaXMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCBudWxsO1xuXHRcdHRoaXMubWF0Y2ggPSBvcHRpb25zLm1hdGNoIHx8IG51bGw7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdHRoaXMucmV2ZXJzZSA9ICEhb3B0aW9ucy5yZXZlcnNlO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMub3B0aW9ucyB8fCBbXTtcblx0XHQvLyBzdGF0ZVxuXHRcdHRoaXMuZGlzYWJsZWQgPSAhIW9wdGlvbnMuZGlzYWJsZWQ7XG5cdFx0Ly8gZm9ybWF0dGVyc1xuXHRcdHRoaXMuc3RlcCA9IG9wdGlvbnMuc3RlcCB8fCBudWxsO1xuXHRcdHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgbnVsbDtcblx0fVxuXG59XG4iXX0=