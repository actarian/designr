import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, isObservable, Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, take } from 'rxjs/operators';

const DEBOUNCE_TIME: number = 250;

@Directive({
	selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
	providers: [
		{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
	]
})
export class ExistsValidator implements AsyncValidator {

	@Input() exists: Function;

	private value$ = new BehaviorSubject<string>(null);

	private debounced$: Observable<ValidationErrors | null> = this.value$.pipe(
		debounceTime(DEBOUNCE_TIME),
		switchMap((value: string) => {
			// console.log('ExistsValidator.debounced$', value);
			return this.exists$(value);
		}),
		catchError((response) => {
			console.log('ExistsValidator.debounced$.catchError', response);
			return of(null);
		}),
		take(1),
	);

	set value(value: string) {
		// console.log('value', value);
		if (value && String(value).trim() !== '') {
			this.value$.next(value);
		}
	}

	exists$(value: string): Observable<ValidationErrors | null> {
		if (typeof this.exists === 'function') {
			const exists = this.exists(value);
			if (isObservable(exists)) {
				return exists.pipe(
					map(exists => {
						return exists ? { exists: true } : null;
					})
				);
			} else {
				return of(exists ? { exists: true } : null);
			}
		} else {
			return of(null);
		}
	}

	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		this.value = control.value;
		// console.log('ExistsValidator.validate', control.value, control);
		return this.debounced$;
	}

}
