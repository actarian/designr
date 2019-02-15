import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Image, ImageType } from '../models/image';

@Pipe({
	name: 'image',
	// pure: false
})

@Injectable({
	providedIn: 'root'
})
export class ImagePipe implements PipeTransform {

	transform(images: Image[], type?: string): Image {
		type = type || 'Default';
		const imageType: ImageType = ImageType[type] || ImageType.Default;
		return (images && images.length) ? images.find(i => i.type === imageType) || images[0] : null;
	}

}
