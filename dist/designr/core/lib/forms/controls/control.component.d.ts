import { Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';
export declare class ControlComponent implements ControlValueAccessor {
    private renderer;
    control: ControlBase<any>;
    form: FormGroup;
    private element;
    private blurred;
    private innervalue;
    reveal: {
        checked: boolean;
    };
    constructor(renderer: Renderer2);
    readonly controlRef: AbstractControl;
    readonly isValid: boolean;
    getFormattedValue(): any;
    onInput($event: any): void;
    onFocus($event: any): void;
    onBlur($event: any): void;
    private onChange;
    private onTouched;
    private formatValue;
    private parseValue;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
