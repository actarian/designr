import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { FacebookService, FacebookUser, GoogleService, GoogleUser } from '@designr/plugins';
import { ModalCompleteEvent, ModalService } from '@designr/ui';
import { finalize, first, switchMap, takeUntil, tap } from 'rxjs/operators';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { AuthSignInComponent } from './auth-sign-in.component';
import { AuthSignUpComponent } from './auth-sign-up.component';

@Component({
	selector: 'auth-component',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthComponent extends DisposableComponent implements OnInit {

	facebookBusy: boolean;
	facebookMe: FacebookUser;
	googleBusy: boolean;
	googleMe: GoogleUser;

	constructor(
		private modalService: ModalService,
		private facebookService: FacebookService,
		private googleService: GoogleService,
		private userService: UserService
	) {
		super();
	}

	ngOnInit() {
		this.facebookService.status().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('SignComponent.facebookService.status', x);
		});
		this.googleService.auth2Instance().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('SignComponent.googleService.auth2Instance', x);
		});
	}

	onFacebook(): void {
		this.facebookBusy = true;
		this.facebookService.getMe().pipe(
			first(),
			tap(me => this.facebookMe = me),
			switchMap(me => this.userService.tryFacebook(me)),
			finalize(() => this.facebookBusy = false),
		).subscribe(user => {
			if (user) {
				this.onAuth(user);
			} else {
				this.onSignUp({ facebook: this.facebookMe });
			}
		}, error => {
			console.log('onFacebook.error', error);
			this.onSignUp({ facebook: this.facebookMe });
		});
	}

	onGoogle(): void {
		this.googleBusy = true;
		this.googleService.getMe().pipe(
			first(),
			tap(me => this.googleMe = me),
			switchMap(me => this.userService.tryGoogle(me)),
			finalize(() => this.googleBusy = false),
		).subscribe(user => {
			if (user) {
				this.onAuth(user);
			} else {
				this.onSignUp({ google: this.googleMe });
			}
		}, error => {
			this.onSignUp({ google: this.googleMe });
		});
	}

	onAuth(user: User) {
		this.modalService.complete(null, user);
	}

	onSignIn(): void {
		this.modalService.open({ component: AuthSignInComponent }).pipe(
			first()
		).subscribe(e => {
			if (e instanceof ModalCompleteEvent) {
				this.onAuth(e.data);
				console.log('AuthComponent.onSignIn', e);
			}
		});
	}

	onSignUp(data?: any) {
		this.modalService.open({ component: AuthSignUpComponent, data: data }).pipe(
			first()
		).subscribe(e => {
			if (e instanceof ModalCompleteEvent) {
				console.log('signed');
			}
		});
	}

}
