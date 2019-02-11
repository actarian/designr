import { FormGroup, ValidatorFn } from '@angular/forms';
export declare function __matchValidator(key: string, otherKey: string, group: FormGroup): ValidatorFn;
export declare function matchValidator(otherKey: string, reverse: boolean, group: FormGroup): ValidatorFn;
