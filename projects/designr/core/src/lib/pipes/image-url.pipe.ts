import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Image, ImageType } from '../models/image';

@Pipe({
	name: 'imageUrl',
	// pure: false
})

@Injectable({
	providedIn: 'root'
})
export class ImageUrlPipe implements PipeTransform {

	transform(images: Image[], type?: string, queryString?: string): string {
		type = type || 'Default';
		queryString = queryString ? `?${queryString}` : '';
		const imageType: ImageType = ImageType[type] || ImageType.Default;
		let image: Image = null;
		if (images && images.length) {
			image = images.find(i => i.type === imageType) || images[0];
		}
		return image ? (image.url + queryString).replace(/ /g, '%20') : null;
	}

}
