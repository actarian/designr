import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption, FormService } from '@designr/control';
import { AuthService, AuthToken, DisposableComponent } from '@designr/core';
import { ModalCompleteEvent, ModalService } from '@designr/ui';
// import { FormGroup } from '@angular/forms';
import { finalize, first } from 'rxjs/operators';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
// import { ControlOption } from '../../core/forms';
import { AuthForgottenComponent } from './auth-forgotten.component';

@Component({
	selector: 'auth-sign-in-component',
	templateUrl: './auth-sign-in.component.html',
	styleUrls: ['./auth-sign-in.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthSignInComponent extends DisposableComponent implements OnInit {

	options: ControlOption<any>[];
	form: FormGroup;
	error: any;
	busy: boolean = false;
	submitted: boolean = false;

	// model: UserSignIn = new UserSignIn({ passwordReveal: true });

	constructor(
		private formService: FormService,
		private modalService: ModalService,
		private authService: AuthService,
		private userService: UserService,
	) {
		super();
	}

	ngOnInit() {
		this.options = this.formService.getOptions([{
			key: 'email',
			schema: 'email',
			label: 'signIn.email',
			placeholder: 'signIn.email',
			required: true,
			order: 1
		}, {
			key: 'password',
			schema: 'password',
			label: 'signIn.password',
			placeholder: 'signIn.password',
			required: true,
			order: 2
		}, {
			key: 'rememberMe',
			schema: 'checkbox',
			label: 'signIn.rememberMe',
			placeholder: 'signIn.rememberMe',
			order: 3
		}, {
			key: 'custom',
			schema: 'custom',
			label: 'signIn.custom',
			placeholder: 'signIn.custom',
			order: 4
		}]);
		this.form = this.formService.getFormGroup(this.options);
	}

	onSubmit(model): void {
		console.log('onSubmit', model);
		this.submitted = true;
		this.error = null;
		this.busy = true;
		this.userService.tryLogin(model).pipe(
			first(),
			finalize(() => this.busy = false),
		).subscribe(
			user => {
				if (user) {
					this.onAuth(user);
				} else {
					this.error = {
						message: 'Invalid user'
					};
				}
			},
			error => {
				this.error = error;
				this.submitted = false;
				console.log('AuthSignInComponent.onSubmit.error', this.error);
			}
		);
	}

	onAuth(user: User) {
		if (user && user.accessToken) {
			const authToken = new AuthToken(user.accessToken);
			this.authService.setToken(authToken);
		}
		this.modalService.close(null, user);
		// error 401!
	}

	onForgotten(): void {
		this.modalService.open({ component: AuthForgottenComponent }).pipe(
			first()
		).subscribe(e => {
			if (e instanceof ModalCompleteEvent) {
				console.log('AuthSignInComponent.onForgotten.complete');
			}
		});
	}

}
