import { ChangeDetectorRef, Injectable, Pipe, PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';

@Pipe({
	name: 'label',
	pure: false,
})

@Injectable({
	providedIn: 'root'
})
export class LabelPipe implements PipeTransform {

	constructor(
		private ref: ChangeDetectorRef,
		protected labelService: LabelService<Label>
	) {
		this.labelService.events.subscribe(
			x => this.ref.markForCheck()
		);
	}

	public transform(key: string, text?: string, params?: any): string {
		// console.log(key, params);
		// return WrappedValue.wrap(this.val);
		const label = this.labelService.getLabel(key, text, params);
		// console.log('label', label, this.labelService.cache);
		return label;
	}

}
