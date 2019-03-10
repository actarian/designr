import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption, FormService } from '@designr/control';
import { PageComponent } from '@designr/page';

@Component({
	selector: 'contact-component',
	templateUrl: 'contact.component.html',
})
export class ContactComponent extends PageComponent implements OnInit {

	options: ControlOption<any>[];
	group: FormGroup;
	submitted: boolean = false;
	busy: boolean = false;

	constructor(
		protected injector: Injector,
		private formService: FormService,
	) {
		super(injector);
	}

	ngOnInit() {
		this.options = this.formService.getOptions([{
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
			minlength: 6,
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
		}]);
		this.group = this.formService.getFormGroup(this.options);
	}

	onReset() {
		console.log('onReset');
	}

	onSubmit(model: any) {
		console.log('onSubmit', model);
	}

}
