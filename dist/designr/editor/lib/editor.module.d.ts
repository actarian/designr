import { ModuleWithProviders } from '@angular/core';
import { EditorConfig } from './config/editor.config';
import * as i0 from "@angular/core";
import * as i1 from "./editor-module.component";
import * as i2 from "./panel/panel.component";
import * as i3 from "@angular/common";
import * as i4 from "@designr/core";
export declare class EditorModule {
    constructor(parentModule: EditorModule);
    static forRoot(config?: EditorConfig): i0.ModuleWithProviders<EditorModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<EditorModule, [typeof i1.EditorModuleComponent, typeof i2.PanelComponent], [typeof i3.CommonModule, typeof i4.CoreModule], [typeof i4.CoreModule, typeof i1.EditorModuleComponent, typeof i2.PanelComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<EditorModule>;
}
