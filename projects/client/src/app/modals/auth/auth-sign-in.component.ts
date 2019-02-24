import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormService } from '@designr/control';
import { AuthService, AuthToken, DisposableComponent } from '@designr/core';
import { ModalCompleteEvent, ModalService } from '@designr/ui';
// import { FormGroup } from '@angular/forms';
import { finalize, first } from 'rxjs/operators';
import { User, UserSignIn } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
// import { ControlBase } from '../../core/forms';
import { AuthForgottenComponent } from './auth-forgotten.component';

@Component({
	selector: 'auth-sign-in-component',
	templateUrl: './auth-sign-in.component.html',
	styleUrls: ['./auth-sign-in.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthSignInComponent extends DisposableComponent implements OnInit {
	// controls: ControlBase<any>[];
	// group: FormGroup;

	model: UserSignIn = new UserSignIn({ passwordReveal: true });
	error: any;
	busy: boolean = false;
	submitted: boolean = false;

	constructor(
		private modalService: ModalService,
		private authService: AuthService,
		private userService: UserService,
		private formService: FormService, // !!!
	) {
		super();
	}

	ngOnInit() {
		// REACTIVE FORM
		/*
		this.controls = this.formService.getControlsFromOptions([{
			key: 'email',
			schema: 'email',
			label: 'signIn.email',
			placeholder: 'signIn.email',
			required: true,
			match: 'emailConfirm',
			reverse: true,
			order: 1
		}, {
			key: 'emailConfirm',
			schema: 'email',
			label: 'signIn.emailConfirm',
			placeholder: 'signIn.emailConfirm',
			required: true,
			match: 'email',
			order: 2,
		}, {
			key: 'password',
			schema: 'password',
			label: 'signIn.password',
			placeholder: 'signIn.password',
			required: true,
			minLength: 6,
			order: 3
		}, {
			key: 'hours',
			schema: 'number',
			label: 'signIn.hours',
			placeholder: 'signIn.hours',
			required: true,
			min: 0,
			max: 24,
			step: 1,
			format: 'H',
			order: 3
		}, {
			key: 'rememberMe',
			schema: 'checkbox',
			label: 'signIn.rememberMe',
			placeholder: 'signIn.rememberMe',
			order: 5
		}]); // !!!
		this.group = this.formService.getGroupFromControls(this.controls); // !!!
		*/
	}

	onSubmit(): void {
		this.submitted = true;
		this.error = null;
		this.busy = true;
		this.userService.tryLogin(this.model).pipe(
			first(),
			finalize(() => this.busy = false),
		).subscribe(
			user => {
				if (user) {
					this.onAuth(user);
				} else {
					this.error = { message: 'Utente inesistente' };
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
