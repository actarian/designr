import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'core-module',
	template: `<span class="core-module">core {{version}}</span>`,
	styles: []
})
export class CoreModuleComponent implements OnInit {

	version: string = '0.0.1';

	constructor() { }

	ngOnInit() {
	}

}
