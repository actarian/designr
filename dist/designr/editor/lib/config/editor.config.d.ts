import { InjectionToken } from '@angular/core';
export declare const EDITOR_CONFIG: InjectionToken<EditorConfig>;
export declare class EditorConfig {
    enabled?: boolean;
    constructor(options?: EditorConfig);
}
