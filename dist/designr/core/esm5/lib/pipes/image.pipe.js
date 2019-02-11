/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    ImagePipe.prototype.transform = /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    function (images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? "?" + queryString : '';
        /** @type {?} */
        var imageType = ImageType[type] || ImageType.Default;
        /** @type {?} */
        var image = null;
        if (images && images.length) {
            image = images.find(function (i) { return i.type === imageType; }) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    };
    ImagePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'image',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ImagePipe.ngInjectableDef = i0.defineInjectable({ factory: function ImagePipe_Factory() { return new ImagePipe(); }, token: ImagePipe, providedIn: "root" });
    return ImagePipe;
}());
export { ImagePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFbkQ7SUFBQTtLQW1CQzs7Ozs7OztJQVZBLDZCQUFTOzs7Ozs7SUFBVCxVQUFVLE1BQWUsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDN0QsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7UUFDekIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBSSxXQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDN0MsU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTzs7WUFDN0QsS0FBSyxHQUFVLElBQUk7UUFDdkIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFwQixDQUFvQixDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7Z0JBbEJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsT0FBTztpQkFFYjtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7b0JBVkQ7Q0FzQkMsQUFuQkQsSUFtQkM7U0FYWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ltYWdlJyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHR0cmFuc2Zvcm0oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nLCBxdWVyeVN0cmluZz86IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xuXHRcdHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnO1xuXHRcdGNvbnN0IGltYWdlVHlwZTogSW1hZ2VUeXBlID0gSW1hZ2VUeXBlW3R5cGVdIHx8IEltYWdlVHlwZS5EZWZhdWx0O1xuXHRcdGxldCBpbWFnZTogSW1hZ2UgPSBudWxsO1xuXHRcdGlmIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkge1xuXHRcdFx0aW1hZ2UgPSBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gaW1hZ2VUeXBlKSB8fCBpbWFnZXNbMF07XG5cdFx0fVxuXHRcdHJldHVybiBpbWFnZSA/IChpbWFnZS51cmwgKyBxdWVyeVN0cmluZykucmVwbGFjZSgvIC9nLCAnJTIwJykgOiBudWxsO1xuXHR9XG59XG4iXX0=