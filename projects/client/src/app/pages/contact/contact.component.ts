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
			label: 'contact.email',
			placeholder: 'contact.email',
			required: true,
			match: 'emailConfirm',
			reverse: true,
			order: 1
		}, {
			key: 'emailConfirm',
			schema: 'email',
			label: 'contact.emailConfirm',
			placeholder: 'contact.emailConfirm',
			required: true,
			match: 'email',
			order: 2,
		}, {
			key: 'password',
			schema: 'password',
			label: 'contact.password',
			placeholder: 'contact.password',
			required: true,
			minlength: 6,
			order: 3
		}, {
			key: 'type',
			schema: 'select',
			label: 'contact.type',
			options: [{
				label: 'Any',
				value: null,
			}, {
				label: 'Yes',
				value: true,
			}, {
				label: 'No',
				value: false,
			}],
			order: 3
		}, {
			key: 'privacy',
			schema: 'checkbox',
			label: 'contact.privacy',
			placeholder: 'contact.privacy',
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
