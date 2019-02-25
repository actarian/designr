import { DisposableComponent } from '@designr/core';
import { EditorConfig } from '../config/editor.config';
export declare class PanelComponent extends DisposableComponent {
    private platformId;
    private config;
    opened: boolean;
    constructor(platformId: string, config: EditorConfig);
    onKeydown(e: KeyboardEvent): void;
}
