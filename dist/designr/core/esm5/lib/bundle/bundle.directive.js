/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { BUNDLES } from './bundle';
var BundleDirective = /** @class */ (function () {
    function BundleDirective(bundles, injector, loader, container) {
        this.bundles = bundles;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    /**
     * @return {?}
     */
    BundleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loader.load(this.bundles[this.bundle]).then(function (moduleFactory) {
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
    BundleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.moduleRef) {
            this.moduleRef.destroy();
        }
    };
    BundleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bundle]'
                },] }
    ];
    /** @nocollapse */
    BundleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [BUNDLES,] }] },
        { type: Injector },
        { type: NgModuleFactoryLoader },
        { type: ViewContainerRef }
    ]; };
    BundleDirective.propDecorators = {
        bundle: [{ type: Input }]
    };
    return BundleDirective;
}());
export { BundleDirective };
if (false) {
    /** @type {?} */
    BundleDirective.prototype.bundle;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.moduleRef;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.bundles;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.loader;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQW1CLHFCQUFxQixFQUF3QyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSyxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTVDO0lBUUMseUJBQzBCLE9BQU8sRUFDeEIsUUFBa0IsRUFDbEIsTUFBNkIsRUFDN0IsU0FBMkI7UUFIVixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFFcEMsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxhQUFtQztZQUNwRixLQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztnQkFDL0MsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7Z0JBQ3pCLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO1lBQ2xHLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtpQkFDcEI7Ozs7Z0RBT0UsTUFBTSxTQUFDLE9BQU87Z0JBZFcsUUFBUTtnQkFBMEIscUJBQXFCO2dCQUF3QyxnQkFBZ0I7Ozt5QkFVekksS0FBSzs7SUEyQlAsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTdCWSxlQUFlOzs7SUFFM0IsaUNBQStCOzs7OztJQUMvQixvQ0FBb0M7Ozs7O0lBR25DLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQTBCOzs7OztJQUMxQixpQ0FBcUM7Ozs7O0lBQ3JDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbmplY3RvciwgSW5wdXQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOZ01vZHVsZVJlZiwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1bmRsZXMsIEJVTkRMRVMgfSBmcm9tICcuL2J1bmRsZSc7XG5cbmV4cG9ydCB0eXBlIE1vZHVsZVdpdGhSb290ID0gVHlwZTxhbnk+ICYgeyByb290Q29tcG9uZW50OiBUeXBlPGFueT4gfTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2J1bmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJ1bmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBidW5kbGU6IGtleW9mIEJ1bmRsZXM7XG5cdHByaXZhdGUgbW9kdWxlUmVmOiBOZ01vZHVsZVJlZjxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQlVORExFUykgcHJpdmF0ZSBidW5kbGVzLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG5cdCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2FkZXIubG9hZCh0aGlzLmJ1bmRsZXNbdGhpcy5idW5kbGVdKS50aGVuKChtb2R1bGVGYWN0b3J5OiBOZ01vZHVsZUZhY3Rvcnk8YW55PikgPT4ge1xuXHRcdFx0dGhpcy5tb2R1bGVSZWYgPSBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblx0XHRcdGNvbnN0IHJvb3RDb21wb25lbnRUeXBlID0gdGhpcy5tb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KCdMQVpZX1JPT1RfQ09NUE9ORU5UJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhyb290Q29tcG9uZW50VHlwZSk7XG5cdFx0XHRjb25zdCBmYWN0b3J5ID0gdGhpcy5tb2R1bGVSZWYuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHJvb3RDb21wb25lbnRUeXBlKTtcblx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLm1vZHVsZVJlZikge1xuXHRcdFx0dGhpcy5tb2R1bGVSZWYuZGVzdHJveSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=