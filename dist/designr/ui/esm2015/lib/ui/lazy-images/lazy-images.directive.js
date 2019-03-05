/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID, Renderer2 } from '@angular/core';
// use require for polyfill
export class LazyImagesDirective {
    /**
     * @param {?} platformId
     * @param {?} element
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(platformId, element, renderer, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.zone = zone;
        this.nativeElement = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(() => {
            require('intersection-observer'); // use require for polyfill
            this.onRegister();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    /**
     * @return {?}
     */
    onRegister() {
        this.newIntersectionObserver();
        /** @type {?} */
        const observer = new MutationObserver(mutations => this.onChange(mutations));
        /** @type {?} */
        const config = {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true
        };
        observer.observe(this.nativeElement, config);
        this.onChange();
        // this.observeDOMChanges(this.nativeElement, () => this.onChange);
    }
    /**
     * @param {...?} data
     * @return {?}
     */
    onChange(...data) {
        /** @type {?} */
        const images = Array.from(this.nativeElement.querySelectorAll('img[data-src], [data-srcset], [data-background-src]'));
        images.forEach((image) => this.observer.observe(image));
    }
    /**
     * @return {?}
     */
    newIntersectionObserver() {
        /** @type {?} */
        const config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
        this.observer = new IntersectionObserver((images) => images.forEach(image => {
            if (!image.isIntersecting) {
                return;
            }
            this.onAppearsInViewport(image.target);
        }), config);
        return this.observer;
    }
    /**
     * @param {?} image
     * @return {?}
     */
    onAppearsInViewport(image) {
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
            const input = image.dataset.src;
            this.onImagePreload(input, (output) => {
                this.renderer.setAttribute(image, 'src', output);
                this.renderer.removeAttribute(image, 'data-src');
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.renderer.addClass(image, 'ready');
                    }, 1);
                });
            });
        }
        if (image.dataset.backgroundSrc) {
            this.renderer.setStyle(image, 'background-image', `url(${image.dataset.backgroundSrc})`);
            this.renderer.removeAttribute(image, 'data-background-src');
        }
        if (this.observer) {
            this.observer.unobserve(image);
        }
    }
    /**
     * @param {?} src
     * @param {?} callback
     * @return {?}
     */
    onImagePreload(src, callback) {
        /** @type {?} */
        const img = new Image();
        img.onload = () => {
            if (typeof callback === 'function') {
                callback(img.src);
            }
        };
        img.onerror = function (e) {
            img.onerror = null;
            img.src = 'data:image/png;base64,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';
        };
        img.src = src;
    }
}
LazyImagesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lazy-images]'
            },] }
];
/** @nocollapse */
LazyImagesDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone }
];
LazyImagesDirective.propDecorators = {
    lazyImages: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvbGF6eS1pbWFnZXMvbGF6eS1pbWFnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEgsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQU0vQixZQUM4QixVQUFrQixFQUMvQyxPQUFtQixFQUNaLFFBQW1CLEVBQ25CLElBQVk7UUFIVSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBRXhDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUVuQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1lBQzdELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULElBQUksQ0FBQyx1QkFBdUIsRUFB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eUNBQStDOztJQUUvQyx1Q0FBMEI7O0lBQzFCLG1DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBQTEFURk9STV9JRCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7IC8vIHVzZSByZXF1aXJlIGZvciBwb2x5ZmlsbFxyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbGF6eS1pbWFnZXNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eUltYWdlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QElucHV0KCkgbGF6eUltYWdlczogT2JqZWN0O1xyXG5cdG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcclxuXHRuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcblx0XHRwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuXHRcdHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcblx0KSB7XHJcblx0XHR0aGlzLm5hdGl2ZUVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRyZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTsgLy8gdXNlIHJlcXVpcmUgZm9yIHBvbHlmaWxsXHJcblx0XHRcdHRoaXMub25SZWdpc3RlcigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLm9ic2VydmVyKSB7XHJcblx0XHRcdHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25SZWdpc3RlcigpIHtcclxuXHRcdHRoaXMubmV3SW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKTtcclxuXHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHRoaXMub25DaGFuZ2UobXV0YXRpb25zKSk7XHJcblx0XHRjb25zdCBjb25maWcgPSB7XHJcblx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXHJcblx0XHRcdGNoYXJhY3RlckRhdGE6IHRydWUsXHJcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcclxuXHRcdFx0c3VidHJlZTogdHJ1ZVxyXG5cdFx0fTtcclxuXHRcdG9ic2VydmVyLm9ic2VydmUodGhpcy5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZSgpO1xyXG5cdFx0Ly8gdGhpcy5vYnNlcnZlRE9NQ2hhbmdlcyh0aGlzLm5hdGl2ZUVsZW1lbnQsICgpID0+IHRoaXMub25DaGFuZ2UpO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2UoLi4uZGF0YSkge1xyXG5cdFx0Y29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbSh0aGlzLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXSwgW2RhdGEtc3Jjc2V0XSwgW2RhdGEtYmFja2dyb3VuZC1zcmNdJykpO1xyXG5cdFx0aW1hZ2VzLmZvckVhY2goKGltYWdlOiBIVE1MRWxlbWVudCkgPT4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGltYWdlKSk7XHJcblx0fVxyXG5cclxuXHRuZXdJbnRlcnNlY3Rpb25PYnNlcnZlcigpIHtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMubGF6eUltYWdlcyBpbnN0YW5jZW9mIE9iamVjdCA/IHRoaXMubGF6eUltYWdlcyA6IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGltYWdlczogYW55W10pID0+IGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcclxuXHRcdFx0aWYgKCFpbWFnZS5pc0ludGVyc2VjdGluZykge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9uQXBwZWFyc0luVmlld3BvcnQoaW1hZ2UudGFyZ2V0KTtcclxuXHRcdH0pLCBjb25maWcpO1xyXG5cdFx0cmV0dXJuIHRoaXMub2JzZXJ2ZXI7XHJcblx0fVxyXG5cclxuXHRvbkFwcGVhcnNJblZpZXdwb3J0KGltYWdlOiBhbnkpIHtcclxuXHRcdGlmIChpbWFnZS5kYXRhc2V0LnNyY3NldCkge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbWFnZSwgJ3NyY3NldCcsIGltYWdlLmRhdGFzZXQuc3Jjc2V0KTtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW1hZ2UsICdkYXRhLXNyY3NldCcpO1xyXG5cdFx0XHRpZiAoaW1hZ2UuZGF0YXNldC5zcmMpIHtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbWFnZSwgJ3NyYycsIGltYWdlLmRhdGFzZXQuc3JjKTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtc3JjJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoaW1hZ2UuZGF0YXNldC5zcmMpIHtcclxuXHRcdFx0Y29uc3QgaW5wdXQgPSBpbWFnZS5kYXRhc2V0LnNyYztcclxuXHRcdFx0dGhpcy5vbkltYWdlUHJlbG9hZChpbnB1dCwgKG91dHB1dCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGltYWdlLCAnc3JjJywgb3V0cHV0KTtcclxuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbWFnZSwgJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGltYWdlLCAncmVhZHknKTtcclxuXHRcdFx0XHRcdH0sIDEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChpbWFnZS5kYXRhc2V0LmJhY2tncm91bmRTcmMpIHtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWFnZSwgJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKCR7aW1hZ2UuZGF0YXNldC5iYWNrZ3JvdW5kU3JjfSlgKTtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW1hZ2UsICdkYXRhLWJhY2tncm91bmQtc3JjJyk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5vYnNlcnZlcikge1xyXG5cdFx0XHR0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShpbWFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkltYWdlUHJlbG9hZChzcmM6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcblx0XHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRjYWxsYmFjayhpbWcuc3JjKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGltZy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aW1nLm9uZXJyb3IgPSBudWxsO1xyXG5cdFx0XHRpbWcuc3JjID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUWdBQUFDL0NBTUFBQUExa0xLMEFBQUFUbEJNVkVYLy8vL016TXlabVpuMzkvZkh4OGZQejgrT2pvN0Z4Y1hEdzhQbjUrZlMwdExxNnVybDVlWDgvUHlVbEpUaTR1TFgxOWZ2NysrSmlZbTl2YjNkM2QyRmhZV3RyYTJxcXFxQWdJQ2RuWjJzQ1I1bEFBQUpVRWxFUVZSNG5PMmQ2WUt6S2d5R2E3VmFOMXpxZEw3ZS80MmVpZ0VSa0dvYnJNN0orMnVtTTNWNURFa0lDS2VReEhVS1Q2U25DQVNJUUlBSUJJaEFnQWdFaUVDQUNBU0lRSUFJQkloQWdBZ0VpRUNBQ0FTSVFJQUlCSWhBZ0FnRWlFQ0FDQVNJUUlBSUJJaEFnQWdFaUVDQUNBU0lRSUFJQkloQWdBZ0U2TnNneW5GY3Z2enFoWHdOUkJrMlJWZG5RUkJFWE04ZnNyb3JtbS94K0FxSXNxbnFBTzUrSXY1WlhUVmZnTEU5aUxEb0llZ0lwamlDdXRqOHNyWUZVYWFaRzhJSUkwczN0WXROUVRUMU1ncUNSZDFzZDIwYmdraURaRG1GUVVtUWJuVjFtNEdvNW93aGltVFlzUDYxMnViNk5nS1JXbTYwdi9sTDFuVkYrbFFmU2krQmpVY1ViV0lWbTRCb2dzaGtVS2RtbEN5YnRMNFlOS0pnQTEreEFZaXdqalFLUVpjNzhxWXc3L1Q0R3RYK3I5STdDSzFWUENtOHpwZktwcHNha2YvMjRSdEVtVVdUKzhueWhkbEJtVTlqYlpUNVRTczhnMmpVbTRsV1duaFlUNy90MVZQNEJWRmRsUnRKMWpmMHNFc1VGRmVma2RRcmlGckpvSzd2K2J0UVBVWlNZMStoY2lKL0lFckYzMFhSMjZjSmxmWVJCZDRjaFQ4UW9XTFV5VWRHWFNsRzhUN1FGL0lHSWxTZjQ0Zm5DRlhiOG5XOW5rQW9ISkx1WTNzdXU4UTNDVThnVkE0NXhnRnozemJoQjBTcCtBZWs0eXZOSS9MaE1mMkFVSndiaWozMEtpOGpYYXhqS3ZJQzRxSUdERFFTNDJHakM5b3hwWHlBNkNiOXBTc2VDZGx2aVRxMFl3cDVBSkZxRlRrZkpCTDB6aWcraU1hb1RDS1NrSzBqd2U2Qm9ZTW9GVWNwL1FUYTgxUFNkdVRRZ1E1Q2xxT2lza2p3U2NnRUpVTHVnR0dEYUZUYlRUMlFrQ2RBTGs4Z2d5aW5kMTdJZWdSZUZCM3BvallPWkJBaWNnckRIVW5nZVV6UitIQmpLQzZJVUR3dG1RV1BmZ0tOaE16ZkU5UkxSd1dSaVpzZTIyK0ZUNklSWnBZaEhiQVhLZ2lSUWt3OHVnY1NvbkZnSmhPb0lLUm5uTGd4ZkQ4eGRtNXhqdGNMRTRRMENDMVdwbVBzUUlxaUluSWdtZ1FtaU12Y2N6SklOR251VVByNmtzVHg4THFoaUNDa1FaZ05RQ2RSL2NRT3RmZkY1OEl6Q1VRUXRjT1g2eVNLK094US9OcVhpSDRvV3FLTkIwTGtFUGJVTjlWeVRDY0o5dG9rUkEwVExaZkFBMUZGem1hcloxWk9FZ3RNQWh3UzJvUWFQQkNCUFdSSUdTVGFqMHdpRlNFVTZmTFJRTWg2ekd4WFNNK3NVZ2VKOXFVVEZOMDdMSGVKQmdLNlc2NmVrRzRUK2MvdytQdEl3VFFTcjAxaXdRblhDQXVFZUVDVzBaZnE5dFRRR3JRY00yOVp5MzZ2V1YxbjE5L25qMnJqdUUxbHVnSlpvc0hwaldPQkVKZDFNUzhyYUJsajdkQWE5SHppcG5qRkptQktZMkVUdFJaWGNKbEYvOVlOSUlHQW1HRno0aGNlSCt3a05OVnNKcGJFbGxqa09PVWJ3Z0tSellmMUFRU0V4RmY5anV2VWc4WnM4QjQyRUNKeHdlbU1JNEVJSGNFTVFKeGpmdWMyRW1welN0bm9LdGo1a2hhM2RnYUVETmc0ZDRBRG9uRzRjQUhpekhRUzNFYksyLzMzOTM2VEU5Q2JoeVR4NEo5bDhRd0lFVGRRQWlnU2lBS3V5WllSU2hCQVFxbnk4My92ZW1mNmpLRDNZdmovNWd3a1lzRDZ5K3dnSU0yT0NvdzdRQUlCTlNOcjVqK0NNRWtNTmpMNEJkYmVoNi9uOEFVR1I4dG1RSUNUd0JuaFFBSWhRcG4xYjBva0dEeW1rbGx4RXBCWm5TSElubXJ3bUhCcGRXd0hjWEwzYnRZSkI0UklwNndPWEFVQlVWVEpyQ1lrenY4R003K3owYnZ5Myt3Z1JLMFlJNlhDQVJHNjB0MEpDQ09mdVBKYno4RUdIai9jOHpYOFYvYmczNi9ubktYMGxpaTNnQUpDQkExcmFqQUZZV1pXbkVRcVF3dC92RGMyaE0rNmFhNno0VlAwUUZIQ0JnNEl1Q0o3VDFBRGNXNzVHZWRJeE56UENBc1IzVEU3Q09qeG9zemN4d0ZST1lLR0FXSXdlSU5FTVlrVmorbDM3Q0JFMk1CSXNuRkFRR05OckY1TEE4R3U4SG1xZVV3Z0VmUHNOR0VMUUpTSnd6V3RGQTZJMmhFOURSOGhuMSthMkVpdzMvN25xbDBBNG9SWXdmMENpUDZFSWFlaDV4T0RuK0J0SXp3bUNCSFFyWC9VUU1UOVorbVBsbU5DUHNFakJBOHI4UklRcnZSbHBiWUh3ZnJQdW5nbXgyeEZGMk9Kai9nVElNek1TcEQ0djRHWXlhenkrUDhDZ3ZzSTNzR2N5VEVIOTNGTUg3RSthaWk5S3AxRWRlQ29zVDZQK0IxSUREWmdxZDRkTkk5WWxWa20vWWNCcEpFYWlhc2djVDFtWnJtK3J4R0tjdHpRejBoMEVnZnRhNnpyZlhJZkdVMXEyem9KelVVY3B2ZTVwaDV4WnJmKzAxTFl2cDFFdnNSSDdLOGVzYUpDZFJaRDNjM1BRN1VRbzNyWHZnYXh2d3JWOHBvbE40bGhxTHY0QjcvL09LdDNEaEQ3cTFrdXJtSnpQZG9oM3VWaS9Gc25JWExNVnlEMlY4VmVPcTRoNzJzbzI0ZDNRTkVPbVZVeUpaRXlONGc5am1zc0cra2FHOGNaL0Z0eDc2dVNqTFhjdStTekpBNHowclZvN0ZNbDhaQkRuZlV3OXNuYmVhNVhhcGdMeEI3SFBwZU1oazlKTUd1bzFhdDNzclo5bE5Id0JmTWpkTFZYODE5TkV1QXhEek0vNHZXTUdWTXhzM2s1ZzBRN0IyS2ZNMmJDK1ZBMkIrSnBGRXhkYWlzZlpveFpTVmhBbFB1Y1ErV1lWVGNQb2gvL1ZtZlZEVG1tNGpGNVBPZ0hRaTBnZGpxcnpqSHQwUVdDd3hqbldRNlpWYTVsVm8xMVdzQk81MWs2WnQ1ZTlNbWtEZzJabFVLQ3Q1YUdtU0IyTy9OMmZpNTI0SHc1UTlPL0liUFNzMjF6bnVWdTUyTFB6ODdQTDlrS0RSWmxrRER3N25kMnZueGZBMmROR2FObU5aVjRNM3FINzJ2SUNpNU9ncU5IVVUyaUI3N0ROM2l3MzdOeWtwQXY4T3p4bmE3NXQvemVrNHVFK01zdTMvSWJUUUw1N1U2VFJJcHVFSDdlQk1aYUtDclhxbmRDcFNTRWM1NWUvdDhOLzBSNlpnWGEvYnZodHRVQ1BwT1Z4UDVYQzdDc0gvR3A5TXpxZEl6MUk0d1ZSVDZYNlNlT3NLS0l2c1lNaG95SzdpSFdtUEd4S05CMDdTTFp5OTMzcWtQcU9sUm9CMWJITzZTRDJQczZWR1BqUUZ5b2R5U2hMQWU0OTVYSkZOdkZ5MzlIanlsdFkvZHIxU25QRDZrZjJrc25jWVRWQzVYMUxMMlJPTVo2bG42V0loMmo2SEZXT0ZYV3ZJMHM3NHEvS1dVZDVNT3NlYXNzRlBYeDR1QkNvV0lReDFrRmViSk9PbklOODFEcll0Tks2Y3FCYWUxOGNXVGFUUUZFKzJ0SVRYZExlZXRFWVgxVmo0RjloY3FKZklMUTl1RHBWcDhxclAvR0hqeTBLOU1vZlordWV2aytYZGxmMnFmclJEdTNLYWV3N3VVMysrL2xYOTNMNzJUZjNmRXl0N3VqdWRmbFg5bmRzZGY4ZnArMTJPK3oreC9zOTltTGRvQ1ZvajJCcFdpWGFDbmFOMXc1SSswa0wxVTJGWStTQmc3K1dWMjl6cmp3OVJVUXZjcXc2YmZJRGtUWWVQN1FoOUxHc1d1eVYzME5CS2dNcGI1RUFQUnRFTHNSZ1FBUkNCQ0JBQkVJRUlFQUVRZ1FnUUFSQ0JDQkFCRUlFSUVBRVFnUWdRQVJDQkNCQUJFSUVJRUFFUWdRZ1FBUkNCQ0JBQkVJRUlFQUVRZ1FnUUFSQ0JDQkFCRUlFSUVBUFVHUXVQNERUMlJ3aHlVa2djNEFBQUFBU1VWT1JLNUNZSUk9JztcclxuXHRcdH07XHJcblx0XHRpbWcuc3JjID0gc3JjO1xyXG5cdH1cclxuXHJcbn1cclxuIl19