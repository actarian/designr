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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFbkQ7SUFBQTtLQStCQzs7Ozs7OztJQXJCQSw2QkFBUzs7Ozs7O0lBQVQsVUFBVSxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQzdELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDOztZQUNuQixTQUFTLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPO1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLEVBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVk7SUFDdkcsQ0FBQztJQUVELGdCQUFnQjs7Ozs7Ozs7SUFDaEIsK0JBQVc7Ozs7Ozs7O0lBQVgsVUFBWSxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQy9ELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQUksV0FBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQzdDLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU87O1lBQzdELEtBQUssR0FBVSxJQUFJO1FBQ3ZCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDLENBQUMsZ0JBQWdCO1lBQ2hFLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO2FBQ3ZEO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOztnQkE3QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO2lCQUViO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OztvQkFWRDtDQWtDQyxBQS9CRCxJQStCQztTQXZCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlJztcclxuXHJcbkBQaXBlKHtcclxuXHRuYW1lOiAnaW1hZ2UnLFxyXG5cdC8vIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0dHJhbnNmb3JtKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBJbWFnZSB7XHJcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XHJcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcclxuXHRcdHJldHVybiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpID8gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSkgfHwgbnVsbCA6IG51bGw7IC8vIGltYWdlc1swXVxyXG5cdH1cclxuXHJcblx0Ly8gMjEgbWFyem8gMjAxOVxyXG5cdHRyYW5zZm9ybV9fKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xyXG5cdFx0cXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyc7XHJcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcclxuXHRcdGxldCBpbWFnZTogSW1hZ2UgPSBudWxsO1xyXG5cdFx0aWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XHJcblx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSk7IC8vIHx8IGltYWdlc1swXTtcclxuXHRcdFx0aWYgKCFpbWFnZSAmJiBpbWFnZVR5cGUgIT09IEltYWdlVHlwZS5EZWZhdWx0KSB7XHJcblx0XHRcdFx0aW1hZ2UgPSBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkRlZmF1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW1hZ2UgPyAoaW1hZ2UudXJsICsgcXVlcnlTdHJpbmcpLnJlcGxhY2UoLyAvZywgJyUyMCcpIDogbnVsbDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==