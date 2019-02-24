import { ChangeDetectorRef, Injectable, Pipe, PipeTransform } from '@angular/core';
import { Translate } from './translate';
import { TranslateService } from './translate.service';

@Pipe({
	name: 'translate',
	pure: false,
})

@Injectable({
	providedIn: 'root'
})
export class TranslatePipe implements PipeTransform {

	constructor(
		private ref: ChangeDetectorRef,
		protected translateService: TranslateService<Translate>
	) {
		this.translateService.events.subscribe(
			x => this.ref.markForCheck()
		);
	}

	public transform(key: string, text?: string, params?: any): string {
		// console.log(key, params);
		const label = this.translateService.getTranslate(key, text, params);
		// console.log('label', label, this.translateService.cache);
		return label;
	}

}
