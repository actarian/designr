/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            require('intersection-observer'); // use require for polyfill
            _this.onRegister();
        }));
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
        var observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        function (mutations) { return _this.onChange(mutations); }));
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
        images.forEach((/**
         * @param {?} image
         * @return {?}
         */
        function (image) { return _this.observer.observe(image); }));
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
        this.observer = new IntersectionObserver((/**
         * @param {?} images
         * @return {?}
         */
        function (images) { return images.forEach((/**
         * @param {?} image
         * @return {?}
         */
        function (image) {
            if (!image.isIntersecting) {
                return;
            }
            _this.onAppearsInViewport(image.target);
        })); }), config);
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
            this.onImagePreload(input, (/**
             * @param {?} output
             * @return {?}
             */
            function (output) {
                _this.renderer.setAttribute(image, 'src', output);
                _this.renderer.removeAttribute(image, 'data-src');
                _this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.renderer.addClass(image, 'ready');
                    }), 1);
                }));
            }));
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
        img.onload = (/**
         * @return {?}
         */
        function () {
            if (typeof callback === 'function') {
                callback(img.src);
            }
        });
        img.onerror = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            img.onerror = null;
            img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAATlBMVEX////MzMyZmZn39/fHx8fPz8+Ojo7FxcXDw8Pn5+fS0tLq6url5eX8/PyUlJTi4uLX19fv7++JiYm9vb3d3d2FhYWtra2qqqqAgICdnZ2sCR5lAAAJUElEQVR4nO2d6YKzKgyGa7VaN1zqdL7e/42eigERkGobrM7J+2umM3V5DEkICKeQxHUKT6SnCASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgEiECACASIQIAIBIhAgAgE6NsgynFcvvzqhXwNRBk2RVdnQRBEXM8fsrormm/x+AqIsqnqAO5+Iv5ZXTVfgLE9iLDoIegIpjiCutj8srYFUaaZG8III0s3tYtNQTT1MgqCRd1sd20bgkiDZDmFQUmQbnV1m4Go5owhimTYsP612ub6NgKRWm60v/lL1nVF+lQfSi+BjUcUbWIVm4BogshkUKdmlCybtL4YNKJgA1+xAYiwjjQKQZc78qYw7/T4GtX+r9I7CK1VPCm8zpfKppsakf/24RtEmUWT+8nyhdlBmU9jbZT5TSs8g2jUm4lWWnhYT7/t1VP4BVFdlRtJ1jf0sEsUFFefkdQriFrJoK7v+btQPUZSY1+hciJ/IErF30XR26cJlfYRBd4chT8QoWLUyUdGXSlG8T7QF/IGIlSf44fnCFXb8nW9nkAoHJLuY3suu8Q3CU8gVA45xgFz3zbhB0Sp+Aek4yvNI/LhMf2AUJwbij30Ki8jXaxjKvIC4qIGDDQS42GjC9oxpXyA6Cb9pSseCdlviTq0Ywp5AJFqFTkfJBL0zig+iMaoTCKSkK0jwe6BoYMoFUcp/QTa81PSduTQgQ5ClqOiskjwScgEJULugGGDaFTbTT2QkCdALk8ggyind17IegReFB3pojYOZBAicgrDHUngeUzR+HBjKC6IUDwtmQWPfgKNhMzfE9RLRwWRiZse22+FT6IRZpYhHbAXKgiRQkw8ugcSonFgJhOoIKRnnLgxfD8xdm5xjtcLE4Q0CC1WpmPsQIqiInIgmgQmiMvcczJINGnuUPr6ksTx8LqhiCCkQZgNQCdR/cQOtffF58IzCUQQtcOX6ySK+OxQ/NqXiH4oWqKNB0LkEPbUN9VyTCcJ9tokRA0TLZfAA1FFzmarZ1ZOEgtMAhwS2oQaPBCBPWRIGSTaj0wiFSEU6fLRQMh6zGxXSM+sUgeJ9qUTFN07LHeJBgK6W66ekG4T+c/w+PtIwTQSr01iwQnXCAuEeECW0Zfq9tTQGrQcM29Zy36vWV1n19/nj2rjuE1lugJZosHpjWOBEJd1MS8raBlj7dAa9HzipnjFJmBKY2ETtRZXcJlF/9YNIIGAmGFz4hceH+wkNNVsJpbElljkOOUbwgKRzYf1AQSExFf9juvUg8Zs8B42ECJxwemMI4EIHcEMQJxjfuc2EmpzStnoKtj5kha3dgaEDNg4d4ADonG4cAHizHQS3EbK2/33936TE9CbhyTx4J9l8QwIETdQAigSiAKuyZYRShBAQqny83/vemf6jKD3Yvj/5gwkYsD6y+wgIM2OCow7QAIBNSNr5j+CMEkMNjL4Bdbeh6/n8AUGR8tmQICTwBnhQAIhQpn1b0okGDymkllxEpBZnSHInmrwmHBpdWwHcXL3btYJB4RIp6wOXAUBUVTJrCYkzv8GM7+z0bvy3+wgRK0YI6XCARG60t0JCCOfuPJbz8EGHj/c8zX8V/bg36/nnKX0lii3gAJCBA1rajAFYWZWnEQqQwt/vDc2hM+6aa6z4VP0QFHCBg4IuCJ7T1ADcW75GedIxNzPCAsR3TE7COjxoszcxwFROYKGAWIweINEMYkVj+l37CBE2MBIsnFAQGNNrF5LA8Gu8HmqeUwgEfPsNGELQJSJwzWtFA6I2hE9DR8hn1+a2Eiw3/7nql0A4oRYwf0CiP6EIaeh5xODn+BtIzwmCBHQrX/UQMT9Z+mPlmNCPsEjBA8r8RIQrvRlpbYHwfrPungmx2xFF2OJj/gTIMzMSpD4v4GYyazy+P8CgvsI3sGcyTEH93FMH7E+aii9Kp1EdeCosT6P+B1IDDZgqd4dNI9YlVkm/YcBpJEaiasgcT1mZrm+rxGKctzQz0h0Egfta6zrfXIfGU1q2zoJzUUcpve5ph5xZrf+01LYvp1EvsRH7K8esaJCdRZD3c3PQ7UQo3rXvgaxvwrV8polN4lhqLv4B7//OKt3DhD7q1kurmJzPdoh3uVi/FsnIXLMVyD2V8VeOq4h72so24d3QNEOmVUyJZEyN4g9jmssG+kaG8cZ/Ftx76uSjLXcu+SzJA4z0rVo7FMl8ZBDnfUw9snbea5XapgLxB7HPpeMhk9JMGuo1at3srZ9lNHwBfMjdLVX819NEuAxDzM/4vWMGVMxs3k5g0Q7B2KfM2bC+VA2B+JpFExdaisfZoxZSVhAlPucQ+WYVTcPoh//VmfVDTmm4jF5POgHQi0gdjqrzjHt0QWCwxjnWQ6ZVa5lVo11WsBO51k6Zt5e9MmkDg2ZlUKCt5aGmSB2O/N2fi524Hw5Q9O/IbPSs21znuVu52LPz87PL9kKDRZlkDDw7nd2vnxfA2dNGaNmNZV4M3qH72vICi5OgqNHUU2iB77DN3iw37NykpAv8Ozxna75t/zek4uE+Msu3/IbTQL57U6TRIpuEH7eBMZaKCrXqndCpSSEc55e/t8N/0R6ZgXa/bvhttUCPpOVxP5XC7CsH/Gp9MzqdIz1I4wVRT6X6SeOsKKIvsYMhoyK7iHWmPGxKNB07SLZy933qkPqOlRoB1bHO6SD2Ps6VGPjQFyodyShLAe495XJFNvFy39HjyltY/dr1SnPD6kf2ksncYTVC5X1LL2ROMZ6ln6WIh2j6HFWOFXWvI0s74q/KWUd5MOseassFPXx4uBCoWIQx1kFebJOOnIN81DrYtNK6cqBae18cWTaTQFE+2tITXdLeetEYX1Vj4F9hcqJfILQ9uDpVp8qrP/GHjy0K9MofZ+uevk+Xdlf2qfrRDu3Kaew7uU3++/lX93L72Tf3fEyt7ujudflX9ndsdf8fp+12O+z+x/s99mLdoCVoj2BpWiXaCnaN1w5I+0kL1U2FY+SBg7+WV29zrjw9RUQvcqw6bfIDkTYeP7Qh9LGsWuyV30NBKgMpb5EAPRtELsRgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAEQgQgQARCBCBABEIEIEAPUGQuP4DT2RwhyUkgc4AAAAASUVORK5CYII=';
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvbGF6eS1pbWFnZXMvbGF6eS1pbWFnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJeEg7SUFTQyw2QkFDOEIsVUFBa0IsRUFDL0MsT0FBbUIsRUFDWixRQUFtQixFQUNuQixJQUFZO1FBSFUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUV4QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFFbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDO1lBQzNCLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1lBQzdELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQjtJQUNGLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDOztZQUN6QixRQUFRLEdBQUcsSUFBSSxnQkFBZ0I7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQXhCLENBQXdCLEVBQUM7O1lBQ3RFLE1BQU0sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUk7U0FDYjtRQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsbUVBQW1FO0lBQ3BFLENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUjtRQUFBLGlCQUdDO1FBSFEsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7O1lBQ1QsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQ3JILE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztJQUN0RSxDQUFDOzs7O0lBRUQscURBQXVCOzs7SUFBdkI7UUFBQSxpQkFTQzs7WUFSTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG9CQUFvQjs7OztRQUFDLFVBQUMsTUFBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEtBQUs7WUFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQzFCLE9BQU87YUFDUDtZQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLEVBTDBELENBSzFELEdBQUUsTUFBTSxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpREFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBVTtRQUE5QixpQkEyQkM7UUExQkEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Q7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFOztnQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUs7Ozs7WUFBRSxVQUFDLE1BQU07Z0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztnQkFBQztvQkFDM0IsVUFBVTs7O29CQUFDO3dCQUNWLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsRUFBQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDSDtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLE1BQUcsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsNENBQWM7Ozs7O0lBQWQsVUFBZSxHQUFXLEVBQUUsUUFBa0I7O1lBQ3ZDLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN2QixHQUFHLENBQUMsTUFBTTs7O1FBQUc7WUFDWixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQjtRQUNGLENBQUMsQ0FBQSxDQUFDO1FBQ0YsR0FBRyxDQUFDLE9BQU87Ozs7UUFBRyxVQUFVLENBQUM7WUFDeEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkIsR0FBRyxDQUFDLEdBQUcsR0FBRyx3MEdBQXcwRyxDQUFDO1FBQ3AxRyxDQUFDLENBQUEsQ0FBQztRQUNGLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBekdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtpQkFDekI7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBZEQsVUFBVTtnQkFBeUQsU0FBUztnQkFBakQsTUFBTTs7OzZCQVNuRCxLQUFLOztJQXNHUCwwQkFBQztDQUFBLEFBM0dELElBMkdDO1NBeEdZLG1CQUFtQjs7O0lBRS9CLHlDQUE0Qjs7SUFDNUIsdUNBQStCOztJQUMvQiw0Q0FBMkI7Ozs7O0lBRzFCLHlDQUErQzs7SUFFL0MsdUNBQTBCOztJQUMxQixtQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUExBVEZPUk1fSUQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55OyAvLyB1c2UgcmVxdWlyZSBmb3IgcG9seWZpbGxcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2xhenktaW1hZ2VzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhenlJbWFnZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBJbnB1dCgpIGxhenlJbWFnZXM6IE9iamVjdDtcclxuXHRvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XHJcblx0bmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRlbGVtZW50OiBFbGVtZW50UmVmLFxyXG5cdFx0cHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcblx0XHRwdWJsaWMgem9uZTogTmdab25lLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5uYXRpdmVFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0cmVxdWlyZSgnaW50ZXJzZWN0aW9uLW9ic2VydmVyJyk7IC8vIHVzZSByZXF1aXJlIGZvciBwb2x5ZmlsbFxyXG5cdFx0XHR0aGlzLm9uUmVnaXN0ZXIoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5vYnNlcnZlcikge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUmVnaXN0ZXIoKSB7XHJcblx0XHR0aGlzLm5ld0ludGVyc2VjdGlvbk9ic2VydmVyKCk7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB0aGlzLm9uQ2hhbmdlKG11dGF0aW9ucykpO1xyXG5cdFx0Y29uc3QgY29uZmlnID0ge1xyXG5cdFx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxyXG5cdFx0XHRjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdHN1YnRyZWU6IHRydWVcclxuXHRcdH07XHJcblx0XHRvYnNlcnZlci5vYnNlcnZlKHRoaXMubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcclxuXHRcdHRoaXMub25DaGFuZ2UoKTtcclxuXHRcdC8vIHRoaXMub2JzZXJ2ZURPTUNoYW5nZXModGhpcy5uYXRpdmVFbGVtZW50LCAoKSA9PiB0aGlzLm9uQ2hhbmdlKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlKC4uLmRhdGEpIHtcclxuXHRcdGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20odGhpcy5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10sIFtkYXRhLXNyY3NldF0sIFtkYXRhLWJhY2tncm91bmQtc3JjXScpKTtcclxuXHRcdGltYWdlcy5mb3JFYWNoKChpbWFnZTogSFRNTEVsZW1lbnQpID0+IHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSkpO1xyXG5cdH1cclxuXHJcblx0bmV3SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XHJcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmxhenlJbWFnZXMgaW5zdGFuY2VvZiBPYmplY3QgPyB0aGlzLmxhenlJbWFnZXMgOiB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChpbWFnZXM6IGFueVtdKSA9PiBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XHJcblx0XHRcdGlmICghaW1hZ2UuaXNJbnRlcnNlY3RpbmcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5vbkFwcGVhcnNJblZpZXdwb3J0KGltYWdlLnRhcmdldCk7XHJcblx0XHR9KSwgY29uZmlnKTtcclxuXHRcdHJldHVybiB0aGlzLm9ic2VydmVyO1xyXG5cdH1cclxuXHJcblx0b25BcHBlYXJzSW5WaWV3cG9ydChpbWFnZTogYW55KSB7XHJcblx0XHRpZiAoaW1hZ2UuZGF0YXNldC5zcmNzZXQpIHtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW1hZ2UsICdzcmNzZXQnLCBpbWFnZS5kYXRhc2V0LnNyY3NldCk7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGltYWdlLCAnZGF0YS1zcmNzZXQnKTtcclxuXHRcdFx0aWYgKGltYWdlLmRhdGFzZXQuc3JjKSB7XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW1hZ2UsICdzcmMnLCBpbWFnZS5kYXRhc2V0LnNyYyk7XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW1hZ2UsICdkYXRhLXNyYycpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGltYWdlLmRhdGFzZXQuc3JjKSB7XHJcblx0XHRcdGNvbnN0IGlucHV0ID0gaW1hZ2UuZGF0YXNldC5zcmM7XHJcblx0XHRcdHRoaXMub25JbWFnZVByZWxvYWQoaW5wdXQsIChvdXRwdXQpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbWFnZSwgJ3NyYycsIG91dHB1dCk7XHJcblx0XHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW1hZ2UsICdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyhpbWFnZSwgJ3JlYWR5Jyk7XHJcblx0XHRcdFx0XHR9LCAxKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaW1hZ2UuZGF0YXNldC5iYWNrZ3JvdW5kU3JjKSB7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1hZ2UsICdiYWNrZ3JvdW5kLWltYWdlJywgYHVybCgke2ltYWdlLmRhdGFzZXQuYmFja2dyb3VuZFNyY30pYCk7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGltYWdlLCAnZGF0YS1iYWNrZ3JvdW5kLXNyYycpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuXHRcdFx0dGhpcy5vYnNlcnZlci51bm9ic2VydmUoaW1hZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25JbWFnZVByZWxvYWQoc3JjOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG5cdFx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcblx0XHRpbWcub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soaW1nLnNyYyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGltZy5vbmVycm9yID0gbnVsbDtcclxuXHRcdFx0aW1nLnNyYyA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFnQUFBQy9DQU1BQUFBMWtMSzBBQUFBVGxCTVZFWC8vLy9Nek15Wm1abjM5L2ZIeDhmUHo4K09qbzdGeGNYRHc4UG41K2ZTMHRMcTZ1cmw1ZVg4L1B5VWxKVGk0dUxYMTlmdjcrK0ppWW05dmIzZDNkMkZoWVd0cmEycXFxcUFnSUNkbloyc0NSNWxBQUFKVUVsRVFWUjRuTzJkNllLektneUdhN1ZhTjF6cWRMN2UvNDJlaWdFUmtHb2JyTTdKKzJ1bU0zVjVERWtJQ0tlUXhIVUtUNlNuQ0FTSVFJQUlCSWhBZ0FnRWlFQ0FDQVNJUUlBSUJJaEFnQWdFaUVDQUNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRWlFQ0FDQVNJUUlBSUJJaEFnQWdFNk5zZ3luRmN2dnpxaFh3TlJCazJSVmRuUVJCRVhNOGZzcm9ybW0veCtBcUlzcW5xQU81K0l2NVpYVFZmZ0xFOWlMRG9JZWdJcGppQ3V0ajhzcllGVWFhWkc4SUlJMHMzdFl0TlFUVDFNZ3FDUmQxc2QyMGJna2lEWkRtRlFVbVFiblYxbTRHbzVvd2hpbVRZc1A2MTJ1YjZOZ0tSV202MHYvbEwxblZGK2xRZlNpK0JqVWNVYldJVm00Qm9nc2hrVUtkbWxDeWJ0TDRZTktKZ0ExK3hBWWl3ampRS1FaYzc4cVl3Ny9UNEd0WCtyOUk3Q0sxVlBDbTh6cGZLcHBzYWtmLzI0UnRFbVVXVCs4bnloZGxCbVU5amJaVDVUU3M4ZzJqVW00bFdXbmhZVDcvdDFWUDRCVkZkbFJ0SjFqZjBzRXNVRkZlZmtkUXJpRnJKb0s3ditidFFQVVpTWTEraGNpSi9JRXJGMzBYUjI2Y0psZllSQmQ0Y2hUOFFvV0xVeVVkR1hTbEc4VDdRRi9JR0lsU2Y0NGZuQ0ZYYjhuVzlua0FvSEpMdVkzc3V1OFEzQ1U4Z1ZBNDV4Z0Z6M3piaEIwU3ArQWVrNHl2TkkvTGhNZjJBVUp3YmlqMzBLaThqWGF4akt2SUM0cUlHRERRUzQyR2pDOW94cFh5QTZDYjlwU3NlQ2RsdmlUcTBZd3A1QUpGcUZUa2ZKQkwwemlnK2lNYW9UQ0tTa0swandlNkJvWU1vRlVjcC9RVGE4MVBTZHVUUWdRNUNscU9pc2tqd1NjZ0VKVUx1Z0dHRGFGVGJUVDJRa0NkQUxrOGdneWluZDE3SWVnUmVGQjNwb2pZT1pCQWljZ3JESFVuZ2VVelIrSEJqS0M2SVVEd3RtUVdQZmdLTmhNemZFOVJMUndXUmlac2UyMitGVDZJUlpwWWhIYkFYS2dpUlFrdzh1Z2NTb25GZ0poT29JS1JubkxneGZEOHhkbTV4anRjTEU0UTBDQzFXcG1Qc1FJcWlJbklnbWdRbWlNdmNjekpJTkdudVVQcjZrc1R4OExxaGlDQ2tRWmdOUUNkUi9jUU90ZmZGNThJekNVUVF0Y09YNnlTSytPeFEvTnFYaUg0b1dxS05CMExrRVBiVU45VnlUQ2NKOXRva1JBMFRMWmZBQTFGRnptYXJaMVpPRWd0TUFod1Myb1FhUEJDQlBXUklHU1RhajB3aUZTRVU2ZkxSUU1oNnpHeFhTTStzVWdlSjlxVVRGTjA3TEhlSkJnSzZXNjZla0c0VCtjL3crUHRJd1RRU3IwMWl3UW5YQ0F1RWVFQ1cwWmZxOXRUUUdyUWNNMjlaeTM2dldWMW4xOS9uajJyanVFMWx1Z0pab3NIcGpXT0JFSmQxTVM4cmFCbGo3ZEFhOUh6aXBuakZKbUJLWTJFVHRSWlhjSmxGLzlZTklJR0FtR0Z6NGhjZUgrd2tOTlZzSnBiRWxsamtPT1Vid2dLUnpZZjFBUVNFeEZmOWp1dlVnOFpzOEI0MkVDSnh3ZW1NSTRFSUhjRU1RSnhqZnVjMkVtcHpTdG5vS3RqNWtoYTNkZ2FFRE5nNGQ0QURvbkc0Y0FIaXpIUVMzRWJLMi8zMzkzNlRFOUNiaHlUeDRKOWw4UXdJRVRkUUFpZ1NpQUt1eVpZUlNoQkFRcW55ODMvdmVtZjZqS0QzWXZqLzVnd2tZc0Q2eSt3Z0lNMk9Db3c3UUFJQk5TTnI1aitDTUVrTU5qTDRCZGJlaDYvbjhBVUdSOHRtUUlDVHdCbmhRQUloUXBuMWIwb2tHRHlta2xseEVwQlpuU0hJbm1yd21IQnBkV3dIY1hMM2J0WUpCNFJJcDZ3T1hBVUJVVlRKckNZa3p2OEdNNyt6MGJ2eTMrd2dSSzBZSTZYQ0FSRzYwdDBKQ0NPZnVQSmJ6OEVHSGovYzh6WDhWL2JnMzYvbm5LWDBsaWkzZ0FKQ0JBMXJhakFGWVdaV25FUXFRd3QvdkRjMmhNKzZhYTZ6NFZQMFFGSENCZzRJdUNKN1QxQURjVzc1R2VkSXhOelBDQXNSM1RFN0NPanhvc3pjeHdGUk9ZS0dBV0l3ZUlORU1Za1ZqK2wzN0NCRTJNQklzbkZBUUdOTnJGNUxBOEd1OEhtcWVVd2dFZlBzTkdFTFFKU0p3eld0RkE2STJoRTlEUjhobjErYTJFaXczLzducWwwQTRvUll3ZjBDaVA2RUlhZWg1eE9EbitCdEl6d21DQkhRclgvVVFNVDlaK21QbG1OQ1BzRWpCQThyOFJJUXJ2UmxwYllId2ZyUHVuZ214MnhGRjJPSmovZ1RJTXpNU3BENHY0R1l5YXp5K1A4Q2d2c0kzc0djeVRFSDkzRk1IN0UrYWlpOUtwMUVkZUNvc1Q2UCtCMUlERFpncWQ0ZE5JOVlsVmttL1ljQnBKRWFpYXNnY1QxbVpybStyeEdLY3R6UXowaDBFZ2Z0YTZ6cmZYSWZHVTFxMnpvSnpVVWNwdmU1cGg1eFpyZiswMUxZdnAxRXZzUkg3Szhlc2FKQ2RSWkQzYzNQUTdVUW8zclh2Z2F4dndyVjhwb2xONGxocUx2NEI3Ly9PS3QzRGhEN3Exa3VybUp6UGRvaDN1VmkvRnNuSVhMTVZ5RDJWOFZlT3E0aDcyc28yNGQzUU5FT21WVXlKWkV5TjRnOWptc3NHK2thRzhjWi9GdHg3NnVTakxYY3UrU3pKQTR6MHJWbzdGTWw4WkJEbmZVdzlzbmJlYTVYYXBnTHhCN0hQcGVNaGs5Sk1HdW8xYXQzc3JaOWxOSHdCZk1qZExWWDgxOU5FdUF4RHpNLzR2V01HVk14czNrNWcwUTdCMktmTTJiQytWQTJCK0pwRkV4ZGFpc2Zab3haU1ZoQWxQdWNRK1dZVlRjUG9oLy9WbWZWRFRtbTRqRjVQT2dIUWkwZ2RqcXJ6akh0MFFXQ3d4am5XUTZaVmE1bFZvMTFXc0JPNTFrNlp0NWU5TW1rRGcyWmxVS0N0NWFHbVNCMk8vTjJmaTUyNEh3NVE5Ty9JYlBTczIxem51VnU1MkxQejg3UEw5a0tEUlpsa0REdzduZDJ2bnhmQTJkTkdhTm1OWlY0TTNxSDcydklDaTVPZ3FOSFVVMmlCNzdETjNpdzM3TnlrcEF2OE96eG5hNzV0L3plazR1RStNc3UzL0liVFFMNTdVNlRSSXB1RUg3ZUJNWmFLQ3JYcW5kQ3BTU0VjNTVlL3Q4Ti8wUjZaZ1hhL2J2aHR0VUNQcE9WeFA1WEM3Q3NIL0dwOU16cWRJejFJNHdWUlQ2WDZTZU9zS0tJdnNZTWhveUs3aUhXbVBHeEtOQjA3U0xaeTkzM3FrUHFPbFJvQjFiSE82U0QyUHM2VkdQalFGeW9keVNoTEFlNDk1WEpGTnZGeTM5SGp5bHRZL2RyMVNuUEQ2a2Yya3NuY1lUVkM1WDFMTDJST01aNmxuNldJaDJqNkhGV09GWFd2STBzNzRxL0tXVWQ1TU9zZWFzc0ZQWHg0dUJDb1dJUXgxa0ZlYkpPT25JTjgxRHJZdE5LNmNxQmFlMThjV1RhVFFGRSsydElUWGRMZWV0RVlYMVZqNEY5aGNxSmZJTFE5dURwVnA4cXJQL0dIankwSzlNb2ZaK3VldmsrWGRsZjJxZnJSRHUzS2Fldzd1VTMrKy9sWDkzTDcyVGYzZkV5dDd1anVkZmxYOW5kc2RmOGZwKzEyTyt6K3gvczk5bUxkb0NWb2oyQnBXaVhhQ25hTjF3NUkrMGtMMVUyRlkrU0JnNytXVjI5enJqdzlSVVF2Y3F3NmJmSURrVFllUDdRaDlMR3NXdXlWMzBOQktnTXBiNUVBUFJ0RUxzUmdRQVJDQkNCQUJFSUVJRUFFUWdRZ1FBUkNCQ0JBQkVJRUlFQUVRZ1FnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFFUWdRZ1FBUkNCQ0JBQkVJRUlFQVBVR1F1UDREVDJSd2h5VWtnYzRBQUFBQVNVVk9SSzVDWUlJPSc7XHJcblx0XHR9O1xyXG5cdFx0aW1nLnNyYyA9IHNyYztcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==