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
ValueAccessorBase = /** @class */ (function () {
    function ValueAccessorBase() {
        this.changed = new Array();
        this.touched = new Array();
    }
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.changed.forEach(function (f) { return f(value); });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ValueAccessorBase.prototype.touch = /**
     * @return {?}
     */
    function () {
        this.touched.forEach(function (f) { return f(); });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ValueAccessorBase.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.changed.push(fn);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.touched.push(fn);
    };
    return ValueAccessorBase;
}());
/**
 * @template T
 */
export { ValueAccessorBase };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ValueAccessorBase.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    ValueAccessorBase.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    ValueAccessorBase.prototype.touched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLXZhbHVlLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7OztJQUFBO1FBR1MsWUFBTyxHQUFHLElBQUksS0FBSyxFQUFzQixDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO0lBNEIzQyxDQUFDO0lBMUJBLHNCQUFJLG9DQUFLOzs7O1FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQVE7WUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFSLENBQVEsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0YsQ0FBQzs7O09BUEE7Ozs7SUFTRCxpQ0FBSzs7O0lBQUw7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQVE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBc0I7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDOzs7Ozs7Ozs7O0lBL0JBLHVDQUFzQjs7Ozs7SUFFdEIsb0NBQWtEOzs7OztJQUNsRCxvQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgVmFsdWVBY2Nlc3NvckJhc2U8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdHByaXZhdGUgaW5uZXJWYWx1ZTogVDtcblxuXHRwcml2YXRlIGNoYW5nZWQgPSBuZXcgQXJyYXk8KHZhbHVlOiBUKSA9PiB2b2lkPigpO1xuXHRwcml2YXRlIHRvdWNoZWQgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcblxuXHRnZXQgdmFsdWUoKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXJWYWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWx1ZTogVCkge1xuXHRcdGlmICh0aGlzLmlubmVyVmFsdWUgIT09IHZhbHVlKSB7XG5cdFx0XHR0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcblx0XHRcdHRoaXMuY2hhbmdlZC5mb3JFYWNoKGYgPT4gZih2YWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdHRvdWNoKCkge1xuXHRcdHRoaXMudG91Y2hlZC5mb3JFYWNoKGYgPT4gZigpKTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IFQpIHtcblx0XHR0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogVCkgPT4gdm9pZCkge1xuXHRcdHRoaXMuY2hhbmdlZC5wdXNoKGZuKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG5cdFx0dGhpcy50b3VjaGVkLnB1c2goZm4pO1xuXHR9XG59XG4iXX0=