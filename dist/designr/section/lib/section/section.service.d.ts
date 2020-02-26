import { Type } from '@angular/core';
import { SectionConfig } from '../config/section.config';
import { Section } from './section';
import { SectionComponent } from './section.component';
import * as i0 from "@angular/core";
export declare class SectionService {
    options: SectionConfig;
    constructor(options: SectionConfig);
    resolve(section: Section): Type<SectionComponent>;
    static ɵfac: i0.ɵɵFactoryDef<SectionService>;
    static ɵprov: i0.ɵɵInjectableDef<SectionService>;
}
