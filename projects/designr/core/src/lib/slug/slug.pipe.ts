import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';

@Pipe({
	name: 'slug',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class SlugPipe implements PipeTransform {

	constructor(
		private slugService: SlugService,
		private routePipe: RoutePipe,
	) { }

	transform(key: string, segments?: string[]): string[] {
		const slug = this.slugService.transform(key);
		if (slug) {
			let slugs = this.routePipe.transform(slug);
			if (slugs && segments) {
				slugs = slugs.concat(segments);
			}
			return slugs;
		} else {
			return [];
		}
	}

}
