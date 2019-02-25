/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { ScrollDirective } from './ui/scroll/scroll.directive';
import { SpriteComponent } from './ui/sprite/sprite.component';
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
    SpriteComponent,
];
/** @type {?} */
const directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ScrollDirective,
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
            },] }
];
/** @nocollapse */
UIModule.ctorParameters = () => [
    { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O01BRXpELFFBQVEsR0FBRztJQUNoQixTQUFTO0lBQ1QsWUFBWTtDQUNaOztNQUVLLFVBQVUsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2Y7O01BRUssVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNmOztNQUVLLEtBQUssR0FBRyxFQUNiOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxNQUFNLEdBQUcsRUFDZDtBQXFCRCxNQUFNLE9BQU8sUUFBUTs7OztJQUVwQixZQUN5QixZQUFzQjtRQUU5QyxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDL0U7SUFDRixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQ3BCLE1BQWlCO1FBRWpCLE9BQU87WUFDTixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7O1lBdENELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixVQUFVO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtpQkFDYjthQUNEOzs7O1lBS3VDLFFBQVEsdUJBQTdDLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFVJQ29uZmlnLCBVSV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy91aS5jb25maWcnO1xyXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy91aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVUlNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3VpLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGlja091dHNpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnLi91aS9zcHJpdGUvc3ByaXRlLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRVSVNlcnZpY2UsXHJcblx0TW9kYWxTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRVSU1vZHVsZUNvbXBvbmVudCxcclxuXHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRNb2RhbFZpZXdDb21wb25lbnQsXHJcblx0U3ByaXRlQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRTY3JvbGxEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVUlNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVUlNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVSU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogVUlDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogVUlNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogVUlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=