import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'control-module',
	template: `<span class="control-module">control {{version}}</span>`,
	styles: []
})
export class ControlModuleComponent implements OnInit {

	version: string = '0.0.11';

	constructor() { }

	ngOnInit() {
	}

}
