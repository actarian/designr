
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	template: ''
})
export class DisposableComponent implements OnDestroy {

	protected unsubscribe: any = new Subject();

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
		// console.log('DisposableComponent.ngOnDestroy', this);
	}

}
