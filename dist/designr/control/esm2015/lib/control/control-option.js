/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let UNIQUE_ID = 0;
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
export class ControlOption {
    /**
     * @param {?=} options
     */
    constructor(options) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFBSSxTQUFTLEdBQVcsQ0FBQzs7Ozs7QUFFekIsb0NBWUM7OztJQVhBLGdDQUFlOztJQUNmLCtCQUFVOztJQUNWLCtCQUFlOztJQUNmLDZCQUFhOztJQUNiLCtCQUFlOztJQUNmLHFDQUFxQjs7SUFDckIsa0NBQW1COztJQUNuQixrQ0FBbUI7O0lBQ25CLCtCQUFlOztJQUNmLGlDQUFrQjs7Ozs7O0FBSW5CLE1BQU0sT0FBTyxhQUFhOzs7O0lBZXpCLFlBQVksT0FBMkI7UUFkdkMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQWV2QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQ0Q7Ozs7Ozs7VUFPRTtJQUNILENBQUM7Q0FFRDs7O0lBNUJBLCtCQUF3Qjs7SUFDeEIsOEJBQVU7O0lBQ1YsOEJBQWU7O0lBQ2YsNEJBQWE7O0lBQ2IsOEJBQWU7O0lBQ2Ysb0NBQXFCOztJQUNyQixpQ0FBbUI7O0lBQ25CLGlDQUFtQjs7SUFDbkIsOEJBQWU7O0lBQ2YsZ0NBQWtCOztJQUNsQixrQ0FBbUI7O0lBQ25CLGtDQUFtQjs7SUFDbkIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFVOSVFVRV9JRDogbnVtYmVyID0gMDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbE9wdGlvbjxUPiB7XG5cdHNjaGVtYTogc3RyaW5nO1xuXHR2YWx1ZT86IFQ7XG5cdG9yZGVyPzogbnVtYmVyO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdG1hdGNoPzogc3RyaW5nO1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0W3g6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xPcHRpb248VD4ge1xuXHRzY2hlbWE6IHN0cmluZyA9ICd0ZXh0Jztcblx0dmFsdWU/OiBUO1xuXHRvcmRlcj86IG51bWJlcjtcblx0a2V5Pzogc3RyaW5nO1xuXHRsYWJlbD86IHN0cmluZztcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdGRpc2FibGVkPzogYm9vbGVhbjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRtYXRjaD86IHN0cmluZztcblx0cmV2ZXJzZT86IGJvb2xlYW47XG5cdG1pbmxlbmd0aD86IG51bWJlcjtcblx0bWF4bGVuZ3RoPzogbnVtYmVyO1xuXHRwYXR0ZXJuPzogc3RyaW5nIHwgUmVnRXhwO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBJQ29udHJvbE9wdGlvbjxUPikge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHQvKlxuXHRcdGNvbnN0IG5hbWUgPSBgJHtvcHRpb25zLmtleSB8fCAnQ29udHJvbCd9ICR7KytVTklRVUVfSUR9YDtcblx0XHR0aGlzLmxhYmVsID0gdGhpcy5sYWJlbCB8fCBuYW1lO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IG5hbWU7XG5cdFx0dGhpcy5vcmRlciA9IHRoaXMub3JkZXIgPT09IHVuZGVmaW5lZCA/IDEgOiB0aGlzLm9yZGVyO1xuXHRcdHRoaXMuc2NoZW1hID0gdGhpcy5zY2hlbWEgfHwgJ3RleHQnO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMudHlwZSB8fCB0aGlzLnNjaGVtYTtcblx0XHQqL1xuXHR9XG5cbn1cbiJdfQ==