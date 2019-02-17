import { Type } from '@angular/core';
import { Document, Feature, Image, Taxonomy } from '@designr/core';
import { PageComponent } from './page.component';
export interface Pages {
    [key: string]: Type<PageComponent>;
}
export declare class PageMeta {
    appId?: string;
    author?: string;
    canonical?: string;
    description?: string;
    keywords?: string;
    locale?: string;
    robots?: string;
    title?: string;
    type?: string;
}
export declare class PageIndex implements Document {
    id: number | string;
    slug?: string;
    url?: string;
    name?: string;
    title?: string;
    abstract?: string;
    images?: Image[];
    component?: number | string;
    type?: number | string;
    relationType?: number | string;
    constructor(options?: PageIndex);
}
export declare class PageRelation implements Document {
    id: number | string;
    page: Page;
    type?: number | string;
}
export declare class Page implements Document {
    id: number | string;
    slug?: string;
    url?: string;
    name?: string;
    title?: string;
    abstract?: string;
    description?: string;
    features?: Feature[];
    meta?: PageMeta;
    images?: Image[];
    related?: PageIndex[];
    taxonomies?: Taxonomy[];
    type?: number | string;
    component?: number | string;
    active?: boolean;
    constructor(options?: Page);
    getFeature?(id: number): Feature;
    getFeatures?(type: number, n: number[]): Feature[];
    getFeaturesByTypes?(type: number[]): Feature[];
    getGroupedFeaturesByTypes?(type: number[]): any;
}
