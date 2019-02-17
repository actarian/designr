import { InjectionToken } from '@angular/core';
import { Sections } from '../section/section';
export declare class SectionConfig {
    sections?: Sections;
    constructor(options?: SectionConfig);
}
export declare const SECTION_CONFIG: InjectionToken<SectionConfig>;
