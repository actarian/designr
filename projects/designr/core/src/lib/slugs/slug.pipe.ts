import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
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
		// private routeService: RouteService,
		private slugService: SlugService
	) { }

	transform(key: string): Observable<string[]> {
		return this.slugService.getKey(key);
		// return this.async.transform<any>(this.slugService.getKey(key));
		// return this.routeService.toSlug(key);
	}

}
