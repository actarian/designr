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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb250cm9sLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2wvY29udHJvbC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFBSSxTQUFTLEdBQVcsQ0FBQzs7Ozs7QUFFekIsb0NBYUM7OztJQVpBLGdDQUFlOztJQUNmLCtCQUFVOztJQUNWLCtCQUFlOztJQUNmLDZCQUFhOztJQUNiLCtCQUFlOztJQUNmLHFDQUFxQjs7SUFDckIscUNBQXFCOztJQUNyQixrQ0FBbUI7O0lBQ25CLGtDQUFtQjs7SUFDbkIsK0JBQWU7O0lBQ2YsaUNBQWtCOzs7Ozs7QUFJbkIsTUFBTSxPQUFPLGFBQWE7Ozs7SUFnQnpCLFlBQVksT0FBMkI7UUFmdkMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQWdCdkIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtRQUNEOzs7Ozs7O1VBT0U7SUFDSCxDQUFDO0NBRUQ7OztJQTdCQSwrQkFBd0I7O0lBQ3hCLDhCQUFVOztJQUNWLDhCQUFlOztJQUNmLDRCQUFhOztJQUNiLDhCQUFlOztJQUNmLG9DQUFxQjs7SUFDckIsb0NBQXFCOztJQUNyQixpQ0FBbUI7O0lBQ25CLGlDQUFtQjs7SUFDbkIsOEJBQWU7O0lBQ2YsZ0NBQWtCOztJQUNsQixrQ0FBbUI7O0lBQ25CLGtDQUFtQjs7SUFDbkIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFVOSVFVRV9JRDogbnVtYmVyID0gMDtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbE9wdGlvbjxUPiB7XG5cdHNjaGVtYTogc3RyaW5nO1xuXHR2YWx1ZT86IFQ7XG5cdG9yZGVyPzogbnVtYmVyO1xuXHRrZXk/OiBzdHJpbmc7XG5cdGxhYmVsPzogc3RyaW5nO1xuXHRwbGFjZWhvbGRlcj86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGRpc2FibGVkPzogYm9vbGVhbjtcblx0cmVxdWlyZWQ/OiBib29sZWFuO1xuXHRtYXRjaD86IHN0cmluZztcblx0cmV2ZXJzZT86IGJvb2xlYW47XG5cdFt4OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sT3B0aW9uPFQ+IHtcblx0c2NoZW1hOiBzdHJpbmcgPSAndGV4dCc7XG5cdHZhbHVlPzogVDtcblx0b3JkZXI/OiBudW1iZXI7XG5cdGtleT86IHN0cmluZztcblx0bGFiZWw/OiBzdHJpbmc7XG5cdHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRyZXF1aXJlZD86IGJvb2xlYW47XG5cdG1hdGNoPzogc3RyaW5nO1xuXHRyZXZlcnNlPzogYm9vbGVhbjtcblx0bWlubGVuZ3RoPzogbnVtYmVyO1xuXHRtYXhsZW5ndGg/OiBudW1iZXI7XG5cdHBhdHRlcm4/OiBzdHJpbmcgfCBSZWdFeHA7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IElDb250cm9sT3B0aW9uPFQ+KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdC8qXG5cdFx0Y29uc3QgbmFtZSA9IGAke29wdGlvbnMua2V5IHx8ICdDb250cm9sJ30gJHsrK1VOSVFVRV9JRH1gO1xuXHRcdHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IG5hbWU7XG5cdFx0dGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgbmFtZTtcblx0XHR0aGlzLm9yZGVyID0gdGhpcy5vcmRlciA9PT0gdW5kZWZpbmVkID8gMSA6IHRoaXMub3JkZXI7XG5cdFx0dGhpcy5zY2hlbWEgPSB0aGlzLnNjaGVtYSB8fCAndGV4dCc7XG5cdFx0dGhpcy50eXBlID0gdGhpcy50eXBlIHx8IHRoaXMuc2NoZW1hO1xuXHRcdCovXG5cdH1cblxufVxuIl19