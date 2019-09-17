import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class ExistsValidator implements AsyncValidator {
    exists: Function;
    private value$;
    private debounced$;
    value: string;
    exists$(value: string): Observable<ValidationErrors | null>;
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}
