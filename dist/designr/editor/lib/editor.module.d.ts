import { ModuleWithProviders } from '@angular/core';
import { EditorConfig } from './config/editor.config';
export declare class EditorModule {
    constructor(parentModule: EditorModule);
    static forRoot(config?: EditorConfig): ModuleWithProviders;
}
