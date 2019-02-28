import { Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
export declare class ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlBase<any>;
    form: FormGroup;
    protected element: any;
    protected blurred: boolean;
    protected innervalue: any;
    reveal: {
        checked: boolean;
    };
    constructor(renderer: Renderer2);
    readonly controlRef: AbstractControl;
    readonly isValid: boolean;
    protected onChange: (value: any) => void;
    protected onTouched: () => void;
    protected formatValue(value: any): void;
    protected parseValue(value: any): void;
    onInput(event: Event): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    getFormattedValue(): any;
    writeValue(value: any): void;
    registerOnChange(method: any): void;
    registerOnTouched(method: any): void;
    setDisabledState(isDisabled: boolean): void;
}
