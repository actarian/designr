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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFtQixxQkFBcUIsRUFBd0MsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakwsT0FBTyxFQUFXLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUk1QztJQVVDLHlCQUMwQixPQUFPLEVBQ3hCLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSFYsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsYUFBbUM7O2dCQUM5RSxTQUFTLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDOztnQkFDdEIsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7OztnQkFFakUsT0FBTyxHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBQ3ZGLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7O2dCQUN0RCxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVE7WUFDdEMsb0NBQW9DO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkF2Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO2lCQUNwQjs7OztnREFTRSxNQUFNLFNBQUMsT0FBTztnQkFoQnlCLFFBQVE7Z0JBQTBCLHFCQUFxQjtnQkFBd0MsZ0JBQWdCOzs7eUJBVXZKLEtBQUs7dUJBQ0wsS0FBSzs7SUFtQ1Asc0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXRDWSxlQUFlOzs7SUFFM0IsaUNBQStCOztJQUMvQiwrQkFBb0I7Ozs7O0lBQ3BCLHFDQUFxQzs7Ozs7SUFDckMsd0NBQXlDOzs7OztJQUd4QyxrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUEwQjs7Ozs7SUFDMUIsaUNBQXFDOzs7OztJQUNyQyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSW5qZWN0LCBJbmplY3RvciwgSW5wdXQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOZ01vZHVsZVJlZiwgT25EZXN0cm95LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnVuZGxlcywgQlVORExFUyB9IGZyb20gJy4vYnVuZGxlJztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZHVsZVdpdGhSb290ID0gVHlwZTxhbnk+ICYgeyByb290Q29tcG9uZW50OiBUeXBlPGFueT4gfTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2J1bmRsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBJbnB1dCgpIGJ1bmRsZToga2V5b2YgQnVuZGxlcztcclxuXHRASW5wdXQoKSBkYXRhPzogYW55O1xyXG5cdHByaXZhdGUgbW9kdWxlUmVmXzogTmdNb2R1bGVSZWY8YW55PjtcclxuXHRwcml2YXRlIGNvbXBvbmVudFJlZl86IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoQlVORExFUykgcHJpdmF0ZSBidW5kbGVzLFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRwcml2YXRlIGxvYWRlcjogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubG9hZGVyLmxvYWQodGhpcy5idW5kbGVzW3RoaXMuYnVuZGxlXSkudGhlbigobW9kdWxlRmFjdG9yeTogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcclxuXHRcdFx0Y29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblx0XHRcdHRoaXMubW9kdWxlUmVmXyA9IG1vZHVsZVJlZjtcclxuXHRcdFx0Y29uc3Qgcm9vdENvbXBvbmVudFR5cGUgPSBtb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KCdMQVpZX1JPT1RfQ09NUE9ORU5UJyk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJvb3RDb21wb25lbnRUeXBlKTtcclxuXHRcdFx0Y29uc3QgZmFjdG9yeSA9IG1vZHVsZVJlZi5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnkocm9vdENvbXBvbmVudFR5cGUpO1xyXG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG5cdFx0XHQvLyBpbnN0YW5jZS5kYXRhID0gdGhpcy5kYXRhOyAvLyAhISFcclxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWZfID0gY29tcG9uZW50UmVmO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudFJlZl8pIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWZfLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm1vZHVsZVJlZl8pIHtcclxuXHRcdFx0dGhpcy5tb2R1bGVSZWZfLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==