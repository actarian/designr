import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlMarkdown } from './control-markdown';

@Component({
	selector: 'control-markdown-component',
	templateUrl: 'control-markdown.component.html',
})
export class ControlMarkdownComponent extends ControlComponent {

	@Input() option: ControlMarkdown;

}
