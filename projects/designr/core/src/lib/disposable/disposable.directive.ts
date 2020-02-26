
import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
	selector: '[disposable-directive]'
})
export class DisposableDirective implements OnDestroy {

	protected unsubscribe: any = new Subject();

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
		// console.log('DisposableDirective.ngOnDestroy', this);
	}

}
