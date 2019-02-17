import { DisposableComponent } from '@designr/core';
import { Section } from './section';
export interface SectionInit {
    SectionInit(): void;
}
export declare class SectionComponent extends DisposableComponent {
    section: Section;
}
