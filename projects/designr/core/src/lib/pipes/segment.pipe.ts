
import { Location } from '@angular/common';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'segment',
})

@Injectable({
	providedIn: 'root'
})
export class SegmentPipe implements PipeTransform {

	constructor(
		private location: Location
	) { }

	transform(segments: any[] | string): any[] {
		segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
		let path: string = segments.join('/');
		path = this.location.normalize(path);
		if (path.indexOf('/') !== 0) {
			path = `/${path}`;
		}
		segments = path.split('/');
		return segments;
	}

}
