import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlOption, FormService } from '@designr/control';
import { PageComponent } from '@designr/page';
import { Observable, of } from 'rxjs';
import { debounceTime, delay, takeUntil } from 'rxjs/operators';

const CONTACT_OPTIONS = [{
	id: null,
	name: 'Any',
}, {
	id: true,
	name: 'Yes',
}, {
	id: false,
	name: 'No',
}];

@Component({
	selector: 'contact-component',
	templateUrl: 'contact.component.html',
})
export class ContactComponent extends PageComponent implements OnInit {

	options: ControlOption<any>[];
	form: FormGroup;
	submitted: boolean = false;
	busy: boolean = false;
	defaults = {
		password: 'password',
		type: true,
	};

	constructor(
		protected injector: Injector,
		private formService: FormService,
	) {
		super(injector);
	}

	ngOnInit() {
		this.options = this.formService.getOptions([
			{
				key: 'login',
				schema: 'group',
				title: 'Login',
				abstract: 'fill out fields',
				options: [{
					key: 'username',
					schema: 'text',
					label: 'contact.username',
					placeholder: 'contact.usernamePlaceholder',
					required: true,
					exists: this.exists$,
				}, {
					key: 'password',
					schema: 'password',
					label: 'contact.password',
					placeholder: 'contact.passwordPlaceholder',
					required: true,
					minlength: 6,
				}]
			},
			{
				key: 'email',
				schema: 'email',
				label: 'contact.email',
				placeholder: 'contact.emailPlaceholder',
				required: true,
				match: 'emailConfirm',
				reverse: true,
			}, {
				key: 'emailConfirm',
				schema: 'email',
				label: 'contact.emailConfirm',
				placeholder: 'contact.emailConfirmPlaceholder',
				required: true,
				match: 'email',
				// exists: this.exists$,
			},

			{
				schema: 'info',
				title: 'contact.infoTitle',
				abstract: 'contact.infoAbstract',
			},

			{
				key: 'type',
				schema: 'select',
				label: 'contact.type',
				description: 'Lorem ipsum dolor sit amet',
				options: CONTACT_OPTIONS,
				order: 3
			}, {
				key: 'type2',
				schema: 'select',
				label: 'contact.type',
				options: CONTACT_OPTIONS,
				asObject: true,
				order: 3
			},

			{
				schema: 'info',
				title: 'contact.moreInfoTitle',
				abstract: 'contact.moreInfoAbstract',
			},

			{
				key: 'privacy',
				schema: 'checkbox',
				label: 'contact.privacy',
				description: 'Lorem ipsum dolor sit amet',
				requiredTrue: true,
				order: 5,
				type: 'aaa'
			}]);
		this.form = this.formService.getFormGroup(this.options);
		this.form.valueChanges.pipe(
			debounceTime(100),
			takeUntil(this.unsubscribe),
		).subscribe((values) => {
			console.log(values);
		});
		this.form.reset(this.defaults);
	}

	touch(form) {
		form.markAsTouched();
		if (form.controls) {
			Object.keys(form.controls).forEach(k => this.touch(form.controls[k]));
		}
	}

	onValidate(): boolean {
		this.touch(this.form);
		if (isPlatformBrowser(this.platformId)) {
			const wrapper = (document.documentElement || document.body);
			const invalids = Array.from(document.querySelectorAll('.ng-invalid'));
			if (invalids.length) {
				const top = invalids[0].getBoundingClientRect().top;
				wrapper.scrollTop = wrapper.scrollTop + top - 100;
			}
		}
		return this.form.valid;
	}

	exists$(value: any): Observable<boolean> {
		return of(value === 'username').pipe(
			delay(0),
		);
	}

	onReset() {
		console.log('onReset');
		this.form.reset(this.defaults);
	}

	onSubmit(model: any) {
		console.log('onSubmit', model);
	}

}
