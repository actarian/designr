import { Type } from '@angular/core';
import { SectionConfig } from '../config/section.config';
import { Section } from './section';
import { SectionComponent } from './section.component';
export declare class SectionService {
    options: SectionConfig;
    constructor(options: SectionConfig);
    resolve(section: Section): Type<SectionComponent>;
}
