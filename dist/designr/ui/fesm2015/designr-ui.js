import { EventManager } from '@angular/platform-browser';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { DisposableComponent, CoreModule } from '@designr/core';
import { BehaviorSubject, of, range, fromEvent, Observable } from 'rxjs';
import { map, takeUntil, shareReplay, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { InjectionToken, Inject, Injectable, Component, Input, EventEmitter, Directive, ElementRef, Output, ViewEncapsulation, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef, NgModule, Optional, SkipSelf, defineInjectable, inject, PLATFORM_ID, NgZone, Renderer2 } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        // console.log('UIConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
/** @type {?} */
const UI_CONFIG = new InjectionToken('ui.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
}
UIService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UIService.ctorParameters = () => [
    { type: UIConfig, decorators: [{ type: Inject, args: [UI_CONFIG,] }] }
];
/** @nocollapse */ UIService.ngInjectableDef = defineInjectable({ factory: function UIService_Factory() { return new UIService(inject(UI_CONFIG)); }, token: UIService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIModuleComponent {
    constructor() {
        this.version = '0.0.10';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UIModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-module',
                template: `<span class="ui-module">ui {{version}}</span>`
            }] }
];
/** @nocollapse */
UIModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClickOutsideDirective {
    /**
     * @param {?} eventManager
     * @param {?} element
     */
    constructor(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.eventManager.getZone().runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.removeClick = this.eventManager.addGlobalEventListener('document', 'click', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                this.onClick(e);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeClick();
    }
    // @HostListener('document:click', ['$event'])
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        /** @type {?} */
        const targetElement = (/** @type {?} */ (e.target));
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        /** @type {?} */
        const clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            if (this.initialFocus) {
                this.initialFocus = false;
                this.eventManager.getZone().run((/**
                 * @return {?}
                 */
                () => {
                    this.clickOutside.emit(null);
                }));
            }
        }
        else {
            this.initialFocus = true;
        }
    }
}
ClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clickOutside]'
            },] }
];
/** @nocollapse */
ClickOutsideDirective.ctorParameters = () => [
    { type: EventManager },
    { type: ElementRef }
];
ClickOutsideDirective.propDecorators = {
    initialFocus: [{ type: Input }],
    clickOutside: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// use require for polyfill
class LazyImagesDirective {
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
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            require('intersection-observer'); // use require for polyfill
            this.onRegister();
        }));
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
        const observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        mutations => this.onChange(mutations)));
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
        images.forEach((/**
         * @param {?} image
         * @return {?}
         */
        (image) => this.observer.observe(image)));
    }
    /**
     * @return {?}
     */
    newIntersectionObserver() {
        /** @type {?} */
        const config = this.lazyImages instanceof Object ? this.lazyImages : undefined;
        this.observer = new IntersectionObserver((/**
         * @param {?} images
         * @return {?}
         */
        (images) => images.forEach((/**
         * @param {?} image
         * @return {?}
         */
        image => {
            if (!image.isIntersecting) {
                return;
            }
            this.onAppearsInViewport(image.target);
        }))), config);
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
            this.onImagePreload(input, (/**
             * @param {?} output
             * @return {?}
             */
            (output) => {
                this.renderer.setAttribute(image, 'src', output);
                this.renderer.removeAttribute(image, 'data-src');
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.renderer.addClass(image, 'ready');
                    }), 1);
                }));
            }));
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
        img.onload = (/**
         * @return {?}
         */
        () => {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ModalEventType = {
    Complete: 0,
    Close: 1,
};
ModalEventType[ModalEventType.Complete] = 'Complete';
ModalEventType[ModalEventType.Close] = 'Close';
class ModalCompleteEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
class ModalCloseEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
}
class Modal {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
}
Modal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: Modal }
];
/** @nocollapse */ Modal.ngInjectableDef = defineInjectable({ factory: function Modal_Factory() { return new Modal(inject(Modal)); }, token: Modal, providedIn: "root" });
class ModalData extends Object {
}
ModalData.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ModalData.ngInjectableDef = defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.modals$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    getInfos() {
        return this.modals$.pipe(map((/**
         * @param {?} modals
         * @return {?}
         */
        (modals) => {
            return modals.length ? modals[modals.length - 1] : null;
        })));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    addClass(name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.add(name);
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removeClass(name) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const body = (/** @type {?} */ (document.querySelector('body')));
            body.classList.remove(name);
        }
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    open(modal) {
        this.addClass('modal-active');
        modal = new Modal(modal);
        /** @type {?} */
        const modals = this.modals$.getValue();
        modals.push(modal);
        this.modals$.next(modals);
        return modal.emitter;
        // event emitter bound to modals$
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    complete(modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCompleteEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    close(modal, data) {
        modal = this.removeAll();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @param {?=} modal
     * @param {?=} data
     * @return {?}
     */
    prev(modal, data) {
        modal = modal ? this.remove(modal) : this.pop();
        if (modal) {
            modal.emitter.emit(new ModalCloseEvent({ modal: modal, data: data }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    pop() {
        /** @type {?} */
        const modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            const modal = modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @param {?} modal
     * @return {?}
     */
    remove(modal) {
        /** @type {?} */
        const modals = this.modals$.getValue();
        if (modals.length && modals[modals.length - 1] === modal) {
            modals.pop();
            if (!modals.length) {
                this.removeClass('modal-active');
            }
            this.modals$.next(modals);
            return modal;
        }
        else {
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeAll() {
        /** @type {?} */
        const modals = this.modals$.getValue();
        if (modals.length) {
            /** @type {?} */
            const modal = modals.pop();
            this.removeClass('modal-active');
            this.modals$.next([]);
            return modal;
        }
        else {
            return null;
        }
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ModalService.ngInjectableDef = defineInjectable({ factory: function ModalService_Factory() { return new ModalService(inject(PLATFORM_ID)); }, token: ModalService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent extends DisposableComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.modalCount = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((/**
         * @param {?} modals
         * @return {?}
         */
        (modals) => {
            this.modalCount = modals.length;
            /** @type {?} */
            const modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        }))).subscribe((/**
         * @param {?} modal
         * @return {?}
         */
        (modal) => {
            this.className = modal ? modal.className : null;
        }));
    }
    /**
     * @return {?}
     */
    doClose() {
        this.modalService.close();
    }
    /**
     * @return {?}
     */
    doPrev() {
        this.modalService.prev();
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-modal-container-component',
                template: "<div class=\"modal\" [ngClass]=\"{ active: modalCount > 0 }\">\r\n\t<div class=\"modal__background\" (click)=\"doClose()\"></div>\r\n\t<div class=\"modal__page\" [ngClass]=\"className\">\r\n\t\t<div class=\"modal__header\">\r\n\t\t\t<button type=\"button\" class=\"btn btn--prev\" (click)=\"doPrev()\" *ngIf=\"modalCount > 1\" [title]=\"'modal.back' | label : 'back'\">\r\n\t\t\t\t<svg><use xlink:href=\"#prev\" /></svg> <span>{{'modal.back' | label : 'back'}}</span>\r\n\t\t\t</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn--close\" (click)=\"doClose()\" title=\"'modal.close' | label : 'close'\">\r\n\t\t\t\t<svg><use xlink:href=\"#close\" /></svg> <span>{{'modal.close' | label : 'close'}}</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal__content\">\r\n\t\t\t<ng-container *ngFor=\"let modal of (modalService.modals$ | async); let last = last;\">\r\n\t\t\t\t<core-modal-view-component [modal]=\"modal\" [hidden]=\"!last\"></core-modal-view-component>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n",
                encapsulation: ViewEncapsulation.Emulated
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalViewComponent extends DisposableComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setModal(this.modal);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.component) {
            this.component.destroy();
            this.component = null;
        }
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    setModal(modal) {
        if (this.component) {
            this.component.destroy();
        }
        if (!modal) {
            this.component = null;
            return;
        }
        /** @type {?} */
        const providers = Object.keys(modal.providers).map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            return { provide: key, useValue: modal.providers[key] };
        }));
        providers.push({ provide: ModalData, useValue: modal.data }, { provide: Modal, useValue: modal });
        /** @type {?} */
        const injector = Injector.create({ providers });
        // const resolvedInputs = ReflectiveInjector.resolve(providers);
        // const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(modal.component);
        /** @type {?} */
        const component = factory.create(injector);
        this.modalContainer.insert(component.hostView);
        this.component = component;
        // this.changeDetector.markForCheck();
    }
}
ModalViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-modal-view-component',
                template: "<ng-container #modalContainer></ng-container>\r\n",
                // styleUrls: ['./modal-view.component.scss'],
                encapsulation: ViewEncapsulation.Emulated
            }] }
];
/** @nocollapse */
ModalViewComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
ModalViewComponent.propDecorators = {
    modalContainer: [{ type: ViewChild, args: ['modalContainer', { read: ViewContainerRef },] }],
    modal: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RafService {
    /**
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
    }
    /**
     * @return {?}
     */
    raf$() {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (isPlatformBrowser(this.platformId)) {
                return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(shareReplay());
            }
            else {
                return of(null);
            }
        }));
    }
}
RafService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RafService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ RafService.ngInjectableDef = defineInjectable({ factory: function RafService_Factory() { return new RafService(inject(PLATFORM_ID), inject(NgZone)); }, token: RafService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Point {
    constructor() {
        this.top = 0;
        this.left = 0;
        this.x = 0;
        this.y = 0;
    }
}
class Rect {
    /**
     * @param {?=} rect
     */
    constructor(rect) {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.right = 0;
        this.bottom = 0;
        this.center = new Point();
        this.set(rect);
    }
    /**
     * @param {?} rect
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    static contains(rect, left, top) {
        return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    }
    /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    static intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    static fromNode(node) {
        if (!node.getClientRects().length) {
            return new Rect();
        }
        /** @type {?} */
        const rect = node.getBoundingClientRect();
        // const defaultView = node.ownerDocument.defaultView;
        return new Rect({
            // top: rect.top + defaultView.pageYOffset,
            // left: rect.left + defaultView.pageXOffset,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    set(rect) {
        if (rect) {
            Object.assign(this, rect);
            this.right = this.left + this.width;
            this.bottom = this.top + this.height;
        }
        /** @type {?} */
        const y = this.top + this.height / 2;
        /** @type {?} */
        const x = this.left + this.width / 2;
        this.center = {
            left: x,
            top: y,
            x,
            y,
        };
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    contains(left, top) {
        return Rect.contains(this, left, top);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    intersect(rect) {
        return Rect.intersectRect(this, rect);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    intersection(rect) {
        /** @type {?} */
        const center = {
            x: (this.center.x - rect.center.x) / (rect.width / 2),
            y: (this.center.y - rect.center.y) / (rect.height / 2),
        };
        if (this.intersect(rect)) {
            /** @type {?} */
            const dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
            /** @type {?} */
            const dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
            /** @type {?} */
            let x = dx ? (1 - dx / this.width) : ((rect.left + rect.width) - this.left) / this.width;
            /** @type {?} */
            let y = dy ? (1 - dy / this.height) : ((rect.top + rect.height) - this.top) / this.height;
            x = Math.min(1, x);
            y = Math.min(1, y);
            return {
                x: x,
                y: y,
                center: center
            };
        }
        else {
            return { x: 0, y: 0, center: center };
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParallaxDirective extends DisposableComponent {
    // @ViewChild('img', { read: HTMLImageElement }) image;
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} rafService
     */
    constructor(platformId, zone, elementRef, rafService) {
        super();
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.rafService = rafService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const image = this.elementRef.nativeElement.querySelector('img');
            this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} parallax
             * @return {?}
             */
            parallax => {
                // console.log(parallax);
                image.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
            }));
        }));
    }
    /**
     * @return {?}
     */
    parallax$() {
        return this.rafService.raf$().pipe(map((/**
         * @param {?} top
         * @return {?}
         */
        top => {
            /** @type {?} */
            const windowRect = new Rect({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            // this.windowRect;
            /** @type {?} */
            const node = this.elementRef.nativeElement;
            /** @type {?} */
            const parallax = (this.parallax || 5) * 2;
            /** @type {?} */
            const direction = 1;
            // i % 2 === 0 ? 1 : -1;
            /** @type {?} */
            let rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            /** @type {?} */
            const intersection = rect.intersection(windowRect);
            // console.log(intersection);
            if (intersection.y > 0) {
                /** @type {?} */
                const y = Math.min(1, Math.max(-1, intersection.center.y));
                /** @type {?} */
                const s = (100 + parallax * 2) / 100;
                /** @type {?} */
                const p = (-50 + (y * parallax * direction));
                return { s: s, p: p };
            }
            else {
                return null;
            }
        })), filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== null)));
    }
    /**
     * @return {?}
     */
    scrollTop$() {
        return this.rafService.raf$().pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => window.pageYOffset)), distinctUntilChanged(), tap((/**
         * @param {?} x
         * @return {?}
         */
        x => console.log(x))));
    }
}
ParallaxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[parallax]'
            },] }
];
/** @nocollapse */
ParallaxDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef },
    { type: RafService }
];
ParallaxDirective.propDecorators = {
    parallax: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollDirective extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} elementRef
     */
    constructor(platformId, zone, elementRef) {
        super();
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.scroll = new EventEmitter();
        this.scrollEvent = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            return this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return fromEvent(this.elementRef.nativeElement, 'scroll')
                    .pipe(takeUntil(this.unsubscribe))
                    .subscribe(observer);
            }));
        }));
        this.scrollDocumentEvent = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            return this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return fromEvent(window.document, 'scroll')
                    .pipe(takeUntil(this.unsubscribe))
                    .subscribe(observer);
            }));
            /*
            this.zone.runOutsideAngular(() => {
                this.renderer.listenGlobal('window', 'scroll', () => {
                    console.log('scrolling');
                });
            });
            */
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.scrollDocumentEvent.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const e = {
                scrollHeight: document.scrollingElement.scrollHeight,
                scrollLeft: document.scrollingElement.scrollLeft,
                scrollTop: document.scrollingElement.scrollTop,
                scrollWidth: document.scrollingElement.scrollWidth,
                originalEvent: event,
            };
            this.scroll.emit(e);
        }));
    }
}
ScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scroll]'
            },] }
];
/** @nocollapse */
ScrollDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef }
];
ScrollDirective.propDecorators = {
    scroll: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpriteComponent {
}
SpriteComponent.decorators = [
    { type: Component, args: [{
                selector: '[sprite]',
                template: `<ng-container *ngIf="sprite">
	<svg class="sprite">
		<use attr.xlink:href="#{{sprite}}"></use>
	</svg>
</ng-container>`
            }] }
];
SpriteComponent.propDecorators = {
    sprite: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    UIService,
    ModalService,
    RafService,
];
/** @type {?} */
const components = [
    UIModuleComponent,
    ModalContainerComponent,
    ModalViewComponent,
    SpriteComponent,
];
/** @type {?} */
const directives = [
    ClickOutsideDirective,
    LazyImagesDirective,
    ParallaxDirective,
    ScrollDirective,
];
class UIModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('UIModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: UIModule,
            providers: [
                { provide: UI_CONFIG, useValue: config },
            ]
        };
    }
}
UIModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    ...services
                ],
                declarations: [
                    ...components,
                    ...directives,
                ],
                exports: [
                    CoreModule,
                    ...components,
                    ...directives,
                ],
            },] }
];
/** @nocollapse */
UIModule.ctorParameters = () => [
    { type: UIModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UIConfig, UI_CONFIG, UIService, UIModuleComponent, UIModule, ClickOutsideDirective, LazyImagesDirective, Modal, ModalCloseEvent, ModalCompleteEvent, ModalData, ModalEventType, ModalContainerComponent, ModalViewComponent, ModalService, ParallaxDirective, RafService, ScrollDirective, SpriteComponent as ɵa };

//# sourceMappingURL=designr-ui.js.map