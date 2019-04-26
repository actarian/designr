import { Component, Input, OnInit } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect, ControlSelectOption } from './control-select';

@Component({
	selector: 'control-select-component',
	templateUrl: 'control-select.component.html',
})
export class ControlSelectComponent extends ControlComponent implements OnInit {

	@Input() option: ControlSelect;
	options: ControlSelectOption[] = [];

	constructor(
	) {
		super();
	}

	ngOnInit() {
		this.options$().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(options => this.options = options);
	}

	options$(): Observable<ControlSelectOption[]> {
		const options = this.option.options;
		if (options) {
			if (isObservable(options)) {
				return options;
			} else if (Array.isArray(options)) {
				return of(options);
			} else {
				return of([]);
			}
		} else {
			return of([]);
		}
	}

}
