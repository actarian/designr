
import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';

@Injectable({
	providedIn: 'root'
})
export class CoreService {

	public options: CoreConfig;

	constructor(
		@Inject(CORE_CONFIG) options: CoreConfig
	) {
		// console.log('CoreService', options);
		options = options || {};
		// options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
		// options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
		this.options = new CoreConfig(options);
	}

}
