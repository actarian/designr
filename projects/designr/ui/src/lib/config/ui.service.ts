
import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';

@Injectable({
	providedIn: 'root'
})
export class UIService {

	public options: UIConfig;

	constructor(
		@Inject(UI_CONFIG) options: UIConfig
	) {
		// console.log('UIService', options);
		options = options || {};
		this.options = new UIConfig(options);
	}

}
