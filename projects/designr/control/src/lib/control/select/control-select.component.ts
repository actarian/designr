import { Component, Input, OnInit } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ControlComponent } from '../control.component';
import { ControlSelect, ControlSelectOption } from './control-select';

@Component({
	selector: 'control-select-component',
	templateUrl: 'control-select.component.html',
})
export class ControlSelectComponent extends ControlComponent implements OnInit {

	@Input() option: ControlSelect;
	options: ControlSelectOption[] = [];
	getValue: Function = this.getValue_.bind(this);
	compareWith: Function = this.compareWith_.bind(this);

	constructor(
	) {
		super();
	}

	ngOnInit() {
		this.options$().pipe(
			takeUntil(this.unsubscribe),
			tap(options => {
				if (this.option.asObject && this.control.value === null) {
					const firstNullOptions = options.find(x => x.id === null);
					if (firstNullOptions !== undefined) {
						this.control.setValue(firstNullOptions);
					}
				}
			}),
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

	getValue_(item: ControlSelectOption): any {
		return this.option.asObject ? item : item.id;
	}

	compareWith_(a: ControlSelectOption | string | number, b: ControlSelectOption | string | number) {
		if (this.option.asObject) {
			a = a as ControlSelectOption;
			b = b as ControlSelectOption;
			return (b && b.id !== undefined) ? a.id === b.id : a.id === b;
		} else {
			return b ? a === b : a === null;
		}
	}
}
