/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class ValueAccessorBase {
    constructor() {
        this.changed = new Array();
        this.touched = new Array();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.innerValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.innerValue !== value) {
            this.innerValue = value;
            this.changed.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => f(value)));
        }
    }
    /**
     * @return {?}
     */
    touch() {
        this.touched.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => f()));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.innerValue = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.changed.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.touched.push(fn);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS5hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9jb250cm9sLXZhbHVlLmFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNLE9BQU8saUJBQWlCO0lBQTlCO1FBR1MsWUFBTyxHQUFHLElBQUksS0FBSyxFQUFzQixDQUFDO1FBQzFDLFlBQU8sR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO0lBNEIzQyxDQUFDOzs7O0lBMUJBLElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVE7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1NBQ3BDO0lBQ0YsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBUTtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXNCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Q7Ozs7OztJQS9CQSx1Q0FBc0I7Ozs7O0lBRXRCLG9DQUFrRDs7Ozs7SUFDbEQsb0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlQWNjZXNzb3JCYXNlPFQ+IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRwcml2YXRlIGlubmVyVmFsdWU6IFQ7XG5cblx0cHJpdmF0ZSBjaGFuZ2VkID0gbmV3IEFycmF5PCh2YWx1ZTogVCkgPT4gdm9pZD4oKTtcblx0cHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG5cblx0Z2V0IHZhbHVlKCk6IFQge1xuXHRcdHJldHVybiB0aGlzLmlubmVyVmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsdWU6IFQpIHtcblx0XHRpZiAodGhpcy5pbm5lclZhbHVlICE9PSB2YWx1ZSkge1xuXHRcdFx0dGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLmNoYW5nZWQuZm9yRWFjaChmID0+IGYodmFsdWUpKTtcblx0XHR9XG5cdH1cblxuXHR0b3VjaCgpIHtcblx0XHR0aGlzLnRvdWNoZWQuZm9yRWFjaChmID0+IGYoKSk7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBUKSB7XG5cdFx0dGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFQpID0+IHZvaWQpIHtcblx0XHR0aGlzLmNoYW5nZWQucHVzaChmbik7XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuXHRcdHRoaXMudG91Y2hlZC5wdXNoKGZuKTtcblx0fVxufVxuIl19