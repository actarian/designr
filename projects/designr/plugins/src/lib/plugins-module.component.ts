import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'plugins-module',
	template: `<span class="plugins-module">plugins {{version}}</span>`,
	styles: []
})
export class PluginsModuleComponent implements OnInit {

	version: string = '0.0.3';

	constructor() { }

	ngOnInit() {
	}

}
