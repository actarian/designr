import { Injectable, Pipe } from '@angular/core';
import { ImageType } from '../models/image';
import * as i0 from "@angular/core";
export class ImageUrlPipe {
    transform(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        const imageType = ImageType[type] || ImageType.Default;
        let image = null;
        if (images && images.length) {
            image = images.find(i => i.type === imageType) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImageUrlPipe.ɵfac = function ImageUrlPipe_Factory(t) { return new (t || ImageUrlPipe)(); };
ImageUrlPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "imageUrl", type: ImageUrlPipe, pure: true });
ImageUrlPipe.ɵprov = i0.ɵɵdefineInjectable({ token: ImageUrlPipe, factory: ImageUrlPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ImageUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'imageUrl',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ltYWdlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQVMsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBVW5ELE1BQU0sT0FBTyxZQUFZO0lBRXhCLFNBQVMsQ0FBQyxNQUFlLEVBQUUsSUFBYSxFQUFFLFdBQW9CO1FBQzdELElBQUksR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ3pCLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxNQUFNLFNBQVMsR0FBYyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUM7UUFDeEIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7d0VBWFcsWUFBWTsrREFBWixZQUFZO29EQUFaLFlBQVksV0FBWixZQUFZLG1CQUZaLE1BQU07a0RBRU4sWUFBWTtjQVJ4QixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7YUFFaEI7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UsIEltYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2ltYWdlVXJsJyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybShpbWFnZXM6IEltYWdlW10sIHR5cGU/OiBzdHJpbmcsIHF1ZXJ5U3RyaW5nPzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHR0eXBlID0gdHlwZSB8fCAnRGVmYXVsdCc7XG5cdFx0cXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyc7XG5cdFx0Y29uc3QgaW1hZ2VUeXBlOiBJbWFnZVR5cGUgPSBJbWFnZVR5cGVbdHlwZV0gfHwgSW1hZ2VUeXBlLkRlZmF1bHQ7XG5cdFx0bGV0IGltYWdlOiBJbWFnZSA9IG51bGw7XG5cdFx0aWYgKGltYWdlcyAmJiBpbWFnZXMubGVuZ3RoKSB7XG5cdFx0XHRpbWFnZSA9IGltYWdlcy5maW5kKGkgPT4gaS50eXBlID09PSBpbWFnZVR5cGUpIHx8IGltYWdlc1swXTtcblx0XHR9XG5cdFx0cmV0dXJuIGltYWdlID8gKGltYWdlLnVybCArIHF1ZXJ5U3RyaW5nKS5yZXBsYWNlKC8gL2csICclMjAnKSA6IG51bGw7XG5cdH1cblxufVxuIl19