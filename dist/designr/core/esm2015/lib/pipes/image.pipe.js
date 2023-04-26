/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
export class ImagePipe {
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    transform(images, type, queryString) {
        type = type || 'Default';
        /** @type {?} */
        const imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find((/**
         * @param {?} i
         * @return {?}
         */
        i => i.type === imageType)) || null : null; // images[0]
    }
    // 21 marzo 2019
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    transform__(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        /** @type {?} */
        const imageType = ImageType[type] || ImageType.Default;
        /** @type {?} */
        let image = null;
        if (images && images.length) {
            image = images.find((/**
             * @param {?} i
             * @return {?}
             */
            i => i.type === imageType)); // || images[0];
            if (!image && imageType !== ImageType.Default) {
                image = images.find((/**
                 * @param {?} i
                 * @return {?}
                 */
                i => i.type === ImageType.Default));
            }
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVbkQsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7SUFFckIsU0FBUyxDQUFDLE1BQWUsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDN0QsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7O2NBQ25CLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87UUFDakUsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWTtJQUN2RyxDQUFDOzs7Ozs7OztJQUdELFdBQVcsQ0FBQyxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQy9ELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Y0FDN0MsU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTzs7WUFDN0QsS0FBSyxHQUFVLElBQUk7UUFDdkIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDaEUsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDOUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDdkQ7U0FDRDtRQUNELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7OztZQTdCRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87YUFFYjtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ2ltYWdlJyxcclxuXHQvLyBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdHRyYW5zZm9ybShpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogSW1hZ2Uge1xyXG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xyXG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XHJcblx0XHRyZXR1cm4gKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSA/IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpIHx8IG51bGwgOiBudWxsOyAvLyBpbWFnZXNbMF1cclxuXHR9XHJcblxyXG5cdC8vIDIxIG1hcnpvIDIwMTlcclxuXHR0cmFuc2Zvcm1fXyhpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdHR5cGUgPSB0eXBlIHx8ICdEZWZhdWx0JztcclxuXHRcdHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnO1xyXG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XHJcblx0XHRsZXQgaW1hZ2U6IEltYWdlID0gbnVsbDtcclxuXHRcdGlmIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkge1xyXG5cdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpOyAvLyB8fCBpbWFnZXNbMF07XHJcblx0XHRcdGlmICghaW1hZ2UgJiYgaW1hZ2VUeXBlICE9PSBJbWFnZVR5cGUuRGVmYXVsdCkge1xyXG5cdFx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5EZWZhdWx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGltYWdlID8gKGltYWdlLnVybCArIHF1ZXJ5U3RyaW5nKS5yZXBsYWNlKC8gL2csICclMjAnKSA6IG51bGw7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=