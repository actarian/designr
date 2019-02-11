import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, WrappedValue } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';

@Pipe({
	name: 'customAsync',
	pure: false
})
export class CustomAsyncPipe implements OnDestroy, PipeTransform {

	private subject: Observable<any> | null = null;
	private subscription: SubscriptionLike | null = null;
	private value: any = null;
	private cachedValue: any = null;

	constructor(
		private changeDetector: ChangeDetectorRef
	) { }

	transform(subject: Observable<any> | null | undefined): any {
		return this.observableToValue(subject);
	}

	private observableToValue(subject: Observable<any> | null | undefined): any {
		if (subject !== this.subject) {
			if (this.subject) {
				this.dispose();
			}
			if (subject) {
				this.subject = subject;
				this.subscription = this.subject.subscribe((value: any) => {
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

	public dispose(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
		this.value = null;
		this.cachedValue = null;
		this.subscription = null;
		this.subject = null;
	}

	ngOnDestroy(): void {
		this.dispose();
	}

	private _observableToValue(subject: Observable<any> | null | undefined): any {
		if (!this.subject) {
			if (subject) {
				this.subject = subject;
				this.subscription = this.subject.subscribe((value: any) => {
					this.value = value;
					this.changeDetector.markForCheck(); // value has changed
				});
			}
			this.cachedValue = this.value;
			return this.value;
		}
		if (subject !== this.subject) {
			this.dispose();
			return this.transform(subject as any);
		}
		if (this.value === this.cachedValue) {
			return this.cachedValue;
		}
		this.cachedValue = this.value;
		return WrappedValue.wrap(this.value); // value has changed
	}

}
