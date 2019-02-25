/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { CORE_MODULES } from './core.modules';
var LazyModuleDirective = /** @class */ (function () {
    function LazyModuleDirective(modules, injector, loader, container) {
        this.modules = modules;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    LazyModuleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader.load(this.modules[this.lazyModule]).then(function (moduleFactory) {
            _this.moduleRef = moduleFactory.create(_this.injector);
            /** @type {?} */
            var rootComponentType = _this.moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            console.log(rootComponentType);
            /** @type {?} */
            var factory = _this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            _this.container.createComponent(factory);
        });
    };
    /**
     * @return {?}
     */
    LazyModuleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.moduleRef) {
            this.moduleRef.destroy();
        }
    };
    LazyModuleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyModule]'
                },] }
    ];
    /** @nocollapse */
    LazyModuleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CORE_MODULES,] }] },
        { type: Injector },
        { type: NgModuleFactoryLoader },
        { type: ViewContainerRef }
    ]; };
    LazyModuleDirective.propDecorators = {
        lazyModule: [{ type: Input }]
    };
    return LazyModuleDirective;
}());
export { LazyModuleDirective };
if (false) {
    /** @type {?} */
    LazyModuleDirective.prototype.lazyModule;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.moduleRef;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.modules;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    LazyModuleDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xhenktbW9kdWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBbUIscUJBQXFCLEVBQXdDLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25LLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRDtJQVFDLDZCQUMrQixPQUFPLEVBQzdCLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSEwsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsYUFBbUM7WUFDeEYsS0FBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQy9DLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztZQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2dCQUN6QixPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNGLENBQUM7O2dCQTlCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7aUJBQ3hCOzs7O2dEQU9FLE1BQU0sU0FBQyxZQUFZO2dCQWRNLFFBQVE7Z0JBQTBCLHFCQUFxQjtnQkFBd0MsZ0JBQWdCOzs7NkJBVXpJLEtBQUs7O0lBMkJQLDBCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E3QlksbUJBQW1COzs7SUFFL0IseUNBQXVDOzs7OztJQUN2Qyx3Q0FBb0M7Ozs7O0lBR25DLHNDQUFxQzs7Ozs7SUFDckMsdUNBQTBCOzs7OztJQUMxQixxQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbmplY3RvciwgSW5wdXQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOZ01vZHVsZVJlZiwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVNb2R1bGVzLCBDT1JFX01PRFVMRVMgfSBmcm9tICcuL2NvcmUubW9kdWxlcyc7XG5cbmV4cG9ydCB0eXBlIE1vZHVsZVdpdGhSb290ID0gVHlwZTxhbnk+ICYgeyByb290Q29tcG9uZW50OiBUeXBlPGFueT4gfTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2xhenlNb2R1bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMYXp5TW9kdWxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIGxhenlNb2R1bGU6IGtleW9mIENvcmVNb2R1bGVzO1xuXHRwcml2YXRlIG1vZHVsZVJlZjogTmdNb2R1bGVSZWY8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPUkVfTU9EVUxFUykgcHJpdmF0ZSBtb2R1bGVzLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG5cdCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2FkZXIubG9hZCh0aGlzLm1vZHVsZXNbdGhpcy5sYXp5TW9kdWxlXSkudGhlbigobW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcblx0XHRcdHRoaXMubW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cdFx0XHRjb25zdCByb290Q29tcG9uZW50VHlwZSA9IHRoaXMubW9kdWxlUmVmLmluamVjdG9yLmdldCgnTEFaWV9ST09UX0NPTVBPTkVOVCcpO1xuXHRcdFx0Y29uc29sZS5sb2cocm9vdENvbXBvbmVudFR5cGUpO1xuXHRcdFx0Y29uc3QgZmFjdG9yeSA9IHRoaXMubW9kdWxlUmVmLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShyb290Q29tcG9uZW50VHlwZSk7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5tb2R1bGVSZWYpIHtcblx0XHRcdHRoaXMubW9kdWxlUmVmLmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxufVxuIl19