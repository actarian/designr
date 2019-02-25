import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';

@Component({
	selector: 'panel-component',
	templateUrl: './panel.component.html',
	styleUrls: ['./panel.component.scss'],
	animations: [
		trigger('openClose', [
			state('open', style({
				opacity: 1,
				transform: 'translateX(0)',
			})),
			state('closed', style({
				opacity: 0.5,
				transform: 'translateX(100%)',
			})),
			transition('open => closed', [
				animate('250ms')
			]),
			transition('closed => open', [
				animate('150ms')
			]),
		]),
	],
	encapsulation: ViewEncapsulation.Emulated,
})
export class PanelComponent extends DisposableComponent {

	opened: boolean = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		@Inject(EDITOR_CONFIG) private config: EditorConfig,
	) {
		super();
	}

	@HostListener('document:keydown', ['$event'])
	onKeydown(e: KeyboardEvent) {
		if (e.key === 'e' && e.ctrlKey) {
			this.opened = this.config.enabled && !this.opened;
			this.opened = !this.opened;
			console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
		}
	}

}
