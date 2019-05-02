/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from './control.service';
export class ControlOutletComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} controlService
     */
    constructor(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    /**
     * @return {?}
     */
    get context() {
        return this;
    }
    /**
     * @return {?}
     */
    get classes() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.classes : null;
    }
    /**
     * @return {?}
     */
    get control() {
        // console.log('control', this.option.key, this.form.controls);
        return this.componentRef ? this.componentRef.instance.control : null;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const component = this.controlService.resolve(this.option);
        /** @type {?} */
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        const instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        instance.inputRef = this.inputRef;
        instance.errorRef = this.errorRef;
        // instance.labelRef = this.labelRef || this.labelDef;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
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
ControlOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'control-outlet',
                template: "<ng-template #labelDef let-context>\r\n\t<label class=\"control__label control__label--{{context.option.schema}}\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n</ng-template>\r\n<ng-template #descriptionDef let-context>\r\n\t<div class=\"control__description control__description--{{context.option.schema}}\" *ngIf=\"context.option.description\">\r\n\t\t{{ context.option.description | label }}\r\n\t</div>\r\n</ng-template>\r\n<div class=\"control control--{{context.option.schema}}\" [ngClass]=\"context.classes\">\r\n\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-template #outlet></ng-template>\r\n</div>\r\n<ng-container *ngTemplateOutlet=\"context.descriptionRef || descriptionDef; context: { $implicit: context }\"></ng-container>\r\n"
            }] }
];
/** @nocollapse */
ControlOutletComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ControlService }
];
ControlOutletComponent.propDecorators = {
    inputRef: [{ type: ContentChild, args: ['inputRef',] }],
    errorRef: [{ type: ContentChild, args: ['errorRef',] }],
    labelRef: [{ type: ContentChild, args: ['labelRef',] }],
    descriptionRef: [{ type: ContentChild, args: ['descriptionRef',] }],
    descriptionDef: [{ type: ViewChild, args: ['descriptionDef',] }],
    labelDef: [{ type: ViewChild, args: ['labelDef',] }],
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }],
    option: [{ type: Input }],
    form: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ControlOutletComponent.prototype.inputRef;
    /** @type {?} */
    ControlOutletComponent.prototype.errorRef;
    /** @type {?} */
    ControlOutletComponent.prototype.labelRef;
    /** @type {?} */
    ControlOutletComponent.prototype.descriptionRef;
    /** @type {?} */
    ControlOutletComponent.prototype.descriptionDef;
    /** @type {?} */
    ControlOutletComponent.prototype.labelDef;
    /** @type {?} */
    ControlOutletComponent.prototype.viewContainerRef;
    /** @type {?} */
    ControlOutletComponent.prototype.option;
    /** @type {?} */
    ControlOutletComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ControlOutletComponent.prototype.controlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixZQUFZLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNNLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBNkJsQyxZQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7O0lBakJMLElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNWLCtEQUErRDtRQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDViwrREFBK0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOzs7O0lBT0QsZUFBZTtJQUNmLENBQUM7Ozs7SUFFRCxRQUFROztjQUNELFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Y0FDNUUsT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ3BILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztjQUM3RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFDdEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLHNEQUFzRDtRQUN0RCxJQUFJLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUE1REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGsyQkFBNEM7YUFDNUM7Ozs7WUFUb0Qsd0JBQXdCO1lBSXBFLGNBQWM7Ozt1QkFRckIsWUFBWSxTQUFDLFVBQVU7dUJBQ3ZCLFlBQVksU0FBQyxVQUFVO3VCQUN2QixZQUFZLFNBQUMsVUFBVTs2QkFDdkIsWUFBWSxTQUFDLGdCQUFnQjs2QkFDN0IsU0FBUyxTQUFDLGdCQUFnQjt1QkFDMUIsU0FBUyxTQUFDLFVBQVU7K0JBQ3BCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7cUJBRTlDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQVROLDBDQUFrRjs7SUFDbEYsMENBQWtGOztJQUNsRiwwQ0FBa0Y7O0lBQ2xGLGdEQUE4Rjs7SUFDOUYsZ0RBQTJGOztJQUMzRiwwQ0FBK0U7O0lBQy9FLGtEQUFvRjs7SUFFcEYsd0NBQXFDOztJQUNyQyxzQ0FBeUI7Ozs7O0lBRXpCLDhDQUFxRDs7Ozs7SUFpQnBELDBEQUEwRDs7Ozs7SUFDMUQsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3JPZkNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9jb250cm9sLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb250cm9sLW91dGxldCcsXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sT3V0bGV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG5cdEBDb250ZW50Q2hpbGQoJ2lucHV0UmVmJykgaW5wdXRSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnZXJyb3JSZWYnKSBlcnJvclJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAQ29udGVudENoaWxkKCdsYWJlbFJlZicpIGxhYmVsUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2Rlc2NyaXB0aW9uUmVmJykgZGVzY3JpcHRpb25SZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QFZpZXdDaGlsZCgnZGVzY3JpcHRpb25EZWYnKSBkZXNjcmlwdGlvbkRlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAVmlld0NoaWxkKCdsYWJlbERlZicpIGxhYmVsRGVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdEBJbnB1dCgpIG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55Pjtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29udHJvbENvbXBvbmVudD47XG5cblx0Z2V0IGNvbnRleHQoKTogQ29udHJvbE91dGxldENvbXBvbmVudCB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXQgY2xhc3NlcygpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2wnLCB0aGlzLm9wdGlvbi5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmID8gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2xhc3NlcyA6IG51bGw7XG5cdH1cblxuXHRnZXQgY29udHJvbCgpOiBBYnN0cmFjdENvbnRyb2wge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2wgOiBudWxsO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZSxcblx0KSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnJlc29sdmUodGhpcy5vcHRpb24pO1xuXHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0aW5zdGFuY2Uub3B0aW9uID0gdGhpcy5vcHRpb247XG5cdFx0aW5zdGFuY2UuZm9ybSA9IHRoaXMuZm9ybTtcblx0XHRpbnN0YW5jZS5pbnB1dFJlZiA9IHRoaXMuaW5wdXRSZWY7XG5cdFx0aW5zdGFuY2UuZXJyb3JSZWYgPSB0aGlzLmVycm9yUmVmO1xuXHRcdC8vIGluc3RhbmNlLmxhYmVsUmVmID0gdGhpcy5sYWJlbFJlZiB8fCB0aGlzLmxhYmVsRGVmO1xuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ0NvbnRyb2xJbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGluc3RhbmNlWydDb250cm9sSW5pdCddKCk7XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==