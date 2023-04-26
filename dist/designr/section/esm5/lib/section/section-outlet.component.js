/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
var SectionOutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SectionOutletComponent, _super);
    function SectionOutletComponent(componentFactoryResolver, sectionService) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.sectionService = sectionService;
        return _this;
    }
    /**
     * @return {?}
     */
    SectionOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.sectionService.resolve(this.section);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    };
    /**
     * @return {?}
     */
    SectionOutletComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    SectionOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-outlet',
                    template: '<ng-template #outlet></ng-template>'
                }] }
    ];
    /** @nocollapse */
    SectionOutletComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: SectionService }
    ]; };
    SectionOutletComponent.propDecorators = {
        section: [{ type: Input }],
        viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
    };
    return SectionOutletComponent;
}(DisposableComponent));
export { SectionOutletComponent };
if (false) {
    /** @type {?} */
    SectionOutletComponent.prototype.section;
    /** @type {?} */
    SectionOutletComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    SectionOutletComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    SectionOutletComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    SectionOutletComponent.prototype.sectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixLQUFLLEVBQTJCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFJNEMsa0RBQW1CO0lBTzlELGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUZ2QyxZQUlDLGlCQUFPLFNBQ1A7UUFKUSw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG9CQUFjLEdBQWQsY0FBYyxDQUFnQjs7SUFHdkMsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjs7WUFDTyxTQUFTLEdBQTJCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7O1lBQzdFLE9BQU8sR0FBdUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUNwSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQWpDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHFDQUFxQztpQkFDL0M7Ozs7Z0JBVHFDLHdCQUF3QjtnQkFJckQsY0FBYzs7OzBCQVFyQixLQUFLO21DQUVMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0lBMkJoRCw2QkFBQztDQUFBLEFBbkNELENBSTRDLG1CQUFtQixHQStCOUQ7U0EvQlksc0JBQXNCOzs7SUFFbEMseUNBQTBCOztJQUUxQixrREFBb0Y7Ozs7O0lBQ3BGLDhDQUFxRDs7Ozs7SUFHcEQsMERBQTBEOzs7OztJQUMxRCxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzZWN0aW9uLW91dGxldCcsXHJcblx0dGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QElucHV0KCkgc2VjdGlvbjogU2VjdGlvbjtcclxuXHJcblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxTZWN0aW9uQ29tcG9uZW50PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBzZWN0aW9uU2VydmljZTogU2VjdGlvblNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8U2VjdGlvbkNvbXBvbmVudD4gPSB0aGlzLnNlY3Rpb25TZXJ2aWNlLnJlc29sdmUodGhpcy5zZWN0aW9uKTtcclxuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8U2VjdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblx0XHRpbnN0YW5jZS5zZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xyXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnU2VjdGlvbkluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRpbnN0YW5jZVsnU2VjdGlvbkluaXQnXSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==