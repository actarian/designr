import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'section-module',
	template: `<span class="section-module">section {{version}}</span>`,
	styles: []
})
export class SectionModuleComponent implements OnInit {

	version: string = '0.0.12';

	constructor() { }

	ngOnInit() {
	}

}
