/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlService } from './control.service';
var ControlOutletComponent = /** @class */ (function () {
    function ControlOutletComponent(componentFactoryResolver, controlService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.controlService = controlService;
    }
    Object.defineProperty(ControlOutletComponent.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlOutletComponent.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.classes : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlOutletComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            // console.log('control', this.option.key, this.form.controls);
            return this.componentRef ? this.componentRef.instance.control : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var component = this.controlService.resolve(this.option);
        /** @type {?} */
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(factory);
        /** @type {?} */
        var instance = componentRef.instance;
        instance.option = this.option;
        instance.form = this.form;
        instance.inputRef = this.inputRef;
        instance.errorRef = this.errorRef;
        // instance.labelRef = this.labelRef || this.labelDef;
        if (typeof instance['ControlInit'] === 'function') {
            instance['ControlInit']();
        }
        this.componentRef = componentRef;
    };
    /**
     * @return {?}
     */
    ControlOutletComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    ControlOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-outlet',
                    template: "<ng-template #labelDef let-context>\r\n\t<label class=\"control__label control__label--{{context.option.schema}}\" [attr.for]=\"context.option.key\">{{ context.option.label | label }}</label>\r\n</ng-template>\r\n<ng-template #descriptionDef let-context>\r\n\t<div class=\"control__description control__description--{{context.option.schema}}\" *ngIf=\"context.option.description\">\r\n\t\t{{ context.option.description | label }}\r\n\t</div>\r\n</ng-template>\r\n<div class=\"control control--{{context.option.schema}}\" [ngClass]=\"context.classes\">\r\n\t<ng-container *ngTemplateOutlet=\"context.labelRef || labelDef; context: { $implicit: context }\"></ng-container>\r\n\t<ng-template #outlet></ng-template>\r\n</div>\r\n<ng-container *ngTemplateOutlet=\"context.descriptionRef || descriptionDef; context: { $implicit: context }\"></ng-container>\r\n"
                }] }
    ];
    /** @nocollapse */
    ControlOutletComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ControlService }
    ]; };
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
    return ControlOutletComponent;
}());
export { ControlOutletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixZQUFZLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNNLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBaUNDLGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDO0lBakJMLHNCQUFJLDJDQUFPOzs7O1FBQVg7WUFDQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBOzs7O0lBT0QsZ0RBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjs7WUFDTyxTQUFTLEdBQTJCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQzVFLE9BQU8sR0FBdUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUNwSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkE1REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGsyQkFBNEM7aUJBQzVDOzs7O2dCQVRvRCx3QkFBd0I7Z0JBSXBFLGNBQWM7OzsyQkFRckIsWUFBWSxTQUFDLFVBQVU7MkJBQ3ZCLFlBQVksU0FBQyxVQUFVOzJCQUN2QixZQUFZLFNBQUMsVUFBVTtpQ0FDdkIsWUFBWSxTQUFDLGdCQUFnQjtpQ0FDN0IsU0FBUyxTQUFDLGdCQUFnQjsyQkFDMUIsU0FBUyxTQUFDLFVBQVU7bUNBQ3BCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7eUJBRTlDLEtBQUs7dUJBQ0wsS0FBSzs7SUErQ1AsNkJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTFEWSxzQkFBc0I7OztJQUVsQywwQ0FBa0Y7O0lBQ2xGLDBDQUFrRjs7SUFDbEYsMENBQWtGOztJQUNsRixnREFBOEY7O0lBQzlGLGdEQUEyRjs7SUFDM0YsMENBQStFOztJQUMvRSxrREFBb0Y7O0lBRXBGLHdDQUFxQzs7SUFDckMsc0NBQXlCOzs7OztJQUV6Qiw4Q0FBcUQ7Ozs7O0lBaUJwRCwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yT2ZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBUeXBlLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NvbnRyb2wuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NvbnRyb2wtb3V0bGV0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xPdXRsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5cdEBDb250ZW50Q2hpbGQoJ2lucHV0UmVmJykgaW5wdXRSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHRAQ29udGVudENoaWxkKCdlcnJvclJlZicpIGVycm9yUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XHJcblx0QENvbnRlbnRDaGlsZCgnbGFiZWxSZWYnKSBsYWJlbFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xyXG5cdEBDb250ZW50Q2hpbGQoJ2Rlc2NyaXB0aW9uUmVmJykgZGVzY3JpcHRpb25SZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHRAVmlld0NoaWxkKCdkZXNjcmlwdGlvbkRlZicpIGRlc2NyaXB0aW9uRGVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XHJcblx0QFZpZXdDaGlsZCgnbGFiZWxEZWYnKSBsYWJlbERlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xyXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuXHRASW5wdXQoKSBvcHRpb246IElDb250cm9sT3B0aW9uPGFueT47XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbnRyb2xDb21wb25lbnQ+O1xyXG5cclxuXHRnZXQgY29udGV4dCgpOiBDb250cm9sT3V0bGV0Q29tcG9uZW50IHtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNsYXNzZXMoKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ2NvbnRyb2wnLCB0aGlzLm9wdGlvbi5rZXksIHRoaXMuZm9ybS5jb250cm9scyk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgPyB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jbGFzc2VzIDogbnVsbDtcclxuXHR9XHJcblxyXG5cdGdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRyb2wgOiBudWxsO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2UsXHJcblx0KSB7IH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zdCBjb21wb25lbnQ6IFR5cGU8Q29udHJvbENvbXBvbmVudD4gPSB0aGlzLmNvbnRyb2xTZXJ2aWNlLnJlc29sdmUodGhpcy5vcHRpb24pO1xyXG5cdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDb250cm9sQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuXHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuXHRcdGluc3RhbmNlLm9wdGlvbiA9IHRoaXMub3B0aW9uO1xyXG5cdFx0aW5zdGFuY2UuZm9ybSA9IHRoaXMuZm9ybTtcclxuXHRcdGluc3RhbmNlLmlucHV0UmVmID0gdGhpcy5pbnB1dFJlZjtcclxuXHRcdGluc3RhbmNlLmVycm9yUmVmID0gdGhpcy5lcnJvclJlZjtcclxuXHRcdC8vIGluc3RhbmNlLmxhYmVsUmVmID0gdGhpcy5sYWJlbFJlZiB8fCB0aGlzLmxhYmVsRGVmO1xyXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnQ29udHJvbEluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRpbnN0YW5jZVsnQ29udHJvbEluaXQnXSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==