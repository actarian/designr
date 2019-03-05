export declare class ControlBaseOptions<T> {
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
}
export declare class ControlBase<T> {
    static uid: number;
    readonly schema: string;
    private _originalValue;
    value: T;
    key: string;
    label: string;
    placeholder: string;
    order: number;
    type: string;
    min: number;
    max: number;
    required: boolean;
    requiredTrue: boolean;
    email: boolean;
    minlength: number;
    maxlength: number;
    pattern: string | RegExp;
    match: string;
    reverse: boolean;
    options: {
        key: string;
        value: string;
    }[];
    disabled: boolean;
    step: number;
    format: string;
    constructor(options?: ControlBaseOptions<T>);
}
