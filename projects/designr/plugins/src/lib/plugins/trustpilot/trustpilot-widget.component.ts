import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { TrustPilotConfig, TrustPilotService } from './trustpilot.service';

export class TrustPilotWidgetOptions {
	templateId?: string;
	businessunitId?: string;
	businessunitName?: string;
	locale?: string = 'it-IT';
	sku?: string;
	styleHeight?: string = '350px';
	styleWidth?: string = '100%';
	theme?: string = 'light';
	group?: string = 'on';
	stars?: string = '1,2,3,4,5';

	constructor(
		options?: TrustPilotWidgetOptions,
	) {
		if (options) {
			Object.assign(this, options);
		}
	}

	static newFromConfig(options?: TrustPilotConfig): TrustPilotWidgetOptions {
		return new TrustPilotWidgetOptions(options);
	}

	set?(options?: TrustPilotWidgetOptions): TrustPilotWidgetOptions {
		if (options) {
			Object.assign(this, options);
		}
		return this;
	}
}

@Component({
	selector: 'plugins-trustpilot-widget-component',
	templateUrl: './trustpilot-widget.component.html',
	styleUrls: ['./trustpilot-widget.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class TrustPilotWidgetComponent extends DisposableComponent implements AfterViewInit {

	loaded: boolean;
	trustPilotOptions: TrustPilotConfig;
	@Input() options?: TrustPilotWidgetOptions;
	@Input() sku?: string;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private pluginsService: PluginsService,
		private elementRef: ElementRef,
		private trustPilot: TrustPilotService,
	) {
		super();
		this.init();
	}

	private init(): void {
		if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
			throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
		}
		this.trustPilotOptions = this.pluginsService.options.trustPilot;
		this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
	}

	ngAfterViewInit() {
		// console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
		if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
			if (!this.loaded) {
				this.trustPilot.once().pipe(
					takeUntil(this.unsubscribe)
				).subscribe(Trustpilot => {
					Trustpilot.loadFromElement(this.elementRef.nativeElement.firstElementChild);
					this.loaded = true;
				});
			}
		}
	}

}
