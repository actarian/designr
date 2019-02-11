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
        if (image.dataset.src) {
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
        if (image.dataset.srcset) {
            this.renderer.setAttribute(image, 'srcset', image.dataset.srcset);
            this.renderer.removeAttribute(image, 'data-srcset');
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
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII=';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl4SDtJQVVDLDZCQUM4QixVQUFrQixFQUMvQyxPQUFtQixFQUNaLFFBQW1CLEVBQ25CLElBQVk7UUFIVSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBRXhDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzNCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1lBQzdELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQjtJQUNGLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFBQSxpQkFZQztRQVhBLElBQUks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bnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFBMQVRGT1JNX0lELCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTsgLy8gdXNlIHJlcXVpcmUgZm9yIHBvbHlmaWxsXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tsYXp5LWltYWdlc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5SW1hZ2VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKVxyXG5cdGxhenlJbWFnZXM6IE9iamVjdDtcclxuXHRvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XHJcblx0bmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRlbGVtZW50OiBFbGVtZW50UmVmLFxyXG5cdFx0cHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcblx0XHRwdWJsaWMgem9uZTogTmdab25lLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0cmVxdWlyZSgnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7IC8vIHVzZSByZXF1aXJlIGZvciBwb2x5ZmlsbFxyXG5cdFx0XHR0aGlzLm9uUmVnaXN0ZXIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5vYnNlcnZlcikge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUmVnaXN0ZXIoKSB7XHJcblx0XHR0aGlzLm5ld0ludGVyc2VjdGlvbk9ic2VydmVyKCk7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB0aGlzLm9uQ2hhbmdlKG11dGF0aW9ucykpO1xyXG5cdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxyXG5cdFx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdHN1YnRyZWU6IHRydWVcclxuXHRcdH07XHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcclxuXHRcdHRoaXMub25DaGFuZ2UoKTtcclxuXHRcdC8vIHRoaXMub2JzZXJ2ZURPTUNoYW5nZXModGhpcy5uYXRpdmVFbGVtZW50LCAoKSA9PiB0aGlzLm9uQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlKC4uLmRhdGEpIHtcclxuXHRcdGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20odGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10sIFtkYXRhLXNyY3NldF0sIFtkYXRhLWJhY2tncm91bmQtc3JjXScpKTtcclxuXHRcdGltYWdlcy5mb3JFYWNoKChpbWFnZTogSFRNTEVsZW1lbnQpID0+IHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSkpO1xyXG5cdH1cclxuXHJcblx0bmV3SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XHJcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmxhenlJbWFnZXMgaW5zdGFuY2VvZiBPYmplY3QgPyB0aGlzLmxhenlJbWFnZXMgOiB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChpbWFnZXM6IGFueVtdKSA9PiBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XHJcblx0XHRcdGlmICghaW1hZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vbkFwcGVhcnNJblZpZXdwb3J0KGltYWdlLnRhcmdldCk7XHJcblx0XHR9KSwgY29uZmlnKTtcclxuXHRcdHJldHVybiB0aGlzLm9ic2VydmVyO1xyXG5cdH1cclxuXHJcblx0b25BcHBlYXJzSW5WaWV3cG9ydChpbWFnZTogYW55KSB7XHJcblx0XHRpZiAoaW1hZ2UuZGF0YXNldC5zcmMpIHtcclxuXHRcdFx0Y29uc3QgaW5wdXQgPSBpbWFnZS5kYXRhc2V0LnNyYztcclxuXHRcdFx0dGhpcy5vbkltYWdlUHJlbG9hZChpbnB1dCwgKG91dHB1dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGltYWdlLCAnc3JjJywgb3V0cHV0KTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGltYWdlLCAncmVhZHknKTtcclxuXHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChpbWFnZS5kYXRhc2V0LnNyY3NldCkge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbWFnZSwgJ3NyY3NldCcsIGltYWdlLmRhdGFzZXQuc3Jjc2V0KTtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW1hZ2UsICdkYXRhLXNyY3NldCcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGltYWdlLmRhdGFzZXQuYmFja2dyb3VuZFNyYykge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltYWdlLCAnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoJHtpbWFnZS5kYXRhc2V0LmJhY2tncm91bmRTcmN9KWApO1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtYmFja2dyb3VuZC1zcmMnKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm9ic2VydmVyKSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGltYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uSW1hZ2VQcmVsb2FkKHNyYzogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1nLm9ubG9hZCA9ICgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGltZy5zcmMpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0aW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpbWcub25lcnJvciA9IG51bGw7XHJcblx0XHRcdGltZy5zcmMgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRZ0FBQUMvQ0FNQUFBQTFrTEswQUFBQVRsQk1WRVgvLy8vTXpNeVptWm4zOS9mSHg4ZlB6OCtPam83RnhjWER3OFBuNStmUzB0THE2dXJsNWVYOC9QeVVsSlRpNHVMWDE5ZnY3KytKaVltOXZiM2QzZDJGaFlXdHJhMnFxcXFBZ0lDZG5aMnNDUjVsQUFBSlVFbEVRVlI0bk8yZDZZS3pLZ3lHYTdWYU4xenFkTDdlLzQyZWlnRVJrR29ick03SisydW1NM1Y1REVrSUNLZVF4SFVLVDZTbkNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRWlFQ0FDQVNJUUlBSUJJaEFnQWdFaUVDQUNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRTZOc2d5bkZjdnZ6cWhYd05SQmsyUlZkblFSQkVYTThmc3Jvcm1tL3grQXFJc3FucUFPNStJdjVaWFRWZmdMRTlpTERvSWVnSXBqaUN1dGo4c3JZRlVhYVpHOElJSTBzM3RZdE5RVFQxTWdxQ1JkMXNkMjBiZ2tpRFpEbUZRVW1RYm5WMW00R281b3doaW1UWXNQNjEydWI2TmdLUldtNjB2L2xMMW5WRitsUWZTaStCalVjVWJXSVZtNEJvZ3Noa1VLZG1sQ3lidEw0WU5LSmdBMSt4QVlpd2pqUUtRWmM3OHFZdzcvVDRHdFgrcjlJN0NLMVZQQ204enBmS3Bwc2FrZi8yNFJ0RW1VV1QrOG55aGRsQm1VOWpiWlQ1VFNzOGcyalVtNGxXV25oWVQ3L3QxVlA0QlZGZGxSdEoxamYwc0VzVUZGZWZrZFFyaUZySm9LN3YrYnRRUFVaU1kxK2hjaUovSUVyRjMwWFIyNmNKbGZZUkJkNGNoVDhRb1dMVXlVZEdYU2xHOFQ3UUYvSUdJbFNmNDRmbkNGWGI4blc5bmtBb0hKTHVZM3N1dThRM0NVOGdWQTQ1eGdGejN6YmhCMFNwK0FlazR5dk5JL0xoTWYyQVVKd2JpajMwS2k4alhheGpLdklDNHFJR0REUVM0MkdqQzlveHBYeUE2Q2I5cFNzZUNkbHZpVHEwWXdwNUFKRnFGVGtmSkJMMHppZytpTWFvVENLU2tLMGp3ZTZCb1lNb0ZVY3AvUVRhODFQU2R1VFFnUTVDbHFPaXNrandTY2dFSlVMdWdHR0RhRlRiVFQyUWtDZEFMazhnZ3lpbmQxN0llZ1JlRkIzcG9qWU9aQkFpY2dyREhVbmdlVXpSK0hCaktDNklVRHd0bVFXUGZnS05oTXpmRTlSTFJ3V1JpWnNlMjIrRlQ2SVJacFloSGJBWEtnaVJRa3c4dWdjU29uRmdKaE9vSUtSbm5MZ3hmRDh4ZG01eGp0Y0xFNFEwQ0MxV3BtUHNRSXFpSW5JZ21nUW1pTXZjY3pKSU5HbnVVUHI2a3NUeDhMcWhpQ0NrUVpnTlFDZFIvY1FPdGZmRjU4SXpDVVFRdGNPWDZ5U0srT3hRL05xWGlING9XcUtOQjBMa0VQYlVOOVZ5VENjSjl0b2tSQTBUTFpmQUExRkZ6bWFyWjFaT0VndE1BaHdTMm9RYVBCQ0JQV1JJR1NUYWowd2lGU0VVNmZMUlFNaDZ6R3hYU00rc1VnZUo5cVVURk4wN0xIZUpCZ0s2VzY2ZWtHNFQrYy93K1B0SXdUUVNyMDFpd1FuWENBdUVlRUNXMFpmcTl0VFFHclFjTTI5WnkzNnZXVjFuMTkvbmoycmp1RTFsdWdKWm9zSHBqV09CRUpkMU1TOHJhQmxqN2RBYTlIemlwbmpGSm1CS1kyRVR0UlpYY0psRi85WU5JSUdBbUdGejRoY2VIK3drTk5Wc0pwYkVsbGprT09VYndnS1J6WWYxQVFTRXhGZjlqdXZVZzhaczhCNDJFQ0p4d2VtTUk0RUlIY0VNUUp4amZ1YzJFbXB6U3Rub0t0ajVraGEzZGdhRUROZzRkNEFEb25HNGNBSGl6SFFTM0ViSzIvMzM5MzZURTlDYmh5VHg0SjlsOFF3SUVUZFFBaWdTaUFLdXlaWVJTaEJBUXFueTgzL3ZlbWY2aktEM1l2ai81Z3drWXNENnkrd2dJTTJPQ293N1FBSUJOU05yNWorQ01Fa01Oakw0QmRiZWg2L244QVVHUjh0bVFJQ1R3Qm5oUUFJaFFwbjFiMG9rR0R5bWtsbHhFcEJablNISW5tcndtSEJwZFd3SGNYTDNidFlKQjRSSXA2d09YQVVCVVZUSnJDWWt6djhHTTcrejBidnkzK3dnUkswWUk2WENBUkc2MHQwSkNDT2Z1UEpiejhFR0hqL2M4elg4Vi9iZzM2L25uS1gwbGlpM2dBSkNCQTFyYWpBRllXWlduRVFxUXd0L3ZEYzJoTSs2YWE2ejRWUDBRRkhDQmc0SXVDSjdUMUFEY1c3NUdlZEl4TnpQQ0FzUjNURTdDT2p4b3N6Y3h3RlJPWUtHQVdJd2VJTkVNWWtWaitsMzdDQkUyTUJJc25GQVFHTk5yRjVMQThHdThIbXFlVXdnRWZQc05HRUxRSlNKd3pXdEZBNkkyaEU5RFI4aG4xK2EyRWl3My83bnFsMEE0b1JZd2YwQ2lQNkVJYWVoNXhPRG4rQnRJendtQ0JIUXJYL1VRTVQ5WittUGxtTkNQc0VqQkE4cjhSSVFydlJscGJZSHdmclB1bmdteDJ4RkYyT0pqL2dUSU16TVNwRDR2NEdZeWF6eStQOENndnNJM3NHY3lURUg5M0ZNSDdFK2FpaTlLcDFFZGVDb3NUNlArQjFJRERaZ3FkNGROSTlZbFZrbS9ZY0JwSkVhaWFzZ2NUMW1acm0rcnhHS2N0elF6MGgwRWdmdGE2enJmWElmR1UxcTJ6b0p6VVVjcHZlNXBoNXhacmYrMDFMWXZwMUV2c1JIN0s4ZXNhSkNkUlpEM2MzUFE3VVFvM3JYdmdheHZ3clY4cG9sTjRsaHFMdjRCNy8vT0t0M0RoRDdxMWt1cm1KelBkb2gzdVZpL0ZzbklYTE1WeUQyVjhWZU9xNGg3MnNvMjRkM1FORU9tVlV5SlpFeU40ZzlqbXNzRytrYUc4Y1ovRnR4NzZ1U2pMWGN1K1N6SkE0ejByVm83Rk1sOFpCRG5mVXc5c25iZWE1WGFwZ0x4QjdIUHBlTWhrOUpNR3VvMWF0M3NyWjlsTkh3QmZNamRMVlg4MTlORXVBeER6TS80dldNR1ZNeHMzazVnMFE3QjJLZk0yYkMrVkEyQitKcEZFeGRhaXNmWm94WlNWaEFsUHVjUStXWVZUY1BvaC8vVm1mVkRUbW00akY1UE9nSFFpMGdkanFyempIdDBRV0N3eGpuV1E2WlZhNWxWbzExV3NCTzUxazZadDVlOU1ta0RnMlpsVUtDdDVhR21TQjJPL04yZmk1MjRIdzVROU8vSWJQU3MyMXpudVZ1NTJMUHo4N1BMOWtLRFJabGtERHc3bmQydm54ZkEyZE5HYU5tTlpWNE0zcUg3MnZJQ2k1T2dxTkhVVTJpQjc3RE4zaXczN055a3BBdjhPenhuYTc1dC96ZWs0dUUrTXN1My9JYlRRTDU3VTZUUklwdUVIN2VCTVphS0NyWHFuZENwU1NFYzU1ZS90OE4vMFI2WmdYYS9idmh0dFVDUHBPVnhQNVhDN0NzSC9HcDlNenFkSXoxSTR3VlJUNlg2U2VPc0tLSXZzWU1ob3lLN2lIV21QR3hLTkIwN1NMWnk5MzNxa1BxT2xSb0IxYkhPNlNEMlBzNlZHUGpRRnlvZHlTaExBZTQ5NVhKRk52RnkzOUhqeWx0WS9kcjFTblBENmtmMmtzbmNZVFZDNVgxTEwyUk9NWjZsbjZXSWgyajZIRldPRlhXdkkwczc0cS9LV1VkNU1Pc2Vhc3NGUFh4NHVCQ29XSVF4MWtGZWJKT09uSU44MURyWXROSzZjcUJhZTE4Y1dUYVRRRkUrMnRJVFhkTGVldEVZWDFWajRGOWhjcUpmSUxROXVEcFZwOHFyUC9HSGp5MEs5TW9mWit1ZXZrK1hkbGYycWZyUkR1M0thZXc3dVUzKysvbFg5M0w3MlRmM2ZFeXQ3dWp1ZGZsWDluZHNkZjhmcCsxMk8reit4L3M5OW1MZG9DVm9qMkJwV2lYYUNuYU4xdzVJKzBrTDFVMkZZK1NCZzcrV1YyOXpyanc5UlVRdmNxdzZiZklEa1RZZVA3UWg5TEdzV3V5VjMwTkJLZ01wYjVFQVBSdEVMc1JnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFFUWdRZ1FBUkNCQ0JBQkVJRUlFQUVRZ1FnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFQVUdRdVA0RFQyUndoeVVrZ2M0QUFBQUFTVVZPUks1Q1lJST0nO1xyXG5cdFx0fTtcclxuXHRcdGltZy5zcmMgPSBzcmM7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=