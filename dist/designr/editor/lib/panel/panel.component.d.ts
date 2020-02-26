import { DisposableComponent } from '@designr/core';
import { EditorConfig } from '../config/editor.config';
import * as i0 from "@angular/core";
export declare class PanelComponent extends DisposableComponent {
    private platformId;
    private config;
    opened: boolean;
    constructor(platformId: string, config: EditorConfig);
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<PanelComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PanelComponent, "panel-component", never, {}, {}, never>;
}
