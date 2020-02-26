import { Directive, Inject, Injector, Input, NgModuleFactoryLoader, ViewContainerRef } from '@angular/core';
import { BUNDLES } from './bundle';
import * as i0 from "@angular/core";
var BundleDirective = /** @class */ (function () {
    function BundleDirective(bundles, injector, loader, container) {
        this.bundles = bundles;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    BundleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.load(this.bundles[this.bundle]).then(function (moduleFactory) {
            var moduleRef = moduleFactory.create(_this.injector);
            _this.moduleRef_ = moduleRef;
            var rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            // console.log(rootComponentType);
            var factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            var componentRef = _this.container.createComponent(factory);
            var instance = componentRef.instance;
            // instance.data = this.data; // !!!
            _this.componentRef_ = componentRef;
        });
    };
    BundleDirective.prototype.ngOnDestroy = function () {
        if (this.componentRef_) {
            this.componentRef_.destroy();
        }
        if (this.moduleRef_) {
            this.moduleRef_.destroy();
        }
    };
    BundleDirective.ɵfac = function BundleDirective_Factory(t) { return new (t || BundleDirective)(i0.ɵɵdirectiveInject(BUNDLES), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.NgModuleFactoryLoader), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    BundleDirective.ɵdir = i0.ɵɵdefineDirective({ type: BundleDirective, selectors: [["", "bundle", ""]], inputs: { bundle: "bundle", data: "data" } });
    return BundleDirective;
}());
export { BundleDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BundleDirective, [{
        type: Directive,
        args: [{
                selector: '[bundle]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [BUNDLES]
            }] }, { type: i0.Injector }, { type: i0.NgModuleFactoryLoader }, { type: i0.ViewContainerRef }]; }, { bundle: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQW1CLHFCQUFxQixFQUF3QyxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqTCxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUk1QztJQVVDLHlCQUMwQixPQUFPLEVBQ3hCLFFBQWtCLEVBQ2xCLE1BQTZCLEVBQzdCLFNBQTJCO1FBSFYsWUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBRXBDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQW1DO1lBQ3BGLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN4RSxrQ0FBa0M7WUFDbEMsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDOUYsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0QsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxvQ0FBb0M7WUFDcEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDRixDQUFDO2tGQXBDVyxlQUFlLHVCQVFsQixPQUFPO3dEQVJKLGVBQWU7MEJBUjVCO0NBOENDLEFBekNELElBeUNDO1NBdENZLGVBQWU7a0RBQWYsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7YUFDcEI7O3NCQVNFLE1BQU07dUJBQUMsT0FBTzs7a0JBTmYsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBJbmplY3QsIEluamVjdG9yLCBJbnB1dCwgTmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5nTW9kdWxlUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnVuZGxlcywgQlVORExFUyB9IGZyb20gJy4vYnVuZGxlJztcblxuZXhwb3J0IHR5cGUgTW9kdWxlV2l0aFJvb3QgPSBUeXBlPGFueT4gJiB7IHJvb3RDb21wb25lbnQ6IFR5cGU8YW55PiB9O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYnVuZGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgQnVuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpIGJ1bmRsZToga2V5b2YgQnVuZGxlcztcblx0QElucHV0KCkgZGF0YT86IGFueTtcblx0cHJpdmF0ZSBtb2R1bGVSZWZfOiBOZ01vZHVsZVJlZjxhbnk+O1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZl86IENvbXBvbmVudFJlZjxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoQlVORExFUykgcHJpdmF0ZSBidW5kbGVzLFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgbG9hZGVyOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG5cdCkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5sb2FkZXIubG9hZCh0aGlzLmJ1bmRsZXNbdGhpcy5idW5kbGVdKS50aGVuKChtb2R1bGVGYWN0b3J5OiBOZ01vZHVsZUZhY3Rvcnk8YW55PikgPT4ge1xuXHRcdFx0Y29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZl8gPSBtb2R1bGVSZWY7XG5cdFx0XHRjb25zdCByb290Q29tcG9uZW50VHlwZSA9IG1vZHVsZVJlZi5pbmplY3Rvci5nZXQoJ0xBWllfUk9PVF9DT01QT05FTlQnKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJvb3RDb21wb25lbnRUeXBlKTtcblx0XHRcdGNvbnN0IGZhY3RvcnkgPSBtb2R1bGVSZWYuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHJvb3RDb21wb25lbnRUeXBlKTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdFx0Ly8gaW5zdGFuY2UuZGF0YSA9IHRoaXMuZGF0YTsgLy8gISEhXG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZl8gPSBjb21wb25lbnRSZWY7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5jb21wb25lbnRSZWZfKSB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZl8uZGVzdHJveSgpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5tb2R1bGVSZWZfKSB7XG5cdFx0XHR0aGlzLm1vZHVsZVJlZl8uZGVzdHJveSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=