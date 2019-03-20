/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var UNIQUE_ID = 0;
/**
 * @record
 * @template T
 */
export function IControlOption() { }
if (false) {
    /** @type {?} */
    IControlOption.prototype.schema;
    /** @type {?|undefined} */
    IControlOption.prototype.value;
    /** @type {?|undefined} */
    IControlOption.prototype.order;
    /** @type {?|undefined} */
    IControlOption.prototype.key;
    /** @type {?|undefined} */
    IControlOption.prototype.label;
    /** @type {?|undefined} */
    IControlOption.prototype.placeholder;
    /** @type {?|undefined} */
    IControlOption.prototype.disabled;
    /** @type {?|undefined} */
    IControlOption.prototype.required;
    /** @type {?|undefined} */
    IControlOption.prototype.match;
    /** @type {?|undefined} */
    IControlOption.prototype.reverse;
    /* Skipping unhandled member: [x: string]: any;*/
}
/**
 * @template T
 */
var /**
 * @template T
 */
ControlOption = /** @class */ (function () {
    function ControlOption(options) {
        this.schema = 'text';
        if (options) {
            Object.assign(this, options);
        }
        /*
        const name = `${options.key || 'Control'} ${++UNIQUE_ID}`;
        this.label = this.label || name;
        this.placeholder = this.placeholder || name;
        this.order = this.order === undefined ? 1 : this.order;
        this.schema = this.schema || 'text';
        this.type = this.type || this.schema;
        */
    }
    return ControlOption;
}());
/**
 * @template T
 */
export { ControlOption };
if (false) {
    /** @type {?} */
    ControlOption.prototype.schema;
    /** @type {?} */
    ControlOption.prototype.value;
    /** @type {?} */
    ControlOption.prototype.order;
    /** @type {?} */
    ControlOption.prototype.key;
    /** @type {?} */
    ControlOption.prototype.label;
    /** @type {?} */
    ControlOption.prototype.placeholder;
    /** @type {?} */
    ControlOption.prototype.disabled;
    /** @type {?} */
    ControlOption.prototype.required;
    /** @type {?} */
    ControlOption.prototype.match;
    /** @type {?} */
    ControlOption.prototype.reverse;
    /** @type {?} */
    ControlOption.prototype.minlength;
    /** @type {?} */
    ControlOption.prototype.maxlength;
    /** @type {?} */
    ControlOption.prototype.pattern;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFBSSxTQUFTLEdBQVcsQ0FBQzs7Ozs7QUFFekIsb0NBWUM7OztJQVhBLGdDQUFlOztJQUNmLCtCQUFVOztJQUNWLCtCQUFlOztJQUNmLDZCQUFhOztJQUNiLCtCQUFlOztJQUNmLHFDQUFxQjs7SUFDckIsa0NBQW1COztJQUNuQixrQ0FBbUI7O0lBQ25CLCtCQUFlOztJQUNmLGlDQUFrQjs7Ozs7O0FBSW5COzs7O0lBZUMsdUJBQVksT0FBMkI7UUFkdkMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQWV2QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0Q7Ozs7Ozs7VUFPRTtJQUNILENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7Ozs7Ozs7SUE1QkEsK0JBQXdCOztJQUN4Qiw4QkFBVTs7SUFDViw4QkFBZTs7SUFDZiw0QkFBYTs7SUFDYiw4QkFBZTs7SUFDZixvQ0FBcUI7O0lBQ3JCLGlDQUFtQjs7SUFDbkIsaUNBQW1COztJQUNuQiw4QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLGtDQUFtQjs7SUFDbkIsa0NBQW1COztJQUNuQixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVU5JUVVFX0lEOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sT3B0aW9uPFQ+IHtcblx0c2NoZW1hOiBzdHJpbmc7XG5cdHZhbHVlPzogVDtcblx0b3JkZXI/OiBudW1iZXI7XG5cdGtleT86IHN0cmluZztcblx0bGFiZWw/OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcblx0bWF0Y2g/OiBzdHJpbmc7XG5cdHJldmVyc2U/OiBib29sZWFuO1xuXHRbeDogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbE9wdGlvbjxUPiB7XG5cdHNjaGVtYTogc3RyaW5nID0gJ3RleHQnO1xuXHR2YWx1ZT86IFQ7XG5cdG9yZGVyPzogbnVtYmVyO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdG1hdGNoPzogc3RyaW5nO1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0bWlubGVuZ3RoPzogbnVtYmVyO1xuXHRtYXhsZW5ndGg/OiBudW1iZXI7XG5cdHBhdHRlcm4/OiBzdHJpbmcgfCBSZWdFeHA7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IElDb250cm9sT3B0aW9uPFQ+KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdC8qXG5cdFx0Y29uc3QgbmFtZSA9IGAke29wdGlvbnMua2V5IHx8ICdDb250cm9sJ30gJHsrK1VOSVFVRV9JRH1gO1xuXHRcdHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IG5hbWU7XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgbmFtZTtcblx0XHR0aGlzLm9yZGVyID0gdGhpcy5vcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IHRoaXMub3JkZXI7XG5cdFx0dGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYSB8fCAndGV4dCc7XG5cdFx0dGhpcy50eXBlID0gdGhpcy50eXBlIHx8IHRoaXMuc2NoZW1hO1xuXHRcdCovXG5cdH1cblxufVxuIl19