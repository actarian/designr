/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.loader.load(this.bundles[this.bundle]).then((/**
         * @param {?} moduleFactory
         * @return {?}
         */
        function (moduleFactory) {
            /** @type {?} */
            var moduleRef = moduleFactory.create(_this.injector);
            _this.moduleRef_ = moduleRef;
            /** @type {?} */
            var rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            // console.log(rootComponentType);
            /** @type {?} */
            var factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            /** @type {?} */
            var componentRef = _this.container.createComponent(factory);
            /** @type {?} */
            var instance = componentRef.instance;
            // instance.data = this.data; // !!!
            _this.componentRef_ = componentRef;
        }));
    };
    /**
     * @return {?}
     */
    BundleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.componentRef_) {
            this.componentRef_.destroy();
        }
        if (this.moduleRef_) {
            this.moduleRef_.destroy();
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
        bundle: [{ type: Input }],
        data: [{ type: Input }]
    };
    return BundleDirective;
}());
export { BundleDirective };
if (false) {
    /** @type {?} */
    BundleDirective.prototype.bundle;
    /** @type {?} */
    BundleDirective.prototype.data;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.moduleRef_;
    /**
     * @type {?}
     * @private
     */
    BundleDirective.prototype.componentRef_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFtQixxQkFBcUIsRUFBd0MsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakwsT0FBTyxFQUFXLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk1QztJQVVDLHlCQUMwQixPQUFPLEVBQ3hCLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSFYsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsYUFBbUM7O2dCQUM5RSxTQUFTLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDOztnQkFDdEIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7OztnQkFFakUsT0FBTyxHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBQ3ZGLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2dCQUN0RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7WUFDdEMsb0NBQW9DO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkF2Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO2lCQUNwQjs7OztnREFTRSxNQUFNLFNBQUMsT0FBTztnQkFoQnlCLFFBQVE7Z0JBQTBCLHFCQUFxQjtnQkFBd0MsZ0JBQWdCOzs7eUJBVXZKLEtBQUs7dUJBQ0wsS0FBSzs7SUFtQ1Asc0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXRDWSxlQUFlOzs7SUFFM0IsaUNBQStCOztJQUMvQiwrQkFBb0I7Ozs7O0lBQ3BCLHFDQUFxQzs7Ozs7SUFDckMsd0NBQXlDOzs7OztJQUd4QyxrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUEwQjs7Ozs7SUFDMUIsaUNBQXFDOzs7OztJQUNyQyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSW5qZWN0LCBJbmplY3RvciwgSW5wdXQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOZ01vZHVsZVJlZiwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1bmRsZXMsIEJVTkRMRVMgfSBmcm9tICcuL2J1bmRsZSc7XG5cbmV4cG9ydCB0eXBlIE1vZHVsZVdpdGhSb290ID0gVHlwZTxhbnk+ICYgeyByb290Q29tcG9uZW50OiBUeXBlPGFueT4gfTtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2J1bmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJ1bmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKSBidW5kbGU6IGtleW9mIEJ1bmRsZXM7XG5cdEBJbnB1dCgpIGRhdGE/OiBhbnk7XG5cdHByaXZhdGUgbW9kdWxlUmVmXzogTmdNb2R1bGVSZWY8YW55Pjtcblx0cHJpdmF0ZSBjb21wb25lbnRSZWZfOiBDb21wb25lbnRSZWY8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KEJVTkRMRVMpIHByaXZhdGUgYnVuZGxlcyxcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubG9hZGVyLmxvYWQodGhpcy5idW5kbGVzW3RoaXMuYnVuZGxlXSkudGhlbigobW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcblx0XHRcdGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXHRcdFx0dGhpcy5tb2R1bGVSZWZfID0gbW9kdWxlUmVmO1xuXHRcdFx0Y29uc3Qgcm9vdENvbXBvbmVudFR5cGUgPSBtb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KCdMQVpZX1JPT1RfQ09NUE9ORU5UJyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyb290Q29tcG9uZW50VHlwZSk7XG5cdFx0XHRjb25zdCBmYWN0b3J5ID0gbW9kdWxlUmVmLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShyb290Q29tcG9uZW50VHlwZSk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRcdC8vIGluc3RhbmNlLmRhdGEgPSB0aGlzLmRhdGE7IC8vICEhIVxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWZfID0gY29tcG9uZW50UmVmO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKHRoaXMuY29tcG9uZW50UmVmXykge1xuXHRcdFx0dGhpcy5jb21wb25lbnRSZWZfLmRlc3Ryb3koKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMubW9kdWxlUmVmXykge1xuXHRcdFx0dGhpcy5tb2R1bGVSZWZfLmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxufVxuIl19