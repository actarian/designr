import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { RouteService } from './route.service';

@Pipe({
	name: 'route',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class RoutePipe implements PipeTransform {

	constructor(
		private routeService: RouteService,
	) { }

	transform(data: any[] | string): string[] {
		return this.routeService.toRoute(data);
	}

}
