import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ExistsValidator implements AsyncValidator {
    exists: Function;
    exists$(value: string): Observable<ValidationErrors | null>;
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
    static ɵfac: i0.ɵɵFactoryDef<ExistsValidator>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ExistsValidator, "[exists][formControlName],[exists][formControl],[exists][ngModel]", never, { "exists": "exists"; }, {}, never>;
}
