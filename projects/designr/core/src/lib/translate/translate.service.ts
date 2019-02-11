import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';

export class Translate {
	id: string;
	value?: string;
	defaultValue?: string;
}

@Injectable({
	providedIn: 'root'
})
export class TranslateService extends ApiService<Translate>  {

	get collection(): string {
		return '/api/translate';
	}

	constructor(
		protected injector: Injector
	) {
		super(injector);
	}

	public use(lang: string) {

	}

	public setDefaultLang(lang: string) {

	}

	public addLangs(lang: string[]) {

	}

	public getBrowserLang(): string {
		return 'it';
	}
}
