import { Document } from '../models/document';
import { Feature } from '../models/feature';
import { Image } from '../models/image';
import { Taxonomy } from '../models/taxonomy';
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
    abstract?: string;
    id: number | string;
    images?: Image[];
    name?: string;
    relationType?: number | string;
    slug?: string;
    title?: string;
    type?: number | string;
    url?: string;
    constructor(options?: PageIndex);
}
export declare class PageRelation implements Document {
    id: number | string;
    page: Page;
    type?: number | string;
}
export declare class Page implements Document {
    abstract?: string;
    active?: boolean;
    component?: number | string;
    description?: string;
    features?: Feature[];
    id: number | string;
    images?: Image[];
    meta?: PageMeta;
    name?: string;
    related?: any[];
    slug?: string;
    taxonomies?: Taxonomy[];
    title?: string;
    type?: number | string;
    url?: string;
    constructor(options?: Page);
    getFeature?(id: number): Feature;
    getFeatures?(type: number, n: number[]): Feature[];
    getFeaturesByTypes?(type: number[]): Feature[];
    getGroupedFeaturesByTypes?(type: number[]): any;
}
