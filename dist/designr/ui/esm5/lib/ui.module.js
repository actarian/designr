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
import { SpriteComponent } from './ui/sprite/sprite.component';
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
    SpriteComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztJQUV6RCxRQUFRLEdBQUc7SUFDaEIsU0FBUztJQUNULFlBQVk7Q0FDWjs7SUFFSyxVQUFVLEdBQUc7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtDQUNmOztJQUVLLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDZjs7SUFFSyxLQUFLLEdBQUcsRUFDYjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7QUFFRDtJQXFCQyxrQkFDeUIsWUFBc0I7UUFFOUMsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1NBQy9FO0lBQ0YsQ0FBQzs7Ozs7SUFFYSxnQkFBTzs7OztJQUFyQixVQUNDLE1BQWlCO1FBRWpCLE9BQU87WUFDTixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBdENELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixVQUFVO3FCQUNWO29CQUNELFNBQVMsbUJBQ0wsUUFBUSxDQUNYO29CQUNELFlBQVksbUJBQ1IsVUFBVSxFQUNWLFVBQVUsQ0FDYjtvQkFDRCxPQUFPO3dCQUNOLFVBQVU7dUJBQ1AsVUFBVSxFQUNWLFVBQVUsQ0FDYjtpQkFDRDs7OztnQkFLdUMsUUFBUSx1QkFBN0MsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixlQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FyQlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBVSUNvbmZpZywgVUlfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvdWkuY29uZmlnJztcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdWkuc2VydmljZSc7XHJcbmltcG9ydCB7IFVJTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi91aS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGF6eUltYWdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vdWkvbGF6eS1pbWFnZXMvbGF6eS1pbWFnZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9zY3JvbGwvc2Nyb2xsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNwcml0ZUNvbXBvbmVudCB9IGZyb20gJy4vdWkvc3ByaXRlL3Nwcml0ZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0VUlTZXJ2aWNlLFxyXG5cdE1vZGFsU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0VUlNb2R1bGVDb21wb25lbnQsXHJcblx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5cdFNwcml0ZUNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0Q2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG5cdExhenlJbWFnZXNEaXJlY3RpdmUsXHJcblx0U2Nyb2xsRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlc1xyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFVJTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignVUlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFVJQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFVJTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IFVJX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19