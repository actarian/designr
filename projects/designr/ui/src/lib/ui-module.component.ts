import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ui-module',
	template: `<span class="ui-module">ui {{version}}</span>`,
	styles: []
})
export class UIModuleComponent implements OnInit {

	version: string = '0.0.2';

	constructor() { }

	ngOnInit() {
	}

}
