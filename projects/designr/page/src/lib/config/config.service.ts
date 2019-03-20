import { Inject, Injectable } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	public options: PageConfig;

	constructor(
		@Inject(PAGE_CONFIG) options: PageConfig
	) {
		this.options = new PageConfig(options || {});
	}

}
