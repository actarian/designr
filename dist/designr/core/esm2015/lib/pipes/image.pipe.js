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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVbkQsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7SUFFckIsU0FBUyxDQUFDLE1BQWUsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDN0QsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7O2NBQ25CLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87UUFDakUsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWTtJQUN2RyxDQUFDOzs7Ozs7OztJQUdELFdBQVcsQ0FBQyxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQy9ELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7Y0FDN0MsU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTzs7WUFDN0QsS0FBSyxHQUFVLElBQUk7UUFDdkIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDaEUsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFDOUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDdkQ7U0FDRDtRQUNELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7OztZQTdCRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87YUFFYjtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdpbWFnZScsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nLCBxdWVyeVN0cmluZz86IHN0cmluZyk6IEltYWdlIHtcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XG5cdFx0cmV0dXJuIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkgPyBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gaW1hZ2VUeXBlKSB8fCBudWxsIDogbnVsbDsgLy8gaW1hZ2VzWzBdXG5cdH1cblxuXHQvLyAyMSBtYXJ6byAyMDE5XG5cdHRyYW5zZm9ybV9fKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHR5cGUgPSB0eXBlIHx8ICdEZWZhdWx0Jztcblx0XHRxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiAnJztcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcblx0XHRsZXQgaW1hZ2U6IEltYWdlID0gbnVsbDtcblx0XHRpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpIHtcblx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSk7IC8vIHx8IGltYWdlc1swXTtcblx0XHRcdGlmICghaW1hZ2UgJiYgaW1hZ2VUeXBlICE9PSBJbWFnZVR5cGUuRGVmYXVsdCkge1xuXHRcdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuRGVmYXVsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpbWFnZSA/IChpbWFnZS51cmwgKyBxdWVyeVN0cmluZykucmVwbGFjZSgvIC9nLCAnJTIwJykgOiBudWxsO1xuXHR9XG5cbn1cbiJdfQ==