import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';

@Pipe({
	name: 'label',
	pure: false
})

@Injectable({
	providedIn: 'root'
})
export class LabelPipe implements PipeTransform {

	constructor(
		private labelService: LabelService<Label>,
	) { }

	transform(key: string, defaultValue?: string, params?: any): string | undefined {
		return this.labelService.transform(key, defaultValue, params);
	}

}
