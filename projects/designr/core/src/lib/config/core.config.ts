import { InjectionToken, Type } from '@angular/core';
import { PageComponent } from '../pages/page.component';
import { Pages } from '../pages/pages';

export enum AuthStrategy {
	Bearer = 0,
	Cookie = 1,
}

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
	defaultPage?: Type<PageComponent>;
	editor?: boolean;
	enableTracing?: boolean;
	languages?: Language[] = [{ id: 1, name: 'Italiano', lang: 'it' }];
	notFoundPage?: Type<PageComponent>;
	origin?: string = '';
	pages?: Pages = {};
	preboot?: CorePrebootConfig;
	production?: boolean = false;
	public?: string = '';
	transition?: CoreTransitionConfig;
	urlStrategy?: string = '';
	useHash?: boolean = true;
	useLang?: boolean = false;
	useMarket?: boolean = false;
	useServiceWorker?: boolean;

	constructor(options?: CoreConfig) {
		console.log('CoreConfig', options);
		if (options) {
			this.pages = options.pages || {};
			this.preboot = new CorePrebootConfig(options.preboot);
			this.transition = new CoreTransitionConfig(options.transition);
			this.defaultPage = options.defaultPage;
			this.notFoundPage = options.notFoundPage;
		} else {
			this.preboot = new CorePrebootConfig();
			this.transition = new CoreTransitionConfig();
		}
	}
}

export const CORE_CONFIG = new InjectionToken<CoreConfig>('core.config');
