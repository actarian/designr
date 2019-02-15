import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth.service';

export class Language {
	id?: number;
	name?: string;
	lang?: string;
}

export class CoreTransitionConfig {
	appId?: string;

	constructor(options?: CoreTransitionConfig) {
		console.log('CoreTransitionConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class CorePrebootConfig {
	appRoot?: string;

	constructor(options?: CorePrebootConfig) {
		console.log('CorePrebootConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export class CoreConfig {
	assets?: string = '';
	authStrategy?: AuthStrategy = AuthStrategy.Cookie;
	defaultLanguage?: string = 'it';
	defaultMarket?: string = 'it';
	languages?: Language[] = [{ id: 1, name: 'Italiano', lang: 'it' }];
	origin?: string = '';
	preboot?: CorePrebootConfig;
	production?: boolean = false;
	public?: string = '';
	transition?: CoreTransitionConfig;
	urlStrategy?: string = '';
	useLang?: boolean = false;
	useMarket?: boolean = false;
	useServiceWorker?: boolean;
	routing?: any; // ExtraOptions

	constructor(options?: CoreConfig) {
		console.log('CoreConfig', options);
		if (options) {
			this.preboot = new CorePrebootConfig(options.preboot);
			this.transition = new CoreTransitionConfig(options.transition);
		} else {
			this.preboot = new CorePrebootConfig();
			this.transition = new CoreTransitionConfig();
		}
	}
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('core.config');
