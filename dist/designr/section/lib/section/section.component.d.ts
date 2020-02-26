import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import * as i0 from "@angular/core";
export interface SectionInit {
    SectionInit(): void;
}
export declare class SectionComponent extends DisposableComponent {
    section: Section;
    static ɵfac: i0.ɵɵFactoryDef<SectionComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SectionComponent, "core-section", never, { "section": "section"; }, {}, never>;
}
