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
        this.component = 'ControlBaseComponent';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2Jhc2UvY29udHJvbC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztJQUFBO0lBMkJBLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7Ozs7SUExQkEsbUNBQVU7O0lBQ1YsaUNBQWE7O0lBQ2IsbUNBQWU7O0lBQ2YseUNBQXFCOztJQUVyQixtQ0FBZTs7SUFDZixvQ0FBZ0I7O0lBQ2hCLGtDQUFjOztJQUVkLGlDQUFhOztJQUNiLGlDQUFhOztJQUNiLHNDQUFtQjs7SUFDbkIsMENBQXVCOztJQUN2QixtQ0FBZ0I7O0lBQ2hCLHVDQUFtQjs7SUFDbkIsdUNBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLG1DQUFlOztJQUVmLHFDQUFrQjs7SUFDbEIscUNBQTJDOztJQUUzQyxzQ0FBbUI7O0lBRW5CLGtDQUFjOztJQUNkLG9DQUFnQjs7Ozs7QUFHakI7SUFvQ0MscUJBQVksT0FBbUM7UUFBbkMsd0JBQUEsRUFBQSxZQUFtQztRQS9CdEMsY0FBUyxHQUFXLHNCQUFzQixDQUFDO1FBQzNDLFdBQU0sR0FBVyxNQUFNLENBQUM7UUErQmhDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7WUFFakIsSUFBSSxHQUFHLENBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxTQUFTLFVBQUksRUFBRSxXQUFXLENBQUMsR0FBSztRQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDL0MsUUFBUTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hDLGFBQWE7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3JDLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ25DLGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7SUEvRE0sZUFBRyxHQUFXLENBQUMsQ0FBQztJQWlFeEIsa0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQXBFWSxXQUFXOzs7SUFHdkIsZ0JBQXVCOztJQUV2QixnQ0FBb0Q7O0lBQ3BELDZCQUFpQzs7Ozs7SUFFakMscUNBQTBCOztJQUMxQiw0QkFBUzs7SUFDVCwwQkFBWTs7SUFFWiw0QkFBYzs7SUFDZCxrQ0FBb0I7O0lBRXBCLDRCQUFjOztJQUNkLDJCQUFhOztJQUViLDBCQUFZOztJQUNaLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsbUNBQXNCOztJQUN0Qiw0QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLGdDQUFrQjs7SUFDbEIsOEJBQXlCOztJQUN6Qiw0QkFBYzs7SUFFZCw4QkFBaUI7O0lBQ2pCLDhCQUEwQzs7SUFFMUMsK0JBQWtCOztJQUVsQiwyQkFBYTs7SUFDYiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlT3B0aW9uczxUPiB7XG5cdHZhbHVlPzogVDtcblx0a2V5Pzogc3RyaW5nO1xuXHRsYWJlbD86IHN0cmluZztcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyPzogbnVtYmVyO1xuXHRzY2hlbWE/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG5cdC8vIHZhbGlkYXRvcnNcblx0bWluPzogbnVtYmVyO1xuXHRtYXg/OiBudW1iZXI7XG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcblx0cmVxdWlyZWRUcnVlPzogYm9vbGVhbjtcblx0ZW1haWw/OiBib29sZWFuO1xuXHRtaW5sZW5ndGg/OiBudW1iZXI7XG5cdG1heGxlbmd0aD86IG51bWJlcjtcblx0cGF0dGVybj86IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g/OiBzdHJpbmc7XG5cdC8vIG9wdGlvbnNcblx0cmV2ZXJzZT86IGJvb2xlYW47XG5cdG9wdGlvbnM/OiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHQvLyBmb3JtYXR0ZXJzXG5cdHN0ZXA/OiBudW1iZXI7XG5cdGZvcm1hdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IHtcblx0Ly8gZXhwb3J0IGNsYXNzIENvbnRyb2xCYXNlPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG5cdHN0YXRpYyB1aWQ6IG51bWJlciA9IDA7XG5cblx0cmVhZG9ubHkgY29tcG9uZW50OiBzdHJpbmcgPSAnQ29udHJvbEJhc2VDb21wb25lbnQnO1xuXHRyZWFkb25seSBzY2hlbWE6IHN0cmluZyA9ICdiYXNlJztcblxuXHRwcml2YXRlIF9vcmlnaW5hbFZhbHVlOiBUO1xuXHR2YWx1ZTogVDtcblx0a2V5OiBzdHJpbmc7XG5cdC8vXG5cdGxhYmVsOiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdC8vIG9yZGVyXG5cdG9yZGVyOiBudW1iZXI7XG5cdHR5cGU6IHN0cmluZztcblx0Ly8gdmFsaWRhdG9yc1xuXHRtaW46IG51bWJlcjtcblx0bWF4OiBudW1iZXI7XG5cdHJlcXVpcmVkOiBib29sZWFuO1xuXHRyZXF1aXJlZFRydWU6IGJvb2xlYW47XG5cdGVtYWlsOiBib29sZWFuO1xuXHRtaW5sZW5ndGg6IG51bWJlcjtcblx0bWF4bGVuZ3RoOiBudW1iZXI7XG5cdHBhdHRlcm46IHN0cmluZyB8IFJlZ0V4cDtcblx0bWF0Y2g6IHN0cmluZztcblx0Ly8gb3B0aW9uc1xuXHRyZXZlcnNlOiBib29sZWFuO1xuXHRvcHRpb25zOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblx0Ly8gc3RhdGVcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdC8vIGZvcm1hdHRlcnNcblx0c3RlcDogbnVtYmVyO1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBDb250cm9sQmFzZU9wdGlvbnM8VD4gPSB7fSkge1xuXHRcdHRoaXMuX29yaWdpbmFsVmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdHRoaXMua2V5ID0gb3B0aW9ucy5rZXk7XG5cdFx0Ly9cblx0XHRjb25zdCBuYW1lID0gYCR7b3B0aW9ucy5rZXkgfHwgJ0NvbnRyb2wnfSAkeysrQ29udHJvbEJhc2UudWlkfWA7XG5cdFx0dGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWwgfHwgbmFtZTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlciB8fCBuYW1lO1xuXHRcdC8vIG9yZGVyXG5cdFx0dGhpcy5vcmRlciA9IG9wdGlvbnMub3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiBvcHRpb25zLm9yZGVyO1xuXHRcdHRoaXMuc2NoZW1hID0gb3B0aW9ucy5zY2hlbWEgfHwgJ3RleHQnO1xuXHRcdHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCB0aGlzLnNjaGVtYTtcblx0XHQvLyB2YWxpZGF0b3JzXG5cdFx0dGhpcy5taW4gPSBvcHRpb25zLm1pbiB8fCBudWxsO1xuXHRcdHRoaXMubWF4ID0gb3B0aW9ucy5tYXggfHwgbnVsbDtcblx0XHR0aGlzLnJlcXVpcmVkID0gISFvcHRpb25zLnJlcXVpcmVkO1xuXHRcdHRoaXMucmVxdWlyZWRUcnVlID0gISFvcHRpb25zLnJlcXVpcmVkVHJ1ZTtcblx0XHR0aGlzLmVtYWlsID0gISFvcHRpb25zLmVtYWlsO1xuXHRcdHRoaXMubWlubGVuZ3RoID0gb3B0aW9ucy5taW5sZW5ndGggfHwgbnVsbDtcblx0XHR0aGlzLm1heGxlbmd0aCA9IG9wdGlvbnMubWF4bGVuZ3RoIHx8IG51bGw7XG5cdFx0dGhpcy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8IG51bGw7XG5cdFx0dGhpcy5tYXRjaCA9IG9wdGlvbnMubWF0Y2ggfHwgbnVsbDtcblx0XHQvLyBvcHRpb25zXG5cdFx0dGhpcy5yZXZlcnNlID0gISFvcHRpb25zLnJldmVyc2U7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucy5vcHRpb25zIHx8IFtdO1xuXHRcdC8vIHN0YXRlXG5cdFx0dGhpcy5kaXNhYmxlZCA9ICEhb3B0aW9ucy5kaXNhYmxlZDtcblx0XHQvLyBmb3JtYXR0ZXJzXG5cdFx0dGhpcy5zdGVwID0gb3B0aW9ucy5zdGVwIHx8IG51bGw7XG5cdFx0dGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBudWxsO1xuXHR9XG5cbn1cbiJdfQ==