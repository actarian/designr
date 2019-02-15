import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';

@Pipe({
	name: 'public',
	// pure: false
})

@Injectable({
	providedIn: 'root'
})
export class PublicPipe implements PipeTransform {

	constructor(
		private coreService: CoreService,
		private segment: SegmentPipe
	) { }

	transform(data: any[] | string): string {
		const segments = this.segment.transform(data);
		segments.unshift(this.coreService.options.public);
		return segments.join('/');
	}

}
