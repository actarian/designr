import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'editor-module',
	template: `<span class="editor-module">editor {{version}}</span>`,
	styles: []
})
export class EditorModuleComponent implements OnInit {

	version: string = '0.0.6';

	constructor() { }

	ngOnInit() {
	}

	// <ng-container loadModule="widgetSettings"></ng-container>

}
