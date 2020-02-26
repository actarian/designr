import { ChangeDetectorRef, Pipe, WrappedValue } from '@angular/core';
import * as i0 from "@angular/core";
var CustomAsyncPipe = /** @class */ (function () {
    function CustomAsyncPipe(changeDetector) {
        this.changeDetector = changeDetector;
        this.subject = null;
        this.subscription = null;
        this.value = null;
        this.cachedValue = null;
    }
    CustomAsyncPipe.prototype.transform = function (subject) {
        return this.observableToValue(subject);
    };
    CustomAsyncPipe.prototype.observableToValue = function (subject) {
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
    CustomAsyncPipe.prototype.dispose = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    };
    CustomAsyncPipe.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    CustomAsyncPipe.prototype._observableToValue = function (subject) {
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
            return this.transform(subject);
        }
        if (this.value === this.cachedValue) {
            return this.cachedValue;
        }
        this.cachedValue = this.value;
        return WrappedValue.wrap(this.value); // value has changed
    };
    CustomAsyncPipe.ɵfac = function CustomAsyncPipe_Factory(t) { return new (t || CustomAsyncPipe)(i0.ɵɵinjectPipeChangeDetectorRef()); };
    CustomAsyncPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "customAsync", type: CustomAsyncPipe, pure: false });
    return CustomAsyncPipe;
}());
export { CustomAsyncPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomAsyncPipe, [{
        type: Pipe,
        args: [{
                name: 'customAsync',
                pure: false
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFzeW5jLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxJQUFJLEVBQWlCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHaEc7SUFXQyx5QkFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBNEIsSUFBSSxDQUFDO1FBQzdDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFJNUIsQ0FBQztJQUVMLG1DQUFTLEdBQVQsVUFBVSxPQUEyQztRQUNwRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sMkNBQWlCLEdBQXpCLFVBQTBCLE9BQTJDO1FBQXJFLGlCQXNCQztRQXJCQSxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7b0JBQ3JELDJDQUEyQztvQkFDM0MsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0JBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsQjtTQUNEO1FBQ0QsZ0RBQWdEO1FBQ2hELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1NBQ3RFO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMscUJBQXFCO0lBQy9DLENBQUM7SUFFTSxpQ0FBTyxHQUFkO1FBQ0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sNENBQWtCLEdBQTFCLFVBQTJCLE9BQTJDO1FBQXRFLGlCQXFCQztRQXBCQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVU7b0JBQ3JELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsb0JBQW9CO2dCQUN6RCxDQUFDLENBQUMsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQjtRQUNELElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQWMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDM0QsQ0FBQztrRkExRVcsZUFBZTt5RUFBZixlQUFlOzBCQVA1QjtDQW1GQyxBQWhGRCxJQWdGQztTQTVFWSxlQUFlO2tEQUFmLGVBQWU7Y0FKM0IsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsS0FBSzthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgV3JhcHBlZFZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb25MaWtlIH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2N1c3RvbUFzeW5jJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcblxuXHRwcml2YXRlIHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uTGlrZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHZhbHVlOiBhbnkgPSBudWxsO1xuXHRwcml2YXRlIGNhY2hlZFZhbHVlOiBhbnkgPSBudWxsO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgfCB1bmRlZmluZWQpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm9ic2VydmFibGVUb1ZhbHVlKHN1YmplY3QpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0OiBPYnNlcnZhYmxlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkKTogYW55IHtcblx0XHRpZiAoc3ViamVjdCAhPT0gdGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRpZiAodGhpcy5zdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN1YmplY3QpIHtcblx0XHRcdFx0dGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0N1c3RvbUFzeW5jUGlwZS5BJywgdmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyBtYXJrIHBpcGUgYXMgZGlydHlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlOyAvLyA/Pz9cblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdDdXN0b21Bc3luY1BpcGUuQicsIHRoaXMudmFsdWUpO1xuXHRcdGlmICh0aGlzLmNhY2hlZFZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRcdHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbHVlKTsgLy8gbm90aWZ5IHRoYXQgdmFsdWUgaGFzIGNoYW5nZWRcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkVmFsdWU7IC8vIHJldHVybiBjYWNoZWRWYWx1ZVxuXHR9XG5cblx0cHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gbnVsbDtcblx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5zdWJqZWN0ID0gbnVsbDtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuZGlzcG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBfb2JzZXJ2YWJsZVRvVmFsdWUoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XG5cdFx0aWYgKCF0aGlzLnN1YmplY3QpIHtcblx0XHRcdGlmIChzdWJqZWN0KSB7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJqZWN0LnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpOyAvLyB2YWx1ZSBoYXMgY2hhbmdlZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fVxuXHRcdGlmIChzdWJqZWN0ICE9PSB0aGlzLnN1YmplY3QpIHtcblx0XHRcdHRoaXMuZGlzcG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXMudHJhbnNmb3JtKHN1YmplY3QgYXMgYW55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMudmFsdWUgPT09IHRoaXMuY2FjaGVkVmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRyZXR1cm4gV3JhcHBlZFZhbHVlLndyYXAodGhpcy52YWx1ZSk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXG5cdH1cblxufVxuIl19