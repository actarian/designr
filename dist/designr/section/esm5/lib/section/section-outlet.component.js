/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Inject, Input, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
var SectionOutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SectionOutletComponent, _super);
    function SectionOutletComponent(viewContainerRef, componentFactoryResolver, sectionService) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
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
    };
    SectionOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-outlet',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SectionOutletComponent.ctorParameters = function () { return [
        { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
        { type: ComponentFactoryResolver },
        { type: SectionService }
    ]; };
    SectionOutletComponent.propDecorators = {
        section: [{ type: Input }]
    };
    return SectionOutletComponent;
}(DisposableComponent));
export { SectionOutletComponent };
if (false) {
    /** @type {?} */
    SectionOutletComponent.prototype.section;
    /**
     * @type {?}
     * @private
     */
    SectionOutletComponent.prototype.viewContainerRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUk0QyxrREFBbUI7SUFJOUQsZ0NBQ21DLGdCQUFrQyxFQUM1RCx3QkFBa0QsRUFDbEQsY0FBOEI7UUFIdkMsWUFLQyxpQkFBTyxTQUNQO1FBTGtDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUQsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7O0lBR3ZDLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7O1lBQ08sU0FBUyxHQUEyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztZQUM3RSxPQUFPLEdBQXVDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDcEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O1lBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUN0QyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkExQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxFQUFFO2lCQUNaOzs7O2dCQVQ0RixnQkFBZ0IsdUJBZTFHLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBZlksd0JBQXdCO2dCQUlyRCxjQUFjOzs7MEJBUXJCLEtBQUs7O0lBc0JQLDZCQUFDO0NBQUEsQUE1QkQsQ0FJNEMsbUJBQW1CLEdBd0I5RDtTQXhCWSxzQkFBc0I7OztJQUVsQyx5Q0FBMEI7Ozs7O0lBR3pCLGtEQUFvRTs7Ozs7SUFDcEUsMERBQTBEOzs7OztJQUMxRCxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCB7IFNlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZWN0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzZWN0aW9uLW91dGxldCcsXG5cdHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbk91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIHNlY3Rpb246IFNlY3Rpb247XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChWaWV3Q29udGFpbmVyUmVmKSBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIHNlY3Rpb25TZXJ2aWNlOiBTZWN0aW9uU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxTZWN0aW9uQ29tcG9uZW50PiA9IHRoaXMuc2VjdGlvblNlcnZpY2UucmVzb2x2ZSh0aGlzLnNlY3Rpb24pO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8U2VjdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uuc2VjdGlvbiA9IHRoaXMuc2VjdGlvbjtcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydTZWN0aW9uSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnU2VjdGlvbkluaXQnXSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=