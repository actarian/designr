/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var services = [
    UIService,
    ModalService,
];
/** @type {?} */
var components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
];
/** @type {?} */
var directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ScrollDirective,
];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var UIModule = /** @class */ (function () {
    function UIModule(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    UIModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    };
    UIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components, directives),
                    exports: tslib_1.__spread([
                        CoreModule
                    ], components, directives),
                },] }
    ];
    /** @nocollapse */
    UIModule.ctorParameters = function () { return [
        { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return UIModule;
}());
export { UIModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBRXpELFFBQVEsR0FBRztJQUNoQixTQUFTO0lBQ1QsWUFBWTtDQUNaOztJQUVLLFVBQVUsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtDQUNsQjs7SUFFSyxVQUFVLEdBQUc7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2Y7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRyxFQUNkO0FBRUQ7SUFxQkMsa0JBQ3lCLFlBQXNCO1FBRTlDLElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztTQUMvRTtJQUNGLENBQUM7Ozs7O0lBRWEsZ0JBQU87Ozs7SUFBckIsVUFDQyxNQUFpQjtRQUVqQixPQUFPO1lBQ04sUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3hDO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQXRDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osVUFBVTtxQkFDVjtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsQ0FDWDtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsRUFDVixVQUFVLENBQ2I7b0JBQ0QsT0FBTzt3QkFDTixVQUFVO3VCQUNQLFVBQVUsRUFDVixVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFFBQVEsdUJBQTdDLFFBQVEsWUFBSSxRQUFROztJQWtCdkIsZUFBQztDQUFBLEFBeENELElBd0NDO1NBckJZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3VpLmNvbmZpZyc7XHJcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3VpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVSU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vdWktbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vdWkvY2xpY2stb3V0c2lkZS9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlJbWFnZXNEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2xhenktaW1hZ2VzL2xhenktaW1hZ2VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vdWkvc2Nyb2xsL3Njcm9sbC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0VUlTZXJ2aWNlLFxyXG5cdE1vZGFsU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0VUlNb2R1bGVDb21wb25lbnQsXHJcblx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHRDbGlja091dHNpZGVEaXJlY3RpdmUsXHJcblx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRTY3JvbGxEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVUlNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVUlNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVSU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogVUlDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogVUlNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogVUlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=