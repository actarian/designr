/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Inject, Input, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
export class SectionOutletComponent extends DisposableComponent {
    /**
     * @param {?} viewContainerRef
     * @param {?} componentFactoryResolver
     * @param {?} sectionService
     */
    constructor(viewContainerRef, componentFactoryResolver, sectionService) {
        super();
        this.viewContainerRef = viewContainerRef;
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
    }
}
SectionOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'section-outlet',
                template: ''
            }] }
];
/** @nocollapse */
SectionOutletComponent.ctorParameters = () => [
    { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: ComponentFactoryResolver },
    { type: SectionService }
];
SectionOutletComponent.propDecorators = {
    section: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb24tb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0IsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7Ozs7OztJQUk5RCxZQUNtQyxnQkFBa0MsRUFDNUQsd0JBQWtELEVBQ2xELGNBQThCO1FBRXRDLEtBQUssRUFBRSxDQUFDO1FBSjBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDNUQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFHdkMsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0QsU0FBUyxHQUEyQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOztjQUM3RSxPQUFPLEdBQXVDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7UUFDcEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztjQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2NBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtRQUN0QyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDOzs7WUExQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxFQUFFO2FBQ1o7Ozs7WUFUNEYsZ0JBQWdCLHVCQWUxRyxNQUFNLFNBQUMsZ0JBQWdCO1lBZlksd0JBQXdCO1lBSXJELGNBQWM7OztzQkFRckIsS0FBSzs7OztJQUFOLHlDQUEwQjs7Ozs7SUFHekIsa0RBQW9FOzs7OztJQUNwRSwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlY3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlY3Rpb24tb3V0bGV0Jyxcblx0dGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgc2VjdGlvbjogU2VjdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgc2VjdGlvblNlcnZpY2U6IFNlY3Rpb25TZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPFNlY3Rpb25Db21wb25lbnQ+ID0gdGhpcy5zZWN0aW9uU2VydmljZS5yZXNvbHZlKHRoaXMuc2VjdGlvbik7XG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxTZWN0aW9uQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRpbnN0YW5jZS5zZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1NlY3Rpb25Jbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydTZWN0aW9uSW5pdCddKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==