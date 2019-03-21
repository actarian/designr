import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'page-module',
	template: `<span class="page-module">page {{version}}</span>`,
	styles: []
})
export class PageModuleComponent implements OnInit {

	version: string = '0.0.6';

	constructor() { }

	ngOnInit() {
	}

}
