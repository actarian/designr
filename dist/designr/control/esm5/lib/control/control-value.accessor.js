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
                this.changed.forEach((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f(value); }));
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
        this.touched.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f(); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLXZhbHVlLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7OztJQUFBO1FBR1MsWUFBTyxHQUFHLElBQUksS0FBSyxFQUFzQixDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO0lBNEIzQyxDQUFDO0lBMUJBLHNCQUFJLG9DQUFLOzs7O1FBQVQ7WUFDQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQVE7WUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBUixDQUFRLEVBQUMsQ0FBQzthQUNwQztRQUNGLENBQUM7OztPQVBBOzs7O0lBU0QsaUNBQUs7OztJQUFMO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUUsRUFBSCxDQUFHLEVBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxLQUFRO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXNCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7Ozs7OztJQS9CQSx1Q0FBc0I7Ozs7O0lBRXRCLG9DQUFrRDs7Ozs7SUFDbEQsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlQWNjZXNzb3JCYXNlPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRwcml2YXRlIGlubmVyVmFsdWU6IFQ7XG5cblx0cHJpdmF0ZSBjaGFuZ2VkID0gbmV3IEFycmF5PCh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG5cblx0Z2V0IHZhbHVlKCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmlubmVyVmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWU6IFQpIHtcblx0XHRpZiAodGhpcy5pbm5lclZhbHVlICE9PSB2YWx1ZSkge1xuXHRcdFx0dGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLmNoYW5nZWQuZm9yRWFjaChmID0+IGYodmFsdWUpKTtcblx0XHR9XG5cdH1cblxuXHR0b3VjaCgpIHtcblx0XHR0aGlzLnRvdWNoZWQuZm9yRWFjaChmID0+IGYoKSk7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBUKSB7XG5cdFx0dGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFQpID0+IHZvaWQpIHtcblx0XHR0aGlzLmNoYW5nZWQucHVzaChmbik7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMudG91Y2hlZC5wdXNoKGZuKTtcblx0fVxufVxuIl19