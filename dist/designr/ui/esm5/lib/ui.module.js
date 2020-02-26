import { __read, __spread } from "tslib";
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
var services = [
    UIService,
    ModalService,
    RafService,
];
var components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
    SpriteComponent,
];
var directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ParallaxDirective,
    ScrollDirective,
];
var pipes = [];
var validators = [];
var guards = [];
var UIModule = /** @class */ (function () {
    function UIModule(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    UIModule.forRoot = function (config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    };
    UIModule.ɵmod = i0.ɵɵdefineNgModule({ type: UIModule });
    UIModule.ɵinj = i0.ɵɵdefineInjector({ factory: function UIModule_Factory(t) { return new (t || UIModule)(i0.ɵɵinject(UIModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return UIModule;
}());
export { UIModule };
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
                providers: __spread(services),
                declarations: __spread(components, directives),
                exports: __spread([
                    CoreModule
                ], components, directives),
            }]
    }], function () { return [{ type: UIModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUUvRCxJQUFNLFFBQVEsR0FBRztJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7Q0FDVixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUc7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtDQUNmLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2YsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyxFQUNkLENBQUM7QUFFRjtJQXFCQyxrQkFDeUIsWUFBc0I7UUFFOUMsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1NBQy9FO0lBQ0YsQ0FBQztJQUVhLGdCQUFPLEdBQXJCLFVBQ0MsTUFBaUI7UUFFakIsT0FBTztZQUNOLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUN4QztTQUNELENBQUM7SUFDSCxDQUFDO2dEQW5CVyxRQUFRO21HQUFSLFFBQVEsY0FHbUIsUUFBUSwrQkFoQjNDLFFBQVEsYUFMSDtnQkFDUixZQUFZO2dCQUNaLFVBQVU7YUFDVjtZQVNBLFVBQVU7bUJBMURaO0NBcUZDLEFBeENELElBd0NDO1NBckJZLFFBQVE7d0ZBQVIsUUFBUSxtQkF6Q3BCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFJZixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlLGFBY2QsWUFBWTtRQUNaLFVBQVUsYUFVVixVQUFVO1FBbkNYLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFJZixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO2tEQStCSCxRQUFRO2NBbkJwQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtpQkFDVjtnQkFDRCxTQUFTLFdBQ0wsUUFBUSxDQUNYO2dCQUNELFlBQVksV0FDUixVQUFVLEVBQ1YsVUFBVSxDQUNiO2dCQUNELE9BQU87b0JBQ04sVUFBVTttQkFDUCxVQUFVLEVBQ1YsVUFBVSxDQUNiO2FBQ0Q7c0NBS3VDLFFBQVE7c0JBQTdDLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3VpLmNvbmZpZyc7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3VpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVSU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vdWktbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vdWkvY2xpY2stb3V0c2lkZS9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlJbWFnZXNEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2xhenktaW1hZ2VzL2xhenktaW1hZ2VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4RGlyZWN0aXZlIH0gZnJvbSAnLi91aS9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSYWZTZXJ2aWNlIH0gZnJvbSAnLi91aS9yYWYvcmFmLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi91aS9zcHJpdGUvc3ByaXRlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRVSVNlcnZpY2UsXHJcblx0TW9kYWxTZXJ2aWNlLFxyXG5cdFJhZlNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdFVJTW9kdWxlQ29tcG9uZW50LFxyXG5cdE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdE1vZGFsVmlld0NvbXBvbmVudCxcclxuXHRTcHJpdGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRMYXp5SW1hZ2VzRGlyZWN0aXZlLFxyXG5cdFBhcmFsbGF4RGlyZWN0aXZlLFxyXG5cdFNjcm9sbERpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXNcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBVSU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VJTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBVSUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBVSU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBVSV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==