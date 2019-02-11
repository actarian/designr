import { ChangeDetectorRef, Injectable, Pipe, PipeTransform } from '@angular/core';
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
		protected translateService: TranslateService
	) {
		// this.translateService.events.subscribe(
		// 	x => this.ref.markForCheck()
		// );
	}

	public transform(key: string, params?: { value: any }): string {
		// const label = this.translateService.getLabel(key, text, params);
		return key;
	}

}
