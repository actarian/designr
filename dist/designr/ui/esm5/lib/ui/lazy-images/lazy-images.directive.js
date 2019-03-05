/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID, Renderer2 } from '@angular/core';
// use require for polyfill
var LazyImagesDirective = /** @class */ (function () {
    function LazyImagesDirective(platformId, element, renderer, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.nativeElement = element.nativeElement;
    }
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            require('intersection-observer'); // use require for polyfill
            _this.onRegister();
        });
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.onRegister = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.newIntersectionObserver();
        /** @type {?} */
        var observer = new MutationObserver(function (mutations) { return _this.onChange(mutations); });
        /** @type {?} */
        var config = {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        };
        observer.observe(this.nativeElement, config);
        this.onChange();
        // this.observeDOMChanges(this.nativeElement, () => this.onChange);
    };
    /**
     * @param {...?} data
     * @return {?}
     */
    LazyImagesDirective.prototype.onChange = /**
     * @param {...?} data
     * @return {?}
     */
    function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        /** @type {?} */
        var images = Array.from(this.nativeElement.querySelectorAll('img[data-src], [data-srcset], [data-background-src]'));
        images.forEach(function (image) { return _this.observer.observe(image); });
    };
    /**
     * @return {?}
     */
    LazyImagesDirective.prototype.newIntersectionObserver = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
        this.observer = new IntersectionObserver(function (images) { return images.forEach(function (image) {
            if (!image.isIntersecting) {
                return;
            }
            _this.onAppearsInViewport(image.target);
        }); }, config);
        return this.observer;
    };
    /**
     * @param {?} image
     * @return {?}
     */
    LazyImagesDirective.prototype.onAppearsInViewport = /**
     * @param {?} image
     * @return {?}
     */
    function (image) {
        var _this = this;
        if (image.dataset.srcset) {
            this.renderer.setAttribute(image, 'srcset', image.dataset.srcset);
            this.renderer.removeAttribute(image, 'data-srcset');
            if (image.dataset.src) {
                this.renderer.setAttribute(image, 'src', image.dataset.src);
                this.renderer.removeAttribute(image, 'data-src');
            }
        }
        else if (image.dataset.src) {
            /** @type {?} */
            var input = image.dataset.src;
            this.onImagePreload(input, function (output) {
                _this.renderer.setAttribute(image, 'src', output);
                _this.renderer.removeAttribute(image, 'data-src');
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.renderer.addClass(image, 'ready');
                    }, 1);
                });
            });
        }
        if (image.dataset.backgroundSrc) {
            this.renderer.setStyle(image, 'background-image', "url(" + image.dataset.backgroundSrc + ")");
            this.renderer.removeAttribute(image, 'data-background-src');
        }
        if (this.observer) {
            this.observer.unobserve(image);
        }
    };
    /**
     * @param {?} src
     * @param {?} callback
     * @return {?}
     */
    LazyImagesDirective.prototype.onImagePreload = /**
     * @param {?} src
     * @param {?} callback
     * @return {?}
     */
    function (src, callback) {
        /** @type {?} */
        var img = new Image();
        img.onload = function () {
            if (typeof callback === 'function') {
                callback(img.src);
            }
        };
        img.onerror = function (e) {
            img.onerror = null;
            img.src = 'data:image/png;base64,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';
        };
        img.src = src;
    };
    LazyImagesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazy-images]'
                },] }
    ];
    /** @nocollapse */
    LazyImagesDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    LazyImagesDirective.propDecorators = {
        lazyImages: [{ type: Input }]
    };
    return LazyImagesDirective;
}());
export { LazyImagesDirective };
if (false) {
    /** @type {?} */
    LazyImagesDirective.prototype.lazyImages;
    /** @type {?} */
    LazyImagesDirective.prototype.observer;
    /** @type {?} */
    LazyImagesDirective.prototype.nativeElement;
    /**
     * @type {?}
     * @private
     */
    LazyImagesDirective.prototype.platformId;
    /** @type {?} */
    LazyImagesDirective.prototype.renderer;
    /** @type {?} */
    LazyImagesDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvbGF6eS1pbWFnZXMvbGF6eS1pbWFnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJeEg7SUFTQyw2QkFDOEIsVUFBa0IsRUFDL0MsT0FBbUIsRUFDWixRQUFtQixFQUNuQixJQUFZO1FBSFUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUV4QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFFbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtZQUM3RCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENB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QUFXO2dCQWRELFVBQVU7Z0JBQXlELFNBQVM7Z0JBQWpELE1BQU07Ozs2QkFTbkQsS0FBSzs7SUFzR1AsMEJBQUM7Q0FBQSxBQTNHRCxJQTJHQztTQXhHWSxtQkFBbUI7OztJQUUvQix5Q0FBNEI7O0lBQzVCLHVDQUErQjs7SUFDL0IsNENBQTJCOzs7OztJQUcxQix5Q0FBK0M7O0lBRS9DLHVDQUEwQjs7SUFDMUIsbUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFBMQVRGT1JNX0lELCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTsgLy8gdXNlIHJlcXVpcmUgZm9yIHBvbHlmaWxsXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tsYXp5LWltYWdlc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5SW1hZ2VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBsYXp5SW1hZ2VzOiBPYmplY3Q7XHJcblx0b2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyO1xyXG5cdG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0ZWxlbWVudDogRWxlbWVudFJlZixcclxuXHRcdHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG5cdFx0cHVibGljIHpvbmU6IE5nWm9uZSxcclxuXHQpIHtcclxuXHRcdHRoaXMubmF0aXZlRWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdHJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpOyAvLyB1c2UgcmVxdWlyZSBmb3IgcG9seWZpbGxcclxuXHRcdFx0dGhpcy5vblJlZ2lzdGVyKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblJlZ2lzdGVyKCkge1xyXG5cdFx0dGhpcy5uZXdJbnRlcnNlY3Rpb25PYnNlcnZlcigpO1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4gdGhpcy5vbkNoYW5nZShtdXRhdGlvbnMpKTtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IHtcclxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcclxuXHRcdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuXHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxyXG5cdFx0XHRzdWJ0cmVlOiB0cnVlXHJcblx0XHR9O1xyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlKCk7XHJcblx0XHQvLyB0aGlzLm9ic2VydmVET01DaGFuZ2VzKHRoaXMubmF0aXZlRWxlbWVudCwgKCkgPT4gdGhpcy5vbkNoYW5nZSk7XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZSguLi5kYXRhKSB7XHJcblx0XHRjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKHRoaXMubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdLCBbZGF0YS1zcmNzZXRdLCBbZGF0YS1iYWNrZ3JvdW5kLXNyY10nKSk7XHJcblx0XHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2U6IEhUTUxFbGVtZW50KSA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoaW1hZ2UpKTtcclxuXHR9XHJcblxyXG5cdG5ld0ludGVyc2VjdGlvbk9ic2VydmVyKCkge1xyXG5cdFx0Y29uc3QgY29uZmlnID0gdGhpcy5sYXp5SW1hZ2VzIGluc3RhbmNlb2YgT2JqZWN0ID8gdGhpcy5sYXp5SW1hZ2VzIDogdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoaW1hZ2VzOiBhbnlbXSkgPT4gaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xyXG5cdFx0XHRpZiAoIWltYWdlLmlzSW50ZXJzZWN0aW5nKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMub25BcHBlYXJzSW5WaWV3cG9ydChpbWFnZS50YXJnZXQpO1xyXG5cdFx0fSksIGNvbmZpZyk7XHJcblx0XHRyZXR1cm4gdGhpcy5vYnNlcnZlcjtcclxuXHR9XHJcblxyXG5cdG9uQXBwZWFyc0luVmlld3BvcnQoaW1hZ2U6IGFueSkge1xyXG5cdFx0aWYgKGltYWdlLmRhdGFzZXQuc3Jjc2V0KSB7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGltYWdlLCAnc3Jjc2V0JywgaW1hZ2UuZGF0YXNldC5zcmNzZXQpO1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtc3Jjc2V0Jyk7XHJcblx0XHRcdGlmIChpbWFnZS5kYXRhc2V0LnNyYykge1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGltYWdlLCAnc3JjJywgaW1hZ2UuZGF0YXNldC5zcmMpO1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGltYWdlLCAnZGF0YS1zcmMnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChpbWFnZS5kYXRhc2V0LnNyYykge1xyXG5cdFx0XHRjb25zdCBpbnB1dCA9IGltYWdlLmRhdGFzZXQuc3JjO1xyXG5cdFx0XHR0aGlzLm9uSW1hZ2VQcmVsb2FkKGlucHV0LCAob3V0cHV0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW1hZ2UsICdzcmMnLCBvdXRwdXQpO1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGltYWdlLCAnZGF0YS1zcmMnKTtcclxuXHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoaW1hZ2UsICdyZWFkeScpO1xyXG5cdFx0XHRcdFx0fSwgMSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGltYWdlLmRhdGFzZXQuYmFja2dyb3VuZFNyYykge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltYWdlLCAnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtpbWFnZS5kYXRhc2V0LmJhY2tncm91bmRTcmN9KWApO1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtYmFja2dyb3VuZC1zcmMnKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm9ic2VydmVyKSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uSW1hZ2VQcmVsb2FkKHNyYzogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGltZy5zcmMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpbWcub25lcnJvciA9IG51bGw7XHJcblx0XHRcdGltZy5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRZ0FBQUMvQ0FNQUFBQTFrTEswQUFBQVRsQk1WRVgvLy8vTXpNeVptWm4zOS9mSHg4ZlB6OCtPam83RnhjWER3OFBuNStmUzB0THE2dXJsNWVYOC9QeVVsSlRpNHVMWDE5ZnY3KytKaVltOXZiM2QzZDJGaFlXdHJhMnFxcXFBZ0lDZG5aMnNDUjVsQUFBSlVFbEVRVlI0bk8yZDZZS3pLZ3lHYTdWYU4xenFkTDdlLzQyZWlnRVJrR29ick03SisydW1NM1Y1REVrSUNLZVF4SFVLVDZTbkNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRWlFQ0FDQVNJUUlBSUJJaEFnQWdFaUVDQUNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRTZOc2d5bkZjdnZ6cWhYd05SQmsyUlZkblFSQkVYTThmc3Jvcm1tL3grQXFJc3FucUFPNStJdjVaWFRWZmdMRTlpTERvSWVnSXBqaUN1dGo4c3JZRlVhYVpHOElJSTBzM3RZdE5RVFQxTWdxQ1JkMXNkMjBiZ2tpRFpEbUZRVW1RYm5WMW00R281b3doaW1UWXNQNjEydWI2TmdLUldtNjB2L2xMMW5WRitsUWZTaStCalVjVWJXSVZtNEJvZ3Noa1VLZG1sQ3lidEw0WU5LSmdBMSt4QVlpd2pqUUtRWmM3OHFZdzcvVDRHdFgrcjlJN0NLMVZQQ204enBmS3Bwc2FrZi8yNFJ0RW1VV1QrOG55aGRsQm1VOWpiWlQ1VFNzOGcyalVtNGxXV25oWVQ3L3QxVlA0QlZGZGxSdEoxamYwc0VzVUZGZWZrZFFyaUZySm9LN3YrYnRRUFVaU1kxK2hjaUovSUVyRjMwWFIyNmNKbGZZUkJkNGNoVDhRb1dMVXlVZEdYU2xHOFQ3UUYvSUdJbFNmNDRmbkNGWGI4blc5bmtBb0hKTHVZM3N1dThRM0NVOGdWQTQ1eGdGejN6YmhCMFNwK0FlazR5dk5JL0xoTWYyQVVKd2JpajMwS2k4alhheGpLdklDNHFJR0REUVM0MkdqQzlveHBYeUE2Q2I5cFNzZUNkbHZpVHEwWXdwNUFKRnFGVGtmSkJMMHppZytpTWFvVENLU2tLMGp3ZTZCb1lNb0ZVY3AvUVRhODFQU2R1VFFnUTVDbHFPaXNrandTY2dFSlVMdWdHR0RhRlRiVFQyUWtDZEFMazhnZ3lpbmQxN0llZ1JlRkIzcG9qWU9aQkFpY2dyREhVbmdlVXpSK0hCaktDNklVRHd0bVFXUGZnS05oTXpmRTlSTFJ3V1JpWnNlMjIrRlQ2SVJacFloSGJBWEtnaVJRa3c4dWdjU29uRmdKaE9vSUtSbm5MZ3hmRDh4ZG01eGp0Y0xFNFEwQ0MxV3BtUHNRSXFpSW5JZ21nUW1pTXZjY3pKSU5HbnVVUHI2a3NUeDhMcWhpQ0NrUVpnTlFDZFIvY1FPdGZmRjU4SXpDVVFRdGNPWDZ5U0srT3hRL05xWGlING9XcUtOQjBMa0VQYlVOOVZ5VENjSjl0b2tSQTBUTFpmQUExRkZ6bWFyWjFaT0VndE1BaHdTMm9RYVBCQ0JQV1JJR1NUYWowd2lGU0VVNmZMUlFNaDZ6R3hYU00rc1VnZUo5cVVURk4wN0xIZUpCZ0s2VzY2ZWtHNFQrYy93K1B0SXdUUVNyMDFpd1FuWENBdUVlRUNXMFpmcTl0VFFHclFjTTI5WnkzNnZXVjFuMTkvbmoycmp1RTFsdWdKWm9zSHBqV09CRUpkMU1TOHJhQmxqN2RBYTlIemlwbmpGSm1CS1kyRVR0UlpYY0psRi85WU5JSUdBbUdGejRoY2VIK3drTk5Wc0pwYkVsbGprT09VYndnS1J6WWYxQVFTRXhGZjlqdXZVZzhaczhCNDJFQ0p4d2VtTUk0RUlIY0VNUUp4amZ1YzJFbXB6U3Rub0t0ajVraGEzZGdhRUROZzRkNEFEb25HNGNBSGl6SFFTM0ViSzIvMzM5MzZURTlDYmh5VHg0SjlsOFF3SUVUZFFBaWdTaUFLdXlaWVJTaEJBUXFueTgzL3ZlbWY2aktEM1l2ai81Z3drWXNENnkrd2dJTTJPQ293N1FBSUJOU05yNWorQ01Fa01Oakw0QmRiZWg2L244QVVHUjh0bVFJQ1R3Qm5oUUFJaFFwbjFiMG9rR0R5bWtsbHhFcEJablNISW5tcndtSEJwZFd3SGNYTDNidFlKQjRSSXA2d09YQVVCVVZUSnJDWWt6djhHTTcrejBidnkzK3dnUkswWUk2WENBUkc2MHQwSkNDT2Z1UEpiejhFR0hqL2M4elg4Vi9iZzM2L25uS1gwbGlpM2dBSkNCQTFyYWpBRllXWlduRVFxUXd0L3ZEYzJoTSs2YWE2ejRWUDBRRkhDQmc0SXVDSjdUMUFEY1c3NUdlZEl4TnpQQ0FzUjNURTdDT2p4b3N6Y3h3RlJPWUtHQVdJd2VJTkVNWWtWaitsMzdDQkUyTUJJc25GQVFHTk5yRjVMQThHdThIbXFlVXdnRWZQc05HRUxRSlNKd3pXdEZBNkkyaEU5RFI4aG4xK2EyRWl3My83bnFsMEE0b1JZd2YwQ2lQNkVJYWVoNXhPRG4rQnRJendtQ0JIUXJYL1VRTVQ5WittUGxtTkNQc0VqQkE4cjhSSVFydlJscGJZSHdmclB1bmdteDJ4RkYyT0pqL2dUSU16TVNwRDR2NEdZeWF6eStQOENndnNJM3NHY3lURUg5M0ZNSDdFK2FpaTlLcDFFZGVDb3NUNlArQjFJRERaZ3FkNGROSTlZbFZrbS9ZY0JwSkVhaWFzZ2NUMW1acm0rcnhHS2N0elF6MGgwRWdmdGE2enJmWElmR1UxcTJ6b0p6VVVjcHZlNXBoNXhacmYrMDFMWXZwMUV2c1JIN0s4ZXNhSkNkUlpEM2MzUFE3VVFvM3JYdmdheHZ3clY4cG9sTjRsaHFMdjRCNy8vT0t0M0RoRDdxMWt1cm1KelBkb2gzdVZpL0ZzbklYTE1WeUQyVjhWZU9xNGg3MnNvMjRkM1FORU9tVlV5SlpFeU40ZzlqbXNzRytrYUc4Y1ovRnR4NzZ1U2pMWGN1K1N6SkE0ejByVm83Rk1sOFpCRG5mVXc5c25iZWE1WGFwZ0x4QjdIUHBlTWhrOUpNR3VvMWF0M3NyWjlsTkh3QmZNamRMVlg4MTlORXVBeER6TS80dldNR1ZNeHMzazVnMFE3QjJLZk0yYkMrVkEyQitKcEZFeGRhaXNmWm94WlNWaEFsUHVjUStXWVZUY1BvaC8vVm1mVkRUbW00akY1UE9nSFFpMGdkanFyempIdDBRV0N3eGpuV1E2WlZhNWxWbzExV3NCTzUxazZadDVlOU1ta0RnMlpsVUtDdDVhR21TQjJPL04yZmk1MjRIdzVROU8vSWJQU3MyMXpudVZ1NTJMUHo4N1BMOWtLRFJabGtERHc3bmQydm54ZkEyZE5HYU5tTlpWNE0zcUg3MnZJQ2k1T2dxTkhVVTJpQjc3RE4zaXczN055a3BBdjhPenhuYTc1dC96ZWs0dUUrTXN1My9JYlRRTDU3VTZUUklwdUVIN2VCTVphS0NyWHFuZENwU1NFYzU1ZS90OE4vMFI2WmdYYS9idmh0dFVDUHBPVnhQNVhDN0NzSC9HcDlNenFkSXoxSTR3VlJUNlg2U2VPc0tLSXZzWU1ob3lLN2lIV21QR3hLTkIwN1NMWnk5MzNxa1BxT2xSb0IxYkhPNlNEMlBzNlZHUGpRRnlvZHlTaExBZTQ5NVhKRk52RnkzOUhqeWx0WS9kcjFTblBENmtmMmtzbmNZVFZDNVgxTEwyUk9NWjZsbjZXSWgyajZIRldPRlhXdkkwczc0cS9LV1VkNU1Pc2Vhc3NGUFh4NHVCQ29XSVF4MWtGZWJKT09uSU44MURyWXROSzZjcUJhZTE4Y1dUYVRRRkUrMnRJVFhkTGVldEVZWDFWajRGOWhjcUpmSUxROXVEcFZwOHFyUC9HSGp5MEs5TW9mWit1ZXZrK1hkbGYycWZyUkR1M0thZXc3dVUzKysvbFg5M0w3MlRmM2ZFeXQ3dWp1ZGZsWDluZHNkZjhmcCsxMk8reit4L3M5OW1MZG9DVm9qMkJwV2lYYUNuYU4xdzVJKzBrTDFVMkZZK1NCZzcrV1YyOXpyanc5UlVRdmNxdzZiZklEa1RZZVA3UWg5TEdzV3V5VjMwTkJLZ01wYjVFQVBSdEVMc1JnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFFUWdRZ1FBUkNCQ0JBQkVJRUlFQUVRZ1FnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFQVUdRdVA0RFQyUndoeVVrZ2M0QUFBQUFTVVZPUks1Q1lJST0nO1xyXG5cdFx0fTtcclxuXHRcdGltZy5zcmMgPSBzcmM7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=