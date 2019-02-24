import { Observable } from 'rxjs';

export function delayResponse<T>(response$: Observable<T>, ms: number): Observable<T> {
	return new Observable<T>(observer => {
		let complete = false;
		let next = false;
		const subscription = response$.subscribe(
			value => {
				next = true;
				setTimeout(() => {
					observer.next(value);
					if (complete) {
						observer.complete();
					}
				}, ms);
			},
			error => {
				setTimeout(() => {
					observer.error(error);
				}, ms)
			},
			() => {
				complete = true;
				if (!next) {
					observer.complete();
				}
			}
		);
		return () => {
			return subscription.unsubscribe();
		};
	});
}
