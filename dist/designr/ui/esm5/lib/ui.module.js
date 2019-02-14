/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var modules = [
    CoreModule,
];
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
    FancyboxDirective,
    LazyImagesDirective,
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
                    imports: tslib_1.__spread(modules),
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components, directives),
                    exports: tslib_1.__spread(modules, components, directives),
                },] }
    ];
    /** @nocollapse */
    UIModule.ctorParameters = function () { return [
        { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return UIModule;
}());
export { UIModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUVsRCxPQUFPLEdBQUc7SUFDZixVQUFVO0NBQ1Y7O0lBRUssUUFBUSxHQUFHO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0NBQ1o7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ2xCOztJQUVLLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUNuQjs7SUFFSyxLQUFLLEdBQUcsRUFDYjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7QUFFRDtJQW9CQyxrQkFDeUIsWUFBc0I7UUFFOUMsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1NBQy9FO0lBQ0YsQ0FBQzs7Ozs7SUFFYSxnQkFBTzs7OztJQUFyQixVQUNDLE1BQWlCO1FBRWpCLE9BQU87WUFDTixRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDeEM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBckNELFFBQVEsU0FBQztvQkFDVCxPQUFPLG1CQUNILE9BQU8sQ0FDVjtvQkFDRCxTQUFTLG1CQUNMLFFBQVEsQ0FDWDtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsRUFDVixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFVBQVUsQ0FDYjtpQkFDRDs7OztnQkFLdUMsUUFBUSx1QkFBN0MsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixlQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FyQlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBVSUNvbmZpZywgVUlfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvdWkuY29uZmlnJztcclxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdWkuc2VydmljZSc7XHJcbmltcG9ydCB7IFVJTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi91aS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmFuY3lib3hEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2ZhbmN5Ym94L2ZhbmN5Ym94LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlJbWFnZXNEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2xhenktaW1hZ2VzL2xhenktaW1hZ2VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwuc2VydmljZSc7XHJcblxyXG5jb25zdCBtb2R1bGVzID0gW1xyXG5cdENvcmVNb2R1bGUsXHJcbl07XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRVSVNlcnZpY2UsXHJcblx0TW9kYWxTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRVSU1vZHVsZUNvbXBvbmVudCxcclxuXHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRNb2RhbFZpZXdDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRGYW5jeWJveERpcmVjdGl2ZSxcclxuXHRMYXp5SW1hZ2VzRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlc1xyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLm1vZHVsZXMsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFVJTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignVUlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFVJQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFVJTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IFVJX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19