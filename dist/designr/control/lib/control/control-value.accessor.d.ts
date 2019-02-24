import { ControlValueAccessor } from '@angular/forms';
export declare class ValueAccessorBase<T> implements ControlValueAccessor {
    private innerValue;
    private changed;
    private touched;
    value: T;
    touch(): void;
    writeValue(value: T): void;
    registerOnChange(fn: (value: T) => void): void;
    registerOnTouched(fn: () => void): void;
}
