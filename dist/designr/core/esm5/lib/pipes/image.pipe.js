/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.type === imageType; })) || null : null; // images[0]
    };
    // 21 marzo 2019
    // 21 marzo 2019
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    ImagePipe.prototype.transform__ = 
    // 21 marzo 2019
    /**
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
            image = images.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.type === imageType; })); // || images[0];
            if (!image && imageType !== ImageType.Default) {
                image = images.find((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return i.type === ImageType.Default; }));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFbkQ7SUFBQTtLQStCQzs7Ozs7OztJQXJCQSw2QkFBUzs7Ozs7O0lBQVQsVUFBVSxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQzdELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDOztZQUNuQixTQUFTLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLEVBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVk7SUFDdkcsQ0FBQztJQUVELGdCQUFnQjs7Ozs7Ozs7SUFDaEIsK0JBQVc7Ozs7Ozs7O0lBQVgsVUFBWSxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQy9ELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQUksV0FBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQzdDLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87O1lBQzdELEtBQUssR0FBVSxJQUFJO1FBQ3ZCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDLENBQUMsZ0JBQWdCO1lBQ2hFLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO2FBQ3ZEO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOztnQkE3QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO2lCQUViO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OztvQkFWRDtDQWtDQyxBQS9CRCxJQStCQztTQXZCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ltYWdlJyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybShpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogSW1hZ2Uge1xuXHRcdHR5cGUgPSB0eXBlIHx8ICdEZWZhdWx0Jztcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcblx0XHRyZXR1cm4gKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSA/IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpIHx8IG51bGwgOiBudWxsOyAvLyBpbWFnZXNbMF1cblx0fVxuXG5cdC8vIDIxIG1hcnpvIDIwMTlcblx0dHJhbnNmb3JtX18oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nLCBxdWVyeVN0cmluZz86IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xuXHRcdHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6ICcnO1xuXHRcdGNvbnN0IGltYWdlVHlwZTogSW1hZ2VUeXBlID0gSW1hZ2VUeXBlW3R5cGVdIHx8IEltYWdlVHlwZS5EZWZhdWx0O1xuXHRcdGxldCBpbWFnZTogSW1hZ2UgPSBudWxsO1xuXHRcdGlmIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkge1xuXHRcdFx0aW1hZ2UgPSBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gaW1hZ2VUeXBlKTsgLy8gfHwgaW1hZ2VzWzBdO1xuXHRcdFx0aWYgKCFpbWFnZSAmJiBpbWFnZVR5cGUgIT09IEltYWdlVHlwZS5EZWZhdWx0KSB7XG5cdFx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IEltYWdlVHlwZS5EZWZhdWx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGltYWdlID8gKGltYWdlLnVybCArIHF1ZXJ5U3RyaW5nKS5yZXBsYWNlKC8gL2csICclMjAnKSA6IG51bGw7XG5cdH1cblxufVxuIl19