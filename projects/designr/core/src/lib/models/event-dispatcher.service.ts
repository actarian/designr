import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class EventEntity {
	type: string | number;
	data?: any;
}

@Injectable({
	providedIn: 'root'
})
export class EventDispatcherService {

	private emitter: EventEmitter<EventEntity>;

	constructor() {
		this.emitter = new EventEmitter<EventEntity>();
	}

	emit(event: EventEntity): void {
		return this.emitter.emit(event);
	}

	observe(): Observable<EventEntity> {
		return this.emitter.pipe(
			tap((event: EventEntity) => console.log('EventDispatcherService', event))
		);
	}

}
