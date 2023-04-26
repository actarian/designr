/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
export class SectionOutletComponent extends DisposableComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} sectionService
     */
    constructor(componentFactoryResolver, sectionService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.sectionService = sectionService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.sectionService.resolve(this.section);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.section = this.section;
        if (typeof instance['SectionInit'] === 'function') {
            instance['SectionInit']();
        }
        this.componentRef = componentRef;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
SectionOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'section-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
SectionOutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: SectionService }
];
SectionOutletComponent.propDecorators = {
    section: [{ type: Input }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQWdCLEtBQUssRUFBMkIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1COzs7OztJQU85RCxZQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUV0QyxLQUFLLEVBQUUsQ0FBQztRQUhBLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBR3ZDLENBQUM7Ozs7SUFFRCxRQUFROztjQUNELFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Y0FDN0UsT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ3BILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztjQUM3RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFDdEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ2xELFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQWpDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHFDQUFxQzthQUMvQzs7OztZQVRxQyx3QkFBd0I7WUFJckQsY0FBYzs7O3NCQVFyQixLQUFLOytCQUVMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7SUFGL0MseUNBQTBCOztJQUUxQixrREFBb0Y7Ozs7O0lBQ3BGLDhDQUFxRDs7Ozs7SUFHcEQsMERBQTBEOzs7OztJQUMxRCxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xyXG5pbXBvcnQgeyBTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzZWN0aW9uLW91dGxldCcsXHJcblx0dGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QElucHV0KCkgc2VjdGlvbjogU2VjdGlvbjtcclxuXHJcblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxTZWN0aW9uQ29tcG9uZW50PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBzZWN0aW9uU2VydmljZTogU2VjdGlvblNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8U2VjdGlvbkNvbXBvbmVudD4gPSB0aGlzLnNlY3Rpb25TZXJ2aWNlLnJlc29sdmUodGhpcy5zZWN0aW9uKTtcclxuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8U2VjdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblx0XHRpbnN0YW5jZS5zZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xyXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnU2VjdGlvbkluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRpbnN0YW5jZVsnU2VjdGlvbkluaXQnXSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==