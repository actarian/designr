/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
var ImageUrlPipe = /** @class */ (function () {
    function ImageUrlPipe() {
    }
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    ImageUrlPipe.prototype.transform = /**
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
            function (i) { return i.type === imageType; })) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    };
    ImageUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'imageUrl',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ImageUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function ImageUrlPipe_Factory() { return new ImageUrlPipe(); }, token: ImageUrlPipe, providedIn: "root" });
    return ImageUrlPipe;
}());
export { ImageUrlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ltYWdlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVuRDtJQUFBO0tBcUJDOzs7Ozs7O0lBWEEsZ0NBQVM7Ozs7OztJQUFULFVBQVUsTUFBZSxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUM3RCxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUN6QixXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFJLFdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUM3QyxTQUFTLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPOztZQUM3RCxLQUFLLEdBQVUsSUFBSTtRQUN2QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLEVBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOztnQkFuQkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxVQUFVO2lCQUVoQjtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7dUJBVkQ7Q0F3QkMsQUFyQkQsSUFxQkM7U0FiWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlJztcclxuXHJcbkBQaXBlKHtcclxuXHRuYW1lOiAnaW1hZ2VVcmwnLFxyXG5cdC8vIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0dHJhbnNmb3JtKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xyXG5cdFx0cXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyc7XHJcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcclxuXHRcdGxldCBpbWFnZTogSW1hZ2UgPSBudWxsO1xyXG5cdFx0aWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XHJcblx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSkgfHwgaW1hZ2VzWzBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGltYWdlID8gKGltYWdlLnVybCArIHF1ZXJ5U3RyaW5nKS5yZXBsYWNlKC8gL2csICclMjAnKSA6IG51bGw7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=