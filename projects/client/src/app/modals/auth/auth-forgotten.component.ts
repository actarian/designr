import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { ModalService } from '@designr/ui';
import { finalize, first } from 'rxjs/operators';
import { UserService } from '../../shared/user/user.service';

@Component({
	selector: 'auth-forgotten-component',
	templateUrl: './auth-forgotten.component.html',
	styleUrls: ['./auth-forgotten.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthForgottenComponent extends DisposableComponent implements OnInit {

	controls: ControlBase<any>[];
	form: FormGroup;
	busy: boolean = false;
	submitted: boolean = false;
	sent: boolean = false;
	error: any;

	constructor(
		private formService: FormService,
		private modalService: ModalService,
		private userService: UserService
	) {
		super();
	}

	ngOnInit() {
		this.controls = this.formService.getControlsFromOptions([{
			key: 'email',
			schema: 'email',
			label: 'signIn.email',
			placeholder: 'signIn.email',
			required: true,
			order: 1
		},]);
		this.form = this.formService.getGroupFromControls(this.controls);
	}

	onSubmit(model): void {
		this.error = null;
		this.submitted = true;
		this.busy = true;
		this.userService.signForgotten(model).pipe(
			first(),
			finalize(() => this.busy = false),
		).subscribe(
			success => this.sent = true,
			error => this.error = error
		);
	}
}
