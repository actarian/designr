/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
export class ImageUrlPipe {
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    transform(images, type, queryString) {
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
            i => i.type === imageType)) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImageUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'imageUrl',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ImageUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function ImageUrlPipe_Factory() { return new ImageUrlPipe(); }, token: ImageUrlPipe, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ltYWdlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVVuRCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUV4QixTQUFTLENBQUMsTUFBZSxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUM3RCxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUN6QixXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O2NBQzdDLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87O1lBQzdELEtBQUssR0FBVSxJQUFJO1FBQ3ZCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RFLENBQUM7OztZQW5CRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7YUFFaEI7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdpbWFnZVVybCcsXHJcblx0Ly8gcHVyZTogZmFsc2VcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHR0cmFuc2Zvcm0oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nLCBxdWVyeVN0cmluZz86IHN0cmluZyk6IHN0cmluZyB7XHJcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XHJcblx0XHRxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiAnJztcclxuXHRcdGNvbnN0IGltYWdlVHlwZTogSW1hZ2VUeXBlID0gSW1hZ2VUeXBlW3R5cGVdIHx8IEltYWdlVHlwZS5EZWZhdWx0O1xyXG5cdFx0bGV0IGltYWdlOiBJbWFnZSA9IG51bGw7XHJcblx0XHRpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpIHtcclxuXHRcdFx0aW1hZ2UgPSBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gaW1hZ2VUeXBlKSB8fCBpbWFnZXNbMF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW1hZ2UgPyAoaW1hZ2UudXJsICsgcXVlcnlTdHJpbmcpLnJlcGxhY2UoLyAvZywgJyUyMCcpIDogbnVsbDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==