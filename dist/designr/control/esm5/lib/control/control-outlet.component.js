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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixZQUFZLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNNLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBaUNDLGdDQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDO0lBakJMLHNCQUFJLDJDQUFPOzs7O1FBQVg7WUFDQyxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQU87Ozs7UUFBWDtZQUNDLCtEQUErRDtZQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLENBQUM7OztPQUFBOzs7O0lBT0QsZ0RBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjs7WUFDTyxTQUFTLEdBQTJCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1lBQzVFLE9BQU8sR0FBdUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztRQUNwSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7WUFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkE1REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGsyQkFBNEM7aUJBQzVDOzs7O2dCQVRvRCx3QkFBd0I7Z0JBSXBFLGNBQWM7OzsyQkFRckIsWUFBWSxTQUFDLFVBQVU7MkJBQ3ZCLFlBQVksU0FBQyxVQUFVOzJCQUN2QixZQUFZLFNBQUMsVUFBVTtpQ0FDdkIsWUFBWSxTQUFDLGdCQUFnQjtpQ0FDN0IsU0FBUyxTQUFDLGdCQUFnQjsyQkFDMUIsU0FBUyxTQUFDLFVBQVU7bUNBQ3BCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7eUJBRTlDLEtBQUs7dUJBQ0wsS0FBSzs7SUErQ1AsNkJBQUM7Q0FBQSxBQTlERCxJQThEQztTQTFEWSxzQkFBc0I7OztJQUVsQywwQ0FBa0Y7O0lBQ2xGLDBDQUFrRjs7SUFDbEYsMENBQWtGOztJQUNsRixnREFBOEY7O0lBQzlGLGdEQUEyRjs7SUFDM0YsMENBQStFOztJQUMvRSxrREFBb0Y7O0lBRXBGLHdDQUFxQzs7SUFDckMsc0NBQXlCOzs7OztJQUV6Qiw4Q0FBcUQ7Ozs7O0lBaUJwRCwwREFBMEQ7Ozs7O0lBQzFELGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yT2ZDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVHlwZSwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElDb250cm9sT3B0aW9uIH0gZnJvbSAnLi9jb250cm9sLW9wdGlvbic7XG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxuXHR0ZW1wbGF0ZVVybDogJ2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuXHRAQ29udGVudENoaWxkKCdpbnB1dFJlZicpIGlucHV0UmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBDb250ZW50Q2hpbGQoJ2Vycm9yUmVmJykgZXJyb3JSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QENvbnRlbnRDaGlsZCgnbGFiZWxSZWYnKSBsYWJlbFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAQ29udGVudENoaWxkKCdkZXNjcmlwdGlvblJlZicpIGRlc2NyaXB0aW9uUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XG5cdEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uRGVmJykgZGVzY3JpcHRpb25EZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+Pjtcblx0QFZpZXdDaGlsZCgnbGFiZWxEZWYnKSBsYWJlbERlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuXHRASW5wdXQoKSBvcHRpb246IElDb250cm9sT3B0aW9uPGFueT47XG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblxuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbnRyb2xDb21wb25lbnQ+O1xuXG5cdGdldCBjb250ZXh0KCk6IENvbnRyb2xPdXRsZXRDb21wb25lbnQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0IGNsYXNzZXMoKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNsYXNzZXMgOiBudWxsO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgPyB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250cm9sIDogbnVsbDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSBjb250cm9sU2VydmljZTogQ29udHJvbFNlcnZpY2UsXG5cdCkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50OiBUeXBlPENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb250cm9sU2VydmljZS5yZXNvbHZlKHRoaXMub3B0aW9uKTtcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdGluc3RhbmNlLm9wdGlvbiA9IHRoaXMub3B0aW9uO1xuXHRcdGluc3RhbmNlLmZvcm0gPSB0aGlzLmZvcm07XG5cdFx0aW5zdGFuY2UuaW5wdXRSZWYgPSB0aGlzLmlucHV0UmVmO1xuXHRcdGluc3RhbmNlLmVycm9yUmVmID0gdGhpcy5lcnJvclJlZjtcblx0XHQvLyBpbnN0YW5jZS5sYWJlbFJlZiA9IHRoaXMubGFiZWxSZWYgfHwgdGhpcy5sYWJlbERlZjtcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydDb250cm9sSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRpbnN0YW5jZVsnQ29udHJvbEluaXQnXSgpO1xuXHRcdH1cblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=