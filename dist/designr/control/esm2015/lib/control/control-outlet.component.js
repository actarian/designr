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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29udHJvbC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9sL2NvbnRyb2wtb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQW9CLHdCQUF3QixFQUFnQixZQUFZLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQVEsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNNLE9BQU8sRUFBbUIsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBNkJsQyxZQUNTLHdCQUFrRCxFQUNsRCxjQUE4QjtRQUQ5Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFDOzs7O0lBakJMLElBQUksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNWLCtEQUErRDtRQUMvRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDViwrREFBK0Q7UUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOzs7O0lBT0QsZUFBZTtJQUNmLENBQUM7Ozs7SUFFRCxRQUFROztjQUNELFNBQVMsR0FBMkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Y0FDNUUsT0FBTyxHQUF1QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1FBQ3BILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztjQUM3RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7UUFDdEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLHNEQUFzRDtRQUN0RCxJQUFJLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUNsRCxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUE1REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGsyQkFBNEM7YUFDNUM7Ozs7WUFUb0Qsd0JBQXdCO1lBSXBFLGNBQWM7Ozt1QkFRckIsWUFBWSxTQUFDLFVBQVU7dUJBQ3ZCLFlBQVksU0FBQyxVQUFVO3VCQUN2QixZQUFZLFNBQUMsVUFBVTs2QkFDdkIsWUFBWSxTQUFDLGdCQUFnQjs2QkFDN0IsU0FBUyxTQUFDLGdCQUFnQjt1QkFDMUIsU0FBUyxTQUFDLFVBQVU7K0JBQ3BCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7cUJBRTlDLEtBQUs7bUJBQ0wsS0FBSzs7OztJQVROLDBDQUFrRjs7SUFDbEYsMENBQWtGOztJQUNsRiwwQ0FBa0Y7O0lBQ2xGLGdEQUE4Rjs7SUFDOUYsZ0RBQTJGOztJQUMzRiwwQ0FBK0U7O0lBQy9FLGtEQUFvRjs7SUFFcEYsd0NBQXFDOztJQUNyQyxzQ0FBeUI7Ozs7O0lBRXpCLDhDQUFxRDs7Ozs7SUFpQnBELDBEQUEwRDs7Ozs7SUFDMUQsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3JPZkNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFR5cGUsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSUNvbnRyb2xPcHRpb24gfSBmcm9tICcuL2NvbnRyb2wtb3B0aW9uJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vY29udHJvbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY29udHJvbC1vdXRsZXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29udHJvbC1vdXRsZXQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QENvbnRlbnRDaGlsZCgnaW5wdXRSZWYnKSBpbnB1dFJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xyXG5cdEBDb250ZW50Q2hpbGQoJ2Vycm9yUmVmJykgZXJyb3JSZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHRAQ29udGVudENoaWxkKCdsYWJlbFJlZicpIGxhYmVsUmVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XHJcblx0QENvbnRlbnRDaGlsZCgnZGVzY3JpcHRpb25SZWYnKSBkZXNjcmlwdGlvblJlZjogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8Q29udHJvbENvbXBvbmVudD4+O1xyXG5cdEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uRGVmJykgZGVzY3JpcHRpb25EZWY6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PENvbnRyb2xDb21wb25lbnQ+PjtcclxuXHRAVmlld0NoaWxkKCdsYWJlbERlZicpIGxhYmVsRGVmOiBUZW1wbGF0ZVJlZjxOZ0Zvck9mQ29udGV4dDxDb250cm9sQ29tcG9uZW50Pj47XHJcblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG5cdEBJbnB1dCgpIG9wdGlvbjogSUNvbnRyb2xPcHRpb248YW55PjtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29udHJvbENvbXBvbmVudD47XHJcblxyXG5cdGdldCBjb250ZXh0KCk6IENvbnRyb2xPdXRsZXRDb21wb25lbnQge1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXQgY2xhc3NlcygpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnY29udHJvbCcsIHRoaXMub3B0aW9uLmtleSwgdGhpcy5mb3JtLmNvbnRyb2xzKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiA/IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNsYXNzZXMgOiBudWxsO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbnRyb2woKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdjb250cm9sJywgdGhpcy5vcHRpb24ua2V5LCB0aGlzLmZvcm0uY29udHJvbHMpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50UmVmID8gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY29udHJvbCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRyb2xTZXJ2aWNlOiBDb250cm9sU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnN0IGNvbXBvbmVudDogVHlwZTxDb250cm9sQ29tcG9uZW50PiA9IHRoaXMuY29udHJvbFNlcnZpY2UucmVzb2x2ZSh0aGlzLm9wdGlvbik7XHJcblx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENvbnRyb2xDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuXHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG5cdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuXHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG5cdFx0aW5zdGFuY2Uub3B0aW9uID0gdGhpcy5vcHRpb247XHJcblx0XHRpbnN0YW5jZS5mb3JtID0gdGhpcy5mb3JtO1xyXG5cdFx0aW5zdGFuY2UuaW5wdXRSZWYgPSB0aGlzLmlucHV0UmVmO1xyXG5cdFx0aW5zdGFuY2UuZXJyb3JSZWYgPSB0aGlzLmVycm9yUmVmO1xyXG5cdFx0Ly8gaW5zdGFuY2UubGFiZWxSZWYgPSB0aGlzLmxhYmVsUmVmIHx8IHRoaXMubGFiZWxEZWY7XHJcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydDb250cm9sSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdGluc3RhbmNlWydDb250cm9sSW5pdCddKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19