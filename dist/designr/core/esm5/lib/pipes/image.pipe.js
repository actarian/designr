import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
var ImagePipe = /** @class */ (function () {
    function ImagePipe() {
    }
    ImagePipe.prototype.transform = function (images, type, queryString) {
        type = type || 'Default';
        var imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find(function (i) { return i.type === imageType; }) || null : null; // images[0]
    };
    // 21 marzo 2019
    ImagePipe.prototype.transform__ = function (images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? "?" + queryString : '';
        var imageType = ImageType[type] || ImageType.Default;
        var image = null;
        if (images && images.length) {
            image = images.find(function (i) { return i.type === imageType; }); // || images[0];
            if (!image && imageType !== ImageType.Default) {
                image = images.find(function (i) { return i.type === ImageType.Default; });
            }
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    };
    ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
    ImagePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "image", type: ImagePipe, pure: true });
    ImagePipe.ɵprov = i0.ɵɵdefineInjectable({ token: ImagePipe, factory: ImagePipe.ɵfac, providedIn: 'root' });
    return ImagePipe;
}());
export { ImagePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImagePipe, [{
        type: Pipe,
        args: [{
                name: 'image',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVuRDtJQUFBO0tBK0JDO0lBckJBLDZCQUFTLEdBQVQsVUFBVSxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQzdELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLElBQU0sU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVk7SUFDdkcsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiwrQkFBVyxHQUFYLFVBQVksTUFBZSxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUMvRCxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUN6QixXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFJLFdBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQU0sU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2xFLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQztRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtZQUNoRSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUM5QyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDO3NFQXJCVyxTQUFTOzZEQUFULFNBQVM7cURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtvQkFUbkI7Q0FrQ0MsQUEvQkQsSUErQkM7U0F2QlksU0FBUztrREFBVCxTQUFTO2NBUnJCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUViOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlLCBJbWFnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvaW1hZ2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdpbWFnZScsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHR0cmFuc2Zvcm0oaW1hZ2VzOiBJbWFnZVtdLCB0eXBlPzogc3RyaW5nLCBxdWVyeVN0cmluZz86IHN0cmluZyk6IEltYWdlIHtcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XG5cdFx0cmV0dXJuIChpbWFnZXMgJiYgaW1hZ2VzLmxlbmd0aCkgPyBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gaW1hZ2VUeXBlKSB8fCBudWxsIDogbnVsbDsgLy8gaW1hZ2VzWzBdXG5cdH1cblxuXHQvLyAyMSBtYXJ6byAyMDE5XG5cdHRyYW5zZm9ybV9fKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHR5cGUgPSB0eXBlIHx8ICdEZWZhdWx0Jztcblx0XHRxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiAnJztcblx0XHRjb25zdCBpbWFnZVR5cGU6IEltYWdlVHlwZSA9IEltYWdlVHlwZVt0eXBlXSB8fCBJbWFnZVR5cGUuRGVmYXVsdDtcblx0XHRsZXQgaW1hZ2U6IEltYWdlID0gbnVsbDtcblx0XHRpZiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpIHtcblx0XHRcdGltYWdlID0gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSk7IC8vIHx8IGltYWdlc1swXTtcblx0XHRcdGlmICghaW1hZ2UgJiYgaW1hZ2VUeXBlICE9PSBJbWFnZVR5cGUuRGVmYXVsdCkge1xuXHRcdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBJbWFnZVR5cGUuRGVmYXVsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpbWFnZSA/IChpbWFnZS51cmwgKyBxdWVyeVN0cmluZykucmVwbGFjZSgvIC9nLCAnJTIwJykgOiBudWxsO1xuXHR9XG5cbn1cbiJdfQ==