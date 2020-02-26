import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { UI_CONFIG } from './config/ui.config';
import { UIService } from './config/ui.service';
import { UIModuleComponent } from './ui-module.component';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';
import { ParallaxDirective } from './ui/parallax/parallax.directive';
import { RafService } from './ui/raf/raf.service';
import { ScrollDirective } from './ui/scroll/scroll.directive';
import { SpriteComponent } from './ui/sprite/sprite.component';
import * as i0 from "@angular/core";
const services = [
    UIService,
    ModalService,
    RafService,
];
const components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
    SpriteComponent,
];
const directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ParallaxDirective,
    ScrollDirective,
];
const pipes = [];
const validators = [];
const guards = [];
export class UIModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    }
}
UIModule.ɵmod = i0.ɵɵdefineNgModule({ type: UIModule });
UIModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UIModule_Factory(t) { return new (t || UIModule)(i0.ɵɵinject(UIModule, 12)); }, providers: [
        ...services
    ], imports: [[
            CommonModule,
            CoreModule,
        ],
        CoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UIModule, { declarations: [UIModuleComponent,
        ModalContainerComponent,
        ModalViewComponent,
        SpriteComponent,
        ClickOutsideDirective,
        LazyImagesDirective,
        ParallaxDirective,
        ScrollDirective], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        UIModuleComponent,
        ModalContainerComponent,
        ModalViewComponent,
        SpriteComponent,
        ClickOutsideDirective,
        LazyImagesDirective,
        ParallaxDirective,
        ScrollDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UIModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    ...services
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    CoreModule,
                    ...components,
                    ...directives,
                ],
            }]
    }], function () { return [{ type: UIModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFZLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRS9ELE1BQU0sUUFBUSxHQUFHO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtDQUNWLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2YsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDZixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQXFCRixNQUFNLE9BQU8sUUFBUTtJQUVwQixZQUN5QixZQUFzQjtRQUU5QyxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDL0U7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBaUI7UUFFakIsT0FBTztZQUNOLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNELENBQUM7SUFDSCxDQUFDOzs0Q0FuQlcsUUFBUTsrRkFBUixRQUFRLGNBR21CLFFBQVEsc0JBakJwQztRQUNWLEdBQUcsUUFBUTtLQUNYLFlBTlE7WUFDUixZQUFZO1lBQ1osVUFBVTtTQUNWO1FBU0EsVUFBVTt3RkFNQyxRQUFRLG1CQXpDcEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsZUFBZTtRQUlmLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWUsYUFjZCxZQUFZO1FBQ1osVUFBVSxhQVVWLFVBQVU7UUFuQ1gsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsZUFBZTtRQUlmLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7a0RBK0JILFFBQVE7Y0FuQnBCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixVQUFVO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtpQkFDYjthQUNEO3NDQUt1QyxRQUFRO3NCQUE3QyxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFVJQ29uZmlnLCBVSV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy91aS5jb25maWcnO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy91aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVUlNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3VpLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheERpcmVjdGl2ZSB9IGZyb20gJy4vdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4vdWkvcmFmL3JhZi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9zY3JvbGwvc2Nyb2xsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJy4vdWkvc3ByaXRlL3Nwcml0ZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0VUlTZXJ2aWNlLFxyXG5cdE1vZGFsU2VydmljZSxcclxuXHRSYWZTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRVSU1vZHVsZUNvbXBvbmVudCxcclxuXHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRNb2RhbFZpZXdDb21wb25lbnQsXHJcblx0U3ByaXRlQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRQYXJhbGxheERpcmVjdGl2ZSxcclxuXHRTY3JvbGxEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVUlNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVUlNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVSU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogVUlDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogVUlNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogVUlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=