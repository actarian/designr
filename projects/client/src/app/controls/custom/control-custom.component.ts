import { Component, Input, OnInit } from '@angular/core';
import { ControlComponent } from '@designr/control';
import { ControlCustom } from './control-custom';

@Component({
	selector: 'control-custom-component',
	templateUrl: 'control-custom.component.html',
})
export class ControlCustomComponent extends ControlComponent implements OnInit {

	@Input() option: ControlCustom;

	ngOnInit() {
		/*
		this.form.valueChanges.pipe(
			tap(value => {
				value[this.control.key] = value[this.control.key].replace('a', '');
			}),
			takeUntil(this.unsubscribe),
		).subscribe((value) => {
		});
		*/
	}

	onInput(event) {
		// event.target.value = this.form.value[this.control.key];
	}

	/*
	protected onChange(event) {
		event.target.value = this.form.value[this.control.key];
	}
	*/

}
