import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent, MenuItem, MenuService, RouteService, Translate, TranslateService } from '@designr/core';
import { ModalCompleteEvent, ModalService } from '@designr/ui';
import { takeUntil } from 'rxjs/operators';
import { AuthComponent } from '../../modals/auth/auth.component';
import { UserService } from '../../shared/user/user.service';

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
	public scrolled: boolean;
	public languages: any[];
	public currentLanguage: any;
	public navLanguagesActive: boolean = false;

	constructor(
		private zone: NgZone,
		public routeService: RouteService,
		public translateService: TranslateService<Translate>,
		public menuService: MenuService,
		public userService: UserService,
		public modalService: ModalService,
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
			console.log('HeaderComponent.getLanguages', x);
			this.languages = x;
		});
		this.routeService.language.pipe(
			takeUntil(this.unsubscribe)
		).subscribe(x => {
			// console.log('HeaderComponent.getLanguage', x);
			this.currentLanguage = x;
			this.translateService.lang = x.lang;
		});
		// observe current user
		this.userService.observe().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(user => {
			// console.log('HeaderComponent.user', user);
		});
	}

	onSign(): void {
		this.modalService.open({ component: AuthComponent }).pipe(
			takeUntil(this.unsubscribe)
		).subscribe(e => {
			if (e instanceof ModalCompleteEvent) {
				// console.log('signed');
			}
		});
	}

	onSignOut(): void {
		this.userService.signOut().subscribe(success => console.log(success));
	}

	onScroll(event) {
		// console.log('HeaderComponent', event.scrollTop);
		const scrolled = event.scrollTop > 100;
		if (this.scrolled !== scrolled) {
			this.zone.run(() => {
				this.scrolled = scrolled;
			});
		}
	}

}
