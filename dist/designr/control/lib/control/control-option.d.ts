export interface IControlOption<T> {
    schema: string;
    value?: T;
    order?: number;
    key?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    match?: string;
    reverse?: boolean;
    [x: string]: any;
}
export declare class ControlOption<T> {
    schema: string;
    value?: T;
    order?: number;
    key?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    match?: string;
    reverse?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
    constructor(options?: IControlOption<T>);
}
