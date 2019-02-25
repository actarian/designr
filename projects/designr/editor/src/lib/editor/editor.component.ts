import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { Page, PageResolver, PageResolverService, PageService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';

@Component({
	selector: 'editor-component',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
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
export class EditorComponent extends DisposableComponent implements AfterViewInit {

	private _pageCopy: Page;
	private _page: Page;

	controls: ControlBase<any>[];
	group: FormGroup;

	editing: boolean = false;
	busy: boolean = false;
	submitted: boolean = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		@Inject(EDITOR_CONFIG) private config: EditorConfig,
		private pageService: PageService,
		private markdownService: MarkdownService,
		private formService: FormService,
		private pageResolverService: PageResolverService,
	) {
		super();
	}

	get page(): Page {
		return this._page;
	}

	set page(page: Page) {
		this._pageCopy = Object.assign({}, page);
		this._page = page;
		if (this._page) {
			this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
			this.group = this.formService.getGroupFromControls(this.controls);
			this.group.valueChanges.subscribe(x => {
				this.onAssign(x); // Object.assign(this._page, x);
			});
		} else {
			this.controls = [];
			this.group = null;
		}
	}

	get componentName(): string {
		if (this._page) {
			const component = this.pageService.options.pages[this._page.component];
			if (component) {
				return component.name;
			}
		}
	}

	getControlsByPage(page: Page): ControlBaseOptions<any>[] {
		return page ? Object.keys(page).filter(key => typeof page[key] !== 'object').map((key: string, i: number) => {
			return {
				key: key,
				value: page[key],
				schema: key === 'description' ? 'markdown' : 'text',
				label: key,
				placeholder: key,
				required: false,
				order: i + 1
			};
		}) : [];
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.pageResolverService.events$.pipe(
				takeUntil(this.unsubscribe)
			).subscribe((resolver: PageResolver) => {
				// console.log('EditorComponent.resolver', resolver);
				this.page = resolver ? resolver.page : null;
			});
		}
	}

	@HostListener('document:keydown', ['$event'])
	onKeydown(e: KeyboardEvent) {
		if (e.key === 'e' && e.ctrlKey) {
			this.editing = this.config.enabled && !this.editing;
			this.editing = !this.editing;
			// console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
		}
	}

	onReset() {
		// console.log('EditorComponent.onReset');
		Object.keys(this.group.controls).forEach(key => {
			this.group.get(key).setValue(this._pageCopy[key]);
		});
		/*
		const keys = this.controls.map(x => x.key);
		keys.forEach(k => {
			// console.log(k, this._page[k], this._pageCopy[k]);
			this._page[k] = this._pageCopy[k];
		});
		*/
	}

	onSubmit(model) {
		// console.log('EditorComponent.onSubmit', model);
		this.onAssign(model);
		// Object.assign(this._page, model);
	}

	onAssign(model) {
		Object.keys(this.group.controls).forEach(key => {
			switch (key) {
				case 'description':
					this._page[key] = this.markdownService.compile(model[key]);
					break;
				default:
					this._page[key] = model[key];
			}
		});
	}

}
