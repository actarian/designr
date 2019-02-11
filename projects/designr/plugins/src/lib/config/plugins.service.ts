
import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';

@Injectable({
	providedIn: 'root'
})
export class PluginsService {

	public options: PluginsConfig;

	constructor(
		@Inject(PLUGINS_CONFIG) options: PluginsConfig
	) {
		console.log('PluginsService', options);
		options = options || {};
		// options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
		// options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
		this.options = new PluginsConfig(options);
	}

}
