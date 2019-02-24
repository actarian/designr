import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { ModalService } from '@designr/ui';
import { finalize, first } from 'rxjs/operators';
import { UserSignForgotten } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';

@Component({
	selector: 'auth-forgotten-component',
	templateUrl: './auth-forgotten.component.html',
	styleUrls: ['./auth-forgotten.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class AuthForgottenComponent extends DisposableComponent implements OnInit {

	model: UserSignForgotten = new UserSignForgotten();
	busy: boolean = false;
	submitted: boolean = false;
	sent: boolean = false;
	error: any;

	constructor(
		private modalService: ModalService,
		private userService: UserService
	) {
		super();
	}

	ngOnInit() {

	}

	onSubmit(): void {
		this.error = null;
		this.submitted = true;
		this.busy = true;
		this.userService.signForgotten(this.model).pipe(
			first(),
			finalize(() => this.busy = false),
		).subscribe(
			success => this.sent = true,
			error => this.error = error
		);
	}
}
