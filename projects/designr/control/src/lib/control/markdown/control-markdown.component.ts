import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlMarkdown } from './control-markdown';

@Component({
	selector: 'control-markdown-component',
	templateUrl: './control-markdown.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlMarkdownComponent),
		multi: true,
	}],
})
export class ControlMarkdownComponent extends ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlMarkdown;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

}
