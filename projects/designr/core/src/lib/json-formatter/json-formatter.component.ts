import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnChanges, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
// require('json-formatter-js').default
import JSONFormatter from 'json-formatter-js';
import { isArray, isObject } from 'util';

@Component({
	selector: 'json-formatter',
	template: `<div #jsonFormatter></div>`,
	styleUrls: ['./json-formatter.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class JsonFormatterComponent implements OnChanges {
	@ViewChild(`jsonFormatter`, { static: true }) input: ElementRef;

	@Input() json: Array<any> | Object | any;

	elementRef: ElementRef;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
	) { }

	ngOnChanges() {
		if (isPlatformBrowser(this.platformId)) {
			if (!isObject(this.json) && !isArray(this.json)) {
				return;
			}
			// console.log('JsonFormatterComponent', this.json);
			if (this.elementRef) {
				this.input.nativeElement.removeChild(this.elementRef.nativeElement);
			}
			// const JSONFormatter = require('json-formatter-js').default;
			const formatter = new JSONFormatter(this.json);
			const elementRef = formatter.render();
			this.input.nativeElement.appendChild(elementRef);
			this.elementRef = new ElementRef(elementRef);
		}
	}
}
