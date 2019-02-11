/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe, WrappedValue } from '@angular/core';
export class CustomAsyncPipe {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
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
    transform(subject) {
        return this.observableToValue(subject);
    }
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    observableToValue(subject) {
        if (subject !== this.subject) {
            if (this.subject) {
                this.dispose();
            }
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((value) => {
                    // console.log('CustomAsyncPipe.A', value);
                    this.value = value;
                    this.changeDetector.markForCheck(); // mark pipe as dirty
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
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dispose();
    }
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
    _observableToValue(subject) {
        if (!this.subject) {
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((value) => {
                    this.value = value;
                    this.changeDetector.markForCheck(); // value has changed
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
    }
}
CustomAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'customAsync',
                pure: false
            },] }
];
/** @nocollapse */
CustomAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFzeW5jLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsSUFBSSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPaEcsTUFBTSxPQUFPLGVBQWU7Ozs7SUFPM0IsWUFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBNEIsSUFBSSxDQUFDO1FBQzdDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFJNUIsQ0FBQzs7Ozs7SUFFTCxTQUFTLENBQUMsT0FBMkM7UUFDcEQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsT0FBMkM7UUFDcEUsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtvQkFDekQsMkNBQTJDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1NBQ0Q7UUFDRCxnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7U0FDdEU7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUI7SUFDL0MsQ0FBQzs7OztJQUVNLE9BQU87UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE9BQTJDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksT0FBTyxFQUFFO2dCQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsb0JBQW9CO2dCQUN6RCxDQUFDLENBQUMsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtJQUMzRCxDQUFDOzs7WUE5RUQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsS0FBSzthQUNYOzs7O1lBTlEsaUJBQWlCOzs7Ozs7O0lBU3pCLGtDQUErQzs7Ozs7SUFDL0MsdUNBQXFEOzs7OztJQUNyRCxnQ0FBMEI7Ozs7O0lBQzFCLHNDQUFnQzs7Ozs7SUFHL0IseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgV3JhcHBlZFZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb25MaWtlIH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2N1c3RvbUFzeW5jJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcblxuXHRwcml2YXRlIHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHZhbHVlOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGNhY2hlZFZhbHVlOiBhbnkgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgfCB1bmRlZmluZWQpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm9ic2VydmFibGVUb1ZhbHVlKHN1YmplY3QpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0OiBPYnNlcnZhYmxlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkKTogYW55IHtcblx0XHRpZiAoc3ViamVjdCAhPT0gdGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRpZiAodGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN1YmplY3QpIHtcblx0XHRcdFx0dGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0N1c3RvbUFzeW5jUGlwZS5BJywgdmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyBtYXJrIHBpcGUgYXMgZGlydHlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlOyAvLyA/Pz9cblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDdXN0b21Bc3luY1BpcGUuQicsIHRoaXMudmFsdWUpO1xuXHRcdGlmICh0aGlzLmNhY2hlZFZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRcdHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbHVlKTsgLy8gbm90aWZ5IHRoYXQgdmFsdWUgaGFzIGNoYW5nZWRcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkVmFsdWU7IC8vIHJldHVybiBjYWNoZWRWYWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5zdWJqZWN0ID0gbnVsbDtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuZGlzcG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBfb2JzZXJ2YWJsZVRvVmFsdWUoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLnN1YmplY3QpIHtcblx0XHRcdGlmIChzdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJqZWN0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyB2YWx1ZSBoYXMgY2hhbmdlZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChzdWJqZWN0ICE9PSB0aGlzLnN1YmplY3QpIHtcblx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNmb3JtKHN1YmplY3QgYXMgYW55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHRoaXMuY2FjaGVkVmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRyZXR1cm4gV3JhcHBlZFZhbHVlLndyYXAodGhpcy52YWx1ZSk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXG5cdH1cblxufVxuIl19