import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { isObservable, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';

const DEBOUNCE_TIME: number = 250;

@Directive({
	selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
	providers: [
		{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
	]
})
export class ExistsValidator implements AsyncValidator {

	@Input() exists: Function;

	exists$(value: string): Observable<ValidationErrors | null> {
		if (typeof this.exists === 'function') {
			const oservableOrValue = this.exists(value);
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

	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		return this.exists$(control.value).pipe(
			debounceTime(DEBOUNCE_TIME),
			catchError((response) => {
				console.log('ExistsValidator.debounced$.catchError', response);
				return of(null);
			}),
			take(1),
		);
	}

}
