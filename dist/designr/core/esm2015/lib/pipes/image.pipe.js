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
            image = images.find(i => i.type === imageType) || images[0];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVbkQsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7SUFDckIsU0FBUyxDQUFDLE1BQWUsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDN0QsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7UUFDekIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztjQUM3QyxTQUFTLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPOztZQUM3RCxLQUFLLEdBQVUsSUFBSTtRQUN2QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOzs7WUFsQkQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2FBRWI7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnaW1hZ2UnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XG5cdFx0cXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyc7XG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XG5cdFx0bGV0IGltYWdlOiBJbWFnZSA9IG51bGw7XG5cdFx0aWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XG5cdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpIHx8IGltYWdlc1swXTtcblx0XHR9XG5cdFx0cmV0dXJuIGltYWdlID8gKGltYWdlLnVybCArIHF1ZXJ5U3RyaW5nKS5yZXBsYWNlKC8gL2csICclMjAnKSA6IG51bGw7XG5cdH1cbn1cbiJdfQ==