import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SegmentPipe } from './segment.pipe';

@Pipe({
	name: 'asset',
	// pure: false
})

@Injectable({
	providedIn: 'root'
})
export class AssetPipe implements PipeTransform {

	constructor(
		private configService: ConfigService,
		private segment: SegmentPipe
	) { }

	transform(data: any[] | string): string {
		if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
			return data;
		} else {
			const segments = this.segment.transform(data);
			segments.unshift(this.configService.options.assets);
			return segments.join('/');
		}
	}

}
