import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlMarkdown } from './control-markdown';
export declare class ControlMarkdownComponent extends ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlMarkdown;
    constructor(renderer: Renderer2);
}
