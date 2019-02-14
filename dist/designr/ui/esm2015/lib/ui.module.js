/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { UI_CONFIG } from './config/ui.config';
import { UIService } from './config/ui.service';
import { UIModuleComponent } from './ui-module.component';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { FancyboxDirective } from './ui/fancybox/fancybox.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';
/** @type {?} */
const modules = [
    CoreModule,
];
/** @type {?} */
const services = [
    UIService,
    ModalService,
];
/** @type {?} */
const components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
];
/** @type {?} */
const directives = [
    ClickOutsideDirective,
    FancyboxDirective,
    LazyImagesDirective,
];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [];
/** @type {?} */
const guards = [];
export class UIModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    }
}
UIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
                ],
                providers: [
                    ...services
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    ...modules,
                    ...components,
                    ...directives,
                ],
            },] }
];
/** @nocollapse */
UIModule.ctorParameters = () => [
    { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFZLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O01BRWxELE9BQU8sR0FBRztJQUNmLFVBQVU7Q0FDVjs7TUFFSyxRQUFRLEdBQUc7SUFDaEIsU0FBUztJQUNULFlBQVk7Q0FDWjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDbEI7O01BRUssVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ25COztNQUVLLEtBQUssR0FBRyxFQUNiOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxNQUFNLEdBQUcsRUFDZDtBQW9CRCxNQUFNLE9BQU8sUUFBUTs7OztJQUVwQixZQUN5QixZQUFzQjtRQUU5QyxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDL0U7SUFDRixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQ3BCLE1BQWlCO1FBRWpCLE9BQU87WUFDTixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7O1lBckNELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxPQUFPO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsT0FBTztvQkFDVixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsUUFBUSx1QkFBN0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3VpLmNvbmZpZyc7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3VpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVSU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vdWktbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vdWkvY2xpY2stb3V0c2lkZS9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZhbmN5Ym94RGlyZWN0aXZlIH0gZnJvbSAnLi91aS9mYW5jeWJveC9mYW5jeWJveC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgbW9kdWxlcyA9IFtcclxuXHRDb3JlTW9kdWxlLFxyXG5dO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0VUlTZXJ2aWNlLFxyXG5cdE1vZGFsU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0VUlNb2R1bGVDb21wb25lbnQsXHJcblx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0RmFuY3lib3hEaXJlY3RpdmUsXHJcblx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Li4ubW9kdWxlcyxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXNcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVSU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBVSU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VJTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBVSUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBVSU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBVSV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==