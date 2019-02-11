import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../config/config.service';
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
		private configService: ConfigService,
		private segment: SegmentPipe
	) { }

	transform(data: any[] | string): string {
		const segments = this.segment.transform(data);
		segments.unshift(this.configService.options.public);
		return segments.join('/');
	}

}
