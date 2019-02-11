import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Logger } from './logger';

@Component({
	selector: 'core-logger',
	templateUrl: './logger.component.html',
	styleUrls: ['./logger.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class LoggerComponent implements OnInit {
	constructor(public logger: Logger) { }

	ngOnInit() {
	}
}
