/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.subscription = this.subject.subscribe(function (value) {
                    // console.log('CustomAsyncPipe.A', value);
                    _this.value = value;
                    _this.changeDetector.markForCheck(); // mark pipe as dirty
                });
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
                this.subscription = this.subject.subscribe(function (value) {
                    _this.value = value;
                    _this.changeDetector.markForCheck(); // value has changed
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFzeW5jLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsSUFBSSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEc7SUFXQyx5QkFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBNEIsSUFBSSxDQUFDO1FBQzdDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFJNUIsQ0FBQzs7Ozs7SUFFTCxtQ0FBUzs7OztJQUFULFVBQVUsT0FBMkM7UUFDcEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8sMkNBQWlCOzs7OztJQUF6QixVQUEwQixPQUEyQztRQUFyRSxpQkFzQkM7UUFyQkEsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFVO29CQUNyRCwyQ0FBMkM7b0JBQzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMscUJBQXFCO2dCQUMxRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbEI7U0FDRDtRQUNELGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztTQUN0RTtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLHFCQUFxQjtJQUMvQyxDQUFDOzs7O0lBRU0saUNBQU87OztJQUFkO1FBQ0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLDRDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsT0FBMkM7UUFBdEUsaUJBcUJDO1FBcEJBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksT0FBTyxFQUFFO2dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBVTtvQkFDckQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0lBQzNELENBQUM7O2dCQTlFRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLGFBQWE7b0JBQ25CLElBQUksRUFBRSxLQUFLO2lCQUNYOzs7O2dCQU5RLGlCQUFpQjs7SUFtRjFCLHNCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0E1RVksZUFBZTs7Ozs7O0lBRTNCLGtDQUErQzs7Ozs7SUFDL0MsdUNBQXFEOzs7OztJQUNyRCxnQ0FBMEI7Ozs7O0lBQzFCLHNDQUFnQzs7Ozs7SUFHL0IseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgV3JhcHBlZFZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb25MaWtlIH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2N1c3RvbUFzeW5jJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcblxuXHRwcml2YXRlIHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHZhbHVlOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGNhY2hlZFZhbHVlOiBhbnkgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgfCB1bmRlZmluZWQpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm9ic2VydmFibGVUb1ZhbHVlKHN1YmplY3QpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0OiBPYnNlcnZhYmxlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkKTogYW55IHtcblx0XHRpZiAoc3ViamVjdCAhPT0gdGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRpZiAodGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN1YmplY3QpIHtcblx0XHRcdFx0dGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0N1c3RvbUFzeW5jUGlwZS5BJywgdmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyBtYXJrIHBpcGUgYXMgZGlydHlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlOyAvLyA/Pz9cblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDdXN0b21Bc3luY1BpcGUuQicsIHRoaXMudmFsdWUpO1xuXHRcdGlmICh0aGlzLmNhY2hlZFZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRcdHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbHVlKTsgLy8gbm90aWZ5IHRoYXQgdmFsdWUgaGFzIGNoYW5nZWRcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkVmFsdWU7IC8vIHJldHVybiBjYWNoZWRWYWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5zdWJqZWN0ID0gbnVsbDtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuZGlzcG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBfb2JzZXJ2YWJsZVRvVmFsdWUoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLnN1YmplY3QpIHtcblx0XHRcdGlmIChzdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJqZWN0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyB2YWx1ZSBoYXMgY2hhbmdlZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChzdWJqZWN0ICE9PSB0aGlzLnN1YmplY3QpIHtcblx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNmb3JtKHN1YmplY3QgYXMgYW55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHRoaXMuY2FjaGVkVmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRyZXR1cm4gV3JhcHBlZFZhbHVlLndyYXAodGhpcy52YWx1ZSk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXG5cdH1cblxufVxuIl19