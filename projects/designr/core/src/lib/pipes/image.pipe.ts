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

	transform(images: Image[], type?: string, queryString?: string): Image {
		type = type || 'Default';
		const imageType: ImageType = ImageType[type] || ImageType.Default;
		return (images && images.length) ? images.find(i => i.type === imageType) || null : null; // images[0]
	}

	// 21 marzo 2019
	transform__(images: Image[], type?: string, queryString?: string): string {
		type = type || 'Default';
		queryString = queryString ? `?${queryString}` : '';
		const imageType: ImageType = ImageType[type] || ImageType.Default;
		let image: Image = null;
		if (images && images.length) {
			image = images.find(i => i.type === imageType); // || images[0];
			if (!image && imageType !== ImageType.Default) {
				image = images.find(i => i.type === ImageType.Default);
			}
		}
		return image ? (image.url + queryString).replace(/ /g, '%20') : null;
	}

}
