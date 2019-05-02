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
    IControlOption.prototype.description;
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
    ControlOption.prototype.description;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFBSSxTQUFTLEdBQVcsQ0FBQzs7Ozs7QUFFekIsb0NBYUM7OztJQVpBLGdDQUFlOztJQUNmLCtCQUFVOztJQUNWLCtCQUFlOztJQUNmLDZCQUFhOztJQUNiLCtCQUFlOztJQUNmLHFDQUFxQjs7SUFDckIscUNBQXFCOztJQUNyQixrQ0FBbUI7O0lBQ25CLGtDQUFtQjs7SUFDbkIsK0JBQWU7O0lBQ2YsaUNBQWtCOzs7Ozs7QUFJbkI7Ozs7SUFnQkMsdUJBQVksT0FBMkI7UUFmdkMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQWdCdkIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNEOzs7Ozs7O1VBT0U7SUFDSCxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDOzs7Ozs7O0lBN0JBLCtCQUF3Qjs7SUFDeEIsOEJBQVU7O0lBQ1YsOEJBQWU7O0lBQ2YsNEJBQWE7O0lBQ2IsOEJBQWU7O0lBQ2Ysb0NBQXFCOztJQUNyQixvQ0FBcUI7O0lBQ3JCLGlDQUFtQjs7SUFDbkIsaUNBQW1COztJQUNuQiw4QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLGtDQUFtQjs7SUFDbkIsa0NBQW1COztJQUNuQixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVU5JUVVFX0lEOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sT3B0aW9uPFQ+IHtcblx0c2NoZW1hOiBzdHJpbmc7XG5cdHZhbHVlPzogVDtcblx0b3JkZXI/OiBudW1iZXI7XG5cdGtleT86IHN0cmluZztcblx0bGFiZWw/OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdG1hdGNoPzogc3RyaW5nO1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0W3g6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xPcHRpb248VD4ge1xuXHRzY2hlbWE6IHN0cmluZyA9ICd0ZXh0Jztcblx0dmFsdWU/OiBUO1xuXHRvcmRlcj86IG51bWJlcjtcblx0a2V5Pzogc3RyaW5nO1xuXHRsYWJlbD86IHN0cmluZztcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdHJlcXVpcmVkPzogYm9vbGVhbjtcblx0bWF0Y2g/OiBzdHJpbmc7XG5cdHJldmVyc2U/OiBib29sZWFuO1xuXHRtaW5sZW5ndGg/OiBudW1iZXI7XG5cdG1heGxlbmd0aD86IG51bWJlcjtcblx0cGF0dGVybj86IHN0cmluZyB8IFJlZ0V4cDtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogSUNvbnRyb2xPcHRpb248VD4pIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Lypcblx0XHRjb25zdCBuYW1lID0gYCR7b3B0aW9ucy5rZXkgfHwgJ0NvbnRyb2wnfSAkeysrVU5JUVVFX0lEfWA7XG5cdFx0dGhpcy5sYWJlbCA9IHRoaXMubGFiZWwgfHwgbmFtZTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCBuYW1lO1xuXHRcdHRoaXMub3JkZXIgPSB0aGlzLm9yZGVyID09PSB1bmRlZmluZWQgPyAxIDogdGhpcy5vcmRlcjtcblx0XHR0aGlzLnNjaGVtYSA9IHRoaXMuc2NoZW1hIHx8ICd0ZXh0Jztcblx0XHR0aGlzLnR5cGUgPSB0aGlzLnR5cGUgfHwgdGhpcy5zY2hlbWE7XG5cdFx0Ki9cblx0fVxuXG59XG4iXX0=