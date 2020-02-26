import { ChangeDetectorRef, Pipe, WrappedValue } from '@angular/core';
import * as i0 from "@angular/core";
export class CustomAsyncPipe {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.subject = null;
        this.subscription = null;
        this.value = null;
        this.cachedValue = null;
    }
    transform(subject) {
        return this.observableToValue(subject);
    }
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
    dispose() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    }
    ngOnDestroy() {
        this.dispose();
    }
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
            return this.transform(subject);
        }
        if (this.value === this.cachedValue) {
            return this.cachedValue;
        }
        this.cachedValue = this.value;
        return WrappedValue.wrap(this.value); // value has changed
    }
}
CustomAsyncPipe.ɵfac = function CustomAsyncPipe_Factory(t) { return new (t || CustomAsyncPipe)(i0.ɵɵinjectPipeChangeDetectorRef()); };
CustomAsyncPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "customAsync", type: CustomAsyncPipe, pure: false });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomAsyncPipe, [{
        type: Pipe,
        args: [{
                name: 'customAsync',
                pure: false
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWFzeW5jLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxJQUFJLEVBQWlCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPaEcsTUFBTSxPQUFPLGVBQWU7SUFPM0IsWUFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObEMsWUFBTyxHQUEyQixJQUFJLENBQUM7UUFDdkMsaUJBQVksR0FBNEIsSUFBSSxDQUFDO1FBQzdDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxJQUFJLENBQUM7SUFJNUIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxPQUEyQztRQUNwRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8saUJBQWlCLENBQUMsT0FBMkM7UUFDcEUsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtvQkFDekQsMkNBQTJDO29CQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFDckMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCO1NBQ0Q7UUFDRCxnREFBZ0Q7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7U0FDdEU7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUI7SUFDL0MsQ0FBQztJQUVNLE9BQU87UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUEyQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQjtnQkFDekQsQ0FBQyxDQUFDLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEI7UUFDRCxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFjLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0lBQzNELENBQUM7OzhFQTFFVyxlQUFlO3FFQUFmLGVBQWU7a0RBQWYsZUFBZTtjQUozQixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxLQUFLO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBXcmFwcGVkVmFsdWUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbkxpa2UgfSBmcm9tICdyeGpzJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnY3VzdG9tQXN5bmMnLFxuXHRwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21Bc3luY1BpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25MaWtlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgdmFsdWU6IGFueSA9IG51bGw7XG5cdHByaXZhdGUgY2FjaGVkVmFsdWU6IGFueSA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2YWJsZVRvVmFsdWUoc3ViamVjdCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmFibGVUb1ZhbHVlKHN1YmplY3Q6IE9ic2VydmFibGU8YW55PiB8IG51bGwgfCB1bmRlZmluZWQpOiBhbnkge1xuXHRcdGlmIChzdWJqZWN0ICE9PSB0aGlzLnN1YmplY3QpIHtcblx0XHRcdGlmICh0aGlzLnN1YmplY3QpIHtcblx0XHRcdFx0dGhpcy5kaXNwb3NlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3ViamVjdCkge1xuXHRcdFx0XHR0aGlzLnN1YmplY3QgPSBzdWJqZWN0O1xuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc3ViamVjdC5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQ3VzdG9tQXN5bmNQaXBlLkEnLCB2YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7IC8vIG1hcmsgcGlwZSBhcyBkaXJ0eVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWU7IC8vID8/P1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ0N1c3RvbUFzeW5jUGlwZS5CJywgdGhpcy52YWx1ZSk7XG5cdFx0aWYgKHRoaXMuY2FjaGVkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcblx0XHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0cmV0dXJuIFdyYXBwZWRWYWx1ZS53cmFwKHRoaXMudmFsdWUpOyAvLyBub3RpZnkgdGhhdCB2YWx1ZSBoYXMgY2hhbmdlZFxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5jYWNoZWRWYWx1ZTsgLy8gcmV0dXJuIGNhY2hlZFZhbHVlXG5cdH1cblxuXHRwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fVxuXHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuY2FjaGVkVmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID0gbnVsbDtcblx0XHR0aGlzLnN1YmplY3QgPSBudWxsO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5kaXNwb3NlKCk7XG5cdH1cblxuXHRwcml2YXRlIF9vYnNlcnZhYmxlVG9WYWx1ZShzdWJqZWN0OiBPYnNlcnZhYmxlPGFueT4gfCBudWxsIHwgdW5kZWZpbmVkKTogYW55IHtcblx0XHRpZiAoIXRoaXMuc3ViamVjdCkge1xuXHRcdFx0aWYgKHN1YmplY3QpIHtcblx0XHRcdFx0dGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnN1YmplY3Quc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7IC8vIHZhbHVlIGhhcyBjaGFuZ2VkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYWNoZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHN1YmplY3QgIT09IHRoaXMuc3ViamVjdCkge1xuXHRcdFx0dGhpcy5kaXNwb3NlKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy50cmFuc2Zvcm0oc3ViamVjdCBhcyBhbnkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy5jYWNoZWRWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGVkVmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMuY2FjaGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbHVlKTsgLy8gdmFsdWUgaGFzIGNoYW5nZWRcblx0fVxuXG59XG4iXX0=