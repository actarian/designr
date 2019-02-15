import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page, PageIndex } from '@designr/page';

@Component({
	selector: 'related-component',
	templateUrl: 'related.component.html',
	styleUrls: ['related.component.scss'],
})
export class RelatedComponent extends DisposableComponent {

	@Input() page: Page;
	@Input() type?: number = -1;

	get relatedItems(): PageIndex[] {
		return this.page.related.filter(x => this.type === -1 || x.relationType === this.type);
	}

}
