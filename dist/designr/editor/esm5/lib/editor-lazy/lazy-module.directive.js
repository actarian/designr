/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { EDITOR_MODULES_FACTORY } from './editor-lazy';
var LazyModuleDirective = /** @class */ (function () {
    function LazyModuleDirective(modulesMap, injector, loader, container) {
        this.modulesMap = modulesMap;
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
        this.loader.load(this.modulesMap[this.lazyModule]).then(function (moduleFactory) {
            _this.moduleRef = moduleFactory.create(_this.injector);
            /** @type {?} */
            var rootComponentType = _this.moduleRef.injector.get('LAZY_ENTRY_COMPONENT');
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
        { type: undefined, decorators: [{ type: Inject, args: [EDITOR_MODULES_FACTORY,] }] },
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
    LazyModuleDirective.prototype.modulesMap;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1sYXp5L2xhenktbW9kdWxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBbUIscUJBQXFCLEVBQXdDLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25LLE9BQU8sRUFBRSxzQkFBc0IsRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUloRTtJQVFDLDZCQUN5QyxVQUFVLEVBQzFDLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSEssZUFBVSxHQUFWLFVBQVUsQ0FBQTtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5BLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsYUFBbUM7WUFDM0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQy9DLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzs7Z0JBQ3ZFLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Z0JBN0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsY0FBYztpQkFDeEI7Ozs7Z0RBT0UsTUFBTSxTQUFDLHNCQUFzQjtnQkFkSixRQUFRO2dCQUEwQixxQkFBcUI7Z0JBQXdDLGdCQUFnQjs7OzZCQVV6SSxLQUFLOztJQTBCUCwwQkFBQztDQUFBLEFBL0JELElBK0JDO1NBNUJZLG1CQUFtQjs7O0lBRS9CLHlDQUFtQzs7Ozs7SUFDbkMsd0NBQW9DOzs7OztJQUduQyx5Q0FBa0Q7Ozs7O0lBQ2xELHVDQUEwQjs7Ozs7SUFDMUIscUNBQXFDOzs7OztJQUNyQyx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTmdNb2R1bGVSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFRElUT1JfTU9EVUxFU19GQUNUT1JZLCBNb2R1bGVzIH0gZnJvbSAnLi9lZGl0b3ItbGF6eSc7XG5cbmV4cG9ydCB0eXBlIE1vZHVsZVdpdGhSb290ID0gVHlwZTxhbnk+ICYgeyByb290Q29tcG9uZW50OiBUeXBlPGFueT4gfTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2xhenlNb2R1bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMYXp5TW9kdWxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIGxhenlNb2R1bGU6IGtleW9mIE1vZHVsZXM7XG5cdHByaXZhdGUgbW9kdWxlUmVmOiBOZ01vZHVsZVJlZjxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoRURJVE9SX01PRFVMRVNfRkFDVE9SWSkgcHJpdmF0ZSBtb2R1bGVzTWFwLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG5cdCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2FkZXIubG9hZCh0aGlzLm1vZHVsZXNNYXBbdGhpcy5sYXp5TW9kdWxlXSkudGhlbigobW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcblx0XHRcdHRoaXMubW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cdFx0XHRjb25zdCByb290Q29tcG9uZW50VHlwZSA9IHRoaXMubW9kdWxlUmVmLmluamVjdG9yLmdldCgnTEFaWV9FTlRSWV9DT01QT05FTlQnKTtcblx0XHRcdGNvbnN0IGZhY3RvcnkgPSB0aGlzLm1vZHVsZVJlZi5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnkocm9vdENvbXBvbmVudFR5cGUpO1xuXHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMubW9kdWxlUmVmKSB7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZi5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==