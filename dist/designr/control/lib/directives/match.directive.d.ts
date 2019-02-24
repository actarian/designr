import { AbstractControl, Validator } from '@angular/forms';
export declare class MatchValidator implements Validator {
    match: string;
    reverse: string;
    constructor(match: string, reverse: string);
    private readonly isReverse;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
