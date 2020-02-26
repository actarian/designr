import { ModuleWithProviders } from '@angular/core';
import { SectionConfig } from './config/section.config';
import * as i0 from "@angular/core";
import * as i1 from "./section-module.component";
import * as i2 from "./section/section-outlet.component";
import * as i3 from "./section/section.component";
import * as i4 from "./section/sections.component";
import * as i5 from "@angular/common";
import * as i6 from "@designr/core";
export declare class SectionModule {
    constructor(parentModule: SectionModule);
    static forRoot(config?: SectionConfig): i0.ModuleWithProviders<SectionModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<SectionModule, [typeof i1.SectionModuleComponent, typeof i2.SectionOutletComponent, typeof i3.SectionComponent, typeof i4.SectionsComponent], [typeof i5.CommonModule, typeof i6.CoreModule], [typeof i6.CoreModule, typeof i1.SectionModuleComponent, typeof i2.SectionOutletComponent, typeof i3.SectionComponent, typeof i4.SectionsComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<SectionModule>;
}
