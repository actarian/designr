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
	defaults = {
		password: 'password',
		type: true,
		type2: {
			id: null,
		}
	};

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
			placeholder: 'contact.emailPlaceholder',
			required: true,
			match: 'emailConfirm',
			reverse: true,
			order: 1
		}, {
			key: 'emailConfirm',
			schema: 'email',
			label: 'contact.emailConfirm',
			placeholder: 'contact.emailConfirmPlaceholder',
			required: true,
			match: 'email',
			order: 2,
		}, {
			key: 'password',
			schema: 'password',
			label: 'contact.password',
			placeholder: 'contact.passwordPlaceholder',
			required: true,
			minlength: 6,
			order: 3
		}, {
			key: 'type',
			schema: 'select',
			label: 'contact.type',
			description: 'Lorem ipsum dolor sit amet',
			options: [{
				id: null,
				name: 'Any',
			}, {
				id: true,
				name: 'Yes',
			}, {
				id: false,
				name: 'No',
			}],
			order: 3
		}, {
			key: 'type2',
			schema: 'select',
			label: 'contact.type',
			options: [{
				id: null,
				name: 'Any',
			}, {
				id: true,
				name: 'Yes',
			}, {
				id: false,
				name: 'No',
			}],
			asObject: true,
			order: 3
		}, {
			key: 'privacy',
			schema: 'checkbox',
			label: 'contact.privacy',
			description: 'Lorem ipsum dolor sit amet',
			requiredTrue: true,
			order: 5,
			type: 'aaa'
		}]);
		this.group = this.formService.getFormGroup(this.options);
		this.group.reset(this.defaults);
	}

	onReset() {
		console.log('onReset');
		this.group.reset(this.defaults);
	}

	onSubmit(model: any) {
		console.log('onSubmit', model);
	}

}
