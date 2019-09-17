export interface IControlOption<T> {
    schema: string;
    value?: T;
    order?: number;
    key?: string;
    label?: string;
    placeholder?: string;
    title?: string;
    abstract?: string;
    description?: string;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    exists?: Function;
    match?: string;
    reverse?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
    [x: string]: any;
}
export declare class ControlOption<T> {
    schema: string;
    value?: T;
    order?: number;
    key?: string;
    label?: string;
    placeholder?: string;
    title?: string;
    abstract?: string;
    description?: string;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    exists?: Function;
    match?: string;
    reverse?: boolean;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
    constructor(options?: IControlOption<T>);
}
