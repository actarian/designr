import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';

export class Language {
	id?: number;
	name?: string;
	lang?: string;
}

export class CoreTransitionConfig {
	appId: string;

	constructor(options?: CoreTransitionConfig) {
		// console.log('CoreTransitionConfig', options);
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
	loggerErrorStrategy?: LoggerErrorStrategy = LoggerErrorStrategy.Server;
	languages?: Language[] = [{ id: 1, name: 'Italiano', lang: 'it' }];
	origin?: string = '';
	production?: boolean = false;
	public?: string = '';
	transition?: CoreTransitionConfig;
	urlStrategy?: string = '';
	useLang?: boolean = false;
	useMarket?: boolean = false;
	useServiceWorker?: boolean;
	routing?: any; // ExtraOptions

	constructor(options?: CoreConfig) {
		// console.log('CoreConfig', options);
		if (options) {
			Object.assign(this, options);
			this.transition = new CoreTransitionConfig(options.transition);
		} else {
			this.transition = new CoreTransitionConfig();
		}
	}
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('core.config');
