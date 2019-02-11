import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RouteService } from '../routes/route.service';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private routeService: RouteService,
		private authService: AuthService
	) { }

	canActivate() {
		if (this.authService.isAuthenticated()) {
			return true;
		} else {
			this.router.navigate(this.routeService.toRoute(['/']));
			return false;
		}
	}

}
