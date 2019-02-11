import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';

const DEBOUNCE_TIME: number = 250;

@Directive({
	selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
	providers: [
		{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
	]
})
export class ExistsValidator implements AsyncValidator {

	private values = new BehaviorSubject<string>(null);
	set value(value: string) {
		if (value && value.trim() !== '') {
			this.values.next(value);
		}
	}
	private debounced$: Observable<ValidationErrors | null> = this.values.pipe(
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

	@Input() exists: Function;

	exists$(value: string): Observable<ValidationErrors | null> {
		if (typeof this.exists === 'function') {
			// console.log('ExistsValidator.exists$', value);
			return this.exists(value).pipe(
				switchMap(exists => {
					if (exists) {
						return of({
							exists: true,
						});
					} else {
						return of(null);
					}
				}),
			);
		} else {
			return of(null);
		}
	}

	validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		this.value = control.value;
		return this.debounced$;
	}

}
