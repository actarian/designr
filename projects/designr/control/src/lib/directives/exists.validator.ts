import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { isObservable, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';

const DEBOUNCE_TIME: number = 250;

function exists$(value: any, exists?: Function): Observable<ValidationErrors | null> {
	if (typeof exists === 'function') {
		const oservableOrValue = exists(value);
		if (isObservable(oservableOrValue)) {
			return oservableOrValue.pipe(
				map(exists => {
					return exists ? { exists: true } : null;
				})
			);
		} else {
			return of(oservableOrValue ? { exists: true } : null);
		}
	} else {
		return of(null);
	}
}

export function existsValidator(exists?: Function): AsyncValidatorFn {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
		return exists$(control.value, exists).pipe(
			debounceTime(DEBOUNCE_TIME),
			catchError((error) => {
				console.log('existsValidator.catchError', error);
				return of(null);
			}),
			take(1),
		);
	};
}
