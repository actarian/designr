import { AbstractControl, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MatchValidator implements Validator {
    match: string;
    reverse: string;
    constructor(match: string, reverse: string);
    private get isReverse();
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    static ɵfac: i0.ɵɵFactoryDef<MatchValidator>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatchValidator, "[match][formControlName],[match][formControl],[match][ngModel]", never, {}, {}, never>;
}
