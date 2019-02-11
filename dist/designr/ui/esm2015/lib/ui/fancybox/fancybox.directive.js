/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
// use $ for jquery // !!! rimuovere
export class FancyboxDirective {
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} element
     */
    constructor(platformId, zone, element) {
        this.platformId = platformId;
        this.zone = zone;
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                $(() => {
                    // $(this.element.nativeElement).fancybox(this.fancybox);
                    /** @type {?} */
                    const group = Array.from($(this.element.nativeElement).find(this.target));
                    group.forEach((item, i) => item.addEventListener('click', (e) => {
                        $.fancybox.open(group, this.fancybox, i);
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }));
                    // console.log(group);
                });
            });
        }
    }
}
FancyboxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fancybox]',
            },] }
];
/** @nocollapse */
FancyboxDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef }
];
FancyboxDirective.propDecorators = {
    fancybox: [{ type: Input }],
    target: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FancyboxDirective.prototype.fancybox;
    /** @type {?} */
    FancyboxDirective.prototype.target;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3lib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvZmFuY3lib3gvZmFuY3lib3guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVd6RyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFLN0IsWUFDOEIsVUFBa0IsRUFDdkMsSUFBWSxFQUNaLE9BQW1CO1FBRkUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUN4QixDQUFDOzs7O0lBRUwsZUFBZTtRQUNkLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxDQUFDLENBQUMsR0FBRyxFQUFFOzs7MEJBRUEsS0FBSyxHQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWlCLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ3BGLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25CLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNKLHNCQUFzQjtnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7O1lBOUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTthQUN0Qjs7Ozt5Q0FRRSxNQUFNLFNBQUMsV0FBVztZQWpCeUMsTUFBTTtZQUFqQyxVQUFVOzs7dUJBYTNDLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLHFDQUF1Qjs7SUFDdkIsbUNBQXdCOzs7OztJQUd2Qix1Q0FBK0M7Ozs7O0lBQy9DLGlDQUFvQjs7Ozs7SUFDcEIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgJGZhbmN5Ym94IGZyb20gJ0BmYW5jeWFwcHMvZmFuY3lib3gnO1xyXG4vLyBpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7IC8vIHRoaXMgcmVsb2FkIGpxdWVyeSBicmVha2luZyBmYW5jeWJveFxyXG5cclxuLy8gY29uc3QgJDogYW55ID0gd2luZG93ID8gKHdpbmRvd1snJCddIHx8IHt9KSA6IHt9OyAvLyAhISEgcmltdW92ZXJlXHJcbmRlY2xhcmUgdmFyICQ6IGFueTsgLy8gdXNlICQgZm9yIGpxdWVyeSAvLyAhISEgcmltdW92ZXJlXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tmYW5jeWJveF0nLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhbmN5Ym94RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5cdEBJbnB1dCgpIGZhbmN5Ym94OiBhbnk7XHJcblx0QElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG5cdCkgeyB9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0JCgoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5mYW5jeWJveCh0aGlzLmZhbmN5Ym94KTtcclxuXHRcdFx0XHRcdGNvbnN0IGdyb3VwOiBhbnlbXSA9IEFycmF5LmZyb20oJCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuZmluZCh0aGlzLnRhcmdldCkpO1xyXG5cdFx0XHRcdFx0Z3JvdXAuZm9yRWFjaCgoaXRlbTogSFRNTEVsZW1lbnQsIGk6IG51bWJlcikgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0XHRcdCQuZmFuY3lib3gub3Blbihncm91cCwgdGhpcy5mYW5jeWJveCwgaSk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdyb3VwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=