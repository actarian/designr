
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';

export class TrustPilotConfig {
	businessunitId: string = '58e253ab0000ff00059fc0fe';
	businessunitName: string = 'www.eurospin-viaggi.it';
}

@Injectable({
	providedIn: 'root'
})
export class TrustPilotService {

	public options: TrustPilotConfig;
	private Trustpilot: any;
	private Trustpilot$: Observable<any>;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private pluginsService: PluginsService,
		private onceService: OnceService,
	) {
		this.init();
	}

	private init(): void {
		if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
			throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
		}
		this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*  call TrustPilotConfig.once() on app component OnInit *
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	once(): Observable<any> {
		if (isPlatformBrowser(this.platformId)) {
			if (this.Trustpilot) {
				return of(this.Trustpilot);
			} else if (this.Trustpilot$) {
				return this.Trustpilot$;
			} else {
				const src = `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`;
				// console.log('TrustPilotConfig.once', src);
				this.Trustpilot$ = this.onceService.script(src).pipe(
					map(x => {
						this.Trustpilot = window['Trustpilot'];
						return this.Trustpilot;
					})
				);
				return this.Trustpilot$;
			}
		} else {
			return of(null);
		}
	}

}
