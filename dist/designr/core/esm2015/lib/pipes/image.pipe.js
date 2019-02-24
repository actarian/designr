/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
export class ImagePipe {
    /**
     * @param {?} images
     * @param {?=} type
     * @return {?}
     */
    transform(images, type) {
        type = type || 'Default';
        /** @type {?} */
        const imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find(i => i.type === imageType) || null : null; // images[0]
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{
                name: 'image',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ImagePipe.ngInjectableDef = i0.defineInjectable({ factory: function ImagePipe_Factory() { return new ImagePipe(); }, token: ImagePipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVbkQsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUVyQixTQUFTLENBQUMsTUFBZSxFQUFFLElBQWE7UUFDdkMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7O2NBQ25CLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87UUFDakUsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWTtJQUN2RyxDQUFDOzs7WUFkRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87YUFFYjtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdpbWFnZScsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nKTogSW1hZ2Uge1xuXHRcdHR5cGUgPSB0eXBlIHx8ICdEZWZhdWx0Jztcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcblx0XHRyZXR1cm4gKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSA/IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpIHx8IG51bGwgOiBudWxsOyAvLyBpbWFnZXNbMF1cblx0fVxuXG59XG4iXX0=