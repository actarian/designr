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
    minLength?: number;
    maxLength?: number;
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
    private _originalValue;
    value: T;
    key: string;
    label: string;
    placeholder: string;
    order: number;
    schema: string;
    type: string;
    min: number;
    max: number;
    required: boolean;
    requiredTrue: boolean;
    email: boolean;
    minLength: number;
    maxLength: number;
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
