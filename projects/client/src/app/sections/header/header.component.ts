import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent, MenuItem, MenuService, RouteService } from '@designr/core';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'header-component',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	animations: [
		trigger('fadeIn', [
			state('in', style({ opacity: 1, transform: 'scaleY(1)' })),
			transition('void => *', [
				style({ opacity: 0, transform: 'scaleY(0)' }),
				animate('.5s cubic-bezier(.57, 0.08, .18, .99)')
			]),
			transition('* => void', [
				animate('.3s cubic-bezier(.57, 0.08, .18, .99)', style({ opacity: 0, transform: 'scaleY(0)' }))
			])
		])
	]
})

export class HeaderComponent extends DisposableComponent implements OnInit {

	public menu: MenuItem[];
	public languages: any[];
	public currentLanguage: any;

	constructor(
		public routeService: RouteService,
		private menuService: MenuService,
	) {
		super();
	}

	ngOnInit() {
		this.menuService.stateGet().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('HeaderComponent.menuService.stateGet', x);
			this.menu = x;
		});
		this.routeService.languages.pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('HeaderComponent.getLanguages', x);
			this.languages = x;
		});
		this.routeService.language.pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('HeaderComponent.getLanguage', x);
			this.currentLanguage = x;
		});
	}

}
