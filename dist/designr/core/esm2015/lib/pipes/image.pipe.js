import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
export class ImagePipe {
    transform(images, type, queryString) {
        type = type || 'Default';
        const imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find(i => i.type === imageType) || null : null; // images[0]
    }
    // 21 marzo 2019
    transform__(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        const imageType = ImageType[type] || ImageType.Default;
        let image = null;
        if (images && images.length) {
            image = images.find(i => i.type === imageType); // || images[0];
            if (!image && imageType !== ImageType.Default) {
                image = images.find(i => i.type === ImageType.Default);
            }
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
ImagePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "image", type: ImagePipe, pure: true });
ImagePipe.ɵprov = i0.ɵɵdefineInjectable({ token: ImagePipe, factory: ImagePipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvaW1hZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFTLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVVuRCxNQUFNLE9BQU8sU0FBUztJQUVyQixTQUFTLENBQUMsTUFBZSxFQUFFLElBQWEsRUFBRSxXQUFvQjtRQUM3RCxJQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUN6QixNQUFNLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZO0lBQ3ZHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLE1BQWUsRUFBRSxJQUFhLEVBQUUsV0FBb0I7UUFDL0QsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUM7UUFDekIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELE1BQU0sU0FBUyxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2xFLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQztRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzVCLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtZQUNoRSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUM5QyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Q7UUFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0RSxDQUFDOztrRUFyQlcsU0FBUzt5REFBVCxTQUFTO2lEQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZULE1BQU07a0RBRU4sU0FBUztjQVJyQixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87YUFFYjs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZSwgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2ltYWdlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnaW1hZ2UnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0dHJhbnNmb3JtKGltYWdlczogSW1hZ2VbXSwgdHlwZT86IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBJbWFnZSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgJ0RlZmF1bHQnO1xuXHRcdGNvbnN0IGltYWdlVHlwZTogSW1hZ2VUeXBlID0gSW1hZ2VUeXBlW3R5cGVdIHx8IEltYWdlVHlwZS5EZWZhdWx0O1xuXHRcdHJldHVybiAoaW1hZ2VzICYmIGltYWdlcy5sZW5ndGgpID8gaW1hZ2VzLmZpbmQoaSA9PiBpLnR5cGUgPT09IGltYWdlVHlwZSkgfHwgbnVsbCA6IG51bGw7IC8vIGltYWdlc1swXVxuXHR9XG5cblx0Ly8gMjEgbWFyem8gMjAxOVxuXHR0cmFuc2Zvcm1fXyhpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XG5cdFx0cXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyc7XG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XG5cdFx0bGV0IGltYWdlOiBJbWFnZSA9IG51bGw7XG5cdFx0aWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XG5cdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpOyAvLyB8fCBpbWFnZXNbMF07XG5cdFx0XHRpZiAoIWltYWdlICYmIGltYWdlVHlwZSAhPT0gSW1hZ2VUeXBlLkRlZmF1bHQpIHtcblx0XHRcdFx0aW1hZ2UgPSBpbWFnZXMuZmluZChpID0+IGkudHlwZSA9PT0gSW1hZ2VUeXBlLkRlZmF1bHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaW1hZ2UgPyAoaW1hZ2UudXJsICsgcXVlcnlTdHJpbmcpLnJlcGxhY2UoLyAvZywgJyUyMCcpIDogbnVsbDtcblx0fVxuXG59XG4iXX0=