import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { FacebookService, FacebookUser, GoogleService, GoogleUser } from '@designr/plugins';
import { ModalCompleteEvent, ModalData, ModalService } from '@designr/ui';
import { finalize, first } from 'rxjs/operators';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { AuthSignInComponent } from './auth-sign-in.component';

@Component({
	selector: 'auth-sign-up-component',
	templateUrl: './auth-sign-up.component.html',
	styleUrls: ['./auth-sign-up.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthSignUpComponent extends DisposableComponent implements OnInit {

	controls: ControlBase<any>[];
	form: FormGroup;
	user: User;
	facebook: FacebookUser;
	google: GoogleUser;
	error: any;
	busy: boolean = false;
	submitted: boolean = false;
	exists$: Function;

	constructor(
		private formService: FormService,
		private modalService: ModalService,
		private modalData: ModalData,
		private facebookService: FacebookService,
		private googleService: GoogleService,
		private userService: UserService
	) {
		super();
		// wrap in block function needed for async validators
		this.exists$ = (email: string) => {
			return this.userService.exists(email);
		};
	}

	ngOnInit() {
		this.controls = this.formService.getControlsFromOptions([{
			key: 'firstName',
			schema: 'text',
			label: 'signUp.firstName',
			placeholder: 'signUp.firstName',
			required: true,
			order: 1
		}, {
			key: 'lastName',
			schema: 'text',
			label: 'signUp.lastName',
			placeholder: 'signUp.lastName',
			required: true,
			order: 2
		}, {
			key: 'email',
			schema: 'email',
			label: 'signUp.email',
			placeholder: 'signIn.email',
			required: true,
			match: 'emailConfirm',
			reverse: true,
			order: 3
		}, {
			key: 'emailConfirm',
			schema: 'email',
			label: 'signUp.emailConfirm',
			placeholder: 'signUp.emailConfirm',
			required: true,
			match: 'email',
			order: 4,
		}, {
			key: 'password',
			schema: 'password',
			label: 'signIn.password',
			placeholder: 'signIn.password',
			required: true,
			minlength: 6,
			order: 5
		}]);
		this.form = this.formService.getGroupFromControls(this.controls);
		const data: any = this.modalData;
		if (data) {
			console.log('AuthSignUpComponent.data', data);
			if (data.facebook) {
				this.facebook = data.facebook as FacebookUser;
				this.form.setValue({
					firstName: this.facebook.first_name,
					lastName: this.facebook.last_name,
					email: this.facebook.email,
					emailConfirm: this.facebook.email,
				});
			}
			if (data.google) {
				this.google = data.google as GoogleUser;
				this.form.setValue({
					firstName: this.google.firstName,
					lastName: this.google.lastName,
					email: this.google.email,
					emailConfirm: this.google.email,
				});
			}
		}
	}

	onSubmit(model): void {
		this.error = null;
		this.submitted = true;
		this.busy = true;
		this.userService.signUp(model).pipe(
			first(),
			finalize(() => this.busy = false),
		).subscribe(
			user => this.user = user,
			error => {
				this.error = error;
				this.submitted = false;
			}
		);
	}

	onFacebookLogout(): void {
		this.facebookService.logout().pipe(
			first()
		).subscribe(x => {
			console.log('SignUpComponent.onFacebookLogout', x);
			this.facebook = null;
		});
	}

	onGoogleLogout(): void {
		this.googleService.logout().pipe(
			first()
		).subscribe(x => {
			console.log('SignUpComponent.onGoogleLogout', x);
			this.google = null;
		});
	}

	onSignIn(): void {
		this.modalService.open({ component: AuthSignInComponent }).pipe(
			first(),
		).subscribe(e => {
			if (e instanceof ModalCompleteEvent) {
				console.log('signed');
			}
		});
	}

}
