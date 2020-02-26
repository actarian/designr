import { ModuleWithProviders } from '@angular/core';
import { UIConfig } from './config/ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui-module.component";
import * as i2 from "./ui/modal/modal-container.component";
import * as i3 from "./ui/modal/modal-view.component";
import * as i4 from "./ui/sprite/sprite.component";
import * as i5 from "./ui/click-outside/click-outside.directive";
import * as i6 from "./ui/lazy-images/lazy-images.directive";
import * as i7 from "./ui/parallax/parallax.directive";
import * as i8 from "./ui/scroll/scroll.directive";
import * as i9 from "@angular/common";
import * as i10 from "@designr/core";
export declare class UIModule {
    constructor(parentModule: UIModule);
    static forRoot(config?: UIConfig): i0.ModuleWithProviders<UIModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<UIModule, [typeof i1.UIModuleComponent, typeof i2.ModalContainerComponent, typeof i3.ModalViewComponent, typeof i4.SpriteComponent, typeof i5.ClickOutsideDirective, typeof i6.LazyImagesDirective, typeof i7.ParallaxDirective, typeof i8.ScrollDirective], [typeof i9.CommonModule, typeof i10.CoreModule], [typeof i10.CoreModule, typeof i1.UIModuleComponent, typeof i2.ModalContainerComponent, typeof i3.ModalViewComponent, typeof i4.SpriteComponent, typeof i5.ClickOutsideDirective, typeof i6.LazyImagesDirective, typeof i7.ParallaxDirective, typeof i8.ScrollDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<UIModule>;
}
