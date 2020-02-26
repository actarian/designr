import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare const CONTROL_VALUE_ACCESSOR: any;
export declare class ControlAccessor<T> implements ControlValueAccessor {
    protected renderer: Renderer2;
    protected element: ElementRef;
    constructor(renderer: Renderer2, element: ElementRef);
    protected formatValue(value: T): string;
    protected parseValue(value: any): T;
    onChange: (value: any) => void;
    onTouched: () => void;
    writeValue(value: T): void;
    registerOnChange(callback: (x: T | null) => void): void;
    registerOnTouched(callback: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlAccessor<any>>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ControlAccessor<any>, "input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]", never, {}, {}, never>;
}
