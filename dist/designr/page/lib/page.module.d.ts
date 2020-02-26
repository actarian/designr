import { ModuleWithProviders } from '@angular/core';
import { PageConfig } from './config/page.config';
import * as i0 from "@angular/core";
import * as i1 from "./page-module.component";
import * as i2 from "./page/page.component";
import * as i3 from "./page/page-not-found.component";
import * as i4 from "./page/page-outlet.component";
import * as i5 from "./layout/layout.component";
import * as i6 from "./layout/use-layout.directive";
import * as i7 from "@angular/common";
import * as i8 from "@designr/core";
import * as i9 from "./page.routing";
export declare class PageModule {
    constructor(parentModule: PageModule);
    static forRoot(config?: PageConfig): i0.ModuleWithProviders<PageModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<PageModule, [typeof i1.PageModuleComponent, typeof i2.PageComponent, typeof i3.PageNotFoundComponent, typeof i4.PageOutletComponent, typeof i5.LayoutComponent, typeof i6.UseLayoutDirective], [typeof i7.CommonModule, typeof i8.CoreModule, typeof i9.PageRouting], [typeof i8.CoreModule, typeof i9.PageRouting, typeof i1.PageModuleComponent, typeof i2.PageComponent, typeof i3.PageNotFoundComponent, typeof i4.PageOutletComponent, typeof i5.LayoutComponent, typeof i6.UseLayoutDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<PageModule>;
}
