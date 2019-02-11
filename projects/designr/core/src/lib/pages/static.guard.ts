import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class StaticGuard implements CanActivate, CanDeactivate<any> {

	private match(route: ActivatedRouteSnapshot): boolean {
		const lastPath = route.url[route.url.length - 1].path;
		// console.log('StaticGuard.CanActivate', e, lastPath);
		const pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
		const match = (lastPath).match(pattern);
		if (match !== null) {
			return true;
		} else {
			return false;
		}
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.match(route);
	}

	canDeactivate(
		component: any,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.match(currentRoute);
	}

}
