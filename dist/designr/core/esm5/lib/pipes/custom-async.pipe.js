/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe, WrappedValue } from '@angular/core';
var CustomAsyncPipe = /** @class */ (function () {
    function CustomAsyncPipe(changeDetector) {
        this.changeDetector = changeDetector;
        this.subject = null;
        this.subscription = null;
        this.value = null;
        this.cachedValue = null;
    }
    /**
     * @param {?} subject
     * @return {?}
     */
    CustomAsyncPipe.prototype.transform = /**
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        return this.observableToValue(subject);
    };
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    CustomAsyncPipe.prototype.observableToValue = /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        var _this = this;
        if (subject !== this.subject) {
            if (this.subject) {
                this.dispose();
            }
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    // console.log('CustomAsyncPipe.A', value);
                    _this.value = value;
                    _this.changeDetector.markForCheck(); // mark pipe as dirty
                }));
                this.cachedValue = this.value; // ???
                return this.value;
            }
        }
        // console.log('CustomAsyncPipe.B', this.value);
        if (this.cachedValue !== this.value) {
            this.cachedValue = this.value;
            return WrappedValue.wrap(this.value); // notify that value has changed
        }
        return this.cachedValue; // return cachedValue
    };
    /**
     * @return {?}
     */
    CustomAsyncPipe.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    };
    /**
     * @return {?}
     */
    CustomAsyncPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dispose();
    };
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    CustomAsyncPipe.prototype._observableToValue = /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        var _this = this;
        if (!this.subject) {
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    _this.value = value;
                    _this.changeDetector.markForCheck(); // value has changed
                }));
            }
            this.cachedValue = this.value;
            return this.value;
        }
        if (subject !== this.subject) {
            this.dispose();
            return this.transform((/** @type {?} */ (subject)));
        }
        if (this.value === this.cachedValue) {
            return this.cachedValue;
        }
        this.cachedValue = this.value;
        return WrappedValue.wrap(this.value); // value has changed
    };
    CustomAsyncPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'customAsync',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    CustomAsyncPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return CustomAsyncPipe;
}());
export { CustomAsyncPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAsyncPipe.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    CustomAsyncPipe.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    CustomAsyncPipe.prototype.value;
    /**
     * @type {?}
     * @private
     */
    CustomAsyncPipe.prototype.cachedValue;
    /**
     * @type {?}
     * @private
     */
    CustomAsyncPipe.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFzeW5jLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsSUFBSSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEc7SUFXQyx5QkFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBNEIsSUFBSSxDQUFDO1FBQzdDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFJNUIsQ0FBQzs7Ozs7SUFFTCxtQ0FBUzs7OztJQUFULFVBQVUsT0FBMkM7UUFDcEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sMkNBQWlCOzs7OztJQUF6QixVQUEwQixPQUEyQztRQUFyRSxpQkFzQkM7UUFyQkEsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsS0FBVTtvQkFDckQsMkNBQTJDO29CQUMzQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDMUQsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1NBQ0Q7UUFDRCxnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7U0FDdEU7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUI7SUFDL0MsQ0FBQzs7OztJQUVNLGlDQUFPOzs7SUFBZDtRQUNDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyw0Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLE9BQTJDO1FBQXRFLGlCQXFCQztRQXBCQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxLQUFVO29CQUNyRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDekQsQ0FBQyxFQUFDLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEI7UUFDRCxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDM0QsQ0FBQzs7Z0JBOUVELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsYUFBYTtvQkFDbkIsSUFBSSxFQUFFLEtBQUs7aUJBQ1g7Ozs7Z0JBTlEsaUJBQWlCOztJQW1GMUIsc0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQTVFWSxlQUFlOzs7Ozs7SUFFM0Isa0NBQStDOzs7OztJQUMvQyx1Q0FBcUQ7Ozs7O0lBQ3JELGdDQUEwQjs7Ozs7SUFDMUIsc0NBQWdDOzs7OztJQUcvQix5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBXcmFwcGVkVmFsdWUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uTGlrZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdjdXN0b21Bc3luYycsXHJcblx0cHVyZTogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbUFzeW5jUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdHByaXZhdGUgc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCA9IG51bGw7XHJcblx0cHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbkxpa2UgfCBudWxsID0gbnVsbDtcclxuXHRwcml2YXRlIHZhbHVlOiBhbnkgPSBudWxsO1xyXG5cdHByaXZhdGUgY2FjaGVkVmFsdWU6IGFueSA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5vYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb2JzZXJ2YWJsZVRvVmFsdWUoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XHJcblx0XHRpZiAoc3ViamVjdCAhPT0gdGhpcy5zdWJqZWN0KSB7XHJcblx0XHRcdGlmICh0aGlzLnN1YmplY3QpIHtcclxuXHRcdFx0XHR0aGlzLmRpc3Bvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3ViamVjdCkge1xyXG5cdFx0XHRcdHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQ3VzdG9tQXN5bmNQaXBlLkEnLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyBtYXJrIHBpcGUgYXMgZGlydHlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTsgLy8gPz8/XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDdXN0b21Bc3luY1BpcGUuQicsIHRoaXMudmFsdWUpO1xyXG5cdFx0aWYgKHRoaXMuY2FjaGVkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcclxuXHRcdFx0dGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbHVlKTsgLy8gbm90aWZ5IHRoYXQgdmFsdWUgaGFzIGNoYW5nZWRcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNhY2hlZFZhbHVlOyAvLyByZXR1cm4gY2FjaGVkVmFsdWVcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnZhbHVlID0gbnVsbDtcclxuXHRcdHRoaXMuY2FjaGVkVmFsdWUgPSBudWxsO1xyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5zdWJqZWN0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5kaXNwb3NlKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9vYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0OiBPYnNlcnZhYmxlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkKTogYW55IHtcclxuXHRcdGlmICghdGhpcy5zdWJqZWN0KSB7XHJcblx0XHRcdGlmIChzdWJqZWN0KSB7XHJcblx0XHRcdFx0dGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN1YmplY3QgIT09IHRoaXMuc3ViamVjdCkge1xyXG5cdFx0XHR0aGlzLmRpc3Bvc2UoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNmb3JtKHN1YmplY3QgYXMgYW55KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnZhbHVlID09PSB0aGlzLmNhY2hlZFZhbHVlKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRyZXR1cm4gV3JhcHBlZFZhbHVlLndyYXAodGhpcy52YWx1ZSk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0fVxyXG5cclxufVxyXG4iXX0=