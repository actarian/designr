import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions, FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { Page, PageResolver, PageResolverService, PageService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'editor-root-component',
	templateUrl: './editor-root.component.html',
	styleUrls: ['./editor-root.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class EditorRootComponent extends DisposableComponent implements OnInit {

	private _pageCopy: Page;
	private _page: Page;

	controls: ControlBase<any>[];
	group: FormGroup;

	busy: boolean = false;
	submitted: boolean = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
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

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.pageResolverService.events$.pipe(
				takeUntil(this.unsubscribe)
			).subscribe((resolver: PageResolver) => {
				// console.log('EditorRootComponent.resolver', resolver);
				this.page = resolver ? resolver.page : null;
			});
		}
	}

	onReset() {
		// console.log('EditorRootComponent.onReset');
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
		// console.log('EditorRootComponent.onSubmit', model);
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
