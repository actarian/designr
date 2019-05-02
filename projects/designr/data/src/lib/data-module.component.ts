import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'data-module',
	template: `<span class="data-module">data {{version}}</span>`,
	styles: []
})
export class DataModuleComponent implements OnInit {

	version: string = '0.0.8';

	constructor() { }

	ngOnInit() {
	}

}
