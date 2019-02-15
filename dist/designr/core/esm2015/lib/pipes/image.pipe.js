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
        return (images && images.length) ? images.find(i => i.type === imageType) || images[0] : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVbkQsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUVyQixTQUFTLENBQUMsTUFBZSxFQUFFLElBQWE7UUFDdkMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7O2NBQ25CLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87UUFDakUsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9GLENBQUM7OztZQWRELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUViO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ltYWdlJyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybShpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcpOiBJbWFnZSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xuXHRcdGNvbnN0IGltYWdlVHlwZTogSW1hZ2VUeXBlID0gSW1hZ2VUeXBlW3R5cGVdIHx8IEltYWdlVHlwZS5EZWZhdWx0O1xuXHRcdHJldHVybiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpID8gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSkgfHwgaW1hZ2VzWzBdIDogbnVsbDtcblx0fVxuXG59XG4iXX0=