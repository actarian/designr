export declare class ControlOption<T> {
    static uid: number;
    protected _originalValue?: T;
    value?: T;
    key?: string;
    label?: string;
    placeholder?: string;
    order?: number;
    schema?: string;
    type?: string;
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
    match?: string;
    reverse?: boolean;
    options?: {
        key: string;
        value: string;
    }[];
    disabled?: boolean;
    step?: number;
    format?: string;
    constructor(options?: ControlOption<T>);
}
